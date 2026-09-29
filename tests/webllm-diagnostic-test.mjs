import {classifyWebLLMError,serializeWebLLMError} from '../js/modules/webllm.js';
const e=new Error("Failed to execute 'requestDevice' on 'GPUAdapter': D3D12 create command queue failed with DXGI_ERROR_DEVICE_REMOVED (0x887A0005)");
const c=classifyWebLLMError(e);
if(c.code!=='gpu-device-removed'||!c.fatalGPU)throw new Error('DXGI classification failed');
const u=serializeWebLLMError({name:'OddWorkerError',detail:'x'});
if(!u.message)throw new Error('opaque error serialization failed');
console.log('webllm-diagnostic-test PASS', {code:c.code,fatal:c.fatalGPU,opaque:u.message});
