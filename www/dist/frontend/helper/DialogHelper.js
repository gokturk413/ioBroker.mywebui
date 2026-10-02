const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xfd))/0x1*(parseInt(h(0xf7))/0x2)+parseInt(h(0xec))/0x3+parseInt(h(0xdc))/0x4+-parseInt(h(0xef))/0x5*(-parseInt(h(0xe5))/0x6)+-parseInt(h(0xf8))/0x7+parseInt(h(0xd6))/0x8*(-parseInt(h(0xe9))/0x9)+-parseInt(h(0xe1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbb65f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
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
        `;static ['is']=i(0xea);get[i(0xe2)](){const j=i;return this.#dialogTitle[j(0xe0)]['cursor']==j(0xd9);}set[i(0xe2)](c){const k=i;c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle[k(0xdb)]=d=>{return this.#moveStart(d),![];});}get[i(0xe4)](){const l=i;return this.#dialogClose['style'][l(0xde)]!=l(0xfe);}set[i(0xe4)](c){const m=i;c?this.#dialogClose['style']['display']=m(0xff):this.#dialogClose['style']['display']=m(0xfe);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0xfc)](n(0xd8)),this.#dialogClose=this[n(0xfc)]('close'),this.#dialogContent=this[n(0xfc)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0xf0)](this);}static [i(0xf1)]=0x2;static [i(0xfa)]=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[o(0xeb)]){if(typeof c[o(0xeb)]===o(0xf3))e.#dialogTitle[o(0xed)]=c['title'];else e.#dialogTitle[o(0xf2)](c[o(0xeb)]);}if(typeof c['content']===o(0xf3))e.#dialogContent[o(0xed)]=c[o(0xda)];else e.#dialogContent[o(0xf2)](c[o(0xda)]);return e['style'][o(0x100)]=c['width']??'300px',e[o(0xe0)]['height']=c[o(0xf6)]??'200px',e['style'][o(0x100)]='calc('+e[o(0xe0)][o(0x100)]+'\x20+\x20'+this['offsetWidth']+o(0xd7),e[o(0xe0)][o(0xf6)]='calc('+e['style'][o(0xf6)]+o(0xe7)+this[o(0xfa)]+'px)',e[o(0xe0)]['top']=c['top']??o(0xf5)+e['style']['height']+o(0xee),e['style'][o(0xf4)]=c[o(0xf4)]??'calc(50%\x20-\x20(('+e['style']['width']+o(0xee),c['moveable']&&(e[o(0xe2)]=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e['closeable']=c['closeable']),c['cssClass']&&(e['className']=c['cssClass']),document['getElementById'](o(0xf9))[o(0xf2)](e),d;}static['closeDialog'](c){const p=i;let d=c[p(0xe8)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0xdf)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x101)]('overlayLayer')['removeChild'](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](r(0xe6),this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const s=i;this[s(0xe0)]['left']=c['x']-this.#xOffset+'px',this['style'][s(0xe3)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0xdd)]('pointermove',this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}customElements[i(0xfb)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);function b(c,d){c=c-0xd6;const e=a();let f=e[c];return f;}function a(){const u=['width','getElementById','2505488phDBXg','px)','head','move','content','onpointerdown','2195076jLzCsa','removeEventListener','display','getRootNode','style','13800230CLiEhd','moveable','top','closeable','84pOVIUB','pointermove','\x20+\x20','element','27UbbBOK','iobroker-webui-dialog','title','3480840LJAplv','innerHTML',')\x20/\x202))','532640lXoHKd','bind','offsetWidth','appendChild','string','left','calc(50%\x20-\x20((','height','13654FXbZjI','3612490IHtsfB','overlayLayer','offsetHeight','define','_getDomElement','59EZyyVQ','none','block'];a=function(){return u;};return a();}