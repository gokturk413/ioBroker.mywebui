const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x22a))/0x1+parseInt(p(0x1f6))/0x2+-parseInt(p(0x1f2))/0x3*(-parseInt(p(0x261))/0x4)+parseInt(p(0x222))/0x5*(parseInt(p(0x1ed))/0x6)+-parseInt(p(0x24f))/0x7*(parseInt(p(0x219))/0x8)+-parseInt(p(0x225))/0x9*(-parseInt(p(0x1da))/0xa)+parseInt(p(0x22b))/0xb*(-parseInt(p(0x20a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x51e45));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1ca;const e=a();let f=e[c];return f;}function a(){const ao=['_readEditableNumericValue','_updateValue','_createCustomDisplayState','emit','unit','_windowBlurHandler','offsetWidth','selectedOptions','preventDefault','_getDomElement','selectValue','_units','kind','allowCustomValue','key','_windowDragBlurHandler','_handleWindowStepperPointerEnd','removeEventListener','_dragPointerId','468030oYDCps','_step','_windowDragPointerMoveHandler','selectedUnit','addEventListener','_switchToUnitModeForInteraction','_windowDragPointerCancelHandler','clearInterval','_setValue','_attachStepperWindowListeners','_finishStepperInteraction','unitValueConverter','_previewChanged','_stepperRepeatTimeout','_detachStepperWindowListeners','_getEffectiveStep','isFinite','_attachDragWindowListeners','pointerdown','808542NaCcpw','_input','_applyReadonlyState','_windowDragPointerUpHandler','increase','21gtcGWa','_finishDragInteraction','_dragStartY','valuePreviewChanged','672942JDiwzk','_increaseButton','_max','_clampNumericValue','_stopStepperRepeat','_detachDragWindowListeners','custom','_convertNumericValue','length','_readOnly','_formatInteractiveNumericValue','valuePreviewFinished','_startPreviewSession','_displayValueLock','numberText','template','Units','_unitValueConverter','option[value=\x22\x22]','Values','51780NnFCKK','disabled','_finishDragInteractionForPointerEvent','_allowCustomValue','_createOption','_windowPointerCancelHandler','dataset','_select','_fixedValues','hasPointerCapture','appendChild','text','step','Enter','_previewNumericValue','495912dWdpQy','_stepperPointerId','_value','_parseAttributesToProperties','clientY','_getDisplayState','round','pointerId','_applyTypedValue','5klUOQt','_measure','_applySelectedMode','63hkBtAO','toLowerCase','_scrubberButton','valueChanged','pointerup','456949ywKJyW','825gtPWun','pointermove','_isSelectedUnitMode','blur','inputValue','_stepperRepeatInterval','readOnly','trunc','createElement','_appliedDragSteps','mode','_lastNumericValue','display','fixedValues','item','includes','_decreaseButton','_lastNumericUnit','_wireEvents','min','_min','inputEnabled','_preferCustomMode','pointercancel','sign','_applyStepPreview','_handleWindowDragPointerMove','_calculateDraggedStepCount','width','_unitSteps','focus','_stepperDirection','_previewStartValue','select','options','indexOf','28BlzjJh','setTimeout','_handleStepperPointerDown','_normalizeOptionValues','_dragStartNumericValue','style','replaceChildren','_resolveCurrentValueForUnit','_finishPreviewSession','define','_commitValue','abs','inputVisible','_roundToStepPrecision','fixed','setPointerCapture','_applyNumericValue','change','322920ihTklc','unitSteps','_getStepPrecision','node-projects-numeric-style-input','label','_getInteractiveStepValue','optgroup','isNaN','max','value'];a=function(){return ao;};return a();}import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [q(0x205)]=html`
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
  `;['_value']='';get['value'](){const r=q;return this[r(0x21b)];}set['value'](c){const s=q;this[s(0x1e2)](c,![],![]);}[q(0x228)]=new TypedEvent();[q(0x1f5)]=new TypedEvent();[q(0x201)]=new TypedEvent();[q(0x1d2)]=['px','%','pt'];get['units'](){return[...this['_units']];}set['units'](c){const t=q;this['_units']=this['_normalizeOptionValues'](c),this[t(0x23c)]=this['_units'][0x0]??this['_lastNumericUnit'],this[t(0x26c)]();}['_fixedValues']=[];get[q(0x238)](){const u=q;return[...this[u(0x212)]];}set[q(0x238)](c){this['_fixedValues']=this['_normalizeOptionValues'](c),this['_updateValue']();}['_step']=0x1;get[q(0x216)](){const v=q;return this[v(0x1db)];}set['step'](c){const w=q;this[w(0x1db)]=Number[w(0x1ea)](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0x262)](){return{...this['_unitSteps']};}set['unitSteps'](c){const x=q;this[x(0x248)]=c??{};}['_min']=null;get['min'](){const y=q;return this[y(0x23f)];}set[q(0x23e)](c){const z=q;this[z(0x23f)]=Number[z(0x1ea)](c)?c:null;}[q(0x1f8)]=null;get['max'](){const A=q;return this[A(0x1f8)];}set[q(0x269)](c){const B=q;this[B(0x1f8)]=Number[B(0x1ea)](c)?c:null;}[q(0x1ff)]=![];get[q(0x231)](){return this['_readOnly'];}set[q(0x231)](c){const C=q;this[C(0x1ff)]=c,this['_applyReadonlyState']();}get['isInPreview'](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){return this['_allowCustomValue'];}set[q(0x1d4)](c){const D=q;this['_allowCustomValue']=c,this[D(0x26c)]();}['_unitValueConverter'];get[q(0x1e5)](){return this['_unitValueConverter'];}set[q(0x1e5)](c){const E=q;this[E(0x207)]=c;}[q(0x1ee)];[q(0x211)];['_measure'];['_scrubberButton'];['_increaseButton'];[q(0x23b)];['_lastNumericValue']=0x0;[q(0x23c)]='px';[q(0x1d9)]=null;[q(0x1f4)]=0x0;[q(0x253)]=0x0;[q(0x234)]=0x0;[q(0x24b)]=null;['_previewChanged']=![];[q(0x203)]=null;['_stepperPointerId']=null;[q(0x24a)]=0x0;['_stepperRepeatTimeout']=null;[q(0x230)]=null;[q(0x1dc)]=c=>this['_handleWindowDragPointerMove'](c);[q(0x1f0)]=c=>this['_finishDragInteractionForPointerEvent'](c,![]);[q(0x1e0)]=c=>this[q(0x20c)](c,!![]);[q(0x1d6)]=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this[q(0x1d7)](c);[q(0x20f)]=c=>this[q(0x1d7)](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);['_preferCustomMode']=![];constructor(){const F=q;super(),this['_restoreCachedInititalValues'](),this['_input']=this[F(0x1d0)]('input'),this['_select']=this[F(0x1d0)]('select'),this['_measure']=this['_getDomElement']('measure'),this[F(0x227)]=this['_getDomElement']('scrubber'),this['_increaseButton']=this[F(0x1d0)](F(0x1f1)),this['_decreaseButton']=this[F(0x1d0)]('decrease');}['ready'](){const G=q;this[G(0x21c)](),this[G(0x23d)](),this['_updateValue']();}['_wireEvents'](){const H=q;this[H(0x1ee)][H(0x1de)](H(0x260),()=>this['_applyTypedValue']()),this['_input'][H(0x1de)]('keydown',c=>{const I=H;c[I(0x1d5)]===I(0x217)&&(this[I(0x221)](),this[I(0x1ee)][I(0x22e)]());}),this['_scrubberButton'][H(0x1de)](H(0x1ec),c=>this['_handlePointerDown'](c)),this[H(0x211)]['addEventListener']('change',()=>this[H(0x224)]()),this[H(0x1f7)][H(0x1de)]('pointerdown',c=>this[H(0x251)](c,0x1)),this[H(0x23b)][H(0x1de)](H(0x1ec),c=>this[H(0x251)](c,-0x1));}['_handlePointerDown'](c){const J=q;if(this[J(0x1ff)])return;if(!this[J(0x22d)]()){if(!this[J(0x1df)]())return;}this[J(0x1d9)]=c['pointerId'],this['_dragStartY']=c['clientY'],this[J(0x253)]=this[J(0x26b)](this['_select']['value']),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this[J(0x1eb)]();try{this['_scrubberButton'][J(0x25e)](c['pointerId']);}catch{}c[J(0x1cf)]();}[q(0x245)](c){const K=q;if(this['_dragPointerId']!==c['pointerId']||!this[K(0x22d)]())return;const d=this['_calculateDraggedStepCount'](this[K(0x1f4)]-c[K(0x21d)]);if(d===this[K(0x234)])return;this['_appliedDragSteps']=d;const e=this[K(0x211)][K(0x26a)],f=this['_getEffectiveStep'](e);this[K(0x218)](this[K(0x266)](this['_dragStartNumericValue'],d,f),e,f),c[K(0x1cf)]();}['_finishDragInteractionForPointerEvent'](c,d){const L=q;if(this['_dragPointerId']!==c['pointerId'])return;this['_finishDragInteraction'](d,c[L(0x220)]);}[q(0x1f3)](c,d){const M=q;if(this[M(0x1d9)]==null)return;this[M(0x1d9)]=null,this[M(0x234)]=0x0,this[M(0x1fb)]();if(d!=null)try{if(this['_scrubberButton'][M(0x213)](d))this[M(0x227)]['releasePointerCapture'](d);}catch{}this[M(0x257)](c);}[q(0x251)](c,d){const N=q;if(this[N(0x1ff)])return;if(!this[N(0x22d)]()){if(!this['_switchToUnitModeForInteraction']())return;}this['_finishStepperInteraction'](!![]),this[N(0x21a)]=c['pointerId'],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this[N(0x1e7)]=window[N(0x250)](()=>{const O=N;this[O(0x230)]=window['setInterval'](()=>this[O(0x244)](this['_stepperDirection']),0x32);},0x15e),c[N(0x1cf)]();}['_handleWindowStepperPointerEnd'](c){const P=q;if(this['_stepperPointerId']!==c[P(0x220)])return;this[P(0x1e4)](![]);}['_finishStepperInteraction'](c){const Q=q;if(this['_stepperPointerId']==null)return;this[Q(0x21a)]=null,this['_stepperDirection']=0x0,this['_detachStepperWindowListeners'](),this[Q(0x1fa)](),this[Q(0x257)](c);}['_applySelectedMode'](){const R=q,c=this[R(0x211)]['selectedOptions'][R(0x239)](0x0);if(!c)return;const d=c['dataset'][R(0x1d3)];if(d===R(0x25d)){this[R(0x259)](c[R(0x26a)]);return;}if(d==='custom'){this['_preferCustomMode']=!![],this[R(0x26c)](),requestAnimationFrame(()=>{const S=R;this['_input'][S(0x249)](),this['_input'][S(0x24c)]();});return;}const e=c[R(0x26a)];this[R(0x23c)]=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this['_value']);if(f[R(0x1d3)]==='numeric'){const i=this['_convertNumericValue'](f,e);this[R(0x259)](i);return;}const g=this[R(0x256)](e);if(g!=null){this[R(0x259)](g);return;}if(f['kind']==='empty'){this[R(0x26c)](),this[R(0x1ee)]['focus']();return;}const h=Number(this['_input'][R(0x26a)]);if(!Number['isNaN'](h)){this[R(0x25f)](h,e);return;}this['_commitValue'](''),this[R(0x1ee)][R(0x249)]();}[q(0x221)](){const T=q,c=this[T(0x211)]['selectedOptions']['item'](0x0),d=c?.['dataset'][T(0x1d3)];if(d==='fixed')return;if(d===T(0x1fc)){this[T(0x259)](this['_input'][T(0x26a)]);return;}const e=this['_input']['value']?.['trim']()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[T(0x268)](f))this[T(0x236)]=this[T(0x1f9)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.[T(0x26a)]??''));}[q(0x26c)](){const U=q;if(!this['_input']||!this['_select'])return;if(this['_previewStartValue']==null)this['_renderSelectOptions']();const c=this['_getDisplayState'](this[U(0x203)]??this[U(0x21b)]);this['_input']['value']=c[U(0x22f)],this[U(0x1ee)][U(0x254)][U(0x237)]=c[U(0x25b)]?'':'none',this['_input'][U(0x20b)]=this['_readOnly']||!c[U(0x240)],this[U(0x211)]['value']=c[U(0x1d1)],this['_autoSizeSelect']();if(c[U(0x235)]==='unit'&&c[U(0x1dd)]!=null)this[U(0x23c)]=c[U(0x1dd)];if(c['mode']==='unit'&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this['_lastNumericValue']=this['_clampNumericValue'](f);}const d=this[U(0x1d2)][U(0x1fe)]>0x0,e=this[U(0x1ff)]||(!d||c[U(0x235)]==='custom');this['_scrubberButton'][U(0x20b)]=e,this['_increaseButton']['disabled']=e,this[U(0x23b)]['disabled']=e,this['_applyReadonlyState']();}[q(0x21e)](c){const V=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this[V(0x241)])return this['_createCustomDisplayState'](d[V(0x204)]);if(d['unit']&&this[V(0x1d2)]['length']&&!this[V(0x1d2)]['includes'](d['unit']))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this[V(0x23c)],this['_units'])??'';return{'mode':V(0x1cb),'inputValue':d[V(0x204)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units']['includes'](f)?f:this[V(0x211)][V(0x26a)]||customOptionValue,'selectedUnit':f};}if(d[V(0x1d3)]==='text'){if(!this[V(0x241)]&&this[V(0x212)][V(0x23a)](d['text']))return{'mode':V(0x25d),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[V(0x215)]};return this[V(0x26d)](d[V(0x215)]);}if(this[V(0x241)])return this[V(0x26d)]('');const e=this[V(0x23c)]??this['_units'][0x0]??'';if(this[V(0x1d2)]['includes'](e))return{'mode':V(0x1cb),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[V(0x26d)]('');}['_createCustomDisplayState'](c){const W=q;if(!this['_allowCustomValue']&&this['_units']['length'])return{'mode':W(0x1cb),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const X=q,c=this['_select']['value'];this[X(0x211)][X(0x255)]();if(this['_units']['length']){const d=document[X(0x233)]('optgroup');d[X(0x265)]=X(0x206);for(const e of this['_units'])d[X(0x214)](this['_createOption'](getNumericStyleInputUnitLabel(e),e,X(0x1cb)));this['_select']['appendChild'](d);}if(this[X(0x212)]['length']){const f=document[X(0x233)](X(0x267));f[X(0x265)]=X(0x209);for(const g of this['_fixedValues'])f['appendChild'](this['_createOption'](g,g,'fixed'));this['_select'][X(0x214)](f);}if(this[X(0x20d)]||this[X(0x211)][X(0x24d)]['length']===0x0)this[X(0x211)]['appendChild'](this[X(0x20e)]('custom',customOptionValue,X(0x1fc)));if(c!=='')this[X(0x211)]['value']=c;else{if(this['_select']['querySelector'](X(0x208)))this[X(0x211)]['value']='';}}[q(0x20e)](c,d,e){const Y=q,f=document[Y(0x233)]('option');return f[Y(0x215)]=c,f[Y(0x26a)]=d,f['dataset'][Y(0x1d3)]=e,f;}['_autoSizeSelect'](){const Z=q;if(!this['_measure']||!this['_select'])return;const c=this['_select'][Z(0x1ce)][Z(0x239)](0x0);this[Z(0x223)]['textContent']=c?.['text']??'';const d=this['_measure'][Z(0x1cd)];d>0x0?this['_select'][Z(0x254)][Z(0x247)]=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}[q(0x1ef)](){const a0=q;if(!this['_input']||!this[a0(0x211)])return;this['_input']['readOnly']=this['_readOnly'],this[a0(0x211)]['disabled']=this['_readOnly'];}[q(0x1fd)](c,d){const a1=q;if(d==null)return this['_value'];const e=c['unit'],f=this[a1(0x207)]?.({'value':c['value'],'numberText':c['numberText'],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const a2=q;if(c==null)return null;const d=this[a2(0x207)]?.({'value':Number['NaN'],'numberText':'','rawValue':this[a2(0x21b)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}[q(0x26b)](c){const a3=q,d=parseNumericStyleInputValue(this['_value']);if(d[a3(0x1d3)]==='numeric'){const e=this[a3(0x1fd)](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f['value'];return d[a3(0x26a)];}if(this['_input']['value']?.['trim']()){const g=Number(this[a3(0x1ee)][a3(0x26a)]);if(!Number[a3(0x268)](g))return g;}return this[a3(0x236)];}[q(0x25f)](c,d){const a4=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this[a4(0x259)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0x218)](c,d,e){const a5=q;this['_lastNumericValue']=this[a5(0x1f9)](c),this['_lastNumericUnit']=d;const f=e??this[a5(0x1e9)](d);this['_setValue'](combineNumericStyleInputValue(this[a5(0x200)](this['_lastNumericValue'],f),d),![],!![]);}[q(0x259)](c){this['_setValue'](c,!![],![]);}[q(0x1e2)](c,d,e){const a6=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this[a6(0x21b)];this[a6(0x21b)]=f;if(e)this[a6(0x203)]=f;else{if(this[a6(0x203)]!=null){if(f===this[a6(0x203)]||f!==g)this['_displayValueLock']=null;}}this['_preferCustomMode']=![],this['_updateValue']();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged']['emit']({'newValue':f,'oldValue':g}));if(d)this[a6(0x228)]['emit']({'newValue':f,'oldValue':g});}}[q(0x202)](){const a7=q;this[a7(0x24b)]==null&&(this['_previewStartValue']=this[a7(0x21b)],this[a7(0x1e6)]=![]);}['_finishPreviewSession'](c){const a8=q;if(this[a8(0x24b)]==null)return;const d=this[a8(0x24b)],e=this['_displayValueLock']??this[a8(0x21b)],f=this[a8(0x1e6)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this['_displayValueLock']=null,this[a8(0x21b)]=d,this[a8(0x26c)]()):(this['_displayValueLock']=e,this['_updateValue']()),this['valuePreviewFinished'][a8(0x1ca)]({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x244)](c){const a9=q,d=this['_select'][a9(0x26a)],e=this['_getEffectiveStep'](d);this[a9(0x218)](this[a9(0x266)](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0x1fa)](){const aa=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this[aa(0x1e7)]),this['_stepperRepeatTimeout']=null),this[aa(0x230)]!=null&&(window[aa(0x1e1)](this[aa(0x230)]),this['_stepperRepeatInterval']=null);}[q(0x1e3)](){const ab=q;window['addEventListener'](ab(0x229),this['_windowPointerUpHandler'],!![]),window[ab(0x1de)]('pointercancel',this['_windowPointerCancelHandler'],!![]),window[ab(0x1de)]('blur',this[ab(0x1cc)]);}['_attachDragWindowListeners'](){const ac=q;window[ac(0x1de)]('pointermove',this['_windowDragPointerMoveHandler'],!![]),window[ac(0x1de)]('pointerup',this[ac(0x1f0)],!![]),window['addEventListener'](ac(0x242),this[ac(0x1e0)],!![]),window[ac(0x1de)]('blur',this['_windowDragBlurHandler']);}[q(0x1e8)](){const ad=q;window[ad(0x1d8)]('pointerup',this['_windowPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this[ad(0x20f)],!![]),window[ad(0x1d8)]('blur',this['_windowBlurHandler']);}['_detachDragWindowListeners'](){const ae=q;window[ae(0x1d8)](ae(0x22c),this[ae(0x1dc)],!![]),window[ae(0x1d8)]('pointerup',this[ae(0x1f0)],!![]),window[ae(0x1d8)](ae(0x242),this['_windowDragPointerCancelHandler'],!![]),window[ae(0x1d8)](ae(0x22e),this['_windowDragBlurHandler']);}[q(0x246)](c){const af=q,d=Math[af(0x25a)](c),e=Math[af(0x23e)](d,0x14)/0x5,f=Math['max'](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[af(0x269)](d-0x3c,0x0)/0x2,h=Math[af(0x232)](e+f+g);return Math[af(0x243)](c)*h;}[q(0x1e9)](c){const ag=q;return resolveNumericStyleInputStep(this[ag(0x248)],this[ag(0x1db)],c);}[q(0x266)](c,d,e){const ah=q,f=e??this['_step'],g=this[ah(0x1f9)](c);if(!Number[ah(0x1ea)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this[ah(0x23f)]??0x0,i=(g-h)/f,j=Math[ah(0x21f)](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this[ah(0x1f9)](this['_roundToStepPrecision'](m,f));}[q(0x200)](c,d){const ai=q,e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this[ai(0x263)](e));}[q(0x25c)](c,d){const aj=q,e=this['_getStepPrecision'](d),f=0xa**e;return Math[aj(0x21f)](c*f)/f;}['_getStepPrecision'](c){const ak=q,d=(''+(c??this[ak(0x1db)]))[ak(0x226)]();if(d[ak(0x23a)]('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f[ak(0x23a)]('.')?f['length']-f[ak(0x24e)]('.')-0x1:0x0;return h+i;}const e=d[ak(0x24e)]('.');return e>=0x0?d['length']-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const al=q,c=this[al(0x23c)]??this['_units'][0x0];if(c==null)return![];this[al(0x241)]=![];const d=this[al(0x256)](c);if(d!=null)return this[al(0x259)](d),this['_isSelectedUnitMode']();return this[al(0x25f)](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const am=q;return this['_select']['selectedOptions']['item'](0x0)?.[am(0x210)][am(0x1d3)]===am(0x1cb);}[q(0x252)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x1f9)](c){const an=q;let d=c;if(this['_min']!=null)d=Math[an(0x269)](this[an(0x23f)],d);if(this['_max']!=null)d=Math[an(0x23e)](this[an(0x1f8)],d);return d;}}customElements[q(0x258)](q(0x264),NumericStyleInput);