const q=b;function b(c,d){c=c-0xfe;const e=a();let f=e[c];return f;}(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x196))/0x1*(parseInt(p(0x14e))/0x2)+parseInt(p(0x169))/0x3+-parseInt(p(0x126))/0x4+-parseInt(p(0x158))/0x5*(-parseInt(p(0x191))/0x6)+-parseInt(p(0x171))/0x7*(-parseInt(p(0x186))/0x8)+-parseInt(p(0x167))/0x9+-parseInt(p(0x188))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3806e));function a(){const ak=['_stepperDirection','368768pEcQxe','_scrubberButton','addEventListener','_getDisplayState','node-projects-numeric-style-input','_windowPointerUpHandler','_convertNumericValue','_resolveCurrentValueForUnit','_dragStartY','text','_dragStartNumericValue','_readOnly','_units','_allowCustomValue','_getInteractiveStepValue','_restoreCachedInititalValues','_autoSizeSelect','_finishDragInteractionForPointerEvent','_handlePointerDown','_lastNumericUnit','abs','inputVisible','ceil','inputValue','_stepperRepeatInterval','numeric','_finishDragInteraction','isFinite','indexOf','display','ready','_appliedDragSteps','_step','_stepperPointerId','_preferCustomMode','style','_setValue','disabled','_wireEvents','setTimeout','137974TSpTJX','_windowDragBlurHandler','fixed','change','pointerId','includes','_renderSelectOptions','dataset','options','preventDefault','1050xRSJDw','min','_windowDragPointerCancelHandler','allowCustomValue','_commitValue','_readEditableNumericValue','_windowBlurHandler','_decreaseButton','_getEffectiveStep','_finishStepperInteraction','_stopStepperRepeat','label','Enter','_dragPointerId','_fixedValues','2270610zqlBwi','clientY','985071VeYXqs','_calculateDraggedStepCount','_createOption','unitSteps','_getDomElement','increase','_switchToUnitModeForInteraction','_finishPreviewSession','1281OIilTH','toLowerCase','_formatInteractiveNumericValue','_handleWindowDragPointerMove','_windowDragPointerMoveHandler','_lastNumericValue','fixedValues','_previewNumericValue','selectedOptions','removeEventListener','_select','valuePreviewChanged','_createCustomDisplayState','_max','pointercancel','_previewChanged','_displayValueLock','numberText','_windowPointerCancelHandler','_unitValueConverter','_applyStepPreview','1336pdUCYy','_value','1676730NwriiX','pointerdown','_roundToStepPrecision','clearTimeout','valueChanged','scrubber','appendChild','template','option[value=\x22\x22]','12906OEwnRd','_clampNumericValue','round','_windowDragPointerUpHandler','unitValueConverter','1FelNLI','emit','createElement','value','_applySelectedMode','custom','pointermove','hasPointerCapture','selectValue','none','replaceChildren','offsetWidth','_parseAttributesToProperties','_measure','isNaN','mode','_isSelectedUnitMode','blur','item','_applyNumericValue','select','_handleStepperPointerDown','trim','length','_normalizeOptionValues','_applyTypedValue','max','isInPreview','_updateValue','unit','_previewStartValue','kind','units','Values','_attachStepperWindowListeners','pointerup','_unitSteps','_increaseButton','_input','_min'];a=function(){return ak;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x149)]=css`
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
  `;static [q(0x18f)]=html`
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
  `;['_value']='';get['value'](){const r=q;return this[r(0x187)];}set[q(0x100)](c){const s=q;this[s(0x14a)](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x17c)]=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get['units'](){const t=q;return[...this[t(0x132)]];}set[q(0x11d)](c){const u=q;this['_units']=this['_normalizeOptionValues'](c),this[u(0x139)]=this['_units'][0x0]??this[u(0x139)],this[u(0x119)]();}[q(0x166)]=[];get[q(0x177)](){return[...this['_fixedValues']];}set[q(0x177)](c){const v=q;this[v(0x166)]=this['_normalizeOptionValues'](c),this['_updateValue']();}[q(0x146)]=0x1;get['step'](){const w=q;return this[w(0x146)];}set['step'](c){const x=q;this[x(0x146)]=Number[x(0x141)](c)&&c>0x0?c:0x1;}[q(0x121)]={};get['unitSteps'](){return{...this['_unitSteps']};}set[q(0x16c)](c){const y=q;this[y(0x121)]=c??{};}['_min']=null;get[q(0x159)](){return this['_min'];}set['min'](c){this['_min']=Number['isFinite'](c)?c:null;}[q(0x17e)]=null;get['max'](){const z=q;return this[z(0x17e)];}set[q(0x117)](c){const A=q;this['_max']=Number[A(0x141)](c)?c:null;}['_readOnly']=![];get['readOnly'](){return this['_readOnly'];}set['readOnly'](c){this['_readOnly']=c,this['_applyReadonlyState']();}get[q(0x118)](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get[q(0x15b)](){const B=q;return this[B(0x133)];}set['allowCustomValue'](c){this['_allowCustomValue']=c,this['_updateValue']();}['_unitValueConverter'];get[q(0x195)](){return this['_unitValueConverter'];}set[q(0x195)](c){this['_unitValueConverter']=c;}[q(0x123)];['_select'];['_measure'];[q(0x127)];[q(0x122)];[q(0x15f)];['_lastNumericValue']=0x0;[q(0x139)]='px';['_dragPointerId']=null;['_dragStartY']=0x0;['_dragStartNumericValue']=0x0;['_appliedDragSteps']=0x0;[q(0x11b)]=null;[q(0x180)]=![];['_displayValueLock']=null;[q(0x147)]=null;['_stepperDirection']=0x0;['_stepperRepeatTimeout']=null;[q(0x13e)]=null;[q(0x175)]=c=>this[q(0x174)](c);['_windowDragPointerUpHandler']=c=>this[q(0x137)](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);[q(0x14f)]=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x183)]=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x15e)]=()=>this[q(0x161)](![]);[q(0x148)]=![];constructor(){const C=q;super(),this[C(0x135)](),this['_input']=this['_getDomElement']('input'),this[C(0x17b)]=this[C(0x16d)](C(0x111)),this[C(0x10a)]=this[C(0x16d)]('measure'),this[C(0x127)]=this['_getDomElement'](C(0x18d)),this[C(0x122)]=this['_getDomElement'](C(0x16e)),this[C(0x15f)]=this[C(0x16d)]('decrease');}[q(0x144)](){const D=q;this[D(0x109)](),this[D(0x14c)](),this['_updateValue']();}[q(0x14c)](){const E=q;this['_input'][E(0x128)](E(0x151),()=>this[E(0x116)]()),this[E(0x123)][E(0x128)]('keydown',c=>{const F=E;c['key']===F(0x164)&&(this[F(0x116)](),this[F(0x123)]['blur']());}),this[E(0x127)][E(0x128)](E(0x189),c=>this[E(0x138)](c)),this['_select']['addEventListener']('change',()=>this[E(0x101)]()),this['_increaseButton']['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,0x1)),this[E(0x15f)]['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const G=q;if(this[G(0x131)])return;if(!this[G(0x10d)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[G(0x165)]=c['pointerId'],this[G(0x12e)]=c[G(0x168)],this[G(0x130)]=this['_readEditableNumericValue'](this[G(0x17b)]['value']),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this[G(0x127)]['setPointerCapture'](c[G(0x152)]);}catch{}c[G(0x157)]();}[q(0x174)](c){const H=q;if(this['_dragPointerId']!==c['pointerId']||!this[H(0x10d)]())return;const d=this[H(0x16a)](this['_dragStartY']-c['clientY']);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this[H(0x17b)][H(0x100)],f=this[H(0x160)](e);this['_previewNumericValue'](this[H(0x134)](this[H(0x130)],d,f),e,f),c[H(0x157)]();}[q(0x137)](c,d){const I=q;if(this[I(0x165)]!==c[I(0x152)])return;this[I(0x140)](d,c[I(0x152)]);}['_finishDragInteraction'](c,d){const J=q;if(this[J(0x165)]==null)return;this[J(0x165)]=null,this[J(0x145)]=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton'][J(0x104)](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this['_finishPreviewSession'](c);}[q(0x112)](c,d){const K=q;if(this[K(0x131)])return;if(!this[K(0x10d)]()){if(!this[K(0x16f)]())return;}this['_finishStepperInteraction'](!![]),this[K(0x147)]=c[K(0x152)],this[K(0x125)]=d,this[K(0x11f)](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this['_stepperRepeatTimeout']=window[K(0x14d)](()=>{const L=K;this[L(0x13e)]=window['setInterval'](()=>this['_applyStepPreview'](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const M=q;if(this[M(0x147)]!==c[M(0x152)])return;this['_finishStepperInteraction'](![]);}[q(0x161)](c){const N=q;if(this[N(0x147)]==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this['_detachStepperWindowListeners'](),this[N(0x162)](),this[N(0x170)](c);}[q(0x101)](){const O=q,c=this['_select'][O(0x179)][O(0x10f)](0x0);if(!c)return;const d=c[O(0x155)][O(0x11c)];if(d===O(0x150)){this[O(0x15c)](c[O(0x100)]);return;}if(d==='custom'){this['_preferCustomMode']=!![],this['_updateValue'](),requestAnimationFrame(()=>{const P=O;this['_input']['focus'](),this[P(0x123)][P(0x111)]();});return;}const e=c['value'];this['_lastNumericUnit']=e,this[O(0x148)]=![];const f=parseNumericStyleInputValue(this['_value']);if(f['kind']===O(0x13f)){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this[O(0x12d)](e);if(g!=null){this['_commitValue'](g);return;}if(f[O(0x11c)]==='empty'){this[O(0x119)](),this[O(0x123)]['focus']();return;}const h=Number(this['_input'][O(0x100)]);if(!Number[O(0x10b)](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this[O(0x123)]['focus']();}['_applyTypedValue'](){const Q=q,c=this[Q(0x17b)]['selectedOptions'][Q(0x10f)](0x0),d=c?.['dataset']['kind'];if(d==='fixed')return;if(d===Q(0x102)){this[Q(0x15c)](this['_input']['value']);return;}const e=this[Q(0x123)]['value']?.[Q(0x113)]()??'';if(!e){this[Q(0x15c)]('');return;}const f=Number(e);if(!Number[Q(0x10b)](f))this['_lastNumericValue']=this[Q(0x192)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.[Q(0x100)]??''));}[q(0x119)](){const R=q;if(!this[R(0x123)]||!this[R(0x17b)])return;if(this[R(0x11b)]==null)this[R(0x154)]();const c=this[R(0x129)](this[R(0x181)]??this[R(0x187)]);this[R(0x123)][R(0x100)]=c[R(0x13d)],this['_input']['style'][R(0x143)]=c[R(0x13b)]?'':R(0x106),this[R(0x123)][R(0x14b)]=this[R(0x131)]||!c['inputEnabled'],this[R(0x17b)][R(0x100)]=c[R(0x105)],this['_autoSizeSelect']();if(c['mode']==='unit'&&c['selectedUnit']!=null)this[R(0x139)]=c['selectedUnit'];if(c[R(0x10c)]==='unit'&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number[R(0x10b)](f))this['_lastNumericValue']=this[R(0x192)](f);}const d=this['_units'][R(0x114)]>0x0,e=this['_readOnly']||(!d||c[R(0x10c)]===R(0x102));this[R(0x127)][R(0x14b)]=e,this['_increaseButton'][R(0x14b)]=e,this['_decreaseButton'][R(0x14b)]=e,this['_applyReadonlyState']();}[q(0x129)](c){const S=q,d=parseNumericStyleInputValue(c);if(d['kind']===S(0x13f)){if(this[S(0x148)])return this[S(0x17d)](d[S(0x182)]);if(d[S(0x11a)]&&this[S(0x132)][S(0x114)]&&!this[S(0x132)][S(0x153)](d[S(0x11a)]))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this[S(0x139)],this['_units'])??'';return{'mode':'unit','inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[S(0x132)]['includes'](f)?f:this[S(0x17b)][S(0x100)]||customOptionValue,'selectedUnit':f};}if(d[S(0x11c)]===S(0x12f)){if(!this['_preferCustomMode']&&this[S(0x166)]['includes'](d['text']))return{'mode':S(0x150),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[S(0x12f)]};return this['_createCustomDisplayState'](d[S(0x12f)]);}if(this[S(0x148)])return this[S(0x17d)]('');const e=this[S(0x139)]??this['_units'][0x0]??'';if(this[S(0x132)]['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[S(0x17d)]('');}[q(0x17d)](c){const T=q;if(!this[T(0x133)]&&this['_units']['length'])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const U=q,c=this['_select'][U(0x100)];this['_select'][U(0x107)]();if(this[U(0x132)][U(0x114)]){const d=document[U(0xff)]('optgroup');d['label']='Units';for(const e of this['_units'])d[U(0x18e)](this[U(0x16b)](getNumericStyleInputUnitLabel(e),e,U(0x11a)));this[U(0x17b)]['appendChild'](d);}if(this['_fixedValues']['length']){const f=document[U(0xff)]('optgroup');f[U(0x163)]=U(0x11e);for(const g of this['_fixedValues'])f['appendChild'](this[U(0x16b)](g,g,U(0x150)));this[U(0x17b)]['appendChild'](f);}if(this[U(0x133)]||this[U(0x17b)][U(0x156)]['length']===0x0)this[U(0x17b)][U(0x18e)](this['_createOption']('custom',customOptionValue,U(0x102)));if(c!=='')this[U(0x17b)][U(0x100)]=c;else{if(this['_select']['querySelector'](U(0x190)))this['_select'][U(0x100)]='';}}[q(0x16b)](c,d,e){const V=q,f=document[V(0xff)]('option');return f['text']=c,f[V(0x100)]=d,f['dataset']['kind']=e,f;}[q(0x136)](){const W=q;if(!this['_measure']||!this['_select'])return;const c=this[W(0x17b)]['selectedOptions'][W(0x10f)](0x0);this[W(0x10a)]['textContent']=c?.['text']??'';const d=this[W(0x10a)][W(0x108)];d>0x0?this['_select'][W(0x149)]['width']=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const X=q;if(!this[X(0x123)]||!this[X(0x17b)])return;this['_input']['readOnly']=this[X(0x131)],this['_select'][X(0x14b)]=this['_readOnly'];}[q(0x12c)](c,d){const Y=q;if(d==null)return this['_value'];const e=c[Y(0x11a)],f=this['_unitValueConverter']?.({'value':c[Y(0x100)],'numberText':c['numberText'],'rawValue':this[Y(0x187)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[Y(0x182)],d);}['_resolveCurrentValueForUnit'](c){const Z=q;if(c==null)return null;const d=this[Z(0x184)]?.({'value':Number['NaN'],'numberText':'','rawValue':this[Z(0x187)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}[q(0x15d)](c){const a0=q,d=parseNumericStyleInputValue(this[a0(0x187)]);if(d[a0(0x11c)]===a0(0x13f)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f['value'];return d[a0(0x100)];}if(this['_input']['value']?.['trim']()){const g=Number(this[a0(0x123)][a0(0x100)]);if(!Number['isNaN'](g))return g;}return this[a0(0x176)];}['_applyNumericValue'](c,d){const a1=q;this['_lastNumericValue']=this[a1(0x192)](c),this[a1(0x139)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0x178)](c,d,e){const a2=q;this[a2(0x176)]=this[a2(0x192)](c),this['_lastNumericUnit']=d;const f=e??this[a2(0x160)](d);this[a2(0x14a)](combineNumericStyleInputValue(this[a2(0x173)](this[a2(0x176)],f),d),![],!![]);}[q(0x15c)](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a3=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this[a3(0x187)];this['_value']=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this['_displayValueLock']||f!==g)this[a3(0x181)]=null;}}this[a3(0x148)]=![],this[a3(0x119)]();if(g!==f){e&&(this['_previewChanged']=!![],this[a3(0x17c)][a3(0xfe)]({'newValue':f,'oldValue':g}));if(d)this[a3(0x18c)]['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a4=q;this['_previewStartValue']==null&&(this[a4(0x11b)]=this[a4(0x187)],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a5=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this['_displayValueLock']??this[a5(0x187)],f=this['_previewChanged']&&d!==e,g=c||!f;this[a5(0x11b)]=null,this['_previewChanged']=![],g?(this['_displayValueLock']=null,this['_value']=d,this[a5(0x119)]()):(this['_displayValueLock']=e,this[a5(0x119)]()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x185)](c){const a6=q,d=this['_select'][a6(0x100)],e=this[a6(0x160)](d);this['_previewNumericValue'](this[a6(0x134)](this['_readEditableNumericValue'](d),c,e),d,e);}['_stopStepperRepeat'](){const a7=q;this['_stepperRepeatTimeout']!=null&&(window[a7(0x18b)](this['_stepperRepeatTimeout']),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this[a7(0x13e)]),this['_stepperRepeatInterval']=null);}[q(0x11f)](){const a8=q;window[a8(0x128)](a8(0x120),this[a8(0x12b)],!![]),window['addEventListener'](a8(0x17f),this[a8(0x183)],!![]),window[a8(0x128)]('blur',this['_windowBlurHandler']);}['_attachDragWindowListeners'](){const a9=q;window[a9(0x128)]('pointermove',this[a9(0x175)],!![]),window[a9(0x128)]('pointerup',this[a9(0x194)],!![]),window[a9(0x128)](a9(0x17f),this[a9(0x15a)],!![]),window[a9(0x128)]('blur',this['_windowDragBlurHandler']);}['_detachStepperWindowListeners'](){const aa=q;window[aa(0x17a)]('pointerup',this['_windowPointerUpHandler'],!![]),window['removeEventListener'](aa(0x17f),this['_windowPointerCancelHandler'],!![]),window['removeEventListener']('blur',this['_windowBlurHandler']);}['_detachDragWindowListeners'](){const ab=q;window[ab(0x17a)](ab(0x103),this[ab(0x175)],!![]),window['removeEventListener']('pointerup',this[ab(0x194)],!![]),window['removeEventListener']('pointercancel',this[ab(0x15a)],!![]),window[ab(0x17a)](ab(0x10e),this['_windowDragBlurHandler']);}[q(0x16a)](c){const ac=q,d=Math[ac(0x13a)](c),e=Math[ac(0x159)](d,0x14)/0x5,f=Math[ac(0x117)](Math[ac(0x159)](d-0x14,0x28),0x0)/0x3,g=Math[ac(0x117)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math['sign'](c)*h;}[q(0x160)](c){const ad=q;return resolveNumericStyleInputStep(this[ad(0x121)],this['_step'],c);}['_getInteractiveStepValue'](c,d,e){const ae=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number[ae(0x141)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[ae(0x193)](i),k=Math[ae(0x13a)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ae(0x13c)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this['_roundToStepPrecision'](m,f));}['_formatInteractiveNumericValue'](c,d){const af=q,e=d??this[af(0x146)];return formatNumericStyleInputNumber(this[af(0x18a)](c,e),this['_getStepPrecision'](e));}['_roundToStepPrecision'](c,d){const e=this['_getStepPrecision'](d),f=0xa**e;return Math['round'](c*f)/f;}['_getStepPrecision'](c){const ag=q,d=(''+(c??this[ag(0x146)]))[ag(0x172)]();if(d[ag(0x153)]('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f['includes']('.')?f['length']-f[ag(0x142)]('.')-0x1:0x0;return h+i;}const e=d[ag(0x142)]('.');return e>=0x0?d['length']-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const ah=q,c=this['_lastNumericUnit']??this[ah(0x132)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this['_commitValue'](d),this[ah(0x10d)]();return this[ah(0x110)](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}[q(0x10d)](){const ai=q;return this[ai(0x17b)]['selectedOptions']['item'](0x0)?.[ai(0x155)][ai(0x11c)]===ai(0x11a);}[q(0x115)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x192)](c){const aj=q;let d=c;if(this[aj(0x124)]!=null)d=Math['max'](this[aj(0x124)],d);if(this[aj(0x17e)]!=null)d=Math[aj(0x159)](this[aj(0x17e)],d);return d;}}customElements['define'](q(0x12a),NumericStyleInput);