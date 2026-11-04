"use strict";
const importMapRuntime = {
    "imports": {
        "@node-projects/": "./libs/@node-projects/",
        "@node-projects/web-component-designer": "./libs/@gokturk413/web-component-designer/dist/index.js",
        "@node-projects/base-custom-webcomponent": "./libs/@node-projects/base-custom-webcomponent/dist/index.js",
        "@node-projects/web-component-designer-visualization-addons": "./libs/@gokturk413/web-component-designer-visualization-addons/dist/index.js",
        "@gokturk413/": "./libs/@gokturk413/",
        "@gokturk413/web-component-designer": "./libs/@gokturk413/web-component-designer/dist/index.js",
        "@gokturk413/web-component-designer-visualization-addons": "./libs/@gokturk413/web-component-designer-visualization-addons/dist/index.js",
        "@iobroker/socket-client/": "./node_modules/@iobroker/socket-client/",
        "@iobroker/socket-client": "./node_modules/@iobroker/socket-client/dist/esm/index.js",
        "tslib": "./node_modules/tslib/tslib.es6.mjs",
        "long": "./node_modules/long/index.js",
        "@adobe/css-tools": "./node_modules/@adobe/css-tools/dist/esm/adobe-css-tools.mjs"
    }
};
//@ts-ignore
importShim.addImportMap(importMapRuntime);
