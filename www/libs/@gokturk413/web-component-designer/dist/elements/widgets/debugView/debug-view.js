const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x15e))/0x1+parseInt(j(0x166))/0x2+parseInt(j(0x16c))/0x3+parseInt(j(0x144))/0x4+-parseInt(j(0x140))/0x5+-parseInt(j(0x152))/0x6+parseInt(j(0x14f))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2780e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName']['toLowerCase']();if(c['id'])d='#'+c[k(0x167)]('id');else c[k(0x167)](k(0x170))&&(d='.'+c['getAttribute'](k(0x170))['split']('\x20')[k(0x155)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c[l(0x17b)]===l(0x153))return{'node':document[l(0x139)],'reason':'root'};if(c[l(0x17b)]===l(0x17f))return getClosestStackingContext(c['host']);const d=c[l(0x177)]['defaultView']['getComputedStyle'](c);if(d['position']===l(0x142)||d[l(0x172)]==='sticky')return{'node':c,'reason':l(0x15b)+d[l(0x172)]};if(d[l(0x151)]!=='auto'&&d['position']!==l(0x138))return{'node':c,'reason':'position:\x20'+d[l(0x172)]+';\x20z-index:\x20'+d[l(0x151)]};if(d[l(0x14d)]!=='1')return{'node':c,'reason':l(0x16a)+d[l(0x14d)]};if(d[l(0x157)]!=='none')return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!=='none')return{'node':c,'reason':l(0x143)+d['scale']};if(d[l(0x148)]!==l(0x14c))return{'node':c,'reason':'translate:\x20'+d['translate']};if(d['rotate']!==l(0x14c))return{'node':c,'reason':l(0x182)+d[l(0x179)]};if(d['mixBlendMode']!==l(0x17a))return{'node':c,'reason':'mixBlendMode:\x20'+d[l(0x168)]};if(d[l(0x150)]!=='none')return{'node':c,'reason':'filter:\x20'+d[l(0x150)]};if(d['backdropFilter']!=='none')return{'node':c,'reason':'backdropFilter:\x20'+d['backdropFilter']};if(d['perspective']!==l(0x14c))return{'node':c,'reason':'perspective:\x20'+d['perspective']};if(d[l(0x16f)]!=='none')return{'node':c,'reason':l(0x178)+d['clipPath']+'\x20'};const e=d['mask']||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d['maskImage']||d['webkitMaskImage'];if(f!=='none'&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d[l(0x173)];if(g!==l(0x14c)&&g!==undefined)return{'node':c,'reason':l(0x13d)+g};if(d[l(0x146)]===l(0x161))return{'node':c,'reason':l(0x13f)+d[l(0x146)]};if(d[l(0x169)]==='transform'||d['willChange']===l(0x14d)||d[l(0x169)]===l(0x15a)||d[l(0x169)]==='translate'||d[l(0x169)]===l(0x179))return{'node':c,'reason':l(0x181)+d['willChange']};if(d[l(0x151)]!=='auto'){const i=c[l(0x177)][l(0x15d)]['getComputedStyle'](c['parentNode']);if(i['display']==='flex'||i['display']==='inline-flex')return{'node':c,'reason':l(0x164)+d[l(0x151)]};else{if(i[l(0x14e)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x158)+d[l(0x151)]};}}const h=d['contain'];if([l(0x149),l(0x141),l(0x154),'content'][l(0x163)](h)>-0x1||h['indexOf']('paint')>-0x1||h[l(0x163)](l(0x149))>-0x1)return{'node':c,'reason':l(0x17e)+h};return getClosestStackingContext(c[l(0x15f)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    `;static [m(0x15c)]=css`
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
      }`;[m(0x17c)];['computedStyle'];[m(0x162)]='';[m(0x171)]='';['parentStackingContext'];['parentStackingContextText'];['selectedElementOffsetParent'];[m(0x156)];constructor(){const n=m;super(),this[n(0x16b)]();}['ready'](){const o=m;this['_parseAttributesToProperties'](),this[o(0x14a)](),this['_ready']=!![];}[m(0x145)](c,d){const p=m;if(d==p(0x16e)){if(this['selectedElementOffsetParent']){let f=DesignItem[p(0x17d)](this[p(0x175)]);f[p(0x159)][p(0x147)][p(0x14b)]([f]);}}else{if(d=='stackingContextParent'){if(this[p(0x13c)]){let g=DesignItem['GetDesignItem'](this['parentStackingContext']);g['instanceServiceContainer'][p(0x147)]['setSelectedElements']([g]);}}}}[m(0x165)](c){const q=m;this[q(0x17c)]&&requestAnimationFrame(()=>{const r=q;let d=c?.['element'];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d[r(0x13e)]!=0x8&&d[r(0x13e)]!=0xb){this[r(0x160)]=d['ownerDocument']['defaultView']['getComputedStyle'](d),this['selectedElementOffsetParent']=d['offsetParent'];if(this['selectedElementOffsetParent']==c['instanceServiceContainer']['designerCanvas']['rootDesignItem'][r(0x13b)]||this[r(0x175)]==c['instanceServiceContainer'][r(0x180)]['rootDesignItem'][r(0x13b)][r(0x174)])this['selectedElementOffsetParentText']=null,this['selectedElementOffsetParent']=null;else this[r(0x156)]=generateSelector(d[r(0x16e)]);if(d&&d[r(0x13e)]===0x1){const e=getClosestStackingContext(d);this[r(0x162)]=d===e[r(0x176)],this[r(0x171)]=this['createsStackingContext']?e['reason']:r(0x13a),this[r(0x13c)]=e['node'];this[r(0x162)]&&d['nodeName']!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])['node']);if(this['parentStackingContext']==c['instanceServiceContainer'][r(0x180)][r(0x16d)][r(0x13b)][r(0x174)]||this['parentStackingContext']==c[r(0x159)][r(0x180)]['rootDesignItem']['element']['parentElement']['parentElement'])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this['parentStackingContextText']=generateSelector(this['parentStackingContext']);}}else this[r(0x160)]={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this[r(0x162)]=![],this[r(0x175)]=null,this['selectedElementOffsetParentText']=null,this[r(0x13c)]=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}function b(c,d){c=c-0x138;const e=a();let f=e[c];return f;}customElements['define']('node-projects-debug-view',DebugView);function a(){const s=['strict','join','selectedElementOffsetParentText','transform','child\x20of\x20grid\x20container;\x20z-index:\x20','instanceServiceContainer','scale','position:\x20','style','defaultView','259782dxbZIx','parentNode','computedStyle','isolate','createsStackingContext','indexOf','flex-item;\x20z-index:\x20','update','578676UUQlWG','getAttribute','mixBlendMode','willChange','opacity:\x20','_restoreCachedInititalValues','72345vSoLZt','rootDesignItem','offsetParent','clipPath','class','createsStackingContextReason','position','webkitMaskBorder','parentElement','selectedElementOffsetParent','node','ownerDocument','clip-path:\x20','rotate','normal','nodeName','_ready','GetDesignItem','contain:\x20','#document-fragment','designerCanvas','willChange:\x20','rotate:\x20','static','documentElement','not\x20a\x20stacking\x20context','element','parentStackingContext','mask-border:\x20','nodeType','isolation:\x20','837165katKMG','paint','fixed','scale:\x20','1194032mqIaiP','_clickLink','isolation','selectionService','translate','layout','_bindingsParse','setSelectedElements','none','opacity','grid','1545796sdpxbo','filter','zIndex','1462608omGncQ','#document'];a=function(){return s;};return a();}