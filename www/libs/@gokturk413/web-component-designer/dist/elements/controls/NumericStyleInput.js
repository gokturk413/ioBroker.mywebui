const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0xfe))/0x1*(parseInt(p(0xd7))/0x2)+-parseInt(p(0x120))/0x3+parseInt(p(0x136))/0x4*(-parseInt(p(0x12b))/0x5)+-parseInt(p(0xee))/0x6+-parseInt(p(0xda))/0x7+-parseInt(p(0x15e))/0x8*(-parseInt(p(0x164))/0x9)+parseInt(p(0x16c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1de96));function b(c,d){c=c-0xd0;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']='';get[q(0x149)](){return this['_value'];}set[q(0x149)](c){const r=q;this[r(0x145)](c,![],![]);}[q(0x162)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[q(0x14c)]=new TypedEvent();[q(0x131)]=['px','%','pt'];get[q(0x15a)](){return[...this['_units']];}set[q(0x15a)](c){const s=q;this['_units']=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this['_units'][0x0]??this['_lastNumericUnit'],this[s(0x104)]();}['_fixedValues']=[];get['fixedValues'](){return[...this['_fixedValues']];}set['fixedValues'](c){this['_fixedValues']=this['_normalizeOptionValues'](c),this['_updateValue']();}['_step']=0x1;get[q(0xec)](){return this['_step'];}set['step'](c){const t=q;this[t(0x146)]=Number[t(0xdd)](c)&&c>0x0?c:0x1;}[q(0x122)]={};get['unitSteps'](){const u=q;return{...this[u(0x122)]};}set['unitSteps'](c){this['_unitSteps']=c??{};}['_min']=null;get[q(0xd9)](){const v=q;return this[v(0x10b)];}set[q(0xd9)](c){const w=q;this[w(0x10b)]=Number[w(0xdd)](c)?c:null;}['_max']=null;get['max'](){return this['_max'];}set['max'](c){const x=q;this[x(0xd1)]=Number['isFinite'](c)?c:null;}['_readOnly']=![];get['readOnly'](){return this['_readOnly'];}set[q(0x151)](c){const y=q;this[y(0xf1)]=c,this['_applyReadonlyState']();}get[q(0x132)](){const z=q;return this[z(0x135)]!=null;}[q(0x100)]=!![];get['allowCustomValue'](){return this['_allowCustomValue'];}set[q(0x147)](c){this['_allowCustomValue']=c,this['_updateValue']();}[q(0x129)];get['unitValueConverter'](){return this['_unitValueConverter'];}set[q(0xdf)](c){const A=q;this[A(0x129)]=c;}[q(0x124)];['_select'];[q(0x118)];['_scrubberButton'];[q(0x13a)];[q(0xd8)];[q(0xe5)]=0x0;['_lastNumericUnit']='px';[q(0xf6)]=null;['_dragStartY']=0x0;[q(0x11f)]=0x0;['_appliedDragSteps']=0x0;[q(0x135)]=null;['_previewChanged']=![];[q(0xe4)]=null;[q(0x12d)]=null;['_stepperDirection']=0x0;['_stepperRepeatTimeout']=null;[q(0xe9)]=null;[q(0x16a)]=c=>this['_handleWindowDragPointerMove'](c);[q(0x16b)]=c=>this[q(0x15d)](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x15d)](c,!![]);[q(0xd6)]=()=>this[q(0x114)](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x159)]=c=>this[q(0x109)](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);[q(0x134)]=![];constructor(){const B=q;super(),this[B(0x14f)](),this['_input']=this[B(0xf7)](B(0xdc)),this[B(0x113)]=this['_getDomElement'](B(0xde)),this[B(0x118)]=this[B(0xf7)](B(0x140)),this['_scrubberButton']=this[B(0xf7)](B(0x160)),this['_increaseButton']=this[B(0xf7)](B(0x14b)),this['_decreaseButton']=this['_getDomElement'](B(0x10e));}[q(0x128)](){const C=q;this['_parseAttributesToProperties'](),this[C(0x11e)](),this['_updateValue']();}['_wireEvents'](){const D=q;this[D(0x124)]['addEventListener']('change',()=>this['_applyTypedValue']()),this[D(0x124)][D(0x13b)](D(0x15b),c=>{const E=D;c[E(0x14d)]===E(0x158)&&(this['_applyTypedValue'](),this['_input'][E(0x133)]());}),this['_scrubberButton'][D(0x13b)]('pointerdown',c=>this[D(0x11a)](c)),this[D(0x113)]['addEventListener'](D(0x153),()=>this[D(0xd4)]()),this[D(0x13a)][D(0x13b)](D(0x121),c=>this['_handleStepperPointerDown'](c,0x1)),this['_decreaseButton']['addEventListener']('pointerdown',c=>this[D(0x11d)](c,-0x1));}['_handlePointerDown'](c){const F=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this[F(0x112)]())return;}this[F(0xf6)]=c['pointerId'],this['_dragStartY']=c[F(0x142)],this[F(0x11f)]=this['_readEditableNumericValue'](this['_select'][F(0x149)]),this['_appliedDragSteps']=0x0,this[F(0xe0)](),this[F(0xf8)]();try{this[F(0x167)][F(0xe6)](c[F(0xef)]);}catch{}c['preventDefault']();}[q(0xd0)](c){const G=q;if(this['_dragPointerId']!==c['pointerId']||!this['_isSelectedUnitMode']())return;const d=this[G(0xf3)](this['_dragStartY']-c[G(0x142)]);if(d===this['_appliedDragSteps'])return;this[G(0x107)]=d;const e=this[G(0x113)][G(0x149)],f=this['_getEffectiveStep'](e);this[G(0x10a)](this['_getInteractiveStepValue'](this[G(0x11f)],d,f),e,f),c['preventDefault']();}['_finishDragInteractionForPointerEvent'](c,d){const H=q;if(this[H(0xf6)]!==c['pointerId'])return;this['_finishDragInteraction'](d,c['pointerId']);}['_finishDragInteraction'](c,d){const I=q;if(this[I(0xf6)]==null)return;this[I(0xf6)]=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton'][I(0x156)](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this['_finishPreviewSession'](c);}['_handleStepperPointerDown'](c,d){const J=q;if(this[J(0xf1)])return;if(!this['_isSelectedUnitMode']()){if(!this[J(0x112)]())return;}this[J(0xff)](!![]),this['_stepperPointerId']=c[J(0xef)],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this['_startPreviewSession'](),this[J(0x14a)](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{const K=J;this[K(0xe9)]=window[K(0x13c)](()=>this[K(0x14a)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const L=q;if(this[L(0x12d)]!==c[L(0xef)])return;this['_finishStepperInteraction'](![]);}[q(0xff)](c){const M=q;if(this[M(0x12d)]==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this[M(0x15c)](),this['_stopStepperRepeat'](),this[M(0xdb)](c);}['_applySelectedMode'](){const N=q,c=this[N(0x113)]['selectedOptions']['item'](0x0);if(!c)return;const d=c[N(0x16d)][N(0x163)];if(d===N(0xea)){this['_commitValue'](c[N(0x149)]);return;}if(d==='custom'){this[N(0x134)]=!![],this['_updateValue'](),requestAnimationFrame(()=>{const O=N;this['_input']['focus'](),this[O(0x124)]['select']();});return;}const e=c['value'];this['_lastNumericUnit']=e,this[N(0x134)]=![];const f=parseNumericStyleInputValue(this[N(0x119)]);if(f[N(0x163)]==='numeric'){const i=this[N(0x11b)](f,e);this[N(0x108)](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f[N(0x163)]==='empty'){this['_updateValue'](),this['_input']['focus']();return;}const h=Number(this['_input']['value']);if(!Number['isNaN'](h)){this[N(0x168)](h,e);return;}this[N(0x108)](''),this[N(0x124)]['focus']();}[q(0x130)](){const P=q,c=this['_select'][P(0x169)]['item'](0x0),d=c?.['dataset']['kind'];if(d==='fixed')return;if(d==='custom'){this[P(0x108)](this['_input']['value']);return;}const e=this['_input'][P(0x149)]?.[P(0x13d)]()??'';if(!e){this[P(0x108)]('');return;}const f=Number(e);if(!Number[P(0x139)](f))this[P(0xe5)]=this[P(0xfd)](f);this[P(0x108)](combineNumericStyleInputValue(e,c?.[P(0x149)]??''));}[q(0x104)](){const Q=q;if(!this['_input']||!this['_select'])return;if(this[Q(0x135)]==null)this[Q(0x13f)]();const c=this[Q(0x123)](this[Q(0xe4)]??this[Q(0x119)]);this['_input']['value']=c[Q(0xf9)],this['_input']['style'][Q(0xed)]=c[Q(0x165)]?'':'none',this[Q(0x124)][Q(0x103)]=this[Q(0xf1)]||!c['inputEnabled'],this['_select']['value']=c[Q(0x102)],this[Q(0x105)]();if(c['mode']===Q(0x150)&&c[Q(0xd2)]!=null)this['_lastNumericUnit']=c[Q(0xd2)];if(c[Q(0x116)]===Q(0x150)&&c[Q(0xf9)]!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this[Q(0xe5)]=this[Q(0xfd)](f);}const d=this['_units'][Q(0x15f)]>0x0,e=this['_readOnly']||(!d||c['mode']==='custom');this['_scrubberButton']['disabled']=e,this['_increaseButton']['disabled']=e,this['_decreaseButton']['disabled']=e,this['_applyReadonlyState']();}[q(0x123)](c){const R=q,d=parseNumericStyleInputValue(c);if(d['kind']===R(0x12c)){if(this[R(0x134)])return this[R(0x126)](d['numberText']);if(d[R(0x150)]&&this['_units'][R(0x15f)]&&!this[R(0x131)][R(0x12f)](d[R(0x150)]))return this[R(0x126)](c);const f=resolveNumericStyleInputSelectedUnit(d[R(0x150)],this[R(0x166)],this[R(0x131)])??'';return{'mode':'unit','inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[R(0x131)]['includes'](f)?f:this['_select']['value']||customOptionValue,'selectedUnit':f};}if(d[R(0x163)]==='text'){if(!this['_preferCustomMode']&&this[R(0x161)]['includes'](d[R(0x10d)]))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this['_createCustomDisplayState'](d['text']);}if(this[R(0x134)])return this[R(0x126)]('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this['_units'][R(0x12f)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[R(0x126)]('');}[q(0x126)](c){const S=q;if(!this['_allowCustomValue']&&this[S(0x131)]['length'])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[S(0x131)][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x13f)](){const T=q,c=this[T(0x113)][T(0x149)];this['_select'][T(0x11c)]();if(this['_units']['length']){const d=document[T(0xfb)]('optgroup');d['label']=T(0xf2);for(const e of this[T(0x131)])d[T(0x127)](this[T(0xf4)](getNumericStyleInputUnitLabel(e),e,'unit'));this[T(0x113)]['appendChild'](d);}if(this['_fixedValues']['length']){const f=document['createElement'](T(0x106));f[T(0xe7)]='Values';for(const g of this['_fixedValues'])f['appendChild'](this['_createOption'](g,g,T(0xea)));this['_select'][T(0x127)](f);}if(this[T(0x100)]||this[T(0x113)][T(0x111)]['length']===0x0)this[T(0x113)][T(0x127)](this['_createOption'](T(0x13e),customOptionValue,T(0x13e)));if(c!=='')this['_select'][T(0x149)]=c;else{if(this[T(0x113)][T(0x115)]('option[value=\x22\x22]'))this['_select'][T(0x149)]='';}}['_createOption'](c,d,e){const U=q,f=document[U(0xfb)](U(0x110));return f['text']=c,f[U(0x149)]=d,f[U(0x16d)][U(0x163)]=e,f;}['_autoSizeSelect'](){const V=q;if(!this['_measure']||!this[V(0x113)])return;const c=this['_select']['selectedOptions']['item'](0x0);this['_measure']['textContent']=c?.['text']??'';const d=this[V(0x118)]['offsetWidth'];d>0x0?this['_select']['style']['width']=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const W=q;if(!this[W(0x124)]||!this['_select'])return;this[W(0x124)][W(0x151)]=this[W(0xf1)],this['_select'][W(0x103)]=this[W(0xf1)];}['_convertNumericValue'](c,d){const X=q;if(d==null)return this['_value'];const e=c[X(0x150)],f=this[X(0x129)]?.({'value':c[X(0x149)],'numberText':c[X(0x154)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const Y=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number[Y(0xe3)],'numberText':'','rawValue':this[Y(0x119)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}[q(0x12e)](c){const Z=q,d=parseNumericStyleInputValue(this[Z(0x119)]);if(d['kind']==='numeric'){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f[Z(0x163)]==='numeric')return f['value'];return d['value'];}if(this[Z(0x124)]['value']?.[Z(0x13d)]()){const g=Number(this['_input'][Z(0x149)]);if(!Number[Z(0x139)](g))return g;}return this['_lastNumericValue'];}[q(0x168)](c,d){this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}['_previewNumericValue'](c,d,e){const a0=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d;const f=e??this[a0(0xf0)](d);this[a0(0x145)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a0(0xe5)],f),d),![],!![]);}[q(0x108)](c){const a1=q;this[a1(0x145)](c,!![],![]);}['_setValue'](c,d,e){const a2=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this['_value'];this[a2(0x119)]=f;if(e)this['_displayValueLock']=f;else{if(this[a2(0xe4)]!=null){if(f===this[a2(0xe4)]||f!==g)this[a2(0xe4)]=null;}}this[a2(0x134)]=![],this[a2(0x104)]();if(g!==f){e&&(this['_previewChanged']=!![],this[a2(0x12a)]['emit']({'newValue':f,'oldValue':g}));if(d)this[a2(0x162)][a2(0xd3)]({'newValue':f,'oldValue':g});}}[q(0xe0)](){const a3=q;this[a3(0x135)]==null&&(this['_previewStartValue']=this[a3(0x119)],this[a3(0x125)]=![]);}['_finishPreviewSession'](c){const a4=q;if(this[a4(0x135)]==null)return;const d=this['_previewStartValue'],e=this['_displayValueLock']??this['_value'],f=this[a4(0x125)]&&d!==e,g=c||!f;this[a4(0x135)]=null,this['_previewChanged']=![],g?(this[a4(0xe4)]=null,this[a4(0x119)]=d,this[a4(0x104)]()):(this['_displayValueLock']=e,this['_updateValue']()),this[a4(0x14c)][a4(0xd3)]({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a5=q,d=this['_select'][a5(0x149)],e=this[a5(0xf0)](d);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0xf5)](){const a6=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this[a6(0x141)]=null),this['_stepperRepeatInterval']!=null&&(window[a6(0x152)](this[a6(0xe9)]),this['_stepperRepeatInterval']=null);}['_attachStepperWindowListeners'](){const a7=q;window['addEventListener']('pointerup',this['_windowPointerUpHandler'],!![]),window[a7(0x13b)](a7(0x10f),this[a7(0x159)],!![]),window['addEventListener'](a7(0x133),this[a7(0x10c)]);}['_attachDragWindowListeners'](){const a8=q;window['addEventListener']('pointermove',this['_windowDragPointerMoveHandler'],!![]),window[a8(0x13b)](a8(0x144),this[a8(0x16b)],!![]),window['addEventListener']('pointercancel',this[a8(0xfa)],!![]),window['addEventListener'](a8(0x133),this['_windowDragBlurHandler']);}['_detachStepperWindowListeners'](){const a9=q;window[a9(0x148)]('pointerup',this['_windowPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this[a9(0x159)],!![]),window[a9(0x148)]('blur',this['_windowBlurHandler']);}[q(0x137)](){const aa=q;window['removeEventListener'](aa(0x138),this['_windowDragPointerMoveHandler'],!![]),window['removeEventListener'](aa(0x144),this['_windowDragPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window[aa(0x148)](aa(0x133),this['_windowDragBlurHandler']);}[q(0xf3)](c){const ab=q,d=Math[ab(0xd5)](c),e=Math['min'](d,0x14)/0x5,f=Math[ab(0xeb)](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[ab(0xeb)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[ab(0xe1)](c)*h;}['_getEffectiveStep'](c){const ac=q;return resolveNumericStyleInputStep(this[ac(0x122)],this[ac(0x146)],c);}['_getInteractiveStepValue'](c,d,e){const ad=q,f=e??this[ad(0x146)],g=this['_clampNumericValue'](c);if(!Number[ad(0xdd)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ad(0x155)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ad(0x157)](i);l=o+d+0x1;}const m=h+l*f;return this[ad(0xfd)](this['_roundToStepPrecision'](m,f));}['_formatInteractiveNumericValue'](c,d){const e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}['_roundToStepPrecision'](c,d){const ae=q,e=this[ae(0x101)](d),f=0xa**e;return Math[ae(0xfc)](c*f)/f;}['_getStepPrecision'](c){const af=q,d=(''+(c??this['_step']))[af(0xe8)]();if(d['includes']('e-')){const [f,g]=d[af(0x14e)]('e-'),h=Number(g),i=f[af(0x12f)]('.')?f[af(0x15f)]-f[af(0x143)]('.')-0x1:0x0;return h+i;}const e=d[af(0x143)]('.');return e>=0x0?d['length']-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const ag=q,c=this[ag(0x166)]??this[ag(0x131)][0x0];if(c==null)return![];this[ag(0x134)]=![];const d=this[ag(0xe2)](c);if(d!=null)return this[ag(0x108)](d),this[ag(0x117)]();return this['_applyNumericValue'](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const ah=q;return this['_select'][ah(0x169)]['item'](0x0)?.['dataset']['kind']===ah(0x150);}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0xfd)](c){let d=c;if(this['_min']!=null)d=Math['max'](this['_min'],d);if(this['_max']!=null)d=Math['min'](this['_max'],d);return d;}}function a(){const ai=['valuePreviewChanged','55WJhneb','numeric','_stepperPointerId','_readEditableNumericValue','includes','_applyTypedValue','_units','isInPreview','blur','_preferCustomMode','_previewStartValue','85908kblsGO','_detachDragWindowListeners','pointermove','isNaN','_increaseButton','addEventListener','setInterval','trim','custom','_renderSelectOptions','measure','_stepperRepeatTimeout','clientY','indexOf','pointerup','_setValue','_step','allowCustomValue','removeEventListener','value','_applyStepPreview','increase','valuePreviewFinished','key','split','_restoreCachedInititalValues','unit','readOnly','clearInterval','change','numberText','ceil','hasPointerCapture','floor','Enter','_windowPointerCancelHandler','units','keydown','_detachStepperWindowListeners','_finishDragInteractionForPointerEvent','245944dnyzbN','length','scrubber','_fixedValues','valueChanged','kind','9BuZsel','inputVisible','_lastNumericUnit','_scrubberButton','_applyNumericValue','selectedOptions','_windowDragPointerMoveHandler','_windowDragPointerUpHandler','8279980TKFjBe','dataset','_handleWindowDragPointerMove','_max','selectedUnit','emit','_applySelectedMode','abs','_windowDragBlurHandler','518ndmEwH','_decreaseButton','min','592424CLnPbG','_finishPreviewSession','input','isFinite','select','unitValueConverter','_startPreviewSession','sign','_resolveCurrentValueForUnit','NaN','_displayValueLock','_lastNumericValue','setPointerCapture','label','toLowerCase','_stepperRepeatInterval','fixed','max','step','display','1415046WePJCn','pointerId','_getEffectiveStep','_readOnly','Units','_calculateDraggedStepCount','_createOption','_stopStepperRepeat','_dragPointerId','_getDomElement','_attachDragWindowListeners','inputValue','_windowDragPointerCancelHandler','createElement','round','_clampNumericValue','611XcFRwp','_finishStepperInteraction','_allowCustomValue','_getStepPrecision','selectValue','disabled','_updateValue','_autoSizeSelect','optgroup','_appliedDragSteps','_commitValue','_handleWindowStepperPointerEnd','_previewNumericValue','_min','_windowBlurHandler','text','decrease','pointercancel','option','options','_switchToUnitModeForInteraction','_select','_finishDragInteraction','querySelector','mode','_isSelectedUnitMode','_measure','_value','_handlePointerDown','_convertNumericValue','replaceChildren','_handleStepperPointerDown','_wireEvents','_dragStartNumericValue','63762DEkMoF','pointerdown','_unitSteps','_getDisplayState','_input','_previewChanged','_createCustomDisplayState','appendChild','ready','_unitValueConverter'];a=function(){return ai;};return a();}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);