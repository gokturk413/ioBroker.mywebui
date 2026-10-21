const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c4))/0x1+-parseInt(h(0x1ac))/0x2+-parseInt(h(0x1bd))/0x3+-parseInt(h(0x1c3))/0x4*(-parseInt(h(0x19c))/0x5)+-parseInt(h(0x1be))/0x6+parseInt(h(0x1b8))/0x7+parseInt(h(0x1b9))/0x8*(parseInt(h(0x1bc))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2cf33));function b(c,d){c=c-0x199;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const t=['innerHTML','pointerup','pointermove','offsetWidth','2303903RsNfGH','1727984WgEWdj','\x20+\x20','template','18dBYlwT','1062603QysMYy','227220pjdndZ','style','moveable','content',')\x20/\x202))','21664KMElUI','25366XmoVFu','iobroker-webui-dialog','calc(50%\x20-\x20((','string','left','calc(','head','getRootNode','100JKhFgn','appendChild','move','bind','openDialog','host','title','define','getElementById','closeable','getTime','removeChild','getBoundingClientRect','uniqueId','width','_getDomElement','637250JTpcwF','cssClass','display','height','cursor','overlayLayer','addEventListener','offsetHeight'];a=function(){return t;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x1a9)];static [i(0x1bb)]=html`
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
        `;static ['is']=i(0x1c5);get[i(0x1c0)](){const j=i;return this.#dialogTitle[j(0x1bf)][j(0x1b0)]=='move';}set[i(0x1c0)](c){const k=i;c&&(this.#dialogTitle[k(0x1bf)][k(0x1b0)]=k(0x19e),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x1a5)](){const l=i;return this.#dialogClose['style'][l(0x1ae)]!='none';}set[i(0x1a5)](c){const m=i;c?this.#dialogClose[m(0x1bf)][m(0x1ae)]='block':this.#dialogClose[m(0x1bf)][m(0x1ae)]='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement'](n(0x19a)),this.#dialogClose=this[n(0x1ab)]('close'),this.#dialogContent=this['_getDomElement'](n(0x1c1)),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x19f)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0x1b7)]=0x2;static [i(0x1b3)]=0x23;static[i(0x1a0)](c){const o=i,d='id'+new Date()[o(0x1a6)](),e=new IoBrokerWebuiDialog();if(c[o(0x1a2)]){if(typeof c['title']===o(0x1c7))e.#dialogTitle['innerHTML']=c[o(0x1a2)];else e.#dialogTitle[o(0x19d)](c[o(0x1a2)]);}if(typeof c['content']===o(0x1c7))e.#dialogContent[o(0x1b4)]=c['content'];else e.#dialogContent[o(0x19d)](c['content']);return e['style'][o(0x1aa)]=c[o(0x1aa)]??'300px',e[o(0x1bf)]['height']=c[o(0x1af)]??'200px',e[o(0x1bf)]['width']=o(0x199)+e['style'][o(0x1aa)]+o(0x1ba)+this['offsetWidth']+'px)',e['style'][o(0x1af)]=o(0x199)+e['style']['height']+'\x20+\x20'+this[o(0x1b3)]+'px)',e[o(0x1bf)]['top']=c['top']??o(0x1c6)+e[o(0x1bf)]['height']+')\x20/\x202))',e[o(0x1bf)][o(0x1c8)]=c[o(0x1c8)]??o(0x1c6)+e['style']['width']+o(0x1c2),c['moveable']&&(e[o(0x1c0)]=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e[o(0x1a5)]=c['closeable']),c['cssClass']&&(e['className']=c[o(0x1ad)]),document[o(0x1a4)]('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x19b)]()?.[p(0x1a1)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x1a4)](q(0x1b1))[q(0x1a7)](this);}#moveStart(c){const r=i,d=this[r(0x1a8)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0x1b2)]('pointermove',this.#moveBound),window['addEventListener'](r(0x1b5),this.#moveEndBound);}#move(c){this['style']['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window['removeEventListener'](s(0x1b6),this.#moveBound),window['removeEventListener'](s(0x1b5),this.#moveEndBound);}}customElements[i(0x1a3)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);