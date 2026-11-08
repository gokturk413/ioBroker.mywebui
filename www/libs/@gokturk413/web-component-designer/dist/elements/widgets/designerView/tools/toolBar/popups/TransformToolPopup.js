const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1c5))/0x1*(-parseInt(n(0x1de))/0x2)+-parseInt(n(0x1b3))/0x3*(parseInt(n(0x1ae))/0x4)+parseInt(n(0x1c4))/0x5*(parseInt(n(0x1b4))/0x6)+-parseInt(n(0x1ac))/0x7*(-parseInt(n(0x1b5))/0x8)+parseInt(n(0x1c7))/0x9+-parseInt(n(0x1d3))/0xa+-parseInt(n(0x1ee))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x45679));function a(){const y=['selectionService','origin-bot-mid','_inputSpacingX','origin-bot-left','topRight','transform-input-r','_designerCanvas','_inputX','origin-bot-right','botLeft','3817604qrMpKQ','replaceAll','198508MONxGM','checked','spacing-input-y','openGroup','absolute','3wYWpiw','12ozmaln','8tolagH','rotate(','cos','origin-top-mid','selectedElements','Transform\x20selection','aria-pressed','windowContentStyle','width','_previousSelectionRect','midRight','_applySpacing','botMid','_selectionChanged','transform-input-y','134455NUmkzk','69GruZFZ','_inputY','4506480KxpMMp','_transformOrigin','_originBotMid','origin-mid-left','topMid','topLeft','transform','deg)','_originTopLeft','_calculateTransform','instanceServiceContainer','_absoluteButton','2743170SfyFcA','getStyle','_transformMode','toString','botRight','windowTemplate','transform-button-absolute','once','valueAsNumber','_originBotRight','_originMidLeft','12266rRNsTw','height','transform-input-x','_getDomElement','_relativeButton','setStyle','origin-mid-right','removeStyle','_changePositionMode','_applyButton','_originMidRight','relative','_checkOrigin','left','midMid','_originBotLeft','10063086xrrnYI','top','sin','setAttribute','_calculateTransformOriginPosition','length','_originMidMid','_originTopRight','midLeft','onclick','_inputSpacingY'];a=function(){return y;};return a();}function b(c,d){c=c-0x1a4;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];[o(0x1c2)];['_relativeButton'];['_absoluteButton'];['_applyButton'];[o(0x1a9)];['_inputY'];['_inputR'];['_inputSpacingX'];[o(0x1f8)];[o(0x1cf)];['_originTopMid'];[o(0x1f5)];[o(0x1dd)];['_originMidMid'];[o(0x1e8)];[o(0x1ed)];[o(0x1c9)];[o(0x1dc)];[o(0x1d5)];[o(0x1c8)];get['windowTitle'](){return'Transform';}get[o(0x1bc)](){return css`
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
    `;}get[o(0x1d8)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const p=o;super(c),this[p(0x1e2)]=this['_getDomElement']('transform-button-relative'),this['_absoluteButton']=this[p(0x1e1)](p(0x1d9)),this[p(0x1e7)]=this['_getDomElement']('transform-button-apply'),this[p(0x1a9)]=this[p(0x1e1)](p(0x1e0)),this[p(0x1c6)]=this['_getDomElement'](p(0x1c3)),this['_inputR']=this['_getDomElement'](p(0x1a7)),this[p(0x1a4)]=this['_getDomElement']('spacing-input-x'),this[p(0x1f8)]=this[p(0x1e1)](p(0x1b0)),this['_originTopLeft']=this['_getDomElement']('origin-top-left'),this['_originTopMid']=this['_getDomElement'](p(0x1b8)),this[p(0x1f5)]=this['_getDomElement']('origin-top-right'),this[p(0x1dd)]=this[p(0x1e1)](p(0x1ca)),this['_originMidMid']=this[p(0x1e1)]('origin-mid-mid'),this['_originMidRight']=this[p(0x1e1)](p(0x1e4)),this[p(0x1ed)]=this[p(0x1e1)](p(0x1a5)),this['_originBotMid']=this['_getDomElement'](p(0x1fa)),this[p(0x1dc)]=this['_getDomElement'](p(0x1aa)),this[p(0x1e2)]['onclick']=()=>this[p(0x1e6)]('relative'),this[p(0x1d2)][p(0x1f7)]=()=>this[p(0x1e6)]('absolute'),this['_applyButton']['onclick']=()=>this['_applyTransform'](),this['_transformMode']='relative',this[p(0x1e6)](this[p(0x1d5)]);}[o(0x1e6)](c){const q=o;this['_relativeButton'][q(0x1f1)](q(0x1bb),String(c==='relative')),this['_absoluteButton']['setAttribute'](q(0x1bb),String(c===q(0x1b2))),this['_transformMode']=c;}['_applyTransform'](){const r=o;this['_checkOrigin']();if(!this['_designerCanvas'])return;let c=this['_designerCanvas']['instanceServiceContainer']['selectionService'][r(0x1b9)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this[r(0x1a8)][r(0x1d1)][r(0x1f9)]['onSelectionChanged'][r(0x1da)](()=>{const s=r;this[s(0x1c2)]=!![],this[s(0x1be)]=null;});if(c['length']!=0x0){let d={'x':isNaN(this[r(0x1a9)]['valueAsNumber'])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this[r(0x1c6)]['valueAsNumber'])?null:this[r(0x1c6)]['valueAsNumber']},e=this['_inputR']['valueAsNumber']?this['_inputR']['valueAsNumber']:0x0,f=c[0x0][r(0x1b1)](r(0x1ba));if(!this['_previousSelectionRect']||this[r(0x1c2)])this['_previousSelectionRect']=calculateOuterRect(c,this['_designerCanvas']);let g=this[r(0x1f2)](this[r(0x1be)]);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h['getStyle'](r(0x1bd))),'height':parseFloat(h['getStyle']('height'))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h['getStyle'](r(0x1cd))[r(0x1ad)](r(0x1b6),'')['replaceAll'](r(0x1ce),''));let l=this[r(0x1d0)](this['_previousSelectionRect'],g,i,e,d,this['_transformMode']);h[r(0x1e3)]('left',l['x'][r(0x1d6)]()+'px'),h['setStyle']('top',l['y'][r(0x1d6)]()+'px');let m;if(this[r(0x1d5)]==r(0x1e9))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle']('transform','rotate('+m+'deg)');else h[r(0x1e5)]('transform');}this[r(0x1c0)](c),f['commit']();}}[o(0x1f2)](c){const t=o;switch(this['_transformOrigin']){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c['width']/0x2,'y':c['y']};case t(0x1a6):return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c[t(0x1bd)]/0x2,'y':c['y']+c[t(0x1df)]/0x2};case t(0x1bf):return{'x':c['x']+c[t(0x1bd)],'y':c['y']+c[t(0x1df)]/0x2};case t(0x1ab):return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c[t(0x1bd)]/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c[t(0x1bd)],'y':c['y']+c[t(0x1df)]};}}[o(0x1ea)](){const u=o;if(this['_originTopLeft'][u(0x1af)])this[u(0x1c8)]=u(0x1cc);else{if(this['_originTopMid'][u(0x1af)])this['_transformOrigin']=u(0x1cb);else{if(this['_originTopRight'][u(0x1af)])this['_transformOrigin']='topRight';else{if(this[u(0x1dd)]['checked'])this[u(0x1c8)]=u(0x1f6);else{if(this[u(0x1f4)][u(0x1af)])this[u(0x1c8)]=u(0x1ec);else{if(this['_originMidRight'][u(0x1af)])this['_transformOrigin']=u(0x1bf);else{if(this[u(0x1ed)][u(0x1af)])this[u(0x1c8)]='botLeft';else{if(this['_originBotMid'][u(0x1af)])this[u(0x1c8)]=u(0x1c1);else{if(this['_originBotRight']['checked'])this[u(0x1c8)]=u(0x1d7);}}}}}}}}}[o(0x1d0)](c,d,e,f,g,h){const v=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[v(0x1df)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[v(0x1b7)](f)*j['x']-Math[v(0x1f0)](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math[v(0x1b7)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const w=o;let d=this['_inputSpacingX'][w(0x1db)],e=this[w(0x1f8)]['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{return parseFloat(h['getStyle']('left'))-parseFloat(j['getStyle']('left'));}),g=parseFloat(f[0x0]['getStyle']('left'));for(let h=0x0;h<f[w(0x1f3)];h++){f[h]['setStyle'](w(0x1eb),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const x=w;return parseFloat(l[x(0x1d4)]('top'))-parseFloat(m[x(0x1d4)](x(0x1ef)));}),k=parseFloat(j[0x0]['getStyle'](w(0x1ef)));for(let l=0x0;l<j[w(0x1f3)];l++){j[l][w(0x1e3)](w(0x1ef),l*e+k+'px');}}}}customElements['define']('node-projects-designer-transform-tool-popup',TransformToolPopup);