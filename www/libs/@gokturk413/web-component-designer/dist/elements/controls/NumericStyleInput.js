const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x1a7))/0x1*(parseInt(p(0x1b7))/0x2)+parseInt(p(0x1ba))/0x3+-parseInt(p(0x198))/0x4+parseInt(p(0x1a9))/0x5+parseInt(p(0x1c0))/0x6*(parseInt(p(0x1b0))/0x7)+-parseInt(p(0x20b))/0x8+parseInt(p(0x207))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4bf17));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const ag=['_getDisplayState','_resolveCurrentValueForUnit','_restoreCachedInititalValues','_stepperRepeatInterval','_calculateDraggedStepCount','setPointerCapture','abs','_stopStepperRepeat','selectedOptions','selectValue','_previewNumericValue','_decreaseButton','_units','clientY','_autoSizeSelect','_input','numberText','_preferCustomMode','_setValue','_readOnly','key','min','_convertNumericValue','none','pointercancel','unit','_previewChanged','_handleWindowStepperPointerEnd','empty','_min','_applyStepPreview','isFinite','template','_startPreviewSession','replaceChildren','fixed','offsetWidth','_scrubberButton','readOnly','valuePreviewChanged','_stepperPointerId','_handlePointerDown','_windowBlurHandler','_windowDragPointerCancelHandler','_detachDragWindowListeners','numeric','valuePreviewFinished','_lastNumericUnit','disabled','value','decrease','_allowCustomValue','_lastNumericValue','preventDefault','_clampNumericValue','units','_max','_attachDragWindowListeners','fixedValues','addEventListener','_windowDragBlurHandler','step','option[value=\x22\x22]','trim','_readEditableNumericValue','includes','querySelector','_windowPointerUpHandler','5626971GfKxQW','change','keydown','_dragStartNumericValue','4142496MlFSoQ','_getInteractiveStepValue','node-projects-numeric-style-input','_isSelectedUnitMode','_value','Enter','_roundToStepPrecision','unitValueConverter','_finishPreviewSession','_finishDragInteractionForPointerEvent','removeEventListener','Values','_getDomElement','_getStepPrecision','_fixedValues','text','_createOption','max','_commitValue','floor','_previewStartValue','item','_stepperRepeatTimeout','_handleWindowDragPointerMove','createElement','dataset','_updateValue','style','indexOf','_appliedDragSteps','_increaseButton','inputEnabled','pointerdown','1456264XgJTAi','_normalizeOptionValues','_displayValueLock','_stepperDirection','_createCustomDisplayState','_select','_wireEvents','_windowDragPointerMoveHandler','_formatInteractiveNumericValue','_getEffectiveStep','blur','_dragStartY','_unitValueConverter','label','_dragPointerId','93146cOmjUm','_step','2108820FJuymp','inputValue','_measure','_applyReadonlyState','trunc','emit','pointerId','189wYQNZP','kind','custom','mode','input','round','_applyNumericValue','12UMsGVD','_unitSteps','appendChild','1414176zLBIJe','isNaN','length','focus','ceil','_finishStepperInteraction','51876IRtPCJ','unitSteps','pointerup'];a=function(){return ag;};return a();}import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';function b(c,d){c=c-0x197;const e=a();let f=e[c];return f;}export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x226)]=css`
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
  `;static [q(0x1e3)]=html`
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
  `;['_value']='';get['value'](){return this['_value'];}set[q(0x1f4)](c){this['_setValue'](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x1ea)]=new TypedEvent();['valuePreviewFinished']=new TypedEvent();[q(0x1cf)]=['px','%','pt'];get[q(0x1fa)](){return[...this['_units']];}set[q(0x1fa)](c){const r=q;this['_units']=this['_normalizeOptionValues'](c),this[r(0x1f2)]=this[r(0x1cf)][0x0]??this['_lastNumericUnit'],this[r(0x225)]();}['_fixedValues']=[];get[q(0x1fd)](){return[...this['_fixedValues']];}set['fixedValues'](c){const s=q;this[s(0x219)]=this[s(0x199)](c),this[s(0x225)]();}[q(0x1a8)]=0x1;get[q(0x200)](){return this['_step'];}set[q(0x200)](c){const t=q;this[t(0x1a8)]=Number['isFinite'](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0x1c1)](){const u=q;return{...this[u(0x1b8)]};}set['unitSteps'](c){this['_unitSteps']=c??{};}['_min']=null;get[q(0x1d8)](){return this['_min'];}set['min'](c){const v=q;this[v(0x1e0)]=Number[v(0x1e2)](c)?c:null;}[q(0x1fb)]=null;get[q(0x21c)](){return this['_max'];}set[q(0x21c)](c){this['_max']=Number['isFinite'](c)?c:null;}[q(0x1d6)]=![];get[q(0x1e9)](){return this['_readOnly'];}set[q(0x1e9)](c){const w=q;this[w(0x1d6)]=c,this[w(0x1ac)]();}get['isInPreview'](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){return this['_allowCustomValue'];}set['allowCustomValue'](c){this['_allowCustomValue']=c,this['_updateValue']();}['_unitValueConverter'];get['unitValueConverter'](){const x=q;return this[x(0x1a4)];}set[q(0x212)](c){this['_unitValueConverter']=c;}[q(0x1d2)];['_select'];[q(0x1ab)];['_scrubberButton'];['_increaseButton'];['_decreaseButton'];[q(0x1f7)]=0x0;['_lastNumericUnit']='px';[q(0x1a6)]=null;['_dragStartY']=0x0;[q(0x20a)]=0x0;[q(0x228)]=0x0;['_previewStartValue']=null;[q(0x1dd)]=![];['_displayValueLock']=null;['_stepperPointerId']=null;[q(0x19b)]=0x0;[q(0x221)]=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0x222)](c);['_windowDragPointerUpHandler']=c=>this[q(0x214)](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);[q(0x1ff)]=()=>this['_finishDragInteraction'](![]);[q(0x206)]=c=>this[q(0x1de)](c);['_windowPointerCancelHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x1ed)]=()=>this['_finishStepperInteraction'](![]);['_preferCustomMode']=![];constructor(){const y=q;super(),this[y(0x1c5)](),this[y(0x1d2)]=this[y(0x217)](y(0x1b4)),this[y(0x19d)]=this[y(0x217)]('select'),this[y(0x1ab)]=this[y(0x217)]('measure'),this[y(0x1e8)]=this['_getDomElement']('scrubber'),this['_increaseButton']=this['_getDomElement']('increase'),this[y(0x1ce)]=this['_getDomElement'](y(0x1f5));}['ready'](){const z=q;this['_parseAttributesToProperties'](),this[z(0x19e)](),this['_updateValue']();}[q(0x19e)](){const A=q;this[A(0x1d2)][A(0x1fe)](A(0x208),()=>this['_applyTypedValue']()),this[A(0x1d2)]['addEventListener'](A(0x209),c=>{const B=A;c[B(0x1d7)]===B(0x210)&&(this['_applyTypedValue'](),this['_input'][B(0x1a2)]());}),this[A(0x1e8)][A(0x1fe)](A(0x197),c=>this[A(0x1ec)](c)),this[A(0x19d)]['addEventListener']('change',()=>this['_applySelectedMode']()),this[A(0x229)]['addEventListener'](A(0x197),c=>this['_handleStepperPointerDown'](c,0x1)),this['_decreaseButton'][A(0x1fe)](A(0x197),c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const C=q;if(this[C(0x1d6)])return;if(!this[C(0x20e)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[C(0x1a6)]=c[C(0x1af)],this['_dragStartY']=c[C(0x1d0)],this['_dragStartNumericValue']=this['_readEditableNumericValue'](this['_select']['value']),this[C(0x228)]=0x0,this['_startPreviewSession'](),this[C(0x1fc)]();try{this['_scrubberButton'][C(0x1c8)](c[C(0x1af)]);}catch{}c[C(0x1f8)]();}[q(0x222)](c){const D=q;if(this['_dragPointerId']!==c['pointerId']||!this['_isSelectedUnitMode']())return;const d=this[D(0x1c7)](this[D(0x1a3)]-c['clientY']);if(d===this[D(0x228)])return;this['_appliedDragSteps']=d;const e=this['_select'][D(0x1f4)],f=this[D(0x1a1)](e);this[D(0x1cd)](this[D(0x20c)](this['_dragStartNumericValue'],d,f),e,f),c['preventDefault']();}[q(0x214)](c,d){const E=q;if(this['_dragPointerId']!==c[E(0x1af)])return;this['_finishDragInteraction'](d,c[E(0x1af)]);}['_finishDragInteraction'](c,d){const F=q;if(this[F(0x1a6)]==null)return;this[F(0x1a6)]=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this['_scrubberButton']['hasPointerCapture'](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this[F(0x213)](c);}['_handleStepperPointerDown'](c,d){const G=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this[G(0x1bf)](!![]),this['_stepperPointerId']=c['pointerId'],this[G(0x19b)]=d,this['_attachStepperWindowListeners'](),this[G(0x1e4)](),this[G(0x1e1)](d),this[G(0x221)]=window['setTimeout'](()=>{const H=G;this['_stepperRepeatInterval']=window['setInterval'](()=>this[H(0x1e1)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}[q(0x1de)](c){if(this['_stepperPointerId']!==c['pointerId'])return;this['_finishStepperInteraction'](![]);}['_finishStepperInteraction'](c){const I=q;if(this[I(0x1eb)]==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const J=q,c=this['_select'][J(0x1cb)][J(0x220)](0x0);if(!c)return;const d=c[J(0x224)][J(0x1b1)];if(d==='fixed'){this[J(0x21d)](c[J(0x1f4)]);return;}if(d==='custom'){this['_preferCustomMode']=!![],this[J(0x225)](),requestAnimationFrame(()=>{const K=J;this['_input'][K(0x1bd)](),this[K(0x1d2)]['select']();});return;}const e=c['value'];this['_lastNumericUnit']=e,this[J(0x1d4)]=![];const f=parseNumericStyleInputValue(this[J(0x20f)]);if(f[J(0x1b1)]===J(0x1f0)){const i=this[J(0x1d9)](f,e);this['_commitValue'](i);return;}const g=this[J(0x1c4)](e);if(g!=null){this[J(0x21d)](g);return;}if(f[J(0x1b1)]===J(0x1df)){this[J(0x225)](),this[J(0x1d2)][J(0x1bd)]();return;}const h=Number(this[J(0x1d2)]['value']);if(!Number[J(0x1bb)](h)){this[J(0x1b6)](h,e);return;}this[J(0x21d)](''),this['_input'][J(0x1bd)]();}['_applyTypedValue'](){const L=q,c=this[L(0x19d)]['selectedOptions']['item'](0x0),d=c?.[L(0x224)]['kind'];if(d===L(0x1e6))return;if(d==='custom'){this[L(0x21d)](this['_input']['value']);return;}const e=this['_input']['value']?.[L(0x202)]()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number['isNaN'](f))this[L(0x1f7)]=this[L(0x1f9)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.['value']??''));}[q(0x225)](){const M=q;if(!this['_input']||!this[M(0x19d)])return;if(this[M(0x21f)]==null)this['_renderSelectOptions']();const c=this[M(0x1c3)](this['_displayValueLock']??this['_value']);this['_input'][M(0x1f4)]=c[M(0x1aa)],this['_input'][M(0x226)]['display']=c['inputVisible']?'':M(0x1da),this[M(0x1d2)]['disabled']=this['_readOnly']||!c[M(0x22a)],this['_select']['value']=c[M(0x1cc)],this[M(0x1d1)]();if(c[M(0x1b3)]===M(0x1dc)&&c['selectedUnit']!=null)this['_lastNumericUnit']=c['selectedUnit'];if(c[M(0x1b3)]===M(0x1dc)&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number['isNaN'](f))this[M(0x1f7)]=this['_clampNumericValue'](f);}const d=this[M(0x1cf)]['length']>0x0,e=this['_readOnly']||(!d||c['mode']==='custom');this['_scrubberButton'][M(0x1f3)]=e,this['_increaseButton']['disabled']=e,this['_decreaseButton'][M(0x1f3)]=e,this['_applyReadonlyState']();}[q(0x1c3)](c){const N=q,d=parseNumericStyleInputValue(c);if(d[N(0x1b1)]==='numeric'){if(this[N(0x1d4)])return this[N(0x19c)](d['numberText']);if(d[N(0x1dc)]&&this['_units']['length']&&!this[N(0x1cf)]['includes'](d['unit']))return this[N(0x19c)](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this[N(0x1f2)],this[N(0x1cf)])??'';return{'mode':N(0x1dc),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[N(0x1cf)][N(0x204)](f)?f:this['_select']['value']||customOptionValue,'selectedUnit':f};}if(d[N(0x1b1)]===N(0x21a)){if(!this[N(0x1d4)]&&this['_fixedValues']['includes'](d['text']))return{'mode':N(0x1e6),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[N(0x21a)]};return this[N(0x19c)](d['text']);}if(this[N(0x1d4)])return this['_createCustomDisplayState']('');const e=this[N(0x1f2)]??this['_units'][0x0]??'';if(this['_units'][N(0x204)](e))return{'mode':N(0x1dc),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}['_createCustomDisplayState'](c){const O=q;if(!this[O(0x1f6)]&&this['_units']['length'])return{'mode':O(0x1dc),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':O(0x1b2),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const P=q,c=this[P(0x19d)]['value'];this[P(0x19d)][P(0x1e5)]();if(this[P(0x1cf)][P(0x1bc)]){const d=document['createElement']('optgroup');d['label']='Units';for(const e of this[P(0x1cf)])d[P(0x1b9)](this[P(0x21b)](getNumericStyleInputUnitLabel(e),e,'unit'));this['_select'][P(0x1b9)](d);}if(this['_fixedValues'][P(0x1bc)]){const f=document[P(0x223)]('optgroup');f[P(0x1a5)]=P(0x216);for(const g of this['_fixedValues'])f['appendChild'](this[P(0x21b)](g,g,P(0x1e6)));this[P(0x19d)][P(0x1b9)](f);}if(this['_allowCustomValue']||this['_select']['options']['length']===0x0)this[P(0x19d)][P(0x1b9)](this['_createOption']('custom',customOptionValue,'custom'));if(c!=='')this['_select']['value']=c;else{if(this[P(0x19d)][P(0x205)](P(0x201)))this[P(0x19d)][P(0x1f4)]='';}}[q(0x21b)](c,d,e){const Q=q,f=document[Q(0x223)]('option');return f['text']=c,f[Q(0x1f4)]=d,f['dataset']['kind']=e,f;}['_autoSizeSelect'](){const R=q;if(!this['_measure']||!this[R(0x19d)])return;const c=this['_select']['selectedOptions']['item'](0x0);this['_measure']['textContent']=c?.['text']??'';const d=this[R(0x1ab)][R(0x1e7)];d>0x0?this[R(0x19d)]['style']['width']=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}[q(0x1ac)](){const S=q;if(!this[S(0x1d2)]||!this[S(0x19d)])return;this['_input']['readOnly']=this['_readOnly'],this['_select'][S(0x1f3)]=this[S(0x1d6)];}['_convertNumericValue'](c,d){const T=q;if(d==null)return this['_value'];const e=c[T(0x1dc)],f=this[T(0x1a4)]?.({'value':c[T(0x1f4)],'numberText':c[T(0x1d3)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}[q(0x1c4)](c){const U=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number['NaN'],'numberText':'','rawValue':this[U(0x20f)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}[q(0x203)](c){const V=q,d=parseNumericStyleInputValue(this[V(0x20f)]);if(d[V(0x1b1)]===V(0x1f0)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f[V(0x1f4)];return d['value'];}if(this[V(0x1d2)][V(0x1f4)]?.[V(0x202)]()){const g=Number(this[V(0x1d2)][V(0x1f4)]);if(!Number[V(0x1bb)](g))return g;}return this[V(0x1f7)];}['_applyNumericValue'](c,d){const W=q;this[W(0x1f7)]=this[W(0x1f9)](c),this[W(0x1f2)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[W(0x1f7)]),d));}['_previewNumericValue'](c,d,e){const X=q;this[X(0x1f7)]=this['_clampNumericValue'](c),this[X(0x1f2)]=d;const f=e??this[X(0x1a1)](d);this[X(0x1d5)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this['_lastNumericValue'],f),d),![],!![]);}['_commitValue'](c){this['_setValue'](c,!![],![]);}[q(0x1d5)](c,d,e){const Y=q,f=c??'';if(!d&&!e&&this[Y(0x21f)]!=null)return;const g=this['_value'];this['_value']=f;if(e)this['_displayValueLock']=f;else{if(this[Y(0x19a)]!=null){if(f===this[Y(0x19a)]||f!==g)this[Y(0x19a)]=null;}}this['_preferCustomMode']=![],this[Y(0x225)]();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged'][Y(0x1ae)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged'][Y(0x1ae)]({'newValue':f,'oldValue':g});}}[q(0x1e4)](){const Z=q;this[Z(0x21f)]==null&&(this['_previewStartValue']=this['_value'],this[Z(0x1dd)]=![]);}[q(0x213)](c){const a0=q;if(this[a0(0x21f)]==null)return;const d=this['_previewStartValue'],e=this[a0(0x19a)]??this[a0(0x20f)],f=this[a0(0x1dd)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this[a0(0x1dd)]=![],g?(this[a0(0x19a)]=null,this['_value']=d,this[a0(0x225)]()):(this['_displayValueLock']=e,this['_updateValue']()),this[a0(0x1f1)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a1=q,d=this[a1(0x19d)]['value'],e=this[a1(0x1a1)](d);this['_previewNumericValue'](this[a1(0x20c)](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0x1ca)](){const a2=q;this[a2(0x221)]!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this['_stepperRepeatInterval']),this[a2(0x1c6)]=null);}['_attachStepperWindowListeners'](){const a3=q;window[a3(0x1fe)](a3(0x1c2),this[a3(0x206)],!![]),window[a3(0x1fe)](a3(0x1db),this['_windowPointerCancelHandler'],!![]),window['addEventListener']('blur',this[a3(0x1ed)]);}[q(0x1fc)](){const a4=q;window['addEventListener']('pointermove',this[a4(0x19f)],!![]),window[a4(0x1fe)](a4(0x1c2),this['_windowDragPointerUpHandler'],!![]),window['addEventListener']('pointercancel',this[a4(0x1ee)],!![]),window['addEventListener'](a4(0x1a2),this[a4(0x1ff)]);}['_detachStepperWindowListeners'](){const a5=q;window['removeEventListener']('pointerup',this[a5(0x206)],!![]),window[a5(0x215)](a5(0x1db),this['_windowPointerCancelHandler'],!![]),window['removeEventListener'](a5(0x1a2),this[a5(0x1ed)]);}[q(0x1ef)](){const a6=q;window[a6(0x215)]('pointermove',this[a6(0x19f)],!![]),window[a6(0x215)](a6(0x1c2),this['_windowDragPointerUpHandler'],!![]),window['removeEventListener'](a6(0x1db),this[a6(0x1ee)],!![]),window['removeEventListener'](a6(0x1a2),this[a6(0x1ff)]);}['_calculateDraggedStepCount'](c){const a7=q,d=Math[a7(0x1c9)](c),e=Math['min'](d,0x14)/0x5,f=Math[a7(0x21c)](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[a7(0x21c)](d-0x3c,0x0)/0x2,h=Math[a7(0x1ad)](e+f+g);return Math['sign'](c)*h;}['_getEffectiveStep'](c){const a8=q;return resolveNumericStyleInputStep(this['_unitSteps'],this[a8(0x1a8)],c);}['_getInteractiveStepValue'](c,d,e){const a9=q,f=e??this[a9(0x1a8)],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this[a9(0x1e0)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math[a9(0x1c9)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[a9(0x1be)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[a9(0x21e)](i);l=o+d+0x1;}const m=h+l*f;return this[a9(0x1f9)](this['_roundToStepPrecision'](m,f));}[q(0x1a0)](c,d){const aa=q,e=d??this['_step'];return formatNumericStyleInputNumber(this[aa(0x211)](c,e),this[aa(0x218)](e));}[q(0x211)](c,d){const ab=q,e=this['_getStepPrecision'](d),f=0xa**e;return Math[ab(0x1b5)](c*f)/f;}[q(0x218)](c){const ac=q,d=(''+(c??this['_step']))['toLowerCase']();if(d['includes']('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f[ac(0x204)]('.')?f[ac(0x1bc)]-f[ac(0x227)]('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ac(0x1bc)]-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const ad=q,c=this[ad(0x1f2)]??this['_units'][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[ad(0x1c4)](c);if(d!=null)return this[ad(0x21d)](d),this[ad(0x20e)]();return this['_applyNumericValue'](this[ad(0x1f7)],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const ae=q;return this['_select'][ae(0x1cb)][ae(0x220)](0x0)?.[ae(0x224)][ae(0x1b1)]===ae(0x1dc);}[q(0x199)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x1f9)](c){const af=q;let d=c;if(this[af(0x1e0)]!=null)d=Math['max'](this[af(0x1e0)],d);if(this['_max']!=null)d=Math[af(0x1d8)](this[af(0x1fb)],d);return d;}}customElements['define'](q(0x20d),NumericStyleInput);