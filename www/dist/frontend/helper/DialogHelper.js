const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xab))/0x1+-parseInt(h(0x83))/0x2+parseInt(h(0xa0))/0x3*(-parseInt(h(0xa3))/0x4)+-parseInt(h(0x9b))/0x5+-parseInt(h(0xaa))/0x6*(-parseInt(h(0x84))/0x7)+-parseInt(h(0xac))/0x8+parseInt(h(0x8b))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x243d2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const u=['title','300px','head','_getDomElement','removeChild','left','style','height','moveable','offsetWidth','template','cursor','getRootNode','pointerup','block','1184345YDHtOM','getBoundingClientRect','cssClass','display','uniqueId','3GrSoeF','addEventListener','appendChild','1067628lwxPCM','innerHTML','content','width','removeEventListener','string','px)','186762vzFZmz','257850nQRIyi','270608pIDfzp','calc(50%\x20-\x20((','295964onPwVO','35bKwfoI','\x20+\x20','getElementById','iobroker-webui-dialog',')\x20/\x202))','calc(','closeable','8426097xEjZen'];a=function(){return u;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x9f)];static [i(0x96)]=html`
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
        `;static ['is']=i(0x87);get['moveable'](){const j=i;return this.#dialogTitle['style'][j(0x97)]=='move';}set[i(0x94)](c){const k=i;c&&(this.#dialogTitle[k(0x92)][k(0x97)]='move',this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x92)][l(0x9e)]!='none';}set[i(0x8a)](c){const m=i;c?this.#dialogClose['style']['display']=m(0x9a):this.#dialogClose[m(0x92)][m(0x9e)]='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x8f)](n(0x8e)),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this[n(0x8f)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[o(0x8c)]){if(typeof c['title']===o(0xa8))e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle[o(0xa2)](c['title']);}if(typeof c['content']==='string')e.#dialogContent[o(0xa4)]=c[o(0xa5)];else e.#dialogContent['appendChild'](c['content']);return e[o(0x92)]['width']=c[o(0xa6)]??o(0x8d),e[o(0x92)]['height']=c['height']??'200px',e['style'][o(0xa6)]=o(0x89)+e['style']['width']+'\x20+\x20'+this[o(0x95)]+o(0xa9),e['style'][o(0x93)]=o(0x89)+e[o(0x92)]['height']+o(0x85)+this['offsetHeight']+'px)',e[o(0x92)]['top']=c['top']??o(0x82)+e['style']['height']+o(0x88),e['style']['left']=c['left']??o(0x82)+e[o(0x92)][o(0xa6)]+o(0x88),c[o(0x94)]&&(e[o(0x94)]=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e['closeable']=c['closeable']),c[o(0x9d)]&&(e['className']=c[o(0x9d)]),document[o(0x86)]('overlayLayer')[o(0xa2)](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x98)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0x86)]('overlayLayer')[q(0x90)](this);}#moveStart(c){const r=i,d=this[r(0x9c)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0xa1)]('pointermove',this.#moveBound),window[r(0xa1)]('pointerup',this.#moveEndBound);}#move(c){const s=i;this['style'][s(0x91)]=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener']('pointermove',this.#moveBound),window[t(0xa7)](t(0x99),this.#moveEndBound);}}function b(c,d){c=c-0x82;const e=a();let f=e[c];return f;}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);