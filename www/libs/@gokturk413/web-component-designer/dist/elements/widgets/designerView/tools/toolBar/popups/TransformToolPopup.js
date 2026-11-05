const o=b;function a(){const z=['_inputSpacingY','4326XmeQbE','2799570vqMQRu','_originTopRight','openGroup','69505GKJuIM','sin','_originBotRight','57egcGcU','removeStyle','once','deg)','_inputY','_inputR','1764350lGcytz','transform','getStyle','_applySpacing','_inputX','midRight','_getDomElement','1131561IUYDif','_originMidRight','checked','_originBotMid','8ewbfpo','transform-button-relative','_originTopLeft','selectionService','selectedElements','_transformMode','transform-button-absolute','cos','left','sort','topRight','setAttribute','absolute','_originBotLeft','botLeft','_selectionChanged','_changePositionMode','427821mRKzrm','replaceAll','52HXrgNO','botMid','windowContentStyle','transform-input-r','top','_originMidLeft','botRight','topLeft','toString','_relativeButton','_designerCanvas','_originMidMid','origin-bot-right','_applyButton','width','onSelectionChanged','_calculateTransformOriginPosition','_absoluteButton','onclick','_originTopMid','1281246tAJhBt','spacing-input-x','_transformOrigin','valueAsNumber','length','setStyle','commit','_previousSelectionRect','height','_inputSpacingX','_applyTransform','aria-pressed'];a=function(){return z;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x163))/0x1*(parseInt(n(0x15c))/0x2)+parseInt(n(0x139))/0x3+-parseInt(n(0x13b))/0x4*(-parseInt(n(0x160))/0x5)+-parseInt(n(0x14f))/0x6+parseInt(n(0x169))/0x7*(-parseInt(n(0x174))/0x8)+-parseInt(n(0x170))/0x9+parseInt(n(0x15d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x21050));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];[o(0x137)];['_relativeButton'];['_absoluteButton'];['_applyButton'];['_inputX'];[o(0x167)];['_inputR'];['_inputSpacingX'];['_inputSpacingY'];[o(0x176)];['_originTopMid'];[o(0x15e)];['_originMidLeft'];['_originMidMid'];['_originMidRight'];['_originBotLeft'];[o(0x173)];['_originBotRight'];['_transformMode'];['_transformOrigin'];get['windowTitle'](){return'Transform';}get[o(0x13d)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const p=o;super(c),this['_relativeButton']=this[p(0x16f)](p(0x175)),this['_absoluteButton']=this['_getDomElement'](p(0x17a)),this[p(0x148)]=this['_getDomElement']('transform-button-apply'),this[p(0x16d)]=this[p(0x16f)]('transform-input-x'),this[p(0x167)]=this[p(0x16f)]('transform-input-y'),this[p(0x168)]=this['_getDomElement'](p(0x13e)),this[p(0x158)]=this['_getDomElement'](p(0x150)),this['_inputSpacingY']=this['_getDomElement']('spacing-input-y'),this['_originTopLeft']=this['_getDomElement']('origin-top-left'),this['_originTopMid']=this[p(0x16f)]('origin-top-mid'),this[p(0x15e)]=this[p(0x16f)]('origin-top-right'),this[p(0x140)]=this[p(0x16f)]('origin-mid-left'),this[p(0x146)]=this[p(0x16f)]('origin-mid-mid'),this[p(0x171)]=this['_getDomElement']('origin-mid-right'),this[p(0x135)]=this['_getDomElement']('origin-bot-left'),this['_originBotMid']=this[p(0x16f)]('origin-bot-mid'),this[p(0x162)]=this[p(0x16f)](p(0x147)),this[p(0x144)][p(0x14d)]=()=>this['_changePositionMode']('relative'),this[p(0x14c)]['onclick']=()=>this[p(0x138)]('absolute'),this[p(0x148)]['onclick']=()=>this[p(0x159)](),this['_transformMode']='relative',this['_changePositionMode'](this['_transformMode']);}['_changePositionMode'](c){const q=o;this['_relativeButton'][q(0x133)](q(0x15a),String(c==='relative')),this[q(0x14c)]['setAttribute']('aria-pressed',String(c===q(0x134))),this['_transformMode']=c;}['_applyTransform'](){const r=o;this['_checkOrigin']();if(!this[r(0x145)])return;let c=this[r(0x145)]['instanceServiceContainer'][r(0x177)][r(0x178)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this['_designerCanvas']['instanceServiceContainer']['selectionService'][r(0x14a)][r(0x165)](()=>{const s=r;this[s(0x137)]=!![],this[s(0x156)]=null;});if(c[r(0x153)]!=0x0){let d={'x':isNaN(this[r(0x16d)][r(0x152)])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this[r(0x167)][r(0x152)])?null:this[r(0x167)]['valueAsNumber']},e=this[r(0x168)]['valueAsNumber']?this['_inputR']['valueAsNumber']:0x0,f=c[0x0][r(0x15f)]('Transform\x20selection');if(!this['_previousSelectionRect']||this['_selectionChanged'])this[r(0x156)]=calculateOuterRect(c,this['_designerCanvas']);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle'](r(0x130))),'y':parseFloat(h['getStyle'](r(0x13f))),'width':parseFloat(h['getStyle']('width')),'height':parseFloat(h['getStyle'](r(0x157)))},j=h['getStyle'](r(0x16a)),k=0x0;if(j)k=parseFloat(h[r(0x16b)](r(0x16a))['replaceAll']('rotate(','')[r(0x13a)](r(0x166),''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this[r(0x179)]);h['setStyle'](r(0x130),l['x'][r(0x143)]()+'px'),h[r(0x154)]('top',l['y'][r(0x143)]()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](r(0x16a),'rotate('+m+r(0x166));else h[r(0x164)]('transform');}this['_applySpacing'](c),f[r(0x155)]();}}[o(0x14b)](c){const t=o;switch(this[t(0x151)]){case t(0x142):return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c['width']/0x2,'y':c['y']};case t(0x132):return{'x':c['x']+c[t(0x149)],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c[t(0x149)]/0x2,'y':c['y']+c[t(0x157)]/0x2};case t(0x16e):return{'x':c['x']+c['width'],'y':c['y']+c['height']/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c[t(0x157)]};case t(0x13c):return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c['width'],'y':c['y']+c['height']};}}['_checkOrigin'](){const u=o;if(this['_originTopLeft']['checked'])this[u(0x151)]='topLeft';else{if(this[u(0x14e)][u(0x172)])this[u(0x151)]='topMid';else{if(this['_originTopRight'][u(0x172)])this[u(0x151)]='topRight';else{if(this['_originMidLeft']['checked'])this[u(0x151)]='midLeft';else{if(this['_originMidMid']['checked'])this[u(0x151)]='midMid';else{if(this[u(0x171)]['checked'])this[u(0x151)]=u(0x16e);else{if(this['_originBotLeft'][u(0x172)])this[u(0x151)]=u(0x136);else{if(this[u(0x173)]['checked'])this['_transformOrigin']=u(0x13c);else{if(this['_originBotRight'][u(0x172)])this[u(0x151)]=u(0x141);}}}}}}}}}['_calculateTransform'](c,d,e,f,g,h){const v=o;let i;f=f*(Math['PI']/0xb4);if(h==v(0x134)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[v(0x149)]/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[v(0x17b)](f)*j['x']-Math[v(0x161)](f)*j['y']+d['x']+g['x'],'y':Math[v(0x161)](f)*j['x']+Math[v(0x17b)](f)*j['y']+d['y']+g['y']},i;}[o(0x16c)](c){const w=o;let d=this['_inputSpacingX']['valueAsNumber'],e=this[w(0x15b)]['valueAsNumber'];if(!isNaN(d)){let f=c[w(0x131)]((h,j)=>{const x=w;return parseFloat(h['getStyle']('left'))-parseFloat(j[x(0x16b)](x(0x130)));}),g=parseFloat(f[0x0][w(0x16b)](w(0x130)));for(let h=0x0;h<f[w(0x153)];h++){f[h]['setStyle']('left',h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const y=w;return parseFloat(l['getStyle'](y(0x13f)))-parseFloat(m[y(0x16b)](y(0x13f)));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j['length'];l++){j[l]['setStyle']('top',l*e+k+'px');}}}}function b(c,d){c=c-0x130;const e=a();let f=e[c];return f;}customElements['define']('node-projects-designer-transform-tool-popup',TransformToolPopup);