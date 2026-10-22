const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1b9))/0x1*(parseInt(j(0x1e6))/0x2)+parseInt(j(0x1cd))/0x3*(-parseInt(j(0x1ea))/0x4)+-parseInt(j(0x1bb))/0x5*(parseInt(j(0x1da))/0x6)+-parseInt(j(0x1f4))/0x7*(-parseInt(j(0x1cc))/0x8)+parseInt(j(0x1ec))/0x9+-parseInt(j(0x1b8))/0xa+parseInt(j(0x1b5))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4041f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const q=['update','fixed','#document','none','perspective','getAttribute','defaultView','transform','display','paint','selectedElementOffsetParentText','8111653WiUIEw','isolation:\x20','setSelectedElements','3806210BnsUOz','1dcRToj','element','365SLeeLo','webkitMaskBorder','getComputedStyle','normal','nodeName','willChange','translate:\x20','parentElement','class','HTML','computedStyle','reason','webkitMaskImage','instanceServiceContainer','willChange:\x20','designerCanvas','rootDesignItem','8hIWjyG','30SwYcKe','layout','node','toLowerCase','parentStackingContextText','parentNode','selectedElementOffsetParent','nodeType','_ready','template','node-projects-debug-view','position:\x20','createsStackingContextReason','13284XTXKUQ','mask-border:\x20','maskBorder','ownerDocument','position','root','strict','rotate','flex','inline-flex','filter','split','217342aqNHnw','backdropFilter','rotate:\x20','join','146668fuWpyE','GetDesignItem','1771461ZwvRnL','translate','createsStackingContext','parentStackingContext','stackingContextParent','zIndex','opacity','opacity:\x20','904323umiBjb','filter:\x20','scale','scale:\x20','define','mask-image:\x20','indexOf','ready','offsetParent','host','mask:\x20\x20','perspective:\x20'];a=function(){return q;};return a();}import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1bf)][k(0x1d0)]();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x1af)](k(0x1c3))&&(d='.'+c['getAttribute'](k(0x1c3))[k(0x1e5)]('\x20')[k(0x1e9)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x1bf)]==='HTML'||c['nodeName']===l(0x202))return{'node':document['documentElement'],'reason':l(0x1df)};if(c[l(0x1bf)]==='#document-fragment')return getClosestStackingContext(c[l(0x1fd)]);const d=c['ownerDocument']['defaultView'][l(0x1bd)](c);if(d['position']===l(0x201)||d['position']==='sticky')return{'node':c,'reason':l(0x1d8)+d[l(0x1de)]};if(d['zIndex']!=='auto'&&d['position']!=='static')return{'node':c,'reason':'position:\x20'+d['position']+';\x20z-index:\x20'+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':l(0x1f3)+d['opacity']};if(d['transform']!=='none')return{'node':c,'reason':'transform:\x20'+d[l(0x1b1)]};if(d['scale']!==l(0x1ad))return{'node':c,'reason':l(0x1f7)+d['scale']};if(d[l(0x1ed)]!==l(0x1ad))return{'node':c,'reason':l(0x1c1)+d['translate']};if(d['rotate']!=='none')return{'node':c,'reason':l(0x1e8)+d['rotate']};if(d['mixBlendMode']!==l(0x1be))return{'node':c,'reason':'mixBlendMode:\x20'+d['mixBlendMode']};if(d[l(0x1e4)]!==l(0x1ad))return{'node':c,'reason':l(0x1f5)+d[l(0x1e4)]};if(d[l(0x1e7)]!=='none')return{'node':c,'reason':'backdropFilter:\x20'+d[l(0x1e7)]};if(d['perspective']!=='none')return{'node':c,'reason':l(0x1ff)+d[l(0x1ae)]};if(d['clipPath']!==l(0x1ad))return{'node':c,'reason':'clip-path:\x20'+d['clipPath']+'\x20'};const e=d['mask']||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':l(0x1fe)+e};const f=d['maskImage']||d[l(0x1c7)];if(f!=='none'&&f!==undefined)return{'node':c,'reason':l(0x1f9)+f};const g=d[l(0x1dc)]||d[l(0x1bc)];if(g!==l(0x1ad)&&g!==undefined)return{'node':c,'reason':l(0x1db)+g};if(d['isolation']==='isolate')return{'node':c,'reason':l(0x1b6)+d['isolation']};if(d[l(0x1c0)]==='transform'||d[l(0x1c0)]===l(0x1f2)||d[l(0x1c0)]===l(0x1f6)||d[l(0x1c0)]==='translate'||d[l(0x1c0)]===l(0x1e1))return{'node':c,'reason':l(0x1c9)+d['willChange']};if(d[l(0x1f1)]!=='auto'){const i=c[l(0x1dd)][l(0x1b0)][l(0x1bd)](c['parentNode']);if(i[l(0x1b2)]===l(0x1e2)||i['display']===l(0x1e3))return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d['zIndex']};else{if(i['grid']!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d[l(0x1f1)]};}}const h=d['contain'];if(['layout','paint',l(0x1e0),'content']['indexOf'](h)>-0x1||h['indexOf'](l(0x1b3))>-0x1||h[l(0x1fa)](l(0x1ce))>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0x1d6)]=html`
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
      }`;['_ready'];['computedStyle'];[m(0x1ee)]='';['createsStackingContextReason']='';['parentStackingContext'];[m(0x1d1)];[m(0x1d3)];[m(0x1b4)];constructor(){super(),this['_restoreCachedInititalValues']();}[m(0x1fb)](){this['_parseAttributesToProperties'](),this['_bindingsParse'](),this['_ready']=!![];}['_clickLink'](c,d){const n=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem['GetDesignItem'](this[n(0x1d3)]);f[n(0x1c8)]['selectionService'][n(0x1b7)]([f]);}}else{if(d==n(0x1f0)){if(this['parentStackingContext']){let g=DesignItem[n(0x1eb)](this[n(0x1ef)]);g['instanceServiceContainer']['selectionService'][n(0x1b7)]([g]);}}}}[m(0x200)](c){const o=m;this[o(0x1d5)]&&requestAnimationFrame(()=>{const p=o;let d=c?.[p(0x1ba)];if(d?.[p(0x1d4)]==0x3)d=d[p(0x1d2)];if(d&&d['nodeType']!=0x8&&d[p(0x1d4)]!=0xb){this['computedStyle']=d['ownerDocument']['defaultView']['getComputedStyle'](d),this[p(0x1d3)]=d[p(0x1fc)];if(this[p(0x1d3)]==c[p(0x1c8)]['designerCanvas']['rootDesignItem'][p(0x1ba)]||this['selectedElementOffsetParent']==c[p(0x1c8)][p(0x1ca)][p(0x1cb)]['element']['parentElement'])this['selectedElementOffsetParentText']=null,this[p(0x1d3)]=null;else this[p(0x1b4)]=generateSelector(d['offsetParent']);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this[p(0x1ee)]=d===e['node'],this[p(0x1d9)]=this['createsStackingContext']?e[p(0x1c6)]:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e[p(0x1cf)];this[p(0x1ee)]&&d['nodeName']!==p(0x1c4)&&(this[p(0x1ef)]=getClosestStackingContext(d['parentNode'])['node']);if(this['parentStackingContext']==c[p(0x1c8)]['designerCanvas']['rootDesignItem'][p(0x1ba)]['parentElement']||this['parentStackingContext']==c[p(0x1c8)][p(0x1ca)]['rootDesignItem']['element'][p(0x1c2)]['parentElement'])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this['parentStackingContextText']=generateSelector(this['parentStackingContext']);}}else this[p(0x1c5)]={},this['createsStackingContext']=![],this[p(0x1d9)]='',this['createsStackingContext']=![],this[p(0x1d3)]=null,this[p(0x1b4)]=null,this['parentStackingContext']=null,this[p(0x1d1)]=null;this['_bindingsRefresh']();});}}function b(c,d){c=c-0x1ad;const e=a();let f=e[c];return f;}customElements[m(0x1f8)](m(0x1d7),DebugView);