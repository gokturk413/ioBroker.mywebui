const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1bd))/0x1+-parseInt(j(0x1b7))/0x2+parseInt(j(0x1d7))/0x3+-parseInt(j(0x1b1))/0x4*(-parseInt(j(0x1f0))/0x5)+-parseInt(j(0x1d6))/0x6*(-parseInt(j(0x1c3))/0x7)+parseInt(j(0x1f4))/0x8+parseInt(j(0x1f8))/0x9*(-parseInt(j(0x1f3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5b708));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x205)];['root'];['trough'];[k(0x1ee)];[k(0x1e6)];['thumb'];['isConnected']=![];['thumbSize']=0.3;[k(0x1bb)]=0x0;['orientation']=![];[k(0x1ab)]=0x12c;['clickRepeatInterval']=0x64;[k(0x1ba)]=0x19;['dragStartPos'];[k(0x211)];[k(0x1e4)];['pointerCaptureId'];[k(0x1af)];[k(0x1ef)];[k(0x1d9)];['button2Active'];[k(0x1fe)];constructor(c){const l=k;this[l(0x205)]=c,c[l(0x1c8)]({'mode':l(0x1b3)});const d=c[l(0x1f6)];d['appendChild'](scrollbarHtmlTemplate['content'][l(0x20a)](!![])),d[l(0x204)]=[scrollbarStyle],this[l(0x1c9)]=d[l(0x1c6)](l(0x1cf)),this[l(0x1d4)]=d['querySelector']('#trough'),this[l(0x1ee)]=d['querySelector']('#button1'),this[l(0x1e6)]=d['querySelector']('#button2'),this[l(0x209)]=d[l(0x1c6)]('#thumb'),this['trough'][l(0x1f9)]('pointerdown',this['onTroughPointerDown']),this[l(0x1d4)]['addEventListener'](l(0x1e8),this['onPointerUp']),this[l(0x1d4)]['addEventListener']('pointercancel',this[l(0x1c7)]),this[l(0x1ee)][l(0x1f9)]('pointerdown',e=>this[l(0x1c4)](e,0x1)),this['button1'][l(0x1f9)](l(0x1e8),this['onPointerUp']),this['button1'][l(0x1f9)]('pointercancel',this['onPointerUp']),this['button1'][l(0x1f9)]('contextmenu',f=>f['preventDefault']()),this['button2']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this[l(0x1e6)]['addEventListener']('pointerup',this[l(0x1c7)]),this['button2']['addEventListener']('pointercancel',this[l(0x1c7)]),this[l(0x1e6)]['addEventListener']('contextmenu',f=>f[l(0x1ec)]()),this[l(0x209)]['addEventListener'](l(0x1fd),this[l(0x201)]),this['thumb']['addEventListener']('pointerup',this[l(0x1c7)]),this[l(0x209)]['addEventListener'](l(0x1ac),this['onPointerUp']),this[l(0x209)]['addEventListener']('pointermove',this[l(0x1c2)]),this['resetInteractionState']();}[k(0x1de)](){const m=k;this[m(0x1ef)]=![],this['button1Active']=![],this['button2Active']=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x1d2)]=!![],this['resetInteractionState'](),this['updateLayout'](),this[n(0x1fa)]();}['disconnectedCallback'](){const o=k;this[o(0x1d2)]=![],this['resetInteractionState'](),this[o(0x200)](),this[o(0x1fc)]();}[k(0x20e)](){const p=k;if(!this[p(0x1d2)])return;this[p(0x1c9)]['classList'][p(0x1ad)](p(0x1eb),!this['orientation']),this[p(0x1c9)]['classList']['toggle'](p(0x1dd),this['orientation']),this[p(0x209)][p(0x1b5)]['display']=this[p(0x1cd)]==0x0?'none':'',this['thumb'][p(0x1b5)][p(0x1b4)]=this['orientation']?percent(this[p(0x1e1)]()):'',this[p(0x209)]['style'][p(0x20f)]=this['orientation']?'':percent(this['getEffectiveThumbSize']()),this['thumb'][p(0x1b5)][p(0x1b9)]='',this[p(0x209)][p(0x1b5)][p(0x1be)]='',this['updateThumbPosition']();}['updateStyle'](){const q=k;if(!this[q(0x1d2)])return;this['thumb'][q(0x206)]['toggle'](q(0x1e9),this[q(0x1ef)]),this['button1'][q(0x206)]['toggle'](q(0x1e9),this['button1Active']),this[q(0x1e6)][q(0x206)][q(0x1ad)]('active',this[q(0x1bc)]),void this[q(0x1fe)];}[k(0x1d8)](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this[r(0x1bb)];this[r(0x20d)]?this[r(0x209)][r(0x1b5)]['top']=percent(c):this['thumb'][r(0x1b5)]['left']=percent(c);}[k(0x212)](){const s=k;return this[s(0x20d)]?this['trough']['clientHeight']:this['trough']['clientWidth'];}['computeThumbMoveValue'](c){const t=k,d=this[t(0x212)]()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}[k(0x1c1)](c){const u=k,d=Math['max'](0x0,Math['min'](0x1,c));if(d==this[u(0x1cd)])return;this['thumbSize']=d,this[u(0x20e)]();}['getThumbMinSize'](){const c=this['getCssVar']('--plain-scrollbar-thumb-min-size');if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0x1e1)](){const v=k,c=this[v(0x1b6)](),d=this['getThroughSize']();if(!d)return this[v(0x1cd)];const e=Math['min'](0x1,c/d);return Math[v(0x1f7)](e,this['thumbSize']);}['setValue'](c){const w=k,d=Math[w(0x1f7)](0x0,Math[w(0x1dc)](0x1,c));if(d==this[w(0x1bb)])return![];return this['value']=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}['setOrientation'](c){const x=k;if(c==this[x(0x20d)])return![];return this[x(0x20d)]=c,this['updateLayout'](),!![];}[k(0x1e2)](c){const y=k,d=getComputedStyle(this['root'])[y(0x1d5)](c);if(!d)return null;return d[y(0x1cc)]();}['fireEvent'](c){const z=k,d=new CustomEvent(z(0x1c5),{'detail':c});this[z(0x205)][z(0x1b2)](d);}[k(0x1ed)](c,d,e,g=0x0){const A=k;this[A(0x200)](),this[A(0x1bf)](c);const h=g==0x0?d:e,i=()=>this[A(0x1ed)](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}['stopEventRepetition'](){const B=k;this[B(0x1e4)]&&(clearTimeout(this[B(0x1e4)]),this[B(0x1e4)]=undefined);}[k(0x1da)](c,d){const C=k;this[C(0x1fc)](),c['setPointerCapture'](d),this['pointerCaptureElement']=c,this[C(0x202)]=d;}[k(0x1fc)](){const D=k;if(!this[D(0x202)])return;this['pointerCaptureElement'][D(0x1e0)](this[D(0x202)]),this[D(0x202)]=undefined;}[k(0x1d1)]=c=>{const E=k;if(!this[E(0x1d2)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c[E(0x1d3)]||c['ctrlKey']||c['metaKey']||c[E(0x1cb)]||c[E(0x20c)]!=0x0)return;const d=this[E(0x1d4)][E(0x1b0)](),e=this[E(0x20d)]?c['clientY']-d['top']:c['clientX']-d['left'],f=(this[E(0x20d)]?d[E(0x1b4)]:d['width'])*(0x1-this[E(0x1e1)]())*this[E(0x1bb)],g=e>f,h=g?'incrementLarge':E(0x1e5);this['troughActive']=!![],c['preventDefault'](),this['startPointerCapture'](this['trough'],c[E(0x1d0)]),this[E(0x1ed)](h,this[E(0x1ab)],this[E(0x1c0)]);};[k(0x1c4)]=(c,d)=>{const F=k;if(!this['isConnected']||this[F(0x202)])return;if(!c[F(0x1e7)]||c['altKey']||c['ctrlKey']||c['metaKey']||c['shiftKey']||c[F(0x20c)]!=0x0)return;switch(d){case 0x1:this[F(0x1d9)]=!![];break;case 0x2:this[F(0x1bc)]=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this[F(0x1fa)](),c['preventDefault']();const f=d==0x1?this['button1']:this[F(0x1e6)];this[F(0x1da)](f,c[F(0x1d0)]),this[F(0x1ed)](e,this[F(0x1ab)],this[F(0x1c0)]);};[k(0x201)]=c=>{const G=k;if(!this[G(0x1d2)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c[G(0x1d3)]||c['ctrlKey']||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;this['dragStartPos']=this['orientation']?c[G(0x1ca)]:c[G(0x213)],this['dragStartValue']=this['value'],this['thumbDragging']=!![],this['updateStyle'](),c['preventDefault'](),this[G(0x1da)](this[G(0x209)],c['pointerId']);};['onThumbPointerMove']=c=>{const H=k;if(!this[H(0x1d2)])return;if(!c[H(0x1e7)]||!this['thumbDragging'])return;const d=this[H(0x20d)]?c['clientY']:c['clientX'],e=d-this[H(0x1b8)],f=this[H(0x1f2)](e),g=this['dragStartValue']+f;c[H(0x1ec)](),this[H(0x203)](g)&&this['fireEvent']('value');};[k(0x1c7)]=c=>{const I=k;if(!this['isConnected'])return;if(!c['isPrimary'])return;this[I(0x1de)](),this['updateStyle'](),this['stopEventRepetition'](),this[I(0x1fc)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{[k(0x208)];constructor(){const J=k;super(),this['widget']=new Widget(this);const c=parseFloat(this['getAttribute']('value'));if(!isNaN(c))this[J(0x208)][J(0x1bb)]=c;if(this[J(0x1db)](J(0x1bb))){let d=this['value'];delete this['value'];if(!isNaN(d))this['widget'][J(0x1bb)]=d;}}[k(0x20b)](){const K=k;this[K(0x208)]['connectedCallback']();}['disconnectedCallback'](){const L=k;this[L(0x208)]['disconnectedCallback']();}get['thumbSize'](){const M=k;return this['widget'][M(0x1cd)];}set[k(0x1cd)](c){const N=k;this['widget'][N(0x1c1)](c);}get[k(0x1bb)](){const O=k;return this[O(0x208)][O(0x1bb)];}set[k(0x1bb)](c){const P=k;this[P(0x208)][P(0x203)](c);}get[k(0x20d)](){const Q=k;return formatOrientation(this['widget'][Q(0x20d)]);}set[k(0x20d)](c){const R=k;this[R(0x208)][R(0x1ae)](decodeOrientation(c))&&this[R(0x1ff)](R(0x20d),this['orientation']);}get[k(0x207)](){const S=k;return this[S(0x208)]['orientation'];}static get[k(0x1f1)](){const T=k;return[T(0x20d)];}[k(0x1df)](c,d,e){const U=k;switch(c){case'orientation':{e&&this[U(0x208)]['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x210),buttonPath=k(0x1f5),scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function b(c,d){c=c-0x1ab;const e=a();let f=e[c];return f;}function decodeOrientation(c){switch(c){case'vertical':return!![];case'horizontal':return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){const V=k;return(c*0x64)[V(0x1fb)](0x3)+'%';}function decodePxValue(c){const W=k;if(!c||!c[W(0x1e3)]('px'))return undefined;return Number(c['substring'](0x0,c[W(0x1ea)]-0x2));}function a(){const X=['stopEventRepetition','onThumbPointerDown','pointerCaptureId','setValue','adoptedStyleSheets','host','classList','orientationBoolean','widget','thumb','cloneNode','connectedCallback','button','orientation','updateLayout','width','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','dragStartValue','getThroughSize','clientX','clickRepeatDelay','pointercancel','toggle','setOrientation','pointerCaptureElement','getBoundingClientRect','4EdpJBU','dispatchEvent','open','height','style','getThumbMinSize','437630slXFSJ','dragStartPos','top','defaultThumbMinSize','value','button2Active','47457sLvdKc','left','fireEvent','clickRepeatInterval','setThumbSize','onThumbPointerMove','21ioKdVT','onButtonPointerDown','scrollbar-input','querySelector','onPointerUp','attachShadow','root','clientY','shiftKey','trim','thumbSize','define','#root','pointerId','onTroughPointerDown','isConnected','altKey','trough','getPropertyValue','475542HycIkh','1330089BAUuzJ','updateThumbPosition','button1Active','startPointerCapture','hasOwnProperty','min','vertical','resetInteractionState','attributeChangedCallback','releasePointerCapture','getEffectiveThumbSize','getCssVar','endsWith','eventTimeoutId','decrementLarge','button2','isPrimary','pointerup','active','length','horizontal','preventDefault','fireEventRepeatedly','button1','thumbDragging','2738815fXVqOT','observedAttributes','computeThumbMoveValue','11174040EQbkNw','4234520XYtreQ','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','shadowRoot','max','9ZohQPP','addEventListener','updateStyle','toFixed','stopPointerCapture','pointerdown','troughActive','setAttribute'];a=function(){return X;};return a();}customElements[k(0x1ce)]('node-projects-plain-scrollbar',PlainScrollbar);