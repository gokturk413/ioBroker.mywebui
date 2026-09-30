function b(c,d){c=c-0x182;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x185))/0x1*(-parseInt(h(0x187))/0x2)+parseInt(h(0x1ad))/0x3+parseInt(h(0x199))/0x4+-parseInt(h(0x18f))/0x5*(parseInt(h(0x1ac))/0x6)+parseInt(h(0x19f))/0x7*(parseInt(h(0x1a7))/0x8)+-parseInt(h(0x1a3))/0x9+-parseInt(h(0x18d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5ea4e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x18a)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle['style']['cursor']==j(0x1a9);}set[i(0x1a1)](c){const k=i;c&&(this.#dialogTitle[k(0x18a)]['cursor']=k(0x1a9),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x1a0)](){const l=i;return this.#dialogClose[l(0x18a)][l(0x186)]!='none';}set['closeable'](c){const m=i;c?this.#dialogClose[m(0x18a)][m(0x186)]=m(0x18c):this.#dialogClose['style'][m(0x186)]=m(0x1a8);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this['_getDomElement'](n(0x19c)),this.#dialogContent=this[n(0x197)]('content'),this.#dialogClose[n(0x195)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0x194)](this);}static ['offsetWidth']=0x2;static [i(0x18e)]=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[o(0x184)]){if(typeof c['title']===o(0x192))e.#dialogTitle[o(0x18b)]=c['title'];else e.#dialogTitle[o(0x19a)](c['title']);}if(typeof c['content']===o(0x192))e.#dialogContent[o(0x18b)]=c[o(0x1a5)];else e.#dialogContent[o(0x19a)](c[o(0x1a5)]);return e[o(0x18a)]['width']=c['width']??'300px',e['style']['height']=c['height']??'200px',e[o(0x18a)]['width']='calc('+e['style']['width']+'\x20+\x20'+this['offsetWidth']+o(0x189),e['style']['height']='calc('+e[o(0x18a)][o(0x1a6)]+o(0x19b)+this[o(0x18e)]+'px)',e[o(0x18a)][o(0x19d)]=c[o(0x19d)]??o(0x1a4)+e[o(0x18a)]['height']+')\x20/\x202))',e['style'][o(0x193)]=c[o(0x193)]??'calc(50%\x20-\x20(('+e['style'][o(0x1ab)]+o(0x19e),c['moveable']&&(e[o(0x1a1)]=!![]),(c[o(0x1a0)]===![]||c[o(0x1a0)]===!![])&&(e['closeable']=c['closeable']),c[o(0x1aa)]&&(e['className']=c['cssClass']),document['getElementById'](o(0x191))['appendChild'](e),d;}static[i(0x182)](c){const p=i;let d=c[p(0x196)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.['host'];}d&&d.#closeDialog();}#closeDialog(){document['getElementById']('overlayLayer')['removeChild'](this);}#moveStart(c){const q=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[q(0x183)]('pointermove',this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){this['style']['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const r=i;window[r(0x1a2)](r(0x198),this.#moveBound),window['removeEventListener'](r(0x188),this.#moveEndBound);}}function a(){const s=['content','height','8hUNmQb','none','move','cssClass','width','6VOUnKx','2136618esEykh','closeDialog','addEventListener','title','4853tlhVlm','display','2lbDTjH','pointerup','px)','style','innerHTML','block','2460260ZzZMtF','offsetHeight','755255JQEpVf','define','overlayLayer','string','left','bind','onclick','element','_getDomElement','pointermove','2214828xDuWtZ','appendChild','\x20+\x20','close','top',')\x20/\x202))','1694504JeoUrJ','closeable','moveable','removeEventListener','6552891KNBDwI','calc(50%\x20-\x20(('];a=function(){return s;};return a();}customElements[i(0x190)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);