const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xe1))/0x1+parseInt(n(0x116))/0x2*(-parseInt(n(0xd8))/0x3)+-parseInt(n(0xe9))/0x4+parseInt(n(0x119))/0x5+-parseInt(n(0xf8))/0x6*(-parseInt(n(0xfa))/0x7)+-parseInt(n(0xdf))/0x8+-parseInt(n(0xf9))/0x9*(-parseInt(n(0x111))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa7033));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function b(c,d){c=c-0xcf;const e=a();let f=e[c];return f;}import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';function a(){const z=['openGroup','473795iLMpWE','length','onclick','_originBotRight','_applyTransform','_originTopMid','_applyButton','_originBotMid','3120508VqRbYU','spacing-input-x','_absoluteButton','transform','_transformOrigin','origin-top-right','_inputSpacingY','commit','windowContentStyle','toString','_changePositionMode','botMid','sort','_inputSpacingX','rotate(','3501390OWsWdJ','14571WFJqYL','14jdvjRd','valueAsNumber','checked','width','top','setStyle','_selectionChanged','origin-bot-right','midLeft','_originMidMid','_previousSelectionRect','replaceAll','_originBotLeft','sin','_originTopLeft','_designerCanvas','origin-top-mid','_relativeButton','getStyle','relative','origin-mid-mid','left','_checkOrigin','13210tVbMun','_inputX','_applySpacing','windowTitle','transform-input-x','64YfUxlc','absolute','origin-bot-mid','718020TCyUhr','define','topMid','botLeft','transform-button-absolute','_inputR','_calculateTransform','_inputY','height','_getDomElement','deg)','setAttribute','instanceServiceContainer','_originMidRight','_originMidLeft','110910TqEXsW','transform-button-apply','selectionService','_transformMode','topLeft','aria-pressed','_originTopRight','10207824RPopBI'];a=function(){return z;};return a();}export class TransformToolPopup extends DraggableToolWindow{[o(0x104)];['_selectionChanged'];['_relativeButton'];['_absoluteButton'];[o(0xe7)];['_inputX'];['_inputY'];[o(0x11e)];['_inputSpacingX'];['_inputSpacingY'];[o(0x108)];[o(0xe6)];[o(0xde)];['_originMidLeft'];[o(0x103)];[o(0xd6)];['_originBotLeft'];['_originBotMid'];['_originBotRight'];[o(0xdb)];[o(0xed)];get[o(0x114)](){return'Transform';}get[o(0xf1)](){return css`
      :host {
        width: 232px;
        font: 12px system-ui, sans-serif;
        color: var(--wcd-designer-view-statusbar-color, #354348);
      }
      .window-frame {
        background: var(--wcd-tool-popup-background, var(--wcd-designer-view-statusbar-background, #787f82));
        border: 1px solid var(--wcd-tool-popup-border-color, var(--wcd-color-border, #596c7a));
        border-radius: 6px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, .25);
      }
      .title-bar {
        height: 29px;
        padding: 6px 8px;
        background: var(--wcd-tool-popup-title-background, rgba(255, 255, 255, .08));
        border-bottom: 1px solid var(--wcd-tool-popup-border-color, var(--wcd-color-border, #596c7a));
      }
      .title-text {
        font: 600 11px/16px system-ui, sans-serif;
        color: inherit;
      }
      .close-btn {
        color: inherit;
        width: 20px;
        height: 20px;
        border-radius: 4px;
      }
      .window-content {
        padding: 8px;
      }
      #input-div, #spacing-div {
        display: grid;
        gap: 6px 8px;
        align-items: center;
        font-size: 11px;
      }
      #input-div {
        grid-template-columns: auto minmax(0, 1fr);
      }
      #spacing-div {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--wcd-tool-popup-border-color, var(--wcd-color-border, #596c7a));
      }
      input[type="number"] {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        height: 24px;
        padding: 0 4px;
        border: 1px solid var(--wcd-color-border, #596c7a);
        border-radius: 4px;
        background: var(--wcd-input-background-color, white);
        color: inherit;
        font: inherit;
      }
      #button-div {
        display: flex;
        gap: 4px;
        margin-top: 8px;
      }
      #button-div button {
        flex: 1;
      }
      .window-content button {
        height: 24px;
        border: 0;
        border-radius: 4px;
        padding: 0 8px;
        font: inherit;
        color: inherit;
        background: rgba(255, 255, 255, .12);
        cursor: pointer;
      }
      .window-content button[aria-pressed="true"], #transform-button-apply {
        background: var(--wcd-designer-view-tool-selected-background, deepskyblue);
      }
      .window-content button:hover, .close-btn:hover {
        background: var(--wcd-designer-view-tool-hover-background, rgba(164,206,249,.6));
        color: inherit;
      }
      button:focus-visible, input:focus-visible {
        outline: 2px solid var(--wcd-color-focus, #47977c);
        outline-offset: -2px;
      }
      #origin-div {
        display: grid;
        justify-items: center;
        gap: 8px;
        margin: 12px 0;
        font-size: 11px;
      }
      #cube {
        display: grid;
        grid-template-columns: repeat(3, 16px);
        gap: 8px;
        padding: 8px;
        border: 1px solid var(--wcd-tool-popup-border-color, var(--wcd-color-border, #596c7a));
        border-radius: 4px;
        background: rgba(255, 255, 255, .08);
      }
      #cube input {
        width: 16px;
        height: 16px;
        margin: 0;
        accent-color: var(--wcd-designer-view-tool-selected-background, deepskyblue);
      }
      #apply-div {
        display: flex;
        justify-content: flex-end;
      }
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const p=o;super(c),this[p(0x10b)]=this[p(0xd2)]('transform-button-relative'),this['_absoluteButton']=this[p(0xd2)](p(0x11d)),this[p(0xe7)]=this[p(0xd2)](p(0xd9)),this[p(0x112)]=this['_getDomElement'](p(0x115)),this['_inputY']=this['_getDomElement']('transform-input-y'),this['_inputR']=this['_getDomElement']('transform-input-r'),this['_inputSpacingX']=this[p(0xd2)](p(0xea)),this['_inputSpacingY']=this[p(0xd2)]('spacing-input-y'),this['_originTopLeft']=this['_getDomElement']('origin-top-left'),this[p(0xe6)]=this['_getDomElement'](p(0x10a)),this[p(0xde)]=this['_getDomElement'](p(0xee)),this[p(0xd7)]=this['_getDomElement']('origin-mid-left'),this['_originMidMid']=this[p(0xd2)](p(0x10e)),this['_originMidRight']=this[p(0xd2)]('origin-mid-right'),this[p(0x106)]=this[p(0xd2)]('origin-bot-left'),this[p(0xe8)]=this[p(0xd2)](p(0x118)),this['_originBotRight']=this['_getDomElement'](p(0x101)),this['_relativeButton']['onclick']=()=>this[p(0xf3)](p(0x10d)),this[p(0xeb)][p(0xe3)]=()=>this['_changePositionMode'](p(0x117)),this['_applyButton']['onclick']=()=>this['_applyTransform'](),this['_transformMode']=p(0x10d),this['_changePositionMode'](this['_transformMode']);}[o(0xf3)](c){const q=o;this[q(0x10b)][q(0xd4)](q(0xdd),String(c==='relative')),this[q(0xeb)]['setAttribute'](q(0xdd),String(c==='absolute')),this[q(0xdb)]=c;}[o(0xe5)](){const r=o;this[r(0x110)]();if(!this[r(0x109)])return;let c=this['_designerCanvas'][r(0xd5)][r(0xda)]['selectedElements'];c=filterChildPlaceItems(c),this[r(0x100)]=![],this['_designerCanvas'][r(0xd5)]['selectionService']['onSelectionChanged']['once'](()=>{const s=r;this[s(0x100)]=!![],this[s(0x104)]=null;});if(c[r(0xe2)]!=0x0){let d={'x':isNaN(this['_inputX'][r(0xfb)])?null:this['_inputX'][r(0xfb)],'y':isNaN(this[r(0xd0)][r(0xfb)])?null:this[r(0xd0)][r(0xfb)]},e=this['_inputR']['valueAsNumber']?this['_inputR']['valueAsNumber']:0x0,f=c[0x0][r(0xe0)]('Transform\x20selection');if(!this[r(0x104)]||this['_selectionChanged'])this['_previousSelectionRect']=calculateOuterRect(c,this['_designerCanvas']);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h[r(0x10c)]('left')),'y':parseFloat(h[r(0x10c)]('top')),'width':parseFloat(h[r(0x10c)]('width')),'height':parseFloat(h[r(0x10c)]('height'))},j=h[r(0x10c)]('transform'),k=0x0;if(j)k=parseFloat(h['getStyle']('transform')[r(0x105)]('rotate(','')[r(0x105)](r(0xd3),''));let l=this[r(0xcf)](this[r(0x104)],g,i,e,d,this['_transformMode']);h['setStyle'](r(0x10f),l['x'][r(0xf2)]()+'px'),h['setStyle']('top',l['y'][r(0xf2)]()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[r(0xff)]('transform',r(0xf7)+m+r(0xd3));else h['removeStyle'](r(0xec));}this[r(0x113)](c),f[r(0xf0)]();}}['_calculateTransformOriginPosition'](c){const t=o;switch(this['_transformOrigin']){case t(0xdc):return{'x':c['x'],'y':c['y']};case t(0x11b):return{'x':c['x']+c[t(0xfd)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case t(0x102):return{'x':c['x'],'y':c['y']+c[t(0xd1)]/0x2};case'midMid':return{'x':c['x']+c[t(0xfd)]/0x2,'y':c['y']+c[t(0xd1)]/0x2};case'midRight':return{'x':c['x']+c[t(0xfd)],'y':c['y']+c['height']/0x2};case t(0x11c):return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c[t(0xfd)],'y':c['y']+c['height']};}}['_checkOrigin'](){const u=o;if(this[u(0x108)]['checked'])this[u(0xed)]='topLeft';else{if(this['_originTopMid']['checked'])this[u(0xed)]='topMid';else{if(this[u(0xde)][u(0xfc)])this['_transformOrigin']='topRight';else{if(this[u(0xd7)][u(0xfc)])this['_transformOrigin']=u(0x102);else{if(this['_originMidMid'][u(0xfc)])this[u(0xed)]='midMid';else{if(this['_originMidRight']['checked'])this[u(0xed)]='midRight';else{if(this[u(0x106)][u(0xfc)])this[u(0xed)]='botLeft';else{if(this['_originBotMid'][u(0xfc)])this['_transformOrigin']=u(0xf4);else{if(this[u(0xe4)]['checked'])this[u(0xed)]='botRight';}}}}}}}}}['_calculateTransform'](c,d,e,f,g,h){const v=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[v(0xd1)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math[v(0x107)](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}[o(0x113)](c){const w=o;let d=this[w(0xf6)][w(0xfb)],e=this[w(0xef)][w(0xfb)];if(!isNaN(d)){let f=c[w(0xf5)]((h,j)=>{const x=w;return parseFloat(h[x(0x10c)](x(0x10f)))-parseFloat(j['getStyle'](x(0x10f)));}),g=parseFloat(f[0x0][w(0x10c)]('left'));for(let h=0x0;h<f['length'];h++){f[h]['setStyle'](w(0x10f),h*d+g+'px');}}if(!isNaN(e)){let j=c[w(0xf5)]((l,m)=>{const y=w;return parseFloat(l['getStyle'](y(0xfe)))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j[w(0xe2)];l++){j[l][w(0xff)]('top',l*e+k+'px');}}}}customElements[o(0x11a)]('node-projects-designer-transform-tool-popup',TransformToolPopup);