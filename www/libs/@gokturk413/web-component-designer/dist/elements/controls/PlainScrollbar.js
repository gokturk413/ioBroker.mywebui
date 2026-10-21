function b(c,d){c=c-0x1c9;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x226))/0x1*(-parseInt(j(0x1e6))/0x2)+-parseInt(j(0x21f))/0x3+-parseInt(j(0x1e0))/0x4+parseInt(j(0x217))/0x5+-parseInt(j(0x1eb))/0x6*(parseInt(j(0x200))/0x7)+parseInt(j(0x1db))/0x8*(-parseInt(j(0x1ea))/0x9)+parseInt(j(0x1ff))/0xa*(parseInt(j(0x1fd))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x711bd));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x1ce)];['root'];[k(0x203)];['button1'];[k(0x212)];[k(0x209)];['isConnected']=![];[k(0x221)]=0.3;[k(0x227)]=0x0;['orientation']=![];[k(0x1e4)]=0x12c;['clickRepeatInterval']=0x64;[k(0x1f0)]=0x19;[k(0x1f5)];[k(0x20c)];[k(0x21c)];['pointerCaptureId'];['pointerCaptureElement'];['thumbDragging'];[k(0x224)];['button2Active'];['troughActive'];constructor(c){const l=k;this[l(0x1ce)]=c,c[l(0x1d9)]({'mode':l(0x1ca)});const d=c['shadowRoot'];d[l(0x228)](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d[l(0x1cb)]=[scrollbarStyle],this[l(0x1d5)]=d[l(0x20b)](l(0x1ee)),this[l(0x203)]=d[l(0x20b)]('#trough'),this[l(0x202)]=d['querySelector']('#button1'),this[l(0x212)]=d[l(0x20b)]('#button2'),this[l(0x209)]=d[l(0x20b)]('#thumb'),this[l(0x203)]['addEventListener']('pointerdown',this['onTroughPointerDown']),this['trough'][l(0x215)](l(0x1f1),this['onPointerUp']),this[l(0x203)][l(0x215)](l(0x1d4),this[l(0x1cd)]),this[l(0x202)][l(0x215)](l(0x220),e=>this[l(0x21d)](e,0x1)),this['button1'][l(0x215)](l(0x1f1),this[l(0x1cd)]),this['button1']['addEventListener']('pointercancel',this[l(0x1cd)]),this[l(0x202)]['addEventListener'](l(0x1ef),f=>f['preventDefault']()),this['button2']['addEventListener'](l(0x220),e=>this[l(0x21d)](e,0x2)),this['button2']['addEventListener'](l(0x1f1),this['onPointerUp']),this[l(0x212)]['addEventListener'](l(0x1d4),this['onPointerUp']),this['button2']['addEventListener']('contextmenu',f=>f['preventDefault']()),this['thumb'][l(0x215)]('pointerdown',this[l(0x1d2)]),this['thumb'][l(0x215)]('pointerup',this[l(0x1cd)]),this['thumb']['addEventListener'](l(0x1d4),this[l(0x1cd)]),this[l(0x209)][l(0x215)](l(0x1c9),this[l(0x1f8)]),this[l(0x1e3)]();}['resetInteractionState'](){this['thumbDragging']=![],this['button1Active']=![],this['button2Active']=![],this['troughActive']=![];}[k(0x22a)](){const m=k;this[m(0x1d7)]=!![],this['resetInteractionState'](),this['updateLayout'](),this[m(0x1f6)]();}['disconnectedCallback'](){const n=k;this[n(0x1d7)]=![],this['resetInteractionState'](),this[n(0x1e9)](),this['stopPointerCapture']();}[k(0x219)](){const o=k;if(!this[o(0x1d7)])return;this['root'][o(0x1fc)][o(0x210)]('horizontal',!this['orientation']),this['root'][o(0x1fc)][o(0x210)]('vertical',this['orientation']),this['thumb'][o(0x1e5)]['display']=this[o(0x221)]==0x0?o(0x1f7):'',this[o(0x209)][o(0x1e5)]['height']=this[o(0x1fa)]?percent(this['getEffectiveThumbSize']()):'',this[o(0x209)][o(0x1e5)][o(0x1f9)]=this['orientation']?'':percent(this['getEffectiveThumbSize']()),this[o(0x209)]['style'][o(0x1d8)]='',this['thumb']['style'][o(0x222)]='',this['updateThumbPosition']();}['updateStyle'](){const p=k;if(!this['isConnected'])return;this[p(0x209)]['classList'][p(0x210)](p(0x207),this['thumbDragging']),this[p(0x202)]['classList']['toggle']('active',this['button1Active']),this['button2'][p(0x1fc)][p(0x210)]('active',this[p(0x1e1)]),void this['troughActive'];}[k(0x21b)](){const q=k,c=(0x1-this['getEffectiveThumbSize']())*this['value'];this[q(0x1fa)]?this['thumb'][q(0x1e5)]['top']=percent(c):this['thumb'][q(0x1e5)]['left']=percent(c);}[k(0x20f)](){const r=k;return this['orientation']?this[r(0x203)]['clientHeight']:this['trough']['clientWidth'];}['computeThumbMoveValue'](c){const s=k,d=this[s(0x20f)]()*(0x1-this[s(0x1df)]());if(d<EPS)return 0x0;return c/d;}[k(0x21a)](c){const t=k,d=Math['max'](0x0,Math[t(0x1d0)](0x1,c));if(d==this[t(0x221)])return;this[t(0x221)]=d,this[t(0x219)]();}['getThumbMinSize'](){const u=k,c=this[u(0x206)](u(0x229));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0x1df)](){const v=k,c=this['getThumbMinSize'](),d=this['getThroughSize']();if(!d)return this[v(0x221)];const e=Math['min'](0x1,c/d);return Math['max'](e,this['thumbSize']);}[k(0x1da)](c){const w=k,d=Math[w(0x1d3)](0x0,Math['min'](0x1,c));if(d==this[w(0x227)])return![];return this['value']=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}['setOrientation'](c){if(c==this['orientation'])return![];return this['orientation']=c,this['updateLayout'](),!![];}['getCssVar'](c){const x=k,d=getComputedStyle(this['root'])[x(0x1cc)](c);if(!d)return null;return d[x(0x22c)]();}[k(0x1f2)](c){const d=new CustomEvent('scrollbar-input',{'detail':c});this['host']['dispatchEvent'](d);}[k(0x20d)](c,d,e,g=0x0){const y=k;this['stopEventRepetition'](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[y(0x20d)](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}[k(0x1e9)](){this['eventTimeoutId']&&(clearTimeout(this['eventTimeoutId']),this['eventTimeoutId']=undefined);}['startPointerCapture'](c,d){const z=k;this['stopPointerCapture'](),c[z(0x1ec)](d),this[z(0x225)]=c,this['pointerCaptureId']=d;}['stopPointerCapture'](){const A=k;if(!this[A(0x218)])return;this[A(0x225)][A(0x223)](this[A(0x218)]),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const B=k;if(!this[B(0x1d7)]||this[B(0x218)])return;if(!c[B(0x214)]||c[B(0x1e2)]||c['ctrlKey']||c[B(0x20e)]||c['shiftKey']||c['button']!=0x0)return;const d=this['trough'][B(0x216)](),e=this['orientation']?c['clientY']-d[B(0x1d8)]:c[B(0x208)]-d[B(0x222)],f=(this['orientation']?d[B(0x22b)]:d[B(0x1f9)])*(0x1-this['getEffectiveThumbSize']())*this['value'],g=e>f,h=g?'incrementLarge':B(0x1fb);this['troughActive']=!![],c['preventDefault'](),this['startPointerCapture'](this[B(0x203)],c['pointerId']),this['fireEventRepeatedly'](h,this['clickRepeatDelay'],this[B(0x1cf)]);};['onButtonPointerDown']=(c,d)=>{const C=k;if(!this[C(0x1d7)]||this[C(0x218)])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c['metaKey']||c['shiftKey']||c[C(0x1f3)]!=0x0)return;switch(d){case 0x1:this[C(0x224)]=!![];break;case 0x2:this[C(0x1e1)]=!![];break;}const e=d==0x1?C(0x20a):'incrementSmall';this[C(0x1f6)](),c['preventDefault']();const f=d==0x1?this['button1']:this['button2'];this[C(0x1dd)](f,c['pointerId']),this['fireEventRepeatedly'](e,this['clickRepeatDelay'],this[C(0x1cf)]);};['onThumbPointerDown']=c=>{const D=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c[D(0x214)]||c[D(0x1e2)]||c['ctrlKey']||c[D(0x20e)]||c[D(0x1e8)]||c['button']!=0x0)return;this['dragStartPos']=this[D(0x1fa)]?c['clientY']:c[D(0x208)],this[D(0x20c)]=this[D(0x227)],this['thumbDragging']=!![],this['updateStyle'](),c[D(0x201)](),this[D(0x1dd)](this['thumb'],c[D(0x1e7)]);};['onThumbPointerMove']=c=>{const E=k;if(!this[E(0x1d7)])return;if(!c[E(0x214)]||!this['thumbDragging'])return;const d=this[E(0x1fa)]?c['clientY']:c['clientX'],e=d-this['dragStartPos'],f=this[E(0x1d1)](e),g=this[E(0x20c)]+f;c['preventDefault'](),this[E(0x1da)](g)&&this['fireEvent']('value');};['onPointerUp']=c=>{const F=k;if(!this['isConnected'])return;if(!c['isPrimary'])return;this['resetInteractionState'](),this['updateStyle'](),this[F(0x1e9)](),this[F(0x21e)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{[k(0x204)];constructor(){const G=k;super(),this[G(0x204)]=new Widget(this);const c=parseFloat(this[G(0x1de)]('value'));if(!isNaN(c))this[G(0x204)][G(0x227)]=c;if(this[G(0x211)](G(0x227))){let d=this[G(0x227)];delete this[G(0x227)];if(!isNaN(d))this['widget'][G(0x227)]=d;}}[k(0x22a)](){this['widget']['connectedCallback']();}['disconnectedCallback'](){const H=k;this[H(0x204)]['disconnectedCallback']();}get['thumbSize'](){const I=k;return this[I(0x204)]['thumbSize'];}set[k(0x221)](c){const J=k;this[J(0x204)][J(0x21a)](c);}get[k(0x227)](){const K=k;return this[K(0x204)][K(0x227)];}set['value'](c){this['widget']['setValue'](c);}get[k(0x1fa)](){const L=k;return formatOrientation(this[L(0x204)][L(0x1fa)]);}set[k(0x1fa)](c){const M=k;this['widget'][M(0x1dc)](decodeOrientation(c))&&this[M(0x205)]('orientation',this[M(0x1fa)]);}get['orientationBoolean'](){const N=k;return this[N(0x204)][N(0x1fa)];}static get[k(0x22e)](){const O=k;return[O(0x1fa)];}['attributeChangedCallback'](c,d,e){const P=k;switch(c){case P(0x1fa):{e&&this['widget'][P(0x1dc)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
    :host {
       display: block;
       contain: content;
       background-color: var(--wcd-plain-scrollbar-track-background-color, var(--plain-scrollbar-track-background-color, #f8f8f8));
       border-style: solid;
       border-width: 1px;
       border-color: var(--wcd-plain-scrollbar-track-border-color, var(--plain-scrollbar-track-border-color, #dddddd));
    }
    #root {
       touch-action: none;
       user-select: none;
       box-sizing: border-box;
       position: relative;
       width: 100%;
       height: 100%;
    }
    #trough {
       position: absolute;
    }
    #root.vertical #trough {
       width: 100%;
       top: ${buttonSize};
       bottom: ${buttonSize};
    }
    #root.horizontal #trough {
       height: 100%;
       left: ${buttonSize};
       right: ${buttonSize};
    }
    #thumb {
       box-sizing: border-box;
       position: absolute;
       width: 100%;
       height: 100%;
       background-color: var(--wcd-plain-scrollbar-thumb-background-color, var(--plain-scrollbar-thumb-background-color, #f0f0f0));
       border-style: solid;
       border-width: var(--wcd-plain-scrollbar-thumb-border-width, var(--plain-scrollbar-thumb-border-width, 1px));
       border-color: var(--wcd-plain-scrollbar-thumb-border-color, var(--plain-scrollbar-thumb-border-color, #b8b8b8));
       border-radius: var(--wcd-plain-scrollbar-thumb-border-radius, var(--plain-scrollbar-thumb-border-radius, 4px));
       transition: background-color 50ms linear;
    }
    #thumb:hover {
       background-color: var(--wcd-plain-scrollbar-thumb-background-color-hover, var(--plain-scrollbar-thumb-background-color-hover, #e0e0e0));
    }
    #thumb.active {
       background-color: var(--wcd-plain-scrollbar-thumb-background-color-active, var(--plain-scrollbar-thumb-background-color-active, #c0c0c0));
    }
    #button1,
    #button2 {
       box-sizing: border-box;
       position: absolute;
       display: block;
       fill: var(--wcd-plain-scrollbar-button-color, var(--plain-scrollbar-button-color, #606060));
    }
    #root.vertical #button1 {
       top: 0;
       width: 100%;
       height: ${buttonSize};
    }
    #root.vertical #button2 {
       bottom: 0;
       width: 100%;
       height: ${buttonSize};
    }
    #root.horizontal #button1 {
       left: 0;
       height: 100%;
       width: ${buttonSize};
    }
    #root.horizontal #button2 {
       right: 0;
       height: 100%;
       width: ${buttonSize};
    }
    #upArrow,
    #downArrow,
    #leftArrow,
    #rightArrow {
       display: none;
       width: 100%;
       height: 100%;
    }
    #root.vertical #upArrow,
    #root.vertical #downArrow {
       display: block;
    }
    #root.horizontal #leftArrow,
    #root.horizontal #rightArrow {
       display: block;
    }
    #button1:hover,
    #button2:hover {
       background-color: var(--wcd-plain-scrollbar-button-color-hover, var(--plain-scrollbar-button-color-hover, #e0e0e0));
    }
    #button1.active,
    #button2.active {
       background-color: var(--wcd-plain-scrollbar-button-color-active, var(--plain-scrollbar-button-color-active, #c0c0c0));
    }
    `,scrollbarHtmlTemplate=html`
    <div id="root" part="root">
     <div id="button1" part="button button1">
      <svg id="upArrow" part="arrow upArrow" viewBox="-100 -100 200 200">${buttonPath}</svg>
      <svg id="leftArrow" part="arrow leftArrow" viewBox="-100 -100 200 200"><g transform="rotate(-90)">${buttonPath}</g></svg>
     </div>
     <div id="trough" part="trough">
      <div id="thumb" part="thumb"></div>
     </div>
     <div id="button2" part="button button2">
      <svg id="downArrow" part="arrow downArrow" viewBox="-100 -100 200 200"><g transform="rotate(180)">${buttonPath}</g></svg>
      <svg id="rightArrow" part="arrow rightArrow" viewBox="-100 -100 200 200"><g transform="rotate(90)">${buttonPath}</g></svg>
     </div>
    </div>
    `;function formatOrientation(c){const Q=k;return c?'vertical':Q(0x1fe);}function decodeOrientation(c){const R=k;switch(c){case R(0x1d6):return!![];case'horizontal':return![];default:throw new Error(R(0x1f4)+c+'\x22.');}}function percent(c){const S=k;return(c*0x64)[S(0x213)](0x3)+'%';}function decodePxValue(c){const T=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[T(0x1ed)](0x0,c['length']-0x2));}customElements[k(0x22d)]('node-projects-plain-scrollbar',PlainScrollbar);function a(){const U=['onThumbPointerDown','max','pointercancel','root','vertical','isConnected','top','attachShadow','setValue','363464HoaNZN','setOrientation','startPointerCapture','getAttribute','getEffectiveThumbSize','2649432QTpJyJ','button2Active','altKey','resetInteractionState','clickRepeatDelay','style','6qqZtYo','pointerId','shiftKey','stopEventRepetition','117XFydeL','57174QQPoSJ','setPointerCapture','substring','#root','contextmenu','defaultThumbMinSize','pointerup','fireEvent','button','Invalid\x20orientation\x20value\x20\x22','dragStartPos','updateStyle','none','onThumbPointerMove','width','orientation','decrementLarge','classList','1840619XAtzgB','horizontal','160ACcTjV','427rpWcKW','preventDefault','button1','trough','widget','setAttribute','getCssVar','active','clientX','thumb','decrementSmall','querySelector','dragStartValue','fireEventRepeatedly','metaKey','getThroughSize','toggle','hasOwnProperty','button2','toFixed','isPrimary','addEventListener','getBoundingClientRect','1324590eVniaI','pointerCaptureId','updateLayout','setThumbSize','updateThumbPosition','eventTimeoutId','onButtonPointerDown','stopPointerCapture','2710860gnZdYS','pointerdown','thumbSize','left','releasePointerCapture','button1Active','pointerCaptureElement','86329BXHqzR','value','appendChild','--plain-scrollbar-thumb-min-size','connectedCallback','height','trim','define','observedAttributes','pointermove','open','adoptedStyleSheets','getPropertyValue','onPointerUp','host','clickRepeatInterval','min','computeThumbMoveValue'];a=function(){return U;};return a();}