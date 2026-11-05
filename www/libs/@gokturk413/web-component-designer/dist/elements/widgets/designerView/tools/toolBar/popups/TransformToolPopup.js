const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x156))/0x1+-parseInt(n(0x168))/0x2*(parseInt(n(0x16d))/0x3)+-parseInt(n(0x14c))/0x4+parseInt(n(0x155))/0x5*(-parseInt(n(0x146))/0x6)+-parseInt(n(0x154))/0x7+-parseInt(n(0x144))/0x8+parseInt(n(0x16c))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe1a5f));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';function b(c,d){c=c-0x140;const e=a();let f=e[c];return f;}import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';function a(){const A=['_originTopLeft','31233888BQGGly','84771lAmchG','_originMidRight','setStyle','topLeft','_designerCanvas','checked','_originBotLeft','topMid','valueAsNumber','left','_changePositionMode','getStyle','_originTopMid','instanceServiceContainer','_absoluteButton','_checkOrigin','_originMidLeft','_calculateTransformOriginPosition','transform-button-apply','aria-pressed','_previousSelectionRect','Transform','_originTopRight','length','transform','origin-mid-mid','selectedElements','top','origin-top-mid','sin','_getDomElement','botMid','transform-button-relative','_originMidMid','_inputSpacingY','10736168nDVzyf','windowTemplate','2052RprMdW','_relativeButton','origin-mid-right','_inputY','_applyTransform','_inputSpacingX','3944444PKqdJx','_inputX','_inputR','_transformOrigin','relative','onSelectionChanged','rotate(','botLeft','650867NBKOxn','11345LKvnmS','735705Xoitqk','absolute','once','cos','selectionService','node-projects-designer-transform-tool-popup','_selectionChanged','toString','height','_calculateTransform','sort','_applyButton','width','_transformMode','origin-top-right','setAttribute','replaceAll','midMid','6ECmfHL','origin-bot-right','onclick'];a=function(){return A;};return a();}export class TransformToolPopup extends DraggableToolWindow{[o(0x181)];['_selectionChanged'];[o(0x147)];[o(0x17b)];[o(0x161)];['_inputX'];['_inputY'];[o(0x14e)];[o(0x14b)];['_inputSpacingY'];[o(0x16b)];[o(0x179)];[o(0x183)];['_originMidLeft'];[o(0x142)];[o(0x16e)];[o(0x173)];['_originBotMid'];['_originBotRight'];['_transformMode'];[o(0x14f)];get['windowTitle'](){const p=o;return p(0x182);}get['windowContentStyle'](){return css`
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
    `;}get[o(0x145)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this[q(0x147)]=this[q(0x18b)](q(0x141)),this[q(0x17b)]=this[q(0x18b)]('transform-button-absolute'),this[q(0x161)]=this[q(0x18b)](q(0x17f)),this[q(0x14d)]=this[q(0x18b)]('transform-input-x'),this['_inputY']=this['_getDomElement']('transform-input-y'),this[q(0x14e)]=this[q(0x18b)]('transform-input-r'),this[q(0x14b)]=this[q(0x18b)]('spacing-input-x'),this[q(0x143)]=this['_getDomElement']('spacing-input-y'),this[q(0x16b)]=this['_getDomElement']('origin-top-left'),this[q(0x179)]=this['_getDomElement'](q(0x189)),this[q(0x183)]=this[q(0x18b)](q(0x164)),this['_originMidLeft']=this['_getDomElement']('origin-mid-left'),this[q(0x142)]=this['_getDomElement'](q(0x186)),this[q(0x16e)]=this[q(0x18b)](q(0x148)),this['_originBotLeft']=this[q(0x18b)]('origin-bot-left'),this['_originBotMid']=this[q(0x18b)]('origin-bot-mid'),this['_originBotRight']=this['_getDomElement'](q(0x169)),this['_relativeButton']['onclick']=()=>this[q(0x177)]('relative'),this[q(0x17b)]['onclick']=()=>this['_changePositionMode']('absolute'),this[q(0x161)][q(0x16a)]=()=>this['_applyTransform'](),this['_transformMode']='relative',this['_changePositionMode'](this[q(0x163)]);}['_changePositionMode'](c){const r=o;this['_relativeButton']['setAttribute'](r(0x180),String(c===r(0x150))),this['_absoluteButton'][r(0x165)]('aria-pressed',String(c==='absolute')),this['_transformMode']=c;}[o(0x14a)](){const s=o;this[s(0x17c)]();if(!this[s(0x171)])return;let c=this['_designerCanvas'][s(0x17a)]['selectionService'][s(0x187)];c=filterChildPlaceItems(c),this[s(0x15c)]=![],this[s(0x171)]['instanceServiceContainer'][s(0x15a)][s(0x151)][s(0x158)](()=>{const t=s;this[t(0x15c)]=!![],this[t(0x181)]=null;});if(c[s(0x184)]!=0x0){let d={'x':isNaN(this[s(0x14d)][s(0x175)])?null:this[s(0x14d)][s(0x175)],'y':isNaN(this[s(0x149)][s(0x175)])?null:this[s(0x149)][s(0x175)]},e=this['_inputR']['valueAsNumber']?this['_inputR']['valueAsNumber']:0x0,f=c[0x0]['openGroup']('Transform\x20selection');if(!this[s(0x181)]||this[s(0x15c)])this[s(0x181)]=calculateOuterRect(c,this['_designerCanvas']);let g=this[s(0x17e)](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h[s(0x178)]('left')),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h[s(0x178)](s(0x162))),'height':parseFloat(h[s(0x178)]('height'))},j=h[s(0x178)](s(0x185)),k=0x0;if(j)k=parseFloat(h['getStyle']('transform')['replaceAll'](s(0x152),'')[s(0x166)]('deg)',''));let l=this[s(0x15f)](this[s(0x181)],g,i,e,d,this[s(0x163)]);h[s(0x16f)]('left',l['x'][s(0x15d)]()+'px'),h['setStyle'](s(0x188),l['y'][s(0x15d)]()+'px');let m;if(this['_transformMode']==s(0x150))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[s(0x16f)]('transform','rotate('+m+'deg)');else h['removeStyle'](s(0x185));}this['_applySpacing'](c),f['commit']();}}[o(0x17e)](c){const u=o;switch(this['_transformOrigin']){case u(0x170):return{'x':c['x'],'y':c['y']};case u(0x174):return{'x':c['x']+c[u(0x162)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c[u(0x15e)]/0x2};case'midMid':return{'x':c['x']+c[u(0x162)]/0x2,'y':c['y']+c[u(0x15e)]/0x2};case'midRight':return{'x':c['x']+c[u(0x162)],'y':c['y']+c['height']/0x2};case u(0x153):return{'x':c['x'],'y':c['y']+c[u(0x15e)]};case u(0x140):return{'x':c['x']+c['width']/0x2,'y':c['y']+c[u(0x15e)]};case'botRight':return{'x':c['x']+c['width'],'y':c['y']+c['height']};}}['_checkOrigin'](){const v=o;if(this[v(0x16b)][v(0x172)])this[v(0x14f)]=v(0x170);else{if(this['_originTopMid'][v(0x172)])this['_transformOrigin']='topMid';else{if(this['_originTopRight'][v(0x172)])this['_transformOrigin']='topRight';else{if(this[v(0x17d)][v(0x172)])this[v(0x14f)]='midLeft';else{if(this['_originMidMid'][v(0x172)])this[v(0x14f)]=v(0x167);else{if(this['_originMidRight']['checked'])this[v(0x14f)]='midRight';else{if(this[v(0x173)]['checked'])this[v(0x14f)]=v(0x153);else{if(this['_originBotMid']['checked'])this[v(0x14f)]=v(0x140);else{if(this['_originBotRight']['checked'])this['_transformOrigin']='botRight';}}}}}}}}}['_calculateTransform'](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h==w(0x157)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[w(0x15e)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[w(0x159)](f)*j['x']-Math[w(0x18a)](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const x=o;let d=this[x(0x14b)][x(0x175)],e=this['_inputSpacingY'][x(0x175)];if(!isNaN(d)){let f=c['sort']((h,j)=>{const y=x;return parseFloat(h[y(0x178)](y(0x176)))-parseFloat(j['getStyle']('left'));}),g=parseFloat(f[0x0]['getStyle'](x(0x176)));for(let h=0x0;h<f[x(0x184)];h++){f[h][x(0x16f)]('left',h*d+g+'px');}}if(!isNaN(e)){let j=c[x(0x160)]((l,m)=>{const z=x;return parseFloat(l['getStyle'](z(0x188)))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0][x(0x178)](x(0x188)));for(let l=0x0;l<j[x(0x184)];l++){j[l][x(0x16f)]('top',l*e+k+'px');}}}}customElements['define'](o(0x15b),TransformToolPopup);