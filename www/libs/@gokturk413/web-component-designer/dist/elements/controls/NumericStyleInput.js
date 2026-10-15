const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x121))/0x1*(-parseInt(p(0x102))/0x2)+parseInt(p(0xe3))/0x3*(parseInt(p(0x129))/0x4)+-parseInt(p(0xbe))/0x5*(parseInt(p(0xcf))/0x6)+-parseInt(p(0xd4))/0x7+-parseInt(p(0x11d))/0x8*(-parseInt(p(0xc6))/0x9)+parseInt(p(0xbb))/0xa*(-parseInt(p(0xec))/0xb)+parseInt(p(0xf5))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe1cf5));function b(c,d){c=c-0xae;const e=a();let f=e[c];return f;}function a(){const am=['_getDomElement','increase','pointerdown','preventDefault','8lIGVKe','abs','_select','label','31188TMAPct','inputValue','_attachDragWindowListeners','includes','_preferCustomMode','units','change','_stopStepperRepeat','12wkdiXt','_windowDragPointerMoveHandler','_autoSizeSelect','addEventListener','ready','fixedValues','_stepperRepeatInterval','numeric','_units','_calculateDraggedStepCount','blur','focus','clientY','optgroup','trim','_isSelectedUnitMode','_measure','_stepperPointerId','split','_input','node-projects-numeric-style-input','_max','_unitValueConverter','value','_applyStepPreview','style','trunc','indexOf','_getStepPrecision','_readEditableNumericValue','clearTimeout','_finishDragInteraction','_windowPointerUpHandler','custom','_dragStartNumericValue','Units','_allowCustomValue','_displayValueLock','_createCustomDisplayState','_applyTypedValue','pointerup','_normalizeOptionValues','_resolveCurrentValueForUnit','textContent','_windowPointerCancelHandler','item','5888610MPDBkP','dataset','inputEnabled','575045uqJtUU','selectValue','min','_applyNumericValue','empty','_getEffectiveStep','select','_updateValue','5884191ORiPYy','decrease','_appliedDragSteps','_previewStartValue','text','pointerId','_handleStepperPointerDown','key','_previewChanged','6HxnfGt','_lastNumericUnit','_getInteractiveStepValue','createElement','selectedOptions','9771153axUFUB','setTimeout','_min','Enter','_commitValue','selectedUnit','fixed','_unitSteps','ceil','hasPointerCapture','_readOnly','length','_setValue','_finishStepperInteraction','_step','1082289OKYOsi','round','isNaN','_getDisplayState','_finishDragInteractionForPointerEvent','valuePreviewChanged','_value','max','valueChanged','33NAOmHD','step','_applyReadonlyState','_handlePointerDown','_fixedValues','removeEventListener','disabled','valuePreviewFinished','_windowDragBlurHandler','47934144mcNqGN','_clampNumericValue','unitValueConverter','_detachDragWindowListeners','pointercancel','kind','option','_switchToUnitModeForInteraction','setInterval','_previewNumericValue','pointermove','_windowBlurHandler','toLowerCase','98PcTeXH','_dragPointerId','_stepperDirection','_decreaseButton','_handleWindowDragPointerMove','_windowDragPointerUpHandler','emit','numberText','isFinite','unit','_renderSelectOptions','appendChild','_stepperRepeatTimeout','readOnly','mode','_handleWindowStepperPointerEnd','_finishPreviewSession','_applySelectedMode','allowCustomValue','_startPreviewSession','_createOption','_scrubberButton','_lastNumericValue'];a=function(){return am;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']='';get[q(0x140)](){const r=q;return this[r(0xe9)];}set['value'](c){const s=q;this[s(0xe0)](c,![],![]);}[q(0xeb)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[q(0xf3)]=new TypedEvent();['_units']=['px','%','pt'];get['units'](){const t=q;return[...this[t(0x131)]];}set[q(0x126)](c){const u=q;this[u(0x131)]=this['_normalizeOptionValues'](c),this[u(0xd0)]=this[u(0x131)][0x0]??this[u(0xd0)],this[u(0xc5)]();}[q(0xf0)]=[];get[q(0x12e)](){const v=q;return[...this[v(0xf0)]];}set['fixedValues'](c){const w=q;this[w(0xf0)]=this[w(0xb6)](c),this[w(0xc5)]();}['_step']=0x1;get[q(0xed)](){return this['_step'];}set['step'](c){const x=q;this[x(0xe2)]=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0xdb)]={};get['unitSteps'](){const y=q;return{...this[y(0xdb)]};}set['unitSteps'](c){this['_unitSteps']=c??{};}[q(0xd6)]=null;get['min'](){return this['_min'];}set['min'](c){this['_min']=Number['isFinite'](c)?c:null;}[q(0x13e)]=null;get['max'](){return this['_max'];}set[q(0xea)](c){const z=q;this[z(0x13e)]=Number['isFinite'](c)?c:null;}['_readOnly']=![];get[q(0x10f)](){const A=q;return this[A(0xde)];}set[q(0x10f)](c){const B=q;this['_readOnly']=c,this[B(0xee)]();}get['isInPreview'](){return this['_previewStartValue']!=null;}[q(0xb1)]=!![];get[q(0x114)](){return this['_allowCustomValue'];}set['allowCustomValue'](c){const C=q;this[C(0xb1)]=c,this[C(0xc5)]();}[q(0x13f)];get[q(0xf7)](){const D=q;return this[D(0x13f)];}set[q(0xf7)](c){const E=q;this[E(0x13f)]=c;}[q(0x13c)];[q(0x11f)];['_measure'];[q(0x117)];['_increaseButton'];[q(0x105)];[q(0x118)]=0x0;['_lastNumericUnit']='px';['_dragPointerId']=null;['_dragStartY']=0x0;['_dragStartNumericValue']=0x0;[q(0xc8)]=0x0;['_previewStartValue']=null;['_previewChanged']=![];['_displayValueLock']=null;['_stepperPointerId']=null;['_stepperDirection']=0x0;[q(0x10e)]=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0x106)](c);[q(0x107)]=c=>this[q(0xe7)](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);['_windowDragBlurHandler']=()=>this[q(0x148)](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0xb9)]=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this[q(0xe1)](![]);[q(0x125)]=![];constructor(){const F=q;super(),this['_restoreCachedInititalValues'](),this[F(0x13c)]=this['_getDomElement']('input'),this[F(0x11f)]=this['_getDomElement'](F(0xc4)),this['_measure']=this['_getDomElement']('measure'),this['_scrubberButton']=this[F(0x119)]('scrubber'),this['_increaseButton']=this['_getDomElement'](F(0x11a)),this[F(0x105)]=this['_getDomElement'](F(0xc7));}[q(0x12d)](){this['_parseAttributesToProperties'](),this['_wireEvents'](),this['_updateValue']();}['_wireEvents'](){const G=q;this['_input'][G(0x12c)](G(0x127),()=>this[G(0xb4)]()),this['_input']['addEventListener']('keydown',c=>{const H=G;c[H(0xcd)]===H(0xd7)&&(this['_applyTypedValue'](),this['_input']['blur']());}),this[G(0x117)]['addEventListener']('pointerdown',c=>this[G(0xef)](c)),this[G(0x11f)]['addEventListener'](G(0x127),()=>this['_applySelectedMode']()),this['_increaseButton']['addEventListener'](G(0x11b),c=>this[G(0xcc)](c,0x1)),this['_decreaseButton'][G(0x12c)]('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}[q(0xef)](c){const I=q;if(this['_readOnly'])return;if(!this[I(0x138)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[I(0x103)]=c['pointerId'],this['_dragStartY']=c['clientY'],this[I(0xaf)]=this[I(0x146)](this['_select']['value']),this[I(0xc8)]=0x0,this[I(0x115)](),this[I(0x123)]();try{this['_scrubberButton']['setPointerCapture'](c['pointerId']);}catch{}c[I(0x11c)]();}['_handleWindowDragPointerMove'](c){const J=q;if(this['_dragPointerId']!==c[J(0xcb)]||!this['_isSelectedUnitMode']())return;const d=this[J(0x132)](this['_dragStartY']-c[J(0x135)]);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this[J(0x11f)]['value'],f=this[J(0xc3)](e);this[J(0xfe)](this[J(0xd1)](this[J(0xaf)],d,f),e,f),c['preventDefault']();}['_finishDragInteractionForPointerEvent'](c,d){const K=q;if(this['_dragPointerId']!==c[K(0xcb)])return;this['_finishDragInteraction'](d,c['pointerId']);}['_finishDragInteraction'](c,d){const L=q;if(this[L(0x103)]==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this[L(0xf8)]();if(d!=null)try{if(this['_scrubberButton'][L(0xdd)](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this['_finishPreviewSession'](c);}['_handleStepperPointerDown'](c,d){const M=q;if(this['_readOnly'])return;if(!this[M(0x138)]()){if(!this['_switchToUnitModeForInteraction']())return;}this['_finishStepperInteraction'](!![]),this['_stepperPointerId']=c[M(0xcb)],this[M(0x104)]=d,this['_attachStepperWindowListeners'](),this[M(0x115)](),this[M(0x141)](d),this[M(0x10e)]=window[M(0xd5)](()=>{const N=M;this[N(0x12f)]=window[N(0xfd)](()=>this[N(0x141)](this[N(0x104)]),0x32);},0x15e),c[M(0x11c)]();}[q(0x111)](c){if(this['_stepperPointerId']!==c['pointerId'])return;this['_finishStepperInteraction'](![]);}[q(0xe1)](c){const O=q;if(this[O(0x13a)]==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this[O(0x112)](c);}[q(0x113)](){const P=q,c=this[P(0x11f)]['selectedOptions']['item'](0x0);if(!c)return;const d=c[P(0xbc)]['kind'];if(d===P(0xda)){this['_commitValue'](c['value']);return;}if(d===P(0xae)){this['_preferCustomMode']=!![],this['_updateValue'](),requestAnimationFrame(()=>{const Q=P;this['_input']['focus'](),this['_input'][Q(0xc4)]();});return;}const e=c['value'];this[P(0xd0)]=e,this[P(0x125)]=![];const f=parseNumericStyleInputValue(this[P(0xe9)]);if(f['kind']==='numeric'){const i=this['_convertNumericValue'](f,e);this[P(0xd8)](i);return;}const g=this[P(0xb7)](e);if(g!=null){this[P(0xd8)](g);return;}if(f[P(0xfa)]===P(0xc2)){this[P(0xc5)](),this[P(0x13c)][P(0x134)]();return;}const h=Number(this[P(0x13c)]['value']);if(!Number['isNaN'](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this[P(0x13c)]['focus']();}['_applyTypedValue'](){const R=q,c=this[R(0x11f)]['selectedOptions'][R(0xba)](0x0),d=c?.['dataset'][R(0xfa)];if(d===R(0xda))return;if(d===R(0xae)){this['_commitValue'](this['_input']['value']);return;}const e=this['_input']['value']?.[R(0x137)]()??'';if(!e){this[R(0xd8)]('');return;}const f=Number(e);if(!Number[R(0xe5)](f))this['_lastNumericValue']=this['_clampNumericValue'](f);this[R(0xd8)](combineNumericStyleInputValue(e,c?.[R(0x140)]??''));}['_updateValue'](){const S=q;if(!this['_input']||!this['_select'])return;if(this['_previewStartValue']==null)this[S(0x10c)]();const c=this[S(0xe6)](this['_displayValueLock']??this['_value']);this[S(0x13c)]['value']=c[S(0x122)],this[S(0x13c)][S(0x142)]['display']=c['inputVisible']?'':'none',this[S(0x13c)]['disabled']=this[S(0xde)]||!c[S(0xbd)],this[S(0x11f)]['value']=c[S(0xbf)],this['_autoSizeSelect']();if(c[S(0x110)]===S(0x10b)&&c[S(0xd9)]!=null)this[S(0xd0)]=c[S(0xd9)];if(c[S(0x110)]===S(0x10b)&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this[S(0x118)]=this[S(0xf6)](f);}const d=this['_units']['length']>0x0,e=this[S(0xde)]||(!d||c[S(0x110)]===S(0xae));this['_scrubberButton'][S(0xf2)]=e,this['_increaseButton'][S(0xf2)]=e,this[S(0x105)][S(0xf2)]=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const T=q,d=parseNumericStyleInputValue(c);if(d[T(0xfa)]==='numeric'){if(this['_preferCustomMode'])return this['_createCustomDisplayState'](d[T(0x109)]);if(d[T(0x10b)]&&this[T(0x131)][T(0xdf)]&&!this[T(0x131)][T(0x124)](d[T(0x10b)]))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this['_lastNumericUnit'],this['_units'])??'';return{'mode':'unit','inputValue':d[T(0x109)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units']['includes'](f)?f:this[T(0x11f)][T(0x140)]||customOptionValue,'selectedUnit':f};}if(d['kind']==='text'){if(!this[T(0x125)]&&this[T(0xf0)][T(0x124)](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this['_createCustomDisplayState'](d[T(0xca)]);}if(this['_preferCustomMode'])return this[T(0xb3)]('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this[T(0x131)][T(0x124)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[T(0xb3)]('');}[q(0xb3)](c){const U=q;if(!this['_allowCustomValue']&&this['_units']['length'])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this[U(0x131)][0x0]};return{'mode':U(0xae),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const V=q,c=this[V(0x11f)]['value'];this['_select']['replaceChildren']();if(this['_units'][V(0xdf)]){const d=document[V(0xd2)]('optgroup');d[V(0x120)]=V(0xb0);for(const e of this['_units'])d['appendChild'](this[V(0x116)](getNumericStyleInputUnitLabel(e),e,V(0x10b)));this[V(0x11f)]['appendChild'](d);}if(this['_fixedValues']['length']){const f=document[V(0xd2)](V(0x136));f['label']='Values';for(const g of this['_fixedValues'])f['appendChild'](this['_createOption'](g,g,V(0xda)));this[V(0x11f)][V(0x10d)](f);}if(this[V(0xb1)]||this['_select']['options'][V(0xdf)]===0x0)this[V(0x11f)][V(0x10d)](this[V(0x116)](V(0xae),customOptionValue,'custom'));if(c!=='')this['_select']['value']=c;else{if(this['_select']['querySelector']('option[value=\x22\x22]'))this[V(0x11f)]['value']='';}}['_createOption'](c,d,e){const W=q,f=document['createElement'](W(0xfb));return f[W(0xca)]=c,f['value']=d,f['dataset'][W(0xfa)]=e,f;}[q(0x12b)](){const X=q;if(!this['_measure']||!this['_select'])return;const c=this['_select'][X(0xd3)][X(0xba)](0x0);this[X(0x139)][X(0xb8)]=c?.[X(0xca)]??'';const d=this['_measure']['offsetWidth'];d>0x0?this['_select'][X(0x142)]['width']=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}[q(0xee)](){const Y=q;if(!this['_input']||!this[Y(0x11f)])return;this['_input'][Y(0x10f)]=this[Y(0xde)],this['_select']['disabled']=this[Y(0xde)];}['_convertNumericValue'](c,d){const Z=q;if(d==null)return this['_value'];const e=c['unit'],f=this[Z(0x13f)]?.({'value':c[Z(0x140)],'numberText':c[Z(0x109)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}[q(0xb7)](c){const a0=q;if(c==null)return null;const d=this[a0(0x13f)]?.({'value':Number['NaN'],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}[q(0x146)](c){const a1=q,d=parseNumericStyleInputValue(this['_value']);if(d[a1(0xfa)]===a1(0x130)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f[a1(0xfa)]===a1(0x130))return f[a1(0x140)];return d['value'];}if(this['_input']['value']?.[a1(0x137)]()){const g=Number(this['_input']['value']);if(!Number[a1(0xe5)](g))return g;}return this['_lastNumericValue'];}[q(0xc1)](c,d){this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0xfe)](c,d,e){const a2=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this[a2(0xd0)]=d;const f=e??this[a2(0xc3)](d);this[a2(0xe0)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this['_lastNumericValue'],f),d),![],!![]);}[q(0xd8)](c){const a3=q;this[a3(0xe0)](c,!![],![]);}[q(0xe0)](c,d,e){const a4=q,f=c??'';if(!d&&!e&&this[a4(0xc9)]!=null)return;const g=this[a4(0xe9)];this[a4(0xe9)]=f;if(e)this['_displayValueLock']=f;else{if(this[a4(0xb2)]!=null){if(f===this['_displayValueLock']||f!==g)this['_displayValueLock']=null;}}this['_preferCustomMode']=![],this['_updateValue']();if(g!==f){e&&(this['_previewChanged']=!![],this[a4(0xe8)][a4(0x108)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}[q(0x115)](){const a5=q;this['_previewStartValue']==null&&(this['_previewStartValue']=this['_value'],this[a5(0xce)]=![]);}['_finishPreviewSession'](c){const a6=q;if(this['_previewStartValue']==null)return;const d=this[a6(0xc9)],e=this[a6(0xb2)]??this['_value'],f=this['_previewChanged']&&d!==e,g=c||!f;this[a6(0xc9)]=null,this[a6(0xce)]=![],g?(this['_displayValueLock']=null,this[a6(0xe9)]=d,this['_updateValue']()):(this['_displayValueLock']=e,this['_updateValue']()),this['valuePreviewFinished'][a6(0x108)]({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a7=q,d=this['_select']['value'],e=this['_getEffectiveStep'](d);this[a7(0xfe)](this[a7(0xd1)](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0x128)](){const a8=q;this['_stepperRepeatTimeout']!=null&&(window[a8(0x147)](this['_stepperRepeatTimeout']),this[a8(0x10e)]=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this['_stepperRepeatInterval']),this['_stepperRepeatInterval']=null);}['_attachStepperWindowListeners'](){const a9=q;window[a9(0x12c)](a9(0xb5),this[a9(0x149)],!![]),window[a9(0x12c)](a9(0xf9),this[a9(0xb9)],!![]),window['addEventListener']('blur',this[a9(0x100)]);}[q(0x123)](){const aa=q;window['addEventListener']('pointermove',this['_windowDragPointerMoveHandler'],!![]),window[aa(0x12c)]('pointerup',this[aa(0x107)],!![]),window['addEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window['addEventListener'](aa(0x133),this[aa(0xf4)]);}['_detachStepperWindowListeners'](){const ab=q;window['removeEventListener'](ab(0xb5),this['_windowPointerUpHandler'],!![]),window['removeEventListener'](ab(0xf9),this['_windowPointerCancelHandler'],!![]),window[ab(0xf1)]('blur',this[ab(0x100)]);}[q(0xf8)](){const ac=q;window[ac(0xf1)](ac(0xff),this[ac(0x12a)],!![]),window['removeEventListener'](ac(0xb5),this['_windowDragPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window[ac(0xf1)](ac(0x133),this[ac(0xf4)]);}[q(0x132)](c){const ad=q,d=Math[ad(0x11e)](c),e=Math[ad(0xc0)](d,0x14)/0x5,f=Math['max'](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[ad(0xea)](d-0x3c,0x0)/0x2,h=Math[ad(0x143)](e+f+g);return Math['sign'](c)*h;}['_getEffectiveStep'](c){const ae=q;return resolveNumericStyleInputStep(this[ae(0xdb)],this['_step'],c);}[q(0xd1)](c,d,e){const af=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number[af(0x10a)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[af(0xe4)](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[af(0xdc)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this[af(0xf6)](this['_roundToStepPrecision'](m,f));}['_formatInteractiveNumericValue'](c,d){const ag=q,e=d??this[ag(0xe2)];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this[ag(0x145)](e));}['_roundToStepPrecision'](c,d){const ah=q,e=this['_getStepPrecision'](d),f=0xa**e;return Math[ah(0xe4)](c*f)/f;}['_getStepPrecision'](c){const ai=q,d=(''+(c??this[ai(0xe2)]))[ai(0x101)]();if(d['includes']('e-')){const [f,g]=d[ai(0x13b)]('e-'),h=Number(g),i=f[ai(0x124)]('.')?f['length']-f[ai(0x144)]('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0xfc)](){const aj=q,c=this[aj(0xd0)]??this[aj(0x131)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[aj(0xb7)](c);if(d!=null)return this['_commitValue'](d),this[aj(0x138)]();return this[aj(0xc1)](this[aj(0x118)],c),this[aj(0x138)]();}['_isSelectedUnitMode'](){const ak=q;return this['_select']['selectedOptions'][ak(0xba)](0x0)?.['dataset'][ak(0xfa)]===ak(0x10b);}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const al=q;let d=c;if(this['_min']!=null)d=Math['max'](this['_min'],d);if(this['_max']!=null)d=Math[al(0xc0)](this['_max'],d);return d;}}customElements['define'](q(0x13d),NumericStyleInput);