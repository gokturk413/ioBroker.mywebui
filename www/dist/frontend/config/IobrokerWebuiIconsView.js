const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x175))/0x1+parseInt(j(0x18f))/0x2+parseInt(j(0x187))/0x3+parseInt(j(0x192))/0x4*(parseInt(j(0x195))/0x5)+parseInt(j(0x18a))/0x6*(-parseInt(j(0x17f))/0x7)+-parseInt(j(0x180))/0x8+-parseInt(j(0x17a))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a380));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function a(){const p=['2745952XfRppS','_restoreCachedInititalValues','draggable','img','div','_filter','_parseAttributesToProperties','521532kITNtU','connection','_assignEvents','1270266kOBfpM','root','.html','_root','dropEffect','882120EuPgRF','dataTransfer','ondragstart','4TwWiMS','all','name','1950505GyRVCY','_readFolder','appendChild','createElement','properties','iconNames','173010tLguRx','file','iobroker-webui-icons-view','setData','template','1555965NvCJUV','endsWith','_getDomElement','style','substring','14ERNjiv'];a=function(){return p;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x172;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x179)]=html`
        <div id="root"></div>
    `;static [k(0x17d)]=css`
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
        `;static ['is']=k(0x177);static [k(0x173)]={};['_root'];[k(0x185)];constructor(){const l=k;super(),super[l(0x181)](),this[l(0x18d)]=this[l(0x17c)](l(0x18b));}async['ready'](){const m=k;this[m(0x186)](),this[m(0x189)]();for await(const c of this['iconNames']()){let d=c['path'];;const e=document[m(0x172)](m(0x184)),g=document['createElement'](m(0x183));g['src']=d,g['draggable']=![],e['title']=c[m(0x194)],e[m(0x182)]=!![],e[m(0x197)](g),e[m(0x197)](document['createTextNode'](c['name'])),e[m(0x191)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x190)]['effectAllowed']=n(0x193),h['dataTransfer'][n(0x178)]('text/plain',d),h['dataTransfer'][n(0x178)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x190)]['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h[n(0x190)][n(0x18e)]='copy',!![];},this['_root']['appendChild'](e);}}async*[k(0x174)](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x196)](c,d){const o=k,e=await iobrokerHandler[o(0x188)]['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g[o(0x176)][o(0x17b)](o(0x18c))){if(this['_filter']){if(!g[o(0x176)]['match'](this[o(0x185)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g[o(0x176)][o(0x17e)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);