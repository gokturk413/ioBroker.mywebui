function b(c,d){c=c-0xa5;const e=a();let f=e[c];return f;}function a(){const r=['stackingContextParent','parentStackingContext','55945LehgDN','mask-border:\x20','parentStackingContextText','1ZzdemQ','node','isolation:\x20','nodeType','contain','selectedElementOffsetParentText','_ready','layout','clipPath','transform','strict','class','HTML','designerCanvas','70tamgob','zIndex','3051741EKJoZv','getComputedStyle','flex-item;\x20z-index:\x20','selectionService','instanceServiceContainer','12CjEavn','createsStackingContext','contain:\x20','filter','rotate','grid','ready','flex','none','mixBlendMode:\x20','fixed','parentElement','auto','_bindingsParse','1017TkJEEK','reason','join','willChange','35258388rGOfRF',';\x20z-index:\x20','computedStyle','indexOf','791144DsyEPC','root','rotate:\x20','GetDesignItem','opacity','rootDesignItem','inline-flex','getAttribute','92VavnoK','position','isolation','content','split','willChange:\x20','_restoreCachedInititalValues','maskBorder','56820SaMfTH','translate','setSelectedElements','update','offsetParent','position:\x20','parentNode','element','4405530eVsuGR','backdropFilter:\x20','nodeName','selectedElementOffsetParent','1049134YTrFqm','display','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','createsStackingContextReason'];a=function(){return r;};return a();}const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xc0))/0x1*(parseInt(j(0xb7))/0x2)+-parseInt(j(0xd0))/0x3+-parseInt(j(0xf3))/0x4*(-parseInt(j(0xbd))/0x5)+-parseInt(j(0xb3))/0x6+parseInt(j(0xce))/0x7*(-parseInt(j(0xeb))/0x8)+-parseInt(j(0xe3))/0x9*(-parseInt(j(0xab))/0xa)+parseInt(j(0xe7))/0xb*(parseInt(j(0xd5))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd02a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName']['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c['getAttribute'](k(0xcb))&&(d='.'+c[k(0xf2)]('class')[k(0xa7)]('\x20')[k(0xe5)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']===l(0xcc)||c['nodeName']==='#document')return{'node':document['documentElement'],'reason':l(0xec)};if(c[l(0xb5)]==='#document-fragment')return getClosestStackingContext(c['host']);const d=c['ownerDocument']['defaultView'][l(0xd1)](c);if(d['position']===l(0xdf)||d['position']==='sticky')return{'node':c,'reason':'position:\x20'+d['position']};if(d[l(0xcf)]!==l(0xe1)&&d[l(0xf4)]!=='static')return{'node':c,'reason':l(0xb0)+d['position']+l(0xe8)+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0xef)]};if(d['transform']!=='none')return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!==l(0xdd))return{'node':c,'reason':'scale:\x20'+d['scale']};if(d['translate']!=='none')return{'node':c,'reason':'translate:\x20'+d[l(0xac)]};if(d['rotate']!=='none')return{'node':c,'reason':l(0xed)+d[l(0xd9)]};if(d['mixBlendMode']!=='normal')return{'node':c,'reason':l(0xde)+d['mixBlendMode']};if(d[l(0xd8)]!=='none')return{'node':c,'reason':'filter:\x20'+d[l(0xd8)]};if(d['backdropFilter']!==l(0xdd))return{'node':c,'reason':l(0xb4)+d['backdropFilter']};if(d['perspective']!==l(0xdd))return{'node':c,'reason':'perspective:\x20'+d['perspective']};if(d[l(0xc8)]!==l(0xdd))return{'node':c,'reason':'clip-path:\x20'+d['clipPath']+'\x20'};const e=d['mask']||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d['maskImage']||d['webkitMaskImage'];if(f!=='none'&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d[l(0xaa)]||d['webkitMaskBorder'];if(g!==l(0xdd)&&g!==undefined)return{'node':c,'reason':l(0xbe)+g};if(d[l(0xa5)]==='isolate')return{'node':c,'reason':l(0xc2)+d['isolation']};if(d[l(0xe6)]===l(0xc9)||d[l(0xe6)]===l(0xef)||d['willChange']==='scale'||d[l(0xe6)]===l(0xac)||d['willChange']==='rotate')return{'node':c,'reason':l(0xa8)+d[l(0xe6)]};if(d[l(0xcf)]!==l(0xe1)){const i=c['ownerDocument']['defaultView']['getComputedStyle'](c['parentNode']);if(i[l(0xb8)]===l(0xdc)||i[l(0xb8)]===l(0xf1))return{'node':c,'reason':l(0xd2)+d['zIndex']};else{if(i[l(0xda)]!==l(0xb9))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d[l(0xcf)]};}}const h=d[l(0xc4)];if([l(0xc7),'paint',l(0xca),l(0xa6)][l(0xea)](h)>-0x1||h['indexOf']('paint')>-0x1||h[l(0xea)]('layout')>-0x1)return{'node':c,'reason':l(0xd7)+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;['_ready'];['computedStyle'];['createsStackingContext']='';[m(0xba)]='';['parentStackingContext'];[m(0xbf)];['selectedElementOffsetParent'];['selectedElementOffsetParentText'];constructor(){const n=m;super(),this[n(0xa9)]();}[m(0xdb)](){const o=m;this['_parseAttributesToProperties'](),this[o(0xe2)](),this[o(0xc6)]=!![];}['_clickLink'](c,d){const p=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem[p(0xee)](this['selectedElementOffsetParent']);f['instanceServiceContainer'][p(0xd3)][p(0xad)]([f]);}}else{if(d==p(0xbb)){if(this[p(0xbc)]){let g=DesignItem[p(0xee)](this[p(0xbc)]);g[p(0xd4)]['selectionService'][p(0xad)]([g]);}}}}[m(0xae)](c){this['_ready']&&requestAnimationFrame(()=>{const q=b;let d=c?.['element'];if(d?.['nodeType']==0x3)d=d[q(0xb1)];if(d&&d['nodeType']!=0x8&&d[q(0xc3)]!=0xb){this[q(0xe9)]=d['ownerDocument']['defaultView']['getComputedStyle'](d),this['selectedElementOffsetParent']=d[q(0xaf)];if(this[q(0xb6)]==c['instanceServiceContainer'][q(0xcd)]['rootDesignItem']['element']||this['selectedElementOffsetParent']==c[q(0xd4)][q(0xcd)]['rootDesignItem']['element']['parentElement'])this['selectedElementOffsetParentText']=null,this[q(0xb6)]=null;else this['selectedElementOffsetParentText']=generateSelector(d[q(0xaf)]);if(d&&d[q(0xc3)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e[q(0xc1)],this['createsStackingContextReason']=this['createsStackingContext']?e[q(0xe4)]:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e['node'];this[q(0xd6)]&&d['nodeName']!==q(0xcc)&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])[q(0xc1)]);if(this[q(0xbc)]==c[q(0xd4)][q(0xcd)][q(0xf0)]['element'][q(0xe0)]||this['parentStackingContext']==c[q(0xd4)]['designerCanvas']['rootDesignItem'][q(0xb2)][q(0xe0)][q(0xe0)])this[q(0xbf)]=null,this['parentStackingContext']=null;else this[q(0xbf)]=generateSelector(this[q(0xbc)]);}}else this['computedStyle']={},this['createsStackingContext']=![],this[q(0xba)]='',this['createsStackingContext']=![],this['selectedElementOffsetParent']=null,this[q(0xc5)]=null,this[q(0xbc)]=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}customElements['define']('node-projects-debug-view',DebugView);