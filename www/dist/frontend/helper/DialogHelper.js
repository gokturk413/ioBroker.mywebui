const i=b;function b(c,d){c=c-0x120;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x14d))/0x1*(-parseInt(h(0x134))/0x2)+-parseInt(h(0x149))/0x3+parseInt(h(0x121))/0x4*(parseInt(h(0x147))/0x5)+-parseInt(h(0x12e))/0x6+parseInt(h(0x14e))/0x7+parseInt(h(0x131))/0x8+parseInt(h(0x152))/0x9*(parseInt(h(0x120))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc9cd0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const u=['className','offsetHeight','5HoCvCc','overlayLayer','4099815SrASbY','closeable','title','none','14971SzDDjN','4405821lCLBZy','moveable','top','pointermove','1935XdQKqg','5770ZtvWXx','6604652ARfwbl','move','onpointerdown','200px','addEventListener','cssClass','calc(50%\x20-\x20((','offsetWidth','_getDomElement','style','pointerup','container','uniqueId','3534372LtTJva','px)','getBoundingClientRect','5057032FvhWQb','onclick','removeChild','34UCKxHx','iobroker-webui-dialog','innerHTML','width','openDialog','host','block','getElementById','template',')\x20/\x202))','height','content','left','300px','string','\x20+\x20','bind'];a=function(){return u;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x12c)];[i(0x12d)];static [i(0x13c)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x12a)]=css`
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
        `;static ['is']=i(0x135);get['moveable'](){const j=i;return this.#dialogTitle[j(0x12a)]['cursor']=='move';}set['moveable'](c){const k=i;c&&(this.#dialogTitle['style']['cursor']=k(0x122),this.#dialogTitle[k(0x123)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x12a)]['display']!=l(0x14c);}set['closeable'](c){const m=i;c?this.#dialogClose['style']['display']=m(0x13a):this.#dialogClose['style']['display']=m(0x14c);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this[n(0x129)]('close'),this.#dialogContent=this[n(0x129)](n(0x13f)),this.#dialogClose[n(0x132)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0x144)](this);}static [i(0x128)]=0x2;static ['offsetHeight']=0x23;static[i(0x138)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[o(0x14b)]){if(typeof c[o(0x14b)]==='string')e.#dialogTitle[o(0x136)]=c['title'];else e.#dialogTitle['appendChild'](c[o(0x14b)]);}if(typeof c[o(0x13f)]===o(0x142))e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent['appendChild'](c['content']);return e[o(0x12a)]['width']=c['width']??o(0x141),e[o(0x12a)]['height']=c[o(0x13e)]??o(0x124),e['style'][o(0x137)]='calc('+e['style'][o(0x137)]+'\x20+\x20'+this['offsetWidth']+o(0x12f),e['style'][o(0x13e)]='calc('+e['style'][o(0x13e)]+o(0x143)+this[o(0x146)]+'px)',e[o(0x12a)]['top']=c[o(0x150)]??'calc(50%\x20-\x20(('+e[o(0x12a)][o(0x13e)]+')\x20/\x202))',e[o(0x12a)][o(0x140)]=c[o(0x140)]??o(0x127)+e['style'][o(0x137)]+o(0x13d),c[o(0x14f)]&&(e[o(0x14f)]=!![]),(c[o(0x14a)]===![]||c[o(0x14a)]===!![])&&(e['closeable']=c[o(0x14a)]),c[o(0x126)]&&(e[o(0x145)]=c[o(0x126)]),document['getElementById'](o(0x148))['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x139)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x13b)](q(0x148))[q(0x133)](this);}#moveStart(c){const r=i,d=this[r(0x130)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0x125)](r(0x151),this.#moveBound),window[r(0x125)]('pointerup',this.#moveEndBound);}#move(c){const s=i;this['style']['left']=c['x']-this.#xOffset+'px',this[s(0x12a)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener'](t(0x151),this.#moveBound),window['removeEventListener'](t(0x12b),this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);