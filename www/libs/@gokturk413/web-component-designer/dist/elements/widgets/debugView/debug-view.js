const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x15b))/0x1*(-parseInt(j(0x156))/0x2)+-parseInt(j(0x194))/0x3*(-parseInt(j(0x16a))/0x4)+-parseInt(j(0x151))/0x5*(-parseInt(j(0x15d))/0x6)+parseInt(j(0x17b))/0x7+-parseInt(j(0x189))/0x8*(parseInt(j(0x184))/0x9)+parseInt(j(0x178))/0xa*(-parseInt(j(0x15c))/0xb)+parseInt(j(0x17a))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x25b25));function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName']['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c['getAttribute'](k(0x161))&&(d='.'+c[k(0x19f)]('class')[k(0x18f)]('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x182)]==='HTML'||c['nodeName']===l(0x179))return{'node':document[l(0x167)],'reason':l(0x176)};if(c[l(0x182)]===l(0x19a))return getClosestStackingContext(c['host']);const d=c['ownerDocument']['defaultView']['getComputedStyle'](c);if(d['position']==='fixed'||d['position']===l(0x19b))return{'node':c,'reason':'position:\x20'+d[l(0x196)]};if(d['zIndex']!==l(0x192)&&d['position']!=='static')return{'node':c,'reason':l(0x157)+d['position']+';\x20z-index:\x20'+d['zIndex']};if(d[l(0x171)]!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0x171)]};if(d[l(0x160)]!==l(0x15e))return{'node':c,'reason':l(0x191)+d['transform']};if(d[l(0x17c)]!==l(0x15e))return{'node':c,'reason':l(0x16b)+d[l(0x17c)]};if(d['translate']!=='none')return{'node':c,'reason':'translate:\x20'+d['translate']};if(d[l(0x15f)]!==l(0x15e))return{'node':c,'reason':'rotate:\x20'+d[l(0x15f)]};if(d[l(0x19d)]!=='normal')return{'node':c,'reason':l(0x181)+d[l(0x19d)]};if(d[l(0x172)]!==l(0x15e))return{'node':c,'reason':l(0x168)+d['filter']};if(d['backdropFilter']!=='none')return{'node':c,'reason':l(0x162)+d['backdropFilter']};if(d[l(0x155)]!==l(0x15e))return{'node':c,'reason':l(0x17e)+d[l(0x155)]};if(d[l(0x164)]!==l(0x15e))return{'node':c,'reason':l(0x17f)+d[l(0x164)]+'\x20'};const e=d[l(0x169)]||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0x163)]||d[l(0x16e)];if(f!=='none'&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!==l(0x15e)&&g!==undefined)return{'node':c,'reason':l(0x180)+g};if(d['isolation']==='isolate')return{'node':c,'reason':'isolation:\x20'+d['isolation']};if(d['willChange']===l(0x160)||d[l(0x199)]==='opacity'||d[l(0x199)]===l(0x17c)||d['willChange']==='translate'||d['willChange']==='rotate')return{'node':c,'reason':'willChange:\x20'+d['willChange']};if(d[l(0x174)]!==l(0x192)){const i=c['ownerDocument'][l(0x186)][l(0x16f)](c['parentNode']);if(i['display']==='flex'||i[l(0x165)]==='inline-flex')return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d['zIndex']};else{if(i['grid']!==l(0x195))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d[l(0x174)]};}}const h=d[l(0x166)];if([l(0x18a),l(0x18d),'strict',l(0x190)]['indexOf'](h)>-0x1||h['indexOf']('paint')>-0x1||h['indexOf'](l(0x18a))>-0x1)return{'node':c,'reason':l(0x16c)+h};return getClosestStackingContext(c[l(0x158)]);};function a(){const s=['computedStyle','9zmATKs','_ready','defaultView','selectedElementOffsetParentText','designerCanvas','11192touiYS','layout','parentStackingContextText','not\x20a\x20stacking\x20context','paint','nodeType','split','content','transform:\x20','auto','GetDesignItem','112461jkEYah','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','position','_restoreCachedInititalValues','selectedElementOffsetParent','willChange','#document-fragment','sticky','stackingContextParent','mixBlendMode','node','getAttribute','15qAtLJD','parentStackingContext','element','reason','perspective','112962ycbGJz','position:\x20','parentNode','createsStackingContextReason','rootDesignItem','3EEyITN','2035QLqSAT','86514IOhiOl','none','rotate','transform','class','backdropFilter:\x20','maskImage','clipPath','display','contain','documentElement','filter:\x20','mask','4RGBGRx','scale:\x20','contain:\x20','offsetParent','webkitMaskImage','getComputedStyle','instanceServiceContainer','opacity','filter','createsStackingContext','zIndex','selectionService','root','_parseAttributesToProperties','8810kFlWPS','#document','3732768iVrzBM','674968msAriK','scale','parentElement','perspective:\x20','clip-path:\x20','mask-border:\x20','mixBlendMode:\x20','nodeName'];a=function(){return s;};return a();}export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;['_ready'];['computedStyle'];['createsStackingContext']='';[m(0x159)]='';['parentStackingContext'];[m(0x18b)];['selectedElementOffsetParent'];[m(0x187)];constructor(){const n=m;super(),this[n(0x197)]();}['ready'](){const o=m;this[o(0x177)](),this['_bindingsParse'](),this[o(0x185)]=!![];}['_clickLink'](c,d){const p=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem[p(0x193)](this[p(0x198)]);f[p(0x170)][p(0x175)]['setSelectedElements']([f]);}}else{if(d==p(0x19c)){if(this['parentStackingContext']){let g=DesignItem['GetDesignItem'](this['parentStackingContext']);g['instanceServiceContainer'][p(0x175)]['setSelectedElements']([g]);}}}}['update'](c){const q=m;this[q(0x185)]&&requestAnimationFrame(()=>{const r=q;let d=c?.[r(0x153)];if(d?.[r(0x18e)]==0x3)d=d[r(0x158)];if(d&&d['nodeType']!=0x8&&d[r(0x18e)]!=0xb){this[r(0x183)]=d['ownerDocument'][r(0x186)][r(0x16f)](d),this[r(0x198)]=d[r(0x16d)];if(this[r(0x198)]==c['instanceServiceContainer'][r(0x188)]['rootDesignItem']['element']||this['selectedElementOffsetParent']==c[r(0x170)][r(0x188)][r(0x15a)]['element'][r(0x17d)])this['selectedElementOffsetParentText']=null,this['selectedElementOffsetParent']=null;else this['selectedElementOffsetParentText']=generateSelector(d[r(0x16d)]);if(d&&d[r(0x18e)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e[r(0x19e)],this['createsStackingContextReason']=this['createsStackingContext']?e[r(0x154)]:r(0x18c),this[r(0x152)]=e[r(0x19e)];this['createsStackingContext']&&d[r(0x182)]!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])['node']);if(this['parentStackingContext']==c[r(0x170)][r(0x188)][r(0x15a)]['element']['parentElement']||this[r(0x152)]==c[r(0x170)]['designerCanvas']['rootDesignItem'][r(0x153)]['parentElement']['parentElement'])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this[r(0x18b)]=generateSelector(this[r(0x152)]);}}else this[r(0x183)]={},this[r(0x173)]=![],this[r(0x159)]='',this[r(0x173)]=![],this['selectedElementOffsetParent']=null,this[r(0x187)]=null,this[r(0x152)]=null,this[r(0x18b)]=null;this['_bindingsRefresh']();});}}customElements['define']('node-projects-debug-view',DebugView);