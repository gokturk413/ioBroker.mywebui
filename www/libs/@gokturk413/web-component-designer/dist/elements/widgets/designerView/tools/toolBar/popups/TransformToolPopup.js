const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x18a))/0x1+-parseInt(n(0x1c4))/0x2*(-parseInt(n(0x191))/0x3)+-parseInt(n(0x1ad))/0x4*(parseInt(n(0x1b2))/0x5)+parseInt(n(0x1c9))/0x6+-parseInt(n(0x1b8))/0x7*(parseInt(n(0x1a5))/0x8)+-parseInt(n(0x1b9))/0x9+-parseInt(n(0x18b))/0xa*(-parseInt(n(0x1c5))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5a4eb));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';function a(){const B=['_transformOrigin','4TSXgEY','absolute','midLeft','_calculateTransformOriginPosition','transform','1300895peAuJi','_originBotRight','define','toString','_getDomElement','_applyTransform','1312682OFilLS','4578174MwlDmO','_designerCanvas','removeStyle','_transformMode','transform-button-apply','_inputR','origin-mid-left','sin','_absoluteButton','_relativeButton','_changePositionMode','680qDTKbk','11994257moLZjf','origin-bot-left','_previousSelectionRect','windowTitle','2673900DmPBZX','_calculateTransform','_inputX','_originTopMid','Transform','checked','_originMidMid','getStyle','720087fICIsv','10DPJHZb','_originTopRight','_originMidLeft','windowTemplate','left','setStyle','4503qIPspB','_originBotMid','_selectionChanged','botLeft','windowContentStyle','length','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','midMid','selectedElements','sort','valueAsNumber','once','instanceServiceContainer','replaceAll','_inputY','origin-bot-mid','top','width','botMid','topRight','8KOrbjc','deg)','onclick','height','_originBotLeft','_inputSpacingX','commit'];a=function(){return B;};return a();}function b(c,d){c=c-0x188;const e=a();let f=e[c];return f;}export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];[o(0x1c2)];['_absoluteButton'];['_applyButton'];['_inputX'];['_inputY'];['_inputR'];[o(0x1aa)];['_inputSpacingY'];['_originTopLeft'];[o(0x1cc)];[o(0x18c)];['_originMidLeft'];[o(0x188)];['_originMidRight'];['_originBotLeft'];['_originBotMid'];[o(0x1b3)];[o(0x1bc)];[o(0x1ac)];get[o(0x1c8)](){const p=o;return p(0x1cd);}get[o(0x195)](){return css`
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
    `;}get[o(0x18e)](){const q=o;return q(0x197);}constructor(c){const r=o;super(c),this['_relativeButton']=this[r(0x1b6)]('transform-button-relative'),this[r(0x1c1)]=this['_getDomElement']('transform-button-absolute'),this['_applyButton']=this['_getDomElement'](r(0x1bd)),this['_inputX']=this[r(0x1b6)]('transform-input-x'),this[r(0x19f)]=this[r(0x1b6)]('transform-input-y'),this['_inputR']=this['_getDomElement']('transform-input-r'),this['_inputSpacingX']=this['_getDomElement']('spacing-input-x'),this['_inputSpacingY']=this['_getDomElement']('spacing-input-y'),this['_originTopLeft']=this['_getDomElement']('origin-top-left'),this[r(0x1cc)]=this['_getDomElement']('origin-top-mid'),this['_originTopRight']=this['_getDomElement']('origin-top-right'),this['_originMidLeft']=this[r(0x1b6)](r(0x1bf)),this[r(0x188)]=this[r(0x1b6)]('origin-mid-mid'),this['_originMidRight']=this['_getDomElement']('origin-mid-right'),this[r(0x1a9)]=this[r(0x1b6)](r(0x1c6)),this[r(0x192)]=this['_getDomElement'](r(0x1a0)),this['_originBotRight']=this[r(0x1b6)]('origin-bot-right'),this['_relativeButton'][r(0x1a7)]=()=>this['_changePositionMode']('relative'),this[r(0x1c1)]['onclick']=()=>this[r(0x1c3)](r(0x1ae)),this['_applyButton'][r(0x1a7)]=()=>this[r(0x1b7)](),this['_transformMode']='relative',this[r(0x1c3)](this['_transformMode']);}['_changePositionMode'](c){const s=o;this['_relativeButton']['setAttribute']('aria-pressed',String(c==='relative')),this[s(0x1c1)]['setAttribute']('aria-pressed',String(c==='absolute')),this['_transformMode']=c;}[o(0x1b7)](){const t=o;this['_checkOrigin']();if(!this[t(0x1ba)])return;let c=this['_designerCanvas'][t(0x19d)]['selectionService'][t(0x199)];c=filterChildPlaceItems(c),this[t(0x193)]=![],this[t(0x1ba)]['instanceServiceContainer']['selectionService']['onSelectionChanged'][t(0x19c)](()=>{const u=t;this['_selectionChanged']=!![],this[u(0x1c7)]=null;});if(c[t(0x196)]!=0x0){let d={'x':isNaN(this[t(0x1cb)][t(0x19b)])?null:this[t(0x1cb)]['valueAsNumber'],'y':isNaN(this[t(0x19f)][t(0x19b)])?null:this['_inputY'][t(0x19b)]},e=this[t(0x1be)][t(0x19b)]?this['_inputR']['valueAsNumber']:0x0,f=c[0x0]['openGroup']('Transform\x20selection');if(!this[t(0x1c7)]||this['_selectionChanged'])this['_previousSelectionRect']=calculateOuterRect(c,this['_designerCanvas']);let g=this[t(0x1b0)](this[t(0x1c7)]);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h['getStyle'](t(0x1a1))),'width':parseFloat(h[t(0x189)](t(0x1a2))),'height':parseFloat(h[t(0x189)]('height'))},j=h[t(0x189)](t(0x1b1)),k=0x0;if(j)k=parseFloat(h['getStyle'](t(0x1b1))['replaceAll']('rotate(','')[t(0x19e)](t(0x1a6),''));let l=this['_calculateTransform'](this[t(0x1c7)],g,i,e,d,this[t(0x1bc)]);h[t(0x190)]('left',l['x']['toString']()+'px'),h['setStyle']('top',l['y'][t(0x1b5)]()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](t(0x1b1),'rotate('+m+t(0x1a6));else h[t(0x1bb)](t(0x1b1));}this['_applySpacing'](c),f[t(0x1ab)]();}}['_calculateTransformOriginPosition'](c){const v=o;switch(this['_transformOrigin']){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c['width']/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c[v(0x1a8)]/0x2};case'midMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']/0x2};case'midRight':return{'x':c['x']+c[v(0x1a2)],'y':c['y']+c['height']/0x2};case v(0x194):return{'x':c['x'],'y':c['y']+c[v(0x1a8)]};case v(0x1a3):return{'x':c['x']+c['width']/0x2,'y':c['y']+c[v(0x1a8)]};case'botRight':return{'x':c['x']+c[v(0x1a2)],'y':c['y']+c[v(0x1a8)]};}}['_checkOrigin'](){const w=o;if(this['_originTopLeft']['checked'])this[w(0x1ac)]='topLeft';else{if(this[w(0x1cc)]['checked'])this[w(0x1ac)]='topMid';else{if(this['_originTopRight'][w(0x1ce)])this['_transformOrigin']=w(0x1a4);else{if(this[w(0x18d)]['checked'])this[w(0x1ac)]=w(0x1af);else{if(this[w(0x188)]['checked'])this['_transformOrigin']=w(0x198);else{if(this['_originMidRight'][w(0x1ce)])this[w(0x1ac)]='midRight';else{if(this['_originBotLeft']['checked'])this[w(0x1ac)]=w(0x194);else{if(this['_originBotMid']['checked'])this[w(0x1ac)]=w(0x1a3);else{if(this['_originBotRight'][w(0x1ce)])this[w(0x1ac)]='botRight';}}}}}}}}}[o(0x1ca)](c,d,e,f,g,h){const x=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[x(0x1a2)]/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math[x(0x1c0)](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const y=o;let d=this['_inputSpacingX'][y(0x19b)],e=this['_inputSpacingY'][y(0x19b)];if(!isNaN(d)){let f=c['sort']((h,j)=>{const z=y;return parseFloat(h['getStyle'](z(0x18f)))-parseFloat(j[z(0x189)](z(0x18f)));}),g=parseFloat(f[0x0][y(0x189)]('left'));for(let h=0x0;h<f[y(0x196)];h++){f[h]['setStyle'](y(0x18f),h*d+g+'px');}}if(!isNaN(e)){let j=c[y(0x19a)]((l,m)=>{const A=y;return parseFloat(l[A(0x189)](A(0x1a1)))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0][y(0x189)]('top'));for(let l=0x0;l<j[y(0x196)];l++){j[l]['setStyle']('top',l*e+k+'px');}}}}customElements[o(0x1b4)]('node-projects-designer-transform-tool-popup',TransformToolPopup);