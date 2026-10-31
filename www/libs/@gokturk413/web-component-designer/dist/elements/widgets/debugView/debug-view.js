const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xba))/0x1*(parseInt(j(0xbc))/0x2)+-parseInt(j(0x98))/0x3*(parseInt(j(0x93))/0x4)+parseInt(j(0xad))/0x5*(-parseInt(j(0xdd))/0x6)+-parseInt(j(0xc0))/0x7+-parseInt(j(0xb9))/0x8+-parseInt(j(0xd9))/0x9*(parseInt(j(0xd5))/0xa)+parseInt(j(0xc5))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6d841));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function b(c,d){c=c-0x90;const e=a();let f=e[c];return f;}function a(){const q=['offsetParent','element','HTML','transform','mask','child\x20of\x20grid\x20container;\x20z-index:\x20','maskImage','38452mBOXsO','createsStackingContextReason','willChange:\x20','instanceServiceContainer','ownerDocument','51RDbTap','getAttribute','auto','clip-path:\x20','style','isolation:\x20','parentStackingContext','parentElement','translate:\x20','selectionService','parentNode','isolate','display','computedStyle','getComputedStyle','backdropFilter:\x20','selectedElementOffsetParentText',';\x20z-index:\x20','rotate','opacity','isolation','85ZsGGrw','perspective:\x20','mixBlendMode:\x20','nodeName','contain','mixBlendMode','createsStackingContext','_clickLink','position:\x20','selectedElementOffsetParent','stackingContextParent','nodeType','3626512oOIHPy','121ZWbDFD','webkitMask','6868zEIfnX','mask:\x20\x20','node','scale','4004091qDppMb','rootDesignItem','fixed','class','template','21098451xCroNB','parentStackingContextText','toLowerCase','normal','defaultView','zIndex','filter:\x20','flex-item;\x20z-index:\x20','position','willChange','designerCanvas','setSelectedElements','none','inline-flex','flex','node-projects-debug-view','2559470nRDPUX','_ready','clipPath','strict','9bXPsHy','perspective','translate','host','155394vKjqJj'];a=function(){return q;};return a();}function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0xb0)][k(0xc7)]();if(c['id'])d='#'+c[k(0x99)]('id');else c[k(0x99)](k(0xc3))&&(d='.'+c[k(0x99)](k(0xc3))['split']('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c[l(0xb0)]==='#document')return{'node':document['documentElement'],'reason':'root'};if(c['nodeName']==='#document-fragment')return getClosestStackingContext(c[l(0xdc)]);const d=c[l(0x97)][l(0xc9)][l(0xa6)](c);if(d['position']===l(0xc2)||d['position']==='sticky')return{'node':c,'reason':l(0xb5)+d[l(0xcd)]};if(d[l(0xca)]!==l(0x9a)&&d['position']!=='static')return{'node':c,'reason':'position:\x20'+d[l(0xcd)]+l(0xa9)+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0xab)]};if(d['transform']!==l(0xd1))return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!=='none')return{'node':c,'reason':'scale:\x20'+d[l(0xbf)]};if(d['translate']!==l(0xd1))return{'node':c,'reason':l(0xa0)+d['translate']};if(d[l(0xaa)]!=='none')return{'node':c,'reason':'rotate:\x20'+d['rotate']};if(d['mixBlendMode']!==l(0xc8))return{'node':c,'reason':l(0xaf)+d[l(0xb2)]};if(d['filter']!=='none')return{'node':c,'reason':l(0xcb)+d['filter']};if(d['backdropFilter']!=='none')return{'node':c,'reason':l(0xa7)+d['backdropFilter']};if(d[l(0xda)]!==l(0xd1))return{'node':c,'reason':l(0xae)+d[l(0xda)]};if(d[l(0xd7)]!=='none')return{'node':c,'reason':l(0x9b)+d[l(0xd7)]+'\x20'};const e=d[l(0x90)]||d[l(0xbb)];if(e!==l(0xd1)&&e!==undefined)return{'node':c,'reason':l(0xbd)+e};const f=d[l(0x92)]||d['webkitMaskImage'];if(f!==l(0xd1)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!==l(0xd1)&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d['isolation']===l(0xa3))return{'node':c,'reason':l(0x9d)+d[l(0xac)]};if(d['willChange']===l(0xe1)||d[l(0xce)]==='opacity'||d[l(0xce)]==='scale'||d[l(0xce)]===l(0xdb)||d[l(0xce)]===l(0xaa))return{'node':c,'reason':l(0x95)+d[l(0xce)]};if(d['zIndex']!==l(0x9a)){const i=c['ownerDocument']['defaultView'][l(0xa6)](c[l(0xa2)]);if(i['display']===l(0xd3)||i[l(0xa4)]===l(0xd2))return{'node':c,'reason':l(0xcc)+d['zIndex']};else{if(i['grid']!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x91)+d['zIndex']};}}const h=d[l(0xb1)];if(['layout','paint',l(0xd8),'content']['indexOf'](h)>-0x1||h['indexOf']('paint')>-0x1||h['indexOf']('layout')>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0xc4)]=html`
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
    `;static [m(0x9c)]=css`
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
      }`;[m(0xd6)];[m(0xa5)];['createsStackingContext']='';['createsStackingContextReason']='';[m(0x9e)];['parentStackingContextText'];['selectedElementOffsetParent'];[m(0xa8)];constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const n=m;this['_parseAttributesToProperties'](),this['_bindingsParse'](),this[n(0xd6)]=!![];}[m(0xb4)](c,d){const o=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem['GetDesignItem'](this['selectedElementOffsetParent']);f['instanceServiceContainer'][o(0xa1)]['setSelectedElements']([f]);}}else{if(d==o(0xb7)){if(this[o(0x9e)]){let g=DesignItem['GetDesignItem'](this['parentStackingContext']);g[o(0x96)]['selectionService'][o(0xd0)]([g]);}}}}['update'](c){this['_ready']&&requestAnimationFrame(()=>{const p=b;let d=c?.[p(0xdf)];if(d?.[p(0xb8)]==0x3)d=d[p(0xa2)];if(d&&d[p(0xb8)]!=0x8&&d['nodeType']!=0xb){this['computedStyle']=d[p(0x97)]['defaultView']['getComputedStyle'](d),this['selectedElementOffsetParent']=d[p(0xde)];if(this[p(0xb6)]==c['instanceServiceContainer']['designerCanvas']['rootDesignItem'][p(0xdf)]||this[p(0xb6)]==c[p(0x96)][p(0xcf)][p(0xc1)]['element']['parentElement'])this['selectedElementOffsetParentText']=null,this['selectedElementOffsetParent']=null;else this[p(0xa8)]=generateSelector(d[p(0xde)]);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this[p(0xb3)]=d===e[p(0xbe)],this[p(0x94)]=this['createsStackingContext']?e['reason']:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e[p(0xbe)];this['createsStackingContext']&&d[p(0xb0)]!==p(0xe0)&&(this[p(0x9e)]=getClosestStackingContext(d['parentNode'])[p(0xbe)]);if(this[p(0x9e)]==c['instanceServiceContainer']['designerCanvas'][p(0xc1)][p(0xdf)][p(0x9f)]||this['parentStackingContext']==c[p(0x96)][p(0xcf)][p(0xc1)][p(0xdf)][p(0x9f)][p(0x9f)])this[p(0xc6)]=null,this[p(0x9e)]=null;else this['parentStackingContextText']=generateSelector(this[p(0x9e)]);}}else this[p(0xa5)]={},this[p(0xb3)]=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this[p(0xb6)]=null,this[p(0xa8)]=null,this[p(0x9e)]=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}customElements['define'](m(0xd4),DebugView);