const m=b;function b(c,d){c=c-0x115;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x11d))/0x1+parseInt(j(0x13f))/0x2+parseInt(j(0x129))/0x3*(-parseInt(j(0x150))/0x4)+parseInt(j(0x122))/0x5+parseInt(j(0x11b))/0x6+parseInt(j(0x138))/0x7*(parseInt(j(0x161))/0x8)+parseInt(j(0x11c))/0x9*(-parseInt(j(0x12d))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9489c));function a(){const r=['join','nodeName','mixBlendMode','toLowerCase','isolate','computedStyle','_clickLink','scale:\x20','364608QfSPfj','18760806wKsDLm','18797YLUFjn','mask-image:\x20','clipPath','#document-fragment','_ready','5420715MltAOj','rotate','nodeType','willChange','createsStackingContext','selectedElementOffsetParentText','parentStackingContext','3rSSKJO','indexOf','auto','template','10AWUWHu','ownerDocument','parentStackingContextText','display','transform:\x20','static','HTML','opacity','grid','reason','none','7SSDlle','willChange:\x20','paint','isolation','webkitMaskBorder','perspective','element','1995746ZgrHVg','mixBlendMode:\x20','position','child\x20of\x20grid\x20container;\x20z-index:\x20','translate','selectionService','backdropFilter','style','instanceServiceContainer','transform','content','getComputedStyle','isolation:\x20','parentNode','inline-flex','rotate:\x20','designerCanvas','788148pimzkh','_parseAttributesToProperties','clip-path:\x20','parentElement','offsetParent','createsStackingContextReason','selectedElementOffsetParent','rootDesignItem','_bindingsRefresh','filter','define','mask','position:\x20','perspective:\x20','flex-item;\x20z-index:\x20','setSelectedElements','zIndex','5827216SSVUgK','maskImage'];a=function(){return r;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x164)][k(0x116)]();if(c['id'])d='#'+c['getAttribute']('id');else c['getAttribute']('class')&&(d='.'+c['getAttribute']('class')['split']('\x20')[k(0x163)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']===l(0x133)||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':'root'};if(c[l(0x164)]===l(0x120))return getClosestStackingContext(c['host']);const d=c['ownerDocument']['defaultView'][l(0x14a)](c);if(d['position']==='fixed'||d[l(0x141)]==='sticky')return{'node':c,'reason':l(0x15c)+d[l(0x141)]};if(d['zIndex']!==l(0x12b)&&d['position']!==l(0x132))return{'node':c,'reason':'position:\x20'+d['position']+';\x20z-index:\x20'+d[l(0x160)]};if(d[l(0x134)]!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0x134)]};if(d['transform']!==l(0x137))return{'node':c,'reason':l(0x131)+d['transform']};if(d['scale']!==l(0x137))return{'node':c,'reason':l(0x11a)+d['scale']};if(d[l(0x143)]!==l(0x137))return{'node':c,'reason':'translate:\x20'+d[l(0x143)]};if(d['rotate']!==l(0x137))return{'node':c,'reason':l(0x14e)+d[l(0x123)]};if(d[l(0x115)]!=='normal')return{'node':c,'reason':l(0x140)+d[l(0x115)]};if(d[l(0x159)]!=='none')return{'node':c,'reason':'filter:\x20'+d['filter']};if(d['backdropFilter']!==l(0x137))return{'node':c,'reason':'backdropFilter:\x20'+d[l(0x145)]};if(d[l(0x13d)]!==l(0x137))return{'node':c,'reason':l(0x15d)+d['perspective']};if(d[l(0x11f)]!==l(0x137))return{'node':c,'reason':l(0x152)+d['clipPath']+'\x20'};const e=d[l(0x15b)]||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0x162)]||d['webkitMaskImage'];if(f!==l(0x137)&&f!==undefined)return{'node':c,'reason':l(0x11e)+f};const g=d['maskBorder']||d[l(0x13c)];if(g!==l(0x137)&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d['isolation']===l(0x117))return{'node':c,'reason':l(0x14b)+d[l(0x13b)]};if(d[l(0x125)]===l(0x148)||d['willChange']==='opacity'||d[l(0x125)]==='scale'||d[l(0x125)]==='translate'||d[l(0x125)]===l(0x123))return{'node':c,'reason':l(0x139)+d['willChange']};if(d['zIndex']!=='auto'){const i=c[l(0x12e)]['defaultView'][l(0x14a)](c['parentNode']);if(i[l(0x130)]==='flex'||i[l(0x130)]===l(0x14d))return{'node':c,'reason':l(0x15e)+d['zIndex']};else{if(i[l(0x135)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x142)+d['zIndex']};}}const h=d['contain'];if(['layout',l(0x13a),'strict',l(0x149)]['indexOf'](h)>-0x1||h['indexOf'](l(0x13a))>-0x1||h[l(0x12a)]('layout')>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c[l(0x14c)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0x12c)]=html`
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
    `;static [m(0x146)]=css`
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
      }`;[m(0x121)];['computedStyle'];['createsStackingContext']='';[m(0x155)]='';[m(0x128)];[m(0x12f)];['selectedElementOffsetParent'];[m(0x127)];constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const n=m;this[n(0x151)](),this['_bindingsParse'](),this['_ready']=!![];}[m(0x119)](c,d){const o=m;if(d==o(0x154)){if(this['selectedElementOffsetParent']){let f=DesignItem['GetDesignItem'](this[o(0x156)]);f[o(0x147)]['selectionService']['setSelectedElements']([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem['GetDesignItem'](this[o(0x128)]);g[o(0x147)][o(0x144)][o(0x15f)]([g]);}}}}['update'](c){const p=m;this[p(0x121)]&&requestAnimationFrame(()=>{const q=p;let d=c?.['element'];if(d?.[q(0x124)]==0x3)d=d[q(0x14c)];if(d&&d['nodeType']!=0x8&&d['nodeType']!=0xb){this[q(0x118)]=d['ownerDocument']['defaultView'][q(0x14a)](d),this['selectedElementOffsetParent']=d[q(0x154)];if(this[q(0x156)]==c[q(0x147)]['designerCanvas']['rootDesignItem']['element']||this['selectedElementOffsetParent']==c['instanceServiceContainer'][q(0x14f)][q(0x157)][q(0x13e)][q(0x153)])this[q(0x127)]=null,this[q(0x156)]=null;else this[q(0x127)]=generateSelector(d['offsetParent']);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this[q(0x126)]=d===e['node'],this['createsStackingContextReason']=this['createsStackingContext']?e[q(0x136)]:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e['node'];this['createsStackingContext']&&d['nodeName']!==q(0x133)&&(this[q(0x128)]=getClosestStackingContext(d[q(0x14c)])['node']);if(this[q(0x128)]==c['instanceServiceContainer'][q(0x14f)][q(0x157)][q(0x13e)]['parentElement']||this[q(0x128)]==c[q(0x147)][q(0x14f)]['rootDesignItem']['element']['parentElement'][q(0x153)])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this[q(0x12f)]=generateSelector(this['parentStackingContext']);}}else this['computedStyle']={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this[q(0x156)]=null,this['selectedElementOffsetParentText']=null,this['parentStackingContext']=null,this[q(0x12f)]=null;this[q(0x158)]();});}}customElements[m(0x15a)]('node-projects-debug-view',DebugView);