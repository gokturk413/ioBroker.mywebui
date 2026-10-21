const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x109))/0x1*(-parseInt(j(0xe5))/0x2)+-parseInt(j(0xef))/0x3+-parseInt(j(0x12a))/0x4*(-parseInt(j(0x108))/0x5)+parseInt(j(0xe6))/0x6+-parseInt(j(0x110))/0x7+-parseInt(j(0xf5))/0x8*(-parseInt(j(0x118))/0x9)+-parseInt(j(0xf1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc2f79));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName'][k(0x125)]();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x123)](k(0x10b))&&(d='.'+c[k(0x123)](k(0x10b))['split']('\x20')[k(0x10a)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0xfb)]===l(0xea)||c['nodeName']===l(0x11f))return{'node':document[l(0x129)],'reason':'root'};if(c[l(0xfb)]===l(0xf0))return getClosestStackingContext(c[l(0x100)]);const d=c['ownerDocument']['defaultView']['getComputedStyle'](c);if(d['position']==='fixed'||d[l(0x11c)]===l(0x133))return{'node':c,'reason':l(0xed)+d['position']};if(d['zIndex']!=='auto'&&d[l(0x11c)]!==l(0x10e))return{'node':c,'reason':l(0xed)+d[l(0x11c)]+';\x20z-index:\x20'+d[l(0x126)]};if(d['opacity']!=='1')return{'node':c,'reason':'opacity:\x20'+d['opacity']};if(d['transform']!=='none')return{'node':c,'reason':'transform:\x20'+d[l(0xec)]};if(d['scale']!=='none')return{'node':c,'reason':'scale:\x20'+d['scale']};if(d[l(0xeb)]!=='none')return{'node':c,'reason':l(0x11a)+d['translate']};if(d['rotate']!==l(0xe7))return{'node':c,'reason':'rotate:\x20'+d[l(0x10f)]};if(d['mixBlendMode']!==l(0x121))return{'node':c,'reason':'mixBlendMode:\x20'+d['mixBlendMode']};if(d[l(0x128)]!==l(0xe7))return{'node':c,'reason':l(0x11b)+d['filter']};if(d['backdropFilter']!==l(0xe7))return{'node':c,'reason':l(0x120)+d['backdropFilter']};if(d[l(0xf6)]!=='none')return{'node':c,'reason':'perspective:\x20'+d['perspective']};if(d['clipPath']!=='none')return{'node':c,'reason':'clip-path:\x20'+d[l(0x12b)]+'\x20'};const e=d['mask']||d['webkitMask'];if(e!==l(0xe7)&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0xf7)]||d['webkitMaskImage'];if(f!==l(0xe7)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d[l(0x105)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d[l(0x113)]==='isolate')return{'node':c,'reason':l(0xfd)+d[l(0x113)]};if(d[l(0x10c)]==='transform'||d[l(0x10c)]==='opacity'||d['willChange']===l(0xf3)||d['willChange']==='translate'||d[l(0x10c)]===l(0x10f))return{'node':c,'reason':l(0x114)+d[l(0x10c)]};if(d['zIndex']!=='auto'){const i=c[l(0xfc)][l(0xf2)]['getComputedStyle'](c[l(0x122)]);if(i[l(0x127)]==='flex'||i['display']===l(0xf8))return{'node':c,'reason':l(0x112)+d[l(0x126)]};else{if(i['grid']!==l(0xee))return{'node':c,'reason':l(0x107)+d[l(0x126)]};}}const h=d['contain'];if(['layout','paint',l(0x134),l(0x132)][l(0x131)](h)>-0x1||h['indexOf'](l(0x130))>-0x1||h[l(0x131)](l(0xe8))>-0x1)return{'node':c,'reason':l(0x12d)+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    `;static [m(0x101)]=css`
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
      }`;['_ready'];['computedStyle'];[m(0x12f)]='';['createsStackingContextReason']='';[m(0x102)];['parentStackingContextText'];['selectedElementOffsetParent'];[m(0x115)];constructor(){const n=m;super(),this[n(0xe3)]();}[m(0xe4)](){const o=m;this['_parseAttributesToProperties'](),this[o(0xff)](),this['_ready']=!![];}['_clickLink'](c,d){const p=m;if(d==p(0x12e)){if(this[p(0x11d)]){let f=DesignItem[p(0x106)](this['selectedElementOffsetParent']);f['instanceServiceContainer']['selectionService'][p(0x104)]([f]);}}else{if(d=='stackingContextParent'){if(this[p(0x102)]){let g=DesignItem[p(0x106)](this['parentStackingContext']);g['instanceServiceContainer']['selectionService']['setSelectedElements']([g]);}}}}[m(0x103)](c){this['_ready']&&requestAnimationFrame(()=>{const q=b;let d=c?.['element'];if(d?.[q(0xfa)]==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d[q(0xfa)]!=0xb){this[q(0xfe)]=d[q(0xfc)][q(0xf2)]['getComputedStyle'](d),this[q(0x11d)]=d['offsetParent'];if(this[q(0x11d)]==c['instanceServiceContainer']['designerCanvas']['rootDesignItem']['element']||this[q(0x11d)]==c['instanceServiceContainer'][q(0x117)]['rootDesignItem']['element'][q(0x119)])this['selectedElementOffsetParentText']=null,this[q(0x11d)]=null;else this[q(0x115)]=generateSelector(d['offsetParent']);if(d&&d[q(0xfa)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e[q(0x116)],this[q(0x11e)]=this[q(0x12f)]?e[q(0x12c)]:q(0x111),this[q(0x102)]=e[q(0x116)];this['createsStackingContext']&&d[q(0xfb)]!=='HTML'&&(this[q(0x102)]=getClosestStackingContext(d['parentNode'])['node']);if(this['parentStackingContext']==c['instanceServiceContainer'][q(0x117)]['rootDesignItem'][q(0x10d)]['parentElement']||this[q(0x102)]==c[q(0xf9)][q(0x117)]['rootDesignItem']['element'][q(0x119)]['parentElement'])this[q(0x124)]=null,this[q(0x102)]=null;else this[q(0x124)]=generateSelector(this['parentStackingContext']);}}else this[q(0xfe)]={},this[q(0x12f)]=![],this[q(0x11e)]='',this['createsStackingContext']=![],this['selectedElementOffsetParent']=null,this[q(0x115)]=null,this[q(0x102)]=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}function b(c,d){c=c-0xe3;const e=a();let f=e[c];return f;}customElements[m(0xf4)](m(0xe9),DebugView);function a(){const r=['indexOf','content','sticky','strict','_restoreCachedInititalValues','ready','28838MlhoIZ','5376456hhWhOO','none','layout','node-projects-debug-view','HTML','translate','transform','position:\x20','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','1333848hfAkpa','#document-fragment','22744400SuZGgx','defaultView','scale','define','8tSIHyW','perspective','maskImage','inline-flex','instanceServiceContainer','nodeType','nodeName','ownerDocument','isolation:\x20','computedStyle','_bindingsParse','host','style','parentStackingContext','update','setSelectedElements','webkitMaskBorder','GetDesignItem','child\x20of\x20grid\x20container;\x20z-index:\x20','2049435latxTL','59JPtHql','join','class','willChange','element','static','rotate','2853382cekQWl','not\x20a\x20stacking\x20context','flex-item;\x20z-index:\x20','isolation','willChange:\x20','selectedElementOffsetParentText','node','designerCanvas','8539281AJofcw','parentElement','translate:\x20','filter:\x20','position','selectedElementOffsetParent','createsStackingContextReason','#document','backdropFilter:\x20','normal','parentNode','getAttribute','parentStackingContextText','toLowerCase','zIndex','display','filter','documentElement','12KBJNBe','clipPath','reason','contain:\x20','offsetParent','createsStackingContext','paint'];a=function(){return r;};return a();}