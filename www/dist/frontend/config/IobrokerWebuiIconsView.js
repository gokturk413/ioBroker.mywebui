const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xa9))/0x1+parseInt(j(0xb7))/0x2*(-parseInt(j(0xb0))/0x3)+parseInt(j(0xb5))/0x4*(parseInt(j(0xc0))/0x5)+parseInt(j(0xb2))/0x6*(parseInt(j(0xb1))/0x7)+parseInt(j(0xb6))/0x8*(-parseInt(j(0xbf))/0x9)+-parseInt(j(0xb4))/0xa+parseInt(j(0xae))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa019e));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function a(){const q=['_restoreCachedInititalValues','13216060VSGJaT','setData','25587DbnUqY','105147xlbEyC','228WiZDlc','appendChild','3423390rAzqnH','3439532pdeSDI','7216712xLXCVa','202EojHUv','_readFolder','iconNames','img','_root','isDir','file','substring','9SIsQFI','5HKKkGB','match','dataTransfer','getIconAdapterFoldernames','_assignEvents','draggable','style','ready','copy','iobroker-webui-icons-view','createTextNode','_filter','129490tITYcs','endsWith','title','_getDomElement'];a=function(){return q;};return a();}function b(c,d){c=c-0xa6;const e=a();let f=e[c];return f;}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [k(0xc6)]=css`
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
        `;static ['is']=k(0xa6);static ['properties']={};[k(0xbb)];[k(0xa8)];constructor(){const l=k;super(),super[l(0xad)](),this[l(0xbb)]=this[l(0xac)]('root');}async[k(0xc7)](){const m=k;this['_parseAttributesToProperties'](),this[m(0xc4)]();for await(const c of this['iconNames']()){let d=c['path'];;const e=document['createElement']('div'),g=document['createElement']('img');g['src']=d,g['draggable']=![],e[m(0xab)]=c['name'],e[m(0xc5)]=!![],e['appendChild'](g),e[m(0xb3)](document[m(0xa7)](c['name'])),e['ondragstart']=h=>{const n=m,i={'tag':n(0xba),'defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']='all',h['dataTransfer'][n(0xaf)]('text/plain',d),h['dataTransfer'][n(0xaf)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0xc2)]['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h['dataTransfer']['dropEffect']=n(0xc8),!![];},this[m(0xbb)]['appendChild'](e);}}async*[k(0xb9)](){const o=k,c=await iobrokerHandler[o(0xc3)]();for(const d of c){yield*this[o(0xb8)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g[p(0xbc)])yield*this[p(0xb8)](c,d+'/'+g[p(0xbd)]);else{if(!g[p(0xbd)][p(0xaa)]('.html')){if(this[p(0xa8)]){if(!g['file'][p(0xc1)](this[p(0xa8)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g['file'][p(0xbe)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0xbd)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);