const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x200))/0x1+parseInt(j(0x1fc))/0x2*(parseInt(j(0x20a))/0x3)+-parseInt(j(0x209))/0x4+-parseInt(j(0x206))/0x5*(-parseInt(j(0x203))/0x6)+parseInt(j(0x1ff))/0x7*(parseInt(j(0x204))/0x8)+parseInt(j(0x1fa))/0x9*(parseInt(j(0x201))/0xa)+-parseInt(j(0x207))/0xb*(-parseInt(j(0x1f7))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x38050));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x1f3;const e=a();let f=e[c];return f;}function a(){const q=['icon','_readFolder','_filter','all','path','div','208596WSTJXS','setData','img','110007eranYy','connection','6hnrHjQ','getIconAdapterFoldernames','text/plain','371XorTTw','374557mmLLBx','30aCoPnk','properties','6mxhYKd','38752rlWyrx','dataTransfer','1250035iZeRoV','143uXviPD','name','732572bVtWjT','17769mEEiQQ','_assignEvents','root','dropEffect','_restoreCachedInititalValues','define','file','iconNames','draggable','appendChild'];a=function(){return q;};return a();}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x202)]={};['_root'];['_filter'];constructor(){const l=k;super(),super[l(0x20e)](),this['_root']=this['_getDomElement'](l(0x20c));}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this[m(0x20b)]();for await(const c of this[m(0x211)]()){let d=c[m(0x1f5)];;const e=document['createElement'](m(0x1f6)),g=document['createElement']('img');g['src']=d,g[m(0x212)]=![],e['title']=c[m(0x208)],e['draggable']=!![],e[m(0x213)](g),e[m(0x213)](document['createTextNode'](c['name'])),e['ondragstart']=h=>{const n=m,i={'tag':n(0x1f9),'defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']=n(0x1f4),h['dataTransfer']['setData'](n(0x1fe),d),h['dataTransfer'][n(0x1f8)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x205)][n(0x1f8)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x214),'text':d})),h[n(0x205)][n(0x20d)]='copy',!![];},this['_root'][m(0x213)](e);}}async*[k(0x211)](){const o=k,c=await iobrokerHandler[o(0x1fd)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x215)](c,d){const p=k,e=await iobrokerHandler[p(0x1fb)]['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this[p(0x215)](c,d+'/'+g[p(0x210)]);else{if(!g[p(0x210)]['endsWith']('.html')){if(this[p(0x1f3)]){if(!g[p(0x210)]['match'](this['_filter']))continue;}const h=g[p(0x210)]['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x210)]};}}}}}customElements[k(0x20f)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);