const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x116))/0x1+-parseInt(j(0xe4))/0x2+-parseInt(j(0x101))/0x3*(parseInt(j(0xdf))/0x4)+parseInt(j(0x10a))/0x5*(-parseInt(j(0x10e))/0x6)+parseInt(j(0x108))/0x7*(parseInt(j(0xf3))/0x8)+parseInt(j(0xcb))/0x9+parseInt(j(0xf6))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x29432));function b(c,d){c=c-0xc6;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0xd8)][k(0x114)]();if(c['id'])d='#'+c[k(0xdc)]('id');else c['getAttribute']('class')&&(d='.'+c['getAttribute'](k(0x109))[k(0xe0)]('\x20')['join']('.'));return d?e+d:e;}function a(){const r=['parentElement','define','823818BubNzi','paint','mixBlendMode','clipPath','inline-flex','auto','toLowerCase','element','51487YJbsdA','grid','backdropFilter','computedStyle','transform','_parseAttributesToProperties','47556uhuJkE','indexOf','rotate:\x20','template','scale:\x20','instanceServiceContainer','_ready','style','contain','position:\x20','isolation','none','selectedElementOffsetParentText','nodeName','flex','node','display','getAttribute',';\x20z-index:\x20','designerCanvas','4zOKNnK','split','parentStackingContext','perspective','backdropFilter:\x20','513012UeZRvK','#document-fragment','createsStackingContext','rootDesignItem','mask:\x20\x20','opacity','parentStackingContextText','maskImage','filter:\x20','rotate','mask-border:\x20','selectedElementOffsetParent','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','willChange','clip-path:\x20','1032848IBCabt','isolate','getComputedStyle','3168370GzuMZd','selectionService','filter','child\x20of\x20grid\x20container;\x20z-index:\x20','mask','_restoreCachedInititalValues','offsetParent','defaultView','flex-item;\x20z-index:\x20','nodeType','parentNode','207003injJvb','content','zIndex','reason','perspective:\x20','webkitMaskBorder','translate:\x20','14ueFqeP','class','5ZjbPyh','position'];a=function(){return r;};return a();}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c[l(0xd8)]==='#document')return{'node':document['documentElement'],'reason':'root'};if(c[l(0xd8)]===l(0xe5))return getClosestStackingContext(c['host']);const d=c['ownerDocument']['defaultView'][l(0xf5)](c);if(d[l(0x10b)]==='fixed'||d['position']==='sticky')return{'node':c,'reason':l(0xd4)+d[l(0x10b)]};if(d[l(0x103)]!==l(0x113)&&d[l(0x10b)]!=='static')return{'node':c,'reason':l(0xd4)+d[l(0x10b)]+l(0xdd)+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0xe9)]};if(d[l(0xc9)]!=='none')return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!==l(0xd6))return{'node':c,'reason':l(0xcf)+d['scale']};if(d['translate']!==l(0xd6))return{'node':c,'reason':l(0x107)+d['translate']};if(d[l(0xed)]!=='none')return{'node':c,'reason':l(0xcd)+d[l(0xed)]};if(d['mixBlendMode']!=='normal')return{'node':c,'reason':'mixBlendMode:\x20'+d[l(0x110)]};if(d[l(0xf8)]!==l(0xd6))return{'node':c,'reason':l(0xec)+d[l(0xf8)]};if(d[l(0xc7)]!=='none')return{'node':c,'reason':l(0xe3)+d[l(0xc7)]};if(d['perspective']!=='none')return{'node':c,'reason':l(0x105)+d[l(0xe2)]};if(d['clipPath']!==l(0xd6))return{'node':c,'reason':l(0xf2)+d[l(0x111)]+'\x20'};const e=d[l(0xfa)]||d['webkitMask'];if(e!==l(0xd6)&&e!==undefined)return{'node':c,'reason':l(0xe8)+e};const f=d[l(0xeb)]||d['webkitMaskImage'];if(f!==l(0xd6)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d[l(0x106)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':l(0xee)+g};if(d[l(0xd5)]===l(0xf4))return{'node':c,'reason':'isolation:\x20'+d['isolation']};if(d['willChange']==='transform'||d['willChange']===l(0xe9)||d[l(0xf1)]==='scale'||d[l(0xf1)]==='translate'||d['willChange']==='rotate')return{'node':c,'reason':'willChange:\x20'+d[l(0xf1)]};if(d[l(0x103)]!==l(0x113)){const i=c['ownerDocument']['defaultView']['getComputedStyle'](c['parentNode']);if(i[l(0xdb)]===l(0xd9)||i['display']===l(0x112))return{'node':c,'reason':l(0xfe)+d['zIndex']};else{if(i[l(0xc6)]!==l(0xf0))return{'node':c,'reason':l(0xf9)+d['zIndex']};}}const h=d[l(0xd3)];if(['layout',l(0x10f),'strict',l(0x102)][l(0xcc)](h)>-0x1||h[l(0xcc)]('paint')>-0x1||h[l(0xcc)]('layout')>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c[l(0x100)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0xce)]=html`
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
    `;static [m(0xd2)]=css`
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
      }`;[m(0xd1)];['computedStyle'];['createsStackingContext']='';['createsStackingContextReason']='';['parentStackingContext'];[m(0xea)];[m(0xef)];[m(0xd7)];constructor(){const n=m;super(),this[n(0xfb)]();}['ready'](){const o=m;this[o(0xca)](),this['_bindingsParse'](),this['_ready']=!![];}['_clickLink'](c,d){const p=m;if(d==p(0xfc)){if(this[p(0xef)]){let f=DesignItem['GetDesignItem'](this['selectedElementOffsetParent']);f['instanceServiceContainer'][p(0xf7)]['setSelectedElements']([f]);}}else{if(d=='stackingContextParent'){if(this[p(0xe1)]){let g=DesignItem['GetDesignItem'](this[p(0xe1)]);g[p(0xd0)]['selectionService']['setSelectedElements']([g]);}}}}['update'](c){this['_ready']&&requestAnimationFrame(()=>{const q=b;let d=c?.[q(0x115)];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d[q(0xff)]!=0x8&&d['nodeType']!=0xb){this[q(0xc8)]=d['ownerDocument'][q(0xfd)]['getComputedStyle'](d),this['selectedElementOffsetParent']=d[q(0xfc)];if(this[q(0xef)]==c[q(0xd0)]['designerCanvas'][q(0xe7)][q(0x115)]||this['selectedElementOffsetParent']==c[q(0xd0)]['designerCanvas'][q(0xe7)]['element'][q(0x10c)])this['selectedElementOffsetParentText']=null,this['selectedElementOffsetParent']=null;else this['selectedElementOffsetParentText']=generateSelector(d[q(0xfc)]);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e['node'],this['createsStackingContextReason']=this['createsStackingContext']?e[q(0x104)]:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e[q(0xda)];this[q(0xe6)]&&d['nodeName']!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])['node']);if(this[q(0xe1)]==c[q(0xd0)]['designerCanvas'][q(0xe7)]['element']['parentElement']||this[q(0xe1)]==c[q(0xd0)][q(0xde)]['rootDesignItem']['element'][q(0x10c)]['parentElement'])this[q(0xea)]=null,this[q(0xe1)]=null;else this['parentStackingContextText']=generateSelector(this[q(0xe1)]);}}else this['computedStyle']={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this[q(0xe6)]=![],this['selectedElementOffsetParent']=null,this['selectedElementOffsetParentText']=null,this['parentStackingContext']=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}customElements[m(0x10d)]('node-projects-debug-view',DebugView);