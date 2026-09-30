function b(c,d){c=c-0x14d;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x14e))/0x1*(-parseInt(j(0x171))/0x2)+-parseInt(j(0x163))/0x3+-parseInt(j(0x161))/0x4*(-parseInt(j(0x165))/0x5)+parseInt(j(0x152))/0x6+-parseInt(j(0x16d))/0x7+parseInt(j(0x156))/0x8*(parseInt(j(0x166))/0x9)+-parseInt(j(0x164))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x97458));function a(){const q=['define','createElement','getIconAdapterFoldernames','match','appendChild','draggable','style','endsWith','4PnAoHi','_root','2417142wVttxE','8809070jmjgyC','3419075EVjeMp','40941VbSKDs','name','_restoreCachedInititalValues','_assignEvents','iconNames','title','createTextNode','7169820RorNXb','readDir','substring','_readFolder','26xCyucl','stringify','71499WQHrIR','dropEffect','dataTransfer','div','3943620KvPzxp','setData','all','lastIndexOf','1864NzfPhB','effectAllowed','file'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};[k(0x162)];['_filter'];constructor(){const l=k;super(),super[l(0x168)](),this[l(0x162)]=this['_getDomElement']('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this[m(0x169)]();for await(const c of this[m(0x16a)]()){let d=c['path'];;const e=document[m(0x15a)](m(0x151)),g=document['createElement']('img');g['src']=d,g[m(0x15e)]=![],e[m(0x16b)]=c['name'],e['draggable']=!![],e['appendChild'](g),e['appendChild'](document[m(0x16c)](c[m(0x167)])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x157)]=n(0x154),h['dataTransfer']['setData']('text/plain',d),h['dataTransfer'][n(0x153)](dragDropFormatNameElementDefinition,JSON[n(0x14d)](i)),h[n(0x150)]['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x14d)]({'type':'icon','text':d})),h[n(0x150)][n(0x14f)]='copy',!![];},this['_root'][m(0x15d)](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0x15b)]();for(const d of c){yield*this[o(0x170)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x16e)](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g['file'][p(0x160)]('.html')){if(this['_filter']){if(!g[p(0x158)][p(0x15c)](this['_filter']))continue;}const h=g['file'][p(0x155)]('.'),i=g[p(0x158)][p(0x16f)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x158)]};}}}}}customElements[k(0x159)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);