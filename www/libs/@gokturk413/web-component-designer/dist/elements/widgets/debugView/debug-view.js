const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x15c))/0x1*(parseInt(j(0x156))/0x2)+-parseInt(j(0x11a))/0x3*(-parseInt(j(0x13d))/0x4)+-parseInt(j(0x157))/0x5+parseInt(j(0x150))/0x6*(-parseInt(j(0x130))/0x7)+-parseInt(j(0x145))/0x8+parseInt(j(0x135))/0x9*(parseInt(j(0x126))/0xa)+-parseInt(j(0x14c))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb848b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName']['toLowerCase']();if(c['id'])d='#'+c[k(0x137)]('id');else c[k(0x137)]('class')&&(d='.'+c['getAttribute']('class')[k(0x15f)]('\x20')[k(0x122)]('.'));return d?e+d:e;}function a(){const q=['ownerDocument','70DqsyUi','translate','none','willChange','rotate','willChange:\x20','mixBlendMode:\x20','opacity','designerCanvas','layout','25375SvMErU','static','contain:\x20','isolation','mask-image:\x20','1852866rjoJZL','mixBlendMode','getAttribute','filter','perspective','node-projects-debug-view','auto','computedStyle','61772OJzhPg','element','selectedElementOffsetParent','opacity:\x20','content','parentStackingContextText','parentStackingContext','getComputedStyle','6833752IGUEyw','selectionService','strict','inline-flex','_ready','defaultView','webkitMask','5347639EAltnP','createsStackingContextReason','contain','reason','786hLrdgG','perspective:\x20','selectedElementOffsetParentText','createsStackingContext','flex-item;\x20z-index:\x20','scale','2127214nmXjgV','4460605MCEhbp','offsetParent','indexOf','mask-border:\x20','webkitMaskImage','1KJyjny','rotate:\x20','position:\x20','split','child\x20of\x20grid\x20container;\x20z-index:\x20','GetDesignItem','position','backdropFilter','zIndex','setSelectedElements','grid','nodeType','root',';\x20z-index:\x20','186GBvTqh','transform','nodeName','clipPath','HTML','instanceServiceContainer','flex','parentElement','join','stackingContextParent','normal'];a=function(){return q;};return a();}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x11c)]==='HTML'||c[l(0x11c)]==='#document')return{'node':document['documentElement'],'reason':l(0x118)};if(c['nodeName']==='#document-fragment')return getClosestStackingContext(c['host']);const d=c['ownerDocument']['defaultView']['getComputedStyle'](c);if(d['position']==='fixed'||d['position']==='sticky')return{'node':c,'reason':'position:\x20'+d['position']};if(d['zIndex']!==l(0x13b)&&d[l(0x162)]!==l(0x131))return{'node':c,'reason':l(0x15e)+d[l(0x162)]+l(0x119)+d[l(0x164)]};if(d['opacity']!=='1')return{'node':c,'reason':l(0x140)+d[l(0x12d)]};if(d['transform']!=='none')return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!==l(0x128))return{'node':c,'reason':'scale:\x20'+d[l(0x155)]};if(d[l(0x127)]!=='none')return{'node':c,'reason':'translate:\x20'+d['translate']};if(d['rotate']!=='none')return{'node':c,'reason':l(0x15d)+d[l(0x12a)]};if(d['mixBlendMode']!==l(0x124))return{'node':c,'reason':l(0x12c)+d[l(0x136)]};if(d[l(0x138)]!=='none')return{'node':c,'reason':'filter:\x20'+d['filter']};if(d[l(0x163)]!==l(0x128))return{'node':c,'reason':'backdropFilter:\x20'+d[l(0x163)]};if(d[l(0x139)]!==l(0x128))return{'node':c,'reason':l(0x151)+d[l(0x139)]};if(d[l(0x11d)]!=='none')return{'node':c,'reason':'clip-path:\x20'+d[l(0x11d)]+'\x20'};const e=d['mask']||d[l(0x14b)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d['maskImage']||d[l(0x15b)];if(f!=='none'&&f!==undefined)return{'node':c,'reason':l(0x134)+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!==l(0x128)&&g!==undefined)return{'node':c,'reason':l(0x15a)+g};if(d[l(0x133)]==='isolate')return{'node':c,'reason':'isolation:\x20'+d[l(0x133)]};if(d[l(0x129)]===l(0x11b)||d['willChange']==='opacity'||d[l(0x129)]===l(0x155)||d['willChange']==='translate'||d['willChange']==='rotate')return{'node':c,'reason':l(0x12b)+d[l(0x129)]};if(d[l(0x164)]!=='auto'){const i=c[l(0x125)][l(0x14a)]['getComputedStyle'](c['parentNode']);if(i['display']===l(0x120)||i['display']===l(0x148))return{'node':c,'reason':l(0x154)+d['zIndex']};else{if(i[l(0x166)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x160)+d['zIndex']};}}const h=d[l(0x14e)];if([l(0x12f),'paint',l(0x147),l(0x141)]['indexOf'](h)>-0x1||h['indexOf']('paint')>-0x1||h[l(0x159)]('layout')>-0x1)return{'node':c,'reason':l(0x132)+h};return getClosestStackingContext(c['parentNode']);};function b(c,d){c=c-0x118;const e=a();let f=e[c];return f;}export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;[m(0x149)];[m(0x13c)];['createsStackingContext']='';[m(0x14d)]='';['parentStackingContext'];['parentStackingContextText'];[m(0x13f)];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const n=m;this['_parseAttributesToProperties'](),this['_bindingsParse'](),this[n(0x149)]=!![];}['_clickLink'](c,d){const o=m;if(d=='offsetParent'){if(this[o(0x13f)]){let f=DesignItem['GetDesignItem'](this[o(0x13f)]);f[o(0x11f)][o(0x146)][o(0x165)]([f]);}}else{if(d==o(0x123)){if(this[o(0x143)]){let g=DesignItem[o(0x161)](this['parentStackingContext']);g['instanceServiceContainer'][o(0x146)]['setSelectedElements']([g]);}}}}['update'](c){this['_ready']&&requestAnimationFrame(()=>{const p=b;let d=c?.[p(0x13e)];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d['nodeType']!=0xb){this[p(0x13c)]=d['ownerDocument'][p(0x14a)][p(0x144)](d),this['selectedElementOffsetParent']=d[p(0x158)];if(this['selectedElementOffsetParent']==c[p(0x11f)][p(0x12e)]['rootDesignItem']['element']||this['selectedElementOffsetParent']==c[p(0x11f)]['designerCanvas']['rootDesignItem'][p(0x13e)]['parentElement'])this['selectedElementOffsetParentText']=null,this[p(0x13f)]=null;else this[p(0x152)]=generateSelector(d['offsetParent']);if(d&&d[p(0x167)]===0x1){const e=getClosestStackingContext(d);this[p(0x153)]=d===e['node'],this['createsStackingContextReason']=this['createsStackingContext']?e[p(0x14f)]:'not\x20a\x20stacking\x20context',this[p(0x143)]=e['node'];this[p(0x153)]&&d['nodeName']!==p(0x11e)&&(this[p(0x143)]=getClosestStackingContext(d['parentNode'])['node']);if(this['parentStackingContext']==c['instanceServiceContainer'][p(0x12e)]['rootDesignItem'][p(0x13e)][p(0x121)]||this['parentStackingContext']==c['instanceServiceContainer'][p(0x12e)]['rootDesignItem'][p(0x13e)]['parentElement'][p(0x121)])this['parentStackingContextText']=null,this[p(0x143)]=null;else this[p(0x142)]=generateSelector(this['parentStackingContext']);}}else this[p(0x13c)]={},this[p(0x153)]=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this[p(0x13f)]=null,this[p(0x152)]=null,this[p(0x143)]=null,this[p(0x142)]=null;this['_bindingsRefresh']();});}}customElements['define'](m(0x13a),DebugView);