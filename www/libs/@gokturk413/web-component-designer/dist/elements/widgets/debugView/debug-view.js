const m=b;function b(c,d){c=c-0x8e;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x97))/0x1*(-parseInt(j(0xa8))/0x2)+-parseInt(j(0xaa))/0x3*(-parseInt(j(0x94))/0x4)+parseInt(j(0x90))/0x5*(parseInt(j(0xc1))/0x6)+parseInt(j(0xcc))/0x7*(-parseInt(j(0xd1))/0x8)+parseInt(j(0x9f))/0x9+-parseInt(j(0xa3))/0xa+parseInt(j(0x9c))/0xb*(parseInt(j(0xda))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb01d9));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0xb3)]['toLowerCase']();if(c['id'])d='#'+c[k(0xbf)]('id');else c[k(0xbf)](k(0x95))&&(d='.'+c['getAttribute']('class')[k(0xc9)]('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0xb3)]===l(0xdd)||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':l(0x8f)};if(c[l(0xb3)]==='#document-fragment')return getClosestStackingContext(c['host']);const d=c[l(0xb8)]['defaultView']['getComputedStyle'](c);if(d['position']===l(0xd3)||d[l(0xa7)]===l(0xbe))return{'node':c,'reason':'position:\x20'+d[l(0xa7)]};if(d['zIndex']!==l(0x93)&&d['position']!=='static')return{'node':c,'reason':'position:\x20'+d[l(0xa7)]+l(0xd6)+d['zIndex']};if(d[l(0xbb)]!=='1')return{'node':c,'reason':l(0xd2)+d['opacity']};if(d[l(0xca)]!==l(0xa2))return{'node':c,'reason':l(0xd7)+d['transform']};if(d[l(0xc4)]!=='none')return{'node':c,'reason':'scale:\x20'+d['scale']};if(d['translate']!=='none')return{'node':c,'reason':l(0xac)+d[l(0xc6)]};if(d['rotate']!==l(0xa2))return{'node':c,'reason':l(0xb1)+d[l(0xb2)]};if(d[l(0xcb)]!==l(0xb0))return{'node':c,'reason':l(0xbc)+d['mixBlendMode']};if(d[l(0x91)]!=='none')return{'node':c,'reason':'filter:\x20'+d['filter']};if(d['backdropFilter']!==l(0xa2))return{'node':c,'reason':'backdropFilter:\x20'+d['backdropFilter']};if(d['perspective']!=='none')return{'node':c,'reason':l(0xcf)+d[l(0xc8)]};if(d[l(0xa5)]!==l(0xa2))return{'node':c,'reason':'clip-path:\x20'+d[l(0xa5)]+'\x20'};const e=d['mask']||d[l(0x98)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':l(0xb6)+e};const f=d[l(0xb9)]||d['webkitMaskImage'];if(f!==l(0xa2)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d[l(0xc0)]||d[l(0xaf)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':l(0xa9)+g};if(d['isolation']==='isolate')return{'node':c,'reason':'isolation:\x20'+d[l(0xdf)]};if(d['willChange']==='transform'||d[l(0xd5)]===l(0xbb)||d['willChange']===l(0xc4)||d['willChange']===l(0xc6)||d['willChange']==='rotate')return{'node':c,'reason':'willChange:\x20'+d['willChange']};if(d[l(0xdc)]!=='auto'){const i=c[l(0xb8)]['defaultView']['getComputedStyle'](c['parentNode']);if(i['display']==='flex'||i['display']==='inline-flex')return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d[l(0xdc)]};else{if(i['grid']!==l(0xc3))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d['zIndex']};}}const h=d[l(0x96)];if([l(0xad),l(0xb4),'strict',l(0xba)][l(0xd8)](h)>-0x1||h['indexOf']('paint')>-0x1||h[l(0xd8)]('layout')>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;['_ready'];['computedStyle'];[m(0xd9)]='';['createsStackingContextReason']='';[m(0xbd)];['parentStackingContextText'];['selectedElementOffsetParent'];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}[m(0x9a)](){const n=m;this[n(0x99)](),this['_bindingsParse'](),this[n(0xdb)]=!![];}[m(0xc2)](c,d){const o=m;if(d==o(0xce)){if(this[o(0xc7)]){let f=DesignItem['GetDesignItem'](this['selectedElementOffsetParent']);f['instanceServiceContainer']['selectionService'][o(0x92)]([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem['GetDesignItem'](this['parentStackingContext']);g[o(0xae)]['selectionService'][o(0x92)]([g]);}}}}['update'](c){this['_ready']&&requestAnimationFrame(()=>{const p=b;let d=c?.['element'];if(d?.[p(0xab)]==0x3)d=d[p(0xb5)];if(d&&d['nodeType']!=0x8&&d[p(0xab)]!=0xb){this[p(0x8e)]=d[p(0xb8)]['defaultView'][p(0xa0)](d),this['selectedElementOffsetParent']=d['offsetParent'];if(this[p(0xc7)]==c[p(0xae)][p(0xd0)]['rootDesignItem']['element']||this[p(0xc7)]==c[p(0xae)][p(0xd0)][p(0x9b)]['element'][p(0xa4)])this[p(0xa6)]=null,this['selectedElementOffsetParent']=null;else this['selectedElementOffsetParentText']=generateSelector(d[p(0xce)]);if(d&&d[p(0xab)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e['node'],this[p(0x9e)]=this[p(0xd9)]?e[p(0x9d)]:p(0xa1),this['parentStackingContext']=e[p(0xc5)];this[p(0xd9)]&&d['nodeName']!=='HTML'&&(this[p(0xbd)]=getClosestStackingContext(d[p(0xb5)])['node']);if(this['parentStackingContext']==c['instanceServiceContainer']['designerCanvas']['rootDesignItem']['element'][p(0xa4)]||this[p(0xbd)]==c['instanceServiceContainer']['designerCanvas'][p(0x9b)]['element'][p(0xa4)][p(0xa4)])this[p(0xde)]=null,this['parentStackingContext']=null;else this[p(0xde)]=generateSelector(this['parentStackingContext']);}}else this[p(0x8e)]={},this[p(0xd9)]=![],this['createsStackingContextReason']='',this[p(0xd9)]=![],this[p(0xc7)]=null,this['selectedElementOffsetParentText']=null,this[p(0xbd)]=null,this['parentStackingContextText']=null;this[p(0xb7)]();});}}customElements[m(0xcd)](m(0xd4),DebugView);function a(){const q=['maskImage','content','opacity','mixBlendMode:\x20','parentStackingContext','sticky','getAttribute','maskBorder','30QqyAod','_clickLink','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','scale','node','translate','selectedElementOffsetParent','perspective','split','transform','mixBlendMode','366534PImNgl','define','offsetParent','perspective:\x20','designerCanvas','32dPSXdc','opacity:\x20','fixed','node-projects-debug-view','willChange',';\x20z-index:\x20','transform:\x20','indexOf','createsStackingContext','7572IgDFqH','_ready','zIndex','HTML','parentStackingContextText','isolation','computedStyle','root','9535GNLyvv','filter','setSelectedElements','auto','4291640FIVNIV','class','contain','3083KsMedi','webkitMask','_parseAttributesToProperties','ready','rootDesignItem','6589zyGsGw','reason','createsStackingContextReason','5747364HpFUPB','getComputedStyle','not\x20a\x20stacking\x20context','none','7519880wMRzyv','parentElement','clipPath','selectedElementOffsetParentText','position','270KYebnf','mask-border:\x20','3ysAJGe','nodeType','translate:\x20','layout','instanceServiceContainer','webkitMaskBorder','normal','rotate:\x20','rotate','nodeName','paint','parentNode','mask:\x20\x20','_bindingsRefresh','ownerDocument'];a=function(){return q;};return a();}