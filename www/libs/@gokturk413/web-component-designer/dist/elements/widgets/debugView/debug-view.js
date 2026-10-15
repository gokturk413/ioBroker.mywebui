const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1c0))/0x1*(parseInt(j(0x1a3))/0x2)+-parseInt(j(0x1ab))/0x3+-parseInt(j(0x1a2))/0x4*(parseInt(j(0x1df))/0x5)+parseInt(j(0x1d3))/0x6*(parseInt(j(0x1bf))/0x7)+parseInt(j(0x19f))/0x8+-parseInt(j(0x1a6))/0x9+-parseInt(j(0x1c2))/0xa*(-parseInt(j(0x1b4))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98cdc));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1e1)][k(0x1d5)]();if(c['id'])d='#'+c[k(0x1c7)]('id');else c['getAttribute'](k(0x1cc))&&(d='.'+c['getAttribute']('class')[k(0x19d)]('\x20')['join']('.'));return d?e+d:e;}function b(c,d){c=c-0x19c;const e=a();let f=e[c];return f;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x1e1)]==='HTML'||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':'root'};if(c[l(0x1e1)]===l(0x1d8))return getClosestStackingContext(c['host']);const d=c[l(0x1a5)]['defaultView'][l(0x1b0)](c);if(d['position']==='fixed'||d['position']==='sticky')return{'node':c,'reason':'position:\x20'+d['position']};if(d['zIndex']!==l(0x1c4)&&d[l(0x1ce)]!=='static')return{'node':c,'reason':'position:\x20'+d[l(0x1ce)]+l(0x1bd)+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':l(0x1cb)+d['opacity']};if(d[l(0x19e)]!=='none')return{'node':c,'reason':'transform:\x20'+d['transform']};if(d[l(0x1b2)]!=='none')return{'node':c,'reason':'scale:\x20'+d['scale']};if(d[l(0x1af)]!==l(0x1dc))return{'node':c,'reason':l(0x1e5)+d['translate']};if(d['rotate']!=='none')return{'node':c,'reason':l(0x1bc)+d[l(0x1d7)]};if(d[l(0x1ca)]!==l(0x1be))return{'node':c,'reason':l(0x1ad)+d[l(0x1ca)]};if(d['filter']!==l(0x1dc))return{'node':c,'reason':'filter:\x20'+d[l(0x1a0)]};if(d['backdropFilter']!=='none')return{'node':c,'reason':'backdropFilter:\x20'+d[l(0x1b1)]};if(d['perspective']!=='none')return{'node':c,'reason':'perspective:\x20'+d[l(0x1d1)]};if(d[l(0x1c9)]!==l(0x1dc))return{'node':c,'reason':l(0x1d4)+d[l(0x1c9)]+'\x20'};const e=d[l(0x1de)]||d['webkitMask'];if(e!==l(0x1dc)&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d['maskImage']||d['webkitMaskImage'];if(f!=='none'&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d[l(0x1dd)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d[l(0x1cf)]==='isolate')return{'node':c,'reason':'isolation:\x20'+d[l(0x1cf)]};if(d['willChange']===l(0x19e)||d['willChange']==='opacity'||d['willChange']==='scale'||d['willChange']===l(0x1af)||d[l(0x1b8)]===l(0x1d7))return{'node':c,'reason':'willChange:\x20'+d['willChange']};if(d['zIndex']!==l(0x1c4)){const i=c['ownerDocument']['defaultView'][l(0x1b0)](c[l(0x1a4)]);if(i[l(0x1b5)]==='flex'||i['display']===l(0x1a9))return{'node':c,'reason':l(0x1e3)+d[l(0x1db)]};else{if(i['grid']!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x19c)+d[l(0x1db)]};}}const h=d['contain'];if([l(0x1d9),'paint','strict',l(0x1a1)]['indexOf'](h)>-0x1||h['indexOf'](l(0x1a8))>-0x1||h['indexOf']('layout')>-0x1)return{'node':c,'reason':l(0x1d2)+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    `;static [m(0x1b6)]=css`
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
      }`;['_ready'];[m(0x1c3)];['createsStackingContext']='';[m(0x1e2)]='';[m(0x1c8)];['parentStackingContextText'];[m(0x1c6)];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const n=m;this[n(0x1b3)](),this['_bindingsParse'](),this[n(0x1bb)]=!![];}[m(0x1da)](c,d){const o=m;if(d=='offsetParent'){if(this[o(0x1c6)]){let f=DesignItem['GetDesignItem'](this[o(0x1c6)]);f[o(0x1cd)]['selectionService']['setSelectedElements']([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem['GetDesignItem'](this[o(0x1c8)]);g[o(0x1cd)][o(0x1b9)][o(0x1aa)]([g]);}}}}[m(0x1ae)](c){this['_ready']&&requestAnimationFrame(()=>{const p=b;let d=c?.['element'];if(d?.['nodeType']==0x3)d=d[p(0x1a4)];if(d&&d['nodeType']!=0x8&&d['nodeType']!=0xb){this['computedStyle']=d['ownerDocument']['defaultView'][p(0x1b0)](d),this[p(0x1c6)]=d[p(0x1e4)];if(this['selectedElementOffsetParent']==c['instanceServiceContainer'][p(0x1d6)]['rootDesignItem']['element']||this['selectedElementOffsetParent']==c['instanceServiceContainer'][p(0x1d6)]['rootDesignItem']['element'][p(0x1ac)])this[p(0x1e0)]=null,this['selectedElementOffsetParent']=null;else this[p(0x1e0)]=generateSelector(d[p(0x1e4)]);if(d&&d[p(0x1a7)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e['node'],this['createsStackingContextReason']=this['createsStackingContext']?e['reason']:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e['node'];this['createsStackingContext']&&d['nodeName']!==p(0x1d0)&&(this['parentStackingContext']=getClosestStackingContext(d[p(0x1a4)])[p(0x1c1)]);if(this['parentStackingContext']==c[p(0x1cd)]['designerCanvas']['rootDesignItem']['element'][p(0x1ac)]||this['parentStackingContext']==c['instanceServiceContainer'][p(0x1d6)]['rootDesignItem']['element'][p(0x1ac)]['parentElement'])this[p(0x1ba)]=null,this['parentStackingContext']=null;else this[p(0x1ba)]=generateSelector(this[p(0x1c8)]);}}else this['computedStyle']={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this[p(0x1c5)]=![],this['selectedElementOffsetParent']=null,this['selectedElementOffsetParentText']=null,this['parentStackingContext']=null,this[p(0x1ba)]=null;this['_bindingsRefresh']();});}}function a(){const q=['675478bKAjDI','parentNode','ownerDocument','4608396abAame','nodeType','paint','inline-flex','setSelectedElements','2199654ENOiEz','parentElement','mixBlendMode:\x20','update','translate','getComputedStyle','backdropFilter','scale','_parseAttributesToProperties','2288022ebsuXn','display','style','node-projects-debug-view','willChange','selectionService','parentStackingContextText','_ready','rotate:\x20',';\x20z-index:\x20','normal','1201571TxVkPm','2SCEqEz','node','130FtdJho','computedStyle','auto','createsStackingContext','selectedElementOffsetParent','getAttribute','parentStackingContext','clipPath','mixBlendMode','opacity:\x20','class','instanceServiceContainer','position','isolation','HTML','perspective','contain:\x20','6pVMibl','clip-path:\x20','toLowerCase','designerCanvas','rotate','#document-fragment','layout','_clickLink','zIndex','none','webkitMaskBorder','mask','5498505hbYNHE','selectedElementOffsetParentText','nodeName','createsStackingContextReason','flex-item;\x20z-index:\x20','offsetParent','translate:\x20','child\x20of\x20grid\x20container;\x20z-index:\x20','split','transform','6165168tRPlrR','filter','content','4rjoLcw'];a=function(){return q;};return a();}customElements['define'](m(0x1b7),DebugView);