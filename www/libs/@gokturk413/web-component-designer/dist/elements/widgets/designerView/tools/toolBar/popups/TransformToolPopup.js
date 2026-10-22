const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x20e))/0x1+parseInt(n(0x224))/0x2+-parseInt(n(0x228))/0x3+-parseInt(n(0x20a))/0x4*(-parseInt(n(0x1fe))/0x5)+-parseInt(n(0x1ff))/0x6+parseInt(n(0x221))/0x7+parseInt(n(0x1e7))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3443a));function b(c,d){c=c-0x1e3;const e=a();let f=e[c];return f;}function a(){const z=['transform-button-absolute','1201210WmwAbx','2111490CwFMon','node-projects-designer-transform-tool-popup','length','cos','getStyle','checked','_originMidMid','_originTopMid','_inputSpacingY','spacing-input-y','_applyButton','4TVcVpU','midRight','selectionService','_inputSpacingX','163498hlgryS','_originMidLeft','relative','_relativeButton','_originBotMid','left','sin','topLeft','_designerCanvas','deg)','_getDomElement','transform-input-y','_inputR','_transformOrigin','instanceServiceContainer','origin-top-left','_inputX','_transformMode','_originMidRight','1062971qhRZep','_calculateTransform','_originBotLeft','29814gnMOyS','removeStyle','absolute','_previousSelectionRect','35001YNSdxU','transform','setStyle','top','origin-mid-right','aria-pressed','botLeft','57248iORebo','valueAsNumber','_applyTransform','openGroup','topRight','sort','_changePositionMode','transform-button-relative','_calculateTransformOriginPosition','botRight','origin-mid-mid','origin-bot-mid','width','_selectionChanged','_originBotRight','botMid','Transform','_checkOrigin','height','topMid','commit','_absoluteButton'];a=function(){return z;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0x227)];['_selectionChanged'];['_relativeButton'];['_absoluteButton'];['_applyButton'];[o(0x21e)];['_inputY'];[o(0x21a)];['_inputSpacingX'];['_inputSpacingY'];['_originTopLeft'];[o(0x206)];['_originTopRight'];['_originMidLeft'];['_originMidMid'];[o(0x220)];['_originBotLeft'];[o(0x212)];['_originBotRight'];[o(0x21f)];['_transformOrigin'];get['windowTitle'](){const p=o;return p(0x1f7);}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this[q(0x211)]=this['_getDomElement'](q(0x1ee)),this['_absoluteButton']=this['_getDomElement'](q(0x1fd)),this[q(0x209)]=this[q(0x218)]('transform-button-apply'),this[q(0x21e)]=this['_getDomElement']('transform-input-x'),this['_inputY']=this[q(0x218)](q(0x219)),this['_inputR']=this[q(0x218)]('transform-input-r'),this[q(0x20d)]=this['_getDomElement']('spacing-input-x'),this[q(0x207)]=this['_getDomElement'](q(0x208)),this['_originTopLeft']=this[q(0x218)](q(0x21d)),this[q(0x206)]=this[q(0x218)]('origin-top-mid'),this['_originTopRight']=this['_getDomElement']('origin-top-right'),this[q(0x20f)]=this[q(0x218)]('origin-mid-left'),this['_originMidMid']=this['_getDomElement'](q(0x1f1)),this[q(0x220)]=this['_getDomElement'](q(0x1e4)),this['_originBotLeft']=this[q(0x218)]('origin-bot-left'),this['_originBotMid']=this['_getDomElement'](q(0x1f2)),this[q(0x1f5)]=this['_getDomElement']('origin-bot-right'),this[q(0x211)]['onclick']=()=>this['_changePositionMode'](q(0x210)),this[q(0x1fc)]['onclick']=()=>this['_changePositionMode']('absolute'),this[q(0x209)]['onclick']=()=>this[q(0x1e9)](),this[q(0x21f)]='relative',this[q(0x1ed)](this[q(0x21f)]);}[o(0x1ed)](c){const r=o;this[r(0x211)]['setAttribute'](r(0x1e5),String(c===r(0x210))),this[r(0x1fc)]['setAttribute']('aria-pressed',String(c==='absolute')),this[r(0x21f)]=c;}[o(0x1e9)](){const s=o;this[s(0x1f8)]();if(!this[s(0x216)])return;let c=this['_designerCanvas']['instanceServiceContainer']['selectionService']['selectedElements'];c=filterChildPlaceItems(c),this[s(0x1f4)]=![],this[s(0x216)][s(0x21c)][s(0x20c)]['onSelectionChanged']['once'](()=>{const t=s;this[t(0x1f4)]=!![],this['_previousSelectionRect']=null;});if(c['length']!=0x0){let d={'x':isNaN(this['_inputX'][s(0x1e8)])?null:this[s(0x21e)][s(0x1e8)],'y':isNaN(this['_inputY'][s(0x1e8)])?null:this['_inputY']['valueAsNumber']},e=this['_inputR'][s(0x1e8)]?this['_inputR'][s(0x1e8)]:0x0,f=c[0x0][s(0x1ea)]('Transform\x20selection');if(!this[s(0x227)]||this[s(0x1f4)])this[s(0x227)]=calculateOuterRect(c,this['_designerCanvas']);let g=this[s(0x1ef)](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h[s(0x203)]('left')),'y':parseFloat(h[s(0x203)](s(0x1e3))),'width':parseFloat(h['getStyle'](s(0x1f3))),'height':parseFloat(h['getStyle']('height'))},j=h[s(0x203)](s(0x229)),k=0x0;if(j)k=parseFloat(h['getStyle'](s(0x229))['replaceAll']('rotate(','')['replaceAll'](s(0x217),''));let l=this['_calculateTransform'](this[s(0x227)],g,i,e,d,this[s(0x21f)]);h['setStyle'](s(0x213),l['x']['toString']()+'px'),h['setStyle']('top',l['y']['toString']()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[s(0x22a)](s(0x229),'rotate('+m+'deg)');else h[s(0x225)](s(0x229));}this['_applySpacing'](c),f[s(0x1fb)]();}}[o(0x1ef)](c){const u=o;switch(this['_transformOrigin']){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[u(0x1f3)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c[u(0x1f3)],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c[u(0x1f3)]/0x2,'y':c['y']+c[u(0x1f9)]/0x2};case u(0x20b):return{'x':c['x']+c[u(0x1f3)],'y':c['y']+c[u(0x1f9)]/0x2};case u(0x1e6):return{'x':c['x'],'y':c['y']+c['height']};case u(0x1f6):return{'x':c['x']+c['width']/0x2,'y':c['y']+c[u(0x1f9)]};case u(0x1f0):return{'x':c['x']+c['width'],'y':c['y']+c[u(0x1f9)]};}}['_checkOrigin'](){const v=o;if(this['_originTopLeft']['checked'])this['_transformOrigin']=v(0x215);else{if(this[v(0x206)]['checked'])this['_transformOrigin']=v(0x1fa);else{if(this['_originTopRight']['checked'])this['_transformOrigin']=v(0x1eb);else{if(this['_originMidLeft']['checked'])this['_transformOrigin']='midLeft';else{if(this[v(0x205)]['checked'])this['_transformOrigin']='midMid';else{if(this[v(0x220)]['checked'])this['_transformOrigin']='midRight';else{if(this[v(0x223)][v(0x204)])this[v(0x21b)]='botLeft';else{if(this[v(0x212)][v(0x204)])this[v(0x21b)]='botMid';else{if(this['_originBotRight'][v(0x204)])this['_transformOrigin']='botRight';}}}}}}}}}[o(0x222)](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h==w(0x226)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[w(0x202)](f)*j['x']-Math[w(0x214)](f)*j['y']+d['x']+g['x'],'y':Math[w(0x214)](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const x=o;let d=this['_inputSpacingX']['valueAsNumber'],e=this[x(0x207)]['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{return parseFloat(h['getStyle']('left'))-parseFloat(j['getStyle']('left'));}),g=parseFloat(f[0x0]['getStyle'](x(0x213)));for(let h=0x0;h<f[x(0x201)];h++){f[h][x(0x22a)](x(0x213),h*d+g+'px');}}if(!isNaN(e)){let j=c[x(0x1ec)]((l,m)=>{const y=x;return parseFloat(l['getStyle'](y(0x1e3)))-parseFloat(m[y(0x203)](y(0x1e3)));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j['length'];l++){j[l][x(0x22a)]('top',l*e+k+'px');}}}}customElements['define'](o(0x200),TransformToolPopup);