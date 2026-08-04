const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1b8))/0x1+parseInt(h(0x1c6))/0x2+-parseInt(h(0x1b5))/0x3*(-parseInt(h(0x1cd))/0x4)+parseInt(h(0x1ae))/0x5+-parseInt(h(0x1c2))/0x6+parseInt(h(0x1b7))/0x7+parseInt(h(0x1bb))/0x8*(-parseInt(h(0x1bf))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f4e7));function a(){const u=['_getDomElement','move','onpointerdown','714230fWRoPE','300px','getElementById','onclick','define','none','\x20+\x20','912540dzLBlr','calc(','content','left','display','host','moveable','title','element','offsetWidth','height','bind','2515125xhbSCK','200px','width','head','closeDialog','cssClass','cursor','6bUmzjL','style','630350YOUrce','235105BLEPjs','calc(50%\x20-\x20((','top','53216hMfmaR','removeEventListener','iobroker-webui-dialog','pointermove','1017vAUDxL','closeable','appendChild','962256zfnNsg'];a=function(){return u;};return a();}function b(c,d){c=c-0x1ac;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x1b6)]=css`
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
        `;static ['is']=i(0x1bd);get[i(0x1d3)](){const j=i;return this.#dialogTitle[j(0x1b6)][j(0x1b4)]==j(0x1c4);}set[i(0x1d3)](c){const k=i;c&&(this.#dialogTitle['style'][k(0x1b4)]=k(0x1c4),this.#dialogTitle[k(0x1c5)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x1b6)]['display']!=l(0x1cb);}set[i(0x1c0)](c){const m=i;c?this.#dialogClose[m(0x1b6)][m(0x1d1)]='block':this.#dialogClose[m(0x1b6)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement'](n(0x1b1)),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this[n(0x1c3)](n(0x1cf)),this.#dialogClose[n(0x1c9)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x1ad)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0x1d6)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[o(0x1d4)]){if(typeof c[o(0x1d4)]==='string')e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle['appendChild'](c[o(0x1d4)]);}if(typeof c[o(0x1cf)]==='string')e.#dialogContent['innerHTML']=c[o(0x1cf)];else e.#dialogContent['appendChild'](c[o(0x1cf)]);return e['style']['width']=c['width']??o(0x1c7),e['style'][o(0x1ac)]=c[o(0x1ac)]??o(0x1af),e['style'][o(0x1b0)]='calc('+e['style'][o(0x1b0)]+o(0x1cc)+this['offsetWidth']+'px)',e[o(0x1b6)]['height']=o(0x1ce)+e['style'][o(0x1ac)]+'\x20+\x20'+this['offsetHeight']+'px)',e['style']['top']=c[o(0x1ba)]??o(0x1b9)+e['style']['height']+')\x20/\x202))',e[o(0x1b6)]['left']=c[o(0x1d0)]??o(0x1b9)+e[o(0x1b6)]['width']+')\x20/\x202))',c[o(0x1d3)]&&(e[o(0x1d3)]=!![]),(c['closeable']===![]||c[o(0x1c0)]===!![])&&(e['closeable']=c['closeable']),c['cssClass']&&(e['className']=c[o(0x1b3)]),document[o(0x1c8)]('overlayLayer')[o(0x1c1)](e),d;}static[i(0x1b2)](c){const p=i;let d=c[p(0x1d5)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x1d2)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x1c8)]('overlayLayer')['removeChild'](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](r(0x1be),this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const s=i;this['style'][s(0x1d0)]=c['x']-this.#xOffset+'px',this[s(0x1b6)][s(0x1ba)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x1bc)](t(0x1be),this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}customElements[i(0x1ca)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);