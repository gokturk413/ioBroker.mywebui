const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xd1))/0x1+parseInt(h(0xce))/0x2*(-parseInt(h(0xb2))/0x3)+parseInt(h(0xd8))/0x4*(parseInt(h(0xd3))/0x5)+parseInt(h(0xcc))/0x6*(parseInt(h(0xc3))/0x7)+-parseInt(h(0xdc))/0x8+-parseInt(h(0xca))/0x9+-parseInt(h(0xd9))/0xa*(parseInt(h(0xda))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x267af));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0xcd)];['uniqueId'];static ['template']=html`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle[j(0xb3)]['cursor']==j(0xc7);}set[i(0xbf)](c){const k=i;c&&(this.#dialogTitle[k(0xb3)]['cursor']=k(0xc7),this.#dialogTitle[k(0xd4)]=d=>{return this.#moveStart(d),![];});}get[i(0xd6)](){const l=i;return this.#dialogClose[l(0xb3)][l(0xb4)]!='none';}set['closeable'](c){const m=i;c?this.#dialogClose[m(0xb3)][m(0xb4)]='block':this.#dialogClose[m(0xb3)][m(0xb4)]=m(0xcf);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this[n(0xc6)]('close'),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose[n(0xd2)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static[i(0xb8)](c){const o=i,d='id'+new Date()[o(0xd5)](),e=new IoBrokerWebuiDialog();if(c[o(0xd0)]){if(typeof c[o(0xd0)]===o(0xba))e.#dialogTitle[o(0xc8)]=c[o(0xd0)];else e.#dialogTitle[o(0xbb)](c['title']);}if(typeof c[o(0xc0)]==='string')e.#dialogContent[o(0xc8)]=c[o(0xc0)];else e.#dialogContent['appendChild'](c[o(0xc0)]);return e[o(0xb3)]['width']=c[o(0xdb)]??o(0xc1),e['style'][o(0xc4)]=c[o(0xc4)]??o(0xb0),e[o(0xb3)]['width']='calc('+e[o(0xb3)][o(0xdb)]+'\x20+\x20'+this['offsetWidth']+o(0xbe),e['style'][o(0xc4)]=o(0xaf)+e[o(0xb3)]['height']+'\x20+\x20'+this['offsetHeight']+o(0xbe),e[o(0xb3)][o(0xdd)]=c[o(0xdd)]??o(0xc5)+e['style'][o(0xc4)]+o(0xcb),e['style']['left']=c['left']??o(0xc5)+e['style'][o(0xdb)]+')\x20/\x202))',c['moveable']&&(e['moveable']=!![]),(c[o(0xd6)]===![]||c[o(0xd6)]===!![])&&(e['closeable']=c[o(0xd6)]),c['cssClass']&&(e[o(0xc9)]=c[o(0xb5)]),document[o(0xb7)](o(0xb9))['appendChild'](e),d;}static[i(0xb6)](c){let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const p=i;document[p(0xb7)](p(0xb9))[p(0xbd)](this);}#moveStart(c){const q=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](q(0xbc),this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const r=i;this['style'][r(0xd7)]=c['x']-this.#xOffset+'px',this[r(0xb3)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0xc2)]('pointermove',this.#moveBound),window['removeEventListener'](s(0xb1),this.#moveEndBound);}}function b(c,d){c=c-0xaf;const e=a();let f=e[c];return f;}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);function a(){const t=['252572IrcDuD','onclick','26830QqKAdl','onpointerdown','getTime','closeable','left','148autvAO','11530FvcLFJ','2299IRDkxV','width','79200dYmSwx','top','calc(','200px','pointerup','213OFaLYL','style','display','cssClass','closeDialog','getElementById','openDialog','overlayLayer','string','appendChild','pointermove','removeChild','px)','moveable','content','300px','removeEventListener','759353FgXIEA','height','calc(50%\x20-\x20((','_getDomElement','move','innerHTML','className','204597jMTada',')\x20/\x202))','6lHbITm','container','3616pzFNZc','none','title'];a=function(){return t;};return a();}