const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x11a))/0x1*(parseInt(h(0x122))/0x2)+parseInt(h(0x103))/0x3+parseInt(h(0x10e))/0x4*(parseInt(h(0x10a))/0x5)+-parseInt(h(0x11d))/0x6+-parseInt(h(0x12c))/0x7*(-parseInt(h(0x129))/0x8)+parseInt(h(0x12d))/0x9+-parseInt(h(0x10c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb292b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0xfd;const e=a();let f=e[c];return f;}function a(){const t=['closeable','\x20+\x20','className','host','string','getTime','style','8557dDQKLd','display','width','138018SMhtYb','getRootNode','getBoundingClientRect','pointermove','content','148DjvtQk','cursor','left','closeDialog','addEventListener','iobroker-webui-dialog','appendChild','8559448aoZhjo','close','cssClass','7oNyabI','11708379FhIhqZ','getElementById','200px','bind','title','_getDomElement','top','px)','template','1737138lzQNdT','calc(','pointerup','define','calc(50%\x20-\x20((',')\x20/\x202))','height','145UwKGhj','removeEventListener','33562850GAbRWz','300px','72772EvaZrt','move','none','moveable','innerHTML'];a=function(){return t;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0x102)]=html`
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
        `;static ['is']=i(0x127);get['moveable'](){const j=i;return this.#dialogTitle['style'][j(0x123)]=='move';}set[i(0x111)](c){const k=i;c&&(this.#dialogTitle['style']['cursor']=k(0x10f),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x113)](){const l=i;return this.#dialogClose[l(0x119)][l(0x11b)]!='none';}set['closeable'](c){const m=i;c?this.#dialogClose['style'][m(0x11b)]='block':this.#dialogClose[m(0x119)]['display']=m(0x110);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this[n(0xff)](n(0x12a)),this.#dialogContent=this[n(0xff)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0xfd)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const o=i,d='id'+new Date()[o(0x118)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0xfe)]==='string')e.#dialogTitle[o(0x112)]=c[o(0xfe)];else e.#dialogTitle[o(0x128)](c[o(0xfe)]);}if(typeof c[o(0x121)]===o(0x117))e.#dialogContent['innerHTML']=c[o(0x121)];else e.#dialogContent[o(0x128)](c['content']);return e['style'][o(0x11c)]=c[o(0x11c)]??o(0x10d),e['style'][o(0x109)]=c[o(0x109)]??o(0x12f),e[o(0x119)][o(0x11c)]='calc('+e['style'][o(0x11c)]+o(0x114)+this['offsetWidth']+'px)',e['style']['height']=o(0x104)+e['style']['height']+o(0x114)+this['offsetHeight']+o(0x101),e['style']['top']=c[o(0x100)]??'calc(50%\x20-\x20(('+e[o(0x119)][o(0x109)]+o(0x108),e['style']['left']=c['left']??o(0x107)+e['style'][o(0x11c)]+o(0x108),c[o(0x111)]&&(e[o(0x111)]=!![]),(c[o(0x113)]===![]||c['closeable']===!![])&&(e[o(0x113)]=c['closeable']),c[o(0x12b)]&&(e[o(0x115)]=c[o(0x12b)]),document[o(0x12e)]('overlayLayer')['appendChild'](e),d;}static[i(0x125)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x11e)]()?.[p(0x116)];}d&&d.#closeDialog();}#closeDialog(){document['getElementById']('overlayLayer')['removeChild'](this);}#moveStart(c){const q=i,d=this[q(0x11f)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window[q(0x126)]('pointerup',this.#moveEndBound);}#move(c){const r=i;this['style'][r(0x124)]=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x10b)](s(0x120),this.#moveBound),window[s(0x10b)](s(0x105),this.#moveEndBound);}}customElements[i(0x106)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);