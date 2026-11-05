const i=b;function b(c,d){c=c-0xcc;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xfc))/0x1+parseInt(h(0xd6))/0x2*(-parseInt(h(0xcd))/0x3)+-parseInt(h(0xe7))/0x4+parseInt(h(0xd8))/0x5+parseInt(h(0xe8))/0x6*(-parseInt(h(0xd5))/0x7)+-parseInt(h(0xe0))/0x8*(parseInt(h(0xd1))/0x9)+-parseInt(h(0xcf))/0xa*(-parseInt(h(0xdf))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbc075));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const s=['45497080beMzQp','onclick','18iWKoRj','bind','uniqueId','getTime','133RsZBSh','2804038VrGoKk',')\x20/\x202))','2742060YvdnVL','\x20+\x20','appendChild','head','height','define','removeEventListener','11NWcDHf','4308456BGeabF','_getDomElement','calc(50%\x20-\x20((','innerHTML','cssClass','width','title','274192zNSPIC','440250ZiGUiF','cursor','offsetHeight','string','closeable','getElementById','offsetWidth','template','className','container','close','openDialog','px)','none','left','move','moveable','calc(','iobroker-webui-dialog','content','386149XbSOjH','style','pointermove','3ppCuxh','closeDialog'];a=function(){return s;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0xf1)];[i(0xd3)];static [i(0xef)]=html`
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
        `;static ['is']=i(0xfa);get['moveable'](){const j=i;return this.#dialogTitle['style']['cursor']==j(0xf7);}set['moveable'](c){const k=i;c&&(this.#dialogTitle['style'][k(0xe9)]=k(0xf7),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose['style']['display']!=l(0xf5);}set['closeable'](c){const m=i;c?this.#dialogClose['style']['display']='block':this.#dialogClose[m(0xfd)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0xe1)](n(0xdb)),this.#dialogClose=this[n(0xe1)](n(0xf2)),this.#dialogContent=this[n(0xe1)]('content'),this.#dialogClose[n(0xd0)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0xd2)](this);}static [i(0xee)]=0x2;static [i(0xea)]=0x23;static[i(0xf3)](c){const o=i,d='id'+new Date()[o(0xd4)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0xe6)]===o(0xeb))e.#dialogTitle[o(0xe3)]=c[o(0xe6)];else e.#dialogTitle[o(0xda)](c[o(0xe6)]);}if(typeof c['content']===o(0xeb))e.#dialogContent[o(0xe3)]=c['content'];else e.#dialogContent[o(0xda)](c[o(0xfb)]);return e[o(0xfd)][o(0xe5)]=c[o(0xe5)]??'300px',e[o(0xfd)][o(0xdc)]=c['height']??'200px',e['style']['width']=o(0xf9)+e[o(0xfd)]['width']+o(0xd9)+this['offsetWidth']+'px)',e[o(0xfd)]['height']='calc('+e['style'][o(0xdc)]+o(0xd9)+this['offsetHeight']+o(0xf4),e['style']['top']=c['top']??o(0xe2)+e[o(0xfd)]['height']+o(0xd7),e[o(0xfd)]['left']=c[o(0xf6)]??'calc(50%\x20-\x20(('+e[o(0xfd)]['width']+')\x20/\x202))',c[o(0xf8)]&&(e['moveable']=!![]),(c[o(0xec)]===![]||c['closeable']===!![])&&(e['closeable']=c['closeable']),c['cssClass']&&(e[o(0xf0)]=c[o(0xe4)]),document[o(0xed)]('overlayLayer')[o(0xda)](e),d;}static[i(0xce)](c){let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const p=i;document[p(0xed)]('overlayLayer')['removeChild'](this);}#moveStart(c){const q=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](q(0xcc),this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){this['style']['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const r=i;window[r(0xde)](r(0xcc),this.#moveBound),window[r(0xde)]('pointerup',this.#moveEndBound);}}customElements[i(0xdd)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);