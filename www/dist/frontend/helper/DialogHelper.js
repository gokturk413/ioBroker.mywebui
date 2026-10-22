const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x194))/0x1+parseInt(h(0x19e))/0x2*(-parseInt(h(0x191))/0x3)+parseInt(h(0x1ae))/0x4+-parseInt(h(0x197))/0x5+parseInt(h(0x1a0))/0x6*(-parseInt(h(0x18f))/0x7)+-parseInt(h(0x18b))/0x8+parseInt(h(0x1aa))/0x9*(parseInt(h(0x18c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa58fc));function a(){const s=['template','element','_getDomElement','moveable','\x20+\x20','getTime','calc(50%\x20-\x20((','innerHTML','531DsPbFI','onpointerdown','display','closeable','4192808NJsQSY','left','style','bind','calc(','title','onclick','define','getBoundingClientRect','close','5595816RfKEGP','265810ARyhWh','getRootNode','height','21GOflrX',')\x20/\x202))','448269MpvmwE','removeChild','head','534493oqHuGb','appendChild','getElementById','1892975fqbrjh','width','content','pointermove','none','pointerup','removeEventListener','8cEEBGd','block','1594140WNTOcA','px)'];a=function(){return s;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x186;const e=a();let f=e[c];return f;}export class IoBrokerWebuiDialog extends BaseCustomWebComponentConstructorAppend{['container'];['uniqueId'];static [i(0x1a2)]=html`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){return this.#dialogTitle['style']['cursor']=='move';}set['moveable'](c){const j=i;c&&(this.#dialogTitle[j(0x1b0)]['cursor']='move',this.#dialogTitle[j(0x1ab)]=d=>{return this.#moveStart(d),![];});}get['closeable'](){const k=i;return this.#dialogClose['style'][k(0x1ac)]!=k(0x19b);}set[i(0x1ad)](c){const l=i;c?this.#dialogClose['style'][l(0x1ac)]=l(0x19f):this.#dialogClose['style']['display']='none';}#dialogTitle;#dialogClose;#dialogContent;#xOffset;#yOffset;#moveBound;#moveEndBound;constructor(){const m=i;super(),this.#dialogTitle=this['_getDomElement'](m(0x193)),this.#dialogClose=this['_getDomElement'](m(0x18a)),this.#dialogContent=this[m(0x1a4)](m(0x199)),this.#dialogClose[m(0x187)]=()=>{this.#closeDialog();},this.#moveBound=this.#move['bind'](this),this.#moveEndBound=this.#moveEnd[m(0x1b1)](this);}static ['offsetWidth']=0x2;static ['offsetHeight']=0x23;static['openDialog'](c){const n=i,d='id'+new Date()[n(0x1a7)](),e=new IoBrokerWebuiDialog();if(c['title']){if(typeof c['title']==='string')e.#dialogTitle['innerHTML']=c[n(0x186)];else e.#dialogTitle[n(0x195)](c[n(0x186)]);}if(typeof c[n(0x199)]==='string')e.#dialogContent[n(0x1a9)]=c['content'];else e.#dialogContent[n(0x195)](c[n(0x199)]);return e['style']['width']=c['width']??'300px',e[n(0x1b0)][n(0x18e)]=c['height']??'200px',e[n(0x1b0)][n(0x198)]=n(0x1b2)+e[n(0x1b0)][n(0x198)]+'\x20+\x20'+this['offsetWidth']+n(0x1a1),e[n(0x1b0)]['height']=n(0x1b2)+e['style'][n(0x18e)]+n(0x1a6)+this['offsetHeight']+'px)',e['style']['top']=c['top']??n(0x1a8)+e[n(0x1b0)]['height']+n(0x190),e['style']['left']=c[n(0x1af)]??n(0x1a8)+e[n(0x1b0)][n(0x198)]+')\x20/\x202))',c[n(0x1a5)]&&(e['moveable']=!![]),(c['closeable']===![]||c[n(0x1ad)]===!![])&&(e['closeable']=c['closeable']),c['cssClass']&&(e['className']=c['cssClass']),document['getElementById']('overlayLayer')[n(0x195)](e),d;}static['closeDialog'](c){const o=i;let d=c[o(0x1a3)];while(!(d instanceof IoBrokerWebuiDialog&&d!=null)){d=d[o(0x18d)]()?.['host'];}d&&d.#closeDialog();}#closeDialog(){const p=i;document[p(0x196)]('overlayLayer')[p(0x192)](this);}#moveStart(c){const q=i,d=this[q(0x189)]();this.#xOffset=c['x']-d['x'],this.#yOffset=c['y']-d['y'],window['addEventListener']('pointermove',this.#moveBound),window['addEventListener'](q(0x19c),this.#moveEndBound);}#move(c){this['style']['left']=c['x']-this.#xOffset+'px',this['style']['top']=c['y']-this.#yOffset+'px';}#moveEnd(){const r=i;window[r(0x19d)](r(0x19a),this.#moveBound),window[r(0x19d)]('pointerup',this.#moveEndBound);}}customElements[i(0x188)](IoBrokerWebuiDialog['is'],IoBrokerWebuiDialog);