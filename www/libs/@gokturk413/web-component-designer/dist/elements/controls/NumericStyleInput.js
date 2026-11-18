const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x19a))/0x1*(parseInt(p(0x1cb))/0x2)+parseInt(p(0x1c5))/0x3*(parseInt(p(0x161))/0x4)+-parseInt(p(0x146))/0x5+-parseInt(p(0x192))/0x6+-parseInt(p(0x1b7))/0x7+-parseInt(p(0x1b6))/0x8*(parseInt(p(0x17f))/0x9)+parseInt(p(0x145))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8a5e7));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';function b(c,d){c=c-0x13d;const e=a();let f=e[c];return f;}function a(){const ao=['_windowDragPointerMoveHandler','_stopStepperRepeat','_applyReadonlyState','length','empty','selectedUnit','blur','_decreaseButton','pointerup','define','23861650lxDJNO','2900045YNtsJb','_isSelectedUnitMode','_stepperPointerId','template','units','_stepperRepeatTimeout','_allowCustomValue','valuePreviewFinished','_windowDragPointerCancelHandler','_detachDragWindowListeners','_finishStepperInteraction','_max','_detachStepperWindowListeners','_convertNumericValue','_handleStepperPointerDown','_previewChanged','_readOnly','_lastNumericUnit','_handleWindowDragPointerMove','_calculateDraggedStepCount','_roundToStepPrecision','trunc','_stepperDirection','_getEffectiveStep','_createOption','clientY','replaceChildren','1033768ANQWJT','includes','indexOf','select','setInterval','max','Enter','_appliedDragSteps','hasPointerCapture','_increaseButton','numeric','_autoSizeSelect','unitValueConverter','_finishDragInteractionForPointerEvent','_handlePointerDown','fixedValues','_normalizeOptionValues','round','isFinite','disabled','label','pointerId','_updateValue','selectedOptions','_step','custom','selectValue','item','_applySelectedMode','_previewStartValue','104157ryQYBN','_getDisplayState','_clampNumericValue','min','_scrubberButton','textContent','valuePreviewChanged','_finishPreviewSession','_select','clearInterval','node-projects-numeric-style-input','split','style','floor','_createCustomDisplayState','_applyStepPreview','pointermove','_applyNumericValue','_attachDragWindowListeners','6253374vVFTaI','unitSteps','_getDomElement','_unitValueConverter','_value','_previewNumericValue','_parseAttributesToProperties','_commitValue','7NjXnoX','_preferCustomMode','_unitSteps','_windowBlurHandler','_getStepPrecision','step','_displayValueLock','display','options','createElement','emit','_getInteractiveStepValue','abs','text','preventDefault','_formatInteractiveNumericValue','removeEventListener','ready','inputVisible','_windowDragPointerUpHandler','_min','addEventListener','_measure','numberText','_stepperRepeatInterval','_resolveCurrentValueForUnit','_dragStartNumericValue','input','40ZcdIHi','6066788PTDLQV','trim','_dragStartY','_dragPointerId','_renderSelectOptions','_applyTypedValue','_startPreviewSession','_units','decrease','unit','inputValue','_fixedValues','_switchToUnitModeForInteraction','_setValue','6BvZMIb','_lastNumericValue','mode','_readEditableNumericValue','dataset','kind','60142NBHAam','value','isNaN','pointercancel','_windowPointerCancelHandler','_input'];a=function(){return ao;};return a();}export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [q(0x149)]=html`
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
  `;[q(0x196)]='';get[q(0x1cc)](){return this['_value'];}set[q(0x1cc)](c){const r=q;this[r(0x1c4)](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x185)]=new TypedEvent();[q(0x14d)]=new TypedEvent();['_units']=['px','%','pt'];get[q(0x14a)](){return[...this['_units']];}set['units'](c){const s=q;this['_units']=this[s(0x171)](c),this['_lastNumericUnit']=this['_units'][0x0]??this[s(0x157)],this['_updateValue']();}['_fixedValues']=[];get['fixedValues'](){const t=q;return[...this[t(0x1c2)]];}set[q(0x170)](c){const u=q;this[u(0x1c2)]=this['_normalizeOptionValues'](c),this[u(0x177)]();}['_step']=0x1;get[q(0x19f)](){const v=q;return this[v(0x179)];}set[q(0x19f)](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0x193)](){return{...this['_unitSteps']};}set[q(0x193)](c){const w=q;this[w(0x19c)]=c??{};}[q(0x1ae)]=null;get['min'](){const x=q;return this[x(0x1ae)];}set['min'](c){this['_min']=Number['isFinite'](c)?c:null;}[q(0x151)]=null;get['max'](){return this['_max'];}set[q(0x166)](c){const y=q;this[y(0x151)]=Number[y(0x173)](c)?c:null;}['_readOnly']=![];get['readOnly'](){return this['_readOnly'];}set['readOnly'](c){const z=q;this['_readOnly']=c,this[z(0x13d)]();}get['isInPreview'](){const A=q;return this[A(0x17e)]!=null;}[q(0x14c)]=!![];get['allowCustomValue'](){return this['_allowCustomValue'];}set['allowCustomValue'](c){const B=q;this['_allowCustomValue']=c,this[B(0x177)]();}['_unitValueConverter'];get[q(0x16d)](){const C=q;return this[C(0x195)];}set['unitValueConverter'](c){const D=q;this[D(0x195)]=c;}[q(0x1d0)];['_select'];['_measure'];['_scrubberButton'];[q(0x16a)];[q(0x142)];['_lastNumericValue']=0x0;[q(0x157)]='px';[q(0x1ba)]=null;['_dragStartY']=0x0;[q(0x1b4)]=0x0;['_appliedDragSteps']=0x0;[q(0x17e)]=null;['_previewChanged']=![];[q(0x1a0)]=null;[q(0x148)]=null;['_stepperDirection']=0x0;[q(0x14b)]=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0x158)](c);[q(0x1ad)]=c=>this[q(0x16e)](c,![]);[q(0x14e)]=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);['_windowDragBlurHandler']=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x1cf)]=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x19d)]=()=>this['_finishStepperInteraction'](![]);[q(0x19b)]=![];constructor(){const E=q;super(),this['_restoreCachedInititalValues'](),this[E(0x1d0)]=this['_getDomElement'](E(0x1b5)),this['_select']=this['_getDomElement']('select'),this[E(0x1b0)]=this['_getDomElement']('measure'),this['_scrubberButton']=this[E(0x194)]('scrubber'),this['_increaseButton']=this['_getDomElement']('increase'),this[E(0x142)]=this[E(0x194)](E(0x1bf));}[q(0x1ab)](){const F=q;this[F(0x198)](),this['_wireEvents'](),this['_updateValue']();}['_wireEvents'](){const G=q;this[G(0x1d0)][G(0x1af)]('change',()=>this['_applyTypedValue']()),this['_input'][G(0x1af)]('keydown',c=>{const H=G;c['key']===H(0x167)&&(this[H(0x1bc)](),this['_input'][H(0x141)]());}),this['_scrubberButton']['addEventListener']('pointerdown',c=>this[G(0x16f)](c)),this[G(0x187)]['addEventListener']('change',()=>this[G(0x17d)]()),this[G(0x16a)]['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,0x1)),this[G(0x142)]['addEventListener']('pointerdown',c=>this[G(0x154)](c,-0x1));}['_handlePointerDown'](c){const I=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this['_dragPointerId']=c['pointerId'],this[I(0x1b9)]=c['clientY'],this['_dragStartNumericValue']=this[I(0x1c8)](this['_select']['value']),this[I(0x168)]=0x0,this['_startPreviewSession'](),this[I(0x191)]();try{this[I(0x183)]['setPointerCapture'](c[I(0x176)]);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const J=q;if(this['_dragPointerId']!==c['pointerId']||!this[J(0x147)]())return;const d=this[J(0x159)](this['_dragStartY']-c[J(0x15f)]);if(d===this[J(0x168)])return;this[J(0x168)]=d;const e=this['_select']['value'],f=this[J(0x15d)](e);this[J(0x197)](this['_getInteractiveStepValue'](this[J(0x1b4)],d,f),e,f),c[J(0x1a8)]();}[q(0x16e)](c,d){const K=q;if(this[K(0x1ba)]!==c['pointerId'])return;this['_finishDragInteraction'](d,c[K(0x176)]);}['_finishDragInteraction'](c,d){const L=q;if(this['_dragPointerId']==null)return;this[L(0x1ba)]=null,this[L(0x168)]=0x0,this[L(0x14f)]();if(d!=null)try{if(this[L(0x183)][L(0x169)](d))this[L(0x183)]['releasePointerCapture'](d);}catch{}this['_finishPreviewSession'](c);}[q(0x154)](c,d){const M=q;if(this[M(0x156)])return;if(!this[M(0x147)]()){if(!this[M(0x1c3)]())return;}this[M(0x150)](!![]),this['_stepperPointerId']=c['pointerId'],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this[M(0x1bd)](),this[M(0x18e)](d),this[M(0x14b)]=window['setTimeout'](()=>{const N=M;this[N(0x1b2)]=window[N(0x165)](()=>this['_applyStepPreview'](this[N(0x15c)]),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const O=q;if(this[O(0x148)]!==c['pointerId'])return;this['_finishStepperInteraction'](![]);}[q(0x150)](c){const P=q;if(this[P(0x148)]==null)return;this[P(0x148)]=null,this[P(0x15c)]=0x0,this['_detachStepperWindowListeners'](),this[P(0x1d2)](),this[P(0x186)](c);}['_applySelectedMode'](){const Q=q,c=this[Q(0x187)]['selectedOptions']['item'](0x0);if(!c)return;const d=c['dataset'][Q(0x1ca)];if(d==='fixed'){this[Q(0x199)](c['value']);return;}if(d==='custom'){this[Q(0x19b)]=!![],this[Q(0x177)](),requestAnimationFrame(()=>{const R=Q;this[R(0x1d0)]['focus'](),this[R(0x1d0)][R(0x164)]();});return;}const e=c[Q(0x1cc)];this['_lastNumericUnit']=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this['_value']);if(f['kind']===Q(0x16b)){const i=this[Q(0x153)](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f[Q(0x1ca)]===Q(0x13f)){this['_updateValue'](),this[Q(0x1d0)]['focus']();return;}const h=Number(this[Q(0x1d0)]['value']);if(!Number['isNaN'](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this['_input']['focus']();}['_applyTypedValue'](){const S=q,c=this[S(0x187)]['selectedOptions']['item'](0x0),d=c?.['dataset']['kind'];if(d==='fixed')return;if(d==='custom'){this['_commitValue'](this[S(0x1d0)][S(0x1cc)]);return;}const e=this['_input'][S(0x1cc)]?.['trim']()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[S(0x1cd)](f))this[S(0x1c6)]=this[S(0x181)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.[S(0x1cc)]??''));}['_updateValue'](){const T=q;if(!this['_input']||!this['_select'])return;if(this['_previewStartValue']==null)this[T(0x1bb)]();const c=this['_getDisplayState'](this[T(0x1a0)]??this[T(0x196)]);this[T(0x1d0)]['value']=c[T(0x1c1)],this[T(0x1d0)]['style'][T(0x1a1)]=c[T(0x1ac)]?'':'none',this['_input']['disabled']=this[T(0x156)]||!c['inputEnabled'],this['_select'][T(0x1cc)]=c[T(0x17b)],this['_autoSizeSelect']();if(c[T(0x1c7)]===T(0x1c0)&&c[T(0x140)]!=null)this['_lastNumericUnit']=c[T(0x140)];if(c[T(0x1c7)]==='unit'&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number[T(0x1cd)](f))this[T(0x1c6)]=this[T(0x181)](f);}const d=this[T(0x1be)][T(0x13e)]>0x0,e=this['_readOnly']||(!d||c[T(0x1c7)]===T(0x17a));this[T(0x183)][T(0x174)]=e,this[T(0x16a)][T(0x174)]=e,this[T(0x142)]['disabled']=e,this['_applyReadonlyState']();}[q(0x180)](c){const U=q,d=parseNumericStyleInputValue(c);if(d[U(0x1ca)]===U(0x16b)){if(this[U(0x19b)])return this[U(0x18d)](d[U(0x1b1)]);if(d['unit']&&this[U(0x1be)][U(0x13e)]&&!this[U(0x1be)]['includes'](d['unit']))return this[U(0x18d)](c);const f=resolveNumericStyleInputSelectedUnit(d[U(0x1c0)],this['_lastNumericUnit'],this[U(0x1be)])??'';return{'mode':'unit','inputValue':d[U(0x1b1)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[U(0x1be)]['includes'](f)?f:this['_select']['value']||customOptionValue,'selectedUnit':f};}if(d['kind']===U(0x1a7)){if(!this['_preferCustomMode']&&this['_fixedValues']['includes'](d[U(0x1a7)]))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this[U(0x18d)](d['text']);}if(this[U(0x19b)])return this['_createCustomDisplayState']('');const e=this[U(0x157)]??this[U(0x1be)][0x0]??'';if(this['_units']['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[U(0x18d)]('');}['_createCustomDisplayState'](c){const V=q;if(!this['_allowCustomValue']&&this['_units'][V(0x13e)])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x1bb)](){const W=q,c=this['_select'][W(0x1cc)];this[W(0x187)][W(0x160)]();if(this[W(0x1be)]['length']){const d=document[W(0x1a3)]('optgroup');d[W(0x175)]='Units';for(const e of this['_units'])d['appendChild'](this['_createOption'](getNumericStyleInputUnitLabel(e),e,'unit'));this[W(0x187)]['appendChild'](d);}if(this[W(0x1c2)]['length']){const f=document['createElement']('optgroup');f['label']='Values';for(const g of this[W(0x1c2)])f['appendChild'](this[W(0x15e)](g,g,'fixed'));this['_select']['appendChild'](f);}if(this[W(0x14c)]||this[W(0x187)][W(0x1a2)]['length']===0x0)this[W(0x187)]['appendChild'](this[W(0x15e)]('custom',customOptionValue,W(0x17a)));if(c!=='')this[W(0x187)]['value']=c;else{if(this[W(0x187)]['querySelector']('option[value=\x22\x22]'))this['_select'][W(0x1cc)]='';}}['_createOption'](c,d,e){const X=q,f=document[X(0x1a3)]('option');return f['text']=c,f[X(0x1cc)]=d,f['dataset'][X(0x1ca)]=e,f;}['_autoSizeSelect'](){const Y=q;if(!this['_measure']||!this['_select'])return;const c=this['_select']['selectedOptions'][Y(0x17c)](0x0);this['_measure'][Y(0x184)]=c?.['text']??'';const d=this['_measure']['offsetWidth'];d>0x0?this['_select'][Y(0x18b)]['width']=d+0x11+'px':requestAnimationFrame(()=>this[Y(0x16c)]());}['_applyReadonlyState'](){const Z=q;if(!this['_input']||!this[Z(0x187)])return;this[Z(0x1d0)]['readOnly']=this[Z(0x156)],this['_select']['disabled']=this[Z(0x156)];}[q(0x153)](c,d){const a0=q;if(d==null)return this['_value'];const e=c[a0(0x1c0)],f=this[a0(0x195)]?.({'value':c['value'],'numberText':c[a0(0x1b1)],'rawValue':this[a0(0x196)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[a0(0x1b1)],d);}['_resolveCurrentValueForUnit'](c){const a1=q;if(c==null)return null;const d=this[a1(0x195)]?.({'value':Number['NaN'],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const a2=q,d=parseNumericStyleInputValue(this[a2(0x196)]);if(d[a2(0x1ca)]===a2(0x16b)){const e=this[a2(0x153)](d,c),f=parseNumericStyleInputValue(e);if(f[a2(0x1ca)]==='numeric')return f[a2(0x1cc)];return d['value'];}if(this['_input'][a2(0x1cc)]?.[a2(0x1b8)]()){const g=Number(this[a2(0x1d0)][a2(0x1cc)]);if(!Number['isNaN'](g))return g;}return this['_lastNumericValue'];}['_applyNumericValue'](c,d){const a3=q;this[a3(0x1c6)]=this['_clampNumericValue'](c),this[a3(0x157)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0x197)](c,d,e){const a4=q;this['_lastNumericValue']=this[a4(0x181)](c),this[a4(0x157)]=d;const f=e??this[a4(0x15d)](d);this[a4(0x1c4)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a4(0x1c6)],f),d),![],!![]);}['_commitValue'](c){const a5=q;this[a5(0x1c4)](c,!![],![]);}[q(0x1c4)](c,d,e){const a6=q,f=c??'';if(!d&&!e&&this[a6(0x17e)]!=null)return;const g=this[a6(0x196)];this['_value']=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this[a6(0x1a0)]||f!==g)this[a6(0x1a0)]=null;}}this['_preferCustomMode']=![],this['_updateValue']();if(g!==f){e&&(this[a6(0x155)]=!![],this['valuePreviewChanged']['emit']({'newValue':f,'oldValue':g}));if(d)this['valueChanged'][a6(0x1a4)]({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a7=q;this['_previewStartValue']==null&&(this[a7(0x17e)]=this['_value'],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a8=q;if(this[a8(0x17e)]==null)return;const d=this[a8(0x17e)],e=this[a8(0x1a0)]??this[a8(0x196)],f=this[a8(0x155)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this['_displayValueLock']=null,this['_value']=d,this['_updateValue']()):(this[a8(0x1a0)]=e,this['_updateValue']()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a9=q,d=this[a9(0x187)][a9(0x1cc)],e=this['_getEffectiveStep'](d);this['_previewNumericValue'](this[a9(0x1a5)](this[a9(0x1c8)](d),c,e),d,e);}[q(0x1d2)](){const aa=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window[aa(0x188)](this['_stepperRepeatInterval']),this['_stepperRepeatInterval']=null);}['_attachStepperWindowListeners'](){const ab=q;window['addEventListener'](ab(0x143),this['_windowPointerUpHandler'],!![]),window[ab(0x1af)]('pointercancel',this[ab(0x1cf)],!![]),window['addEventListener'](ab(0x141),this[ab(0x19d)]);}['_attachDragWindowListeners'](){const ac=q;window['addEventListener'](ac(0x18f),this[ac(0x1d1)],!![]),window['addEventListener']('pointerup',this['_windowDragPointerUpHandler'],!![]),window['addEventListener'](ac(0x1ce),this[ac(0x14e)],!![]),window[ac(0x1af)](ac(0x141),this['_windowDragBlurHandler']);}[q(0x152)](){const ad=q;window['removeEventListener'](ad(0x143),this['_windowPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this['_windowPointerCancelHandler'],!![]),window['removeEventListener'](ad(0x141),this['_windowBlurHandler']);}[q(0x14f)](){const ae=q;window['removeEventListener'](ae(0x18f),this[ae(0x1d1)],!![]),window['removeEventListener'](ae(0x143),this['_windowDragPointerUpHandler'],!![]),window[ae(0x1aa)]('pointercancel',this[ae(0x14e)],!![]),window[ae(0x1aa)]('blur',this['_windowDragBlurHandler']);}[q(0x159)](c){const af=q,d=Math['abs'](c),e=Math[af(0x182)](d,0x14)/0x5,f=Math['max'](Math[af(0x182)](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math[af(0x15b)](e+f+g);return Math['sign'](c)*h;}[q(0x15d)](c){const ag=q;return resolveNumericStyleInputStep(this[ag(0x19c)],this[ag(0x179)],c);}['_getInteractiveStepValue'](c,d,e){const ah=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number[ah(0x173)](d)||d===0x0)return g;const h=this[ah(0x1ae)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math[ah(0x1a6)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[ah(0x18c)](i);l=o+d+0x1;}const m=h+l*f;return this[ah(0x181)](this[ah(0x15a)](m,f));}[q(0x1a9)](c,d){const ai=q,e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this[ai(0x19e)](e));}[q(0x15a)](c,d){const aj=q,e=this[aj(0x19e)](d),f=0xa**e;return Math[aj(0x172)](c*f)/f;}[q(0x19e)](c){const ak=q,d=(''+(c??this[ak(0x179)]))['toLowerCase']();if(d[ak(0x162)]('e-')){const [f,g]=d[ak(0x18a)]('e-'),h=Number(g),i=f['includes']('.')?f[ak(0x13e)]-f[ak(0x163)]('.')-0x1:0x0;return h+i;}const e=d[ak(0x163)]('.');return e>=0x0?d['length']-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const al=q,c=this['_lastNumericUnit']??this['_units'][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[al(0x1b3)](c);if(d!=null)return this[al(0x199)](d),this['_isSelectedUnitMode']();return this[al(0x190)](this[al(0x1c6)],c),this[al(0x147)]();}['_isSelectedUnitMode'](){const am=q;return this[am(0x187)][am(0x178)][am(0x17c)](0x0)?.[am(0x1c9)][am(0x1ca)]===am(0x1c0);}[q(0x171)](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const an=q;let d=c;if(this[an(0x1ae)]!=null)d=Math['max'](this['_min'],d);if(this[an(0x151)]!=null)d=Math['min'](this['_max'],d);return d;}}customElements[q(0x144)](q(0x189),NumericStyleInput);