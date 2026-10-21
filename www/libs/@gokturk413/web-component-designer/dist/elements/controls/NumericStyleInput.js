const q=b;(function(c,d){const p=b,e=c();while(!![]){try{const f=parseInt(p(0xcd))/0x1+-parseInt(p(0xdf))/0x2+-parseInt(p(0xa9))/0x3*(parseInt(p(0x79))/0x4)+parseInt(p(0xa4))/0x5+-parseInt(p(0x8a))/0x6+-parseInt(p(0x80))/0x7*(parseInt(p(0xd8))/0x8)+-parseInt(p(0xf6))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98c04));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{combineNumericStyleInputValue,formatNumericStyleInputNumber,getNumericStyleInputUnitLabel,normalizeNumericStyleInputOptionValues,parseNumericStyleInputValue,resolveNumericStyleInputSelectedUnit,resolveNumericStyleInputStep}from'./NumericStyleInputValueHelpers.js';function b(c,d){c=c-0x74;const e=a();let f=e[c];return f;}function a(){const al=['floor','_measure','pointerdown','_stopStepperRepeat','_updateValue','options','optgroup','_applyStepPreview','allowCustomValue','unit','input','trim','pointerId','dataset','inputEnabled','setPointerCapture','5501945uusyRf','_previewNumericValue','_detachStepperWindowListeners','_getInteractiveStepValue','_attachStepperWindowListeners','1131tCIMOq','label','toLowerCase','_renderSelectOptions','_isSelectedUnitMode','_preferCustomMode','_switchToUnitModeForInteraction','_windowPointerUpHandler','numberText','_readEditableNumericValue','createElement','_formatInteractiveNumericValue','_input','_finishPreviewSession','_convertNumericValue','units','_setValue','round','_finishStepperInteraction','_createCustomDisplayState','selectedUnit','Units','_step','_fixedValues','selectedOptions','_resolveCurrentValueForUnit','ready','_windowDragPointerMoveHandler','numeric','scrubber','split','mode','text','_handleWindowStepperPointerEnd','_min','_appliedDragSteps','1171473BEYogr','pointerup','inputValue','_windowDragBlurHandler','_applyTypedValue','_units','value','emit','item','NaN','_getEffectiveStep','6472jNXbjm','Enter','_previewChanged','removeEventListener','querySelector','_roundToStepPrecision','_lastNumericUnit','624744UEnAya','_max','custom','blur','max','step','_detachDragWindowListeners','_dragStartNumericValue','increase','isFinite','_stepperRepeatInterval','define','_windowBlurHandler','_select','disabled','_startPreviewSession','_createOption','_increaseButton','inputVisible','Values','_autoSizeSelect','none','isNaN','64656XiTAFQ','appendChild','_displayValueLock','kind','focus','abs','_calculateDraggedStepCount','clearInterval','_unitValueConverter','_value','min','_stepperDirection','measure','_decreaseButton','valueChanged','_wireEvents','_getStepPrecision','_windowDragPointerCancelHandler','_dragStartY','_readOnly','_unitSteps','_stepperRepeatTimeout','_handleWindowDragPointerMove','unitValueConverter','_applyReadonlyState','_applyNumericValue','readOnly','_lastNumericValue','option[value=\x22\x22]','includes','_scrubberButton','6476JmiPMs','valuePreviewChanged','length','addEventListener','indexOf','_handleStepperPointerDown','_parseAttributesToProperties','4032IrKjzI','style','keydown','pointercancel','valuePreviewFinished','fixed','hasPointerCapture','_applySelectedMode','change','_commitValue','1501746LXQonR','_clampNumericValue','decrease','_dragPointerId','setTimeout','_stepperPointerId','_allowCustomValue','pointermove','_previewStartValue','empty'];a=function(){return al;};return a();}export{parseNumericStyleInputValue,formatNumericStyleInputNumber,combineNumericStyleInputValue}from'./NumericStyleInputValueHelpers.js';const customOptionValue='__node-projects-custom-value__',dragHandleGlyph='⋮';export class NumericStyleInput extends BaseCustomWebComponentConstructorAppend{static [q(0x81)]=css`
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
  `;['_value']='';get[q(0xd3)](){return this['_value'];}set[q(0xd3)](c){const r=q;this[r(0xb9)](c,![],![]);}['valueChanged']=new TypedEvent();[q(0x7a)]=new TypedEvent();[q(0x84)]=new TypedEvent();['_units']=['px','%','pt'];get[q(0xb8)](){return[...this['_units']];}set['units'](c){const s=q;this[s(0xd2)]=this['_normalizeOptionValues'](c),this[s(0xde)]=this['_units'][0x0]??this['_lastNumericUnit'],this['_updateValue']();}['_fixedValues']=[];get['fixedValues'](){return[...this['_fixedValues']];}set['fixedValues'](c){const t=q;this[t(0xc0)]=this['_normalizeOptionValues'](c),this[t(0x98)]();}[q(0xbf)]=0x1;get[q(0xe4)](){const u=q;return this[u(0xbf)];}set[q(0xe4)](c){this['_step']=Number['isFinite'](c)&&c>0x0?c:0x1;}[q(0x10a)]={};get['unitSteps'](){const v=q;return{...this[v(0x10a)]};}set['unitSteps'](c){this['_unitSteps']=c??{};}[q(0xcb)]=null;get['min'](){const w=q;return this[w(0xcb)];}set[q(0x100)](c){const x=q;this['_min']=Number[x(0xe8)](c)?c:null;}[q(0xe0)]=null;get['max'](){return this['_max'];}set['max'](c){const y=q;this['_max']=Number[y(0xe8)](c)?c:null;}[q(0x109)]=![];get[q(0x74)](){return this['_readOnly'];}set['readOnly'](c){const z=q;this[z(0x109)]=c,this[z(0x10e)]();}get['isInPreview'](){const A=q;return this[A(0x92)]!=null;}['_allowCustomValue']=!![];get[q(0x9c)](){return this['_allowCustomValue'];}set['allowCustomValue'](c){const B=q;this[B(0x90)]=c,this['_updateValue']();}[q(0xfe)];get[q(0x10d)](){const C=q;return this[C(0xfe)];}set['unitValueConverter'](c){this['_unitValueConverter']=c;}[q(0xb5)];[q(0xec)];[q(0x95)];[q(0x78)];[q(0xf0)];['_decreaseButton'];[q(0x75)]=0x0;['_lastNumericUnit']='px';['_dragPointerId']=null;['_dragStartY']=0x0;['_dragStartNumericValue']=0x0;[q(0xcc)]=0x0;[q(0x92)]=null;['_previewChanged']=![];[q(0xf8)]=null;[q(0x8f)]=null;['_stepperDirection']=0x0;[q(0x10b)]=null;[q(0xe9)]=null;[q(0xc4)]=c=>this[q(0x10c)](c);['_windowDragPointerUpHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,![]);['_windowDragPointerCancelHandler']=c=>this['_finishDragInteractionForPointerEvent'](c,!![]);['_windowDragBlurHandler']=()=>this['_finishDragInteraction'](![]);['_windowPointerUpHandler']=c=>this['_handleWindowStepperPointerEnd'](c);['_windowPointerCancelHandler']=c=>this[q(0xca)](c);[q(0xeb)]=()=>this['_finishStepperInteraction'](![]);['_preferCustomMode']=![];constructor(){const D=q;super(),this['_restoreCachedInititalValues'](),this[D(0xb5)]=this['_getDomElement'](D(0x9e)),this['_select']=this['_getDomElement']('select'),this[D(0x95)]=this['_getDomElement'](D(0x102)),this[D(0x78)]=this['_getDomElement'](D(0xc6)),this['_increaseButton']=this['_getDomElement'](D(0xe7)),this['_decreaseButton']=this['_getDomElement'](D(0x8c));}[q(0xc3)](){const E=q;this[E(0x7f)](),this[E(0x105)](),this['_updateValue']();}[q(0x105)](){const F=q;this[F(0xb5)]['addEventListener'](F(0x88),()=>this[F(0xd1)]()),this['_input']['addEventListener'](F(0x82),c=>{const G=F;c['key']===G(0xd9)&&(this['_applyTypedValue'](),this['_input'][G(0xe2)]());}),this[F(0x78)]['addEventListener'](F(0x96),c=>this['_handlePointerDown'](c)),this['_select']['addEventListener'](F(0x88),()=>this[F(0x87)]()),this[F(0xf0)]['addEventListener'](F(0x96),c=>this[F(0x7e)](c,0x1)),this[F(0x103)]['addEventListener']('pointerdown',c=>this['_handleStepperPointerDown'](c,-0x1));}['_handlePointerDown'](c){const H=q;if(this['_readOnly'])return;if(!this['_isSelectedUnitMode']()){if(!this['_switchToUnitModeForInteraction']())return;}this['_dragPointerId']=c[H(0xa0)],this['_dragStartY']=c['clientY'],this[H(0xe6)]=this['_readEditableNumericValue'](this['_select'][H(0xd3)]),this['_appliedDragSteps']=0x0,this[H(0xee)](),this['_attachDragWindowListeners']();try{this['_scrubberButton'][H(0xa3)](c['pointerId']);}catch{}c['preventDefault']();}[q(0x10c)](c){const I=q;if(this['_dragPointerId']!==c[I(0xa0)]||!this['_isSelectedUnitMode']())return;const d=this['_calculateDraggedStepCount'](this[I(0x108)]-c['clientY']);if(d===this['_appliedDragSteps'])return;this['_appliedDragSteps']=d;const e=this['_select']['value'],f=this[I(0xd7)](e);this[I(0xa5)](this[I(0xa7)](this['_dragStartNumericValue'],d,f),e,f),c['preventDefault']();}['_finishDragInteractionForPointerEvent'](c,d){const J=q;if(this[J(0x8d)]!==c['pointerId'])return;this['_finishDragInteraction'](d,c[J(0xa0)]);}['_finishDragInteraction'](c,d){const K=q;if(this[K(0x8d)]==null)return;this[K(0x8d)]=null,this[K(0xcc)]=0x0,this[K(0xe5)]();if(d!=null)try{if(this[K(0x78)][K(0x86)](d))this[K(0x78)]['releasePointerCapture'](d);}catch{}this[K(0xb6)](c);}['_handleStepperPointerDown'](c,d){const L=q;if(this['_readOnly'])return;if(!this[L(0xad)]()){if(!this[L(0xaf)]())return;}this['_finishStepperInteraction'](!![]),this[L(0x8f)]=c[L(0xa0)],this['_stepperDirection']=d,this['_attachStepperWindowListeners'](),this['_startPreviewSession'](),this[L(0x9b)](d),this[L(0x10b)]=window[L(0x8e)](()=>{const M=L;this['_stepperRepeatInterval']=window['setInterval'](()=>this[M(0x9b)](this['_stepperDirection']),0x32);},0x15e),c['preventDefault']();}['_handleWindowStepperPointerEnd'](c){const N=q;if(this[N(0x8f)]!==c[N(0xa0)])return;this['_finishStepperInteraction'](![]);}[q(0xbb)](c){const O=q;if(this['_stepperPointerId']==null)return;this['_stepperPointerId']=null,this[O(0x101)]=0x0,this[O(0xa6)](),this[O(0x97)](),this[O(0xb6)](c);}['_applySelectedMode'](){const P=q,c=this['_select']['selectedOptions'][P(0xd5)](0x0);if(!c)return;const d=c[P(0xa1)][P(0xf9)];if(d==='fixed'){this['_commitValue'](c['value']);return;}if(d==='custom'){this['_preferCustomMode']=!![],this[P(0x98)](),requestAnimationFrame(()=>{const Q=P;this[Q(0xb5)][Q(0xfa)](),this['_input']['select']();});return;}const e=c['value'];this[P(0xde)]=e,this['_preferCustomMode']=![];const f=parseNumericStyleInputValue(this['_value']);if(f[P(0xf9)]===P(0xc5)){const i=this['_convertNumericValue'](f,e);this['_commitValue'](i);return;}const g=this['_resolveCurrentValueForUnit'](e);if(g!=null){this[P(0x89)](g);return;}if(f[P(0xf9)]===P(0x93)){this['_updateValue'](),this['_input']['focus']();return;}const h=Number(this['_input'][P(0xd3)]);if(!Number['isNaN'](h)){this['_applyNumericValue'](h,e);return;}this['_commitValue'](''),this[P(0xb5)]['focus']();}[q(0xd1)](){const R=q,c=this['_select']['selectedOptions'][R(0xd5)](0x0),d=c?.['dataset'][R(0xf9)];if(d===R(0x85))return;if(d==='custom'){this['_commitValue'](this[R(0xb5)]['value']);return;}const e=this[R(0xb5)][R(0xd3)]?.['trim']()??'';if(!e){this[R(0x89)]('');return;}const f=Number(e);if(!Number[R(0xf5)](f))this[R(0x75)]=this[R(0x8b)](f);this['_commitValue'](combineNumericStyleInputValue(e,c?.[R(0xd3)]??''));}[q(0x98)](){const S=q;if(!this[S(0xb5)]||!this['_select'])return;if(this[S(0x92)]==null)this[S(0xac)]();const c=this['_getDisplayState'](this[S(0xf8)]??this['_value']);this[S(0xb5)][S(0xd3)]=c['inputValue'],this['_input'][S(0x81)]['display']=c[S(0xf1)]?'':S(0xf4),this['_input'][S(0xed)]=this[S(0x109)]||!c[S(0xa2)],this[S(0xec)][S(0xd3)]=c['selectValue'],this[S(0xf3)]();if(c[S(0xc8)]===S(0x9d)&&c[S(0xbd)]!=null)this[S(0xde)]=c['selectedUnit'];if(c[S(0xc8)]==='unit'&&c['inputValue']!==''){const f=Number(c[S(0xcf)]);if(!Number[S(0xf5)](f))this['_lastNumericValue']=this[S(0x8b)](f);}const d=this['_units']['length']>0x0,e=this['_readOnly']||(!d||c['mode']==='custom');this[S(0x78)]['disabled']=e,this[S(0xf0)][S(0xed)]=e,this[S(0x103)]['disabled']=e,this[S(0x10e)]();}['_getDisplayState'](c){const T=q,d=parseNumericStyleInputValue(c);if(d['kind']==='numeric'){if(this['_preferCustomMode'])return this[T(0xbc)](d['numberText']);if(d['unit']&&this[T(0xd2)][T(0x7b)]&&!this['_units']['includes'](d['unit']))return this[T(0xbc)](c);const f=resolveNumericStyleInputSelectedUnit(d[T(0x9d)],this[T(0xde)],this[T(0xd2)])??'';return{'mode':'unit','inputValue':d['numberText'],'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units']['includes'](f)?f:this['_select']['value']||customOptionValue,'selectedUnit':f};}if(d[T(0xf9)]==='text'){if(!this['_preferCustomMode']&&this['_fixedValues'][T(0x77)](d['text']))return{'mode':T(0x85),'inputValue':'','inputVisible':!![],'inputEnabled':![],'selectValue':d[T(0xc9)]};return this[T(0xbc)](d[T(0xc9)]);}if(this[T(0xae)])return this[T(0xbc)]('');const e=this[T(0xde)]??this[T(0xd2)][0x0]??'';if(this['_units'][T(0x77)](e))return{'mode':'unit','inputValue':'','inputVisible':!![],'inputEnabled':!![],'selectValue':e,'selectedUnit':e};return this[T(0xbc)]('');}['_createCustomDisplayState'](c){const U=q;if(!this[U(0x90)]&&this[U(0xd2)]['length'])return{'mode':U(0x9d),'inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':this['_units'][0x0],'selectedUnit':this[U(0xd2)][0x0]};return{'mode':'custom','inputValue':c,'inputVisible':!![],'inputEnabled':!![],'selectValue':customOptionValue};}[q(0xac)](){const V=q,c=this[V(0xec)][V(0xd3)];this['_select']['replaceChildren']();if(this['_units']['length']){const d=document['createElement']('optgroup');d['label']=V(0xbe);for(const e of this['_units'])d[V(0xf7)](this[V(0xef)](getNumericStyleInputUnitLabel(e),e,V(0x9d)));this[V(0xec)][V(0xf7)](d);}if(this[V(0xc0)][V(0x7b)]){const f=document[V(0xb3)](V(0x9a));f[V(0xaa)]=V(0xf2);for(const g of this[V(0xc0)])f['appendChild'](this[V(0xef)](g,g,V(0x85)));this[V(0xec)][V(0xf7)](f);}if(this[V(0x90)]||this['_select'][V(0x99)][V(0x7b)]===0x0)this[V(0xec)][V(0xf7)](this['_createOption'](V(0xe1),customOptionValue,'custom'));if(c!=='')this['_select']['value']=c;else{if(this['_select'][V(0xdc)](V(0x76)))this[V(0xec)]['value']='';}}['_createOption'](c,d,e){const W=q,f=document['createElement']('option');return f[W(0xc9)]=c,f[W(0xd3)]=d,f['dataset'][W(0xf9)]=e,f;}[q(0xf3)](){const X=q;if(!this[X(0x95)]||!this['_select'])return;const c=this[X(0xec)][X(0xc1)]['item'](0x0);this['_measure']['textContent']=c?.[X(0xc9)]??'';const d=this[X(0x95)]['offsetWidth'];d>0x0?this['_select'][X(0x81)]['width']=d+0x11+'px':requestAnimationFrame(()=>this[X(0xf3)]());}[q(0x10e)](){const Y=q;if(!this['_input']||!this['_select'])return;this[Y(0xb5)]['readOnly']=this['_readOnly'],this[Y(0xec)]['disabled']=this[Y(0x109)];}['_convertNumericValue'](c,d){const Z=q;if(d==null)return this['_value'];const e=c[Z(0x9d)],f=this[Z(0xfe)]?.({'value':c['value'],'numberText':c[Z(0xb1)],'rawValue':this[Z(0xff)],'fromUnit':e,'toUnit':d});return f??combineNumericStyleInputValue(c[Z(0xb1)],d);}[q(0xc2)](c){const a0=q;if(c==null)return null;const d=this[a0(0xfe)]?.({'value':Number[a0(0xd6)],'numberText':'','rawValue':this[a0(0xff)],'fromUnit':'','toUnit':c})?.['trim']();return d?d:null;}[q(0xb2)](c){const a1=q,d=parseNumericStyleInputValue(this[a1(0xff)]);if(d[a1(0xf9)]===a1(0xc5)){const e=this[a1(0xb7)](d,c),f=parseNumericStyleInputValue(e);if(f['kind']===a1(0xc5))return f[a1(0xd3)];return d['value'];}if(this['_input'][a1(0xd3)]?.[a1(0x9f)]()){const g=Number(this[a1(0xb5)][a1(0xd3)]);if(!Number[a1(0xf5)](g))return g;}return this['_lastNumericValue'];}[q(0x10f)](c,d){const a2=q;this['_lastNumericValue']=this[a2(0x8b)](c),this[a2(0xde)]=d,this[a2(0x89)](combineNumericStyleInputValue(formatNumericStyleInputNumber(this['_lastNumericValue']),d));}[q(0xa5)](c,d,e){const a3=q;this['_lastNumericValue']=this[a3(0x8b)](c),this[a3(0xde)]=d;const f=e??this['_getEffectiveStep'](d);this[a3(0xb9)](combineNumericStyleInputValue(this['_formatInteractiveNumericValue'](this[a3(0x75)],f),d),![],!![]);}[q(0x89)](c){this['_setValue'](c,!![],![]);}[q(0xb9)](c,d,e){const a4=q,f=c??'';if(!d&&!e&&this[a4(0x92)]!=null)return;const g=this[a4(0xff)];this['_value']=f;if(e)this[a4(0xf8)]=f;else{if(this['_displayValueLock']!=null){if(f===this['_displayValueLock']||f!==g)this['_displayValueLock']=null;}}this[a4(0xae)]=![],this[a4(0x98)]();if(g!==f){e&&(this[a4(0xda)]=!![],this['valuePreviewChanged'][a4(0xd4)]({'newValue':f,'oldValue':g}));if(d)this[a4(0x104)]['emit']({'newValue':f,'oldValue':g});}}['_startPreviewSession'](){const a5=q;this['_previewStartValue']==null&&(this['_previewStartValue']=this[a5(0xff)],this[a5(0xda)]=![]);}[q(0xb6)](c){const a6=q;if(this['_previewStartValue']==null)return;const d=this['_previewStartValue'],e=this['_displayValueLock']??this[a6(0xff)],f=this[a6(0xda)]&&d!==e,g=c||!f;this['_previewStartValue']=null,this['_previewChanged']=![],g?(this['_displayValueLock']=null,this['_value']=d,this['_updateValue']()):(this['_displayValueLock']=e,this[a6(0x98)]()),this[a6(0x84)][a6(0xd4)]({'newValue':e,'oldValue':d,'wasCancelled':g});}[q(0x9b)](c){const a7=q,d=this['_select'][a7(0xd3)],e=this[a7(0xd7)](d);this['_previewNumericValue'](this['_getInteractiveStepValue'](this['_readEditableNumericValue'](d),c,e),d,e);}['_stopStepperRepeat'](){const a8=q;this['_stepperRepeatTimeout']!=null&&(window['clearTimeout'](this[a8(0x10b)]),this['_stepperRepeatTimeout']=null),this[a8(0xe9)]!=null&&(window[a8(0xfd)](this[a8(0xe9)]),this[a8(0xe9)]=null);}[q(0xa8)](){const a9=q;window[a9(0x7c)](a9(0xce),this['_windowPointerUpHandler'],!![]),window[a9(0x7c)](a9(0x83),this['_windowPointerCancelHandler'],!![]),window[a9(0x7c)](a9(0xe2),this[a9(0xeb)]);}['_attachDragWindowListeners'](){const aa=q;window[aa(0x7c)]('pointermove',this[aa(0xc4)],!![]),window[aa(0x7c)](aa(0xce),this['_windowDragPointerUpHandler'],!![]),window[aa(0x7c)]('pointercancel',this['_windowDragPointerCancelHandler'],!![]),window['addEventListener']('blur',this[aa(0xd0)]);}[q(0xa6)](){const ab=q;window[ab(0xdb)](ab(0xce),this[ab(0xb0)],!![]),window[ab(0xdb)]('pointercancel',this['_windowPointerCancelHandler'],!![]),window['removeEventListener']('blur',this[ab(0xeb)]);}[q(0xe5)](){const ac=q;window['removeEventListener'](ac(0x91),this['_windowDragPointerMoveHandler'],!![]),window['removeEventListener'](ac(0xce),this['_windowDragPointerUpHandler'],!![]),window['removeEventListener']('pointercancel',this[ac(0x107)],!![]),window['removeEventListener'](ac(0xe2),this[ac(0xd0)]);}[q(0xfc)](c){const ad=q,d=Math[ad(0xfb)](c),e=Math['min'](d,0x14)/0x5,f=Math['max'](Math['min'](d-0x14,0x28),0x0)/0x3,g=Math[ad(0xe3)](d-0x3c,0x0)/0x2,h=Math['trunc'](e+f+g);return Math['sign'](c)*h;}[q(0xd7)](c){const ae=q;return resolveNumericStyleInputStep(this[ae(0x10a)],this['_step'],c);}[q(0xa7)](c,d,e){const af=q,f=e??this['_step'],g=this['_clampNumericValue'](c);if(!Number['isFinite'](g)||!Number['isFinite'](d)||d===0x0)return g;const h=this['_min']??0x0,i=(g-h)/f,j=Math['round'](i),k=Math[af(0xfb)](i-j)<1e-9;let l;if(d>0x0){const n=k?j+0x1:Math['ceil'](i);l=n+d-0x1;}else{const o=k?j-0x1:Math[af(0x94)](i);l=o+d+0x1;}const m=h+l*f;return this[af(0x8b)](this[af(0xdd)](m,f));}[q(0xb4)](c,d){const e=d??this['_step'];return formatNumericStyleInputNumber(this['_roundToStepPrecision'](c,e),this['_getStepPrecision'](e));}[q(0xdd)](c,d){const ag=q,e=this['_getStepPrecision'](d),f=0xa**e;return Math[ag(0xba)](c*f)/f;}[q(0x106)](c){const ah=q,d=(''+(c??this['_step']))[ah(0xab)]();if(d[ah(0x77)]('e-')){const [f,g]=d[ah(0xc7)]('e-'),h=Number(g),i=f[ah(0x77)]('.')?f['length']-f[ah(0x7d)]('.')-0x1:0x0;return h+i;}const e=d[ah(0x7d)]('.');return e>=0x0?d[ah(0x7b)]-e-0x1:0x0;}[q(0xaf)](){const ai=q,c=this['_lastNumericUnit']??this[ai(0xd2)][0x0];if(c==null)return![];this['_preferCustomMode']=![];const d=this['_resolveCurrentValueForUnit'](c);if(d!=null)return this[ai(0x89)](d),this['_isSelectedUnitMode']();return this['_applyNumericValue'](this[ai(0x75)],c),this['_isSelectedUnitMode']();}['_isSelectedUnitMode'](){const aj=q;return this[aj(0xec)][aj(0xc1)][aj(0xd5)](0x0)?.[aj(0xa1)]['kind']==='unit';}['_normalizeOptionValues'](c){return normalizeNumericStyleInputOptionValues(c);}[q(0x8b)](c){const ak=q;let d=c;if(this[ak(0xcb)]!=null)d=Math['max'](this['_min'],d);if(this[ak(0xe0)]!=null)d=Math[ak(0x100)](this[ak(0xe0)],d);return d;}}customElements[q(0xea)]('node-projects-numeric-style-input',NumericStyleInput);