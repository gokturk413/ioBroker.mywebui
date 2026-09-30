const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x12e))/0x1*(parseInt(h(0x11f))/0x2)+parseInt(h(0x12d))/0x3+parseInt(h(0x137))/0x4*(-parseInt(h(0x11e))/0x5)+parseInt(h(0x123))/0x6+-parseInt(h(0x12b))/0x7+-parseInt(h(0x132))/0x8*(-parseInt(h(0x112))/0x9)+parseInt(h(0x118))/0xa*(-parseInt(h(0x11a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa96b7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x10d;const e=a();let f=e[c];return f;}function a(){const u=['37510KkHkBf','offsetWidth','2321vHvCoQ','iobroker-webui-dialog','block','move','4974505KkAfNq','4jMSSsF','style','left','\x20+\x20','3907110SFUIdy','moveable','getTime','300px','removeEventListener','top','appendChild','width','1296211xwdeBX','calc(','222786QXtrSj','554326WxcPNh','host','getElementById','title','2696jeFCXp','string','closeable','cssClass','cursor','4QZYxuy','openDialog','none','close','calc(50%\x20-\x20((','pointermove','22203iaJNuA','pointerup','content','closeDialog','template','height'];a=function(){return u;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0x116)]=html`
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
        `;static ['is']=i(0x11b);get['moveable'](){const j=i;return this.#dialogTitle['style'][j(0x136)]==j(0x11d);}set[i(0x124)](c){const k=i;c&&(this.#dialogTitle['style'][k(0x136)]='move',this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x120)]['display']!=l(0x10e);}set[i(0x134)](c){const m=i;c?this.#dialogClose[m(0x120)]['display']=m(0x11c):this.#dialogClose[m(0x120)]['display']=m(0x10e);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this['_getDomElement'](n(0x10f)),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0x119)]=0x2;static ['offsetHeight']=0x23;static[i(0x10d)](c){const o=i,d='id'+new Date()[o(0x125)](),e=new IoBrokerWebuiDialog();if(c[o(0x131)]){if(typeof c['title']===o(0x133))e.#dialogTitle['innerHTML']=c[o(0x131)];else e.#dialogTitle['appendChild'](c['title']);}if(typeof c['content']===o(0x133))e.#dialogContent['innerHTML']=c[o(0x114)];else e.#dialogContent[o(0x129)](c['content']);return e['style']['width']=c[o(0x12a)]??o(0x126),e['style']['height']=c['height']??'200px',e[o(0x120)][o(0x12a)]='calc('+e['style']['width']+'\x20+\x20'+this['offsetWidth']+'px)',e[o(0x120)]['height']=o(0x12c)+e['style'][o(0x117)]+o(0x122)+this['offsetHeight']+'px)',e[o(0x120)][o(0x128)]=c[o(0x128)]??'calc(50%\x20-\x20(('+e['style']['height']+')\x20/\x202))',e['style'][o(0x121)]=c[o(0x121)]??o(0x110)+e[o(0x120)]['width']+')\x20/\x202))',c[o(0x124)]&&(e[o(0x124)]=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e[o(0x134)]=c['closeable']),c[o(0x135)]&&(e['className']=c['cssClass']),document[o(0x130)]('overlayLayer')[o(0x129)](e),d;}static[i(0x115)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x12f)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x130)]('overlayLayer')['removeChild'](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](r(0x111),this.#moveBound),window['addEventListener'](r(0x113),this.#moveEndBound);}#move(c){const s=i;this[s(0x120)]['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x127)](t(0x111),this.#moveBound),window['removeEventListener'](t(0x113),this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);