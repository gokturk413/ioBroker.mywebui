const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x112))/0x1+parseInt(h(0x12a))/0x2+-parseInt(h(0x108))/0x3+parseInt(h(0x119))/0x4*(parseInt(h(0x118))/0x5)+-parseInt(h(0x12e))/0x6+parseInt(h(0x126))/0x7+parseInt(h(0x131))/0x8*(-parseInt(h(0x10a))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1fa3d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x108;const e=a();let f=e[c];return f;}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x11a)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x132)](){return this.#dialogTitle['style']['cursor']=='move';}set[i(0x132)](c){const j=i;c&&(this.#dialogTitle['style'][j(0x10b)]='move',this.#dialogTitle[j(0x127)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const k=i;return this.#dialogClose[k(0x11a)]['display']!=k(0x12b);}set[i(0x121)](c){const l=i;c?this.#dialogClose[l(0x11a)]['display']='block':this.#dialogClose['style']['display']=l(0x12b);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this[m(0x11b)](m(0x113)),this.#dialogClose=this[m(0x11b)](m(0x11d)),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[m(0x10e)](this),this.#moveEndBound=this.#moveEnd[m(0x10e)](this);}static ['offsetWidth']=0x2;static [i(0x128)]=0x23;static[i(0x12f)](c){const n=i,d='id'+new Date()[n(0x11c)](),e=new IoBrokerWebuiDialog();if(c[n(0x129)]){if(typeof c[n(0x129)]===n(0x110))e.#dialogTitle[n(0x116)]=c[n(0x129)];else e.#dialogTitle[n(0x120)](c['title']);}if(typeof c[n(0x10d)]==='string')e.#dialogContent[n(0x116)]=c['content'];else e.#dialogContent['appendChild'](c['content']);return e['style']['width']=c[n(0x10f)]??n(0x124),e['style']['height']=c['height']??n(0x11f),e[n(0x11a)]['width']=n(0x12c)+e['style'][n(0x10f)]+'\x20+\x20'+this['offsetWidth']+'px)',e[n(0x11a)]['height']=n(0x12c)+e[n(0x11a)][n(0x122)]+n(0x111)+this[n(0x128)]+'px)',e[n(0x11a)][n(0x12d)]=c[n(0x12d)]??'calc(50%\x20-\x20(('+e['style'][n(0x122)]+n(0x10c),e['style']['left']=c['left']??'calc(50%\x20-\x20(('+e[n(0x11a)][n(0x10f)]+n(0x10c),c[n(0x132)]&&(e[n(0x132)]=!![]),(c[n(0x121)]===![]||c['closeable']===!![])&&(e['closeable']=c['closeable']),c[n(0x109)]&&(e['className']=c[n(0x109)]),document[n(0x117)]('overlayLayer')[n(0x120)](e),d;}static['closeDialog'](c){const o=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[o(0x11e)];}d&&d.#closeDialog();}#closeDialog(){const p=i;document[p(0x117)](p(0x125))[p(0x134)](this);}#moveStart(c){const q=i,d=this[q(0x133)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[q(0x130)](q(0x114),this.#moveBound),window[q(0x130)]('pointerup',this.#moveEndBound);}#move(c){const r=i;this[r(0x11a)][r(0x123)]=c['x']-this.#xOffset+'px',this[r(0x11a)][r(0x12d)]=c['y']-this.#yOffset+'px';}#moveEnd(){window['removeEventListener']('pointermove',this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}customElements[i(0x115)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);function a(){const s=['style','_getDomElement','getTime','close','host','200px','appendChild','closeable','height','left','300px','overlayLayer','1706439jzhZpE','onpointerdown','offsetHeight','title','486774xRxypf','none','calc(','top','1340658muXlnU','openDialog','addEventListener','72asorLt','moveable','getBoundingClientRect','removeChild','126432cnNowX','cssClass','193077qLaDFB','cursor',')\x20/\x202))','content','bind','width','string','\x20+\x20','30991HkjLKS','head','pointermove','define','innerHTML','getElementById','790lzELQi','3344seuJRK'];a=function(){return s;};return a();}