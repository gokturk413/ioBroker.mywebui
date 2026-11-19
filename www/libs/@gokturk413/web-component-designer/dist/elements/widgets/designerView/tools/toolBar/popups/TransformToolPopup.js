const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xfb))/0x1*(-parseInt(n(0xe4))/0x2)+parseInt(n(0xb9))/0x3*(parseInt(n(0xe1))/0x4)+parseInt(n(0xc7))/0x5+parseInt(n(0xc3))/0x6*(parseInt(n(0x105))/0x7)+-parseInt(n(0xf8))/0x8*(-parseInt(n(0xc0))/0x9)+-parseInt(n(0xba))/0xa+-parseInt(n(0xfc))/0xb*(parseInt(n(0xbc))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x60c27));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';function b(c,d){c=c-0xb6;const e=a();let f=e[c];return f;}function a(){const z=['_originBotLeft','271YVYKUJ','814KgKDhx','commit','_inputSpacingX','_originBotMid','origin-top-left','_designerCanvas','selectionService','cos','windowTemplate','993139AcOLzi','_previousSelectionRect','_originMidRight','_applyButton','_originMidMid','origin-mid-mid','33rWyiLF','6393510MTtFwO','midLeft','9012hOGLoh','top','origin-bot-right','origin-bot-mid','9RtctAD','absolute','transform','30AnHqSh','_originBotRight','_inputSpacingY','height','1028125iUOYZw','sort','origin-mid-right','_transformOrigin','width','rotate(','getStyle','_transformMode','_applyTransform','topLeft','replaceAll','sin','botRight','windowTitle','_inputR','length','_calculateTransform','_originTopMid','midRight','_originTopLeft','checked','origin-top-mid','aria-pressed','_checkOrigin','_absoluteButton','_calculateTransformOriginPosition','37756OOOPnz','midMid','setAttribute','3228OicdXJ','_selectionChanged','_inputX','_changePositionMode','toString','Transform','onclick','selectedElements','_relativeButton','botLeft','setStyle','Transform\x20selection','transform-input-x','spacing-input-y','relative','_getDomElement','instanceServiceContainer','origin-mid-left','left','valueAsNumber','4078456yukDoy','_originTopRight'];a=function(){return z;};return a();}export class TransformToolPopup extends DraggableToolWindow{[o(0x106)];['_selectionChanged'];['_relativeButton'];[o(0xdf)];['_applyButton'];[o(0xe6)];['_inputY'];[o(0xd5)];['_inputSpacingX'];[o(0xc5)];['_originTopLeft'];['_originTopMid'];[o(0xf9)];['_originMidLeft'];[o(0xb7)];[o(0x107)];[o(0xfa)];[o(0xff)];[o(0xc4)];['_transformMode'];['_transformOrigin'];get[o(0xd4)](){const p=o;return p(0xe9);}get['windowContentStyle'](){return css`
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
    `;}get[o(0x104)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this['_relativeButton']=this['_getDomElement']('transform-button-relative'),this[q(0xdf)]=this[q(0xf3)]('transform-button-absolute'),this[q(0xb6)]=this['_getDomElement']('transform-button-apply'),this['_inputX']=this[q(0xf3)](q(0xf0)),this['_inputY']=this[q(0xf3)]('transform-input-y'),this['_inputR']=this['_getDomElement']('transform-input-r'),this[q(0xfe)]=this[q(0xf3)]('spacing-input-x'),this['_inputSpacingY']=this['_getDomElement'](q(0xf1)),this[q(0xda)]=this['_getDomElement'](q(0x100)),this['_originTopMid']=this[q(0xf3)](q(0xdc)),this['_originTopRight']=this[q(0xf3)]('origin-top-right'),this['_originMidLeft']=this[q(0xf3)](q(0xf5)),this['_originMidMid']=this['_getDomElement'](q(0xb8)),this['_originMidRight']=this[q(0xf3)](q(0xc9)),this[q(0xfa)]=this['_getDomElement']('origin-bot-left'),this['_originBotMid']=this[q(0xf3)](q(0xbf)),this['_originBotRight']=this['_getDomElement'](q(0xbe)),this['_relativeButton'][q(0xea)]=()=>this[q(0xe7)]('relative'),this['_absoluteButton']['onclick']=()=>this[q(0xe7)]('absolute'),this['_applyButton']['onclick']=()=>this[q(0xcf)](),this[q(0xce)]='relative',this[q(0xe7)](this[q(0xce)]);}['_changePositionMode'](c){const r=o;this[r(0xec)][r(0xe3)](r(0xdd),String(c===r(0xf2))),this[r(0xdf)][r(0xe3)]('aria-pressed',String(c==='absolute')),this['_transformMode']=c;}['_applyTransform'](){const s=o;this[s(0xde)]();if(!this['_designerCanvas'])return;let c=this[s(0x101)][s(0xf4)]['selectionService'][s(0xeb)];c=filterChildPlaceItems(c),this[s(0xe5)]=![],this['_designerCanvas'][s(0xf4)][s(0x102)]['onSelectionChanged']['once'](()=>{this['_selectionChanged']=!![],this['_previousSelectionRect']=null;});if(c[s(0xd6)]!=0x0){let d={'x':isNaN(this[s(0xe6)]['valueAsNumber'])?null:this['_inputX'][s(0xf7)],'y':isNaN(this['_inputY']['valueAsNumber'])?null:this['_inputY']['valueAsNumber']},e=this[s(0xd5)]['valueAsNumber']?this[s(0xd5)][s(0xf7)]:0x0,f=c[0x0]['openGroup'](s(0xef));if(!this[s(0x106)]||this[s(0xe5)])this['_previousSelectionRect']=calculateOuterRect(c,this['_designerCanvas']);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle'](s(0xf6))),'y':parseFloat(h[s(0xcd)]('top')),'width':parseFloat(h[s(0xcd)]('width')),'height':parseFloat(h['getStyle']('height'))},j=h['getStyle'](s(0xc2)),k=0x0;if(j)k=parseFloat(h['getStyle'](s(0xc2))[s(0xd1)]('rotate(','')[s(0xd1)]('deg)',''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this['_transformMode']);h[s(0xee)](s(0xf6),l['x'][s(0xe8)]()+'px'),h['setStyle']('top',l['y'][s(0xe8)]()+'px');let m;if(this[s(0xce)]=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](s(0xc2),s(0xcc)+m+'deg)');else h['removeStyle'](s(0xc2));}this['_applySpacing'](c),f[s(0xfd)]();}}[o(0xe0)](c){const t=o;switch(this['_transformOrigin']){case t(0xd0):return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[t(0xcb)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c[t(0xcb)],'y':c['y']};case t(0xbb):return{'x':c['x'],'y':c['y']+c['height']/0x2};case t(0xe2):return{'x':c['x']+c[t(0xcb)]/0x2,'y':c['y']+c[t(0xc6)]/0x2};case t(0xd9):return{'x':c['x']+c[t(0xcb)],'y':c['y']+c[t(0xc6)]/0x2};case t(0xed):return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case t(0xd3):return{'x':c['x']+c[t(0xcb)],'y':c['y']+c['height']};}}[o(0xde)](){const u=o;if(this['_originTopLeft'][u(0xdb)])this[u(0xca)]=u(0xd0);else{if(this[u(0xd8)][u(0xdb)])this['_transformOrigin']='topMid';else{if(this[u(0xf9)]['checked'])this[u(0xca)]='topRight';else{if(this['_originMidLeft'][u(0xdb)])this['_transformOrigin']=u(0xbb);else{if(this[u(0xb7)][u(0xdb)])this[u(0xca)]=u(0xe2);else{if(this[u(0x107)]['checked'])this[u(0xca)]='midRight';else{if(this['_originBotLeft']['checked'])this[u(0xca)]='botLeft';else{if(this['_originBotMid']['checked'])this['_transformOrigin']='botMid';else{if(this[u(0xc4)][u(0xdb)])this[u(0xca)]='botRight';}}}}}}}}}[o(0xd7)](c,d,e,f,g,h){const v=o;let i;f=f*(Math['PI']/0xb4);if(h==v(0xc1)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[v(0xc6)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[v(0x103)](f)*j['x']-Math[v(0xd2)](f)*j['y']+d['x']+g['x'],'y':Math[v(0xd2)](f)*j['x']+Math[v(0x103)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const w=o;let d=this['_inputSpacingX'][w(0xf7)],e=this[w(0xc5)][w(0xf7)];if(!isNaN(d)){let f=c[w(0xc8)]((h,j)=>{const x=w;return parseFloat(h[x(0xcd)](x(0xf6)))-parseFloat(j['getStyle']('left'));}),g=parseFloat(f[0x0][w(0xcd)]('left'));for(let h=0x0;h<f[w(0xd6)];h++){f[h]['setStyle'](w(0xf6),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const y=w;return parseFloat(l['getStyle'](y(0xbd)))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0][w(0xcd)](w(0xbd)));for(let l=0x0;l<j[w(0xd6)];l++){j[l][w(0xee)](w(0xbd),l*e+k+'px');}}}}customElements['define']('node-projects-designer-transform-tool-popup',TransformToolPopup);