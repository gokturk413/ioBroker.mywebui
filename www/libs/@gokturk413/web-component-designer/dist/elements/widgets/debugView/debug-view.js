const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x11f))/0x1+-parseInt(j(0xdb))/0x2*(-parseInt(j(0xea))/0x3)+parseInt(j(0x117))/0x4+-parseInt(j(0x118))/0x5*(-parseInt(j(0xe6))/0x6)+-parseInt(j(0x104))/0x7*(parseInt(j(0x103))/0x8)+parseInt(j(0xd8))/0x9+-parseInt(j(0x11e))/0xa*(parseInt(j(0x10a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x844ce));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName'][k(0xfa)]();if(c['id'])d='#'+c[k(0x10b)]('id');else c['getAttribute'](k(0x113))&&(d='.'+c[k(0x10b)]('class')['split']('\x20')['join']('.'));return d?e+d:e;}function b(c,d){c=c-0xd5;const e=a();let f=e[c];return f;}function a(){const s=['3798545fkYDws','scale','mixBlendMode:\x20','flex','computedStyle','offsetParent','11132020eUVeLY','506538clfDae','GetDesignItem','fixed','flex-item;\x20z-index:\x20','6832530tmVuFb','root','paint','1884ZrepoX','grid','stackingContextParent','parentStackingContext','_restoreCachedInititalValues','none','template','instanceServiceContainer','selectedElementOffsetParent','nodeType','perspective','6QjJPcZ','selectedElementOffsetParentText','position:\x20','designerCanvas','2613IlbenU','rootDesignItem','backdropFilter','setSelectedElements','sticky','ready','reason','parentElement','define','parentStackingContextText','filter','mixBlendMode','auto','isolate','rotate','mask:\x20\x20','toLowerCase','opacity','createsStackingContextReason','createsStackingContext','maskBorder','position','_bindingsParse','willChange','indexOf','336ycjoCr','162925fLeUCK','opacity:\x20','translate','#document','isolation','getComputedStyle','11SJZJJr','getAttribute','transform','nodeName','_ready','ownerDocument','display','static',';\x20z-index:\x20','class','clipPath','element','defaultView','3199324lJGIXL'];a=function(){return s;};return a();}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x10d)]==='HTML'||c['nodeName']===l(0x107))return{'node':document['documentElement'],'reason':l(0xd9)};if(c[l(0x10d)]==='#document-fragment')return getClosestStackingContext(c['host']);const d=c['ownerDocument'][l(0x116)][l(0x109)](c);if(d[l(0xff)]===l(0xd6)||d[l(0xff)]===l(0xee))return{'node':c,'reason':l(0xe8)+d['position']};if(d['zIndex']!=='auto'&&d[l(0xff)]!==l(0x111))return{'node':c,'reason':l(0xe8)+d['position']+l(0x112)+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':l(0x105)+d[l(0xfb)]};if(d['transform']!==l(0xe0))return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!==l(0xe0))return{'node':c,'reason':'scale:\x20'+d['scale']};if(d[l(0x106)]!==l(0xe0))return{'node':c,'reason':'translate:\x20'+d['translate']};if(d[l(0xf8)]!==l(0xe0))return{'node':c,'reason':'rotate:\x20'+d[l(0xf8)]};if(d[l(0xf5)]!=='normal')return{'node':c,'reason':l(0x11a)+d['mixBlendMode']};if(d[l(0xf4)]!==l(0xe0))return{'node':c,'reason':'filter:\x20'+d['filter']};if(d['backdropFilter']!=='none')return{'node':c,'reason':'backdropFilter:\x20'+d[l(0xec)]};if(d['perspective']!=='none')return{'node':c,'reason':'perspective:\x20'+d[l(0xe5)]};if(d[l(0x114)]!==l(0xe0))return{'node':c,'reason':'clip-path:\x20'+d['clipPath']+'\x20'};const e=d['mask']||d['webkitMask'];if(e!==l(0xe0)&&e!==undefined)return{'node':c,'reason':l(0xf9)+e};const f=d['maskImage']||d['webkitMaskImage'];if(f!=='none'&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d[l(0xfe)]||d['webkitMaskBorder'];if(g!==l(0xe0)&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d[l(0x108)]===l(0xf7))return{'node':c,'reason':'isolation:\x20'+d[l(0x108)]};if(d['willChange']===l(0x10c)||d[l(0x101)]===l(0xfb)||d['willChange']===l(0x119)||d['willChange']==='translate'||d['willChange']===l(0xf8))return{'node':c,'reason':'willChange:\x20'+d['willChange']};if(d['zIndex']!==l(0xf6)){const i=c['ownerDocument'][l(0x116)][l(0x109)](c['parentNode']);if(i['display']===l(0x11b)||i[l(0x110)]==='inline-flex')return{'node':c,'reason':l(0xd7)+d['zIndex']};else{if(i[l(0xdc)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d['zIndex']};}}const h=d['contain'];if(['layout',l(0xda),'strict','content'][l(0x102)](h)>-0x1||h[l(0x102)]('paint')>-0x1||h['indexOf']('layout')>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0xe1)]=html`
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
    `;static ['style']=css`
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
      }`;['_ready'];[m(0x11c)];['createsStackingContext']='';[m(0xfc)]='';[m(0xde)];['parentStackingContextText'];['selectedElementOffsetParent'];[m(0xe7)];constructor(){const n=m;super(),this[n(0xdf)]();}[m(0xef)](){const o=m;this['_parseAttributesToProperties'](),this[o(0x100)](),this['_ready']=!![];}['_clickLink'](c,d){const p=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem[p(0xd5)](this['selectedElementOffsetParent']);f['instanceServiceContainer']['selectionService'][p(0xed)]([f]);}}else{if(d==p(0xdd)){if(this['parentStackingContext']){let g=DesignItem[p(0xd5)](this['parentStackingContext']);g[p(0xe2)]['selectionService'][p(0xed)]([g]);}}}}['update'](c){const q=m;this[q(0x10e)]&&requestAnimationFrame(()=>{const r=q;let d=c?.['element'];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d[r(0xe4)]!=0xb){this['computedStyle']=d[r(0x10f)]['defaultView']['getComputedStyle'](d),this[r(0xe3)]=d[r(0x11d)];if(this[r(0xe3)]==c['instanceServiceContainer'][r(0xe9)]['rootDesignItem'][r(0x115)]||this[r(0xe3)]==c['instanceServiceContainer'][r(0xe9)][r(0xeb)][r(0x115)][r(0xf1)])this['selectedElementOffsetParentText']=null,this['selectedElementOffsetParent']=null;else this['selectedElementOffsetParentText']=generateSelector(d['offsetParent']);if(d&&d[r(0xe4)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e['node'],this['createsStackingContextReason']=this[r(0xfd)]?e[r(0xf0)]:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e['node'];this[r(0xfd)]&&d[r(0x10d)]!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])['node']);if(this[r(0xde)]==c[r(0xe2)][r(0xe9)][r(0xeb)]['element']['parentElement']||this[r(0xde)]==c['instanceServiceContainer'][r(0xe9)]['rootDesignItem'][r(0x115)]['parentElement']['parentElement'])this[r(0xf3)]=null,this['parentStackingContext']=null;else this[r(0xf3)]=generateSelector(this['parentStackingContext']);}}else this[r(0x11c)]={},this['createsStackingContext']=![],this[r(0xfc)]='',this['createsStackingContext']=![],this['selectedElementOffsetParent']=null,this['selectedElementOffsetParentText']=null,this[r(0xde)]=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}customElements[m(0xf2)]('node-projects-debug-view',DebugView);