const q=b;function a(){const ah=['display','setInterval','sign','_attachDragWindowListeners','_dragStartNumericValue','option','createElement','selectedUnit','unitSteps','_resolveCurrentValueForUnit','pointermove','_createOption','addEventListener','_step','_displayValueLock','_fixedValues','4934RbKLwK','_previewNumericValue','_select','_unitSteps','_min','_input','selectValue','Values','mode','_stepperRepeatInterval','selectedOptions','_renderSelectOptions','_allowCustomValue','_wireEvents','width','_readOnly','options','_setValue','isFinite','includes','_stepperRepeatTimeout','removeEventListener','2831370txpFmN','_isSelectedUnitMode','pointercancel','disabled','_lastNumericUnit','step','_attachStepperWindowListeners','_restoreCachedInititalValues','unitValueConverter','_units','_measure','_startPreviewSession','trim','optgroup','_unitValueConverter','valuePreviewFinished','_previewChanged','max','style','339YhyBjr','_max','_applyStepPreview','floor','7QbgSfq','_convertNumericValue','_switchToUnitModeForInteraction','_appliedDragSteps','_windowPointerCancelHandler','_lastNumericValue','offsetWidth','custom','define','kind','ready','select','_applyReadonlyState','allowCustomValue','_decreaseButton','_handleStepperPointerDown','split','inputValue','unit','_calculateDraggedStepCount','18028872hQCiGz','valuePreviewChanged','pointerId','length','_stepperDirection','_createCustomDisplayState','_scrubberButton','numeric','valueChanged','_dragPointerId','_increaseButton','change','pointerdown','blur','_windowDragPointerMoveHandler','template','_formatInteractiveNumericValue','_finishPreviewSession','9693018xdPPwE','Enter','min','fixed','_autoSizeSelect','keydown','emit','_getStepPrecision','numberText','text','_dragStartY','_stopStepperRepeat','2269936PlbjyG','readOnly','_updateValue','_applyNumericValue','_handleWindowStepperPointerEnd','4720464FlizCz','10235376mXlWYd','units','_finishDragInteraction','_getInteractiveStepValue','inputEnabled','increase','dataset','_roundToStepPrecision','_clampNumericValue','_previewStartValue','_applySelectedMode','_stepperPointerId','querySelector','_finishDragInteractionForPointerEvent','item','_detachDragWindowListeners','_preferCustomMode','_commitValue','_windowDragPointerUpHandler','value','_finishStepperInteraction','pointerup','_getEffectiveStep','indexOf','NaN','_getDisplayState','_windowBlurHandler','_value','label','clientY','_getDomElement'];a=function(){return ah;};return a();}(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x167))/0x1*(-parseInt(p(0x13e))/0x2)+-parseInt(p(0x1a2))/0x3+parseInt(p(0x19d))/0x4+-parseInt(p(0x154))/0x5+-parseInt(p(0x191))/0x6*(parseInt(p(0x16b))/0x7)+parseInt(p(0x1a3))/0x8+parseInt(p(0x17f))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe355a));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';function b(c,d){c=c-0x122;const e=a();let f=e[c];return f;}export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x166)]=css`
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
  `;static [q(0x18e)]=html`
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
  `;['_value']='';get['value'](){const r=q;return this[r(0x12a)];}set[q(0x122)](c){this['_setValue'](c,![],![]);}[q(0x187)]=new TypedEvent();[q(0x180)]=new TypedEvent();[q(0x163)]=new TypedEvent();['_units']=['px','%','pt'];get['units'](){return[...this['_units']];}set[q(0x1a4)](c){const s=q;this['_units']=this['_normalizeOptionValues'](c),this[s(0x158)]=this['_units'][0x0]??this['_lastNumericUnit'],this[s(0x19f)]();}[q(0x13d)]=[];get['fixedValues'](){return[...this['_fixedValues']];}set['fixedValues'](c){this['_fixedValues']=this['_normalizeOptionValues'](c),this['_updateValue']();}[q(0x13b)]=0x1;get[q(0x159)](){return this['_step'];}set[q(0x159)](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}['_unitSteps']={};get['unitSteps'](){const t=q;return{...this[t(0x141)]};}set[q(0x136)](c){const u=q;this[u(0x141)]=c??{};}['_min']=null;get[q(0x193)](){return this['_min'];}set[q(0x193)](c){const v=q;this[v(0x142)]=Number['isFinite'](c)?c:null;}[q(0x168)]=null;get[q(0x165)](){return this['_max'];}set['max'](c){const w=q;this[w(0x168)]=Number['isFinite'](c)?c:null;}['_readOnly']=![];get[q(0x19e)](){return this['_readOnly'];}set['readOnly'](c){const x=q;this[x(0x14d)]=c,this[x(0x177)]();}get['isInPreview'](){const y=q;return this[y(0x1ac)]!=null;}[q(0x14a)]=!![];get[q(0x178)](){const z=q;return this[z(0x14a)];}set['allowCustomValue'](c){const A=q;this['_allowCustomValue']=c,this[A(0x19f)]();}['_unitValueConverter'];get[q(0x15c)](){const B=q;return this[B(0x162)];}set[q(0x15c)](c){this['_unitValueConverter']=c;}[q(0x143)];['_select'];['_measure'];[q(0x185)];[q(0x189)];['_decreaseButton'];['_lastNumericValue']=0x0;[q(0x158)]='px';['_dragPointerId']=null;[q(0x19b)]=0x0;[q(0x132)]=0x0;['_appliedDragSteps']=0x0;['_previewStartValue']=null;['_previewChanged']=![];['_displayValueLock']=null;['_stepperPointerId']=null;['_stepperDirection']=0x0;[q(0x152)]=null;[q(0x147)]=null;[q(0x18d)]=c=>this['_handleWindowDragPointerMove'](c);['_windowDragPointerUpHandler']=c=>this[q(0x1b0)](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);['_windowDragBlurHandler']=()=>this[q(0x1a5)](![]);['_windowPointerUpHandler']=c=>this[q(0x1a1)](c);[q(0x16f)]=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x129)]=()=>this['_finishStepperInteraction'](![]);[q(0x1b3)]=![];constructor(){const C=q;super(),this[C(0x15b)](),this['_input']=this[C(0x12d)]('input'),this[C(0x140)]=this['_getDomElement'](C(0x176)),this['_measure']=this[C(0x12d)]('measure'),this[C(0x185)]=this['_getDomElement']('scrubber'),this['_increaseButton']=this[C(0x12d)](C(0x1a8)),this['_decreaseButton']=this['_getDomElement']('decrease');}[q(0x175)](){const D=q;this['_parseAttributesToProperties'](),this[D(0x14b)](),this['_updateValue']();}['_wireEvents'](){const E=q;this[E(0x143)][E(0x13a)](E(0x18a),()=>this['_applyTypedValue']()),this[E(0x143)]['addEventListener'](E(0x196),c=>{const F=E;c['key']===F(0x192)&&(this['_applyTypedValue'](),this[F(0x143)][F(0x18c)]());}),this['_scrubberButton']['addEventListener']('pointerdown',c=>this['_handlePointerDown'](c)),this['_select']['addEventListener'](E(0x18a),()=>this[E(0x1ad)]()),this['_increaseButton']['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,0x1)),this[E(0x179)]['addEventListener'](E(0x18b),c=>this[E(0x17a)](c,-0x1));}['_handlePointerDown'](c){const G=q;if(this[G(0x14d)])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this[G(0x188)]=c['pointerId'],this[G(0x19b)]=c['clientY'],this[G(0x132)]=this['_readEditableNumericValue'](this['_select']['value']),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this['_scrubberButton']['setPointerCapture'](c['pointerId']);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const H=q;if(this['_dragPointerId']!==c[H(0x181)]||!this['_isSelectedUnitMode']())return;const d=this['_calculateDraggedStepCount'](this[H(0x19b)]-c[H(0x12c)]);if(d===this[H(0x16e)])return;this['_appliedDragSteps']=d;const e=this['_select'][H(0x122)],f=this[H(0x125)](e);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_dragStartNumericValue'],d,f),e,f),c['preventDefault']();}['_finishDragInteractionForPointerEvent'](c,d){const I=q;if(this['_dragPointerId']!==c['pointerId'])return;this[I(0x1a5)](d,c['pointerId']);}[q(0x1a5)](c,d){const J=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this[J(0x16e)]=0x0,this[J(0x1b2)]();if(d!=null)try{if(this[J(0x185)]['hasPointerCapture'](d))this[J(0x185)]['releasePointerCapture'](d);}catch{}this[J(0x190)](c);}['_handleStepperPointerDown'](c,d){const K=q;if(this[K(0x14d)])return;if(!this[K(0x155)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[K(0x123)](!![]),this[K(0x1ae)]=c['pointerId'],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this[K(0x15f)](),this['_applyStepPreview'](d),this[K(0x152)]=window['setTimeout'](()=>{const L=K;this[L(0x147)]=window[L(0x12f)](()=>this[L(0x169)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){if(this['_stepperPointerId']!==c['pointerId'])return;this['_finishStepperInteraction'](![]);}[q(0x123)](c){const M=q;if(this[M(0x1ae)]==null)return;this[M(0x1ae)]=null,this[M(0x183)]=0x0,this['_detachStepperWindowListeners'](),this[M(0x19c)](),this['_finishPreviewSession'](c);}[q(0x1ad)](){const N=q,c=this['_select']['selectedOptions'][N(0x1b1)](0x0);if(!c)return;const d=c['dataset'][N(0x174)];if(d==='fixed'){this[N(0x1b4)](c[N(0x122)]);return;}if(d==='custom'){this[N(0x1b3)]=!![],this['_updateValue'](),requestAnimationFrame(()=>{const O=N;this[O(0x143)]['focus'](),this[O(0x143)][O(0x176)]();});return;}const e=c[N(0x122)];this[N(0x158)]=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this['_value']);if(f[N(0x174)]===N(0x186)){const i=this[N(0x16c)](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f['kind']==='empty'){this[N(0x19f)](),this['_input']['focus']();return;}const h=Number(this['_input']['value']);if(!Number['isNaN'](h)){this[N(0x1a0)](h,e);return;}this['_commitValue'](''),this['_input']['focus']();}['_applyTypedValue'](){const P=q,c=this[P(0x140)]['selectedOptions']['item'](0x0),d=c?.['dataset']['kind'];if(d===P(0x194))return;if(d==='custom'){this[P(0x1b4)](this[P(0x143)]['value']);return;}const e=this[P(0x143)]['value']?.[P(0x160)]()??'';if(!e){this[P(0x1b4)]('');return;}const f=Number(e);if(!Number['isNaN'](f))this['_lastNumericValue']=this['_clampNumericValue'](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.['value']??''));}[q(0x19f)](){const Q=q;if(!this['_input']||!this[Q(0x140)])return;if(this[Q(0x1ac)]==null)this[Q(0x149)]();const c=this['_getDisplayState'](this[Q(0x13c)]??this['_value']);this['_input'][Q(0x122)]=c['inputValue'],this['_input']['style'][Q(0x12e)]=c['inputVisible']?'':'none',this['_input']['disabled']=this[Q(0x14d)]||!c[Q(0x1a7)],this['_select']['value']=c[Q(0x144)],this[Q(0x195)]();if(c['mode']===Q(0x17d)&&c['selectedUnit']!=null)this['_lastNumericUnit']=c[Q(0x135)];if(c[Q(0x146)]===Q(0x17d)&&c['inputValue']!==''){const f=Number(c[Q(0x17c)]);if(!Number['isNaN'](f))this[Q(0x170)]=this['_clampNumericValue'](f);}const d=this[Q(0x15d)]['length']>0x0,e=this[Q(0x14d)]||(!d||c[Q(0x146)]==='custom');this[Q(0x185)][Q(0x157)]=e,this[Q(0x189)][Q(0x157)]=e,this[Q(0x179)]['disabled']=e,this[Q(0x177)]();}[q(0x128)](c){const R=q,d=parseNumericStyleInputValue(c);if(d[R(0x174)]==='numeric'){if(this['_preferCustomMode'])return this[R(0x184)](d['numberText']);if(d[R(0x17d)]&&this['_units'][R(0x182)]&&!this['_units']['includes'](d['unit']))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this['_lastNumericUnit'],this['_units'])??'';return{'mode':'unit','inputValue':d[R(0x199)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[R(0x15d)]['includes'](f)?f:this['_select']['value']||customOptionValue,'selectedUnit':f};}if(d['kind']===R(0x19a)){if(!this['_preferCustomMode']&&this['_fixedValues']['includes'](d[R(0x19a)]))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this[R(0x184)](d[R(0x19a)]);}if(this['_preferCustomMode'])return this['_createCustomDisplayState']('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this['_units'][R(0x151)](e))return{'mode':R(0x17d),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}['_createCustomDisplayState'](c){const S=q;if(!this[S(0x14a)]&&this[S(0x15d)]['length'])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[S(0x15d)][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':S(0x172),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const T=q,c=this[T(0x140)]['value'];this['_select']['replaceChildren']();if(this['_units']['length']){const d=document[T(0x134)](T(0x161));d[T(0x12b)]='Units';for(const e of this['_units'])d['appendChild'](this[T(0x139)](getNumericStyleInputUnitLabel(e),e,T(0x17d)));this['_select']['appendChild'](d);}if(this['_fixedValues'][T(0x182)]){const f=document[T(0x134)](T(0x161));f[T(0x12b)]=T(0x145);for(const g of this['_fixedValues'])f['appendChild'](this['_createOption'](g,g,T(0x194)));this[T(0x140)]['appendChild'](f);}if(this['_allowCustomValue']||this[T(0x140)][T(0x14e)]['length']===0x0)this[T(0x140)]['appendChild'](this['_createOption']('custom',customOptionValue,T(0x172)));if(c!=='')this['_select']['value']=c;else{if(this['_select'][T(0x1af)]('option[value=\x22\x22]'))this[T(0x140)]['value']='';}}[q(0x139)](c,d,e){const U=q,f=document['createElement'](U(0x133));return f['text']=c,f[U(0x122)]=d,f[U(0x1a9)]['kind']=e,f;}['_autoSizeSelect'](){const V=q;if(!this[V(0x15e)]||!this['_select'])return;const c=this['_select']['selectedOptions']['item'](0x0);this['_measure']['textContent']=c?.[V(0x19a)]??'';const d=this['_measure'][V(0x171)];d>0x0?this['_select'][V(0x166)][V(0x14c)]=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const W=q;if(!this[W(0x143)]||!this[W(0x140)])return;this[W(0x143)]['readOnly']=this['_readOnly'],this['_select'][W(0x157)]=this[W(0x14d)];}['_convertNumericValue'](c,d){const X=q;if(d==null)return this[X(0x12a)];const e=c['unit'],f=this[X(0x162)]?.({'value':c['value'],'numberText':c[X(0x199)],'rawValue':this[X(0x12a)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[X(0x199)],d);}[q(0x137)](c){const Y=q;if(c==null)return null;const d=this[Y(0x162)]?.({'value':Number[Y(0x127)],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const Z=q,d=parseNumericStyleInputValue(this['_value']);if(d[Z(0x174)]===Z(0x186)){const e=this[Z(0x16c)](d,c),f=parseNumericStyleInputValue(e);if(f[Z(0x174)]===Z(0x186))return f[Z(0x122)];return d['value'];}if(this['_input'][Z(0x122)]?.[Z(0x160)]()){const g=Number(this[Z(0x143)][Z(0x122)]);if(!Number['isNaN'](g))return g;}return this['_lastNumericValue'];}['_applyNumericValue'](c,d){this['_lastNumericValue']=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0x13f)](c,d,e){const a0=q;this[a0(0x170)]=this['_clampNumericValue'](c),this['_lastNumericUnit']=d;const f=e??this['_getEffectiveStep'](d);this['_setValue'](combineNumericStyleInputValue(this[a0(0x18f)](this['_lastNumericValue'],f),d),![],!![]);}[q(0x1b4)](c){this['_setValue'](c,!![],![]);}[q(0x14f)](c,d,e){const a1=q,f=c??'';if(!d&&!e&&this[a1(0x1ac)]!=null)return;const g=this['_value'];this[a1(0x12a)]=f;if(e)this['_displayValueLock']=f;else{if(this[a1(0x13c)]!=null){if(f===this['_displayValueLock']||f!==g)this['_displayValueLock']=null;}}this['_preferCustomMode']=![],this['_updateValue']();if(g!==f){e&&(this[a1(0x164)]=!![],this[a1(0x180)][a1(0x197)]({'newValue':f,'oldValue':g}));if(d)this[a1(0x187)][a1(0x197)]({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a2=q;this[a2(0x1ac)]==null&&(this['_previewStartValue']=this[a2(0x12a)],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a3=q;if(this['_previewStartValue']==null)return;const d=this[a3(0x1ac)],e=this[a3(0x13c)]??this[a3(0x12a)],f=this['_previewChanged']&&d!==e,g=c||!f;this[a3(0x1ac)]=null,this[a3(0x164)]=![],g?(this[a3(0x13c)]=null,this['_value']=d,this['_updateValue']()):(this[a3(0x13c)]=e,this[a3(0x19f)]()),this[a3(0x163)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a4=q,d=this[a4(0x140)]['value'],e=this['_getEffectiveStep'](d);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_readEditableNumericValue'](d),c,e),d,e);}['_stopStepperRepeat'](){const a5=q;this[a5(0x152)]!=null&&(window['clearTimeout'](this[a5(0x152)]),this['_stepperRepeatTimeout']=null),this[a5(0x147)]!=null&&(window['clearInterval'](this['_stepperRepeatInterval']),this['_stepperRepeatInterval']=null);}[q(0x15a)](){const a6=q;window[a6(0x13a)]('pointerup',this['_windowPointerUpHandler'],!![]),window['addEventListener'](a6(0x156),this['_windowPointerCancelHandler'],!![]),window['addEventListener'](a6(0x18c),this['_windowBlurHandler']);}[q(0x131)](){const a7=q;window[a7(0x13a)](a7(0x138),this[a7(0x18d)],!![]),window['addEventListener']('pointerup',this[a7(0x1b5)],!![]),window['addEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window['addEventListener'](a7(0x18c),this['_windowDragBlurHandler']);}['_detachStepperWindowListeners'](){const a8=q;window['removeEventListener'](a8(0x124),this['_windowPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this['_windowPointerCancelHandler'],!![]),window[a8(0x153)](a8(0x18c),this['_windowBlurHandler']);}[q(0x1b2)](){const a9=q;window[a9(0x153)]('pointermove',this['_windowDragPointerMoveHandler'],!![]),window['removeEventListener'](a9(0x124),this[a9(0x1b5)],!![]),window['removeEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window['removeEventListener']('blur',this['_windowDragBlurHandler']);}[q(0x17e)](c){const aa=q,d=Math['abs'](c),e=Math['min'](d,0x14)/0x5,f=Math[aa(0x165)](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[aa(0x130)](c)*h;}[q(0x125)](c){return resolveNumericStyleInputStep(this['_unitSteps'],this['_step'],c);}[q(0x1a6)](c,d,e){const ab=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number[ab(0x150)](d)||d===0x0)return g;const h=this[ab(0x142)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ab(0x16a)](i);l=o+d+0x1;}const m=h+l*f;return this['_clampNumericValue'](this[ab(0x1aa)](m,f));}[q(0x18f)](c,d){const ac=q,e=d??this[ac(0x13b)];return formatNumericStyleInputNumber(this[ac(0x1aa)](c,e),this[ac(0x198)](e));}['_roundToStepPrecision'](c,d){const e=this['_getStepPrecision'](d),f=0xa**e;return Math['round'](c*f)/f;}['_getStepPrecision'](c){const ad=q,d=(''+(c??this['_step']))['toLowerCase']();if(d['includes']('e-')){const [f,g]=d[ad(0x17b)]('e-'),h=Number(g),i=f[ad(0x151)]('.')?f['length']-f[ad(0x126)]('.')-0x1:0x0;return h+i;}const e=d[ad(0x126)]('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0x16d)](){const ae=q,c=this['_lastNumericUnit']??this['_units'][0x0];if(c==null)return![];this[ae(0x1b3)]=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[ae(0x1b4)](d),this[ae(0x155)]();return this['_applyNumericValue'](this[ae(0x170)],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const af=q;return this['_select'][af(0x148)][af(0x1b1)](0x0)?.[af(0x1a9)][af(0x174)]==='unit';}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x1ab)](c){const ag=q;let d=c;if(this[ag(0x142)]!=null)d=Math[ag(0x165)](this[ag(0x142)],d);if(this['_max']!=null)d=Math['min'](this['_max'],d);return d;}}customElements[q(0x173)]('node-projects-numeric-style-input',NumericStyleInput);