const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x16a))/0x1*(parseInt(j(0x183))/0x2)+parseInt(j(0x16c))/0x3+-parseInt(j(0x18d))/0x4*(parseInt(j(0x177))/0x5)+parseInt(j(0x180))/0x6*(-parseInt(j(0x18c))/0x7)+parseInt(j(0x178))/0x8*(-parseInt(j(0x185))/0x9)+-parseInt(j(0x18e))/0xa*(parseInt(j(0x173))/0xb)+parseInt(j(0x175))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x20c44));function b(c,d){c=c-0x169;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x17d)]=html`
        <div id="root"></div>
    `;static [k(0x16e)]=css`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x187)]={};[k(0x186)];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x169)]('root');}async['ready'](){const m=k;this[m(0x174)](),this[m(0x179)]();for await(const c of this['iconNames']()){let d=c['path'];;const e=document['createElement'](m(0x182)),g=document['createElement'](m(0x16b));g[m(0x188)]=d,g[m(0x170)]=![],e[m(0x189)]=c['name'],e['draggable']=!![],e['appendChild'](g),e[m(0x176)](document['createTextNode'](c['name'])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x18b)][n(0x171)]='all',h[n(0x18b)][n(0x181)](n(0x17f),d),h[n(0x18b)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x18b)][n(0x181)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h[n(0x18b)][n(0x172)]='copy',!![];},this['_root'][m(0x176)](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0x17e)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x17b)](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g[p(0x16f)])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g[p(0x16d)][p(0x17c)](p(0x184))){if(this['_filter']){if(!g['file'][p(0x17a)](this['_filter']))continue;}const h=g[p(0x16d)]['lastIndexOf']('.'),i=g['file'][p(0x18a)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x16d)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);function a(){const q=['_root','properties','src','title','substring','dataTransfer','35ydpiDk','351376rNtXlc','10afpWrv','_getDomElement','179899vQTvQt','img','761637rGHEYH','file','style','isDir','draggable','effectAllowed','dropEffect','2817881aGFTYj','_parseAttributesToProperties','5008824dNcVjx','appendChild','15RKgaBG','16YKVTjk','_assignEvents','match','_readFolder','endsWith','template','getIconAdapterFoldernames','text/plain','126858dXDNoA','setData','div','2gTLmNv','.html','411975tFYlUx'];a=function(){return q;};return a();}