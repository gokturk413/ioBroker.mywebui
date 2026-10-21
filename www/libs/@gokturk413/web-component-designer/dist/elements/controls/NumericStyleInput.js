const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x1b8))/0x1*(parseInt(p(0x19a))/0x2)+parseInt(p(0x149))/0x3+parseInt(p(0x184))/0x4*(parseInt(p(0x1af))/0x5)+-parseInt(p(0x15f))/0x6*(-parseInt(p(0x19b))/0x7)+parseInt(p(0x1cb))/0x8*(-parseInt(p(0x1bf))/0x9)+-parseInt(p(0x1c9))/0xa*(-parseInt(p(0x1ab))/0xb)+parseInt(p(0x1aa))/0xc*(-parseInt(p(0x18a))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x765b8));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';function a(){const am=['188AUNvgT','key','disabled','_dragPointerId','_step','_finishStepperInteraction','10940813PXTdaZ','_appliedDragSteps','unit','_stepperRepeatInterval','_stepperDirection','_windowPointerCancelHandler','_calculateDraggedStepCount','_stepperPointerId','_getEffectiveStep','text','_preferCustomMode','_switchToUnitModeForInteraction','_setValue','clearInterval','_readEditableNumericValue','_stepperRepeatTimeout','58dKhNmk','2094659GWjBoA','_commitValue','_applyStepPreview','_previewStartValue','readOnly','_value','_displayValueLock','_dragStartNumericValue','unitValueConverter','increase','_handleWindowDragPointerMove','inputValue','Units','_finishDragInteraction','_clampNumericValue','24SDDfqt','6886WbKtEQ','_createOption','includes','options','23335LuAdFq','_convertNumericValue','fixed','custom','indexOf','isNaN','_unitValueConverter','_applyReadonlyState','_handleStepperPointerDown','388IPCorx','_applyTypedValue','_updateValue','inputVisible','length','valuePreviewFinished','blur','63uqZZit','_autoSizeSelect','_dragStartY','_windowPointerUpHandler','style','optgroup','_isSelectedUnitMode','_lastNumericValue','_windowDragPointerMoveHandler','toLowerCase','12130EkkxNT','dataset','167080fwwywp','releasePointerCapture','step','createElement','_normalizeOptionValues','hasPointerCapture','_max','valuePreviewChanged','select','_windowBlurHandler','round','sign','_measure','_getDomElement','_previewNumericValue','_select','pointerdown','_getInteractiveStepValue','_wireEvents','_windowDragBlurHandler','_handleWindowStepperPointerEnd','unitSteps','trunc','Values','none','_input','addEventListener','preventDefault','2177328YXvHzN','_applyNumericValue','min','_attachDragWindowListeners','replaceChildren','focus','_scrubberButton','define','appendChild','_windowDragPointerUpHandler','_min','Enter','_createCustomDisplayState','_resolveCurrentValueForUnit','isFinite','_readOnly','_allowCustomValue','clearTimeout','setTimeout','pointermove','_lastNumericUnit','_stopStepperRepeat','12HOHYao','label','numberText','_attachStepperWindowListeners','empty','_finishDragInteractionForPointerEvent','pointerup','removeEventListener','_getDisplayState','node-projects-numeric-style-input','setPointerCapture','item','abs','ceil','offsetWidth','kind','decrease','_increaseButton','_roundToStepPrecision','_fixedValues','selectValue','value','floor','measure','scrubber','trim','keydown','pointerId','_previewChanged','inputEnabled','pointercancel','selectedOptions','_units','_unitSteps','allowCustomValue','max','change'];a=function(){return am;};return a();}const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x1c3)]=css`
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
  `;[q(0x1a0)]='';get[q(0x174)](){return this['_value'];}set[q(0x174)](c){const r=q;this[r(0x196)](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x1d2)]=new TypedEvent();[q(0x1bd)]=new TypedEvent();['_units']=['px','%','pt'];get['units'](){const s=q;return[...this[s(0x17f)]];}set['units'](c){const t=q;this['_units']=this[t(0x1cf)](c),this[t(0x15d)]=this[t(0x17f)][0x0]??this['_lastNumericUnit'],this[t(0x1ba)]();}['_fixedValues']=[];get['fixedValues'](){return[...this['_fixedValues']];}set['fixedValues'](c){const u=q;this['_fixedValues']=this['_normalizeOptionValues'](c),this[u(0x1ba)]();}[q(0x188)]=0x1;get['step'](){const v=q;return this[v(0x188)];}set[q(0x1cd)](c){const w=q;this[w(0x188)]=Number[w(0x157)](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0x1e0)](){return{...this['_unitSteps']};}set[q(0x1e0)](c){const x=q;this[x(0x180)]=c??{};}['_min']=null;get[q(0x14b)](){const y=q;return this[y(0x153)];}set[q(0x14b)](c){this['_min']=Number['isFinite'](c)?c:null;}['_max']=null;get['max'](){const z=q;return this[z(0x1d1)];}set['max'](c){const A=q;this[A(0x1d1)]=Number['isFinite'](c)?c:null;}[q(0x158)]=![];get['readOnly'](){return this['_readOnly'];}set[q(0x19f)](c){const B=q;this[B(0x158)]=c,this[B(0x1b6)]();}get['isInPreview'](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get[q(0x181)](){const C=q;return this[C(0x159)];}set['allowCustomValue'](c){this['_allowCustomValue']=c,this['_updateValue']();}[q(0x1b5)];get['unitValueConverter'](){const D=q;return this[D(0x1b5)];}set[q(0x1a3)](c){const E=q;this[E(0x1b5)]=c;}['_input'];[q(0x1da)];[q(0x1d7)];['_scrubberButton'];[q(0x170)];['_decreaseButton'];['_lastNumericValue']=0x0;['_lastNumericUnit']='px';[q(0x187)]=null;[q(0x1c1)]=0x0;[q(0x1a2)]=0x0;[q(0x18b)]=0x0;['_previewStartValue']=null;['_previewChanged']=![];['_displayValueLock']=null;['_stepperPointerId']=null;['_stepperDirection']=0x0;['_stepperRepeatTimeout']=null;[q(0x18d)]=null;[q(0x1c7)]=c=>this['_handleWindowDragPointerMove'](c);['_windowDragPointerUpHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x164)](c,!![]);[q(0x1de)]=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this[q(0x1df)](c);[q(0x1d4)]=()=>this[q(0x189)](![]);['_preferCustomMode']=![];constructor(){const F=q;super(),this['_restoreCachedInititalValues'](),this[F(0x146)]=this['_getDomElement']('input'),this[F(0x1da)]=this[F(0x1d8)]('select'),this[F(0x1d7)]=this[F(0x1d8)](F(0x176)),this[F(0x14f)]=this['_getDomElement'](F(0x177)),this[F(0x170)]=this[F(0x1d8)](F(0x1a4)),this['_decreaseButton']=this['_getDomElement'](F(0x16f));}['ready'](){const G=q;this['_parseAttributesToProperties'](),this[G(0x1dd)](),this['_updateValue']();}['_wireEvents'](){const H=q;this['_input'][H(0x147)](H(0x183),()=>this['_applyTypedValue']()),this[H(0x146)]['addEventListener'](H(0x179),c=>{const I=H;c[I(0x185)]===I(0x154)&&(this['_applyTypedValue'](),this[I(0x146)][I(0x1be)]());}),this['_scrubberButton'][H(0x147)](H(0x1db),c=>this['_handlePointerDown'](c)),this['_select'][H(0x147)](H(0x183),()=>this['_applySelectedMode']()),this['_increaseButton']['addEventListener']('pointerdown',c=>this[H(0x1b7)](c,0x1)),this['_decreaseButton'][H(0x147)](H(0x1db),c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const J=q;if(this[J(0x158)])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this['_dragPointerId']=c[J(0x17a)],this['_dragStartY']=c['clientY'],this['_dragStartNumericValue']=this[J(0x198)](this[J(0x1da)]['value']),this[J(0x18b)]=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this['_scrubberButton'][J(0x169)](c['pointerId']);}catch{}c['preventDefault']();}[q(0x1a5)](c){const K=q;if(this[K(0x187)]!==c[K(0x17a)]||!this['_isSelectedUnitMode']())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c['clientY']);if(d===this['_appliedDragSteps'])return;this[K(0x18b)]=d;const e=this['_select'][K(0x174)],f=this[K(0x192)](e);this[K(0x1d9)](this[K(0x1dc)](this[K(0x1a2)],d,f),e,f),c[K(0x148)]();}[q(0x164)](c,d){const L=q;if(this[L(0x187)]!==c[L(0x17a)])return;this['_finishDragInteraction'](d,c[L(0x17a)]);}[q(0x1a8)](c,d){const M=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this[M(0x18b)]=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this[M(0x14f)][M(0x1d0)](d))this[M(0x14f)][M(0x1cc)](d);}catch{}this['_finishPreviewSession'](c);}[q(0x1b7)](c,d){const N=q;if(this[N(0x158)])return;if(!this[N(0x1c5)]()){if(!this[N(0x195)]())return;}this['_finishStepperInteraction'](!![]),this[N(0x191)]=c[N(0x17a)],this[N(0x18e)]=d,this[N(0x162)](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window[N(0x15b)](()=>{const O=N;this['_stepperRepeatInterval']=window['setInterval'](()=>this[O(0x19d)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const P=q;if(this[P(0x191)]!==c[P(0x17a)])return;this[P(0x189)](![]);}[q(0x189)](c){const Q=q;if(this[Q(0x191)]==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const R=q,c=this[R(0x1da)]['selectedOptions'][R(0x16a)](0x0);if(!c)return;const d=c['dataset']['kind'];if(d===R(0x1b1)){this[R(0x19c)](c['value']);return;}if(d==='custom'){this[R(0x194)]=!![],this[R(0x1ba)](),requestAnimationFrame(()=>{const S=R;this[S(0x146)]['focus'](),this[S(0x146)][S(0x1d3)]();});return;}const e=c['value'];this[R(0x15d)]=e,this[R(0x194)]=![];const f=parseNumericStyleInputValue(this[R(0x1a0)]);if(f['kind']==='numeric'){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this[R(0x19c)](g);return;}if(f['kind']===R(0x163)){this['_updateValue'](),this['_input'][R(0x14e)]();return;}const h=Number(this['_input'][R(0x174)]);if(!Number[R(0x1b4)](h)){this[R(0x14a)](h,e);return;}this[R(0x19c)](''),this['_input']['focus']();}[q(0x1b9)](){const T=q,c=this[T(0x1da)][T(0x17e)]['item'](0x0),d=c?.['dataset'][T(0x16e)];if(d===T(0x1b1))return;if(d===T(0x1b2)){this[T(0x19c)](this['_input'][T(0x174)]);return;}const e=this['_input'][T(0x174)]?.[T(0x178)]()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number['isNaN'](f))this['_lastNumericValue']=this['_clampNumericValue'](f);this[T(0x19c)](combineNumericStyleInputValue(e,c?.[T(0x174)]??''));}[q(0x1ba)](){const U=q;if(!this['_input']||!this[U(0x1da)])return;if(this['_previewStartValue']==null)this['_renderSelectOptions']();const c=this['_getDisplayState'](this[U(0x1a1)]??this['_value']);this['_input'][U(0x174)]=c[U(0x1a6)],this[U(0x146)][U(0x1c3)]['display']=c[U(0x1bb)]?'':U(0x1e3),this[U(0x146)]['disabled']=this[U(0x158)]||!c[U(0x17c)],this['_select'][U(0x174)]=c[U(0x173)],this[U(0x1c0)]();if(c['mode']==='unit'&&c['selectedUnit']!=null)this[U(0x15d)]=c['selectedUnit'];if(c['mode']===U(0x18c)&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this['_lastNumericValue']=this[U(0x1a9)](f);}const d=this['_units']['length']>0x0,e=this[U(0x158)]||(!d||c['mode']===U(0x1b2));this[U(0x14f)][U(0x186)]=e,this['_increaseButton']['disabled']=e,this['_decreaseButton']['disabled']=e,this[U(0x1b6)]();}[q(0x167)](c){const V=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this['_preferCustomMode'])return this['_createCustomDisplayState'](d['numberText']);if(d[V(0x18c)]&&this[V(0x17f)]['length']&&!this[V(0x17f)][V(0x1ad)](d[V(0x18c)]))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d[V(0x18c)],this['_lastNumericUnit'],this['_units'])??'';return{'mode':'unit','inputValue':d[V(0x161)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][V(0x1ad)](f)?f:this['_select']['value']||customOptionValue,'selectedUnit':f};}if(d[V(0x16e)]===V(0x193)){if(!this[V(0x194)]&&this[V(0x172)][V(0x1ad)](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this['_createCustomDisplayState'](d[V(0x193)]);}if(this['_preferCustomMode'])return this[V(0x155)]('');const e=this['_lastNumericUnit']??this[V(0x17f)][0x0]??'';if(this['_units'][V(0x1ad)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[V(0x155)]('');}['_createCustomDisplayState'](c){const W=q;if(!this['_allowCustomValue']&&this['_units']['length'])return{'mode':W(0x18c),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[W(0x17f)][0x0],'selectedUnit':this[W(0x17f)][0x0]};return{'mode':W(0x1b2),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const X=q,c=this[X(0x1da)][X(0x174)];this[X(0x1da)][X(0x14d)]();if(this['_units']['length']){const d=document[X(0x1ce)](X(0x1c4));d[X(0x160)]=X(0x1a7);for(const e of this['_units'])d['appendChild'](this['_createOption'](getNumericStyleInputUnitLabel(e),e,X(0x18c)));this[X(0x1da)][X(0x151)](d);}if(this['_fixedValues'][X(0x1bc)]){const f=document['createElement'](X(0x1c4));f[X(0x160)]=X(0x1e2);for(const g of this[X(0x172)])f[X(0x151)](this['_createOption'](g,g,X(0x1b1)));this['_select'][X(0x151)](f);}if(this[X(0x159)]||this[X(0x1da)][X(0x1ae)]['length']===0x0)this['_select']['appendChild'](this[X(0x1ac)](X(0x1b2),customOptionValue,'custom'));if(c!=='')this[X(0x1da)]['value']=c;else{if(this['_select']['querySelector']('option[value=\x22\x22]'))this['_select']['value']='';}}['_createOption'](c,d,e){const Y=q,f=document['createElement']('option');return f['text']=c,f['value']=d,f[Y(0x1ca)][Y(0x16e)]=e,f;}['_autoSizeSelect'](){const Z=q;if(!this['_measure']||!this[Z(0x1da)])return;const c=this['_select'][Z(0x17e)][Z(0x16a)](0x0);this['_measure']['textContent']=c?.['text']??'';const d=this['_measure'][Z(0x16d)];d>0x0?this[Z(0x1da)]['style']['width']=d+0x11+'px':requestAnimationFrame(()=>this[Z(0x1c0)]());}[q(0x1b6)](){const a0=q;if(!this['_input']||!this['_select'])return;this['_input']['readOnly']=this[a0(0x158)],this[a0(0x1da)][a0(0x186)]=this['_readOnly'];}[q(0x1b0)](c,d){const a1=q;if(d==null)return this[a1(0x1a0)];const e=c['unit'],f=this['_unitValueConverter']?.({'value':c[a1(0x174)],'numberText':c[a1(0x161)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[a1(0x161)],d);}[q(0x156)](c){const a2=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number['NaN'],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.[a2(0x178)]();return d?d:null;}[q(0x198)](c){const a3=q,d=parseNumericStyleInputValue(this['_value']);if(d[a3(0x16e)]==='numeric'){const e=this[a3(0x1b0)](d,c),f=parseNumericStyleInputValue(e);if(f[a3(0x16e)]==='numeric')return f['value'];return d[a3(0x174)];}if(this['_input'][a3(0x174)]?.[a3(0x178)]()){const g=Number(this['_input'][a3(0x174)]);if(!Number['isNaN'](g))return g;}return this['_lastNumericValue'];}['_applyNumericValue'](c,d){const a4=q;this[a4(0x1c6)]=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a4(0x1c6)]),d));}[q(0x1d9)](c,d,e){const a5=q;this['_lastNumericValue']=this[a5(0x1a9)](c),this['_lastNumericUnit']=d;const f=e??this[a5(0x192)](d);this[a5(0x196)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a5(0x1c6)],f),d),![],!![]);}[q(0x19c)](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a6=q,f=c??'';if(!d&&!e&&this[a6(0x19e)]!=null)return;const g=this[a6(0x1a0)];this['_value']=f;if(e)this['_displayValueLock']=f;else{if(this[a6(0x1a1)]!=null){if(f===this['_displayValueLock']||f!==g)this['_displayValueLock']=null;}}this[a6(0x194)]=![],this['_updateValue']();if(g!==f){e&&(this[a6(0x17b)]=!![],this['valuePreviewChanged']['emit']({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a7=q;this['_previewStartValue']==null&&(this['_previewStartValue']=this['_value'],this[a7(0x17b)]=![]);}['_finishPreviewSession'](c){const a8=q;if(this[a8(0x19e)]==null)return;const d=this[a8(0x19e)],e=this[a8(0x1a1)]??this['_value'],f=this[a8(0x17b)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this[a8(0x1a1)]=null,this[a8(0x1a0)]=d,this[a8(0x1ba)]()):(this['_displayValueLock']=e,this['_updateValue']()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x19d)](c){const a9=q,d=this['_select'][a9(0x174)],e=this['_getEffectiveStep'](d);this[a9(0x1d9)](this[a9(0x1dc)](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0x15e)](){const aa=q;this['_stepperRepeatTimeout']!=null&&(window[aa(0x15a)](this['_stepperRepeatTimeout']),this[aa(0x199)]=null),this['_stepperRepeatInterval']!=null&&(window[aa(0x197)](this['_stepperRepeatInterval']),this['_stepperRepeatInterval']=null);}[q(0x162)](){const ab=q;window[ab(0x147)](ab(0x165),this[ab(0x1c2)],!![]),window[ab(0x147)](ab(0x17d),this[ab(0x18f)],!![]),window[ab(0x147)]('blur',this[ab(0x1d4)]);}[q(0x14c)](){const ac=q;window[ac(0x147)]('pointermove',this[ac(0x1c7)],!![]),window['addEventListener'](ac(0x165),this['_windowDragPointerUpHandler'],!![]),window['addEventListener'](ac(0x17d),this['_windowDragPointerCancelHandler'],!![]),window['addEventListener'](ac(0x1be),this[ac(0x1de)]);}['_detachStepperWindowListeners'](){const ad=q;window['removeEventListener'](ad(0x165),this[ad(0x1c2)],!![]),window[ad(0x166)](ad(0x17d),this[ad(0x18f)],!![]),window[ad(0x166)](ad(0x1be),this['_windowBlurHandler']);}['_detachDragWindowListeners'](){const ae=q;window[ae(0x166)](ae(0x15c),this['_windowDragPointerMoveHandler'],!![]),window[ae(0x166)]('pointerup',this[ae(0x152)],!![]),window[ae(0x166)]('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window[ae(0x166)]('blur',this[ae(0x1de)]);}[q(0x190)](c){const af=q,d=Math[af(0x16b)](c),e=Math[af(0x14b)](d,0x14)/0x5,f=Math[af(0x182)](Math[af(0x14b)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math[af(0x1e1)](e+f+g);return Math[af(0x1d6)](c)*h;}['_getEffectiveStep'](c){return resolveNumericStyleInputStep(this['_unitSteps'],this['_step'],c);}[q(0x1dc)](c,d,e){const ag=q,f=e??this['_step'],g=this[ag(0x1a9)](c);if(!Number[ag(0x157)](g)||!Number[ag(0x157)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[ag(0x1d5)](i),k=Math[ag(0x16b)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ag(0x16c)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ag(0x175)](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this[ag(0x171)](m,f));}['_formatInteractiveNumericValue'](c,d){const ah=q,e=d??this[ah(0x188)];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}[q(0x171)](c,d){const e=this['_getStepPrecision'](d),f=0xa**e;return Math['round'](c*f)/f;}['_getStepPrecision'](c){const ai=q,d=(''+(c??this[ai(0x188)]))[ai(0x1c8)]();if(d[ai(0x1ad)]('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f[ai(0x1ad)]('.')?f['length']-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d[ai(0x1b3)]('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0x195)](){const aj=q,c=this[aj(0x15d)]??this[aj(0x17f)][0x0];if(c==null)return![];this[aj(0x194)]=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this['_commitValue'](d),this['_isSelectedUnitMode']();return this[aj(0x14a)](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const ak=q;return this['_select']['selectedOptions'][ak(0x16a)](0x0)?.[ak(0x1ca)][ak(0x16e)]===ak(0x18c);}[q(0x1cf)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x1a9)](c){const al=q;let d=c;if(this['_min']!=null)d=Math[al(0x182)](this[al(0x153)],d);if(this['_max']!=null)d=Math['min'](this['_max'],d);return d;}}function b(c,d){c=c-0x146;const e=a();let f=e[c];return f;}customElements[q(0x150)](q(0x168),NumericStyleInput);