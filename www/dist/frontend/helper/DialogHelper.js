const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x14c))/0x1+-parseInt(h(0x134))/0x2*(-parseInt(h(0x120))/0x3)+-parseInt(h(0x13b))/0x4+parseInt(h(0x127))/0x5*(parseInt(h(0x13d))/0x6)+parseInt(h(0x133))/0x7+parseInt(h(0x140))/0x8*(parseInt(h(0x122))/0x9)+parseInt(h(0x131))/0xa*(parseInt(h(0x150))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaf3d2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x120;const e=a();let f=e[c];return f;}function a(){const s=['left','cssClass','calc(','2061352nwwINs','innerHTML','13998shygve','none','head','2176iIIvcl','onclick','element','className','width','getElementById','appendChild','display','define','height','string','200px','612628NRKafM','300px','pointerup','cursor','1133MbLtYx','624678ifPOwa','closeable','16884DSftzZ','uniqueId','moveable','px)','content','305SikqII','top','_getDomElement','bind','title','host','addEventListener','calc(50%\x20-\x20((','style','getTime','25510ORetHc','removeEventListener','2140096brFvVZ','6OHThvg','iobroker-webui-dialog','getBoundingClientRect',')\x20/\x202))'];a=function(){return s;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x123)];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static ['style']=css`
            #root {
                width: 100%;
                height: 100%;
            }

            .dialog-title {
                margin:0;
                padding:0;
                font:inherit;
                color:inherit;
                font-weight:bold;
                height:2em;
                line-height:2em;
                overflow:hidden;
                padding:0 .8em;
                background-color:#eee;
            }

            .dialog-content {
                border-top:1px solid #ccc;
                position:absolute;
                top:2em;
                right:0;
                left:0;
                overflow:auto;
                height: calc(100% - 2em - 1px);
            }

            .dialog-content::-webkit-scrollbar {
                width:8px;
                height:8px;
                background-color:#f5f5f5;
                border-left:1px solid #ccc;
            }
            .dialog-content::-webkit-scrollbar-thumb {
                background-color:#666;
                border:none;
            }
            .dialog-content::-webkit-scrollbar-thumb:hover {background-color:#555}
            .dialog-content::-webkit-scrollbar-thumb:active {background-color:#444}
          

            .dialog-close {
                border:none;
                outline:none;
                background:none;
                font:inherit;
                font-family:Arial,Sans-Serif;
                font-style:normal;
                font-weight:bold;
                font-size:150%;
                line-height:1.4em;
                color:#aaa;
                text-decoration:none;
                position:absolute;
                top:0;
                right:.3em;
                text-align:center;
                cursor:pointer;
            }
            .dialog-close:focus {
                border-width:0;
                outline:none;
            }
            .dialog-close:hover,
            .dialog-close:focus { color: #C90000 }
            .dialog-close:active { color: #444 }
        `;static ['is']=i(0x135);get[i(0x124)](){const j=i;return this.#dialogTitle[j(0x12f)][j(0x14f)]=='move';}set[i(0x124)](c){const k=i;c&&(this.#dialogTitle[k(0x12f)]['cursor']='move',this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){return this.#dialogClose['style']['display']!='none';}set['closeable'](c){const l=i;c?this.#dialogClose[l(0x12f)]['display']='block':this.#dialogClose['style'][l(0x147)]=l(0x13e);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this['_getDomElement'](m(0x13f)),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this[m(0x129)](m(0x126)),this.#dialogClose[m(0x141)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[m(0x12a)](this),this.#moveEndBound=this.#moveEnd[m(0x12a)](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const n=i,d='id'+new Date()[n(0x130)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']===n(0x14a))e.#dialogTitle['innerHTML']=c[n(0x12b)];else e.#dialogTitle['appendChild'](c[n(0x12b)]);}if(typeof c[n(0x126)]==='string')e.#dialogContent[n(0x13c)]=c['content'];else e.#dialogContent[n(0x146)](c['content']);return e[n(0x12f)][n(0x144)]=c[n(0x144)]??n(0x14d),e['style']['height']=c[n(0x149)]??n(0x14b),e['style']['width']='calc('+e[n(0x12f)][n(0x144)]+'\x20+\x20'+this['offsetWidth']+n(0x125),e[n(0x12f)]['height']=n(0x13a)+e[n(0x12f)][n(0x149)]+'\x20+\x20'+this['offsetHeight']+n(0x125),e['style'][n(0x128)]=c[n(0x128)]??'calc(50%\x20-\x20(('+e['style'][n(0x149)]+n(0x137),e['style']['left']=c[n(0x138)]??n(0x12e)+e['style'][n(0x144)]+')\x20/\x202))',c[n(0x124)]&&(e['moveable']=!![]),(c[n(0x121)]===![]||c[n(0x121)]===!![])&&(e[n(0x121)]=c[n(0x121)]),c['cssClass']&&(e[n(0x143)]=c[n(0x139)]),document[n(0x145)]('overlayLayer')[n(0x146)](e),d;}static['closeDialog'](c){const o=i;let d=c[o(0x142)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[o(0x12c)];}d&&d.#closeDialog();}#closeDialog(){document['getElementById']('overlayLayer')['removeChild'](this);}#moveStart(c){const p=i,d=this[p(0x136)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window[p(0x12d)](p(0x14e),this.#moveEndBound);}#move(c){const q=i;this[q(0x12f)][q(0x138)]=c['x']-this.#xOffset+'px',this['style'][q(0x128)]=c['y']-this.#yOffset+'px';}#moveEnd(){const r=i;window[r(0x132)]('pointermove',this.#moveBound),window['removeEventListener'](r(0x14e),this.#moveEndBound);}}customElements[i(0x148)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);