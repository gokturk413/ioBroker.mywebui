const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1b7))/0x1+-parseInt(j(0x1c7))/0x2*(-parseInt(j(0x1d3))/0x3)+parseInt(j(0x1b8))/0x4+-parseInt(j(0x1c2))/0x5*(parseInt(j(0x1d4))/0x6)+parseInt(j(0x1b5))/0x7*(parseInt(j(0x1bc))/0x8)+-parseInt(j(0x1b4))/0x9+parseInt(j(0x1c6))/0xa*(-parseInt(j(0x1b6))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd6370));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const q=['31854EPydQJ','root','title','_filter','5814351GftXtr','7NTnvrP','10087ALWaTi','1623596VNbxec','3589668ubwMTp','_restoreCachedInititalValues','createElement','connection','10468040zmEHqa','appendChild','_root','readDir','file','.html','215RjstXe','dropEffect','match','draggable','30270kXNTav','199426QwjMpZ','dataTransfer','setData','div','define','name','_readFolder','icon','ondragstart','img','endsWith','iconNames','21UsdGQy'];a=function(){return q;};return a();}function b(c,d){c=c-0x1b4;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};[k(0x1be)];[k(0x1d7)];constructor(){const l=k;super(),super[l(0x1b9)](),this[l(0x1be)]=this['_getDomElement'](l(0x1d5));}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[m(0x1d2)]()){let d=c['path'];;const e=document['createElement'](m(0x1ca)),g=document[m(0x1ba)](m(0x1d0));g['src']=d,g[m(0x1c5)]=![],e[m(0x1d6)]=c['name'],e['draggable']=!![],e['appendChild'](g),e[m(0x1bd)](document['createTextNode'](c[m(0x1cc)])),e[m(0x1cf)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']='all',h[n(0x1c8)]['setData']('text/plain',d),h['dataTransfer'][n(0x1c9)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x1c8)]['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x1ce),'text':d})),h[n(0x1c8)][n(0x1c3)]='copy',!![];},this['_root']['appendChild'](e);}}async*[k(0x1d2)](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x1cd)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler[p(0x1bb)][p(0x1bf)](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g[p(0x1c0)]);else{if(!g[p(0x1c0)][p(0x1d1)](p(0x1c1))){if(this['_filter']){if(!g[p(0x1c0)][p(0x1c4)](this[p(0x1d7)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g[p(0x1c0)]['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x1c0)]};}}}}}customElements[k(0x1cb)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);