const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x18b))/0x1+-parseInt(j(0x193))/0x2*(-parseInt(j(0x19a))/0x3)+-parseInt(j(0x187))/0x4+-parseInt(j(0x182))/0x5+parseInt(j(0x181))/0x6*(-parseInt(j(0x16b))/0x7)+parseInt(j(0x168))/0x8*(-parseInt(j(0x194))/0x9)+parseInt(j(0x18e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9f088));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1a5)]['toLowerCase']();if(c['id'])d='#'+c[k(0x18d)]('id');else c[k(0x18d)]('class')&&(d='.'+c[k(0x18d)](k(0x1aa))[k(0x173)]('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x1a5)]===l(0x16e)||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':'root'};if(c[l(0x1a5)]==='#document-fragment')return getClosestStackingContext(c['host']);const d=c[l(0x17d)][l(0x1a4)][l(0x18f)](c);if(d[l(0x185)]==='fixed'||d[l(0x185)]==='sticky')return{'node':c,'reason':'position:\x20'+d[l(0x185)]};if(d['zIndex']!=='auto'&&d['position']!=='static')return{'node':c,'reason':l(0x171)+d[l(0x185)]+';\x20z-index:\x20'+d[l(0x195)]};if(d[l(0x1a0)]!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0x1a0)]};if(d['transform']!=='none')return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!=='none')return{'node':c,'reason':'scale:\x20'+d[l(0x17e)]};if(d[l(0x16f)]!==l(0x1a7))return{'node':c,'reason':l(0x188)+d['translate']};if(d[l(0x1a8)]!==l(0x1a7))return{'node':c,'reason':'rotate:\x20'+d['rotate']};if(d[l(0x16a)]!=='normal')return{'node':c,'reason':'mixBlendMode:\x20'+d[l(0x16a)]};if(d['filter']!==l(0x1a7))return{'node':c,'reason':'filter:\x20'+d[l(0x1a9)]};if(d['backdropFilter']!==l(0x1a7))return{'node':c,'reason':l(0x18c)+d[l(0x196)]};if(d['perspective']!=='none')return{'node':c,'reason':l(0x177)+d[l(0x17b)]};if(d['clipPath']!=='none')return{'node':c,'reason':l(0x17f)+d['clipPath']+'\x20'};const e=d['mask']||d[l(0x167)];if(e!==l(0x1a7)&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0x1a2)]||d[l(0x198)];if(f!==l(0x1a7)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!=='none'&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d['isolation']===l(0x19c))return{'node':c,'reason':'isolation:\x20'+d['isolation']};if(d[l(0x1a3)]==='transform'||d['willChange']===l(0x1a0)||d[l(0x1a3)]===l(0x17e)||d[l(0x1a3)]==='translate'||d[l(0x1a3)]===l(0x1a8))return{'node':c,'reason':l(0x189)+d[l(0x1a3)]};if(d['zIndex']!=='auto'){const i=c['ownerDocument'][l(0x1a4)][l(0x18f)](c[l(0x172)]);if(i['display']===l(0x179)||i['display']===l(0x199))return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d[l(0x195)]};else{if(i[l(0x190)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x174)+d[l(0x195)]};}}const h=d[l(0x184)];if([l(0x180),'paint',l(0x160),l(0x170)]['indexOf'](h)>-0x1||h['indexOf']('paint')>-0x1||h[l(0x175)]('layout')>-0x1)return{'node':c,'reason':l(0x164)+h};return getClosestStackingContext(c[l(0x172)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    `;static [m(0x17c)]=css`
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
      }`;[m(0x162)];['computedStyle'];['createsStackingContext']='';[m(0x17a)]='';[m(0x19e)];['parentStackingContextText'];[m(0x192)];['selectedElementOffsetParentText'];constructor(){const n=m;super(),this[n(0x1a1)]();}['ready'](){const o=m;this['_parseAttributesToProperties'](),this[o(0x163)](),this['_ready']=!![];}[m(0x15d)](c,d){const p=m;if(d==p(0x18a)){if(this['selectedElementOffsetParent']){let f=DesignItem[p(0x178)](this['selectedElementOffsetParent']);f[p(0x16c)]['selectionService'][p(0x197)]([f]);}}else{if(d==p(0x16d)){if(this[p(0x19e)]){let g=DesignItem['GetDesignItem'](this[p(0x19e)]);g['instanceServiceContainer']['selectionService'][p(0x197)]([g]);}}}}[m(0x19d)](c){const q=m;this[q(0x162)]&&requestAnimationFrame(()=>{const r=q;let d=c?.['element'];if(d?.[r(0x166)]==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d[r(0x166)]!=0xb){this['computedStyle']=d[r(0x17d)][r(0x1a4)]['getComputedStyle'](d),this['selectedElementOffsetParent']=d[r(0x18a)];if(this[r(0x192)]==c['instanceServiceContainer']['designerCanvas'][r(0x191)]['element']||this[r(0x192)]==c[r(0x16c)][r(0x19b)]['rootDesignItem'][r(0x15e)][r(0x165)])this[r(0x186)]=null,this['selectedElementOffsetParent']=null;else this['selectedElementOffsetParentText']=generateSelector(d[r(0x18a)]);if(d&&d[r(0x166)]===0x1){const e=getClosestStackingContext(d);this[r(0x161)]=d===e[r(0x183)],this[r(0x17a)]=this['createsStackingContext']?e[r(0x1a6)]:r(0x169),this[r(0x19e)]=e['node'];this[r(0x161)]&&d[r(0x1a5)]!==r(0x16e)&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])['node']);if(this[r(0x19e)]==c[r(0x16c)]['designerCanvas'][r(0x191)]['element']['parentElement']||this[r(0x19e)]==c[r(0x16c)][r(0x19b)]['rootDesignItem'][r(0x15e)][r(0x165)]['parentElement'])this[r(0x176)]=null,this['parentStackingContext']=null;else this[r(0x176)]=generateSelector(this[r(0x19e)]);}}else this[r(0x15f)]={},this[r(0x161)]=![],this[r(0x17a)]='',this[r(0x161)]=![],this['selectedElementOffsetParent']=null,this['selectedElementOffsetParentText']=null,this[r(0x19e)]=null,this[r(0x176)]=null;this['_bindingsRefresh']();});}}customElements['define'](m(0x19f),DebugView);function b(c,d){c=c-0x15d;const e=a();let f=e[c];return f;}function a(){const s=['split','child\x20of\x20grid\x20container;\x20z-index:\x20','indexOf','parentStackingContextText','perspective:\x20','GetDesignItem','flex','createsStackingContextReason','perspective','style','ownerDocument','scale','clip-path:\x20','layout','6jxTiuI','4405075Vwzfcj','node','contain','position','selectedElementOffsetParentText','1779800UvWwhG','translate:\x20','willChange:\x20','offsetParent','516971zznxjz','backdropFilter:\x20','getAttribute','39155280gkpFzt','getComputedStyle','grid','rootDesignItem','selectedElementOffsetParent','4JOXWDn','1905597fZQTpE','zIndex','backdropFilter','setSelectedElements','webkitMaskImage','inline-flex','139125MswynY','designerCanvas','isolate','update','parentStackingContext','node-projects-debug-view','opacity','_restoreCachedInititalValues','maskImage','willChange','defaultView','nodeName','reason','none','rotate','filter','class','_clickLink','element','computedStyle','strict','createsStackingContext','_ready','_bindingsParse','contain:\x20','parentElement','nodeType','webkitMask','8xQInaZ','not\x20a\x20stacking\x20context','mixBlendMode','9115463zJZlDg','instanceServiceContainer','stackingContextParent','HTML','translate','content','position:\x20','parentNode'];a=function(){return s;};return a();}