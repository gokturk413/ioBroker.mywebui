function b(c,d){c=c-0x17a;const e=a();let f=e[c];return f;}const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x196))/0x1*(-parseInt(j(0x17c))/0x2)+-parseInt(j(0x182))/0x3+parseInt(j(0x1aa))/0x4+parseInt(j(0x1a3))/0x5*(parseInt(j(0x1b2))/0x6)+-parseInt(j(0x1ab))/0x7*(-parseInt(j(0x1c7))/0x8)+parseInt(j(0x192))/0x9*(parseInt(j(0x18c))/0xa)+-parseInt(j(0x1b4))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeeda9));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1c3)][k(0x186)]();if(c['id'])d='#'+c[k(0x19c)]('id');else c['getAttribute'](k(0x181))&&(d='.'+c[k(0x19c)]('class')[k(0x183)]('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c['nodeName']===l(0x1c8))return{'node':document['documentElement'],'reason':l(0x198)};if(c['nodeName']==='#document-fragment')return getClosestStackingContext(c['host']);const d=c[l(0x18e)][l(0x19e)]['getComputedStyle'](c);if(d['position']==='fixed'||d[l(0x199)]===l(0x17e))return{'node':c,'reason':l(0x1a1)+d['position']};if(d['zIndex']!==l(0x1a8)&&d['position']!==l(0x1b8))return{'node':c,'reason':l(0x1a1)+d[l(0x199)]+';\x20z-index:\x20'+d['zIndex']};if(d[l(0x1ae)]!=='1')return{'node':c,'reason':l(0x1a9)+d[l(0x1ae)]};if(d['transform']!==l(0x193))return{'node':c,'reason':'transform:\x20'+d['transform']};if(d[l(0x1b7)]!=='none')return{'node':c,'reason':'scale:\x20'+d[l(0x1b7)]};if(d['translate']!==l(0x193))return{'node':c,'reason':l(0x17f)+d[l(0x19d)]};if(d[l(0x1a6)]!=='none')return{'node':c,'reason':'rotate:\x20'+d['rotate']};if(d['mixBlendMode']!=='normal')return{'node':c,'reason':l(0x195)+d['mixBlendMode']};if(d['filter']!=='none')return{'node':c,'reason':l(0x18f)+d[l(0x17a)]};if(d[l(0x1bf)]!=='none')return{'node':c,'reason':l(0x1a5)+d['backdropFilter']};if(d['perspective']!==l(0x193))return{'node':c,'reason':'perspective:\x20'+d['perspective']};if(d[l(0x1c4)]!=='none')return{'node':c,'reason':'clip-path:\x20'+d[l(0x1c4)]+'\x20'};const e=d['mask']||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d['maskImage']||d[l(0x1be)];if(f!==l(0x193)&&f!==undefined)return{'node':c,'reason':l(0x17d)+f};const g=d['maskBorder']||d[l(0x19f)];if(g!==l(0x193)&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d['isolation']===l(0x19a))return{'node':c,'reason':l(0x1bb)+d['isolation']};if(d[l(0x1c2)]==='transform'||d['willChange']===l(0x1ae)||d['willChange']===l(0x1b7)||d['willChange']===l(0x19d)||d['willChange']==='rotate')return{'node':c,'reason':'willChange:\x20'+d[l(0x1c2)]};if(d[l(0x1af)]!=='auto'){const i=c['ownerDocument'][l(0x19e)][l(0x18d)](c[l(0x189)]);if(i[l(0x1c1)]==='flex'||i[l(0x1c1)]==='inline-flex')return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d['zIndex']};else{if(i['grid']!==l(0x19b))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d['zIndex']};}}const h=d[l(0x1a7)];if([l(0x187),l(0x197),l(0x1a2),l(0x185)][l(0x18a)](h)>-0x1||h[l(0x18a)]('paint')>-0x1||h['indexOf'](l(0x187))>-0x1)return{'node':c,'reason':'contain:\x20'+h};return getClosestStackingContext(c[l(0x189)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0x188)]=html`
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
      }`;[m(0x1c0)];[m(0x17b)];[m(0x184)]='';[m(0x1bc)]='';['parentStackingContext'];[m(0x1ba)];['selectedElementOffsetParent'];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}[m(0x1b6)](){const n=m;this[n(0x1b3)](),this[n(0x18b)](),this[n(0x1c0)]=!![];}['_clickLink'](c,d){const o=m;if(d==o(0x194)){if(this[o(0x180)]){let f=DesignItem[o(0x191)](this[o(0x180)]);f['instanceServiceContainer'][o(0x1a4)]['setSelectedElements']([f]);}}else{if(d=='stackingContextParent'){if(this['parentStackingContext']){let g=DesignItem['GetDesignItem'](this[o(0x1b0)]);g[o(0x1b5)]['selectionService']['setSelectedElements']([g]);}}}}[m(0x190)](c){this['_ready']&&requestAnimationFrame(()=>{const p=b;let d=c?.[p(0x1ad)];if(d?.[p(0x1c5)]==0x3)d=d[p(0x189)];if(d&&d['nodeType']!=0x8&&d[p(0x1c5)]!=0xb){this[p(0x17b)]=d[p(0x18e)]['defaultView']['getComputedStyle'](d),this['selectedElementOffsetParent']=d[p(0x194)];if(this[p(0x180)]==c['instanceServiceContainer'][p(0x1a0)][p(0x1b1)]['element']||this['selectedElementOffsetParent']==c[p(0x1b5)][p(0x1a0)][p(0x1b1)][p(0x1ad)]['parentElement'])this[p(0x1b9)]=null,this['selectedElementOffsetParent']=null;else this[p(0x1b9)]=generateSelector(d['offsetParent']);if(d&&d['nodeType']===0x1){const e=getClosestStackingContext(d);this[p(0x184)]=d===e[p(0x1c6)],this[p(0x1bc)]=this[p(0x184)]?e['reason']:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e[p(0x1c6)];this[p(0x184)]&&d['nodeName']!=='HTML'&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])[p(0x1c6)]);if(this[p(0x1b0)]==c[p(0x1b5)]['designerCanvas']['rootDesignItem']['element']['parentElement']||this[p(0x1b0)]==c['instanceServiceContainer'][p(0x1a0)][p(0x1b1)]['element']['parentElement']['parentElement'])this['parentStackingContextText']=null,this[p(0x1b0)]=null;else this[p(0x1ba)]=generateSelector(this[p(0x1b0)]);}}else this['computedStyle']={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this[p(0x184)]=![],this['selectedElementOffsetParent']=null,this[p(0x1b9)]=null,this['parentStackingContext']=null,this[p(0x1ba)]=null;this['_bindingsRefresh']();});}}customElements[m(0x1ac)](m(0x1bd),DebugView);function a(){const q=['parentStackingContextText','isolation:\x20','createsStackingContextReason','node-projects-debug-view','webkitMaskImage','backdropFilter','_ready','display','willChange','nodeName','clipPath','nodeType','node','16ccKqGU','#document','filter','computedStyle','2516MLdHbJ','mask-image:\x20','sticky','translate:\x20','selectedElementOffsetParent','class','5506869cGcuMY','split','createsStackingContext','content','toLowerCase','layout','template','parentNode','indexOf','_bindingsParse','13601710KfljKl','getComputedStyle','ownerDocument','filter:\x20','update','GetDesignItem','9eJWrIt','none','offsetParent','mixBlendMode:\x20','969WOTQpL','paint','root','position','isolate','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','getAttribute','translate','defaultView','webkitMaskBorder','designerCanvas','position:\x20','strict','547525NHzbVu','selectionService','backdropFilter:\x20','rotate','contain','auto','opacity:\x20','7364676EnIxZa','1889538KZrHbh','define','element','opacity','zIndex','parentStackingContext','rootDesignItem','84LfyoHi','_parseAttributesToProperties','13654388bxHdSB','instanceServiceContainer','ready','scale','static','selectedElementOffsetParentText'];a=function(){return q;};return a();}