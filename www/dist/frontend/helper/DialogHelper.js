function b(c,d){c=c-0x1a6;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1bb))/0x1+parseInt(h(0x1bd))/0x2*(-parseInt(h(0x1ca))/0x3)+-parseInt(h(0x1c3))/0x4*(-parseInt(h(0x1ae))/0x5)+-parseInt(h(0x1a7))/0x6*(parseInt(h(0x1bc))/0x7)+parseInt(h(0x1ab))/0x8*(-parseInt(h(0x1c5))/0x9)+-parseInt(h(0x1bf))/0xa+parseInt(h(0x1b8))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x339cd));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const r=['className','appendChild','3jeNDyq','string','top','move','moveable','calc(','head','none','offsetWidth','height','774marxxK',')\x20/\x202))','left','offsetHeight','8rjgiTX','title','innerHTML','1952765fpHjJo','200px','closeable','getTime','cssClass','display','define','cursor','template','removeChild','5260299oVbpyd','px)','\x20+\x20','265258kUvMqK','9219JRaPah','72478nIXiRb','iobroker-webui-dialog','1760520avJVfW','_getDomElement','width','style','4pVkziX','closeDialog','89235Gbnwlh','content','openDialog'];a=function(){return r;};return a();}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0x1b6)]=html`
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
        `;static ['is']=i(0x1be);get['moveable'](){const j=i;return this.#dialogTitle['style'][j(0x1b5)]=='move';}set[i(0x1ce)](c){const k=i;c&&(this.#dialogTitle['style'][k(0x1b5)]=k(0x1cd),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x1c2)][l(0x1b3)]!=l(0x1d1);}set[i(0x1b0)](c){const m=i;c?this.#dialogClose['style'][m(0x1b3)]='block':this.#dialogClose[m(0x1c2)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x1c0)](n(0x1d0)),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this['_getDomElement'](n(0x1c6)),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static [i(0x1d2)]=0x2;static ['offsetHeight']=0x23;static[i(0x1c7)](c){const o=i,d='id'+new Date()[o(0x1b1)](),e=new IoBrokerWebuiDialog();if(c[o(0x1ac)]){if(typeof c['title']==='string')e.#dialogTitle[o(0x1ad)]=c[o(0x1ac)];else e.#dialogTitle['appendChild'](c['title']);}if(typeof c[o(0x1c6)]===o(0x1cb))e.#dialogContent['innerHTML']=c[o(0x1c6)];else e.#dialogContent[o(0x1c9)](c[o(0x1c6)]);return e[o(0x1c2)]['width']=c[o(0x1c1)]??'300px',e[o(0x1c2)]['height']=c['height']??o(0x1af),e['style']['width']=o(0x1cf)+e[o(0x1c2)][o(0x1c1)]+'\x20+\x20'+this['offsetWidth']+o(0x1b9),e[o(0x1c2)][o(0x1a6)]='calc('+e['style']['height']+o(0x1ba)+this[o(0x1aa)]+'px)',e[o(0x1c2)]['top']=c['top']??'calc(50%\x20-\x20(('+e[o(0x1c2)][o(0x1a6)]+o(0x1a8),e['style'][o(0x1a9)]=c['left']??'calc(50%\x20-\x20(('+e[o(0x1c2)][o(0x1c1)]+o(0x1a8),c['moveable']&&(e['moveable']=!![]),(c[o(0x1b0)]===![]||c[o(0x1b0)]===!![])&&(e['closeable']=c[o(0x1b0)]),c[o(0x1b2)]&&(e[o(0x1c8)]=c[o(0x1b2)]),document['getElementById']('overlayLayer')[o(0x1c9)](e),d;}static[i(0x1c4)](c){let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const p=i;document['getElementById']('overlayLayer')[p(0x1b7)](this);}#moveStart(c){const d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const q=i;this[q(0x1c2)]['left']=c['x']-this.#xOffset+'px',this['style'][q(0x1cc)]=c['y']-this.#yOffset+'px';}#moveEnd(){window['removeEventListener']('pointermove',this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}customElements[i(0x1b4)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);