const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1e3))/0x1*(-parseInt(j(0x1ce))/0x2)+parseInt(j(0x1d4))/0x3+parseInt(j(0x1e2))/0x4*(-parseInt(j(0x1e1))/0x5)+parseInt(j(0x1dc))/0x6+parseInt(j(0x1ed))/0x7+-parseInt(j(0x1ea))/0x8+parseInt(j(0x1eb))/0x9*(-parseInt(j(0x1d3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x51f24));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x1df)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};[k(0x1e6)];[k(0x1cf)];constructor(){const l=k;super(),super[l(0x1d8)](),this[l(0x1e6)]=this[l(0x1d0)](l(0x1e4));}async['ready'](){const m=k;this[m(0x1e8)](),this[m(0x1d6)]();for await(const c of this['iconNames']()){let d=c[m(0x1ec)];;const e=document['createElement'](m(0x1cd)),g=document[m(0x1d2)](m(0x1ca));g['src']=d,g['draggable']=![],e[m(0x1da)]=c[m(0x1cc)],e['draggable']=!![],e[m(0x1e7)](g),e['appendChild'](document[m(0x1d9)](c[m(0x1cc)])),e[m(0x1d7)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x1e9)][n(0x1e5)]='all',h['dataTransfer']['setData'](n(0x1db),d),h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x1d1),'text':d})),h['dataTransfer']['dropEffect']='copy',!![];},this['_root'][m(0x1e7)](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x1cb)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x1dd)](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g['file']['endsWith']('.html')){if(this['_filter']){if(!g['file'][p(0x1e0)](this['_filter']))continue;}const h=g[p(0x1d5)][p(0x1de)]('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x1d5)]};}}}}}function b(c,d){c=c-0x1ca;const e=a();let f=e[c];return f;}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);function a(){const q=['_restoreCachedInititalValues','createTextNode','title','text/plain','3719070XjQDgS','readDir','lastIndexOf','template','match','186985penDyF','20DNzXGP','95qyruch','root','effectAllowed','_root','appendChild','_parseAttributesToProperties','dataTransfer','1980504CQOoQe','9eUKntS','path','3453828fTnNqV','img','_readFolder','name','div','12760YvbwBG','_filter','_getDomElement','icon','createElement','1927520PIPhep','1367409CCXBKu','file','_assignEvents','ondragstart'];a=function(){return q;};return a();}