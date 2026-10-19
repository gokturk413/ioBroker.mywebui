function b(c,d){c=c-0x14b;const e=a();let f=e[c];return f;}const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x187))/0x1*(-parseInt(j(0x194))/0x2)+-parseInt(j(0x16d))/0x3*(-parseInt(j(0x15c))/0x4)+parseInt(j(0x166))/0x5+parseInt(j(0x16c))/0x6*(-parseInt(j(0x172))/0x7)+parseInt(j(0x190))/0x8+-parseInt(j(0x16f))/0x9+-parseInt(j(0x175))/0xa*(-parseInt(j(0x180))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbb9d5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function a(){const s=['perspective','parentStackingContext','parentElement','paint','normal','opacity','webkitMask','maskBorder','#document','translate:\x20','2287876qHZowI','mask','parentNode','backdropFilter','mask-image:\x20','stackingContextParent','_restoreCachedInititalValues','webkitMaskBorder','createsStackingContextReason','getAttribute','2967915JLbnZa','node','zIndex','defaultView','webkitMaskImage','offsetParent','60XFFcYg','6kcmwFT','rotate','12952377Ccfwnp','documentElement','child\x20of\x20grid\x20container;\x20z-index:\x20','743701owUmtI','willChange','getComputedStyle','400790EbWtdu','willChange:\x20','contain:\x20','element','selectionService','_ready','designerCanvas','selectedElementOffsetParent','opacity:\x20','none','class','407JNunCB','mask-border:\x20','mixBlendMode','static','translate','computedStyle','createsStackingContext','511NLMZgS','mask:\x20\x20','flex','transform','filter','HTML','rootDesignItem','setSelectedElements','strict','1700936tjhNaF','nodeType','isolation:\x20','ownerDocument','638GmwpYI','selectedElementOffsetParentText','layout','nodeName',';\x20z-index:\x20','reason','indexOf','auto'];a=function(){return s;};return a();}function generateSelector(c){const k=b;if(!c)return'';let d,e=c[k(0x14d)]['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x165)](k(0x17f))&&(d='.'+c['getAttribute']('class')['split']('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c[l(0x14d)]===l(0x18c)||c['nodeName']===l(0x15a))return{'node':document[l(0x170)],'reason':'root'};if(c[l(0x14d)]==='#document-fragment')return getClosestStackingContext(c['host']);const d=c['ownerDocument']['defaultView'][l(0x174)](c);if(d['position']==='fixed'||d['position']==='sticky')return{'node':c,'reason':'position:\x20'+d['position']};if(d[l(0x168)]!=='auto'&&d['position']!==l(0x183))return{'node':c,'reason':'position:\x20'+d['position']+l(0x14e)+d[l(0x168)]};if(d[l(0x157)]!=='1')return{'node':c,'reason':l(0x17d)+d[l(0x157)]};if(d[l(0x18a)]!==l(0x17e))return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!==l(0x17e))return{'node':c,'reason':'scale:\x20'+d['scale']};if(d['translate']!==l(0x17e))return{'node':c,'reason':l(0x15b)+d['translate']};if(d['rotate']!=='none')return{'node':c,'reason':'rotate:\x20'+d['rotate']};if(d[l(0x182)]!==l(0x156))return{'node':c,'reason':'mixBlendMode:\x20'+d['mixBlendMode']};if(d[l(0x18b)]!=='none')return{'node':c,'reason':'filter:\x20'+d['filter']};if(d['backdropFilter']!=='none')return{'node':c,'reason':'backdropFilter:\x20'+d[l(0x15f)]};if(d['perspective']!==l(0x17e))return{'node':c,'reason':'perspective:\x20'+d[l(0x152)]};if(d['clipPath']!=='none')return{'node':c,'reason':'clip-path:\x20'+d['clipPath']+'\x20'};const e=d[l(0x15d)]||d[l(0x158)];if(e!=='none'&&e!==undefined)return{'node':c,'reason':l(0x188)+e};const f=d['maskImage']||d[l(0x16a)];if(f!=='none'&&f!==undefined)return{'node':c,'reason':l(0x160)+f};const g=d[l(0x159)]||d[l(0x163)];if(g!==l(0x17e)&&g!==undefined)return{'node':c,'reason':l(0x181)+g};if(d['isolation']==='isolate')return{'node':c,'reason':l(0x192)+d['isolation']};if(d[l(0x173)]===l(0x18a)||d[l(0x173)]==='opacity'||d['willChange']==='scale'||d['willChange']===l(0x184)||d['willChange']===l(0x16e))return{'node':c,'reason':l(0x176)+d[l(0x173)]};if(d[l(0x168)]!==l(0x151)){const i=c[l(0x193)][l(0x169)]['getComputedStyle'](c['parentNode']);if(i['display']===l(0x189)||i['display']==='inline-flex')return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d['zIndex']};else{if(i['grid']!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x171)+d['zIndex']};}}const h=d['contain'];if([l(0x14c),l(0x155),l(0x18f),'content'][l(0x150)](h)>-0x1||h['indexOf'](l(0x155))>-0x1||h[l(0x150)](l(0x14c))>-0x1)return{'node':c,'reason':l(0x177)+h};return getClosestStackingContext(c[l(0x15e)]);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;[m(0x17a)];['computedStyle'];[m(0x186)]='';['createsStackingContextReason']='';[m(0x153)];['parentStackingContextText'];['selectedElementOffsetParent'];[m(0x14b)];constructor(){const n=m;super(),this[n(0x162)]();}['ready'](){const o=m;this['_parseAttributesToProperties'](),this['_bindingsParse'](),this[o(0x17a)]=!![];}['_clickLink'](c,d){const p=m;if(d=='offsetParent'){if(this[p(0x17c)]){let f=DesignItem['GetDesignItem'](this[p(0x17c)]);f['instanceServiceContainer'][p(0x179)][p(0x18e)]([f]);}}else{if(d==p(0x161)){if(this['parentStackingContext']){let g=DesignItem['GetDesignItem'](this[p(0x153)]);g['instanceServiceContainer'][p(0x179)]['setSelectedElements']([g]);}}}}['update'](c){const q=m;this[q(0x17a)]&&requestAnimationFrame(()=>{const r=q;let d=c?.[r(0x178)];if(d?.[r(0x191)]==0x3)d=d[r(0x15e)];if(d&&d['nodeType']!=0x8&&d['nodeType']!=0xb){this['computedStyle']=d[r(0x193)][r(0x169)]['getComputedStyle'](d),this[r(0x17c)]=d['offsetParent'];if(this[r(0x17c)]==c['instanceServiceContainer']['designerCanvas'][r(0x18d)]['element']||this[r(0x17c)]==c['instanceServiceContainer'][r(0x17b)]['rootDesignItem']['element']['parentElement'])this['selectedElementOffsetParentText']=null,this[r(0x17c)]=null;else this['selectedElementOffsetParentText']=generateSelector(d[r(0x16b)]);if(d&&d[r(0x191)]===0x1){const e=getClosestStackingContext(d);this[r(0x186)]=d===e[r(0x167)],this[r(0x164)]=this[r(0x186)]?e[r(0x14f)]:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e['node'];this[r(0x186)]&&d['nodeName']!==r(0x18c)&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])['node']);if(this['parentStackingContext']==c['instanceServiceContainer']['designerCanvas']['rootDesignItem'][r(0x178)]['parentElement']||this[r(0x153)]==c['instanceServiceContainer']['designerCanvas'][r(0x18d)][r(0x178)][r(0x154)][r(0x154)])this['parentStackingContextText']=null,this['parentStackingContext']=null;else this['parentStackingContextText']=generateSelector(this['parentStackingContext']);}}else this[r(0x185)]={},this[r(0x186)]=![],this['createsStackingContextReason']='',this[r(0x186)]=![],this[r(0x17c)]=null,this['selectedElementOffsetParentText']=null,this['parentStackingContext']=null,this['parentStackingContextText']=null;this['_bindingsRefresh']();});}}customElements['define']('node-projects-debug-view',DebugView);