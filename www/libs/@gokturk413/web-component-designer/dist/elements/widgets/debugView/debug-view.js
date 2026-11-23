const m=b;function b(c,d){c=c-0x70;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xa4))/0x1+parseInt(j(0xb3))/0x2+parseInt(j(0xa0))/0x3+parseInt(j(0x7c))/0x4*(-parseInt(j(0xb5))/0x5)+-parseInt(j(0xac))/0x6+parseInt(j(0x9a))/0x7+parseInt(j(0x86))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc2bff));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const r=['webkitMaskBorder','clipPath','class','3751848UOZzyh','none','zIndex','defaultView','1572292fwRoZg','setSelectedElements','transform:\x20','contain','designerCanvas','_parseAttributesToProperties','parentStackingContextText','mixBlendMode','1973010LXIDmz','selectedElementOffsetParent','child\x20of\x20grid\x20container;\x20z-index:\x20','parentNode','mixBlendMode:\x20','computedStyle','layout','2378814VMLhoN','selectedElementOffsetParentText','8230NrIprF','toLowerCase','grid','mask-image:\x20','selectionService','_ready','paint','style','backdropFilter','position','filter','instanceServiceContainer','_restoreCachedInititalValues','perspective:\x20','#document','node','translate','rotate:\x20','rotate','transform','ownerDocument','_bindingsRefresh','1908cKKnwr','host','#document-fragment','mask:\x20\x20','createsStackingContext','scale','not\x20a\x20stacking\x20context','parentStackingContext','filter:\x20','getComputedStyle','7855664jdgoAu','isolation','HTML','createsStackingContextReason','auto','nodeName','inline-flex','opacity','rootDesignItem','webkitMaskImage','perspective','willChange','element','define','strict','GetDesignItem','indexOf','parentElement','webkitMask','nodeType','433881bJjqxN','display','getAttribute'];a=function(){return r;};return a();}import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x8b)][k(0xb6)]();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x9c)](k(0x9f))&&(d='.'+c['getAttribute'](k(0x9f))['split']('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x8b)]==='HTML'||c[l(0x8b)]===l(0x74))return{'node':document['documentElement'],'reason':'root'};if(c['nodeName']===l(0x7e))return getClosestStackingContext(c[l(0x7d)]);const d=c['ownerDocument'][l(0xa3)][l(0x85)](c);if(d['position']==='fixed'||d['position']==='sticky')return{'node':c,'reason':'position:\x20'+d[l(0xbe)]};if(d[l(0xa2)]!==l(0x8a)&&d['position']!=='static')return{'node':c,'reason':'position:\x20'+d['position']+';\x20z-index:\x20'+d[l(0xa2)]};if(d['opacity']!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0x8d)]};if(d[l(0x79)]!==l(0xa1))return{'node':c,'reason':l(0xa6)+d['transform']};if(d[l(0x81)]!==l(0xa1))return{'node':c,'reason':'scale:\x20'+d['scale']};if(d[l(0x76)]!=='none')return{'node':c,'reason':'translate:\x20'+d[l(0x76)]};if(d['rotate']!=='none')return{'node':c,'reason':l(0x77)+d[l(0x78)]};if(d['mixBlendMode']!=='normal')return{'node':c,'reason':l(0xb0)+d[l(0xab)]};if(d[l(0x70)]!=='none')return{'node':c,'reason':l(0x84)+d[l(0x70)]};if(d['backdropFilter']!==l(0xa1))return{'node':c,'reason':'backdropFilter:\x20'+d[l(0xbd)]};if(d[l(0x90)]!==l(0xa1))return{'node':c,'reason':l(0x73)+d[l(0x90)]};if(d['clipPath']!=='none')return{'node':c,'reason':'clip-path:\x20'+d[l(0x9e)]+'\x20'};const e=d['mask']||d[l(0x98)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':l(0x7f)+e};const f=d['maskImage']||d[l(0x8f)];if(f!==l(0xa1)&&f!==undefined)return{'node':c,'reason':l(0xb8)+f};const g=d['maskBorder']||d[l(0x9d)];if(g!==l(0xa1)&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d[l(0x87)]==='isolate')return{'node':c,'reason':'isolation:\x20'+d['isolation']};if(d[l(0x91)]==='transform'||d['willChange']==='opacity'||d['willChange']==='scale'||d[l(0x91)]==='translate'||d['willChange']==='rotate')return{'node':c,'reason':'willChange:\x20'+d['willChange']};if(d[l(0xa2)]!=='auto'){const i=c['ownerDocument'][l(0xa3)][l(0x85)](c['parentNode']);if(i[l(0x9b)]==='flex'||i['display']===l(0x8c))return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d[l(0xa2)]};else{if(i[l(0xb7)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0xae)+d[l(0xa2)]};}}const h=d[l(0xa7)];if([l(0xb2),l(0xbb),l(0x94),'content']['indexOf'](h)>-0x1||h[l(0x96)]('paint')>-0x1||h['indexOf'](l(0xb2))>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c[l(0xaf)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    `;static [m(0xbc)]=css`
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
      }`;[m(0xba)];[m(0xb1)];[m(0x80)]='';[m(0x89)]='';['parentStackingContext'];[m(0xaa)];['selectedElementOffsetParent'];[m(0xb4)];constructor(){const n=m;super(),this[n(0x72)]();}['ready'](){const o=m;this[o(0xa9)](),this['_bindingsParse'](),this[o(0xba)]=!![];}['_clickLink'](c,d){const p=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem[p(0x95)](this['selectedElementOffsetParent']);f[p(0x71)][p(0xb9)][p(0xa5)]([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem['GetDesignItem'](this[p(0x83)]);g[p(0x71)]['selectionService']['setSelectedElements']([g]);}}}}['update'](c){this['_ready']&&requestAnimationFrame(()=>{const q=b;let d=c?.['element'];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d[q(0x99)]!=0xb){this[q(0xb1)]=d[q(0x7a)][q(0xa3)][q(0x85)](d),this[q(0xad)]=d['offsetParent'];if(this['selectedElementOffsetParent']==c['instanceServiceContainer']['designerCanvas'][q(0x8e)][q(0x92)]||this['selectedElementOffsetParent']==c[q(0x71)]['designerCanvas']['rootDesignItem'][q(0x92)][q(0x97)])this[q(0xb4)]=null,this[q(0xad)]=null;else this[q(0xb4)]=generateSelector(d['offsetParent']);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this[q(0x80)]=d===e[q(0x75)],this[q(0x89)]=this[q(0x80)]?e['reason']:q(0x82),this[q(0x83)]=e[q(0x75)];this[q(0x80)]&&d[q(0x8b)]!==q(0x88)&&(this['parentStackingContext']=getClosestStackingContext(d[q(0xaf)])['node']);if(this['parentStackingContext']==c['instanceServiceContainer'][q(0xa8)][q(0x8e)]['element']['parentElement']||this['parentStackingContext']==c['instanceServiceContainer'][q(0xa8)]['rootDesignItem']['element']['parentElement']['parentElement'])this[q(0xaa)]=null,this[q(0x83)]=null;else this[q(0xaa)]=generateSelector(this[q(0x83)]);}}else this['computedStyle']={},this[q(0x80)]=![],this['createsStackingContextReason']='',this[q(0x80)]=![],this[q(0xad)]=null,this[q(0xb4)]=null,this[q(0x83)]=null,this[q(0xaa)]=null;this[q(0x7b)]();});}}customElements[m(0x93)]('node-projects-debug-view',DebugView);