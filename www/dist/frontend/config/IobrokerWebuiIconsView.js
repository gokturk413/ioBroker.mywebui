function b(c,d){c=c-0x1ed;const e=a();let f=e[c];return f;}const k=b;function a(){const p=['define','title','110GjwzIo','effectAllowed','737048hKbJaD','_root','setData','_readFolder','src','iobroker-webui-icons-view','248204yXiwLT','appendChild','5QPUFLS','202545lsLHAo','2357814AqMWOF','connection','path','5604PXwwBz','stringify','all','iconNames','draggable','_assignEvents','22UktmqB','112287GXXTxX','createTextNode','createElement','file','copy','2255xpZrSi','dataTransfer','getIconAdapterFoldernames','8hEBiec','1312906WCcFNG','_filter','substring'];a=function(){return p;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1fd))/0x1+-parseInt(j(0x20a))/0x2*(-parseInt(j(0x20b))/0x3)+parseInt(j(0x1f7))/0x4+parseInt(j(0x1ff))/0x5*(parseInt(j(0x201))/0x6)+parseInt(j(0x1f0))/0x7*(-parseInt(j(0x1ef))/0x8)+parseInt(j(0x200))/0x9*(-parseInt(j(0x1f5))/0xa)+parseInt(j(0x210))/0xb*(-parseInt(j(0x204))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x333ea));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=k(0x1fc);static ['properties']={};['_root'];['_filter'];constructor(){super(),super['_restoreCachedInititalValues'](),this['_root']=this['_getDomElement']('root');}async['ready'](){const l=k;this['_parseAttributesToProperties'](),this[l(0x209)]();for await(const c of this['iconNames']()){let d=c[l(0x203)];;const e=document['createElement']('div'),g=document[l(0x20d)]('img');g[l(0x1fb)]=d,g[l(0x208)]=![],e[l(0x1f4)]=c['name'],e['draggable']=!![],e[l(0x1fe)](g),e['appendChild'](document[l(0x20c)](c['name'])),e['ondragstart']=h=>{const m=l,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][m(0x1f6)]=m(0x206),h[m(0x1ed)]['setData']('text/plain',d),h[m(0x1ed)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer'][m(0x1f9)](dragDropFormatNamePropertyGrid,JSON[m(0x205)]({'type':'icon','text':d})),h[m(0x1ed)]['dropEffect']=m(0x20f),!![];},this[l(0x1f8)][l(0x1fe)](e);}}async*[k(0x207)](){const n=k,c=await iobrokerHandler[n(0x1ee)]();for(const d of c){yield*this[n(0x1fa)](d,'');}}async*['_readFolder'](c,d){const o=k,e=await iobrokerHandler[o(0x202)]['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this[o(0x1fa)](c,d+'/'+g['file']);else{if(!g[o(0x20e)]['endsWith']('.html')){if(this['_filter']){if(!g[o(0x20e)]['match'](this[o(0x1f1)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g[o(0x20e)][o(0x1f2)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0x1f3)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);