const m=b;function a(){const q=['selectedElementOffsetParentText','stackingContextParent','fixed','nodeName','display','filter','computedStyle','clip-path:\x20','mask:\x20\x20','split','777024wttnct','mask-image:\x20','mixBlendMode:\x20','maskImage','parentElement','documentElement','willChange:\x20','855765DKgQPa','selectedElementOffsetParent','nodeType','backdropFilter:\x20','transform:\x20','root','inline-flex','none','HTML','transform','getComputedStyle','offsetParent','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','_ready','createsStackingContextReason','rotate','willChange','rotate:\x20','opacity:\x20','auto','zIndex','GetDesignItem','node-projects-debug-view','defaultView','8868408CjvlZP','sticky','paint',';\x20z-index:\x20','normal','272348QYYGUM','_parseAttributesToProperties','2881023feitIY','72SuzFrM','isolation','4YAKVXZ','parentStackingContext','ownerDocument','style','parentStackingContextText','position','580979CsySIh','scale','translate','class','parentNode','1TMzVDa','createsStackingContext','designerCanvas','setSelectedElements','6776710pXQkFZ','clipPath','define','#document-fragment','element','strict','position:\x20','rootDesignItem','static','_bindingsRefresh','instanceServiceContainer','indexOf'];a=function(){return q;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1e1))/0x1*(parseInt(j(0x1d1))/0x2)+parseInt(j(0x1d3))/0x3*(parseInt(j(0x1d6))/0x4)+parseInt(j(0x202))/0x5+parseInt(j(0x1d4))/0x6*(-parseInt(j(0x1dc))/0x7)+parseInt(j(0x1cc))/0x8+-parseInt(j(0x1fb))/0x9+-parseInt(j(0x1e5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96738));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function b(c,d){c=c-0x1ba;const e=a();let f=e[c];return f;}function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1f4)]['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c['getAttribute']('class')&&(d='.'+c['getAttribute'](k(0x1df))[k(0x1fa)]('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x1f4)]==='HTML'||c['nodeName']==='#document')return{'node':document[l(0x200)],'reason':l(0x207)};if(c[l(0x1f4)]===l(0x1e8))return getClosestStackingContext(c['host']);const d=c[l(0x1d8)][l(0x1cb)][l(0x1be)](c);if(d[l(0x1db)]===l(0x1f3)||d['position']===l(0x1cd))return{'node':c,'reason':l(0x1eb)+d[l(0x1db)]};if(d[l(0x1c8)]!=='auto'&&d['position']!==l(0x1ed))return{'node':c,'reason':'position:\x20'+d['position']+l(0x1cf)+d[l(0x1c8)]};if(d['opacity']!=='1')return{'node':c,'reason':l(0x1c6)+d['opacity']};if(d[l(0x1bd)]!=='none')return{'node':c,'reason':l(0x206)+d[l(0x1bd)]};if(d['scale']!=='none')return{'node':c,'reason':'scale:\x20'+d[l(0x1dd)]};if(d['translate']!=='none')return{'node':c,'reason':'translate:\x20'+d[l(0x1de)]};if(d[l(0x1c3)]!=='none')return{'node':c,'reason':l(0x1c5)+d[l(0x1c3)]};if(d['mixBlendMode']!==l(0x1d0))return{'node':c,'reason':l(0x1fd)+d['mixBlendMode']};if(d[l(0x1f6)]!==l(0x1bb))return{'node':c,'reason':'filter:\x20'+d[l(0x1f6)]};if(d['backdropFilter']!==l(0x1bb))return{'node':c,'reason':l(0x205)+d['backdropFilter']};if(d['perspective']!=='none')return{'node':c,'reason':'perspective:\x20'+d['perspective']};if(d['clipPath']!=='none')return{'node':c,'reason':l(0x1f8)+d[l(0x1e6)]+'\x20'};const e=d['mask']||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':l(0x1f9)+e};const f=d[l(0x1fe)]||d['webkitMaskImage'];if(f!=='none'&&f!==undefined)return{'node':c,'reason':l(0x1fc)+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!==l(0x1bb)&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d[l(0x1d5)]==='isolate')return{'node':c,'reason':'isolation:\x20'+d['isolation']};if(d['willChange']===l(0x1bd)||d['willChange']==='opacity'||d['willChange']===l(0x1dd)||d[l(0x1c4)]==='translate'||d[l(0x1c4)]==='rotate')return{'node':c,'reason':l(0x201)+d[l(0x1c4)]};if(d['zIndex']!==l(0x1c7)){const i=c['ownerDocument']['defaultView'][l(0x1be)](c['parentNode']);if(i['display']==='flex'||i[l(0x1f5)]===l(0x1ba))return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d['zIndex']};else{if(i['grid']!==l(0x1c0))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d[l(0x1c8)]};}}const h=d['contain'];if(['layout',l(0x1ce),l(0x1ea),'content'][l(0x1f0)](h)>-0x1||h['indexOf']('paint')>-0x1||h['indexOf']('layout')>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c[l(0x1e0)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div>
            <table>
                    <tr><th colspan="2">Styling</th></tr>
                    <tr><td>display</td><td>[[?this.computedStyle?.display]]</td></tr>
                    <tr><td>position</td><td>[[?this.computedStyle?.position]]</td></tr>
                    <tr><td>visibility</td><td>[[?this.computedStyle?.visibility]]</td></tr>
                    <tr><td>pointerEvents</td><td>[[?this.computedStyle?.pointerEvents]]</td></tr>
                    <tr><td>zIndex</td><td>[[?this.computedStyle?.zIndex]]</td></tr>
                    <tr><th colspan="2">Context</th></tr>
                    <tr><td>offsetParent</td><td class="lnk" @click="[[this._clickLink(event, 'offsetParent')]]">[[?this.selectedElementOffsetParentText]]</td></tr>
                    <tr><td>createsStackingContext</td><td>[[this.createsStackingContext]]</td></tr>
                    <tr><td>stackingContextReason</td><td>[[this.createsStackingContextReason]]</td></tr>
                    <tr><td>stackingContextParent</td><td class="lnk" @click="[[this._clickLink(event, 'stackingContextParent')]]">[[?this.parentStackingContextText]]</td></tr>
            </table>
        </div> 
    `;static [m(0x1d9)]=css`
      :host {
        overflow: auto;
        height: 100%;
        display: block;
        font-size: 12px;
      }
      table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      table td, table th {
        border: 1px solid var(--wcd-debug-view-cell-border-color, #ddd);
        padding: 2px 4px;
      }
      
      table tr:nth-child(even){background-color: #f2f2f2;}
      
      table tr:hover {background-color: var(--wcd-debug-view-row-hover-background, #ddd);}
      
      table th {
        text-align: left;
        background-color: var(--wcd-debug-view-header-background, #989898);
        color: var(--wcd-color-text, white);
      }
      
      .lnk {
        color: var(--wcd-debug-view-link-color, blue);
      }
      .lnk:hover {
        text-decoration: underline;
        cursor: pointer;
      }`;[m(0x1c1)];[m(0x1f7)];[m(0x1e2)]='';['createsStackingContextReason']='';[m(0x1d7)];['parentStackingContextText'];[m(0x203)];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const n=m;this[n(0x1d2)](),this['_bindingsParse'](),this['_ready']=!![];}['_clickLink'](c,d){const o=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem['GetDesignItem'](this[o(0x203)]);f['instanceServiceContainer']['selectionService'][o(0x1e4)]([f]);}}else{if(d==o(0x1f2)){if(this[o(0x1d7)]){let g=DesignItem[o(0x1c9)](this['parentStackingContext']);g['instanceServiceContainer']['selectionService'][o(0x1e4)]([g]);}}}}['update'](c){this['_ready']&&requestAnimationFrame(()=>{const p=b;let d=c?.[p(0x1e9)];if(d?.[p(0x204)]==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d[p(0x204)]!=0xb){this[p(0x1f7)]=d['ownerDocument'][p(0x1cb)][p(0x1be)](d),this['selectedElementOffsetParent']=d[p(0x1bf)];if(this[p(0x203)]==c[p(0x1ef)]['designerCanvas'][p(0x1ec)][p(0x1e9)]||this[p(0x203)]==c['instanceServiceContainer'][p(0x1e3)]['rootDesignItem']['element'][p(0x1ff)])this['selectedElementOffsetParentText']=null,this['selectedElementOffsetParent']=null;else this[p(0x1f1)]=generateSelector(d[p(0x1bf)]);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this[p(0x1e2)]=d===e['node'],this[p(0x1c2)]=this['createsStackingContext']?e['reason']:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e['node'];this['createsStackingContext']&&d['nodeName']!==p(0x1bc)&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])['node']);if(this[p(0x1d7)]==c[p(0x1ef)]['designerCanvas']['rootDesignItem'][p(0x1e9)]['parentElement']||this['parentStackingContext']==c['instanceServiceContainer']['designerCanvas']['rootDesignItem'][p(0x1e9)]['parentElement']['parentElement'])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this[p(0x1da)]=generateSelector(this['parentStackingContext']);}}else this['computedStyle']={},this[p(0x1e2)]=![],this['createsStackingContextReason']='',this[p(0x1e2)]=![],this[p(0x203)]=null,this['selectedElementOffsetParentText']=null,this[p(0x1d7)]=null,this[p(0x1da)]=null;this[p(0x1ee)]();});}}customElements[m(0x1e7)](m(0x1ca),DebugView);