const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x174))/0x1*(parseInt(j(0x172))/0x2)+parseInt(j(0x141))/0x3+parseInt(j(0x164))/0x4*(parseInt(j(0x151))/0x5)+parseInt(j(0x165))/0x6+parseInt(j(0x153))/0x7*(parseInt(j(0x156))/0x8)+-parseInt(j(0x14c))/0x9*(parseInt(j(0x155))/0xa)+-parseInt(j(0x163))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7c654));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName']['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x13e)](k(0x140))&&(d='.'+c['getAttribute']('class')['split']('\x20')[k(0x14b)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c['nodeName']===l(0x175))return{'node':document[l(0x149)],'reason':'root'};if(c[l(0x169)]===l(0x166))return getClosestStackingContext(c['host']);const d=c[l(0x160)][l(0x159)]['getComputedStyle'](c);if(d['position']==='fixed'||d[l(0x13f)]===l(0x15b))return{'node':c,'reason':'position:\x20'+d[l(0x13f)]};if(d[l(0x150)]!==l(0x183)&&d['position']!==l(0x16d))return{'node':c,'reason':l(0x161)+d[l(0x13f)]+';\x20z-index:\x20'+d[l(0x150)]};if(d['opacity']!=='1')return{'node':c,'reason':'opacity:\x20'+d['opacity']};if(d[l(0x17d)]!=='none')return{'node':c,'reason':l(0x15e)+d[l(0x17d)]};if(d['scale']!==l(0x15f))return{'node':c,'reason':'scale:\x20'+d[l(0x17b)]};if(d[l(0x139)]!==l(0x15f))return{'node':c,'reason':l(0x15d)+d[l(0x139)]};if(d[l(0x162)]!=='none')return{'node':c,'reason':l(0x17c)+d['rotate']};if(d['mixBlendMode']!=='normal')return{'node':c,'reason':'mixBlendMode:\x20'+d[l(0x154)]};if(d['filter']!==l(0x15f))return{'node':c,'reason':'filter:\x20'+d[l(0x167)]};if(d['backdropFilter']!==l(0x15f))return{'node':c,'reason':'backdropFilter:\x20'+d['backdropFilter']};if(d[l(0x14a)]!==l(0x15f))return{'node':c,'reason':l(0x16f)+d['perspective']};if(d[l(0x179)]!==l(0x15f))return{'node':c,'reason':'clip-path:\x20'+d[l(0x179)]+'\x20'};const e=d[l(0x180)]||d['webkitMask'];if(e!==l(0x15f)&&e!==undefined)return{'node':c,'reason':l(0x138)+e};const f=d[l(0x148)]||d['webkitMaskImage'];if(f!==l(0x15f)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d[l(0x182)];if(g!==l(0x15f)&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d['isolation']===l(0x16e))return{'node':c,'reason':l(0x181)+d[l(0x14d)]};if(d[l(0x157)]==='transform'||d[l(0x157)]==='opacity'||d[l(0x157)]===l(0x17b)||d[l(0x157)]==='translate'||d['willChange']===l(0x162))return{'node':c,'reason':l(0x13b)+d[l(0x157)]};if(d[l(0x150)]!=='auto'){const i=c['ownerDocument']['defaultView'][l(0x16a)](c[l(0x14e)]);if(i['display']==='flex'||i['display']==='inline-flex')return{'node':c,'reason':l(0x13a)+d['zIndex']};else{if(i[l(0x168)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d[l(0x150)]};}}const h=d[l(0x144)];if(['layout',l(0x158),l(0x177),'content'][l(0x145)](h)>-0x1||h['indexOf']('paint')>-0x1||h['indexOf']('layout')>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c[l(0x14e)]);};function a(){const r=['indexOf','GetDesignItem','update','maskImage','documentElement','perspective','join','5463ZAdSvE','isolation','parentNode','parentStackingContextText','zIndex','70475pdfZNt','element','1029749GwGgbW','mixBlendMode','10670rBDkDx','48qWTSRk','willChange','paint','defaultView','node','sticky','_clickLink','translate:\x20','transform:\x20','none','ownerDocument','position:\x20','rotate','8462234KcuVvk','164KAXqgh','4339794RTzfir','#document-fragment','filter','grid','nodeName','getComputedStyle','setSelectedElements','selectedElementOffsetParentText','static','isolate','perspective:\x20','designerCanvas','HTML','30oFxCNo','parentElement','67867OutfZU','#document','instanceServiceContainer','strict','createsStackingContext','clipPath','_restoreCachedInititalValues','scale','rotate:\x20','transform','style','selectedElementOffsetParent','mask','isolation:\x20','webkitMaskBorder','auto','parentStackingContext','_ready','mask:\x20\x20','translate','flex-item;\x20z-index:\x20','willChange:\x20','nodeType','ready','getAttribute','position','class','2281968tspHrd','stackingContextParent','computedStyle','contain'];a=function(){return r;};return a();}function b(c,d){c=c-0x138;const e=a();let f=e[c];return f;}export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    `;static [m(0x17e)]=css`
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
      }`;[m(0x185)];[m(0x143)];['createsStackingContext']='';['createsStackingContextReason']='';[m(0x184)];['parentStackingContextText'];[m(0x17f)];[m(0x16c)];constructor(){const n=m;super(),this[n(0x17a)]();}[m(0x13d)](){const o=m;this['_parseAttributesToProperties'](),this['_bindingsParse'](),this[o(0x185)]=!![];}[m(0x15c)](c,d){const p=m;if(d=='offsetParent'){if(this[p(0x17f)]){let f=DesignItem[p(0x146)](this['selectedElementOffsetParent']);f['instanceServiceContainer']['selectionService'][p(0x16b)]([f]);}}else{if(d==p(0x142)){if(this[p(0x184)]){let g=DesignItem[p(0x146)](this[p(0x184)]);g[p(0x176)]['selectionService']['setSelectedElements']([g]);}}}}[m(0x147)](c){this['_ready']&&requestAnimationFrame(()=>{const q=b;let d=c?.['element'];if(d?.[q(0x13c)]==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d['nodeType']!=0xb){this[q(0x143)]=d[q(0x160)]['defaultView']['getComputedStyle'](d),this[q(0x17f)]=d['offsetParent'];if(this['selectedElementOffsetParent']==c[q(0x176)][q(0x170)]['rootDesignItem'][q(0x152)]||this[q(0x17f)]==c['instanceServiceContainer'][q(0x170)]['rootDesignItem'][q(0x152)]['parentElement'])this[q(0x16c)]=null,this['selectedElementOffsetParent']=null;else this[q(0x16c)]=generateSelector(d['offsetParent']);if(d&&d[q(0x13c)]===0x1){const e=getClosestStackingContext(d);this[q(0x178)]=d===e['node'],this['createsStackingContextReason']=this[q(0x178)]?e['reason']:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e['node'];this[q(0x178)]&&d[q(0x169)]!==q(0x171)&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])[q(0x15a)]);if(this[q(0x184)]==c['instanceServiceContainer'][q(0x170)]['rootDesignItem']['element'][q(0x173)]||this['parentStackingContext']==c[q(0x176)]['designerCanvas']['rootDesignItem']['element']['parentElement'][q(0x173)])this[q(0x14f)]=null,this['parentStackingContext']=null;else this['parentStackingContextText']=generateSelector(this[q(0x184)]);}}else this['computedStyle']={},this[q(0x178)]=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this[q(0x17f)]=null,this[q(0x16c)]=null,this['parentStackingContext']=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}customElements['define']('node-projects-debug-view',DebugView);