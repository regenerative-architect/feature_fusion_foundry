/**
 * OPTIONAL PRODUCTION PATTERN — not required by the static live demo.
 *
 * Illustrates the boundary for an authoritative room coordinator on an edge
 * platform with stateful room objects. It intentionally avoids embedding any
 * credentials or deployment-specific bindings. Adapt against the CURRENT
 * platform documentation before deployment.
 *
 * Responsibilities suited to this layer:
 * - room admission and membership
 * - authoritative permissions / validation
 * - event sequencing and idempotency
 * - durable snapshots / recovery metadata
 * - moderation state and rate limits
 *
 * Bulk collaborative document state can still use CRDTs and/or direct P2P.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const match = url.pathname.match(/^\/rooms\/([^/]+)$/);
    if (!match) return new Response('Expected /rooms/:id', {status: 404});
    const roomId = decodeURIComponent(match[1]);
    // Example Durable Object style routing; exact binding is deployment-specific.
    if (!env.ROOMS?.idFromName || !env.ROOMS?.get) {
      return new Response('ROOMS binding not configured', {status: 501});
    }
    const id = env.ROOMS.idFromName(roomId);
    return env.ROOMS.get(id).fetch(request);
  }
};

export class RoomCoordinator {
  constructor(state) {
    this.state = state;
    this.sessions = new Set();
  }
  async fetch(request) {
    if (request.headers.get('Upgrade') !== 'websocket') {
      return Response.json({ok:true, role:'authoritative-room-coordinator'});
    }
    const pair = new WebSocketPair();
    const client = pair[0], server = pair[1];
    server.accept();
    this.sessions.add(server);
    server.addEventListener('message', async event => {
      let msg;
      try { msg = JSON.parse(event.data); } catch { return server.send(JSON.stringify({type:'error', error:'invalid_json'})); }
      if (!msg?.id || !msg?.type) return server.send(JSON.stringify({type:'error', error:'invalid_event'}));
      // Production: authenticate, authorize, rate-limit, validate schema, check
      // idempotency/sequence, persist canonical event, then broadcast.
      const out = JSON.stringify({type:'event', event:msg});
      for (const peer of this.sessions) if (peer.readyState === 1) peer.send(out);
    });
    const cleanup = () => this.sessions.delete(server);
    server.addEventListener('close', cleanup); server.addEventListener('error', cleanup);
    return new Response(null, {status:101, webSocket:client});
  }
}
