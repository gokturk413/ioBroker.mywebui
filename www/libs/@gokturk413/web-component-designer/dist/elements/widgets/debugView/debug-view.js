const m=b;function a(){const s=['designerCanvas','root','fixed','paint','offsetParent','maskBorder','backdropFilter','393784AELEvb','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','element','4490YPpHoc','translate:\x20','auto','mask','opacity','webkitMaskImage','23111oLzJoE','30364uTCyIJ','3966474IUunya','class','mask-image:\x20','nodeName','selectedElementOffsetParent','isolation:\x20','defaultView','node','nodeType','78780OFCIHv','_restoreCachedInititalValues','webkitMaskBorder','node-projects-debug-view','scale:\x20','perspective','update','ownerDocument','transform','#document-fragment','mixBlendMode','backdropFilter:\x20','computedStyle','parentStackingContextText','117hoNJgB','mixBlendMode:\x20','createsStackingContext','_ready','selectedElementOffsetParentText','rotate','rootDesignItem','clipPath','6604605sgRBOJ','maskImage','5820591XgkLYj','content','clip-path:\x20','template','mask-border:\x20','101ijPWCr','child\x20of\x20grid\x20container;\x20z-index:\x20','parentNode','instanceServiceContainer','define','getAttribute','parentStackingContext','none','translate','flex-item;\x20z-index:\x20','layout','webkitMask','position','HTML','willChange','GetDesignItem','zIndex','contain:\x20','transform:\x20','264tTdgBm','static','isolation','opacity:\x20','scale','filter','not\x20a\x20stacking\x20context'];a=function(){return s;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x165))/0x1*(-parseInt(j(0x190))/0x2)+-parseInt(j(0x178))/0x3*(parseInt(j(0x19a))/0x4)+parseInt(j(0x15e))/0x5+-parseInt(j(0x191))/0x6+parseInt(j(0x160))/0x7+-parseInt(j(0x186))/0x8*(-parseInt(j(0x1a8))/0x9)+parseInt(j(0x189))/0xa*(-parseInt(j(0x18f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf13df));function b(c,d){c=c-0x158;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x194)]['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x16a)](k(0x192))&&(d='.'+c[k(0x16a)]('class')['split']('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']===l(0x172)||c[l(0x194)]==='#document')return{'node':document['documentElement'],'reason':l(0x180)};if(c['nodeName']===l(0x1a3))return getClosestStackingContext(c['host']);const d=c[l(0x1a1)]['defaultView']['getComputedStyle'](c);if(d['position']===l(0x181)||d[l(0x171)]==='sticky')return{'node':c,'reason':'position:\x20'+d[l(0x171)]};if(d[l(0x175)]!=='auto'&&d['position']!==l(0x179))return{'node':c,'reason':'position:\x20'+d[l(0x171)]+';\x20z-index:\x20'+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':l(0x17b)+d[l(0x18d)]};if(d['transform']!=='none')return{'node':c,'reason':l(0x177)+d['transform']};if(d[l(0x17c)]!==l(0x16c))return{'node':c,'reason':l(0x19e)+d['scale']};if(d[l(0x16d)]!=='none')return{'node':c,'reason':l(0x18a)+d['translate']};if(d[l(0x15b)]!=='none')return{'node':c,'reason':'rotate:\x20'+d[l(0x15b)]};if(d[l(0x1a4)]!=='normal')return{'node':c,'reason':l(0x1a9)+d[l(0x1a4)]};if(d['filter']!=='none')return{'node':c,'reason':'filter:\x20'+d[l(0x17d)]};if(d['backdropFilter']!=='none')return{'node':c,'reason':l(0x1a5)+d[l(0x185)]};if(d[l(0x19f)]!=='none')return{'node':c,'reason':'perspective:\x20'+d['perspective']};if(d[l(0x15d)]!==l(0x16c))return{'node':c,'reason':l(0x162)+d['clipPath']+'\x20'};const e=d[l(0x18c)]||d[l(0x170)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0x15f)]||d[l(0x18e)];if(f!=='none'&&f!==undefined)return{'node':c,'reason':l(0x193)+f};const g=d[l(0x184)]||d[l(0x19c)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':l(0x164)+g};if(d[l(0x17a)]==='isolate')return{'node':c,'reason':l(0x196)+d[l(0x17a)]};if(d[l(0x173)]===l(0x1a2)||d[l(0x173)]===l(0x18d)||d[l(0x173)]==='scale'||d[l(0x173)]===l(0x16d)||d['willChange']===l(0x15b))return{'node':c,'reason':'willChange:\x20'+d[l(0x173)]};if(d[l(0x175)]!==l(0x18b)){const i=c['ownerDocument']['defaultView']['getComputedStyle'](c[l(0x167)]);if(i['display']==='flex'||i['display']==='inline-flex')return{'node':c,'reason':l(0x16e)+d['zIndex']};else{if(i['grid']!==l(0x187))return{'node':c,'reason':l(0x166)+d['zIndex']};}}const h=d['contain'];if(['layout',l(0x182),'strict',l(0x161)]['indexOf'](h)>-0x1||h['indexOf'](l(0x182))>-0x1||h['indexOf'](l(0x16f))>-0x1)return{'node':c,'reason':l(0x176)+h};return getClosestStackingContext(c[l(0x167)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0x163)]=html`
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
      }`;[m(0x159)];['computedStyle'];[m(0x158)]='';['createsStackingContextReason']='';[m(0x16b)];[m(0x1a7)];[m(0x195)];['selectedElementOffsetParentText'];constructor(){const n=m;super(),this[n(0x19b)]();}['ready'](){const o=m;this['_parseAttributesToProperties'](),this['_bindingsParse'](),this[o(0x159)]=!![];}['_clickLink'](c,d){const p=m;if(d==p(0x183)){if(this[p(0x195)]){let f=DesignItem[p(0x174)](this['selectedElementOffsetParent']);f['instanceServiceContainer']['selectionService']['setSelectedElements']([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem[p(0x174)](this['parentStackingContext']);g['instanceServiceContainer']['selectionService']['setSelectedElements']([g]);}}}}[m(0x1a0)](c){const q=m;this[q(0x159)]&&requestAnimationFrame(()=>{const r=q;let d=c?.['element'];if(d?.[r(0x199)]==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d[r(0x199)]!=0xb){this[r(0x1a6)]=d['ownerDocument'][r(0x197)]['getComputedStyle'](d),this[r(0x195)]=d[r(0x183)];if(this['selectedElementOffsetParent']==c[r(0x168)][r(0x17f)][r(0x15c)]['element']||this[r(0x195)]==c['instanceServiceContainer']['designerCanvas'][r(0x15c)][r(0x188)]['parentElement'])this[r(0x15a)]=null,this[r(0x195)]=null;else this['selectedElementOffsetParentText']=generateSelector(d[r(0x183)]);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e['node'],this['createsStackingContextReason']=this[r(0x158)]?e['reason']:r(0x17e),this['parentStackingContext']=e['node'];this[r(0x158)]&&d[r(0x194)]!==r(0x172)&&(this[r(0x16b)]=getClosestStackingContext(d[r(0x167)])[r(0x198)]);if(this[r(0x16b)]==c[r(0x168)][r(0x17f)][r(0x15c)]['element']['parentElement']||this['parentStackingContext']==c[r(0x168)]['designerCanvas'][r(0x15c)][r(0x188)]['parentElement']['parentElement'])this[r(0x1a7)]=null,this['parentStackingContext']=null;else this['parentStackingContextText']=generateSelector(this[r(0x16b)]);}}else this[r(0x1a6)]={},this[r(0x158)]=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this['selectedElementOffsetParent']=null,this[r(0x15a)]=null,this['parentStackingContext']=null,this[r(0x1a7)]=null;this['_bindingsRefresh']();});}}customElements[m(0x169)](m(0x19d),DebugView);