const k=b;function a(){const q=['isDir','5PbeaNl','img','3191224lrRyYa','template','appendChild','_filter','ondragstart','1403759XfeNaQ','_readFolder','ready','div','effectAllowed','setData','dataTransfer','1755364bAypmg','stringify','createTextNode','getIconAdapterFoldernames','501274xfQfkg','672664oNMuAx','9432786EnAoRj','all','properties','substring','18gabQBJ','3Jeftme','draggable','10hxXxoG','file','root','_root','define','endsWith','2390562aTbQXX','createElement','text/plain'];a=function(){return q;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xa9))/0x1+-parseInt(j(0xa5))/0x2+parseInt(j(0xb0))/0x3*(parseInt(j(0xaa))/0x4)+parseInt(j(0x97))/0x5*(parseInt(j(0xb8))/0x6)+parseInt(j(0x9e))/0x7+parseInt(j(0x99))/0x8*(-parseInt(j(0xaf))/0x9)+parseInt(j(0xb2))/0xa*(parseInt(j(0xab))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6df8a));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x97;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x9a)]=html`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0xad)]={};[k(0xb5)];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this[l(0xb5)]=this['_getDomElement'](l(0xb4));}async[k(0xa0)](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['iconNames']()){let d=c['path'];;const e=document['createElement'](m(0xa1)),g=document[m(0xb9)]('img');g['src']=d,g[m(0xb1)]=![],e['title']=c['name'],e[m(0xb1)]=!![],e['appendChild'](g),e[m(0x9b)](document[m(0xa7)](c['name'])),e[m(0x9d)]=h=>{const n=m,i={'tag':n(0x98),'defaultAttributes':{'src':d}};return h['dataTransfer'][n(0xa2)]=n(0xac),h[n(0xa4)]['setData'](n(0xba),d),h[n(0xa4)][n(0xa3)](dragDropFormatNameElementDefinition,JSON[n(0xa6)](i)),h[n(0xa4)][n(0xa3)](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h[n(0xa4)]['dropEffect']='copy',!![];},this[m(0xb5)]['appendChild'](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0xa8)]();for(const d of c){yield*this[o(0x9f)](d,'');}}async*[k(0x9f)](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g[p(0xbb)])yield*this['_readFolder'](c,d+'/'+g[p(0xb3)]);else{if(!g['file'][p(0xb7)]('.html')){if(this['_filter']){if(!g[p(0xb3)]['match'](this[p(0x9c)]))continue;}const h=g['file']['lastIndexOf']('.'),i=g[p(0xb3)][p(0xae)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0xb3)]};}}}}}customElements[k(0xb6)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);