function b(c,d){c=c-0x115;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x124))/0x1*(parseInt(h(0x132))/0x2)+-parseInt(h(0x13b))/0x3+-parseInt(h(0x133))/0x4+-parseInt(h(0x12e))/0x5*(-parseInt(h(0x11a))/0x6)+-parseInt(h(0x12d))/0x7+-parseInt(h(0x143))/0x8*(-parseInt(h(0x12f))/0x9)+parseInt(h(0x121))/0xa*(parseInt(h(0x131))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x27671));function a(){const u=['19205QdXRZt','162euZlYC','offsetHeight','132MHVtcL','310330cvvPSI','304328sCJXFG','onclick','_getDomElement','host','uniqueId','top','onpointerdown','getBoundingClientRect','861171miuRKq','move','define','content','width','display','pointerup','\x20+\x20','58024YjrJap','removeChild','getTime','appendChild','style','className','element','24MYwipa','pointermove','left','300px','innerHTML','block','cursor','483940oaMDiY','removeEventListener',')\x20/\x202))','1BTRTmZ','none','overlayLayer','offsetWidth','string','closeable','bind','height','moveable','328643RRHIPo'];a=function(){return u;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x137)];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x117)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const j=i;return this.#dialogTitle[j(0x117)]['cursor']==j(0x13c);}set[i(0x12c)](c){const k=i;c&&(this.#dialogTitle[k(0x117)][k(0x120)]=k(0x13c),this.#dialogTitle[k(0x139)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x117)][l(0x140)]!='none';}set[i(0x129)](c){const m=i;c?this.#dialogClose[m(0x117)]['display']=m(0x11f):this.#dialogClose['style']['display']=m(0x125);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this[n(0x135)](n(0x13e)),this.#dialogClose[n(0x134)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x12a)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const o=i,d='id'+new Date()[o(0x115)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']===o(0x128))e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle[o(0x116)](c['title']);}if(typeof c['content']==='string')e.#dialogContent[o(0x11e)]=c[o(0x13e)];else e.#dialogContent['appendChild'](c[o(0x13e)]);return e[o(0x117)]['width']=c[o(0x13f)]??o(0x11d),e['style'][o(0x12b)]=c['height']??'200px',e[o(0x117)]['width']='calc('+e['style']['width']+o(0x142)+this[o(0x127)]+'px)',e['style']['height']='calc('+e[o(0x117)][o(0x12b)]+'\x20+\x20'+this[o(0x130)]+'px)',e['style']['top']=c[o(0x138)]??'calc(50%\x20-\x20(('+e['style']['height']+o(0x123),e['style']['left']=c[o(0x11c)]??'calc(50%\x20-\x20(('+e[o(0x117)][o(0x13f)]+o(0x123),c[o(0x12c)]&&(e['moveable']=!![]),(c[o(0x129)]===![]||c[o(0x129)]===!![])&&(e['closeable']=c[o(0x129)]),c['cssClass']&&(e[o(0x118)]=c['cssClass']),document['getElementById'](o(0x126))['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c[p(0x119)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x136)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById'](q(0x126))[q(0x144)](this);}#moveStart(c){const r=i,d=this[r(0x13a)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](r(0x11b),this.#moveBound),window['addEventListener'](r(0x141),this.#moveEndBound);}#move(c){const s=i;this[s(0x117)]['left']=c['x']-this.#xOffset+'px',this['style'][s(0x138)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener'](t(0x11b),this.#moveBound),window[t(0x122)](t(0x141),this.#moveEndBound);}}customElements[i(0x13d)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);