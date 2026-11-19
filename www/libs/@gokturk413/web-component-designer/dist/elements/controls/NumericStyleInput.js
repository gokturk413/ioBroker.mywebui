const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x93))/0x1+parseInt(p(0xf9))/0x2+-parseInt(p(0xd2))/0x3*(parseInt(p(0xda))/0x4)+-parseInt(p(0x114))/0x5*(-parseInt(p(0xb4))/0x6)+parseInt(p(0xee))/0x7+parseInt(p(0x87))/0x8+parseInt(p(0x104))/0x9*(-parseInt(p(0xf3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa23d1));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';function b(c,d){c=c-0x86;const e=a();let f=e[c];return f;}function a(){const am=['222suADyA','_stepperDirection','_measure','inputVisible','allowCustomValue','_detachStepperWindowListeners','select','_min','_units','clearInterval','_allowCustomValue','_value','numeric','_switchToUnitModeForInteraction','_handleStepperPointerDown','change','split','_getInteractiveStepValue','_previewNumericValue','_createOption','_windowDragBlurHandler','_setValue','_commitValue','_applyTypedValue','_isSelectedUnitMode','fixed','setPointerCapture','measure','_updateValue','_renderSelectOptions','516849hQBjmF','_windowPointerUpHandler','style','trim','_attachStepperWindowListeners','includes','_dragStartY','_getStepPrecision','20ZXISQt','_readOnly','readOnly','trunc','_unitValueConverter','value','_stepperRepeatTimeout','clientY','_handleWindowDragPointerMove','label','_stepperRepeatInterval','min','pointerdown','replaceChildren','_select','pointerId','hasPointerCapture','units','_getDomElement','_clampNumericValue','4539577muMtnZ','_windowDragPointerMoveHandler','abs','unitSteps','_max','94420siGTcL','_stepperPointerId','focus','_detachDragWindowListeners','_lastNumericUnit','textContent','665778XHXSLK','_increaseButton','_dragPointerId','createElement','_resolveCurrentValueForUnit','valuePreviewChanged','_displayValueLock','item','key','_unitSteps','preventDefault','234aLunUY','_finishPreviewSession','_input','dataset','_finishDragInteractionForPointerEvent','round','disabled','_readEditableNumericValue','_handleWindowStepperPointerEnd','_previewStartValue','_handlePointerDown','selectValue','length','_lastNumericValue','_calculateDraggedStepCount','_formatInteractiveNumericValue','19085qXwhzp','_normalizeOptionValues','mode','none','_previewChanged','_startPreviewSession','408808ZJYuXZ','_finishDragInteraction','pointercancel','pointerup','_preferCustomMode','_decreaseButton','_fixedValues','_windowDragPointerUpHandler','_parseAttributesToProperties','kind','custom','_windowBlurHandler','597706UjwlWC','_scrubberButton','_step','removeEventListener','_getEffectiveStep','_appliedDragSteps','fixedValues','isNaN','numberText','floor','inputValue','_finishStepperInteraction','_autoSizeSelect','clearTimeout','_restoreCachedInititalValues','step','addEventListener','emit','blur','_applyReadonlyState','isFinite','text','template','_windowDragPointerCancelHandler','valueChanged','valuePreviewFinished','max','_applyStepPreview','unit','_createCustomDisplayState','Enter','appendChild','selectedOptions'];a=function(){return am;};return a();}const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0xd4)]=css`
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
  `;static [q(0xa9)]=html`
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
  `;['_value']='';get['value'](){return this['_value'];}set['value'](c){const r=q;this[r(0xc9)](c,![],![]);}[q(0xab)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[q(0xac)]=new TypedEvent();['_units']=['px','%','pt'];get[q(0xeb)](){return[...this['_units']];}set['units'](c){const s=q;this[s(0xbc)]=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this['_units'][0x0]??this['_lastNumericUnit'],this[s(0xd0)]();}['_fixedValues']=[];get[q(0x99)](){const t=q;return[...this[t(0x8d)]];}set['fixedValues'](c){const u=q;this['_fixedValues']=this[u(0x115)](c),this[u(0xd0)]();}[q(0x95)]=0x1;get[q(0xa2)](){const v=q;return this[v(0x95)];}set[q(0xa2)](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}['_unitSteps']={};get['unitSteps'](){const w=q;return{...this[w(0x102)]};}set[q(0xf1)](c){this['_unitSteps']=c??{};}[q(0xbb)]=null;get['min'](){const x=q;return this[x(0xbb)];}set[q(0xe5)](c){const y=q;this[y(0xbb)]=Number['isFinite'](c)?c:null;}['_max']=null;get['max'](){const z=q;return this[z(0xf2)];}set[q(0xad)](c){const A=q;this[A(0xf2)]=Number[A(0xa7)](c)?c:null;}['_readOnly']=![];get[q(0xdc)](){return this['_readOnly'];}set[q(0xdc)](c){const B=q;this['_readOnly']=c,this[B(0xa6)]();}get['isInPreview'](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get[q(0xb8)](){return this['_allowCustomValue'];}set[q(0xb8)](c){const C=q;this[C(0xbe)]=c,this['_updateValue']();}[q(0xde)];get['unitValueConverter'](){const D=q;return this[D(0xde)];}set['unitValueConverter'](c){this['_unitValueConverter']=c;}[q(0x106)];['_select'];['_measure'];[q(0x94)];[q(0xfa)];['_decreaseButton'];[q(0x111)]=0x0;[q(0xf7)]='px';['_dragPointerId']=null;[q(0xd8)]=0x0;['_dragStartNumericValue']=0x0;['_appliedDragSteps']=0x0;[q(0x10d)]=null;[q(0x118)]=![];[q(0xff)]=null;['_stepperPointerId']=null;[q(0xb5)]=0x0;[q(0xe0)]=null;[q(0xe4)]=null;['_windowDragPointerMoveHandler']=c=>this[q(0xe2)](c);[q(0x8e)]=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x108)](c,!![]);['_windowDragBlurHandler']=()=>this[q(0x88)](![]);['_windowPointerUpHandler']=c=>this[q(0x10c)](c);['_windowPointerCancelHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);[q(0x8b)]=![];constructor(){const E=q;super(),this[E(0xa1)](),this[E(0x106)]=this['_getDomElement']('input'),this[E(0xe8)]=this['_getDomElement']('select'),this[E(0xb6)]=this[E(0xec)](E(0xcf)),this['_scrubberButton']=this['_getDomElement']('scrubber'),this['_increaseButton']=this[E(0xec)]('increase'),this['_decreaseButton']=this['_getDomElement']('decrease');}['ready'](){const F=q;this[F(0x8f)](),this['_wireEvents'](),this['_updateValue']();}['_wireEvents'](){const G=q;this[G(0x106)][G(0xa3)](G(0xc3),()=>this['_applyTypedValue']()),this[G(0x106)][G(0xa3)]('keydown',c=>{const H=G;c[H(0x101)]===H(0xb1)&&(this[H(0xcb)](),this['_input']['blur']());}),this[G(0x94)]['addEventListener'](G(0xe6),c=>this[G(0x10e)](c)),this['_select']['addEventListener']('change',()=>this['_applySelectedMode']()),this['_increaseButton'][G(0xa3)]('pointerdown',c=>this['_handleStepperPointerDown'](c,0x1)),this[G(0x8c)][G(0xa3)](G(0xe6),c=>this[G(0xc2)](c,-0x1));}[q(0x10e)](c){const I=q;if(this['_readOnly'])return;if(!this[I(0xcc)]()){if(!this[I(0xc1)]())return;}this[I(0xfb)]=c['pointerId'],this['_dragStartY']=c['clientY'],this['_dragStartNumericValue']=this[I(0x10b)](this['_select'][I(0xdf)]),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this['_scrubberButton'][I(0xce)](c['pointerId']);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const J=q;if(this[J(0xfb)]!==c['pointerId']||!this[J(0xcc)]())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c[J(0xe1)]);if(d===this[J(0x98)])return;this[J(0x98)]=d;const e=this['_select'][J(0xdf)],f=this['_getEffectiveStep'](e);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_dragStartNumericValue'],d,f),e,f),c['preventDefault']();}[q(0x108)](c,d){const K=q;if(this['_dragPointerId']!==c['pointerId'])return;this['_finishDragInteraction'](d,c[K(0xe9)]);}['_finishDragInteraction'](c,d){const L=q;if(this[L(0xfb)]==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this[L(0xf6)]();if(d!=null)try{if(this['_scrubberButton'][L(0xea)](d))this[L(0x94)]['releasePointerCapture'](d);}catch{}this['_finishPreviewSession'](c);}['_handleStepperPointerDown'](c,d){const M=q;if(this['_readOnly'])return;if(!this[M(0xcc)]()){if(!this['_switchToUnitModeForInteraction']())return;}this['_finishStepperInteraction'](!![]),this['_stepperPointerId']=c['pointerId'],this[M(0xb5)]=d,this['_attachStepperWindowListeners'](),this[M(0x86)](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{const N=M;this[N(0xe4)]=window['setInterval'](()=>this[N(0xae)](this['_stepperDirection']),0x32);},0x15e),c[M(0x103)]();}['_handleWindowStepperPointerEnd'](c){const O=q;if(this['_stepperPointerId']!==c[O(0xe9)])return;this[O(0x9e)](![]);}[q(0x9e)](c){const P=q;if(this[P(0xf4)]==null)return;this[P(0xf4)]=null,this['_stepperDirection']=0x0,this[P(0xb9)](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const Q=q,c=this['_select'][Q(0xb3)][Q(0x100)](0x0);if(!c)return;const d=c[Q(0x107)]['kind'];if(d===Q(0xcd)){this['_commitValue'](c['value']);return;}if(d===Q(0x91)){this[Q(0x8b)]=!![],this[Q(0xd0)](),requestAnimationFrame(()=>{const R=Q;this['_input']['focus'](),this[R(0x106)][R(0xba)]();});return;}const e=c['value'];this['_lastNumericUnit']=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this[Q(0xbf)]);if(f['kind']==='numeric'){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this[Q(0xca)](g);return;}if(f[Q(0x90)]==='empty'){this[Q(0xd0)](),this['_input'][Q(0xf5)]();return;}const h=Number(this[Q(0x106)]['value']);if(!Number['isNaN'](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this[Q(0x106)]['focus']();}['_applyTypedValue'](){const S=q,c=this['_select']['selectedOptions'][S(0x100)](0x0),d=c?.[S(0x107)]['kind'];if(d==='fixed')return;if(d==='custom'){this[S(0xca)](this['_input']['value']);return;}const e=this[S(0x106)][S(0xdf)]?.[S(0xd5)]()??'';if(!e){this[S(0xca)]('');return;}const f=Number(e);if(!Number['isNaN'](f))this[S(0x111)]=this[S(0xed)](f);this[S(0xca)](combineNumericStyleInputValue(e,c?.['value']??''));}['_updateValue'](){const T=q;if(!this[T(0x106)]||!this[T(0xe8)])return;if(this['_previewStartValue']==null)this['_renderSelectOptions']();const c=this['_getDisplayState'](this[T(0xff)]??this[T(0xbf)]);this[T(0x106)][T(0xdf)]=c[T(0x9d)],this[T(0x106)][T(0xd4)]['display']=c[T(0xb7)]?'':T(0x117),this[T(0x106)]['disabled']=this['_readOnly']||!c['inputEnabled'],this[T(0xe8)][T(0xdf)]=c[T(0x10f)],this['_autoSizeSelect']();if(c['mode']===T(0xaf)&&c['selectedUnit']!=null)this[T(0xf7)]=c['selectedUnit'];if(c[T(0x116)]==='unit'&&c['inputValue']!==''){const f=Number(c[T(0x9d)]);if(!Number[T(0x9a)](f))this['_lastNumericValue']=this['_clampNumericValue'](f);}const d=this[T(0xbc)]['length']>0x0,e=this[T(0xdb)]||(!d||c['mode']===T(0x91));this['_scrubberButton']['disabled']=e,this['_increaseButton'][T(0x10a)]=e,this[T(0x8c)]['disabled']=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const U=q,d=parseNumericStyleInputValue(c);if(d[U(0x90)]===U(0xc0)){if(this['_preferCustomMode'])return this[U(0xb0)](d['numberText']);if(d[U(0xaf)]&&this[U(0xbc)][U(0x110)]&&!this[U(0xbc)]['includes'](d[U(0xaf)]))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d[U(0xaf)],this[U(0xf7)],this['_units'])??'';return{'mode':U(0xaf),'inputValue':d[U(0x9b)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[U(0xbc)][U(0xd7)](f)?f:this[U(0xe8)][U(0xdf)]||customOptionValue,'selectedUnit':f};}if(d[U(0x90)]==='text'){if(!this['_preferCustomMode']&&this[U(0x8d)]['includes'](d[U(0xa8)]))return{'mode':U(0xcd),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this['_createCustomDisplayState'](d[U(0xa8)]);}if(this['_preferCustomMode'])return this['_createCustomDisplayState']('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this['_units']['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[U(0xb0)]('');}['_createCustomDisplayState'](c){const V=q;if(!this[V(0xbe)]&&this[V(0xbc)]['length'])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[V(0xbc)][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':V(0x91),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0xd1)](){const W=q,c=this[W(0xe8)][W(0xdf)];this['_select'][W(0xe7)]();if(this['_units'][W(0x110)]){const d=document[W(0xfc)]('optgroup');d['label']='Units';for(const e of this[W(0xbc)])d[W(0xb2)](this[W(0xc7)](getNumericStyleInputUnitLabel(e),e,'unit'));this[W(0xe8)][W(0xb2)](d);}if(this[W(0x8d)]['length']){const f=document[W(0xfc)]('optgroup');f[W(0xe3)]='Values';for(const g of this['_fixedValues'])f[W(0xb2)](this['_createOption'](g,g,W(0xcd)));this[W(0xe8)][W(0xb2)](f);}if(this['_allowCustomValue']||this['_select']['options']['length']===0x0)this['_select']['appendChild'](this['_createOption']('custom',customOptionValue,W(0x91)));if(c!=='')this['_select'][W(0xdf)]=c;else{if(this['_select']['querySelector']('option[value=\x22\x22]'))this['_select']['value']='';}}[q(0xc7)](c,d,e){const X=q,f=document['createElement']('option');return f[X(0xa8)]=c,f[X(0xdf)]=d,f['dataset'][X(0x90)]=e,f;}[q(0x9f)](){const Y=q;if(!this[Y(0xb6)]||!this[Y(0xe8)])return;const c=this['_select'][Y(0xb3)]['item'](0x0);this[Y(0xb6)][Y(0xf8)]=c?.['text']??'';const d=this['_measure']['offsetWidth'];d>0x0?this['_select']['style']['width']=d+0x11+'px':requestAnimationFrame(()=>this[Y(0x9f)]());}[q(0xa6)](){const Z=q;if(!this['_input']||!this['_select'])return;this[Z(0x106)][Z(0xdc)]=this[Z(0xdb)],this['_select'][Z(0x10a)]=this['_readOnly'];}['_convertNumericValue'](c,d){const a0=q;if(d==null)return this[a0(0xbf)];const e=c['unit'],f=this['_unitValueConverter']?.({'value':c['value'],'numberText':c[a0(0x9b)],'rawValue':this[a0(0xbf)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const a1=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number['NaN'],'numberText':'','rawValue':this[a1(0xbf)],'fromUnit':'','toUnit':c})?.[a1(0xd5)]();return d?d:null;}['_readEditableNumericValue'](c){const a2=q,d=parseNumericStyleInputValue(this['_value']);if(d['kind']==='numeric'){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f['value'];return d['value'];}if(this['_input'][a2(0xdf)]?.['trim']()){const g=Number(this['_input'][a2(0xdf)]);if(!Number['isNaN'](g))return g;}return this[a2(0x111)];}['_applyNumericValue'](c,d){const a3=q;this[a3(0x111)]=this[a3(0xed)](c),this[a3(0xf7)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a3(0x111)]),d));}[q(0xc6)](c,d,e){const a4=q;this[a4(0x111)]=this[a4(0xed)](c),this[a4(0xf7)]=d;const f=e??this[a4(0x97)](d);this['_setValue'](combineNumericStyleInputValue(this[a4(0x113)](this['_lastNumericValue'],f),d),![],!![]);}['_commitValue'](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a5=q,f=c??'';if(!d&&!e&&this[a5(0x10d)]!=null)return;const g=this[a5(0xbf)];this[a5(0xbf)]=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this['_displayValueLock']||f!==g)this[a5(0xff)]=null;}}this[a5(0x8b)]=![],this[a5(0xd0)]();if(g!==f){e&&(this['_previewChanged']=!![],this[a5(0xfe)][a5(0xa4)]({'newValue':f,'oldValue':g}));if(d)this[a5(0xab)][a5(0xa4)]({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a6=q;this['_previewStartValue']==null&&(this[a6(0x10d)]=this[a6(0xbf)],this[a6(0x118)]=![]);}[q(0x105)](c){const a7=q;if(this[a7(0x10d)]==null)return;const d=this[a7(0x10d)],e=this['_displayValueLock']??this[a7(0xbf)],f=this[a7(0x118)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this[a7(0x118)]=![],g?(this[a7(0xff)]=null,this['_value']=d,this[a7(0xd0)]()):(this[a7(0xff)]=e,this['_updateValue']()),this[a7(0xac)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0xae)](c){const a8=q,d=this[a8(0xe8)][a8(0xdf)],e=this[a8(0x97)](d);this[a8(0xc6)](this[a8(0xc5)](this['_readEditableNumericValue'](d),c,e),d,e);}['_stopStepperRepeat'](){const a9=q;this['_stepperRepeatTimeout']!=null&&(window[a9(0xa0)](this['_stepperRepeatTimeout']),this['_stepperRepeatTimeout']=null),this[a9(0xe4)]!=null&&(window[a9(0xbd)](this[a9(0xe4)]),this['_stepperRepeatInterval']=null);}[q(0xd6)](){const aa=q;window[aa(0xa3)](aa(0x8a),this[aa(0xd3)],!![]),window[aa(0xa3)]('pointercancel',this['_windowPointerCancelHandler'],!![]),window[aa(0xa3)](aa(0xa5),this['_windowBlurHandler']);}['_attachDragWindowListeners'](){const ab=q;window['addEventListener']('pointermove',this['_windowDragPointerMoveHandler'],!![]),window[ab(0xa3)](ab(0x8a),this[ab(0x8e)],!![]),window['addEventListener'](ab(0x89),this['_windowDragPointerCancelHandler'],!![]),window[ab(0xa3)](ab(0xa5),this['_windowDragBlurHandler']);}[q(0xb9)](){const ac=q;window['removeEventListener']('pointerup',this[ac(0xd3)],!![]),window[ac(0x96)](ac(0x89),this['_windowPointerCancelHandler'],!![]),window[ac(0x96)](ac(0xa5),this[ac(0x92)]);}[q(0xf6)](){const ad=q;window[ad(0x96)]('pointermove',this[ad(0xef)],!![]),window['removeEventListener']('pointerup',this['_windowDragPointerUpHandler'],!![]),window[ad(0x96)]('pointercancel',this[ad(0xaa)],!![]),window['removeEventListener']('blur',this[ad(0xc8)]);}[q(0x112)](c){const ae=q,d=Math['abs'](c),e=Math['min'](d,0x14)/0x5,f=Math[ae(0xad)](Math[ae(0xe5)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math[ae(0xdd)](e+f+g);return Math['sign'](c)*h;}[q(0x97)](c){const af=q;return resolveNumericStyleInputStep(this[af(0x102)],this[af(0x95)],c);}[q(0xc5)](c,d,e){const ag=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this[ag(0xbb)]??0x0,i=(g-h)/f,j=Math[ag(0x109)](i),k=Math[ag(0xf0)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ag(0x9c)](i);l=o+d+0x1;}const m=h+l*f;return this[ag(0xed)](this['_roundToStepPrecision'](m,f));}[q(0x113)](c,d){const ah=q,e=d??this[ah(0x95)];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}['_roundToStepPrecision'](c,d){const e=this['_getStepPrecision'](d),f=0xa**e;return Math['round'](c*f)/f;}[q(0xd9)](c){const ai=q,d=(''+(c??this[ai(0x95)]))['toLowerCase']();if(d[ai(0xd7)]('e-')){const [f,g]=d[ai(0xc4)]('e-'),h=Number(g),i=f[ai(0xd7)]('.')?f['length']-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ai(0x110)]-e-0x1:0x0;}[q(0xc1)](){const aj=q,c=this['_lastNumericUnit']??this[aj(0xbc)][0x0];if(c==null)return![];this[aj(0x8b)]=![];const d=this[aj(0xfd)](c);if(d!=null)return this['_commitValue'](d),this['_isSelectedUnitMode']();return this['_applyNumericValue'](this[aj(0x111)],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const ak=q;return this[ak(0xe8)][ak(0xb3)]['item'](0x0)?.['dataset'][ak(0x90)]===ak(0xaf);}[q(0x115)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0xed)](c){const al=q;let d=c;if(this[al(0xbb)]!=null)d=Math[al(0xad)](this[al(0xbb)],d);if(this[al(0xf2)]!=null)d=Math['min'](this['_max'],d);return d;}}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);