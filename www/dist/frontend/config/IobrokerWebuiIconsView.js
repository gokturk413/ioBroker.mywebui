const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x191))/0x1*(parseInt(j(0x19a))/0x2)+parseInt(j(0x19e))/0x3*(parseInt(j(0x18c))/0x4)+parseInt(j(0x1a1))/0x5*(-parseInt(j(0x1a2))/0x6)+parseInt(j(0x19b))/0x7+parseInt(j(0x1aa))/0x8*(-parseInt(j(0x197))/0x9)+parseInt(j(0x1a6))/0xa+parseInt(j(0x199))/0xb*(-parseInt(j(0x1a5))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf2212));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const p=['file','endsWith','draggable','src','readDir','define','title','9184cywUet','setData','dataTransfer','text/plain','iconNames','213943qtJqjY','_readFolder','createElement','createTextNode','img','dropEffect','85383LzytKd','div','187oSdyTs','2cHoLRO','13263082gjsFvQ','substring','_root','1554jupwAw','_filter','lastIndexOf','337235HUdFbZ','6LHiPUE','_getDomElement','stringify','596772qYryxq','3342440mQjUAU','isDir','iobroker-webui-icons-view','ondragstart','1096dOBjnO','style'];a=function(){return p;};return a();}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x185;const e=a();let f=e[c];return f;}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [k(0x1ab)]=css`
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
        `;static ['is']=k(0x1a8);static ['properties']={};[k(0x19d)];[k(0x19f)];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x1a3)]('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[m(0x190)]()){let d=c['path'];;const e=document['createElement'](m(0x198)),g=document[m(0x193)](m(0x195));g[m(0x188)]=d,g[m(0x187)]=![],e[m(0x18b)]=c['name'],e[m(0x187)]=!![],e['appendChild'](g),e['appendChild'](document[m(0x194)](c['name'])),e[m(0x1a9)]=h=>{const n=m,i={'tag':n(0x195),'defaultAttributes':{'src':d}};return h[n(0x18e)]['effectAllowed']='all',h['dataTransfer']['setData'](n(0x18f),d),h[n(0x18e)][n(0x18d)](dragDropFormatNameElementDefinition,JSON[n(0x1a4)](i)),h[n(0x18e)][n(0x18d)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h['dataTransfer'][n(0x196)]='copy',!![];},this[m(0x19d)]['appendChild'](e);}}async*['iconNames'](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x192)](c,d){const o=k,e=await iobrokerHandler['connection'][o(0x189)](c,d);for(const g of e){if(g[o(0x1a7)])yield*this[o(0x192)](c,d+'/'+g[o(0x185)]);else{if(!g['file'][o(0x186)]('.html')){if(this[o(0x19f)]){if(!g[o(0x185)]['match'](this['_filter']))continue;}const h=g[o(0x185)][o(0x1a0)]('.'),i=g['file'][o(0x19c)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0x18a)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);