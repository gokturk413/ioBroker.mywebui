"use strict";
const importMapRuntime = {
    "imports": {
        "@node-projects/css-parser": "./libs/@node-projects/css-parser/dist/index.js",
        "@node-projects/": "./libs/@node-projects/",
        "@node-projects/web-component-designer": "./libs/@gokturk413/web-component-designer/dist/index.js",
        "@node-projects/base-custom-webcomponent": "./libs/@gokturk413/base-custom-webcomponent/dist/index.js",
        "@node-projects/web-component-designer-visualization-addons": "./libs/@gokturk413/web-component-designer-visualization-addons/dist/index.js",
        "@node-projects/web-component-designer-visualization-addons/": "./libs/@gokturk413/web-component-designer-visualization-addons/",
        "@gokturk413/": "./libs/@gokturk413/",
        "@gokturk413/web-component-designer": "./libs/@gokturk413/web-component-designer/dist/index.js",
        "@gokturk413/web-component-designer-visualization-addons": "./libs/@gokturk413/web-component-designer-visualization-addons/dist/index.js",
        "@gokturk413/base-custom-webcomponent": "./libs/@gokturk413/base-custom-webcomponent/dist/index.js",
        "@gokturk413/base-custom-webcomponent/": "./libs/@gokturk413/base-custom-webcomponent/",
        "@gokturk413/propertygrid.webcomponent": "./libs/@gokturk413/propertygrid.webcomponent/dist/PropertyGrid.js",
        "@gokturk413/propertygrid.webcomponent/": "./libs/@gokturk413/propertygrid.webcomponent/",
        "@iobroker/socket-client/": "./node_modules/@iobroker/socket-client/",
        "@iobroker/socket-client": "./node_modules/@iobroker/socket-client/dist/esm/index.js",
        "tslib": "./node_modules/tslib/tslib.es6.mjs",
        "long": "./node_modules/long/index.js",
        "@adobe/css-tools": "./node_modules/@adobe/css-tools/dist/esm/adobe-css-tools.mjs",
        "three": "./3d-lib/three.module.js",
        "three/webgpu": "./3d-lib/three.webgpu.js",
        "three/addons/": "./3d-lib/jsm/",
        "three-gpu-pathtracer": "data:text/javascript,export class WebGLPathTracer{constructor(){}setScene(){}renderSample(){}updateCamera(){}updateEnvironment(){}updateMaterials(){}get samples(){return 0;}filterGlossyFactor=0.5;}",
        "three-mesh-bvh": "data:text/javascript,export const MeshBVH={};export const acceleratedRaycast=()=>{};export const computeBoundsTree=()=>{};export const disposeBoundsTree=()=>{};"
    }
};
//@ts-ignore
importShim.addImportMap(importMapRuntime);
