const o=b;function b(c,d){c=c-0x94;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xb9))/0x1+-parseInt(n(0x9f))/0x2+-parseInt(n(0x9c))/0x3+parseInt(n(0xd3))/0x4*(parseInt(n(0xa7))/0x5)+parseInt(n(0xa3))/0x6+-parseInt(n(0xa5))/0x7*(-parseInt(n(0xc6))/0x8)+-parseInt(n(0x95))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe7b5c));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0xa4)];['_selectionChanged'];['_relativeButton'];['_absoluteButton'];[o(0xce)];[o(0xb6)];['_inputY'];[o(0xc5)];[o(0xcd)];['_inputSpacingY'];[o(0xc3)];['_originTopMid'];[o(0x9e)];[o(0xcc)];[o(0x97)];['_originMidRight'];[o(0xcf)];[o(0xb2)];['_originBotRight'];[o(0xbb)];['_transformOrigin'];get[o(0xc7)](){const p=o;return p(0xb0);}get['windowContentStyle'](){return css`
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
    `;}get[o(0xc9)](){const q=o;return q(0x98);}constructor(c){const r=o;super(c),this['_relativeButton']=this[r(0xd8)]('transform-button-relative'),this[r(0xd2)]=this['_getDomElement'](r(0x96)),this[r(0xce)]=this[r(0xd8)]('transform-button-apply'),this[r(0xb6)]=this['_getDomElement'](r(0xc2)),this[r(0xa2)]=this['_getDomElement']('transform-input-y'),this['_inputR']=this['_getDomElement']('transform-input-r'),this['_inputSpacingX']=this['_getDomElement'](r(0xda)),this['_inputSpacingY']=this['_getDomElement']('spacing-input-y'),this[r(0xc3)]=this[r(0xd8)]('origin-top-left'),this[r(0xd0)]=this[r(0xd8)](r(0xd9)),this['_originTopRight']=this['_getDomElement']('origin-top-right'),this[r(0xcc)]=this[r(0xd8)]('origin-mid-left'),this[r(0x97)]=this['_getDomElement'](r(0xdc)),this['_originMidRight']=this[r(0xd8)](r(0xcb)),this['_originBotLeft']=this['_getDomElement'](r(0xa0)),this['_originBotMid']=this['_getDomElement'](r(0xc4)),this[r(0xbe)]=this['_getDomElement']('origin-bot-right'),this['_relativeButton'][r(0xbc)]=()=>this['_changePositionMode']('relative'),this[r(0xd2)][r(0xbc)]=()=>this[r(0x9a)](r(0xad)),this[r(0xce)]['onclick']=()=>this['_applyTransform'](),this[r(0xbb)]=r(0xae),this[r(0x9a)](this['_transformMode']);}['_changePositionMode'](c){const s=o;this[s(0xb4)][s(0xa8)]('aria-pressed',String(c===s(0xae))),this[s(0xd2)][s(0xa8)](s(0xb3),String(c===s(0xad))),this[s(0xbb)]=c;}['_applyTransform'](){const t=o;this[t(0xbd)]();if(!this['_designerCanvas'])return;let c=this[t(0x94)][t(0xbf)][t(0xac)][t(0xa6)];c=filterChildPlaceItems(c),this[t(0xc0)]=![],this['_designerCanvas'][t(0xbf)][t(0xac)]['onSelectionChanged'][t(0xd6)](()=>{const u=t;this['_selectionChanged']=!![],this[u(0xa4)]=null;});if(c['length']!=0x0){let d={'x':isNaN(this[t(0xb6)][t(0xa1)])?null:this['_inputX'][t(0xa1)],'y':isNaN(this[t(0xa2)]['valueAsNumber'])?null:this['_inputY']['valueAsNumber']},e=this[t(0xc5)]['valueAsNumber']?this[t(0xc5)][t(0xa1)]:0x0,f=c[0x0]['openGroup'](t(0xd1));if(!this[t(0xa4)]||this['_selectionChanged'])this['_previousSelectionRect']=calculateOuterRect(c,this['_designerCanvas']);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h[t(0xdb)](t(0xd7))),'y':parseFloat(h[t(0xdb)]('top')),'width':parseFloat(h[t(0xdb)](t(0xb5))),'height':parseFloat(h[t(0xdb)]('height'))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h[t(0xdb)](t(0xaa))['replaceAll']('rotate(','')['replaceAll'](t(0x9b),''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this['_transformMode']);h[t(0xba)]('left',l['x']['toString']()+'px'),h['setStyle']('top',l['y'][t(0xb1)]()+'px');let m;if(this['_transformMode']==t(0xae))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[t(0xba)]('transform','rotate('+m+t(0x9b));else h['removeStyle']('transform');}this['_applySpacing'](c),f['commit']();}}['_calculateTransformOriginPosition'](c){const v=o;switch(this[v(0xca)]){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[v(0xb5)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c[v(0xb8)]/0x2};case v(0xd4):return{'x':c['x']+c[v(0xb5)]/0x2,'y':c['y']+c['height']/0x2};case'midRight':return{'x':c['x']+c[v(0xb5)],'y':c['y']+c['height']/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c[v(0xb8)]};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c['width'],'y':c['y']+c[v(0xb8)]};}}[o(0xbd)](){const w=o;if(this[w(0xc3)]['checked'])this['_transformOrigin']=w(0xab);else{if(this[w(0xd0)][w(0x9d)])this[w(0xca)]='topMid';else{if(this['_originTopRight']['checked'])this['_transformOrigin']=w(0xc8);else{if(this['_originMidLeft']['checked'])this['_transformOrigin']=w(0x99);else{if(this[w(0x97)][w(0x9d)])this[w(0xca)]='midMid';else{if(this['_originMidRight'][w(0x9d)])this[w(0xca)]='midRight';else{if(this[w(0xcf)]['checked'])this['_transformOrigin']='botLeft';else{if(this['_originBotMid'][w(0x9d)])this['_transformOrigin']='botMid';else{if(this['_originBotRight']['checked'])this[w(0xca)]=w(0xb7);}}}}}}}}}[o(0xa9)](c,d,e,f,g,h){const x=o;let i;f=f*(Math['PI']/0xb4);if(h==x(0xad)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[x(0xb5)]/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math[x(0xd5)](f)*j['y']+d['x']+g['x'],'y':Math[x(0xd5)](f)*j['x']+Math[x(0xc1)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const y=o;let d=this['_inputSpacingX']['valueAsNumber'],e=this['_inputSpacingY'][y(0xa1)];if(!isNaN(d)){let f=c['sort']((h,j)=>{const z=y;return parseFloat(h[z(0xdb)]('left'))-parseFloat(j[z(0xdb)](z(0xd7)));}),g=parseFloat(f[0x0]['getStyle'](y(0xd7)));for(let h=0x0;h<f['length'];h++){f[h]['setStyle'](y(0xd7),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const A=y;return parseFloat(l[A(0xdb)]('top'))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j[y(0xaf)];l++){j[l]['setStyle']('top',l*e+k+'px');}}}}function a(){const B=['cos','transform-input-x','_originTopLeft','origin-bot-mid','_inputR','11032ojfmcZ','windowTitle','topRight','windowTemplate','_transformOrigin','origin-mid-right','_originMidLeft','_inputSpacingX','_applyButton','_originBotLeft','_originTopMid','Transform\x20selection','_absoluteButton','4QfbJsh','midMid','sin','once','left','_getDomElement','origin-top-mid','spacing-input-x','getStyle','origin-mid-mid','_designerCanvas','763182tiwrkn','transform-button-absolute','_originMidMid','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','midLeft','_changePositionMode','deg)','4964085YlhwSo','checked','_originTopRight','3142362SjzrvF','origin-bot-left','valueAsNumber','_inputY','3209232ulqpmv','_previousSelectionRect','4179MzaxyJ','selectedElements','6443095QrSrOO','setAttribute','_calculateTransform','transform','topLeft','selectionService','absolute','relative','length','Transform','toString','_originBotMid','aria-pressed','_relativeButton','width','_inputX','botRight','height','1613004dIfxUB','setStyle','_transformMode','onclick','_checkOrigin','_originBotRight','instanceServiceContainer','_selectionChanged'];a=function(){return B;};return a();}customElements['define']('node-projects-designer-transform-tool-popup',TransformToolPopup);