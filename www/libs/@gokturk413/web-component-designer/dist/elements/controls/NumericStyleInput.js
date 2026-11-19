const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x180))/0x1*(parseInt(p(0x19c))/0x2)+parseInt(p(0x194))/0x3*(parseInt(p(0x147))/0x4)+-parseInt(p(0x1c1))/0x5*(parseInt(p(0x14d))/0x6)+parseInt(p(0x16f))/0x7+-parseInt(p(0x19d))/0x8+parseInt(p(0x16b))/0x9+-parseInt(p(0x1a7))/0xa*(parseInt(p(0x17b))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x51a6a));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue=q(0x190),dragHandleGlyph='⋮';function a(){const al=['setTimeout','appendChild','pointerId','_commitValue','_detachStepperWindowListeners','optgroup','4132cLLhOO','_createCustomDisplayState','_autoSizeSelect','custom','max','_applyTypedValue','138ISzodv','hasPointerCapture','_attachDragWindowListeners','step','_windowDragBlurHandler','trim','blur','_handleStepperPointerDown','isNaN','_preferCustomMode','_select','Enter','_stepperPointerId','_value','disabled','key','_finishDragInteraction','_calculateDraggedStepCount','kind','_clampNumericValue','Units','setPointerCapture','addEventListener','_updateValue','inputValue','_appliedDragSteps','_finishDragInteractionForPointerEvent','replaceChildren','setInterval','_scrubberButton','1264815ZZNpob','min','includes','_renderSelectOptions','2932356RxXfUr','option[value=\x22\x22]','_windowDragPointerCancelHandler','valuePreviewFinished','valueChanged','_lastNumericUnit','_fixedValues','_switchToUnitModeForInteraction','_applyStepPreview','text','isFinite','unitValueConverter','22QoVbQl','_readOnly','numberText','length','_step','61746EmWslV','_handleWindowDragPointerMove','inputEnabled','NaN','pointercancel','_resolveCurrentValueForUnit','_getDomElement','ceil','_applySelectedMode','_units','floor','unit','_unitSteps','clientY','_allowCustomValue','_parseAttributesToProperties','__node-projects-custom-value__','mode','node-projects-numeric-style-input','isInPreview','1329ResHrs','_windowBlurHandler','_setValue','template','numeric','_detachDragWindowListeners','_windowDragPointerMoveHandler','_startPreviewSession','2CtYEPj','945640EgnDOQ','textContent','Values','style','sign','_windowDragPointerUpHandler','_unitValueConverter','selectValue','_previewNumericValue','_getDisplayState','834370aejsFn','selectedOptions','focus','_previewChanged','readOnly','_lastNumericValue','_finishPreviewSession','input','_applyNumericValue','_stepperRepeatTimeout','_applyReadonlyState','_dragPointerId','_convertNumericValue','select','allowCustomValue','item','_getInteractiveStepValue','_getStepPrecision','_finishStepperInteraction','_max','change','_isSelectedUnitMode','scrubber','_wireEvents','_normalizeOptionValues','_previewStartValue','99845mcEabK','pointerdown','_min','removeEventListener','_input','_windowPointerCancelHandler','_displayValueLock','_stepperRepeatInterval','_windowPointerUpHandler','preventDefault','units','_createOption','value','selectedUnit','round','pointermove','_increaseButton','_handlePointerDown','_dragStartNumericValue','fixed','emit','_readEditableNumericValue','_attachStepperWindowListeners','_measure','_stopStepperRepeat'];a=function(){return al;};return a();}export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x1a0)]=css`
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
  `;static [q(0x197)]=html`
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
  `;[q(0x15a)]='';get[q(0x1cd)](){const r=q;return this[r(0x15a)];}set[q(0x1cd)](c){const s=q;this[s(0x196)](c,![],![]);}['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[q(0x172)]=new TypedEvent();[q(0x189)]=['px','%','pt'];get['units'](){const t=q;return[...this[t(0x189)]];}set[q(0x1cb)](c){const u=q;this['_units']=this['_normalizeOptionValues'](c),this[u(0x174)]=this[u(0x189)][0x0]??this['_lastNumericUnit'],this['_updateValue']();}[q(0x175)]=[];get['fixedValues'](){return[...this['_fixedValues']];}set['fixedValues'](c){const v=q;this['_fixedValues']=this[v(0x1bf)](c),this[v(0x164)]();}['_step']=0x1;get[q(0x150)](){const w=q;return this[w(0x17f)];}set[q(0x150)](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0x18c)]={};get['unitSteps'](){const x=q;return{...this[x(0x18c)]};}set['unitSteps'](c){this['_unitSteps']=c??{};}['_min']=null;get['min'](){return this['_min'];}set['min'](c){const y=q;this[y(0x1c3)]=Number[y(0x179)](c)?c:null;}[q(0x1ba)]=null;get['max'](){return this['_max'];}set[q(0x14b)](c){this['_max']=Number['isFinite'](c)?c:null;}['_readOnly']=![];get[q(0x1ab)](){return this['_readOnly'];}set[q(0x1ab)](c){const z=q;this['_readOnly']=c,this[z(0x1b1)]();}get[q(0x193)](){const A=q;return this[A(0x1c0)]!=null;}['_allowCustomValue']=!![];get[q(0x1b5)](){const B=q;return this[B(0x18e)];}set['allowCustomValue'](c){this['_allowCustomValue']=c,this['_updateValue']();}[q(0x1a3)];get[q(0x17a)](){return this['_unitValueConverter'];}set[q(0x17a)](c){const C=q;this[C(0x1a3)]=c;}[q(0x1c5)];[q(0x157)];['_measure'];['_scrubberButton'];['_increaseButton'];['_decreaseButton'];['_lastNumericValue']=0x0;[q(0x174)]='px';['_dragPointerId']=null;['_dragStartY']=0x0;['_dragStartNumericValue']=0x0;[q(0x166)]=0x0;['_previewStartValue']=null;[q(0x1aa)]=![];[q(0x1c7)]=null;[q(0x159)]=null;['_stepperDirection']=0x0;[q(0x1b0)]=null;[q(0x1c8)]=null;['_windowDragPointerMoveHandler']=c=>this['_handleWindowDragPointerMove'](c);[q(0x1a2)]=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x167)](c,!![]);[q(0x151)]=()=>this[q(0x15d)](![]);[q(0x1c9)]=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x195)]=()=>this['_finishStepperInteraction'](![]);[q(0x156)]=![];constructor(){const D=q;super(),this['_restoreCachedInititalValues'](),this[D(0x1c5)]=this[D(0x186)](D(0x1ae)),this['_select']=this[D(0x186)](D(0x1b4)),this['_measure']=this[D(0x186)]('measure'),this['_scrubberButton']=this[D(0x186)](D(0x1bd)),this['_increaseButton']=this['_getDomElement']('increase'),this['_decreaseButton']=this[D(0x186)]('decrease');}['ready'](){const E=q;this[E(0x18f)](),this[E(0x1be)](),this['_updateValue']();}['_wireEvents'](){const F=q;this['_input']['addEventListener'](F(0x1bb),()=>this[F(0x14c)]()),this['_input']['addEventListener']('keydown',c=>{const G=F;c[G(0x15c)]===G(0x158)&&(this['_applyTypedValue'](),this['_input']['blur']());}),this['_scrubberButton']['addEventListener']('pointerdown',c=>this[F(0x1d2)](c)),this['_select'][F(0x163)](F(0x1bb),()=>this[F(0x188)]()),this[F(0x1d1)]['addEventListener'](F(0x1c2),c=>this['_handleStepperPointerDown'](c,0x1)),this['_decreaseButton'][F(0x163)](F(0x1c2),c=>this[F(0x154)](c,-0x1));}[q(0x1d2)](c){const H=q;if(this[H(0x17c)])return;if(!this['_isSelectedUnitMode']()){if(!this[H(0x176)]())return;}this['_dragPointerId']=c[H(0x1dc)],this['_dragStartY']=c[H(0x18d)],this[H(0x1d3)]=this[H(0x1d6)](this['_select']['value']),this[H(0x166)]=0x0,this[H(0x19b)](),this[H(0x14f)]();try{this[H(0x16a)][H(0x162)](c['pointerId']);}catch{}c[H(0x1ca)]();}[q(0x181)](c){const I=q;if(this[I(0x1b2)]!==c['pointerId']||!this['_isSelectedUnitMode']())return;const d=this[I(0x15e)](this['_dragStartY']-c[I(0x18d)]);if(d===this[I(0x166)])return;this[I(0x166)]=d;const e=this['_select']['value'],f=this['_getEffectiveStep'](e);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_dragStartNumericValue'],d,f),e,f),c[I(0x1ca)]();}['_finishDragInteractionForPointerEvent'](c,d){const J=q;if(this[J(0x1b2)]!==c[J(0x1dc)])return;this['_finishDragInteraction'](d,c[J(0x1dc)]);}[q(0x15d)](c,d){const K=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this[K(0x166)]=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton'][K(0x14e)](d))this[K(0x16a)]['releasePointerCapture'](d);}catch{}this[K(0x1ad)](c);}[q(0x154)](c,d){const L=q;if(this['_readOnly'])return;if(!this[L(0x1bc)]()){if(!this[L(0x176)]())return;}this['_finishStepperInteraction'](!![]),this[L(0x159)]=c['pointerId'],this['_stepperDirection']=d,this[L(0x1d7)](),this[L(0x19b)](),this[L(0x177)](d),this['_stepperRepeatTimeout']=window[L(0x1da)](()=>{const M=L;this['_stepperRepeatInterval']=window[M(0x169)](()=>this['_applyStepPreview'](this['_stepperDirection']),0x32);},0x15e),c[L(0x1ca)]();}['_handleWindowStepperPointerEnd'](c){const N=q;if(this['_stepperPointerId']!==c[N(0x1dc)])return;this[N(0x1b9)](![]);}['_finishStepperInteraction'](c){const O=q;if(this['_stepperPointerId']==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this[O(0x1de)](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const P=q,c=this['_select'][P(0x1a8)][P(0x1b6)](0x0);if(!c)return;const d=c['dataset']['kind'];if(d==='fixed'){this['_commitValue'](c['value']);return;}if(d==='custom'){this[P(0x156)]=!![],this['_updateValue'](),requestAnimationFrame(()=>{const Q=P;this[Q(0x1c5)]['focus'](),this[Q(0x1c5)][Q(0x1b4)]();});return;}const e=c['value'];this[P(0x174)]=e,this[P(0x156)]=![];const f=parseNumericStyleInputValue(this['_value']);if(f['kind']===P(0x198)){const i=this[P(0x1b3)](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f[P(0x15f)]==='empty'){this[P(0x164)](),this[P(0x1c5)][P(0x1a9)]();return;}const h=Number(this[P(0x1c5)]['value']);if(!Number[P(0x155)](h)){this[P(0x1af)](h,e);return;}this['_commitValue'](''),this[P(0x1c5)]['focus']();}['_applyTypedValue'](){const R=q,c=this[R(0x157)]['selectedOptions'][R(0x1b6)](0x0),d=c?.['dataset']['kind'];if(d==='fixed')return;if(d===R(0x14a)){this['_commitValue'](this[R(0x1c5)]['value']);return;}const e=this[R(0x1c5)]['value']?.['trim']()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[R(0x155)](f))this['_lastNumericValue']=this[R(0x160)](f);this[R(0x1dd)](combineNumericStyleInputValue(e,c?.['value']??''));}[q(0x164)](){const S=q;if(!this[S(0x1c5)]||!this['_select'])return;if(this['_previewStartValue']==null)this[S(0x16e)]();const c=this[S(0x1a6)](this[S(0x1c7)]??this['_value']);this[S(0x1c5)][S(0x1cd)]=c['inputValue'],this['_input']['style']['display']=c['inputVisible']?'':'none',this['_input']['disabled']=this['_readOnly']||!c[S(0x182)],this['_select'][S(0x1cd)]=c[S(0x1a4)],this[S(0x149)]();if(c['mode']==='unit'&&c[S(0x1ce)]!=null)this[S(0x174)]=c[S(0x1ce)];if(c[S(0x191)]==='unit'&&c[S(0x165)]!==''){const f=Number(c['inputValue']);if(!Number[S(0x155)](f))this['_lastNumericValue']=this['_clampNumericValue'](f);}const d=this[S(0x189)][S(0x17e)]>0x0,e=this[S(0x17c)]||(!d||c[S(0x191)]===S(0x14a));this[S(0x16a)]['disabled']=e,this[S(0x1d1)][S(0x15b)]=e,this['_decreaseButton']['disabled']=e,this[S(0x1b1)]();}[q(0x1a6)](c){const T=q,d=parseNumericStyleInputValue(c);if(d['kind']===T(0x198)){if(this[T(0x156)])return this[T(0x148)](d['numberText']);if(d['unit']&&this['_units']['length']&&!this['_units'][T(0x16d)](d['unit']))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this[T(0x174)],this[T(0x189)])??'';return{'mode':T(0x18b),'inputValue':d[T(0x17d)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][T(0x16d)](f)?f:this[T(0x157)]['value']||customOptionValue,'selectedUnit':f};}if(d[T(0x15f)]==='text'){if(!this['_preferCustomMode']&&this['_fixedValues'][T(0x16d)](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[T(0x178)]};return this[T(0x148)](d[T(0x178)]);}if(this[T(0x156)])return this['_createCustomDisplayState']('');const e=this[T(0x174)]??this[T(0x189)][0x0]??'';if(this[T(0x189)]['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}['_createCustomDisplayState'](c){const U=q;if(!this[U(0x18e)]&&this[U(0x189)][U(0x17e)])return{'mode':U(0x18b),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[U(0x189)][0x0],'selectedUnit':this[U(0x189)][0x0]};return{'mode':U(0x14a),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const V=q,c=this[V(0x157)]['value'];this[V(0x157)][V(0x168)]();if(this[V(0x189)][V(0x17e)]){const d=document['createElement'](V(0x146));d['label']=V(0x161);for(const e of this['_units'])d[V(0x1db)](this['_createOption'](getNumericStyleInputUnitLabel(e),e,'unit'));this['_select'][V(0x1db)](d);}if(this[V(0x175)]['length']){const f=document['createElement'](V(0x146));f['label']=V(0x19f);for(const g of this[V(0x175)])f[V(0x1db)](this[V(0x1cc)](g,g,V(0x1d4)));this[V(0x157)]['appendChild'](f);}if(this['_allowCustomValue']||this['_select']['options']['length']===0x0)this['_select']['appendChild'](this[V(0x1cc)](V(0x14a),customOptionValue,'custom'));if(c!=='')this['_select'][V(0x1cd)]=c;else{if(this['_select']['querySelector'](V(0x170)))this[V(0x157)][V(0x1cd)]='';}}['_createOption'](c,d,e){const W=q,f=document['createElement']('option');return f['text']=c,f['value']=d,f['dataset'][W(0x15f)]=e,f;}[q(0x149)](){const X=q;if(!this['_measure']||!this[X(0x157)])return;const c=this['_select'][X(0x1a8)][X(0x1b6)](0x0);this['_measure'][X(0x19e)]=c?.[X(0x178)]??'';const d=this[X(0x1d8)]['offsetWidth'];d>0x0?this[X(0x157)]['style']['width']=d+0x11+'px':requestAnimationFrame(()=>this[X(0x149)]());}['_applyReadonlyState'](){const Y=q;if(!this[Y(0x1c5)]||!this[Y(0x157)])return;this[Y(0x1c5)][Y(0x1ab)]=this['_readOnly'],this[Y(0x157)][Y(0x15b)]=this['_readOnly'];}[q(0x1b3)](c,d){const Z=q;if(d==null)return this[Z(0x15a)];const e=c['unit'],f=this[Z(0x1a3)]?.({'value':c[Z(0x1cd)],'numberText':c[Z(0x17d)],'rawValue':this[Z(0x15a)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}[q(0x185)](c){const a0=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number[a0(0x183)],'numberText':'','rawValue':this[a0(0x15a)],'fromUnit':'','toUnit':c})?.[a0(0x152)]();return d?d:null;}['_readEditableNumericValue'](c){const a1=q,d=parseNumericStyleInputValue(this[a1(0x15a)]);if(d['kind']===a1(0x198)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f[a1(0x1cd)];return d['value'];}if(this[a1(0x1c5)][a1(0x1cd)]?.[a1(0x152)]()){const g=Number(this[a1(0x1c5)]['value']);if(!Number[a1(0x155)](g))return g;}return this['_lastNumericValue'];}['_applyNumericValue'](c,d){const a2=q;this['_lastNumericValue']=this[a2(0x160)](c),this[a2(0x174)]=d,this[a2(0x1dd)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0x1a5)](c,d,e){const a3=q;this[a3(0x1ac)]=this[a3(0x160)](c),this[a3(0x174)]=d;const f=e??this['_getEffectiveStep'](d);this[a3(0x196)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a3(0x1ac)],f),d),![],!![]);}['_commitValue'](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a4=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this[a4(0x15a)];this[a4(0x15a)]=f;if(e)this['_displayValueLock']=f;else{if(this[a4(0x1c7)]!=null){if(f===this[a4(0x1c7)]||f!==g)this['_displayValueLock']=null;}}this['_preferCustomMode']=![],this['_updateValue']();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged'][a4(0x1d5)]({'newValue':f,'oldValue':g}));if(d)this[a4(0x173)][a4(0x1d5)]({'newValue':f,'oldValue':g});}}[q(0x19b)](){const a5=q;this['_previewStartValue']==null&&(this['_previewStartValue']=this[a5(0x15a)],this['_previewChanged']=![]);}[q(0x1ad)](c){const a6=q;if(this['_previewStartValue']==null)return;const d=this[a6(0x1c0)],e=this['_displayValueLock']??this['_value'],f=this['_previewChanged']&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this[a6(0x1c7)]=null,this['_value']=d,this['_updateValue']()):(this[a6(0x1c7)]=e,this[a6(0x164)]()),this[a6(0x172)][a6(0x1d5)]({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x177)](c){const a7=q,d=this['_select'][a7(0x1cd)],e=this['_getEffectiveStep'](d);this['_previewNumericValue'](this[a7(0x1b7)](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0x1d9)](){const a8=q;this[a8(0x1b0)]!=null&&(window['clearTimeout'](this[a8(0x1b0)]),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this[a8(0x1c8)]),this['_stepperRepeatInterval']=null);}[q(0x1d7)](){const a9=q;window['addEventListener']('pointerup',this[a9(0x1c9)],!![]),window['addEventListener']('pointercancel',this[a9(0x1c6)],!![]),window[a9(0x163)](a9(0x153),this['_windowBlurHandler']);}[q(0x14f)](){const aa=q;window[aa(0x163)]('pointermove',this[aa(0x19a)],!![]),window['addEventListener']('pointerup',this['_windowDragPointerUpHandler'],!![]),window[aa(0x163)]('pointercancel',this[aa(0x171)],!![]),window[aa(0x163)]('blur',this[aa(0x151)]);}[q(0x1de)](){const ab=q;window['removeEventListener']('pointerup',this['_windowPointerUpHandler'],!![]),window['removeEventListener'](ab(0x184),this[ab(0x1c6)],!![]),window['removeEventListener'](ab(0x153),this['_windowBlurHandler']);}[q(0x199)](){const ac=q;window[ac(0x1c4)](ac(0x1d0),this['_windowDragPointerMoveHandler'],!![]),window[ac(0x1c4)]('pointerup',this[ac(0x1a2)],!![]),window['removeEventListener'](ac(0x184),this['_windowDragPointerCancelHandler'],!![]),window['removeEventListener']('blur',this[ac(0x151)]);}['_calculateDraggedStepCount'](c){const ad=q,d=Math['abs'](c),e=Math['min'](d,0x14)/0x5,f=Math[ad(0x14b)](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[ad(0x14b)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[ad(0x1a1)](c)*h;}['_getEffectiveStep'](c){const ae=q;return resolveNumericStyleInputStep(this['_unitSteps'],this[ae(0x17f)],c);}['_getInteractiveStepValue'](c,d,e){const af=q,f=e??this[af(0x17f)],g=this['_clampNumericValue'](c);if(!Number[af(0x179)](g)||!Number[af(0x179)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[af(0x187)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[af(0x18a)](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this['_roundToStepPrecision'](m,f));}['_formatInteractiveNumericValue'](c,d){const e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}['_roundToStepPrecision'](c,d){const ag=q,e=this[ag(0x1b8)](d),f=0xa**e;return Math[ag(0x1cf)](c*f)/f;}[q(0x1b8)](c){const ah=q,d=(''+(c??this[ah(0x17f)]))['toLowerCase']();if(d['includes']('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f['includes']('.')?f[ah(0x17e)]-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ah(0x17e)]-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const ai=q,c=this[ai(0x174)]??this['_units'][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[ai(0x185)](c);if(d!=null)return this['_commitValue'](d),this[ai(0x1bc)]();return this[ai(0x1af)](this['_lastNumericValue'],c),this[ai(0x1bc)]();}[q(0x1bc)](){const aj=q;return this[aj(0x157)]['selectedOptions'][aj(0x1b6)](0x0)?.['dataset']['kind']===aj(0x18b);}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x160)](c){const ak=q;let d=c;if(this['_min']!=null)d=Math['max'](this[ak(0x1c3)],d);if(this['_max']!=null)d=Math[ak(0x16c)](this['_max'],d);return d;}}function b(c,d){c=c-0x146;const e=a();let f=e[c];return f;}customElements['define'](q(0x192),NumericStyleInput);