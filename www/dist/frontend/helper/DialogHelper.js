function b(c,d){c=c-0x12e;const e=a();let f=e[c];return f;}const i=b;function a(){const u=['title','className','onclick','bind','7lqCHKZ','close','removeEventListener','style','overlayLayer','getRootNode','814635krjUjN','getTime','element','height','removeChild','calc(50%\x20-\x20((','getElementById','calc(','_getDomElement','none','offsetHeight','uniqueId','cursor','1294569LVxwje','4AnUxSL','8166064DJZDCz','move','innerHTML','696848JYxAhM','4325052QZLKWg','string','cssClass','block','left','content','moveable','300px','addEventListener','openDialog','3951594Hkgkrp','\x20+\x20','width','px)','closeable','8079417RrZOaC','host','onpointerdown','top'];a=function(){return u;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x131))/0x1+-parseInt(h(0x136))/0x2+-parseInt(h(0x141))/0x3*(parseInt(h(0x132))/0x4)+-parseInt(h(0x154))/0x5+-parseInt(h(0x137))/0x6+-parseInt(h(0x14e))/0x7*(-parseInt(h(0x133))/0x8)+parseInt(h(0x146))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa2061));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x12f)];static ['template']=html`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [i(0x151)]=css`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x13d)](){const j=i;return this.#dialogTitle[j(0x151)]['cursor']=='move';}set['moveable'](c){const k=i;c&&(this.#dialogTitle[k(0x151)][k(0x130)]=k(0x134),this.#dialogTitle[k(0x148)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const l=i;return this.#dialogClose['style']['display']!=l(0x15d);}set['closeable'](c){const m=i;c?this.#dialogClose['style']['display']=m(0x13a):this.#dialogClose['style']['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const n=i;super(),this.#dialogTitle=this[n(0x15c)]('head'),this.#dialogClose=this['_getDomElement'](n(0x14f)),this.#dialogContent=this['_getDomElement'](n(0x13c)),this.#dialogClose[n(0x14c)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[n(0x14d)](this),this.#moveEndBound=this.#moveEnd[n(0x14d)](this);}static ['offsetWidth']=0x2;static [i(0x12e)]=0x23;static[i(0x140)](c){const o=i,d='id'+new Date()[o(0x155)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']==='string')e.#dialogTitle[o(0x135)]=c['title'];else e.#dialogTitle['appendChild'](c[o(0x14a)]);}if(typeof c[o(0x13c)]===o(0x138))e.#dialogContent[o(0x135)]=c[o(0x13c)];else e.#dialogContent['appendChild'](c[o(0x13c)]);return e[o(0x151)][o(0x143)]=c['width']??o(0x13e),e['style']['height']=c['height']??'200px',e[o(0x151)]['width']=o(0x15b)+e[o(0x151)]['width']+o(0x142)+this['offsetWidth']+o(0x144),e[o(0x151)]['height']='calc('+e[o(0x151)]['height']+'\x20+\x20'+this[o(0x12e)]+o(0x144),e['style']['top']=c['top']??'calc(50%\x20-\x20(('+e['style'][o(0x157)]+')\x20/\x202))',e[o(0x151)][o(0x13b)]=c['left']??o(0x159)+e['style'][o(0x143)]+')\x20/\x202))',c[o(0x13d)]&&(e[o(0x13d)]=!![]),(c[o(0x145)]===![]||c['closeable']===!![])&&(e['closeable']=c[o(0x145)]),c[o(0x139)]&&(e[o(0x14b)]=c['cssClass']),document[o(0x15a)](o(0x152))['appendChild'](e),d;}static['closeDialog'](c){const p=i;let d=c[p(0x156)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[p(0x153)]()?.[p(0x147)];}d&&d.#closeDialog();}#closeDialog(){const q=i;document['getElementById']('overlayLayer')[q(0x158)](this);}#moveStart(c){const r=i,d=this['getBoundingClientRect']();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window[r(0x13f)]('pointerup',this.#moveEndBound);}#move(c){const s=i;this['style'][s(0x13b)]=c['x']-this.#xOffset+'px',this['style'][s(0x149)]=c['y']-this.#yOffset+'px';}#moveEnd(){const t=i;window['removeEventListener']('pointermove',this.#moveBound),window[t(0x150)]('pointerup',this.#moveEndBound);}}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);