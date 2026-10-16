function a(){const u=['string','removeEventListener','bind','head','host','calc(50%\x20-\x20((','closeDialog','1911665JLAJjs','width','1099224qCcHQU','overlayLayer','element','template','_getDomElement','display','pointerup','style','left','title','define','getRootNode','height','getElementById','onclick','8640RvwGIv','pointermove','moveable','close','closeable','addEventListener','454720KaAFng','cssClass','3048720nHfUIA','iobroker-webui-dialog','move','344pfYczA','7823224YacWOe','appendChild','offsetWidth','getTime','offsetHeight','content',')\x20/\x202))','block','none','2205417jSPpcL'];a=function(){return u;};return a();}const i=b;function b(c,d){c=c-0x1c0;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c3))/0x1+parseInt(h(0x1dc))/0x2+parseInt(h(0x1d2))/0x3+-parseInt(h(0x1c8))/0x4*(parseInt(h(0x1eb))/0x5)+-parseInt(h(0x1c5))/0x6+parseInt(h(0x1da))/0x7+-parseInt(h(0x1c9))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5c44f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0x1df)]=html`
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
        `;static ['is']=i(0x1c6);get[i(0x1ed)](){const j=i;return this.#dialogTitle[j(0x1e3)]['cursor']==j(0x1c7);}set['moveable'](c){const k=i;c&&(this.#dialogTitle[k(0x1e3)]['cursor']='move',this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x1c1)](){const l=i;return this.#dialogClose[l(0x1e3)][l(0x1e1)]!=l(0x1d1);}set[i(0x1c1)](c){const m=i;c?this.#dialogClose[m(0x1e3)][m(0x1e1)]=m(0x1d0):this.#dialogClose['style']['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x1e0)](n(0x1d6)),this.#dialogClose=this[n(0x1e0)](n(0x1c0)),this.#dialogContent=this[n(0x1e0)]('content'),this.#dialogClose[n(0x1ea)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x1d5)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0x1cb)]=0x2;static [i(0x1cd)]=0x23;static['openDialog'](c){const o=i,d='id'+new Date()[o(0x1cc)](),e=new IoBrokerWebuiDialog();if(c[o(0x1e5)]){if(typeof c[o(0x1e5)]===o(0x1d3))e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle['appendChild'](c['title']);}if(typeof c[o(0x1ce)]===o(0x1d3))e.#dialogContent['innerHTML']=c[o(0x1ce)];else e.#dialogContent[o(0x1ca)](c['content']);return e[o(0x1e3)]['width']=c[o(0x1db)]??'300px',e['style']['height']=c[o(0x1e8)]??'200px',e[o(0x1e3)][o(0x1db)]='calc('+e[o(0x1e3)][o(0x1db)]+'\x20+\x20'+this['offsetWidth']+'px)',e['style']['height']='calc('+e[o(0x1e3)][o(0x1e8)]+'\x20+\x20'+this[o(0x1cd)]+'px)',e['style']['top']=c['top']??o(0x1d8)+e[o(0x1e3)]['height']+o(0x1cf),e['style'][o(0x1e4)]=c['left']??'calc(50%\x20-\x20(('+e['style'][o(0x1db)]+')\x20/\x202))',c['moveable']&&(e[o(0x1ed)]=!![]),(c[o(0x1c1)]===![]||c[o(0x1c1)]===!![])&&(e['closeable']=c[o(0x1c1)]),c[o(0x1c4)]&&(e['className']=c['cssClass']),document[o(0x1e9)](o(0x1dd))['appendChild'](e),d;}static[i(0x1d9)](c){const p=i;let d=c[p(0x1de)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x1e7)]()?.[p(0x1d7)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x1e9)]('overlayLayer')['removeChild'](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0x1c2)](r(0x1ec),this.#moveBound),window[r(0x1c2)](r(0x1e2),this.#moveEndBound);}#move(c){const s=i;this['style'][s(0x1e4)]=c['x']-this.#xOffset+'px',this[s(0x1e3)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x1d4)]('pointermove',this.#moveBound),window['removeEventListener'](t(0x1e2),this.#moveEndBound);}}customElements[i(0x1e6)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);