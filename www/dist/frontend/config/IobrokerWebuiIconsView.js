const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x106))/0x1*(parseInt(j(0xfd))/0x2)+parseInt(j(0x10a))/0x3*(-parseInt(j(0x102))/0x4)+parseInt(j(0x107))/0x5*(parseInt(j(0xe1))/0x6)+-parseInt(j(0x10b))/0x7+-parseInt(j(0xe9))/0x8+parseInt(j(0xf4))/0x9*(-parseInt(j(0xf2))/0xa)+parseInt(j(0x101))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3645c));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x104)]=html`
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
        `;static ['is']=k(0xe4);static [k(0xf7)]={};['_root'];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this[l(0xf5)]=this[l(0xfe)](l(0xea));}async['ready'](){const m=k;this[m(0x105)](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c[m(0xf0)];;const e=document['createElement'](m(0xfc)),g=document['createElement'](m(0xec));g['src']=d,g['draggable']=![],e[m(0xe7)]=c['name'],e[m(0x103)]=!![],e[m(0xf6)](g),e['appendChild'](document[m(0xfb)](c[m(0xff)])),e[m(0xed)]=h=>{const n=m,i={'tag':n(0xec),'defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']=n(0xf3),h[n(0xf8)]['setData'](n(0x100),d),h['dataTransfer'][n(0xf1)](dragDropFormatNameElementDefinition,JSON[n(0xf9)](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON[n(0xf9)]({'type':n(0xee),'text':d})),h[n(0xf8)][n(0xeb)]=n(0xe5),!![];},this[m(0xf5)][m(0xf6)](e);}}async*['iconNames'](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*['_readFolder'](c,d){const o=k,e=await iobrokerHandler[o(0x109)][o(0xef)](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g[o(0x108)]['endsWith']('.html')){if(this[o(0xe8)]){if(!g['file'][o(0xfa)](this['_filter']))continue;}const h=g['file'][o(0xe6)]('.'),i=g['file'][o(0xe3)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}function b(c,d){c=c-0xe1;const e=a();let f=e[c];return f;}customElements[k(0xe2)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);function a(){const p=['root','dropEffect','img','ondragstart','icon','readDir','path','setData','4110120mptUzd','all','9zgewlw','_root','appendChild','properties','dataTransfer','stringify','match','createTextNode','div','6952GIVUbK','_getDomElement','name','text/plain','5398756BZCSUV','192yWCHSz','draggable','template','_parseAttributesToProperties','120hTfSOD','42530Llcxnq','file','connection','3882gXdANU','1017373mUxDzQ','186HlTwpD','define','substring','iobroker-webui-icons-view','copy','lastIndexOf','title','_filter','2646712EUCYLP'];a=function(){return p;};return a();}