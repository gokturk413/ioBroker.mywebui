const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x190))/0x1*(-parseInt(h(0x17c))/0x2)+parseInt(h(0x177))/0x3+parseInt(h(0x18c))/0x4*(parseInt(h(0x198))/0x5)+parseInt(h(0x19e))/0x6*(parseInt(h(0x171))/0x7)+parseInt(h(0x199))/0x8*(parseInt(h(0x17d))/0x9)+parseInt(h(0x17e))/0xa+-parseInt(h(0x179))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd2060));function b(c,d){c=c-0x171;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x196)]=css`
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
        `;static ['is']=i(0x188);get['moveable'](){const j=i;return this.#dialogTitle['style']['cursor']==j(0x18d);}set[i(0x18a)](c){const k=i;c&&(this.#dialogTitle['style'][k(0x181)]='move',this.#dialogTitle[k(0x19d)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x196)][l(0x173)]!='none';}set['closeable'](c){const m=i;c?this.#dialogClose[m(0x196)][m(0x173)]=m(0x178):this.#dialogClose[m(0x196)][m(0x173)]=m(0x176);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement'](n(0x194)),this.#dialogClose=this['_getDomElement'](n(0x191)),this.#dialogContent=this['_getDomElement'](n(0x182)),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x184)](this),this.#moveEndBound=this.#moveEnd[n(0x184)](this);}static [i(0x18e)]=0x2;static [i(0x174)]=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']===o(0x19c))e.#dialogTitle[o(0x183)]=c[o(0x186)];else e.#dialogTitle[o(0x185)](c['title']);}if(typeof c['content']===o(0x19c))e.#dialogContent[o(0x183)]=c['content'];else e.#dialogContent['appendChild'](c[o(0x182)]);return e[o(0x196)][o(0x17a)]=c['width']??'300px',e['style'][o(0x19b)]=c[o(0x19b)]??'200px',e['style'][o(0x17a)]='calc('+e['style']['width']+o(0x17b)+this[o(0x18e)]+o(0x197),e['style'][o(0x19b)]=o(0x192)+e[o(0x196)][o(0x19b)]+'\x20+\x20'+this[o(0x174)]+o(0x197),e['style']['top']=c['top']??o(0x17f)+e[o(0x196)][o(0x19b)]+o(0x18f),e['style']['left']=c['left']??o(0x17f)+e['style'][o(0x17a)]+o(0x18f),c['moveable']&&(e['moveable']=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e[o(0x19a)]=c[o(0x19a)]),c['cssClass']&&(e['className']=c['cssClass']),document['getElementById']('overlayLayer')[o(0x185)](e),d;}static[i(0x180)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x19f)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById'](q(0x195))['removeChild'](this);}#moveStart(c){const r=i,d=this[r(0x189)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0x175)](r(0x193),this.#moveBound),window[r(0x175)](r(0x18b),this.#moveEndBound);}#move(c){const s=i;this['style']['left']=c['x']-this.#xOffset+'px',this[s(0x196)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener'](t(0x193),this.#moveBound),window[t(0x172)](t(0x18b),this.#moveEndBound);}}function a(){const u=['offsetHeight','addEventListener','none','3629079YhcFaK','block','25329755KzQJyB','width','\x20+\x20','2OsmPSi','873lIfinm','5516570gGljdV','calc(50%\x20-\x20((','closeDialog','cursor','content','innerHTML','bind','appendChild','title','define','iobroker-webui-dialog','getBoundingClientRect','moveable','pointerup','3716YKTiVY','move','offsetWidth',')\x20/\x202))','1431863cfHRqu','close','calc(','pointermove','head','overlayLayer','style','px)','4805WyfJRb','127352BaYsRB','closeable','height','string','onpointerdown','12FFJAol','getRootNode','1387967majYDh','removeEventListener','display'];a=function(){return u;};return a();}customElements[i(0x187)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);