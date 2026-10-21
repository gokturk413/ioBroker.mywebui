const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xe6))/0x1+-parseInt(n(0xe0))/0x2+parseInt(n(0xea))/0x3+parseInt(n(0xd0))/0x4+-parseInt(n(0xe3))/0x5+-parseInt(n(0xf5))/0x6+-parseInt(n(0x10c))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb4873));function b(c,d){c=c-0xcc;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0xf4)];['_selectionChanged'];[o(0xff)];[o(0x106)];[o(0x100)];[o(0xe8)];[o(0xfe)];[o(0xee)];[o(0xf0)];[o(0xd4)];['_originTopLeft'];['_originTopMid'];[o(0xd1)];['_originMidLeft'];[o(0xe1)];[o(0xce)];[o(0xfb)];['_originBotMid'];[o(0xe9)];['_transformMode'];[o(0x10f)];get['windowTitle'](){const p=o;return p(0xf2);}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this['_relativeButton']=this['_getDomElement']('transform-button-relative'),this[q(0x106)]=this[q(0xcf)]('transform-button-absolute'),this[q(0x100)]=this['_getDomElement']('transform-button-apply'),this['_inputX']=this['_getDomElement'](q(0xdc)),this['_inputY']=this['_getDomElement']('transform-input-y'),this['_inputR']=this['_getDomElement']('transform-input-r'),this['_inputSpacingX']=this['_getDomElement']('spacing-input-x'),this[q(0xd4)]=this[q(0xcf)]('spacing-input-y'),this[q(0xcc)]=this['_getDomElement'](q(0x103)),this[q(0x102)]=this['_getDomElement'](q(0xef)),this['_originTopRight']=this[q(0xcf)]('origin-top-right'),this[q(0x10d)]=this[q(0xcf)](q(0xd3)),this[q(0xe1)]=this['_getDomElement']('origin-mid-mid'),this['_originMidRight']=this['_getDomElement']('origin-mid-right'),this['_originBotLeft']=this['_getDomElement'](q(0xe4)),this[q(0x101)]=this[q(0xcf)](q(0xd7)),this['_originBotRight']=this['_getDomElement']('origin-bot-right'),this[q(0xff)]['onclick']=()=>this['_changePositionMode'](q(0xde)),this['_absoluteButton']['onclick']=()=>this['_changePositionMode']('absolute'),this[q(0x100)][q(0xd5)]=()=>this['_applyTransform'](),this['_transformMode']=q(0xde),this[q(0xf6)](this['_transformMode']);}['_changePositionMode'](c){const r=o;this['_relativeButton']['setAttribute']('aria-pressed',String(c===r(0xde))),this[r(0x106)]['setAttribute'](r(0xd9),String(c==='absolute')),this[r(0x105)]=c;}['_applyTransform'](){const s=o;this['_checkOrigin']();if(!this[s(0x107)])return;let c=this[s(0x107)][s(0x110)][s(0xe5)]['selectedElements'];c=filterChildPlaceItems(c),this[s(0xfc)]=![],this[s(0x107)]['instanceServiceContainer'][s(0xe5)][s(0xf7)][s(0x109)](()=>{const t=s;this['_selectionChanged']=!![],this[t(0xf4)]=null;});if(c[s(0x10a)]!=0x0){let d={'x':isNaN(this['_inputX'][s(0x10e)])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this[s(0xfe)][s(0x10e)])?null:this[s(0xfe)]['valueAsNumber']},e=this[s(0xee)]['valueAsNumber']?this[s(0xee)][s(0x10e)]:0x0,f=c[0x0][s(0xd6)]('Transform\x20selection');if(!this['_previousSelectionRect']||this[s(0xfc)])this[s(0xf4)]=calculateOuterRect(c,this[s(0x107)]);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h[s(0x10b)](s(0x104))),'y':parseFloat(h[s(0x10b)]('top')),'width':parseFloat(h['getStyle']('width')),'height':parseFloat(h[s(0x10b)](s(0xe7)))},j=h[s(0x10b)]('transform'),k=0x0;if(j)k=parseFloat(h['getStyle'](s(0xd8))['replaceAll']('rotate(','')['replaceAll'](s(0xdf),''));let l=this[s(0xf1)](this[s(0xf4)],g,i,e,d,this[s(0x105)]);h[s(0xfa)]('left',l['x']['toString']()+'px'),h['setStyle'](s(0x108),l['y']['toString']()+'px');let m;if(this[s(0x105)]==s(0xde))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[s(0xfa)]('transform',s(0xe2)+m+'deg)');else h['removeStyle'](s(0xd8));}this['_applySpacing'](c),f['commit']();}}['_calculateTransformOriginPosition'](c){const u=o;switch(this['_transformOrigin']){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[u(0xf9)]/0x2,'y':c['y']};case u(0xfd):return{'x':c['x']+c['width'],'y':c['y']};case u(0xf3):return{'x':c['x'],'y':c['y']+c['height']/0x2};case u(0xd2):return{'x':c['x']+c[u(0xf9)]/0x2,'y':c['y']+c['height']/0x2};case u(0x111):return{'x':c['x']+c['width'],'y':c['y']+c[u(0xe7)]/0x2};case u(0xcd):return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c[u(0xf9)]/0x2,'y':c['y']+c[u(0xe7)]};case u(0xed):return{'x':c['x']+c[u(0xf9)],'y':c['y']+c['height']};}}['_checkOrigin'](){const v=o;if(this[v(0xcc)]['checked'])this[v(0x10f)]=v(0xdd);else{if(this[v(0x102)]['checked'])this['_transformOrigin']=v(0xeb);else{if(this['_originTopRight']['checked'])this['_transformOrigin']=v(0xfd);else{if(this['_originMidLeft'][v(0xda)])this['_transformOrigin']='midLeft';else{if(this['_originMidMid'][v(0xda)])this[v(0x10f)]=v(0xd2);else{if(this[v(0xce)][v(0xda)])this[v(0x10f)]='midRight';else{if(this[v(0xfb)][v(0xda)])this['_transformOrigin']='botLeft';else{if(this['_originBotMid']['checked'])this['_transformOrigin']='botMid';else{if(this['_originBotRight']['checked'])this[v(0x10f)]='botRight';}}}}}}}}}[o(0xf1)](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math[w(0xec)](f)*j['y']+d['x']+g['x'],'y':Math[w(0xec)](f)*j['x']+Math[w(0xdb)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const x=o;let d=this[x(0xf0)][x(0x10e)],e=this['_inputSpacingY']['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{const y=x;return parseFloat(h[y(0x10b)]('left'))-parseFloat(j['getStyle']('left'));}),g=parseFloat(f[0x0]['getStyle'](x(0x104)));for(let h=0x0;h<f[x(0x10a)];h++){f[h]['setStyle']('left',h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const z=x;return parseFloat(l['getStyle']('top'))-parseFloat(m['getStyle'](z(0x108)));}),k=parseFloat(j[0x0][x(0x10b)](x(0x108)));for(let l=0x0;l<j['length'];l++){j[l][x(0xfa)]('top',l*e+k+'px');}}}}function a(){const A=['instanceServiceContainer','midRight','_originTopLeft','botLeft','_originMidRight','_getDomElement','5634108iyabTM','_originTopRight','midMid','origin-mid-left','_inputSpacingY','onclick','openGroup','origin-bot-mid','transform','aria-pressed','checked','cos','transform-input-x','topLeft','relative','deg)','1013732UybaQa','_originMidMid','rotate(','741705hegwGL','origin-bot-left','selectionService','1391547dLjAOd','height','_inputX','_originBotRight','3795054eqjKvH','topMid','sin','botRight','_inputR','origin-top-mid','_inputSpacingX','_calculateTransform','Transform','midLeft','_previousSelectionRect','3141348DmQrHz','_changePositionMode','onSelectionChanged','define','width','setStyle','_originBotLeft','_selectionChanged','topRight','_inputY','_relativeButton','_applyButton','_originBotMid','_originTopMid','origin-top-left','left','_transformMode','_absoluteButton','_designerCanvas','top','once','length','getStyle','15028188qQIVFj','_originMidLeft','valueAsNumber','_transformOrigin'];a=function(){return A;};return a();}customElements[o(0xf8)]('node-projects-designer-transform-tool-popup',TransformToolPopup);