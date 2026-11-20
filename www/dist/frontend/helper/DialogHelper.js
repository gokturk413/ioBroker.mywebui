const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1b1))/0x1+-parseInt(h(0x1ce))/0x2+-parseInt(h(0x1aa))/0x3*(-parseInt(h(0x1b5))/0x4)+parseInt(h(0x1b6))/0x5+parseInt(h(0x1b4))/0x6+parseInt(h(0x1cc))/0x7+parseInt(h(0x1bb))/0x8*(-parseInt(h(0x1c1))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb16bb));function b(c,d){c=c-0x1a1;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
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
        `;static ['is']=i(0x1af);get[i(0x1c7)](){const j=i;return this.#dialogTitle['style'][j(0x1c4)]==j(0x1a2);}set[i(0x1c7)](c){const k=i;c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle[k(0x1c8)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x1ac)]['display']!=l(0x1a1);}set['closeable'](c){const m=i;c?this.#dialogClose[m(0x1ac)][m(0x1b0)]='block':this.#dialogClose[m(0x1ac)]['display']=m(0x1a1);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x1c3)](this),this.#moveEndBound=this.#moveEnd[n(0x1c3)](this);}static [i(0x1a7)]=0x2;static [i(0x1c5)]=0x23;static[i(0x1c0)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0x1c6)]===o(0x1a6))e.#dialogTitle[o(0x1a3)]=c[o(0x1c6)];else e.#dialogTitle[o(0x1b8)](c[o(0x1c6)]);}if(typeof c['content']===o(0x1a6))e.#dialogContent[o(0x1a3)]=c[o(0x1be)];else e.#dialogContent['appendChild'](c[o(0x1be)]);return e[o(0x1ac)][o(0x1b2)]=c['width']??'300px',e['style'][o(0x1b7)]=c['height']??'200px',e[o(0x1ac)]['width']='calc('+e['style']['width']+o(0x1ad)+this[o(0x1a7)]+'px)',e[o(0x1ac)]['height']='calc('+e[o(0x1ac)]['height']+'\x20+\x20'+this[o(0x1c5)]+o(0x1ca),e['style']['top']=c['top']??'calc(50%\x20-\x20(('+e['style']['height']+')\x20/\x202))',e[o(0x1ac)]['left']=c[o(0x1cd)]??o(0x1ae)+e[o(0x1ac)][o(0x1b2)]+o(0x1a5),c['moveable']&&(e[o(0x1c7)]=!![]),(c[o(0x1a4)]===![]||c['closeable']===!![])&&(e[o(0x1a4)]=c['closeable']),c['cssClass']&&(e[o(0x1b9)]=c[o(0x1c2)]),document['getElementById']('overlayLayer')[o(0x1b8)](e),d;}static['closeDialog'](c){const p=i;let d=c[p(0x1a8)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x1ba)]()?.[p(0x1c9)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById']('overlayLayer')[q(0x1b3)](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window[r(0x1bd)]('pointerup',this.#moveEndBound);}#move(c){const s=i;this[s(0x1ac)][s(0x1cd)]=c['x']-this.#xOffset+'px',this['style'][s(0x1bc)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener'](t(0x1ab),this.#moveBound),window[t(0x1cb)](t(0x1bf),this.#moveEndBound);}}function a(){const u=['31370319mbnAep','cssClass','bind','cursor','offsetHeight','title','moveable','onpointerdown','host','px)','removeEventListener','9337748clJFaE','left','2633198ZXSuqY','none','move','innerHTML','closeable',')\x20/\x202))','string','offsetWidth','element','define','9hGiUly','pointermove','style','\x20+\x20','calc(50%\x20-\x20((','iobroker-webui-dialog','display','1412556IOdJbA','width','removeChild','7939428yJpIjF','1824312zIpAES','454565aPslzk','height','appendChild','className','getRootNode','8DzOUSY','top','addEventListener','content','pointerup','openDialog'];a=function(){return u;};return a();}customElements[i(0x1a9)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);