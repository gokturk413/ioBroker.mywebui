const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x176))/0x1*(-parseInt(j(0x155))/0x2)+-parseInt(j(0x17f))/0x3*(parseInt(j(0x157))/0x4)+parseInt(j(0x18b))/0x5+-parseInt(j(0x180))/0x6+parseInt(j(0x159))/0x7*(-parseInt(j(0x158))/0x8)+-parseInt(j(0x13c))/0x9+parseInt(j(0x146))/0xa*(parseInt(j(0x179))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x29bbf));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x139;const e=a();let f=e[c];return f;}import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x14e)]['toLowerCase']();if(c['id'])d='#'+c[k(0x139)]('id');else c[k(0x139)]('class')&&(d='.'+c[k(0x139)]('class')['split']('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x14e)]===l(0x166)||c['nodeName']===l(0x153))return{'node':document[l(0x15a)],'reason':l(0x177)};if(c['nodeName']==='#document-fragment')return getClosestStackingContext(c['host']);const d=c['ownerDocument']['defaultView'][l(0x17e)](c);if(d[l(0x183)]===l(0x171)||d[l(0x183)]==='sticky')return{'node':c,'reason':'position:\x20'+d[l(0x183)]};if(d[l(0x164)]!==l(0x16b)&&d['position']!=='static')return{'node':c,'reason':'position:\x20'+d[l(0x183)]+l(0x143)+d[l(0x164)]};if(d[l(0x145)]!=='1')return{'node':c,'reason':l(0x14a)+d['opacity']};if(d['transform']!=='none')return{'node':c,'reason':'transform:\x20'+d[l(0x17a)]};if(d[l(0x173)]!==l(0x14f))return{'node':c,'reason':l(0x147)+d[l(0x173)]};if(d['translate']!=='none')return{'node':c,'reason':l(0x167)+d[l(0x15f)]};if(d[l(0x163)]!=='none')return{'node':c,'reason':l(0x14b)+d[l(0x163)]};if(d[l(0x178)]!==l(0x187))return{'node':c,'reason':l(0x16c)+d[l(0x178)]};if(d[l(0x181)]!==l(0x14f))return{'node':c,'reason':'filter:\x20'+d[l(0x181)]};if(d[l(0x151)]!=='none')return{'node':c,'reason':'backdropFilter:\x20'+d['backdropFilter']};if(d[l(0x168)]!==l(0x14f))return{'node':c,'reason':'perspective:\x20'+d['perspective']};if(d[l(0x15b)]!=='none')return{'node':c,'reason':l(0x15c)+d[l(0x15b)]+'\x20'};const e=d['mask']||d[l(0x13f)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d['maskImage']||d[l(0x14d)];if(f!==l(0x14f)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!==l(0x14f)&&g!==undefined)return{'node':c,'reason':l(0x184)+g};if(d['isolation']==='isolate')return{'node':c,'reason':'isolation:\x20'+d['isolation']};if(d[l(0x152)]==='transform'||d['willChange']===l(0x145)||d[l(0x152)]===l(0x173)||d[l(0x152)]==='translate'||d[l(0x152)]===l(0x163))return{'node':c,'reason':l(0x15e)+d['willChange']};if(d['zIndex']!=='auto'){const i=c['ownerDocument'][l(0x17d)]['getComputedStyle'](c[l(0x14c)]);if(i[l(0x17b)]===l(0x169)||i['display']==='inline-flex')return{'node':c,'reason':l(0x144)+d['zIndex']};else{if(i[l(0x140)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x186)+d['zIndex']};}}const h=d['contain'];if([l(0x160),'paint','strict',l(0x18a)][l(0x16e)](h)>-0x1||h['indexOf']('paint')>-0x1||h['indexOf'](l(0x160))>-0x1)return{'node':c,'reason':l(0x156)+h};return getClosestStackingContext(c[l(0x14c)]);};function a(){const q=['parentStackingContext','getAttribute','not\x20a\x20stacking\x20context','define','2946780seJFho','createsStackingContext','ready','webkitMask','grid','ownerDocument','rootDesignItem',';\x20z-index:\x20','flex-item;\x20z-index:\x20','opacity','1127790EITEoe','scale:\x20','node','GetDesignItem','opacity:\x20','rotate:\x20','parentNode','webkitMaskImage','nodeName','none','_clickLink','backdropFilter','willChange','#document','parentStackingContextText','162ZsApmE','contain:\x20','248884VPhLte','37096SQDyEq','203sycCOq','documentElement','clipPath','clip-path:\x20','setSelectedElements','willChange:\x20','translate','layout','stackingContextParent','element','rotate','zIndex','selectionService','HTML','translate:\x20','perspective','flex','computedStyle','auto','mixBlendMode:\x20','reason','indexOf','designerCanvas','update','fixed','_parseAttributesToProperties','scale','selectedElementOffsetParentText','nodeType','1436TWCAYj','root','mixBlendMode','55ThHZDj','transform','display','parentElement','defaultView','getComputedStyle','3seVeNL','327018jWQaPg','filter','selectedElementOffsetParent','position','mask-border:\x20','instanceServiceContainer','child\x20of\x20grid\x20container;\x20z-index:\x20','normal','node-projects-debug-view','createsStackingContextReason','content','346745EDTHeM'];a=function(){return q;};return a();}export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;['_ready'];['computedStyle'];[m(0x13d)]='';[m(0x189)]='';[m(0x18c)];['parentStackingContextText'];['selectedElementOffsetParent'];[m(0x174)];constructor(){super(),this['_restoreCachedInititalValues']();}[m(0x13e)](){const n=m;this[n(0x172)](),this['_bindingsParse'](),this['_ready']=!![];}[m(0x150)](c,d){const o=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem[o(0x149)](this['selectedElementOffsetParent']);f[o(0x185)][o(0x165)][o(0x15d)]([f]);}}else{if(d==o(0x161)){if(this[o(0x18c)]){let g=DesignItem[o(0x149)](this[o(0x18c)]);g[o(0x185)][o(0x165)]['setSelectedElements']([g]);}}}}[m(0x170)](c){this['_ready']&&requestAnimationFrame(()=>{const p=b;let d=c?.['element'];if(d?.[p(0x175)]==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d[p(0x175)]!=0xb){this['computedStyle']=d[p(0x141)]['defaultView'][p(0x17e)](d),this['selectedElementOffsetParent']=d['offsetParent'];if(this['selectedElementOffsetParent']==c['instanceServiceContainer']['designerCanvas']['rootDesignItem']['element']||this['selectedElementOffsetParent']==c[p(0x185)][p(0x16f)]['rootDesignItem'][p(0x162)][p(0x17c)])this[p(0x174)]=null,this[p(0x182)]=null;else this['selectedElementOffsetParentText']=generateSelector(d['offsetParent']);if(d&&d[p(0x175)]===0x1){const e=getClosestStackingContext(d);this[p(0x13d)]=d===e[p(0x148)],this[p(0x189)]=this['createsStackingContext']?e[p(0x16d)]:p(0x13a),this['parentStackingContext']=e[p(0x148)];this['createsStackingContext']&&d[p(0x14e)]!=='HTML'&&(this[p(0x18c)]=getClosestStackingContext(d['parentNode'])[p(0x148)]);if(this['parentStackingContext']==c['instanceServiceContainer']['designerCanvas'][p(0x142)]['element']['parentElement']||this[p(0x18c)]==c['instanceServiceContainer']['designerCanvas'][p(0x142)]['element'][p(0x17c)]['parentElement'])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this['parentStackingContextText']=generateSelector(this[p(0x18c)]);}}else this[p(0x16a)]={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this['selectedElementOffsetParent']=null,this[p(0x174)]=null,this['parentStackingContext']=null,this[p(0x154)]=null;this['_bindingsRefresh']();});}}customElements[m(0x13b)](m(0x188),DebugView);