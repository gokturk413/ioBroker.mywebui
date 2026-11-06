const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xa9))/0x1*(parseInt(j(0x97))/0x2)+parseInt(j(0xb7))/0x3*(parseInt(j(0xaf))/0x4)+-parseInt(j(0xb1))/0x5*(parseInt(j(0xbe))/0x6)+-parseInt(j(0xa5))/0x7+parseInt(j(0xab))/0x8*(parseInt(j(0x9a))/0x9)+-parseInt(j(0xa2))/0xa+parseInt(j(0xa7))/0xb*(parseInt(j(0x98))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6cdef));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x97;const e=a();let f=e[c];return f;}function a(){const q=['div','draggable','2261126bLJRZS','_getDomElement','1991GJyyEF','properties','101GFQNjP','endsWith','856qvXgeN','createElement','_readFolder','setData','2496232HQJpvj','file','1915ClUylG','readDir','icon','.html','_filter','iobroker-webui-icons-view','3LydeUC','isDir','name','appendChild','match','text/plain','dataTransfer','12414JQztOL','ondragstart','9552zaCXOt','33468wQqPzK','iconNames','38979LlzCNI','createTextNode','stringify','_restoreCachedInititalValues','_assignEvents','src','_root','copy','5132800zUhPjO'];a=function(){return q;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=k(0xb6);static [k(0xa8)]={};['_root'];[k(0xb5)];constructor(){const l=k;super(),super[l(0x9d)](),this['_root']=this[l(0xa6)]('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this[m(0x9e)]();for await(const c of this[m(0x99)]()){let d=c['path'];;const e=document['createElement'](m(0xa3)),g=document[m(0xac)]('img');g[m(0x9f)]=d,g[m(0xa4)]=![],e['title']=c['name'],e[m(0xa4)]=!![],e[m(0xba)](g),e[m(0xba)](document[m(0x9b)](c[m(0xb9)])),e[m(0xbf)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']='all',h[n(0xbd)][n(0xae)](n(0xbc),d),h[n(0xbd)][n(0xae)](dragDropFormatNameElementDefinition,JSON[n(0x9c)](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x9c)]({'type':n(0xb3),'text':d})),h[n(0xbd)]['dropEffect']=n(0xa1),!![];},this[m(0xa0)]['appendChild'](e);}}async*[k(0x99)](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0xad)](d,'');}}async*[k(0xad)](c,d){const p=k,e=await iobrokerHandler['connection'][p(0xb2)](c,d);for(const g of e){if(g[p(0xb8)])yield*this[p(0xad)](c,d+'/'+g[p(0xb0)]);else{if(!g[p(0xb0)][p(0xaa)](p(0xb4))){if(this['_filter']){if(!g[p(0xb0)][p(0xbb)](this[p(0xb5)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0xb0)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);