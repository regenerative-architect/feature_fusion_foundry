const TRYSTERO='https://esm.run/trystero@0.25.3';
let room=null,action=null,p2pApi=null;
export async function joinP2PRoom({roomId,password,onPeerJoin,onPeerLeave,onMessage}){
  if(room) leaveP2PRoom();
  p2pApi=p2pApi||await import(TRYSTERO);
  const config={appId:'feature-fusion-foundry-v1'};
  if(password) config.password=password;
  room=p2pApi.joinRoom(config,roomId,{onJoinError:error=>onMessage?.({system:true,text:`Join warning: ${error?.message||error}`})});
  room.onPeerJoin=peerId=>onPeerJoin?.(peerId);
  room.onPeerLeave=peerId=>onPeerLeave?.(peerId);
  action=room.makeAction('fusion-chat');
  action.onMessage=(data,{peerId})=>onMessage?.({...data,peerId});
  return {selfId:p2pApi.selfId,version:'0.25.3'};
}
export function sendP2P(data,target){if(!action)throw new Error('Not connected');return action.send(data,target?{target}:undefined)}
export function leaveP2PRoom(){try{room?.leave()}finally{room=null;action=null}}
export function isJoined(){return !!room}
