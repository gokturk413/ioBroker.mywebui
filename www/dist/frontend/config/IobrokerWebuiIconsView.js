function b(c,d){c=c-0x8e;const e=a();let f=e[c];return f;}const k=b;function a(){const q=['172JxzVLJ','1064DdLxIT','22118620kNZIQV','copy','path','1067056gmmxpn','isDir','_readFolder','effectAllowed','name','appendChild','_root','file','setData','12536168TJRoBp','_restoreCachedInititalValues','define','_parseAttributesToProperties','div','_filter','substring','6414IXxrQM','dataTransfer','ondragstart','431442qnTjho','createElement','dropEffect','9unuoIt','template','src','readDir','1474493MEheFv','icon','26805DrgUtD'];a=function(){return q;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xaa))/0x1+parseInt(j(0x90))/0x2+-parseInt(j(0xa3))/0x3+-parseInt(j(0xad))/0x4*(parseInt(j(0xac))/0x5)+-parseInt(j(0xa0))/0x6*(parseInt(j(0xae))/0x7)+parseInt(j(0x99))/0x8+parseInt(j(0xa6))/0x9*(-parseInt(j(0xaf))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc9bf3));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0xa7)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};[k(0x96)];['_filter'];constructor(){const l=k;super(),super[l(0x9a)](),this[l(0x96)]=this['_getDomElement']('root');}async['ready'](){const m=k;this[m(0x9c)](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c[m(0x8f)];;const e=document[m(0xa4)](m(0x9d)),g=document[m(0xa4)]('img');g[m(0xa8)]=d,g['draggable']=![],e['title']=c[m(0x94)],e['draggable']=!![],e[m(0x95)](g),e['appendChild'](document['createTextNode'](c['name'])),e[m(0xa2)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0xa1)][n(0x93)]='all',h['dataTransfer']['setData']('text/plain',d),h[n(0xa1)][n(0x98)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0xab),'text':d})),h[n(0xa1)][n(0xa5)]=n(0x8e),!![];},this['_root']['appendChild'](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x92)](d,'');}}async*[k(0x92)](c,d){const p=k,e=await iobrokerHandler['connection'][p(0xa9)](c,d);for(const g of e){if(g[p(0x91)])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g['file']['endsWith']('.html')){if(this['_filter']){if(!g[p(0x97)]['match'](this[p(0x9e)]))continue;}const h=g[p(0x97)]['lastIndexOf']('.'),i=g['file'][p(0x9f)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0x9b)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);