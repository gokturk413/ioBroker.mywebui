const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x15b))/0x1+parseInt(p(0x19c))/0x2+parseInt(p(0x18c))/0x3+-parseInt(p(0x158))/0x4+parseInt(p(0x12a))/0x5+-parseInt(p(0x150))/0x6+-parseInt(p(0x19b))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xba2f8));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const al=['pointercancel','_autoSizeSelect','_attachStepperWindowListeners','addEventListener','unit','_lastNumericUnit','_convertNumericValue','4156851vzlstJ','custom','kind','_windowDragPointerCancelHandler','_unitSteps','allowCustomValue','_createCustomDisplayState','_measure','_detachDragWindowListeners','_getInteractiveStepValue','_fixedValues','setPointerCapture','__node-projects-custom-value__','inputEnabled','_dragStartY','2565668MPAuhA','289282qihGGU','_select','preventDefault','indexOf','_dragStartNumericValue','_switchToUnitModeForInteraction','sign','pointerdown','optgroup','_step','_applyTypedValue','_previewNumericValue','appendChild','pointermove','_windowDragPointerMoveHandler','numeric','_value','option','input','_displayValueLock','_clampNumericValue','valuePreviewFinished','_getDomElement','_unitValueConverter','_startPreviewSession','split','Values','_windowPointerUpHandler','_finishPreviewSession','51080oTGZjH','_applySelectedMode','_max','_applyReadonlyState','_finishDragInteraction','valueChanged','_applyStepPreview','fixedValues','_input','_windowDragBlurHandler','width','length','key','numberText','dataset','_updateValue','select','_finishStepperInteraction','_applyNumericValue','_finishDragInteractionForPointerEvent','fixed','_stepperRepeatTimeout','pointerup','removeEventListener','disabled','_calculateDraggedStepCount','_windowBlurHandler','toLowerCase','_wireEvents','value','max','trim','_increaseButton','step','_getEffectiveStep','_formatInteractiveNumericValue','clearInterval','item','9020166JOtfWA','_dragPointerId','_stepperDirection','selectValue','includes','_commitValue','selectedUnit','options','776116AudLnt','_appliedDragSteps','label','1286056MupZqm','_handleStepperPointerDown','_handleWindowDragPointerMove','unitValueConverter','_allowCustomValue','_setValue','floor','text','_getDisplayState','increase','_previewStartValue','_resolveCurrentValueForUnit','blur','decrease','_roundToStepPrecision','isNaN','_createOption','_stepperRepeatInterval','_scrubberButton','pointerId','_units','_handleWindowStepperPointerEnd','min','_stepperPointerId','_isSelectedUnitMode','Enter','_min','Units','focus','_lastNumericValue','unitSteps','style','_preferCustomMode','_windowPointerCancelHandler','_readOnly','_detachStepperWindowListeners','_getStepPrecision','isFinite','_decreaseButton','createElement','textContent','setTimeout'];a=function(){return al;};return a();}import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue=q(0x198),dragHandleGlyph='⋮';function b(c,d){c=c-0x11e;const e=a();let f=e[c];return f;}export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x17a)]=css`
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
  `;['_value']='';get['value'](){const r=q;return this[r(0x1ac)];}set['value'](c){this['_setValue'](c,![],![]);}['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['valuePreviewFinished']=new TypedEvent();[q(0x16f)]=['px','%','pt'];get['units'](){return[...this['_units']];}set['units'](c){const s=q;this['_units']=this['_normalizeOptionValues'](c),this[s(0x18a)]=this[s(0x16f)][0x0]??this['_lastNumericUnit'],this['_updateValue']();}[q(0x196)]=[];get[q(0x131)](){const t=q;return[...this[t(0x196)]];}set[q(0x131)](c){const u=q;this['_fixedValues']=this['_normalizeOptionValues'](c),this[u(0x139)]();}['_step']=0x1;get[q(0x14b)](){return this['_step'];}set[q(0x14b)](c){const v=q;this['_step']=Number[v(0x180)](c)&&c>0x0?c:0x1;}['_unitSteps']={};get['unitSteps'](){return{...this['_unitSteps']};}set[q(0x179)](c){const w=q;this[w(0x190)]=c??{};}['_min']=null;get['min'](){const x=q;return this[x(0x175)];}set[q(0x171)](c){this['_min']=Number['isFinite'](c)?c:null;}[q(0x12c)]=null;get[q(0x148)](){const y=q;return this[y(0x12c)];}set['max'](c){const z=q;this[z(0x12c)]=Number['isFinite'](c)?c:null;}[q(0x17d)]=![];get['readOnly'](){const A=q;return this[A(0x17d)];}set['readOnly'](c){const B=q;this['_readOnly']=c,this[B(0x12d)]();}get['isInPreview'](){const C=q;return this[C(0x165)]!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){return this['_allowCustomValue'];}set[q(0x191)](c){const D=q;this[D(0x15f)]=c,this['_updateValue']();}['_unitValueConverter'];get[q(0x15e)](){return this['_unitValueConverter'];}set[q(0x15e)](c){this['_unitValueConverter']=c;}[q(0x132)];['_select'];['_measure'];[q(0x16d)];['_increaseButton'];[q(0x181)];[q(0x178)]=0x0;[q(0x18a)]='px';[q(0x151)]=null;[q(0x19a)]=0x0;[q(0x1a0)]=0x0;[q(0x159)]=0x0;['_previewStartValue']=null;['_previewChanged']=![];[q(0x120)]=null;[q(0x172)]=null;[q(0x152)]=0x0;[q(0x13f)]=null;[q(0x16c)]=null;[q(0x1aa)]=c=>this[q(0x15d)](c);['_windowDragPointerUpHandler']=c=>this[q(0x13d)](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);[q(0x133)]=()=>this[q(0x12e)](![]);[q(0x128)]=c=>this[q(0x170)](c);[q(0x17c)]=c=>this[q(0x170)](c);[q(0x144)]=()=>this[q(0x13b)](![]);[q(0x17b)]=![];constructor(){const E=q;super(),this['_restoreCachedInititalValues'](),this['_input']=this['_getDomElement'](E(0x11f)),this[E(0x19d)]=this[E(0x123)](E(0x13a)),this[E(0x193)]=this['_getDomElement']('measure'),this['_scrubberButton']=this[E(0x123)]('scrubber'),this[E(0x14a)]=this['_getDomElement'](E(0x164)),this['_decreaseButton']=this['_getDomElement'](E(0x168));}['ready'](){this['_parseAttributesToProperties'](),this['_wireEvents'](),this['_updateValue']();}[q(0x146)](){const F=q;this['_input'][F(0x188)]('change',()=>this[F(0x1a6)]()),this['_input']['addEventListener']('keydown',c=>{const G=F;c[G(0x136)]===G(0x174)&&(this[G(0x1a6)](),this[G(0x132)]['blur']());}),this[F(0x16d)][F(0x188)](F(0x1a3),c=>this['_handlePointerDown'](c)),this['_select'][F(0x188)]('change',()=>this[F(0x12b)]()),this['_increaseButton'][F(0x188)](F(0x1a3),c=>this[F(0x15c)](c,0x1)),this['_decreaseButton'][F(0x188)]('pointerdown',c=>this[F(0x15c)](c,-0x1));}['_handlePointerDown'](c){const H=q;if(this[H(0x17d)])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this['_dragPointerId']=c[H(0x16e)],this[H(0x19a)]=c['clientY'],this['_dragStartNumericValue']=this['_readEditableNumericValue'](this['_select'][H(0x147)]),this[H(0x159)]=0x0,this[H(0x125)](),this['_attachDragWindowListeners']();try{this[H(0x16d)][H(0x197)](c[H(0x16e)]);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const I=q;if(this['_dragPointerId']!==c['pointerId']||!this['_isSelectedUnitMode']())return;const d=this[I(0x143)](this[I(0x19a)]-c['clientY']);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this['_select'][I(0x147)],f=this[I(0x14c)](e);this[I(0x1a7)](this[I(0x195)](this['_dragStartNumericValue'],d,f),e,f),c[I(0x19e)]();}[q(0x13d)](c,d){const J=q;if(this['_dragPointerId']!==c['pointerId'])return;this[J(0x12e)](d,c[J(0x16e)]);}['_finishDragInteraction'](c,d){const K=q;if(this[K(0x151)]==null)return;this[K(0x151)]=null,this[K(0x159)]=0x0,this[K(0x194)]();if(d!=null)try{if(this['_scrubberButton']['hasPointerCapture'](d))this[K(0x16d)]['releasePointerCapture'](d);}catch{}this[K(0x129)](c);}['_handleStepperPointerDown'](c,d){const L=q;if(this['_readOnly'])return;if(!this[L(0x173)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[L(0x13b)](!![]),this['_stepperPointerId']=c[L(0x16e)],this[L(0x152)]=d,this[L(0x187)](),this['_startPreviewSession'](),this[L(0x130)](d),this[L(0x13f)]=window[L(0x184)](()=>{const M=L;this['_stepperRepeatInterval']=window['setInterval'](()=>this[M(0x130)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const N=q;if(this[N(0x172)]!==c['pointerId'])return;this[N(0x13b)](![]);}['_finishStepperInteraction'](c){const O=q;if(this[O(0x172)]==null)return;this[O(0x172)]=null,this[O(0x152)]=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}[q(0x12b)](){const P=q,c=this['_select']['selectedOptions'][P(0x14f)](0x0);if(!c)return;const d=c[P(0x138)]['kind'];if(d===P(0x13e)){this[P(0x155)](c[P(0x147)]);return;}if(d==='custom'){this[P(0x17b)]=!![],this[P(0x139)](),requestAnimationFrame(()=>{const Q=P;this[Q(0x132)][Q(0x177)](),this['_input'][Q(0x13a)]();});return;}const e=c['value'];this['_lastNumericUnit']=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this['_value']);if(f['kind']===P(0x1ab)){const i=this[P(0x18b)](f,e);this['_commitValue'](i);return;}const g=this[P(0x166)](e);if(g!=null){this[P(0x155)](g);return;}if(f['kind']==='empty'){this['_updateValue'](),this['_input'][P(0x177)]();return;}const h=Number(this['_input']['value']);if(!Number['isNaN'](h)){this[P(0x13c)](h,e);return;}this[P(0x155)](''),this['_input']['focus']();}[q(0x1a6)](){const R=q,c=this['_select']['selectedOptions']['item'](0x0),d=c?.['dataset']['kind'];if(d===R(0x13e))return;if(d===R(0x18d)){this[R(0x155)](this['_input'][R(0x147)]);return;}const e=this[R(0x132)]['value']?.[R(0x149)]()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number['isNaN'](f))this[R(0x178)]=this['_clampNumericValue'](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.[R(0x147)]??''));}[q(0x139)](){const S=q;if(!this['_input']||!this['_select'])return;if(this['_previewStartValue']==null)this['_renderSelectOptions']();const c=this[S(0x163)](this['_displayValueLock']??this['_value']);this[S(0x132)][S(0x147)]=c['inputValue'],this[S(0x132)][S(0x17a)]['display']=c['inputVisible']?'':'none',this[S(0x132)][S(0x142)]=this[S(0x17d)]||!c[S(0x199)],this[S(0x19d)][S(0x147)]=c[S(0x153)],this['_autoSizeSelect']();if(c['mode']===S(0x189)&&c['selectedUnit']!=null)this[S(0x18a)]=c[S(0x156)];if(c['mode']==='unit'&&c['inputValue']!==''){const f=Number(c['inputValue']);if(!Number[S(0x16a)](f))this['_lastNumericValue']=this[S(0x121)](f);}const d=this['_units']['length']>0x0,e=this[S(0x17d)]||(!d||c['mode']==='custom');this[S(0x16d)]['disabled']=e,this[S(0x14a)]['disabled']=e,this[S(0x181)][S(0x142)]=e,this[S(0x12d)]();}[q(0x163)](c){const T=q,d=parseNumericStyleInputValue(c);if(d[T(0x18e)]==='numeric'){if(this[T(0x17b)])return this[T(0x192)](d[T(0x137)]);if(d['unit']&&this[T(0x16f)]['length']&&!this['_units'][T(0x154)](d[T(0x189)]))return this[T(0x192)](c);const f=resolveNumericStyleInputSelectedUnit(d[T(0x189)],this['_lastNumericUnit'],this['_units'])??'';return{'mode':T(0x189),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[T(0x16f)][T(0x154)](f)?f:this['_select'][T(0x147)]||customOptionValue,'selectedUnit':f};}if(d[T(0x18e)]===T(0x162)){if(!this['_preferCustomMode']&&this['_fixedValues']['includes'](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[T(0x162)]};return this[T(0x192)](d['text']);}if(this[T(0x17b)])return this['_createCustomDisplayState']('');const e=this[T(0x18a)]??this[T(0x16f)][0x0]??'';if(this[T(0x16f)][T(0x154)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[T(0x192)]('');}[q(0x192)](c){const U=q;if(!this[U(0x15f)]&&this[U(0x16f)]['length'])return{'mode':'unit','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this[U(0x16f)][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}['_renderSelectOptions'](){const V=q,c=this[V(0x19d)][V(0x147)];this['_select']['replaceChildren']();if(this[V(0x16f)][V(0x135)]){const d=document[V(0x182)]('optgroup');d[V(0x15a)]=V(0x176);for(const e of this[V(0x16f)])d['appendChild'](this['_createOption'](getNumericStyleInputUnitLabel(e),e,V(0x189)));this['_select']['appendChild'](d);}if(this['_fixedValues']['length']){const f=document['createElement'](V(0x1a4));f[V(0x15a)]=V(0x127);for(const g of this[V(0x196)])f[V(0x1a8)](this[V(0x16b)](g,g,'fixed'));this[V(0x19d)][V(0x1a8)](f);}if(this['_allowCustomValue']||this[V(0x19d)][V(0x157)][V(0x135)]===0x0)this['_select'][V(0x1a8)](this['_createOption']('custom',customOptionValue,'custom'));if(c!=='')this['_select'][V(0x147)]=c;else{if(this[V(0x19d)]['querySelector']('option[value=\x22\x22]'))this['_select']['value']='';}}[q(0x16b)](c,d,e){const W=q,f=document[W(0x182)](W(0x11e));return f['text']=c,f['value']=d,f[W(0x138)]['kind']=e,f;}[q(0x186)](){const X=q;if(!this['_measure']||!this['_select'])return;const c=this['_select']['selectedOptions']['item'](0x0);this['_measure'][X(0x183)]=c?.['text']??'';const d=this[X(0x193)]['offsetWidth'];d>0x0?this[X(0x19d)]['style'][X(0x134)]=d+0x11+'px':requestAnimationFrame(()=>this[X(0x186)]());}['_applyReadonlyState'](){const Y=q;if(!this[Y(0x132)]||!this['_select'])return;this['_input']['readOnly']=this['_readOnly'],this[Y(0x19d)]['disabled']=this['_readOnly'];}['_convertNumericValue'](c,d){const Z=q;if(d==null)return this['_value'];const e=c['unit'],f=this['_unitValueConverter']?.({'value':c[Z(0x147)],'numberText':c['numberText'],'rawValue':this[Z(0x1ac)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[Z(0x137)],d);}[q(0x166)](c){const a0=q;if(c==null)return null;const d=this[a0(0x124)]?.({'value':Number['NaN'],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.[a0(0x149)]();return d?d:null;}['_readEditableNumericValue'](c){const a1=q,d=parseNumericStyleInputValue(this['_value']);if(d['kind']==='numeric'){const e=this[a1(0x18b)](d,c),f=parseNumericStyleInputValue(e);if(f[a1(0x18e)]===a1(0x1ab))return f[a1(0x147)];return d['value'];}if(this['_input']['value']?.[a1(0x149)]()){const g=Number(this['_input']['value']);if(!Number[a1(0x16a)](g))return g;}return this['_lastNumericValue'];}[q(0x13c)](c,d){const a2=q;this[a2(0x178)]=this['_clampNumericValue'](c),this['_lastNumericUnit']=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a2(0x178)]),d));}['_previewNumericValue'](c,d,e){const a3=q;this[a3(0x178)]=this[a3(0x121)](c),this['_lastNumericUnit']=d;const f=e??this['_getEffectiveStep'](d);this['_setValue'](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a3(0x178)],f),d),![],!![]);}[q(0x155)](c){const a4=q;this[a4(0x160)](c,!![],![]);}[q(0x160)](c,d,e){const a5=q,f=c??'';if(!d&&!e&&this[a5(0x165)]!=null)return;const g=this['_value'];this['_value']=f;if(e)this['_displayValueLock']=f;else{if(this['_displayValueLock']!=null){if(f===this['_displayValueLock']||f!==g)this[a5(0x120)]=null;}}this[a5(0x17b)]=![],this[a5(0x139)]();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged']['emit']({'newValue':f,'oldValue':g}));if(d)this[a5(0x12f)]['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a6=q;this[a6(0x165)]==null&&(this[a6(0x165)]=this['_value'],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a7=q;if(this[a7(0x165)]==null)return;const d=this['_previewStartValue'],e=this[a7(0x120)]??this[a7(0x1ac)],f=this['_previewChanged']&&d!==e,g=c||!f;this[a7(0x165)]=null,this['_previewChanged']=![],g?(this[a7(0x120)]=null,this[a7(0x1ac)]=d,this[a7(0x139)]()):(this[a7(0x120)]=e,this['_updateValue']()),this[a7(0x122)]['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a8=q,d=this[a8(0x19d)]['value'],e=this['_getEffectiveStep'](d);this[a8(0x1a7)](this[a8(0x195)](this['_readEditableNumericValue'](d),c,e),d,e);}['_stopStepperRepeat'](){const a9=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window[a9(0x14e)](this[a9(0x16c)]),this[a9(0x16c)]=null);}[q(0x187)](){const aa=q;window[aa(0x188)](aa(0x140),this['_windowPointerUpHandler'],!![]),window[aa(0x188)]('pointercancel',this['_windowPointerCancelHandler'],!![]),window[aa(0x188)]('blur',this[aa(0x144)]);}['_attachDragWindowListeners'](){const ab=q;window[ab(0x188)]('pointermove',this['_windowDragPointerMoveHandler'],!![]),window['addEventListener'](ab(0x140),this['_windowDragPointerUpHandler'],!![]),window[ab(0x188)](ab(0x185),this[ab(0x18f)],!![]),window['addEventListener']('blur',this['_windowDragBlurHandler']);}[q(0x17e)](){const ac=q;window[ac(0x141)]('pointerup',this[ac(0x128)],!![]),window['removeEventListener'](ac(0x185),this[ac(0x17c)],!![]),window['removeEventListener']('blur',this[ac(0x144)]);}['_detachDragWindowListeners'](){const ad=q;window['removeEventListener'](ad(0x1a9),this['_windowDragPointerMoveHandler'],!![]),window['removeEventListener']('pointerup',this['_windowDragPointerUpHandler'],!![]),window['removeEventListener'](ad(0x185),this['_windowDragPointerCancelHandler'],!![]),window['removeEventListener'](ad(0x167),this['_windowDragBlurHandler']);}['_calculateDraggedStepCount'](c){const ae=q,d=Math['abs'](c),e=Math['min'](d,0x14)/0x5,f=Math['max'](Math[ae(0x171)](d-0x14,0x28),0x0)/0x3,g=Math[ae(0x148)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[ae(0x1a2)](c)*h;}[q(0x14c)](c){return resolveNumericStyleInputStep(this['_unitSteps'],this['_step'],c);}[q(0x195)](c,d,e){const af=q,f=e??this[af(0x1a5)],g=this[af(0x121)](c);if(!Number[af(0x180)](g)||!Number[af(0x180)](d)||d===0x0)return g;const h=this[af(0x175)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[af(0x161)](i);l=o+d+0x1;}const m=h+l*f;return this[af(0x121)](this['_roundToStepPrecision'](m,f));}[q(0x14d)](c,d){const e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}[q(0x169)](c,d){const ag=q,e=this[ag(0x17f)](d),f=0xa**e;return Math['round'](c*f)/f;}[q(0x17f)](c){const ah=q,d=(''+(c??this['_step']))[ah(0x145)]();if(d['includes']('e-')){const [f,g]=d[ah(0x126)]('e-'),h=Number(g),i=f['includes']('.')?f['length']-f[ah(0x19f)]('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0x1a1)](){const ai=q,c=this['_lastNumericUnit']??this[ai(0x16f)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this[ai(0x166)](c);if(d!=null)return this[ai(0x155)](d),this['_isSelectedUnitMode']();return this['_applyNumericValue'](this[ai(0x178)],c),this[ai(0x173)]();}['_isSelectedUnitMode'](){const aj=q;return this['_select']['selectedOptions']['item'](0x0)?.['dataset'][aj(0x18e)]==='unit';}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x121)](c){const ak=q;let d=c;if(this[ak(0x175)]!=null)d=Math['max'](this[ak(0x175)],d);if(this['_max']!=null)d=Math[ak(0x171)](this['_max'],d);return d;}}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);