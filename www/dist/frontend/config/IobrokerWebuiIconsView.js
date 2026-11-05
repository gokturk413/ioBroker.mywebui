const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x153))/0x1+-parseInt(j(0x156))/0x2+-parseInt(j(0x163))/0x3+-parseInt(j(0x155))/0x4*(parseInt(j(0x15a))/0x5)+parseInt(j(0x154))/0x6*(parseInt(j(0x143))/0x7)+-parseInt(j(0x14e))/0x8*(parseInt(j(0x146))/0x9)+parseInt(j(0x160))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5ab79));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const q=['copy','file','.html','_readFolder','src','iconNames','name','8aeOxuz','connection','isDir','_getDomElement','_root','674546LPpkAi','19386cCYFfc','2043672XhnqbH','307384JqxXNq','text/plain','define','icon','5OsTDdm','createTextNode','dataTransfer','getIconAdapterFoldernames','setData','style','16168400NKAEwC','img','_assignEvents','1478895wZMDDZ','dropEffect','appendChild','endsWith','all','stringify','1344WryiUd','draggable','div','301446mvLCdA'];a=function(){return q;};return a();}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [k(0x15f)]=css`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};['_root'];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this[l(0x152)]=this[l(0x151)]('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this[m(0x162)]();for await(const c of this[m(0x14c)]()){let d=c['path'];;const e=document['createElement'](m(0x145)),g=document['createElement'](m(0x161));g[m(0x14b)]=d,g[m(0x144)]=![],e['title']=c[m(0x14d)],e[m(0x144)]=!![],e[m(0x165)](g),e[m(0x165)](document[m(0x15b)](c[m(0x14d)])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']=n(0x167),h[n(0x15c)]['setData'](n(0x157),d),h['dataTransfer'][n(0x15e)](dragDropFormatNameElementDefinition,JSON[n(0x168)](i)),h['dataTransfer'][n(0x15e)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x159),'text':d})),h[n(0x15c)][n(0x164)]=n(0x147),!![];},this[m(0x152)][m(0x165)](e);}}async*[k(0x14c)](){const o=k,c=await iobrokerHandler[o(0x15d)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x14a)](c,d){const p=k,e=await iobrokerHandler[p(0x14f)]['readDir'](c,d);for(const g of e){if(g[p(0x150)])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g['file'][p(0x166)](p(0x149))){if(this['_filter']){if(!g['file']['match'](this['_filter']))continue;}const h=g[p(0x148)]['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}function b(c,d){c=c-0x143;const e=a();let f=e[c];return f;}customElements[k(0x158)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);