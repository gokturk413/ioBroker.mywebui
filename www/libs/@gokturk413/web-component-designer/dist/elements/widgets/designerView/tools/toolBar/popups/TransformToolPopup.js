const o=b;function a(){const z=['valueAsNumber','11UMajXQ','_changePositionMode','_calculateTransformOriginPosition','deg)','sort','origin-bot-left','origin-top-right','length','106884WJayhY','origin-top-mid','_originMidMid','_originMidLeft','relative','replaceAll','removeStyle','_originTopRight','_applyTransform','getStyle','253846vIwJII','transform','botLeft','6844730mbPqDY','_absoluteButton','_originTopLeft','origin-mid-right','origin-mid-mid','_originBotMid','3461580GKACRf','_designerCanvas','botRight','windowTemplate','_relativeButton','_transformMode','setStyle','topRight','transform-input-y','_originTopMid','node-projects-designer-transform-tool-popup','_inputR','Transform\x20selection','_previousSelectionRect','7sBHahL','left','topLeft','spacing-input-x','5miWwLg','top','width','_inputY','onclick','_applyButton','botMid','_transformOrigin','midLeft','topMid','_inputSpacingY','156NaKAZk','_getDomElement','absolute','_originBotLeft','openGroup','81NdyxQk','midMid','define','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','_inputSpacingX','_checkOrigin','_originBotRight','5101152TYjuXp','instanceServiceContainer','setAttribute','_inputX','sin','_applySpacing','cos','height','spacing-input-y','4943536iEuetu','toString','144115ljBVbP','_selectionChanged','aria-pressed','checked'];a=function(){return z;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x20c))/0x1*(-parseInt(n(0x1f1))/0x2)+parseInt(n(0x1c8))/0x3*(-parseInt(n(0x1e7))/0x4)+-parseInt(n(0x1da))/0x5*(parseInt(n(0x217))/0x6)+parseInt(n(0x208))/0x7*(parseInt(n(0x1d8))/0x8)+parseInt(n(0x1fa))/0x9+parseInt(n(0x1f4))/0xa*(parseInt(n(0x1df))/0xb)+-parseInt(n(0x1cf))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67ed9));function b(c,d){c=c-0x1c6;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];[o(0x1db)];[o(0x1fe)];[o(0x1f5)];['_applyButton'];['_inputX'];[o(0x20f)];[o(0x205)];['_inputSpacingX'];[o(0x216)];[o(0x1f6)];[o(0x203)];['_originTopRight'];['_originMidLeft'];[o(0x1e9)];['_originMidRight'];['_originBotLeft'];['_originBotMid'];[o(0x1ce)];[o(0x1ff)];[o(0x213)];get['windowTitle'](){return'Transform';}get['windowContentStyle'](){return css`
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
    `;}get[o(0x1fd)](){const p=o;return p(0x1cb);}constructor(c){const q=o;super(c),this['_relativeButton']=this[q(0x218)]('transform-button-relative'),this[q(0x1f5)]=this[q(0x218)]('transform-button-absolute'),this[q(0x211)]=this[q(0x218)]('transform-button-apply'),this[q(0x1d2)]=this[q(0x218)]('transform-input-x'),this[q(0x20f)]=this['_getDomElement'](q(0x202)),this['_inputR']=this[q(0x218)]('transform-input-r'),this[q(0x1cc)]=this['_getDomElement'](q(0x20b)),this[q(0x216)]=this['_getDomElement'](q(0x1d7)),this[q(0x1f6)]=this['_getDomElement']('origin-top-left'),this[q(0x203)]=this[q(0x218)](q(0x1e8)),this[q(0x1ee)]=this[q(0x218)](q(0x1e5)),this[q(0x1ea)]=this['_getDomElement']('origin-mid-left'),this[q(0x1e9)]=this[q(0x218)](q(0x1f8)),this['_originMidRight']=this[q(0x218)](q(0x1f7)),this[q(0x1c6)]=this[q(0x218)](q(0x1e4)),this[q(0x1f9)]=this['_getDomElement']('origin-bot-mid'),this[q(0x1ce)]=this['_getDomElement']('origin-bot-right'),this[q(0x1fe)][q(0x210)]=()=>this[q(0x1e0)]('relative'),this[q(0x1f5)][q(0x210)]=()=>this[q(0x1e0)]('absolute'),this['_applyButton'][q(0x210)]=()=>this[q(0x1ef)](),this['_transformMode']=q(0x1eb),this['_changePositionMode'](this['_transformMode']);}[o(0x1e0)](c){const r=o;this['_relativeButton']['setAttribute']('aria-pressed',String(c==='relative')),this[r(0x1f5)][r(0x1d1)](r(0x1dc),String(c===r(0x219))),this['_transformMode']=c;}['_applyTransform'](){const s=o;this[s(0x1cd)]();if(!this[s(0x1fb)])return;let c=this['_designerCanvas'][s(0x1d0)]['selectionService']['selectedElements'];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this['_designerCanvas']['instanceServiceContainer']['selectionService']['onSelectionChanged']['once'](()=>{const t=s;this['_selectionChanged']=!![],this[t(0x207)]=null;});if(c[s(0x1e6)]!=0x0){let d={'x':isNaN(this['_inputX'][s(0x1de)])?null:this['_inputX'][s(0x1de)],'y':isNaN(this['_inputY'][s(0x1de)])?null:this[s(0x20f)]['valueAsNumber']},e=this[s(0x205)]['valueAsNumber']?this[s(0x205)]['valueAsNumber']:0x0,f=c[0x0][s(0x1c7)](s(0x206));if(!this['_previousSelectionRect']||this['_selectionChanged'])this['_previousSelectionRect']=calculateOuterRect(c,this[s(0x1fb)]);let g=this[s(0x1e1)](this[s(0x207)]);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h['getStyle'](s(0x20e))),'height':parseFloat(h[s(0x1f0)]('height'))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h['getStyle']('transform')['replaceAll']('rotate(','')[s(0x1ec)](s(0x1e2),''));let l=this['_calculateTransform'](this[s(0x207)],g,i,e,d,this[s(0x1ff)]);h[s(0x200)](s(0x209),l['x']['toString']()+'px'),h[s(0x200)]('top',l['y'][s(0x1d9)]()+'px');let m;if(this[s(0x1ff)]==s(0x1eb))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](s(0x1f2),'rotate('+m+'deg)');else h[s(0x1ed)]('transform');}this['_applySpacing'](c),f['commit']();}}[o(0x1e1)](c){const u=o;switch(this[u(0x213)]){case'topLeft':return{'x':c['x'],'y':c['y']};case u(0x215):return{'x':c['x']+c[u(0x20e)]/0x2,'y':c['y']};case u(0x201):return{'x':c['x']+c['width'],'y':c['y']};case u(0x214):return{'x':c['x'],'y':c['y']+c['height']/0x2};case u(0x1c9):return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']/0x2};case'midRight':return{'x':c['x']+c['width'],'y':c['y']+c['height']/0x2};case u(0x1f3):return{'x':c['x'],'y':c['y']+c['height']};case u(0x212):return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c[u(0x20e)],'y':c['y']+c['height']};}}[o(0x1cd)](){const v=o;if(this[v(0x1f6)][v(0x1dd)])this[v(0x213)]=v(0x20a);else{if(this[v(0x203)]['checked'])this['_transformOrigin']=v(0x215);else{if(this['_originTopRight'][v(0x1dd)])this['_transformOrigin']='topRight';else{if(this['_originMidLeft']['checked'])this[v(0x213)]='midLeft';else{if(this[v(0x1e9)]['checked'])this['_transformOrigin']=v(0x1c9);else{if(this['_originMidRight']['checked'])this[v(0x213)]='midRight';else{if(this[v(0x1c6)]['checked'])this[v(0x213)]='botLeft';else{if(this['_originBotMid'][v(0x1dd)])this['_transformOrigin']='botMid';else{if(this['_originBotRight']['checked'])this['_transformOrigin']=v(0x1fc);}}}}}}}}}['_calculateTransform'](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[w(0x1d6)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[w(0x1d5)](f)*j['x']-Math[w(0x1d3)](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math[w(0x1d5)](f)*j['y']+d['y']+g['y']},i;}[o(0x1d4)](c){const x=o;let d=this['_inputSpacingX']['valueAsNumber'],e=this['_inputSpacingY'][x(0x1de)];if(!isNaN(d)){let f=c[x(0x1e3)]((h,j)=>{const y=x;return parseFloat(h[y(0x1f0)](y(0x209)))-parseFloat(j[y(0x1f0)](y(0x209)));}),g=parseFloat(f[0x0][x(0x1f0)]('left'));for(let h=0x0;h<f[x(0x1e6)];h++){f[h][x(0x200)]('left',h*d+g+'px');}}if(!isNaN(e)){let j=c[x(0x1e3)]((l,m)=>{return parseFloat(l['getStyle']('top'))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0][x(0x1f0)](x(0x20d)));for(let l=0x0;l<j[x(0x1e6)];l++){j[l][x(0x200)]('top',l*e+k+'px');}}}}customElements[o(0x1ca)](o(0x204),TransformToolPopup);