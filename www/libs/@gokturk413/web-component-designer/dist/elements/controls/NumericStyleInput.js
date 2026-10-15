const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0x12c))/0x1+parseInt(p(0x130))/0x2*(-parseInt(p(0xf8))/0x3)+parseInt(p(0x190))/0x4+-parseInt(p(0x123))/0x5+parseInt(p(0x17a))/0x6*(parseInt(p(0x13b))/0x7)+-parseInt(p(0x16b))/0x8+-parseInt(p(0x100))/0x9*(-parseInt(p(0x124))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x22e95));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xf5;const e=a();let f=e[c];return f;}import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x143)]=css`
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
  `;static [q(0x17b)]=html`
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
  `;[q(0x18d)]='';get['value'](){const r=q;return this[r(0x18d)];}set[q(0x173)](c){this['_setValue'](c,![],![]);}[q(0x104)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['valuePreviewFinished']=new TypedEvent();[q(0x131)]=['px','%','pt'];get['units'](){return[...this['_units']];}set[q(0x159)](c){const s=q;this[s(0x131)]=this['_normalizeOptionValues'](c),this['_lastNumericUnit']=this['_units'][0x0]??this[s(0x133)],this[s(0x121)]();}[q(0xf5)]=[];get[q(0x138)](){return[...this['_fixedValues']];}set[q(0x138)](c){const t=q;this['_fixedValues']=this['_normalizeOptionValues'](c),this[t(0x121)]();}[q(0x165)]=0x1;get[q(0x166)](){return this['_step'];}set[q(0x166)](c){const u=q;this[u(0x165)]=Number['isFinite'](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0x169)](){const v=q;return{...this[v(0x150)]};}set[q(0x169)](c){this['_unitSteps']=c??{};}[q(0xff)]=null;get[q(0x139)](){const w=q;return this[w(0xff)];}set[q(0x139)](c){const x=q;this[x(0xff)]=Number['isFinite'](c)?c:null;}[q(0x18c)]=null;get[q(0x114)](){const y=q;return this[y(0x18c)];}set[q(0x114)](c){const z=q;this['_max']=Number[z(0x171)](c)?c:null;}[q(0x172)]=![];get[q(0x158)](){return this['_readOnly'];}set['readOnly'](c){const A=q;this[A(0x172)]=c,this[A(0x14a)]();}get['isInPreview'](){const B=q;return this[B(0x13c)]!=null;}['_allowCustomValue']=!![];get[q(0x14d)](){const C=q;return this[C(0x137)];}set['allowCustomValue'](c){const D=q;this['_allowCustomValue']=c,this[D(0x121)]();}['_unitValueConverter'];get['unitValueConverter'](){return this['_unitValueConverter'];}set[q(0x105)](c){this['_unitValueConverter']=c;}['_input'];['_select'];['_measure'];[q(0x13f)];['_increaseButton'];[q(0x147)];[q(0x109)]=0x0;[q(0x133)]='px';[q(0x136)]=null;[q(0x185)]=0x0;[q(0xfe)]=0x0;['_appliedDragSteps']=0x0;['_previewStartValue']=null;[q(0x16d)]=![];[q(0x176)]=null;[q(0x170)]=null;[q(0xf7)]=0x0;['_stepperRepeatTimeout']=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0x156)](c);['_windowDragPointerUpHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x128)](c,!![]);['_windowDragBlurHandler']=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);[q(0x152)]=c=>this[q(0x12e)](c);['_windowBlurHandler']=()=>this[q(0x11c)](![]);['_preferCustomMode']=![];constructor(){const E=q;super(),this[E(0x154)](),this[E(0x184)]=this['_getDomElement']('input'),this['_select']=this[E(0x116)](E(0x103)),this['_measure']=this['_getDomElement'](E(0xfa)),this[E(0x13f)]=this['_getDomElement']('scrubber'),this[E(0x189)]=this['_getDomElement']('increase'),this['_decreaseButton']=this[E(0x116)](E(0x107));}['ready'](){const F=q;this['_parseAttributesToProperties'](),this[F(0x135)](),this['_updateValue']();}['_wireEvents'](){const G=q;this[G(0x184)][G(0x17c)](G(0x11e),()=>this[G(0x14c)]()),this[G(0x184)][G(0x17c)]('keydown',c=>{const H=G;c[H(0x167)]===H(0x11f)&&(this[H(0x14c)](),this[H(0x184)][H(0x15b)]());}),this['_scrubberButton'][G(0x17c)](G(0x16e),c=>this['_handlePointerDown'](c)),this['_select']['addEventListener']('change',()=>this['_applySelectedMode']()),this['_increaseButton']['addEventListener'](G(0x16e),c=>this[G(0x113)](c,0x1)),this['_decreaseButton']['addEventListener']('pointerdown',c=>this[G(0x113)](c,-0x1));}['_handlePointerDown'](c){const I=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this['_dragPointerId']=c['pointerId'],this[I(0x185)]=c[I(0x117)],this[I(0xfe)]=this[I(0x129)](this['_select'][I(0x173)]),this['_appliedDragSteps']=0x0,this[I(0x182)](),this[I(0xfc)]();try{this['_scrubberButton']['setPointerCapture'](c[I(0x146)]);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const J=q;if(this['_dragPointerId']!==c[J(0x146)]||!this[J(0x186)]())return;const d=this['_calculateDraggedStepCount'](this[J(0x185)]-c['clientY']);if(d===this['_appliedDragSteps'])return;this[J(0x10f)]=d;const e=this[J(0x12a)]['value'],f=this[J(0x14b)](e);this[J(0x11d)](this['_getInteractiveStepValue'](this['_dragStartNumericValue'],d,f),e,f),c['preventDefault']();}['_finishDragInteractionForPointerEvent'](c,d){const K=q;if(this[K(0x136)]!==c['pointerId'])return;this[K(0x144)](d,c['pointerId']);}['_finishDragInteraction'](c,d){const L=q;if(this[L(0x136)]==null)return;this['_dragPointerId']=null,this[L(0x10f)]=0x0,this[L(0x11b)]();if(d!=null)try{if(this['_scrubberButton'][L(0x106)](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this['_finishPreviewSession'](c);}[q(0x113)](c,d){const M=q;if(this[M(0x172)])return;if(!this[M(0x186)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[M(0x11c)](!![]),this[M(0x170)]=c[M(0x146)],this[M(0xf7)]=d,this['_attachStepperWindowListeners'](),this[M(0x182)](),this[M(0x10b)](d),this[M(0x188)]=window['setTimeout'](()=>{const N=M;this[N(0x10a)]=window[N(0x17d)](()=>this[N(0x10b)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const O=q;if(this['_stepperPointerId']!==c[O(0x146)])return;this[O(0x11c)](![]);}[q(0x11c)](c){const P=q;if(this[P(0x170)]==null)return;this['_stepperPointerId']=null,this['_stepperDirection']=0x0,this[P(0x16f)](),this['_stopStepperRepeat'](),this['_finishPreviewSession'](c);}['_applySelectedMode'](){const Q=q,c=this[Q(0x12a)]['selectedOptions'][Q(0x12b)](0x0);if(!c)return;const d=c['dataset'][Q(0x160)];if(d==='fixed'){this['_commitValue'](c['value']);return;}if(d===Q(0x125)){this['_preferCustomMode']=!![],this['_updateValue'](),requestAnimationFrame(()=>{this['_input']['focus'](),this['_input']['select']();});return;}const e=c['value'];this['_lastNumericUnit']=e,this[Q(0x151)]=![];const f=parseNumericStyleInputValue(this[Q(0x18d)]);if(f[Q(0x160)]===Q(0x148)){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this[Q(0x119)](e);if(g!=null){this[Q(0x164)](g);return;}if(f['kind']===Q(0x14e)){this['_updateValue'](),this[Q(0x184)][Q(0x110)]();return;}const h=Number(this['_input'][Q(0x173)]);if(!Number['isNaN'](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this[Q(0x184)]['focus']();}[q(0x14c)](){const R=q,c=this[R(0x12a)][R(0x17e)]['item'](0x0),d=c?.['dataset'][R(0x160)];if(d===R(0x18a))return;if(d===R(0x125)){this['_commitValue'](this[R(0x184)][R(0x173)]);return;}const e=this['_input'][R(0x173)]?.[R(0xfd)]()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[R(0x187)](f))this['_lastNumericValue']=this['_clampNumericValue'](f);this[R(0x164)](combineNumericStyleInputValue(e,c?.['value']??''));}['_updateValue'](){const S=q;if(!this[S(0x184)]||!this['_select'])return;if(this[S(0x13c)]==null)this[S(0x102)]();const c=this[S(0x141)](this['_displayValueLock']??this['_value']);this['_input']['value']=c[S(0x15d)],this['_input'][S(0x143)][S(0x162)]=c[S(0x108)]?'':'none',this['_input']['disabled']=this[S(0x172)]||!c['inputEnabled'],this['_select']['value']=c['selectValue'],this[S(0x183)]();if(c[S(0x118)]===S(0x111)&&c[S(0x16a)]!=null)this['_lastNumericUnit']=c[S(0x16a)];if(c['mode']==='unit'&&c[S(0x15d)]!==''){const f=Number(c['inputValue']);if(!Number[S(0x187)](f))this[S(0x109)]=this['_clampNumericValue'](f);}const d=this['_units'][S(0x12f)]>0x0,e=this['_readOnly']||(!d||c[S(0x118)]==='custom');this[S(0x13f)]['disabled']=e,this[S(0x189)][S(0x127)]=e,this[S(0x147)]['disabled']=e,this['_applyReadonlyState']();}[q(0x141)](c){const T=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this['_preferCustomMode'])return this[T(0x15f)](d['numberText']);if(d[T(0x111)]&&this[T(0x131)][T(0x12f)]&&!this[T(0x131)][T(0x177)](d[T(0x111)]))return this[T(0x15f)](c);const f=resolveNumericStyleInputSelectedUnit(d[T(0x111)],this['_lastNumericUnit'],this[T(0x131)])??'';return{'mode':'unit','inputValue':d[T(0x101)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[T(0x131)][T(0x177)](f)?f:this[T(0x12a)]['value']||customOptionValue,'selectedUnit':f};}if(d[T(0x160)]===T(0x12d)){if(!this['_preferCustomMode']&&this[T(0xf5)]['includes'](d['text']))return{'mode':T(0x18a),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this['_createCustomDisplayState'](d[T(0x12d)]);}if(this[T(0x151)])return this['_createCustomDisplayState']('');const e=this[T(0x133)]??this['_units'][0x0]??'';if(this['_units']['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}[q(0x15f)](c){const U=q;if(!this['_allowCustomValue']&&this[U(0x131)]['length'])return{'mode':U(0x111),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x102)](){const V=q,c=this[V(0x12a)][V(0x173)];this['_select'][V(0x120)]();if(this[V(0x131)][V(0x12f)]){const d=document['createElement']('optgroup');d['label']='Units';for(const e of this[V(0x131)])d[V(0x145)](this['_createOption'](getNumericStyleInputUnitLabel(e),e,V(0x111)));this['_select']['appendChild'](d);}if(this[V(0xf5)]['length']){const f=document['createElement']('optgroup');f[V(0x11a)]=V(0x132);for(const g of this['_fixedValues'])f[V(0x145)](this[V(0x10c)](g,g,'fixed'));this['_select'][V(0x145)](f);}if(this['_allowCustomValue']||this['_select'][V(0x163)][V(0x12f)]===0x0)this[V(0x12a)][V(0x145)](this[V(0x10c)](V(0x125),customOptionValue,'custom'));if(c!=='')this[V(0x12a)][V(0x173)]=c;else{if(this['_select'][V(0x13d)](V(0x10d)))this['_select']['value']='';}}['_createOption'](c,d,e){const W=q,f=document[W(0x15a)](W(0x149));return f[W(0x12d)]=c,f[W(0x173)]=d,f['dataset'][W(0x160)]=e,f;}[q(0x183)](){const X=q;if(!this['_measure']||!this['_select'])return;const c=this[X(0x12a)]['selectedOptions'][X(0x12b)](0x0);this['_measure'][X(0xf6)]=c?.['text']??'';const d=this[X(0x13e)]['offsetWidth'];d>0x0?this['_select']['style'][X(0x168)]=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const Y=q;if(!this[Y(0x184)]||!this[Y(0x12a)])return;this['_input']['readOnly']=this[Y(0x172)],this[Y(0x12a)]['disabled']=this['_readOnly'];}['_convertNumericValue'](c,d){const Z=q;if(d==null)return this[Z(0x18d)];const e=c['unit'],f=this[Z(0x140)]?.({'value':c[Z(0x173)],'numberText':c[Z(0x101)],'rawValue':this[Z(0x18d)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const a0=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number[a0(0x10e)],'numberText':'','rawValue':this[a0(0x18d)],'fromUnit':'','toUnit':c})?.[a0(0xfd)]();return d?d:null;}[q(0x129)](c){const a1=q,d=parseNumericStyleInputValue(this[a1(0x18d)]);if(d[a1(0x160)]===a1(0x148)){const e=this[a1(0x175)](d,c),f=parseNumericStyleInputValue(e);if(f[a1(0x160)]===a1(0x148))return f['value'];return d[a1(0x173)];}if(this['_input']['value']?.[a1(0xfd)]()){const g=Number(this['_input']['value']);if(!Number['isNaN'](g))return g;}return this[a1(0x109)];}[q(0x174)](c,d){const a2=q;this['_lastNumericValue']=this[a2(0x161)](c),this[a2(0x133)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this[a2(0x109)]),d));}[q(0x11d)](c,d,e){const a3=q;this[a3(0x109)]=this['_clampNumericValue'](c),this[a3(0x133)]=d;const f=e??this['_getEffectiveStep'](d);this[a3(0x18f)](combineNumericStyleInputValue(this[a3(0x126)](this['_lastNumericValue'],f),d),![],!![]);}['_commitValue'](c){this['_setValue'](c,!![],![]);}[q(0x18f)](c,d,e){const a4=q,f=c??'';if(!d&&!e&&this[a4(0x13c)]!=null)return;const g=this[a4(0x18d)];this[a4(0x18d)]=f;if(e)this[a4(0x176)]=f;else{if(this['_displayValueLock']!=null){if(f===this[a4(0x176)]||f!==g)this[a4(0x176)]=null;}}this[a4(0x151)]=![],this['_updateValue']();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged']['emit']({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a5=q;this[a5(0x13c)]==null&&(this[a5(0x13c)]=this['_value'],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a6=q;if(this['_previewStartValue']==null)return;const d=this[a6(0x13c)],e=this[a6(0x176)]??this[a6(0x18d)],f=this['_previewChanged']&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this['_displayValueLock']=null,this['_value']=d,this['_updateValue']()):(this['_displayValueLock']=e,this['_updateValue']()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x10b)](c){const a7=q,d=this['_select']['value'],e=this['_getEffectiveStep'](d);this['_previewNumericValue'](this[a7(0x15c)](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0x17f)](){const a8=q;this[a8(0x188)]!=null&&(window['clearTimeout'](this[a8(0x188)]),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this[a8(0x10a)]),this[a8(0x10a)]=null);}[q(0x180)](){const a9=q;window['addEventListener'](a9(0x134),this[a9(0xfb)],!![]),window['addEventListener']('pointercancel',this[a9(0x152)],!![]),window[a9(0x17c)](a9(0x15b),this['_windowBlurHandler']);}['_attachDragWindowListeners'](){const aa=q;window[aa(0x17c)](aa(0x14f),this['_windowDragPointerMoveHandler'],!![]),window['addEventListener']('pointerup',this[aa(0x155)],!![]),window['addEventListener']('pointercancel',this[aa(0x157)],!![]),window['addEventListener']('blur',this['_windowDragBlurHandler']);}[q(0x16f)](){const ab=q;window[ab(0x142)](ab(0x134),this['_windowPointerUpHandler'],!![]),window['removeEventListener'](ab(0x16c),this['_windowPointerCancelHandler'],!![]),window['removeEventListener'](ab(0x15b),this['_windowBlurHandler']);}['_detachDragWindowListeners'](){const ac=q;window[ac(0x142)]('pointermove',this[ac(0x153)],!![]),window['removeEventListener'](ac(0x134),this['_windowDragPointerUpHandler'],!![]),window['removeEventListener'](ac(0x16c),this[ac(0x157)],!![]),window['removeEventListener']('blur',this[ac(0x178)]);}['_calculateDraggedStepCount'](c){const ad=q,d=Math[ad(0x122)](c),e=Math[ad(0x139)](d,0x14)/0x5,f=Math['max'](Math[ad(0x139)](d-0x14,0x28),0x0)/0x3,g=Math[ad(0x114)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math[ad(0x179)](c)*h;}[q(0x14b)](c){const ae=q;return resolveNumericStyleInputStep(this[ae(0x150)],this['_step'],c);}['_getInteractiveStepValue'](c,d,e){const af=q,f=e??this['_step'],g=this[af(0x161)](c);if(!Number['isFinite'](g)||!Number[af(0x171)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[af(0x115)](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[af(0x15e)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this[af(0x161)](this['_roundToStepPrecision'](m,f));}[q(0x126)](c,d){const e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}[q(0x18e)](c,d){const e=this['_getStepPrecision'](d),f=0xa**e;return Math['round'](c*f)/f;}['_getStepPrecision'](c){const ag=q,d=(''+(c??this['_step']))[ag(0xf9)]();if(d['includes']('e-')){const [f,g]=d['split']('e-'),h=Number(g),i=f[ag(0x177)]('.')?f['length']-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d['indexOf']('.');return e>=0x0?d[ag(0x12f)]-e-0x1:0x0;}[q(0x13a)](){const ah=q,c=this[ah(0x133)]??this[ah(0x131)][0x0];if(c==null)return![];this[ah(0x151)]=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this['_commitValue'](d),this[ah(0x186)]();return this[ah(0x174)](this[ah(0x109)],c),this['_isSelectedUnitMode']();}[q(0x186)](){const ai=q;return this['_select'][ai(0x17e)]['item'](0x0)?.[ai(0x112)][ai(0x160)]==='unit';}[q(0x181)](c){return normalizeNumericStyleInputOptionValues(c);}['_clampNumericValue'](c){const aj=q;let d=c;if(this['_min']!=null)d=Math['max'](this[aj(0xff)],d);if(this['_max']!=null)d=Math[aj(0x139)](this[aj(0x18c)],d);return d;}}function a(){const ak=['_applyNumericValue','_convertNumericValue','_displayValueLock','includes','_windowDragBlurHandler','sign','4320eGjQZC','template','addEventListener','setInterval','selectedOptions','_stopStepperRepeat','_attachStepperWindowListeners','_normalizeOptionValues','_startPreviewSession','_autoSizeSelect','_input','_dragStartY','_isSelectedUnitMode','isNaN','_stepperRepeatTimeout','_increaseButton','fixed','define','_max','_value','_roundToStepPrecision','_setValue','871888GVmAYa','_fixedValues','textContent','_stepperDirection','3MIVZwe','toLowerCase','measure','_windowPointerUpHandler','_attachDragWindowListeners','trim','_dragStartNumericValue','_min','1449bkABbC','numberText','_renderSelectOptions','select','valueChanged','unitValueConverter','hasPointerCapture','decrease','inputVisible','_lastNumericValue','_stepperRepeatInterval','_applyStepPreview','_createOption','option[value=\x22\x22]','NaN','_appliedDragSteps','focus','unit','dataset','_handleStepperPointerDown','max','round','_getDomElement','clientY','mode','_resolveCurrentValueForUnit','label','_detachDragWindowListeners','_finishStepperInteraction','_previewNumericValue','change','Enter','replaceChildren','_updateValue','abs','779770RBKhCU','26600rtKzKH','custom','_formatInteractiveNumericValue','disabled','_finishDragInteractionForPointerEvent','_readEditableNumericValue','_select','item','28652LehKNK','text','_handleWindowStepperPointerEnd','length','122602gimtBV','_units','Values','_lastNumericUnit','pointerup','_wireEvents','_dragPointerId','_allowCustomValue','fixedValues','min','_switchToUnitModeForInteraction','224pLUYro','_previewStartValue','querySelector','_measure','_scrubberButton','_unitValueConverter','_getDisplayState','removeEventListener','style','_finishDragInteraction','appendChild','pointerId','_decreaseButton','numeric','option','_applyReadonlyState','_getEffectiveStep','_applyTypedValue','allowCustomValue','empty','pointermove','_unitSteps','_preferCustomMode','_windowPointerCancelHandler','_windowDragPointerMoveHandler','_restoreCachedInititalValues','_windowDragPointerUpHandler','_handleWindowDragPointerMove','_windowDragPointerCancelHandler','readOnly','units','createElement','blur','_getInteractiveStepValue','inputValue','ceil','_createCustomDisplayState','kind','_clampNumericValue','display','options','_commitValue','_step','step','key','width','unitSteps','selectedUnit','2242944rUgMLU','pointercancel','_previewChanged','pointerdown','_detachStepperWindowListeners','_stepperPointerId','isFinite','_readOnly','value'];a=function(){return ak;};return a();}customElements[q(0x18b)]('node-projects-numeric-style-input',NumericStyleInput);