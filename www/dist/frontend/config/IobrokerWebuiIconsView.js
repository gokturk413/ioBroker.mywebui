function b(c,d){c=c-0x158;const e=a();let f=e[c];return f;}function a(){const q=['427262ahSCUS','_root','iconNames','draggable','210912rKZfQD','readDir','title','5147946LaNkeM','8ZUJcFV','_readFolder','effectAllowed','_getDomElement','dataTransfer','style','name','_restoreCachedInititalValues','55581BlupWx','ready','file','getIconAdapterFoldernames','appendChild','template','src','_filter','all','168ExvoHd','926495wFHGCN','54082oDSBmD','.html','createElement','setData','166736VTLOtb','iobroker-webui-icons-view','define'];a=function(){return q;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x179))/0x1+-parseInt(j(0x15a))/0x2+-parseInt(j(0x16a))/0x3+-parseInt(j(0x15e))/0x4+-parseInt(j(0x174))/0x5+parseInt(j(0x173))/0x6*(parseInt(j(0x175))/0x7)+parseInt(j(0x162))/0x8*(parseInt(j(0x161))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x24f69));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x16f)]=html`
        <div id="root"></div>
    `;static [k(0x167)]=css`
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
        `;static ['is']=k(0x158);static ['properties']={};['_root'];['_filter'];constructor(){const l=k;super(),super[l(0x169)](),this[l(0x15b)]=this[l(0x165)]('root');}async[k(0x16b)](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[m(0x15c)]()){let d=c['path'];;const e=document['createElement']('div'),g=document[m(0x177)]('img');g[m(0x170)]=d,g['draggable']=![],e[m(0x160)]=c[m(0x168)],e[m(0x15d)]=!![],e['appendChild'](g),e[m(0x16e)](document['createTextNode'](c['name'])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x164)]=n(0x172),h['dataTransfer'][n(0x178)]('text/plain',d),h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x166)][n(0x178)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h['dataTransfer']['dropEffect']='copy',!![];},this[m(0x15b)][m(0x16e)](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0x16d)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x163)](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x15f)](c,d);for(const g of e){if(g['isDir'])yield*this[p(0x163)](c,d+'/'+g[p(0x16c)]);else{if(!g['file']['endsWith'](p(0x176))){if(this[p(0x171)]){if(!g[p(0x16c)]['match'](this['_filter']))continue;}const h=g[p(0x16c)]['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0x159)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);