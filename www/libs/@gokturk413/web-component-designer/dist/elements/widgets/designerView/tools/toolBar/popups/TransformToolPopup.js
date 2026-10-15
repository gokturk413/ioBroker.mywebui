const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xd3))/0x1*(parseInt(n(0xb9))/0x2)+parseInt(n(0xc3))/0x3+-parseInt(n(0xc9))/0x4+-parseInt(n(0xdf))/0x5+parseInt(n(0xc7))/0x6+-parseInt(n(0xa4))/0x7+parseInt(n(0xa7))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x31f17));function b(c,d){c=c-0xa2;const e=a();let f=e[c];return f;}function a(){const A=['selectedElements','_applyButton','origin-bot-mid','origin-top-left','topMid','cos','checked','sin','midLeft','_originBotRight','replaceAll','_originMidLeft','_inputR','height','_absoluteButton','759437WwpnWr','relative','left','3443456ojBwZo','deg)','Transform','windowTemplate','origin-mid-right','origin-mid-left','_originMidMid','transform-button-relative','_inputSpacingY','transform-button-apply','_originBotLeft','instanceServiceContainer','topRight','origin-bot-left','botMid','_calculateTransform','aria-pressed','top','6DIZadk','onSelectionChanged','spacing-input-x','origin-top-right','_originMidRight','setAttribute','_applyTransform','_transformOrigin','_getDomElement','_transformMode','1151880nZHzVb','toString','topLeft','removeStyle','2187672iCYKGe','absolute','862356iYYuBn','Transform\x20selection','_relativeButton','_designerCanvas','width','_originTopLeft','_checkOrigin','valueAsNumber','define','_calculateTransformOriginPosition','109433lNFWQi','length','getStyle','botRight','transform','_originBotMid','midMid','botLeft','_inputSpacingX','transform-input-r','_changePositionMode','_previousSelectionRect','1610290tYjgAM','_inputY','spacing-input-y','onclick','once','_inputX'];a=function(){return A;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];[o(0xcb)];[o(0xa3)];[o(0xe6)];['_inputX'];[o(0xe0)];[o(0xf1)];['_inputSpacingX'];[o(0xaf)];[o(0xce)];['_originTopMid'];['_originTopRight'];[o(0xf0)];['_originMidMid'];[o(0xbd)];['_originBotLeft'];['_originBotMid'];['_originBotRight'];[o(0xc2)];[o(0xc0)];get['windowTitle'](){const p=o;return p(0xa9);}get['windowContentStyle'](){return css`
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
    `;}get[o(0xaa)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this['_relativeButton']=this[q(0xc1)](q(0xae)),this[q(0xa3)]=this[q(0xc1)]('transform-button-absolute'),this['_applyButton']=this['_getDomElement'](q(0xb0)),this[q(0xe4)]=this[q(0xc1)]('transform-input-x'),this['_inputY']=this[q(0xc1)]('transform-input-y'),this['_inputR']=this[q(0xc1)](q(0xdc)),this['_inputSpacingX']=this[q(0xc1)](q(0xbb)),this[q(0xaf)]=this['_getDomElement'](q(0xe1)),this[q(0xce)]=this['_getDomElement'](q(0xe8)),this['_originTopMid']=this[q(0xc1)]('origin-top-mid'),this['_originTopRight']=this['_getDomElement'](q(0xbc)),this[q(0xf0)]=this['_getDomElement'](q(0xac)),this[q(0xad)]=this[q(0xc1)]('origin-mid-mid'),this[q(0xbd)]=this[q(0xc1)](q(0xab)),this[q(0xb1)]=this['_getDomElement'](q(0xb4)),this['_originBotMid']=this['_getDomElement'](q(0xe7)),this[q(0xee)]=this['_getDomElement']('origin-bot-right'),this['_relativeButton'][q(0xe2)]=()=>this['_changePositionMode'](q(0xa5)),this['_absoluteButton'][q(0xe2)]=()=>this[q(0xdd)](q(0xc8)),this[q(0xe6)]['onclick']=()=>this['_applyTransform'](),this['_transformMode']=q(0xa5),this[q(0xdd)](this['_transformMode']);}['_changePositionMode'](c){const r=o;this[r(0xcb)][r(0xbe)](r(0xb7),String(c===r(0xa5))),this[r(0xa3)]['setAttribute'](r(0xb7),String(c===r(0xc8))),this['_transformMode']=c;}[o(0xbf)](){const s=o;this[s(0xcf)]();if(!this['_designerCanvas'])return;let c=this[s(0xcc)]['instanceServiceContainer']['selectionService'][s(0xe5)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this[s(0xcc)][s(0xb2)]['selectionService'][s(0xba)][s(0xe3)](()=>{const t=s;this['_selectionChanged']=!![],this[t(0xde)]=null;});if(c[s(0xd4)]!=0x0){let d={'x':isNaN(this[s(0xe4)][s(0xd0)])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this[s(0xe0)]['valueAsNumber'])?null:this['_inputY']['valueAsNumber']},e=this[s(0xf1)]['valueAsNumber']?this[s(0xf1)][s(0xd0)]:0x0,f=c[0x0]['openGroup'](s(0xca));if(!this['_previousSelectionRect']||this['_selectionChanged'])this[s(0xde)]=calculateOuterRect(c,this[s(0xcc)]);let g=this['_calculateTransformOriginPosition'](this[s(0xde)]);for(let h of c){let i={'x':parseFloat(h['getStyle'](s(0xa6))),'y':parseFloat(h[s(0xd5)](s(0xb8))),'width':parseFloat(h['getStyle']('width')),'height':parseFloat(h[s(0xd5)]('height'))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h[s(0xd5)](s(0xd7))['replaceAll']('rotate(','')[s(0xef)](s(0xa8),''));let l=this['_calculateTransform'](this[s(0xde)],g,i,e,d,this['_transformMode']);h['setStyle'](s(0xa6),l['x']['toString']()+'px'),h['setStyle'](s(0xb8),l['y'][s(0xc4)]()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](s(0xd7),'rotate('+m+'deg)');else h[s(0xc6)](s(0xd7));}this['_applySpacing'](c),f['commit']();}}[o(0xd2)](c){const u=o;switch(this['_transformOrigin']){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[u(0xcd)]/0x2,'y':c['y']};case u(0xb3):return{'x':c['x']+c['width'],'y':c['y']};case u(0xed):return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']/0x2};case'midRight':return{'x':c['x']+c['width'],'y':c['y']+c['height']/0x2};case u(0xda):return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case u(0xd6):return{'x':c['x']+c['width'],'y':c['y']+c[u(0xa2)]};}}[o(0xcf)](){const v=o;if(this['_originTopLeft']['checked'])this[v(0xc0)]=v(0xc5);else{if(this['_originTopMid']['checked'])this[v(0xc0)]=v(0xe9);else{if(this['_originTopRight']['checked'])this['_transformOrigin']=v(0xb3);else{if(this[v(0xf0)]['checked'])this[v(0xc0)]=v(0xed);else{if(this['_originMidMid']['checked'])this['_transformOrigin']=v(0xd9);else{if(this[v(0xbd)]['checked'])this[v(0xc0)]='midRight';else{if(this[v(0xb1)]['checked'])this['_transformOrigin']=v(0xda);else{if(this[v(0xd8)]['checked'])this[v(0xc0)]=v(0xb5);else{if(this[v(0xee)][v(0xeb)])this['_transformOrigin']=v(0xd6);}}}}}}}}}[o(0xb6)](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[w(0xcd)]/0x2,'y':d['y']-e[w(0xa2)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math[w(0xec)](f)*j['x']+Math[w(0xea)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const x=o;let d=this[x(0xdb)][x(0xd0)],e=this[x(0xaf)]['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{const y=x;return parseFloat(h[y(0xd5)](y(0xa6)))-parseFloat(j[y(0xd5)]('left'));}),g=parseFloat(f[0x0]['getStyle']('left'));for(let h=0x0;h<f[x(0xd4)];h++){f[h]['setStyle']('left',h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const z=x;return parseFloat(l['getStyle'](z(0xb8)))-parseFloat(m[z(0xd5)](z(0xb8)));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j['length'];l++){j[l]['setStyle'](x(0xb8),l*e+k+'px');}}}}customElements[o(0xd1)]('node-projects-designer-transform-tool-popup',TransformToolPopup);