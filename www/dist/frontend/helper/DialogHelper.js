function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x107))/0x1*(-parseInt(h(0x127))/0x2)+parseInt(h(0x10d))/0x3+-parseInt(h(0xf7))/0x4*(parseInt(h(0xfb))/0x5)+parseInt(h(0x104))/0x6*(-parseInt(h(0xf9))/0x7)+-parseInt(h(0x108))/0x8+parseInt(h(0x111))/0x9+-parseInt(h(0xfa))/0xa*(-parseInt(h(0x106))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5ebec));function a(){const t=['innerHTML','7494wVmPvS','removeEventListener','11ouZsVX','1ocsFxi','5634080YLNxWz','moveable','closeDialog','height','closeable','1548768fDbZaX','top','overlayLayer','head','4926897WfxyWo','\x20+\x20','cursor','display','none','host','width','openDialog',')\x20/\x202))','style','getTime','calc(50%\x20-\x20((','move','bind','onclick','title','calc(','uniqueId','getElementById','offsetHeight','string','px)','186982upbMkO','83532qmIPhB','offsetWidth','3479REDRGj','15155620nSWNdC','185VmihZv','_getDomElement','pointermove','addEventListener','cssClass','appendChild','content','getBoundingClientRect'];a=function(){return t;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x122)];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x11a)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x109)](){const j=i;return this.#dialogTitle['style'][j(0x113)]==j(0x11d);}set[i(0x109)](c){const k=i;c&&(this.#dialogTitle[k(0x11a)]['cursor']=k(0x11d),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose['style']['display']!=l(0x115);}set['closeable'](c){const m=i;c?this.#dialogClose['style'][m(0x114)]='block':this.#dialogClose['style'][m(0x114)]=m(0x115);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement'](n(0x110)),this.#dialogClose=this[n(0xfc)]('close'),this.#dialogContent=this[n(0xfc)]('content'),this.#dialogClose[n(0x11f)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0x11e)](this);}static [i(0xf8)]=0x2;static [i(0x124)]=0x23;static[i(0x118)](c){const o=i,d='id'+new Date()[o(0x11b)](),e=new IoBrokerWebuiDialog();if(c[o(0x120)]){if(typeof c[o(0x120)]===o(0x125))e.#dialogTitle[o(0x103)]=c[o(0x120)];else e.#dialogTitle[o(0x100)](c['title']);}if(typeof c[o(0x101)]==='string')e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent['appendChild'](c[o(0x101)]);return e[o(0x11a)][o(0x117)]=c[o(0x117)]??'300px',e['style'][o(0x10b)]=c[o(0x10b)]??'200px',e[o(0x11a)]['width']=o(0x121)+e[o(0x11a)][o(0x117)]+o(0x112)+this[o(0xf8)]+'px)',e['style'][o(0x10b)]=o(0x121)+e['style']['height']+o(0x112)+this['offsetHeight']+o(0x126),e['style']['top']=c[o(0x10e)]??o(0x11c)+e['style']['height']+o(0x119),e['style']['left']=c['left']??'calc(50%\x20-\x20(('+e['style'][o(0x117)]+')\x20/\x202))',c['moveable']&&(e[o(0x109)]=!![]),(c['closeable']===![]||c[o(0x10c)]===!![])&&(e['closeable']=c[o(0x10c)]),c[o(0xff)]&&(e['className']=c[o(0xff)]),document[o(0x123)](o(0x10f))[o(0x100)](e),d;}static[i(0x10a)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x116)];}d&&d.#closeDialog();}#closeDialog(){document['getElementById']('overlayLayer')['removeChild'](this);}#moveStart(c){const q=i,d=this[q(0x102)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](q(0xfd),this.#moveBound),window[q(0xfe)]('pointerup',this.#moveEndBound);}#move(c){const r=i;this[r(0x11a)]['left']=c['x']-this.#xOffset+'px',this[r(0x11a)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x105)]('pointermove',this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);