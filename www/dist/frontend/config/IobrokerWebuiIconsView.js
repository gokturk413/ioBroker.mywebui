function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x163))/0x1*(-parseInt(j(0x16d))/0x2)+parseInt(j(0x174))/0x3+-parseInt(j(0x170))/0x4*(-parseInt(j(0x177))/0x5)+-parseInt(j(0x168))/0x6*(-parseInt(j(0x17b))/0x7)+parseInt(j(0x173))/0x8+-parseInt(j(0x16b))/0x9+-parseInt(j(0x180))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbe0e8));function a(){const q=['_filter','file','7477398bUiZWQ','template','20ieRVgo','iobroker-webui-icons-view','getIconAdapterFoldernames','57532XYIrei','_assignEvents','.html','8438608iobCDL','4057554KjiSOj','_restoreCachedInititalValues','dataTransfer','55ZSoymY','dropEffect','_readFolder','setData','7EMWqoR','ready','connection','path','img','18847470hbZbWN','name','stringify','createTextNode','draggable','endsWith','83307kHqkWK','isDir','ondragstart','define','appendChild','572484WNhJlW'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x16c)]=html`
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
        `;static ['is']=k(0x16e);static ['properties']={};['_root'];[k(0x169)];constructor(){const l=k;super(),super[l(0x175)](),this['_root']=this['_getDomElement']('root');}async[k(0x17c)](){const m=k;this['_parseAttributesToProperties'](),this[m(0x171)]();for await(const c of this['iconNames']()){let d=c[m(0x17e)];;const e=document['createElement']('div'),g=document['createElement'](m(0x17f));g['src']=d,g[m(0x184)]=![],e['title']=c[m(0x181)],e['draggable']=!![],e[m(0x167)](g),e[m(0x167)](document[m(0x183)](c['name'])),e[m(0x165)]=h=>{const n=m,i={'tag':n(0x17f),'defaultAttributes':{'src':d}};return h[n(0x176)]['effectAllowed']='all',h[n(0x176)][n(0x17a)]('text/plain',d),h['dataTransfer'][n(0x17a)](dragDropFormatNameElementDefinition,JSON[n(0x182)](i)),h[n(0x176)][n(0x17a)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h[n(0x176)][n(0x178)]='copy',!![];},this['_root'][m(0x167)](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0x16f)]();for(const d of c){yield*this[o(0x179)](d,'');}}async*[k(0x179)](c,d){const p=k,e=await iobrokerHandler[p(0x17d)]['readDir'](c,d);for(const g of e){if(g[p(0x164)])yield*this[p(0x179)](c,d+'/'+g['file']);else{if(!g['file'][p(0x185)](p(0x172))){if(this[p(0x169)]){if(!g['file']['match'](this[p(0x169)]))continue;}const h=g[p(0x16a)]['lastIndexOf']('.'),i=g[p(0x16a)]['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x16a)]};}}}}}customElements[k(0x166)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);