function a(){const t=['84BFPfPr','508387VRHtsq','innerHTML','height','none','\x20+\x20','27890olSTCo','className','width','display','cursor','calc(50%\x20-\x20((','328660tcIzex','iobroker-webui-dialog','offsetHeight','pointermove','bind','451860oRdVFN','783rWWbom','2518DBHrHX','onpointerdown','_getDomElement','top','style','string','29Qcoufe','content','appendChild','title','getElementById','9104pKvfyW','3avkHiJ','cssClass',')\x20/\x202))','moveable','getRootNode','removeEventListener','left','removeChild','300px','closeable','px)','1349824dAXxRn','close'];a=function(){return t;};return a();}function b(c,d){c=c-0x1c3;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e7))/0x1*(-parseInt(h(0x1e1))/0x2)+-parseInt(h(0x1ed))/0x3*(-parseInt(h(0x1da))/0x4)+-parseInt(h(0x1d4))/0x5*(-parseInt(h(0x1ce))/0x6)+-parseInt(h(0x1cc))/0x7+parseInt(h(0x1ec))/0x8*(parseInt(h(0x1e0))/0x9)+parseInt(h(0x1df))/0xa+-parseInt(h(0x1cf))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x18e17));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
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
        `;static ['is']=i(0x1db);get[i(0x1c4)](){const j=i;return this.#dialogTitle['style'][j(0x1d8)]=='move';}set[i(0x1c4)](c){const k=i;c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle[k(0x1e2)]=d=>{return this.#moveStart(d),![];});}get[i(0x1ca)](){const l=i;return this.#dialogClose[l(0x1e5)]['display']!=l(0x1d2);}set[i(0x1ca)](c){const m=i;c?this.#dialogClose[m(0x1e5)]['display']='block':this.#dialogClose[m(0x1e5)][m(0x1d7)]='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this['_getDomElement'](n(0x1cd)),this.#dialogContent=this[n(0x1e3)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x1de)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static [i(0x1dc)]=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0x1ea)]==='string')e.#dialogTitle[o(0x1d0)]=c[o(0x1ea)];else e.#dialogTitle[o(0x1e9)](c['title']);}if(typeof c['content']===o(0x1e6))e.#dialogContent[o(0x1d0)]=c[o(0x1e8)];else e.#dialogContent[o(0x1e9)](c['content']);return e[o(0x1e5)]['width']=c['width']??o(0x1c9),e['style'][o(0x1d1)]=c['height']??'200px',e['style'][o(0x1d6)]='calc('+e['style']['width']+o(0x1d3)+this['offsetWidth']+'px)',e[o(0x1e5)][o(0x1d1)]='calc('+e[o(0x1e5)][o(0x1d1)]+'\x20+\x20'+this['offsetHeight']+o(0x1cb),e['style'][o(0x1e4)]=c[o(0x1e4)]??o(0x1d9)+e['style'][o(0x1d1)]+o(0x1c3),e[o(0x1e5)]['left']=c[o(0x1c7)]??o(0x1d9)+e['style'][o(0x1d6)]+o(0x1c3),c['moveable']&&(e[o(0x1c4)]=!![]),(c[o(0x1ca)]===![]||c['closeable']===!![])&&(e[o(0x1ca)]=c['closeable']),c['cssClass']&&(e[o(0x1d5)]=c[o(0x1ee)]),document[o(0x1eb)]('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x1c5)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x1eb)]('overlayLayer')[q(0x1c8)](this);}#moveStart(c){const d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const r=i;this[r(0x1e5)]['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window['removeEventListener'](s(0x1dd),this.#moveBound),window[s(0x1c6)]('pointerup',this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);