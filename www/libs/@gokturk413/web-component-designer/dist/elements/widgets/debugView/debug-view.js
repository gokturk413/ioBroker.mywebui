const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1ad))/0x1+-parseInt(j(0x1ac))/0x2+-parseInt(j(0x1b7))/0x3*(parseInt(j(0x1cb))/0x4)+-parseInt(j(0x1af))/0x5*(-parseInt(j(0x1f4))/0x6)+-parseInt(j(0x1c0))/0x7+-parseInt(j(0x1e7))/0x8*(parseInt(j(0x1aa))/0x9)+parseInt(j(0x1c5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x237a7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1a2;const e=a();let f=e[c];return f;}import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1f3)]['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x1bb)](k(0x1da))&&(d='.'+c[k(0x1bb)]('class')[k(0x1e9)]('\x20')[k(0x1d0)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':l(0x1a8)};if(c['nodeName']==='#document-fragment')return getClosestStackingContext(c['host']);const d=c[l(0x1d6)]['defaultView'][l(0x1eb)](c);if(d['position']===l(0x1ed)||d['position']==='sticky')return{'node':c,'reason':l(0x1dd)+d['position']};if(d[l(0x1df)]!=='auto'&&d['position']!==l(0x1bc))return{'node':c,'reason':l(0x1dd)+d[l(0x1bd)]+l(0x1e4)+d['zIndex']};if(d[l(0x1ce)]!=='1')return{'node':c,'reason':l(0x1ee)+d[l(0x1ce)]};if(d[l(0x1a2)]!==l(0x1c4))return{'node':c,'reason':'transform:\x20'+d['transform']};if(d[l(0x1cd)]!=='none')return{'node':c,'reason':'scale:\x20'+d[l(0x1cd)]};if(d[l(0x1ae)]!==l(0x1c4))return{'node':c,'reason':'translate:\x20'+d['translate']};if(d['rotate']!==l(0x1c4))return{'node':c,'reason':'rotate:\x20'+d['rotate']};if(d['mixBlendMode']!==l(0x1e6))return{'node':c,'reason':'mixBlendMode:\x20'+d[l(0x1e2)]};if(d[l(0x1a3)]!==l(0x1c4))return{'node':c,'reason':l(0x1be)+d['filter']};if(d['backdropFilter']!==l(0x1c4))return{'node':c,'reason':'backdropFilter:\x20'+d['backdropFilter']};if(d['perspective']!==l(0x1c4))return{'node':c,'reason':l(0x1d8)+d[l(0x1e5)]};if(d['clipPath']!=='none')return{'node':c,'reason':l(0x1f1)+d['clipPath']+'\x20'};const e=d['mask']||d['webkitMask'];if(e!==l(0x1c4)&&e!==undefined)return{'node':c,'reason':l(0x1bf)+e};const f=d[l(0x1a6)]||d[l(0x1de)];if(f!==l(0x1c4)&&f!==undefined)return{'node':c,'reason':l(0x1c8)+f};const g=d['maskBorder']||d[l(0x1c1)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':l(0x1d1)+g};if(d['isolation']==='isolate')return{'node':c,'reason':'isolation:\x20'+d[l(0x1d3)]};if(d['willChange']===l(0x1a2)||d['willChange']===l(0x1ce)||d[l(0x1a4)]===l(0x1cd)||d['willChange']==='translate'||d[l(0x1a4)]==='rotate')return{'node':c,'reason':l(0x1d5)+d['willChange']};if(d['zIndex']!=='auto'){const i=c['ownerDocument'][l(0x1ba)]['getComputedStyle'](c['parentNode']);if(i['display']==='flex'||i['display']==='inline-flex')return{'node':c,'reason':l(0x1e8)+d['zIndex']};else{if(i[l(0x1b1)]!==l(0x1ef))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d[l(0x1df)]};}}const h=d[l(0x1a7)];if(['layout',l(0x1e0),'strict',l(0x1dc)]['indexOf'](h)>-0x1||h[l(0x1e1)](l(0x1e0))>-0x1||h[l(0x1e1)](l(0x1d9))>-0x1)return{'node':c,'reason':l(0x1ec)+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0x1d4)]=html`
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
      }`;[m(0x1b6)];[m(0x1b4)];[m(0x1b9)]='';[m(0x1ca)]='';['parentStackingContext'];[m(0x1cf)];['selectedElementOffsetParent'];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}[m(0x1ab)](){const n=m;this[n(0x1a9)](),this[n(0x1f6)](),this[n(0x1b6)]=!![];}[m(0x1c3)](c,d){const o=m;if(d==o(0x1f5)){if(this[o(0x1e3)]){let f=DesignItem[o(0x1b3)](this['selectedElementOffsetParent']);f['instanceServiceContainer']['selectionService']['setSelectedElements']([f]);}}else{if(d==o(0x1ea)){if(this[o(0x1cc)]){let g=DesignItem['GetDesignItem'](this[o(0x1cc)]);g[o(0x1a5)][o(0x1b2)][o(0x1c7)]([g]);}}}}[m(0x1c6)](c){this['_ready']&&requestAnimationFrame(()=>{const p=b;let d=c?.[p(0x1b5)];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d[p(0x1b8)]!=0x8&&d['nodeType']!=0xb){this['computedStyle']=d[p(0x1d6)][p(0x1ba)]['getComputedStyle'](d),this[p(0x1e3)]=d[p(0x1f5)];if(this[p(0x1e3)]==c[p(0x1a5)]['designerCanvas'][p(0x1b0)]['element']||this['selectedElementOffsetParent']==c[p(0x1a5)][p(0x1db)]['rootDesignItem'][p(0x1b5)]['parentElement'])this['selectedElementOffsetParentText']=null,this[p(0x1e3)]=null;else this['selectedElementOffsetParentText']=generateSelector(d['offsetParent']);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this[p(0x1b9)]=d===e['node'],this['createsStackingContextReason']=this[p(0x1b9)]?e['reason']:p(0x1c9),this[p(0x1cc)]=e[p(0x1c2)];this[p(0x1b9)]&&d['nodeName']!=='HTML'&&(this[p(0x1cc)]=getClosestStackingContext(d[p(0x1d7)])[p(0x1c2)]);if(this['parentStackingContext']==c[p(0x1a5)]['designerCanvas']['rootDesignItem'][p(0x1b5)]['parentElement']||this[p(0x1cc)]==c[p(0x1a5)][p(0x1db)][p(0x1b0)]['element']['parentElement'][p(0x1d2)])this['parentStackingContextText']=null,this[p(0x1cc)]=null;else this['parentStackingContextText']=generateSelector(this['parentStackingContext']);}}else this['computedStyle']={},this[p(0x1b9)]=![],this['createsStackingContextReason']='',this[p(0x1b9)]=![],this['selectedElementOffsetParent']=null,this[p(0x1f2)]=null,this['parentStackingContext']=null,this[p(0x1cf)]=null;this['_bindingsRefresh']();});}}function a(){const q=['selectedElementOffsetParentText','nodeName','96NfvwYJ','offsetParent','_bindingsParse','transform','filter','willChange','instanceServiceContainer','maskImage','contain','root','_parseAttributesToProperties','36PWHDAv','ready','415844ibYvhE','275900pVkjwI','translate','78565kjEcQO','rootDesignItem','grid','selectionService','GetDesignItem','computedStyle','element','_ready','3igdRjZ','nodeType','createsStackingContext','defaultView','getAttribute','static','position','filter:\x20','mask:\x20\x20','2015006JdQpgG','webkitMaskBorder','node','_clickLink','none','3873300sEsepl','update','setSelectedElements','mask-image:\x20','not\x20a\x20stacking\x20context','createsStackingContextReason','1040572SDdASB','parentStackingContext','scale','opacity','parentStackingContextText','join','mask-border:\x20','parentElement','isolation','template','willChange:\x20','ownerDocument','parentNode','perspective:\x20','layout','class','designerCanvas','content','position:\x20','webkitMaskImage','zIndex','paint','indexOf','mixBlendMode','selectedElementOffsetParent',';\x20z-index:\x20','perspective','normal','26792Qxqcgd','flex-item;\x20z-index:\x20','split','stackingContextParent','getComputedStyle','contain:\x20','fixed','opacity:\x20','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','define','clip-path:\x20'];a=function(){return q;};return a();}customElements[m(0x1f0)]('node-projects-debug-view',DebugView);