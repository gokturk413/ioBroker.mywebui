const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x157))/0x1*(parseInt(j(0x175))/0x2)+-parseInt(j(0x158))/0x3*(-parseInt(j(0x177))/0x4)+-parseInt(j(0x15d))/0x5+-parseInt(j(0x170))/0x6+parseInt(j(0x16c))/0x7+parseInt(j(0x16b))/0x8*(parseInt(j(0x176))/0x9)+parseInt(j(0x15c))/0xa*(parseInt(j(0x16d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd9c7b));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function a(){const p=['_root','dropEffect','2BqJiDL','1134450KAhfzJ','14492iTdvBh','file','draggable','endsWith','appendChild','885791DaomHx','336UanUdx','isDir','define','dataTransfer','79880RCtGem','4055635gIuTtD','iobroker-webui-icons-view','_readFolder','connection','copy','_assignEvents','icon','getIconAdapterFoldernames','readDir','ondragstart','src','setData','div','iconNames','40IEIxEX','11063766pzcuou','451YdfSmC','_filter','match','2130762vxcZWW','path','name'];a=function(){return p;};return a();}function b(c,d){c=c-0x155;const e=a();let f=e[c];return f;}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=k(0x15e);static ['properties']={};['_root'];[k(0x16e)];constructor(){super(),super['_restoreCachedInititalValues'](),this['_root']=this['_getDomElement']('root');}async['ready'](){const l=k;this['_parseAttributesToProperties'](),this[l(0x162)]();for await(const c of this[l(0x16a)]()){let d=c[l(0x171)];;const e=document['createElement'](l(0x169)),g=document['createElement']('img');g[l(0x167)]=d,g[l(0x179)]=![],e['title']=c[l(0x172)],e[l(0x179)]=!![],e['appendChild'](g),e['appendChild'](document['createTextNode'](c['name'])),e[l(0x166)]=h=>{const m=l,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']='all',h[m(0x15b)][m(0x168)]('text/plain',d),h[m(0x15b)][m(0x168)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer'][m(0x168)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':m(0x163),'text':d})),h['dataTransfer'][m(0x174)]=m(0x161),!![];},this[l(0x173)][l(0x156)](e);}}async*[k(0x16a)](){const n=k,c=await iobrokerHandler[n(0x164)]();for(const d of c){yield*this[n(0x15f)](d,'');}}async*['_readFolder'](c,d){const o=k,e=await iobrokerHandler[o(0x160)][o(0x165)](c,d);for(const g of e){if(g[o(0x159)])yield*this['_readFolder'](c,d+'/'+g[o(0x178)]);else{if(!g[o(0x178)][o(0x155)]('.html')){if(this['_filter']){if(!g[o(0x178)][o(0x16f)](this['_filter']))continue;}const h=g['file']['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[o(0x178)]};}}}}}customElements[k(0x15a)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);