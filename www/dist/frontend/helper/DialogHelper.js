function a(){const u=['getElementById','top','3600875HojdZG','26850OXOxAP','onclick','height','closeable','moveable','\x20+\x20','template','removeChild','1001fpsNKK','offsetHeight','addEventListener','content','511464IZlpSc','calc(','none','10nOKkzs','678335AVBSdf','removeEventListener','pointermove','cursor','offsetWidth','width','appendChild','display','left','452094ZsBETV','innerHTML','300px',')\x20/\x202))','block','_getDomElement','2990823OpjZHU','bind','onpointerdown','closeDialog','24CKeWjd','4anjxtZ','getTime','host','style','calc(50%\x20-\x20((','move','3068271mCqVWi','2Dflzco'];a=function(){return u;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xc1))/0x1*(-parseInt(h(0xdc))/0x2)+-parseInt(h(0xca))/0x3*(-parseInt(h(0xd5))/0x4)+parseInt(h(0xdf))/0x5+-parseInt(h(0xe0))/0x6*(parseInt(h(0xe8))/0x7)+-parseInt(h(0xbd))/0x8+parseInt(h(0xdb))/0x9*(parseInt(h(0xc0))/0xa)+parseInt(h(0xd0))/0xb*(parseInt(h(0xd4))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5b289));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0xe6)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0xd8)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0xe4)](){const j=i;return this.#dialogTitle[j(0xd8)][j(0xc4)]=='move';}set[i(0xe4)](c){const k=i;c&&(this.#dialogTitle[k(0xd8)][k(0xc4)]=k(0xda),this.#dialogTitle[k(0xd2)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose['style'][l(0xc8)]!='none';}set['closeable'](c){const m=i;c?this.#dialogClose['style']['display']=m(0xce):this.#dialogClose[m(0xd8)][m(0xc8)]=m(0xbf);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0xcf)]('head'),this.#dialogClose=this[n(0xcf)]('close'),this.#dialogContent=this[n(0xcf)](n(0xbc)),this.#dialogClose[n(0xe1)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0xd1)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0xc5)]=0x2;static [i(0xe9)]=0x23;static['openDialog'](c){const o=i,d='id'+new Date()[o(0xd6)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']==='string')e.#dialogTitle[o(0xcb)]=c['title'];else e.#dialogTitle['appendChild'](c['title']);}if(typeof c[o(0xbc)]==='string')e.#dialogContent[o(0xcb)]=c['content'];else e.#dialogContent[o(0xc7)](c['content']);return e[o(0xd8)]['width']=c[o(0xc6)]??o(0xcc),e[o(0xd8)][o(0xe2)]=c['height']??'200px',e['style']['width']=o(0xbe)+e[o(0xd8)][o(0xc6)]+o(0xe5)+this['offsetWidth']+'px)',e['style'][o(0xe2)]='calc('+e['style'][o(0xe2)]+'\x20+\x20'+this[o(0xe9)]+'px)',e[o(0xd8)][o(0xde)]=c[o(0xde)]??'calc(50%\x20-\x20(('+e['style']['height']+o(0xcd),e[o(0xd8)]['left']=c[o(0xc9)]??o(0xd9)+e[o(0xd8)][o(0xc6)]+o(0xcd),c['moveable']&&(e[o(0xe4)]=!![]),(c['closeable']===![]||c[o(0xe3)]===!![])&&(e[o(0xe3)]=c[o(0xe3)]),c['cssClass']&&(e['className']=c['cssClass']),document[o(0xdd)]('overlayLayer')['appendChild'](e),d;}static[i(0xd3)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0xd7)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById']('overlayLayer')[q(0xe7)](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0xbb)]('pointermove',this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const s=i;this[s(0xd8)]['left']=c['x']-this.#xOffset+'px',this[s(0xd8)][s(0xde)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0xc2)](t(0xc3),this.#moveBound),window[t(0xc2)]('pointerup',this.#moveEndBound);}}function b(c,d){c=c-0xbb;const e=a();let f=e[c];return f;}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);