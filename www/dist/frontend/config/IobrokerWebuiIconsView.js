const n=b;function b(c,d){c=c-0x1e5;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1ef))/0x1*(-parseInt(j(0x1fb))/0x2)+parseInt(j(0x205))/0x3*(parseInt(j(0x1f1))/0x4)+-parseInt(j(0x1f8))/0x5*(-parseInt(j(0x201))/0x6)+-parseInt(j(0x1f9))/0x7+parseInt(j(0x204))/0x8*(parseInt(j(0x203))/0x9)+parseInt(j(0x1f6))/0xa+parseInt(j(0x1e9))/0xb*(-parseInt(j(0x202))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa118b));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function a(){const q=['_root','path','iconNames','dataTransfer','readDir','99GymWoN','stringify','createTextNode','createElement','img','setData','7769pVJemY','root','849568xkWrDv','_readFolder','name','getIconAdapterFoldernames','ondragstart','2048710jIOqSb','endsWith','35CfmKZY','8885744KxcGmB','connection','46idLcGG','appendChild','match','_filter','all','dropEffect','1048854sDNUtD','1675740tinFDc','1575tfaKhd','59384OAckXH','9MxsZQf','substring','file','draggable'];a=function(){return q;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-icons-view';static ['properties']={};['_root'];['_filter'];constructor(){const k=b;super(),super['_restoreCachedInititalValues'](),this[k(0x209)]=this['_getDomElement'](k(0x1f0));}async['ready'](){const l=b;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[l(0x1e6)]()){let d=c[l(0x1e5)];;const e=document['createElement']('div'),g=document[l(0x1ec)]('img');g['src']=d,g['draggable']=![],e['title']=c[l(0x1f3)],e[l(0x208)]=!![],e['appendChild'](g),e[l(0x1fc)](document[l(0x1eb)](c[l(0x1f3)])),e[l(0x1f5)]=h=>{const m=l,i={'tag':m(0x1ed),'defaultAttributes':{'src':d}};return h[m(0x1e7)]['effectAllowed']=m(0x1ff),h[m(0x1e7)][m(0x1ee)]('text/plain',d),h[m(0x1e7)][m(0x1ee)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[m(0x1e7)]['setData'](dragDropFormatNamePropertyGrid,JSON[m(0x1ea)]({'type':'icon','text':d})),h['dataTransfer'][m(0x200)]='copy',!![];},this[l(0x209)]['appendChild'](e);}}async*[n(0x1e6)](){const o=n,c=await iobrokerHandler[o(0x1f4)]();for(const d of c){yield*this[o(0x1f2)](d,'');}}async*['_readFolder'](c,d){const p=n,e=await iobrokerHandler[p(0x1fa)][p(0x1e8)](c,d);for(const g of e){if(g['isDir'])yield*this[p(0x1f2)](c,d+'/'+g[p(0x207)]);else{if(!g['file'][p(0x1f7)]('.html')){if(this['_filter']){if(!g['file'][p(0x1fd)](this[p(0x1fe)]))continue;}const h=g[p(0x207)]['lastIndexOf']('.'),i=g['file'][p(0x206)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);