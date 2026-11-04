const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1c5))/0x1*(parseInt(n(0x1c0))/0x2)+-parseInt(n(0x1d0))/0x3*(-parseInt(n(0x1af))/0x4)+-parseInt(n(0x1a1))/0x5+parseInt(n(0x197))/0x6+-parseInt(n(0x1a8))/0x7*(parseInt(n(0x1cb))/0x8)+parseInt(n(0x19c))/0x9*(parseInt(n(0x18f))/0xa)+parseInt(n(0x1b4))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x31623));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';function a(){const A=['_inputSpacingX','_transformOrigin','topLeft','232UfHbmv','width','_inputX','_applySpacing','origin-top-left','277leJTWG','topMid','once','top','botMid','_inputSpacingY','2152mcjmGH','sort','left','transform-input-x','spacing-input-x','24wQCCNU','_originBotRight','height','selectionService','origin-mid-right','_selectionChanged','_changePositionMode','_inputY','commit','sin','transform','_originBotMid','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','transform-button-relative','botRight','269870houdEj','_originBotLeft','_designerCanvas','_transformMode','windowTemplate','_originMidMid','_originMidLeft','define','1176402fsKYKf','_applyButton','instanceServiceContainer','onclick','replaceAll','9xMbZpQ','node-projects-designer-transform-tool-popup','setStyle','windowContentStyle','setAttribute','319720jgEtsk','_calculateTransform','topRight','relative','transform-button-absolute','absolute','_absoluteButton','1918WgQLPH','_originTopRight','origin-bot-right','valueAsNumber','transform-button-apply','_originTopMid','botLeft','7732ooIRiy','_relativeButton','midRight','getStyle','origin-top-mid','762025JpShMa','_getDomElement','checked','length','_originMidRight','_checkOrigin','_calculateTransformOriginPosition','origin-bot-left','_previousSelectionRect'];a=function(){return A;};return a();}import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';function b(c,d){c=c-0x18a;const e=a();let f=e[c];return f;}export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];[o(0x1b0)];[o(0x1a7)];['_applyButton'];[o(0x1c2)];['_inputY'];['_inputR'];[o(0x1bd)];['_inputSpacingY'];['_originTopLeft'];[o(0x1ad)];['_originTopRight'];['_originMidLeft'];['_originMidMid'];[o(0x1b8)];['_originBotLeft'];[o(0x18b)];['_originBotRight'];[o(0x192)];['_transformOrigin'];get['windowTitle'](){return'Transform';}get[o(0x19f)](){return css`
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
    `;}get[o(0x193)](){const p=o;return p(0x18c);}constructor(c){const q=o;super(c),this['_relativeButton']=this[q(0x1b5)](q(0x18d)),this['_absoluteButton']=this[q(0x1b5)](q(0x1a5)),this[q(0x198)]=this[q(0x1b5)](q(0x1ac)),this['_inputX']=this['_getDomElement'](q(0x1ce)),this['_inputY']=this[q(0x1b5)]('transform-input-y'),this['_inputR']=this[q(0x1b5)]('transform-input-r'),this[q(0x1bd)]=this['_getDomElement'](q(0x1cf)),this[q(0x1ca)]=this[q(0x1b5)]('spacing-input-y'),this['_originTopLeft']=this[q(0x1b5)](q(0x1c4)),this['_originTopMid']=this['_getDomElement'](q(0x1b3)),this['_originTopRight']=this['_getDomElement']('origin-top-right'),this['_originMidLeft']=this['_getDomElement']('origin-mid-left'),this['_originMidMid']=this[q(0x1b5)]('origin-mid-mid'),this[q(0x1b8)]=this[q(0x1b5)](q(0x1d4)),this['_originBotLeft']=this[q(0x1b5)](q(0x1bb)),this[q(0x18b)]=this['_getDomElement']('origin-bot-mid'),this['_originBotRight']=this['_getDomElement'](q(0x1aa)),this[q(0x1b0)][q(0x19a)]=()=>this['_changePositionMode'](q(0x1a4)),this[q(0x1a7)]['onclick']=()=>this[q(0x1d6)](q(0x1a6)),this[q(0x198)]['onclick']=()=>this['_applyTransform'](),this[q(0x192)]='relative',this[q(0x1d6)](this[q(0x192)]);}[o(0x1d6)](c){const r=o;this['_relativeButton'][r(0x1a0)]('aria-pressed',String(c==='relative')),this[r(0x1a7)]['setAttribute']('aria-pressed',String(c==='absolute')),this['_transformMode']=c;}['_applyTransform'](){const s=o;this[s(0x1b9)]();if(!this['_designerCanvas'])return;let c=this[s(0x191)][s(0x199)][s(0x1d3)]['selectedElements'];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this[s(0x191)][s(0x199)]['selectionService']['onSelectionChanged'][s(0x1c7)](()=>{const t=s;this[t(0x1d5)]=!![],this[t(0x1bc)]=null;});if(c[s(0x1b7)]!=0x0){let d={'x':isNaN(this['_inputX'][s(0x1ab)])?null:this['_inputX'][s(0x1ab)],'y':isNaN(this[s(0x1d7)]['valueAsNumber'])?null:this[s(0x1d7)]['valueAsNumber']},e=this['_inputR'][s(0x1ab)]?this['_inputR'][s(0x1ab)]:0x0,f=c[0x0]['openGroup']('Transform\x20selection');if(!this['_previousSelectionRect']||this['_selectionChanged'])this[s(0x1bc)]=calculateOuterRect(c,this['_designerCanvas']);let g=this[s(0x1ba)](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h[s(0x1b2)]('top')),'width':parseFloat(h['getStyle'](s(0x1c1))),'height':parseFloat(h[s(0x1b2)](s(0x1d2)))},j=h['getStyle'](s(0x18a)),k=0x0;if(j)k=parseFloat(h['getStyle'](s(0x18a))[s(0x19b)]('rotate(','')[s(0x19b)]('deg)',''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this['_transformMode']);h[s(0x19e)]('left',l['x']['toString']()+'px'),h['setStyle'](s(0x1c8),l['y']['toString']()+'px');let m;if(this['_transformMode']==s(0x1a4))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[s(0x19e)]('transform','rotate('+m+'deg)');else h['removeStyle']('transform');}this['_applySpacing'](c),f[s(0x1d8)]();}}[o(0x1ba)](c){const u=o;switch(this[u(0x1be)]){case u(0x1bf):return{'x':c['x'],'y':c['y']};case u(0x1c6):return{'x':c['x']+c[u(0x1c1)]/0x2,'y':c['y']};case u(0x1a3):return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c[u(0x1c1)]/0x2,'y':c['y']+c['height']/0x2};case u(0x1b1):return{'x':c['x']+c[u(0x1c1)],'y':c['y']+c[u(0x1d2)]/0x2};case u(0x1ae):return{'x':c['x'],'y':c['y']+c[u(0x1d2)]};case u(0x1c9):return{'x':c['x']+c['width']/0x2,'y':c['y']+c[u(0x1d2)]};case u(0x18e):return{'x':c['x']+c['width'],'y':c['y']+c[u(0x1d2)]};}}['_checkOrigin'](){const v=o;if(this['_originTopLeft'][v(0x1b6)])this['_transformOrigin']=v(0x1bf);else{if(this[v(0x1ad)]['checked'])this[v(0x1be)]='topMid';else{if(this[v(0x1a9)]['checked'])this['_transformOrigin']=v(0x1a3);else{if(this[v(0x195)][v(0x1b6)])this[v(0x1be)]='midLeft';else{if(this[v(0x194)]['checked'])this['_transformOrigin']='midMid';else{if(this['_originMidRight'][v(0x1b6)])this[v(0x1be)]='midRight';else{if(this[v(0x190)]['checked'])this['_transformOrigin']=v(0x1ae);else{if(this['_originBotMid'][v(0x1b6)])this['_transformOrigin']=v(0x1c9);else{if(this[v(0x1d1)]['checked'])this['_transformOrigin']='botRight';}}}}}}}}}[o(0x1a2)](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h==w(0x1a6)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[w(0x1d2)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math[w(0x1d9)](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}[o(0x1c3)](c){const x=o;let d=this[x(0x1bd)]['valueAsNumber'],e=this[x(0x1ca)][x(0x1ab)];if(!isNaN(d)){let f=c[x(0x1cc)]((h,j)=>{const y=x;return parseFloat(h[y(0x1b2)](y(0x1cd)))-parseFloat(j['getStyle']('left'));}),g=parseFloat(f[0x0]['getStyle'](x(0x1cd)));for(let h=0x0;h<f['length'];h++){f[h][x(0x19e)]('left',h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const z=x;return parseFloat(l['getStyle']('top'))-parseFloat(m[z(0x1b2)](z(0x1c8)));}),k=parseFloat(j[0x0][x(0x1b2)](x(0x1c8)));for(let l=0x0;l<j[x(0x1b7)];l++){j[l][x(0x19e)](x(0x1c8),l*e+k+'px');}}}}customElements[o(0x196)](o(0x19d),TransformToolPopup);