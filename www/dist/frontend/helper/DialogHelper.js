const i=b;function a(){const u=['getElementById','title','2578880TvZHgF','content','15378mxAetz','_getDomElement','168576JaTRed','template','moveable','width','108kfGiio','addEventListener','host','element','cursor','removeEventListener','className','2570000BkAWDd','14117191UlYkhR','closeDialog','head','43707nSaLVC','innerHTML','2555eAWyfu','\x20+\x20','getRootNode','container','openDialog','pointerup','top','110ZuQqju','closeable','cssClass','style','appendChild','offsetHeight','removeChild','180NvBrjG','height','move','calc(50%\x20-\x20((','pointermove','left','string','block','2887lgbDku','getBoundingClientRect','px)','getTime','bind'];a=function(){return u;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x15b))/0x1*(parseInt(h(0x14c))/0x2)+parseInt(h(0x143))/0x3*(parseInt(h(0x16a))/0x4)+-parseInt(h(0x171))/0x5+-parseInt(h(0x164))/0x6*(parseInt(h(0x145))/0x7)+-parseInt(h(0x166))/0x8*(-parseInt(h(0x153))/0x9)+-parseInt(h(0x162))/0xa+parseInt(h(0x140))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x862d2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x148)];['uniqueId'];static [i(0x167)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x14f)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle[j(0x14f)]['cursor']=='move';}set['moveable'](c){const k=i;c&&(this.#dialogTitle[k(0x14f)][k(0x16e)]=k(0x155),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x14f)]['display']!='none';}set['closeable'](c){const m=i;c?this.#dialogClose['style']['display']=m(0x15a):this.#dialogClose[m(0x14f)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement'](n(0x142)),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this[n(0x165)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x15f)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static [i(0x151)]=0x23;static[i(0x149)](c){const o=i,d='id'+new Date()[o(0x15e)](),e=new IoBrokerWebuiDialog();if(c[o(0x161)]){if(typeof c[o(0x161)]==='string')e.#dialogTitle['innerHTML']=c[o(0x161)];else e.#dialogTitle[o(0x150)](c['title']);}if(typeof c[o(0x163)]===o(0x159))e.#dialogContent[o(0x144)]=c['content'];else e.#dialogContent[o(0x150)](c[o(0x163)]);return e['style']['width']=c['width']??'300px',e[o(0x14f)]['height']=c['height']??'200px',e[o(0x14f)][o(0x169)]='calc('+e[o(0x14f)][o(0x169)]+o(0x146)+this['offsetWidth']+o(0x15d),e[o(0x14f)][o(0x154)]='calc('+e['style'][o(0x154)]+o(0x146)+this[o(0x151)]+o(0x15d),e['style']['top']=c[o(0x14b)]??o(0x156)+e['style'][o(0x154)]+')\x20/\x202))',e[o(0x14f)][o(0x158)]=c['left']??'calc(50%\x20-\x20(('+e[o(0x14f)][o(0x169)]+')\x20/\x202))',c[o(0x168)]&&(e['moveable']=!![]),(c['closeable']===![]||c[o(0x14d)]===!![])&&(e[o(0x14d)]=c['closeable']),c[o(0x14e)]&&(e[o(0x170)]=c['cssClass']),document[o(0x160)]('overlayLayer')[o(0x150)](e),d;}static[i(0x141)](c){const p=i;let d=c[p(0x16d)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x147)]()?.[p(0x16c)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x160)]('overlayLayer')[q(0x152)](this);}#moveStart(c){const r=i,d=this[r(0x15c)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0x16b)]('pointermove',this.#moveBound),window[r(0x16b)](r(0x14a),this.#moveEndBound);}#move(c){const s=i;this['style'][s(0x158)]=c['x']-this.#xOffset+'px',this['style'][s(0x14b)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x16f)](t(0x157),this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}function b(c,d){c=c-0x140;const e=a();let f=e[c];return f;}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);