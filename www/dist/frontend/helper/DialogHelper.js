const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x199))/0x1+-parseInt(h(0x1b1))/0x2+parseInt(h(0x192))/0x3*(-parseInt(h(0x1b7))/0x4)+-parseInt(h(0x1af))/0x5*(-parseInt(h(0x1ad))/0x6)+parseInt(h(0x19d))/0x7+-parseInt(h(0x1ae))/0x8*(-parseInt(h(0x18a))/0x9)+parseInt(h(0x1a0))/0xa*(-parseInt(h(0x1b5))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb9ce1));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const u=[')\x20/\x202))','cssClass','13077jVqfbC','openDialog','title','moveable','closeable','close','\x20+\x20','move','436641cypDzK','define','width','onpointerdown','offsetWidth','bind','innerHTML','641594BKatpN','host','addEventListener','pointerup','6444760UKmxnk','height','top','520HAamDN','display','px)','removeChild','calc(50%\x20-\x20((','_getDomElement','300px','appendChild','element','pointermove','style','content','offsetHeight','28746WCOuDl','4792kdHwvs','1415RQyHcT','getElementById','299300rezrYw','cursor','none','string','306526HJhTCP','closeDialog','4oYlORt','removeEventListener'];a=function(){return u;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x1aa)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x18d)](){const j=i;return this.#dialogTitle['style'][j(0x1b2)]=='move';}set[i(0x18d)](c){const k=i;c&&(this.#dialogTitle['style']['cursor']=k(0x191),this.#dialogTitle[k(0x195)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose['style']['display']!=l(0x1b3);}set['closeable'](c){const m=i;c?this.#dialogClose['style']['display']='block':this.#dialogClose[m(0x1aa)][m(0x1a1)]='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x1a5)]('head'),this.#dialogClose=this['_getDomElement'](n(0x18f)),this.#dialogContent=this[n(0x1a5)](n(0x1ab)),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x197)](this),this.#moveEndBound=this.#moveEnd[n(0x197)](this);}static [i(0x196)]=0x2;static [i(0x1ac)]=0x23;static[i(0x18b)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0x18c)]===o(0x1b4))e.#dialogTitle['innerHTML']=c[o(0x18c)];else e.#dialogTitle[o(0x1a7)](c['title']);}if(typeof c['content']==='string')e.#dialogContent[o(0x198)]=c['content'];else e.#dialogContent['appendChild'](c[o(0x1ab)]);return e[o(0x1aa)]['width']=c['width']??o(0x1a6),e['style']['height']=c['height']??'200px',e[o(0x1aa)][o(0x194)]='calc('+e['style'][o(0x194)]+o(0x190)+this[o(0x196)]+'px)',e['style']['height']='calc('+e[o(0x1aa)][o(0x19e)]+o(0x190)+this['offsetHeight']+o(0x1a2),e[o(0x1aa)][o(0x19f)]=c[o(0x19f)]??'calc(50%\x20-\x20(('+e['style']['height']+o(0x1b9),e['style']['left']=c['left']??o(0x1a4)+e[o(0x1aa)]['width']+')\x20/\x202))',c[o(0x18d)]&&(e[o(0x18d)]=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e[o(0x18e)]=c['closeable']),c[o(0x1ba)]&&(e['className']=c['cssClass']),document[o(0x1b0)]('overlayLayer')['appendChild'](e),d;}static[i(0x1b6)](c){const p=i;let d=c[p(0x1a8)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x19a)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById']('overlayLayer')[q(0x1a3)](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0x19b)](r(0x1a9),this.#moveBound),window[r(0x19b)](r(0x19c),this.#moveEndBound);}#move(c){const s=i;this[s(0x1aa)]['left']=c['x']-this.#xOffset+'px',this[s(0x1aa)][s(0x19f)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x1b8)](t(0x1a9),this.#moveBound),window[t(0x1b8)]('pointerup',this.#moveEndBound);}}function b(c,d){c=c-0x18a;const e=a();let f=e[c];return f;}customElements[i(0x193)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);