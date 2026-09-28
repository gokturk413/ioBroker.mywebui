function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xfd))/0x1*(parseInt(h(0x103))/0x2)+parseInt(h(0x121))/0x3*(parseInt(h(0xf7))/0x4)+parseInt(h(0x10d))/0x5*(-parseInt(h(0xfc))/0x6)+parseInt(h(0x120))/0x7+parseInt(h(0x10c))/0x8*(-parseInt(h(0x11c))/0x9)+-parseInt(h(0x109))/0xa+parseInt(h(0x10b))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7fa74));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x11e)];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0xff)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x105)](){const j=i;return this.#dialogTitle['style'][j(0x118)]=='move';}set[i(0x105)](c){const k=i;c&&(this.#dialogTitle['style']['cursor']=k(0x113),this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x10a)](){const l=i;return this.#dialogClose['style']['display']!=l(0x115);}set['closeable'](c){const m=i;c?this.#dialogClose[m(0xff)][m(0x108)]='block':this.#dialogClose[m(0xff)][m(0x108)]=m(0x115);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0xfe)]('head'),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this['_getDomElement']('content'),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x11f)](this),this.#moveEndBound=this.#moveEnd[n(0x11f)](this);}static [i(0x107)]=0x2;static [i(0xf8)]=0x23;static[i(0x117)](c){const o=i,d='id'+new Date()[o(0xfb)](),e=new IoBrokerWebuiDialog();if(c[o(0x10f)]){if(typeof c['title']===o(0x10e))e.#dialogTitle['innerHTML']=c[o(0x10f)];else e.#dialogTitle['appendChild'](c[o(0x10f)]);}if(typeof c['content']==='string')e.#dialogContent['innerHTML']=c[o(0x101)];else e.#dialogContent['appendChild'](c['content']);return e[o(0xff)]['width']=c['width']??o(0x110),e[o(0xff)][o(0x11b)]=c[o(0x11b)]??'200px',e['style'][o(0x11d)]=o(0x100)+e['style']['width']+'\x20+\x20'+this[o(0x107)]+'px)',e['style']['height']=o(0x100)+e['style']['height']+o(0x104)+this['offsetHeight']+o(0x116),e[o(0xff)]['top']=c['top']??'calc(50%\x20-\x20(('+e[o(0xff)][o(0x11b)]+')\x20/\x202))',e[o(0xff)][o(0x112)]=c['left']??o(0x111)+e[o(0xff)]['width']+')\x20/\x202))',c[o(0x105)]&&(e['moveable']=!![]),(c[o(0x10a)]===![]||c[o(0x10a)]===!![])&&(e['closeable']=c[o(0x10a)]),c['cssClass']&&(e['className']=c['cssClass']),document['getElementById']('overlayLayer')['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d['getRootNode']()?.[p(0x114)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document[q(0xf9)]('overlayLayer')[q(0x106)](this);}#moveStart(c){const r=i,d=this[r(0xfa)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[r(0x102)](r(0x11a),this.#moveBound),window['addEventListener']('pointerup',this.#moveEndBound);}#move(c){const s=i;this[s(0xff)][s(0x112)]=c['x']-this.#xOffset+'px',this[s(0xff)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window[t(0x119)]('pointermove',this.#moveBound),window[t(0x119)]('pointerup',this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);function a(){const u=['addEventListener','858278CsAblM','\x20+\x20','moveable','removeChild','offsetWidth','display','3623520dlRFpl','closeable','4445540mLMcfS','8ZYeBes','415285qLGkeN','string','title','300px','calc(50%\x20-\x20((','left','move','host','none','px)','openDialog','cursor','removeEventListener','pointermove','height','535797GfVbZu','width','uniqueId','bind','190687jUIMij','100374ardtzH','20hVEFSl','offsetHeight','getElementById','getBoundingClientRect','getTime','6DdcrJu','1TNEMTo','_getDomElement','style','calc(','content'];a=function(){return u;};return a();}