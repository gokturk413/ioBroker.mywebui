const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xbc))/0x1*(parseInt(j(0xd7))/0x2)+-parseInt(j(0x96))/0x3*(parseInt(j(0xd3))/0x4)+-parseInt(j(0xcc))/0x5*(-parseInt(j(0xb3))/0x6)+-parseInt(j(0xba))/0x7+-parseInt(j(0xa0))/0x8+parseInt(j(0xb7))/0x9+parseInt(j(0x9f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x678f3));function a(){const r=['selectedElementOffsetParent','webkitMaskBorder','zIndex','flex-item;\x20z-index:\x20','rootDesignItem','25972840sFCmOy','6484696VsPbpk','static','parentStackingContext','nodeName','perspective','mixBlendMode','parentStackingContextText','display','defaultView','GetDesignItem','isolate','transform:\x20','layout','scale','none','not\x20a\x20stacking\x20context','clipPath','designerCanvas','setSelectedElements','48aYCKgi','createsStackingContextReason','selectedElementOffsetParentText','filter','1663902DHrFQJ','_parseAttributesToProperties','willChange','4543476FrLSTO','split','178DXJkts','contain:\x20','maskImage','indexOf','computedStyle','parentNode','fixed','root','backdropFilter','ownerDocument','mixBlendMode:\x20','element','translate','createsStackingContext','isolation','perspective:\x20','338090hBHrBE','position:\x20','grid','_ready','rotate','node-projects-debug-view','position','8BNfVIO','isolation:\x20','webkitMask','_clickLink','7156RWDsxg','contain','class','offsetParent','auto','instanceServiceContainer','node','opacity:\x20','1203582KrUggQ','strict','update','join'];a=function(){return r;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function b(c,d){c=c-0x94;const e=a();let f=e[c];return f;}function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName']['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c['getAttribute'](k(0xd9))&&(d='.'+c['getAttribute'](k(0xd9))[k(0xbb)]('\x20')[k(0x99)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':l(0xc3)};if(c[l(0xa3)]==='#document-fragment')return getClosestStackingContext(c['host']);const d=c['ownerDocument'][l(0xa8)]['getComputedStyle'](c);if(d['position']===l(0xc2)||d['position']==='sticky')return{'node':c,'reason':l(0xcd)+d['position']};if(d[l(0x9c)]!==l(0xdb)&&d[l(0xd2)]!==l(0xa1))return{'node':c,'reason':l(0xcd)+d['position']+';\x20z-index:\x20'+d[l(0x9c)]};if(d['opacity']!=='1')return{'node':c,'reason':l(0x95)+d['opacity']};if(d['transform']!=='none')return{'node':c,'reason':l(0xab)+d['transform']};if(d[l(0xad)]!==l(0xae))return{'node':c,'reason':'scale:\x20'+d[l(0xad)]};if(d['translate']!==l(0xae))return{'node':c,'reason':'translate:\x20'+d[l(0xc8)]};if(d[l(0xd0)]!=='none')return{'node':c,'reason':'rotate:\x20'+d[l(0xd0)]};if(d[l(0xa5)]!=='normal')return{'node':c,'reason':l(0xc6)+d[l(0xa5)]};if(d[l(0xb6)]!=='none')return{'node':c,'reason':'filter:\x20'+d['filter']};if(d[l(0xc4)]!==l(0xae))return{'node':c,'reason':'backdropFilter:\x20'+d['backdropFilter']};if(d['perspective']!=='none')return{'node':c,'reason':l(0xcb)+d[l(0xa4)]};if(d[l(0xb0)]!==l(0xae))return{'node':c,'reason':'clip-path:\x20'+d[l(0xb0)]+'\x20'};const e=d['mask']||d[l(0xd5)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0xbe)]||d['webkitMaskImage'];if(f!=='none'&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d[l(0x9b)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d[l(0xca)]===l(0xaa))return{'node':c,'reason':l(0xd4)+d['isolation']};if(d[l(0xb9)]==='transform'||d['willChange']==='opacity'||d[l(0xb9)]==='scale'||d[l(0xb9)]==='translate'||d['willChange']==='rotate')return{'node':c,'reason':'willChange:\x20'+d[l(0xb9)]};if(d[l(0x9c)]!==l(0xdb)){const i=c['ownerDocument']['defaultView']['getComputedStyle'](c[l(0xc1)]);if(i['display']==='flex'||i[l(0xa7)]==='inline-flex')return{'node':c,'reason':l(0x9d)+d[l(0x9c)]};else{if(i[l(0xce)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d['zIndex']};}}const h=d[l(0xd8)];if([l(0xac),'paint',l(0x97),'content']['indexOf'](h)>-0x1||h['indexOf']('paint')>-0x1||h[l(0xbf)](l(0xac))>-0x1)return{'node':c,'reason':l(0xbd)+h};return getClosestStackingContext(c[l(0xc1)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;['_ready'];[m(0xc0)];[m(0xc9)]='';[m(0xb4)]='';[m(0xa2)];['parentStackingContextText'];[m(0x9a)];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const n=m;this[n(0xb8)](),this['_bindingsParse'](),this['_ready']=!![];}[m(0xd6)](c,d){const o=m;if(d=='offsetParent'){if(this[o(0x9a)]){let f=DesignItem[o(0xa9)](this[o(0x9a)]);f['instanceServiceContainer']['selectionService']['setSelectedElements']([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem[o(0xa9)](this[o(0xa2)]);g['instanceServiceContainer']['selectionService'][o(0xb2)]([g]);}}}}[m(0x98)](c){const p=m;this[p(0xcf)]&&requestAnimationFrame(()=>{const q=p;let d=c?.['element'];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d['nodeType']!=0xb){this[q(0xc0)]=d[q(0xc5)]['defaultView']['getComputedStyle'](d),this['selectedElementOffsetParent']=d[q(0xda)];if(this[q(0x9a)]==c[q(0xdc)][q(0xb1)][q(0x9e)]['element']||this[q(0x9a)]==c[q(0xdc)]['designerCanvas'][q(0x9e)]['element']['parentElement'])this[q(0xb5)]=null,this[q(0x9a)]=null;else this['selectedElementOffsetParentText']=generateSelector(d['offsetParent']);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this[q(0xc9)]=d===e['node'],this['createsStackingContextReason']=this['createsStackingContext']?e['reason']:q(0xaf),this[q(0xa2)]=e['node'];this['createsStackingContext']&&d['nodeName']!=='HTML'&&(this[q(0xa2)]=getClosestStackingContext(d['parentNode'])[q(0x94)]);if(this[q(0xa2)]==c['instanceServiceContainer']['designerCanvas'][q(0x9e)][q(0xc7)]['parentElement']||this[q(0xa2)]==c['instanceServiceContainer'][q(0xb1)]['rootDesignItem'][q(0xc7)]['parentElement']['parentElement'])this[q(0xa6)]=null,this['parentStackingContext']=null;else this[q(0xa6)]=generateSelector(this['parentStackingContext']);}}else this[q(0xc0)]={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this[q(0xc9)]=![],this['selectedElementOffsetParent']=null,this['selectedElementOffsetParentText']=null,this['parentStackingContext']=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}customElements['define'](m(0xd1),DebugView);