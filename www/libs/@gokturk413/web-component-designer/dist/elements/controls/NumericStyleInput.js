const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x275))/0x1*(parseInt(p(0x1fa))/0x2)+parseInt(p(0x219))/0x3*(-parseInt(p(0x263))/0x4)+parseInt(p(0x220))/0x5+-parseInt(p(0x203))/0x6*(-parseInt(p(0x255))/0x7)+parseInt(p(0x22f))/0x8+parseInt(p(0x27d))/0x9*(parseInt(p(0x226))/0xa)+parseInt(p(0x233))/0xb*(-parseInt(p(0x25d))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb6fdd));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';function a(){const am=['_autoSizeSelect','NaN','clientY','_windowDragPointerCancelHandler','isNaN','6435185wFAlcE','selectValue','_setValue','_dragPointerId','trim','querySelector','10ZTyxiP','_input','inputVisible','numeric','_appliedDragSteps','includes','_unitSteps','_windowPointerUpHandler','fixedValues','1373320AKfuDk','_stepperRepeatTimeout','_formatInteractiveNumericValue','removeEventListener','855679MGzKQN','_lastNumericUnit','_renderSelectOptions','define','_unitValueConverter','createElement','_finishDragInteraction','_finishPreviewSession','_applyTypedValue','inputValue','disabled','_isSelectedUnitMode','scrubber','options','_normalizeOptionValues','optgroup','_switchToUnitModeForInteraction','unit','decrease','_scrubberButton','_applyReadonlyState','_dragStartNumericValue','valuePreviewChanged','min','ready','_attachDragWindowListeners','_min','template','_getStepPrecision','setInterval','item','focus','pointerup','indexOf','1953zHquTu','_finishStepperInteraction','_displayValueLock','_getInteractiveStepValue','_max','emit','pointerId','_value','156fGzlEA','_measure','selectedUnit','_clampNumericValue','_increaseButton','_handleWindowDragPointerMove','76hTplTx','allowCustomValue','select','key','isInPreview','fixed','label','_stepperRepeatInterval','_commitValue','_stopStepperRepeat','_attachStepperWindowListeners','pointermove','_lastNumericValue','pointerdown','node-projects-numeric-style-input','inputEnabled','_units','blur','194749rnFoZA','_windowBlurHandler','_handleWindowStepperPointerEnd','_preferCustomMode','_applyStepPreview','kind','_stepperDirection','_updateValue','3367575scspJJ','addEventListener','_previewStartValue','_dragStartY','_roundToStepPrecision','pointercancel','selectedOptions','_previewChanged','_createCustomDisplayState','_finishDragInteractionForPointerEvent','_calculateDraggedStepCount','_stepperPointerId','width','appendChild','dataset','_windowDragBlurHandler','4ZFcueW','_decreaseButton','_getDisplayState','style','_wireEvents','_getDomElement','_step','none','_readEditableNumericValue','8268dIgMPx','numberText','Values','length','_createOption','readOnly','text','max','textContent','_select','value','valueChanged','_readOnly','_resolveCurrentValueForUnit','_allowCustomValue','custom','floor','_applyNumericValue','_previewNumericValue','_windowDragPointerMoveHandler','_fixedValues','isFinite','10587YHzxrL','_handleStepperPointerDown'];a=function(){return am;};return a();}const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';function b(c,d){c=c-0x1f2;const e=a();let f=e[c];return f;}export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [q(0x24e)]=html`
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
  `;['_value']='';get[q(0x20d)](){return this['_value'];}set[q(0x20d)](c){const r=q;this[r(0x222)](c,![],![]);}[q(0x20e)]=new TypedEvent();[q(0x249)]=new TypedEvent();['valuePreviewFinished']=new TypedEvent();[q(0x273)]=['px','%','pt'];get['units'](){return[...this['_units']];}set['units'](c){const s=q;this['_units']=this[s(0x241)](c),this['_lastNumericUnit']=this[s(0x273)][0x0]??this['_lastNumericUnit'],this['_updateValue']();}[q(0x217)]=[];get[q(0x22e)](){return[...this['_fixedValues']];}set['fixedValues'](c){const t=q;this[t(0x217)]=this[t(0x241)](c),this[t(0x27c)]();}['_step']=0x1;get['step'](){const u=q;return this[u(0x200)];}set['step'](c){const v=q;this[v(0x200)]=Number['isFinite'](c)&&c>0x0?c:0x1;}['_unitSteps']={};get['unitSteps'](){const w=q;return{...this[w(0x22c)]};}set['unitSteps'](c){const x=q;this[x(0x22c)]=c??{};}['_min']=null;get[q(0x24a)](){return this['_min'];}set[q(0x24a)](c){const y=q;this[y(0x24d)]=Number[y(0x218)](c)?c:null;}[q(0x259)]=null;get[q(0x20a)](){return this['_max'];}set['max'](c){const z=q;this[z(0x259)]=Number[z(0x218)](c)?c:null;}['_readOnly']=![];get[q(0x208)](){const A=q;return this[A(0x20f)];}set['readOnly'](c){const B=q;this[B(0x20f)]=c,this[B(0x247)]();}get[q(0x267)](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){return this['_allowCustomValue'];}set[q(0x264)](c){const C=q;this[C(0x211)]=c,this[C(0x27c)]();}['_unitValueConverter'];get['unitValueConverter'](){const D=q;return this[D(0x237)];}set['unitValueConverter'](c){this['_unitValueConverter']=c;}['_input'];['_select'];['_measure'];['_scrubberButton'];['_increaseButton'];[q(0x1fb)];[q(0x26f)]=0x0;['_lastNumericUnit']='px';[q(0x223)]=null;['_dragStartY']=0x0;[q(0x248)]=0x0;[q(0x22a)]=0x0;[q(0x27f)]=null;[q(0x284)]=![];[q(0x257)]=null;[q(0x1f5)]=null;[q(0x27b)]=0x0;[q(0x230)]=null;[q(0x26a)]=null;['_windowDragPointerMoveHandler']=c=>this[q(0x262)](c);['_windowDragPointerUpHandler']=c=>this[q(0x1f3)](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x1f3)](c,!![]);[q(0x1f9)]=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this[q(0x277)](c);['_windowBlurHandler']=()=>this[q(0x256)](![]);[q(0x278)]=![];constructor(){const E=q;super(),this['_restoreCachedInititalValues'](),this[E(0x227)]=this[E(0x1ff)]('input'),this['_select']=this[E(0x1ff)](E(0x265)),this['_measure']=this[E(0x1ff)]('measure'),this[E(0x246)]=this['_getDomElement'](E(0x23f)),this['_increaseButton']=this[E(0x1ff)]('increase'),this[E(0x1fb)]=this[E(0x1ff)](E(0x245));}[q(0x24b)](){this['_parseAttributesToProperties'](),this['_wireEvents'](),this['_updateValue']();}[q(0x1fe)](){const F=q;this['_input']['addEventListener']('change',()=>this[F(0x23b)]()),this['_input']['addEventListener']('keydown',c=>{const G=F;c[G(0x266)]==='Enter'&&(this[G(0x23b)](),this[G(0x227)]['blur']());}),this['_scrubberButton']['addEventListener']('pointerdown',c=>this['_handlePointerDown'](c)),this['_select']['addEventListener']('change',()=>this['_applySelectedMode']()),this['_increaseButton'][F(0x27e)](F(0x270),c=>this[F(0x21a)](c,0x1)),this[F(0x1fb)]['addEventListener'](F(0x270),c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const H=q;if(this[H(0x20f)])return;if(!this[H(0x23e)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[H(0x223)]=c[H(0x25b)],this['_dragStartY']=c[H(0x21d)],this['_dragStartNumericValue']=this[H(0x202)](this[H(0x20c)]['value']),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this['_scrubberButton']['setPointerCapture'](c['pointerId']);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const I=q;if(this['_dragPointerId']!==c[I(0x25b)]||!this[I(0x23e)]())return;const d=this['_calculateDraggedStepCount'](this[I(0x280)]-c['clientY']);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this[I(0x20c)][I(0x20d)],f=this['_getEffectiveStep'](e);this['_previewNumericValue'](this[I(0x258)](this[I(0x248)],d,f),e,f),c['preventDefault']();}[q(0x1f3)](c,d){const J=q;if(this[J(0x223)]!==c[J(0x25b)])return;this['_finishDragInteraction'](d,c[J(0x25b)]);}[q(0x239)](c,d){const K=q;if(this[K(0x223)]==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton']['hasPointerCapture'](d))this[K(0x246)]['releasePointerCapture'](d);}catch{}this['_finishPreviewSession'](c);}['_handleStepperPointerDown'](c,d){const L=q;if(this[L(0x20f)])return;if(!this[L(0x23e)]()){if(!this['_switchToUnitModeForInteraction']())return;}this['_finishStepperInteraction'](!![]),this['_stepperPointerId']=c['pointerId'],this['_stepperDirection']=d,this[L(0x26d)](),this['_startPreviewSession'](),this[L(0x279)](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{const M=L;this['_stepperRepeatInterval']=window[M(0x250)](()=>this['_applyStepPreview'](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const N=q;if(this['_stepperPointerId']!==c[N(0x25b)])return;this['_finishStepperInteraction'](![]);}[q(0x256)](c){const O=q;if(this[O(0x1f5)]==null)return;this[O(0x1f5)]=null,this[O(0x27b)]=0x0,this['_detachStepperWindowListeners'](),this[O(0x26c)](),this[O(0x23a)](c);}['_applySelectedMode'](){const P=q,c=this[P(0x20c)]['selectedOptions'][P(0x251)](0x0);if(!c)return;const d=c['dataset']['kind'];if(d===P(0x268)){this[P(0x26b)](c['value']);return;}if(d===P(0x212)){this['_preferCustomMode']=!![],this[P(0x27c)](),requestAnimationFrame(()=>{const Q=P;this[Q(0x227)][Q(0x252)](),this['_input']['select']();});return;}const e=c['value'];this['_lastNumericUnit']=e,this[P(0x278)]=![];const f=parseNumericStyleInputValue(this['_value']);if(f[P(0x27a)]==='numeric'){const i=this['_convertNumericValue'](f,e);this[P(0x26b)](i);return;}const g=this[P(0x210)](e);if(g!=null){this['_commitValue'](g);return;}if(f[P(0x27a)]==='empty'){this[P(0x27c)](),this['_input']['focus']();return;}const h=Number(this[P(0x227)][P(0x20d)]);if(!Number[P(0x21f)](h)){this[P(0x214)](h,e);return;}this['_commitValue'](''),this[P(0x227)]['focus']();}['_applyTypedValue'](){const R=q,c=this[R(0x20c)]['selectedOptions']['item'](0x0),d=c?.['dataset']['kind'];if(d==='fixed')return;if(d===R(0x212)){this['_commitValue'](this['_input'][R(0x20d)]);return;}const e=this[R(0x227)][R(0x20d)]?.[R(0x224)]()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[R(0x21f)](f))this[R(0x26f)]=this['_clampNumericValue'](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.[R(0x20d)]??''));}[q(0x27c)](){const S=q;if(!this[S(0x227)]||!this['_select'])return;if(this[S(0x27f)]==null)this[S(0x235)]();const c=this[S(0x1fc)](this[S(0x257)]??this['_value']);this['_input'][S(0x20d)]=c[S(0x23c)],this[S(0x227)][S(0x1fd)]['display']=c[S(0x228)]?'':S(0x201),this[S(0x227)][S(0x23d)]=this[S(0x20f)]||!c[S(0x272)],this['_select'][S(0x20d)]=c[S(0x221)],this[S(0x21b)]();if(c['mode']==='unit'&&c['selectedUnit']!=null)this['_lastNumericUnit']=c[S(0x25f)];if(c['mode']===S(0x244)&&c[S(0x23c)]!==''){const f=Number(c[S(0x23c)]);if(!Number['isNaN'](f))this['_lastNumericValue']=this[S(0x260)](f);}const d=this[S(0x273)]['length']>0x0,e=this['_readOnly']||(!d||c['mode']==='custom');this['_scrubberButton']['disabled']=e,this[S(0x261)]['disabled']=e,this['_decreaseButton']['disabled']=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const T=q,d=parseNumericStyleInputValue(c);if(d[T(0x27a)]==='numeric'){if(this[T(0x278)])return this['_createCustomDisplayState'](d['numberText']);if(d[T(0x244)]&&this[T(0x273)]['length']&&!this['_units'][T(0x22b)](d['unit']))return this[T(0x1f2)](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this['_lastNumericUnit'],this[T(0x273)])??'';return{'mode':'unit','inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units']['includes'](f)?f:this['_select'][T(0x20d)]||customOptionValue,'selectedUnit':f};}if(d['kind']==='text'){if(!this[T(0x278)]&&this[T(0x217)][T(0x22b)](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[T(0x209)]};return this[T(0x1f2)](d[T(0x209)]);}if(this['_preferCustomMode'])return this['_createCustomDisplayState']('');const e=this[T(0x234)]??this[T(0x273)][0x0]??'';if(this['_units'][T(0x22b)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}[q(0x1f2)](c){const U=q;if(!this['_allowCustomValue']&&this['_units']['length'])return{'mode':U(0x244),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[U(0x273)][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':U(0x212),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x235)](){const V=q,c=this[V(0x20c)][V(0x20d)];this[V(0x20c)]['replaceChildren']();if(this[V(0x273)]['length']){const d=document['createElement']('optgroup');d[V(0x269)]='Units';for(const e of this['_units'])d[V(0x1f7)](this['_createOption'](getNumericStyleInputUnitLabel(e),e,'unit'));this['_select']['appendChild'](d);}if(this['_fixedValues'][V(0x206)]){const f=document[V(0x238)](V(0x242));f[V(0x269)]=V(0x205);for(const g of this['_fixedValues'])f[V(0x1f7)](this[V(0x207)](g,g,'fixed'));this['_select'][V(0x1f7)](f);}if(this[V(0x211)]||this[V(0x20c)][V(0x240)]['length']===0x0)this['_select'][V(0x1f7)](this['_createOption']('custom',customOptionValue,V(0x212)));if(c!=='')this[V(0x20c)]['value']=c;else{if(this['_select'][V(0x225)]('option[value=\x22\x22]'))this[V(0x20c)][V(0x20d)]='';}}['_createOption'](c,d,e){const W=q,f=document['createElement']('option');return f['text']=c,f['value']=d,f[W(0x1f8)]['kind']=e,f;}[q(0x21b)](){const X=q;if(!this[X(0x25e)]||!this['_select'])return;const c=this[X(0x20c)][X(0x283)][X(0x251)](0x0);this[X(0x25e)][X(0x20b)]=c?.[X(0x209)]??'';const d=this['_measure']['offsetWidth'];d>0x0?this[X(0x20c)][X(0x1fd)][X(0x1f6)]=d+0x11+'px':requestAnimationFrame(()=>this[X(0x21b)]());}[q(0x247)](){const Y=q;if(!this[Y(0x227)]||!this[Y(0x20c)])return;this['_input'][Y(0x208)]=this[Y(0x20f)],this['_select']['disabled']=this[Y(0x20f)];}['_convertNumericValue'](c,d){const Z=q;if(d==null)return this[Z(0x25c)];const e=c['unit'],f=this[Z(0x237)]?.({'value':c['value'],'numberText':c[Z(0x204)],'rawValue':this[Z(0x25c)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const a0=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number[a0(0x21c)],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const a1=q,d=parseNumericStyleInputValue(this['_value']);if(d['kind']===a1(0x229)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f[a1(0x20d)];return d['value'];}if(this['_input']['value']?.['trim']()){const g=Number(this['_input']['value']);if(!Number[a1(0x21f)](g))return g;}return this['_lastNumericValue'];}[q(0x214)](c,d){const a2=q;this['_lastNumericValue']=this[a2(0x260)](c),this['_lastNumericUnit']=d,this[a2(0x26b)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a2(0x26f)]),d));}['_previewNumericValue'](c,d,e){const a3=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d;const f=e??this['_getEffectiveStep'](d);this['_setValue'](combineNumericStyleInputValue(this[a3(0x231)](this[a3(0x26f)],f),d),![],!![]);}[q(0x26b)](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a4=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this[a4(0x25c)];this[a4(0x25c)]=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this[a4(0x257)]||f!==g)this['_displayValueLock']=null;}}this['_preferCustomMode']=![],this[a4(0x27c)]();if(g!==f){e&&(this[a4(0x284)]=!![],this[a4(0x249)][a4(0x25a)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged'][a4(0x25a)]({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a5=q;this[a5(0x27f)]==null&&(this['_previewStartValue']=this['_value'],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a6=q;if(this[a6(0x27f)]==null)return;const d=this[a6(0x27f)],e=this[a6(0x257)]??this['_value'],f=this['_previewChanged']&&d!==e,g=c||!f;this[a6(0x27f)]=null,this[a6(0x284)]=![],g?(this[a6(0x257)]=null,this[a6(0x25c)]=d,this[a6(0x27c)]()):(this['_displayValueLock']=e,this[a6(0x27c)]()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a7=q,d=this[a7(0x20c)]['value'],e=this['_getEffectiveStep'](d);this[a7(0x215)](this[a7(0x258)](this[a7(0x202)](d),c,e),d,e);}[q(0x26c)](){const a8=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this[a8(0x230)]),this['_stepperRepeatTimeout']=null),this[a8(0x26a)]!=null&&(window['clearInterval'](this['_stepperRepeatInterval']),this[a8(0x26a)]=null);}['_attachStepperWindowListeners'](){const a9=q;window[a9(0x27e)](a9(0x253),this['_windowPointerUpHandler'],!![]),window[a9(0x27e)]('pointercancel',this['_windowPointerCancelHandler'],!![]),window['addEventListener']('blur',this['_windowBlurHandler']);}[q(0x24c)](){const aa=q;window['addEventListener']('pointermove',this[aa(0x216)],!![]),window['addEventListener'](aa(0x253),this['_windowDragPointerUpHandler'],!![]),window['addEventListener'](aa(0x282),this[aa(0x21e)],!![]),window['addEventListener'](aa(0x274),this[aa(0x1f9)]);}['_detachStepperWindowListeners'](){const ab=q;window[ab(0x232)](ab(0x253),this[ab(0x22d)],!![]),window['removeEventListener']('pointercancel',this['_windowPointerCancelHandler'],!![]),window[ab(0x232)](ab(0x274),this[ab(0x276)]);}['_detachDragWindowListeners'](){const ac=q;window['removeEventListener'](ac(0x26e),this[ac(0x216)],!![]),window[ac(0x232)]('pointerup',this['_windowDragPointerUpHandler'],!![]),window[ac(0x232)]('pointercancel',this[ac(0x21e)],!![]),window['removeEventListener'](ac(0x274),this['_windowDragBlurHandler']);}[q(0x1f4)](c){const ad=q,d=Math['abs'](c),e=Math[ad(0x24a)](d,0x14)/0x5,f=Math['max'](Math[ad(0x24a)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math['sign'](c)*h;}['_getEffectiveStep'](c){const ae=q;return resolveNumericStyleInputStep(this['_unitSteps'],this[ae(0x200)],c);}['_getInteractiveStepValue'](c,d,e){const af=q,f=e??this['_step'],g=this[af(0x260)](c);if(!Number[af(0x218)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this[af(0x24d)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[af(0x213)](i);l=o+d+0x1;}const m=h+l*f;return this[af(0x260)](this[af(0x281)](m,f));}[q(0x231)](c,d){const ag=q,e=d??this['_step'];return formatNumericStyleInputNumber(this[ag(0x281)](c,e),this['_getStepPrecision'](e));}['_roundToStepPrecision'](c,d){const ah=q,e=this[ah(0x24f)](d),f=0xa**e;return Math['round'](c*f)/f;}[q(0x24f)](c){const ai=q,d=(''+(c??this['_step']))['toLowerCase']();if(d['includes']('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f['includes']('.')?f[ai(0x206)]-f[ai(0x254)]('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0x243)](){const aj=q,c=this[aj(0x234)]??this[aj(0x273)][0x0];if(c==null)return![];this[aj(0x278)]=![];const d=this[aj(0x210)](c);if(d!=null)return this['_commitValue'](d),this[aj(0x23e)]();return this['_applyNumericValue'](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const ak=q;return this[ak(0x20c)][ak(0x283)][ak(0x251)](0x0)?.[ak(0x1f8)][ak(0x27a)]===ak(0x244);}[q(0x241)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x260)](c){const al=q;let d=c;if(this[al(0x24d)]!=null)d=Math['max'](this['_min'],d);if(this['_max']!=null)d=Math[al(0x24a)](this['_max'],d);return d;}}customElements[q(0x236)](q(0x271),NumericStyleInput);