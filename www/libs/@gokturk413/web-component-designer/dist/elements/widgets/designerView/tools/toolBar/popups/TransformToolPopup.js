const o=b;function b(c,d){c=c-0x1d0;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x205))/0x1+-parseInt(n(0x206))/0x2+-parseInt(n(0x1f0))/0x3+-parseInt(n(0x1ee))/0x4*(parseInt(n(0x219))/0x5)+parseInt(n(0x1e5))/0x6+-parseInt(n(0x208))/0x7+-parseInt(n(0x21e))/0x8*(-parseInt(n(0x1ec))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb88d4));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function a(){const y=['_originTopRight','width','_inputSpacingX','absolute','valueAsNumber','_calculateTransform','_relativeButton','origin-top-left','_transformOrigin','botRight','2953932bbJats','_getDomElement','botMid','transform-button-relative','origin-top-right','setStyle','aria-pressed','25237881wkMSub','_calculateTransformOriginPosition','119404gkyMyc','_originTopMid','2644074aPApCS','_absoluteButton','midLeft','cos','topLeft','_originBotLeft','_transformMode','_previousSelectionRect','left','top','_applyButton','getStyle','onclick','origin-top-mid','_originBotRight','_originTopLeft','_inputY','selectionService','_changePositionMode','commit','windowContentStyle','1216666dROlHy','1613866mDnNdc','transform-button-absolute','7796250ZIxuMx','origin-bot-left','_inputX','onSelectionChanged','botLeft','height','transform-input-y','origin-mid-right','_inputR','_selectionChanged','topMid','selectedElements','_designerCanvas','sin','_originBotMid','_originMidRight','checked','160KXOgoD','_originMidMid','midRight','transform','_originMidLeft','8HQCoDk','instanceServiceContainer','length','sort','_checkOrigin','midMid','toString','relative','define','node-projects-designer-transform-tool-popup','_inputSpacingY','_applyTransform','transform-input-x','windowTitle','replaceAll'];a=function(){return y;};return a();}import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];[o(0x211)];['_relativeButton'];[o(0x1f1)];[o(0x1fa)];[o(0x20a)];[o(0x200)];[o(0x210)];[o(0x1dd)];[o(0x1d6)];['_originTopLeft'];[o(0x1ef)];[o(0x1db)];[o(0x21d)];['_originMidMid'];[o(0x217)];[o(0x1f5)];['_originBotMid'];[o(0x1fe)];[o(0x1f6)];['_transformOrigin'];get[o(0x1d9)](){return'Transform';}get[o(0x204)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const p=o;super(c),this[p(0x1e1)]=this[p(0x1e6)](p(0x1e8)),this[p(0x1f1)]=this['_getDomElement'](p(0x207)),this['_applyButton']=this[p(0x1e6)]('transform-button-apply'),this[p(0x20a)]=this['_getDomElement'](p(0x1d8)),this[p(0x200)]=this['_getDomElement'](p(0x20e)),this[p(0x210)]=this[p(0x1e6)]('transform-input-r'),this['_inputSpacingX']=this['_getDomElement']('spacing-input-x'),this[p(0x1d6)]=this[p(0x1e6)]('spacing-input-y'),this['_originTopLeft']=this[p(0x1e6)](p(0x1e2)),this['_originTopMid']=this['_getDomElement'](p(0x1fd)),this[p(0x1db)]=this['_getDomElement'](p(0x1e9)),this['_originMidLeft']=this['_getDomElement']('origin-mid-left'),this[p(0x21a)]=this[p(0x1e6)]('origin-mid-mid'),this['_originMidRight']=this['_getDomElement'](p(0x20f)),this[p(0x1f5)]=this['_getDomElement'](p(0x209)),this[p(0x216)]=this['_getDomElement']('origin-bot-mid'),this['_originBotRight']=this[p(0x1e6)]('origin-bot-right'),this['_relativeButton'][p(0x1fc)]=()=>this[p(0x202)]('relative'),this[p(0x1f1)][p(0x1fc)]=()=>this[p(0x202)](p(0x1de)),this[p(0x1fa)][p(0x1fc)]=()=>this[p(0x1d7)](),this[p(0x1f6)]='relative',this[p(0x202)](this['_transformMode']);}['_changePositionMode'](c){const q=o;this[q(0x1e1)]['setAttribute'](q(0x1eb),String(c==='relative')),this['_absoluteButton']['setAttribute'](q(0x1eb),String(c===q(0x1de))),this[q(0x1f6)]=c;}['_applyTransform'](){const r=o;this[r(0x1d0)]();if(!this['_designerCanvas'])return;let c=this['_designerCanvas']['instanceServiceContainer'][r(0x201)][r(0x213)];c=filterChildPlaceItems(c),this[r(0x211)]=![],this[r(0x214)][r(0x21f)][r(0x201)][r(0x20b)]['once'](()=>{this['_selectionChanged']=!![],this['_previousSelectionRect']=null;});if(c[r(0x220)]!=0x0){let d={'x':isNaN(this['_inputX']['valueAsNumber'])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this['_inputY'][r(0x1df)])?null:this[r(0x200)][r(0x1df)]},e=this['_inputR']['valueAsNumber']?this['_inputR']['valueAsNumber']:0x0,f=c[0x0]['openGroup']('Transform\x20selection');if(!this['_previousSelectionRect']||this['_selectionChanged'])this[r(0x1f7)]=calculateOuterRect(c,this['_designerCanvas']);let g=this[r(0x1ed)](this[r(0x1f7)]);for(let h of c){let i={'x':parseFloat(h[r(0x1fb)](r(0x1f8))),'y':parseFloat(h['getStyle'](r(0x1f9))),'width':parseFloat(h['getStyle'](r(0x1dc))),'height':parseFloat(h['getStyle'](r(0x20d)))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h['getStyle'](r(0x21c))[r(0x1da)]('rotate(','')['replaceAll']('deg)',''));let l=this['_calculateTransform'](this[r(0x1f7)],g,i,e,d,this[r(0x1f6)]);h['setStyle']('left',l['x']['toString']()+'px'),h[r(0x1ea)](r(0x1f9),l['y'][r(0x1d2)]()+'px');let m;if(this[r(0x1f6)]==r(0x1d3))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[r(0x1ea)]('transform','rotate('+m+'deg)');else h['removeStyle'](r(0x21c));}this['_applySpacing'](c),f[r(0x203)]();}}[o(0x1ed)](c){const s=o;switch(this['_transformOrigin']){case s(0x1f4):return{'x':c['x'],'y':c['y']};case s(0x212):return{'x':c['x']+c[s(0x1dc)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case s(0x1f2):return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c[s(0x20d)]/0x2};case s(0x21b):return{'x':c['x']+c['width'],'y':c['y']+c[s(0x20d)]/0x2};case s(0x20c):return{'x':c['x'],'y':c['y']+c[s(0x20d)]};case s(0x1e7):return{'x':c['x']+c[s(0x1dc)]/0x2,'y':c['y']+c['height']};case s(0x1e4):return{'x':c['x']+c[s(0x1dc)],'y':c['y']+c[s(0x20d)]};}}[o(0x1d0)](){const t=o;if(this[t(0x1ff)][t(0x218)])this[t(0x1e3)]=t(0x1f4);else{if(this[t(0x1ef)][t(0x218)])this[t(0x1e3)]=t(0x212);else{if(this['_originTopRight']['checked'])this[t(0x1e3)]='topRight';else{if(this['_originMidLeft'][t(0x218)])this['_transformOrigin']=t(0x1f2);else{if(this['_originMidMid'][t(0x218)])this['_transformOrigin']=t(0x1d1);else{if(this['_originMidRight']['checked'])this['_transformOrigin']='midRight';else{if(this[t(0x1f5)][t(0x218)])this['_transformOrigin']='botLeft';else{if(this[t(0x216)]['checked'])this['_transformOrigin']=t(0x1e7);else{if(this[t(0x1fe)]['checked'])this['_transformOrigin']='botRight';}}}}}}}}}[o(0x1e0)](c,d,e,f,g,h){const u=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[u(0x1dc)]/0x2,'y':d['y']-e[u(0x20d)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[u(0x1f3)](f)*j['x']-Math[u(0x215)](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math[u(0x1f3)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const v=o;let d=this['_inputSpacingX'][v(0x1df)],e=this['_inputSpacingY'][v(0x1df)];if(!isNaN(d)){let f=c[v(0x221)]((h,j)=>{const w=v;return parseFloat(h['getStyle']('left'))-parseFloat(j[w(0x1fb)]('left'));}),g=parseFloat(f[0x0][v(0x1fb)](v(0x1f8)));for(let h=0x0;h<f['length'];h++){f[h]['setStyle'](v(0x1f8),h*d+g+'px');}}if(!isNaN(e)){let j=c[v(0x221)]((l,m)=>{const x=v;return parseFloat(l[x(0x1fb)](x(0x1f9)))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j[v(0x220)];l++){j[l][v(0x1ea)]('top',l*e+k+'px');}}}}customElements[o(0x1d4)](o(0x1d5),TransformToolPopup);