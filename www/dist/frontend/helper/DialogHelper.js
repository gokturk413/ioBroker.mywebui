const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xd5))/0x1+parseInt(h(0xc6))/0x2+parseInt(h(0xd9))/0x3+-parseInt(h(0xe3))/0x4+parseInt(h(0xba))/0x5+parseInt(h(0xc0))/0x6+-parseInt(h(0xd3))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2fe80));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0xbd)];['uniqueId'];static [i(0xc7)]=html`
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
        `;static ['is']=i(0xcc);get['moveable'](){const j=i;return this.#dialogTitle[j(0xcb)]['cursor']=='move';}set[i(0xd7)](c){const k=i;c&&(this.#dialogTitle[k(0xcb)][k(0xbf)]=k(0xbb),this.#dialogTitle[k(0xc1)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0xcb)]['display']!='none';}set[i(0xc9)](c){const m=i;c?this.#dialogClose['style']['display']=m(0xdc):this.#dialogClose[m(0xcb)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0xce)](n(0xd1)),this.#dialogClose=this[n(0xce)](n(0xca)),this.#dialogContent=this[n(0xce)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0xdd)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0xe4)]=0x2;static [i(0xe1)]=0x23;static[i(0xc2)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0xe2)]===o(0xd2))e.#dialogTitle[o(0xd6)]=c['title'];else e.#dialogTitle[o(0xb9)](c['title']);}if(typeof c[o(0xc8)]===o(0xd2))e.#dialogContent['innerHTML']=c[o(0xc8)];else e.#dialogContent[o(0xb9)](c['content']);return e['style'][o(0xcd)]=c[o(0xcd)]??o(0xde),e[o(0xcb)]['height']=c[o(0xbe)]??o(0xb8),e['style'][o(0xcd)]='calc('+e['style'][o(0xcd)]+'\x20+\x20'+this['offsetWidth']+'px)',e[o(0xcb)]['height']='calc('+e['style']['height']+o(0xdb)+this['offsetHeight']+'px)',e['style']['top']=c[o(0xcf)]??o(0xd4)+e['style']['height']+')\x20/\x202))',e['style']['left']=c[o(0xbc)]??'calc(50%\x20-\x20(('+e['style'][o(0xcd)]+o(0xda),c[o(0xd7)]&&(e['moveable']=!![]),(c[o(0xc9)]===![]||c[o(0xc9)]===!![])&&(e['closeable']=c[o(0xc9)]),c['cssClass']&&(e['className']=c['cssClass']),document['getElementById']('overlayLayer')[o(0xb9)](e),d;}static[i(0xdf)](c){let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const p=i;document[p(0xd8)](p(0xd0))['removeChild'](this);}#moveStart(c){const q=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](q(0xe0),this.#moveBound),window[q(0xc5)]('pointerup',this.#moveEndBound);}#move(c){const r=i;this['style']['left']=c['x']-this.#xOffset+'px',this[r(0xcb)][r(0xcf)]=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0xc4)](s(0xe0),this.#moveBound),window[s(0xc4)]('pointerup',this.#moveEndBound);}}customElements[i(0xc3)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);function b(c,d){c=c-0xb8;const e=a();let f=e[c];return f;}function a(){const t=['block','bind','300px','closeDialog','pointermove','offsetHeight','title','700892WTVYhn','offsetWidth','200px','appendChild','703215HvfIVQ','move','left','container','height','cursor','1243104wrvtJZ','onpointerdown','openDialog','define','removeEventListener','addEventListener','178204YeJHhN','template','content','closeable','close','style','iobroker-webui-dialog','width','_getDomElement','top','overlayLayer','head','string','3187366WOXweR','calc(50%\x20-\x20((','170748pdRmZN','innerHTML','moveable','getElementById','657324EXpbda',')\x20/\x202))','\x20+\x20'];a=function(){return t;};return a();}