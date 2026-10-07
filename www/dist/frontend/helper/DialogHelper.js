const i=b;function b(c,d){c=c-0x1db;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e2))/0x1+-parseInt(h(0x208))/0x2+-parseInt(h(0x1fa))/0x3*(parseInt(h(0x1e6))/0x4)+-parseInt(h(0x1f7))/0x5*(parseInt(h(0x202))/0x6)+-parseInt(h(0x205))/0x7+parseInt(h(0x1e3))/0x8*(-parseInt(h(0x1f3))/0x9)+parseInt(h(0x1e8))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96f6a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x207)];[i(0x1ee)];static ['template']=html`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x1ed)](){const j=i;return this.#dialogTitle[j(0x1f6)]['cursor']=='move';}set['moveable'](c){const k=i;c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle[k(0x20a)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x1f6)][l(0x1e7)]!=l(0x1e4);}set[i(0x1f5)](c){const m=i;c?this.#dialogClose[m(0x1f6)]['display']=m(0x1eb):this.#dialogClose[m(0x1f6)]['display']=m(0x1e4);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this[n(0x1f8)](n(0x200)),this.#dialogContent=this['_getDomElement'](n(0x1e0)),this.#dialogClose[n(0x201)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static[i(0x1fe)](c){const o=i,d='id'+new Date()[o(0x1f1)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']==='string')e.#dialogTitle['innerHTML']=c[o(0x1f2)];else e.#dialogTitle['appendChild'](c[o(0x1f2)]);}if(typeof c[o(0x1e0)]==='string')e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent['appendChild'](c[o(0x1e0)]);return e[o(0x1f6)]['width']=c[o(0x1f9)]??o(0x1fc),e['style'][o(0x1e5)]=c[o(0x1e5)]??o(0x204),e['style'][o(0x1f9)]='calc('+e['style']['width']+'\x20+\x20'+this[o(0x1ff)]+'px)',e[o(0x1f6)][o(0x1e5)]='calc('+e['style']['height']+o(0x1df)+this['offsetHeight']+'px)',e['style'][o(0x1de)]=c[o(0x1de)]??o(0x1dd)+e['style'][o(0x1e5)]+o(0x1ec),e['style'][o(0x206)]=c[o(0x206)]??'calc(50%\x20-\x20(('+e['style']['width']+')\x20/\x202))',c['moveable']&&(e[o(0x1ed)]=!![]),(c['closeable']===![]||c[o(0x1f5)]===!![])&&(e[o(0x1f5)]=c[o(0x1f5)]),c[o(0x1f0)]&&(e['className']=c[o(0x1f0)]),document[o(0x1fd)]('overlayLayer')[o(0x1db)](e),d;}static[i(0x1e1)](c){const p=i;let d=c[p(0x209)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x1ef)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById'](q(0x1ea))[q(0x203)](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](r(0x1e9),this.#moveBound),window[r(0x1f4)]('pointerup',this.#moveEndBound);}#move(c){const s=i;this['style']['left']=c['x']-this.#xOffset+'px',this[s(0x1f6)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x1dc)]('pointermove',this.#moveBound),window['removeEventListener'](t(0x1fb),this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);function a(){const u=['container','605090LUieex','element','onpointerdown','appendChild','removeEventListener','calc(50%\x20-\x20((','top','\x20+\x20','content','closeDialog','1145193ThNZnO','29944BJIQzL','none','height','12JYImSl','display','45930630GGrRVR','pointermove','overlayLayer','block',')\x20/\x202))','moveable','uniqueId','host','cssClass','getTime','title','1710JoFPVj','addEventListener','closeable','style','10wMyppf','_getDomElement','width','787323QDAalA','pointerup','300px','getElementById','openDialog','offsetWidth','close','onclick','2243832JezoMX','removeChild','200px','1963794JPaOkI','left'];a=function(){return u;};return a();}