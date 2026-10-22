function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}const k=b;function a(){const q=['readDir','dataTransfer','setData','appendChild','512240glHqzT','2PlyZEY','259hGVEXB','define','_readFolder','iconNames','8776tzTzZF','171141WbjIFN','_filter','2271830FnCGCp','69dBcQqy','isDir','createElement','endsWith','iobroker-webui-icons-view','30EEDxtg','getIconAdapterFoldernames','_restoreCachedInititalValues','text/plain','ondragstart','draggable','file','title','div','ready','1146222YuItQv','70955BumSvX','8304iSWBLT','_root','template','match','style'];a=function(){return q;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x101))/0x1*(parseInt(j(0xfb))/0x2)+-parseInt(j(0x104))/0x3*(-parseInt(j(0x115))/0x4)+parseInt(j(0x114))/0x5*(parseInt(j(0x109))/0x6)+-parseInt(j(0xfc))/0x7*(-parseInt(j(0x100))/0x8)+-parseInt(j(0x113))/0x9+parseInt(j(0xfa))/0xa+parseInt(j(0x103))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1cf13));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x117)]=html`
        <div id="root"></div>
    `;static [k(0x119)]=css`
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
        `;static ['is']=k(0x108);static ['properties']={};[k(0x116)];['_filter'];constructor(){const l=k;super(),super[l(0x10b)](),this[l(0x116)]=this['_getDomElement']('root');}async[k(0x112)](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c['path'];;const e=document['createElement'](m(0x111)),g=document[m(0x106)]('img');g['src']=d,g['draggable']=![],e[m(0x110)]=c['name'],e[m(0x10e)]=!![],e[m(0xf9)](g),e[m(0xf9)](document['createTextNode'](c['name'])),e[m(0x10d)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0xf7)]['effectAllowed']='all',h[n(0xf7)]['setData'](n(0x10c),d),h['dataTransfer'][n(0xf8)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer'][n(0xf8)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h[n(0xf7)]['dropEffect']='copy',!![];},this['_root'][m(0xf9)](e);}}async*[k(0xff)](){const o=k,c=await iobrokerHandler[o(0x10a)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0xfe)](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x11a)](c,d);for(const g of e){if(g[p(0x105)])yield*this[p(0xfe)](c,d+'/'+g['file']);else{if(!g['file'][p(0x107)]('.html')){if(this['_filter']){if(!g[p(0x10f)][p(0x118)](this[p(0x102)]))continue;}const h=g[p(0x10f)]['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x10f)]};}}}}}customElements[k(0xfd)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);