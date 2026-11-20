const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x205))/0x1+parseInt(n(0x1ed))/0x2*(parseInt(n(0x1ee))/0x3)+parseInt(n(0x217))/0x4*(parseInt(n(0x1fb))/0x5)+-parseInt(n(0x1e3))/0x6+parseInt(n(0x1fc))/0x7*(parseInt(n(0x208))/0x8)+parseInt(n(0x1d5))/0x9*(-parseInt(n(0x1f9))/0xa)+-parseInt(n(0x20a))/0xb*(parseInt(n(0x204))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe91dd));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function a(){const B=['_getDomElement','instanceServiceContainer','_originBotRight','origin-bot-mid','midRight','_inputSpacingX','checked','_inputR','1030IYSSAR','Transform\x20selection','2325OHRwsM','1165689yWabmd','_originTopRight','length','_originMidRight','toString','_originTopLeft','top','_inputY','12VkbFLQ','778536TvaZvL','sin','botMid','72nRnHCi','_originMidLeft','4003549FAFnlP','_changePositionMode','absolute','_originBotMid','_originBotLeft','valueAsNumber','cos','windowTemplate','getStyle','once','_transformOrigin','_relativeButton','topRight','15464aunily','width','_originMidMid','rotate(','origin-top-right','_inputX','origin-bot-right','setStyle','_originTopMid','_selectionChanged','_checkOrigin','replaceAll','spacing-input-x','deg)','_applyButton','59958FEIBjA','aria-pressed','transform-button-apply','sort','transform','onclick','topLeft','midLeft','transform-input-x','left','relative','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','selectedElements','Transform','10442652sdBFJE','_transformMode','_previousSelectionRect','height','windowTitle','onSelectionChanged','_calculateTransformOriginPosition','_designerCanvas','define','transform-button-absolute','2ZdHWeT','3682605MwxSqj','botLeft','removeStyle'];a=function(){return B;};return a();}import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';function b(c,d){c=c-0x1cd;const e=a();let f=e[c];return f;}export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];[o(0x215)];['_absoluteButton'];[o(0x1d4)];[o(0x21c)];[o(0x203)];['_inputR'];[o(0x1f6)];['_inputSpacingY'];[o(0x201)];['_originTopMid'];[o(0x1fd)];[o(0x209)];[o(0x219)];['_originMidRight'];[o(0x20e)];[o(0x20d)];[o(0x1f3)];[o(0x1e4)];['_transformOrigin'];get[o(0x1e7)](){const p=o;return p(0x1e2);}get['windowContentStyle'](){return css`
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
    `;}get[o(0x211)](){const q=o;return q(0x1e0);}constructor(c){const r=o;super(c),this[r(0x215)]=this['_getDomElement']('transform-button-relative'),this['_absoluteButton']=this[r(0x1f1)](r(0x1ec)),this['_applyButton']=this['_getDomElement'](r(0x1d7)),this[r(0x21c)]=this[r(0x1f1)](r(0x1dd)),this['_inputY']=this['_getDomElement']('transform-input-y'),this[r(0x1f8)]=this['_getDomElement']('transform-input-r'),this[r(0x1f6)]=this[r(0x1f1)](r(0x1d2)),this['_inputSpacingY']=this['_getDomElement']('spacing-input-y'),this['_originTopLeft']=this[r(0x1f1)]('origin-top-left'),this[r(0x1ce)]=this[r(0x1f1)]('origin-top-mid'),this['_originTopRight']=this['_getDomElement'](r(0x21b)),this['_originMidLeft']=this[r(0x1f1)]('origin-mid-left'),this[r(0x219)]=this[r(0x1f1)]('origin-mid-mid'),this[r(0x1ff)]=this['_getDomElement']('origin-mid-right'),this[r(0x20e)]=this['_getDomElement']('origin-bot-left'),this[r(0x20d)]=this[r(0x1f1)](r(0x1f4)),this['_originBotRight']=this[r(0x1f1)](r(0x21d)),this[r(0x215)]['onclick']=()=>this[r(0x20b)]('relative'),this['_absoluteButton'][r(0x1da)]=()=>this['_changePositionMode'](r(0x20c)),this[r(0x1d4)]['onclick']=()=>this['_applyTransform'](),this[r(0x1e4)]='relative',this[r(0x20b)](this['_transformMode']);}['_changePositionMode'](c){const s=o;this[s(0x215)]['setAttribute']('aria-pressed',String(c===s(0x1df))),this['_absoluteButton']['setAttribute'](s(0x1d6),String(c===s(0x20c))),this[s(0x1e4)]=c;}['_applyTransform'](){const t=o;this['_checkOrigin']();if(!this['_designerCanvas'])return;let c=this[t(0x1ea)]['instanceServiceContainer']['selectionService'][t(0x1e1)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this[t(0x1ea)][t(0x1f2)]['selectionService'][t(0x1e8)][t(0x213)](()=>{const u=t;this[u(0x1cf)]=!![],this[u(0x1e5)]=null;});if(c[t(0x1fe)]!=0x0){let d={'x':isNaN(this[t(0x21c)][t(0x20f)])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this[t(0x203)]['valueAsNumber'])?null:this[t(0x203)]['valueAsNumber']},e=this[t(0x1f8)]['valueAsNumber']?this['_inputR'][t(0x20f)]:0x0,f=c[0x0]['openGroup'](t(0x1fa));if(!this['_previousSelectionRect']||this['_selectionChanged'])this['_previousSelectionRect']=calculateOuterRect(c,this[t(0x1ea)]);let g=this[t(0x1e9)](this[t(0x1e5)]);for(let h of c){let i={'x':parseFloat(h[t(0x212)](t(0x1de))),'y':parseFloat(h[t(0x212)](t(0x202))),'width':parseFloat(h[t(0x212)]('width')),'height':parseFloat(h[t(0x212)]('height'))},j=h[t(0x212)]('transform'),k=0x0;if(j)k=parseFloat(h['getStyle']('transform')[t(0x1d1)]('rotate(','')['replaceAll'](t(0x1d3),''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this[t(0x1e4)]);h['setStyle'](t(0x1de),l['x'][t(0x200)]()+'px'),h['setStyle']('top',l['y']['toString']()+'px');let m;if(this[t(0x1e4)]==t(0x1df))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](t(0x1d9),t(0x21a)+m+'deg)');else h[t(0x1f0)](t(0x1d9));}this['_applySpacing'](c),f['commit']();}}[o(0x1e9)](c){const v=o;switch(this[v(0x214)]){case v(0x1db):return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[v(0x218)]/0x2,'y':c['y']};case v(0x216):return{'x':c['x']+c['width'],'y':c['y']};case v(0x1dc):return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']/0x2};case v(0x1f5):return{'x':c['x']+c['width'],'y':c['y']+c['height']/0x2};case v(0x1ef):return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c[v(0x218)]/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c['width'],'y':c['y']+c['height']};}}[o(0x1d0)](){const w=o;if(this[w(0x201)][w(0x1f7)])this[w(0x214)]='topLeft';else{if(this['_originTopMid'][w(0x1f7)])this[w(0x214)]='topMid';else{if(this['_originTopRight']['checked'])this['_transformOrigin']='topRight';else{if(this[w(0x209)][w(0x1f7)])this[w(0x214)]='midLeft';else{if(this['_originMidMid']['checked'])this[w(0x214)]='midMid';else{if(this[w(0x1ff)][w(0x1f7)])this[w(0x214)]='midRight';else{if(this['_originBotLeft'][w(0x1f7)])this['_transformOrigin']='botLeft';else{if(this[w(0x20d)]['checked'])this[w(0x214)]=w(0x207);else{if(this['_originBotRight'][w(0x1f7)])this['_transformOrigin']='botRight';}}}}}}}}}['_calculateTransform'](c,d,e,f,g,h){const x=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[x(0x1e6)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[x(0x210)](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math[x(0x206)](f)*j['x']+Math[x(0x210)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const y=o;let d=this[y(0x1f6)]['valueAsNumber'],e=this['_inputSpacingY'][y(0x20f)];if(!isNaN(d)){let f=c[y(0x1d8)]((h,j)=>{const z=y;return parseFloat(h[z(0x212)]('left'))-parseFloat(j[z(0x212)](z(0x1de)));}),g=parseFloat(f[0x0]['getStyle']('left'));for(let h=0x0;h<f['length'];h++){f[h][y(0x1cd)]('left',h*d+g+'px');}}if(!isNaN(e)){let j=c[y(0x1d8)]((l,m)=>{const A=y;return parseFloat(l['getStyle']('top'))-parseFloat(m[A(0x212)](A(0x202)));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j['length'];l++){j[l]['setStyle'](y(0x202),l*e+k+'px');}}}}customElements[o(0x1eb)]('node-projects-designer-transform-tool-popup',TransformToolPopup);