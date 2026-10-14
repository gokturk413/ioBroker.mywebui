function b(c,d){c=c-0x165;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x17e))/0x1+-parseInt(j(0x174))/0x2+-parseInt(j(0x17c))/0x3+-parseInt(j(0x178))/0x4+-parseInt(j(0x185))/0x5*(-parseInt(j(0x175))/0x6)+parseInt(j(0x16a))/0x7+parseInt(j(0x17b))/0x8*(parseInt(j(0x18e))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x25c55));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x18c)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x16e)]={};[k(0x177)];[k(0x18b)];constructor(){const l=k;super(),super[l(0x179)](),this['_root']=this[l(0x187)]('root');}async[k(0x17d)](){const m=k;this[m(0x17f)](),this[m(0x188)]();for await(const c of this[m(0x16c)]()){let d=c[m(0x173)];;const e=document[m(0x16d)](m(0x18d)),g=document['createElement'](m(0x172));g[m(0x171)]=d,g[m(0x167)]=![],e[m(0x166)]=c[m(0x16b)],e['draggable']=!![],e[m(0x18a)](g),e[m(0x18a)](document['createTextNode'](c['name'])),e[m(0x16f)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x184)][n(0x182)]=n(0x170),h['dataTransfer'][n(0x18f)]('text/plain',d),h[n(0x184)][n(0x18f)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x184)][n(0x18f)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h['dataTransfer'][n(0x183)]=n(0x180),!![];},this['_root'][m(0x18a)](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0x176)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x169)](c,d);for(const g of e){if(g[p(0x186)])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g[p(0x17a)][p(0x168)]('.html')){if(this[p(0x18b)]){if(!g[p(0x17a)]['match'](this['_filter']))continue;}const h=g[p(0x17a)][p(0x165)]('.'),i=g['file'][p(0x189)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0x181)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);function a(){const q=['define','effectAllowed','dropEffect','dataTransfer','140HjBvby','isDir','_getDomElement','_assignEvents','substring','appendChild','_filter','template','div','231696AmGDRa','setData','lastIndexOf','title','draggable','endsWith','readDir','130207aQpbZV','name','iconNames','createElement','properties','ondragstart','all','src','img','path','225604OJFmkZ','41442QqGJQz','getIconAdapterFoldernames','_root','311776ItcJUw','_restoreCachedInititalValues','file','16zseWBZ','605718hFocQh','ready','283876vfqFbh','_parseAttributesToProperties','copy'];a=function(){return q;};return a();}