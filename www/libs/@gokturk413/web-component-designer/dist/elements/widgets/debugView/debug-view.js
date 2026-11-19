const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1fc))/0x1*(-parseInt(j(0x1e1))/0x2)+-parseInt(j(0x1f7))/0x3+-parseInt(j(0x1cf))/0x4*(-parseInt(j(0x1fe))/0x5)+parseInt(j(0x200))/0x6*(parseInt(j(0x1f4))/0x7)+parseInt(j(0x1d5))/0x8*(parseInt(j(0x1da))/0x9)+-parseInt(j(0x1ce))/0xa*(parseInt(j(0x1df))/0xb)+-parseInt(j(0x1c7))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3395f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const r=['host','_bindingsParse','getAttribute','indexOf','nodeType','parentStackingContextText','designerCanvas','parentNode','getComputedStyle','_clickLink','mixBlendMode:\x20','1183427XeZLBD','#document','setSelectedElements','428826UiXEZg','display','inline-flex','parentStackingContext','ready','11394GEmQMt','selectionService','670BIcKkx','createsStackingContext','12tjDRpK','update','position:\x20','rotate:\x20','selectedElementOffsetParentText','reason','_ready','computedStyle','#document-fragment','content','layout','rootDesignItem','zIndex','opacity','nodeName','webkitMaskBorder','mask:\x20\x20','_bindingsRefresh','mask','filter','element','none','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','auto','normal','isolate','7359252jCKILG','clipPath','isolation:\x20','node','selectedElementOffsetParent','backdropFilter','documentElement','150ONTOBG','11848LBqcJD','GetDesignItem','mask-border:\x20','willChange','instanceServiceContainer','willChange:\x20','1816echvfg','ownerDocument','transform:\x20','mixBlendMode','translate','6219ceWBBn','perspective','not\x20a\x20stacking\x20context','defaultView','toLowerCase','186857zTbREZ','isolation','58BiGtCT','strict','grid','webkitMask','position','define','backdropFilter:\x20','scale'];a=function(){return r;};return a();}import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1bb)][k(0x1de)]();if(c['id'])d='#'+c['getAttribute']('id');else c['getAttribute']('class')&&(d='.'+c[k(0x1eb)]('class')['split']('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x1bb)]==='HTML'||c['nodeName']===l(0x1f5))return{'node':document[l(0x1cd)],'reason':'root'};if(c['nodeName']===l(0x208))return getClosestStackingContext(c[l(0x1e9)]);const d=c[l(0x1d6)][l(0x1dd)][l(0x1f1)](c);if(d[l(0x1e5)]==='fixed'||d[l(0x1e5)]==='sticky')return{'node':c,'reason':'position:\x20'+d['position']};if(d[l(0x1b9)]!=='auto'&&d['position']!=='static')return{'node':c,'reason':l(0x202)+d['position']+';\x20z-index:\x20'+d['zIndex']};if(d[l(0x1ba)]!=='1')return{'node':c,'reason':'opacity:\x20'+d['opacity']};if(d['transform']!==l(0x1c2))return{'node':c,'reason':l(0x1d7)+d['transform']};if(d[l(0x1e8)]!=='none')return{'node':c,'reason':'scale:\x20'+d['scale']};if(d[l(0x1d9)]!=='none')return{'node':c,'reason':'translate:\x20'+d['translate']};if(d['rotate']!==l(0x1c2))return{'node':c,'reason':l(0x203)+d['rotate']};if(d['mixBlendMode']!==l(0x1c5))return{'node':c,'reason':l(0x1f3)+d[l(0x1d8)]};if(d[l(0x1c0)]!=='none')return{'node':c,'reason':'filter:\x20'+d[l(0x1c0)]};if(d[l(0x1cc)]!=='none')return{'node':c,'reason':l(0x1e7)+d[l(0x1cc)]};if(d[l(0x1db)]!=='none')return{'node':c,'reason':'perspective:\x20'+d[l(0x1db)]};if(d[l(0x1c8)]!=='none')return{'node':c,'reason':'clip-path:\x20'+d['clipPath']+'\x20'};const e=d[l(0x1bf)]||d[l(0x1e4)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':l(0x1bd)+e};const f=d['maskImage']||d['webkitMaskImage'];if(f!=='none'&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d[l(0x1bc)];if(g!==l(0x1c2)&&g!==undefined)return{'node':c,'reason':l(0x1d1)+g};if(d[l(0x1e0)]===l(0x1c6))return{'node':c,'reason':l(0x1c9)+d[l(0x1e0)]};if(d['willChange']==='transform'||d['willChange']==='opacity'||d[l(0x1d2)]===l(0x1e8)||d[l(0x1d2)]==='translate'||d[l(0x1d2)]==='rotate')return{'node':c,'reason':l(0x1d4)+d['willChange']};if(d[l(0x1b9)]!==l(0x1c4)){const i=c['ownerDocument'][l(0x1dd)][l(0x1f1)](c['parentNode']);if(i['display']==='flex'||i[l(0x1f8)]===l(0x1f9))return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d['zIndex']};else{if(i[l(0x1e3)]!==l(0x1c3))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d[l(0x1b9)]};}}const h=d['contain'];if(['layout','paint',l(0x1e2),l(0x209)][l(0x1ec)](h)>-0x1||h['indexOf']('paint')>-0x1||h['indexOf'](l(0x20a))>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;[m(0x206)];['computedStyle'];[m(0x1ff)]='';['createsStackingContextReason']='';['parentStackingContext'];['parentStackingContextText'];[m(0x1cb)];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}[m(0x1fb)](){const n=m;this['_parseAttributesToProperties'](),this[n(0x1ea)](),this[n(0x206)]=!![];}[m(0x1f2)](c,d){const o=m;if(d=='offsetParent'){if(this[o(0x1cb)]){let f=DesignItem['GetDesignItem'](this['selectedElementOffsetParent']);f[o(0x1d3)][o(0x1fd)][o(0x1f6)]([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem[o(0x1d0)](this['parentStackingContext']);g[o(0x1d3)]['selectionService'][o(0x1f6)]([g]);}}}}[m(0x201)](c){const p=m;this[p(0x206)]&&requestAnimationFrame(()=>{const q=p;let d=c?.[q(0x1c1)];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d[q(0x1ed)]!=0x8&&d[q(0x1ed)]!=0xb){this[q(0x207)]=d['ownerDocument'][q(0x1dd)]['getComputedStyle'](d),this[q(0x1cb)]=d['offsetParent'];if(this[q(0x1cb)]==c['instanceServiceContainer'][q(0x1ef)]['rootDesignItem']['element']||this[q(0x1cb)]==c['instanceServiceContainer'][q(0x1ef)][q(0x20b)][q(0x1c1)]['parentElement'])this['selectedElementOffsetParentText']=null,this[q(0x1cb)]=null;else this[q(0x204)]=generateSelector(d['offsetParent']);if(d&&d[q(0x1ed)]===0x1){const e=getClosestStackingContext(d);this[q(0x1ff)]=d===e['node'],this['createsStackingContextReason']=this['createsStackingContext']?e[q(0x205)]:q(0x1dc),this[q(0x1fa)]=e[q(0x1ca)];this[q(0x1ff)]&&d[q(0x1bb)]!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d[q(0x1f0)])['node']);if(this['parentStackingContext']==c['instanceServiceContainer'][q(0x1ef)][q(0x20b)][q(0x1c1)]['parentElement']||this['parentStackingContext']==c['instanceServiceContainer']['designerCanvas']['rootDesignItem']['element']['parentElement']['parentElement'])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this['parentStackingContextText']=generateSelector(this['parentStackingContext']);}}else this['computedStyle']={},this[q(0x1ff)]=![],this['createsStackingContextReason']='',this[q(0x1ff)]=![],this['selectedElementOffsetParent']=null,this[q(0x204)]=null,this['parentStackingContext']=null,this[q(0x1ee)]=null;this[q(0x1be)]();});}}function b(c,d){c=c-0x1b9;const e=a();let f=e[c];return f;}customElements[m(0x1e6)]('node-projects-debug-view',DebugView);