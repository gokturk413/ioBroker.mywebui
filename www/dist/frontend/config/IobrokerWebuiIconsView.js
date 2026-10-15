const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x7f))/0x1+parseInt(j(0x76))/0x2*(-parseInt(j(0x70))/0x3)+parseInt(j(0x8e))/0x4+parseInt(j(0x8f))/0x5+-parseInt(j(0x8d))/0x6+parseInt(j(0x74))/0x7+-parseInt(j(0x83))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x18a58));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static ['style']=css`
        :host {
            box-sizing: border-box;
            background: rgb(44, 46, 53);
        }
        
        #root {
            display: flex;
            flex-wrap: wrap;
            overflow-x: hidden;
            overflow-y: scroll;
            align-content: flex-start;
            gap: 5px;
            height: calc(100% - 20px);
            padding: 10px;
        }

        #root div {
            & img {
                width: 40px;
                height: 40px;
                user-drag: none;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--text-color, white);
            font-size: 10px;
            width: 40px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        `;static ['is']=k(0x7a);static ['properties']={};['_root'];[k(0x71)];constructor(){const l=k;super(),super[l(0x7d)](),this[l(0x84)]=this[l(0x7e)](l(0x8a));}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[m(0x88)]()){let d=c[m(0x87)];;const e=document[m(0x85)]('div'),g=document['createElement'](m(0x7c));g['src']=d,g['draggable']=![],e['title']=c[m(0x6f)],e[m(0x82)]=!![],e[m(0x91)](g),e['appendChild'](document['createTextNode'](c[m(0x6f)])),e['ondragstart']=h=>{const n=m,i={'tag':n(0x7c),'defaultAttributes':{'src':d}};return h[n(0x8b)][n(0x7b)]=n(0x75),h[n(0x8b)]['setData']('text/plain',d),h[n(0x8b)]['setData'](dragDropFormatNameElementDefinition,JSON[n(0x90)](i)),h[n(0x8b)]['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x81),'text':d})),h[n(0x8b)][n(0x77)]='copy',!![];},this[m(0x84)][m(0x91)](e);}}async*[k(0x88)](){const o=k,c=await iobrokerHandler[o(0x79)]();for(const d of c){yield*this[o(0x80)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g[p(0x8c)])yield*this[p(0x80)](c,d+'/'+g[p(0x86)]);else{if(!g[p(0x86)]['endsWith'](p(0x72))){if(this['_filter']){if(!g[p(0x86)]['match'](this['_filter']))continue;}const h=g['file'][p(0x73)]('.'),i=g['file'][p(0x89)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}function a(){const q=['_filter','.html','lastIndexOf','626143tjzled','all','4442MVMbmw','dropEffect','define','getIconAdapterFoldernames','iobroker-webui-icons-view','effectAllowed','img','_restoreCachedInititalValues','_getDomElement','50636KoppyV','_readFolder','icon','draggable','574416KNzjSu','_root','createElement','file','path','iconNames','substring','root','dataTransfer','isDir','373020QHcMLa','592824lRdMnC','210680AaeLdo','stringify','appendChild','name','129CIMZNV'];a=function(){return q;};return a();}function b(c,d){c=c-0x6f;const e=a();let f=e[c];return f;}customElements[k(0x78)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);