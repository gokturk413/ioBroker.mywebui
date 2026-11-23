const m=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x140))/0x1*(-parseInt(j(0x151))/0x2)+parseInt(j(0x17a))/0x3*(-parseInt(j(0x135))/0x4)+parseInt(j(0x12e))/0x5*(parseInt(j(0x14b))/0x6)+-parseInt(j(0x15e))/0x7+-parseInt(j(0x158))/0x8*(parseInt(j(0x137))/0x9)+parseInt(j(0x13d))/0xa+parseInt(j(0x142))/0xb*(parseInt(j(0x165))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x38182));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function a(){const r=['translate','normal','isolation','_ready','1227caKCjh','ownerDocument','paint','maskImage','stackingContextParent','_parseAttributesToProperties','zIndex','clip-path:\x20','5zXxgbi','offsetParent','display','mask','opacity','willChange','flex','776wUOBnT','scale:\x20','160596UXfMIB','computedStyle','filter','position:\x20','contain','none\x20/\x20none\x20/\x20none\x20/\x20row\x20/\x20auto\x20/\x20auto','849690UOgddn','class','designerCanvas','216579eSDMov','parentStackingContext','11hvKQNC','fixed','HTML','element','toLowerCase','instanceServiceContainer','node','mask-border:\x20','createsStackingContext','746178yHPiAy','contain:\x20','transform','selectionService','_clickLink','grid','2jSqnhn',';\x20z-index:\x20','rotate','selectedElementOffsetParent','reason','filter:\x20','willChange:\x20','152iXruJH','selectedElementOffsetParentText','mixBlendMode:\x20','#document','isolate','backdropFilter','1546419aiNyiD','nodeName','update','rootDesignItem','static','nodeType','getAttribute','5317800ODHuBA','#document-fragment','node-projects-debug-view','sticky','inline-flex','parentElement','none','position','createsStackingContextReason','parentNode','parentStackingContextText','layout','getComputedStyle','content','GetDesignItem','defaultView','perspective:\x20'];a=function(){return r;};return a();}function generateSelector(c){const k=b;if(!c)return'';let d,e=c['nodeName'][k(0x146)]();if(c['id'])d='#'+c['getAttribute']('id');else c['getAttribute'](k(0x13e))&&(d='.'+c[k(0x164)]('class')['split']('\x20')['join']('.'));return d?e+d:e;}const getClosestStackingContext=function(c){const l=b;if(!c||c['nodeName']==='HTML'||c['nodeName']===l(0x15b))return{'node':document['documentElement'],'reason':'root'};if(c[l(0x15f)]===l(0x166))return getClosestStackingContext(c['host']);const d=c[l(0x127)]['defaultView'][l(0x171)](c);if(d[l(0x16c)]===l(0x143)||d['position']===l(0x168))return{'node':c,'reason':l(0x13a)+d[l(0x16c)]};if(d[l(0x12c)]!=='auto'&&d[l(0x16c)]!==l(0x162))return{'node':c,'reason':'position:\x20'+d[l(0x16c)]+l(0x152)+d['zIndex']};if(d[l(0x132)]!=='1')return{'node':c,'reason':'opacity:\x20'+d[l(0x132)]};if(d[l(0x14d)]!==l(0x16b))return{'node':c,'reason':'transform:\x20'+d['transform']};if(d['scale']!=='none')return{'node':c,'reason':l(0x136)+d['scale']};if(d[l(0x176)]!==l(0x16b))return{'node':c,'reason':'translate:\x20'+d['translate']};if(d[l(0x153)]!=='none')return{'node':c,'reason':'rotate:\x20'+d[l(0x153)]};if(d['mixBlendMode']!==l(0x177))return{'node':c,'reason':l(0x15a)+d['mixBlendMode']};if(d['filter']!==l(0x16b))return{'node':c,'reason':l(0x156)+d[l(0x139)]};if(d[l(0x15d)]!==l(0x16b))return{'node':c,'reason':'backdropFilter:\x20'+d['backdropFilter']};if(d['perspective']!==l(0x16b))return{'node':c,'reason':l(0x175)+d['perspective']};if(d['clipPath']!=='none')return{'node':c,'reason':l(0x12d)+d['clipPath']+'\x20'};const e=d[l(0x131)]||d['webkitMask'];if(e!=='none'&&e!==undefined)return{'node':c,'reason':'mask:\x20\x20'+e};const f=d[l(0x129)]||d['webkitMaskImage'];if(f!=='none'&&f!==undefined)return{'node':c,'reason':'mask-image:\x20'+f};const g=d['maskBorder']||d['webkitMaskBorder'];if(g!=='none'&&g!==undefined)return{'node':c,'reason':l(0x149)+g};if(d['isolation']===l(0x15c))return{'node':c,'reason':'isolation:\x20'+d[l(0x178)]};if(d[l(0x133)]===l(0x14d)||d['willChange']===l(0x132)||d[l(0x133)]==='scale'||d[l(0x133)]===l(0x176)||d['willChange']==='rotate')return{'node':c,'reason':l(0x157)+d[l(0x133)]};if(d[l(0x12c)]!=='auto'){const i=c[l(0x127)]['defaultView']['getComputedStyle'](c[l(0x16e)]);if(i[l(0x130)]===l(0x134)||i[l(0x130)]===l(0x169))return{'node':c,'reason':'flex-item;\x20z-index:\x20'+d[l(0x12c)]};else{if(i[l(0x150)]!==l(0x13c))return{'node':c,'reason':'child\x20of\x20grid\x20container;\x20z-index:\x20'+d[l(0x12c)]};}}const h=d[l(0x13b)];if([l(0x170),'paint','strict',l(0x172)]['indexOf'](h)>-0x1||h['indexOf'](l(0x128))>-0x1||h['indexOf']('layout')>-0x1)return{'node':c,'reason':l(0x14c)+h};return getClosestStackingContext(c['parentNode']);};export class DebugView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
      }`;[m(0x179)];[m(0x138)];['createsStackingContext']='';['createsStackingContextReason']='';['parentStackingContext'];[m(0x16f)];[m(0x154)];['selectedElementOffsetParentText'];constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const n=m;this[n(0x12b)](),this['_bindingsParse'](),this['_ready']=!![];}[m(0x14f)](c,d){const o=m;if(d=='offsetParent'){if(this['selectedElementOffsetParent']){let f=DesignItem['GetDesignItem'](this[o(0x154)]);f[o(0x147)]['selectionService']['setSelectedElements']([f]);}}else{if(d==o(0x12a)){if(this['parentStackingContext']){let g=DesignItem[o(0x173)](this['parentStackingContext']);g[o(0x147)][o(0x14e)]['setSelectedElements']([g]);}}}}[m(0x160)](c){const p=m;this[p(0x179)]&&requestAnimationFrame(()=>{const q=p;let d=c?.[q(0x145)];if(d?.[q(0x163)]==0x3)d=d[q(0x16e)];if(d&&d[q(0x163)]!=0x8&&d[q(0x163)]!=0xb){this[q(0x138)]=d[q(0x127)][q(0x174)][q(0x171)](d),this['selectedElementOffsetParent']=d['offsetParent'];if(this[q(0x154)]==c[q(0x147)]['designerCanvas'][q(0x161)][q(0x145)]||this['selectedElementOffsetParent']==c['instanceServiceContainer'][q(0x13f)][q(0x161)][q(0x145)]['parentElement'])this['selectedElementOffsetParentText']=null,this[q(0x154)]=null;else this[q(0x159)]=generateSelector(d[q(0x12f)]);if(d&&d[q(0x163)]===0x1){const e=getClosestStackingContext(d);this[q(0x14a)]=d===e['node'],this[q(0x16d)]=this['createsStackingContext']?e[q(0x155)]:'not\x20a\x20stacking\x20context',this['parentStackingContext']=e['node'];this['createsStackingContext']&&d['nodeName']!==q(0x144)&&(this['parentStackingContext']=getClosestStackingContext(d['parentNode'])[q(0x148)]);if(this[q(0x141)]==c['instanceServiceContainer']['designerCanvas']['rootDesignItem'][q(0x145)][q(0x16a)]||this[q(0x141)]==c['instanceServiceContainer']['designerCanvas'][q(0x161)][q(0x145)]['parentElement'][q(0x16a)])this['parentStackingContextText']=null,this[q(0x141)]=null;else this[q(0x16f)]=generateSelector(this['parentStackingContext']);}}else this['computedStyle']={},this['createsStackingContext']=![],this['createsStackingContextReason']='',this[q(0x14a)]=![],this[q(0x154)]=null,this['selectedElementOffsetParentText']=null,this['parentStackingContext']=null,this[q(0x16f)]=null;this['_bindingsRefresh']();});}}function b(c,d){c=c-0x127;const e=a();let f=e[c];return f;}customElements['define'](m(0x167),DebugView);