function a(){const t=['left',')\x20/\x202))','565670GyKLKv','calc(','addEventListener','177fQAshH','string','3567888aQgZfx','content','title','pointermove','none','appendChild','move','812MCKTaq','element','innerHTML','height','className','cssClass','calc(50%\x20-\x20((','display','3570505EVKjNx','300px','2775312fnNqfN','px)','style','\x20+\x20','_getDomElement','moveable','pointerup','cursor','offsetHeight','bind','template','closeable','getRootNode','4vkZOxf','200px','overlayLayer','186379qceQVI','offsetWidth','23214EJMLmo','width','block','77YQHUWs','removeEventListener','define','8318mvqYjK','closeDialog'];a=function(){return t;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x15b))/0x1+parseInt(h(0x163))/0x2*(-parseInt(h(0x16a))/0x3)+-parseInt(h(0x158))/0x4*(-parseInt(h(0x149))/0x5)+parseInt(h(0x15d))/0x6*(parseInt(h(0x141))/0x7)+-parseInt(h(0x14b))/0x8+-parseInt(h(0x16c))/0x9+-parseInt(h(0x167))/0xa*(-parseInt(h(0x160))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5db18));function b(c,d){c=c-0x13f;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0x155)]=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x14d)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x150)](){const j=i;return this.#dialogTitle['style']['cursor']==j(0x140);}set[i(0x150)](c){const k=i;c&&(this.#dialogTitle['style'][k(0x152)]='move',this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x156)](){return this.#dialogClose['style']['display']!='none';}set[i(0x156)](c){const l=i;c?this.#dialogClose[l(0x14d)][l(0x148)]=l(0x15f):this.#dialogClose['style'][l(0x148)]=l(0x170);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this['_getDomElement']('head'),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this[m(0x14f)](m(0x16d)),this.#dialogClose['onclick']=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[m(0x154)](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const n=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c[n(0x16e)]==='string')e.#dialogTitle[n(0x143)]=c['title'];else e.#dialogTitle[n(0x13f)](c[n(0x16e)]);}if(typeof c[n(0x16d)]===n(0x16b))e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent[n(0x13f)](c['content']);return e[n(0x14d)][n(0x15e)]=c[n(0x15e)]??n(0x14a),e[n(0x14d)][n(0x144)]=c[n(0x144)]??n(0x159),e[n(0x14d)][n(0x15e)]=n(0x168)+e[n(0x14d)]['width']+n(0x14e)+this[n(0x15c)]+n(0x14c),e[n(0x14d)]['height']='calc('+e['style']['height']+'\x20+\x20'+this[n(0x153)]+'px)',e[n(0x14d)]['top']=c['top']??n(0x147)+e[n(0x14d)][n(0x144)]+n(0x166),e['style']['left']=c[n(0x165)]??n(0x147)+e['style'][n(0x15e)]+')\x20/\x202))',c['moveable']&&(e[n(0x150)]=!![]),(c['closeable']===![]||c[n(0x156)]===!![])&&(e['closeable']=c[n(0x156)]),c['cssClass']&&(e[n(0x145)]=c[n(0x146)]),document['getElementById'](n(0x15a))['appendChild'](e),d;}static[i(0x164)](c){const o=i;let d=c[o(0x142)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[o(0x157)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const p=i;document['getElementById'](p(0x15a))['removeChild'](this);}#moveStart(c){const q=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window[q(0x169)](q(0x16f),this.#moveBound),window[q(0x169)](q(0x151),this.#moveEndBound);}#move(c){const r=i;this[r(0x14d)]['left']=c['x']-this.#xOffset+'px',this[r(0x14d)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const s=i;window[s(0x161)]('pointermove',this.#moveBound),window[s(0x161)](s(0x151),this.#moveEndBound);}}customElements[i(0x162)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);