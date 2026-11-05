const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0xbd))/0x1+-parseInt(p(0xe7))/0x2*(-parseInt(p(0x9f))/0x3)+parseInt(p(0xf9))/0x4+parseInt(p(0x95))/0x5+parseInt(p(0xcf))/0x6*(parseInt(p(0x70))/0x7)+parseInt(p(0xfb))/0x8*(parseInt(p(0xbf))/0x9)+parseInt(p(0xf0))/0xa*(-parseInt(p(0x102))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa22f2));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';function b(c,d){c=c-0x6f;const e=a();let f=e[c];return f;}export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue=q(0xdc),dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
    }

    #container {
      display: grid;
      gap: 0;
      grid-template-columns: minmax(0, 1fr) auto 16px;
      width: 100%;
      height: 24px;
      align-items: stretch;
    }

    #value-wrapper {
      display: grid;
      grid-template-columns: 14px minmax(0, 1fr);
      min-width: 0;
    }

    #scrubber,
    #input,
    #select,
    #stepper button {
      /* border: 1px solid var(--input-border-color, #596c7a); */
      border: none;
      box-sizing: border-box;
      height: 24px;
      min-height: 24px;
      background: transparent;
      color: inherit;
      font: inherit;
      outline: none;
      box-shadow: none;
    }
    #select option{
      color: var(--wcd-numeric-style-input-select-option-color, var(--numeric-style-input-select-option-color, black));
    }

    #scrubber,
    #stepper button {
      padding: 0;
      line-height: 1;
    }

    #scrubber {
      border-right: 0;
      cursor: ns-resize;
      font-size: 11px;
      letter-spacing: -1px;
    }

    #input {
      border-left: 0;
      border-right: 0;
      min-width: 0;
      text-align: right;
    }

    #input:focus,
    #select:focus,
    #scrubber:focus,
    #stepper button:focus {
      outline: none;
      box-shadow: none;
      border-color: var(--wcd-input-border-color, var(--input-border-color, var(--wcd-color-border, #596c7a)));
    }

    #input[disabled],
    #scrubber[disabled] {
      cursor: default;
    }

    #input[disabled] {
      color: inherit;
      opacity: 1;
      -webkit-text-fill-color: currentColor;
    }

    #select {
      border-left: 0;
      padding: 0 15px 0 2px;
      line-height: 1;
      -webkit-appearance: none;
      appearance: none;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4'%3E%3Cpath d='M0 0l4 4 4-4z' fill='%23999'/%3E%3C/svg%3E") no-repeat right 2px center;
    }

    #measure {
      position: absolute;
      visibility: hidden;
      white-space: nowrap;
      font: inherit;
      pointer-events: none;
    }

    #stepper {
      display: grid;
      height: 24px;
      min-height: 24px;
      overflow: hidden;
      grid-template-rows: repeat(2, minmax(0, 1fr));
    }

    #stepper button {
      height: auto;
      min-height: 0;
      width: 16px;
      min-width: 16px;
      font-size: 10px;
    }
  `;static ['template']=html`
    <div id="container">
      <div id="value-wrapper">
        <button id="scrubber" type="button" aria-label="Drag to change value">${dragHandleGlyph}</button>
        <input id="input" type="text" spellcheck="false">
      </div>
      <select id="select"></select>
      <div id="stepper">
        <button id="increase" type="button" aria-label="Increase value">+</button>
        <button id="decrease" type="button" aria-label="Decrease value">-</button>
      </div>
      <span id="measure"></span>
    </div>
  `;[q(0x8c)]='';get[q(0xcc)](){const r=q;return this[r(0x8c)];}set[q(0xcc)](c){const s=q;this[s(0xbb)](c,![],![]);}[q(0xc4)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get['units'](){const t=q;return[...this[t(0x7f)]];}set['units'](c){const u=q;this['_units']=this['_normalizeOptionValues'](c),this[u(0xf7)]=this[u(0x7f)][0x0]??this[u(0xf7)],this['_updateValue']();}[q(0xcb)]=[];get[q(0x9d)](){return[...this['_fixedValues']];}set[q(0x9d)](c){this['_fixedValues']=this['_normalizeOptionValues'](c),this['_updateValue']();}['_step']=0x1;get[q(0xa2)](){return this['_step'];}set['step'](c){const v=q;this[v(0x87)]=Number[v(0x75)](c)&&c>0x0?c:0x1;}['_unitSteps']={};get['unitSteps'](){const w=q;return{...this[w(0xd2)]};}set['unitSteps'](c){const x=q;this[x(0xd2)]=c??{};}['_min']=null;get[q(0x104)](){return this['_min'];}set[q(0x104)](c){const y=q;this['_min']=Number[y(0x75)](c)?c:null;}[q(0xa9)]=null;get[q(0xe0)](){return this['_max'];}set[q(0xe0)](c){this['_max']=Number['isFinite'](c)?c:null;}['_readOnly']=![];get[q(0xde)](){const z=q;return this[z(0xdd)];}set[q(0xde)](c){const A=q;this[A(0xdd)]=c,this['_applyReadonlyState']();}get['isInPreview'](){const B=q;return this[B(0x9e)]!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){return this['_allowCustomValue'];}set[q(0x8d)](c){const C=q;this['_allowCustomValue']=c,this[C(0xe9)]();}[q(0xdb)];get['unitValueConverter'](){return this['_unitValueConverter'];}set[q(0xc9)](c){this['_unitValueConverter']=c;}[q(0xf1)];['_select'];['_measure'];[q(0x103)];[q(0x8f)];['_decreaseButton'];['_lastNumericValue']=0x0;[q(0xf7)]='px';['_dragPointerId']=null;['_dragStartY']=0x0;[q(0x9b)]=0x0;[q(0xa1)]=0x0;['_previewStartValue']=null;[q(0xc8)]=![];[q(0xec)]=null;[q(0x78)]=null;['_stepperDirection']=0x0;['_stepperRepeatTimeout']=null;[q(0x92)]=null;[q(0xca)]=c=>this['_handleWindowDragPointerMove'](c);[q(0xee)]=c=>this['_finishDragInteractionForPointerEvent'](c,![]);[q(0xd4)]=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);['_windowDragBlurHandler']=()=>this[q(0xd5)](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this[q(0xda)](c);[q(0xdf)]=()=>this['_finishStepperInteraction'](![]);[q(0xf6)]=![];constructor(){const D=q;super(),this['_restoreCachedInititalValues'](),this[D(0xf1)]=this['_getDomElement']('input'),this[D(0x81)]=this['_getDomElement']('select'),this['_measure']=this[D(0x82)]('measure'),this['_scrubberButton']=this['_getDomElement']('scrubber'),this['_increaseButton']=this['_getDomElement'](D(0x72)),this[D(0xef)]=this['_getDomElement'](D(0x74));}[q(0xc3)](){const E=q;this[E(0xae)](),this[E(0xe8)](),this['_updateValue']();}['_wireEvents'](){const F=q;this['_input']['addEventListener'](F(0x86),()=>this['_applyTypedValue']()),this['_input'][F(0x76)]('keydown',c=>{const G=F;c[G(0x8e)]==='Enter'&&(this['_applyTypedValue'](),this['_input']['blur']());}),this['_scrubberButton']['addEventListener'](F(0xb1),c=>this[F(0x9a)](c)),this['_select']['addEventListener'](F(0x86),()=>this['_applySelectedMode']()),this[F(0x8f)][F(0x76)](F(0xb1),c=>this['_handleStepperPointerDown'](c,0x1)),this['_decreaseButton']['addEventListener'](F(0xb1),c=>this['_handleStepperPointerDown'](c,-0x1));}[q(0x9a)](c){const H=q;if(this[H(0xdd)])return;if(!this[H(0xa0)]()){if(!this[H(0xd8)]())return;}this[H(0xf2)]=c[H(0xe2)],this[H(0x77)]=c['clientY'],this[H(0x9b)]=this['_readEditableNumericValue'](this[H(0x81)]['value']),this[H(0xa1)]=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this['_scrubberButton']['setPointerCapture'](c[H(0xe2)]);}catch{}c['preventDefault']();}[q(0x94)](c){const I=q;if(this['_dragPointerId']!==c[I(0xe2)]||!this[I(0xa0)]())return;const d=this['_calculateDraggedStepCount'](this[I(0x77)]-c[I(0x9c)]);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this['_select'][I(0xcc)],f=this[I(0xed)](e);this[I(0xb3)](this['_getInteractiveStepValue'](this[I(0x9b)],d,f),e,f),c['preventDefault']();}[q(0xa4)](c,d){const J=q;if(this['_dragPointerId']!==c[J(0xe2)])return;this[J(0xd5)](d,c['pointerId']);}[q(0xd5)](c,d){const K=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this[K(0xc6)]();if(d!=null)try{if(this['_scrubberButton'][K(0xa7)](d))this[K(0x103)]['releasePointerCapture'](d);}catch{}this[K(0x97)](c);}[q(0xe5)](c,d){const L=q;if(this[L(0xdd)])return;if(!this[L(0xa0)]()){if(!this[L(0xd8)]())return;}this['_finishStepperInteraction'](!![]),this[L(0x78)]=c[L(0xe2)],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this[L(0x100)]=window['setTimeout'](()=>{const M=L;this[M(0x92)]=window['setInterval'](()=>this[M(0x101)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const N=q;if(this[N(0x78)]!==c[N(0xe2)])return;this['_finishStepperInteraction'](![]);}[q(0xea)](c){const O=q;if(this[O(0x78)]==null)return;this['_stepperPointerId']=null,this[O(0xf5)]=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this[O(0x97)](c);}[q(0xad)](){const P=q,c=this[P(0x81)][P(0x88)]['item'](0x0);if(!c)return;const d=c[P(0xd3)]['kind'];if(d==='fixed'){this['_commitValue'](c[P(0xcc)]);return;}if(d===P(0xf3)){this[P(0xf6)]=!![],this[P(0xe9)](),requestAnimationFrame(()=>{const Q=P;this['_input'][Q(0xc7)](),this[Q(0xf1)]['select']();});return;}const e=c[P(0xcc)];this['_lastNumericUnit']=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this['_value']);if(f['kind']==='numeric'){const i=this['_convertNumericValue'](f,e);this[P(0xd9)](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this[P(0xd9)](g);return;}if(f[P(0x8a)]===P(0xb5)){this['_updateValue'](),this['_input'][P(0xc7)]();return;}const h=Number(this[P(0xf1)][P(0xcc)]);if(!Number[P(0xb4)](h)){this['_applyNumericValue'](h,e);return;}this[P(0xd9)](''),this[P(0xf1)][P(0xc7)]();}['_applyTypedValue'](){const R=q,c=this['_select']['selectedOptions'][R(0xaf)](0x0),d=c?.[R(0xd3)]['kind'];if(d===R(0xac))return;if(d===R(0xf3)){this[R(0xd9)](this['_input']['value']);return;}const e=this[R(0xf1)][R(0xcc)]?.[R(0xaa)]()??'';if(!e){this[R(0xd9)]('');return;}const f=Number(e);if(!Number[R(0xb4)](f))this[R(0xc0)]=this[R(0xd0)](f);this[R(0xd9)](combineNumericStyleInputValue(e,c?.[R(0xcc)]??''));}[q(0xe9)](){const S=q;if(!this['_input']||!this[S(0x81)])return;if(this['_previewStartValue']==null)this['_renderSelectOptions']();const c=this['_getDisplayState'](this[S(0xec)]??this[S(0x8c)]);this[S(0xf1)][S(0xcc)]=c[S(0x99)],this[S(0xf1)][S(0xe1)][S(0xc2)]=c[S(0xba)]?'':'none',this['_input']['disabled']=this['_readOnly']||!c[S(0x7b)],this[S(0x81)]['value']=c[S(0xa5)],this[S(0xd6)]();if(c[S(0xc5)]==='unit'&&c['selectedUnit']!=null)this['_lastNumericUnit']=c[S(0xa6)];if(c[S(0xc5)]===S(0xcd)&&c[S(0x99)]!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this['_lastNumericValue']=this['_clampNumericValue'](f);}const d=this['_units']['length']>0x0,e=this['_readOnly']||(!d||c['mode']===S(0xf3));this[S(0x103)]['disabled']=e,this[S(0x8f)][S(0x83)]=e,this['_decreaseButton'][S(0x83)]=e,this[S(0xff)]();}[q(0x90)](c){const T=q,d=parseNumericStyleInputValue(c);if(d[T(0x8a)]==='numeric'){if(this['_preferCustomMode'])return this[T(0xfd)](d[T(0x73)]);if(d[T(0xcd)]&&this['_units']['length']&&!this['_units'][T(0xb7)](d[T(0xcd)]))return this[T(0xfd)](c);const f=resolveNumericStyleInputSelectedUnit(d[T(0xcd)],this['_lastNumericUnit'],this[T(0x7f)])??'';return{'mode':'unit','inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][T(0xb7)](f)?f:this[T(0x81)][T(0xcc)]||customOptionValue,'selectedUnit':f};}if(d[T(0x8a)]===T(0x79)){if(!this[T(0xf6)]&&this[T(0xcb)][T(0xb7)](d['text']))return{'mode':T(0xac),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[T(0x79)]};return this[T(0xfd)](d['text']);}if(this['_preferCustomMode'])return this[T(0xfd)]('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this['_units']['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}[q(0xfd)](c){const U=q;if(!this[U(0x91)]&&this[U(0x7f)]['length'])return{'mode':U(0xcd),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[U(0x7f)][0x0],'selectedUnit':this[U(0x7f)][0x0]};return{'mode':U(0xf3),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0xb0)](){const V=q,c=this[V(0x81)][V(0xcc)];this[V(0x81)][V(0xb6)]();if(this[V(0x7f)]['length']){const d=document['createElement'](V(0xfe));d[V(0xf4)]=V(0xb2);for(const e of this['_units'])d['appendChild'](this[V(0xce)](getNumericStyleInputUnitLabel(e),e,'unit'));this[V(0x81)]['appendChild'](d);}if(this['_fixedValues'][V(0x98)]){const f=document['createElement'](V(0xfe));f[V(0xf4)]=V(0xb8);for(const g of this[V(0xcb)])f['appendChild'](this['_createOption'](g,g,V(0xac)));this['_select']['appendChild'](f);}if(this[V(0x91)]||this[V(0x81)]['options'][V(0x98)]===0x0)this[V(0x81)]['appendChild'](this[V(0xce)](V(0xf3),customOptionValue,V(0xf3)));if(c!=='')this[V(0x81)]['value']=c;else{if(this['_select'][V(0xe4)](V(0xd7)))this[V(0x81)][V(0xcc)]='';}}[q(0xce)](c,d,e){const W=q,f=document['createElement']('option');return f[W(0x79)]=c,f[W(0xcc)]=d,f['dataset'][W(0x8a)]=e,f;}[q(0xd6)](){const X=q;if(!this[X(0x7a)]||!this[X(0x81)])return;const c=this['_select'][X(0x88)][X(0xaf)](0x0);this['_measure']['textContent']=c?.[X(0x79)]??'';const d=this[X(0x7a)]['offsetWidth'];d>0x0?this['_select'][X(0xe1)]['width']=d+0x11+'px':requestAnimationFrame(()=>this[X(0xd6)]());}[q(0xff)](){const Y=q;if(!this['_input']||!this['_select'])return;this[Y(0xf1)][Y(0xde)]=this[Y(0xdd)],this[Y(0x81)]['disabled']=this['_readOnly'];}['_convertNumericValue'](c,d){const Z=q;if(d==null)return this['_value'];const e=c['unit'],f=this[Z(0xdb)]?.({'value':c[Z(0xcc)],'numberText':c['numberText'],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[Z(0x73)],d);}['_resolveCurrentValueForUnit'](c){const a0=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number[a0(0xe6)],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const a1=q,d=parseNumericStyleInputValue(this[a1(0x8c)]);if(d['kind']==='numeric'){const e=this[a1(0x7d)](d,c),f=parseNumericStyleInputValue(e);if(f[a1(0x8a)]===a1(0x80))return f['value'];return d['value'];}if(this[a1(0xf1)]['value']?.[a1(0xaa)]()){const g=Number(this[a1(0xf1)]['value']);if(!Number[a1(0xb4)](g))return g;}return this[a1(0xc0)];}['_applyNumericValue'](c,d){const a2=q;this[a2(0xc0)]=this['_clampNumericValue'](c),this[a2(0xf7)]=d,this[a2(0xd9)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0xb3)](c,d,e){const a3=q;this['_lastNumericValue']=this[a3(0xd0)](c),this['_lastNumericUnit']=d;const f=e??this[a3(0xed)](d);this[a3(0xbb)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this['_lastNumericValue'],f),d),![],!![]);}[q(0xd9)](c){this['_setValue'](c,!![],![]);}[q(0xbb)](c,d,e){const a4=q,f=c??'';if(!d&&!e&&this[a4(0x9e)]!=null)return;const g=this[a4(0x8c)];this[a4(0x8c)]=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this[a4(0xec)]||f!==g)this[a4(0xec)]=null;}}this[a4(0xf6)]=![],this['_updateValue']();if(g!==f){e&&(this[a4(0xc8)]=!![],this['valuePreviewChanged']['emit']({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a5=q;this[a5(0x9e)]==null&&(this['_previewStartValue']=this[a5(0x8c)],this['_previewChanged']=![]);}[q(0x97)](c){const a6=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this['_displayValueLock']??this[a6(0x8c)],f=this['_previewChanged']&&d!==e,g=c||!f;this['_previewStartValue']=null,this[a6(0xc8)]=![],g?(this[a6(0xec)]=null,this[a6(0x8c)]=d,this['_updateValue']()):(this['_displayValueLock']=e,this['_updateValue']()),this[a6(0xc1)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x101)](c){const a7=q,d=this[a7(0x81)]['value'],e=this['_getEffectiveStep'](d);this['_previewNumericValue'](this['_getInteractiveStepValue'](this[a7(0x96)](d),c,e),d,e);}[q(0x7c)](){const a8=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this[a8(0x100)]),this[a8(0x100)]=null),this[a8(0x92)]!=null&&(window['clearInterval'](this[a8(0x92)]),this[a8(0x92)]=null);}['_attachStepperWindowListeners'](){const a9=q;window[a9(0x76)](a9(0xbe),this[a9(0x93)],!![]),window['addEventListener'](a9(0xa3),this[a9(0xd1)],!![]),window['addEventListener']('blur',this['_windowBlurHandler']);}[q(0xf8)](){const aa=q;window[aa(0x76)](aa(0x71),this['_windowDragPointerMoveHandler'],!![]),window['addEventListener'](aa(0xbe),this[aa(0xee)],!![]),window['addEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window['addEventListener']('blur',this['_windowDragBlurHandler']);}['_detachStepperWindowListeners'](){const ab=q;window[ab(0x84)](ab(0xbe),this['_windowPointerUpHandler'],!![]),window[ab(0x84)]('pointercancel',this['_windowPointerCancelHandler'],!![]),window[ab(0x84)](ab(0x85),this[ab(0xdf)]);}['_detachDragWindowListeners'](){const ac=q;window[ac(0x84)](ac(0x71),this['_windowDragPointerMoveHandler'],!![]),window[ac(0x84)]('pointerup',this[ac(0xee)],!![]),window['removeEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window['removeEventListener'](ac(0x85),this[ac(0xb9)]);}[q(0x7e)](c){const ad=q,d=Math[ad(0xfc)](c),e=Math['min'](d,0x14)/0x5,f=Math[ad(0xe0)](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[ad(0xe0)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[ad(0x6f)](c)*h;}[q(0xed)](c){const ae=q;return resolveNumericStyleInputStep(this[ae(0xd2)],this['_step'],c);}[q(0x89)](c,d,e){const af=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number[af(0x75)](g)||!Number[af(0x75)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[af(0xeb)](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[af(0xe3)](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this[af(0xab)](m,f));}['_formatInteractiveNumericValue'](c,d){const ag=q,e=d??this[ag(0x87)];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}[q(0xab)](c,d){const ah=q,e=this[ah(0xfa)](d),f=0xa**e;return Math['round'](c*f)/f;}[q(0xfa)](c){const ai=q,d=(''+(c??this['_step']))['toLowerCase']();if(d['includes']('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f['includes']('.')?f[ai(0x98)]-f[ai(0x8b)]('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ai(0x98)]-e-0x1:0x0;}[q(0xd8)](){const aj=q,c=this['_lastNumericUnit']??this['_units'][0x0];if(c==null)return![];this[aj(0xf6)]=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[aj(0xd9)](d),this['_isSelectedUnitMode']();return this['_applyNumericValue'](this['_lastNumericValue'],c),this[aj(0xa0)]();}[q(0xa0)](){const ak=q;return this['_select']['selectedOptions']['item'](0x0)?.[ak(0xd3)]['kind']===ak(0xcd);}[q(0xa8)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0xd0)](c){const al=q;let d=c;if(this[al(0xbc)]!=null)d=Math[al(0xe0)](this[al(0xbc)],d);if(this[al(0xa9)]!=null)d=Math[al(0x104)](this['_max'],d);return d;}}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);function a(){const am=['inputValue','_handlePointerDown','_dragStartNumericValue','clientY','fixedValues','_previewStartValue','12207ehRQku','_isSelectedUnitMode','_appliedDragSteps','step','pointercancel','_finishDragInteractionForPointerEvent','selectValue','selectedUnit','hasPointerCapture','_normalizeOptionValues','_max','trim','_roundToStepPrecision','fixed','_applySelectedMode','_parseAttributesToProperties','item','_renderSelectOptions','pointerdown','Units','_previewNumericValue','isNaN','empty','replaceChildren','includes','Values','_windowDragBlurHandler','inputVisible','_setValue','_min','32302satLRF','pointerup','603OzTPWL','_lastNumericValue','valuePreviewFinished','display','ready','valueChanged','mode','_detachDragWindowListeners','focus','_previewChanged','unitValueConverter','_windowDragPointerMoveHandler','_fixedValues','value','unit','_createOption','762duZIAm','_clampNumericValue','_windowPointerCancelHandler','_unitSteps','dataset','_windowDragPointerCancelHandler','_finishDragInteraction','_autoSizeSelect','option[value=\x22\x22]','_switchToUnitModeForInteraction','_commitValue','_handleWindowStepperPointerEnd','_unitValueConverter','__node-projects-custom-value__','_readOnly','readOnly','_windowBlurHandler','max','style','pointerId','floor','querySelector','_handleStepperPointerDown','NaN','98JCKEgn','_wireEvents','_updateValue','_finishStepperInteraction','round','_displayValueLock','_getEffectiveStep','_windowDragPointerUpHandler','_decreaseButton','28476330Qdocdi','_input','_dragPointerId','custom','label','_stepperDirection','_preferCustomMode','_lastNumericUnit','_attachDragWindowListeners','4305812tqTMwS','_getStepPrecision','49528TOXbVF','abs','_createCustomDisplayState','optgroup','_applyReadonlyState','_stepperRepeatTimeout','_applyStepPreview','11MiGCBP','_scrubberButton','min','sign','56560qMWjRr','pointermove','increase','numberText','decrease','isFinite','addEventListener','_dragStartY','_stepperPointerId','text','_measure','inputEnabled','_stopStepperRepeat','_convertNumericValue','_calculateDraggedStepCount','_units','numeric','_select','_getDomElement','disabled','removeEventListener','blur','change','_step','selectedOptions','_getInteractiveStepValue','kind','indexOf','_value','allowCustomValue','key','_increaseButton','_getDisplayState','_allowCustomValue','_stepperRepeatInterval','_windowPointerUpHandler','_handleWindowDragPointerMove','4137250CTjhAH','_readEditableNumericValue','_finishPreviewSession','length'];a=function(){return am;};return a();}