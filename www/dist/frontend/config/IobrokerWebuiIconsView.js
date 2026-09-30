const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x106))/0x1*(-parseInt(j(0x111))/0x2)+-parseInt(j(0x113))/0x3+parseInt(j(0x10e))/0x4*(parseInt(j(0x11c))/0x5)+-parseInt(j(0x110))/0x6*(parseInt(j(0x11a))/0x7)+-parseInt(j(0x11d))/0x8*(parseInt(j(0x117))/0x9)+-parseInt(j(0x101))/0xa+parseInt(j(0x10c))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf044e));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const p=['54347678KwGLKm','properties','20UtDOZe','dropEffect','478614KpxUAa','2RfnrhY','substring','4743744wnzZwv','style','path','img','41436uhLYkQ','iobroker-webui-icons-view','file','91JadfAT','src','989705qtfpGE','1888sZcRiK','stringify','_filter','_restoreCachedInititalValues','9187610SbKLRk','text/plain','define','createTextNode','createElement','322711PljITX','.html','dataTransfer','ondragstart','_readFolder','title'];a=function(){return p;};return a();}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x101;const e=a();let f=e[c];return f;}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [k(0x114)]=css`
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
        `;static ['is']=k(0x118);static [k(0x10d)]={};['_root'];['_filter'];constructor(){const l=k;super(),super[l(0x120)](),this['_root']=this['_getDomElement']('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c[m(0x115)];;const e=document[m(0x105)]('div'),g=document[m(0x105)](m(0x116));g[m(0x11b)]=d,g['draggable']=![],e[m(0x10b)]=c['name'],e['draggable']=!![],e['appendChild'](g),e['appendChild'](document[m(0x104)](c['name'])),e[m(0x109)]=h=>{const n=m,i={'tag':n(0x116),'defaultAttributes':{'src':d}};return h[n(0x108)]['effectAllowed']='all',h[n(0x108)]['setData'](n(0x102),d),h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x11e)]({'type':'icon','text':d})),h[n(0x108)][n(0x10f)]='copy',!![];},this['_root']['appendChild'](e);}}async*['iconNames'](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x10a)](c,d){const o=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this[o(0x10a)](c,d+'/'+g[o(0x119)]);else{if(!g['file']['endsWith'](o(0x107))){if(this['_filter']){if(!g['file']['match'](this[o(0x11f)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g[o(0x119)][o(0x112)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[o(0x119)]};}}}}}customElements[k(0x103)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);