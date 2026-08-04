import observer from "/mywebui/dist/frontend/widgets/customElementsObserver.js";
let p = [];


await Promise.allSettled(p)

observer.setCurrentLib('@gokturk413/svg-popup-dialog');
try {
await import('/mywebui.0.widgets/node_modules/@gokturk413/svg-popup-dialog/dist/svg_popup.js');
}catch (err) { console.error('error during import of @gokturk413/svg-popup-dialog,/mywebui.0.widgets/node_modules/@gokturk413/svg-popup-dialog/dist/svg_popup.js', err); }
observer.finishedCurrentLib();