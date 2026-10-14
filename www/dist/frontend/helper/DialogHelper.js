const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x93))/0x1+parseInt(h(0x88))/0x2*(-parseInt(h(0xa2))/0x3)+-parseInt(h(0x96))/0x4*(-parseInt(h(0x7d))/0x5)+parseInt(h(0x9d))/0x6*(-parseInt(h(0x7f))/0x7)+-parseInt(h(0x8c))/0x8+-parseInt(h(0x90))/0x9+parseInt(h(0x9f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f815));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x9e)];[i(0x82)];static [i(0x81)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x7e)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x9b)](){const j=i;return this.#dialogTitle[j(0x7e)]['cursor']=='move';}set['moveable'](c){const k=i;c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle[k(0x7b)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose['style'][l(0x79)]!='none';}set[i(0x8f)](c){const m=i;c?this.#dialogClose['style']['display']='block':this.#dialogClose[m(0x7e)][m(0x79)]=m(0x97);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x98)]('head'),this.#dialogClose=this[n(0x98)]('close'),this.#dialogContent=this[n(0x98)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0x9a)](this);}static ['offsetWidth']=0x2;static [i(0x95)]=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']==='string')e.#dialogTitle[o(0x94)]=c[o(0x87)];else e.#dialogTitle[o(0xa0)](c[o(0x87)]);}if(typeof c['content']===o(0xa3))e.#dialogContent['innerHTML']=c[o(0x99)];else e.#dialogContent['appendChild'](c['content']);return e['style']['width']=c['width']??'300px',e[o(0x7e)][o(0x8b)]=c[o(0x8b)]??'200px',e[o(0x7e)][o(0x8e)]='calc('+e[o(0x7e)]['width']+'\x20+\x20'+this[o(0x7a)]+o(0x9c),e['style'][o(0x8b)]=o(0x80)+e['style'][o(0x8b)]+'\x20+\x20'+this[o(0x95)]+o(0x9c),e[o(0x7e)][o(0x8a)]=c[o(0x8a)]??o(0x78)+e['style'][o(0x8b)]+o(0x85),e[o(0x7e)]['left']=c[o(0x91)]??o(0x78)+e['style'][o(0x8e)]+')\x20/\x202))',c[o(0x9b)]&&(e[o(0x9b)]=!![]),(c[o(0x8f)]===![]||c[o(0x8f)]===!![])&&(e[o(0x8f)]=c[o(0x8f)]),c['cssClass']&&(e[o(0x83)]=c['cssClass']),document[o(0x84)](o(0x7c))['appendChild'](e),d;}static[i(0x86)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x89)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById'](q(0x7c))['removeChild'](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window['addEventListener'](r(0x8d),this.#moveEndBound);}#move(c){const s=i;this[s(0x7e)]['left']=c['x']-this.#xOffset+'px',this[s(0x7e)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x92)](t(0xa1),this.#moveBound),window[t(0x92)]('pointerup',this.#moveEndBound);}}function b(c,d){c=c-0x78;const e=a();let f=e[c];return f;}function a(){const u=['closeable','1374777meeMOC','left','removeEventListener','189507mnTAby','innerHTML','offsetHeight','896gjGGzN','none','_getDomElement','content','bind','moveable','px)','1634586pcTzCB','container','10572930ZMrvZA','appendChild','pointermove','1031487tCcKXg','string','calc(50%\x20-\x20((','display','offsetWidth','onpointerdown','overlayLayer','3185VchodS','style','7ZGsCgV','calc(','template','uniqueId','className','getElementById',')\x20/\x202))','closeDialog','title','2KAFlPB','host','top','height','2882864ZQbCQG','pointerup','width'];a=function(){return u;};return a();}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);