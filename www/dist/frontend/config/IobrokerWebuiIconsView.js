const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x168))/0x1+parseInt(j(0x181))/0x2+-parseInt(j(0x164))/0x3*(-parseInt(j(0x178))/0x4)+-parseInt(j(0x160))/0x5*(parseInt(j(0x17a))/0x6)+parseInt(j(0x162))/0x7*(parseInt(j(0x166))/0x8)+parseInt(j(0x16e))/0x9+-parseInt(j(0x177))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2bab1));function b(c,d){c=c-0x160;const e=a();let f=e[c];return f;}function a(){const p=['substring','7708550ZwLTck','81932gvyIDi','_restoreCachedInititalValues','30RcdiEx','dropEffect','iobroker-webui-icons-view','.html','createTextNode','effectAllowed','style','674130TxTKTG','313095JTaOQw','_root','2194178JMvMTV','connection','15OApByM','setData','8DDVQWO','ondragstart','299952pMagzs','stringify','appendChild','copy','dataTransfer','properties','1889361SkjdUv','readDir','root','file','src','_filter','template','_readFolder'];a=function(){return p;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x174)]=html`
        <div id="root"></div>
    `;static [k(0x180)]=css`
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
        `;static ['is']=k(0x17c);static [k(0x16d)]={};[k(0x161)];[k(0x173)];constructor(){const l=k;super(),super[l(0x179)](),this[l(0x161)]=this['_getDomElement'](l(0x170));}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c['path'];;const e=document['createElement']('div'),g=document['createElement']('img');g[m(0x172)]=d,g['draggable']=![],e['title']=c['name'],e['draggable']=!![],e['appendChild'](g),e[m(0x16a)](document[m(0x17e)](c['name'])),e[m(0x167)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x17f)]='all',h[n(0x16c)]['setData']('text/plain',d),h[n(0x16c)]['setData'](dragDropFormatNameElementDefinition,JSON[n(0x169)](i)),h['dataTransfer'][n(0x165)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h[n(0x16c)][n(0x17b)]=n(0x16b),!![];},this['_root'][m(0x16a)](e);}}async*['iconNames'](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*['_readFolder'](c,d){const o=k,e=await iobrokerHandler[o(0x163)][o(0x16f)](c,d);for(const g of e){if(g['isDir'])yield*this[o(0x175)](c,d+'/'+g['file']);else{if(!g[o(0x171)]['endsWith'](o(0x17d))){if(this[o(0x173)]){if(!g['file']['match'](this[o(0x173)]))continue;}const h=g[o(0x171)]['lastIndexOf']('.'),i=g[o(0x171)][o(0x176)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[o(0x171)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);