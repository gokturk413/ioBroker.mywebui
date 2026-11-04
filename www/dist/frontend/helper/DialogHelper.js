function a(){const t=['style','removeEventListener','4119740DIhtIq','9XxUndo','display','removeChild','overlayLayer','string','454820RbSbvp','6jqRbqS','close','appendChild','head','getElementById','149336jttcSn','title','closeable','1125988jTUlOg','cssClass','calc(','template','container',')\x20/\x202))','200px','pointerup','left','addEventListener','host','content','uniqueId','bind','className','300px','block','getTime','514595gSUIQW','width','openDialog','height','1kxDRqZ','moveable','onclick','3026191kJRxDX','1026417xHsDWN','innerHTML'];a=function(){return t;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x11b))/0x1*(parseInt(h(0x129))/0x2)+-parseInt(h(0x11f))/0x3+parseInt(h(0x105))/0x4+parseInt(h(0x117))/0x5*(parseInt(h(0x12a))/0x6)+-parseInt(h(0x11e))/0x7+-parseInt(h(0x102))/0x8*(parseInt(h(0x124))/0x9)+parseInt(h(0x123))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x38519));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x109)];[i(0x111)];static [i(0x108)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x121)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle[j(0x121)]['cursor']=='move';}set[i(0x11c)](c){c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x104)](){const k=i;return this.#dialogClose[k(0x121)]['display']!='none';}set[i(0x104)](c){const l=i;c?this.#dialogClose['style']['display']=l(0x115):this.#dialogClose[l(0x121)][l(0x125)]='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this['_getDomElement'](m(0x12d)),this.#dialogClose=this['_getDomElement'](m(0x12b)),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose[m(0x11d)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[m(0x112)](this),this.#moveEndBound=this.#moveEnd[m(0x112)](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static[i(0x119)](c){const n=i,d='id'+new Date()[n(0x116)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[n(0x103)]===n(0x128))e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle[n(0x12c)](c[n(0x103)]);}if(typeof c[n(0x110)]==='string')e.#dialogContent[n(0x120)]=c[n(0x110)];else e.#dialogContent[n(0x12c)](c[n(0x110)]);return e[n(0x121)]['width']=c['width']??n(0x114),e[n(0x121)]['height']=c['height']??n(0x10b),e[n(0x121)][n(0x118)]='calc('+e[n(0x121)][n(0x118)]+'\x20+\x20'+this['offsetWidth']+'px)',e['style'][n(0x11a)]=n(0x107)+e['style']['height']+'\x20+\x20'+this['offsetHeight']+'px)',e['style']['top']=c['top']??'calc(50%\x20-\x20(('+e[n(0x121)]['height']+')\x20/\x202))',e[n(0x121)][n(0x10d)]=c['left']??'calc(50%\x20-\x20(('+e['style']['width']+n(0x10a),c[n(0x11c)]&&(e['moveable']=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e[n(0x104)]=c['closeable']),c[n(0x106)]&&(e[n(0x113)]=c[n(0x106)]),document[n(0x101)]('overlayLayer')[n(0x12c)](e),d;}static['closeDialog'](c){const o=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[o(0x10f)];}d&&d.#closeDialog();}#closeDialog(){const p=i;document['getElementById'](p(0x127))[p(0x126)](this);}#moveStart(c){const q=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[q(0x10e)]('pointermove',this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const r=i;this[r(0x121)]['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window['removeEventListener']('pointermove',this.#moveBound),window[s(0x122)](s(0x10c),this.#moveEndBound);}}function b(c,d){c=c-0x101;const e=a();let f=e[c];return f;}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);