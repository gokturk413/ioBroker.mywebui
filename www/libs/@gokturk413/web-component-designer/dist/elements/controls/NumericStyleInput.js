const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x186))/0x1*(parseInt(p(0x194))/0x2)+-parseInt(p(0x175))/0x3+-parseInt(p(0x190))/0x4*(parseInt(p(0x139))/0x5)+-parseInt(p(0x170))/0x6*(parseInt(p(0x19d))/0x7)+-parseInt(p(0x116))/0x8*(-parseInt(p(0x1a0))/0x9)+parseInt(p(0x168))/0xa+-parseInt(p(0x143))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4fb3d));function b(c,d){c=c-0x113;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const aj=['createElement','removeEventListener','unit','_setValue','_handleStepperPointerDown','_getEffectiveStep','_getStepPrecision','replaceChildren','824ryaewo','allowCustomValue','_resolveCurrentValueForUnit','trunc','158180amsuUH','keydown','pointercancel','numberText','step','numeric','_windowDragBlurHandler','text','_attachStepperWindowListeners','91ZVYMdW','decrease','_max','90Yeyuiy','_detachDragWindowListeners','_allowCustomValue','_min','readOnly','_lastNumericValue','custom','_dragStartNumericValue','_switchToUnitModeForInteraction','increase','_calculateDraggedStepCount','_wireEvents','_units','272144LVWFQh','item','_value','pointerdown','_convertNumericValue','_scrubberButton','_windowPointerCancelHandler','_finishStepperInteraction','_getDomElement','_createCustomDisplayState','_updateValue','_readEditableNumericValue','Enter','_handlePointerDown','indexOf','_unitSteps','key','isNaN','min','_preferCustomMode','_windowDragPointerUpHandler','blur','style','appendChild','measure','_dragPointerId','_previewStartValue','_stepperDirection','trim','_lastNumericUnit','value','_decreaseButton','_applyTypedValue','fixedValues','_windowDragPointerMoveHandler','1240NAFQMF','Units','fixed','preventDefault','_stepperRepeatInterval','_finishPreviewSession','_increaseButton','pointerId','change','input','326062xjWCqj','_isSelectedUnitMode','_applyNumericValue','inputValue','_stopStepperRepeat','kind','_stepperPointerId','addEventListener','_displayValueLock','inputVisible','_applyStepPreview','optgroup','_previewNumericValue','_clampNumericValue','_windowDragPointerCancelHandler','_applyReadonlyState','__node-projects-custom-value__','_stepperRepeatTimeout','max','_applySelectedMode','selectValue','_previewChanged','_fixedValues','isFinite','_attachDragWindowListeners','_getDisplayState','_detachStepperWindowListeners','_renderSelectOptions','_finishDragInteractionForPointerEvent','pointerup','_windowBlurHandler','select','dataset','_readOnly','ready','selectedUnit','label','5696320lVEhVK','unitSteps','includes','_input','define','valuePreviewFinished','disabled','focus','43356ywXNex','length','selectedOptions','scrubber','_formatInteractiveNumericValue','751509WuIHqi','Values','units','valuePreviewChanged','_roundToStepPrecision','_createOption','round','_commitValue','_measure','emit','_select','clientY','template','_step','setTimeout','setPointerCapture','_handleWindowDragPointerMove','2SvoAom','empty'];a=function(){return aj;};return a();}import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue=q(0x153),dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x12c)]=css`
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
      border-color: var(--input-border-color, #596c7a);
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
  `;static [q(0x181)]=html`
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
  `;['_value']='';get['value'](){return this['_value'];}set['value'](c){const r=q;this[r(0x18b)](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x178)]=new TypedEvent();[q(0x16d)]=new TypedEvent();[q(0x115)]=['px','%','pt'];get[q(0x177)](){return[...this['_units']];}set['units'](c){const s=q;this['_units']=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this['_units'][0x0]??this[s(0x133)],this['_updateValue']();}[q(0x159)]=[];get['fixedValues'](){const t=q;return[...this[t(0x159)]];}set[q(0x137)](c){const u=q;this['_fixedValues']=this['_normalizeOptionValues'](c),this[u(0x120)]();}[q(0x182)]=0x1;get[q(0x198)](){return this['_step'];}set[q(0x198)](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0x169)](){const v=q;return{...this[v(0x125)]};}set['unitSteps'](c){this['_unitSteps']=c??{};}[q(0x1a3)]=null;get['min'](){return this['_min'];}set[q(0x128)](c){const w=q;this[w(0x1a3)]=Number[w(0x15a)](c)?c:null;}['_max']=null;get[q(0x155)](){return this['_max'];}set['max'](c){this['_max']=Number['isFinite'](c)?c:null;}[q(0x164)]=![];get['readOnly'](){const x=q;return this[x(0x164)];}set[q(0x1a4)](c){const y=q;this[y(0x164)]=c,this[y(0x152)]();}get['isInPreview'](){const z=q;return this[z(0x130)]!=null;}[q(0x1a2)]=!![];get[q(0x191)](){return this['_allowCustomValue'];}set[q(0x191)](c){const A=q;this['_allowCustomValue']=c,this[A(0x120)]();}['_unitValueConverter'];get['unitValueConverter'](){return this['_unitValueConverter'];}set['unitValueConverter'](c){this['_unitValueConverter']=c;}['_input'];[q(0x17f)];[q(0x17d)];[q(0x11b)];['_increaseButton'];[q(0x135)];['_lastNumericValue']=0x0;[q(0x133)]='px';[q(0x12f)]=null;['_dragStartY']=0x0;[q(0x1a7)]=0x0;['_appliedDragSteps']=0x0;[q(0x130)]=null;['_previewChanged']=![];['_displayValueLock']=null;['_stepperPointerId']=null;['_stepperDirection']=0x0;['_stepperRepeatTimeout']=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0x185)](c);[q(0x12a)]=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x15f)](c,!![]);['_windowDragBlurHandler']=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this[q(0x11d)](![]);['_preferCustomMode']=![];constructor(){const B=q;super(),this['_restoreCachedInititalValues'](),this['_input']=this['_getDomElement'](B(0x142)),this[B(0x17f)]=this['_getDomElement'](B(0x162)),this[B(0x17d)]=this[B(0x11e)](B(0x12e)),this[B(0x11b)]=this[B(0x11e)](B(0x173)),this[B(0x13f)]=this[B(0x11e)](B(0x1a9)),this['_decreaseButton']=this[B(0x11e)](B(0x19e));}[q(0x165)](){this['_parseAttributesToProperties'](),this['_wireEvents'](),this['_updateValue']();}[q(0x114)](){const C=q;this[C(0x16b)][C(0x14a)](C(0x141),()=>this[C(0x136)]()),this['_input'][C(0x14a)](C(0x195),c=>{const D=C;c[D(0x126)]===D(0x122)&&(this[D(0x136)](),this['_input']['blur']());}),this[C(0x11b)]['addEventListener'](C(0x119),c=>this[C(0x123)](c)),this['_select']['addEventListener']('change',()=>this['_applySelectedMode']()),this['_increaseButton'][C(0x14a)]('pointerdown',c=>this['_handleStepperPointerDown'](c,0x1)),this['_decreaseButton']['addEventListener'](C(0x119),c=>this[C(0x18c)](c,-0x1));}[q(0x123)](c){const E=q;if(this[E(0x164)])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this[E(0x12f)]=c[E(0x140)],this['_dragStartY']=c['clientY'],this[E(0x1a7)]=this['_readEditableNumericValue'](this['_select'][E(0x134)]),this['_appliedDragSteps']=0x0,this['_startPreviewSession'](),this['_attachDragWindowListeners']();try{this[E(0x11b)][E(0x184)](c[E(0x140)]);}catch{}c['preventDefault']();}[q(0x185)](c){const F=q;if(this[F(0x12f)]!==c[F(0x140)]||!this[F(0x144)]())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c[F(0x180)]);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this['_select']['value'],f=this[F(0x18d)](e);this[F(0x14f)](this['_getInteractiveStepValue'](this[F(0x1a7)],d,f),e,f),c[F(0x13c)]();}['_finishDragInteractionForPointerEvent'](c,d){const G=q;if(this['_dragPointerId']!==c['pointerId'])return;this['_finishDragInteraction'](d,c[G(0x140)]);}['_finishDragInteraction'](c,d){const H=q;if(this[H(0x12f)]==null)return;this[H(0x12f)]=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this[H(0x11b)]['hasPointerCapture'](d))this[H(0x11b)]['releasePointerCapture'](d);}catch{}this[H(0x13e)](c);}['_handleStepperPointerDown'](c,d){const I=q;if(this[I(0x164)])return;if(!this[I(0x144)]()){if(!this[I(0x1a8)]())return;}this[I(0x11d)](!![]),this[I(0x149)]=c['pointerId'],this[I(0x131)]=d,this[I(0x19c)](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this[I(0x154)]=window[I(0x183)](()=>{const J=I;this['_stepperRepeatInterval']=window['setInterval'](()=>this['_applyStepPreview'](this[J(0x131)]),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const K=q;if(this[K(0x149)]!==c['pointerId'])return;this['_finishStepperInteraction'](![]);}['_finishStepperInteraction'](c){const L=q;if(this['_stepperPointerId']==null)return;this[L(0x149)]=null,this[L(0x131)]=0x0,this[L(0x15d)](),this[L(0x147)](),this['_finishPreviewSession'](c);}[q(0x156)](){const M=q,c=this['_select']['selectedOptions']['item'](0x0);if(!c)return;const d=c['dataset'][M(0x148)];if(d==='fixed'){this['_commitValue'](c[M(0x134)]);return;}if(d==='custom'){this[M(0x129)]=!![],this['_updateValue'](),requestAnimationFrame(()=>{const N=M;this[N(0x16b)]['focus'](),this[N(0x16b)]['select']();});return;}const e=c['value'];this['_lastNumericUnit']=e,this[M(0x129)]=![];const f=parseNumericStyleInputValue(this[M(0x118)]);if(f['kind']==='numeric'){const i=this['_convertNumericValue'](f,e);this[M(0x17c)](i);return;}const g=this[M(0x192)](e);if(g!=null){this['_commitValue'](g);return;}if(f[M(0x148)]===M(0x187)){this[M(0x120)](),this[M(0x16b)][M(0x16f)]();return;}const h=Number(this[M(0x16b)]['value']);if(!Number[M(0x127)](h)){this[M(0x145)](h,e);return;}this['_commitValue'](''),this['_input']['focus']();}[q(0x136)](){const O=q,c=this['_select']['selectedOptions'][O(0x117)](0x0),d=c?.[O(0x163)][O(0x148)];if(d===O(0x13b))return;if(d===O(0x1a6)){this[O(0x17c)](this['_input'][O(0x134)]);return;}const e=this[O(0x16b)]['value']?.['trim']()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[O(0x127)](f))this[O(0x1a5)]=this[O(0x150)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.[O(0x134)]??''));}[q(0x120)](){const P=q;if(!this['_input']||!this['_select'])return;if(this[P(0x130)]==null)this[P(0x15e)]();const c=this[P(0x15c)](this[P(0x14b)]??this['_value']);this[P(0x16b)][P(0x134)]=c['inputValue'],this['_input'][P(0x12c)]['display']=c[P(0x14c)]?'':'none',this['_input'][P(0x16e)]=this['_readOnly']||!c['inputEnabled'],this['_select']['value']=c[P(0x157)],this['_autoSizeSelect']();if(c['mode']==='unit'&&c[P(0x166)]!=null)this['_lastNumericUnit']=c['selectedUnit'];if(c['mode']==='unit'&&c[P(0x146)]!==''){const f=Number(c[P(0x146)]);if(!Number[P(0x127)](f))this[P(0x1a5)]=this[P(0x150)](f);}const d=this['_units']['length']>0x0,e=this['_readOnly']||(!d||c['mode']==='custom');this[P(0x11b)][P(0x16e)]=e,this['_increaseButton']['disabled']=e,this['_decreaseButton']['disabled']=e,this[P(0x152)]();}['_getDisplayState'](c){const Q=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this[Q(0x129)])return this[Q(0x11f)](d[Q(0x197)]);if(d[Q(0x18a)]&&this['_units']['length']&&!this['_units']['includes'](d[Q(0x18a)]))return this[Q(0x11f)](c);const f=resolveNumericStyleInputSelectedUnit(d[Q(0x18a)],this['_lastNumericUnit'],this['_units'])??'';return{'mode':'unit','inputValue':d[Q(0x197)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[Q(0x115)]['includes'](f)?f:this[Q(0x17f)][Q(0x134)]||customOptionValue,'selectedUnit':f};}if(d['kind']===Q(0x19b)){if(!this[Q(0x129)]&&this['_fixedValues']['includes'](d['text']))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[Q(0x19b)]};return this['_createCustomDisplayState'](d[Q(0x19b)]);}if(this['_preferCustomMode'])return this[Q(0x11f)]('');const e=this['_lastNumericUnit']??this[Q(0x115)][0x0]??'';if(this['_units'][Q(0x16a)](e))return{'mode':Q(0x18a),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}['_createCustomDisplayState'](c){const R=q;if(!this[R(0x1a2)]&&this[R(0x115)][R(0x171)])return{'mode':R(0x18a),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x15e)](){const S=q,c=this[S(0x17f)]['value'];this['_select'][S(0x18f)]();if(this[S(0x115)][S(0x171)]){const d=document[S(0x188)](S(0x14e));d[S(0x167)]=S(0x13a);for(const e of this['_units'])d[S(0x12d)](this[S(0x17a)](getNumericStyleInputUnitLabel(e),e,S(0x18a)));this['_select'][S(0x12d)](d);}if(this[S(0x159)]['length']){const f=document[S(0x188)](S(0x14e));f[S(0x167)]=S(0x176);for(const g of this[S(0x159)])f[S(0x12d)](this[S(0x17a)](g,g,'fixed'));this['_select'][S(0x12d)](f);}if(this[S(0x1a2)]||this['_select']['options'][S(0x171)]===0x0)this['_select'][S(0x12d)](this[S(0x17a)](S(0x1a6),customOptionValue,S(0x1a6)));if(c!=='')this[S(0x17f)][S(0x134)]=c;else{if(this[S(0x17f)]['querySelector']('option[value=\x22\x22]'))this['_select']['value']='';}}[q(0x17a)](c,d,e){const T=q,f=document['createElement']('option');return f[T(0x19b)]=c,f['value']=d,f[T(0x163)]['kind']=e,f;}['_autoSizeSelect'](){const U=q;if(!this[U(0x17d)]||!this[U(0x17f)])return;const c=this['_select'][U(0x172)][U(0x117)](0x0);this['_measure']['textContent']=c?.[U(0x19b)]??'';const d=this['_measure']['offsetWidth'];d>0x0?this['_select'][U(0x12c)]['width']=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const V=q;if(!this['_input']||!this['_select'])return;this[V(0x16b)]['readOnly']=this['_readOnly'],this[V(0x17f)]['disabled']=this[V(0x164)];}[q(0x11a)](c,d){if(d==null)return this['_value'];const e=c['unit'],f=this['_unitValueConverter']?.({'value':c['value'],'numberText':c['numberText'],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const W=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number['NaN'],'numberText':'','rawValue':this[W(0x118)],'fromUnit':'','toUnit':c})?.[W(0x132)]();return d?d:null;}[q(0x121)](c){const X=q,d=parseNumericStyleInputValue(this['_value']);if(d['kind']===X(0x199)){const e=this['_convertNumericValue'](d,c),f=parseNumericStyleInputValue(e);if(f['kind']===X(0x199))return f[X(0x134)];return d['value'];}if(this['_input'][X(0x134)]?.[X(0x132)]()){const g=Number(this['_input'][X(0x134)]);if(!Number[X(0x127)](g))return g;}return this[X(0x1a5)];}[q(0x145)](c,d){const Y=q;this[Y(0x1a5)]=this['_clampNumericValue'](c),this[Y(0x133)]=d,this[Y(0x17c)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}['_previewNumericValue'](c,d,e){const Z=q;this[Z(0x1a5)]=this['_clampNumericValue'](c),this[Z(0x133)]=d;const f=e??this['_getEffectiveStep'](d);this[Z(0x18b)](combineNumericStyleInputValue(this[Z(0x174)](this['_lastNumericValue'],f),d),![],!![]);}['_commitValue'](c){const a0=q;this[a0(0x18b)](c,!![],![]);}[q(0x18b)](c,d,e){const a1=q,f=c??'';if(!d&&!e&&this[a1(0x130)]!=null)return;const g=this['_value'];this[a1(0x118)]=f;if(e)this[a1(0x14b)]=f;else{if(this[a1(0x14b)]!=null){if(f===this['_displayValueLock']||f!==g)this[a1(0x14b)]=null;}}this[a1(0x129)]=![],this[a1(0x120)]();if(g!==f){e&&(this['_previewChanged']=!![],this[a1(0x178)][a1(0x17e)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a2=q;this[a2(0x130)]==null&&(this['_previewStartValue']=this[a2(0x118)],this[a2(0x158)]=![]);}['_finishPreviewSession'](c){const a3=q;if(this[a3(0x130)]==null)return;const d=this[a3(0x130)],e=this[a3(0x14b)]??this['_value'],f=this['_previewChanged']&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this[a3(0x14b)]=null,this[a3(0x118)]=d,this['_updateValue']()):(this['_displayValueLock']=e,this['_updateValue']()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x14d)](c){const a4=q,d=this[a4(0x17f)]['value'],e=this[a4(0x18d)](d);this[a4(0x14f)](this['_getInteractiveStepValue'](this[a4(0x121)](d),c,e),d,e);}['_stopStepperRepeat'](){const a5=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this['_stepperRepeatTimeout']),this[a5(0x154)]=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this['_stepperRepeatInterval']),this[a5(0x13d)]=null);}['_attachStepperWindowListeners'](){const a6=q;window['addEventListener'](a6(0x160),this['_windowPointerUpHandler'],!![]),window['addEventListener']('pointercancel',this[a6(0x11c)],!![]),window['addEventListener']('blur',this['_windowBlurHandler']);}[q(0x15b)](){const a7=q;window['addEventListener']('pointermove',this['_windowDragPointerMoveHandler'],!![]),window[a7(0x14a)](a7(0x160),this[a7(0x12a)],!![]),window['addEventListener'](a7(0x196),this[a7(0x151)],!![]),window['addEventListener']('blur',this['_windowDragBlurHandler']);}[q(0x15d)](){const a8=q;window[a8(0x189)]('pointerup',this['_windowPointerUpHandler'],!![]),window[a8(0x189)]('pointercancel',this[a8(0x11c)],!![]),window[a8(0x189)](a8(0x12b),this[a8(0x161)]);}[q(0x1a1)](){const a9=q;window['removeEventListener']('pointermove',this[a9(0x138)],!![]),window['removeEventListener'](a9(0x160),this[a9(0x12a)],!![]),window[a9(0x189)](a9(0x196),this[a9(0x151)],!![]),window[a9(0x189)]('blur',this[a9(0x19a)]);}[q(0x113)](c){const aa=q,d=Math['abs'](c),e=Math['min'](d,0x14)/0x5,f=Math[aa(0x155)](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[aa(0x155)](d-0x3c,0x0)/0x2,h=Math[aa(0x193)](e+f+g);return Math['sign'](c)*h;}[q(0x18d)](c){const ab=q;return resolveNumericStyleInputStep(this[ab(0x125)],this[ab(0x182)],c);}['_getInteractiveStepValue'](c,d,e){const ac=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number[ac(0x15a)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this[ac(0x150)](this['_roundToStepPrecision'](m,f));}[q(0x174)](c,d){const ad=q,e=d??this['_step'];return formatNumericStyleInputNumber(this[ad(0x179)](c,e),this['_getStepPrecision'](e));}[q(0x179)](c,d){const ae=q,e=this[ae(0x18e)](d),f=0xa**e;return Math[ae(0x17b)](c*f)/f;}['_getStepPrecision'](c){const af=q,d=(''+(c??this[af(0x182)]))['toLowerCase']();if(d['includes']('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f[af(0x16a)]('.')?f['length']-f[af(0x124)]('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d['length']-e-0x1:0x0;}['_switchToUnitModeForInteraction'](){const ag=q,c=this['_lastNumericUnit']??this[ag(0x115)][0x0];if(c==null)return![];this[ag(0x129)]=![];const d=this[ag(0x192)](c);if(d!=null)return this[ag(0x17c)](d),this['_isSelectedUnitMode']();return this['_applyNumericValue'](this[ag(0x1a5)],c),this[ag(0x144)]();}[q(0x144)](){const ah=q;return this['_select']['selectedOptions']['item'](0x0)?.[ah(0x163)]['kind']==='unit';}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x150)](c){const ai=q;let d=c;if(this['_min']!=null)d=Math[ai(0x155)](this[ai(0x1a3)],d);if(this[ai(0x19f)]!=null)d=Math[ai(0x128)](this['_max'],d);return d;}}customElements[q(0x16c)]('node-projects-numeric-style-input',NumericStyleInput);