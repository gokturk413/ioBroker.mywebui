const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x202))/0x1*(parseInt(h(0x215))/0x2)+-parseInt(h(0x1ff))/0x3*(-parseInt(h(0x210))/0x4)+-parseInt(h(0x20e))/0x5+parseInt(h(0x1f6))/0x6+parseInt(h(0x200))/0x7+parseInt(h(0x211))/0x8+-parseInt(h(0x1f7))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1fc16));function b(c,d){c=c-0x1ee;const e=a();let f=e[c];return f;}function a(){const t=['calc(50%\x20-\x20((','display','block','moveable','string','container','300px','element','\x20+\x20','title','px)','1063245SsMfwq','style','311180tyXnxg','2051808XOEiLc','innerHTML','pointerup','removeChild','395086hcAieX','move','pointermove','openDialog','cssClass','200px','bind','close','content','closeable','1291758PJikrx','2619549AbHxZi','cursor','left','className','width','removeEventListener','height','host','9nTVHnV','883183XBeiaQ','calc(','1njdaWr'];a=function(){return t;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x208)];['uniqueId'];static ['template']=html`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x206)](){const j=i;return this.#dialogTitle[j(0x20f)][j(0x1f8)]==j(0x216);}set['moveable'](c){const k=i;c&&(this.#dialogTitle[k(0x20f)]['cursor']=k(0x216),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){return this.#dialogClose['style']['display']!='none';}set['closeable'](c){const l=i;c?this.#dialogClose['style'][l(0x204)]=l(0x205):this.#dialogClose[l(0x20f)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this['_getDomElement'](m(0x1f3)),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[m(0x1f2)](this),this.#moveEndBound=this.#moveEnd[m(0x1f2)](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static[i(0x1ef)](c){const n=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[n(0x20c)]===n(0x207))e.#dialogTitle[n(0x212)]=c['title'];else e.#dialogTitle['appendChild'](c['title']);}if(typeof c[n(0x1f4)]===n(0x207))e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent['appendChild'](c[n(0x1f4)]);return e[n(0x20f)]['width']=c[n(0x1fb)]??n(0x209),e[n(0x20f)][n(0x1fd)]=c['height']??n(0x1f1),e['style']['width']='calc('+e['style'][n(0x1fb)]+'\x20+\x20'+this['offsetWidth']+'px)',e[n(0x20f)]['height']=n(0x201)+e['style']['height']+n(0x20b)+this['offsetHeight']+n(0x20d),e[n(0x20f)]['top']=c['top']??'calc(50%\x20-\x20(('+e[n(0x20f)][n(0x1fd)]+')\x20/\x202))',e['style']['left']=c[n(0x1f9)]??n(0x203)+e['style']['width']+')\x20/\x202))',c[n(0x206)]&&(e[n(0x206)]=!![]),(c['closeable']===![]||c[n(0x1f5)]===!![])&&(e['closeable']=c[n(0x1f5)]),c[n(0x1f0)]&&(e[n(0x1fa)]=c['cssClass']),document['getElementById']('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const o=i;let d=c[o(0x20a)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[o(0x1fe)];}d&&d.#closeDialog();}#closeDialog(){const p=i;document['getElementById']('overlayLayer')[p(0x214)](this);}#moveStart(c){const q=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window['addEventListener'](q(0x213),this.#moveEndBound);}#move(c){const r=i;this[r(0x20f)][r(0x1f9)]=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x1fc)](s(0x1ee),this.#moveBound),window['removeEventListener'](s(0x213),this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);