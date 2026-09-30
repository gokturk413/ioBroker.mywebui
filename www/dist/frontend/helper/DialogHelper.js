function b(c,d){c=c-0x77;const e=a();let f=e[c];return f;}function a(){const u=['string','none','bind','addEventListener','title','200px','onpointerdown','height','1152454cfsZUP','overlayLayer','onclick','1887978mfOWeF','offsetWidth','innerHTML','removeChild','12JEfoxy','2856332bptqtc','_getDomElement','className','calc(','pointermove','closeable','cursor','define','pointerup','cssClass','\x20+\x20','display','left','9167060TjGAeT','head','content','getBoundingClientRect','offsetHeight','300px','6406353NJksKi','appendChild','moveable',')\x20/\x202))','width','getRootNode','5uLujrs','1ORYrzk','1908347XVqkwA','5468424wgTDkL','block','template','close','getElementById','style'];a=function(){return u;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xa6))/0x1*(-parseInt(h(0x84))/0x2)+parseInt(h(0x87))/0x3+parseInt(h(0x8c))/0x4*(-parseInt(h(0xa5))/0x5)+parseInt(h(0x8b))/0x6*(-parseInt(h(0xa7))/0x7)+parseInt(h(0xa8))/0x8+parseInt(h(0x9f))/0x9+-parseInt(h(0x99))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67bbc));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0x78)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x7b)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0xa1)](){const j=i;return this.#dialogTitle[j(0x7b)][j(0x92)]=='move';}set['moveable'](c){const k=i;c&&(this.#dialogTitle['style'][k(0x92)]='move',this.#dialogTitle[k(0x82)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x7b)]['display']!=l(0x7d);}set['closeable'](c){const m=i;c?this.#dialogClose[m(0x7b)][m(0x97)]=m(0x77):this.#dialogClose['style'][m(0x97)]=m(0x7d);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x8d)](n(0x9a)),this.#dialogClose=this['_getDomElement'](n(0x79)),this.#dialogContent=this[n(0x8d)]('content'),this.#dialogClose[n(0x86)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0x7e)](this);}static ['offsetWidth']=0x2;static [i(0x9d)]=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0x80)]===o(0x7c))e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle[o(0xa0)](c[o(0x80)]);}if(typeof c[o(0x9b)]===o(0x7c))e.#dialogContent[o(0x89)]=c['content'];else e.#dialogContent['appendChild'](c[o(0x9b)]);return e['style']['width']=c[o(0xa3)]??o(0x9e),e[o(0x7b)][o(0x83)]=c['height']??o(0x81),e['style']['width']='calc('+e[o(0x7b)][o(0xa3)]+o(0x96)+this[o(0x88)]+'px)',e[o(0x7b)][o(0x83)]=o(0x8f)+e['style']['height']+o(0x96)+this[o(0x9d)]+'px)',e[o(0x7b)]['top']=c['top']??'calc(50%\x20-\x20(('+e['style']['height']+o(0xa2),e[o(0x7b)]['left']=c['left']??'calc(50%\x20-\x20(('+e['style'][o(0xa3)]+')\x20/\x202))',c['moveable']&&(e['moveable']=!![]),(c['closeable']===![]||c[o(0x91)]===!![])&&(e[o(0x91)]=c['closeable']),c[o(0x95)]&&(e[o(0x8e)]=c['cssClass']),document[o(0x7a)]('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0xa4)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x7a)](q(0x85))[q(0x8a)](this);}#moveStart(c){const r=i,d=this[r(0x9c)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](r(0x90),this.#moveBound),window[r(0x7f)](r(0x94),this.#moveEndBound);}#move(c){const s=i;this[s(0x7b)][s(0x98)]=c['x']-this.#xOffset+'px',this[s(0x7b)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener'](t(0x90),this.#moveBound),window['removeEventListener'](t(0x94),this.#moveEndBound);}}customElements[i(0x93)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);