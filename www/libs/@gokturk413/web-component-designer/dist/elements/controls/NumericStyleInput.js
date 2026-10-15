const q=b;function b(c,d){c=c-0x113;const e=a();let f=e[c];return f;}(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x173))/0x1+parseInt(p(0x171))/0x2*(-parseInt(p(0x142))/0x3)+parseInt(p(0x162))/0x4+-parseInt(p(0x1aa))/0x5+parseInt(p(0x156))/0x6+parseInt(p(0x123))/0x7+parseInt(p(0x138))/0x8*(-parseInt(p(0x158))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x92bbe));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';function a(){const aj=['_dragStartNumericValue','selectValue','includes','3744629PgmrcU','_fixedValues','unitValueConverter','_finishStepperInteraction','selectedUnit','querySelector','addEventListener','offsetWidth','optgroup','_createCustomDisplayState','_increaseButton','isFinite','Units','replaceChildren','_clampNumericValue','_applyNumericValue','Values','removeEventListener','text','_windowPointerUpHandler','length','112sBVOHN','_getEffectiveStep','_windowBlurHandler','_stepperRepeatInterval','_value','_isSelectedUnitMode','_attachDragWindowListeners','_readOnly','_units','custom','138QmDjQX','selectedOptions','min','_lastNumericUnit','round','select','keydown','inputEnabled','split','_detachDragWindowListeners','setInterval','_getStepPrecision','mode','option[value=\x22\x22]','change','allowCustomValue','fixed','_applyTypedValue','_convertNumericValue','_scrubberButton','707322xlCnTv','_unitValueConverter','188451pfImPh','step','_wireEvents','none','_allowCustomValue','createElement','_measure','_createOption','numeric','indexOf','1641512WhSCGH','_max','width','readOnly','_stepperPointerId','_readEditableNumericValue','_previewStartValue','dataset','_stepperRepeatTimeout','_lastNumericValue','floor','disabled','_preferCustomMode','_step','pointerId','76zeUVGo','_stepperDirection','760920UMKAnB','emit','_windowDragPointerMoveHandler','_applyStepPreview','_handleStepperPointerDown','_normalizeOptionValues','_resolveCurrentValueForUnit','_windowDragPointerUpHandler','_roundToStepPrecision','valueChanged','_displayValueLock','_input','_finishDragInteraction','trim','_setValue','valuePreviewChanged','_startPreviewSession','_finishDragInteractionForPointerEvent','_switchToUnitModeForInteraction','_min','_detachStepperWindowListeners','focus','_getDomElement','trunc','measure','_appliedDragSteps','_commitValue','_updateValue','Enter','_windowDragBlurHandler','scrubber','_getInteractiveStepValue','_autoSizeSelect','_formatInteractiveNumericValue','increase','_calculateDraggedStepCount','_previewNumericValue','fixedValues','_decreaseButton','clearInterval','value','_renderSelectOptions','_applyReadonlyState','valuePreviewFinished','kind','_select','pointercancel','toLowerCase','isNaN','_attachStepperWindowListeners','_getDisplayState','isInPreview','_windowDragPointerCancelHandler','_unitSteps','ready','4641080QOWogc','units','releasePointerCapture','display','pointerup','preventDefault','_windowPointerCancelHandler','_applySelectedMode','numberText','options','appendChild','_previewChanged','pointerdown','_handleWindowStepperPointerEnd','item','unit'];a=function(){return aj;};return a();}const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']='';get['value'](){return this['_value'];}set['value'](c){this['_setValue'](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x182)]=new TypedEvent();[q(0x19e)]=new TypedEvent();[q(0x140)]=['px','%','pt'];get[q(0x1ab)](){const r=q;return[...this[r(0x140)]];}set[q(0x1ab)](c){const s=q;this['_units']=this[s(0x178)](c),this['_lastNumericUnit']=this[s(0x140)][0x0]??this['_lastNumericUnit'],this['_updateValue']();}['_fixedValues']=[];get['fixedValues'](){return[...this['_fixedValues']];}set[q(0x198)](c){const t=q;this[t(0x124)]=this['_normalizeOptionValues'](c),this['_updateValue']();}['_step']=0x1;get[q(0x159)](){const u=q;return this[u(0x16f)];}set[q(0x159)](c){const v=q;this[v(0x16f)]=Number[v(0x12e)](c)&&c>0x0?c:0x1;}[q(0x1a8)]={};get['unitSteps'](){return{...this['_unitSteps']};}set['unitSteps'](c){this['_unitSteps']=c??{};}[q(0x186)]=null;get['min'](){const w=q;return this[w(0x186)];}set[q(0x144)](c){const x=q;this[x(0x186)]=Number['isFinite'](c)?c:null;}[q(0x163)]=null;get['max'](){return this['_max'];}set['max'](c){this['_max']=Number['isFinite'](c)?c:null;}['_readOnly']=![];get[q(0x165)](){return this['_readOnly'];}set[q(0x165)](c){this['_readOnly']=c,this['_applyReadonlyState']();}get[q(0x1a6)](){const y=q;return this[y(0x168)]!=null;}['_allowCustomValue']=!![];get[q(0x151)](){return this['_allowCustomValue'];}set[q(0x151)](c){const z=q;this[z(0x15c)]=c,this[z(0x18e)]();}[q(0x157)];get[q(0x125)](){const A=q;return this[A(0x157)];}set['unitValueConverter'](c){this['_unitValueConverter']=c;}[q(0x17e)];['_select'];[q(0x15e)];[q(0x155)];[q(0x12d)];['_decreaseButton'];[q(0x16b)]=0x0;[q(0x145)]='px';['_dragPointerId']=null;['_dragStartY']=0x0;[q(0x120)]=0x0;[q(0x18c)]=0x0;['_previewStartValue']=null;['_previewChanged']=![];['_displayValueLock']=null;['_stepperPointerId']=null;[q(0x172)]=0x0;[q(0x16a)]=null;[q(0x13b)]=null;['_windowDragPointerMoveHandler']=c=>this['_handleWindowDragPointerMove'](c);['_windowDragPointerUpHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,![]);[q(0x1a7)]=c=>this[q(0x184)](c,!![]);['_windowDragBlurHandler']=()=>this[q(0x17f)](![]);[q(0x136)]=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x116)]=c=>this[q(0x11d)](c);[q(0x13a)]=()=>this['_finishStepperInteraction'](![]);['_preferCustomMode']=![];constructor(){const B=q;super(),this['_restoreCachedInititalValues'](),this[B(0x17e)]=this[B(0x189)]('input'),this[B(0x1a0)]=this['_getDomElement'](B(0x147)),this[B(0x15e)]=this['_getDomElement'](B(0x18b)),this['_scrubberButton']=this['_getDomElement'](B(0x191)),this['_increaseButton']=this[B(0x189)](B(0x195)),this[B(0x199)]=this['_getDomElement']('decrease');}[q(0x1a9)](){const C=q;this['_parseAttributesToProperties'](),this['_wireEvents'](),this[C(0x18e)]();}[q(0x15a)](){const D=q;this['_input'][D(0x129)](D(0x150),()=>this[D(0x153)]()),this[D(0x17e)]['addEventListener'](D(0x148),c=>{const E=D;c['key']===E(0x18f)&&(this['_applyTypedValue'](),this['_input']['blur']());}),this['_scrubberButton']['addEventListener'](D(0x11c),c=>this['_handlePointerDown'](c)),this['_select']['addEventListener'](D(0x150),()=>this[D(0x117)]()),this[D(0x12d)][D(0x129)](D(0x11c),c=>this[D(0x177)](c,0x1)),this['_decreaseButton']['addEventListener'](D(0x11c),c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const F=q;if(this['_readOnly'])return;if(!this[F(0x13d)]()){if(!this[F(0x185)]())return;}this['_dragPointerId']=c['pointerId'],this['_dragStartY']=c['clientY'],this['_dragStartNumericValue']=this[F(0x167)](this['_select'][F(0x19b)]),this['_appliedDragSteps']=0x0,this[F(0x183)](),this['_attachDragWindowListeners']();try{this[F(0x155)]['setPointerCapture'](c[F(0x170)]);}catch{}c[F(0x115)]();}['_handleWindowDragPointerMove'](c){const G=q;if(this['_dragPointerId']!==c[G(0x170)]||!this['_isSelectedUnitMode']())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c['clientY']);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this['_select']['value'],f=this[G(0x139)](e);this['_previewNumericValue'](this[G(0x192)](this[G(0x120)],d,f),e,f),c['preventDefault']();}[q(0x184)](c,d){const H=q;if(this['_dragPointerId']!==c['pointerId'])return;this['_finishDragInteraction'](d,c[H(0x170)]);}['_finishDragInteraction'](c,d){const I=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this[I(0x18c)]=0x0,this[I(0x14b)]();if(d!=null)try{if(this[I(0x155)]['hasPointerCapture'](d))this['_scrubberButton'][I(0x1ac)](d);}catch{}this['_finishPreviewSession'](c);}[q(0x177)](c,d){const J=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this[J(0x126)](!![]),this[J(0x166)]=c['pointerId'],this['_stepperDirection']=d,this[J(0x1a4)](),this[J(0x183)](),this[J(0x176)](d),this['_stepperRepeatTimeout']=window['setTimeout'](()=>{const K=J;this['_stepperRepeatInterval']=window[K(0x14c)](()=>this[K(0x176)](this[K(0x172)]),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const L=q;if(this[L(0x166)]!==c[L(0x170)])return;this['_finishStepperInteraction'](![]);}['_finishStepperInteraction'](c){const M=q;if(this['_stepperPointerId']==null)return;this[M(0x166)]=null,this['_stepperDirection']=0x0,this[M(0x187)](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}[q(0x117)](){const N=q,c=this[N(0x1a0)]['selectedOptions']['item'](0x0);if(!c)return;const d=c[N(0x169)][N(0x19f)];if(d===N(0x152)){this[N(0x18d)](c['value']);return;}if(d==='custom'){this['_preferCustomMode']=!![],this['_updateValue'](),requestAnimationFrame(()=>{const O=N;this['_input'][O(0x188)](),this['_input']['select']();});return;}const e=c['value'];this[N(0x145)]=e,this[N(0x16e)]=![];const f=parseNumericStyleInputValue(this[N(0x13c)]);if(f['kind']===N(0x160)){const i=this[N(0x154)](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f[N(0x19f)]==='empty'){this['_updateValue'](),this['_input']['focus']();return;}const h=Number(this['_input'][N(0x19b)]);if(!Number['isNaN'](h)){this[N(0x132)](h,e);return;}this['_commitValue'](''),this[N(0x17e)]['focus']();}[q(0x153)](){const P=q,c=this[P(0x1a0)]['selectedOptions']['item'](0x0),d=c?.['dataset'][P(0x19f)];if(d==='fixed')return;if(d==='custom'){this['_commitValue'](this['_input']['value']);return;}const e=this[P(0x17e)]['value']?.[P(0x180)]()??'';if(!e){this[P(0x18d)]('');return;}const f=Number(e);if(!Number['isNaN'](f))this['_lastNumericValue']=this['_clampNumericValue'](f);this[P(0x18d)](combineNumericStyleInputValue(e,c?.[P(0x19b)]??''));}['_updateValue'](){const Q=q;if(!this[Q(0x17e)]||!this[Q(0x1a0)])return;if(this[Q(0x168)]==null)this[Q(0x19c)]();const c=this[Q(0x1a5)](this[Q(0x17d)]??this['_value']);this[Q(0x17e)][Q(0x19b)]=c['inputValue'],this[Q(0x17e)]['style'][Q(0x113)]=c['inputVisible']?'':Q(0x15b),this['_input']['disabled']=this['_readOnly']||!c[Q(0x149)],this['_select'][Q(0x19b)]=c[Q(0x121)],this[Q(0x193)]();if(c[Q(0x14e)]===Q(0x11f)&&c['selectedUnit']!=null)this['_lastNumericUnit']=c[Q(0x127)];if(c['mode']===Q(0x11f)&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number[Q(0x1a3)](f))this[Q(0x16b)]=this[Q(0x131)](f);}const d=this[Q(0x140)][Q(0x137)]>0x0,e=this['_readOnly']||(!d||c[Q(0x14e)]===Q(0x141));this[Q(0x155)]['disabled']=e,this['_increaseButton'][Q(0x16d)]=e,this['_decreaseButton'][Q(0x16d)]=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const R=q,d=parseNumericStyleInputValue(c);if(d[R(0x19f)]===R(0x160)){if(this[R(0x16e)])return this[R(0x12c)](d['numberText']);if(d[R(0x11f)]&&this['_units'][R(0x137)]&&!this['_units']['includes'](d['unit']))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d[R(0x11f)],this[R(0x145)],this['_units'])??'';return{'mode':'unit','inputValue':d[R(0x118)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units']['includes'](f)?f:this['_select'][R(0x19b)]||customOptionValue,'selectedUnit':f};}if(d['kind']==='text'){if(!this['_preferCustomMode']&&this[R(0x124)]['includes'](d[R(0x135)]))return{'mode':R(0x152),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[R(0x135)]};return this[R(0x12c)](d[R(0x135)]);}if(this[R(0x16e)])return this['_createCustomDisplayState']('');const e=this[R(0x145)]??this[R(0x140)][0x0]??'';if(this['_units']['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[R(0x12c)]('');}[q(0x12c)](c){const S=q;if(!this['_allowCustomValue']&&this['_units'][S(0x137)])return{'mode':S(0x11f),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':S(0x141),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x19c)](){const T=q,c=this[T(0x1a0)][T(0x19b)];this['_select'][T(0x130)]();if(this['_units']['length']){const d=document[T(0x15d)]('optgroup');d['label']=T(0x12f);for(const e of this['_units'])d[T(0x11a)](this['_createOption'](getNumericStyleInputUnitLabel(e),e,T(0x11f)));this[T(0x1a0)][T(0x11a)](d);}if(this['_fixedValues'][T(0x137)]){const f=document[T(0x15d)](T(0x12b));f['label']=T(0x133);for(const g of this[T(0x124)])f[T(0x11a)](this['_createOption'](g,g,'fixed'));this[T(0x1a0)]['appendChild'](f);}if(this['_allowCustomValue']||this[T(0x1a0)][T(0x119)]['length']===0x0)this['_select'][T(0x11a)](this['_createOption'](T(0x141),customOptionValue,'custom'));if(c!=='')this[T(0x1a0)][T(0x19b)]=c;else{if(this[T(0x1a0)][T(0x128)](T(0x14f)))this[T(0x1a0)][T(0x19b)]='';}}[q(0x15f)](c,d,e){const U=q,f=document['createElement']('option');return f[U(0x135)]=c,f[U(0x19b)]=d,f['dataset']['kind']=e,f;}[q(0x193)](){const V=q;if(!this[V(0x15e)]||!this['_select'])return;const c=this[V(0x1a0)][V(0x143)]['item'](0x0);this['_measure']['textContent']=c?.[V(0x135)]??'';const d=this['_measure'][V(0x12a)];d>0x0?this['_select']['style'][V(0x164)]=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}[q(0x19d)](){const W=q;if(!this['_input']||!this[W(0x1a0)])return;this['_input']['readOnly']=this['_readOnly'],this[W(0x1a0)][W(0x16d)]=this[W(0x13f)];}[q(0x154)](c,d){const X=q;if(d==null)return this['_value'];const e=c[X(0x11f)],f=this['_unitValueConverter']?.({'value':c['value'],'numberText':c[X(0x118)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[X(0x118)],d);}['_resolveCurrentValueForUnit'](c){const Y=q;if(c==null)return null;const d=this[Y(0x157)]?.({'value':Number['NaN'],'numberText':'','rawValue':this[Y(0x13c)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const Z=q,d=parseNumericStyleInputValue(this[Z(0x13c)]);if(d['kind']==='numeric'){const e=this[Z(0x154)](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f['value'];return d['value'];}if(this[Z(0x17e)]['value']?.['trim']()){const g=Number(this['_input']['value']);if(!Number['isNaN'](g))return g;}return this['_lastNumericValue'];}[q(0x132)](c,d){const a0=q;this[a0(0x16b)]=this[a0(0x131)](c),this[a0(0x145)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a0(0x16b)]),d));}[q(0x197)](c,d,e){const a1=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d;const f=e??this[a1(0x139)](d);this['_setValue'](combineNumericStyleInputValue(this[a1(0x194)](this[a1(0x16b)],f),d),![],!![]);}[q(0x18d)](c){this['_setValue'](c,!![],![]);}[q(0x181)](c,d,e){const a2=q,f=c??'';if(!d&&!e&&this[a2(0x168)]!=null)return;const g=this['_value'];this['_value']=f;if(e)this['_displayValueLock']=f;else{if(this[a2(0x17d)]!=null){if(f===this[a2(0x17d)]||f!==g)this[a2(0x17d)]=null;}}this[a2(0x16e)]=![],this['_updateValue']();if(g!==f){e&&(this[a2(0x11b)]=!![],this['valuePreviewChanged']['emit']({'newValue':f,'oldValue':g}));if(d)this[a2(0x17c)]['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a3=q;this['_previewStartValue']==null&&(this['_previewStartValue']=this[a3(0x13c)],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a4=q;if(this['_previewStartValue']==null)return;const d=this[a4(0x168)],e=this[a4(0x17d)]??this[a4(0x13c)],f=this[a4(0x11b)]&&d!==e,g=c||!f;this[a4(0x168)]=null,this[a4(0x11b)]=![],g?(this[a4(0x17d)]=null,this['_value']=d,this['_updateValue']()):(this['_displayValueLock']=e,this['_updateValue']()),this[a4(0x19e)][a4(0x174)]({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x176)](c){const a5=q,d=this[a5(0x1a0)]['value'],e=this[a5(0x139)](d);this[a5(0x197)](this['_getInteractiveStepValue'](this['_readEditableNumericValue'](d),c,e),d,e);}['_stopStepperRepeat'](){const a6=q;this[a6(0x16a)]!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this[a6(0x16a)]=null),this['_stepperRepeatInterval']!=null&&(window[a6(0x19a)](this['_stepperRepeatInterval']),this[a6(0x13b)]=null);}[q(0x1a4)](){const a7=q;window[a7(0x129)]('pointerup',this['_windowPointerUpHandler'],!![]),window['addEventListener'](a7(0x1a1),this[a7(0x116)],!![]),window[a7(0x129)]('blur',this['_windowBlurHandler']);}[q(0x13e)](){const a8=q;window[a8(0x129)]('pointermove',this[a8(0x175)],!![]),window['addEventListener'](a8(0x114),this[a8(0x17a)],!![]),window[a8(0x129)](a8(0x1a1),this[a8(0x1a7)],!![]),window['addEventListener']('blur',this[a8(0x190)]);}['_detachStepperWindowListeners'](){const a9=q;window[a9(0x134)](a9(0x114),this[a9(0x136)],!![]),window['removeEventListener'](a9(0x1a1),this['_windowPointerCancelHandler'],!![]),window[a9(0x134)]('blur',this[a9(0x13a)]);}['_detachDragWindowListeners'](){const aa=q;window[aa(0x134)]('pointermove',this['_windowDragPointerMoveHandler'],!![]),window[aa(0x134)](aa(0x114),this['_windowDragPointerUpHandler'],!![]),window['removeEventListener'](aa(0x1a1),this['_windowDragPointerCancelHandler'],!![]),window['removeEventListener']('blur',this[aa(0x190)]);}[q(0x196)](c){const ab=q,d=Math['abs'](c),e=Math[ab(0x144)](d,0x14)/0x5,f=Math['max'](Math[ab(0x144)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math[ab(0x18a)](e+f+g);return Math['sign'](c)*h;}[q(0x139)](c){return resolveNumericStyleInputStep(this['_unitSteps'],this['_step'],c);}['_getInteractiveStepValue'](c,d,e){const ac=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[ac(0x146)](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ac(0x16c)](i);l=o+d+0x1;}const m=h+l*f;return this[ac(0x131)](this[ac(0x17b)](m,f));}['_formatInteractiveNumericValue'](c,d){const ad=q,e=d??this[ad(0x16f)];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}[q(0x17b)](c,d){const ae=q,e=this[ae(0x14d)](d),f=0xa**e;return Math['round'](c*f)/f;}[q(0x14d)](c){const af=q,d=(''+(c??this[af(0x16f)]))[af(0x1a2)]();if(d[af(0x122)]('e-')){const [f,g]=d[af(0x14a)]('e-'),h=Number(g),i=f[af(0x122)]('.')?f['length']-f[af(0x161)]('.')-0x1:0x0;return h+i;}const e=d[af(0x161)]('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0x185)](){const ag=q,c=this['_lastNumericUnit']??this[ag(0x140)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[ag(0x179)](c);if(d!=null)return this[ag(0x18d)](d),this[ag(0x13d)]();return this[ag(0x132)](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}[q(0x13d)](){const ah=q;return this['_select']['selectedOptions'][ah(0x11e)](0x0)?.['dataset'][ah(0x19f)]===ah(0x11f);}[q(0x178)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x131)](c){const ai=q;let d=c;if(this[ai(0x186)]!=null)d=Math['max'](this['_min'],d);if(this['_max']!=null)d=Math[ai(0x144)](this['_max'],d);return d;}}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);