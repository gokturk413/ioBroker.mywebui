function a(){const z=['_applyTransform','6CzmwET','openGroup','width','11450TwXQCe','top','selectedElements','_transformOrigin','transform-input-r','botMid','spacing-input-x','selectionService','410hQbdXs','_originMidRight','transform','_inputY','botRight','valueAsNumber','_absoluteButton','setStyle','checked','_applySpacing','_applyButton','_originMidLeft','_originBotRight','4905887RAFBnl','origin-top-right','12066fzbsoa','transform-input-y','onSelectionChanged','_transformMode','once','52faHEnx','windowContentStyle','_calculateTransformOriginPosition','topMid','1260AxwMoH','origin-bot-right','_calculateTransform','spacing-input-y','436OxbTSY','onclick','define','toString','2222585VlrcpE','removeStyle','_changePositionMode','_originBotLeft','absolute','origin-mid-left','_originMidMid','sort','height','_relativeButton','transform-input-x','1381YifZNm','_originTopLeft','2384232IxKmQF','_inputR','_designerCanvas','8TFOJSY','_inputX','_previousSelectionRect','cos','left','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','_originBotMid','setAttribute','_inputSpacingY','getStyle','_selectionChanged','origin-top-left','aria-pressed','deg)','relative','sin','midRight','windowTitle','_inputSpacingX','topRight','length','botLeft','3079780TYUCfD','windowTemplate','_getDomElement'];a=function(){return z;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xf6))/0x1*(-parseInt(n(0x120))/0x2)+parseInt(n(0x12f))/0x3*(parseInt(n(0x13c))/0x4)+parseInt(n(0x140))/0x5*(parseInt(n(0x115))/0x6)+-parseInt(n(0x12d))/0x7*(-parseInt(n(0xfb))/0x8)+-parseInt(n(0x138))/0x9*(-parseInt(n(0x118))/0xa)+-parseInt(n(0x111))/0xb+parseInt(n(0xf8))/0xc*(-parseInt(n(0x134))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5e4b3));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';function b(c,d){c=c-0xf5;const e=a();let f=e[c];return f;}export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];[o(0x149)];['_absoluteButton'];[o(0x12a)];['_inputX'];[o(0x123)];[o(0xf9)];[o(0x10d)];['_inputSpacingY'];[o(0xf7)];['_originTopMid'];['_originTopRight'];['_originMidLeft'];['_originMidMid'];[o(0x121)];[o(0x143)];['_originBotMid'];['_originBotRight'];['_transformMode'];['_transformOrigin'];get[o(0x10c)](){return'Transform';}get[o(0x135)](){return css`
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
    `;}get[o(0x112)](){const p=o;return p(0x100);}constructor(c){const q=o;super(c),this['_relativeButton']=this['_getDomElement']('transform-button-relative'),this['_absoluteButton']=this[q(0x113)]('transform-button-absolute'),this[q(0x12a)]=this[q(0x113)]('transform-button-apply'),this[q(0xfc)]=this[q(0x113)](q(0xf5)),this['_inputY']=this[q(0x113)](q(0x130)),this[q(0xf9)]=this['_getDomElement'](q(0x11c)),this['_inputSpacingX']=this[q(0x113)](q(0x11e)),this[q(0x103)]=this['_getDomElement'](q(0x13b)),this['_originTopLeft']=this['_getDomElement'](q(0x106)),this['_originTopMid']=this[q(0x113)]('origin-top-mid'),this['_originTopRight']=this[q(0x113)](q(0x12e)),this['_originMidLeft']=this['_getDomElement'](q(0x145)),this[q(0x146)]=this[q(0x113)]('origin-mid-mid'),this['_originMidRight']=this[q(0x113)]('origin-mid-right'),this[q(0x143)]=this[q(0x113)]('origin-bot-left'),this['_originBotMid']=this['_getDomElement']('origin-bot-mid'),this[q(0x12c)]=this[q(0x113)](q(0x139)),this[q(0x149)]['onclick']=()=>this[q(0x142)]('relative'),this[q(0x126)][q(0x13d)]=()=>this['_changePositionMode'](q(0x144)),this['_applyButton']['onclick']=()=>this['_applyTransform'](),this['_transformMode']='relative',this[q(0x142)](this[q(0x132)]);}[o(0x142)](c){const r=o;this['_relativeButton']['setAttribute'](r(0x107),String(c===r(0x109))),this[r(0x126)][r(0x102)](r(0x107),String(c===r(0x144))),this[r(0x132)]=c;}[o(0x114)](){const s=o;this['_checkOrigin']();if(!this['_designerCanvas'])return;let c=this[s(0xfa)]['instanceServiceContainer'][s(0x11f)][s(0x11a)];c=filterChildPlaceItems(c),this[s(0x105)]=![],this[s(0xfa)]['instanceServiceContainer'][s(0x11f)][s(0x131)][s(0x133)](()=>{this['_selectionChanged']=!![],this['_previousSelectionRect']=null;});if(c[s(0x10f)]!=0x0){let d={'x':isNaN(this[s(0xfc)]['valueAsNumber'])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this['_inputY'][s(0x125)])?null:this['_inputY']['valueAsNumber']},e=this[s(0xf9)][s(0x125)]?this[s(0xf9)][s(0x125)]:0x0,f=c[0x0][s(0x116)]('Transform\x20selection');if(!this['_previousSelectionRect']||this['_selectionChanged'])this[s(0xfd)]=calculateOuterRect(c,this['_designerCanvas']);let g=this[s(0x136)](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle'](s(0xff))),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h[s(0x104)]('width')),'height':parseFloat(h[s(0x104)]('height'))},j=h[s(0x104)]('transform'),k=0x0;if(j)k=parseFloat(h[s(0x104)](s(0x122))['replaceAll']('rotate(','')['replaceAll'](s(0x108),''));let l=this[s(0x13a)](this[s(0xfd)],g,i,e,d,this[s(0x132)]);h[s(0x127)]('left',l['x']['toString']()+'px'),h[s(0x127)]('top',l['y'][s(0x13f)]()+'px');let m;if(this[s(0x132)]==s(0x109))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[s(0x127)]('transform','rotate('+m+s(0x108));else h[s(0x141)]('transform');}this['_applySpacing'](c),f['commit']();}}['_calculateTransformOriginPosition'](c){const t=o;switch(this[t(0x11b)]){case'topLeft':return{'x':c['x'],'y':c['y']};case t(0x137):return{'x':c['x']+c['width']/0x2,'y':c['y']};case t(0x10e):return{'x':c['x']+c[t(0x117)],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c[t(0x148)]/0x2};case t(0x10b):return{'x':c['x']+c[t(0x117)],'y':c['y']+c['height']/0x2};case t(0x110):return{'x':c['x'],'y':c['y']+c['height']};case t(0x11d):return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c[t(0x117)],'y':c['y']+c['height']};}}['_checkOrigin'](){const u=o;if(this[u(0xf7)]['checked'])this['_transformOrigin']='topLeft';else{if(this['_originTopMid'][u(0x128)])this[u(0x11b)]='topMid';else{if(this['_originTopRight'][u(0x128)])this['_transformOrigin']='topRight';else{if(this[u(0x12b)]['checked'])this['_transformOrigin']='midLeft';else{if(this[u(0x146)][u(0x128)])this[u(0x11b)]='midMid';else{if(this['_originMidRight']['checked'])this['_transformOrigin']=u(0x10b);else{if(this['_originBotLeft']['checked'])this[u(0x11b)]=u(0x110);else{if(this[u(0x101)][u(0x128)])this[u(0x11b)]=u(0x11d);else{if(this[u(0x12c)][u(0x128)])this[u(0x11b)]=u(0x124);}}}}}}}}}[o(0x13a)](c,d,e,f,g,h){const v=o;let i;f=f*(Math['PI']/0xb4);if(h==v(0x144)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[v(0xfe)](f)*j['x']-Math[v(0x10a)](f)*j['y']+d['x']+g['x'],'y':Math[v(0x10a)](f)*j['x']+Math[v(0xfe)](f)*j['y']+d['y']+g['y']},i;}[o(0x129)](c){const w=o;let d=this['_inputSpacingX'][w(0x125)],e=this[w(0x103)]['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{const x=w;return parseFloat(h[x(0x104)](x(0xff)))-parseFloat(j[x(0x104)]('left'));}),g=parseFloat(f[0x0]['getStyle'](w(0xff)));for(let h=0x0;h<f['length'];h++){f[h][w(0x127)]('left',h*d+g+'px');}}if(!isNaN(e)){let j=c[w(0x147)]((l,m)=>{const y=w;return parseFloat(l['getStyle'](y(0x119)))-parseFloat(m[y(0x104)]('top'));}),k=parseFloat(j[0x0][w(0x104)](w(0x119)));for(let l=0x0;l<j['length'];l++){j[l][w(0x127)]('top',l*e+k+'px');}}}}customElements[o(0x13e)]('node-projects-designer-transform-tool-popup',TransformToolPopup);