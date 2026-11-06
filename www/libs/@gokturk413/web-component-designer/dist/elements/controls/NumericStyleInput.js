const q=b;function b(c,d){c=c-0xb5;const e=a();let f=e[c];return f;}(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0xfc))/0x1+-parseInt(p(0xcf))/0x2*(parseInt(p(0x116))/0x3)+-parseInt(p(0xd9))/0x4+parseInt(p(0x13f))/0x5*(parseInt(p(0xb6))/0x6)+parseInt(p(0x147))/0x7+-parseInt(p(0x10d))/0x8*(-parseInt(p(0x13e))/0x9)+parseInt(p(0x110))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb04bd));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';function a(){const ak=['5opUAxT','select','_getEffectiveStep','_isSelectedUnitMode','pointercancel','_appliedDragSteps','_max','_getInteractiveStepValue','3911670SCWOWW','_createCustomDisplayState','1103994JTioWp','_finishStepperInteraction','_clampNumericValue','unitSteps','_stepperRepeatTimeout','_roundToStepPrecision','_readOnly','_step','_switchToUnitModeForInteraction','keydown','_applyStepPreview','preventDefault','_applyTypedValue','round','_formatInteractiveNumericValue','_getDisplayState','numeric','emit','_finishDragInteraction','fixed','selectedOptions','_detachStepperWindowListeners','valuePreviewFinished','measure','_fixedValues','1371962mcWprJ','clientY','_stopStepperRepeat','decrease','hasPointerCapture','_readEditableNumericValue','inputEnabled','_windowBlurHandler','_applyReadonlyState','_select','3637028tcIQUu','pointermove','addEventListener','_autoSizeSelect','_dragStartNumericValue','_input','option','replaceChildren','_value','_parseAttributesToProperties','custom','_updateValue','_finishPreviewSession','_previewStartValue','max','sign','pointerId','_convertNumericValue','createElement','allowCustomValue','unit','appendChild','focus','abs','_windowDragPointerCancelHandler','includes','querySelector','_units','setPointerCapture','label','_increaseButton','length','min','selectValue','_previewChanged','1126046ZrThkA','_unitValueConverter','_decreaseButton','_attachStepperWindowListeners','_dragStartY','item','trim','_finishDragInteractionForPointerEvent','unitValueConverter','_calculateDraggedStepCount','_stepperDirection','_detachDragWindowListeners','selectedUnit','_stepperRepeatInterval','Values','ready','_unitSteps','1893088kUhWWF','_attachDragWindowListeners','isNaN','22273120uREcGm','removeEventListener','dataset','value','textContent','step','3zsqziP','_measure','isFinite','_displayValueLock','_windowPointerCancelHandler','ceil','pointerup','disabled','change','_getDomElement','_setValue','_min','inputValue','_handleWindowStepperPointerEnd','mode','pointerdown','_scrubberButton','numberText','valuePreviewChanged','_windowDragPointerMoveHandler','style','_lastNumericUnit','releasePointerCapture','_preferCustomMode','_lastNumericValue','_createOption','blur','text','fixedValues','_stepperPointerId','_normalizeOptionValues','kind','_windowDragPointerUpHandler','_applySelectedMode','_commitValue','_dragPointerId','_applyNumericValue','_previewNumericValue','units','isInPreview','18UmIHwn'];a=function(){return ak;};return a();}export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x12a)]=css`
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
  `;[q(0xe1)]='';get['value'](){return this['_value'];}set[q(0x113)](c){this['_setValue'](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x128)]=new TypedEvent();[q(0xcc)]=new TypedEvent();['_units']=['px','%','pt'];get[q(0x13c)](){const r=q;return[...this[r(0xf4)]];}set[q(0x13c)](c){const s=q;this['_units']=this[s(0x134)](c),this['_lastNumericUnit']=this[s(0xf4)][0x0]??this[s(0x12b)],this['_updateValue']();}[q(0xce)]=[];get[q(0x132)](){return[...this['_fixedValues']];}set[q(0x132)](c){const t=q;this['_fixedValues']=this[t(0x134)](c),this[t(0xe4)]();}['_step']=0x1;get[q(0x115)](){const u=q;return this[u(0xbd)];}set['step'](c){const v=q;this[v(0xbd)]=Number[v(0x118)](c)&&c>0x0?c:0x1;}[q(0x10c)]={};get[q(0xb9)](){const w=q;return{...this[w(0x10c)]};}set['unitSteps'](c){this['_unitSteps']=c??{};}['_min']=null;get[q(0xf9)](){const x=q;return this[x(0x121)];}set['min'](c){this['_min']=Number['isFinite'](c)?c:null;}[q(0x145)]=null;get[q(0xe7)](){return this['_max'];}set['max'](c){const y=q;this[y(0x145)]=Number[y(0x118)](c)?c:null;}['_readOnly']=![];get['readOnly'](){return this['_readOnly'];}set['readOnly'](c){const z=q;this[z(0xbc)]=c,this['_applyReadonlyState']();}get[q(0x13d)](){const A=q;return this[A(0xe6)]!=null;}['_allowCustomValue']=!![];get[q(0xec)](){return this['_allowCustomValue'];}set['allowCustomValue'](c){this['_allowCustomValue']=c,this['_updateValue']();}['_unitValueConverter'];get[q(0x104)](){return this['_unitValueConverter'];}set[q(0x104)](c){const B=q;this[B(0xfd)]=c;}[q(0xde)];['_select'];['_measure'];['_scrubberButton'];[q(0xf7)];['_decreaseButton'];[q(0x12e)]=0x0;[q(0x12b)]='px';['_dragPointerId']=null;[q(0x100)]=0x0;['_dragStartNumericValue']=0x0;[q(0x144)]=0x0;[q(0xe6)]=null;['_previewChanged']=![];['_displayValueLock']=null;[q(0x133)]=null;[q(0x106)]=0x0;[q(0xba)]=null;[q(0x109)]=null;[q(0x129)]=c=>this['_handleWindowDragPointerMove'](c);[q(0x136)]=c=>this[q(0x103)](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);['_windowDragBlurHandler']=()=>this[q(0xc8)](![]);['_windowPointerUpHandler']=c=>this[q(0x123)](c);[q(0x11a)]=c=>this[q(0x123)](c);['_windowBlurHandler']=()=>this[q(0xb7)](![]);[q(0x12d)]=![];constructor(){const C=q;super(),this['_restoreCachedInititalValues'](),this['_input']=this[C(0x11f)]('input'),this['_select']=this['_getDomElement']('select'),this[C(0x117)]=this[C(0x11f)](C(0xcd)),this[C(0x126)]=this['_getDomElement']('scrubber'),this[C(0xf7)]=this['_getDomElement']('increase'),this[C(0xfe)]=this[C(0x11f)](C(0xd2));}[q(0x10b)](){const D=q;this[D(0xe2)](),this['_wireEvents'](),this['_updateValue']();}['_wireEvents'](){const E=q;this[E(0xde)]['addEventListener'](E(0x11e),()=>this[E(0xc2)]()),this[E(0xde)]['addEventListener'](E(0xbf),c=>{c['key']==='Enter'&&(this['_applyTypedValue'](),this['_input']['blur']());}),this[E(0x126)][E(0xdb)](E(0x125),c=>this['_handlePointerDown'](c)),this['_select']['addEventListener'](E(0x11e),()=>this[E(0x137)]()),this['_increaseButton']['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,0x1)),this[E(0xfe)][E(0xdb)]('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const F=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this[F(0xbe)]())return;}this['_dragPointerId']=c[F(0xe9)],this[F(0x100)]=c[F(0xd0)],this[F(0xdd)]=this['_readEditableNumericValue'](this['_select']['value']),this[F(0x144)]=0x0,this['_startPreviewSession'](),this[F(0x10e)]();try{this['_scrubberButton'][F(0xf5)](c['pointerId']);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const G=q;if(this['_dragPointerId']!==c[G(0xe9)]||!this[G(0x142)]())return;const d=this['_calculateDraggedStepCount'](this[G(0x100)]-c[G(0xd0)]);if(d===this[G(0x144)])return;this['_appliedDragSteps']=d;const e=this['_select']['value'],f=this[G(0x141)](e);this[G(0x13b)](this[G(0x146)](this[G(0xdd)],d,f),e,f),c[G(0xc1)]();}['_finishDragInteractionForPointerEvent'](c,d){const H=q;if(this['_dragPointerId']!==c['pointerId'])return;this[H(0xc8)](d,c[H(0xe9)]);}['_finishDragInteraction'](c,d){const I=q;if(this[I(0x139)]==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton'][I(0xd3)](d))this['_scrubberButton'][I(0x12c)](d);}catch{}this['_finishPreviewSession'](c);}['_handleStepperPointerDown'](c,d){const J=q;if(this[J(0xbc)])return;if(!this[J(0x142)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[J(0xb7)](!![]),this[J(0x133)]=c['pointerId'],this['_stepperDirection']=d,this[J(0xff)](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this[J(0xba)]=window['setTimeout'](()=>{const K=J;this[K(0x109)]=window['setInterval'](()=>this[K(0xc0)](this[K(0x106)]),0x32);},0x15e),c['preventDefault']();}[q(0x123)](c){const L=q;if(this[L(0x133)]!==c[L(0xe9)])return;this['_finishStepperInteraction'](![]);}[q(0xb7)](c){const M=q;if(this['_stepperPointerId']==null)return;this[M(0x133)]=null,this[M(0x106)]=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const N=q,c=this[N(0xd8)][N(0xca)][N(0x101)](0x0);if(!c)return;const d=c[N(0x112)]['kind'];if(d===N(0xc9)){this[N(0x138)](c[N(0x113)]);return;}if(d==='custom'){this[N(0x12d)]=!![],this['_updateValue'](),requestAnimationFrame(()=>{const O=N;this['_input']['focus'](),this[O(0xde)][O(0x140)]();});return;}const e=c['value'];this[N(0x12b)]=e,this[N(0x12d)]=![];const f=parseNumericStyleInputValue(this['_value']);if(f[N(0x135)]===N(0xc6)){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f['kind']==='empty'){this[N(0xe4)](),this['_input'][N(0xef)]();return;}const h=Number(this['_input'][N(0x113)]);if(!Number['isNaN'](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this['_input']['focus']();}[q(0xc2)](){const P=q,c=this['_select']['selectedOptions']['item'](0x0),d=c?.[P(0x112)]['kind'];if(d==='fixed')return;if(d==='custom'){this['_commitValue'](this['_input'][P(0x113)]);return;}const e=this['_input']['value']?.['trim']()??'';if(!e){this[P(0x138)]('');return;}const f=Number(e);if(!Number[P(0x10f)](f))this['_lastNumericValue']=this[P(0xb8)](f);this[P(0x138)](combineNumericStyleInputValue(e,c?.[P(0x113)]??''));}['_updateValue'](){const Q=q;if(!this['_input']||!this['_select'])return;if(this['_previewStartValue']==null)this['_renderSelectOptions']();const c=this[Q(0xc5)](this['_displayValueLock']??this[Q(0xe1)]);this['_input'][Q(0x113)]=c[Q(0x122)],this['_input'][Q(0x12a)]['display']=c['inputVisible']?'':'none',this['_input']['disabled']=this[Q(0xbc)]||!c[Q(0xd5)],this['_select']['value']=c[Q(0xfa)],this['_autoSizeSelect']();if(c[Q(0x124)]==='unit'&&c['selectedUnit']!=null)this['_lastNumericUnit']=c[Q(0x108)];if(c['mode']===Q(0xed)&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this[Q(0x12e)]=this[Q(0xb8)](f);}const d=this['_units']['length']>0x0,e=this['_readOnly']||(!d||c[Q(0x124)]===Q(0xe3));this['_scrubberButton'][Q(0x11d)]=e,this['_increaseButton']['disabled']=e,this[Q(0xfe)]['disabled']=e,this['_applyReadonlyState']();}[q(0xc5)](c){const R=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this['_preferCustomMode'])return this[R(0xb5)](d[R(0x127)]);if(d['unit']&&this['_units'][R(0xf8)]&&!this['_units'][R(0xf2)](d[R(0xed)]))return this[R(0xb5)](c);const f=resolveNumericStyleInputSelectedUnit(d[R(0xed)],this[R(0x12b)],this[R(0xf4)])??'';return{'mode':R(0xed),'inputValue':d[R(0x127)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][R(0xf2)](f)?f:this[R(0xd8)][R(0x113)]||customOptionValue,'selectedUnit':f};}if(d['kind']===R(0x131)){if(!this[R(0x12d)]&&this[R(0xce)][R(0xf2)](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[R(0x131)]};return this['_createCustomDisplayState'](d['text']);}if(this['_preferCustomMode'])return this['_createCustomDisplayState']('');const e=this[R(0x12b)]??this['_units'][0x0]??'';if(this['_units'][R(0xf2)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[R(0xb5)]('');}['_createCustomDisplayState'](c){const S=q;if(!this['_allowCustomValue']&&this['_units'][S(0xf8)])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const T=q,c=this[T(0xd8)][T(0x113)];this[T(0xd8)][T(0xe0)]();if(this[T(0xf4)]['length']){const d=document['createElement']('optgroup');d['label']='Units';for(const e of this[T(0xf4)])d[T(0xee)](this[T(0x12f)](getNumericStyleInputUnitLabel(e),e,T(0xed)));this['_select']['appendChild'](d);}if(this['_fixedValues'][T(0xf8)]){const f=document[T(0xeb)]('optgroup');f[T(0xf6)]=T(0x10a);for(const g of this['_fixedValues'])f['appendChild'](this['_createOption'](g,g,T(0xc9)));this[T(0xd8)][T(0xee)](f);}if(this['_allowCustomValue']||this['_select']['options']['length']===0x0)this[T(0xd8)]['appendChild'](this[T(0x12f)](T(0xe3),customOptionValue,T(0xe3)));if(c!=='')this[T(0xd8)]['value']=c;else{if(this['_select'][T(0xf3)]('option[value=\x22\x22]'))this['_select']['value']='';}}[q(0x12f)](c,d,e){const U=q,f=document[U(0xeb)](U(0xdf));return f[U(0x131)]=c,f[U(0x113)]=d,f[U(0x112)][U(0x135)]=e,f;}['_autoSizeSelect'](){const V=q;if(!this[V(0x117)]||!this[V(0xd8)])return;const c=this['_select']['selectedOptions'][V(0x101)](0x0);this[V(0x117)][V(0x114)]=c?.[V(0x131)]??'';const d=this['_measure']['offsetWidth'];d>0x0?this['_select'][V(0x12a)]['width']=d+0x11+'px':requestAnimationFrame(()=>this[V(0xdc)]());}[q(0xd7)](){const W=q;if(!this[W(0xde)]||!this['_select'])return;this[W(0xde)]['readOnly']=this[W(0xbc)],this[W(0xd8)]['disabled']=this[W(0xbc)];}['_convertNumericValue'](c,d){const X=q;if(d==null)return this[X(0xe1)];const e=c[X(0xed)],f=this[X(0xfd)]?.({'value':c[X(0x113)],'numberText':c['numberText'],'rawValue':this[X(0xe1)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[X(0x127)],d);}['_resolveCurrentValueForUnit'](c){const Y=q;if(c==null)return null;const d=this[Y(0xfd)]?.({'value':Number['NaN'],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.[Y(0x102)]();return d?d:null;}[q(0xd4)](c){const Z=q,d=parseNumericStyleInputValue(this[Z(0xe1)]);if(d[Z(0x135)]===Z(0xc6)){const e=this[Z(0xea)](d,c),f=parseNumericStyleInputValue(e);if(f[Z(0x135)]===Z(0xc6))return f['value'];return d['value'];}if(this[Z(0xde)]['value']?.[Z(0x102)]()){const g=Number(this['_input']['value']);if(!Number[Z(0x10f)](g))return g;}return this['_lastNumericValue'];}[q(0x13a)](c,d){const a0=q;this['_lastNumericValue']=this[a0(0xb8)](c),this['_lastNumericUnit']=d,this[a0(0x138)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a0(0x12e)]),d));}[q(0x13b)](c,d,e){const a1=q;this[a1(0x12e)]=this[a1(0xb8)](c),this[a1(0x12b)]=d;const f=e??this[a1(0x141)](d);this[a1(0x120)](combineNumericStyleInputValue(this[a1(0xc4)](this[a1(0x12e)],f),d),![],!![]);}[q(0x138)](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a2=q,f=c??'';if(!d&&!e&&this[a2(0xe6)]!=null)return;const g=this[a2(0xe1)];this[a2(0xe1)]=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this['_displayValueLock']||f!==g)this['_displayValueLock']=null;}}this[a2(0x12d)]=![],this['_updateValue']();if(g!==f){e&&(this['_previewChanged']=!![],this[a2(0x128)][a2(0xc7)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a3=q;this['_previewStartValue']==null&&(this['_previewStartValue']=this['_value'],this[a3(0xfb)]=![]);}[q(0xe5)](c){const a4=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this[a4(0x119)]??this['_value'],f=this['_previewChanged']&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this['_displayValueLock']=null,this[a4(0xe1)]=d,this[a4(0xe4)]()):(this[a4(0x119)]=e,this[a4(0xe4)]()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a5=q,d=this[a5(0xd8)][a5(0x113)],e=this[a5(0x141)](d);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0xd1)](){const a6=q;this[a6(0xba)]!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this[a6(0xba)]=null),this[a6(0x109)]!=null&&(window['clearInterval'](this[a6(0x109)]),this['_stepperRepeatInterval']=null);}[q(0xff)](){const a7=q;window[a7(0xdb)](a7(0x11c),this['_windowPointerUpHandler'],!![]),window['addEventListener'](a7(0x143),this[a7(0x11a)],!![]),window[a7(0xdb)]('blur',this['_windowBlurHandler']);}['_attachDragWindowListeners'](){const a8=q;window[a8(0xdb)](a8(0xda),this['_windowDragPointerMoveHandler'],!![]),window['addEventListener']('pointerup',this[a8(0x136)],!![]),window[a8(0xdb)](a8(0x143),this[a8(0xf1)],!![]),window[a8(0xdb)](a8(0x130),this['_windowDragBlurHandler']);}[q(0xcb)](){const a9=q;window['removeEventListener'](a9(0x11c),this['_windowPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this[a9(0x11a)],!![]),window[a9(0x111)]('blur',this[a9(0xd6)]);}[q(0x107)](){const aa=q;window['removeEventListener'](aa(0xda),this[aa(0x129)],!![]),window[aa(0x111)]('pointerup',this['_windowDragPointerUpHandler'],!![]),window[aa(0x111)](aa(0x143),this['_windowDragPointerCancelHandler'],!![]),window[aa(0x111)](aa(0x130),this['_windowDragBlurHandler']);}[q(0x105)](c){const ab=q,d=Math[ab(0xf0)](c),e=Math[ab(0xf9)](d,0x14)/0x5,f=Math['max'](Math[ab(0xf9)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[ab(0xe8)](c)*h;}[q(0x141)](c){const ac=q;return resolveNumericStyleInputStep(this[ac(0x10c)],this['_step'],c);}['_getInteractiveStepValue'](c,d,e){const ad=q,f=e??this[ad(0xbd)],g=this[ad(0xb8)](c);if(!Number[ad(0x118)](g)||!Number[ad(0x118)](d)||d===0x0)return g;const h=this[ad(0x121)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ad(0x11b)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this[ad(0xbb)](m,f));}['_formatInteractiveNumericValue'](c,d){const ae=q,e=d??this[ae(0xbd)];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}[q(0xbb)](c,d){const af=q,e=this['_getStepPrecision'](d),f=0xa**e;return Math[af(0xc3)](c*f)/f;}['_getStepPrecision'](c){const ag=q,d=(''+(c??this[ag(0xbd)]))['toLowerCase']();if(d[ag(0xf2)]('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f['includes']('.')?f[ag(0xf8)]-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ag(0xf8)]-e-0x1:0x0;}[q(0xbe)](){const ah=q,c=this['_lastNumericUnit']??this[ah(0xf4)][0x0];if(c==null)return![];this[ah(0x12d)]=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[ah(0x138)](d),this[ah(0x142)]();return this[ah(0x13a)](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}[q(0x142)](){const ai=q;return this[ai(0xd8)]['selectedOptions'][ai(0x101)](0x0)?.['dataset'][ai(0x135)]==='unit';}[q(0x134)](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const aj=q;let d=c;if(this[aj(0x121)]!=null)d=Math['max'](this['_min'],d);if(this['_max']!=null)d=Math['min'](this['_max'],d);return d;}}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);