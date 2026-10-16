const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x205))/0x1+parseInt(n(0x1ee))/0x2+-parseInt(n(0x1fd))/0x3*(-parseInt(n(0x1fe))/0x4)+-parseInt(n(0x217))/0x5*(parseInt(n(0x1e2))/0x6)+parseInt(n(0x213))/0x7*(parseInt(n(0x218))/0x8)+parseInt(n(0x1e5))/0x9+-parseInt(n(0x21c))/0xa*(parseInt(n(0x20a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x926bd));function b(c,d){c=c-0x1da;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';function a(){const A=['sin','_transformOrigin','_originBotLeft','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','_originTopMid','_previousSelectionRect','283157dwmXQP','midLeft','rotate(','aria-pressed','replaceAll','55WfmEuE','once','_designerCanvas','windowTemplate','onclick','Transform','_absoluteButton','transform','onSelectionChanged','98gfIecg','_changePositionMode','_originMidLeft','selectedElements','5rMckOc','42328JDEYyh','_transformMode','length','_getDomElement','1889790TbszXe','setStyle','_inputSpacingY','checked','node-projects-designer-transform-tool-popup','transform-input-x','instanceServiceContainer','spacing-input-x','botRight','_originTopLeft','getStyle','topMid','height','deg)','toString','_applyButton','_inputSpacingX','botMid','define','_originMidRight','_calculateTransform','6888894YtVPcE','setAttribute','botLeft','4234059IWyToN','width','commit','absolute','origin-mid-right','_relativeButton','origin-bot-mid','_inputY','valueAsNumber','1507664ayNMcU','windowTitle','cos','_checkOrigin','_originBotMid','Transform\x20selection','_inputX','origin-bot-left','top','midRight','_originTopRight','left','_inputR','_originMidMid','_selectionChanged','21YgeAxe','635012zrSisd'];a=function(){return A;};return a();}import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];['_relativeButton'];[o(0x210)];[o(0x1dc)];[o(0x1f4)];[o(0x1ec)];['_inputR'];[o(0x1dd)];[o(0x21e)];['_originTopLeft'];[o(0x203)];[o(0x1f8)];[o(0x215)];['_originMidMid'];[o(0x1e0)];[o(0x201)];[o(0x1f2)];['_originBotRight'];[o(0x219)];[o(0x200)];get[o(0x1ef)](){const p=o;return p(0x20f);}get['windowContentStyle'](){return css`
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
    `;}get[o(0x20d)](){const q=o;return q(0x202);}constructor(c){const r=o;super(c),this[r(0x1ea)]=this['_getDomElement']('transform-button-relative'),this[r(0x210)]=this[r(0x21b)]('transform-button-absolute'),this[r(0x1dc)]=this[r(0x21b)]('transform-button-apply'),this[r(0x1f4)]=this['_getDomElement'](r(0x221)),this[r(0x1ec)]=this[r(0x21b)]('transform-input-y'),this[r(0x1fa)]=this['_getDomElement']('transform-input-r'),this['_inputSpacingX']=this[r(0x21b)](r(0x223)),this['_inputSpacingY']=this[r(0x21b)]('spacing-input-y'),this[r(0x225)]=this[r(0x21b)]('origin-top-left'),this['_originTopMid']=this['_getDomElement']('origin-top-mid'),this[r(0x1f8)]=this[r(0x21b)]('origin-top-right'),this['_originMidLeft']=this[r(0x21b)]('origin-mid-left'),this['_originMidMid']=this['_getDomElement']('origin-mid-mid'),this[r(0x1e0)]=this['_getDomElement'](r(0x1e9)),this[r(0x201)]=this[r(0x21b)](r(0x1f5)),this['_originBotMid']=this[r(0x21b)](r(0x1eb)),this['_originBotRight']=this['_getDomElement']('origin-bot-right'),this['_relativeButton']['onclick']=()=>this[r(0x214)]('relative'),this['_absoluteButton'][r(0x20e)]=()=>this[r(0x214)]('absolute'),this[r(0x1dc)][r(0x20e)]=()=>this['_applyTransform'](),this['_transformMode']='relative',this['_changePositionMode'](this[r(0x219)]);}['_changePositionMode'](c){const s=o;this['_relativeButton']['setAttribute'](s(0x208),String(c==='relative')),this[s(0x210)][s(0x1e3)]('aria-pressed',String(c===s(0x1e8))),this[s(0x219)]=c;}['_applyTransform'](){const t=o;this[t(0x1f1)]();if(!this[t(0x20c)])return;let c=this['_designerCanvas'][t(0x222)]['selectionService'][t(0x216)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this['_designerCanvas']['instanceServiceContainer']['selectionService'][t(0x212)][t(0x20b)](()=>{this['_selectionChanged']=!![],this['_previousSelectionRect']=null;});if(c[t(0x21a)]!=0x0){let d={'x':isNaN(this[t(0x1f4)][t(0x1ed)])?null:this[t(0x1f4)]['valueAsNumber'],'y':isNaN(this[t(0x1ec)][t(0x1ed)])?null:this['_inputY']['valueAsNumber']},e=this[t(0x1fa)][t(0x1ed)]?this[t(0x1fa)]['valueAsNumber']:0x0,f=c[0x0]['openGroup'](t(0x1f3));if(!this['_previousSelectionRect']||this[t(0x1fc)])this[t(0x204)]=calculateOuterRect(c,this['_designerCanvas']);let g=this['_calculateTransformOriginPosition'](this[t(0x204)]);for(let h of c){let i={'x':parseFloat(h[t(0x226)](t(0x1f9))),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h['getStyle']('width')),'height':parseFloat(h['getStyle']('height'))},j=h[t(0x226)]('transform'),k=0x0;if(j)k=parseFloat(h['getStyle'](t(0x211))[t(0x209)](t(0x207),'')['replaceAll']('deg)',''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this['_transformMode']);h['setStyle']('left',l['x'][t(0x1db)]()+'px'),h[t(0x21d)](t(0x1f6),l['y'][t(0x1db)]()+'px');let m;if(this[t(0x219)]=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[t(0x21d)]('transform','rotate('+m+t(0x1da));else h['removeStyle']('transform');}this['_applySpacing'](c),f[t(0x1e7)]();}}['_calculateTransformOriginPosition'](c){const u=o;switch(this[u(0x200)]){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c['width']/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c[u(0x1e6)],'y':c['y']};case u(0x206):return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']/0x2};case'midRight':return{'x':c['x']+c[u(0x1e6)],'y':c['y']+c['height']/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c[u(0x228)]};case u(0x1de):return{'x':c['x']+c[u(0x1e6)]/0x2,'y':c['y']+c['height']};case u(0x224):return{'x':c['x']+c['width'],'y':c['y']+c[u(0x228)]};}}[o(0x1f1)](){const v=o;if(this['_originTopLeft'][v(0x21f)])this[v(0x200)]='topLeft';else{if(this['_originTopMid']['checked'])this[v(0x200)]=v(0x227);else{if(this[v(0x1f8)][v(0x21f)])this['_transformOrigin']='topRight';else{if(this['_originMidLeft'][v(0x21f)])this['_transformOrigin']=v(0x206);else{if(this[v(0x1fb)]['checked'])this['_transformOrigin']='midMid';else{if(this['_originMidRight']['checked'])this['_transformOrigin']=v(0x1f7);else{if(this[v(0x201)]['checked'])this['_transformOrigin']=v(0x1e4);else{if(this['_originBotMid']['checked'])this['_transformOrigin']=v(0x1de);else{if(this['_originBotRight'][v(0x21f)])this['_transformOrigin']=v(0x224);}}}}}}}}}[o(0x1e1)](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h==w(0x1e8)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[w(0x1e6)]/0x2,'y':d['y']-e[w(0x228)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math[w(0x1ff)](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math[w(0x1f0)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const x=o;let d=this[x(0x1dd)]['valueAsNumber'],e=this['_inputSpacingY'][x(0x1ed)];if(!isNaN(d)){let f=c['sort']((h,j)=>{const y=x;return parseFloat(h['getStyle'](y(0x1f9)))-parseFloat(j[y(0x226)]('left'));}),g=parseFloat(f[0x0][x(0x226)](x(0x1f9)));for(let h=0x0;h<f[x(0x21a)];h++){f[h]['setStyle']('left',h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const z=x;return parseFloat(l['getStyle'](z(0x1f6)))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j['length'];l++){j[l][x(0x21d)]('top',l*e+k+'px');}}}}customElements[o(0x1df)](o(0x220),TransformToolPopup);