const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xad))/0x1+parseInt(n(0xe0))/0x2*(-parseInt(n(0xc7))/0x3)+parseInt(n(0xdd))/0x4+-parseInt(n(0xc9))/0x5+-parseInt(n(0xcd))/0x6*(-parseInt(n(0xe5))/0x7)+-parseInt(n(0xee))/0x8*(-parseInt(n(0xd3))/0x9)+-parseInt(n(0xef))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf134b));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function b(c,d){c=c-0xa8;const e=a();let f=e[c];return f;}function a(){const B=['_inputX','_inputSpacingX','_changePositionMode','_previousSelectionRect','_inputR','3015xtSSTB','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22input-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-x\x22>X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-y\x22>Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22transform-input-r\x22>Rotation</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22transform-input-r\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22button-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-absolute\x22>Absolute</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-relative\x22>Relative</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22spacing-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-x\x22>X\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spacing-input-y\x22>Y\x20spacing</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-x\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22spacing-input-y\x22>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22origin-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22origin-label\x22>Transform\x20origin</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cube\x22\x20role=\x22group\x22\x20aria-labelledby=\x22origin-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-left\x22\x20aria-label=\x22Top\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-mid\x22\x20aria-label=\x22Top\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-top-right\x22\x20aria-label=\x22Top\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-left\x22\x20aria-label=\x22Middle\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-mid\x22\x20aria-label=\x22Center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-mid-right\x22\x20aria-label=\x22Middle\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-left\x22\x20aria-label=\x22Bottom\x20left\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-mid\x22\x20aria-label=\x22Bottom\x20center\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22origin-bot-right\x22\x20aria-label=\x22Bottom\x20right\x22\x20type=\x22radio\x22\x20name=\x22origin-radio\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22apply-div\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22transform-button-apply\x22\x20style=\x22width:100px;\x22>Apply</button>\x0a\x20\x20\x20\x20\x20\x20</div>','_originTopLeft','topMid','getStyle','_transformMode','_originMidLeft','_inputY','_transformOrigin','transform-input-x','6461132pZJzaN','width','_originBotRight','444RFdDrz','origin-top-mid','origin-mid-left','valueAsNumber','_relativeButton','7osvbNg','replaceAll','transform-button-absolute','transform-input-y','sort','left','spacing-input-x','botRight','transform-button-relative','8048XNtLdt','14051640LeaSJU','commit','Transform','toString','Transform\x20selection','_applyTransform','deg)','transform','midLeft','cos','selectionService','_originMidRight','_originTopRight','selectedElements','node-projects-designer-transform-tool-popup','_applyButton','botLeft','height','660769xlYLrf','_calculateTransform','sin','transform-input-r','_designerCanvas','openGroup','length','windowTemplate','midRight','_inputSpacingY','origin-bot-right','origin-top-left','_selectionChanged','windowContentStyle','relative','onclick','origin-mid-mid','_getDomElement','_calculateTransformOriginPosition','checked','top','rotate(','_originBotLeft','setStyle','midMid','absolute','7023rohWDj','_absoluteButton','6003665vCHNYN','_originMidMid','_originTopMid','origin-mid-right','9003096WPvaQC'];a=function(){return B;};return a();}import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';export class TransformToolPopup extends DraggableToolWindow{[o(0xd1)];['_selectionChanged'];[o(0xe4)];['_absoluteButton'];[o(0xaa)];['_inputX'];[o(0xda)];['_inputR'];[o(0xcf)];[o(0xb6)];[o(0xd5)];[o(0xcb)];[o(0xfb)];['_originMidLeft'];['_originMidMid'];['_originMidRight'];[o(0xc3)];['_originBotMid'];['_originBotRight'];['_transformMode'];['_transformOrigin'];get['windowTitle'](){const p=o;return p(0xf1);}get[o(0xba)](){return css`
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
    `;}get[o(0xb4)](){const q=o;return q(0xd4);}constructor(c){const r=o;super(c),this['_relativeButton']=this['_getDomElement'](r(0xed)),this[r(0xc8)]=this[r(0xbe)](r(0xe7)),this[r(0xaa)]=this['_getDomElement']('transform-button-apply'),this['_inputX']=this['_getDomElement'](r(0xdc)),this['_inputY']=this['_getDomElement'](r(0xe8)),this[r(0xd2)]=this[r(0xbe)](r(0xb0)),this['_inputSpacingX']=this['_getDomElement'](r(0xeb)),this[r(0xb6)]=this['_getDomElement']('spacing-input-y'),this[r(0xd5)]=this['_getDomElement'](r(0xb8)),this['_originTopMid']=this[r(0xbe)](r(0xe1)),this['_originTopRight']=this['_getDomElement']('origin-top-right'),this[r(0xd9)]=this[r(0xbe)](r(0xe2)),this[r(0xca)]=this[r(0xbe)](r(0xbd)),this[r(0xfa)]=this['_getDomElement'](r(0xcc)),this['_originBotLeft']=this['_getDomElement']('origin-bot-left'),this['_originBotMid']=this[r(0xbe)]('origin-bot-mid'),this['_originBotRight']=this['_getDomElement'](r(0xb7)),this['_relativeButton']['onclick']=()=>this[r(0xd0)]('relative'),this[r(0xc8)]['onclick']=()=>this['_changePositionMode'](r(0xc6)),this['_applyButton'][r(0xbc)]=()=>this[r(0xf4)](),this[r(0xd8)]='relative',this['_changePositionMode'](this['_transformMode']);}[o(0xd0)](c){const s=o;this['_relativeButton']['setAttribute']('aria-pressed',String(c===s(0xbb))),this[s(0xc8)]['setAttribute']('aria-pressed',String(c==='absolute')),this['_transformMode']=c;}[o(0xf4)](){const t=o;this['_checkOrigin']();if(!this['_designerCanvas'])return;let c=this['_designerCanvas']['instanceServiceContainer'][t(0xf9)][t(0xa8)];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this[t(0xb1)]['instanceServiceContainer']['selectionService']['onSelectionChanged']['once'](()=>{const u=t;this[u(0xb9)]=!![],this[u(0xd1)]=null;});if(c[t(0xb3)]!=0x0){let d={'x':isNaN(this[t(0xce)]['valueAsNumber'])?null:this['_inputX'][t(0xe3)],'y':isNaN(this['_inputY']['valueAsNumber'])?null:this[t(0xda)]['valueAsNumber']},e=this['_inputR'][t(0xe3)]?this[t(0xd2)]['valueAsNumber']:0x0,f=c[0x0][t(0xb2)](t(0xf3));if(!this[t(0xd1)]||this['_selectionChanged'])this[t(0xd1)]=calculateOuterRect(c,this[t(0xb1)]);let g=this[t(0xbf)](this['_previousSelectionRect']);for(let h of c){let i={'x':parseFloat(h[t(0xd7)](t(0xea))),'y':parseFloat(h[t(0xd7)](t(0xc1))),'width':parseFloat(h['getStyle'](t(0xde))),'height':parseFloat(h[t(0xd7)](t(0xac)))},j=h['getStyle'](t(0xf6)),k=0x0;if(j)k=parseFloat(h[t(0xd7)](t(0xf6))[t(0xe6)](t(0xc2),'')['replaceAll'](t(0xf5),''));let l=this[t(0xae)](this[t(0xd1)],g,i,e,d,this[t(0xd8)]);h['setStyle']('left',l['x'][t(0xf2)]()+'px'),h[t(0xc4)](t(0xc1),l['y']['toString']()+'px');let m;if(this[t(0xd8)]=='relative')m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h['setStyle'](t(0xf6),t(0xc2)+m+t(0xf5));else h['removeStyle'](t(0xf6));}this['_applySpacing'](c),f[t(0xf0)]();}}['_calculateTransformOriginPosition'](c){const v=o;switch(this['_transformOrigin']){case'topLeft':return{'x':c['x'],'y':c['y']};case'topMid':return{'x':c['x']+c[v(0xde)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case'midLeft':return{'x':c['x'],'y':c['y']+c[v(0xac)]/0x2};case v(0xc5):return{'x':c['x']+c[v(0xde)]/0x2,'y':c['y']+c['height']/0x2};case v(0xb5):return{'x':c['x']+c[v(0xde)],'y':c['y']+c[v(0xac)]/0x2};case'botLeft':return{'x':c['x'],'y':c['y']+c['height']};case'botMid':return{'x':c['x']+c['width']/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c['width'],'y':c['y']+c['height']};}}['_checkOrigin'](){const w=o;if(this['_originTopLeft']['checked'])this[w(0xdb)]='topLeft';else{if(this[w(0xcb)]['checked'])this['_transformOrigin']=w(0xd6);else{if(this[w(0xfb)][w(0xc0)])this['_transformOrigin']='topRight';else{if(this['_originMidLeft']['checked'])this['_transformOrigin']=w(0xf7);else{if(this[w(0xca)]['checked'])this[w(0xdb)]='midMid';else{if(this[w(0xfa)][w(0xc0)])this[w(0xdb)]='midRight';else{if(this[w(0xc3)]['checked'])this['_transformOrigin']=w(0xab);else{if(this['_originBotMid']['checked'])this['_transformOrigin']='botMid';else{if(this[w(0xdf)]['checked'])this[w(0xdb)]=w(0xec);}}}}}}}}}[o(0xae)](c,d,e,f,g,h){const x=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e['width']/0x2,'y':d['y']-e[x(0xac)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math['cos'](f)*j['x']-Math['sin'](f)*j['y']+d['x']+g['x'],'y':Math[x(0xaf)](f)*j['x']+Math[x(0xf8)](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const y=o;let d=this['_inputSpacingX']['valueAsNumber'],e=this[y(0xb6)]['valueAsNumber'];if(!isNaN(d)){let f=c[y(0xe9)]((h,j)=>{const z=y;return parseFloat(h[z(0xd7)](z(0xea)))-parseFloat(j[z(0xd7)](z(0xea)));}),g=parseFloat(f[0x0][y(0xd7)](y(0xea)));for(let h=0x0;h<f[y(0xb3)];h++){f[h]['setStyle'](y(0xea),h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const A=y;return parseFloat(l[A(0xd7)](A(0xc1)))-parseFloat(m[A(0xd7)](A(0xc1)));}),k=parseFloat(j[0x0]['getStyle'](y(0xc1)));for(let l=0x0;l<j[y(0xb3)];l++){j[l]['setStyle'](y(0xc1),l*e+k+'px');}}}}customElements['define'](o(0xa9),TransformToolPopup);