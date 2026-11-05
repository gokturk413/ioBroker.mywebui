const k=b;function a(){const s=['openDialog','bind','appendChild','title','display','onpointerdown','offsetWidth','none','closeable','7VGNoCr','overlayLayer','pointermove','721290HLeApF','style','height','27420aOrLEL','190059TBDgVO','content','getTime','786894uwruKB','move','width','offsetHeight','_getDomElement','10205900EQmOvH','3324VOJJPJ','1008xWMjvF','calc(50%\x20-\x20((','addEventListener','cursor','top',')\x20/\x202))','660HkuKMg','left','300px','moveable','removeChild','cssClass','calc(','16551kGQLub'];a=function(){return s;};return a();}function b(c,d){c=c-0x10d;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x11d))/0x1+-parseInt(h(0x11c))/0x2+parseInt(h(0x12d))/0x3*(-parseInt(h(0x126))/0x4)+-parseInt(h(0x119))/0x5+parseInt(h(0x120))/0x6*(-parseInt(h(0x116))/0x7)+parseInt(h(0x127))/0x8*(-parseInt(h(0x134))/0x9)+parseInt(h(0x125))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1efa0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static ['template']=html`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){return this.#dialogTitle['style']['cursor']=='move';}set['moveable'](c){const i=b;c&&(this.#dialogTitle[i(0x11a)][i(0x12a)]=i(0x121),this.#dialogTitle[i(0x112)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const j=b;return this.#dialogClose['style'][j(0x111)]!='none';}set[k(0x115)](c){const l=k;c?this.#dialogClose[l(0x11a)][l(0x111)]='block':this.#dialogClose['style'][l(0x111)]=l(0x114);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=k;super(),this.#dialogTitle=this[m(0x124)]('head'),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this[m(0x124)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[m(0x10e)](this);}static [k(0x113)]=0x2;static [k(0x123)]=0x23;static[k(0x10d)](c){const n=k,d='id'+new Date()[n(0x11f)](),e=new IoBrokerWebuiDialog();if(c[n(0x110)]){if(typeof c[n(0x110)]==='string')e.#dialogTitle['innerHTML']=c[n(0x110)];else e.#dialogTitle['appendChild'](c[n(0x110)]);}if(typeof c[n(0x11e)]==='string')e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent[n(0x10f)](c[n(0x11e)]);return e[n(0x11a)][n(0x122)]=c[n(0x122)]??n(0x12f),e[n(0x11a)]['height']=c['height']??'200px',e['style'][n(0x122)]='calc('+e[n(0x11a)]['width']+'\x20+\x20'+this['offsetWidth']+'px)',e[n(0x11a)][n(0x11b)]=n(0x133)+e[n(0x11a)][n(0x11b)]+'\x20+\x20'+this['offsetHeight']+'px)',e[n(0x11a)][n(0x12b)]=c[n(0x12b)]??n(0x128)+e[n(0x11a)][n(0x11b)]+n(0x12c),e[n(0x11a)]['left']=c['left']??'calc(50%\x20-\x20(('+e[n(0x11a)]['width']+n(0x12c),c['moveable']&&(e[n(0x130)]=!![]),(c['closeable']===![]||c['closeable']===!![])&&(e[n(0x115)]=c['closeable']),c[n(0x132)]&&(e['className']=c[n(0x132)]),document['getElementById']('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const o=k;document['getElementById'](o(0x117))[o(0x131)](this);}#moveStart(c){const p=k,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](p(0x118),this.#moveBound),window[p(0x129)]('pointerup',this.#moveEndBound);}#move(c){const q=k;this[q(0x11a)][q(0x12e)]=c['x']-this.#xOffset+'px',this[q(0x11a)][q(0x12b)]=c['y']-this.#yOffset+'px';}#moveEnd(){const r=k;window['removeEventListener'](r(0x118),this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);