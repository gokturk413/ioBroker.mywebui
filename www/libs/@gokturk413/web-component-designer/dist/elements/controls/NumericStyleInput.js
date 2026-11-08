function a(){const ak=['_readOnly','_windowBlurHandler','style','23625Uworcq','trunc','isInPreview','_formatInteractiveNumericValue','_windowDragBlurHandler','8WqrCsA','pointerId','unitValueConverter','_dragPointerId','valuePreviewChanged','selectedOptions','_convertNumericValue','setTimeout','emit','appendChild','_previewStartValue','addEventListener','_step','Values','pointerup','isFinite','isNaN','_attachDragWindowListeners','_setValue','_applyTypedValue','1669057qhAFUQ','keydown','_units','item','612670HZpdvc','empty','min','_finishDragInteractionForPointerEvent','includes','increase','_handlePointerDown','_isSelectedUnitMode','_displayValueLock','_attachStepperWindowListeners','numberText','2GhakIm','template','_unitSteps','offsetWidth','_createCustomDisplayState','_resolveCurrentValueForUnit','_stepperDirection','length','indexOf','numeric','_wireEvents','_value','_renderSelectOptions','dataset','round','_applyNumericValue','_select','mode','focus','_stepperRepeatInterval','clearTimeout','115kcYcKS','438411KlfsbJ','toLowerCase','Enter','_detachStepperWindowListeners','_getStepPrecision','createElement','abs','unitSteps','48XSRChb','_unitValueConverter','_getInteractiveStepValue','_clampNumericValue','pointermove','decrease','_parseAttributesToProperties','_windowPointerCancelHandler','units','step','1676376mLyhgw','clientY','_max','_min','_finishDragInteraction','_preferCustomMode','selectedUnit','36gODGpd','_windowPointerUpHandler','_getDisplayState','_lastNumericUnit','_handleStepperPointerDown','33pjQJhv','text','10211PLojBE','unit','_switchToUnitModeForInteraction','_windowDragPointerMoveHandler','_startPreviewSession','option','_readEditableNumericValue','_applyStepPreview','_decreaseButton','max','inputEnabled','_appliedDragSteps','_finishStepperInteraction','_getEffectiveStep','_commitValue','_input','kind','change','select','value','inputValue','custom','_fixedValues','removeEventListener','_roundToStepPrecision','_allowCustomValue','width','_stepperPointerId','measure','_calculateDraggedStepCount','_increaseButton','_scrubberButton','_previewChanged','trim','_finishPreviewSession','13016tqODPd','blur','label','_normalizeOptionValues','_dragStartNumericValue','_measure','_createOption','_applySelectedMode','_lastNumericValue','pointercancel','scrubber','_updateValue','_autoSizeSelect','textContent','disabled','optgroup','split','fixed','_stepperRepeatTimeout','_getDomElement'];a=function(){return ak;};return a();}const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0x20d))/0x1+-parseInt(p(0x1d7))/0x2*(parseInt(p(0x1ed))/0x3)+-parseInt(p(0x230))/0x4*(-parseInt(p(0x1ec))/0x5)+parseInt(p(0x206))/0x6*(parseInt(p(0x247))/0x7)+-parseInt(p(0x24c))/0x8*(parseInt(p(0x1ff))/0x9)+-parseInt(p(0x1cc))/0xa*(parseInt(p(0x20b))/0xb)+parseInt(p(0x1f5))/0xc*(parseInt(p(0x1c8))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x19101));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x246)]=css`
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
  `;static [q(0x1d8)]=html`
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
  `;['_value']='';get[q(0x220)](){const r=q;return this[r(0x1e2)];}set['value'](c){const s=q;this[s(0x1c6)](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x250)]=new TypedEvent();['valuePreviewFinished']=new TypedEvent();['_units']=['px','%','pt'];get[q(0x1fd)](){const t=q;return[...this[t(0x1ca)]];}set[q(0x1fd)](c){const u=q;this[u(0x1ca)]=this[u(0x233)](c),this['_lastNumericUnit']=this[u(0x1ca)][0x0]??this[u(0x209)],this['_updateValue']();}[q(0x223)]=[];get['fixedValues'](){const v=q;return[...this[v(0x223)]];}set['fixedValues'](c){const w=q;this[w(0x223)]=this['_normalizeOptionValues'](c),this['_updateValue']();}[q(0x1c0)]=0x1;get['step'](){return this['_step'];}set[q(0x1fe)](c){const x=q;this['_step']=Number[x(0x1c3)](c)&&c>0x0?c:0x1;}['_unitSteps']={};get[q(0x1f4)](){return{...this['_unitSteps']};}set[q(0x1f4)](c){const y=q;this[y(0x1d9)]=c??{};}['_min']=null;get[q(0x1ce)](){return this['_min'];}set[q(0x1ce)](c){const z=q;this[z(0x202)]=Number[z(0x1c3)](c)?c:null;}[q(0x201)]=null;get[q(0x216)](){return this['_max'];}set[q(0x216)](c){const A=q;this['_max']=Number[A(0x1c3)](c)?c:null;}[q(0x244)]=![];get['readOnly'](){return this['_readOnly'];}set['readOnly'](c){this['_readOnly']=c,this['_applyReadonlyState']();}get[q(0x249)](){return this['_previewStartValue']!=null;}['_allowCustomValue']=!![];get['allowCustomValue'](){return this['_allowCustomValue'];}set['allowCustomValue'](c){const B=q;this[B(0x226)]=c,this['_updateValue']();}[q(0x1f6)];get[q(0x24e)](){return this['_unitValueConverter'];}set[q(0x24e)](c){this['_unitValueConverter']=c;}['_input'];[q(0x1e7)];['_measure'];[q(0x22c)];['_increaseButton'];['_decreaseButton'];[q(0x238)]=0x0;['_lastNumericUnit']='px';[q(0x24f)]=null;['_dragStartY']=0x0;[q(0x234)]=0x0;[q(0x218)]=0x0;['_previewStartValue']=null;[q(0x22d)]=![];[q(0x1d4)]=null;['_stepperPointerId']=null;['_stepperDirection']=0x0;[q(0x242)]=null;['_stepperRepeatInterval']=null;['_windowDragPointerMoveHandler']=c=>this['_handleWindowDragPointerMove'](c);['_windowDragPointerUpHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this[q(0x1cf)](c,!![]);[q(0x24b)]=()=>this[q(0x203)](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowBlurHandler']=()=>this['_finishStepperInteraction'](![]);['_preferCustomMode']=![];constructor(){const C=q;super(),this['_restoreCachedInititalValues'](),this['_input']=this[C(0x243)]('input'),this[C(0x1e7)]=this[C(0x243)](C(0x21f)),this['_measure']=this['_getDomElement'](C(0x229)),this['_scrubberButton']=this[C(0x243)](C(0x23a)),this[C(0x22b)]=this[C(0x243)](C(0x1d1)),this['_decreaseButton']=this['_getDomElement'](C(0x1fa));}['ready'](){const D=q;this[D(0x1fb)](),this[D(0x1e1)](),this['_updateValue']();}['_wireEvents'](){const E=q;this[E(0x21c)]['addEventListener'](E(0x21e),()=>this[E(0x1c7)]()),this[E(0x21c)]['addEventListener'](E(0x1c9),c=>{const F=E;c['key']===F(0x1ef)&&(this[F(0x1c7)](),this[F(0x21c)]['blur']());}),this[E(0x22c)][E(0x1bf)]('pointerdown',c=>this[E(0x1d2)](c)),this['_select']['addEventListener']('change',()=>this[E(0x237)]()),this['_increaseButton']['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,0x1)),this[E(0x215)][E(0x1bf)]('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}[q(0x1d2)](c){const G=q;if(this['_readOnly'])return;if(!this[G(0x1d3)]()){if(!this[G(0x20f)]())return;}this['_dragPointerId']=c[G(0x24d)],this['_dragStartY']=c[G(0x200)],this['_dragStartNumericValue']=this['_readEditableNumericValue'](this['_select']['value']),this[G(0x218)]=0x0,this[G(0x211)](),this[G(0x1c5)]();try{this[G(0x22c)]['setPointerCapture'](c[G(0x24d)]);}catch{}c['preventDefault']();}['_handleWindowDragPointerMove'](c){const H=q;if(this[H(0x24f)]!==c['pointerId']||!this[H(0x1d3)]())return;const d=this['_calculateDraggedStepCount'](this['_dragStartY']-c[H(0x200)]);if(d===this[H(0x218)])return;this['_appliedDragSteps']=d;const e=this['_select'][H(0x220)],f=this['_getEffectiveStep'](e);this['_previewNumericValue'](this[H(0x1f7)](this['_dragStartNumericValue'],d,f),e,f),c['preventDefault']();}[q(0x1cf)](c,d){const I=q;if(this[I(0x24f)]!==c['pointerId'])return;this['_finishDragInteraction'](d,c['pointerId']);}[q(0x203)](c,d){const J=q;if(this[J(0x24f)]==null)return;this[J(0x24f)]=null,this['_appliedDragSteps']=0x0,this['_detachDragWindowListeners']();if(d!=null)try{if(this[J(0x22c)]['hasPointerCapture'](d))this['_scrubberButton']['releasePointerCapture'](d);}catch{}this[J(0x22f)](c);}[q(0x20a)](c,d){const K=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this['_finishStepperInteraction'](!![]),this[K(0x228)]=c[K(0x24d)],this['_stepperDirection']=d,this[K(0x1d5)](),this['_startPreviewSession'](),this[K(0x214)](d),this[K(0x242)]=window[K(0x1bb)](()=>{const L=K;this[L(0x1ea)]=window['setInterval'](()=>this['_applyStepPreview'](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const M=q;if(this[M(0x228)]!==c['pointerId'])return;this[M(0x219)](![]);}['_finishStepperInteraction'](c){const N=q;if(this['_stepperPointerId']==null)return;this[N(0x228)]=null,this[N(0x1dd)]=0x0,this['_detachStepperWindowListeners'](),this['_stopStepperRepeat'](),this[N(0x22f)](c);}[q(0x237)](){const O=q,c=this[O(0x1e7)][O(0x1b9)][O(0x1cb)](0x0);if(!c)return;const d=c['dataset']['kind'];if(d==='fixed'){this['_commitValue'](c['value']);return;}if(d==='custom'){this[O(0x204)]=!![],this['_updateValue'](),requestAnimationFrame(()=>{const P=O;this[P(0x21c)]['focus'](),this[P(0x21c)][P(0x21f)]();});return;}const e=c['value'];this['_lastNumericUnit']=e,this[O(0x204)]=![];const f=parseNumericStyleInputValue(this['_value']);if(f['kind']===O(0x1e0)){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this[O(0x1dc)](e);if(g!=null){this[O(0x21b)](g);return;}if(f[O(0x21d)]===O(0x1cd)){this['_updateValue'](),this[O(0x21c)][O(0x1e9)]();return;}const h=Number(this[O(0x21c)][O(0x220)]);if(!Number[O(0x1c4)](h)){this['_applyNumericValue'](h,e);return;}this[O(0x21b)](''),this['_input']['focus']();}['_applyTypedValue'](){const Q=q,c=this['_select'][Q(0x1b9)][Q(0x1cb)](0x0),d=c?.['dataset']['kind'];if(d==='fixed')return;if(d==='custom'){this[Q(0x21b)](this['_input']['value']);return;}const e=this[Q(0x21c)][Q(0x220)]?.[Q(0x22e)]()??'';if(!e){this['_commitValue']('');return;}const f=Number(e);if(!Number[Q(0x1c4)](f))this[Q(0x238)]=this['_clampNumericValue'](f);this[Q(0x21b)](combineNumericStyleInputValue(e,c?.['value']??''));}[q(0x23b)](){const R=q;if(!this[R(0x21c)]||!this['_select'])return;if(this[R(0x1be)]==null)this[R(0x1e3)]();const c=this['_getDisplayState'](this['_displayValueLock']??this[R(0x1e2)]);this['_input']['value']=c[R(0x221)],this['_input'][R(0x246)]['display']=c['inputVisible']?'':'none',this[R(0x21c)][R(0x23e)]=this['_readOnly']||!c[R(0x217)],this['_select']['value']=c['selectValue'],this[R(0x23c)]();if(c['mode']==='unit'&&c[R(0x205)]!=null)this['_lastNumericUnit']=c['selectedUnit'];if(c['mode']==='unit'&&c[R(0x221)]!==''){const f=Number(c[R(0x221)]);if(!Number['isNaN'](f))this[R(0x238)]=this['_clampNumericValue'](f);}const d=this[R(0x1ca)]['length']>0x0,e=this[R(0x244)]||(!d||c[R(0x1e8)]===R(0x222));this[R(0x22c)]['disabled']=e,this[R(0x22b)][R(0x23e)]=e,this[R(0x215)][R(0x23e)]=e,this['_applyReadonlyState']();}[q(0x208)](c){const S=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this[S(0x204)])return this['_createCustomDisplayState'](d[S(0x1d6)]);if(d['unit']&&this[S(0x1ca)][S(0x1de)]&&!this['_units'][S(0x1d0)](d['unit']))return this['_createCustomDisplayState'](c);const f=resolveNumericStyleInputSelectedUnit(d[S(0x20e)],this['_lastNumericUnit'],this[S(0x1ca)])??'';return{'mode':S(0x20e),'inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units']['includes'](f)?f:this['_select'][S(0x220)]||customOptionValue,'selectedUnit':f};}if(d['kind']===S(0x20c)){if(!this['_preferCustomMode']&&this[S(0x223)]['includes'](d[S(0x20c)]))return{'mode':'fixed','inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d['text']};return this[S(0x1db)](d[S(0x20c)]);}if(this[S(0x204)])return this[S(0x1db)]('');const e=this['_lastNumericUnit']??this['_units'][0x0]??'';if(this[S(0x1ca)][S(0x1d0)](e))return{'mode':S(0x20e),'inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this['_createCustomDisplayState']('');}[q(0x1db)](c){const T=q;if(!this[T(0x226)]&&this[T(0x1ca)][T(0x1de)])return{'mode':T(0x20e),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this[T(0x1ca)][0x0],'selectedUnit':this['_units'][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0x1e3)](){const U=q,c=this[U(0x1e7)][U(0x220)];this['_select']['replaceChildren']();if(this[U(0x1ca)][U(0x1de)]){const d=document[U(0x1f2)](U(0x23f));d[U(0x232)]='Units';for(const e of this[U(0x1ca)])d[U(0x1bd)](this['_createOption'](getNumericStyleInputUnitLabel(e),e,'unit'));this[U(0x1e7)]['appendChild'](d);}if(this[U(0x223)][U(0x1de)]){const f=document['createElement']('optgroup');f['label']=U(0x1c1);for(const g of this[U(0x223)])f['appendChild'](this['_createOption'](g,g,U(0x241)));this['_select']['appendChild'](f);}if(this['_allowCustomValue']||this[U(0x1e7)]['options']['length']===0x0)this['_select']['appendChild'](this[U(0x236)](U(0x222),customOptionValue,'custom'));if(c!=='')this['_select']['value']=c;else{if(this['_select']['querySelector']('option[value=\x22\x22]'))this[U(0x1e7)]['value']='';}}['_createOption'](c,d,e){const V=q,f=document[V(0x1f2)](V(0x212));return f[V(0x20c)]=c,f[V(0x220)]=d,f[V(0x1e4)]['kind']=e,f;}['_autoSizeSelect'](){const W=q;if(!this[W(0x235)]||!this[W(0x1e7)])return;const c=this['_select']['selectedOptions']['item'](0x0);this['_measure'][W(0x23d)]=c?.['text']??'';const d=this['_measure'][W(0x1da)];d>0x0?this[W(0x1e7)][W(0x246)][W(0x227)]=d+0x11+'px':requestAnimationFrame(()=>this['_autoSizeSelect']());}['_applyReadonlyState'](){const X=q;if(!this[X(0x21c)]||!this['_select'])return;this['_input']['readOnly']=this['_readOnly'],this['_select'][X(0x23e)]=this['_readOnly'];}['_convertNumericValue'](c,d){const Y=q;if(d==null)return this['_value'];const e=c[Y(0x20e)],f=this['_unitValueConverter']?.({'value':c['value'],'numberText':c[Y(0x1d6)],'rawValue':this['_value'],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c['numberText'],d);}['_resolveCurrentValueForUnit'](c){const Z=q;if(c==null)return null;const d=this['_unitValueConverter']?.({'value':Number['NaN'],'numberText':'','rawValue':this[Z(0x1e2)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}['_readEditableNumericValue'](c){const a0=q,d=parseNumericStyleInputValue(this[a0(0x1e2)]);if(d['kind']===a0(0x1e0)){const e=this[a0(0x1ba)](d,c),f=parseNumericStyleInputValue(e);if(f['kind']==='numeric')return f[a0(0x220)];return d[a0(0x220)];}if(this['_input'][a0(0x220)]?.['trim']()){const g=Number(this['_input'][a0(0x220)]);if(!Number[a0(0x1c4)](g))return g;}return this[a0(0x238)];}[q(0x1e6)](c,d){const a1=q;this[a1(0x238)]=this[a1(0x1f8)](c),this[a1(0x209)]=d,this[a1(0x21b)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}['_previewNumericValue'](c,d,e){const a2=q;this['_lastNumericValue']=this[a2(0x1f8)](c),this['_lastNumericUnit']=d;const f=e??this[a2(0x21a)](d);this[a2(0x1c6)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a2(0x238)],f),d),![],!![]);}[q(0x21b)](c){this['_setValue'](c,!![],![]);}[q(0x1c6)](c,d,e){const a3=q,f=c??'';if(!d&&!e&&this[a3(0x1be)]!=null)return;const g=this['_value'];this['_value']=f;if(e)this[a3(0x1d4)]=f;else{if(this['_displayValueLock']!=null){if(f===this[a3(0x1d4)]||f!==g)this['_displayValueLock']=null;}}this[a3(0x204)]=![],this[a3(0x23b)]();if(g!==f){e&&(this['_previewChanged']=!![],this['valuePreviewChanged'][a3(0x1bc)]({'newValue':f,'oldValue':g}));if(d)this['valueChanged']['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a4=q;this['_previewStartValue']==null&&(this[a4(0x1be)]=this['_value'],this['_previewChanged']=![]);}['_finishPreviewSession'](c){const a5=q;if(this[a5(0x1be)]==null)return;const d=this['_previewStartValue'],e=this[a5(0x1d4)]??this['_value'],f=this[a5(0x22d)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this[a5(0x1d4)]=null,this[a5(0x1e2)]=d,this[a5(0x23b)]()):(this['_displayValueLock']=e,this[a5(0x23b)]()),this['valuePreviewFinished']['emit']({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x214)](c){const a6=q,d=this[a6(0x1e7)][a6(0x220)],e=this[a6(0x21a)](d);this['_previewNumericValue'](this[a6(0x1f7)](this[a6(0x213)](d),c,e),d,e);}['_stopStepperRepeat'](){const a7=q;this[a7(0x242)]!=null&&(window[a7(0x1eb)](this['_stepperRepeatTimeout']),this[a7(0x242)]=null),this[a7(0x1ea)]!=null&&(window['clearInterval'](this['_stepperRepeatInterval']),this[a7(0x1ea)]=null);}['_attachStepperWindowListeners'](){const a8=q;window[a8(0x1bf)]('pointerup',this['_windowPointerUpHandler'],!![]),window[a8(0x1bf)](a8(0x239),this[a8(0x1fc)],!![]),window['addEventListener']('blur',this[a8(0x245)]);}[q(0x1c5)](){const a9=q;window['addEventListener'](a9(0x1f9),this[a9(0x210)],!![]),window[a9(0x1bf)](a9(0x1c2),this['_windowDragPointerUpHandler'],!![]),window[a9(0x1bf)](a9(0x239),this['_windowDragPointerCancelHandler'],!![]),window['addEventListener'](a9(0x231),this[a9(0x24b)]);}[q(0x1f0)](){const aa=q;window['removeEventListener'](aa(0x1c2),this[aa(0x207)],!![]),window['removeEventListener']('pointercancel',this['_windowPointerCancelHandler'],!![]),window[aa(0x224)]('blur',this['_windowBlurHandler']);}['_detachDragWindowListeners'](){const ab=q;window['removeEventListener']('pointermove',this[ab(0x210)],!![]),window['removeEventListener'](ab(0x1c2),this['_windowDragPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window[ab(0x224)](ab(0x231),this[ab(0x24b)]);}[q(0x22a)](c){const ac=q,d=Math[ac(0x1f3)](c),e=Math['min'](d,0x14)/0x5,f=Math['max'](Math[ac(0x1ce)](d-0x14,0x28),0x0)/0x3,g=Math[ac(0x216)](d-0x3c,0x0)/0x2,h=Math[ac(0x248)](e+f+g);return Math['sign'](c)*h;}['_getEffectiveStep'](c){return resolveNumericStyleInputStep(this['_unitSteps'],this['_step'],c);}[q(0x1f7)](c,d,e){const ad=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number[ad(0x1c3)](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this[ad(0x202)]??0x0,i=(g-h)/f,j=Math['round'](i),k=Math['abs'](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math['floor'](i);l=o+d+0x1;}const m=h+l*f;return this[ad(0x1f8)](this['_roundToStepPrecision'](m,f));}[q(0x24a)](c,d){const ae=q,e=d??this['_step'];return formatNumericStyleInputNumber(this[ae(0x225)](c,e),this[ae(0x1f1)](e));}[q(0x225)](c,d){const af=q,e=this[af(0x1f1)](d),f=0xa**e;return Math[af(0x1e5)](c*f)/f;}['_getStepPrecision'](c){const ag=q,d=(''+(c??this[ag(0x1c0)]))[ag(0x1ee)]();if(d['includes']('e-')){const [f,g]=d[ag(0x240)]('e-'),h=Number(g),i=f[ag(0x1d0)]('.')?f['length']-f['indexOf']('.')-0x1:0x0;return h+i;}const e=d[ag(0x1df)]('.');return e>=0x0?d['length']-e-0x1:0x0;}[q(0x20f)](){const ah=q,c=this['_lastNumericUnit']??this[ah(0x1ca)][0x0];if(c==null)return![];this[ah(0x204)]=![];const d=this[ah(0x1dc)](c);if(d!=null)return this['_commitValue'](d),this[ah(0x1d3)]();return this[ah(0x1e6)](this[ah(0x238)],c),this[ah(0x1d3)]();}['_isSelectedUnitMode'](){const ai=q;return this[ai(0x1e7)]['selectedOptions'][ai(0x1cb)](0x0)?.['dataset'][ai(0x21d)]==='unit';}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x1f8)](c){const aj=q;let d=c;if(this[aj(0x202)]!=null)d=Math[aj(0x216)](this[aj(0x202)],d);if(this['_max']!=null)d=Math[aj(0x1ce)](this[aj(0x201)],d);return d;}}function b(c,d){c=c-0x1b9;const e=a();let f=e[c];return f;}customElements['define']('node-projects-numeric-style-input',NumericStyleInput);