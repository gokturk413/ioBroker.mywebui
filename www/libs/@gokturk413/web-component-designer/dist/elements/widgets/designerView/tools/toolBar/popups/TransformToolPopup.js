const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x111))/0x1*(parseInt(n(0xec))/0x2)+parseInt(n(0x118))/0x3+-parseInt(n(0x107))/0x4*(parseInt(n(0x122))/0x5)+-parseInt(n(0x125))/0x6*(parseInt(n(0x124))/0x7)+-parseInt(n(0x10c))/0x8+-parseInt(n(0xe3))/0x9*(-parseInt(n(0xe8))/0xa)+-parseInt(n(0xfc))/0xb*(-parseInt(n(0x112))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3b5ac));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function b(c,d){c=c-0xd9;const e=a();let f=e[c];return f;}function a(){const A=['_applyTransform','993isoAWE','5316JNDIfM','length','_transformMode','midMid','origin-mid-right','transform-button-relative','816288umoJnv','origin-mid-mid','onSelectionChanged','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','botRight','_changePositionMode','checked','_inputSpacingY','transform-input-x','_absoluteButton','31145gybCft','setStyle','39277nDWnNc','468AyOsZn','botMid','node-projects-designer-transform-tool-popup','_originMidRight','valueAsNumber','origin-bot-right','topLeft','_originTopRight','_originMidMid','origin-mid-left','left','_designerCanvas','_originTopMid','343251obGMYS','windowTitle','selectedElements','Transform','_getDomElement','60ZDTUUj','toString','_inputSpacingX','transform-button-apply','902SBwijo','_inputX','_transformOrigin','top','_previousSelectionRect','height','openGroup','spacing-input-x','selectionService','_selectionChanged','rotate(','relative','width','_originBotRight','define','_checkOrigin','27071OKfisa','absolute','instanceServiceContainer','_originMidLeft','_applySpacing','_calculateTransform','botLeft','spacing-input-y','replaceAll','_inputY','getStyle','92uEVqIA','cos','midRight','_relativeButton','midLeft','2554152wrcOMf','_originBotLeft','topMid','aria-pressed'];a=function(){return A;};return a();}import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0xf0)];[o(0xf5)];[o(0x10a)];['_absoluteButton'];['_applyButton'];[o(0xed)];['_inputY'];['_inputR'];[o(0xea)];['_inputSpacingY'];['_originTopLeft'];['_originTopMid'];['_originTopRight'];[o(0xff)];['_originMidMid'];[o(0xd9)];[o(0x10d)];['_originBotMid'];[o(0xf9)];['_transformMode'];['_transformOrigin'];get[o(0xe4)](){const p=o;return p(0xe6);}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){const q=o;return q(0x11b);}constructor(c){const r=o;super(c),this['_relativeButton']=this[r(0xe7)](r(0x117)),this[r(0x121)]=this[r(0xe7)]('transform-button-absolute'),this['_applyButton']=this[r(0xe7)](r(0xeb)),this[r(0xed)]=this['_getDomElement'](r(0x120)),this[r(0x105)]=this[r(0xe7)]('transform-input-y'),this['_inputR']=this[r(0xe7)]('transform-input-r'),this['_inputSpacingX']=this['_getDomElement'](r(0xf3)),this[r(0x11f)]=this[r(0xe7)](r(0x103)),this['_originTopLeft']=this['_getDomElement']('origin-top-left'),this[r(0xe2)]=this['_getDomElement']('origin-top-mid'),this[r(0xdd)]=this['_getDomElement']('origin-top-right'),this['_originMidLeft']=this[r(0xe7)](r(0xdf)),this[r(0xde)]=this['_getDomElement'](r(0x119)),this[r(0xd9)]=this[r(0xe7)](r(0x116)),this['_originBotLeft']=this[r(0xe7)]('origin-bot-left'),this['_originBotMid']=this['_getDomElement']('origin-bot-mid'),this[r(0xf9)]=this['_getDomElement'](r(0xdb)),this[r(0x10a)]['onclick']=()=>this[r(0x11d)](r(0xf7)),this[r(0x121)]['onclick']=()=>this['_changePositionMode']('absolute'),this['_applyButton']['onclick']=()=>this[r(0x110)](),this['_transformMode']=r(0xf7),this[r(0x11d)](this['_transformMode']);}['_changePositionMode'](c){const s=o;this['_relativeButton']['setAttribute'](s(0x10f),String(c==='relative')),this['_absoluteButton']['setAttribute'](s(0x10f),String(c==='absolute')),this[s(0x114)]=c;}[o(0x110)](){const t=o;this['_checkOrigin']();if(!this['_designerCanvas'])return;let c=this['_designerCanvas']['instanceServiceContainer'][t(0xf4)][t(0xe5)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this[t(0xe1)][t(0xfe)]['selectionService'][t(0x11a)]['once'](()=>{const u=t;this[u(0xf5)]=!![],this[u(0xf0)]=null;});if(c[t(0x113)]!=0x0){let d={'x':isNaN(this['_inputX']['valueAsNumber'])?null:this['_inputX'][t(0xda)],'y':isNaN(this['_inputY'][t(0xda)])?null:this[t(0x105)][t(0xda)]},e=this['_inputR']['valueAsNumber']?this['_inputR'][t(0xda)]:0x0,f=c[0x0][t(0xf2)]('Transform\x20selection');if(!this['_previousSelectionRect']||this['_selectionChanged'])this[t(0xf0)]=calculateOuterRect(c,this[t(0xe1)]);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h[t(0x106)]('width')),'height':parseFloat(h['getStyle'](t(0xf1)))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h['getStyle']('transform')[t(0x104)](t(0xf6),'')['replaceAll']('deg)',''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this[t(0x114)]);h['setStyle']('left',l['x'][t(0xe9)]()+'px'),h[t(0x123)](t(0xef),l['y'][t(0xe9)]()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle']('transform','rotate('+m+'deg)');else h['removeStyle']('transform');}this[t(0x100)](c),f['commit']();}}['_calculateTransformOriginPosition'](c){const v=o;switch(this[v(0xee)]){case v(0xdc):return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c['width']/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c[v(0xf1)]/0x2};case'midMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c[v(0xf1)]/0x2};case'midRight':return{'x':c['x']+c['width'],'y':c['y']+c[v(0xf1)]/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c['height']};case v(0x126):return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case v(0x11c):return{'x':c['x']+c['width'],'y':c['y']+c[v(0xf1)]};}}[o(0xfb)](){const w=o;if(this['_originTopLeft'][w(0x11e)])this['_transformOrigin']=w(0xdc);else{if(this['_originTopMid']['checked'])this['_transformOrigin']=w(0x10e);else{if(this['_originTopRight'][w(0x11e)])this[w(0xee)]='topRight';else{if(this['_originMidLeft']['checked'])this[w(0xee)]=w(0x10b);else{if(this['_originMidMid']['checked'])this['_transformOrigin']=w(0x115);else{if(this[w(0xd9)][w(0x11e)])this[w(0xee)]=w(0x109);else{if(this['_originBotLeft']['checked'])this[w(0xee)]=w(0x102);else{if(this['_originBotMid']['checked'])this[w(0xee)]='botMid';else{if(this['_originBotRight'][w(0x11e)])this['_transformOrigin']='botRight';}}}}}}}}}[o(0x101)](c,d,e,f,g,h){const x=o;let i;f=f*(Math['PI']/0xb4);if(h==x(0xfd)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[x(0xf8)]/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math[x(0x108)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const y=o;let d=this[y(0xea)]['valueAsNumber'],e=this['_inputSpacingY'][y(0xda)];if(!isNaN(d)){let f=c['sort']((h,j)=>{const z=y;return parseFloat(h[z(0x106)]('left'))-parseFloat(j[z(0x106)]('left'));}),g=parseFloat(f[0x0][y(0x106)]('left'));for(let h=0x0;h<f['length'];h++){f[h]['setStyle'](y(0xe0),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{return parseFloat(l['getStyle']('top'))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0]['getStyle'](y(0xef)));for(let l=0x0;l<j['length'];l++){j[l][y(0x123)]('top',l*e+k+'px');}}}}customElements[o(0xfa)](o(0x127),TransformToolPopup);