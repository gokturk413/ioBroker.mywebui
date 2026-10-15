const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x129))/0x1+parseInt(j(0x104))/0x2*(parseInt(j(0xf3))/0x3)+parseInt(j(0x106))/0x4+-parseInt(j(0x103))/0x5*(parseInt(j(0x13d))/0x6)+-parseInt(j(0xfa))/0x7*(-parseInt(j(0x12b))/0x8)+-parseInt(j(0xf6))/0x9*(-parseInt(j(0x110))/0xa)+-parseInt(j(0xf9))/0xb*(parseInt(j(0x101))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc5e21));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function b(c,d){c=c-0xed;const e=a();let f=e[c];return f;}function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName']['toLowerCase']();if(c['id'])d='#'+c['getAttribute']('id');else c[k(0x130)]('class')&&(d='.'+c[k(0x130)]('class')[k(0x117)]('\x20')[k(0x10b)]('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']===l(0x13e)||c[l(0x10c)]===l(0x109))return{'node':document[l(0x11a)],'reason':l(0x137)};if(c[l(0x10c)]===l(0x107))return getClosestStackingContext(c[l(0xfb)]);const d=c['ownerDocument'][l(0x119)][l(0x116)](c);if(d[l(0x13c)]===l(0x136)||d['position']===l(0x12e))return{'node':c,'reason':l(0x12c)+d['position']};if(d['zIndex']!=='auto'&&d[l(0x13c)]!=='static')return{'node':c,'reason':'position:\x20'+d[l(0x13c)]+';\x20z-index:\x20'+d['zIndex']};if(d['opacity']!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0x10e)]};if(d['transform']!=='none')return{'node':c,'reason':'transform:\x20'+d[l(0x135)]};if(d['scale']!==l(0xed))return{'node':c,'reason':'scale:\x20'+d[l(0xff)]};if(d['translate']!=='none')return{'node':c,'reason':'translate:\x20'+d['translate']};if(d['rotate']!=='none')return{'node':c,'reason':l(0x12a)+d[l(0xf5)]};if(d[l(0xf2)]!==l(0x126))return{'node':c,'reason':l(0x13b)+d[l(0xf2)]};if(d[l(0x11f)]!==l(0xed))return{'node':c,'reason':l(0x124)+d['filter']};if(d['backdropFilter']!=='none')return{'node':c,'reason':l(0x115)+d['backdropFilter']};if(d[l(0xee)]!==l(0xed))return{'node':c,'reason':'perspective:\x20'+d[l(0xee)]};if(d['clipPath']!==l(0xed))return{'node':c,'reason':l(0x121)+d['clipPath']+'\x20'};const e=d[l(0x12d)]||d[l(0x11c)];if(e!==l(0xed)&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0x102)]||d[l(0x100)];if(f!==l(0xed)&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d[l(0xef)]||d[l(0x13a)];if(g!=='none'&&g!==undefined)return{'node':c,'reason':'mask-border:\x20'+g};if(d['isolation']==='isolate')return{'node':c,'reason':'isolation:\x20'+d['isolation']};if(d[l(0xfc)]==='transform'||d['willChange']==='opacity'||d['willChange']==='scale'||d[l(0xfc)]==='translate'||d['willChange']==='rotate')return{'node':c,'reason':'willChange:\x20'+d['willChange']};if(d['zIndex']!=='auto'){const i=c['ownerDocument']['defaultView']['getComputedStyle'](c['parentNode']);if(i['display']==='flex'||i['display']===l(0xf7))return{'node':c,'reason':l(0x105)+d['zIndex']};else{if(i[l(0x123)]!=='none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto')return{'node':c,'reason':l(0x11e)+d[l(0x11b)]};}}const h=d['contain'];if([l(0x118),'paint','strict',l(0x138)]['indexOf'](h)>-0x1||h[l(0xf8)](l(0x139))>-0x1||h[l(0xf8)]('layout')>-0x1)return{'node':c,'reason':l(0xf1)+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static [m(0x128)]=html`
        <div>
            <table>
                    <tr><th colspan="2">Styling</th></tr>
                    <tr><td>display</td><td>[[?this.computedStyle.display]]</td></tr>
                    <tr><td>position</td><td>[[?this.computedStyle.position]]</td></tr>
                    <tr><td>visibility</td><td>[[?this.computedStyle.visibility]]</td></tr>
                    <tr><td>pointerEvents</td><td>[[?this.computedStyle.pointerEvents]]</td></tr>
                    <tr><td>zIndex</td><td>[[?this.computedStyle.zIndex]]</td></tr>
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
        border: 1px solid #ddd;
        padding: 2px 4px;
      }
      
      table tr:nth-child(even){background-color: #f2f2f2;}
      
      table tr:hover {background-color: #ddd;}
      
      table th {
        text-align: left;
        background-color: #989898;
        color: white;
      }
      
      .lnk {
        color: blue;
      }
      .lnk:hover {
        text-decoration: underline;
        cursor: pointer;
      }`;['_ready'];['computedStyle'];[m(0xf4)]='';[m(0x12f)]='';[m(0x114)];['parentStackingContextText'];[m(0x132)];[m(0x122)];constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const n=m;this['_parseAttributesToProperties'](),this[n(0x111)](),this['_ready']=!![];}['_clickLink'](c,d){const o=m;if(d==o(0x10a)){if(this['selectedElementOffsetParent']){let f=DesignItem['GetDesignItem'](this['selectedElementOffsetParent']);f['instanceServiceContainer']['selectionService']['setSelectedElements']([f]);}}else{if(d=='stackingContextParent'){if(this[o(0x114)]){let g=DesignItem['GetDesignItem'](this[o(0x114)]);g['instanceServiceContainer'][o(0x11d)][o(0x112)]([g]);}}}}['update'](c){const p=m;this[p(0x134)]&&requestAnimationFrame(()=>{const q=p;let d=c?.['element'];if(d?.['nodeType']==0x3)d=d['parentNode'];if(d&&d['nodeType']!=0x8&&d[q(0x13f)]!=0xb){this[q(0x113)]=d[q(0x133)][q(0x119)]['getComputedStyle'](d),this[q(0x132)]=d['offsetParent'];if(this['selectedElementOffsetParent']==c['instanceServiceContainer']['designerCanvas'][q(0x127)]['element']||this[q(0x132)]==c['instanceServiceContainer'][q(0xfe)][q(0x127)]['element']['parentElement'])this['selectedElementOffsetParentText']=null,this['selectedElementOffsetParent']=null;else this[q(0x122)]=generateSelector(d[q(0x10a)]);if(d&&d[q(0x13f)]===0x1){const e=getClosestStackingContext(d);this['createsStackingContext']=d===e['node'],this['createsStackingContextReason']=this[q(0xf4)]?e[q(0x10f)]:q(0x125),this['parentStackingContext']=e['node'];this[q(0xf4)]&&d[q(0x10c)]!=='HTML'&&(this[q(0x114)]=getClosestStackingContext(d['parentNode'])[q(0x120)]);if(this['parentStackingContext']==c[q(0x131)]['designerCanvas']['rootDesignItem'][q(0x10d)]['parentElement']||this['parentStackingContext']==c['instanceServiceContainer'][q(0xfe)][q(0x127)]['element'][q(0xf0)][q(0xf0)])this[q(0xfd)]=null,this['parentStackingContext']=null;else this[q(0xfd)]=generateSelector(this['parentStackingContext']);}}else this['computedStyle']={},this[q(0xf4)]=![],this[q(0x12f)]='',this['createsStackingContext']=![],this['selectedElementOffsetParent']=null,this[q(0x122)]=null,this[q(0x114)]=null,this[q(0xfd)]=null;this['_bindingsRefresh']();});}}customElements['define'](m(0x108),DebugView);function a(){const r=['408XJrvwH','position:\x20','mask','sticky','createsStackingContextReason','getAttribute','instanceServiceContainer','selectedElementOffsetParent','ownerDocument','_ready','transform','fixed','root','content','paint','webkitMaskBorder','mixBlendMode:\x20','position','6lAqKQe','HTML','nodeType','none','perspective','maskBorder','parentElement','contain:\x20','mixBlendMode','60UNMlxt','createsStackingContext','rotate','9esJyPT','inline-flex','indexOf','1539373wQGcAK','41321HzbCKw','host','willChange','parentStackingContextText','designerCanvas','scale','webkitMaskImage','156lnYOHs','maskImage','18785NcUWvP','65350wFDUqP','flex-item;\x20z-index:\x20','1078296ERgQdA','#document-fragment','node-projects-debug-view','#document','offsetParent','join','nodeName','element','opacity','reason','4274030dEIFqw','_bindingsParse','setSelectedElements','computedStyle','parentStackingContext','backdropFilter:\x20','getComputedStyle','split','layout','defaultView','documentElement','zIndex','webkitMask','selectionService','child\x20of\x20grid\x20container;\x20z-index:\x20','filter','node','clip-path:\x20','selectedElementOffsetParentText','grid','filter:\x20','not\x20a\x20stacking\x20context','normal','rootDesignItem','template','982015ETFzfi','rotate:\x20'];a=function(){return r;};return a();}