function a(){const p=['div','img','_root','file','createElement','_getDomElement','iconNames','appendChild','7948hlaFgD','1490068QAtlVE','setData','text/plain','isDir','stringify','58GZeUlO','iobroker-webui-icons-view','path','6RIWxuH','16394410yaZMQC','template','7455080OCaoBZ','_parseAttributesToProperties','properties','icon','4192552pImFmt','8222208PbsQIN','_readFolder','.html','effectAllowed','dataTransfer','5642313gzygQN','draggable','lastIndexOf','src','27loaprp','ondragstart'];a=function(){return p;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x14b))/0x1*(parseInt(j(0x145))/0x2)+-parseInt(j(0x15b))/0x3+-parseInt(j(0x146))/0x4+parseInt(j(0x151))/0x5*(-parseInt(j(0x14e))/0x6)+parseInt(j(0x155))/0x7+-parseInt(j(0x156))/0x8+parseInt(j(0x15f))/0x9*(parseInt(j(0x14f))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xee337));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x143;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x150)]=html`
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
        `;static ['is']=k(0x14c);static [k(0x153)]={};[k(0x163)];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x166)]('root');}async['ready'](){const m=k;this[m(0x152)](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c[m(0x14d)];;const e=document[m(0x165)](m(0x161)),g=document['createElement'](m(0x162));g[m(0x15e)]=d,g[m(0x15c)]=![],e['title']=c['name'],e['draggable']=!![],e[m(0x144)](g),e['appendChild'](document['createTextNode'](c['name'])),e[m(0x160)]=h=>{const n=m,i={'tag':n(0x162),'defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x159)]='all',h[n(0x15a)]['setData'](n(0x148),d),h[n(0x15a)][n(0x147)](dragDropFormatNameElementDefinition,JSON[n(0x14a)](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x14a)]({'type':n(0x154),'text':d})),h['dataTransfer']['dropEffect']='copy',!![];},this['_root']['appendChild'](e);}}async*[k(0x143)](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*['_readFolder'](c,d){const o=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g[o(0x149)])yield*this[o(0x157)](c,d+'/'+g[o(0x164)]);else{if(!g[o(0x164)]['endsWith'](o(0x158))){if(this['_filter']){if(!g[o(0x164)]['match'](this['_filter']))continue;}const h=g['file'][o(0x15d)]('.'),i=g[o(0x164)]['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);