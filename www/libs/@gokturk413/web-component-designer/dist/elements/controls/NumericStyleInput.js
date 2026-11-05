function a(){const ak=['_clampNumericValue','_value','Values','_fixedValues','step','preventDefault','measure','_detachStepperWindowListeners','min','_getDomElement','_isSelectedUnitMode','_convertNumericValue','_attachStepperWindowListeners','_increaseButton','_previewStartValue','fixedValues','_getInteractiveStepValue','isFinite','_getDisplayState','2262376BEzbBw','_commitValue','_createOption','max','_step','_stepperDirection','focus','_calculateDraggedStepCount','includes','_createCustomDisplayState','custom','removeEventListener','unitValueConverter','isNaN','_applyNumericValue','select','_setValue','NaN','setInterval','_resolveCurrentValueForUnit','emit','valuePreviewFinished','none','ready','optgroup','unit','_updateValue','_units','blur','_stepperRepeatInterval','_previewChanged','disabled','_preferCustomMode','_windowDragPointerUpHandler','createElement','addEventListener','valueChanged','_appliedDragSteps','_restoreCachedInititalValues','_input','text','_handleStepperPointerDown','_formatInteractiveNumericValue','input','_handleWindowDragPointerMove','2003400DsBaWQ','inputVisible','_finishDragInteraction','_attachDragWindowListeners','_stepperRepeatTimeout','pointerId','clientY','_getEffectiveStep','_handleWindowStepperPointerEnd','_autoSizeSelect','_windowBlurHandler','value','pointerdown','148906AnlMvV','6129XGugOI','setPointerCapture','numeric','_stepperPointerId','setTimeout','_applyTypedValue','numberText','key','mode','pointercancel','kind','_finishDragInteractionForPointerEvent','_dragPointerId','dataset','split','_wireEvents','round','_max','length','units','textContent','option','_finishStepperInteraction','appendChild','_windowDragPointerMoveHandler','_renderSelectOptions','_readOnly','readOnly','10981310MlNdcj','858595YQryVr','_windowDragPointerCancelHandler','_finishPreviewSession','_unitSteps','label','_allowCustomValue','_lastNumericUnit','_select','_readEditableNumericValue','item','trim','_decreaseButton','_scrubberButton','unitSteps','_displayValueLock','clearInterval','_dragStartY','_windowDragBlurHandler','6VermiN','fixed','selectedOptions','node-projects-numeric-style-input','_unitValueConverter','pointermove','_lastNumericValue','_windowPointerUpHandler','_windowPointerCancelHandler','_roundToStepPrecision','9kkvRUi','_min','allowCustomValue','style','valuePreviewChanged','_applyStepPreview','floor','isInPreview','_previewNumericValue','58622pTfpsR','668rzUXLy','pointerup','_detachDragWindowListeners','Enter'];a=function(){return ak;};return a();}const q=b;function b(c,d){c=c-0xd3;const e=a();let f=e[c];return f;}(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x105))/0x1+-parseInt(p(0x157))/0x2+parseInt(p(0x158))/0x3*(-parseInt(p(0x106))/0x4)+-parseInt(p(0xe0))/0x5*(-parseInt(p(0xf2))/0x6)+-parseInt(p(0x14a))/0x7+-parseInt(p(0x11d))/0x8*(parseInt(p(0xfc))/0x9)+parseInt(p(0xdf))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x37525));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0xff)]=css`
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
  `;[q(0x10b)]='';get['value'](){const r=q;return this[r(0x10b)];}set[q(0x155)](c){this['_setValue'](c,![],![]);}[q(0x141)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[q(0x132)]=new TypedEvent();[q(0x138)]=['px','%','pt'];get[q(0xd6)](){const s=q;return[...this[s(0x138)]];}set['units'](c){const t=q;this['_units']=this['_normalizeOptionValues'](c),this[t(0xe6)]=this['_units'][0x0]??this[t(0xe6)],this['_updateValue']();}['_fixedValues']=[];get[q(0x119)](){const u=q;return[...this[u(0x10d)]];}set[q(0x119)](c){const v=q;this['_fixedValues']=this['_normalizeOptionValues'](c),this[v(0x137)]();}[q(0x121)]=0x1;get[q(0x10e)](){const w=q;return this[w(0x121)];}set[q(0x10e)](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0xe3)]={};get[q(0xed)](){return{...this['_unitSteps']};}set[q(0xed)](c){this['_unitSteps']=c??{};}[q(0xfd)]=null;get['min'](){return this['_min'];}set[q(0x112)](c){const x=q;this['_min']=Number[x(0x11b)](c)?c:null;}[q(0xd4)]=null;get[q(0x120)](){return this['_max'];}set['max'](c){const y=q;this[y(0xd4)]=Number['isFinite'](c)?c:null;}[q(0xdd)]=![];get['readOnly'](){return this['_readOnly'];}set['readOnly'](c){const z=q;this[z(0xdd)]=c,this['_applyReadonlyState']();}get[q(0x103)](){const A=q;return this[A(0x118)]!=null;}[q(0xe5)]=!![];get[q(0xfe)](){const B=q;return this[B(0xe5)];}set['allowCustomValue'](c){const C=q;this['_allowCustomValue']=c,this[C(0x137)]();}['_unitValueConverter'];get[q(0x129)](){return this['_unitValueConverter'];}set['unitValueConverter'](c){this['_unitValueConverter']=c;}[q(0x144)];[q(0xe7)];['_measure'];['_scrubberButton'];[q(0x117)];['_decreaseButton'];[q(0xf8)]=0x0;[q(0xe6)]='px';['_dragPointerId']=null;['_dragStartY']=0x0;['_dragStartNumericValue']=0x0;[q(0x142)]=0x0;[q(0x118)]=null;['_previewChanged']=![];['_displayValueLock']=null;['_stepperPointerId']=null;['_stepperDirection']=0x0;[q(0x14e)]=null;[q(0x13a)]=null;['_windowDragPointerMoveHandler']=c=>this[q(0x149)](c);[q(0x13e)]=c=>this[q(0x163)](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);['_windowDragBlurHandler']=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0xfa)]=c=>this[q(0x152)](c);[q(0x154)]=()=>this['_finishStepperInteraction'](![]);[q(0x13d)]=![];constructor(){const D=q;super(),this[D(0x143)](),this['_input']=this[D(0x113)](D(0x148)),this['_select']=this['_getDomElement']('select'),this['_measure']=this[D(0x113)](D(0x110)),this[D(0xec)]=this[D(0x113)]('scrubber'),this[D(0x117)]=this['_getDomElement']('increase'),this[D(0xeb)]=this['_getDomElement']('decrease');}[q(0x134)](){this['_parseAttributesToProperties'](),this['_wireEvents'](),this['_updateValue']();}[q(0x167)](){const F=q;this['_input']['addEventListener']('change',()=>this['_applyTypedValue']()),this['_input']['addEventListener']('keydown',c=>{const E=b;c[E(0x15f)]===E(0x109)&&(this['_applyTypedValue'](),this[E(0x144)]['blur']());}),this[F(0xec)][F(0x140)](F(0x156),c=>this['_handlePointerDown'](c)),this['_select'][F(0x140)]('change',()=>this['_applySelectedMode']()),this['_increaseButton']['addEventListener'](F(0x156),c=>this[F(0x146)](c,0x1)),this[F(0xeb)]['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const G=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this['_dragPointerId']=c[G(0x14f)],this['_dragStartY']=c['clientY'],this['_dragStartNumericValue']=this[G(0xe8)](this['_select']['value']),this[G(0x142)]=0x0,this['_startPreviewSession'](),this[G(0x14d)]();try{this[G(0xec)][G(0x159)](c['pointerId']);}catch{}c[G(0x10f)]();}[q(0x149)](c){const H=q;if(this[H(0x164)]!==c[H(0x14f)]||!this[H(0x114)]())return;const d=this['_calculateDraggedStepCount'](this[H(0xf0)]-c[H(0x150)]);if(d===this['_appliedDragSteps'])return;this[H(0x142)]=d;const e=this['_select']['value'],f=this[H(0x151)](e);this[H(0x104)](this[H(0x11a)](this['_dragStartNumericValue'],d,f),e,f),c[H(0x10f)]();}['_finishDragInteractionForPointerEvent'](c,d){const I=q;if(this['_dragPointerId']!==c['pointerId'])return;this[I(0x14c)](d,c[I(0x14f)]);}[q(0x14c)](c,d){const J=q;if(this[J(0x164)]==null)return;this['_dragPointerId']=null,this[J(0x142)]=0x0,this[J(0x108)]();if(d!=null)try{if(this['_scrubberButton']['hasPointerCapture'](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this[J(0xe2)](c);}['_handleStepperPointerDown'](c,d){const K=q;if(this[K(0xdd)])return;if(!this[K(0x114)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[K(0xd9)](!![]),this[K(0x15b)]=c['pointerId'],this['_stepperDirection']=d,this[K(0x116)](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window[K(0x15c)](()=>{const L=K;this['_stepperRepeatInterval']=window[L(0x12f)](()=>this['_applyStepPreview'](this[L(0x122)]),0x32);},0x15e),c[K(0x10f)]();}[q(0x152)](c){const M=q;if(this['_stepperPointerId']!==c[M(0x14f)])return;this['_finishStepperInteraction'](![]);}[q(0xd9)](c){if(this['_stepperPointerId']==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const N=q,c=this[N(0xe7)]['selectedOptions']['item'](0x0);if(!c)return;const d=c[N(0x165)][N(0x162)];if(d===N(0xf3)){this[N(0x11e)](c[N(0x155)]);return;}if(d==='custom'){this['_preferCustomMode']=!![],this[N(0x137)](),requestAnimationFrame(()=>{const O=N;this[O(0x144)]['focus'](),this['_input'][O(0x12c)]();});return;}const e=c['value'];this['_lastNumericUnit']=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this[N(0x10b)]);if(f['kind']==='numeric'){const i=this[N(0x115)](f,e);this[N(0x11e)](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f[N(0x162)]==='empty'){this[N(0x137)](),this['_input'][N(0x123)]();return;}const h=Number(this[N(0x144)]['value']);if(!Number[N(0x12a)](h)){this[N(0x12b)](h,e);return;}this[N(0x11e)](''),this[N(0x144)]['focus']();}[q(0x15d)](){const P=q,c=this[P(0xe7)][P(0xf4)][P(0xe9)](0x0),d=c?.['dataset']['kind'];if(d==='fixed')return;if(d==='custom'){this['_commitValue'](this['_input'][P(0x155)]);return;}const e=this['_input']['value']?.[P(0xea)]()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[P(0x12a)](f))this['_lastNumericValue']=this[P(0x10a)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.[P(0x155)]??''));}['_updateValue'](){const Q=q;if(!this['_input']||!this['_select'])return;if(this['_previewStartValue']==null)this[Q(0xdc)]();const c=this[Q(0x11c)](this[Q(0xee)]??this[Q(0x10b)]);this['_input'][Q(0x155)]=c['inputValue'],this['_input']['style']['display']=c[Q(0x14b)]?'':Q(0x133),this[Q(0x144)]['disabled']=this['_readOnly']||!c['inputEnabled'],this['_select']['value']=c['selectValue'],this['_autoSizeSelect']();if(c['mode']===Q(0x136)&&c['selectedUnit']!=null)this['_lastNumericUnit']=c['selectedUnit'];if(c['mode']==='unit'&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this[Q(0xf8)]=this[Q(0x10a)](f);}const d=this['_units']['length']>0x0,e=this[Q(0xdd)]||(!d||c[Q(0x160)]===Q(0x127));this[Q(0xec)]['disabled']=e,this['_increaseButton']['disabled']=e,this[Q(0xeb)][Q(0x13c)]=e,this['_applyReadonlyState']();}[q(0x11c)](c){const R=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this['_preferCustomMode'])return this['_createCustomDisplayState'](d['numberText']);if(d['unit']&&this[R(0x138)]['length']&&!this[R(0x138)][R(0x125)](d[R(0x136)]))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this[R(0xe6)],this[R(0x138)])??'';return{'mode':R(0x136),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[R(0x138)]['includes'](f)?f:this[R(0xe7)][R(0x155)]||customOptionValue,'selectedUnit':f};}if(d['kind']===R(0x145)){if(!this['_preferCustomMode']&&this['_fixedValues'][R(0x125)](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this[R(0x126)](d['text']);}if(this['_preferCustomMode'])return this['_createCustomDisplayState']('');const e=this[R(0xe6)]??this[R(0x138)][0x0]??'';if(this['_units']['includes'](e))return{'mode':R(0x136),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}['_createCustomDisplayState'](c){const S=q;if(!this[S(0xe5)]&&this[S(0x138)]['length'])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':S(0x127),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const T=q,c=this[T(0xe7)][T(0x155)];this['_select']['replaceChildren']();if(this[T(0x138)]['length']){const d=document['createElement'](T(0x135));d[T(0xe4)]='Units';for(const e of this['_units'])d['appendChild'](this[T(0x11f)](getNumericStyleInputUnitLabel(e),e,T(0x136)));this['_select']['appendChild'](d);}if(this[T(0x10d)][T(0xd5)]){const f=document[T(0x13f)]('optgroup');f[T(0xe4)]=T(0x10c);for(const g of this['_fixedValues'])f['appendChild'](this['_createOption'](g,g,'fixed'));this[T(0xe7)][T(0xda)](f);}if(this['_allowCustomValue']||this[T(0xe7)]['options'][T(0xd5)]===0x0)this[T(0xe7)]['appendChild'](this[T(0x11f)](T(0x127),customOptionValue,T(0x127)));if(c!=='')this[T(0xe7)]['value']=c;else{if(this['_select']['querySelector']('option[value=\x22\x22]'))this['_select']['value']='';}}['_createOption'](c,d,e){const U=q,f=document[U(0x13f)](U(0xd8));return f['text']=c,f[U(0x155)]=d,f['dataset'][U(0x162)]=e,f;}['_autoSizeSelect'](){const V=q;if(!this['_measure']||!this[V(0xe7)])return;const c=this[V(0xe7)]['selectedOptions'][V(0xe9)](0x0);this['_measure'][V(0xd7)]=c?.['text']??'';const d=this['_measure']['offsetWidth'];d>0x0?this['_select'][V(0xff)]['width']=d+0x11+'px':requestAnimationFrame(()=>this[V(0x153)]());}['_applyReadonlyState'](){const W=q;if(!this[W(0x144)]||!this[W(0xe7)])return;this['_input'][W(0xde)]=this['_readOnly'],this[W(0xe7)][W(0x13c)]=this['_readOnly'];}[q(0x115)](c,d){const X=q;if(d==null)return this['_value'];const e=c['unit'],f=this[X(0xf6)]?.({'value':c[X(0x155)],'numberText':c['numberText'],'rawValue':this[X(0x10b)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[X(0x15e)],d);}[q(0x130)](c){const Y=q;if(c==null)return null;const d=this[Y(0xf6)]?.({'value':Number[Y(0x12e)],'numberText':'','rawValue':this[Y(0x10b)],'fromUnit':'','toUnit':c})?.[Y(0xea)]();return d?d:null;}['_readEditableNumericValue'](c){const Z=q,d=parseNumericStyleInputValue(this[Z(0x10b)]);if(d['kind']==='numeric'){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']===Z(0x15a))return f['value'];return d[Z(0x155)];}if(this['_input']['value']?.['trim']()){const g=Number(this['_input']['value']);if(!Number['isNaN'](g))return g;}return this[Z(0xf8)];}[q(0x12b)](c,d){const a0=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this[a0(0x11e)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0x104)](c,d,e){const a1=q;this[a1(0xf8)]=this['_clampNumericValue'](c),this[a1(0xe6)]=d;const f=e??this['_getEffectiveStep'](d);this[a1(0x12d)](combineNumericStyleInputValue(this[a1(0x147)](this[a1(0xf8)],f),d),![],!![]);}[q(0x11e)](c){const a2=q;this[a2(0x12d)](c,!![],![]);}['_setValue'](c,d,e){const a3=q,f=c??'';if(!d&&!e&&this[a3(0x118)]!=null)return;const g=this[a3(0x10b)];this['_value']=f;if(e)this[a3(0xee)]=f;else{if(this[a3(0xee)]!=null){if(f===this[a3(0xee)]||f!==g)this['_displayValueLock']=null;}}this['_preferCustomMode']=![],this[a3(0x137)]();if(g!==f){e&&(this['_previewChanged']=!![],this[a3(0x100)][a3(0x131)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged'][a3(0x131)]({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a4=q;this[a4(0x118)]==null&&(this[a4(0x118)]=this[a4(0x10b)],this[a4(0x13b)]=![]);}['_finishPreviewSession'](c){const a5=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this['_displayValueLock']??this[a5(0x10b)],f=this['_previewChanged']&&d!==e,g=c||!f;this[a5(0x118)]=null,this['_previewChanged']=![],g?(this[a5(0xee)]=null,this['_value']=d,this['_updateValue']()):(this['_displayValueLock']=e,this[a5(0x137)]()),this[a5(0x132)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x101)](c){const a6=q,d=this[a6(0xe7)]['value'],e=this[a6(0x151)](d);this['_previewNumericValue'](this[a6(0x11a)](this['_readEditableNumericValue'](d),c,e),d,e);}['_stopStepperRepeat'](){const a7=q;this[a7(0x14e)]!=null&&(window['clearTimeout'](this[a7(0x14e)]),this['_stepperRepeatTimeout']=null),this[a7(0x13a)]!=null&&(window[a7(0xef)](this['_stepperRepeatInterval']),this['_stepperRepeatInterval']=null);}[q(0x116)](){const a8=q;window[a8(0x140)]('pointerup',this[a8(0xf9)],!![]),window['addEventListener']('pointercancel',this[a8(0xfa)],!![]),window[a8(0x140)](a8(0x139),this['_windowBlurHandler']);}['_attachDragWindowListeners'](){const a9=q;window[a9(0x140)]('pointermove',this['_windowDragPointerMoveHandler'],!![]),window['addEventListener'](a9(0x107),this['_windowDragPointerUpHandler'],!![]),window['addEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window['addEventListener']('blur',this['_windowDragBlurHandler']);}[q(0x111)](){const aa=q;window[aa(0x128)](aa(0x107),this['_windowPointerUpHandler'],!![]),window[aa(0x128)]('pointercancel',this[aa(0xfa)],!![]),window[aa(0x128)](aa(0x139),this['_windowBlurHandler']);}['_detachDragWindowListeners'](){const ab=q;window['removeEventListener'](ab(0xf7),this[ab(0xdb)],!![]),window['removeEventListener']('pointerup',this[ab(0x13e)],!![]),window['removeEventListener'](ab(0x161),this[ab(0xe1)],!![]),window[ab(0x128)]('blur',this[ab(0xf1)]);}[q(0x124)](c){const ac=q,d=Math['abs'](c),e=Math['min'](d,0x14)/0x5,f=Math['max'](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[ac(0x120)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math['sign'](c)*h;}['_getEffectiveStep'](c){const ad=q;return resolveNumericStyleInputStep(this[ad(0xe3)],this[ad(0x121)],c);}[q(0x11a)](c,d,e){const ae=q,f=e??this['_step'],g=this[ae(0x10a)](c);if(!Number[ae(0x11b)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[ae(0xd3)](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ae(0x102)](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this[ae(0xfb)](m,f));}[q(0x147)](c,d){const af=q,e=d??this[af(0x121)];return formatNumericStyleInputNumber(this[af(0xfb)](c,e),this['_getStepPrecision'](e));}[q(0xfb)](c,d){const e=this['_getStepPrecision'](d),f=0xa**e;return Math['round'](c*f)/f;}['_getStepPrecision'](c){const ag=q,d=(''+(c??this[ag(0x121)]))['toLowerCase']();if(d[ag(0x125)]('e-')){const [f,g]=d[ag(0x166)]('e-'),h=Number(g),i=f[ag(0x125)]('.')?f[ag(0xd5)]-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ag(0xd5)]-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const ah=q,c=this['_lastNumericUnit']??this['_units'][0x0];if(c==null)return![];this[ah(0x13d)]=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[ah(0x11e)](d),this[ah(0x114)]();return this[ah(0x12b)](this[ah(0xf8)],c),this[ah(0x114)]();}['_isSelectedUnitMode'](){const ai=q;return this[ai(0xe7)][ai(0xf4)][ai(0xe9)](0x0)?.[ai(0x165)]['kind']==='unit';}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const aj=q;let d=c;if(this[aj(0xfd)]!=null)d=Math[aj(0x120)](this[aj(0xfd)],d);if(this['_max']!=null)d=Math[aj(0x112)](this['_max'],d);return d;}}customElements['define'](q(0xf5),NumericStyleInput);