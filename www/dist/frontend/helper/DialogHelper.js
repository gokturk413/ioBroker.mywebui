const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x10a))/0x1+parseInt(h(0xfd))/0x2*(parseInt(h(0x10f))/0x3)+parseInt(h(0x123))/0x4*(-parseInt(h(0x11f))/0x5)+parseInt(h(0x108))/0x6*(parseInt(h(0x11c))/0x7)+-parseInt(h(0x105))/0x8+parseInt(h(0xf9))/0x9*(parseInt(h(0xfe))/0xa)+-parseInt(h(0x11e))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x28810));function b(c,d){c=c-0xf4;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0x11b)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x103)]=css`
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
        `;static ['is']=i(0x113);get[i(0x112)](){const j=i;return this.#dialogTitle[j(0x103)][j(0x121)]==j(0x102);}set['moveable'](c){const k=i;c&&(this.#dialogTitle['style'][k(0x121)]=k(0x102),this.#dialogTitle[k(0x109)]=d=>{return this.#moveStart(d),![];});}get[i(0x114)](){const l=i;return this.#dialogClose['style'][l(0x115)]!='none';}set[i(0x114)](c){const m=i;c?this.#dialogClose[m(0x103)]['display']='block':this.#dialogClose[m(0x103)]['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this['_getDomElement'](n(0x120)),this.#dialogClose=this['_getDomElement'](n(0x11a)),this.#dialogContent=this[n(0x11d)]('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x119)](this),this.#moveEndBound=this.#moveEnd[n(0x119)](this);}static [i(0xfa)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const o=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[o(0x101)]){if(typeof c[o(0x101)]===o(0xf7))e.#dialogTitle['innerHTML']=c['title'];else e.#dialogTitle[o(0x117)](c[o(0x101)]);}if(typeof c[o(0xf4)]===o(0xf7))e.#dialogContent[o(0xff)]=c[o(0xf4)];else e.#dialogContent['appendChild'](c['content']);return e['style']['width']=c['width']??o(0x106),e[o(0x103)]['height']=c[o(0xf8)]??'200px',e[o(0x103)][o(0xf6)]='calc('+e[o(0x103)][o(0xf6)]+'\x20+\x20'+this['offsetWidth']+'px)',e['style']['height']='calc('+e['style']['height']+o(0x10e)+this[o(0x10c)]+o(0x100),e['style']['top']=c['top']??o(0x10b)+e['style'][o(0xf8)]+')\x20/\x202))',e[o(0x103)]['left']=c['left']??'calc(50%\x20-\x20(('+e['style'][o(0xf6)]+o(0x118),c[o(0x112)]&&(e['moveable']=!![]),(c[o(0x114)]===![]||c[o(0x114)]===!![])&&(e[o(0x114)]=c['closeable']),c[o(0x116)]&&(e[o(0x107)]=c['cssClass']),document['getElementById']('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c[p(0x111)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x10d)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById']('overlayLayer')[q(0xfc)](this);}#moveStart(c){const r=i,d=this[r(0x104)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](r(0xfb),this.#moveBound),window[r(0x110)]('pointerup',this.#moveEndBound);}#move(c){const s=i;this['style'][s(0x122)]=c['x']-this.#xOffset+'px',this['style'][s(0xf5)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener'](t(0xfb),this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}function a(){const u=['addEventListener','element','moveable','iobroker-webui-dialog','closeable','display','cssClass','appendChild',')\x20/\x202))','bind','close','template','176883HQvEck','_getDomElement','2945228xbUGRd','70BYBbad','head','cursor','left','26428cxygpS','content','top','width','string','height','2043675KLRDJI','offsetWidth','pointermove','removeChild','1762pmfNtV','10wKfNtm','innerHTML','px)','title','move','style','getBoundingClientRect','1672360GdvJeP','300px','className','6FzsIBO','onpointerdown','235290wBrEkz','calc(50%\x20-\x20((','offsetHeight','getRootNode','\x20+\x20','843BGiNen'];a=function(){return u;};return a();}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);