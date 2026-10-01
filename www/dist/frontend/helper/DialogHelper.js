const i=b;function b(c,d){c=c-0x11f;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x13e))/0x1+-parseInt(h(0x148))/0x2+-parseInt(h(0x12e))/0x3*(-parseInt(h(0x144))/0x4)+parseInt(h(0x146))/0x5*(-parseInt(h(0x121))/0x6)+parseInt(h(0x14d))/0x7*(parseInt(h(0x12a))/0x8)+-parseInt(h(0x13d))/0x9*(-parseInt(h(0x125))/0xa)+parseInt(h(0x131))/0xb*(-parseInt(h(0x124))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9d454));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x130)];['uniqueId'];static [i(0x145)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x133)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle['style']['cursor']==j(0x136);}set['moveable'](c){const k=i;c&&(this.#dialogTitle['style']['cursor']=k(0x136),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x138)](){return this.#dialogClose['style']['display']!='none';}set['closeable'](c){const l=i;c?this.#dialogClose[l(0x133)][l(0x141)]='block':this.#dialogClose['style']['display']=l(0x14b);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this[m(0x128)]('head'),this.#dialogClose=this['_getDomElement'](m(0x137)),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[m(0x127)](this),this.#moveEndBound=this.#moveEnd[m(0x127)](this);}static [i(0x129)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const n=i,d='id'+new Date()[n(0x120)](),e=new IoBrokerWebuiDialog();if(c[n(0x13c)]){if(typeof c['title']==='string')e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle[n(0x11f)](c[n(0x13c)]);}if(typeof c[n(0x134)]===n(0x14f))e.#dialogContent[n(0x14e)]=c['content'];else e.#dialogContent['appendChild'](c['content']);return e['style'][n(0x132)]=c[n(0x132)]??'300px',e['style']['height']=c['height']??n(0x135),e['style']['width']='calc('+e['style']['width']+n(0x14a)+this[n(0x129)]+'px)',e['style']['height']='calc('+e['style'][n(0x13a)]+n(0x14a)+this['offsetHeight']+n(0x13f),e['style'][n(0x143)]=c['top']??'calc(50%\x20-\x20(('+e['style'][n(0x13a)]+')\x20/\x202))',e[n(0x133)]['left']=c[n(0x140)]??n(0x12b)+e[n(0x133)]['width']+n(0x122),c[n(0x147)]&&(e['moveable']=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e['closeable']=c['closeable']),c[n(0x12c)]&&(e[n(0x150)]=c[n(0x12c)]),document['getElementById'](n(0x142))[n(0x11f)](e),d;}static[i(0x126)](c){const o=i;let d=c[o(0x139)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[o(0x12d)];}d&&d.#closeDialog();}#closeDialog(){const p=i;document[p(0x123)]('overlayLayer')['removeChild'](this);}#moveStart(c){const q=i,d=this[q(0x14c)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[q(0x12f)]('pointermove',this.#moveBound),window['addEventListener'](q(0x149),this.#moveEndBound);}#move(c){const r=i;this[r(0x133)][r(0x140)]=c['x']-this.#xOffset+'px',this['style'][r(0x143)]=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x13b)]('pointermove',this.#moveBound),window['removeEventListener'](s(0x149),this.#moveEndBound);}}function a(){const t=['appendChild','getTime','906VELDbq',')\x20/\x202))','getElementById','13500lEfeVp','1659760JWWbff','closeDialog','bind','_getDomElement','offsetWidth','13192GtfYji','calc(50%\x20-\x20((','cssClass','host','46401felczW','addEventListener','container','10285xkwOLe','width','style','content','200px','move','close','closeable','element','height','removeEventListener','title','36klBqwf','948670LYOJLU','px)','left','display','overlayLayer','top','324TcRvYl','template','28875pGUZTM','moveable','1458718jQCzhP','pointerup','\x20+\x20','none','getBoundingClientRect','1834UKGpfK','innerHTML','string','className','define'];a=function(){return t;};return a();}customElements[i(0x151)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);