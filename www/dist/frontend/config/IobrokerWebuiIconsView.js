const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1a9))/0x1+parseInt(j(0x1a6))/0x2+-parseInt(j(0x197))/0x3*(parseInt(j(0x1a0))/0x4)+-parseInt(j(0x1a4))/0x5*(parseInt(j(0x19c))/0x6)+-parseInt(j(0x19d))/0x7+-parseInt(j(0x191))/0x8+parseInt(j(0x18f))/0x9*(parseInt(j(0x1a5))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe87c4));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x189;const e=a();let f=e[c];return f;}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [k(0x196)]=css`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};[k(0x18d)];['_filter'];constructor(){const l=k;super(),super[l(0x18a)](),this['_root']=this[l(0x198)](l(0x1a8));}async['ready'](){const m=k;this[m(0x18e)](),this[m(0x19b)]();for await(const c of this[m(0x194)]()){let d=c['path'];;const e=document[m(0x1a3)](m(0x1a7)),g=document['createElement'](m(0x19f));g['src']=d,g['draggable']=![],e[m(0x1aa)]=c['name'],e[m(0x190)]=!![],e[m(0x1a1)](g),e['appendChild'](document[m(0x192)](c['name'])),e[m(0x193)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x18c)][n(0x199)]='all',h[n(0x18c)][n(0x1ab)](n(0x18b),d),h[n(0x18c)][n(0x1ab)](dragDropFormatNameElementDefinition,JSON[n(0x1a2)](i)),h['dataTransfer'][n(0x1ab)](dragDropFormatNamePropertyGrid,JSON[n(0x1a2)]({'type':'icon','text':d})),h[n(0x18c)]['dropEffect']='copy',!![];},this[m(0x18d)]['appendChild'](e);}}async*[k(0x194)](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x1ac)](d,'');}}async*[k(0x1ac)](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x19a)](c,d);for(const g of e){if(g[p(0x19e)])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g[p(0x189)]['endsWith']('.html')){if(this['_filter']){if(!g['file']['match'](this[p(0x195)]))continue;}const h=g[p(0x189)]['lastIndexOf']('.'),i=g[p(0x189)]['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x189)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);function a(){const q=['draggable','1339592xxPAVC','createTextNode','ondragstart','iconNames','_filter','style','33987UslsTt','_getDomElement','effectAllowed','readDir','_assignEvents','6btTvPl','1624700ojHzwy','isDir','img','108KLmTFQ','appendChild','stringify','createElement','8704335pQPsHd','44690BkqVRd','1200796EobFBa','div','root','1823919uuZxhU','title','setData','_readFolder','file','_restoreCachedInititalValues','text/plain','dataTransfer','_root','_parseAttributesToProperties','1962pwYoeL'];a=function(){return q;};return a();}