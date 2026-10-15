const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x134))/0x1+parseInt(p(0x1a1))/0x2*(parseInt(p(0x135))/0x3)+-parseInt(p(0x17d))/0x4+parseInt(p(0x167))/0x5+parseInt(p(0x142))/0x6*(-parseInt(p(0x161))/0x7)+parseInt(p(0x14a))/0x8*(parseInt(p(0x191))/0x9)+-parseInt(p(0x18e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4faa3));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';function a(){const ap=['_convertNumericValue','removeEventListener','_stopStepperRepeat','7675600dxpEaO','_finishPreviewSession','_dragPointerId','283518YgOCBA','_applySelectedMode','toLowerCase','mode','_getDomElement','_formatInteractiveNumericValue','_createOption','_windowPointerCancelHandler','_clampNumericValue','_getEffectiveStep','_wireEvents','dataset','setTimeout','_startPreviewSession','_getStepPrecision','_preferCustomMode','2gdyraZ','_previewStartValue','change','appendChild','_windowDragBlurHandler','_getInteractiveStepValue','options','_scrubberButton','_windowDragPointerCancelHandler','isNaN','pointermove','releasePointerCapture','setPointerCapture','custom','_calculateDraggedStepCount','selectedOptions','unitValueConverter','valuePreviewFinished','emit','_previewNumericValue','_allowCustomValue','_getDisplayState','text','_displayValueLock','floor','valuePreviewChanged','increase','_handleWindowDragPointerMove','item','_unitSteps','_switchToUnitModeForInteraction','isInPreview','_windowDragPointerMoveHandler','measure','_measure','_unitValueConverter','indexOf','578948xKlrxa','252015FPKxJz','blur','readOnly','trim','unitSteps','_input','NaN','fixed','_applyReadonlyState','_value','length','unit','_decreaseButton','2022WMbShd','createElement','_handleWindowStepperPointerEnd','_roundToStepPrecision','_normalizeOptionValues','min','_setValue','pointerId','136BnYOHr','_createCustomDisplayState','_windowDragPointerUpHandler','_handleStepperPointerDown','_lastNumericValue','inputValue','_isSelectedUnitMode','ceil','Enter','_max','_lastNumericUnit','pointerup','sign','_step','_windowPointerUpHandler','_readEditableNumericValue','_updateValue','max','hasPointerCapture','_fixedValues','pointercancel','style','__node-projects-custom-value__','8813KkBNFM','numeric','_stepperRepeatTimeout','textContent','step','valueChanged','2305820wgPPhV','kind','optgroup','_finishStepperInteraction','_commitValue','addEventListener','querySelector','preventDefault','_finishDragInteractionForPointerEvent','_min','option[value=\x22\x22]','_stepperRepeatInterval','disabled','_attachStepperWindowListeners','scrubber','selectedUnit','_dragStartNumericValue','_windowBlurHandler','label','_renderSelectOptions','_units','fixedValues','566004WSexwl','_readOnly','_stepperPointerId','_resolveCurrentValueForUnit','_increaseButton','_previewChanged','clientY','_applyNumericValue','includes','define','_applyTypedValue','isFinite','_select','value'];a=function(){return ap;};return a();}const customOptionValue=q(0x160),dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x15f)]=css`
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
  `;['_value']='';get['value'](){return this['_value'];}set['value'](c){const r=q;this[r(0x148)](c,![],![]);}[q(0x166)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get['units'](){const s=q;return[...this[s(0x17b)]];}set['units'](c){const t=q;this[t(0x17b)]=this[t(0x146)](c),this[t(0x154)]=this['_units'][0x0]??this['_lastNumericUnit'],this['_updateValue']();}[q(0x15d)]=[];get[q(0x17c)](){const u=q;return[...this[u(0x15d)]];}set['fixedValues'](c){const v=q;this['_fixedValues']=this[v(0x146)](c),this[v(0x15a)]();}['_step']=0x1;get[q(0x165)](){const w=q;return this[w(0x157)];}set[q(0x165)](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0x1be)]={};get['unitSteps'](){const x=q;return{...this[x(0x1be)]};}set[q(0x139)](c){this['_unitSteps']=c??{};}[q(0x170)]=null;get['min'](){const y=q;return this[y(0x170)];}set[q(0x147)](c){const z=q;this[z(0x170)]=Number['isFinite'](c)?c:null;}['_max']=null;get[q(0x15b)](){const A=q;return this[A(0x153)];}set[q(0x15b)](c){const B=q;this['_max']=Number[B(0x188)](c)?c:null;}[q(0x17e)]=![];get['readOnly'](){const C=q;return this[C(0x17e)];}set[q(0x137)](c){this['_readOnly']=c,this['_applyReadonlyState']();}get[q(0x1c0)](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){const D=q;return this[D(0x1b5)];}set['allowCustomValue'](c){const E=q;this['_allowCustomValue']=c,this[E(0x15a)]();}[q(0x132)];get[q(0x1b1)](){return this['_unitValueConverter'];}set['unitValueConverter'](c){const F=q;this[F(0x132)]=c;}[q(0x13a)];['_select'];['_measure'];[q(0x1a8)];[q(0x181)];['_decreaseButton'];[q(0x14e)]=0x0;[q(0x154)]='px';['_dragPointerId']=null;['_dragStartY']=0x0;['_dragStartNumericValue']=0x0;['_appliedDragSteps']=0x0;['_previewStartValue']=null;['_previewChanged']=![];['_displayValueLock']=null;[q(0x17f)]=null;['_stepperDirection']=0x0;['_stepperRepeatTimeout']=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0x1bc)](c);[q(0x14c)]=c=>this[q(0x16f)](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x16f)](c,!![]);[q(0x1a5)]=()=>this['_finishDragInteraction'](![]);[q(0x158)]=c=>this[q(0x144)](c);[q(0x198)]=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);[q(0x1a0)]=![];constructor(){const G=q;super(),this['_restoreCachedInititalValues'](),this[G(0x13a)]=this[G(0x195)]('input'),this[G(0x189)]=this['_getDomElement']('select'),this['_measure']=this[G(0x195)](G(0x130)),this[G(0x1a8)]=this['_getDomElement'](G(0x175)),this[G(0x181)]=this[G(0x195)](G(0x1bb)),this[G(0x141)]=this[G(0x195)]('decrease');}['ready'](){const H=q;this['_parseAttributesToProperties'](),this[H(0x19b)](),this['_updateValue']();}['_wireEvents'](){const I=q;this['_input']['addEventListener']('change',()=>this['_applyTypedValue']()),this['_input'][I(0x16c)]('keydown',c=>{const J=I;c['key']===J(0x152)&&(this[J(0x187)](),this['_input']['blur']());}),this['_scrubberButton']['addEventListener']('pointerdown',c=>this['_handlePointerDown'](c)),this[I(0x189)]['addEventListener'](I(0x1a3),()=>this[I(0x192)]()),this[I(0x181)][I(0x16c)]('pointerdown',c=>this[I(0x14d)](c,0x1)),this['_decreaseButton'][I(0x16c)]('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const K=q;if(this['_readOnly'])return;if(!this[K(0x150)]()){if(!this['_switchToUnitModeForInteraction']())return;}this['_dragPointerId']=c['pointerId'],this['_dragStartY']=c['clientY'],this[K(0x177)]=this[K(0x159)](this[K(0x189)]['value']),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this[K(0x1a8)][K(0x1ad)](c[K(0x149)]);}catch{}c[K(0x16e)]();}[q(0x1bc)](c){const L=q;if(this[L(0x190)]!==c['pointerId']||!this[L(0x150)]())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c[L(0x183)]);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this[L(0x189)][L(0x18a)],f=this[L(0x19a)](e);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_dragStartNumericValue'],d,f),e,f),c[L(0x16e)]();}[q(0x16f)](c,d){const M=q;if(this['_dragPointerId']!==c[M(0x149)])return;this['_finishDragInteraction'](d,c[M(0x149)]);}['_finishDragInteraction'](c,d){const N=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this[N(0x1a8)][N(0x15c)](d))this[N(0x1a8)][N(0x1ac)](d);}catch{}this[N(0x18f)](c);}[q(0x14d)](c,d){const O=q;if(this[O(0x17e)])return;if(!this['_isSelectedUnitMode']()){if(!this[O(0x1bf)]())return;}this['_finishStepperInteraction'](!![]),this['_stepperPointerId']=c[O(0x149)],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this[O(0x19e)](),this['_applyStepPreview'](d),this[O(0x163)]=window[O(0x19d)](()=>{const P=O;this[P(0x172)]=window['setInterval'](()=>this['_applyStepPreview'](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const Q=q;if(this['_stepperPointerId']!==c['pointerId'])return;this[Q(0x16a)](![]);}['_finishStepperInteraction'](c){const R=q;if(this['_stepperPointerId']==null)return;this[R(0x17f)]=null,this['_stepperDirection']=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this[R(0x18f)](c);}['_applySelectedMode'](){const S=q,c=this['_select'][S(0x1b0)]['item'](0x0);if(!c)return;const d=c[S(0x19c)][S(0x168)];if(d===S(0x13c)){this[S(0x16b)](c[S(0x18a)]);return;}if(d===S(0x1ae)){this['_preferCustomMode']=!![],this['_updateValue'](),requestAnimationFrame(()=>{const T=S;this['_input']['focus'](),this[T(0x13a)]['select']();});return;}const e=c['value'];this['_lastNumericUnit']=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this[S(0x13e)]);if(f[S(0x168)]==='numeric'){const i=this[S(0x18b)](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f['kind']==='empty'){this['_updateValue'](),this['_input']['focus']();return;}const h=Number(this['_input']['value']);if(!Number[S(0x1aa)](h)){this['_applyNumericValue'](h,e);return;}this[S(0x16b)](''),this['_input']['focus']();}['_applyTypedValue'](){const U=q,c=this['_select'][U(0x1b0)][U(0x1bd)](0x0),d=c?.[U(0x19c)][U(0x168)];if(d==='fixed')return;if(d==='custom'){this[U(0x16b)](this[U(0x13a)]['value']);return;}const e=this['_input']['value']?.[U(0x138)]()??'';if(!e){this[U(0x16b)]('');return;}const f=Number(e);if(!Number[U(0x1aa)](f))this[U(0x14e)]=this[U(0x199)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.['value']??''));}[q(0x15a)](){const V=q;if(!this[V(0x13a)]||!this[V(0x189)])return;if(this['_previewStartValue']==null)this[V(0x17a)]();const c=this['_getDisplayState'](this[V(0x1b8)]??this['_value']);this['_input']['value']=c[V(0x14f)],this[V(0x13a)]['style']['display']=c['inputVisible']?'':'none',this['_input'][V(0x173)]=this[V(0x17e)]||!c['inputEnabled'],this[V(0x189)]['value']=c['selectValue'],this['_autoSizeSelect']();if(c[V(0x194)]===V(0x140)&&c[V(0x176)]!=null)this[V(0x154)]=c['selectedUnit'];if(c['mode']===V(0x140)&&c[V(0x14f)]!==''){const f=Number(c[V(0x14f)]);if(!Number[V(0x1aa)](f))this[V(0x14e)]=this['_clampNumericValue'](f);}const d=this['_units'][V(0x13f)]>0x0,e=this[V(0x17e)]||(!d||c[V(0x194)]==='custom');this['_scrubberButton']['disabled']=e,this['_increaseButton'][V(0x173)]=e,this[V(0x141)][V(0x173)]=e,this[V(0x13d)]();}[q(0x1b6)](c){const W=q,d=parseNumericStyleInputValue(c);if(d['kind']===W(0x162)){if(this['_preferCustomMode'])return this['_createCustomDisplayState'](d['numberText']);if(d['unit']&&this[W(0x17b)]['length']&&!this[W(0x17b)]['includes'](d[W(0x140)]))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d[W(0x140)],this['_lastNumericUnit'],this[W(0x17b)])??'';return{'mode':W(0x140),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[W(0x17b)][W(0x185)](f)?f:this['_select'][W(0x18a)]||customOptionValue,'selectedUnit':f};}if(d[W(0x168)]===W(0x1b7)){if(!this[W(0x1a0)]&&this['_fixedValues']['includes'](d[W(0x1b7)]))return{'mode':W(0x13c),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[W(0x1b7)]};return this[W(0x14b)](d[W(0x1b7)]);}if(this[W(0x1a0)])return this['_createCustomDisplayState']('');const e=this[W(0x154)]??this['_units'][0x0]??'';if(this['_units']['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[W(0x14b)]('');}[q(0x14b)](c){const X=q;if(!this['_allowCustomValue']&&this[X(0x17b)]['length'])return{'mode':X(0x140),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[X(0x17b)][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':X(0x1ae),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const Y=q,c=this[Y(0x189)][Y(0x18a)];this['_select']['replaceChildren']();if(this['_units'][Y(0x13f)]){const d=document['createElement'](Y(0x169));d[Y(0x179)]='Units';for(const e of this[Y(0x17b)])d[Y(0x1a4)](this[Y(0x197)](getNumericStyleInputUnitLabel(e),e,'unit'));this[Y(0x189)][Y(0x1a4)](d);}if(this['_fixedValues']['length']){const f=document['createElement']('optgroup');f['label']='Values';for(const g of this[Y(0x15d)])f['appendChild'](this[Y(0x197)](g,g,Y(0x13c)));this['_select'][Y(0x1a4)](f);}if(this['_allowCustomValue']||this['_select'][Y(0x1a7)][Y(0x13f)]===0x0)this['_select'][Y(0x1a4)](this[Y(0x197)]('custom',customOptionValue,Y(0x1ae)));if(c!=='')this['_select']['value']=c;else{if(this[Y(0x189)][Y(0x16d)](Y(0x171)))this[Y(0x189)]['value']='';}}[q(0x197)](c,d,e){const Z=q,f=document[Z(0x143)]('option');return f[Z(0x1b7)]=c,f['value']=d,f['dataset']['kind']=e,f;}['_autoSizeSelect'](){const a0=q;if(!this[a0(0x131)]||!this['_select'])return;const c=this['_select']['selectedOptions'][a0(0x1bd)](0x0);this['_measure'][a0(0x164)]=c?.['text']??'';const d=this[a0(0x131)]['offsetWidth'];d>0x0?this[a0(0x189)]['style']['width']=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const a1=q;if(!this[a1(0x13a)]||!this['_select'])return;this['_input'][a1(0x137)]=this[a1(0x17e)],this['_select'][a1(0x173)]=this['_readOnly'];}[q(0x18b)](c,d){const a2=q;if(d==null)return this[a2(0x13e)];const e=c['unit'],f=this[a2(0x132)]?.({'value':c[a2(0x18a)],'numberText':c['numberText'],'rawValue':this[a2(0x13e)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}[q(0x180)](c){const a3=q;if(c==null)return null;const d=this[a3(0x132)]?.({'value':Number[a3(0x13b)],'numberText':'','rawValue':this[a3(0x13e)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const a4=q,d=parseNumericStyleInputValue(this[a4(0x13e)]);if(d[a4(0x168)]===a4(0x162)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f[a4(0x168)]===a4(0x162))return f['value'];return d[a4(0x18a)];}if(this['_input']['value']?.['trim']()){const g=Number(this['_input'][a4(0x18a)]);if(!Number[a4(0x1aa)](g))return g;}return this['_lastNumericValue'];}[q(0x184)](c,d){const a5=q;this[a5(0x14e)]=this[a5(0x199)](c),this['_lastNumericUnit']=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0x1b4)](c,d,e){const a6=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d;const f=e??this[a6(0x19a)](d);this[a6(0x148)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this['_lastNumericValue'],f),d),![],!![]);}['_commitValue'](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a7=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this['_value'];this['_value']=f;if(e)this[a7(0x1b8)]=f;else{if(this[a7(0x1b8)]!=null){if(f===this['_displayValueLock']||f!==g)this[a7(0x1b8)]=null;}}this[a7(0x1a0)]=![],this['_updateValue']();if(g!==f){e&&(this['_previewChanged']=!![],this[a7(0x1ba)]['emit']({'newValue':f,'oldValue':g}));if(d)this[a7(0x166)][a7(0x1b3)]({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a8=q;this['_previewStartValue']==null&&(this[a8(0x1a2)]=this['_value'],this[a8(0x182)]=![]);}[q(0x18f)](c){const a9=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this[a9(0x1b8)]??this['_value'],f=this['_previewChanged']&&d!==e,g=c||!f;this['_previewStartValue']=null,this[a9(0x182)]=![],g?(this['_displayValueLock']=null,this[a9(0x13e)]=d,this['_updateValue']()):(this['_displayValueLock']=e,this[a9(0x15a)]()),this[a9(0x1b2)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const aa=q,d=this[aa(0x189)][aa(0x18a)],e=this[aa(0x19a)](d);this['_previewNumericValue'](this[aa(0x1a6)](this[aa(0x159)](d),c,e),d,e);}[q(0x18d)](){const ab=q;this[ab(0x163)]!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this[ab(0x163)]=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this[ab(0x172)]),this[ab(0x172)]=null);}[q(0x174)](){const ac=q;window['addEventListener'](ac(0x155),this['_windowPointerUpHandler'],!![]),window[ac(0x16c)]('pointercancel',this[ac(0x198)],!![]),window['addEventListener']('blur',this[ac(0x178)]);}['_attachDragWindowListeners'](){const ad=q;window['addEventListener']('pointermove',this[ad(0x1c1)],!![]),window['addEventListener'](ad(0x155),this['_windowDragPointerUpHandler'],!![]),window[ad(0x16c)]('pointercancel',this[ad(0x1a9)],!![]),window['addEventListener']('blur',this[ad(0x1a5)]);}['_detachStepperWindowListeners'](){const ae=q;window['removeEventListener']('pointerup',this['_windowPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this[ae(0x198)],!![]),window[ae(0x18c)](ae(0x136),this[ae(0x178)]);}['_detachDragWindowListeners'](){const af=q;window[af(0x18c)](af(0x1ab),this[af(0x1c1)],!![]),window[af(0x18c)]('pointerup',this['_windowDragPointerUpHandler'],!![]),window['removeEventListener'](af(0x15e),this[af(0x1a9)],!![]),window[af(0x18c)](af(0x136),this[af(0x1a5)]);}[q(0x1af)](c){const ag=q,d=Math['abs'](c),e=Math[ag(0x147)](d,0x14)/0x5,f=Math['max'](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[ag(0x15b)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[ag(0x156)](c)*h;}[q(0x19a)](c){const ah=q;return resolveNumericStyleInputStep(this[ah(0x1be)],this['_step'],c);}['_getInteractiveStepValue'](c,d,e){const ai=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number[ai(0x188)](g)||!Number[ai(0x188)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ai(0x151)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ai(0x1b9)](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this[ai(0x145)](m,f));}[q(0x196)](c,d){const aj=q,e=d??this[aj(0x157)];return formatNumericStyleInputNumber(this[aj(0x145)](c,e),this['_getStepPrecision'](e));}['_roundToStepPrecision'](c,d){const ak=q,e=this[ak(0x19f)](d),f=0xa**e;return Math['round'](c*f)/f;}['_getStepPrecision'](c){const al=q,d=(''+(c??this[al(0x157)]))[al(0x193)]();if(d[al(0x185)]('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f['includes']('.')?f[al(0x13f)]-f[al(0x133)]('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[al(0x13f)]-e-0x1:0x0;}[q(0x1bf)](){const am=q,c=this[am(0x154)]??this['_units'][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[am(0x180)](c);if(d!=null)return this['_commitValue'](d),this[am(0x150)]();return this[am(0x184)](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}[q(0x150)](){const an=q;return this[an(0x189)]['selectedOptions'][an(0x1bd)](0x0)?.[an(0x19c)][an(0x168)]===an(0x140);}[q(0x146)](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const ao=q;let d=c;if(this['_min']!=null)d=Math['max'](this[ao(0x170)],d);if(this['_max']!=null)d=Math[ao(0x147)](this[ao(0x153)],d);return d;}}function b(c,d){c=c-0x130;const e=a();let f=e[c];return f;}customElements[q(0x186)]('node-projects-numeric-style-input',NumericStyleInput);