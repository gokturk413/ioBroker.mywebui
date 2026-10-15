const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x11e))/0x1+-parseInt(j(0x12d))/0x2+-parseInt(j(0x120))/0x3*(parseInt(j(0x12f))/0x4)+-parseInt(j(0x132))/0x5+parseInt(j(0x12b))/0x6*(parseInt(j(0x123))/0x7)+parseInt(j(0x13a))/0x8*(parseInt(j(0x135))/0x9)+parseInt(j(0x133))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x35b0b));function a(){const q=['324692riGfWu','draggable','69UlJkom','connection','_parseAttributesToProperties','31059ouSBtY','define','properties','_filter','appendChild','.html','img','match','162qcJlOb','iconNames','446584FeFqGL','file','20996PPepJZ','root','createElement','1523500NOjbKo','7320320OzwOio','_root','279405kjiJII','_readFolder','icon','dataTransfer','setData','88OVNoTZ','substring','stringify','endsWith','createTextNode','name','_getDomElement','_restoreCachedInititalValues'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x11e;const e=a();let f=e[c];return f;}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x125)]={};['_root'];[k(0x126)];constructor(){const l=k;super(),super[l(0x141)](),this[l(0x134)]=this[l(0x140)](l(0x130));}async['ready'](){const m=k;this[m(0x122)](),this['_assignEvents']();for await(const c of this[m(0x12c)]()){let d=c['path'];;const e=document[m(0x131)]('div'),g=document[m(0x131)](m(0x129));g['src']=d,g[m(0x11f)]=![],e['title']=c['name'],e['draggable']=!![],e['appendChild'](g),e[m(0x127)](document[m(0x13e)](c[m(0x13f)])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']='all',h[n(0x138)][n(0x139)]('text/plain',d),h[n(0x138)]['setData'](dragDropFormatNameElementDefinition,JSON[n(0x13c)](i)),h['dataTransfer'][n(0x139)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x137),'text':d})),h['dataTransfer']['dropEffect']='copy',!![];},this['_root'][m(0x127)](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x136)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler[p(0x121)]['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g['file'][p(0x13d)](p(0x128))){if(this['_filter']){if(!g['file'][p(0x12a)](this[p(0x126)]))continue;}const h=g[p(0x12e)]['lastIndexOf']('.'),i=g[p(0x12e)][p(0x13b)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0x124)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);