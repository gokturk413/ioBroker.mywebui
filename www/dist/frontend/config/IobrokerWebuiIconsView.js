const k=b;function b(c,d){c=c-0x1bc;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1cb))/0x1*(parseInt(j(0x1c1))/0x2)+-parseInt(j(0x1da))/0x3*(-parseInt(j(0x1ce))/0x4)+-parseInt(j(0x1c5))/0x5+parseInt(j(0x1dc))/0x6+parseInt(j(0x1d4))/0x7+-parseInt(j(0x1c3))/0x8*(parseInt(j(0x1de))/0x9)+parseInt(j(0x1d1))/0xa*(parseInt(j(0x1d5))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd3fee));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x1d0)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x1be)]={};['_root'];['_filter'];constructor(){const l=k;super(),super[l(0x1c4)](),this[l(0x1c7)]=this['_getDomElement'](l(0x1ca));}async['ready'](){const m=k;this[m(0x1d3)](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c['path'];;const e=document[m(0x1dd)](m(0x1bf)),g=document['createElement']('img');g[m(0x1c8)]=d,g['draggable']=![],e[m(0x1db)]=c['name'],e[m(0x1bc)]=!![],e[m(0x1bd)](g),e['appendChild'](document['createTextNode'](c['name'])),e[m(0x1d9)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x1c2)]=n(0x1cc),h[n(0x1c6)]['setData'](n(0x1d8),d),h['dataTransfer'][n(0x1c9)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer'][n(0x1c9)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x1cd),'text':d})),h['dataTransfer']['dropEffect']=n(0x1cf),!![];},this['_root']['appendChild'](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this[o(0x1d7)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x1d2)](c,d);for(const g of e){if(g['isDir'])yield*this[p(0x1d7)](c,d+'/'+g[p(0x1df)]);else{if(!g['file'][p(0x1d6)]('.html')){if(this['_filter']){if(!g[p(0x1df)]['match'](this['_filter']))continue;}const h=g[p(0x1df)]['lastIndexOf']('.'),i=g['file'][p(0x1c0)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}function a(){const q=['icon','4KHMDTA','copy','template','23992490LmhnGF','readDir','_parseAttributesToProperties','3341786VduzuH','11zSuShE','endsWith','_readFolder','text/plain','ondragstart','1829073rkMpID','title','6849822WctHUN','createElement','27yTKayi','file','draggable','appendChild','properties','div','substring','20yihTQi','effectAllowed','4088984dpMoup','_restoreCachedInititalValues','4888960CHlvfF','dataTransfer','_root','src','setData','root','124848PzybgD','all'];a=function(){return q;};return a();}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);