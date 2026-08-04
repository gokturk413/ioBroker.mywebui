const n=b;function a(){const q=['461619uBmwUJ','1646470zSZeTf','7629594DihmrD','_readFolder','_restoreCachedInititalValues','endsWith','1145979OpJjUw','src','path','78190piuxZa','icon','dataTransfer','iconNames','effectAllowed','div','title','104qWqImy','text/plain','436289nufeUX','readDir','4UtBnOC','_filter','createTextNode','_root','root','.html','_getDomElement','setData','lastIndexOf','4521425zsIKcL','file','appendChild','3204EYTxjG','createElement'];a=function(){return q;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1d4))/0x1+-parseInt(j(0x1d5))/0x2+parseInt(j(0x1da))/0x3*(parseInt(j(0x1e8))/0x4)+parseInt(j(0x1f1))/0x5+-parseInt(j(0x1d6))/0x6+parseInt(j(0x1e6))/0x7*(-parseInt(j(0x1e4))/0x8)+-parseInt(j(0x1d2))/0x9*(-parseInt(j(0x1dd))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xabaa2));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};['_root'];['_filter'];constructor(){const k=b;super(),super[k(0x1d8)](),this[k(0x1eb)]=this[k(0x1ee)](k(0x1ec));}async['ready'](){const l=b;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c[l(0x1dc)];;const e=document[l(0x1d3)](l(0x1e2)),g=document[l(0x1d3)]('img');g[l(0x1db)]=d,g['draggable']=![],e[l(0x1e3)]=c['name'],e['draggable']=!![],e[l(0x1d1)](g),e[l(0x1d1)](document[l(0x1ea)](c['name'])),e['ondragstart']=h=>{const m=l,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][m(0x1e1)]='all',h['dataTransfer'][m(0x1ef)](m(0x1e5),d),h[m(0x1df)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':m(0x1de),'text':d})),h['dataTransfer']['dropEffect']='copy',!![];},this['_root']['appendChild'](e);}}async*[n(0x1e0)](){const o=n,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x1d7)](d,'');}}async*[n(0x1d7)](c,d){const p=n,e=await iobrokerHandler['connection'][p(0x1e7)](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g['file'][p(0x1d9)](p(0x1ed))){if(this[p(0x1e9)]){if(!g['file']['match'](this[p(0x1e9)]))continue;}const h=g['file'][p(0x1f0)]('.'),i=g[p(0x1d0)]['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}function b(c,d){c=c-0x1d0;const e=a();let f=e[c];return f;}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);