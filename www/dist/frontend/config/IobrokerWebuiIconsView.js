const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x207))/0x1*(parseInt(j(0x1f3))/0x2)+-parseInt(j(0x1f1))/0x3*(parseInt(j(0x208))/0x4)+parseInt(j(0x204))/0x5+-parseInt(j(0x211))/0x6+parseInt(j(0x20d))/0x7+-parseInt(j(0x1f0))/0x8+parseInt(j(0x203))/0x9*(-parseInt(j(0x210))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4b381));function a(){const p=['root','2ufvSeU','img','src','substring','appendChild','template','_readFolder','define','dataTransfer','draggable','match','ondragstart','icon','file','all','style','1921545mMnZts','1697175jRYlcu','_getDomElement','.html','303575cxOiZS','209204SysiTI','_root','properties','title','copy','3746750wuaHCh','iobroker-webui-icons-view','iconNames','10ykXfyx','1625946XAOFOG','name','2248520WCPkdv','6XoybrB'];a=function(){return p;};return a();}function b(c,d){c=c-0x1ef;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x1f8)]=html`
        <div id="root"></div>
    `;static [k(0x202)]=css`
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
        `;static ['is']=k(0x20e);static [k(0x20a)]={};[k(0x209)];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x205)](l(0x1f2));}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[m(0x20f)]()){let d=c['path'];;const e=document['createElement']('div'),g=document['createElement'](m(0x1f4));g[m(0x1f5)]=d,g[m(0x1fc)]=![],e[m(0x20b)]=c[m(0x1ef)],e['draggable']=!![],e[m(0x1f7)](g),e['appendChild'](document['createTextNode'](c['name'])),e[m(0x1fe)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x1fb)]['effectAllowed']=n(0x201),h['dataTransfer']['setData']('text/plain',d),h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x1ff),'text':d})),h[n(0x1fb)]['dropEffect']=n(0x20c),!![];},this['_root'][m(0x1f7)](e);}}async*['iconNames'](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x1f9)](c,d){const o=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this[o(0x1f9)](c,d+'/'+g[o(0x200)]);else{if(!g[o(0x200)]['endsWith'](o(0x206))){if(this['_filter']){if(!g['file'][o(0x1fd)](this['_filter']))continue;}const h=g[o(0x200)]['lastIndexOf']('.'),i=g['file'][o(0x1f6)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[o(0x200)]};}}}}}customElements[k(0x1fa)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);