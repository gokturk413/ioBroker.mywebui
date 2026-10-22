function b(c,d){c=c-0xa6;const e=a();let f=e[c];return f;}function a(){const ak=['offsetWidth','_applySelectedMode','ready','_windowPointerCancelHandler','2675220SFyTsh','_dragStartNumericValue','58bGjTxB','_applyStepPreview','selectedOptions','isFinite','step','9246oQQbaA','round','_isSelectedUnitMode','valuePreviewChanged','_roundToStepPrecision','_fixedValues','_previewStartValue','_getInteractiveStepValue','_finishStepperInteraction','_handleWindowStepperPointerEnd','_applyNumericValue','fixed','_renderSelectOptions','_stepperDirection','ceil','item','removeEventListener','emit','unitValueConverter','_appliedDragSteps','_handleStepperPointerDown','_decreaseButton','style','_finishDragInteraction','releasePointerCapture','_windowDragPointerCancelHandler','_attachStepperWindowListeners','_formatInteractiveNumericValue','78dYGeek','indexOf','_windowBlurHandler','addEventListener','_switchToUnitModeForInteraction','_allowCustomValue','_autoSizeSelect','_previewChanged','_setValue','_dragStartY','length','option','readOnly','_stopStepperRepeat','isNaN','_step','243460zfhYYf','_stepperRepeatInterval','_max','_input','_windowDragBlurHandler','split','setPointerCapture','inputEnabled','key','_lastNumericUnit','_startPreviewSession','_scrubberButton','pointerId','kind','_lastNumericValue','4930222NOVqLL','blur','_readOnly','preventDefault','_measure','pointercancel','focus','30eXZEYX','disabled','_dragPointerId','units','_parseAttributesToProperties','_detachDragWindowListeners','_displayValueLock','_commitValue','custom','_detachStepperWindowListeners','_getStepPrecision','_getDomElement','_createOption','max','_windowPointerUpHandler','numeric','345393vhbWCA','min','_updateValue','text','_attachDragWindowListeners','1469848AaCvEu','72vnDezU','_normalizeOptionValues','_stepperPointerId','_stepperRepeatTimeout','isInPreview','_value','change','_unitValueConverter','includes','_createCustomDisplayState','_getEffectiveStep','_applyReadonlyState','_preferCustomMode','_clampNumericValue','_units','inputValue','_readEditableNumericValue','clientY','_finishDragInteractionForPointerEvent','_min','empty','selectValue','select','createElement','scrubber','measure','mode','_applyTypedValue','_previewNumericValue','NaN','_handleWindowDragPointerMove','_increaseButton','_finishPreviewSession','value','_getDisplayState','_select','label','pointerup','dataset','_convertNumericValue','_unitSteps','12292CtLkCB','abs','unitSteps','node-projects-numeric-style-input','unit','_windowDragPointerUpHandler','numberText'];a=function(){return ak;};return a();}const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=-parseInt(p(0xc5))/0x1*(parseInt(p(0xb8))/0x2)+parseInt(p(0xca))/0x3*(parseInt(p(0x122))/0x4)+-parseInt(p(0xc3))/0x5+-parseInt(p(0xe6))/0x6*(parseInt(p(0xf6))/0x7)+parseInt(p(0x121))/0x8+parseInt(p(0x11c))/0x9+parseInt(p(0x10c))/0xa*(parseInt(p(0x105))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4400a));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0xe0)]=css`
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
  `;[q(0x127)]='';get[q(0xb0)](){const r=q;return this[r(0x127)];}set[q(0xb0)](c){const s=q;this[s(0xee)](c,![],![]);}['valueChanged']=new TypedEvent();[q(0xcd)]=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get['units'](){return[...this['_units']];}set[q(0x10f)](c){const t=q;this[t(0x130)]=this[t(0x123)](c),this['_lastNumericUnit']=this['_units'][0x0]??this[t(0xff)],this[t(0x11e)]();}[q(0xcf)]=[];get['fixedValues'](){return[...this['_fixedValues']];}set['fixedValues'](c){const u=q;this['_fixedValues']=this[u(0x123)](c),this[u(0x11e)]();}['_step']=0x1;get['step'](){return this['_step'];}set[q(0xc9)](c){const v=q;this[v(0xf5)]=Number['isFinite'](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0xba)](){const w=q;return{...this[w(0xb7)]};}set['unitSteps'](c){const x=q;this[x(0xb7)]=c??{};}[q(0x135)]=null;get['min'](){return this['_min'];}set['min'](c){const y=q;this[y(0x135)]=Number['isFinite'](c)?c:null;}['_max']=null;get['max'](){return this['_max'];}set['max'](c){this['_max']=Number['isFinite'](c)?c:null;}['_readOnly']=![];get['readOnly'](){return this['_readOnly'];}set['readOnly'](c){const z=q;this[z(0x107)]=c,this['_applyReadonlyState']();}get[q(0x126)](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){const A=q;return this[A(0xeb)];}set['allowCustomValue'](c){this['_allowCustomValue']=c,this['_updateValue']();}[q(0x129)];get[q(0xdc)](){return this['_unitValueConverter'];}set['unitValueConverter'](c){this['_unitValueConverter']=c;}['_input'];['_select'];['_measure'];[q(0x101)];['_increaseButton'];[q(0xdf)];[q(0x104)]=0x0;['_lastNumericUnit']='px';['_dragPointerId']=null;['_dragStartY']=0x0;[q(0xc4)]=0x0;[q(0xdd)]=0x0;['_previewStartValue']=null;[q(0xed)]=![];['_displayValueLock']=null;['_stepperPointerId']=null;[q(0xd7)]=0x0;[q(0x125)]=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this[q(0xad)](c);[q(0xbd)]=c=>this[q(0x134)](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x134)](c,!![]);['_windowDragBlurHandler']=()=>this[q(0xe1)](![]);[q(0x11a)]=c=>this['_handleWindowStepperPointerEnd'](c);[q(0xc2)]=c=>this[q(0xd3)](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);[q(0x12e)]=![];constructor(){const B=q;super(),this['_restoreCachedInititalValues'](),this[B(0xf9)]=this[B(0x117)]('input'),this['_select']=this[B(0x117)]('select'),this['_measure']=this[B(0x117)](B(0xa8)),this[B(0x101)]=this['_getDomElement'](B(0xa7)),this[B(0xae)]=this[B(0x117)]('increase'),this[B(0xdf)]=this[B(0x117)]('decrease');}[q(0xc1)](){const C=q;this[C(0x110)](),this['_wireEvents'](),this[C(0x11e)]();}['_wireEvents'](){const D=q;this['_input']['addEventListener']('change',()=>this[D(0xaa)]()),this[D(0xf9)]['addEventListener']('keydown',c=>{const E=D;c[E(0xfe)]==='Enter'&&(this['_applyTypedValue'](),this['_input'][E(0x106)]());}),this['_scrubberButton'][D(0xe9)]('pointerdown',c=>this['_handlePointerDown'](c)),this[D(0xb2)]['addEventListener'](D(0x128),()=>this['_applySelectedMode']()),this[D(0xae)]['addEventListener']('pointerdown',c=>this[D(0xde)](c,0x1)),this[D(0xdf)]['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const F=q;if(this['_readOnly'])return;if(!this[F(0xcc)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[F(0x10e)]=c[F(0x102)],this['_dragStartY']=c['clientY'],this[F(0xc4)]=this[F(0x132)](this['_select'][F(0xb0)]),this['_appliedDragSteps']=0x0,this[F(0x100)](),this[F(0x120)]();try{this[F(0x101)][F(0xfc)](c['pointerId']);}catch{}c[F(0x108)]();}[q(0xad)](c){const G=q;if(this[G(0x10e)]!==c[G(0x102)]||!this[G(0xcc)]())return;const d=this['_calculateDraggedStepCount'](this[G(0xef)]-c[G(0x133)]);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this['_select'][G(0xb0)],f=this[G(0x12c)](e);this[G(0xab)](this[G(0xd1)](this['_dragStartNumericValue'],d,f),e,f),c[G(0x108)]();}['_finishDragInteractionForPointerEvent'](c,d){const H=q;if(this[H(0x10e)]!==c[H(0x102)])return;this['_finishDragInteraction'](d,c['pointerId']);}['_finishDragInteraction'](c,d){const I=q;if(this[I(0x10e)]==null)return;this[I(0x10e)]=null,this['_appliedDragSteps']=0x0,this[I(0x111)]();if(d!=null)try{if(this['_scrubberButton']['hasPointerCapture'](d))this['_scrubberButton'][I(0xe2)](d);}catch{}this['_finishPreviewSession'](c);}[q(0xde)](c,d){const J=q;if(this[J(0x107)])return;if(!this[J(0xcc)]()){if(!this['_switchToUnitModeForInteraction']())return;}this[J(0xd2)](!![]),this['_stepperPointerId']=c['pointerId'],this[J(0xd7)]=d,this['_attachStepperWindowListeners'](),this['_startPreviewSession'](),this['_applyStepPreview'](d),this[J(0x125)]=window['setTimeout'](()=>{const K=J;this['_stepperRepeatInterval']=window['setInterval'](()=>this[K(0xc6)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}[q(0xd3)](c){const L=q;if(this[L(0x124)]!==c[L(0x102)])return;this[L(0xd2)](![]);}['_finishStepperInteraction'](c){const M=q;if(this['_stepperPointerId']==null)return;this[M(0x124)]=null,this[M(0xd7)]=0x0,this[M(0x115)](),this['_stopStepperRepeat'](),this[M(0xaf)](c);}[q(0xc0)](){const N=q,c=this[N(0xb2)]['selectedOptions']['item'](0x0);if(!c)return;const d=c['dataset']['kind'];if(d===N(0xd5)){this[N(0x113)](c['value']);return;}if(d===N(0x114)){this['_preferCustomMode']=!![],this[N(0x11e)](),requestAnimationFrame(()=>{const O=N;this[O(0xf9)]['focus'](),this[O(0xf9)][O(0x138)]();});return;}const e=c['value'];this[N(0xff)]=e,this[N(0x12e)]=![];const f=parseNumericStyleInputValue(this[N(0x127)]);if(f[N(0x103)]==='numeric'){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this[N(0x113)](g);return;}if(f[N(0x103)]===N(0x136)){this['_updateValue'](),this['_input'][N(0x10b)]();return;}const h=Number(this['_input']['value']);if(!Number[N(0xf4)](h)){this[N(0xd4)](h,e);return;}this['_commitValue'](''),this['_input'][N(0x10b)]();}[q(0xaa)](){const P=q,c=this[P(0xb2)]['selectedOptions']['item'](0x0),d=c?.[P(0xb5)][P(0x103)];if(d==='fixed')return;if(d===P(0x114)){this['_commitValue'](this[P(0xf9)]['value']);return;}const e=this[P(0xf9)]['value']?.['trim']()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[P(0xf4)](f))this['_lastNumericValue']=this[P(0x12f)](f);this[P(0x113)](combineNumericStyleInputValue(e,c?.['value']??''));}['_updateValue'](){const Q=q;if(!this[Q(0xf9)]||!this['_select'])return;if(this['_previewStartValue']==null)this[Q(0xd6)]();const c=this['_getDisplayState'](this[Q(0x112)]??this[Q(0x127)]);this['_input']['value']=c['inputValue'],this[Q(0xf9)][Q(0xe0)]['display']=c['inputVisible']?'':'none',this[Q(0xf9)][Q(0x10d)]=this[Q(0x107)]||!c[Q(0xfd)],this[Q(0xb2)][Q(0xb0)]=c[Q(0x137)],this[Q(0xec)]();if(c[Q(0xa9)]===Q(0xbc)&&c['selectedUnit']!=null)this['_lastNumericUnit']=c['selectedUnit'];if(c[Q(0xa9)]===Q(0xbc)&&c['inputValue']!==''){const f=Number(c[Q(0x131)]);if(!Number['isNaN'](f))this['_lastNumericValue']=this[Q(0x12f)](f);}const d=this['_units'][Q(0xf0)]>0x0,e=this[Q(0x107)]||(!d||c[Q(0xa9)]===Q(0x114));this['_scrubberButton']['disabled']=e,this[Q(0xae)][Q(0x10d)]=e,this[Q(0xdf)]['disabled']=e,this[Q(0x12d)]();}[q(0xb1)](c){const R=q,d=parseNumericStyleInputValue(c);if(d['kind']===R(0x11b)){if(this['_preferCustomMode'])return this['_createCustomDisplayState'](d[R(0xbe)]);if(d[R(0xbc)]&&this[R(0x130)]['length']&&!this['_units'][R(0x12a)](d['unit']))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d['unit'],this['_lastNumericUnit'],this['_units'])??'';return{'mode':'unit','inputValue':d[R(0xbe)],'inputVisible':!![],'inputEnabled':!![],'selectValue':this[R(0x130)]['includes'](f)?f:this[R(0xb2)]['value']||customOptionValue,'selectedUnit':f};}if(d['kind']===R(0x11f)){if(!this['_preferCustomMode']&&this[R(0xcf)][R(0x12a)](d['text']))return{'mode':R(0xd5),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[R(0x11f)]};return this[R(0x12b)](d[R(0x11f)]);}if(this['_preferCustomMode'])return this[R(0x12b)]('');const e=this[R(0xff)]??this[R(0x130)][0x0]??'';if(this[R(0x130)]['includes'](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[R(0x12b)]('');}[q(0x12b)](c){const S=q;if(!this['_allowCustomValue']&&this[S(0x130)][S(0xf0)])return{'mode':S(0xbc),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this[S(0x130)][0x0]};return{'mode':S(0x114),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0xd6)](){const T=q,c=this[T(0xb2)][T(0xb0)];this['_select']['replaceChildren']();if(this[T(0x130)]['length']){const d=document[T(0xa6)]('optgroup');d[T(0xb3)]='Units';for(const e of this['_units'])d['appendChild'](this[T(0x118)](getNumericStyleInputUnitLabel(e),e,T(0xbc)));this['_select']['appendChild'](d);}if(this['_fixedValues'][T(0xf0)]){const f=document[T(0xa6)]('optgroup');f[T(0xb3)]='Values';for(const g of this[T(0xcf)])f['appendChild'](this[T(0x118)](g,g,T(0xd5)));this['_select']['appendChild'](f);}if(this['_allowCustomValue']||this[T(0xb2)]['options'][T(0xf0)]===0x0)this['_select']['appendChild'](this[T(0x118)](T(0x114),customOptionValue,T(0x114)));if(c!=='')this['_select']['value']=c;else{if(this['_select']['querySelector']('option[value=\x22\x22]'))this[T(0xb2)]['value']='';}}[q(0x118)](c,d,e){const U=q,f=document[U(0xa6)](U(0xf1));return f['text']=c,f[U(0xb0)]=d,f[U(0xb5)][U(0x103)]=e,f;}[q(0xec)](){const V=q;if(!this[V(0x109)]||!this['_select'])return;const c=this[V(0xb2)][V(0xc7)][V(0xd9)](0x0);this[V(0x109)]['textContent']=c?.[V(0x11f)]??'';const d=this[V(0x109)][V(0xbf)];d>0x0?this['_select'][V(0xe0)]['width']=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const W=q;if(!this[W(0xf9)]||!this['_select'])return;this[W(0xf9)][W(0xf2)]=this['_readOnly'],this['_select'][W(0x10d)]=this['_readOnly'];}['_convertNumericValue'](c,d){const X=q;if(d==null)return this[X(0x127)];const e=c[X(0xbc)],f=this['_unitValueConverter']?.({'value':c['value'],'numberText':c['numberText'],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[X(0xbe)],d);}['_resolveCurrentValueForUnit'](c){const Y=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number[Y(0xac)],'numberText':'','rawValue':this['_value'],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}[q(0x132)](c){const Z=q,d=parseNumericStyleInputValue(this['_value']);if(d['kind']==='numeric'){const e=this[Z(0xb6)](d,c),f=parseNumericStyleInputValue(e);if(f[Z(0x103)]===Z(0x11b))return f[Z(0xb0)];return d['value'];}if(this['_input'][Z(0xb0)]?.['trim']()){const g=Number(this['_input'][Z(0xb0)]);if(!Number[Z(0xf4)](g))return g;}return this['_lastNumericValue'];}[q(0xd4)](c,d){const a0=q;this['_lastNumericValue']=this['_clampNumericValue'](c),this[a0(0xff)]=d,this['_commitValue'](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}['_previewNumericValue'](c,d,e){const a1=q;this[a1(0x104)]=this[a1(0x12f)](c),this['_lastNumericUnit']=d;const f=e??this['_getEffectiveStep'](d);this['_setValue'](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a1(0x104)],f),d),![],!![]);}[q(0x113)](c){const a2=q;this[a2(0xee)](c,!![],![]);}['_setValue'](c,d,e){const a3=q,f=c??'';if(!d&&!e&&this['_previewStartValue']!=null)return;const g=this['_value'];this[a3(0x127)]=f;if(e)this[a3(0x112)]=f;else{if(this[a3(0x112)]!=null){if(f===this[a3(0x112)]||f!==g)this[a3(0x112)]=null;}}this[a3(0x12e)]=![],this[a3(0x11e)]();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged'][a3(0xdb)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged'][a3(0xdb)]({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a4=q;this[a4(0xd0)]==null&&(this[a4(0xd0)]=this['_value'],this[a4(0xed)]=![]);}[q(0xaf)](c){const a5=q;if(this[a5(0xd0)]==null)return;const d=this[a5(0xd0)],e=this[a5(0x112)]??this[a5(0x127)],f=this[a5(0xed)]&&d!==e,g=c||!f;this[a5(0xd0)]=null,this[a5(0xed)]=![],g?(this[a5(0x112)]=null,this[a5(0x127)]=d,this['_updateValue']()):(this['_displayValueLock']=e,this[a5(0x11e)]()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}['_applyStepPreview'](c){const a6=q,d=this['_select'][a6(0xb0)],e=this['_getEffectiveStep'](d);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_readEditableNumericValue'](d),c,e),d,e);}[q(0xf3)](){const a7=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this[a7(0x125)]),this['_stepperRepeatTimeout']=null),this['_stepperRepeatInterval']!=null&&(window['clearInterval'](this[a7(0xf7)]),this[a7(0xf7)]=null);}[q(0xe4)](){const a8=q;window[a8(0xe9)](a8(0xb4),this[a8(0x11a)],!![]),window[a8(0xe9)](a8(0x10a),this['_windowPointerCancelHandler'],!![]),window['addEventListener'](a8(0x106),this[a8(0xe8)]);}[q(0x120)](){const a9=q;window[a9(0xe9)]('pointermove',this['_windowDragPointerMoveHandler'],!![]),window['addEventListener']('pointerup',this[a9(0xbd)],!![]),window['addEventListener'](a9(0x10a),this[a9(0xe3)],!![]),window[a9(0xe9)](a9(0x106),this[a9(0xfa)]);}['_detachStepperWindowListeners'](){const aa=q;window[aa(0xda)]('pointerup',this[aa(0x11a)],!![]),window[aa(0xda)](aa(0x10a),this['_windowPointerCancelHandler'],!![]),window['removeEventListener']('blur',this['_windowBlurHandler']);}['_detachDragWindowListeners'](){const ab=q;window['removeEventListener']('pointermove',this['_windowDragPointerMoveHandler'],!![]),window['removeEventListener'](ab(0xb4),this[ab(0xbd)],!![]),window[ab(0xda)](ab(0x10a),this[ab(0xe3)],!![]),window[ab(0xda)](ab(0x106),this['_windowDragBlurHandler']);}['_calculateDraggedStepCount'](c){const ac=q,d=Math[ac(0xb9)](c),e=Math['min'](d,0x14)/0x5,f=Math[ac(0x119)](Math[ac(0x11d)](d-0x14,0x28),0x0)/0x3,g=Math[ac(0x119)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math['sign'](c)*h;}['_getEffectiveStep'](c){const ad=q;return resolveNumericStyleInputStep(this[ad(0xb7)],this[ad(0xf5)],c);}['_getInteractiveStepValue'](c,d,e){const ae=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number[ae(0xc8)](g)||!Number[ae(0xc8)](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math[ae(0xcb)](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math[ae(0xd8)](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this[ae(0x12f)](this[ae(0xce)](m,f));}[q(0xe5)](c,d){const e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}['_roundToStepPrecision'](c,d){const af=q,e=this['_getStepPrecision'](d),f=0xa**e;return Math[af(0xcb)](c*f)/f;}[q(0x116)](c){const ag=q,d=(''+(c??this['_step']))['toLowerCase']();if(d[ag(0x12a)]('e-')){const [f,g]=d[ag(0xfb)]('e-'),h=Number(g),i=f['includes']('.')?f['length']-f[ag(0xe7)]('.')-0x1:0x0;return h+i;}const e=d[ag(0xe7)]('.');return e>=0x0?d[ag(0xf0)]-e-0x1:0x0;}[q(0xea)](){const ah=q,c=this[ah(0xff)]??this[ah(0x130)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[ah(0x113)](d),this['_isSelectedUnitMode']();return this[ah(0xd4)](this[ah(0x104)],c),this[ah(0xcc)]();}['_isSelectedUnitMode'](){const ai=q;return this['_select'][ai(0xc7)]['item'](0x0)?.[ai(0xb5)]['kind']==='unit';}[q(0x123)](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x12f)](c){const aj=q;let d=c;if(this[aj(0x135)]!=null)d=Math[aj(0x119)](this[aj(0x135)],d);if(this['_max']!=null)d=Math[aj(0x11d)](this[aj(0xf8)],d);return d;}}customElements['define'](q(0xbb),NumericStyleInput);