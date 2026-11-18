const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1d0))/0x1+parseInt(h(0x1d4))/0x2+parseInt(h(0x1b1))/0x3+parseInt(h(0x1af))/0x4+-parseInt(h(0x1ad))/0x5+-parseInt(h(0x1bb))/0x6*(parseInt(h(0x1cd))/0x7)+-parseInt(h(0x1b0))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd807c));function a(){const u=['height','none','8472570dGaaoo','width','close','offsetHeight',')\x20/\x202))','pointerup','moveable','getRootNode','define','offsetWidth','300px','bind','px)','left','innerHTML','display','openDialog','onclick','7byJGFN','calc(50%\x20-\x20((','cssClass','133373bFjLgn','content','onpointerdown','move','2854610uXBtWj','_getDomElement','style','\x20+\x20','addEventListener','closeDialog','removeChild','8610420KYoLCk','getBoundingClientRect','6134824tohcRX','1985968wxkdOb','4318941VjCLjS','pointermove','calc(','closeable','appendChild','top','block','removeEventListener'];a=function(){return u;};return a();}function b(c,d){c=c-0x1ab;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x1d6)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle['style']['cursor']==j(0x1d3);}set['moveable'](c){const k=i;c&&(this.#dialogTitle['style']['cursor']=k(0x1d3),this.#dialogTitle[k(0x1d2)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x1d6)]['display']!=l(0x1ba);}set['closeable'](c){const m=i;c?this.#dialogClose[m(0x1d6)]['display']=m(0x1b7):this.#dialogClose[m(0x1d6)][m(0x1ca)]='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x1d5)]('head'),this.#dialogClose=this['_getDomElement'](n(0x1bd)),this.#dialogContent=this['_getDomElement'](n(0x1d1)),this.#dialogClose[n(0x1cc)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0x1c6)](this);}static [i(0x1c4)]=0x2;static [i(0x1be)]=0x23;static[i(0x1cb)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']==='string')e.#dialogTitle[o(0x1c9)]=c['title'];else e.#dialogTitle['appendChild'](c['title']);}if(typeof c[o(0x1d1)]==='string')e.#dialogContent[o(0x1c9)]=c[o(0x1d1)];else e.#dialogContent[o(0x1b5)](c[o(0x1d1)]);return e['style']['width']=c[o(0x1bc)]??o(0x1c5),e[o(0x1d6)]['height']=c['height']??'200px',e['style'][o(0x1bc)]=o(0x1b3)+e[o(0x1d6)]['width']+o(0x1d7)+this[o(0x1c4)]+o(0x1c7),e[o(0x1d6)][o(0x1b9)]=o(0x1b3)+e['style']['height']+o(0x1d7)+this['offsetHeight']+o(0x1c7),e[o(0x1d6)]['top']=c[o(0x1b6)]??'calc(50%\x20-\x20(('+e[o(0x1d6)][o(0x1b9)]+o(0x1bf),e['style'][o(0x1c8)]=c[o(0x1c8)]??o(0x1ce)+e['style']['width']+')\x20/\x202))',c[o(0x1c1)]&&(e['moveable']=!![]),(c[o(0x1b4)]===![]||c[o(0x1b4)]===!![])&&(e['closeable']=c[o(0x1b4)]),c[o(0x1cf)]&&(e['className']=c[o(0x1cf)]),document['getElementById']('overlayLayer')['appendChild'](e),d;}static[i(0x1ab)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x1c2)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById']('overlayLayer')[q(0x1ac)](this);}#moveStart(c){const r=i,d=this[r(0x1ae)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window[r(0x1d8)]('pointerup',this.#moveEndBound);}#move(c){const s=i;this[s(0x1d6)]['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener'](t(0x1b2),this.#moveBound),window[t(0x1b8)](t(0x1c0),this.#moveEndBound);}}customElements[i(0x1c3)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);