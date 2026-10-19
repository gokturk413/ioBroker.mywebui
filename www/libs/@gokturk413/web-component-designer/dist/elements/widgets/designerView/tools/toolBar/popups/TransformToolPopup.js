const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xb9))/0x1+-parseInt(n(0xdb))/0x2*(-parseInt(n(0xaf))/0x3)+parseInt(n(0xa2))/0x4*(-parseInt(n(0xc9))/0x5)+-parseInt(n(0x9e))/0x6+-parseInt(n(0xbb))/0x7+-parseInt(n(0xde))/0x8*(parseInt(n(0xcb))/0x9)+parseInt(n(0xab))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x19265));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';function b(c,d){c=c-0x93;const e=a();let f=e[c];return f;}function a(){const B=['_applyTransform','origin-mid-mid','_checkOrigin','valueAsNumber','_transformOrigin','absolute','_originTopMid','sin','_absoluteButton','1052106LEmkGn','_selectionChanged','_getDomElement','left','4qRNLtn','instanceServiceContainer','sort','_inputSpacingX','_originBotRight','_originBotMid','getStyle','width','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','5744180rXAoJY','_previousSelectionRect','midLeft','top','21783FutKsj','windowTemplate','_inputSpacingY','_changePositionMode','replaceAll','_originMidMid','_calculateTransform','origin-top-mid','origin-bot-left','botMid','96655vEpqzP','origin-top-left','609966wLzvLB','_inputY','_calculateTransformOriginPosition','rotate(','_originTopRight','onclick','length','relative','Transform','setStyle','aria-pressed','checked','transform-input-x','transform-input-y','694390hEfPXb','_originTopLeft','108729qKzayf','midRight','toString','topLeft','_transformMode','deg)','_originMidLeft','_originBotLeft','transform-button-apply','commit','height','cos','transform-button-relative','_originMidRight','origin-bot-right','once','4EUJXKG','topMid','_designerCanvas','120BXevFz','openGroup','_inputR','transform','_relativeButton','botLeft'];a=function(){return B;};return a();}import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{['_previousSelectionRect'];['_selectionChanged'];[o(0x93)];[o(0x9d)];['_applyButton'];['_inputX'];['_inputY'];[o(0xe0)];['_inputSpacingX'];['_inputSpacingY'];['_originTopLeft'];[o(0x9b)];['_originTopRight'];['_originMidLeft'];[o(0xb4)];[o(0xd8)];[o(0xd2)];[o(0xa7)];['_originBotRight'];['_transformMode'];['_transformOrigin'];get['windowTitle'](){const p=o;return p(0xc3);}get['windowContentStyle'](){return css`
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
    `;}get[o(0xb0)](){const q=o;return q(0xaa);}constructor(c){const r=o;super(c),this['_relativeButton']=this['_getDomElement'](r(0xd7)),this[r(0x9d)]=this['_getDomElement']('transform-button-absolute'),this['_applyButton']=this[r(0xa0)](r(0xd3)),this['_inputX']=this['_getDomElement'](r(0xc7)),this['_inputY']=this[r(0xa0)](r(0xc8)),this['_inputR']=this[r(0xa0)]('transform-input-r'),this[r(0xa5)]=this['_getDomElement']('spacing-input-x'),this['_inputSpacingY']=this[r(0xa0)]('spacing-input-y'),this[r(0xca)]=this[r(0xa0)](r(0xba)),this['_originTopMid']=this['_getDomElement'](r(0xb6)),this['_originTopRight']=this['_getDomElement']('origin-top-right'),this[r(0xd1)]=this[r(0xa0)]('origin-mid-left'),this[r(0xb4)]=this['_getDomElement'](r(0x96)),this[r(0xd8)]=this[r(0xa0)]('origin-mid-right'),this['_originBotLeft']=this[r(0xa0)](r(0xb7)),this['_originBotMid']=this[r(0xa0)]('origin-bot-mid'),this[r(0xa6)]=this['_getDomElement'](r(0xd9)),this['_relativeButton']['onclick']=()=>this['_changePositionMode'](r(0xc2)),this['_absoluteButton'][r(0xc0)]=()=>this[r(0xb2)]('absolute'),this['_applyButton'][r(0xc0)]=()=>this[r(0x95)](),this['_transformMode']='relative',this[r(0xb2)](this['_transformMode']);}[o(0xb2)](c){const s=o;this[s(0x93)]['setAttribute']('aria-pressed',String(c===s(0xc2))),this[s(0x9d)]['setAttribute'](s(0xc5),String(c==='absolute')),this['_transformMode']=c;}['_applyTransform'](){const t=o;this['_checkOrigin']();if(!this['_designerCanvas'])return;let c=this[t(0xdd)][t(0xa3)]['selectionService']['selectedElements'];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this[t(0xdd)]['instanceServiceContainer']['selectionService']['onSelectionChanged'][t(0xda)](()=>{const u=t;this[u(0x9f)]=!![],this[u(0xac)]=null;});if(c[t(0xc1)]!=0x0){let d={'x':isNaN(this['_inputX'][t(0x98)])?null:this['_inputX']['valueAsNumber'],'y':isNaN(this['_inputY']['valueAsNumber'])?null:this[t(0xbc)]['valueAsNumber']},e=this['_inputR'][t(0x98)]?this[t(0xe0)]['valueAsNumber']:0x0,f=c[0x0][t(0xdf)]('Transform\x20selection');if(!this['_previousSelectionRect']||this['_selectionChanged'])this[t(0xac)]=calculateOuterRect(c,this['_designerCanvas']);let g=this[t(0xbd)](this[t(0xac)]);for(let h of c){let i={'x':parseFloat(h['getStyle'](t(0xa1))),'y':parseFloat(h['getStyle'](t(0xae))),'width':parseFloat(h['getStyle'](t(0xa9))),'height':parseFloat(h['getStyle']('height'))},j=h['getStyle']('transform'),k=0x0;if(j)k=parseFloat(h[t(0xa8)]('transform')[t(0xb3)]('rotate(','')['replaceAll']('deg)',''));let l=this[t(0xb5)](this['_previousSelectionRect'],g,i,e,d,this[t(0xcf)]);h[t(0xc4)]('left',l['x'][t(0xcd)]()+'px'),h[t(0xc4)](t(0xae),l['y'][t(0xcd)]()+'px');let m;if(this[t(0xcf)]=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[t(0xc4)]('transform',t(0xbe)+m+t(0xd0));else h['removeStyle'](t(0xe1));}this['_applySpacing'](c),f[t(0xd4)]();}}[o(0xbd)](c){const v=o;switch(this[v(0x99)]){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[v(0xa9)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c[v(0xa9)],'y':c['y']};case v(0xad):return{'x':c['x'],'y':c['y']+c[v(0xd5)]/0x2};case'midMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']/0x2};case v(0xcc):return{'x':c['x']+c[v(0xa9)],'y':c['y']+c['height']/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c[v(0xd5)]};case v(0xb8):return{'x':c['x']+c['width']/0x2,'y':c['y']+c[v(0xd5)]};case'botRight':return{'x':c['x']+c[v(0xa9)],'y':c['y']+c[v(0xd5)]};}}[o(0x97)](){const w=o;if(this['_originTopLeft'][w(0xc6)])this['_transformOrigin']=w(0xce);else{if(this[w(0x9b)]['checked'])this['_transformOrigin']=w(0xdc);else{if(this[w(0xbf)][w(0xc6)])this['_transformOrigin']='topRight';else{if(this['_originMidLeft']['checked'])this[w(0x99)]='midLeft';else{if(this['_originMidMid'][w(0xc6)])this[w(0x99)]='midMid';else{if(this['_originMidRight']['checked'])this['_transformOrigin']=w(0xcc);else{if(this['_originBotLeft']['checked'])this[w(0x99)]=w(0x94);else{if(this['_originBotMid'][w(0xc6)])this[w(0x99)]='botMid';else{if(this['_originBotRight']['checked'])this['_transformOrigin']='botRight';}}}}}}}}}[o(0xb5)](c,d,e,f,g,h){const x=o;let i;f=f*(Math['PI']/0xb4);if(h==x(0x9a)){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[x(0xd5)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[x(0xd6)](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math[x(0x9c)](f)*j['x']+Math[x(0xd6)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const y=o;let d=this['_inputSpacingX']['valueAsNumber'],e=this[y(0xb1)][y(0x98)];if(!isNaN(d)){let f=c[y(0xa4)]((h,j)=>{const z=y;return parseFloat(h['getStyle']('left'))-parseFloat(j[z(0xa8)](z(0xa1)));}),g=parseFloat(f[0x0][y(0xa8)](y(0xa1)));for(let h=0x0;h<f['length'];h++){f[h][y(0xc4)](y(0xa1),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const A=y;return parseFloat(l[A(0xa8)]('top'))-parseFloat(m['getStyle']('top'));}),k=parseFloat(j[0x0]['getStyle']('top'));for(let l=0x0;l<j[y(0xc1)];l++){j[l][y(0xc4)]('top',l*e+k+'px');}}}}customElements['define']('node-projects-designer-transform-tool-popup',TransformToolPopup);