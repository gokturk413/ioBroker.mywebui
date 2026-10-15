const i=b;function a(){const r=['40zHTpjL','80oaJJEw','define','designerCanvas','128162VoMjxK','_toolButtonsElem','executeCommand','appendChild','globalContext','452475HqtKLj','popup','4861572XjvoOB','createElement','5268715YVedLR','_serviceContainer','72ARNfKo','name','onwheel','setFillBrush','designerView','_popupContainer','node-projects-designer-toolbar','412198XABgrC','innerHTML','3242604jUnahd','designViewToolbarButtons','setActiveTool','setStrokeColor','newValue','7HwXhAN','4IzMVEx','_getDomElement','provideButton','children','setStrokeThickness','437074qYOvmX'];a=function(){return r;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x94))/0x1+parseInt(h(0xa6))/0x2*(-parseInt(h(0x8d))/0x3)+parseInt(h(0x9c))/0x4*(parseInt(h(0xaf))/0x5)+-parseInt(h(0xad))/0x6*(-parseInt(h(0x9b))/0x7)+-parseInt(h(0xa3))/0x8*(-parseInt(h(0xab))/0x9)+-parseInt(h(0xa2))/0xa*(-parseInt(h(0xa1))/0xb)+parseInt(h(0x96))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xce7c6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x8d;const e=a();let f=e[c];return f;}import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
        node-projects-designer-tools-buttons {
            height: 100%;
            width: 100%;
        }        

        #toolButtons {
          scrollbar-width: none; /* for Firefox */
          overflow-y: auto;
          height: 100%;
        }
        #toolButtons::-webkit-scrollbar {
          display: none; /* for Chrome, Safari, and Opera */
        }

        #popup {
            position: absolute;
            top: calc(0px + 10px);
            height: 100%;
            left: calc(24px + 4px + 10px);
        }`;static ['template']=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;[i(0xa7)];['_serviceContainer'];[i(0x92)];[i(0x91)];constructor(){const j=i;super(),this['_toolButtonsElem']=this['_getDomElement']('toolButtons'),this['_toolButtonsElem'][j(0x8f)]=c=>c['stopPropagation'](),this[j(0x92)]=this[j(0x9d)](j(0xac));}['initialize'](c,d){const k=i;this['_serviceContainer']=c,this[k(0x91)]=d;for(let e of this[k(0xb0)][k(0x97)]){this['_toolButtonsElem'][k(0xa9)](e[k(0x9e)](d[k(0xa5)]));}this['_serviceContainer'][k(0xaa)]['onToolChanged']['on'](f=>{const l=k;for(const g of this[l(0xa7)][l(0x9f)]){g instanceof DesignerToolbarButton&&g[l(0x98)](f[l(0x9a)][l(0x8e)]);}});}['showPopup'](c){const m=i;if(this['_popupContainer']['children']['length'])this[m(0x92)]['innerHTML']='';else{let d;if(typeof c['popup']==='string')d=document[m(0xae)](c['popup']);else d=new c[(m(0xac))]();this[m(0x92)][m(0xa9)](d);}}['setTool'](c){const n=i;this['_popupContainer'][n(0x9f)]['length']&&(this['_popupContainer']['innerHTML']=''),this['designerView']['designerCanvas'][n(0xa8)]({'type':CommandType['setTool'],'parameter':c});}[i(0x99)](c){const o=i;this['_popupContainer']['children']['length']&&(this[o(0x92)][o(0x95)]=''),this['designerView']['designerCanvas']['executeCommand']({'type':CommandType['setStrokeColor'],'parameter':c});}['setFillBrush'](c){const p=i;this['_popupContainer'][p(0x9f)]['length']&&(this[p(0x92)][p(0x95)]=''),this['designerView']['designerCanvas']['executeCommand']({'type':CommandType[p(0x90)],'parameter':c});}['setStrokeThickness'](c){const q=i;this[q(0x92)]['children']['length']&&(this['_popupContainer']['innerHTML']=''),this[q(0x91)]['designerCanvas']['executeCommand']({'type':CommandType[q(0xa0)],'parameter':c});}}customElements[i(0xa4)](i(0x93),DesignerToolbar);