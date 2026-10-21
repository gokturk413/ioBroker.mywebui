function b(c,d){c=c-0x135;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x143))/0x1+parseInt(j(0x13e))/0x2+-parseInt(j(0x14a))/0x3+-parseInt(j(0x140))/0x4+parseInt(j(0x13d))/0x5+-parseInt(j(0x14f))/0x6+parseInt(j(0x13a))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x915b1));function a(){const q=['_filter','draggable','isDir','dataTransfer','img','_assignEvents','connection','src','_restoreCachedInititalValues','_readFolder','readDir','20292258ofTTtd','setData','iobroker-webui-icons-view','3206785kqRyFu','1459004pKvVhe','text/plain','4737232TdNRCS','properties','dropEffect','1121804cFEUEi','root','template','appendChild','file','path','getIconAdapterFoldernames','2721030phliik','_parseAttributesToProperties','ondragstart','title','name','2767524mXorLH','iconNames','createElement','_root','stringify'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x145)]=html`
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
        `;static ['is']=k(0x13c);static [k(0x141)]={};[k(0x152)];[k(0x154)];constructor(){const l=k;super(),super[l(0x137)](),this['_root']=this['_getDomElement'](l(0x144));}async['ready'](){const m=k;this[m(0x14b)](),this[m(0x159)]();for await(const c of this[m(0x150)]()){let d=c[m(0x148)];;const e=document[m(0x151)]('div'),g=document[m(0x151)]('img');g[m(0x136)]=d,g[m(0x155)]=![],e[m(0x14d)]=c[m(0x14e)],e['draggable']=!![],e['appendChild'](g),e[m(0x146)](document['createTextNode'](c['name'])),e[m(0x14c)]=h=>{const n=m,i={'tag':n(0x158),'defaultAttributes':{'src':d}};return h[n(0x157)]['effectAllowed']='all',h[n(0x157)][n(0x13b)](n(0x13f),d),h['dataTransfer'][n(0x13b)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x157)][n(0x13b)](dragDropFormatNamePropertyGrid,JSON[n(0x153)]({'type':'icon','text':d})),h[n(0x157)][n(0x142)]='copy',!![];},this['_root'][m(0x146)](e);}}async*[k(0x150)](){const o=k,c=await iobrokerHandler[o(0x149)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x138)](c,d){const p=k,e=await iobrokerHandler[p(0x135)][p(0x139)](c,d);for(const g of e){if(g[p(0x156)])yield*this['_readFolder'](c,d+'/'+g[p(0x147)]);else{if(!g[p(0x147)]['endsWith']('.html')){if(this[p(0x154)]){if(!g[p(0x147)]['match'](this[p(0x154)]))continue;}const h=g[p(0x147)]['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x147)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);