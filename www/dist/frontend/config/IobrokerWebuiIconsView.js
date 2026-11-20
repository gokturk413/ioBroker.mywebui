const k=b;function a(){const q=['91470PjazMe','readDir','createTextNode','33hiweNl','img','name','icon','1506596qvXCrA','effectAllowed','isDir','908271ZyaXzd','435IkxLuC','path','template','_filter','_root','all','draggable','3dipsWd','29356kooCbk','dropEffect','2938624OhsZtl','491953fbhoyp','1327534gfYCKS','properties','file','match','ondragstart','appendChild','dataTransfer','stringify','title','setData','getIconAdapterFoldernames','12AeiyKi','copy','iconNames'];a=function(){return q;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x11a))/0x1+parseInt(j(0x11b))/0x2*(parseInt(j(0x116))/0x3)+parseInt(j(0x117))/0x4*(-parseInt(j(0x10f))/0x5)+-parseInt(j(0x126))/0x6*(-parseInt(j(0x130))/0x7)+parseInt(j(0x119))/0x8+parseInt(j(0x10e))/0x9+parseInt(j(0x129))/0xa*(parseInt(j(0x12c))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x702c9));function b(c,d){c=c-0x10e;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x111)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x11c)]={};[k(0x113)];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this[l(0x113)]=this['_getDomElement']('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[m(0x128)]()){let d=c[m(0x110)];;const e=document['createElement']('div'),g=document['createElement']('img');g['src']=d,g['draggable']=![],e[m(0x123)]=c[m(0x12e)],e[m(0x115)]=!![],e[m(0x120)](g),e[m(0x120)](document[m(0x12b)](c['name'])),e[m(0x11f)]=h=>{const n=m,i={'tag':n(0x12d),'defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x131)]=n(0x114),h[n(0x121)][n(0x124)]('text/plain',d),h['dataTransfer'][n(0x124)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x121)][n(0x124)](dragDropFormatNamePropertyGrid,JSON[n(0x122)]({'type':n(0x12f),'text':d})),h['dataTransfer'][n(0x118)]=n(0x127),!![];},this[m(0x113)][m(0x120)](e);}}async*[k(0x128)](){const o=k,c=await iobrokerHandler[o(0x125)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x12a)](c,d);for(const g of e){if(g[p(0x132)])yield*this['_readFolder'](c,d+'/'+g[p(0x11d)]);else{if(!g['file']['endsWith']('.html')){if(this[p(0x112)]){if(!g['file'][p(0x11e)](this[p(0x112)]))continue;}const h=g[p(0x11d)]['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x11d)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);