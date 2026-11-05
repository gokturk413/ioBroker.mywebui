const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1cb))/0x1+-parseInt(j(0x19e))/0x2*(-parseInt(j(0x1a3))/0x3)+-parseInt(j(0x1a4))/0x4+parseInt(j(0x1d0))/0x5+parseInt(j(0x1d7))/0x6*(parseInt(j(0x1c0))/0x7)+-parseInt(j(0x1cc))/0x8+-parseInt(j(0x19a))/0x9*(parseInt(j(0x192))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa951d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1a8)][k(0x1d6)]();if(c['id'])d='#'+c[k(0x1aa)]('id');else c['getAttribute']('class')&&(d='.'+c[k(0x1aa)](k(0x1c8))[k(0x1d5)]('\x20')['join']('.'));return d?e+d:e;}function a(){const s=['not\x20a\x20stacking\x20context','contain','designerCanvas','843265owtTQs','filter:\x20','rootDesignItem','_clickLink','position','split','toLowerCase','73542NtsgNU','none','opacity','update','root','instanceServiceContainer','parentNode','translate','2589710MWgewL','#document-fragment','backdropFilter:\x20','documentElement','willChange:\x20','_ready','zIndex','filter','9GUYHyI','#document','translate:\x20','mask-image:\x20','637660WAQflA','computedStyle','offsetParent','layout','backdropFilter','3OQpuap','743680sawiae','template','paint','createsStackingContextReason','nodeName','HTML','getAttribute','grid','element','getComputedStyle','ownerDocument','perspective','defaultView','maskImage','parentStackingContext','willChange','mixBlendMode:\x20','setSelectedElements','clip-path:\x20','_restoreCachedInititalValues','strict','rotate:\x20','webkitMask','selectedElementOffsetParentText','createsStackingContext','GetDesignItem','define','content','329vVHZkK','_parseAttributesToProperties','display','child\x20of\x20grid\x20container;\x20z-index:\x20','selectedElementOffsetParent','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','parentStackingContextText','rotate','class','transform:\x20','indexOf','610638lSUswU','4286208mCzfTD'];a=function(){return s;};return a();}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']===l(0x1a9)||c[l(0x1a8)]===l(0x19b))return{'node':document[l(0x195)],'reason':l(0x1db)};if(c['nodeName']===l(0x193))return getClosestStackingContext(c['host']);const d=c[l(0x1ae)][l(0x1b0)]['getComputedStyle'](c);if(d['position']==='fixed'||d[l(0x1d4)]==='sticky')return{'node':c,'reason':'position:\x20'+d[l(0x1d4)]};if(d[l(0x198)]!=='auto'&&d[l(0x1d4)]!=='static')return{'node':c,'reason':'position:\x20'+d[l(0x1d4)]+';\x20z-index:\x20'+d[l(0x198)]};if(d[l(0x1d9)]!=='1')return{'node':c,'reason':'opacity:\x20'+d['opacity']};if(d['transform']!==l(0x1d8))return{'node':c,'reason':l(0x1c9)+d['transform']};if(d['scale']!==l(0x1d8))return{'node':c,'reason':'scale:\x20'+d['scale']};if(d[l(0x1de)]!=='none')return{'node':c,'reason':l(0x19c)+d[l(0x1de)]};if(d['rotate']!==l(0x1d8))return{'node':c,'reason':l(0x1b9)+d[l(0x1c7)]};if(d['mixBlendMode']!=='normal')return{'node':c,'reason':l(0x1b4)+d['mixBlendMode']};if(d[l(0x199)]!==l(0x1d8))return{'node':c,'reason':l(0x1d1)+d[l(0x199)]};if(d['backdropFilter']!==l(0x1d8))return{'node':c,'reason':l(0x194)+d[l(0x1a2)]};if(d[l(0x1af)]!=='none')return{'node':c,'reason':'perspective:\x20'+d[l(0x1af)]};if(d['clipPath']!=='none')return{'node':c,'reason':l(0x1b6)+d['clipPath']+'\x20'};const e=d['mask']||d[l(0x1ba)];if(e!==l(0x1d8)&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0x1b1)]||d['webkitMaskImage'];if(f!==l(0x1d8)&&f!==undefined)return{'node':c,'reason':l(0x19d)+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!==l(0x1d8)&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d['isolation']==='isolate')return{'node':c,'reason':'isolation:\x20'+d['isolation']};if(d['willChange']==='transform'||d[l(0x1b3)]==='opacity'||d[l(0x1b3)]==='scale'||d['willChange']==='translate'||d[l(0x1b3)]===l(0x1c7))return{'node':c,'reason':l(0x196)+d['willChange']};if(d['zIndex']!=='auto'){const i=c[l(0x1ae)]['defaultView'][l(0x1ad)](c['parentNode']);if(i['display']==='flex'||i[l(0x1c2)]==='inline-flex')return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d[l(0x198)]};else{if(i[l(0x1ab)]!==l(0x1c5))return{'node':c,'reason':l(0x1c3)+d[l(0x198)]};}}const h=d[l(0x1ce)];if([l(0x1a1),l(0x1a6),l(0x1b8),l(0x1bf)]['indexOf'](h)>-0x1||h[l(0x1ca)](l(0x1a6))>-0x1||h['indexOf'](l(0x1a1))>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0x1a5)]=html`
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
      }`;[m(0x197)];[m(0x19f)];[m(0x1bc)]='';[m(0x1a7)]='';[m(0x1b2)];[m(0x1c6)];[m(0x1c4)];[m(0x1bb)];constructor(){const n=m;super(),this[n(0x1b7)]();}['ready'](){const o=m;this[o(0x1c1)](),this['_bindingsParse'](),this['_ready']=!![];}[m(0x1d3)](c,d){const p=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem[p(0x1bd)](this['selectedElementOffsetParent']);f[p(0x1dc)]['selectionService'][p(0x1b5)]([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem['GetDesignItem'](this['parentStackingContext']);g[p(0x1dc)]['selectionService'][p(0x1b5)]([g]);}}}}[m(0x1da)](c){const q=m;this[q(0x197)]&&requestAnimationFrame(()=>{const r=q;let d=c?.[r(0x1ac)];if(d?.['nodeType']==0x3)d=d[r(0x1dd)];if(d&&d['nodeType']!=0x8&&d['nodeType']!=0xb){this['computedStyle']=d['ownerDocument']['defaultView']['getComputedStyle'](d),this['selectedElementOffsetParent']=d['offsetParent'];if(this['selectedElementOffsetParent']==c[r(0x1dc)]['designerCanvas'][r(0x1d2)][r(0x1ac)]||this[r(0x1c4)]==c[r(0x1dc)]['designerCanvas']['rootDesignItem']['element']['parentElement'])this[r(0x1bb)]=null,this[r(0x1c4)]=null;else this['selectedElementOffsetParentText']=generateSelector(d[r(0x1a0)]);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e['node'],this[r(0x1a7)]=this['createsStackingContext']?e['reason']:r(0x1cd),this['parentStackingContext']=e['node'];this['createsStackingContext']&&d['nodeName']!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d[r(0x1dd)])['node']);if(this['parentStackingContext']==c['instanceServiceContainer'][r(0x1cf)]['rootDesignItem']['element']['parentElement']||this[r(0x1b2)]==c[r(0x1dc)]['designerCanvas'][r(0x1d2)][r(0x1ac)]['parentElement']['parentElement'])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this[r(0x1c6)]=generateSelector(this[r(0x1b2)]);}}else this[r(0x19f)]={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this[r(0x1bc)]=![],this[r(0x1c4)]=null,this['selectedElementOffsetParentText']=null,this['parentStackingContext']=null,this[r(0x1c6)]=null;this['_bindingsRefresh']();});}}function b(c,d){c=c-0x192;const e=a();let f=e[c];return f;}customElements[m(0x1be)]('node-projects-debug-view',DebugView);