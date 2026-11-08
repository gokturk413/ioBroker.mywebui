const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x14c))/0x1*(parseInt(j(0x130))/0x2)+parseInt(j(0x145))/0x3+parseInt(j(0x133))/0x4*(parseInt(j(0x147))/0x5)+-parseInt(j(0x149))/0x6+parseInt(j(0x146))/0x7*(parseInt(j(0x134))/0x8)+parseInt(j(0x14f))/0x9*(parseInt(j(0x12f))/0xa)+-parseInt(j(0x14b))/0xb*(parseInt(j(0x150))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbf66f));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function a(){const q=['copy','11vhNiII','5xZVXUK','draggable','match','9216189mzwcXF','25470780BapRPP','10zKdtVY','102958CzzeMr','_root','file','7508MaeVnz','8WigPAh','stringify','text/plain','_readFolder','dataTransfer','iconNames','template','_parseAttributesToProperties','all','_getDomElement','.html','connection','icon','dropEffect','_filter','effectAllowed','ready','3742137wVKgYW','129633CygkMA','3895SJTJyb','img','6617694TDUJmF'];a=function(){return q;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x12f;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x13a)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};[k(0x131)];[k(0x142)];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x13d)]('root');}async[k(0x144)](){const m=k;this[m(0x13b)](),this['_assignEvents']();for await(const c of this[m(0x139)]()){let d=c['path'];;const e=document['createElement']('div'),g=document['createElement'](m(0x148));g['src']=d,g[m(0x14d)]=![],e['title']=c['name'],e['draggable']=!![],e['appendChild'](g),e['appendChild'](document['createTextNode'](c['name'])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x138)][n(0x143)]=n(0x13c),h['dataTransfer']['setData'](n(0x136),d),h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x135)]({'type':n(0x140),'text':d})),h['dataTransfer'][n(0x141)]=n(0x14a),!![];},this[m(0x131)]['appendChild'](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x137)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler[p(0x13f)]['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g[p(0x132)]);else{if(!g['file']['endsWith'](p(0x13e))){if(this[p(0x142)]){if(!g[p(0x132)][p(0x14e)](this['_filter']))continue;}const h=g[p(0x132)]['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);