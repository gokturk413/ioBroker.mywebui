const k=b;function b(c,d){c=c-0x188;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1a1))/0x1*(parseInt(j(0x18d))/0x2)+-parseInt(j(0x1ab))/0x3*(-parseInt(j(0x190))/0x4)+parseInt(j(0x192))/0x5*(parseInt(j(0x196))/0x6)+-parseInt(j(0x19e))/0x7*(parseInt(j(0x194))/0x8)+parseInt(j(0x1a4))/0x9*(parseInt(j(0x1a9))/0xa)+-parseInt(j(0x195))/0xb+parseInt(j(0x1a5))/0xc*(parseInt(j(0x1a2))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x48b6e));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [k(0x1a7)]=css`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x19c)]={};['_root'];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x1a3)]('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c[m(0x197)];;const e=document[m(0x198)](m(0x19d)),g=document['createElement']('img');g[m(0x18e)]=d,g[m(0x1a8)]=![],e[m(0x19b)]=c['name'],e[m(0x1a8)]=!![],e[m(0x193)](g),e['appendChild'](document[m(0x1a6)](c['name'])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x18a)]['effectAllowed']='all',h['dataTransfer']['setData']('text/plain',d),h[n(0x18a)][n(0x1aa)](dragDropFormatNameElementDefinition,JSON[n(0x199)](i)),h['dataTransfer'][n(0x1aa)](dragDropFormatNamePropertyGrid,JSON[n(0x199)]({'type':'icon','text':d})),h[n(0x18a)][n(0x191)]='copy',!![];},this[m(0x18b)][m(0x193)](e);}}async*[k(0x19f)](){const o=k,c=await iobrokerHandler[o(0x19a)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x18f)](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g[p(0x188)]);else{if(!g['file'][p(0x18c)](p(0x189))){if(this['_filter']){if(!g['file']['match'](this['_filter']))continue;}const h=g[p(0x188)]['lastIndexOf']('.'),i=g[p(0x188)][p(0x1a0)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);function a(){const q=['path','createElement','stringify','getIconAdapterFoldernames','title','properties','div','7KegDMz','iconNames','substring','19DgcsVL','39PEFnBQ','_getDomElement','9dVNMnL','1244988ZgMpUV','createTextNode','style','draggable','3916190kvCldW','setData','41922uvEOgF','file','.html','dataTransfer','_root','endsWith','13922mEZjWL','src','_readFolder','4rGCSKN','dropEffect','11200bhbnLp','appendChild','4119344uJGKwt','4046493xLqIGA','888AdVyvS'];a=function(){return q;};return a();}