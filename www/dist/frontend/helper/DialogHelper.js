function b(c,d){c=c-0x188;const e=a();let f=e[c];return f;}const i=b;function a(){const t=['pointermove','closeDialog','moveable','width','497RoPQwA','title','host',')\x20/\x202))','removeEventListener','486kxYApX','block','getElementById','5883291lGrleP','overlayLayer','openDialog','onpointerdown','466752HOnxus','appendChild','head','display','10wyUAOd','onclick','calc(','uniqueId','getBoundingClientRect','8298tuAsnQ','calc(50%\x20-\x20((','15069700ULaDak','55218tnbCSB','string','innerHTML','cssClass','_getDomElement','closeable','\x20+\x20','offsetHeight','left','1313824eUbqio','offsetWidth','close','getRootNode','563021aHkEpR','style','height','define','top','iobroker-webui-dialog','move'];a=function(){return t;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1ad))/0x1+-parseInt(h(0x19d))/0x2*(parseInt(h(0x18d))/0x3)+-parseInt(h(0x194))/0x4*(-parseInt(h(0x198))/0x5)+parseInt(h(0x1a0))/0x6*(parseInt(h(0x188))/0x7)+-parseInt(h(0x1a9))/0x8+-parseInt(h(0x190))/0x9+parseInt(h(0x19f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x532c1));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x19b)];static ['template']=html`
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
        `;static ['is']=i(0x1b2);get['moveable'](){const j=i;return this.#dialogTitle['style']['cursor']==j(0x1b3);}set[i(0x1b6)](c){const k=i;c&&(this.#dialogTitle[k(0x1ae)]['cursor']='move',this.#dialogTitle[k(0x193)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x1ae)]['display']!='none';}set[i(0x1a5)](c){const m=i;c?this.#dialogClose[m(0x1ae)][m(0x197)]=m(0x18e):this.#dialogClose[m(0x1ae)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x1a4)](n(0x196)),this.#dialogClose=this['_getDomElement'](n(0x1ab)),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose[n(0x199)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0x1aa)]=0x2;static [i(0x1a7)]=0x23;static[i(0x192)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[o(0x189)]){if(typeof c[o(0x189)]==='string')e.#dialogTitle[o(0x1a2)]=c['title'];else e.#dialogTitle[o(0x195)](c[o(0x189)]);}if(typeof c['content']===o(0x1a1))e.#dialogContent[o(0x1a2)]=c['content'];else e.#dialogContent['appendChild'](c['content']);return e['style'][o(0x1b7)]=c['width']??'300px',e['style']['height']=c[o(0x1af)]??'200px',e[o(0x1ae)]['width']=o(0x19a)+e[o(0x1ae)][o(0x1b7)]+o(0x1a6)+this[o(0x1aa)]+'px)',e['style'][o(0x1af)]=o(0x19a)+e['style'][o(0x1af)]+o(0x1a6)+this[o(0x1a7)]+'px)',e['style']['top']=c['top']??o(0x19e)+e[o(0x1ae)]['height']+o(0x18b),e['style']['left']=c[o(0x1a8)]??o(0x19e)+e['style'][o(0x1b7)]+o(0x18b),c['moveable']&&(e[o(0x1b6)]=!![]),(c[o(0x1a5)]===![]||c[o(0x1a5)]===!![])&&(e[o(0x1a5)]=c[o(0x1a5)]),c[o(0x1a3)]&&(e['className']=c[o(0x1a3)]),document[o(0x18f)](o(0x191))[o(0x195)](e),d;}static[i(0x1b5)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x1ac)]()?.[p(0x18a)];}d&&d.#closeDialog();}#closeDialog(){document['getElementById']('overlayLayer')['removeChild'](this);}#moveStart(c){const q=i,d=this[q(0x19c)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](q(0x1b4),this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const r=i;this[r(0x1ae)][r(0x1a8)]=c['x']-this.#xOffset+'px',this[r(0x1ae)][r(0x1b1)]=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x18c)]('pointermove',this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}customElements[i(0x1b0)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);