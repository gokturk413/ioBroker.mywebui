// three/webgpu stub — re-exports standard Three.js + stubs WebGPU-only classes
export * from './three.module.js';
import { WebGLRenderer } from './three.module.js';

// WebGPURenderer stub: falls back to WebGLRenderer so the editor doesn't crash
export class WebGPURenderer extends WebGLRenderer {
    constructor(params) { super(params); }
    async init() {}
}
