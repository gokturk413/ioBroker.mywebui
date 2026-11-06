function b(c,d){c=c-0x101;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x11d))/0x1*(parseInt(h(0x105))/0x2)+parseInt(h(0x110))/0x3+parseInt(h(0x10d))/0x4*(-parseInt(h(0x115))/0x5)+parseInt(h(0x130))/0x6+-parseInt(h(0x102))/0x7*(parseInt(h(0x11f))/0x8)+-parseInt(h(0x10c))/0x9*(-parseInt(h(0x132))/0xa)+-parseInt(h(0x111))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5f6f5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x103)];static [i(0x107)]=html`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x120)](){const j=i;return this.#dialogTitle[j(0x127)][j(0x129)]=='move';}set['moveable'](c){const k=i;c&&(this.#dialogTitle[k(0x127)]['cursor']=k(0x11e),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose['style']['display']!=l(0x10f);}set['closeable'](c){const m=i;c?this.#dialogClose[m(0x127)][m(0x12b)]=m(0x108):this.#dialogClose['style']['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x133)]('head'),this.#dialogClose=this['_getDomElement'](n(0x12d)),this.#dialogContent=this[n(0x133)]('content'),this.#dialogClose[n(0x131)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x11b)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0x12f)]=0x2;static ['offsetHeight']=0x23;static[i(0x118)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[o(0x104)]){if(typeof c[o(0x104)]==='string')e.#dialogTitle[o(0x12a)]=c[o(0x104)];else e.#dialogTitle[o(0x125)](c[o(0x104)]);}if(typeof c[o(0x114)]==='string')e.#dialogContent['innerHTML']=c[o(0x114)];else e.#dialogContent['appendChild'](c[o(0x114)]);return e['style'][o(0x124)]=c['width']??o(0x112),e['style']['height']=c[o(0x109)]??o(0x119),e['style']['width']=o(0x10a)+e[o(0x127)]['width']+o(0x12c)+this['offsetWidth']+o(0x10b),e[o(0x127)][o(0x109)]=o(0x10a)+e[o(0x127)]['height']+'\x20+\x20'+this[o(0x128)]+o(0x10b),e[o(0x127)][o(0x117)]=c[o(0x117)]??o(0x12e)+e['style'][o(0x109)]+o(0x113),e[o(0x127)][o(0x122)]=c['left']??'calc(50%\x20-\x20(('+e['style']['width']+')\x20/\x202))',c[o(0x120)]&&(e[o(0x120)]=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e[o(0x11c)]=c['closeable']),c[o(0x10e)]&&(e[o(0x123)]=c[o(0x10e)]),document['getElementById'](o(0x116))['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x106)]()?.[p(0x126)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x101)](q(0x116))['removeChild'](this);}#moveStart(c){const d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const r=i;this[r(0x127)]['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window['removeEventListener']('pointermove',this.#moveBound),window[s(0x121)](s(0x11a),this.#moveEndBound);}}customElements[i(0x134)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);function a(){const t=['200px','pointerup','bind','closeable','41Riufvq','move','13136pQgLHD','moveable','removeEventListener','left','className','width','appendChild','host','style','offsetHeight','cursor','innerHTML','display','\x20+\x20','close','calc(50%\x20-\x20((','offsetWidth','3987330oNRtFx','onclick','237270ZFePBT','_getDomElement','define','getElementById','1883aSyPki','uniqueId','title','17238tXISAA','getRootNode','template','block','height','calc(','px)','45tBBCQJ','121388WibjcV','cssClass','none','2145609TgjazO','2435114MAIyaA','300px',')\x20/\x202))','content','15VWYAoE','overlayLayer','top','openDialog'];a=function(){return t;};return a();}