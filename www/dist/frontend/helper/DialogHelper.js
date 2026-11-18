const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xa8))/0x1*(parseInt(h(0x88))/0x2)+parseInt(h(0x8f))/0x3*(-parseInt(h(0x9c))/0x4)+-parseInt(h(0xa2))/0x5*(parseInt(h(0x85))/0x6)+-parseInt(h(0x98))/0x7*(-parseInt(h(0xa5))/0x8)+parseInt(h(0xa3))/0x9+-parseInt(h(0x8d))/0xa*(parseInt(h(0x89))/0xb)+parseInt(h(0x8b))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x543ba));function b(c,d){c=c-0x7b;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];[i(0x94)];static ['template']=html`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x8e)](){return this.#dialogTitle['style']['cursor']=='move';}set[i(0x8e)](c){c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get[i(0x84)](){const j=i;return this.#dialogClose[j(0x81)][j(0x9d)]!=j(0x80);}set[i(0x84)](c){const k=i;c?this.#dialogClose[k(0x81)][k(0x9d)]=k(0x82):this.#dialogClose[k(0x81)]['display']=k(0x80);}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const l=i;super(),this.#dialogTitle=this['_getDomElement'](l(0x87)),this.#dialogClose=this['_getDomElement']('close'),this.#dialogContent=this['_getDomElement'](l(0x7f)),this.#dialogClose[l(0x97)]=()=>{this.#closeDialog();},this.#moveBound=this.#move[l(0x83)](this),this.#moveEndBound=this.#moveEnd['bind'](this);}static ['offsetWidth']=0x2;static [i(0xa1)]=0x23;static[i(0x7b)](c){const m=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[m(0xa4)]){if(typeof c['title']==='string')e.#dialogTitle[m(0x7d)]=c['title'];else e.#dialogTitle[m(0x9b)](c[m(0xa4)]);}if(typeof c['content']===m(0x86))e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent[m(0x9b)](c['content']);return e['style'][m(0x90)]=c[m(0x90)]??'300px',e[m(0x81)][m(0xa9)]=c[m(0xa9)]??m(0x96),e[m(0x81)][m(0x90)]='calc('+e['style']['width']+m(0x99)+this['offsetWidth']+m(0x8c),e['style']['height']=m(0xa6)+e['style']['height']+m(0x99)+this['offsetHeight']+'px)',e[m(0x81)][m(0x91)]=c['top']??'calc(50%\x20-\x20(('+e[m(0x81)]['height']+')\x20/\x202))',e['style']['left']=c['left']??'calc(50%\x20-\x20(('+e[m(0x81)]['width']+m(0x7c),c[m(0x8e)]&&(e['moveable']=!![]),(c[m(0x84)]===![]||c['closeable']===!![])&&(e[m(0x84)]=c[m(0x84)]),c[m(0xa0)]&&(e['className']=c[m(0xa0)]),document['getElementById'](m(0x9f))['appendChild'](e),d;}static[i(0x9a)](c){const n=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[n(0xaa)]()?.[n(0x92)];}d&&d.#closeDialog();}#closeDialog(){const o=i;document['getElementById'](o(0x9f))[o(0x93)](this);}#moveStart(c){const p=i,d=this[p(0x9e)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window[p(0x7e)]('pointerup',this.#moveEndBound);}#move(c){const q=i;this['style'][q(0x8a)]=c['x']-this.#xOffset+'px',this[q(0x81)]['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const r=i;window[r(0x95)](r(0xa7),this.#moveBound),window['removeEventListener']('pointerup',this.#moveEndBound);}}function a(){const s=['head','3482pjtXck','3378188oCTGVU','left','1276596nVPGdQ','px)','10QNNplW','moveable','531066emENGZ','width','top','host','removeChild','uniqueId','removeEventListener','200px','onclick','607502kawnfw','\x20+\x20','closeDialog','appendChild','4xAsSgQ','display','getBoundingClientRect','overlayLayer','cssClass','offsetHeight','5IPtcfn','6185340FwmJJt','title','56XgmtEX','calc(','pointermove','25nFlJDQ','height','getRootNode','openDialog',')\x20/\x202))','innerHTML','addEventListener','content','none','style','block','bind','closeable','3170832EXowGm','string'];a=function(){return s;};return a();}customElements['define'](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);