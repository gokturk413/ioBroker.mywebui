const k=b;function a(){const q=['name','_restoreCachedInititalValues','effectAllowed','_filter','ondragstart','.html','img','readDir','title','copy','root','setData','text/plain','createElement','substring','match','2064279kgLobZ','5388996JbrnLO','10bGZvXb','3246915ldykMg','1773440crOtuG','5344VxjBVs','iconNames','file','appendChild','dataTransfer','properties','66ldyHwb','740YGJhlW','7117839fvTFVc','_readFolder','src','_root','createTextNode','9993tuIqLO'];a=function(){return q;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x203))/0x1*(-parseInt(j(0x1fd))/0x2)+parseInt(j(0x20a))/0x3*(parseInt(j(0x204))/0x4)+parseInt(j(0x1fb))/0x5+-parseInt(j(0x1f9))/0x6+-parseInt(j(0x1f8))/0x7+-parseInt(j(0x1fc))/0x8+-parseInt(j(0x205))/0x9*(-parseInt(j(0x1fa))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x719f2));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x1eb;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x202)]={};[k(0x208)];[k(0x1eb)];constructor(){const l=k;super(),super[l(0x20c)](),this['_root']=this['_getDomElement'](l(0x1f2));}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c['path'];;const e=document[m(0x1f5)]('div'),g=document[m(0x1f5)](m(0x1ee));g[m(0x207)]=d,g['draggable']=![],e[m(0x1f0)]=c[m(0x20b)],e['draggable']=!![],e[m(0x200)](g),e['appendChild'](document[m(0x209)](c[m(0x20b)])),e[m(0x1ec)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x201)][n(0x20d)]='all',h[n(0x201)]['setData'](n(0x1f4),d),h['dataTransfer'][n(0x1f3)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x201)]['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h['dataTransfer']['dropEffect']=n(0x1f1),!![];},this[m(0x208)]['appendChild'](e);}}async*[k(0x1fe)](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x206)](d,'');}}async*[k(0x206)](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x1ef)](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g[p(0x1ff)]);else{if(!g[p(0x1ff)]['endsWith'](p(0x1ed))){if(this['_filter']){if(!g['file'][p(0x1f7)](this[p(0x1eb)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g[p(0x1ff)][p(0x1f6)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);