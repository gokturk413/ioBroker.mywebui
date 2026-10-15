const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xa6))/0x1*(parseInt(n(0x9c))/0x2)+parseInt(n(0xa8))/0x3+parseInt(n(0xb4))/0x4+-parseInt(n(0xbd))/0x5*(-parseInt(n(0xcc))/0x6)+-parseInt(n(0xc5))/0x7*(parseInt(n(0xc8))/0x8)+parseInt(n(0xd7))/0x9+parseInt(n(0xa4))/0xa*(-parseInt(n(0xbf))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb5559));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';function b(c,d){c=c-0x93;const e=a();let f=e[c];return f;}import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];['_relativeButton'];['_absoluteButton'];[o(0xbe)];['_inputX'];[o(0xb6)];['_inputR'];['_inputSpacingX'];['_inputSpacingY'];[o(0xab)];['_originTopMid'];['_originTopRight'];['_originMidLeft'];['_originMidMid'];[o(0xc7)];[o(0xc4)];[o(0xb8)];['_originBotRight'];[o(0xe4)];['_transformOrigin'];get[o(0xa2)](){const p=o;return p(0xd2);}get[o(0xb5)](){return css`
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
    `;}get[o(0xcd)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this[q(0xd8)]=this[q(0xa0)](q(0xb7)),this['_absoluteButton']=this[q(0xa0)](q(0xb9)),this['_applyButton']=this[q(0xa0)](q(0xdd)),this['_inputX']=this[q(0xa0)]('transform-input-x'),this[q(0xb6)]=this['_getDomElement'](q(0x9f)),this['_inputR']=this['_getDomElement'](q(0xcf)),this[q(0xe3)]=this['_getDomElement'](q(0xaa)),this[q(0xd9)]=this[q(0xa0)]('spacing-input-y'),this[q(0xab)]=this[q(0xa0)]('origin-top-left'),this['_originTopMid']=this[q(0xa0)]('origin-top-mid'),this[q(0xb1)]=this[q(0xa0)](q(0xa5)),this['_originMidLeft']=this['_getDomElement'](q(0xde)),this[q(0xe0)]=this[q(0xa0)]('origin-mid-mid'),this['_originMidRight']=this[q(0xa0)]('origin-mid-right'),this[q(0xc4)]=this[q(0xa0)](q(0xc6)),this['_originBotMid']=this[q(0xa0)]('origin-bot-mid'),this[q(0x9e)]=this['_getDomElement']('origin-bot-right'),this[q(0xd8)]['onclick']=()=>this[q(0xb3)](q(0xd4)),this['_absoluteButton'][q(0xbb)]=()=>this[q(0xb3)]('absolute'),this[q(0xbe)]['onclick']=()=>this[q(0xd1)](),this['_transformMode']=q(0xd4),this[q(0xb3)](this['_transformMode']);}[o(0xb3)](c){const r=o;this['_relativeButton']['setAttribute']('aria-pressed',String(c===r(0xd4))),this[r(0xda)]['setAttribute'](r(0x95),String(c==='absolute')),this['_transformMode']=c;}['_applyTransform'](){const s=o;this[s(0xce)]();if(!this['_designerCanvas'])return;let c=this['_designerCanvas']['instanceServiceContainer']['selectionService']['selectedElements'];c=filterChildPlaceItems(c),this[s(0xac)]=![],this[s(0xcb)][s(0xc1)][s(0xa9)][s(0xbc)][s(0x94)](()=>{const t=s;this['_selectionChanged']=!![],this[t(0xc0)]=null;});if(c[s(0x97)]!=0x0){let d={'x':isNaN(this['_inputX']['valueAsNumber'])?null:this[s(0x98)][s(0xaf)],'y':isNaN(this['_inputY'][s(0xaf)])?null:this[s(0xb6)][s(0xaf)]},e=this['_inputR']['valueAsNumber']?this[s(0x99)][s(0xaf)]:0x0,f=c[0x0][s(0x9d)]('Transform\x20selection');if(!this[s(0xc0)]||this['_selectionChanged'])this[s(0xc0)]=calculateOuterRect(c,this['_designerCanvas']);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h['getStyle'](s(0xae))),'height':parseFloat(h[s(0xd5)](s(0xb0)))},j=h[s(0xd5)]('transform'),k=0x0;if(j)k=parseFloat(h['getStyle'](s(0xd3))['replaceAll'](s(0xdf),'')['replaceAll'](s(0x93),''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this[s(0xe4)]);h['setStyle']('left',l['x'][s(0x96)]()+'px'),h[s(0xb2)](s(0xc2),l['y'][s(0x96)]()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](s(0xd3),'rotate('+m+s(0x93));else h[s(0x9b)](s(0xd3));}this[s(0x9a)](c),f['commit']();}}[o(0xad)](c){const u=o;switch(this[u(0xe2)]){case'topLeft':return{'x':c['x'],'y':c['y']};case u(0xa3):return{'x':c['x']+c['width']/0x2,'y':c['y']};case u(0xdc):return{'x':c['x']+c['width'],'y':c['y']};case u(0xc9):return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c[u(0xae)]/0x2,'y':c['y']+c['height']/0x2};case u(0xd6):return{'x':c['x']+c['width'],'y':c['y']+c[u(0xb0)]/0x2};case u(0xa1):return{'x':c['x'],'y':c['y']+c['height']};case u(0xd0):return{'x':c['x']+c[u(0xae)]/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c['width'],'y':c['y']+c['height']};}}[o(0xce)](){const v=o;if(this['_originTopLeft']['checked'])this['_transformOrigin']=v(0xca);else{if(this['_originTopMid'][v(0xe1)])this[v(0xe2)]='topMid';else{if(this['_originTopRight'][v(0xe1)])this['_transformOrigin']=v(0xdc);else{if(this['_originMidLeft']['checked'])this[v(0xe2)]='midLeft';else{if(this['_originMidMid']['checked'])this[v(0xe2)]='midMid';else{if(this[v(0xc7)]['checked'])this[v(0xe2)]=v(0xd6);else{if(this['_originBotLeft'][v(0xe1)])this[v(0xe2)]=v(0xa1);else{if(this['_originBotMid']['checked'])this[v(0xe2)]='botMid';else{if(this['_originBotRight'][v(0xe1)])this[v(0xe2)]='botRight';}}}}}}}}}[o(0xc3)](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[w(0xb0)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math[w(0xa7)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const x=o;let d=this[x(0xe3)]['valueAsNumber'],e=this['_inputSpacingY']['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{const y=x;return parseFloat(h[y(0xd5)]('left'))-parseFloat(j['getStyle'](y(0xdb)));}),g=parseFloat(f[0x0][x(0xd5)](x(0xdb)));for(let h=0x0;h<f['length'];h++){f[h][x(0xb2)]('left',h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const z=x;return parseFloat(l['getStyle'](z(0xc2)))-parseFloat(m['getStyle'](z(0xc2)));}),k=parseFloat(j[0x0][x(0xd5)]('top'));for(let l=0x0;l<j['length'];l++){j[l]['setStyle']('top',l*e+k+'px');}}}}customElements[o(0xba)]('node-projects-designer-transform-tool-popup',TransformToolPopup);function a(){const A=['_designerCanvas','360pIvosp','windowTemplate','_checkOrigin','transform-input-r','botMid','_applyTransform','Transform','transform','relative','getStyle','midRight','11550375LEqGAg','_relativeButton','_inputSpacingY','_absoluteButton','left','topRight','transform-button-apply','origin-mid-left','rotate(','_originMidMid','checked','_transformOrigin','_inputSpacingX','_transformMode','deg)','once','aria-pressed','toString','length','_inputX','_inputR','_applySpacing','removeStyle','12386PADTPa','openGroup','_originBotRight','transform-input-y','_getDomElement','botLeft','windowTitle','topMid','140bGIwbu','origin-top-right','70HLbXUw','cos','2784147zJvmia','selectionService','spacing-input-x','_originTopLeft','_selectionChanged','_calculateTransformOriginPosition','width','valueAsNumber','height','_originTopRight','setStyle','_changePositionMode','1104824GhQQVB','windowContentStyle','_inputY','transform-button-relative','_originBotMid','transform-button-absolute','define','onclick','onSelectionChanged','70485XabOwp','_applyButton','1393293IruvUk','_previousSelectionRect','instanceServiceContainer','top','_calculateTransform','_originBotLeft','21qvzitd','origin-bot-left','_originMidRight','1023768OPAwAb','midLeft','topLeft'];a=function(){return A;};return a();}