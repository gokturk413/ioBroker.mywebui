const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x1b2))/0x1+parseInt(p(0x1f3))/0x2+-parseInt(p(0x19e))/0x3+parseInt(p(0x1fd))/0x4+-parseInt(p(0x19c))/0x5+-parseInt(p(0x19f))/0x6*(-parseInt(p(0x1c8))/0x7)+-parseInt(p(0x1eb))/0x8*(-parseInt(p(0x198))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8a0f9));function b(c,d){c=c-0x185;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [q(0x1ee)]=html`
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
  `;[q(0x1a1)]='';get[q(0x1c5)](){const r=q;return this[r(0x1a1)];}set['value'](c){this['_setValue'](c,![],![]);}[q(0x1c6)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get['units'](){const s=q;return[...this[s(0x1ec)]];}set[q(0x214)](c){const t=q;this[t(0x1ec)]=this[t(0x208)](c),this['_lastNumericUnit']=this['_units'][0x0]??this[t(0x1a7)],this['_updateValue']();}[q(0x189)]=[];get['fixedValues'](){const u=q;return[...this[u(0x189)]];}set['fixedValues'](c){this['_fixedValues']=this['_normalizeOptionValues'](c),this['_updateValue']();}[q(0x1f9)]=0x1;get['step'](){const v=q;return this[v(0x1f9)];}set[q(0x1d3)](c){const w=q;this[w(0x1f9)]=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0x1f0)]={};get[q(0x1ff)](){return{...this['_unitSteps']};}set['unitSteps'](c){this['_unitSteps']=c??{};}[q(0x1aa)]=null;get['min'](){return this['_min'];}set[q(0x1ba)](c){const x=q;this[x(0x1aa)]=Number[x(0x18e)](c)?c:null;}[q(0x1db)]=null;get[q(0x1dd)](){return this['_max'];}set[q(0x1dd)](c){this['_max']=Number['isFinite'](c)?c:null;}[q(0x1a4)]=![];get[q(0x1be)](){return this['_readOnly'];}set['readOnly'](c){this['_readOnly']=c,this['_applyReadonlyState']();}get[q(0x20f)](){return this['_previewStartValue']!=null;}[q(0x1b5)]=!![];get[q(0x1d1)](){return this['_allowCustomValue'];}set['allowCustomValue'](c){const y=q;this['_allowCustomValue']=c,this[y(0x218)]();}[q(0x185)];get['unitValueConverter'](){return this['_unitValueConverter'];}set[q(0x1e8)](c){const z=q;this[z(0x185)]=c;}[q(0x1ca)];['_select'];[q(0x1d5)];[q(0x1c0)];['_increaseButton'];[q(0x1fc)];['_lastNumericValue']=0x0;['_lastNumericUnit']='px';[q(0x20e)]=null;[q(0x1d7)]=0x0;[q(0x1cd)]=0x0;[q(0x192)]=0x0;[q(0x1e0)]=null;[q(0x1bb)]=![];[q(0x1ac)]=null;[q(0x213)]=null;[q(0x202)]=0x0;['_stepperRepeatTimeout']=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0x1b0)](c);['_windowDragPointerUpHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x203)](c,!![]);[q(0x1ea)]=()=>this[q(0x1ed)](![]);[q(0x186)]=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this[q(0x1a6)](![]);['_preferCustomMode']=![];constructor(){const A=q;super(),this['_restoreCachedInititalValues'](),this[A(0x1ca)]=this['_getDomElement'](A(0x1c4)),this['_select']=this[A(0x1a3)]('select'),this[A(0x1d5)]=this['_getDomElement']('measure'),this[A(0x1c0)]=this[A(0x1a3)](A(0x201)),this[A(0x199)]=this[A(0x1a3)]('increase'),this[A(0x1fc)]=this['_getDomElement'](A(0x206));}['ready'](){const B=q;this['_parseAttributesToProperties'](),this[B(0x1b9)](),this['_updateValue']();}['_wireEvents'](){const C=q;this[C(0x1ca)][C(0x194)](C(0x1ce),()=>this['_applyTypedValue']()),this[C(0x1ca)][C(0x194)]('keydown',c=>{const D=C;c['key']===D(0x1ef)&&(this[D(0x1a9)](),this['_input'][D(0x1ae)]());}),this['_scrubberButton'][C(0x194)]('pointerdown',c=>this['_handlePointerDown'](c)),this['_select'][C(0x194)]('change',()=>this[C(0x216)]()),this[C(0x199)]['addEventListener']('pointerdown',c=>this[C(0x1f8)](c,0x1)),this[C(0x1fc)]['addEventListener']('pointerdown',c=>this[C(0x1f8)](c,-0x1));}['_handlePointerDown'](c){const E=q;if(this[E(0x1a4)])return;if(!this[E(0x195)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[E(0x20e)]=c[E(0x1c7)],this[E(0x1d7)]=c['clientY'],this['_dragStartNumericValue']=this['_readEditableNumericValue'](this[E(0x188)][E(0x1c5)]),this[E(0x192)]=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this['_scrubberButton']['setPointerCapture'](c['pointerId']);}catch{}c['preventDefault']();}[q(0x1b0)](c){const F=q;if(this[F(0x20e)]!==c['pointerId']||!this['_isSelectedUnitMode']())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c['clientY']);if(d===this['_appliedDragSteps'])return;this[F(0x192)]=d;const e=this[F(0x188)][F(0x1c5)],f=this[F(0x210)](e);this['_previewNumericValue'](this[F(0x19d)](this['_dragStartNumericValue'],d,f),e,f),c['preventDefault']();}[q(0x203)](c,d){if(this['_dragPointerId']!==c['pointerId'])return;this['_finishDragInteraction'](d,c['pointerId']);}['_finishDragInteraction'](c,d){const G=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton']['hasPointerCapture'](d))this[G(0x1c0)]['releasePointerCapture'](d);}catch{}this[G(0x1cb)](c);}['_handleStepperPointerDown'](c,d){const H=q;if(this[H(0x1a4)])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this[H(0x1a6)](!![]),this['_stepperPointerId']=c['pointerId'],this['_stepperDirection']=d,this[H(0x190)](),this[H(0x1e2)](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{const I=H;this['_stepperRepeatInterval']=window['setInterval'](()=>this[I(0x193)](this['_stepperDirection']),0x32);},0x15e),c[H(0x1a8)]();}['_handleWindowStepperPointerEnd'](c){const J=q;if(this['_stepperPointerId']!==c[J(0x1c7)])return;this['_finishStepperInteraction'](![]);}[q(0x1a6)](c){const K=q;if(this['_stepperPointerId']==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this['_detachStepperWindowListeners'](),this[K(0x205)](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const L=q,c=this[L(0x188)][L(0x187)]['item'](0x0);if(!c)return;const d=c[L(0x1e7)][L(0x1d2)];if(d===L(0x215)){this['_commitValue'](c['value']);return;}if(d==='custom'){this['_preferCustomMode']=!![],this[L(0x218)](),requestAnimationFrame(()=>{const M=L;this[M(0x1ca)][M(0x1f2)](),this[M(0x1ca)][M(0x1e4)]();});return;}const e=c[L(0x1c5)];this['_lastNumericUnit']=e,this[L(0x1d0)]=![];const f=parseNumericStyleInputValue(this['_value']);if(f[L(0x1d2)]==='numeric'){const i=this[L(0x207)](f,e);this[L(0x18d)](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this[L(0x18d)](g);return;}if(f[L(0x1d2)]==='empty'){this['_updateValue'](),this['_input'][L(0x1f2)]();return;}const h=Number(this[L(0x1ca)][L(0x1c5)]);if(!Number[L(0x21a)](h)){this['_applyNumericValue'](h,e);return;}this[L(0x18d)](''),this['_input']['focus']();}[q(0x1a9)](){const N=q,c=this['_select'][N(0x187)]['item'](0x0),d=c?.[N(0x1e7)][N(0x1d2)];if(d===N(0x215))return;if(d===N(0x1af)){this[N(0x18d)](this['_input'][N(0x1c5)]);return;}const e=this[N(0x1ca)]['value']?.['trim']()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[N(0x21a)](f))this[N(0x1fe)]=this[N(0x20a)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.['value']??''));}[q(0x218)](){const O=q;if(!this['_input']||!this['_select'])return;if(this['_previewStartValue']==null)this['_renderSelectOptions']();const c=this[O(0x211)](this['_displayValueLock']??this['_value']);this[O(0x1ca)]['value']=c[O(0x200)],this[O(0x1ca)][O(0x1de)][O(0x1a0)]=c[O(0x196)]?'':'none',this['_input'][O(0x1df)]=this['_readOnly']||!c['inputEnabled'],this['_select']['value']=c['selectValue'],this['_autoSizeSelect']();if(c[O(0x1b3)]==='unit'&&c['selectedUnit']!=null)this[O(0x1a7)]=c[O(0x1da)];if(c['mode']==='unit'&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this[O(0x1fe)]=this[O(0x20a)](f);}const d=this['_units']['length']>0x0,e=this[O(0x1a4)]||(!d||c['mode']==='custom');this[O(0x1c0)][O(0x1df)]=e,this['_increaseButton']['disabled']=e,this['_decreaseButton']['disabled']=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const P=q,d=parseNumericStyleInputValue(c);if(d['kind']===P(0x1d4)){if(this[P(0x1d0)])return this['_createCustomDisplayState'](d[P(0x19a)]);if(d['unit']&&this[P(0x1ec)][P(0x1cc)]&&!this[P(0x1ec)][P(0x191)](d[P(0x1bc)]))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d[P(0x1bc)],this['_lastNumericUnit'],this[P(0x1ec)])??'';return{'mode':P(0x1bc),'inputValue':d[P(0x19a)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[P(0x1ec)]['includes'](f)?f:this[P(0x188)][P(0x1c5)]||customOptionValue,'selectedUnit':f};}if(d['kind']===P(0x1fb)){if(!this['_preferCustomMode']&&this['_fixedValues'][P(0x191)](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this[P(0x21c)](d['text']);}if(this['_preferCustomMode'])return this[P(0x21c)]('');const e=this[P(0x1a7)]??this[P(0x1ec)][0x0]??'';if(this['_units'][P(0x191)](e))return{'mode':P(0x1bc),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}[q(0x21c)](c){const Q=q;if(!this[Q(0x1b5)]&&this[Q(0x1ec)][Q(0x1cc)])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x1f1)](){const R=q,c=this['_select']['value'];this['_select'][R(0x1dc)]();if(this[R(0x1ec)][R(0x1cc)]){const d=document['createElement']('optgroup');d[R(0x20c)]='Units';for(const e of this[R(0x1ec)])d[R(0x1c2)](this[R(0x1e3)](getNumericStyleInputUnitLabel(e),e,'unit'));this['_select']['appendChild'](d);}if(this[R(0x189)][R(0x1cc)]){const f=document[R(0x1c3)](R(0x197));f['label']=R(0x1d8);for(const g of this['_fixedValues'])f['appendChild'](this['_createOption'](g,g,R(0x215)));this[R(0x188)]['appendChild'](f);}if(this[R(0x1b5)]||this['_select']['options'][R(0x1cc)]===0x0)this['_select']['appendChild'](this['_createOption']('custom',customOptionValue,'custom'));if(c!=='')this[R(0x188)]['value']=c;else{if(this['_select'][R(0x18f)](R(0x1e6)))this[R(0x188)]['value']='';}}[q(0x1e3)](c,d,e){const S=q,f=document[S(0x1c3)]('option');return f[S(0x1fb)]=c,f['value']=d,f[S(0x1e7)]['kind']=e,f;}[q(0x1b7)](){const T=q;if(!this[T(0x1d5)]||!this[T(0x188)])return;const c=this['_select']['selectedOptions']['item'](0x0);this[T(0x1d5)]['textContent']=c?.['text']??'';const d=this['_measure']['offsetWidth'];d>0x0?this['_select'][T(0x1de)]['width']=d+0x11+'px':requestAnimationFrame(()=>this[T(0x1b7)]());}[q(0x1a2)](){const U=q;if(!this['_input']||!this['_select'])return;this[U(0x1ca)][U(0x1be)]=this['_readOnly'],this['_select'][U(0x1df)]=this[U(0x1a4)];}[q(0x207)](c,d){const V=q;if(d==null)return this[V(0x1a1)];const e=c[V(0x1bc)],f=this[V(0x185)]?.({'value':c[V(0x1c5)],'numberText':c['numberText'],'rawValue':this[V(0x1a1)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[V(0x19a)],d);}[q(0x18b)](c){const W=q;if(c==null)return null;const d=this[W(0x185)]?.({'value':Number['NaN'],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.[W(0x1b1)]();return d?d:null;}['_readEditableNumericValue'](c){const X=q,d=parseNumericStyleInputValue(this['_value']);if(d['kind']===X(0x1d4)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f[X(0x1d2)]==='numeric')return f['value'];return d['value'];}if(this['_input']['value']?.['trim']()){const g=Number(this[X(0x1ca)]['value']);if(!Number['isNaN'](g))return g;}return this['_lastNumericValue'];}[q(0x1b8)](c,d){const Y=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this[Y(0x1a7)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}['_previewNumericValue'](c,d,e){const Z=q;this['_lastNumericValue']=this[Z(0x20a)](c),this['_lastNumericUnit']=d;const f=e??this['_getEffectiveStep'](d);this['_setValue'](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[Z(0x1fe)],f),d),![],!![]);}['_commitValue'](c){const a0=q;this[a0(0x21b)](c,!![],![]);}['_setValue'](c,d,e){const a1=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this['_value'];this[a1(0x1a1)]=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this['_displayValueLock']||f!==g)this[a1(0x1ac)]=null;}}this['_preferCustomMode']=![],this['_updateValue']();if(g!==f){e&&(this[a1(0x1bb)]=!![],this['valuePreviewChanged'][a1(0x20b)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}[q(0x1e2)](){const a2=q;this['_previewStartValue']==null&&(this['_previewStartValue']=this[a2(0x1a1)],this[a2(0x1bb)]=![]);}['_finishPreviewSession'](c){const a3=q;if(this['_previewStartValue']==null)return;const d=this[a3(0x1e0)],e=this['_displayValueLock']??this[a3(0x1a1)],f=this[a3(0x1bb)]&&d!==e,g=c||!f;this[a3(0x1e0)]=null,this['_previewChanged']=![],g?(this[a3(0x1ac)]=null,this[a3(0x1a1)]=d,this[a3(0x218)]()):(this[a3(0x1ac)]=e,this[a3(0x218)]()),this[a3(0x1c9)][a3(0x20b)]({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a4=q,d=this['_select']['value'],e=this[a4(0x210)](d);this[a4(0x1c1)](this['_getInteractiveStepValue'](this[a4(0x217)](d),c,e),d,e);}['_stopStepperRepeat'](){const a5=q;this['_stepperRepeatTimeout']!=null&&(window[a5(0x1cf)](this[a5(0x1ab)]),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this['_stepperRepeatInterval']),this['_stepperRepeatInterval']=null);}['_attachStepperWindowListeners'](){const a6=q;window['addEventListener'](a6(0x1d9),this[a6(0x186)],!![]),window[a6(0x194)]('pointercancel',this['_windowPointerCancelHandler'],!![]),window[a6(0x194)](a6(0x1ae),this['_windowBlurHandler']);}[q(0x1bf)](){const a7=q;window['addEventListener'](a7(0x1e5),this['_windowDragPointerMoveHandler'],!![]),window[a7(0x194)]('pointerup',this[a7(0x1a5)],!![]),window['addEventListener'](a7(0x1e1),this['_windowDragPointerCancelHandler'],!![]),window['addEventListener'](a7(0x1ae),this[a7(0x1ea)]);}[q(0x209)](){const a8=q;window[a8(0x204)](a8(0x1d9),this[a8(0x186)],!![]),window['removeEventListener']('pointercancel',this[a8(0x1fa)],!![]),window['removeEventListener']('blur',this[a8(0x19b)]);}[q(0x1ad)](){const a9=q;window[a9(0x204)]('pointermove',this[a9(0x212)],!![]),window['removeEventListener'](a9(0x1d9),this['_windowDragPointerUpHandler'],!![]),window['removeEventListener'](a9(0x1e1),this[a9(0x1f5)],!![]),window[a9(0x204)]('blur',this[a9(0x1ea)]);}[q(0x20d)](c){const aa=q,d=Math[aa(0x1e9)](c),e=Math['min'](d,0x14)/0x5,f=Math[aa(0x1dd)](Math[aa(0x1ba)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[aa(0x18a)](c)*h;}['_getEffectiveStep'](c){const ab=q;return resolveNumericStyleInputStep(this['_unitSteps'],this[ab(0x1f9)],c);}[q(0x19d)](c,d,e){const ac=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this[ac(0x1aa)]??0x0,i=(g-h)/f,j=Math[ac(0x18c)](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ac(0x1d6)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ac(0x1f7)](i);l=o+d+0x1;}const m=h+l*f;return this[ac(0x20a)](this['_roundToStepPrecision'](m,f));}['_formatInteractiveNumericValue'](c,d){const ad=q,e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this[ad(0x1f6)](e));}[q(0x1b4)](c,d){const ae=q,e=this[ae(0x1f6)](d),f=0xa**e;return Math['round'](c*f)/f;}['_getStepPrecision'](c){const af=q,d=(''+(c??this[af(0x1f9)]))['toLowerCase']();if(d['includes']('e-')){const [f,g]=d[af(0x1bd)]('e-'),h=Number(g),i=f['includes']('.')?f['length']-f[af(0x1b6)]('.')-0x1:0x0;return h+i;}const e=d[af(0x1b6)]('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0x219)](){const ag=q,c=this['_lastNumericUnit']??this['_units'][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[ag(0x18b)](c);if(d!=null)return this['_commitValue'](d),this[ag(0x195)]();return this[ag(0x1b8)](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const ah=q;return this['_select'][ah(0x187)]['item'](0x0)?.['dataset']['kind']===ah(0x1bc);}[q(0x208)](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const ai=q;let d=c;if(this[ai(0x1aa)]!=null)d=Math[ai(0x1dd)](this[ai(0x1aa)],d);if(this[ai(0x1db)]!=null)d=Math['min'](this[ai(0x1db)],d);return d;}}customElements[q(0x1f4)]('node-projects-numeric-style-input',NumericStyleInput);function a(){const aj=['isNaN','_setValue','_createCustomDisplayState','_unitValueConverter','_windowPointerUpHandler','selectedOptions','_select','_fixedValues','sign','_resolveCurrentValueForUnit','round','_commitValue','isFinite','querySelector','_attachStepperWindowListeners','includes','_appliedDragSteps','_applyStepPreview','addEventListener','_isSelectedUnitMode','inputVisible','optgroup','9rseDfR','_increaseButton','numberText','_windowBlurHandler','5153140sIRimc','_getInteractiveStepValue','877767rEeRDl','6eBeqyw','display','_value','_applyReadonlyState','_getDomElement','_readOnly','_windowDragPointerUpHandler','_finishStepperInteraction','_lastNumericUnit','preventDefault','_applyTypedValue','_min','_stepperRepeatTimeout','_displayValueLock','_detachDragWindowListeners','blur','custom','_handleWindowDragPointerMove','trim','602172OquEQW','mode','_roundToStepPrecision','_allowCustomValue','indexOf','_autoSizeSelect','_applyNumericValue','_wireEvents','min','_previewChanged','unit','split','readOnly','_attachDragWindowListeners','_scrubberButton','_previewNumericValue','appendChild','createElement','input','value','valueChanged','pointerId','7202363jsbFDr','valuePreviewFinished','_input','_finishPreviewSession','length','_dragStartNumericValue','change','clearTimeout','_preferCustomMode','allowCustomValue','kind','step','numeric','_measure','ceil','_dragStartY','Values','pointerup','selectedUnit','_max','replaceChildren','max','style','disabled','_previewStartValue','pointercancel','_startPreviewSession','_createOption','select','pointermove','option[value=\x22\x22]','dataset','unitValueConverter','abs','_windowDragBlurHandler','188976tPNjjv','_units','_finishDragInteraction','template','Enter','_unitSteps','_renderSelectOptions','focus','1659174gVXXnB','define','_windowDragPointerCancelHandler','_getStepPrecision','floor','_handleStepperPointerDown','_step','_windowPointerCancelHandler','text','_decreaseButton','2435072VAoCDi','_lastNumericValue','unitSteps','inputValue','scrubber','_stepperDirection','_finishDragInteractionForPointerEvent','removeEventListener','_stopStepperRepeat','decrease','_convertNumericValue','_normalizeOptionValues','_detachStepperWindowListeners','_clampNumericValue','emit','label','_calculateDraggedStepCount','_dragPointerId','isInPreview','_getEffectiveStep','_getDisplayState','_windowDragPointerMoveHandler','_stepperPointerId','units','fixed','_applySelectedMode','_readEditableNumericValue','_updateValue','_switchToUnitModeForInteraction'];a=function(){return aj;};return a();}