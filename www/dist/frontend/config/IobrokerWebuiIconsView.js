const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x6c))/0x1*(parseInt(j(0x7f))/0x2)+parseInt(j(0x86))/0x3*(parseInt(j(0x75))/0x4)+parseInt(j(0x79))/0x5+-parseInt(j(0x81))/0x6+-parseInt(j(0x72))/0x7*(parseInt(j(0x7d))/0x8)+parseInt(j(0x7e))/0x9*(-parseInt(j(0x6e))/0xa)+parseInt(j(0x83))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaadf9));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function a(){const q=['define','appendChild','icon','449340LTqwjq','file','src','ondragstart','104loZQtR','173601lKthsX','3636OYIJpG','copy','5555586wnUVWS','_parseAttributesToProperties','30494453OuabZz','img','endsWith','697518cjFERW','_readFolder','lastIndexOf','stringify','setData','_assignEvents','dropEffect','div','text/plain','_root','getIconAdapterFoldernames','root','478nEzEEO','name','50Zfbwvt','iconNames','iobroker-webui-icons-view','dataTransfer','396214QqIDzy','match','title','8GNtblp'];a=function(){return q;};return a();}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=k(0x70);static ['properties']={};['_root'];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this[l(0x69)]=this['_getDomElement'](l(0x6b));}async['ready'](){const m=k;this[m(0x82)](),this[m(0x8b)]();for await(const c of this[m(0x6f)]()){let d=c['path'];;const e=document['createElement'](m(0x67)),g=document['createElement'](m(0x84));g[m(0x7b)]=d,g['draggable']=![],e[m(0x74)]=c['name'],e['draggable']=!![],e[m(0x77)](g),e['appendChild'](document['createTextNode'](c[m(0x6d)])),e[m(0x7c)]=h=>{const n=m,i={'tag':n(0x84),'defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']='all',h['dataTransfer'][n(0x8a)](n(0x68),d),h[n(0x71)][n(0x8a)](dragDropFormatNameElementDefinition,JSON[n(0x89)](i)),h['dataTransfer'][n(0x8a)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x78),'text':d})),h['dataTransfer'][n(0x66)]=n(0x80),!![];},this[m(0x69)][m(0x77)](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0x6a)]();for(const d of c){yield*this[o(0x87)](d,'');}}async*[k(0x87)](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g[p(0x7a)]);else{if(!g[p(0x7a)][p(0x85)]('.html')){if(this['_filter']){if(!g[p(0x7a)][p(0x73)](this['_filter']))continue;}const h=g['file'][p(0x88)]('.'),i=g[p(0x7a)]['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x7a)]};}}}}}function b(c,d){c=c-0x66;const e=a();let f=e[c];return f;}customElements[k(0x76)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);