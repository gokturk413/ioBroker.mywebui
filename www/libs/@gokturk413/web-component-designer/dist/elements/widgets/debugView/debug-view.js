function b(c,d){c=c-0x89;const e=a();let f=e[c];return f;}const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xbf))/0x1+-parseInt(j(0xc5))/0x2+-parseInt(j(0xd3))/0x3+-parseInt(j(0x89))/0x4*(parseInt(j(0x92))/0x5)+parseInt(j(0xc4))/0x6+-parseInt(j(0x90))/0x7*(-parseInt(j(0x8b))/0x8)+parseInt(j(0xae))/0x9*(-parseInt(j(0xb4))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaa109));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0xd5)]['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c['getAttribute'](k(0xa8))&&(d='.'+c[k(0x9e)]('class')[k(0xda)]('\x20')[k(0xa5)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':'root'};if(c['nodeName']===l(0xa7))return getClosestStackingContext(c[l(0xa9)]);const d=c[l(0xcd)]['defaultView']['getComputedStyle'](c);if(d[l(0xd8)]===l(0x93)||d['position']==='sticky')return{'node':c,'reason':l(0xd2)+d['position']};if(d['zIndex']!==l(0xde)&&d['position']!=='static')return{'node':c,'reason':l(0xd2)+d[l(0xd8)]+l(0xc6)+d['zIndex']};if(d[l(0xc8)]!=='1')return{'node':c,'reason':'opacity:\x20'+d['opacity']};if(d['transform']!==l(0x96))return{'node':c,'reason':'transform:\x20'+d[l(0xad)]};if(d[l(0xa3)]!==l(0x96))return{'node':c,'reason':l(0xcc)+d['scale']};if(d[l(0xd4)]!==l(0x96))return{'node':c,'reason':'translate:\x20'+d[l(0xd4)]};if(d['rotate']!=='none')return{'node':c,'reason':l(0xb5)+d[l(0x8f)]};if(d['mixBlendMode']!==l(0xdf))return{'node':c,'reason':l(0xb0)+d['mixBlendMode']};if(d['filter']!==l(0x96))return{'node':c,'reason':'filter:\x20'+d[l(0x8a)]};if(d[l(0xce)]!==l(0x96))return{'node':c,'reason':'backdropFilter:\x20'+d['backdropFilter']};if(d[l(0xdd)]!==l(0x96))return{'node':c,'reason':l(0x97)+d['perspective']};if(d['clipPath']!==l(0x96))return{'node':c,'reason':'clip-path:\x20'+d[l(0x91)]+'\x20'};const e=d['mask']||d[l(0x98)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0xb3)]||d['webkitMaskImage'];if(f!==l(0x96)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d[l(0xb7)]||d[l(0x8e)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':l(0xb8)+g};if(d[l(0x95)]==='isolate')return{'node':c,'reason':l(0xd7)+d['isolation']};if(d['willChange']===l(0xad)||d[l(0xb9)]===l(0xc8)||d['willChange']==='scale'||d[l(0xb9)]==='translate'||d[l(0xb9)]===l(0x8f))return{'node':c,'reason':'willChange:\x20'+d['willChange']};if(d[l(0xca)]!=='auto'){const i=c['ownerDocument']['defaultView'][l(0x9b)](c['parentNode']);if(i[l(0xdc)]===l(0xaa)||i[l(0xdc)]===l(0xbe))return{'node':c,'reason':l(0xc0)+d[l(0xca)]};else{if(i[l(0xc9)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0xb6)+d[l(0xca)]};}}const h=d[l(0xa1)];if(['layout',l(0xab),l(0x8c),l(0xbd)][l(0xaf)](h)>-0x1||h[l(0xaf)](l(0xab))>-0x1||h[l(0xaf)]('layout')>-0x1)return{'node':c,'reason':l(0xcf)+h};return getClosestStackingContext(c[l(0xcb)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0xa6)]=html`
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
      }`;['_ready'];['computedStyle'];['createsStackingContext']='';[m(0xa2)]='';[m(0xd9)];['parentStackingContextText'];['selectedElementOffsetParent'];['selectedElementOffsetParentText'];constructor(){const n=m;super(),this[n(0xc3)]();}[m(0x8d)](){const o=m;this['_parseAttributesToProperties'](),this[o(0xc7)](),this['_ready']=!![];}['_clickLink'](c,d){const p=m;if(d=='offsetParent'){if(this[p(0xac)]){let f=DesignItem['GetDesignItem'](this[p(0xac)]);f[p(0xc1)]['selectionService'][p(0x94)]([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem[p(0xb2)](this['parentStackingContext']);g['instanceServiceContainer']['selectionService']['setSelectedElements']([g]);}}}}[m(0x9d)](c){const q=m;this[q(0xdb)]&&requestAnimationFrame(()=>{const r=q;let d=c?.[r(0xd1)];if(d?.['nodeType']==0x3)d=d[r(0xcb)];if(d&&d['nodeType']!=0x8&&d['nodeType']!=0xb){this[r(0x9c)]=d['ownerDocument'][r(0xc2)]['getComputedStyle'](d),this['selectedElementOffsetParent']=d[r(0xa0)];if(this[r(0xac)]==c[r(0xc1)][r(0xbc)]['rootDesignItem']['element']||this[r(0xac)]==c[r(0xc1)][r(0xbc)][r(0xa4)]['element'][r(0xd0)])this[r(0xb1)]=null,this['selectedElementOffsetParent']=null;else this['selectedElementOffsetParentText']=generateSelector(d[r(0xa0)]);if(d&&d[r(0x9a)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e[r(0x9f)],this[r(0xa2)]=this[r(0xd6)]?e[r(0xbb)]:'not\x20a\x20stacking\x20context',this[r(0xd9)]=e[r(0x9f)];this['createsStackingContext']&&d[r(0xd5)]!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])[r(0x9f)]);if(this['parentStackingContext']==c['instanceServiceContainer']['designerCanvas'][r(0xa4)][r(0xd1)][r(0xd0)]||this['parentStackingContext']==c['instanceServiceContainer'][r(0xbc)][r(0xa4)]['element']['parentElement'][r(0xd0)])this[r(0xba)]=null,this['parentStackingContext']=null;else this[r(0xba)]=generateSelector(this['parentStackingContext']);}}else this[r(0x9c)]={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this[r(0xac)]=null,this['selectedElementOffsetParentText']=null,this[r(0xd9)]=null,this[r(0xba)]=null;this[r(0x99)]();});}}function a(){const s=['auto','normal','8mdVWEn','filter','937112apHMsJ','strict','ready','webkitMaskBorder','rotate','77GlgVCO','clipPath','517175ZTudor','fixed','setSelectedElements','isolation','none','perspective:\x20','webkitMask','_bindingsRefresh','nodeType','getComputedStyle','computedStyle','update','getAttribute','node','offsetParent','contain','createsStackingContextReason','scale','rootDesignItem','join','template','#document-fragment','class','host','flex','paint','selectedElementOffsetParent','transform','6213483gBqzda','indexOf','mixBlendMode:\x20','selectedElementOffsetParentText','GetDesignItem','maskImage','10cZDCJq','rotate:\x20','child\x20of\x20grid\x20container;\x20z-index:\x20','maskBorder','mask-border:\x20','willChange','parentStackingContextText','reason','designerCanvas','content','inline-flex','1311280xTpWsg','flex-item;\x20z-index:\x20','instanceServiceContainer','defaultView','_restoreCachedInititalValues','4559814Qrynco','1572640XhVoQu',';\x20z-index:\x20','_bindingsParse','opacity','grid','zIndex','parentNode','scale:\x20','ownerDocument','backdropFilter','contain:\x20','parentElement','element','position:\x20','2938848yTqmfQ','translate','nodeName','createsStackingContext','isolation:\x20','position','parentStackingContext','split','_ready','display','perspective'];a=function(){return s;};return a();}customElements['define']('node-projects-debug-view',DebugView);