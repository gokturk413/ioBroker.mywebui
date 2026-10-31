const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xac))/0x1*(parseInt(n(0xd7))/0x2)+parseInt(n(0xdf))/0x3*(-parseInt(n(0xc1))/0x4)+-parseInt(n(0xe5))/0x5+parseInt(n(0xbb))/0x6+-parseInt(n(0xd0))/0x7+-parseInt(n(0xd2))/0x8+parseInt(n(0xde))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5f648));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function a(){const A=['Transform','origin-bot-left','_transformMode','transform-button-absolute','66DdXTsI','_checkOrigin','origin-bot-right','aria-pressed','length','selectedElements','top','16395993bPcNsc','218181vrmlPW','transform-button-apply','transform','_originTopLeft','_changePositionMode','_designerCanvas','2240295IqRQPQ','onSelectionChanged','_originMidLeft','height','cos','windowTemplate','_applySpacing','_previousSelectionRect','setStyle','_originTopMid','origin-bot-mid','midMid','_applyButton','replaceAll','deg)','_inputR','_getDomElement','sin','rotate(','origin-top-left','openGroup','origin-mid-mid','_originBotMid','8474SldOjx','valueAsNumber','transform-input-r','_absoluteButton','width','midRight','_transformOrigin','getStyle','_inputSpacingX','setAttribute','_calculateTransformOriginPosition','sort','commit','_inputSpacingY','_relativeButton','3138780Egggmi','absolute','checked','_originMidMid','onclick','_inputX','12csLQXp','botRight','left','_originTopRight','node-projects-designer-transform-tool-popup','transform-button-relative','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','relative','topMid','midLeft','_originBotLeft','_originMidRight','windowContentStyle','botLeft','toString','2963177WIrfAt','_inputY','4679888jMXyGK'];a=function(){return A;};return a();}import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0xec)];['_selectionChanged'];['_relativeButton'];[o(0xaf)];[o(0xa1)];[o(0xc0)];['_inputY'];[o(0xa4)];['_inputSpacingX'];[o(0xb9)];['_originTopLeft'];[o(0x9e)];[o(0xc4)];[o(0xe7)];[o(0xbe)];[o(0xcc)];['_originBotLeft'];[o(0xab)];['_originBotRight'];['_transformMode'];[o(0xb2)];get['windowTitle'](){const p=o;return p(0xd3);}get[o(0xcd)](){return css`
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
    `;}get[o(0xea)](){const q=o;return q(0xc7);}constructor(c){const r=o;super(c),this[r(0xba)]=this['_getDomElement'](r(0xc6)),this['_absoluteButton']=this[r(0xa5)](r(0xd6)),this['_applyButton']=this['_getDomElement'](r(0xe0)),this['_inputX']=this[r(0xa5)]('transform-input-x'),this['_inputY']=this[r(0xa5)]('transform-input-y'),this['_inputR']=this['_getDomElement'](r(0xae)),this[r(0xb4)]=this[r(0xa5)]('spacing-input-x'),this[r(0xb9)]=this[r(0xa5)]('spacing-input-y'),this['_originTopLeft']=this[r(0xa5)](r(0xa8)),this[r(0x9e)]=this['_getDomElement']('origin-top-mid'),this[r(0xc4)]=this[r(0xa5)]('origin-top-right'),this['_originMidLeft']=this['_getDomElement']('origin-mid-left'),this[r(0xbe)]=this['_getDomElement'](r(0xaa)),this['_originMidRight']=this[r(0xa5)]('origin-mid-right'),this[r(0xcb)]=this['_getDomElement'](r(0xd4)),this[r(0xab)]=this[r(0xa5)](r(0x9f)),this['_originBotRight']=this[r(0xa5)](r(0xd9)),this['_relativeButton'][r(0xbf)]=()=>this[r(0xe3)](r(0xc8)),this['_absoluteButton'][r(0xbf)]=()=>this[r(0xe3)](r(0xbc)),this[r(0xa1)]['onclick']=()=>this['_applyTransform'](),this['_transformMode']=r(0xc8),this['_changePositionMode'](this[r(0xd5)]);}[o(0xe3)](c){const s=o;this['_relativeButton'][s(0xb5)]('aria-pressed',String(c===s(0xc8))),this[s(0xaf)]['setAttribute'](s(0xda),String(c===s(0xbc))),this[s(0xd5)]=c;}['_applyTransform'](){const t=o;this[t(0xd8)]();if(!this[t(0xe4)])return;let c=this['_designerCanvas']['instanceServiceContainer']['selectionService'][t(0xdc)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this['_designerCanvas']['instanceServiceContainer']['selectionService'][t(0xe6)]['once'](()=>{this['_selectionChanged']=!![],this['_previousSelectionRect']=null;});if(c['length']!=0x0){let d={'x':isNaN(this['_inputX']['valueAsNumber'])?null:this[t(0xc0)]['valueAsNumber'],'y':isNaN(this[t(0xd1)][t(0xad)])?null:this['_inputY'][t(0xad)]},e=this[t(0xa4)][t(0xad)]?this['_inputR']['valueAsNumber']:0x0,f=c[0x0][t(0xa9)]('Transform\x20selection');if(!this['_previousSelectionRect']||this['_selectionChanged'])this['_previousSelectionRect']=calculateOuterRect(c,this[t(0xe4)]);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle'](t(0xc3))),'y':parseFloat(h[t(0xb3)]('top')),'width':parseFloat(h['getStyle'](t(0xb0))),'height':parseFloat(h[t(0xb3)](t(0xe8)))},j=h[t(0xb3)](t(0xe1)),k=0x0;if(j)k=parseFloat(h[t(0xb3)]('transform')['replaceAll'](t(0xa7),'')[t(0xa2)]('deg)',''));let l=this['_calculateTransform'](this[t(0xec)],g,i,e,d,this['_transformMode']);h['setStyle']('left',l['x'][t(0xcf)]()+'px'),h[t(0x9d)]('top',l['y']['toString']()+'px');let m;if(this['_transformMode']==t(0xc8))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle']('transform',t(0xa7)+m+t(0xa3));else h['removeStyle'](t(0xe1));}this[t(0xeb)](c),f[t(0xb8)]();}}[o(0xb6)](c){const u=o;switch(this['_transformOrigin']){case'topLeft':return{'x':c['x'],'y':c['y']};case u(0xc9):return{'x':c['x']+c[u(0xb0)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c[u(0xb0)],'y':c['y']};case u(0xca):return{'x':c['x'],'y':c['y']+c[u(0xe8)]/0x2};case u(0xa0):return{'x':c['x']+c[u(0xb0)]/0x2,'y':c['y']+c['height']/0x2};case u(0xb1):return{'x':c['x']+c['width'],'y':c['y']+c['height']/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case u(0xc2):return{'x':c['x']+c[u(0xb0)],'y':c['y']+c[u(0xe8)]};}}[o(0xd8)](){const v=o;if(this[v(0xe2)][v(0xbd)])this[v(0xb2)]='topLeft';else{if(this[v(0x9e)][v(0xbd)])this['_transformOrigin']='topMid';else{if(this[v(0xc4)]['checked'])this[v(0xb2)]='topRight';else{if(this['_originMidLeft']['checked'])this[v(0xb2)]='midLeft';else{if(this[v(0xbe)]['checked'])this[v(0xb2)]='midMid';else{if(this['_originMidRight'][v(0xbd)])this['_transformOrigin']=v(0xb1);else{if(this[v(0xcb)][v(0xbd)])this[v(0xb2)]=v(0xce);else{if(this['_originBotMid'][v(0xbd)])this[v(0xb2)]='botMid';else{if(this['_originBotRight'][v(0xbd)])this[v(0xb2)]='botRight';}}}}}}}}}['_calculateTransform'](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h==w(0xbc)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[w(0xe9)](f)*j['x']-Math[w(0xa6)](f)*j['y']+d['x']+g['x'],'y':Math[w(0xa6)](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const x=o;let d=this[x(0xb4)]['valueAsNumber'],e=this['_inputSpacingY']['valueAsNumber'];if(!isNaN(d)){let f=c[x(0xb7)]((h,j)=>{const y=x;return parseFloat(h[y(0xb3)](y(0xc3)))-parseFloat(j[y(0xb3)](y(0xc3)));}),g=parseFloat(f[0x0][x(0xb3)]('left'));for(let h=0x0;h<f['length'];h++){f[h][x(0x9d)]('left',h*d+g+'px');}}if(!isNaN(e)){let j=c[x(0xb7)]((l,m)=>{const z=x;return parseFloat(l[z(0xb3)]('top'))-parseFloat(m['getStyle'](z(0xdd)));}),k=parseFloat(j[0x0]['getStyle'](x(0xdd)));for(let l=0x0;l<j[x(0xdb)];l++){j[l]['setStyle']('top',l*e+k+'px');}}}}function b(c,d){c=c-0x9d;const e=a();let f=e[c];return f;}customElements['define'](o(0xc5),TransformToolPopup);