function b(c,d){c=c-0x169;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x16d))/0x1*(-parseInt(n(0x186))/0x2)+parseInt(n(0x176))/0x3*(parseInt(n(0x18d))/0x4)+-parseInt(n(0x1b4))/0x5*(-parseInt(n(0x171))/0x6)+-parseInt(n(0x1b2))/0x7+-parseInt(n(0x1bb))/0x8*(-parseInt(n(0x182))/0x9)+parseInt(n(0x1a1))/0xa*(parseInt(n(0x1ac))/0xb)+parseInt(n(0x1ae))/0xc*(-parseInt(n(0x17e))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x69a96));function a(){const A=['origin-top-right','deg)','origin-bot-mid','1130620iWcMvQ','_applyButton','_originMidLeft','_changePositionMode','transform-button-apply','_originTopMid','origin-top-mid','midRight','replaceAll','_inputR','transform','55gYPoli','topLeft','264OwyhuX','length','onclick','_applySpacing','1448237vTtbsi','origin-bot-right','510ErRQVs','windowContentStyle','origin-mid-left','openGroup','Transform','width','_getDomElement','8eiuGTi','left','topRight','origin-top-left','instanceServiceContainer','sin','transform-input-r','_relativeButton','checked','toString','aria-pressed','1Bkxsxo','botRight','_originTopLeft','spacing-input-x','19614tpWmBf','origin-mid-right','_inputY','_inputX','_calculateTransformOriginPosition','1719933cHtqNK','node-projects-designer-transform-tool-popup','_designerCanvas','_inputSpacingY','_selectionChanged','_originBotMid','midMid','_transformOrigin','1179490WatOCH','setStyle','_checkOrigin','_calculateTransform','3248793EAhUCH','transform-button-absolute','_absoluteButton','botLeft','1605410lWJJCu','_originMidRight','valueAsNumber','relative','getStyle','_previousSelectionRect','absolute','4gvDiPy','_transformMode','_inputSpacingX','transform-input-y','_originTopRight','cos','spacing-input-y','height','windowTitle','sort','rotate(','top','selectedElements','origin-bot-left','topMid','_originMidMid','setAttribute'];a=function(){return A;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0x18b)];[o(0x17a)];[o(0x169)];['_absoluteButton'];['_applyButton'];[o(0x174)];['_inputY'];['_inputR'];[o(0x18f)];['_inputSpacingY'];['_originTopLeft'];[o(0x1a6)];['_originTopRight'];['_originMidLeft'];[o(0x19c)];[o(0x187)];['_originBotLeft'];['_originBotMid'];['_originBotRight'];[o(0x18e)];['_transformOrigin'];get[o(0x195)](){const p=o;return p(0x1b8);}get[o(0x1b5)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this['_relativeButton']=this[q(0x1ba)]('transform-button-relative'),this[q(0x184)]=this['_getDomElement'](q(0x183)),this['_applyButton']=this[q(0x1ba)](q(0x1a5)),this['_inputX']=this['_getDomElement']('transform-input-x'),this[q(0x173)]=this['_getDomElement'](q(0x190)),this['_inputR']=this['_getDomElement'](q(0x1c1)),this['_inputSpacingX']=this['_getDomElement'](q(0x170)),this['_inputSpacingY']=this[q(0x1ba)](q(0x193)),this['_originTopLeft']=this[q(0x1ba)](q(0x1be)),this['_originTopMid']=this['_getDomElement'](q(0x1a7)),this[q(0x191)]=this[q(0x1ba)](q(0x19e)),this['_originMidLeft']=this['_getDomElement'](q(0x1b6)),this['_originMidMid']=this['_getDomElement']('origin-mid-mid'),this[q(0x187)]=this['_getDomElement'](q(0x172)),this['_originBotLeft']=this['_getDomElement'](q(0x19a)),this[q(0x17b)]=this['_getDomElement'](q(0x1a0)),this['_originBotRight']=this['_getDomElement'](q(0x1b3)),this[q(0x169)]['onclick']=()=>this['_changePositionMode']('relative'),this['_absoluteButton'][q(0x1b0)]=()=>this['_changePositionMode'](q(0x18c)),this[q(0x1a2)][q(0x1b0)]=()=>this['_applyTransform'](),this['_transformMode']=q(0x189),this[q(0x1a4)](this[q(0x18e)]);}[o(0x1a4)](c){const r=o;this[r(0x169)]['setAttribute']('aria-pressed',String(c==='relative')),this[r(0x184)][r(0x19d)](r(0x16c),String(c===r(0x18c))),this['_transformMode']=c;}['_applyTransform'](){const s=o;this[s(0x180)]();if(!this['_designerCanvas'])return;let c=this[s(0x178)]['instanceServiceContainer']['selectionService'][s(0x199)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this['_designerCanvas'][s(0x1bf)]['selectionService']['onSelectionChanged']['once'](()=>{const t=s;this[t(0x17a)]=!![],this[t(0x18b)]=null;});if(c[s(0x1af)]!=0x0){let d={'x':isNaN(this[s(0x174)][s(0x188)])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this['_inputY'][s(0x188)])?null:this['_inputY']['valueAsNumber']},e=this[s(0x1aa)][s(0x188)]?this['_inputR'][s(0x188)]:0x0,f=c[0x0][s(0x1b7)]('Transform\x20selection');if(!this['_previousSelectionRect']||this['_selectionChanged'])this[s(0x18b)]=calculateOuterRect(c,this[s(0x178)]);let g=this[s(0x175)](this[s(0x18b)]);for(let h of c){let i={'x':parseFloat(h['getStyle'](s(0x1bc))),'y':parseFloat(h[s(0x18a)](s(0x198))),'width':parseFloat(h['getStyle']('width')),'height':parseFloat(h[s(0x18a)]('height'))},j=h[s(0x18a)]('transform'),k=0x0;if(j)k=parseFloat(h['getStyle'](s(0x1ab))[s(0x1a9)](s(0x197),'')['replaceAll'](s(0x19f),''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this['_transformMode']);h[s(0x17f)](s(0x1bc),l['x'][s(0x16b)]()+'px'),h[s(0x17f)](s(0x198),l['y']['toString']()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle']('transform','rotate('+m+'deg)');else h['removeStyle']('transform');}this[s(0x1b1)](c),f['commit']();}}['_calculateTransformOriginPosition'](c){const u=o;switch(this[u(0x17d)]){case u(0x1ad):return{'x':c['x'],'y':c['y']};case u(0x19b):return{'x':c['x']+c[u(0x1b9)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c['height']/0x2};case u(0x17c):return{'x':c['x']+c[u(0x1b9)]/0x2,'y':c['y']+c[u(0x194)]/0x2};case u(0x1a8):return{'x':c['x']+c[u(0x1b9)],'y':c['y']+c[u(0x194)]/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c[u(0x194)]};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c[u(0x194)]};case u(0x16e):return{'x':c['x']+c[u(0x1b9)],'y':c['y']+c['height']};}}['_checkOrigin'](){const v=o;if(this[v(0x16f)]['checked'])this[v(0x17d)]='topLeft';else{if(this[v(0x1a6)][v(0x16a)])this['_transformOrigin']='topMid';else{if(this['_originTopRight']['checked'])this['_transformOrigin']=v(0x1bd);else{if(this[v(0x1a3)][v(0x16a)])this[v(0x17d)]='midLeft';else{if(this['_originMidMid']['checked'])this['_transformOrigin']='midMid';else{if(this[v(0x187)][v(0x16a)])this[v(0x17d)]=v(0x1a8);else{if(this['_originBotLeft']['checked'])this[v(0x17d)]=v(0x185);else{if(this[v(0x17b)][v(0x16a)])this[v(0x17d)]='botMid';else{if(this['_originBotRight']['checked'])this['_transformOrigin']='botRight';}}}}}}}}}[o(0x181)](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[w(0x194)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math[w(0x1c0)](f)*j['x']+Math[w(0x192)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const x=o;let d=this[x(0x18f)][x(0x188)],e=this[x(0x179)]['valueAsNumber'];if(!isNaN(d)){let f=c[x(0x196)]((h,j)=>{const y=x;return parseFloat(h['getStyle'](y(0x1bc)))-parseFloat(j['getStyle']('left'));}),g=parseFloat(f[0x0][x(0x18a)](x(0x1bc)));for(let h=0x0;h<f['length'];h++){f[h]['setStyle'](x(0x1bc),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const z=x;return parseFloat(l['getStyle']('top'))-parseFloat(m[z(0x18a)](z(0x198)));}),k=parseFloat(j[0x0][x(0x18a)]('top'));for(let l=0x0;l<j['length'];l++){j[l]['setStyle'](x(0x198),l*e+k+'px');}}}}customElements['define'](o(0x177),TransformToolPopup);