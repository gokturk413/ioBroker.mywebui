const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x155))/0x1*(parseInt(j(0x140))/0x2)+parseInt(j(0x154))/0x3+-parseInt(j(0x14f))/0x4*(-parseInt(j(0x153))/0x5)+-parseInt(j(0x14a))/0x6+-parseInt(j(0x156))/0x7+parseInt(j(0x141))/0x8+parseInt(j(0x143))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x84119));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x139;const e=a();let f=e[c];return f;}function a(){const q=['dataTransfer','div','define','file','stringify','6054522kKDYBV','draggable','_assignEvents','setData','getIconAdapterFoldernames','2344lTuRRf','_readFolder','iconNames','iobroker-webui-icons-view','4105mdsQkH','2353824qxlVBB','1MhbbUW','2822225gbTVlq','.html','lastIndexOf','ready','substring','template','createElement','_root','1483762gTZwOO','7532600YHxysF','root','4390263mcHGdF','appendChild'];a=function(){return q;};return a();}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x13d)]=html`
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
        `;static ['is']=k(0x152);static ['properties']={};[k(0x13f)];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this['_getDomElement'](l(0x142));}async[k(0x13b)](){const m=k;this['_parseAttributesToProperties'](),this[m(0x14c)]();for await(const c of this[m(0x151)]()){let d=c['path'];;const e=document[m(0x13e)](m(0x146)),g=document['createElement']('img');g['src']=d,g['draggable']=![],e['title']=c['name'],e[m(0x14b)]=!![],e[m(0x144)](g),e[m(0x144)](document['createTextNode'](c['name'])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x145)]['effectAllowed']='all',h[n(0x145)][n(0x14d)]('text/plain',d),h['dataTransfer'][n(0x14d)](dragDropFormatNameElementDefinition,JSON[n(0x149)](i)),h[n(0x145)]['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x149)]({'type':'icon','text':d})),h[n(0x145)]['dropEffect']='copy',!![];},this['_root']['appendChild'](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0x14e)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this[p(0x150)](c,d+'/'+g['file']);else{if(!g['file']['endsWith'](p(0x139))){if(this['_filter']){if(!g[p(0x148)]['match'](this['_filter']))continue;}const h=g[p(0x148)][p(0x13a)]('.'),i=g[p(0x148)][p(0x13c)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0x147)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);