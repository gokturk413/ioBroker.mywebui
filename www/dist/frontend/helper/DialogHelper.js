function b(c,d){c=c-0xf4;const e=a();let f=e[c];return f;}function a(){const u=['display','height','width','1680NrRHQr','calc(50%\x20-\x20((','391340nHMRcj','getTime','300px','1090458TKLfbh','onpointerdown','onclick','pointerup','95sFWorA','55734PBjCwu','_getDomElement','offsetWidth','2870qsJGiY','addEventListener','3622860alWZiM','move','style','closeable','1457298rPyxJG','close','openDialog','content','cssClass','bind','container',')\x20/\x202))','removeEventListener','removeChild','calc(','438zxSAEq','pointermove','iobroker-webui-dialog','define','getRootNode','offsetHeight','block','1614IgUniP','moveable'];a=function(){return u;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x118))/0x1*(-parseInt(h(0xf5))/0x2)+parseInt(h(0xff))/0x3+parseInt(h(0xfc))/0x4+parseInt(h(0x103))/0x5*(-parseInt(h(0x104))/0x6)+-parseInt(h(0x107))/0x7*(-parseInt(h(0xfa))/0x8)+-parseInt(h(0x10d))/0x9+-parseInt(h(0x109))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x30dfc));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x113)];['uniqueId'];static ['template']=html`
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
        `;static ['is']=i(0x11a);get[i(0xf6)](){const j=i;return this.#dialogTitle['style']['cursor']==j(0x10a);}set[i(0xf6)](c){const k=i;c&&(this.#dialogTitle['style']['cursor']=k(0x10a),this.#dialogTitle[k(0x100)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0x10b)][l(0xf7)]!='none';}set[i(0x10c)](c){const m=i;c?this.#dialogClose[m(0x10b)]['display']=m(0xf4):this.#dialogClose[m(0x10b)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this[n(0x105)](n(0x10e)),this.#dialogContent=this[n(0x105)](n(0x110)),this.#dialogClose[n(0x101)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[n(0x112)](this);}static [i(0x106)]=0x2;static ['offsetHeight']=0x23;static[i(0x10f)](c){const o=i,d='id'+new Date()[o(0xfd)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']==='string')e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle['appendChild'](c['title']);}if(typeof c[o(0x110)]==='string')e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent['appendChild'](c['content']);return e['style']['width']=c[o(0xf9)]??o(0xfe),e['style']['height']=c[o(0xf8)]??'200px',e['style']['width']='calc('+e[o(0x10b)]['width']+'\x20+\x20'+this[o(0x106)]+'px)',e['style'][o(0xf8)]=o(0x117)+e['style']['height']+'\x20+\x20'+this[o(0x11d)]+'px)',e[o(0x10b)]['top']=c['top']??o(0xfb)+e['style'][o(0xf8)]+')\x20/\x202))',e['style']['left']=c['left']??o(0xfb)+e['style'][o(0xf9)]+o(0x114),c['moveable']&&(e['moveable']=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e['closeable']=c[o(0x10c)]),c[o(0x111)]&&(e['className']=c[o(0x111)]),document['getElementById']('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x11c)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById']('overlayLayer')[q(0x116)](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0x108)]('pointermove',this.#moveBound),window[r(0x108)](r(0x102),this.#moveEndBound);}#move(c){const s=i;this[s(0x10b)]['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x115)](t(0x119),this.#moveBound),window[t(0x115)]('pointerup',this.#moveEndBound);}}customElements[i(0x11b)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);