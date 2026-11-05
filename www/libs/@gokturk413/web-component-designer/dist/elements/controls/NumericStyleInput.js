function b(c,d){c=c-0x72;const e=a();let f=e[c];return f;}const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x8f))/0x1*(parseInt(p(0xd2))/0x2)+-parseInt(p(0xfd))/0x3*(-parseInt(p(0xed))/0x4)+parseInt(p(0x76))/0x5+-parseInt(p(0x108))/0x6+parseInt(p(0xcf))/0x7+parseInt(p(0xf6))/0x8*(parseInt(p(0xd4))/0x9)+-parseInt(p(0xd8))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9c119));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue=q(0x83),dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0xc7)]=css`
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
  `;static [q(0x77)]=html`
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
  `;['_value']='';get['value'](){return this['_value'];}set[q(0x7c)](c){const r=q;this[r(0x86)](c,![],![]);}[q(0xf4)]=new TypedEvent();[q(0x7a)]=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get[q(0xca)](){const s=q;return[...this[s(0x105)]];}set[q(0xca)](c){const t=q;this[t(0x105)]=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this[t(0x105)][0x0]??this['_lastNumericUnit'],this['_updateValue']();}[q(0x9e)]=[];get[q(0x9b)](){return[...this['_fixedValues']];}set[q(0x9b)](c){const u=q;this[u(0x9e)]=this[u(0xae)](c),this['_updateValue']();}['_step']=0x1;get[q(0x102)](){return this['_step'];}set['step'](c){const v=q;this[v(0xf2)]=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0xc0)]={};get['unitSteps'](){const w=q;return{...this[w(0xc0)]};}set[q(0xb3)](c){const x=q;this[x(0xc0)]=c??{};}['_min']=null;get['min'](){const y=q;return this[y(0x10d)];}set['min'](c){this['_min']=Number['isFinite'](c)?c:null;}[q(0x85)]=null;get[q(0xf0)](){const z=q;return this[z(0x85)];}set['max'](c){const A=q;this[A(0x85)]=Number[A(0x75)](c)?c:null;}[q(0x90)]=![];get['readOnly'](){const B=q;return this[B(0x90)];}set['readOnly'](c){this['_readOnly']=c,this['_applyReadonlyState']();}get['isInPreview'](){return this['_previewStartValue']!=null;}[q(0x97)]=!![];get[q(0xe1)](){const C=q;return this[C(0x97)];}set['allowCustomValue'](c){this['_allowCustomValue']=c,this['_updateValue']();}[q(0xcb)];get['unitValueConverter'](){return this['_unitValueConverter'];}set['unitValueConverter'](c){this['_unitValueConverter']=c;}['_input'];[q(0xa3)];['_measure'];[q(0xfb)];[q(0x8b)];[q(0xde)];['_lastNumericValue']=0x0;['_lastNumericUnit']='px';['_dragPointerId']=null;[q(0xe8)]=0x0;['_dragStartNumericValue']=0x0;['_appliedDragSteps']=0x0;['_previewStartValue']=null;['_previewChanged']=![];['_displayValueLock']=null;[q(0xec)]=null;['_stepperDirection']=0x0;[q(0xaa)]=null;[q(0x89)]=null;['_windowDragPointerMoveHandler']=c=>this[q(0xf3)](c);['_windowDragPointerUpHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0xaf)](c,!![]);['_windowDragBlurHandler']=()=>this[q(0xc8)](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x74)]=c=>this['_handleWindowStepperPointerEnd'](c);[q(0xa1)]=()=>this['_finishStepperInteraction'](![]);[q(0xa0)]=![];constructor(){const D=q;super(),this[D(0x9c)](),this[D(0xdb)]=this['_getDomElement'](D(0x96)),this['_select']=this['_getDomElement']('select'),this[D(0xad)]=this[D(0xb4)]('measure'),this[D(0xfb)]=this['_getDomElement'](D(0xff)),this[D(0x8b)]=this['_getDomElement']('increase'),this[D(0xde)]=this['_getDomElement']('decrease');}[q(0x104)](){const E=q;this['_parseAttributesToProperties'](),this['_wireEvents'](),this[E(0xfa)]();}['_wireEvents'](){const F=q;this['_input']['addEventListener']('change',()=>this[F(0xd6)]()),this['_input'][F(0xb0)](F(0xc5),c=>{const G=F;c['key']==='Enter'&&(this['_applyTypedValue'](),this[G(0xdb)]['blur']());}),this[F(0xfb)]['addEventListener'](F(0xda),c=>this[F(0xe5)](c)),this[F(0xa3)][F(0xb0)](F(0x78),()=>this[F(0xbf)]()),this[F(0x8b)][F(0xb0)](F(0xda),c=>this[F(0xeb)](c,0x1)),this['_decreaseButton'][F(0xb0)](F(0xda),c=>this['_handleStepperPointerDown'](c,-0x1));}[q(0xe5)](c){const H=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this[H(0x92)]())return;}this['_dragPointerId']=c['pointerId'],this['_dragStartY']=c[H(0xe9)],this[H(0xdd)]=this[H(0xfc)](this[H(0xa3)]['value']),this[H(0x93)]=0x0,this[H(0xa4)](),this[H(0xa2)]();try{this[H(0xfb)]['setPointerCapture'](c[H(0xbe)]);}catch{}c[H(0x8c)]();}['_handleWindowDragPointerMove'](c){const I=q;if(this[I(0x8a)]!==c['pointerId']||!this['_isSelectedUnitMode']())return;const d=this[I(0xea)](this['_dragStartY']-c[I(0xe9)]);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this[I(0xa3)][I(0x7c)],f=this[I(0xf1)](e);this['_previewNumericValue'](this[I(0xbd)](this['_dragStartNumericValue'],d,f),e,f),c[I(0x8c)]();}[q(0xaf)](c,d){const J=q;if(this[J(0x8a)]!==c['pointerId'])return;this[J(0xc8)](d,c['pointerId']);}['_finishDragInteraction'](c,d){const K=q;if(this[K(0x8a)]==null)return;this[K(0x8a)]=null,this[K(0x93)]=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this[K(0xfb)]['hasPointerCapture'](d))this[K(0xfb)]['releasePointerCapture'](d);}catch{}this[K(0x9f)](c);}['_handleStepperPointerDown'](c,d){const L=q;if(this[L(0x90)])return;if(!this[L(0xa7)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[L(0xa9)](!![]),this['_stepperPointerId']=c[L(0xbe)],this['_stepperDirection']=d,this[L(0xbc)](),this[L(0xa4)](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{this['_stepperRepeatInterval']=window['setInterval'](()=>this['_applyStepPreview'](this['_stepperDirection']),0x32);},0x15e),c[L(0x8c)]();}[q(0xbb)](c){const M=q;if(this['_stepperPointerId']!==c[M(0xbe)])return;this[M(0xa9)](![]);}[q(0xa9)](c){const N=q;if(this['_stepperPointerId']==null)return;this['_stepperPointerId']=null,this[N(0x84)]=0x0,this[N(0x95)](),this[N(0xe7)](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const O=q,c=this[O(0xa3)][O(0x8e)]['item'](0x0);if(!c)return;const d=c[O(0xc1)][O(0xc6)];if(d==='fixed'){this[O(0x101)](c[O(0x7c)]);return;}if(d===O(0x7f)){this[O(0xa0)]=!![],this['_updateValue'](),requestAnimationFrame(()=>{const P=O;this[P(0xdb)]['focus'](),this['_input']['select']();});return;}const e=c[O(0x7c)];this[O(0x98)]=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this[O(0xd3)]);if(f['kind']==='numeric'){const i=this[O(0x7b)](f,e);this[O(0x101)](i);return;}const g=this[O(0x7d)](e);if(g!=null){this[O(0x101)](g);return;}if(f[O(0xc6)]===O(0xc9)){this['_updateValue'](),this[O(0xdb)][O(0x91)]();return;}const h=Number(this['_input'][O(0x7c)]);if(!Number[O(0xd9)](h)){this[O(0xb1)](h,e);return;}this['_commitValue'](''),this['_input'][O(0x91)]();}[q(0xd6)](){const Q=q,c=this['_select'][Q(0x8e)][Q(0x82)](0x0),d=c?.['dataset']['kind'];if(d===Q(0x79))return;if(d===Q(0x7f)){this[Q(0x101)](this[Q(0xdb)][Q(0x7c)]);return;}const e=this['_input'][Q(0x7c)]?.['trim']()??'';if(!e){this[Q(0x101)]('');return;}const f=Number(e);if(!Number[Q(0xd9)](f))this[Q(0xa5)]=this['_clampNumericValue'](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.['value']??''));}['_updateValue'](){const R=q;if(!this['_input']||!this['_select'])return;if(this[R(0xd5)]==null)this['_renderSelectOptions']();const c=this['_getDisplayState'](this['_displayValueLock']??this[R(0xd3)]);this['_input']['value']=c[R(0xef)],this['_input'][R(0xc7)][R(0x10c)]=c[R(0xb5)]?'':R(0xb8),this[R(0xdb)][R(0xc3)]=this['_readOnly']||!c[R(0xd7)],this['_select']['value']=c[R(0x88)],this['_autoSizeSelect']();if(c['mode']===R(0x94)&&c[R(0xab)]!=null)this['_lastNumericUnit']=c[R(0xab)];if(c['mode']==='unit'&&c[R(0xef)]!==''){const f=Number(c[R(0xef)]);if(!Number['isNaN'](f))this['_lastNumericValue']=this[R(0xb6)](f);}const d=this[R(0x105)]['length']>0x0,e=this['_readOnly']||(!d||c['mode']===R(0x7f));this['_scrubberButton'][R(0xc3)]=e,this['_increaseButton'][R(0xc3)]=e,this[R(0xde)][R(0xc3)]=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const S=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this['_preferCustomMode'])return this[S(0xce)](d[S(0xfe)]);if(d['unit']&&this[S(0x105)][S(0xb2)]&&!this[S(0x105)][S(0xe2)](d['unit']))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this[S(0x98)],this['_units'])??'';return{'mode':S(0x94),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[S(0x105)][S(0xe2)](f)?f:this[S(0xa3)]['value']||customOptionValue,'selectedUnit':f};}if(d[S(0xc6)]===S(0xe4)){if(!this[S(0xa0)]&&this['_fixedValues'][S(0xe2)](d[S(0xe4)]))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this[S(0xce)](d['text']);}if(this[S(0xa0)])return this[S(0xce)]('');const e=this[S(0x98)]??this[S(0x105)][0x0]??'';if(this[S(0x105)]['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}[q(0xce)](c){const T=q;if(!this['_allowCustomValue']&&this[T(0x105)][T(0xb2)])return{'mode':T(0x94),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[T(0x105)][0x0],'selectedUnit':this[T(0x105)][0x0]};return{'mode':T(0x7f),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const U=q,c=this[U(0xa3)][U(0x7c)];this['_select'][U(0xcc)]();if(this['_units']['length']){const d=document['createElement'](U(0xa6));d[U(0x109)]=U(0x9d);for(const e of this[U(0x105)])d[U(0xf5)](this[U(0xe6)](getNumericStyleInputUnitLabel(e),e,'unit'));this['_select']['appendChild'](d);}if(this[U(0x9e)][U(0xb2)]){const f=document[U(0xc2)](U(0xa6));f['label']=U(0xc4);for(const g of this['_fixedValues'])f[U(0xf5)](this[U(0xe6)](g,g,U(0x79)));this['_select']['appendChild'](f);}if(this[U(0x97)]||this['_select'][U(0x8d)]['length']===0x0)this[U(0xa3)]['appendChild'](this[U(0xe6)](U(0x7f),customOptionValue,'custom'));if(c!=='')this['_select']['value']=c;else{if(this[U(0xa3)][U(0x72)](U(0xb7)))this['_select']['value']='';}}['_createOption'](c,d,e){const V=q,f=document[V(0xc2)]('option');return f['text']=c,f['value']=d,f['dataset']['kind']=e,f;}['_autoSizeSelect'](){const W=q;if(!this['_measure']||!this['_select'])return;const c=this[W(0xa3)][W(0x8e)][W(0x82)](0x0);this[W(0xad)]['textContent']=c?.['text']??'';const d=this['_measure'][W(0xba)];d>0x0?this[W(0xa3)][W(0xc7)][W(0x10a)]=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const X=q;if(!this['_input']||!this[X(0xa3)])return;this['_input'][X(0xe3)]=this[X(0x90)],this['_select'][X(0xc3)]=this['_readOnly'];}['_convertNumericValue'](c,d){const Y=q;if(d==null)return this['_value'];const e=c[Y(0x94)],f=this['_unitValueConverter']?.({'value':c['value'],'numberText':c[Y(0xfe)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}[q(0x7d)](c){const Z=q;if(c==null)return null;const d=this[Z(0xcb)]?.({'value':Number['NaN'],'numberText':'','rawValue':this[Z(0xd3)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const a0=q,d=parseNumericStyleInputValue(this['_value']);if(d[a0(0xc6)]==='numeric'){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f[a0(0x7c)];return d[a0(0x7c)];}if(this[a0(0xdb)]['value']?.['trim']()){const g=Number(this['_input'][a0(0x7c)]);if(!Number['isNaN'](g))return g;}return this[a0(0xa5)];}[q(0xb1)](c,d){const a1=q;this['_lastNumericValue']=this[a1(0xb6)](c),this[a1(0x98)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}['_previewNumericValue'](c,d,e){const a2=q;this[a2(0xa5)]=this[a2(0xb6)](c),this[a2(0x98)]=d;const f=e??this['_getEffectiveStep'](d);this['_setValue'](combineNumericStyleInputValue(this[a2(0x87)](this['_lastNumericValue'],f),d),![],!![]);}['_commitValue'](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a3=q,f=c??'';if(!d&&!e&&this[a3(0xd5)]!=null)return;const g=this['_value'];this[a3(0xd3)]=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this['_displayValueLock']||f!==g)this['_displayValueLock']=null;}}this[a3(0xa0)]=![],this['_updateValue']();if(g!==f){e&&(this[a3(0xf8)]=!![],this[a3(0x7a)]['emit']({'newValue':f,'oldValue':g}));if(d)this[a3(0xf4)]['emit']({'newValue':f,'oldValue':g});}}[q(0xa4)](){const a4=q;this['_previewStartValue']==null&&(this['_previewStartValue']=this[a4(0xd3)],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a5=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this[a5(0x107)]??this[a5(0xd3)],f=this[a5(0xf8)]&&d!==e,g=c||!f;this[a5(0xd5)]=null,this[a5(0xf8)]=![],g?(this[a5(0x107)]=null,this['_value']=d,this['_updateValue']()):(this['_displayValueLock']=e,this[a5(0xfa)]()),this['valuePreviewFinished'][a5(0x103)]({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x10b)](c){const a6=q,d=this[a6(0xa3)]['value'],e=this['_getEffectiveStep'](d);this[a6(0xd1)](this[a6(0xbd)](this[a6(0xfc)](d),c,e),d,e);}['_stopStepperRepeat'](){const a7=q;this[a7(0xaa)]!=null&&(window['clearTimeout'](this[a7(0xaa)]),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this[a7(0x89)]),this[a7(0x89)]=null);}['_attachStepperWindowListeners'](){const a8=q;window[a8(0xb0)](a8(0x9a),this['_windowPointerUpHandler'],!![]),window[a8(0xb0)](a8(0xac),this['_windowPointerCancelHandler'],!![]),window[a8(0xb0)]('blur',this[a8(0xa1)]);}['_attachDragWindowListeners'](){const a9=q;window[a9(0xb0)](a9(0xa8),this[a9(0xd0)],!![]),window[a9(0xb0)]('pointerup',this[a9(0xdc)],!![]),window[a9(0xb0)](a9(0xac),this['_windowDragPointerCancelHandler'],!![]),window[a9(0xb0)]('blur',this[a9(0x81)]);}[q(0x95)](){const aa=q;window[aa(0xcd)]('pointerup',this['_windowPointerUpHandler'],!![]),window[aa(0xcd)](aa(0xac),this['_windowPointerCancelHandler'],!![]),window[aa(0xcd)]('blur',this['_windowBlurHandler']);}[q(0xf7)](){const ab=q;window[ab(0xcd)]('pointermove',this['_windowDragPointerMoveHandler'],!![]),window[ab(0xcd)](ab(0x9a),this[ab(0xdc)],!![]),window['removeEventListener'](ab(0xac),this['_windowDragPointerCancelHandler'],!![]),window[ab(0xcd)](ab(0x73),this['_windowDragBlurHandler']);}[q(0xea)](c){const ac=q,d=Math[ac(0x106)](c),e=Math['min'](d,0x14)/0x5,f=Math['max'](Math[ac(0x80)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math[ac(0xb9)](e+f+g);return Math[ac(0xe0)](c)*h;}[q(0xf1)](c){const ad=q;return resolveNumericStyleInputStep(this[ad(0xc0)],this['_step'],c);}['_getInteractiveStepValue'](c,d,e){const ae=q,f=e??this[ae(0xf2)],g=this[ae(0xb6)](c);if(!Number['isFinite'](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math['round'](i),k=Math[ae(0x106)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ae(0xee)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this[ae(0xb6)](this[ae(0x99)](m,f));}[q(0x87)](c,d){const af=q,e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this[af(0xf9)](e));}['_roundToStepPrecision'](c,d){const ag=q,e=this['_getStepPrecision'](d),f=0xa**e;return Math[ag(0x100)](c*f)/f;}[q(0xf9)](c){const ah=q,d=(''+(c??this[ah(0xf2)]))[ah(0x7e)]();if(d[ah(0xe2)]('e-')){const [f,g]=d[ah(0xdf)]('e-'),h=Number(g),i=f['includes']('.')?f[ah(0xb2)]-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ah(0xb2)]-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const ai=q,c=this[ai(0x98)]??this[ai(0x105)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[ai(0x7d)](c);if(d!=null)return this['_commitValue'](d),this[ai(0xa7)]();return this['_applyNumericValue'](this[ai(0xa5)],c),this[ai(0xa7)]();}[q(0xa7)](){const aj=q;return this[aj(0xa3)]['selectedOptions'][aj(0x82)](0x0)?.['dataset'][aj(0xc6)]==='unit';}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const ak=q;let d=c;if(this[ak(0x10d)]!=null)d=Math['max'](this['_min'],d);if(this['_max']!=null)d=Math['min'](this[ak(0x85)],d);return d;}}function a(){const al=['unit','_detachStepperWindowListeners','input','_allowCustomValue','_lastNumericUnit','_roundToStepPrecision','pointerup','fixedValues','_restoreCachedInititalValues','Units','_fixedValues','_finishPreviewSession','_preferCustomMode','_windowBlurHandler','_attachDragWindowListeners','_select','_startPreviewSession','_lastNumericValue','optgroup','_isSelectedUnitMode','pointermove','_finishStepperInteraction','_stepperRepeatTimeout','selectedUnit','pointercancel','_measure','_normalizeOptionValues','_finishDragInteractionForPointerEvent','addEventListener','_applyNumericValue','length','unitSteps','_getDomElement','inputVisible','_clampNumericValue','option[value=\x22\x22]','none','trunc','offsetWidth','_handleWindowStepperPointerEnd','_attachStepperWindowListeners','_getInteractiveStepValue','pointerId','_applySelectedMode','_unitSteps','dataset','createElement','disabled','Values','keydown','kind','style','_finishDragInteraction','empty','units','_unitValueConverter','replaceChildren','removeEventListener','_createCustomDisplayState','2234596UrSzwG','_windowDragPointerMoveHandler','_previewNumericValue','2JZSUSA','_value','1953RNoWkg','_previewStartValue','_applyTypedValue','inputEnabled','12372060FjBvob','isNaN','pointerdown','_input','_windowDragPointerUpHandler','_dragStartNumericValue','_decreaseButton','split','sign','allowCustomValue','includes','readOnly','text','_handlePointerDown','_createOption','_stopStepperRepeat','_dragStartY','clientY','_calculateDraggedStepCount','_handleStepperPointerDown','_stepperPointerId','69644keQfPT','ceil','inputValue','max','_getEffectiveStep','_step','_handleWindowDragPointerMove','valueChanged','appendChild','13760OkvOTT','_detachDragWindowListeners','_previewChanged','_getStepPrecision','_updateValue','_scrubberButton','_readEditableNumericValue','69sgXNup','numberText','scrubber','round','_commitValue','step','emit','ready','_units','abs','_displayValueLock','2488878oqkwTC','label','width','_applyStepPreview','display','_min','querySelector','blur','_windowPointerCancelHandler','isFinite','6018905NlJLYU','template','change','fixed','valuePreviewChanged','_convertNumericValue','value','_resolveCurrentValueForUnit','toLowerCase','custom','min','_windowDragBlurHandler','item','__node-projects-custom-value__','_stepperDirection','_max','_setValue','_formatInteractiveNumericValue','selectValue','_stepperRepeatInterval','_dragPointerId','_increaseButton','preventDefault','options','selectedOptions','5426tysRuQ','_readOnly','focus','_switchToUnitModeForInteraction','_appliedDragSteps'];a=function(){return al;};return a();}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);