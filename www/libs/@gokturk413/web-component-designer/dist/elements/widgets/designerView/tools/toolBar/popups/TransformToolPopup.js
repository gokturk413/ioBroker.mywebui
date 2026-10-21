const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xbc))/0x1+parseInt(n(0xad))/0x2+-parseInt(n(0xc4))/0x3*(-parseInt(n(0xb4))/0x4)+-parseInt(n(0xc8))/0x5*(-parseInt(n(0xac))/0x6)+parseInt(n(0xd7))/0x7*(-parseInt(n(0x99))/0x8)+parseInt(n(0xba))/0x9+-parseInt(n(0xb2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbcd8b));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';function b(c,d){c=c-0x8d;const e=a();let f=e[c];return f;}import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];[o(0xa6)];['_absoluteButton'];[o(0x8e)];['_inputX'];[o(0xa2)];[o(0xa8)];['_inputSpacingX'];['_inputSpacingY'];['_originTopLeft'];[o(0x95)];[o(0x9e)];[o(0xb8)];['_originMidMid'];['_originMidRight'];[o(0xcf)];['_originBotMid'];['_originBotRight'];[o(0xbb)];['_transformOrigin'];get[o(0xcb)](){const p=o;return p(0xd9);}get[o(0xb3)](){return css`
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
    `;}get[o(0xa9)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const q=o;super(c),this['_relativeButton']=this['_getDomElement'](q(0xa4)),this[q(0xc5)]=this[q(0xb6)](q(0x91)),this[q(0x8e)]=this[q(0xb6)]('transform-button-apply'),this[q(0xca)]=this[q(0xb6)](q(0xb0)),this[q(0xa2)]=this['_getDomElement']('transform-input-y'),this[q(0xa8)]=this['_getDomElement'](q(0x90)),this[q(0x8f)]=this['_getDomElement']('spacing-input-x'),this[q(0xa7)]=this['_getDomElement'](q(0xb7)),this['_originTopLeft']=this['_getDomElement']('origin-top-left'),this[q(0x95)]=this[q(0xb6)]('origin-top-mid'),this['_originTopRight']=this['_getDomElement']('origin-top-right'),this['_originMidLeft']=this[q(0xb6)](q(0xaa)),this[q(0xcc)]=this[q(0xb6)]('origin-mid-mid'),this[q(0xb1)]=this[q(0xb6)](q(0xd8)),this['_originBotLeft']=this[q(0xb6)](q(0xd2)),this['_originBotMid']=this[q(0xb6)](q(0xbe)),this[q(0x8d)]=this[q(0xb6)]('origin-bot-right'),this['_relativeButton']['onclick']=()=>this[q(0xa3)]('relative'),this['_absoluteButton']['onclick']=()=>this['_changePositionMode'](q(0x97)),this[q(0x8e)][q(0xc2)]=()=>this[q(0xa5)](),this[q(0xbb)]=q(0xd1),this['_changePositionMode'](this[q(0xbb)]);}[o(0xa3)](c){const r=o;this['_relativeButton'][r(0xa0)](r(0x9a),String(c==='relative')),this[r(0xc5)]['setAttribute']('aria-pressed',String(c==='absolute')),this['_transformMode']=c;}[o(0xa5)](){const s=o;this['_checkOrigin']();if(!this['_designerCanvas'])return;let c=this[s(0xbd)]['instanceServiceContainer']['selectionService'][s(0x93)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this['_designerCanvas']['instanceServiceContainer']['selectionService']['onSelectionChanged']['once'](()=>{const t=s;this['_selectionChanged']=!![],this[t(0xaf)]=null;});if(c[s(0x9c)]!=0x0){let d={'x':isNaN(this[s(0xca)][s(0xcd)])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this['_inputY']['valueAsNumber'])?null:this['_inputY']['valueAsNumber']},e=this['_inputR'][s(0xcd)]?this['_inputR']['valueAsNumber']:0x0,f=c[0x0][s(0x96)](s(0xc1));if(!this[s(0xaf)]||this[s(0x9d)])this[s(0xaf)]=calculateOuterRect(c,this[s(0xbd)]);let g=this['_calculateTransformOriginPosition'](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h['getStyle'](s(0xc3))),'width':parseFloat(h['getStyle'](s(0x98))),'height':parseFloat(h['getStyle']('height'))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h['getStyle']('transform')[s(0x9f)]('rotate(','')[s(0x9f)](s(0xa1),''));let l=this[s(0xc9)](this['_previousSelectionRect'],g,i,e,d,this['_transformMode']);h[s(0xd3)]('left',l['x']['toString']()+'px'),h[s(0xd3)]('top',l['y']['toString']()+'px');let m;if(this['_transformMode']=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](s(0xc6),'rotate('+m+s(0xa1));else h['removeStyle'](s(0xc6));}this['_applySpacing'](c),f[s(0x9b)]();}}['_calculateTransformOriginPosition'](c){const u=o;switch(this[u(0xce)]){case'topLeft':return{'x':c['x'],'y':c['y']};case u(0xae):return{'x':c['x']+c[u(0x98)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c[u(0x98)],'y':c['y']};case u(0xb5):return{'x':c['x'],'y':c['y']+c['height']/0x2};case u(0xd6):return{'x':c['x']+c[u(0x98)]/0x2,'y':c['y']+c[u(0x92)]/0x2};case u(0xd5):return{'x':c['x']+c[u(0x98)],'y':c['y']+c['height']/0x2};case u(0xc7):return{'x':c['x'],'y':c['y']+c[u(0x92)]};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c[u(0x92)]};case'botRight':return{'x':c['x']+c[u(0x98)],'y':c['y']+c[u(0x92)]};}}[o(0xbf)](){const v=o;if(this[v(0xb9)][v(0x94)])this[v(0xce)]=v(0xab);else{if(this['_originTopMid'][v(0x94)])this['_transformOrigin']=v(0xae);else{if(this[v(0x9e)]['checked'])this[v(0xce)]='topRight';else{if(this[v(0xb8)]['checked'])this['_transformOrigin']=v(0xb5);else{if(this['_originMidMid'][v(0x94)])this['_transformOrigin']=v(0xd6);else{if(this['_originMidRight'][v(0x94)])this['_transformOrigin']=v(0xd5);else{if(this['_originBotLeft'][v(0x94)])this[v(0xce)]='botLeft';else{if(this['_originBotMid']['checked'])this[v(0xce)]='botMid';else{if(this[v(0x8d)][v(0x94)])this['_transformOrigin']='botRight';}}}}}}}}}[o(0xc9)](c,d,e,f,g,h){const w=o;let i;f=f*(Math['PI']/0xb4);if(h==w(0x97)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[w(0x98)]/0x2,'y':d['y']-e['height']/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math['sin'](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}[o(0xd4)](c){const x=o;let d=this['_inputSpacingX'][x(0xcd)],e=this[x(0xa7)]['valueAsNumber'];if(!isNaN(d)){let f=c['sort']((h,j)=>{const y=x;return parseFloat(h['getStyle']('left'))-parseFloat(j[y(0xc0)]('left'));}),g=parseFloat(f[0x0][x(0xc0)](x(0xd0)));for(let h=0x0;h<f['length'];h++){f[h]['setStyle'](x(0xd0),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const z=x;return parseFloat(l[z(0xc0)](z(0xc3)))-parseFloat(m[z(0xc0)]('top'));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j[x(0x9c)];l++){j[l][x(0xd3)]('top',l*e+k+'px');}}}}function a(){const A=['spacing-input-y','_originMidLeft','_originTopLeft','761931LDJfuJ','_transformMode','79237PpFKRk','_designerCanvas','origin-bot-mid','_checkOrigin','getStyle','Transform\x20selection','onclick','top','6MzgPse','_absoluteButton','transform','botLeft','2231855XMseJt','_calculateTransform','_inputX','windowTitle','_originMidMid','valueAsNumber','_transformOrigin','_originBotLeft','left','relative','origin-bot-left','setStyle','_applySpacing','midRight','midMid','616TJihCs','origin-mid-right','Transform','_originBotRight','_applyButton','_inputSpacingX','transform-input-r','transform-button-absolute','height','selectedElements','checked','_originTopMid','openGroup','absolute','width','39248ycWTRg','aria-pressed','commit','length','_selectionChanged','_originTopRight','replaceAll','setAttribute','deg)','_inputY','_changePositionMode','transform-button-relative','_applyTransform','_relativeButton','_inputSpacingY','_inputR','windowTemplate','origin-mid-left','topLeft','18WPUFBz','564232kOHpgp','topMid','_previousSelectionRect','transform-input-x','_originMidRight','17730280iXmTbL','windowContentStyle','2703240aHuFSq','midLeft','_getDomElement'];a=function(){return A;};return a();}customElements['define']('node-projects-designer-transform-tool-popup',TransformToolPopup);