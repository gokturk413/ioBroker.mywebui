const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x194))/0x1*(-parseInt(n(0x184))/0x2)+-parseInt(n(0x1a2))/0x3+-parseInt(n(0x177))/0x4+parseInt(n(0x19f))/0x5*(-parseInt(n(0x1be))/0x6)+-parseInt(n(0x1b8))/0x7+parseInt(n(0x17c))/0x8+parseInt(n(0x196))/0x9*(parseInt(n(0x179))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa4d5b));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0x181)];[o(0x171)];[o(0x1b6)];['_absoluteButton'];[o(0x172)];['_inputX'];['_inputY'];['_inputR'];[o(0x16c)];[o(0x174)];['_originTopLeft'];['_originTopMid'];['_originTopRight'];[o(0x1b9)];[o(0x198)];[o(0x19d)];['_originBotLeft'];['_originBotMid'];[o(0x1a8)];[o(0x176)];[o(0x18d)];get['windowTitle'](){const p=o;return p(0x1b0);}get[o(0x182)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this['_relativeButton']=this['_getDomElement'](q(0x1a5)),this['_absoluteButton']=this['_getDomElement'](q(0x1a0)),this[q(0x172)]=this['_getDomElement'](q(0x1bb)),this[q(0x1ba)]=this[q(0x17a)](q(0x178)),this['_inputY']=this[q(0x17a)]('transform-input-y'),this[q(0x1a6)]=this['_getDomElement'](q(0x191)),this[q(0x16c)]=this['_getDomElement'](q(0x1aa)),this['_inputSpacingY']=this[q(0x17a)](q(0x17f)),this[q(0x175)]=this[q(0x17a)](q(0x1ac)),this['_originTopMid']=this[q(0x17a)](q(0x1a7)),this[q(0x1b1)]=this[q(0x17a)](q(0x19e)),this['_originMidLeft']=this[q(0x17a)](q(0x18f)),this[q(0x198)]=this[q(0x17a)](q(0x187)),this[q(0x19d)]=this['_getDomElement'](q(0x18a)),this[q(0x18e)]=this[q(0x17a)]('origin-bot-left'),this[q(0x1a3)]=this['_getDomElement']('origin-bot-mid'),this[q(0x1a8)]=this['_getDomElement'](q(0x16b)),this['_relativeButton']['onclick']=()=>this['_changePositionMode'](q(0x1b3)),this['_absoluteButton']['onclick']=()=>this[q(0x18b)](q(0x192)),this['_applyButton']['onclick']=()=>this[q(0x17b)](),this['_transformMode']='relative',this['_changePositionMode'](this[q(0x176)]);}[o(0x18b)](c){const r=o;this['_relativeButton'][r(0x18c)](r(0x1b2),String(c==='relative')),this['_absoluteButton']['setAttribute'](r(0x1b2),String(c===r(0x192))),this[r(0x176)]=c;}['_applyTransform'](){const s=o;this['_checkOrigin']();if(!this[s(0x1a1)])return;let c=this[s(0x1a1)][s(0x1ad)]['selectionService'][s(0x1bf)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this['_designerCanvas'][s(0x1ad)][s(0x16a)][s(0x170)][s(0x186)](()=>{const t=s;this[t(0x171)]=!![],this['_previousSelectionRect']=null;});if(c[s(0x16e)]!=0x0){let d={'x':isNaN(this[s(0x1ba)]['valueAsNumber'])?null:this['_inputX'][s(0x1ae)],'y':isNaN(this['_inputY'][s(0x1ae)])?null:this[s(0x193)][s(0x1ae)]},e=this['_inputR']['valueAsNumber']?this[s(0x1a6)]['valueAsNumber']:0x0,f=c[0x0]['openGroup'](s(0x1b7));if(!this[s(0x181)]||this['_selectionChanged'])this[s(0x181)]=calculateOuterRect(c,this[s(0x1a1)]);let g=this['_calculateTransformOriginPosition'](this[s(0x181)]);for(let h of c){let i={'x':parseFloat(h[s(0x189)]('left')),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h['getStyle'](s(0x19a))),'height':parseFloat(h['getStyle']('height'))},j=h['getStyle'](s(0x185)),k=0x0;if(j)k=parseFloat(h[s(0x189)](s(0x185))['replaceAll'](s(0x1a4),'')[s(0x190)]('deg)',''));let l=this['_calculateTransform'](this[s(0x181)],g,i,e,d,this[s(0x176)]);h['setStyle'](s(0x17d),l['x'][s(0x19c)]()+'px'),h[s(0x1a9)]('top',l['y']['toString']()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[s(0x1a9)](s(0x185),'rotate('+m+'deg)');else h[s(0x16f)](s(0x185));}this['_applySpacing'](c),f['commit']();}}['_calculateTransformOriginPosition'](c){const u=o;switch(this[u(0x18d)]){case u(0x17e):return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[u(0x19a)]/0x2,'y':c['y']};case u(0x195):return{'x':c['x']+c[u(0x19a)],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c['height']/0x2};case u(0x197):return{'x':c['x']+c[u(0x19a)]/0x2,'y':c['y']+c['height']/0x2};case'midRight':return{'x':c['x']+c['width'],'y':c['y']+c['height']/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c[u(0x173)]};case u(0x16d):return{'x':c['x']+c['width'],'y':c['y']+c[u(0x173)]};}}[o(0x188)](){const v=o;if(this[v(0x175)][v(0x1af)])this[v(0x18d)]=v(0x17e);else{if(this['_originTopMid'][v(0x1af)])this[v(0x18d)]='topMid';else{if(this['_originTopRight'][v(0x1af)])this[v(0x18d)]='topRight';else{if(this[v(0x1b9)]['checked'])this['_transformOrigin']=v(0x19b);else{if(this['_originMidMid'][v(0x1af)])this[v(0x18d)]=v(0x197);else{if(this['_originMidRight']['checked'])this['_transformOrigin']=v(0x1b5);else{if(this['_originBotLeft'][v(0x1af)])this[v(0x18d)]=v(0x199);else{if(this['_originBotMid']['checked'])this[v(0x18d)]=v(0x1bd);else{if(this['_originBotRight'][v(0x1af)])this[v(0x18d)]='botRight';}}}}}}}}}['_calculateTransform'](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h==w(0x192)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[w(0x19a)]/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math[w(0x183)](f)*j['y']+d['x']+g['x'],'y':Math[w(0x183)](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}[o(0x180)](c){const x=o;let d=this[x(0x16c)][x(0x1ae)],e=this[x(0x174)]['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{const y=x;return parseFloat(h['getStyle']('left'))-parseFloat(j[y(0x189)]('left'));}),g=parseFloat(f[0x0]['getStyle'](x(0x17d)));for(let h=0x0;h<f[x(0x16e)];h++){f[h]['setStyle'](x(0x17d),h*d+g+'px');}}if(!isNaN(e)){let j=c[x(0x1ab)]((l,m)=>{const z=x;return parseFloat(l[z(0x189)]('top'))-parseFloat(m[z(0x189)](z(0x1b4)));}),k=parseFloat(j[0x0][x(0x189)](x(0x1b4)));for(let l=0x0;l<j['length'];l++){j[l]['setStyle'](x(0x1b4),l*e+k+'px');}}}}function a(){const A=['transform-input-r','absolute','_inputY','19007ecUxPd','topRight','26739asagdv','midMid','_originMidMid','botLeft','width','midLeft','toString','_originMidRight','origin-top-right','1070obHouQ','transform-button-absolute','_designerCanvas','864768LfWFiq','_originBotMid','rotate(','transform-button-relative','_inputR','origin-top-mid','_originBotRight','setStyle','spacing-input-x','sort','origin-top-left','instanceServiceContainer','valueAsNumber','checked','Transform','_originTopRight','aria-pressed','relative','top','midRight','_relativeButton','Transform\x20selection','3331552ubtlIq','_originMidLeft','_inputX','transform-button-apply','define','botMid','4602RTPXsd','selectedElements','selectionService','origin-bot-right','_inputSpacingX','botRight','length','removeStyle','onSelectionChanged','_selectionChanged','_applyButton','height','_inputSpacingY','_originTopLeft','_transformMode','1997428lvhlQw','transform-input-x','2510vtbDaw','_getDomElement','_applyTransform','2189840aJNazQ','left','topLeft','spacing-input-y','_applySpacing','_previousSelectionRect','windowContentStyle','sin','114xqYONG','transform','once','origin-mid-mid','_checkOrigin','getStyle','origin-mid-right','_changePositionMode','setAttribute','_transformOrigin','_originBotLeft','origin-mid-left','replaceAll'];a=function(){return A;};return a();}function b(c,d){c=c-0x16a;const e=a();let f=e[c];return f;}customElements[o(0x1bc)]('node-projects-designer-transform-tool-popup',TransformToolPopup);