const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x234))/0x1+parseInt(j(0x20b))/0x2*(parseInt(j(0x212))/0x3)+-parseInt(j(0x216))/0x4*(parseInt(j(0x1fb))/0x5)+-parseInt(j(0x225))/0x6*(-parseInt(j(0x220))/0x7)+parseInt(j(0x22e))/0x8+parseInt(j(0x23d))/0x9+-parseInt(j(0x20e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb269c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function a(){const r=['position','display','auto','selectedElementOffsetParent','class','node-projects-debug-view','nodeName','flex','contain','element','#document','getAttribute','getComputedStyle','selectedElementOffsetParentText','4596785NNIhXc',';\x20z-index:\x20','opacity','flex-item;\x20z-index:\x20','transform:\x20','maskImage','indexOf','perspective','rotate','parentElement','_ready','parentNode','isolation:\x20','nodeType','join','instanceServiceContainer','3106odGKWD','contain:\x20','clip-path:\x20','27112000PLqbye','node','split','createsStackingContextReason','1695jweDmn','none','_bindingsParse','translate','4uuSoSu','_clickLink','grid','inline-flex','createsStackingContext','willChange:\x20','parentStackingContextText','defaultView','GetDesignItem','offsetParent','322qyfuOv','isolation','transform','content','ready','127002BVwKIL','mask-border:\x20','backdropFilter:\x20','ownerDocument','parentStackingContext','template','position:\x20','stackingContextParent','normal','611648mkjCno','layout','designerCanvas','clipPath','scale','sticky','1448025eGAoDZ','_restoreCachedInititalValues','fixed','setSelectedElements','reason','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','zIndex','computedStyle','willChange','8871561FDYmZn','webkitMaskImage','child\x20of\x20grid\x20container;\x20z-index:\x20','not\x20a\x20stacking\x20context','mask-image:\x20','rootDesignItem'];a=function(){return r;};return a();}function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x1f3)]['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x1f8)]('class')&&(d='.'+c['getAttribute'](k(0x1f1))[k(0x210)]('\x20')[k(0x209)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c[l(0x1f3)]===l(0x1f7))return{'node':document['documentElement'],'reason':'root'};if(c[l(0x1f3)]==='#document-fragment')return getClosestStackingContext(c['host']);const d=c[l(0x228)][l(0x21d)][l(0x1f9)](c);if(d[l(0x1ed)]===l(0x236)||d[l(0x1ed)]===l(0x233))return{'node':c,'reason':'position:\x20'+d['position']};if(d[l(0x23a)]!==l(0x1ef)&&d[l(0x1ed)]!=='static')return{'node':c,'reason':l(0x22b)+d['position']+l(0x1fc)+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0x1fd)]};if(d[l(0x222)]!=='none')return{'node':c,'reason':l(0x1ff)+d['transform']};if(d[l(0x232)]!==l(0x213))return{'node':c,'reason':'scale:\x20'+d[l(0x232)]};if(d['translate']!==l(0x213))return{'node':c,'reason':'translate:\x20'+d['translate']};if(d[l(0x203)]!==l(0x213))return{'node':c,'reason':'rotate:\x20'+d['rotate']};if(d['mixBlendMode']!==l(0x22d))return{'node':c,'reason':'mixBlendMode:\x20'+d['mixBlendMode']};if(d['filter']!==l(0x213))return{'node':c,'reason':'filter:\x20'+d['filter']};if(d['backdropFilter']!==l(0x213))return{'node':c,'reason':l(0x227)+d['backdropFilter']};if(d['perspective']!==l(0x213))return{'node':c,'reason':'perspective:\x20'+d[l(0x202)]};if(d[l(0x231)]!==l(0x213))return{'node':c,'reason':l(0x20d)+d[l(0x231)]+'\x20'};const e=d['mask']||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0x200)]||d[l(0x23e)];if(f!==l(0x213)&&f!==undefined)return{'node':c,'reason':l(0x1eb)+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!=='none'&&g!==undefined)return{'node':c,'reason':l(0x226)+g};if(d[l(0x221)]==='isolate')return{'node':c,'reason':l(0x207)+d['isolation']};if(d[l(0x23c)]===l(0x222)||d[l(0x23c)]==='opacity'||d['willChange']==='scale'||d[l(0x23c)]===l(0x215)||d[l(0x23c)]===l(0x203))return{'node':c,'reason':l(0x21b)+d['willChange']};if(d['zIndex']!=='auto'){const i=c[l(0x228)]['defaultView']['getComputedStyle'](c[l(0x206)]);if(i[l(0x1ee)]===l(0x1f4)||i[l(0x1ee)]===l(0x219))return{'node':c,'reason':l(0x1fe)+d['zIndex']};else{if(i[l(0x218)]!==l(0x239))return{'node':c,'reason':l(0x1e9)+d['zIndex']};}}const h=d[l(0x1f5)];if([l(0x22f),'paint','strict',l(0x223)]['indexOf'](h)>-0x1||h['indexOf']('paint')>-0x1||h[l(0x201)](l(0x22f))>-0x1)return{'node':c,'reason':l(0x20c)+h};return getClosestStackingContext(c['parentNode']);};function b(c,d){c=c-0x1e9;const e=a();let f=e[c];return f;}export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0x22a)]=html`
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
      }`;[m(0x205)];['computedStyle'];[m(0x21a)]='';[m(0x211)]='';[m(0x229)];[m(0x21c)];['selectedElementOffsetParent'];['selectedElementOffsetParentText'];constructor(){const n=m;super(),this[n(0x235)]();}[m(0x224)](){const o=m;this['_parseAttributesToProperties'](),this[o(0x214)](),this[o(0x205)]=!![];}[m(0x217)](c,d){const p=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem[p(0x21e)](this[p(0x1f0)]);f['instanceServiceContainer']['selectionService'][p(0x237)]([f]);}}else{if(d==p(0x22c)){if(this[p(0x229)]){let g=DesignItem['GetDesignItem'](this['parentStackingContext']);g['instanceServiceContainer']['selectionService']['setSelectedElements']([g]);}}}}['update'](c){this['_ready']&&requestAnimationFrame(()=>{const q=b;let d=c?.[q(0x1f6)];if(d?.[q(0x208)]==0x3)d=d[q(0x206)];if(d&&d[q(0x208)]!=0x8&&d['nodeType']!=0xb){this[q(0x23b)]=d['ownerDocument'][q(0x21d)]['getComputedStyle'](d),this[q(0x1f0)]=d['offsetParent'];if(this[q(0x1f0)]==c[q(0x20a)]['designerCanvas'][q(0x1ec)]['element']||this[q(0x1f0)]==c['instanceServiceContainer'][q(0x230)][q(0x1ec)][q(0x1f6)]['parentElement'])this[q(0x1fa)]=null,this['selectedElementOffsetParent']=null;else this[q(0x1fa)]=generateSelector(d[q(0x21f)]);if(d&&d[q(0x208)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e[q(0x20f)],this[q(0x211)]=this['createsStackingContext']?e[q(0x238)]:q(0x1ea),this['parentStackingContext']=e['node'];this[q(0x21a)]&&d[q(0x1f3)]!=='HTML'&&(this[q(0x229)]=getClosestStackingContext(d['parentNode'])[q(0x20f)]);if(this[q(0x229)]==c['instanceServiceContainer'][q(0x230)][q(0x1ec)][q(0x1f6)][q(0x204)]||this['parentStackingContext']==c[q(0x20a)]['designerCanvas'][q(0x1ec)][q(0x1f6)][q(0x204)][q(0x204)])this['parentStackingContextText']=null,this[q(0x229)]=null;else this[q(0x21c)]=generateSelector(this['parentStackingContext']);}}else this[q(0x23b)]={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this['createsStackingContext']=![],this[q(0x1f0)]=null,this[q(0x1fa)]=null,this['parentStackingContext']=null,this[q(0x21c)]=null;this['_bindingsRefresh']();});}}customElements['define'](m(0x1f2),DebugView);