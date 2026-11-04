function b(c,d){c=c-0x173;const e=a();let f=e[c];return f;}const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x20f))/0x1+parseInt(p(0x1ad))/0x2*(-parseInt(p(0x1e7))/0x3)+-parseInt(p(0x1ab))/0x4*(parseInt(p(0x1ed))/0x5)+-parseInt(p(0x192))/0x6*(parseInt(p(0x211))/0x7)+-parseInt(p(0x1be))/0x8*(-parseInt(p(0x20e))/0x9)+-parseInt(p(0x1bf))/0xa*(parseInt(p(0x1a5))/0xb)+parseInt(p(0x1c8))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1ab33));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const ao=['appendChild','pointercancel','_stepperRepeatInterval','_input','width','unit','_lastNumericUnit','selectedOptions','_finishStepperInteraction','_unitSteps','readOnly','selectValue','querySelector','_max','_getInteractiveStepValue','_attachDragWindowListeners','_allowCustomValue','_getStepPrecision','Units','mode','_stopStepperRepeat','step','_roundToStepPrecision','measure','202167jTmOAL','_select','_measure','optgroup','unitSteps','_detachDragWindowListeners','118165qodLGx','none','trim','valuePreviewFinished','_readOnly','_dragPointerId','floor','_units','pointerId','_clampNumericValue','_stepperPointerId','item','unitValueConverter','setInterval','style','_handlePointerDown','_applyTypedValue','_convertNumericValue','_detachStepperWindowListeners','abs','empty','pointerdown','_unitValueConverter','pointermove','focus','_appliedDragSteps','clientY','removeEventListener','input','_finishDragInteraction','hasPointerCapture','kind','_isSelectedUnitMode','18jQnzwg','208908ZnUbBU','_handleStepperPointerDown','7JpWqtQ','_previewChanged','_fixedValues','_preferCustomMode','custom','_displayValueLock','pointerup','_resolveCurrentValueForUnit','_autoSizeSelect','inputEnabled','_applySelectedMode','isFinite','ceil','inputValue','_windowDragPointerCancelHandler','_calculateDraggedStepCount','split','_step','_applyStepPreview','length','_readEditableNumericValue','valueChanged','_handleWindowDragPointerMove','_windowDragPointerMoveHandler','_getDisplayState','_formatInteractiveNumericValue','round','fixed','numeric','NaN','_stepperDirection','__node-projects-custom-value__','627024GQHXKW','_finishDragInteractionForPointerEvent','value','emit','dataset','option','increase','toLowerCase','_decreaseButton','_windowPointerUpHandler','selectedUnit','_dragStartNumericValue','_commitValue','_createOption','option[value=\x22\x22]','blur','_getEffectiveStep','options','units','734371QbOuSq','addEventListener','text','_min','_setValue','_previewStartValue','4bGGXRc','_dragStartY','2GOweyo','valuePreviewChanged','_value','_createCustomDisplayState','label','min','_scrubberButton','_increaseButton','_wireEvents','_getDomElement','Enter','_lastNumericValue','fixedValues','decrease','textContent','_windowBlurHandler','_updateValue','234888ehkXbA','30CUTZtU','_stepperRepeatTimeout','_windowDragPointerUpHandler','disabled','_startPreviewSession','setTimeout','preventDefault','max','_windowDragBlurHandler','7864296KJsSnH','_applyNumericValue','includes','isNaN','clearInterval','_switchToUnitModeForInteraction','createElement'];a=function(){return ao;};return a();}import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue=q(0x191),dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']='';get[q(0x194)](){const r=q;return this[r(0x1af)];}set[q(0x194)](c){const s=q;this[s(0x1a9)](c,![],![]);}[q(0x187)]=new TypedEvent();[q(0x1ae)]=new TypedEvent();[q(0x1f0)]=new TypedEvent();['_units']=['px','%','pt'];get['units'](){return[...this['_units']];}set[q(0x1a4)](c){const t=q;this['_units']=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this[t(0x1f4)][0x0]??this['_lastNumericUnit'],this['_updateValue']();}['_fixedValues']=[];get['fixedValues'](){const u=q;return[...this[u(0x174)]];}set[q(0x1b9)](c){this['_fixedValues']=this['_normalizeOptionValues'](c),this['_updateValue']();}[q(0x183)]=0x1;get['step'](){return this['_step'];}set[q(0x1e4)](c){const v=q;this[v(0x183)]=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0x1d8)]={};get[q(0x1eb)](){const w=q;return{...this[w(0x1d8)]};}set['unitSteps'](c){const x=q;this[x(0x1d8)]=c??{};}[q(0x1a8)]=null;get[q(0x1b2)](){const y=q;return this[y(0x1a8)];}set['min'](c){const z=q;this['_min']=Number[z(0x17d)](c)?c:null;}['_max']=null;get[q(0x1c6)](){const A=q;return this[A(0x1dc)];}set['max'](c){this['_max']=Number['isFinite'](c)?c:null;}[q(0x1f1)]=![];get['readOnly'](){const B=q;return this[B(0x1f1)];}set[q(0x1d9)](c){this['_readOnly']=c,this['_applyReadonlyState']();}get['isInPreview'](){const C=q;return this[C(0x1aa)]!=null;}[q(0x1df)]=!![];get['allowCustomValue'](){const D=q;return this[D(0x1df)];}set['allowCustomValue'](c){const E=q;this[E(0x1df)]=c,this[E(0x1bd)]();}[q(0x203)];get['unitValueConverter'](){return this['_unitValueConverter'];}set[q(0x1f9)](c){this['_unitValueConverter']=c;}[q(0x1d2)];[q(0x1e8)];['_measure'];[q(0x1b3)];[q(0x1b4)];['_decreaseButton'];['_lastNumericValue']=0x0;['_lastNumericUnit']='px';[q(0x1f2)]=null;[q(0x1ac)]=0x0;[q(0x19d)]=0x0;['_appliedDragSteps']=0x0;['_previewStartValue']=null;['_previewChanged']=![];[q(0x177)]=null;[q(0x1f7)]=null;[q(0x190)]=0x0;[q(0x1c0)]=null;[q(0x1d1)]=null;['_windowDragPointerMoveHandler']=c=>this['_handleWindowDragPointerMove'](c);['_windowDragPointerUpHandler']=c=>this[q(0x193)](c,![]);[q(0x180)]=c=>this[q(0x193)](c,!![]);['_windowDragBlurHandler']=()=>this[q(0x20a)](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);[q(0x175)]=![];constructor(){const F=q;super(),this['_restoreCachedInititalValues'](),this[F(0x1d2)]=this[F(0x1b6)](F(0x209)),this['_select']=this[F(0x1b6)]('select'),this['_measure']=this[F(0x1b6)](F(0x1e6)),this['_scrubberButton']=this['_getDomElement']('scrubber'),this['_increaseButton']=this['_getDomElement'](F(0x198)),this[F(0x19a)]=this[F(0x1b6)](F(0x1ba));}['ready'](){this['_parseAttributesToProperties'](),this['_wireEvents'](),this['_updateValue']();}[q(0x1b5)](){const G=q;this['_input']['addEventListener']('change',()=>this['_applyTypedValue']()),this[G(0x1d2)]['addEventListener']('keydown',c=>{const H=G;c['key']===H(0x1b7)&&(this['_applyTypedValue'](),this['_input'][H(0x1a1)]());}),this[G(0x1b3)][G(0x1a6)]('pointerdown',c=>this[G(0x1fc)](c)),this[G(0x1e8)]['addEventListener']('change',()=>this[G(0x17c)]()),this[G(0x1b4)][G(0x1a6)](G(0x202),c=>this[G(0x210)](c,0x1)),this[G(0x19a)]['addEventListener']('pointerdown',c=>this[G(0x210)](c,-0x1));}[q(0x1fc)](c){const I=q;if(this[I(0x1f1)])return;if(!this[I(0x20d)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[I(0x1f2)]=c['pointerId'],this[I(0x1ac)]=c['clientY'],this['_dragStartNumericValue']=this[I(0x186)](this['_select']['value']),this['_appliedDragSteps']=0x0,this[I(0x1c3)](),this[I(0x1de)]();try{this['_scrubberButton']['setPointerCapture'](c['pointerId']);}catch{}c[I(0x1c5)]();}[q(0x188)](c){const J=q;if(this['_dragPointerId']!==c[J(0x1f5)]||!this[J(0x20d)]())return;const d=this[J(0x181)](this[J(0x1ac)]-c[J(0x207)]);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this['_select'][J(0x194)],f=this['_getEffectiveStep'](e);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_dragStartNumericValue'],d,f),e,f),c['preventDefault']();}[q(0x193)](c,d){const K=q;if(this[K(0x1f2)]!==c[K(0x1f5)])return;this[K(0x20a)](d,c[K(0x1f5)]);}['_finishDragInteraction'](c,d){const L=q;if(this[L(0x1f2)]==null)return;this[L(0x1f2)]=null,this[L(0x206)]=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this[L(0x1b3)][L(0x20b)](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this['_finishPreviewSession'](c);}[q(0x210)](c,d){const M=q;if(this[M(0x1f1)])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this['_finishStepperInteraction'](!![]),this['_stepperPointerId']=c[M(0x1f5)],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window[M(0x1c4)](()=>{const N=M;this[N(0x1d1)]=window[N(0x1fa)](()=>this[N(0x184)](this[N(0x190)]),0x32);},0x15e),c[M(0x1c5)]();}['_handleWindowStepperPointerEnd'](c){const O=q;if(this['_stepperPointerId']!==c['pointerId'])return;this[O(0x1d7)](![]);}['_finishStepperInteraction'](c){const P=q;if(this['_stepperPointerId']==null)return;this['_stepperPointerId']=null,this[P(0x190)]=0x0,this['_detachStepperWindowListeners'](),this[P(0x1e3)](),this['_finishPreviewSession'](c);}[q(0x17c)](){const Q=q,c=this['_select'][Q(0x1d6)][Q(0x1f8)](0x0);if(!c)return;const d=c[Q(0x196)][Q(0x20c)];if(d===Q(0x18d)){this['_commitValue'](c['value']);return;}if(d===Q(0x176)){this['_preferCustomMode']=!![],this['_updateValue'](),requestAnimationFrame(()=>{const R=Q;this[R(0x1d2)]['focus'](),this[R(0x1d2)]['select']();});return;}const e=c[Q(0x194)];this[Q(0x1d5)]=e,this[Q(0x175)]=![];const f=parseNumericStyleInputValue(this['_value']);if(f[Q(0x20c)]===Q(0x18e)){const i=this['_convertNumericValue'](f,e);this[Q(0x19e)](i);return;}const g=this[Q(0x179)](e);if(g!=null){this[Q(0x19e)](g);return;}if(f['kind']===Q(0x201)){this[Q(0x1bd)](),this['_input'][Q(0x205)]();return;}const h=Number(this['_input']['value']);if(!Number['isNaN'](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this[Q(0x1d2)][Q(0x205)]();}[q(0x1fd)](){const S=q,c=this[S(0x1e8)][S(0x1d6)]['item'](0x0),d=c?.['dataset'][S(0x20c)];if(d===S(0x18d))return;if(d===S(0x176)){this[S(0x19e)](this[S(0x1d2)][S(0x194)]);return;}const e=this[S(0x1d2)]['value']?.['trim']()??'';if(!e){this[S(0x19e)]('');return;}const f=Number(e);if(!Number[S(0x1cb)](f))this['_lastNumericValue']=this['_clampNumericValue'](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.['value']??''));}['_updateValue'](){const T=q;if(!this['_input']||!this[T(0x1e8)])return;if(this[T(0x1aa)]==null)this['_renderSelectOptions']();const c=this['_getDisplayState'](this[T(0x177)]??this[T(0x1af)]);this['_input'][T(0x194)]=c[T(0x17f)],this['_input'][T(0x1fb)]['display']=c['inputVisible']?'':T(0x1ee),this[T(0x1d2)][T(0x1c2)]=this[T(0x1f1)]||!c[T(0x17b)],this[T(0x1e8)][T(0x194)]=c[T(0x1da)],this['_autoSizeSelect']();if(c[T(0x1e2)]===T(0x1d4)&&c['selectedUnit']!=null)this['_lastNumericUnit']=c[T(0x19c)];if(c[T(0x1e2)]==='unit'&&c[T(0x17f)]!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this[T(0x1b8)]=this['_clampNumericValue'](f);}const d=this[T(0x1f4)]['length']>0x0,e=this['_readOnly']||(!d||c[T(0x1e2)]==='custom');this['_scrubberButton']['disabled']=e,this['_increaseButton'][T(0x1c2)]=e,this[T(0x19a)]['disabled']=e,this['_applyReadonlyState']();}[q(0x18a)](c){const U=q,d=parseNumericStyleInputValue(c);if(d['kind']===U(0x18e)){if(this[U(0x175)])return this[U(0x1b0)](d['numberText']);if(d['unit']&&this[U(0x1f4)][U(0x185)]&&!this['_units']['includes'](d['unit']))return this[U(0x1b0)](c);const f=resolveNumericStyleInputSelectedUnit(d[U(0x1d4)],this[U(0x1d5)],this['_units'])??'';return{'mode':U(0x1d4),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units']['includes'](f)?f:this['_select'][U(0x194)]||customOptionValue,'selectedUnit':f};}if(d[U(0x20c)]===U(0x1a7)){if(!this[U(0x175)]&&this['_fixedValues']['includes'](d['text']))return{'mode':U(0x18d),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[U(0x1a7)]};return this['_createCustomDisplayState'](d['text']);}if(this[U(0x175)])return this[U(0x1b0)]('');const e=this['_lastNumericUnit']??this[U(0x1f4)][0x0]??'';if(this['_units']['includes'](e))return{'mode':U(0x1d4),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[U(0x1b0)]('');}[q(0x1b0)](c){const V=q;if(!this['_allowCustomValue']&&this['_units'][V(0x185)])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[V(0x1f4)][0x0],'selectedUnit':this[V(0x1f4)][0x0]};return{'mode':V(0x176),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const W=q,c=this['_select']['value'];this[W(0x1e8)]['replaceChildren']();if(this['_units']['length']){const d=document[W(0x1ce)]('optgroup');d[W(0x1b1)]=W(0x1e1);for(const e of this[W(0x1f4)])d['appendChild'](this['_createOption'](getNumericStyleInputUnitLabel(e),e,'unit'));this['_select']['appendChild'](d);}if(this['_fixedValues']['length']){const f=document[W(0x1ce)](W(0x1ea));f['label']='Values';for(const g of this['_fixedValues'])f[W(0x1cf)](this['_createOption'](g,g,'fixed'));this[W(0x1e8)][W(0x1cf)](f);}if(this['_allowCustomValue']||this['_select'][W(0x1a3)]['length']===0x0)this['_select']['appendChild'](this[W(0x19f)](W(0x176),customOptionValue,W(0x176)));if(c!=='')this[W(0x1e8)]['value']=c;else{if(this[W(0x1e8)][W(0x1db)](W(0x1a0)))this[W(0x1e8)]['value']='';}}[q(0x19f)](c,d,e){const X=q,f=document[X(0x1ce)](X(0x197));return f[X(0x1a7)]=c,f['value']=d,f[X(0x196)]['kind']=e,f;}[q(0x17a)](){const Y=q;if(!this['_measure']||!this['_select'])return;const c=this['_select']['selectedOptions'][Y(0x1f8)](0x0);this['_measure'][Y(0x1bb)]=c?.[Y(0x1a7)]??'';const d=this[Y(0x1e9)]['offsetWidth'];d>0x0?this['_select']['style'][Y(0x1d3)]=d+0x11+'px':requestAnimationFrame(()=>this[Y(0x17a)]());}['_applyReadonlyState'](){const Z=q;if(!this['_input']||!this['_select'])return;this[Z(0x1d2)]['readOnly']=this['_readOnly'],this['_select'][Z(0x1c2)]=this[Z(0x1f1)];}['_convertNumericValue'](c,d){const a0=q;if(d==null)return this['_value'];const e=c[a0(0x1d4)],f=this['_unitValueConverter']?.({'value':c[a0(0x194)],'numberText':c['numberText'],'rawValue':this[a0(0x1af)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const a1=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number[a1(0x18f)],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const a2=q,d=parseNumericStyleInputValue(this[a2(0x1af)]);if(d[a2(0x20c)]==='numeric'){const e=this[a2(0x1fe)](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f[a2(0x194)];return d['value'];}if(this['_input']['value']?.[a2(0x1ef)]()){const g=Number(this['_input']['value']);if(!Number['isNaN'](g))return g;}return this[a2(0x1b8)];}[q(0x1c9)](c,d){const a3=q;this['_lastNumericValue']=this[a3(0x1f6)](c),this[a3(0x1d5)]=d,this[a3(0x19e)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}['_previewNumericValue'](c,d,e){const a4=q;this['_lastNumericValue']=this[a4(0x1f6)](c),this[a4(0x1d5)]=d;const f=e??this[a4(0x1a2)](d);this[a4(0x1a9)](combineNumericStyleInputValue(this[a4(0x18b)](this[a4(0x1b8)],f),d),![],!![]);}[q(0x19e)](c){const a5=q;this[a5(0x1a9)](c,!![],![]);}['_setValue'](c,d,e){const a6=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this['_value'];this['_value']=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this['_displayValueLock']||f!==g)this['_displayValueLock']=null;}}this['_preferCustomMode']=![],this['_updateValue']();if(g!==f){e&&(this[a6(0x173)]=!![],this[a6(0x1ae)]['emit']({'newValue':f,'oldValue':g}));if(d)this[a6(0x187)][a6(0x195)]({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a7=q;this[a7(0x1aa)]==null&&(this[a7(0x1aa)]=this['_value'],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a8=q;if(this[a8(0x1aa)]==null)return;const d=this[a8(0x1aa)],e=this[a8(0x177)]??this[a8(0x1af)],f=this[a8(0x173)]&&d!==e,g=c||!f;this[a8(0x1aa)]=null,this['_previewChanged']=![],g?(this[a8(0x177)]=null,this['_value']=d,this[a8(0x1bd)]()):(this[a8(0x177)]=e,this[a8(0x1bd)]()),this[a8(0x1f0)][a8(0x195)]({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a9=q,d=this[a9(0x1e8)][a9(0x194)],e=this[a9(0x1a2)](d);this['_previewNumericValue'](this[a9(0x1dd)](this[a9(0x186)](d),c,e),d,e);}['_stopStepperRepeat'](){const aa=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this[aa(0x1c0)]),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window[aa(0x1cc)](this['_stepperRepeatInterval']),this[aa(0x1d1)]=null);}['_attachStepperWindowListeners'](){const ab=q;window['addEventListener'](ab(0x178),this[ab(0x19b)],!![]),window['addEventListener']('pointercancel',this['_windowPointerCancelHandler'],!![]),window['addEventListener'](ab(0x1a1),this[ab(0x1bc)]);}[q(0x1de)](){const ac=q;window[ac(0x1a6)]('pointermove',this[ac(0x189)],!![]),window[ac(0x1a6)](ac(0x178),this['_windowDragPointerUpHandler'],!![]),window[ac(0x1a6)](ac(0x1d0),this['_windowDragPointerCancelHandler'],!![]),window[ac(0x1a6)]('blur',this['_windowDragBlurHandler']);}[q(0x1ff)](){const ad=q;window['removeEventListener'](ad(0x178),this['_windowPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this['_windowPointerCancelHandler'],!![]),window['removeEventListener']('blur',this[ad(0x1bc)]);}[q(0x1ec)](){const ae=q;window[ae(0x208)](ae(0x204),this[ae(0x189)],!![]),window[ae(0x208)](ae(0x178),this[ae(0x1c1)],!![]),window[ae(0x208)]('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window[ae(0x208)]('blur',this[ae(0x1c7)]);}['_calculateDraggedStepCount'](c){const af=q,d=Math[af(0x200)](c),e=Math[af(0x1b2)](d,0x14)/0x5,f=Math[af(0x1c6)](Math[af(0x1b2)](d-0x14,0x28),0x0)/0x3,g=Math[af(0x1c6)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math['sign'](c)*h;}[q(0x1a2)](c){const ag=q;return resolveNumericStyleInputStep(this[ag(0x1d8)],this[ag(0x183)],c);}[q(0x1dd)](c,d,e){const ah=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number[ah(0x17d)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ah(0x17e)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ah(0x1f3)](i);l=o+d+0x1;}const m=h+l*f;return this[ah(0x1f6)](this[ah(0x1e5)](m,f));}[q(0x18b)](c,d){const ai=q,e=d??this[ai(0x183)];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this[ai(0x1e0)](e));}['_roundToStepPrecision'](c,d){const aj=q,e=this[aj(0x1e0)](d),f=0xa**e;return Math[aj(0x18c)](c*f)/f;}['_getStepPrecision'](c){const ak=q,d=(''+(c??this[ak(0x183)]))[ak(0x199)]();if(d[ak(0x1ca)]('e-')){const [f,g]=d[ak(0x182)]('e-'),h=Number(g),i=f[ak(0x1ca)]('.')?f['length']-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ak(0x185)]-e-0x1:0x0;}[q(0x1cd)](){const al=q,c=this[al(0x1d5)]??this['_units'][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[al(0x179)](c);if(d!=null)return this['_commitValue'](d),this['_isSelectedUnitMode']();return this['_applyNumericValue'](this[al(0x1b8)],c),this[al(0x20d)]();}[q(0x20d)](){const am=q;return this[am(0x1e8)]['selectedOptions']['item'](0x0)?.[am(0x196)][am(0x20c)]===am(0x1d4);}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x1f6)](c){const an=q;let d=c;if(this['_min']!=null)d=Math[an(0x1c6)](this[an(0x1a8)],d);if(this['_max']!=null)d=Math['min'](this['_max'],d);return d;}}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);