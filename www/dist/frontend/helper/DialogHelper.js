const i=b;function a(){const t=['move','cursor','40858HWUFOR','1902168KjAzyG','title','25BLpgTT','bind','cssClass',')\x20/\x202))','host','moveable','calc(','onpointerdown','addEventListener','style','none','width','onclick','height','332376MCCNBj','px)','getBoundingClientRect','offsetHeight','container','\x20+\x20','3046128RUJaHk','1034988sskUhu','closeable','2289670xJwAYr','getTime','block','_getDomElement','content','close','calc(50%\x20-\x20((','removeEventListener','template','element','1393315RNJeNg','top','appendChild','innerHTML','36hQPOrN','pointermove','closeDialog'];a=function(){return t;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e2))/0x1*(-parseInt(h(0x1df))/0x2)+parseInt(h(0x1f7))/0x3+-parseInt(h(0x1e0))/0x4+parseInt(h(0x1f9))/0x5+-parseInt(h(0x1f6))/0x6+-parseInt(h(0x203))/0x7+parseInt(h(0x1f0))/0x8*(parseInt(h(0x207))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x48a60));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x1f4)];['uniqueId'];static [i(0x201)]=html`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle[j(0x1eb)][j(0x1de)]=='move';}set[i(0x1e7)](c){const k=i;c&&(this.#dialogTitle['style'][k(0x1de)]=k(0x20a),this.#dialogTitle[k(0x1e9)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x1eb)]['display']!=l(0x1ec);}set[i(0x1f8)](c){const m=i;c?this.#dialogClose['style']['display']=m(0x1fb):this.#dialogClose['style']['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this[n(0x1fc)](n(0x1fe)),this.#dialogContent=this['_getDomElement'](n(0x1fd)),this.#dialogClose[n(0x1ee)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0x1e3)](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const o=i,d='id'+new Date()[o(0x1fa)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0x1e1)]==='string')e.#dialogTitle[o(0x206)]=c[o(0x1e1)];else e.#dialogTitle[o(0x205)](c['title']);}if(typeof c[o(0x1fd)]==='string')e.#dialogContent[o(0x206)]=c['content'];else e.#dialogContent['appendChild'](c['content']);return e[o(0x1eb)][o(0x1ed)]=c['width']??'300px',e['style']['height']=c[o(0x1ef)]??'200px',e['style']['width']='calc('+e[o(0x1eb)]['width']+o(0x1f5)+this['offsetWidth']+o(0x1f1),e['style'][o(0x1ef)]=o(0x1e8)+e[o(0x1eb)]['height']+o(0x1f5)+this[o(0x1f3)]+o(0x1f1),e[o(0x1eb)]['top']=c[o(0x204)]??o(0x1ff)+e['style']['height']+o(0x1e5),e['style']['left']=c['left']??'calc(50%\x20-\x20(('+e['style'][o(0x1ed)]+')\x20/\x202))',c['moveable']&&(e['moveable']=!![]),(c[o(0x1f8)]===![]||c['closeable']===!![])&&(e[o(0x1f8)]=c[o(0x1f8)]),c[o(0x1e4)]&&(e['className']=c[o(0x1e4)]),document['getElementById']('overlayLayer')['appendChild'](e),d;}static[i(0x209)](c){const p=i;let d=c[p(0x202)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x1e6)];}d&&d.#closeDialog();}#closeDialog(){document['getElementById']('overlayLayer')['removeChild'](this);}#moveStart(c){const q=i,d=this[q(0x1f2)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](q(0x208),this.#moveBound),window[q(0x1ea)]('pointerup',this.#moveEndBound);}#move(c){const r=i;this[r(0x1eb)]['left']=c['x']-this.#xOffset+'px',this['style'][r(0x204)]=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x200)]('pointermove',this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}function b(c,d){c=c-0x1de;const e=a();let f=e[c];return f;}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);