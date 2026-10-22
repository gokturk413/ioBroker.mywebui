const i=b;function a(){const u=['removeEventListener','moveable','getElementById','height','template','15AhTpLe','calc(50%\x20-\x20((','string','calc(','removeChild','none','300px','8wMwpPQ','closeable','onpointerdown','5954806NcMbzJ','17730nzRBZh','content','container','block','addEventListener','offsetHeight','7pGaHfw','display',')\x20/\x202))','style','cursor','close','1270070opOMCN','bind','appendChild','getBoundingClientRect','title','iobroker-webui-dialog','innerHTML','getRootNode','\x20+\x20','overlayLayer','6291448XVIeHN','openDialog','pointerup','cssClass','offsetWidth','20136giBFFe','top','px)','width','_getDomElement','2870460FtBLUG','uniqueId','10ghuvFS','4597674mfyrwZ'];a=function(){return u;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x14b))/0x1+parseInt(h(0x164))/0x2*(parseInt(h(0x159))/0x3)+parseInt(h(0x160))/0x4*(-parseInt(h(0x170))/0x5)+parseInt(h(0x153))/0x6+-parseInt(h(0x16a))/0x7*(parseInt(h(0x146))/0x8)+parseInt(h(0x150))/0x9+parseInt(h(0x152))/0xa*(parseInt(h(0x163))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x60d17));function b(c,d){c=c-0x145;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x166)];[i(0x151)];static [i(0x158)]=html`
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
        `;static ['is']=i(0x175);get[i(0x155)](){const j=i;return this.#dialogTitle[j(0x16d)][j(0x16e)]=='move';}set[i(0x155)](c){const k=i;c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle[k(0x162)]=d=>{return this.#moveStart(d),![];});}get[i(0x161)](){const l=i;return this.#dialogClose[l(0x16d)]['display']!='none';}set['closeable'](c){const m=i;c?this.#dialogClose[m(0x16d)][m(0x16b)]=m(0x167):this.#dialogClose[m(0x16d)][m(0x16b)]=m(0x15e);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x14f)]('head'),this.#dialogClose=this['_getDomElement'](n(0x16f)),this.#dialogContent=this[n(0x14f)](n(0x165)),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x171)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0x14a)]=0x2;static [i(0x169)]=0x23;static[i(0x147)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0x174)]===o(0x15b))e.#dialogTitle[o(0x176)]=c[o(0x174)];else e.#dialogTitle[o(0x172)](c['title']);}if(typeof c['content']===o(0x15b))e.#dialogContent['innerHTML']=c[o(0x165)];else e.#dialogContent[o(0x172)](c[o(0x165)]);return e['style'][o(0x14e)]=c[o(0x14e)]??o(0x15f),e[o(0x16d)]['height']=c[o(0x157)]??'200px',e['style'][o(0x14e)]='calc('+e[o(0x16d)]['width']+o(0x178)+this['offsetWidth']+o(0x14d),e['style'][o(0x157)]=o(0x15c)+e[o(0x16d)][o(0x157)]+'\x20+\x20'+this[o(0x169)]+'px)',e[o(0x16d)]['top']=c['top']??o(0x15a)+e['style'][o(0x157)]+o(0x16c),e[o(0x16d)]['left']=c['left']??o(0x15a)+e['style'][o(0x14e)]+o(0x16c),c[o(0x155)]&&(e['moveable']=!![]),(c['closeable']===![]||c[o(0x161)]===!![])&&(e['closeable']=c['closeable']),c['cssClass']&&(e['className']=c[o(0x149)]),document['getElementById']('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x177)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x156)](q(0x145))[q(0x15d)](this);}#moveStart(c){const r=i,d=this[r(0x173)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window[r(0x168)]('pointerup',this.#moveEndBound);}#move(c){const s=i;this[s(0x16d)]['left']=c['x']-this.#xOffset+'px',this['style'][s(0x14c)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x154)]('pointermove',this.#moveBound),window[t(0x154)](t(0x148),this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);