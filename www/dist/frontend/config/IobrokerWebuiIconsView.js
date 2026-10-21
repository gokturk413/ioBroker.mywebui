const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x12c))/0x1+parseInt(j(0x10d))/0x2*(parseInt(j(0x10e))/0x3)+-parseInt(j(0x10a))/0x4+parseInt(j(0x120))/0x5+-parseInt(j(0x112))/0x6+-parseInt(j(0x121))/0x7*(-parseInt(j(0x11e))/0x8)+parseInt(j(0x127))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1994a));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x10a;const e=a();let f=e[c];return f;}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x119)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x12a)]={};[k(0x11b)];['_filter'];constructor(){const l=k;super(),super[l(0x111)](),this['_root']=this['_getDomElement']('root');}async[k(0x129)](){const m=k;this[m(0x11c)](),this[m(0x115)]();for await(const c of this['iconNames']()){let d=c['path'];;const e=document['createElement'](m(0x12d)),g=document[m(0x110)]('img');g['src']=d,g[m(0x12b)]=![],e[m(0x11f)]=c['name'],e['draggable']=!![],e[m(0x11a)](g),e[m(0x11a)](document['createTextNode'](c['name'])),e['ondragstart']=h=>{const n=m,i={'tag':n(0x126),'defaultAttributes':{'src':d}};return h[n(0x11d)][n(0x123)]='all',h[n(0x11d)][n(0x125)]('text/plain',d),h[n(0x11d)]['setData'](dragDropFormatNameElementDefinition,JSON[n(0x122)](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x10b),'text':d})),h[n(0x11d)][n(0x10c)]=n(0x117),!![];},this[m(0x11b)][m(0x11a)](e);}}async*[k(0x124)](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x116)](d,'');}}async*[k(0x116)](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this[p(0x116)](c,d+'/'+g[p(0x113)]);else{if(!g['file']['endsWith'](p(0x128))){if(this['_filter']){if(!g['file']['match'](this[p(0x118)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g['file'][p(0x114)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x113)]};}}}}}customElements[k(0x10f)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);function a(){const q=['dataTransfer','8eNHYdA','title','501900INIhvu','311136pMEGgr','stringify','effectAllowed','iconNames','setData','img','1314450KGYPDU','.html','ready','properties','draggable','193146ZQWHBL','div','278932PxCMHw','icon','dropEffect','12358vYIPSL','54IffRJY','define','createElement','_restoreCachedInititalValues','206658vIYjCG','file','substring','_assignEvents','_readFolder','copy','_filter','template','appendChild','_root','_parseAttributesToProperties'];a=function(){return q;};return a();}