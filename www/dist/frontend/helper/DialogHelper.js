const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x177))/0x1+-parseInt(h(0x168))/0x2*(-parseInt(h(0x152))/0x3)+parseInt(h(0x16a))/0x4+-parseInt(h(0x15a))/0x5*(parseInt(h(0x16b))/0x6)+parseInt(h(0x158))/0x7+-parseInt(h(0x17c))/0x8*(-parseInt(h(0x15d))/0x9)+-parseInt(h(0x15e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3e0a4));function a(){const t=['cssClass','innerHTML','removeEventListener','move','43180gDierW','width','460676LlZDTM','2141892AHEjqQ','string','openDialog','getElementById','style',')\x20/\x202))','pointermove','element','iobroker-webui-dialog','title','display','getRootNode','15061YZlzwr','head','template','left','offsetHeight','20144zqgFXQ','getTime','content','height','21HRGDJx','closeable','px)','calc(','\x20+\x20','appendChild','3026289wjFiTe','define','5ytImic','none','top','45mqlaTf','1151790eoauVB','pointerup','_getDomElement','calc(50%\x20-\x20((','uniqueId','moveable'];a=function(){return t;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x150;const e=a();let f=e[c];return f;}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x162)];static [i(0x179)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x16f)]=css`
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
        `;static ['is']=i(0x173);get['moveable'](){return this.#dialogTitle['style']['cursor']=='move';}set['moveable'](c){const j=i;c&&(this.#dialogTitle[j(0x16f)]['cursor']=j(0x167),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x153)](){const k=i;return this.#dialogClose[k(0x16f)][k(0x175)]!=k(0x15b);}set[i(0x153)](c){const l=i;c?this.#dialogClose[l(0x16f)][l(0x175)]='block':this.#dialogClose[l(0x16f)][l(0x175)]='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this['_getDomElement'](m(0x178)),this.#dialogClose=this[m(0x160)]('close'),this.#dialogContent=this[m(0x160)](m(0x150)),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static[i(0x16d)](c){const n=i,d='id'+new Date()[n(0x17d)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']===n(0x16c))e.#dialogTitle[n(0x165)]=c['title'];else e.#dialogTitle[n(0x157)](c[n(0x174)]);}if(typeof c[n(0x150)]==='string')e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent['appendChild'](c['content']);return e['style'][n(0x169)]=c['width']??'300px',e[n(0x16f)]['height']=c['height']??'200px',e[n(0x16f)][n(0x169)]=n(0x155)+e[n(0x16f)][n(0x169)]+n(0x156)+this['offsetWidth']+n(0x154),e['style'][n(0x151)]=n(0x155)+e['style']['height']+n(0x156)+this[n(0x17b)]+n(0x154),e[n(0x16f)]['top']=c[n(0x15c)]??n(0x161)+e[n(0x16f)]['height']+n(0x170),e['style']['left']=c[n(0x17a)]??'calc(50%\x20-\x20(('+e[n(0x16f)]['width']+n(0x170),c[n(0x163)]&&(e['moveable']=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e[n(0x153)]=c[n(0x153)]),c[n(0x164)]&&(e['className']=c[n(0x164)]),document['getElementById']('overlayLayer')[n(0x157)](e),d;}static['closeDialog'](c){const o=i;let d=c[o(0x172)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[o(0x176)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const p=i;document[p(0x16e)]('overlayLayer')['removeChild'](this);}#moveStart(c){const q=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](q(0x171),this.#moveBound),window['addEventListener'](q(0x15f),this.#moveEndBound);}#move(c){const r=i;this[r(0x16f)][r(0x17a)]=c['x']-this.#xOffset+'px',this['style'][r(0x15c)]=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x166)]('pointermove',this.#moveBound),window[s(0x166)](s(0x15f),this.#moveEndBound);}}customElements[i(0x159)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);