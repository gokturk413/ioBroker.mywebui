const k=b;function b(c,d){c=c-0x18a;const e=a();let f=e[c];return f;}function a(){const q=['ondragstart','div','8288Qfzzxs','template','appendChild','4798388RQWSYW','4307364JZSztN','effectAllowed','style','src','name','dataTransfer','readDir','connection','dropEffect','10842849ZmyQlx','copy','_restoreCachedInititalValues','_assignEvents','root','isDir','2264380jnifdw','text/plain','draggable','600OaqhZK','28ZcqziD','1410562EKxEpk','_root','iconNames','setData','_filter','path','5VhorqT','file','_readFolder','stringify','256239HZlQKh'];a=function(){return q;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x198))/0x1+-parseInt(j(0x197))/0x2*(parseInt(j(0x1a2))/0x3)+parseInt(j(0x1a8))/0x4+parseInt(j(0x19e))/0x5*(parseInt(j(0x1a9))/0x6)+parseInt(j(0x1a5))/0x7*(parseInt(j(0x196))/0x8)+parseInt(j(0x18d))/0x9+parseInt(j(0x193))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcaeaa));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x1a6)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};[k(0x199)];['_filter'];constructor(){const l=k;super(),super[l(0x18f)](),this['_root']=this['_getDomElement'](l(0x191));}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this[m(0x190)]();for await(const c of this[m(0x19a)]()){let d=c[m(0x19d)];;const e=document['createElement'](m(0x1a4)),g=document['createElement']('img');g[m(0x1ac)]=d,g['draggable']=![],e['title']=c[m(0x1ad)],e[m(0x195)]=!![],e['appendChild'](g),e[m(0x1a7)](document['createTextNode'](c[m(0x1ad)])),e[m(0x1a3)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x1aa)]='all',h['dataTransfer']['setData'](n(0x194),d),h[n(0x1ae)][n(0x19b)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x1ae)]['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x1a1)]({'type':'icon','text':d})),h['dataTransfer'][n(0x18c)]=n(0x18e),!![];},this[m(0x199)][m(0x1a7)](e);}}async*[k(0x19a)](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x1a0)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler[p(0x18b)][p(0x18a)](c,d);for(const g of e){if(g[p(0x192)])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g[p(0x19f)]['endsWith']('.html')){if(this['_filter']){if(!g['file']['match'](this[p(0x19c)]))continue;}const h=g[p(0x19f)]['lastIndexOf']('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x19f)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);