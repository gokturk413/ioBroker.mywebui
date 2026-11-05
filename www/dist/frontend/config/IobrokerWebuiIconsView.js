const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xee))/0x1*(parseInt(j(0xe7))/0x2)+parseInt(j(0xe3))/0x3*(-parseInt(j(0xf8))/0x4)+parseInt(j(0xf1))/0x5*(-parseInt(j(0x105))/0x6)+parseInt(j(0x103))/0x7+-parseInt(j(0xe8))/0x8*(parseInt(j(0x101))/0x9)+parseInt(j(0xec))/0xa+parseInt(j(0xfe))/0xb*(parseInt(j(0xed))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd835b));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const p=['name','all','img','7205451wIjZKF','iconNames','_filter','4265775ndcgDr','stringify','2063887LieCam','title','18FNUJam','_getDomElement','match','ready','_root','_readFolder','lastIndexOf','12pYslnC','isDir','define','endsWith','328082HriaPL','24fmsBYt','src','createTextNode','setData','2439110pfFifc','72yUWHMy','5befLtF','_assignEvents','properties','2823565PtFAAN','iobroker-webui-icons-view','substring','text/plain','_restoreCachedInititalValues','file','createElement','1287544PzVtXA','appendChild','dropEffect'];a=function(){return p;};return a();}function b(c,d){c=c-0xde;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=k(0xf2);static [k(0xf0)]={};[k(0xe0)];[k(0x100)];constructor(){const l=k;super(),super[l(0xf5)](),this[l(0xe0)]=this[l(0x106)]('root');}async[k(0xdf)](){const m=k;this['_parseAttributesToProperties'](),this[m(0xef)]();for await(const c of this[m(0xff)]()){let d=c['path'];;const e=document[m(0xf7)]('div'),g=document[m(0xf7)](m(0xfd));g[m(0xe9)]=d,g['draggable']=![],e[m(0x104)]=c['name'],e['draggable']=!![],e[m(0xf9)](g),e[m(0xf9)](document[m(0xea)](c[m(0xfb)])),e['ondragstart']=h=>{const n=m,i={'tag':n(0xfd),'defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']=n(0xfc),h['dataTransfer']['setData'](n(0xf4),d),h['dataTransfer'][n(0xeb)](dragDropFormatNameElementDefinition,JSON[n(0x102)](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h['dataTransfer'][n(0xfa)]='copy',!![];},this[m(0xe0)]['appendChild'](e);}}async*['iconNames'](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0xe1)](c,d){const o=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g[o(0xe4)])yield*this['_readFolder'](c,d+'/'+g[o(0xf6)]);else{if(!g['file'][o(0xe6)]('.html')){if(this['_filter']){if(!g[o(0xf6)][o(0xde)](this['_filter']))continue;}const h=g['file'][o(0xe2)]('.'),i=g['file'][o(0xf3)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0xe5)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);