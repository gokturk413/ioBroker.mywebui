const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1fe))/0x1*(-parseInt(n(0x1ba))/0x2)+-parseInt(n(0x1dd))/0x3*(-parseInt(n(0x1e7))/0x4)+-parseInt(n(0x1ee))/0x5+-parseInt(n(0x1d2))/0x6*(parseInt(n(0x1bd))/0x7)+parseInt(n(0x1da))/0x8*(-parseInt(n(0x201))/0x9)+parseInt(n(0x1e2))/0xa+parseInt(n(0x1ef))/0xb*(parseInt(n(0x1ec))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3911b));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1ba;const e=a();let f=e[c];return f;}import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];['_relativeButton'];[o(0x1fb)];['_applyButton'];['_inputX'];[o(0x1d5)];['_inputR'];['_inputSpacingX'];[o(0x1e8)];['_originTopLeft'];['_originTopMid'];[o(0x1df)];['_originMidLeft'];['_originMidMid'];[o(0x1f1)];['_originBotLeft'];[o(0x1d9)];[o(0x1c4)];['_transformMode'];[o(0x1ed)];get['windowTitle'](){const p=o;return p(0x1d3);}get['windowContentStyle'](){return css`
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
    `;}get[o(0x1f3)](){const q=o;return q(0x1e3);}constructor(c){const r=o;super(c),this['_relativeButton']=this[r(0x1fd)]('transform-button-relative'),this[r(0x1fb)]=this['_getDomElement'](r(0x1bb)),this['_applyButton']=this['_getDomElement']('transform-button-apply'),this[r(0x203)]=this['_getDomElement'](r(0x1ce)),this['_inputY']=this['_getDomElement'](r(0x1c7)),this['_inputR']=this['_getDomElement'](r(0x1d6)),this['_inputSpacingX']=this[r(0x1fd)](r(0x1bf)),this[r(0x1e8)]=this['_getDomElement']('spacing-input-y'),this[r(0x1eb)]=this[r(0x1fd)](r(0x1ea)),this[r(0x1f5)]=this['_getDomElement']('origin-top-mid'),this[r(0x1df)]=this[r(0x1fd)]('origin-top-right'),this['_originMidLeft']=this[r(0x1fd)](r(0x1c2)),this['_originMidMid']=this[r(0x1fd)]('origin-mid-mid'),this['_originMidRight']=this[r(0x1fd)](r(0x207)),this[r(0x1c9)]=this[r(0x1fd)]('origin-bot-left'),this['_originBotMid']=this[r(0x1fd)]('origin-bot-mid'),this[r(0x1c4)]=this[r(0x1fd)]('origin-bot-right'),this[r(0x204)]['onclick']=()=>this[r(0x1d4)]('relative'),this[r(0x1fb)]['onclick']=()=>this['_changePositionMode']('absolute'),this['_applyButton'][r(0x1fa)]=()=>this[r(0x1e4)](),this['_transformMode']='relative',this[r(0x1d4)](this['_transformMode']);}['_changePositionMode'](c){const s=o;this['_relativeButton'][s(0x1ca)]('aria-pressed',String(c==='relative')),this[s(0x1fb)]['setAttribute'](s(0x206),String(c==='absolute')),this[s(0x1e9)]=c;}[o(0x1e4)](){const t=o;this[t(0x1f8)]();if(!this[t(0x205)])return;let c=this[t(0x205)]['instanceServiceContainer']['selectionService'][t(0x1dc)];c=filterChildPlaceItems(c),this[t(0x1c6)]=![],this[t(0x205)]['instanceServiceContainer']['selectionService']['onSelectionChanged'][t(0x1cf)](()=>{const u=t;this[u(0x1c6)]=!![],this['_previousSelectionRect']=null;});if(c['length']!=0x0){let d={'x':isNaN(this['_inputX']['valueAsNumber'])?null:this[t(0x203)]['valueAsNumber'],'y':isNaN(this[t(0x1d5)][t(0x1cd)])?null:this[t(0x1d5)][t(0x1cd)]},e=this['_inputR'][t(0x1cd)]?this['_inputR']['valueAsNumber']:0x0,f=c[0x0][t(0x1f4)]('Transform\x20selection');if(!this[t(0x1de)]||this['_selectionChanged'])this[t(0x1de)]=calculateOuterRect(c,this['_designerCanvas']);let g=this[t(0x1d0)](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h['getStyle'](t(0x1e0))),'width':parseFloat(h[t(0x1c1)](t(0x1d7))),'height':parseFloat(h['getStyle']('height'))},j=h[t(0x1c1)]('transform'),k=0x0;if(j)k=parseFloat(h['getStyle']('transform')[t(0x1c8)]('rotate(','')['replaceAll'](t(0x1e6),''));let l=this['_calculateTransform'](this['_previousSelectionRect'],g,i,e,d,this['_transformMode']);h['setStyle'](t(0x1f0),l['x']['toString']()+'px'),h['setStyle']('top',l['y'][t(0x1db)]()+'px');let m;if(this[t(0x1e9)]=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](t(0x1d1),'rotate('+m+t(0x1e6));else h[t(0x1f7)]('transform');}this['_applySpacing'](c),f['commit']();}}['_calculateTransformOriginPosition'](c){const v=o;switch(this['_transformOrigin']){case'topLeft':return{'x':c['x'],'y':c['y']};case v(0x202):return{'x':c['x']+c[v(0x1d7)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c[v(0x1d8)]/0x2};case v(0x1e5):return{'x':c['x']+c['width']/0x2,'y':c['y']+c[v(0x1d8)]/0x2};case v(0x1be):return{'x':c['x']+c[v(0x1d7)],'y':c['y']+c[v(0x1d8)]/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c[v(0x1d8)]};case v(0x1e1):return{'x':c['x']+c['width']/0x2,'y':c['y']+c[v(0x1d8)]};case v(0x1f2):return{'x':c['x']+c[v(0x1d7)],'y':c['y']+c[v(0x1d8)]};}}[o(0x1f8)](){const w=o;if(this['_originTopLeft']['checked'])this[w(0x1ed)]='topLeft';else{if(this[w(0x1f5)]['checked'])this['_transformOrigin']=w(0x202);else{if(this[w(0x1df)]['checked'])this[w(0x1ed)]=w(0x1bc);else{if(this[w(0x1f6)][w(0x1fc)])this['_transformOrigin']='midLeft';else{if(this['_originMidMid'][w(0x1fc)])this[w(0x1ed)]='midMid';else{if(this[w(0x1f1)]['checked'])this[w(0x1ed)]='midRight';else{if(this['_originBotLeft'][w(0x1fc)])this['_transformOrigin']=w(0x1c0);else{if(this[w(0x1d9)][w(0x1fc)])this[w(0x1ed)]=w(0x1e1);else{if(this['_originBotRight']['checked'])this[w(0x1ed)]='botRight';}}}}}}}}}[o(0x1ff)](c,d,e,f,g,h){const x=o;let i;f=f*(Math['PI']/0xb4);if(h==x(0x1c3)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[x(0x1d7)]/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[x(0x200)](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const z=o;let d=this['_inputSpacingX']['valueAsNumber'],e=this['_inputSpacingY']['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{const y=b;return parseFloat(h[y(0x1c1)]('left'))-parseFloat(j['getStyle'](y(0x1f0)));}),g=parseFloat(f[0x0]['getStyle']('left'));for(let h=0x0;h<f[z(0x1cb)];h++){f[h]['setStyle']('left',h*d+g+'px');}}if(!isNaN(e)){let j=c[z(0x1c5)]((l,m)=>{const A=z;return parseFloat(l['getStyle'](A(0x1e0)))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0][z(0x1c1)](z(0x1e0)));for(let l=0x0;l<j['length'];l++){j[l][z(0x1f9)](z(0x1e0),l*e+k+'px');}}}}customElements[o(0x1cc)]('node-projects-designer-transform-tool-popup',TransformToolPopup);function a(){const B=['checked','_getDomElement','1CJTnqE','_calculateTransform','cos','199872IBYpzW','topMid','_inputX','_relativeButton','_designerCanvas','aria-pressed','origin-mid-right','905258EgvUew','transform-button-absolute','topRight','28525whQAXv','midRight','spacing-input-x','botLeft','getStyle','origin-mid-left','absolute','_originBotRight','sort','_selectionChanged','transform-input-y','replaceAll','_originBotLeft','setAttribute','length','define','valueAsNumber','transform-input-x','once','_calculateTransformOriginPosition','transform','534pvwoRT','Transform','_changePositionMode','_inputY','transform-input-r','width','height','_originBotMid','96bVWeqp','toString','selectedElements','478911VDcElL','_previousSelectionRect','_originTopRight','top','botMid','2277050ZaSVYy','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','_applyTransform','midMid','deg)','8HRIves','_inputSpacingY','_transformMode','origin-top-left','_originTopLeft','3081612otaTdq','_transformOrigin','1293140sdyNcS','44RFViht','left','_originMidRight','botRight','windowTemplate','openGroup','_originTopMid','_originMidLeft','removeStyle','_checkOrigin','setStyle','onclick','_absoluteButton'];a=function(){return B;};return a();}