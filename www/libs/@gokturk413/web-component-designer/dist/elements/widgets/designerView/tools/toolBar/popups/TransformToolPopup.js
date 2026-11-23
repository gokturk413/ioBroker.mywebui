const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1be))/0x1+parseInt(n(0x1b0))/0x2*(-parseInt(n(0x198))/0x3)+parseInt(n(0x1bc))/0x4*(parseInt(n(0x196))/0x5)+-parseInt(n(0x1b2))/0x6+-parseInt(n(0x1ad))/0x7*(parseInt(n(0x1a4))/0x8)+parseInt(n(0x19a))/0x9+parseInt(n(0x1b1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x947b4));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x179;const e=a();let f=e[c];return f;}function a(){const z=['valueAsNumber','2YwiKAi','27397220FGwJyX','6619110uJzRRI','cos','topLeft','_relativeButton','toString','_originMidMid','_inputSpacingY','_selectionChanged','origin-bot-mid','Transform\x20selection','184GbDZvt','_designerCanvas','1004866ZYWIDE','_transformMode','length','openGroup','_changePositionMode','transform-button-apply','once','sort','_originMidRight','_applySpacing','commit','topRight','instanceServiceContainer','_originTopMid','getStyle','selectedElements','relative','_originBotRight','origin-mid-mid','onclick','midLeft','_inputY','height','windowTemplate','replaceAll','origin-top-mid','midMid','sin','absolute','_inputR','_originBotMid','_getDomElement','width','Transform','_applyTransform','_absoluteButton','_checkOrigin','checked','botMid','top','14485aJsIQG','deg)','1392438aEKuMd','left','9848547hInTDh','_calculateTransformOriginPosition','botRight','transform-button-relative','_originTopLeft','_inputX','_inputSpacingX','_calculateTransform','transform','setStyle','242120uXcBim','aria-pressed','origin-mid-right','_originMidLeft','transform-input-x','setAttribute','botLeft','_transformOrigin','_previousSelectionRect','182HejAzP','rotate('];a=function(){return z;};return a();}import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0x1ac)];['_selectionChanged'];['_relativeButton'];[o(0x191)];['_applyButton'];[o(0x19f)];['_inputY'];['_inputR'];[o(0x1a0)];['_inputSpacingY'];['_originTopLeft'];['_originTopMid'];['_originTopRight'];['_originMidLeft'];[o(0x1b7)];[o(0x1c6)];['_originBotLeft'];['_originBotMid'];[o(0x17f)];[o(0x1bf)];[o(0x1ab)];get['windowTitle'](){const p=o;return p(0x18f);}get['windowContentStyle'](){return css`
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
    `;}get[o(0x185)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this[q(0x1b5)]=this['_getDomElement'](q(0x19d)),this[q(0x191)]=this['_getDomElement']('transform-button-absolute'),this['_applyButton']=this['_getDomElement'](q(0x1c3)),this['_inputX']=this['_getDomElement'](q(0x1a8)),this['_inputY']=this['_getDomElement']('transform-input-y'),this['_inputR']=this['_getDomElement']('transform-input-r'),this[q(0x1a0)]=this['_getDomElement']('spacing-input-x'),this['_inputSpacingY']=this['_getDomElement']('spacing-input-y'),this[q(0x19e)]=this['_getDomElement']('origin-top-left'),this['_originTopMid']=this['_getDomElement'](q(0x187)),this['_originTopRight']=this[q(0x18d)]('origin-top-right'),this[q(0x1a7)]=this['_getDomElement']('origin-mid-left'),this['_originMidMid']=this['_getDomElement'](q(0x180)),this[q(0x1c6)]=this[q(0x18d)](q(0x1a6)),this['_originBotLeft']=this['_getDomElement']('origin-bot-left'),this[q(0x18c)]=this[q(0x18d)](q(0x1ba)),this[q(0x17f)]=this['_getDomElement']('origin-bot-right'),this['_relativeButton'][q(0x181)]=()=>this[q(0x1c2)](q(0x17e)),this[q(0x191)][q(0x181)]=()=>this[q(0x1c2)](q(0x18a)),this['_applyButton']['onclick']=()=>this[q(0x190)](),this[q(0x1bf)]='relative',this['_changePositionMode'](this[q(0x1bf)]);}['_changePositionMode'](c){const r=o;this['_relativeButton'][r(0x1a9)](r(0x1a5),String(c==='relative')),this[r(0x191)]['setAttribute'](r(0x1a5),String(c===r(0x18a))),this['_transformMode']=c;}['_applyTransform'](){const s=o;this[s(0x192)]();if(!this['_designerCanvas'])return;let c=this['_designerCanvas']['instanceServiceContainer']['selectionService'][s(0x17d)];c=filterChildPlaceItems(c),this[s(0x1b9)]=![],this['_designerCanvas'][s(0x17a)]['selectionService']['onSelectionChanged'][s(0x1c4)](()=>{this['_selectionChanged']=!![],this['_previousSelectionRect']=null;});if(c['length']!=0x0){let d={'x':isNaN(this['_inputX']['valueAsNumber'])?null:this[s(0x19f)]['valueAsNumber'],'y':isNaN(this['_inputY'][s(0x1af)])?null:this[s(0x183)]['valueAsNumber']},e=this[s(0x18b)][s(0x1af)]?this[s(0x18b)]['valueAsNumber']:0x0,f=c[0x0][s(0x1c1)](s(0x1bb));if(!this['_previousSelectionRect']||this['_selectionChanged'])this[s(0x1ac)]=calculateOuterRect(c,this[s(0x1bd)]);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle'](s(0x199))),'y':parseFloat(h[s(0x17c)](s(0x195))),'width':parseFloat(h[s(0x17c)]('width')),'height':parseFloat(h[s(0x17c)](s(0x184)))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h['getStyle']('transform')['replaceAll']('rotate(','')[s(0x186)]('deg)',''));let l=this[s(0x1a1)](this[s(0x1ac)],g,i,e,d,this['_transformMode']);h[s(0x1a3)](s(0x199),l['x'][s(0x1b6)]()+'px'),h['setStyle']('top',l['y']['toString']()+'px');let m;if(this[s(0x1bf)]=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[s(0x1a3)](s(0x1a2),s(0x1ae)+m+s(0x197));else h['removeStyle']('transform');}this[s(0x1c7)](c),f[s(0x1c8)]();}}[o(0x19b)](c){const t=o;switch(this[t(0x1ab)]){case t(0x1b4):return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c['width']/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c[t(0x18e)],'y':c['y']};case t(0x182):return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c[t(0x18e)]/0x2,'y':c['y']+c[t(0x184)]/0x2};case'midRight':return{'x':c['x']+c['width'],'y':c['y']+c[t(0x184)]/0x2};case t(0x1aa):return{'x':c['x'],'y':c['y']+c[t(0x184)]};case t(0x194):return{'x':c['x']+c[t(0x18e)]/0x2,'y':c['y']+c['height']};case t(0x19c):return{'x':c['x']+c[t(0x18e)],'y':c['y']+c['height']};}}['_checkOrigin'](){const u=o;if(this['_originTopLeft']['checked'])this['_transformOrigin']='topLeft';else{if(this[u(0x17b)]['checked'])this[u(0x1ab)]='topMid';else{if(this['_originTopRight']['checked'])this[u(0x1ab)]=u(0x179);else{if(this['_originMidLeft']['checked'])this[u(0x1ab)]='midLeft';else{if(this['_originMidMid']['checked'])this[u(0x1ab)]=u(0x188);else{if(this['_originMidRight'][u(0x193)])this[u(0x1ab)]='midRight';else{if(this['_originBotLeft'][u(0x193)])this[u(0x1ab)]=u(0x1aa);else{if(this[u(0x18c)][u(0x193)])this['_transformOrigin']=u(0x194);else{if(this[u(0x17f)]['checked'])this['_transformOrigin']=u(0x19c);}}}}}}}}}[o(0x1a1)](c,d,e,f,g,h){const v=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[v(0x184)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[v(0x1b3)](f)*j['x']-Math[v(0x189)](f)*j['y']+d['x']+g['x'],'y':Math[v(0x189)](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}[o(0x1c7)](c){const w=o;let d=this[w(0x1a0)]['valueAsNumber'],e=this[w(0x1b8)]['valueAsNumber'];if(!isNaN(d)){let f=c[w(0x1c5)]((h,j)=>{const x=w;return parseFloat(h['getStyle'](x(0x199)))-parseFloat(j[x(0x17c)]('left'));}),g=parseFloat(f[0x0]['getStyle'](w(0x199)));for(let h=0x0;h<f['length'];h++){f[h][w(0x1a3)](w(0x199),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const y=w;return parseFloat(l['getStyle']('top'))-parseFloat(m[y(0x17c)]('top'));}),k=parseFloat(j[0x0][w(0x17c)](w(0x195)));for(let l=0x0;l<j[w(0x1c0)];l++){j[l][w(0x1a3)](w(0x195),l*e+k+'px');}}}}customElements['define']('node-projects-designer-transform-tool-popup',TransformToolPopup);