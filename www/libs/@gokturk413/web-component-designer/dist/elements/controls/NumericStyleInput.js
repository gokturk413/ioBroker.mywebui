function a(){const am=['pointercancel','querySelector','_finishPreviewSession','_getDomElement','5891865xBJkqk','_createOption','abs','ceil','_resolveCurrentValueForUnit','_stepperRepeatTimeout','_windowDragBlurHandler','_min','_applyTypedValue','_scrubberButton','readOnly','label','blur','_stopStepperRepeat','6682248DtJsIY','_createCustomDisplayState','_windowPointerUpHandler','pointerId','_windowDragPointerUpHandler','clientY','1054522ojPXre','_setValue','608PpWJTq','87720AjNOFF','4wjfkcw','_step','_unitValueConverter','_updateValue','_select','selectedOptions','value','focus','_stepperDirection','unitSteps','_previewChanged','_units','disabled','indexOf','step','_measure','_dragStartY','_previewNumericValue','_finishDragInteractionForPointerEvent','_finishStepperInteraction','valuePreviewChanged','_windowDragPointerCancelHandler','removeEventListener','custom','mode','_dragStartNumericValue','_lastNumericUnit','_windowBlurHandler','_input','input','_handleStepperPointerDown','clearTimeout','preventDefault','_isSelectedUnitMode','_decreaseButton','_handlePointerDown','_applySelectedMode','hasPointerCapture','pointerup','_autoSizeSelect','_unitSteps','_calculateDraggedStepCount','_finishDragInteraction','_preferCustomMode','numeric','numberText','_windowPointerCancelHandler','replaceChildren','_readOnly','scrubber','_stepperPointerId','select','optgroup','_getEffectiveStep','split','fixedValues','round','_getInteractiveStepValue','_getDisplayState','fixed','addEventListener','releasePointerCapture','includes','inputVisible','trim','_lastNumericValue','isNaN','min','_previewStartValue','_wireEvents','unit','none','dataset','_displayValueLock','Enter','_commitValue','_stepperRepeatInterval','valueChanged','isFinite','inputEnabled','_detachStepperWindowListeners','pointerdown','decrease','max','measure','length','_windowDragPointerMoveHandler','2842bZwlVR','_fixedValues','valuePreviewFinished','NaN','item','_getStepPrecision','43770411cgcsvJ','style','_clampNumericValue','text','isInPreview','empty','_readEditableNumericValue','_max','_allowCustomValue','kind','trunc','ready','_startPreviewSession','_applyNumericValue','appendChild','_dragPointerId','selectedUnit','_value','2772480znqWdT','__node-projects-custom-value__'];a=function(){return am;};return a();}const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x13b))/0x1+parseInt(p(0x13e))/0x2+-parseInt(p(0x1ae))/0x3+-parseInt(p(0x13f))/0x4*(parseInt(p(0x1b4))/0x5)+-parseInt(p(0x135))/0x6+-parseInt(p(0x196))/0x7*(-parseInt(p(0x13d))/0x8)+parseInt(p(0x19c))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa2ec4));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue=q(0x1af),dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']='';get[q(0x145)](){const r=q;return this[r(0x1ad)];}set['value'](c){const s=q;this[s(0x13c)](c,![],![]);}[q(0x18c)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get['units'](){const t=q;return[...this[t(0x14a)]];}set['units'](c){const u=q;this[u(0x14a)]=this['_normalizeOptionValues'](c),this[u(0x159)]=this['_units'][0x0]??this[u(0x159)],this[u(0x142)]();}[q(0x197)]=[];get[q(0x176)](){const v=q;return[...this[v(0x197)]];}set['fixedValues'](c){const w=q;this[w(0x197)]=this['_normalizeOptionValues'](c),this[w(0x142)]();}['_step']=0x1;get[q(0x14d)](){const x=q;return this[x(0x140)];}set['step'](c){const y=q;this['_step']=Number[y(0x18d)](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0x148)](){const z=q;return{...this[z(0x167)]};}set[q(0x148)](c){const A=q;this[A(0x167)]=c??{};}['_min']=null;get['min'](){return this['_min'];}set['min'](c){this['_min']=Number['isFinite'](c)?c:null;}['_max']=null;get[q(0x192)](){const B=q;return this[B(0x1a3)];}set[q(0x192)](c){this['_max']=Number['isFinite'](c)?c:null;}[q(0x16f)]=![];get[q(0x131)](){return this['_readOnly'];}set['readOnly'](c){this['_readOnly']=c,this['_applyReadonlyState']();}get[q(0x1a0)](){const C=q;return this[C(0x183)]!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){const D=q;return this[D(0x1a4)];}set['allowCustomValue'](c){this['_allowCustomValue']=c,this['_updateValue']();}[q(0x141)];get['unitValueConverter'](){return this['_unitValueConverter'];}set['unitValueConverter'](c){const E=q;this[E(0x141)]=c;}[q(0x15b)];['_select'];['_measure'];[q(0x130)];['_increaseButton'];[q(0x161)];['_lastNumericValue']=0x0;['_lastNumericUnit']='px';['_dragPointerId']=null;[q(0x14f)]=0x0;['_dragStartNumericValue']=0x0;['_appliedDragSteps']=0x0;[q(0x183)]=null;['_previewChanged']=![];['_displayValueLock']=null;['_stepperPointerId']=null;[q(0x147)]=0x0;[q(0x12c)]=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this['_handleWindowDragPointerMove'](c);[q(0x139)]=c=>this[q(0x151)](c,![]);[q(0x154)]=c=>this[q(0x151)](c,!![]);[q(0x12d)]=()=>this['_finishDragInteraction'](![]);[q(0x137)]=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);['_preferCustomMode']=![];constructor(){const F=q;super(),this['_restoreCachedInititalValues'](),this['_input']=this[F(0x1b3)](F(0x15c)),this[F(0x143)]=this['_getDomElement']('select'),this[F(0x14e)]=this['_getDomElement'](F(0x193)),this['_scrubberButton']=this['_getDomElement'](F(0x170)),this['_increaseButton']=this['_getDomElement']('increase'),this[F(0x161)]=this[F(0x1b3)](F(0x191));}[q(0x1a7)](){const G=q;this['_parseAttributesToProperties'](),this[G(0x184)](),this['_updateValue']();}['_wireEvents'](){const H=q;this['_input']['addEventListener']('change',()=>this[H(0x12f)]()),this[H(0x15b)][H(0x17b)]('keydown',c=>{const I=H;c['key']===I(0x189)&&(this[I(0x12f)](),this['_input']['blur']());}),this['_scrubberButton'][H(0x17b)](H(0x190),c=>this[H(0x162)](c)),this['_select']['addEventListener']('change',()=>this[H(0x163)]()),this['_increaseButton'][H(0x17b)](H(0x190),c=>this['_handleStepperPointerDown'](c,0x1)),this[H(0x161)][H(0x17b)]('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}[q(0x162)](c){const J=q;if(this['_readOnly'])return;if(!this[J(0x160)]()){if(!this['_switchToUnitModeForInteraction']())return;}this['_dragPointerId']=c['pointerId'],this[J(0x14f)]=c[J(0x13a)],this['_dragStartNumericValue']=this[J(0x1a2)](this[J(0x143)]['value']),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this[J(0x130)]['setPointerCapture'](c[J(0x138)]);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const K=q;if(this[K(0x1ab)]!==c[K(0x138)]||!this['_isSelectedUnitMode']())return;const d=this[K(0x168)](this[K(0x14f)]-c['clientY']);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this['_select'][K(0x145)],f=this[K(0x174)](e);this[K(0x150)](this[K(0x178)](this[K(0x158)],d,f),e,f),c[K(0x15f)]();}[q(0x151)](c,d){const L=q;if(this['_dragPointerId']!==c['pointerId'])return;this[L(0x169)](d,c[L(0x138)]);}[q(0x169)](c,d){const M=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton'][M(0x164)](d))this['_scrubberButton'][M(0x17c)](d);}catch{}this['_finishPreviewSession'](c);}[q(0x15d)](c,d){const N=q;if(this['_readOnly'])return;if(!this[N(0x160)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[N(0x152)](!![]),this['_stepperPointerId']=c[N(0x138)],this[N(0x147)]=d,this['_attachStepperWindowListeners'](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{this['_stepperRepeatInterval']=window['setInterval'](()=>this['_applyStepPreview'](this['_stepperDirection']),0x32);},0x15e),c[N(0x15f)]();}['_handleWindowStepperPointerEnd'](c){const O=q;if(this['_stepperPointerId']!==c['pointerId'])return;this[O(0x152)](![]);}[q(0x152)](c){const P=q;if(this[P(0x171)]==null)return;this['_stepperPointerId']=null,this[P(0x147)]=0x0,this['_detachStepperWindowListeners'](),this[P(0x134)](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const Q=q,c=this['_select'][Q(0x144)]['item'](0x0);if(!c)return;const d=c['dataset']['kind'];if(d===Q(0x17a)){this[Q(0x18a)](c[Q(0x145)]);return;}if(d==='custom'){this[Q(0x16a)]=!![],this['_updateValue'](),requestAnimationFrame(()=>{const R=Q;this[R(0x15b)]['focus'](),this['_input'][R(0x172)]();});return;}const e=c['value'];this[Q(0x159)]=e,this[Q(0x16a)]=![];const f=parseNumericStyleInputValue(this[Q(0x1ad)]);if(f[Q(0x1a5)]===Q(0x16b)){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this[Q(0x12b)](e);if(g!=null){this[Q(0x18a)](g);return;}if(f['kind']===Q(0x1a1)){this['_updateValue'](),this['_input'][Q(0x146)]();return;}const h=Number(this[Q(0x15b)][Q(0x145)]);if(!Number[Q(0x181)](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this['_input'][Q(0x146)]();}[q(0x12f)](){const S=q,c=this[S(0x143)]['selectedOptions'][S(0x19a)](0x0),d=c?.[S(0x187)][S(0x1a5)];if(d===S(0x17a))return;if(d===S(0x156)){this[S(0x18a)](this[S(0x15b)][S(0x145)]);return;}const e=this['_input'][S(0x145)]?.[S(0x17f)]()??'';if(!e){this[S(0x18a)]('');return;}const f=Number(e);if(!Number[S(0x181)](f))this['_lastNumericValue']=this['_clampNumericValue'](f);this[S(0x18a)](combineNumericStyleInputValue(e,c?.[S(0x145)]??''));}['_updateValue'](){const T=q;if(!this[T(0x15b)]||!this[T(0x143)])return;if(this['_previewStartValue']==null)this['_renderSelectOptions']();const c=this['_getDisplayState'](this[T(0x188)]??this['_value']);this['_input'][T(0x145)]=c['inputValue'],this[T(0x15b)][T(0x19d)]['display']=c[T(0x17e)]?'':T(0x186),this[T(0x15b)][T(0x14b)]=this[T(0x16f)]||!c[T(0x18e)],this[T(0x143)][T(0x145)]=c['selectValue'],this['_autoSizeSelect']();if(c[T(0x157)]==='unit'&&c[T(0x1ac)]!=null)this['_lastNumericUnit']=c[T(0x1ac)];if(c['mode']===T(0x185)&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this['_lastNumericValue']=this[T(0x19e)](f);}const d=this['_units'][T(0x194)]>0x0,e=this[T(0x16f)]||(!d||c['mode']===T(0x156));this[T(0x130)][T(0x14b)]=e,this['_increaseButton'][T(0x14b)]=e,this[T(0x161)][T(0x14b)]=e,this['_applyReadonlyState']();}[q(0x179)](c){const U=q,d=parseNumericStyleInputValue(c);if(d[U(0x1a5)]===U(0x16b)){if(this['_preferCustomMode'])return this['_createCustomDisplayState'](d[U(0x16c)]);if(d[U(0x185)]&&this['_units'][U(0x194)]&&!this[U(0x14a)][U(0x17d)](d[U(0x185)]))return this[U(0x136)](c);const f=resolveNumericStyleInputSelectedUnit(d[U(0x185)],this['_lastNumericUnit'],this['_units'])??'';return{'mode':U(0x185),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][U(0x17d)](f)?f:this[U(0x143)][U(0x145)]||customOptionValue,'selectedUnit':f};}if(d['kind']===U(0x19f)){if(!this['_preferCustomMode']&&this[U(0x197)]['includes'](d['text']))return{'mode':U(0x17a),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[U(0x19f)]};return this[U(0x136)](d[U(0x19f)]);}if(this['_preferCustomMode'])return this[U(0x136)]('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this[U(0x14a)][U(0x17d)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[U(0x136)]('');}['_createCustomDisplayState'](c){const V=q;if(!this['_allowCustomValue']&&this[V(0x14a)][V(0x194)])return{'mode':V(0x185),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this[V(0x14a)][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const W=q,c=this[W(0x143)][W(0x145)];this[W(0x143)][W(0x16e)]();if(this[W(0x14a)]['length']){const d=document['createElement'](W(0x173));d['label']='Units';for(const e of this['_units'])d['appendChild'](this[W(0x128)](getNumericStyleInputUnitLabel(e),e,'unit'));this['_select']['appendChild'](d);}if(this[W(0x197)]['length']){const f=document['createElement'](W(0x173));f[W(0x132)]='Values';for(const g of this[W(0x197)])f['appendChild'](this['_createOption'](g,g,'fixed'));this['_select']['appendChild'](f);}if(this[W(0x1a4)]||this[W(0x143)]['options'][W(0x194)]===0x0)this['_select'][W(0x1aa)](this['_createOption'](W(0x156),customOptionValue,'custom'));if(c!=='')this['_select'][W(0x145)]=c;else{if(this[W(0x143)][W(0x1b1)]('option[value=\x22\x22]'))this['_select'][W(0x145)]='';}}[q(0x128)](c,d,e){const X=q,f=document['createElement']('option');return f['text']=c,f['value']=d,f[X(0x187)]['kind']=e,f;}['_autoSizeSelect'](){const Y=q;if(!this[Y(0x14e)]||!this['_select'])return;const c=this['_select'][Y(0x144)]['item'](0x0);this['_measure']['textContent']=c?.['text']??'';const d=this[Y(0x14e)]['offsetWidth'];d>0x0?this['_select'][Y(0x19d)]['width']=d+0x11+'px':requestAnimationFrame(()=>this[Y(0x166)]());}['_applyReadonlyState'](){const Z=q;if(!this[Z(0x15b)]||!this[Z(0x143)])return;this[Z(0x15b)][Z(0x131)]=this['_readOnly'],this['_select'][Z(0x14b)]=this[Z(0x16f)];}['_convertNumericValue'](c,d){const a0=q;if(d==null)return this['_value'];const e=c['unit'],f=this['_unitValueConverter']?.({'value':c['value'],'numberText':c['numberText'],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[a0(0x16c)],d);}['_resolveCurrentValueForUnit'](c){const a1=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number[a1(0x199)],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.[a1(0x17f)]();return d?d:null;}['_readEditableNumericValue'](c){const a2=q,d=parseNumericStyleInputValue(this['_value']);if(d[a2(0x1a5)]===a2(0x16b)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f[a2(0x145)];return d['value'];}if(this[a2(0x15b)]['value']?.[a2(0x17f)]()){const g=Number(this[a2(0x15b)]['value']);if(!Number['isNaN'](g))return g;}return this['_lastNumericValue'];}[q(0x1a9)](c,d){const a3=q;this[a3(0x180)]=this[a3(0x19e)](c),this['_lastNumericUnit']=d,this[a3(0x18a)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a3(0x180)]),d));}['_previewNumericValue'](c,d,e){const a4=q;this['_lastNumericValue']=this[a4(0x19e)](c),this['_lastNumericUnit']=d;const f=e??this[a4(0x174)](d);this['_setValue'](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a4(0x180)],f),d),![],!![]);}[q(0x18a)](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a5=q,f=c??'';if(!d&&!e&&this[a5(0x183)]!=null)return;const g=this['_value'];this[a5(0x1ad)]=f;if(e)this[a5(0x188)]=f;else{if(this['_displayValueLock']!=null){if(f===this[a5(0x188)]||f!==g)this[a5(0x188)]=null;}}this[a5(0x16a)]=![],this[a5(0x142)]();if(g!==f){e&&(this[a5(0x149)]=!![],this[a5(0x153)]['emit']({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}[q(0x1a8)](){const a6=q;this['_previewStartValue']==null&&(this[a6(0x183)]=this[a6(0x1ad)],this[a6(0x149)]=![]);}[q(0x1b2)](c){const a7=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this['_displayValueLock']??this[a7(0x1ad)],f=this[a7(0x149)]&&d!==e,g=c||!f;this[a7(0x183)]=null,this[a7(0x149)]=![],g?(this['_displayValueLock']=null,this['_value']=d,this[a7(0x142)]()):(this['_displayValueLock']=e,this[a7(0x142)]()),this[a7(0x198)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a8=q,d=this['_select'][a8(0x145)],e=this['_getEffectiveStep'](d);this['_previewNumericValue'](this[a8(0x178)](this[a8(0x1a2)](d),c,e),d,e);}['_stopStepperRepeat'](){const a9=q;this[a9(0x12c)]!=null&&(window[a9(0x15e)](this['_stepperRepeatTimeout']),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this['_stepperRepeatInterval']),this[a9(0x18b)]=null);}['_attachStepperWindowListeners'](){const aa=q;window[aa(0x17b)]('pointerup',this[aa(0x137)],!![]),window[aa(0x17b)](aa(0x1b0),this[aa(0x16d)],!![]),window['addEventListener'](aa(0x133),this['_windowBlurHandler']);}['_attachDragWindowListeners'](){const ab=q;window['addEventListener']('pointermove',this[ab(0x195)],!![]),window[ab(0x17b)](ab(0x165),this[ab(0x139)],!![]),window[ab(0x17b)](ab(0x1b0),this[ab(0x154)],!![]),window[ab(0x17b)]('blur',this['_windowDragBlurHandler']);}[q(0x18f)](){const ac=q;window[ac(0x155)]('pointerup',this[ac(0x137)],!![]),window['removeEventListener'](ac(0x1b0),this['_windowPointerCancelHandler'],!![]),window['removeEventListener'](ac(0x133),this[ac(0x15a)]);}['_detachDragWindowListeners'](){const ad=q;window['removeEventListener']('pointermove',this[ad(0x195)],!![]),window[ad(0x155)]('pointerup',this[ad(0x139)],!![]),window['removeEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window[ad(0x155)]('blur',this[ad(0x12d)]);}['_calculateDraggedStepCount'](c){const ae=q,d=Math['abs'](c),e=Math['min'](d,0x14)/0x5,f=Math['max'](Math[ae(0x182)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math[ae(0x1a6)](e+f+g);return Math['sign'](c)*h;}['_getEffectiveStep'](c){const af=q;return resolveNumericStyleInputStep(this[af(0x167)],this[af(0x140)],c);}['_getInteractiveStepValue'](c,d,e){const ag=q,f=e??this[ag(0x140)],g=this['_clampNumericValue'](c);if(!Number[ag(0x18d)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this[ag(0x12e)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math[ag(0x129)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ag(0x12a)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this['_roundToStepPrecision'](m,f));}['_formatInteractiveNumericValue'](c,d){const e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}['_roundToStepPrecision'](c,d){const ah=q,e=this[ah(0x19b)](d),f=0xa**e;return Math[ah(0x177)](c*f)/f;}[q(0x19b)](c){const ai=q,d=(''+(c??this['_step']))['toLowerCase']();if(d[ai(0x17d)]('e-')){const [f,g]=d[ai(0x175)]('e-'),h=Number(g),i=f['includes']('.')?f[ai(0x194)]-f[ai(0x14c)]('.')-0x1:0x0;return h+i;}const e=d[ai(0x14c)]('.');return e>=0x0?d[ai(0x194)]-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const aj=q,c=this['_lastNumericUnit']??this['_units'][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[aj(0x18a)](d),this['_isSelectedUnitMode']();return this['_applyNumericValue'](this[aj(0x180)],c),this[aj(0x160)]();}[q(0x160)](){const ak=q;return this['_select']['selectedOptions']['item'](0x0)?.[ak(0x187)]['kind']==='unit';}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x19e)](c){const al=q;let d=c;if(this['_min']!=null)d=Math['max'](this['_min'],d);if(this[al(0x1a3)]!=null)d=Math[al(0x182)](this['_max'],d);return d;}}function b(c,d){c=c-0x128;const e=a();let f=e[c];return f;}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);