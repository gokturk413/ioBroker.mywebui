function b(c,d){c=c-0x87;const e=a();let f=e[c];return f;}const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xb1))/0x1+-parseInt(j(0xaf))/0x2*(parseInt(j(0xb0))/0x3)+parseInt(j(0x92))/0x4*(parseInt(j(0x93))/0x5)+parseInt(j(0xa9))/0x6*(-parseInt(j(0x9b))/0x7)+parseInt(j(0xd8))/0x8*(parseInt(j(0xa1))/0x9)+-parseInt(j(0x97))/0xa*(parseInt(j(0xd1))/0xb)+parseInt(j(0x96))/0xc*(-parseInt(j(0x8b))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8498a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function a(){const s=['parentStackingContext','selectedElementOffsetParent','1955291qIUShp','scale','maskImage','webkitMaskImage','opacity','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','_ready','219576BtwEgC','65VzUkat','nodeType','getComputedStyle','48PqsQqh','2730lYpGeM','class','createsStackingContextReason','parentStackingContextText','7sIaHVW','strict','willChange','host','selectionService','_clickLink','758745XOjLCJ','createsStackingContext','element','selectedElementOffsetParentText','mask-border:\x20','mask','nodeName','isolation:\x20','3989838aMxhem','define','paint','zIndex','layout','isolation','60274XRpPjm','57GrwYqZ','907052lHNutq','contain','ready','backdropFilter','getAttribute','transform','defaultView','indexOf','not\x20a\x20stacking\x20context','sticky','backdropFilter:\x20','rootDesignItem','willChange:\x20','node','rotate','rotate:\x20','parentNode','none','auto','position:\x20','setSelectedElements','join','perspective:\x20','clipPath','parentElement','translate','_restoreCachedInititalValues','offsetParent','mask:\x20\x20','flex-item;\x20z-index:\x20','inline-flex','flex','6677BPfaBu','instanceServiceContainer','_parseAttributesToProperties','mixBlendMode','ownerDocument','position','computedStyle','88TbMqQg','maskBorder','mixBlendMode:\x20','designerCanvas'];a=function(){return s;};return a();}function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0xa7)]['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0xb5)](k(0x98))&&(d='.'+c['getAttribute']('class')['split']('\x20')[k(0xc6)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':'root'};if(c[l(0xa7)]==='#document-fragment')return getClosestStackingContext(c[l(0x9e)]);const d=c['ownerDocument'][l(0xb7)]['getComputedStyle'](c);if(d[l(0xd6)]==='fixed'||d['position']===l(0xba))return{'node':c,'reason':'position:\x20'+d[l(0xd6)]};if(d[l(0xac)]!=='auto'&&d[l(0xd6)]!=='static')return{'node':c,'reason':l(0xc4)+d[l(0xd6)]+';\x20z-index:\x20'+d[l(0xac)]};if(d[l(0x8f)]!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0x8f)]};if(d[l(0xb6)]!=='none')return{'node':c,'reason':'transform:\x20'+d[l(0xb6)]};if(d[l(0x8c)]!=='none')return{'node':c,'reason':'scale:\x20'+d['scale']};if(d['translate']!==l(0xc2))return{'node':c,'reason':'translate:\x20'+d['translate']};if(d[l(0xbf)]!=='none')return{'node':c,'reason':l(0xc0)+d['rotate']};if(d['mixBlendMode']!=='normal')return{'node':c,'reason':l(0x87)+d[l(0xd4)]};if(d['filter']!==l(0xc2))return{'node':c,'reason':'filter:\x20'+d['filter']};if(d[l(0xb4)]!==l(0xc2))return{'node':c,'reason':l(0xbb)+d['backdropFilter']};if(d['perspective']!==l(0xc2))return{'node':c,'reason':l(0xc7)+d['perspective']};if(d[l(0xc8)]!=='none')return{'node':c,'reason':'clip-path:\x20'+d['clipPath']+'\x20'};const e=d[l(0xa6)]||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':l(0xcd)+e};const f=d[l(0x8d)]||d[l(0x8e)];if(f!==l(0xc2)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d[l(0xd9)]||d['webkitMaskBorder'];if(g!=='none'&&g!==undefined)return{'node':c,'reason':l(0xa5)+g};if(d['isolation']==='isolate')return{'node':c,'reason':l(0xa8)+d[l(0xae)]};if(d[l(0x9d)]===l(0xb6)||d['willChange']===l(0x8f)||d['willChange']===l(0x8c)||d[l(0x9d)]===l(0xca)||d[l(0x9d)]===l(0xbf))return{'node':c,'reason':l(0xbd)+d[l(0x9d)]};if(d[l(0xac)]!==l(0xc3)){const i=c[l(0xd5)][l(0xb7)][l(0x95)](c[l(0xc1)]);if(i['display']===l(0xd0)||i['display']===l(0xcf))return{'node':c,'reason':l(0xce)+d['zIndex']};else{if(i['grid']!==l(0x90))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d['zIndex']};}}const h=d[l(0xb2)];if([l(0xad),l(0xab),l(0x9c),'content'][l(0xb8)](h)>-0x1||h['indexOf']('paint')>-0x1||h['indexOf'](l(0xad))>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;['_ready'];['computedStyle'];['createsStackingContext']='';[m(0x99)]='';[m(0x89)];['parentStackingContextText'];['selectedElementOffsetParent'];[m(0xa4)];constructor(){const n=m;super(),this[n(0xcb)]();}[m(0xb3)](){const o=m;this[o(0xd3)](),this['_bindingsParse'](),this[o(0x91)]=!![];}[m(0xa0)](c,d){const p=m;if(d==p(0xcc)){if(this[p(0x8a)]){let f=DesignItem['GetDesignItem'](this['selectedElementOffsetParent']);f[p(0xd2)][p(0x9f)]['setSelectedElements']([f]);}}else{if(d=='stackingContextParent'){if(this[p(0x89)]){let g=DesignItem['GetDesignItem'](this[p(0x89)]);g['instanceServiceContainer']['selectionService'][p(0xc5)]([g]);}}}}['update'](c){const q=m;this[q(0x91)]&&requestAnimationFrame(()=>{const r=q;let d=c?.[r(0xa3)];if(d?.[r(0x94)]==0x3)d=d['parentNode'];if(d&&d[r(0x94)]!=0x8&&d['nodeType']!=0xb){this[r(0xd7)]=d[r(0xd5)]['defaultView']['getComputedStyle'](d),this['selectedElementOffsetParent']=d[r(0xcc)];if(this[r(0x8a)]==c[r(0xd2)][r(0x88)][r(0xbc)]['element']||this[r(0x8a)]==c['instanceServiceContainer']['designerCanvas']['rootDesignItem']['element'][r(0xc9)])this[r(0xa4)]=null,this[r(0x8a)]=null;else this['selectedElementOffsetParentText']=generateSelector(d[r(0xcc)]);if(d&&d[r(0x94)]===0x1){const e=getClosestStackingContext(d);this[r(0xa2)]=d===e[r(0xbe)],this['createsStackingContextReason']=this[r(0xa2)]?e['reason']:r(0xb9),this[r(0x89)]=e['node'];this['createsStackingContext']&&d[r(0xa7)]!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])[r(0xbe)]);if(this[r(0x89)]==c[r(0xd2)][r(0x88)]['rootDesignItem'][r(0xa3)][r(0xc9)]||this[r(0x89)]==c[r(0xd2)]['designerCanvas']['rootDesignItem'][r(0xa3)]['parentElement']['parentElement'])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this['parentStackingContextText']=generateSelector(this[r(0x89)]);}}else this['computedStyle']={},this[r(0xa2)]=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this['selectedElementOffsetParent']=null,this['selectedElementOffsetParentText']=null,this['parentStackingContext']=null,this[r(0x9a)]=null;this['_bindingsRefresh']();});}}customElements[m(0xaa)]('node-projects-debug-view',DebugView);