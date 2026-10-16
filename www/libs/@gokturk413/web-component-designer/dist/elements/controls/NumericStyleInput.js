const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x1b4))/0x1*(-parseInt(p(0x1ce))/0x2)+parseInt(p(0x171))/0x3+-parseInt(p(0x1ed))/0x4+-parseInt(p(0x1b9))/0x5*(parseInt(p(0x1d7))/0x6)+parseInt(p(0x1ec))/0x7*(parseInt(p(0x1d4))/0x8)+-parseInt(p(0x1e9))/0x9*(-parseInt(p(0x1c8))/0xa)+parseInt(p(0x1dd))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7518e));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';function a(){const ap=['_handleWindowDragPointerMove','inputValue','step','template','options','_handleWindowStepperPointerEnd','_wireEvents','_increaseButton','_windowPointerUpHandler','_windowDragPointerUpHandler','_handleStepperPointerDown','style','unit','_applySelectedMode','dataset','_fixedValues','_finishDragInteractionForPointerEvent','_units','selectedOptions','_startPreviewSession','increase','pointerup','valuePreviewFinished','_createOption','kind','559907uXIsaC','_scrubberButton','_decreaseButton','createElement','_applyNumericValue','635vfoyBT','sign','_stepperRepeatTimeout','pointerId','setTimeout','blur','_stepperDirection','numeric','trunc','_stepperPointerId','_lastNumericUnit','length','value','_setValue','_unitSteps','1340hfhXSf','optgroup','_detachDragWindowListeners','round','_detachStepperWindowListeners','selectValue','2tUxSSL','inputVisible','_min','_getStepPrecision','_lastNumericValue','_switchToUnitModeForInteraction','40FjEBiH','valuePreviewChanged','fixed','7110KQyQPT','_renderSelectOptions','valueChanged','abs','_roundToStepPrecision','label','943107CozQSw','_unitValueConverter','mode','Enter','_displayValueLock','_finishStepperInteraction','_readEditableNumericValue','item','none','select','unitValueConverter','Units','51894TBrKGh','readOnly','pointercancel','315301XHPlBs','70492CBWtrw','pointermove','_dragPointerId','_max','addEventListener','_getDomElement','measure','_formatInteractiveNumericValue','_convertNumericValue','fixedValues','allowCustomValue','min','_handlePointerDown','decrease','clientY','ceil','text','_stepperRepeatInterval','_readOnly','disabled','keydown','_measure','display','_select','emit','_parseAttributesToProperties','option','_getEffectiveStep','preventDefault','_attachDragWindowListeners','_calculateDraggedStepCount','_applyTypedValue','372177tbOVul','isNaN','_applyReadonlyState','_applyStepPreview','_windowPointerCancelHandler','selectedUnit','_finishPreviewSession','_appliedDragSteps','setPointerCapture','max','_windowDragPointerCancelHandler','_previewNumericValue','_createCustomDisplayState','_preferCustomMode','_dragStartY','isInPreview','trim','isFinite','key','removeEventListener','_dragStartNumericValue','custom','includes','_windowDragBlurHandler','replaceChildren','_clampNumericValue','_previewChanged','appendChild','_commitValue','_updateValue','_previewStartValue','_input','_windowDragPointerMoveHandler','__node-projects-custom-value__','_getInteractiveStepValue','_isSelectedUnitMode','_finishDragInteraction','numberText','_step','_value','_allowCustomValue','_resolveCurrentValueForUnit'];a=function(){return ap;};return a();}export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue=q(0x192),dragHandleGlyph='⋮';function b(c,d){c=c-0x165;const e=a();let f=e[c];return f;}export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x1a6)]=css`
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
  `;static [q(0x19e)]=html`
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
  `;[q(0x198)]='';get['value'](){const r=q;return this[r(0x198)];}set['value'](c){const s=q;this[s(0x1c6)](c,![],![]);}['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[q(0x1b1)]=new TypedEvent();[q(0x1ac)]=['px','%','pt'];get['units'](){const t=q;return[...this[t(0x1ac)]];}set['units'](c){const u=q;this['_units']=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this['_units'][0x0]??this[u(0x1c3)],this[u(0x18e)]();}['_fixedValues']=[];get['fixedValues'](){const v=q;return[...this[v(0x1aa)]];}set[q(0x1f6)](c){const w=q;this[w(0x1aa)]=this['_normalizeOptionValues'](c),this['_updateValue']();}['_step']=0x1;get[q(0x19d)](){return this['_step'];}set[q(0x19d)](c){const x=q;this['_step']=Number[x(0x182)](c)&&c>0x0?c:0x1;}[q(0x1c7)]={};get['unitSteps'](){return{...this['_unitSteps']};}set['unitSteps'](c){const y=q;this[y(0x1c7)]=c??{};}[q(0x1d0)]=null;get['min'](){return this['_min'];}set['min'](c){const z=q;this['_min']=Number[z(0x182)](c)?c:null;}[q(0x1f0)]=null;get['max'](){return this['_max'];}set[q(0x17a)](c){const A=q;this[A(0x1f0)]=Number[A(0x182)](c)?c:null;}['_readOnly']=![];get[q(0x1ea)](){return this['_readOnly'];}set['readOnly'](c){const B=q;this[B(0x1ff)]=c,this['_applyReadonlyState']();}get[q(0x180)](){const C=q;return this[C(0x18f)]!=null;}[q(0x199)]=!![];get[q(0x1f7)](){const D=q;return this[D(0x199)];}set[q(0x1f7)](c){const E=q;this[E(0x199)]=c,this['_updateValue']();}['_unitValueConverter'];get[q(0x1e7)](){const F=q;return this[F(0x1de)];}set[q(0x1e7)](c){const G=q;this[G(0x1de)]=c;}['_input'];['_select'];[q(0x166)];['_scrubberButton'];[q(0x1a2)];['_decreaseButton'];['_lastNumericValue']=0x0;['_lastNumericUnit']='px';[q(0x1ef)]=null;[q(0x17f)]=0x0;[q(0x185)]=0x0;['_appliedDragSteps']=0x0;[q(0x18f)]=null;[q(0x18b)]=![];['_displayValueLock']=null;[q(0x1c2)]=null;['_stepperDirection']=0x0;[q(0x1bb)]=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0x19b)](c);[q(0x1a4)]=c=>this['_finishDragInteractionForPointerEvent'](c,![]);[q(0x17b)]=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);[q(0x188)]=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this[q(0x1a0)](c);['_windowBlurHandler']=()=>this[q(0x1e2)](![]);[q(0x17e)]=![];constructor(){const H=q;super(),this['_restoreCachedInititalValues'](),this[H(0x190)]=this[H(0x1f2)]('input'),this[H(0x168)]=this['_getDomElement'](H(0x1e6)),this[H(0x166)]=this[H(0x1f2)](H(0x1f3)),this['_scrubberButton']=this[H(0x1f2)]('scrubber'),this[H(0x1a2)]=this[H(0x1f2)](H(0x1af)),this[H(0x1b6)]=this['_getDomElement'](H(0x1fa));}['ready'](){const I=q;this[I(0x16a)](),this[I(0x1a1)](),this['_updateValue']();}[q(0x1a1)](){const J=q;this[J(0x190)]['addEventListener']('change',()=>this[J(0x170)]()),this['_input']['addEventListener'](J(0x165),c=>{const K=J;c[K(0x183)]===K(0x1e0)&&(this[K(0x170)](),this['_input'][K(0x1be)]());}),this['_scrubberButton'][J(0x1f1)]('pointerdown',c=>this[J(0x1f9)](c)),this[J(0x168)][J(0x1f1)]('change',()=>this[J(0x1a8)]()),this['_increaseButton']['addEventListener']('pointerdown',c=>this[J(0x1a5)](c,0x1)),this['_decreaseButton']['addEventListener']('pointerdown',c=>this[J(0x1a5)](c,-0x1));}['_handlePointerDown'](c){const L=q;if(this[L(0x1ff)])return;if(!this[L(0x194)]()){if(!this[L(0x1d3)]())return;}this['_dragPointerId']=c['pointerId'],this['_dragStartY']=c['clientY'],this[L(0x185)]=this['_readEditableNumericValue'](this[L(0x168)]['value']),this[L(0x178)]=0x0,this['_startPreviewSession'](),this[L(0x16e)]();try{this[L(0x1b5)][L(0x179)](c['pointerId']);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const M=q;if(this[M(0x1ef)]!==c[M(0x1bc)]||!this[M(0x194)]())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c[M(0x1fb)]);if(d===this[M(0x178)])return;this[M(0x178)]=d;const e=this[M(0x168)]['value'],f=this['_getEffectiveStep'](e);this['_previewNumericValue'](this['_getInteractiveStepValue'](this[M(0x185)],d,f),e,f),c[M(0x16d)]();}[q(0x1ab)](c,d){const N=q;if(this['_dragPointerId']!==c['pointerId'])return;this[N(0x195)](d,c['pointerId']);}[q(0x195)](c,d){const O=q;if(this['_dragPointerId']==null)return;this['_dragPointerId']=null,this[O(0x178)]=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton']['hasPointerCapture'](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this[O(0x177)](c);}[q(0x1a5)](c,d){const P=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this[P(0x1d3)]())return;}this['_finishStepperInteraction'](!![]),this['_stepperPointerId']=c['pointerId'],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this['_startPreviewSession'](),this[P(0x174)](d),this['_stepperRepeatTimeout']=window[P(0x1bd)](()=>{const Q=P;this['_stepperRepeatInterval']=window['setInterval'](()=>this['_applyStepPreview'](this[Q(0x1bf)]),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const R=q;if(this['_stepperPointerId']!==c['pointerId'])return;this[R(0x1e2)](![]);}[q(0x1e2)](c){const S=q;if(this[S(0x1c2)]==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this[S(0x1cc)](),this['_stopStepperRepeat'](),this[S(0x177)](c);}['_applySelectedMode'](){const T=q,c=this[T(0x168)]['selectedOptions']['item'](0x0);if(!c)return;const d=c[T(0x1a9)]['kind'];if(d==='fixed'){this[T(0x18d)](c['value']);return;}if(d==='custom'){this[T(0x17e)]=!![],this[T(0x18e)](),requestAnimationFrame(()=>{const U=T;this[U(0x190)]['focus'](),this['_input']['select']();});return;}const e=c['value'];this[T(0x1c3)]=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this['_value']);if(f['kind']===T(0x1c0)){const i=this[T(0x1f5)](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this['_commitValue'](g);return;}if(f[T(0x1b3)]==='empty'){this['_updateValue'](),this['_input']['focus']();return;}const h=Number(this['_input'][T(0x1c5)]);if(!Number[T(0x172)](h)){this['_applyNumericValue'](h,e);return;}this[T(0x18d)](''),this['_input']['focus']();}['_applyTypedValue'](){const V=q,c=this['_select']['selectedOptions']['item'](0x0),d=c?.['dataset'][V(0x1b3)];if(d==='fixed')return;if(d==='custom'){this[V(0x18d)](this['_input'][V(0x1c5)]);return;}const e=this['_input']['value']?.[V(0x181)]()??'';if(!e){this[V(0x18d)]('');return;}const f=Number(e);if(!Number[V(0x172)](f))this['_lastNumericValue']=this[V(0x18a)](f);this[V(0x18d)](combineNumericStyleInputValue(e,c?.['value']??''));}[q(0x18e)](){const W=q;if(!this['_input']||!this[W(0x168)])return;if(this[W(0x18f)]==null)this['_renderSelectOptions']();const c=this['_getDisplayState'](this[W(0x1e1)]??this['_value']);this['_input'][W(0x1c5)]=c[W(0x19c)],this['_input']['style'][W(0x167)]=c[W(0x1cf)]?'':W(0x1e5),this[W(0x190)][W(0x200)]=this[W(0x1ff)]||!c['inputEnabled'],this[W(0x168)][W(0x1c5)]=c[W(0x1cd)],this['_autoSizeSelect']();if(c[W(0x1df)]===W(0x1a7)&&c[W(0x176)]!=null)this[W(0x1c3)]=c[W(0x176)];if(c[W(0x1df)]==='unit'&&c['inputValue']!==''){const f=Number(c[W(0x19c)]);if(!Number[W(0x172)](f))this[W(0x1d2)]=this[W(0x18a)](f);}const d=this['_units']['length']>0x0,e=this[W(0x1ff)]||(!d||c['mode']==='custom');this[W(0x1b5)]['disabled']=e,this[W(0x1a2)]['disabled']=e,this[W(0x1b6)]['disabled']=e,this['_applyReadonlyState']();}['_getDisplayState'](c){const X=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this[X(0x17e)])return this[X(0x17d)](d[X(0x196)]);if(d[X(0x1a7)]&&this['_units']['length']&&!this[X(0x1ac)]['includes'](d['unit']))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d[X(0x1a7)],this[X(0x1c3)],this[X(0x1ac)])??'';return{'mode':X(0x1a7),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][X(0x187)](f)?f:this['_select']['value']||customOptionValue,'selectedUnit':f};}if(d[X(0x1b3)]==='text'){if(!this['_preferCustomMode']&&this[X(0x1aa)]['includes'](d['text']))return{'mode':X(0x1d6),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this[X(0x17d)](d[X(0x1fd)]);}if(this['_preferCustomMode'])return this['_createCustomDisplayState']('');const e=this[X(0x1c3)]??this['_units'][0x0]??'';if(this[X(0x1ac)][X(0x187)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[X(0x17d)]('');}[q(0x17d)](c){const Y=q;if(!this[Y(0x199)]&&this['_units']['length'])return{'mode':Y(0x1a7),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[Y(0x1ac)][0x0],'selectedUnit':this[Y(0x1ac)][0x0]};return{'mode':Y(0x186),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x1d8)](){const Z=q,c=this['_select']['value'];this['_select'][Z(0x189)]();if(this['_units'][Z(0x1c4)]){const d=document[Z(0x1b7)](Z(0x1c9));d[Z(0x1dc)]=Z(0x1e8);for(const e of this['_units'])d['appendChild'](this[Z(0x1b2)](getNumericStyleInputUnitLabel(e),e,'unit'));this['_select']['appendChild'](d);}if(this['_fixedValues']['length']){const f=document['createElement'](Z(0x1c9));f['label']='Values';for(const g of this[Z(0x1aa)])f['appendChild'](this['_createOption'](g,g,'fixed'));this['_select'][Z(0x18c)](f);}if(this[Z(0x199)]||this['_select'][Z(0x19f)]['length']===0x0)this['_select']['appendChild'](this['_createOption'](Z(0x186),customOptionValue,Z(0x186)));if(c!=='')this[Z(0x168)]['value']=c;else{if(this['_select']['querySelector']('option[value=\x22\x22]'))this[Z(0x168)]['value']='';}}['_createOption'](c,d,e){const a0=q,f=document['createElement'](a0(0x16b));return f[a0(0x1fd)]=c,f[a0(0x1c5)]=d,f[a0(0x1a9)]['kind']=e,f;}['_autoSizeSelect'](){const a1=q;if(!this[a1(0x166)]||!this[a1(0x168)])return;const c=this['_select']['selectedOptions'][a1(0x1e4)](0x0);this[a1(0x166)]['textContent']=c?.[a1(0x1fd)]??'';const d=this[a1(0x166)]['offsetWidth'];d>0x0?this[a1(0x168)][a1(0x1a6)]['width']=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}[q(0x173)](){const a2=q;if(!this['_input']||!this[a2(0x168)])return;this['_input'][a2(0x1ea)]=this['_readOnly'],this[a2(0x168)][a2(0x200)]=this[a2(0x1ff)];}[q(0x1f5)](c,d){const a3=q;if(d==null)return this['_value'];const e=c['unit'],f=this[a3(0x1de)]?.({'value':c[a3(0x1c5)],'numberText':c[a3(0x196)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}[q(0x19a)](c){const a4=q;if(c==null)return null;const d=this[a4(0x1de)]?.({'value':Number['NaN'],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const a5=q,d=parseNumericStyleInputValue(this['_value']);if(d[a5(0x1b3)]===a5(0x1c0)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f[a5(0x1b3)]===a5(0x1c0))return f['value'];return d[a5(0x1c5)];}if(this[a5(0x190)]['value']?.['trim']()){const g=Number(this[a5(0x190)]['value']);if(!Number['isNaN'](g))return g;}return this['_lastNumericValue'];}[q(0x1b8)](c,d){const a6=q;this[a6(0x1d2)]=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0x17c)](c,d,e){const a7=q;this['_lastNumericValue']=this[a7(0x18a)](c),this[a7(0x1c3)]=d;const f=e??this[a7(0x16c)](d);this[a7(0x1c6)](combineNumericStyleInputValue(this[a7(0x1f4)](this[a7(0x1d2)],f),d),![],!![]);}[q(0x18d)](c){this['_setValue'](c,!![],![]);}['_setValue'](c,d,e){const a8=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this[a8(0x198)];this['_value']=f;if(e)this['_displayValueLock']=f;else{if(this[a8(0x1e1)]!=null){if(f===this['_displayValueLock']||f!==g)this['_displayValueLock']=null;}}this[a8(0x17e)]=![],this[a8(0x18e)]();if(g!==f){e&&(this[a8(0x18b)]=!![],this[a8(0x1d5)]['emit']({'newValue':f,'oldValue':g}));if(d)this[a8(0x1d9)][a8(0x169)]({'newValue':f,'oldValue':g});}}[q(0x1ae)](){const a9=q;this[a9(0x18f)]==null&&(this['_previewStartValue']=this['_value'],this['_previewChanged']=![]);}[q(0x177)](c){const aa=q;if(this[aa(0x18f)]==null)return;const d=this[aa(0x18f)],e=this['_displayValueLock']??this[aa(0x198)],f=this[aa(0x18b)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this['_displayValueLock']=null,this[aa(0x198)]=d,this['_updateValue']()):(this['_displayValueLock']=e,this[aa(0x18e)]()),this['valuePreviewFinished'][aa(0x169)]({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const ab=q,d=this['_select']['value'],e=this[ab(0x16c)](d);this[ab(0x17c)](this['_getInteractiveStepValue'](this[ab(0x1e3)](d),c,e),d,e);}['_stopStepperRepeat'](){const ac=q;this[ac(0x1bb)]!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this[ac(0x1fe)]),this['_stepperRepeatInterval']=null);}['_attachStepperWindowListeners'](){const ad=q;window['addEventListener']('pointerup',this['_windowPointerUpHandler'],!![]),window['addEventListener'](ad(0x1eb),this['_windowPointerCancelHandler'],!![]),window['addEventListener'](ad(0x1be),this['_windowBlurHandler']);}[q(0x16e)](){const ae=q;window['addEventListener']('pointermove',this[ae(0x191)],!![]),window[ae(0x1f1)](ae(0x1b0),this[ae(0x1a4)],!![]),window['addEventListener']('pointercancel',this[ae(0x17b)],!![]),window['addEventListener']('blur',this['_windowDragBlurHandler']);}[q(0x1cc)](){const af=q;window[af(0x184)]('pointerup',this[af(0x1a3)],!![]),window[af(0x184)]('pointercancel',this[af(0x175)],!![]),window['removeEventListener']('blur',this['_windowBlurHandler']);}[q(0x1ca)](){const ag=q;window['removeEventListener'](ag(0x1ee),this[ag(0x191)],!![]),window['removeEventListener']('pointerup',this['_windowDragPointerUpHandler'],!![]),window['removeEventListener'](ag(0x1eb),this['_windowDragPointerCancelHandler'],!![]),window['removeEventListener'](ag(0x1be),this['_windowDragBlurHandler']);}[q(0x16f)](c){const ah=q,d=Math['abs'](c),e=Math[ah(0x1f8)](d,0x14)/0x5,f=Math[ah(0x17a)](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math['max'](d-0x3c,0x0)/0x2,h=Math[ah(0x1c1)](e+f+g);return Math[ah(0x1ba)](c)*h;}[q(0x16c)](c){const ai=q;return resolveNumericStyleInputStep(this['_unitSteps'],this[ai(0x197)],c);}[q(0x193)](c,d,e){const aj=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number[aj(0x182)](g)||!Number[aj(0x182)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[aj(0x1cb)](i),k=Math[aj(0x1da)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[aj(0x1fc)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this[aj(0x18a)](this[aj(0x1db)](m,f));}[q(0x1f4)](c,d){const ak=q,e=d??this[ak(0x197)];return formatNumericStyleInputNumber(this[ak(0x1db)](c,e),this[ak(0x1d1)](e));}['_roundToStepPrecision'](c,d){const e=this['_getStepPrecision'](d),f=0xa**e;return Math['round'](c*f)/f;}['_getStepPrecision'](c){const al=q,d=(''+(c??this['_step']))['toLowerCase']();if(d[al(0x187)]('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f['includes']('.')?f['length']-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[al(0x1c4)]-e-0x1:0x0;}[q(0x1d3)](){const am=q,c=this['_lastNumericUnit']??this[am(0x1ac)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[am(0x18d)](d),this['_isSelectedUnitMode']();return this[am(0x1b8)](this['_lastNumericValue'],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const an=q;return this['_select'][an(0x1ad)][an(0x1e4)](0x0)?.[an(0x1a9)][an(0x1b3)]===an(0x1a7);}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x18a)](c){const ao=q;let d=c;if(this['_min']!=null)d=Math['max'](this['_min'],d);if(this[ao(0x1f0)]!=null)d=Math[ao(0x1f8)](this['_max'],d);return d;}}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);