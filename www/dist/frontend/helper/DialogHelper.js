const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x114))/0x1+parseInt(h(0xfa))/0x2+-parseInt(h(0xfb))/0x3+-parseInt(h(0xfe))/0x4*(-parseInt(h(0x11a))/0x5)+parseInt(h(0x121))/0x6*(-parseInt(h(0x11f))/0x7)+parseInt(h(0x105))/0x8*(parseInt(h(0xf5))/0x9)+parseInt(h(0x120))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xad31d));function a(){const u=['391307nFngCQ','9070640pjOEgF','150JioNke','move','template','pointerup','head','string','height','9WPTIkg','left','moveable','top','300px','1080720RBgyFA','1011537VkiSsG','style','calc(50%\x20-\x20((','18892TUXCMy','appendChild','closeable','removeChild','offsetWidth','width','define','8445896lgfUQF','none','host','pointermove','offsetHeight',')\x20/\x202))','innerHTML','className','closeDialog','display','getRootNode','title','content','onpointerdown','\x20+\x20','701380zsDEZi','removeEventListener','overlayLayer','close','openDialog','cssClass','680GlKtZI','_getDomElement','container','iobroker-webui-dialog','uniqueId'];a=function(){return u;};return a();}function b(c,d){c=c-0xf5;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0x11c)];[i(0x11e)];static [i(0x123)]=html`
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
        `;static ['is']=i(0x11d);get[i(0xf7)](){const j=i;return this.#dialogTitle[j(0xfc)]['cursor']==j(0x122);}set['moveable'](c){const k=i;c&&(this.#dialogTitle[k(0xfc)]['cursor']=k(0x122),this.#dialogTitle[k(0x112)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose[l(0xfc)][l(0x10e)]!=l(0x106);}set[i(0x100)](c){const m=i;c?this.#dialogClose['style']['display']='block':this.#dialogClose[m(0xfc)]['display']=m(0x106);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x11b)](n(0x125)),this.#dialogClose=this[n(0x11b)](n(0x117)),this.#dialogContent=this['_getDomElement'](n(0x111)),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static[i(0x118)](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[o(0x110)]===o(0x126))e.#dialogTitle[o(0x10b)]=c[o(0x110)];else e.#dialogTitle[o(0xff)](c[o(0x110)]);}if(typeof c['content']===o(0x126))e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent[o(0xff)](c[o(0x111)]);return e['style'][o(0x103)]=c[o(0x103)]??o(0xf9),e[o(0xfc)][o(0x127)]=c['height']??'200px',e['style']['width']='calc('+e[o(0xfc)]['width']+'\x20+\x20'+this[o(0x102)]+'px)',e[o(0xfc)]['height']='calc('+e[o(0xfc)][o(0x127)]+o(0x113)+this[o(0x109)]+'px)',e[o(0xfc)]['top']=c[o(0xf8)]??'calc(50%\x20-\x20(('+e['style']['height']+o(0x10a),e[o(0xfc)][o(0xf6)]=c[o(0xf6)]??o(0xfd)+e[o(0xfc)]['width']+o(0x10a),c['moveable']&&(e['moveable']=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e['closeable']=c[o(0x100)]),c[o(0x119)]&&(e[o(0x10c)]=c['cssClass']),document['getElementById'](o(0x116))[o(0xff)](e),d;}static[i(0x10d)](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x10f)]()?.[p(0x107)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById']('overlayLayer')[q(0x101)](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](r(0x108),this.#moveBound),window['addEventListener'](r(0x124),this.#moveEndBound);}#move(c){const s=i;this['style'][s(0xf6)]=c['x']-this.#xOffset+'px',this[s(0xfc)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x115)]('pointermove',this.#moveBound),window[t(0x115)]('pointerup',this.#moveEndBound);}}customElements[i(0x104)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);