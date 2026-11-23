const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x19c))/0x1+parseInt(p(0x16d))/0x2*(-parseInt(p(0x15c))/0x3)+-parseInt(p(0x1a6))/0x4+-parseInt(p(0x189))/0x5+parseInt(p(0x1d9))/0x6+-parseInt(p(0x170))/0x7*(parseInt(p(0x15b))/0x8)+parseInt(p(0x197))/0x9*(parseInt(p(0x1a5))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7c89f));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';function a(){const ai=['_renderSelectOptions','blur','sign','inputVisible','isNaN','includes','length','_select','_input','isInPreview','_min','_finishDragInteraction','_clampNumericValue','emit','_windowDragPointerCancelHandler','4IoDExI','_windowDragPointerUpHandler','Enter','315KjatVa','_allowCustomValue','optgroup','_resolveCurrentValueForUnit','_detachDragWindowListeners','_attachDragWindowListeners','trunc','_startPreviewSession','option','clearInterval','label','change','allowCustomValue','select','inputEnabled','_measure','custom','units','fixed','unit','_applySelectedMode','step','_roundToStepPrecision','_commitValue','setInterval','1373715ucMrgg','_wireEvents','_windowDragPointerMoveHandler','_updateValue','_getStepPrecision','_max','_getEffectiveStep','round','_windowPointerUpHandler','selectedOptions','_step','_unitValueConverter','_autoSizeSelect','pointerdown','81NiHcJj','increase','_previewStartValue','kind','pointercancel','836685vzYZdI','ceil','_switchToUnitModeForInteraction','removeEventListener','_applyNumericValue','_readEditableNumericValue','_stepperPointerId','_detachStepperWindowListeners','pointerup','3008210UShSfq','1458720lXesUA','Values','_dragPointerId','_finishPreviewSession','_lastNumericValue','inputValue','_windowDragBlurHandler','_applyStepPreview','_getInteractiveStepValue','_preferCustomMode','valuePreviewFinished','_handleWindowStepperPointerEnd','offsetWidth','clientY','pointermove','_windowPointerCancelHandler','_units','scrubber','createElement','_windowBlurHandler','dataset','_displayValueLock','fixedValues','_previewChanged','_scrubberButton','_getDomElement','_unitSteps','_createCustomDisplayState','trim','option[value=\x22\x22]','style','_setValue','preventDefault','selectedUnit','_stepperRepeatInterval','numberText','_parseAttributesToProperties','_stopStepperRepeat','disabled','_finishStepperInteraction','textContent','_stepperRepeatTimeout','floor','_normalizeOptionValues','toLowerCase','querySelector','_lastNumericUnit','_dragStartNumericValue','_decreaseButton','_readOnly','numeric','919698FrFUNK','_createOption','min','pointerId','text','value','unitSteps','Units','indexOf','isFinite','_finishDragInteractionForPointerEvent','_appliedDragSteps','_convertNumericValue','item','_value','max','template','unitValueConverter','_attachStepperWindowListeners','abs','node-projects-numeric-style-input','appendChild','_stepperDirection','_fixedValues','_applyTypedValue','53032ecSRwT','864222zyAHaP','addEventListener'];a=function(){return ai;};return a();}export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x1c4)]=css`
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
  `;static [q(0x152)]=html`
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
  `;['_value']='';get['value'](){return this['_value'];}set['value'](c){const r=q;this[r(0x1c5)](c,![],![]);}['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[q(0x1b0)]=new TypedEvent();[q(0x1b6)]=['px','%','pt'];get[q(0x181)](){const s=q;return[...this[s(0x1b6)]];}set['units'](c){const t=q;this[t(0x1b6)]=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this[t(0x1b6)][0x0]??this[t(0x1d4)],this[t(0x18c)]();}[q(0x159)]=[];get[q(0x1bc)](){return[...this['_fixedValues']];}set[q(0x1bc)](c){this['_fixedValues']=this['_normalizeOptionValues'](c),this['_updateValue']();}[q(0x193)]=0x1;get[q(0x185)](){return this['_step'];}set['step'](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0x1c0)]={};get[q(0x1df)](){return{...this['_unitSteps']};}set[q(0x1df)](c){this['_unitSteps']=c??{};}[q(0x168)]=null;get[q(0x1db)](){return this['_min'];}set[q(0x1db)](c){this['_min']=Number['isFinite'](c)?c:null;}[q(0x18e)]=null;get[q(0x151)](){return this['_max'];}set['max'](c){this['_max']=Number['isFinite'](c)?c:null;}['_readOnly']=![];get['readOnly'](){const u=q;return this[u(0x1d7)];}set['readOnly'](c){this['_readOnly']=c,this['_applyReadonlyState']();}get[q(0x167)](){const v=q;return this[v(0x199)]!=null;}[q(0x171)]=!![];get['allowCustomValue'](){const w=q;return this[w(0x171)];}set[q(0x17c)](c){const x=q;this['_allowCustomValue']=c,this[x(0x18c)]();}['_unitValueConverter'];get[q(0x153)](){return this['_unitValueConverter'];}set[q(0x153)](c){const y=q;this[y(0x194)]=c;}['_input'];[q(0x165)];['_measure'];[q(0x1be)];['_increaseButton'];['_decreaseButton'];['_lastNumericValue']=0x0;[q(0x1d4)]='px';[q(0x1a8)]=null;['_dragStartY']=0x0;['_dragStartNumericValue']=0x0;['_appliedDragSteps']=0x0;[q(0x199)]=null;[q(0x1bd)]=![];[q(0x1bb)]=null;[q(0x1a2)]=null;['_stepperDirection']=0x0;['_stepperRepeatTimeout']=null;[q(0x1c8)]=null;[q(0x18b)]=c=>this['_handleWindowDragPointerMove'](c);['_windowDragPointerUpHandler']=c=>this[q(0x1e3)](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);[q(0x1ac)]=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this[q(0x1b1)](c);[q(0x1b5)]=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);[q(0x1af)]=![];constructor(){const z=q;super(),this['_restoreCachedInititalValues'](),this[z(0x166)]=this[z(0x1bf)]('input'),this['_select']=this[z(0x1bf)](z(0x17d)),this[z(0x17f)]=this['_getDomElement']('measure'),this[z(0x1be)]=this['_getDomElement'](z(0x1b7)),this['_increaseButton']=this['_getDomElement'](z(0x198)),this['_decreaseButton']=this['_getDomElement']('decrease');}['ready'](){const A=q;this[A(0x1ca)](),this[A(0x18a)](),this[A(0x18c)]();}['_wireEvents'](){const B=q;this[B(0x166)][B(0x15d)](B(0x17b),()=>this['_applyTypedValue']()),this['_input'][B(0x15d)]('keydown',c=>{const C=B;c['key']===C(0x16f)&&(this[C(0x15a)](),this[C(0x166)]['blur']());}),this[B(0x1be)]['addEventListener']('pointerdown',c=>this['_handlePointerDown'](c)),this['_select']['addEventListener']('change',()=>this[B(0x184)]()),this['_increaseButton']['addEventListener'](B(0x196),c=>this['_handleStepperPointerDown'](c,0x1)),this['_decreaseButton']['addEventListener'](B(0x196),c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const D=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this[D(0x1a8)]=c[D(0x1dc)],this['_dragStartY']=c['clientY'],this['_dragStartNumericValue']=this[D(0x1a1)](this['_select']['value']),this[D(0x1e4)]=0x0,this[D(0x177)](),this[D(0x175)]();try{this[D(0x1be)]['setPointerCapture'](c['pointerId']);}catch{}c[D(0x1c6)]();}['_handleWindowDragPointerMove'](c){const E=q;if(this['_dragPointerId']!==c[E(0x1dc)]||!this['_isSelectedUnitMode']())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c[E(0x1b3)]);if(d===this['_appliedDragSteps'])return;this[E(0x1e4)]=d;const e=this[E(0x165)][E(0x1de)],f=this['_getEffectiveStep'](e);this['_previewNumericValue'](this[E(0x1ae)](this[E(0x1d5)],d,f),e,f),c[E(0x1c6)]();}['_finishDragInteractionForPointerEvent'](c,d){const F=q;if(this[F(0x1a8)]!==c[F(0x1dc)])return;this[F(0x169)](d,c['pointerId']);}[q(0x169)](c,d){const G=q;if(this[G(0x1a8)]==null)return;this[G(0x1a8)]=null,this['_appliedDragSteps']=0x0,this[G(0x174)]();if(d!=null)try{if(this[G(0x1be)]['hasPointerCapture'](d))this[G(0x1be)]['releasePointerCapture'](d);}catch{}this[G(0x1a9)](c);}['_handleStepperPointerDown'](c,d){const H=q;if(this[H(0x1d7)])return;if(!this['_isSelectedUnitMode']()){if(!this[H(0x19e)]())return;}this[H(0x1cd)](!![]),this[H(0x1a2)]=c['pointerId'],this[H(0x158)]=d,this[H(0x154)](),this[H(0x177)](),this[H(0x1ad)](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{const I=H;this['_stepperRepeatInterval']=window[I(0x188)](()=>this[I(0x1ad)](this[I(0x158)]),0x32);},0x15e),c[H(0x1c6)]();}[q(0x1b1)](c){const J=q;if(this['_stepperPointerId']!==c[J(0x1dc)])return;this['_finishStepperInteraction'](![]);}['_finishStepperInteraction'](c){const K=q;if(this[K(0x1a2)]==null)return;this[K(0x1a2)]=null,this[K(0x158)]=0x0,this['_detachStepperWindowListeners'](),this[K(0x1cb)](),this['_finishPreviewSession'](c);}[q(0x184)](){const L=q,c=this[L(0x165)]['selectedOptions']['item'](0x0);if(!c)return;const d=c['dataset'][L(0x19a)];if(d===L(0x182)){this['_commitValue'](c[L(0x1de)]);return;}if(d===L(0x180)){this[L(0x1af)]=!![],this[L(0x18c)](),requestAnimationFrame(()=>{const M=L;this[M(0x166)]['focus'](),this['_input'][M(0x17d)]();});return;}const e=c['value'];this['_lastNumericUnit']=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this[L(0x1e7)]);if(f[L(0x19a)]===L(0x1d8)){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this[L(0x173)](e);if(g!=null){this['_commitValue'](g);return;}if(f[L(0x19a)]==='empty'){this[L(0x18c)](),this['_input']['focus']();return;}const h=Number(this['_input']['value']);if(!Number['isNaN'](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this['_input']['focus']();}['_applyTypedValue'](){const N=q,c=this[N(0x165)][N(0x192)][N(0x1e6)](0x0),d=c?.['dataset'][N(0x19a)];if(d==='fixed')return;if(d==='custom'){this['_commitValue'](this['_input']['value']);return;}const e=this[N(0x166)][N(0x1de)]?.['trim']()??'';if(!e){this[N(0x187)]('');return;}const f=Number(e);if(!Number['isNaN'](f))this['_lastNumericValue']=this['_clampNumericValue'](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.['value']??''));}[q(0x18c)](){const O=q;if(!this['_input']||!this['_select'])return;if(this['_previewStartValue']==null)this[O(0x15e)]();const c=this['_getDisplayState'](this[O(0x1bb)]??this[O(0x1e7)]);this['_input']['value']=c[O(0x1ab)],this['_input'][O(0x1c4)]['display']=c[O(0x161)]?'':'none',this[O(0x166)][O(0x1cc)]=this[O(0x1d7)]||!c[O(0x17e)],this['_select']['value']=c['selectValue'],this['_autoSizeSelect']();if(c['mode']==='unit'&&c[O(0x1c7)]!=null)this['_lastNumericUnit']=c[O(0x1c7)];if(c['mode']==='unit'&&c['inputValue']!==''){const f=Number(c[O(0x1ab)]);if(!Number['isNaN'](f))this['_lastNumericValue']=this['_clampNumericValue'](f);}const d=this[O(0x1b6)]['length']>0x0,e=this[O(0x1d7)]||(!d||c['mode']==='custom');this['_scrubberButton'][O(0x1cc)]=e,this['_increaseButton'][O(0x1cc)]=e,this[O(0x1d6)][O(0x1cc)]=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const P=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this[P(0x1af)])return this[P(0x1c1)](d[P(0x1c9)]);if(d['unit']&&this[P(0x1b6)]['length']&&!this[P(0x1b6)][P(0x163)](d['unit']))return this[P(0x1c1)](c);const f=resolveNumericStyleInputSelectedUnit(d[P(0x183)],this[P(0x1d4)],this[P(0x1b6)])??'';return{'mode':P(0x183),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][P(0x163)](f)?f:this['_select'][P(0x1de)]||customOptionValue,'selectedUnit':f};}if(d['kind']==='text'){if(!this[P(0x1af)]&&this['_fixedValues'][P(0x163)](d[P(0x1dd)]))return{'mode':P(0x182),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[P(0x1dd)]};return this[P(0x1c1)](d[P(0x1dd)]);}if(this['_preferCustomMode'])return this[P(0x1c1)]('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this['_units']['includes'](e))return{'mode':P(0x183),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}['_createCustomDisplayState'](c){const Q=q;if(!this[Q(0x171)]&&this[Q(0x1b6)]['length'])return{'mode':Q(0x183),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':Q(0x180),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x15e)](){const R=q,c=this[R(0x165)]['value'];this[R(0x165)]['replaceChildren']();if(this['_units']['length']){const d=document[R(0x1b8)](R(0x172));d[R(0x17a)]=R(0x1e0);for(const e of this['_units'])d['appendChild'](this[R(0x1da)](getNumericStyleInputUnitLabel(e),e,R(0x183)));this[R(0x165)][R(0x157)](d);}if(this['_fixedValues'][R(0x164)]){const f=document['createElement']('optgroup');f['label']=R(0x1a7);for(const g of this[R(0x159)])f['appendChild'](this['_createOption'](g,g,R(0x182)));this['_select'][R(0x157)](f);}if(this[R(0x171)]||this['_select']['options'][R(0x164)]===0x0)this[R(0x165)]['appendChild'](this[R(0x1da)](R(0x180),customOptionValue,R(0x180)));if(c!=='')this['_select'][R(0x1de)]=c;else{if(this['_select'][R(0x1d3)](R(0x1c3)))this['_select']['value']='';}}[q(0x1da)](c,d,e){const S=q,f=document['createElement'](S(0x178));return f['text']=c,f['value']=d,f['dataset'][S(0x19a)]=e,f;}['_autoSizeSelect'](){const T=q;if(!this[T(0x17f)]||!this['_select'])return;const c=this[T(0x165)]['selectedOptions']['item'](0x0);this['_measure'][T(0x1ce)]=c?.[T(0x1dd)]??'';const d=this['_measure'][T(0x1b2)];d>0x0?this['_select']['style']['width']=d+0x11+'px':requestAnimationFrame(()=>this[T(0x195)]());}['_applyReadonlyState'](){const U=q;if(!this['_input']||!this['_select'])return;this['_input']['readOnly']=this[U(0x1d7)],this['_select'][U(0x1cc)]=this['_readOnly'];}[q(0x1e5)](c,d){const V=q;if(d==null)return this[V(0x1e7)];const e=c['unit'],f=this[V(0x194)]?.({'value':c[V(0x1de)],'numberText':c[V(0x1c9)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[V(0x1c9)],d);}[q(0x173)](c){const W=q;if(c==null)return null;const d=this[W(0x194)]?.({'value':Number['NaN'],'numberText':'','rawValue':this[W(0x1e7)],'fromUnit':'','toUnit':c})?.[W(0x1c2)]();return d?d:null;}[q(0x1a1)](c){const X=q,d=parseNumericStyleInputValue(this[X(0x1e7)]);if(d['kind']===X(0x1d8)){const e=this[X(0x1e5)](d,c),f=parseNumericStyleInputValue(e);if(f['kind']===X(0x1d8))return f[X(0x1de)];return d['value'];}if(this[X(0x166)]['value']?.['trim']()){const g=Number(this[X(0x166)]['value']);if(!Number[X(0x162)](g))return g;}return this[X(0x1aa)];}[q(0x1a0)](c,d){const Y=q;this[Y(0x1aa)]=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this[Y(0x187)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}['_previewNumericValue'](c,d,e){const Z=q;this[Z(0x1aa)]=this['_clampNumericValue'](c),this[Z(0x1d4)]=d;const f=e??this[Z(0x18f)](d);this['_setValue'](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this['_lastNumericValue'],f),d),![],!![]);}[q(0x187)](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a0=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this['_value'];this[a0(0x1e7)]=f;if(e)this[a0(0x1bb)]=f;else{if(this[a0(0x1bb)]!=null){if(f===this[a0(0x1bb)]||f!==g)this['_displayValueLock']=null;}}this[a0(0x1af)]=![],this['_updateValue']();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged']['emit']({'newValue':f,'oldValue':g}));if(d)this['valueChanged'][a0(0x16b)]({'newValue':f,'oldValue':g});}}[q(0x177)](){const a1=q;this['_previewStartValue']==null&&(this[a1(0x199)]=this['_value'],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a2=q;if(this['_previewStartValue']==null)return;const d=this[a2(0x199)],e=this['_displayValueLock']??this[a2(0x1e7)],f=this[a2(0x1bd)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this[a2(0x1bb)]=null,this[a2(0x1e7)]=d,this[a2(0x18c)]()):(this[a2(0x1bb)]=e,this['_updateValue']()),this[a2(0x1b0)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x1ad)](c){const a3=q,d=this[a3(0x165)][a3(0x1de)],e=this[a3(0x18f)](d);this['_previewNumericValue'](this[a3(0x1ae)](this[a3(0x1a1)](d),c,e),d,e);}['_stopStepperRepeat'](){const a4=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this[a4(0x1cf)]),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window[a4(0x179)](this['_stepperRepeatInterval']),this['_stepperRepeatInterval']=null);}['_attachStepperWindowListeners'](){const a5=q;window['addEventListener']('pointerup',this[a5(0x191)],!![]),window[a5(0x15d)](a5(0x19b),this[a5(0x1b5)],!![]),window['addEventListener']('blur',this[a5(0x1b9)]);}[q(0x175)](){const a6=q;window['addEventListener'](a6(0x1b4),this[a6(0x18b)],!![]),window[a6(0x15d)](a6(0x1a4),this[a6(0x16e)],!![]),window['addEventListener']('pointercancel',this[a6(0x16c)],!![]),window[a6(0x15d)](a6(0x15f),this['_windowDragBlurHandler']);}[q(0x1a3)](){const a7=q;window['removeEventListener']('pointerup',this['_windowPointerUpHandler'],!![]),window[a7(0x19f)](a7(0x19b),this[a7(0x1b5)],!![]),window['removeEventListener']('blur',this['_windowBlurHandler']);}['_detachDragWindowListeners'](){const a8=q;window[a8(0x19f)](a8(0x1b4),this[a8(0x18b)],!![]),window[a8(0x19f)]('pointerup',this[a8(0x16e)],!![]),window[a8(0x19f)](a8(0x19b),this[a8(0x16c)],!![]),window[a8(0x19f)]('blur',this[a8(0x1ac)]);}['_calculateDraggedStepCount'](c){const a9=q,d=Math['abs'](c),e=Math['min'](d,0x14)/0x5,f=Math['max'](Math[a9(0x1db)](d-0x14,0x28),0x0)/0x3,g=Math[a9(0x151)](d-0x3c,0x0)/0x2,h=Math[a9(0x176)](e+f+g);return Math[a9(0x160)](c)*h;}[q(0x18f)](c){const aa=q;return resolveNumericStyleInputStep(this[aa(0x1c0)],this[aa(0x193)],c);}[q(0x1ae)](c,d,e){const ab=q,f=e??this['_step'],g=this[ab(0x16a)](c);if(!Number['isFinite'](g)||!Number[ab(0x1e2)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[ab(0x190)](i),k=Math[ab(0x155)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ab(0x19d)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ab(0x1d0)](i);l=o+d+0x1;}const m=h+l*f;return this[ab(0x16a)](this[ab(0x186)](m,f));}['_formatInteractiveNumericValue'](c,d){const ac=q,e=d??this[ac(0x193)];return formatNumericStyleInputNumber(this[ac(0x186)](c,e),this[ac(0x18d)](e));}[q(0x186)](c,d){const ad=q,e=this[ad(0x18d)](d),f=0xa**e;return Math['round'](c*f)/f;}[q(0x18d)](c){const ae=q,d=(''+(c??this[ae(0x193)]))[ae(0x1d2)]();if(d['includes']('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f[ae(0x163)]('.')?f['length']-f[ae(0x1e1)]('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0x19e)](){const af=q,c=this['_lastNumericUnit']??this[af(0x1b6)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[af(0x187)](d),this['_isSelectedUnitMode']();return this[af(0x1a0)](this[af(0x1aa)],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const ag=q;return this['_select']['selectedOptions']['item'](0x0)?.[ag(0x1ba)][ag(0x19a)]===ag(0x183);}[q(0x1d1)](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const ah=q;let d=c;if(this['_min']!=null)d=Math[ah(0x151)](this[ah(0x168)],d);if(this[ah(0x18e)]!=null)d=Math['min'](this['_max'],d);return d;}}customElements['define'](q(0x156),NumericStyleInput);