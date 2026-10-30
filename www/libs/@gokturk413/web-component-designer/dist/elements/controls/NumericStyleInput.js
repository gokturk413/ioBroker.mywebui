const q=b;function b(c,d){c=c-0x1b6;const e=a();let f=e[c];return f;}(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x232))/0x1*(-parseInt(p(0x1c6))/0x2)+parseInt(p(0x1e2))/0x3+parseInt(p(0x21c))/0x4*(parseInt(p(0x1e6))/0x5)+-parseInt(p(0x1da))/0x6+parseInt(p(0x1c1))/0x7+-parseInt(p(0x1e4))/0x8+-parseInt(p(0x238))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1af5c));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';function a(){const am=['max','44378eQHjUA','style','_units','_previewNumericValue','change','_setValue','createElement','selectValue','releasePointerCapture','_windowDragBlurHandler','_appliedDragSteps','appendChild','options','isFinite','readOnly','option','unit','_unitValueConverter','_allowCustomValue','abs','1023216pwNnPi','pointercancel','units','_max','_applySelectedMode','removeEventListener','_windowBlurHandler','_finishDragInteraction','587391eWFqzo','_select','1466560SyOjEn','querySelector','70YuIhfw','kind','_detachDragWindowListeners','preventDefault','_lastNumericUnit','clientY','textContent','clearInterval','increase','custom','_resolveCurrentValueForUnit','_step','_calculateDraggedStepCount','_attachStepperWindowListeners','_finishStepperInteraction','valuePreviewFinished','_isSelectedUnitMode','_convertNumericValue','_commitValue','Values','_dragPointerId','mode','measure','_stepperPointerId','none','define','_windowDragPointerMoveHandler','empty','pointerup','_handlePointerDown','_getDisplayState','option[value=\x22\x22]','_handleStepperPointerDown','_createOption','indexOf','_increaseButton','_autoSizeSelect','display','_applyNumericValue','length','offsetWidth','__node-projects-custom-value__','_input','_min','_value','valuePreviewChanged','_previewStartValue','key','numberText','text','_windowPointerCancelHandler','_applyTypedValue','item','select','50404FptifM','focus','_decreaseButton','_createCustomDisplayState','step','floor','_displayValueLock','_getDomElement','pointermove','emit','_dragStartNumericValue','_roundToStepPrecision','sign','unitSteps','_handleWindowStepperPointerEnd','_normalizeOptionValues','_measure','pointerId','_windowDragPointerCancelHandler','_lastNumericValue','_detachStepperWindowListeners','isNaN','8SPevpl','_unitSteps','input','fixed','allowCustomValue','_preferCustomMode','941580ihXulr','clearTimeout','numeric','addEventListener','_fixedValues','min','_finishDragInteractionForPointerEvent','hasPointerCapture','setPointerCapture','_dragStartY','_wireEvents','_stepperRepeatTimeout','_scrubberButton','value','_updateValue','blur','_switchToUnitModeForInteraction','decrease','_getInteractiveStepValue','_windowPointerUpHandler','_readEditableNumericValue','_applyReadonlyState','replaceChildren','selectedOptions','_clampNumericValue','_readOnly','_getStepPrecision','ceil','_startPreviewSession','selectedUnit','_windowDragPointerUpHandler','_finishPreviewSession','inputValue','pointerdown','_stepperDirection','trunc','includes','_getEffectiveStep','134267TcyoQG','dataset','_stopStepperRepeat','_previewChanged'];a=function(){return am;};return a();}const customOptionValue=q(0x20f),dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x1c7)]=css`
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
  `;[q(0x212)]='';get[q(0x245)](){const r=q;return this[r(0x212)];}set[q(0x245)](c){const s=q;this[s(0x1cb)](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x213)]=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get[q(0x1dc)](){const t=q;return[...this[t(0x1c8)]];}set['units'](c){const u=q;this[u(0x1c8)]=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this[u(0x1c8)][0x0]??this['_lastNumericUnit'],this['_updateValue']();}[q(0x23c)]=[];get['fixedValues'](){return[...this['_fixedValues']];}set['fixedValues'](c){const v=q;this[v(0x23c)]=this['_normalizeOptionValues'](c),this['_updateValue']();}['_step']=0x1;get[q(0x220)](){return this['_step'];}set['step'](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0x233)]={};get[q(0x229)](){const w=q;return{...this[w(0x233)]};}set['unitSteps'](c){const x=q;this[x(0x233)]=c??{};}['_min']=null;get[q(0x23d)](){return this['_min'];}set['min'](c){this['_min']=Number['isFinite'](c)?c:null;}[q(0x1dd)]=null;get['max'](){return this['_max'];}set[q(0x1c5)](c){this['_max']=Number['isFinite'](c)?c:null;}['_readOnly']=![];get[q(0x1d4)](){return this['_readOnly'];}set[q(0x1d4)](c){const y=q;this[y(0x251)]=c,this['_applyReadonlyState']();}get['isInPreview'](){const z=q;return this[z(0x214)]!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){const A=q;return this[A(0x1d8)];}set[q(0x236)](c){const B=q;this[B(0x1d8)]=c,this['_updateValue']();}[q(0x1d7)];get['unitValueConverter'](){return this['_unitValueConverter'];}set['unitValueConverter'](c){const C=q;this[C(0x1d7)]=c;}['_input'];['_select'];['_measure'];['_scrubberButton'];[q(0x209)];['_decreaseButton'];[q(0x22f)]=0x0;[q(0x1ea)]='px';[q(0x1fa)]=null;['_dragStartY']=0x0;[q(0x226)]=0x0;[q(0x1d0)]=0x0;['_previewStartValue']=null;[q(0x1c4)]=![];[q(0x222)]=null;['_stepperPointerId']=null;['_stepperDirection']=0x0;[q(0x243)]=null;['_stepperRepeatInterval']=null;[q(0x200)]=c=>this['_handleWindowDragPointerMove'](c);['_windowDragPointerUpHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);['_windowDragBlurHandler']=()=>this[q(0x1e1)](![]);[q(0x24b)]=c=>this[q(0x22a)](c);['_windowPointerCancelHandler']=c=>this[q(0x22a)](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);[q(0x237)]=![];constructor(){const D=q;super(),this['_restoreCachedInititalValues'](),this['_input']=this[D(0x223)](D(0x234)),this[D(0x1e3)]=this[D(0x223)](D(0x21b)),this['_measure']=this[D(0x223)](D(0x1fc)),this[D(0x244)]=this['_getDomElement']('scrubber'),this[D(0x209)]=this['_getDomElement'](D(0x1ee)),this['_decreaseButton']=this[D(0x223)](D(0x249));}['ready'](){const E=q;this['_parseAttributesToProperties'](),this[E(0x242)](),this[E(0x246)]();}['_wireEvents'](){const F=q;this['_input']['addEventListener']('change',()=>this[F(0x219)]()),this['_input']['addEventListener']('keydown',c=>{const G=F;c[G(0x215)]==='Enter'&&(this['_applyTypedValue'](),this[G(0x210)][G(0x247)]());}),this[F(0x244)]['addEventListener'](F(0x1bc),c=>this['_handlePointerDown'](c)),this[F(0x1e3)]['addEventListener'](F(0x1ca),()=>this[F(0x1de)]()),this[F(0x209)]['addEventListener'](F(0x1bc),c=>this['_handleStepperPointerDown'](c,0x1)),this[F(0x21e)]['addEventListener']('pointerdown',c=>this[F(0x206)](c,-0x1));}[q(0x203)](c){const H=q;if(this[H(0x251)])return;if(!this[H(0x1f6)]()){if(!this[H(0x248)]())return;}this['_dragPointerId']=c['pointerId'],this[H(0x241)]=c[H(0x1eb)],this[H(0x226)]=this[H(0x24c)](this['_select']['value']),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this['_scrubberButton'][H(0x240)](c['pointerId']);}catch{}c[H(0x1e9)]();}['_handleWindowDragPointerMove'](c){const I=q;if(this['_dragPointerId']!==c[I(0x22d)]||!this[I(0x1f6)]())return;const d=this['_calculateDraggedStepCount'](this[I(0x241)]-c[I(0x1eb)]);if(d===this[I(0x1d0)])return;this[I(0x1d0)]=d;const e=this['_select']['value'],f=this['_getEffectiveStep'](e);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_dragStartNumericValue'],d,f),e,f),c[I(0x1e9)]();}[q(0x23e)](c,d){const J=q;if(this['_dragPointerId']!==c['pointerId'])return;this['_finishDragInteraction'](d,c[J(0x22d)]);}[q(0x1e1)](c,d){const K=q;if(this[K(0x1fa)]==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this[K(0x244)][K(0x23f)](d))this[K(0x244)][K(0x1ce)](d);}catch{}this[K(0x1ba)](c);}[q(0x206)](c,d){const L=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this[L(0x248)]())return;}this[L(0x1f4)](!![]),this['_stepperPointerId']=c['pointerId'],this['_stepperDirection']=d,this[L(0x1f3)](),this[L(0x1b7)](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{const M=L;this['_stepperRepeatInterval']=window['setInterval'](()=>this['_applyStepPreview'](this[M(0x1bd)]),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const N=q;if(this['_stepperPointerId']!==c[N(0x22d)])return;this[N(0x1f4)](![]);}[q(0x1f4)](c){const O=q;if(this['_stepperPointerId']==null)return;this[O(0x1fd)]=null,this[O(0x1bd)]=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this[O(0x1ba)](c);}['_applySelectedMode'](){const P=q,c=this[P(0x1e3)]['selectedOptions'][P(0x21a)](0x0);if(!c)return;const d=c['dataset'][P(0x1e7)];if(d===P(0x235)){this[P(0x1f8)](c[P(0x245)]);return;}if(d==='custom'){this['_preferCustomMode']=!![],this['_updateValue'](),requestAnimationFrame(()=>{const Q=P;this['_input']['focus'](),this[Q(0x210)]['select']();});return;}const e=c['value'];this['_lastNumericUnit']=e,this[P(0x237)]=![];const f=parseNumericStyleInputValue(this[P(0x212)]);if(f[P(0x1e7)]==='numeric'){const i=this[P(0x1f7)](f,e);this[P(0x1f8)](i);return;}const g=this[P(0x1f0)](e);if(g!=null){this['_commitValue'](g);return;}if(f['kind']===P(0x201)){this[P(0x246)](),this['_input'][P(0x21d)]();return;}const h=Number(this['_input']['value']);if(!Number[P(0x231)](h)){this[P(0x20c)](h,e);return;}this['_commitValue'](''),this[P(0x210)][P(0x21d)]();}[q(0x219)](){const R=q,c=this[R(0x1e3)]['selectedOptions'][R(0x21a)](0x0),d=c?.['dataset'][R(0x1e7)];if(d==='fixed')return;if(d===R(0x1ef)){this['_commitValue'](this['_input'][R(0x245)]);return;}const e=this['_input'][R(0x245)]?.['trim']()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number['isNaN'](f))this[R(0x22f)]=this['_clampNumericValue'](f);this[R(0x1f8)](combineNumericStyleInputValue(e,c?.['value']??''));}['_updateValue'](){const S=q;if(!this[S(0x210)]||!this['_select'])return;if(this[S(0x214)]==null)this['_renderSelectOptions']();const c=this[S(0x204)](this['_displayValueLock']??this['_value']);this['_input']['value']=c['inputValue'],this['_input'][S(0x1c7)][S(0x20b)]=c['inputVisible']?'':S(0x1fe),this['_input']['disabled']=this['_readOnly']||!c['inputEnabled'],this[S(0x1e3)]['value']=c[S(0x1cd)],this[S(0x20a)]();if(c[S(0x1fb)]==='unit'&&c[S(0x1b8)]!=null)this[S(0x1ea)]=c['selectedUnit'];if(c[S(0x1fb)]==='unit'&&c[S(0x1bb)]!==''){const f=Number(c[S(0x1bb)]);if(!Number[S(0x231)](f))this[S(0x22f)]=this[S(0x250)](f);}const d=this['_units'][S(0x20d)]>0x0,e=this[S(0x251)]||(!d||c['mode']==='custom');this[S(0x244)]['disabled']=e,this[S(0x209)]['disabled']=e,this[S(0x21e)]['disabled']=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const T=q,d=parseNumericStyleInputValue(c);if(d['kind']===T(0x23a)){if(this['_preferCustomMode'])return this[T(0x21f)](d[T(0x216)]);if(d['unit']&&this['_units'][T(0x20d)]&&!this['_units'][T(0x1bf)](d['unit']))return this[T(0x21f)](c);const f=resolveNumericStyleInputSelectedUnit(d[T(0x1d6)],this[T(0x1ea)],this[T(0x1c8)])??'';return{'mode':T(0x1d6),'inputValue':d[T(0x216)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[T(0x1c8)][T(0x1bf)](f)?f:this['_select'][T(0x245)]||customOptionValue,'selectedUnit':f};}if(d[T(0x1e7)]==='text'){if(!this['_preferCustomMode']&&this['_fixedValues']['includes'](d[T(0x217)]))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[T(0x217)]};return this['_createCustomDisplayState'](d[T(0x217)]);}if(this['_preferCustomMode'])return this[T(0x21f)]('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this['_units'][T(0x1bf)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}['_createCustomDisplayState'](c){const U=q;if(!this[U(0x1d8)]&&this[U(0x1c8)]['length'])return{'mode':U(0x1d6),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[U(0x1c8)][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const V=q,c=this['_select'][V(0x245)];this['_select'][V(0x24e)]();if(this['_units']['length']){const d=document['createElement']('optgroup');d['label']='Units';for(const e of this['_units'])d['appendChild'](this[V(0x207)](getNumericStyleInputUnitLabel(e),e,'unit'));this[V(0x1e3)][V(0x1d1)](d);}if(this[V(0x23c)][V(0x20d)]){const f=document[V(0x1cc)]('optgroup');f['label']=V(0x1f9);for(const g of this[V(0x23c)])f[V(0x1d1)](this['_createOption'](g,g,V(0x235)));this[V(0x1e3)]['appendChild'](f);}if(this[V(0x1d8)]||this['_select'][V(0x1d2)]['length']===0x0)this[V(0x1e3)][V(0x1d1)](this['_createOption']('custom',customOptionValue,'custom'));if(c!=='')this[V(0x1e3)][V(0x245)]=c;else{if(this[V(0x1e3)][V(0x1e5)](V(0x205)))this['_select']['value']='';}}[q(0x207)](c,d,e){const W=q,f=document['createElement'](W(0x1d5));return f['text']=c,f[W(0x245)]=d,f['dataset']['kind']=e,f;}[q(0x20a)](){const X=q;if(!this[X(0x22c)]||!this[X(0x1e3)])return;const c=this[X(0x1e3)]['selectedOptions']['item'](0x0);this['_measure'][X(0x1ec)]=c?.[X(0x217)]??'';const d=this[X(0x22c)][X(0x20e)];d>0x0?this['_select']['style']['width']=d+0x11+'px':requestAnimationFrame(()=>this[X(0x20a)]());}[q(0x24d)](){const Y=q;if(!this['_input']||!this[Y(0x1e3)])return;this['_input']['readOnly']=this[Y(0x251)],this[Y(0x1e3)]['disabled']=this[Y(0x251)];}['_convertNumericValue'](c,d){const Z=q;if(d==null)return this['_value'];const e=c[Z(0x1d6)],f=this['_unitValueConverter']?.({'value':c[Z(0x245)],'numberText':c[Z(0x216)],'rawValue':this[Z(0x212)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const a0=q;if(c==null)return null;const d=this[a0(0x1d7)]?.({'value':Number['NaN'],'numberText':'','rawValue':this[a0(0x212)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}[q(0x24c)](c){const a1=q,d=parseNumericStyleInputValue(this['_value']);if(d['kind']===a1(0x23a)){const e=this[a1(0x1f7)](d,c),f=parseNumericStyleInputValue(e);if(f[a1(0x1e7)]===a1(0x23a))return f['value'];return d['value'];}if(this[a1(0x210)][a1(0x245)]?.['trim']()){const g=Number(this[a1(0x210)][a1(0x245)]);if(!Number['isNaN'](g))return g;}return this[a1(0x22f)];}['_applyNumericValue'](c,d){const a2=q;this[a2(0x22f)]=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a2(0x22f)]),d));}['_previewNumericValue'](c,d,e){const a3=q;this['_lastNumericValue']=this[a3(0x250)](c),this['_lastNumericUnit']=d;const f=e??this[a3(0x1c0)](d);this[a3(0x1cb)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this['_lastNumericValue'],f),d),![],!![]);}['_commitValue'](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a4=q,f=c??'';if(!d&&!e&&this[a4(0x214)]!=null)return;const g=this['_value'];this['_value']=f;if(e)this[a4(0x222)]=f;else{if(this[a4(0x222)]!=null){if(f===this[a4(0x222)]||f!==g)this[a4(0x222)]=null;}}this['_preferCustomMode']=![],this['_updateValue']();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged'][a4(0x225)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a5=q;this[a5(0x214)]==null&&(this['_previewStartValue']=this[a5(0x212)],this[a5(0x1c4)]=![]);}['_finishPreviewSession'](c){const a6=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this[a6(0x222)]??this[a6(0x212)],f=this['_previewChanged']&&d!==e,g=c||!f;this[a6(0x214)]=null,this[a6(0x1c4)]=![],g?(this['_displayValueLock']=null,this[a6(0x212)]=d,this[a6(0x246)]()):(this[a6(0x222)]=e,this[a6(0x246)]()),this[a6(0x1f5)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a7=q,d=this[a7(0x1e3)][a7(0x245)],e=this[a7(0x1c0)](d);this[a7(0x1c9)](this[a7(0x24a)](this[a7(0x24c)](d),c,e),d,e);}[q(0x1c3)](){const a8=q;this[a8(0x243)]!=null&&(window[a8(0x239)](this[a8(0x243)]),this[a8(0x243)]=null),this['_stepperRepeatInterval']!=null&&(window[a8(0x1ed)](this['_stepperRepeatInterval']),this['_stepperRepeatInterval']=null);}['_attachStepperWindowListeners'](){const a9=q;window[a9(0x23b)](a9(0x202),this['_windowPointerUpHandler'],!![]),window[a9(0x23b)]('pointercancel',this[a9(0x218)],!![]),window['addEventListener']('blur',this[a9(0x1e0)]);}['_attachDragWindowListeners'](){const aa=q;window['addEventListener'](aa(0x224),this[aa(0x200)],!![]),window['addEventListener'](aa(0x202),this['_windowDragPointerUpHandler'],!![]),window[aa(0x23b)]('pointercancel',this[aa(0x22e)],!![]),window['addEventListener']('blur',this[aa(0x1cf)]);}[q(0x230)](){const ab=q;window[ab(0x1df)](ab(0x202),this['_windowPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this[ab(0x218)],!![]),window['removeEventListener'](ab(0x247),this['_windowBlurHandler']);}[q(0x1e8)](){const ac=q;window['removeEventListener'](ac(0x224),this[ac(0x200)],!![]),window[ac(0x1df)]('pointerup',this[ac(0x1b9)],!![]),window[ac(0x1df)](ac(0x1db),this[ac(0x22e)],!![]),window['removeEventListener'](ac(0x247),this['_windowDragBlurHandler']);}[q(0x1f2)](c){const ad=q,d=Math[ad(0x1d9)](c),e=Math[ad(0x23d)](d,0x14)/0x5,f=Math['max'](Math[ad(0x23d)](d-0x14,0x28),0x0)/0x3,g=Math[ad(0x1c5)](d-0x3c,0x0)/0x2,h=Math[ad(0x1be)](e+f+g);return Math[ad(0x228)](c)*h;}['_getEffectiveStep'](c){const ae=q;return resolveNumericStyleInputStep(this[ae(0x233)],this['_step'],c);}[q(0x24a)](c,d,e){const af=q,f=e??this[af(0x1f1)],g=this['_clampNumericValue'](c);if(!Number[af(0x1d3)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this[af(0x211)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[af(0x1b6)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[af(0x221)](i);l=o+d+0x1;}const m=h+l*f;return this[af(0x250)](this['_roundToStepPrecision'](m,f));}['_formatInteractiveNumericValue'](c,d){const ag=q,e=d??this['_step'];return formatNumericStyleInputNumber(this[ag(0x227)](c,e),this['_getStepPrecision'](e));}[q(0x227)](c,d){const ah=q,e=this[ah(0x252)](d),f=0xa**e;return Math['round'](c*f)/f;}[q(0x252)](c){const ai=q,d=(''+(c??this['_step']))['toLowerCase']();if(d['includes']('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f[ai(0x1bf)]('.')?f[ai(0x20d)]-f[ai(0x208)]('.')-0x1:0x0;return h+i;}const e=d[ai(0x208)]('.');return e>=0x0?d[ai(0x20d)]-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const aj=q,c=this['_lastNumericUnit']??this['_units'][0x0];if(c==null)return![];this[aj(0x237)]=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this['_commitValue'](d),this[aj(0x1f6)]();return this['_applyNumericValue'](this[aj(0x22f)],c),this[aj(0x1f6)]();}['_isSelectedUnitMode'](){const ak=q;return this[ak(0x1e3)][ak(0x24f)][ak(0x21a)](0x0)?.[ak(0x1c2)][ak(0x1e7)]==='unit';}[q(0x22b)](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const al=q;let d=c;if(this['_min']!=null)d=Math[al(0x1c5)](this['_min'],d);if(this['_max']!=null)d=Math['min'](this[al(0x1dd)],d);return d;}}customElements[q(0x1ff)]('node-projects-numeric-style-input',NumericStyleInput);