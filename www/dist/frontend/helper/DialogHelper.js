function a(){const t=['left','content','host','removeEventListener','width','200px','2XdoNNw','top','define','className','addEventListener','258upCgeG','1328785MgXNPD','title','none','453368WxvXjW','move','getBoundingClientRect','template','innerHTML','moveable','appendChild','pointermove','\x20+\x20','overlayLayer','5529990PKSBjO','getRootNode','onclick','closeable','offsetWidth','94584KBalFN','px)','getElementById',')\x20/\x202))','style','3364245yBbSUH','height','cssClass','cursor','calc(','calc(50%\x20-\x20((','string','2567544NXnJSO','10946064LsSdFs'];a=function(){return t;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xeb))/0x1*(parseInt(h(0x111))/0x2)+parseInt(h(0x109))/0x3+-parseInt(h(0xee))/0x4+parseInt(h(0xf8))/0x5+-parseInt(h(0xea))/0x6*(parseInt(h(0xfd))/0x7)+-parseInt(h(0x10a))/0x8+-parseInt(h(0x102))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd08c2));function b(c,d){c=c-0xe6;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0xf1)]=html`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle[j(0x101)][j(0x105)]=='move';}set['moveable'](c){const k=i;c&&(this.#dialogTitle[k(0x101)]['cursor']=k(0xef),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0xfb)](){return this.#dialogClose['style']['display']!='none';}set['closeable'](c){const l=i;c?this.#dialogClose['style']['display']='block':this.#dialogClose[l(0x101)]['display']=l(0xed);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this['_getDomElement'](m(0x10c)),this.#dialogClose[m(0xfa)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const n=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[n(0xec)]){if(typeof c['title']===n(0x108))e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle[n(0xf4)](c[n(0xec)]);}if(typeof c['content']==='string')e.#dialogContent[n(0xf2)]=c['content'];else e.#dialogContent[n(0xf4)](c[n(0x10c)]);return e[n(0x101)][n(0x10f)]=c[n(0x10f)]??'300px',e['style']['height']=c[n(0x103)]??n(0x110),e[n(0x101)]['width']=n(0x106)+e[n(0x101)]['width']+'\x20+\x20'+this[n(0xfc)]+n(0xfe),e['style'][n(0x103)]=n(0x106)+e['style'][n(0x103)]+n(0xf6)+this['offsetHeight']+'px)',e['style'][n(0xe6)]=c[n(0xe6)]??n(0x107)+e[n(0x101)]['height']+n(0x100),e['style']['left']=c[n(0x10b)]??n(0x107)+e[n(0x101)][n(0x10f)]+n(0x100),c[n(0xf3)]&&(e['moveable']=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e['closeable']=c[n(0xfb)]),c['cssClass']&&(e[n(0xe8)]=c[n(0x104)]),document[n(0xff)]('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const o=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[o(0xf9)]()?.[o(0x10d)];}d&&d.#closeDialog();}#closeDialog(){const p=i;document['getElementById'](p(0xf7))['removeChild'](this);}#moveStart(c){const q=i,d=this[q(0xf0)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[q(0xe9)](q(0xf5),this.#moveBound),window[q(0xe9)]('pointerup',this.#moveEndBound);}#move(c){const r=i;this[r(0x101)][r(0x10b)]=c['x']-this.#xOffset+'px',this[r(0x101)][r(0xe6)]=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x10e)]('pointermove',this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}customElements[i(0xe7)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);