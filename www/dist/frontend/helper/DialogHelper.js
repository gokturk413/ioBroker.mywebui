const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xaf))/0x1*(parseInt(h(0xa3))/0x2)+-parseInt(h(0xa8))/0x3*(parseInt(h(0x8f))/0x4)+-parseInt(h(0x9c))/0x5*(parseInt(h(0x99))/0x6)+-parseInt(h(0xac))/0x7+parseInt(h(0x88))/0x8*(parseInt(h(0xb0))/0x9)+-parseInt(h(0x86))/0xa*(-parseInt(h(0x9e))/0xb)+-parseInt(h(0x8e))/0xc*(-parseInt(h(0x9b))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1c32c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const r=['83601aDBVjB','onclick','string','65naGfId','4734xRzXiH','content','removeEventListener','bind','display','define','10mfuDlr','overlayLayer','1288pAopdW','moveable','openDialog','calc(50%\x20-\x20((','_getDomElement',')\x20/\x202))','2478564BwrxqT','112720TKakbm','300px','pointermove','title','className','close','calc(','innerHTML','getRootNode','style','3522bmiwsh','addEventListener','13cxTfHN','1330unShQH','height','53537gmMHli','offsetHeight','pointerup','closeable','left','482zfuahx','top','cssClass','\x20+\x20','container','3TvxgUO','getBoundingClientRect','width','offsetWidth'];a=function(){return r;};return a();}function b(c,d){c=c-0x84;const e=a();let f=e[c];return f;}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{[i(0xa7)];['uniqueId'];static ['template']=html`
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
        `;static ['is']='iobroker-webui-dialog';get[i(0x89)](){return this.#dialogTitle['style']['cursor']=='move';}set[i(0x89)](c){c&&(this.#dialogTitle['style']['cursor']='move',this.#dialogTitle['onpointerdown']=d=>{return this.#moveStart(d),![];});}get['closeable'](){const j=i;return this.#dialogClose[j(0x98)][j(0x84)]!='none';}set[i(0xa1)](c){const k=i;c?this.#dialogClose['style']['display']='block':this.#dialogClose[k(0x98)][k(0x84)]='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const l=i;super(),this.#dialogTitle=this[l(0x8c)]('head'),this.#dialogClose=this[l(0x8c)](l(0x94)),this.#dialogContent=this[l(0x8c)]('content'),this.#dialogClose[l(0xad)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[l(0xb3)](this);}static ['offsetWidth']=0x2;static [i(0x9f)]=0x23;static[i(0x8a)](c){const m=i,d='id'+new Date()['getTime'](),e=new IoBrokerWebuiDialog();if(c[m(0x92)]){if(typeof c['title']===m(0xae))e.#dialogTitle[m(0x96)]=c['title'];else e.#dialogTitle['appendChild'](c['title']);}if(typeof c['content']==='string')e.#dialogContent['innerHTML']=c['content'];else e.#dialogContent['appendChild'](c[m(0xb1)]);return e['style']['width']=c[m(0xaa)]??m(0x90),e[m(0x98)]['height']=c['height']??'200px',e[m(0x98)][m(0xaa)]=m(0x95)+e[m(0x98)][m(0xaa)]+m(0xa6)+this[m(0xab)]+'px)',e['style'][m(0x9d)]='calc('+e[m(0x98)]['height']+'\x20+\x20'+this['offsetHeight']+'px)',e['style']['top']=c[m(0xa4)]??m(0x8b)+e[m(0x98)]['height']+')\x20/\x202))',e[m(0x98)]['left']=c['left']??'calc(50%\x20-\x20(('+e['style']['width']+m(0x8d),c['moveable']&&(e[m(0x89)]=!![]),(c[m(0xa1)]===![]||c[m(0xa1)]===!![])&&(e['closeable']=c[m(0xa1)]),c[m(0xa5)]&&(e[m(0x93)]=c[m(0xa5)]),document['getElementById'](m(0x87))['appendChild'](e),d;}static['closeDialog'](c){const n=i;let d=c['element'];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[n(0x97)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){document['getElementById']('overlayLayer')['removeChild'](this);}#moveStart(c){const o=i,d=this[o(0xa9)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener'](o(0x91),this.#moveBound),window[o(0x9a)](o(0xa0),this.#moveEndBound);}#move(c){const p=i;this[p(0x98)][p(0xa2)]=c['x']-this.#xOffset+'px',this['style'][p(0xa4)]=c['y']-this.#yOffset+'px';}#moveEnd(){const q=i;window['removeEventListener']('pointermove',this.#moveBound),window[q(0xb2)](q(0xa0),this.#moveEndBound);}}customElements[i(0x85)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);