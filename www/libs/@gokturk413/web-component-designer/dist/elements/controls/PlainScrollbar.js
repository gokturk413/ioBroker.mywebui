const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1c4))/0x1+-parseInt(j(0x207))/0x2*(-parseInt(j(0x20f))/0x3)+parseInt(j(0x1e1))/0x4+-parseInt(j(0x206))/0x5*(-parseInt(j(0x1d0))/0x6)+parseInt(j(0x200))/0x7+parseInt(j(0x204))/0x8+parseInt(j(0x1e0))/0x9*(-parseInt(j(0x1ea))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x87be2));function b(c,d){c=c-0x1ad;const e=a();let f=e[c];return f;}import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x1df)];[k(0x1be)];['trough'];[k(0x1e5)];[k(0x1eb)];[k(0x1ca)];[k(0x1dc)]=![];[k(0x1c6)]=0.3;['value']=0x0;[k(0x1c5)]=![];[k(0x1e6)]=0x12c;[k(0x1cf)]=0x64;['defaultThumbMinSize']=0x19;[k(0x1da)];[k(0x1e9)];['eventTimeoutId'];['pointerCaptureId'];[k(0x20a)];[k(0x1e8)];['button1Active'];['button2Active'];[k(0x1e2)];constructor(c){const l=k;this['host']=c,c[l(0x1de)]({'mode':l(0x1ec)});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d['querySelector']('#root'),this['trough']=d['querySelector']('#trough'),this['button1']=d['querySelector']('#button1'),this[l(0x1eb)]=d[l(0x1c0)]('#button2'),this['thumb']=d['querySelector']('#thumb'),this['trough']['addEventListener']('pointerdown',this[l(0x1fe)]),this['trough'][l(0x1d9)]('pointerup',this[l(0x1fc)]),this[l(0x1b0)][l(0x1d9)](l(0x1cc),this['onPointerUp']),this['button1']['addEventListener'](l(0x1f7),e=>this[l(0x1d1)](e,0x1)),this[l(0x1e5)][l(0x1d9)]('pointerup',this['onPointerUp']),this['button1'][l(0x1d9)](l(0x1cc),this['onPointerUp']),this['button1'][l(0x1d9)](l(0x208),f=>f['preventDefault']()),this[l(0x1eb)]['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this[l(0x1eb)][l(0x1d9)]('pointerup',this['onPointerUp']),this['button2']['addEventListener'](l(0x1cc),this['onPointerUp']),this[l(0x1eb)][l(0x1d9)]('contextmenu',f=>f['preventDefault']()),this[l(0x1ca)][l(0x1d9)](l(0x1f7),this[l(0x1f4)]),this['thumb']['addEventListener']('pointerup',this[l(0x1fc)]),this[l(0x1ca)]['addEventListener']('pointercancel',this[l(0x1fc)]),this[l(0x1ca)][l(0x1d9)]('pointermove',this[l(0x1f0)]),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this['thumbDragging']=![],this['button1Active']=![],this[m(0x1e4)]=![],this[m(0x1e2)]=![];}['connectedCallback'](){const n=k;this[n(0x1dc)]=!![],this['resetInteractionState'](),this['updateLayout'](),this[n(0x1ef)]();}[k(0x1f3)](){const o=k;this[o(0x1dc)]=![],this['resetInteractionState'](),this[o(0x1bd)](),this[o(0x1d5)]();}['updateLayout'](){const p=k;if(!this['isConnected'])return;this['root']['classList']['toggle'](p(0x1ba),!this['orientation']),this['root'][p(0x20c)]['toggle'](p(0x1ee),this['orientation']),this[p(0x1ca)][p(0x1d3)]['display']=this['thumbSize']==0x0?'none':'',this['thumb']['style'][p(0x1f9)]=this['orientation']?percent(this[p(0x20b)]()):'',this['thumb'][p(0x1d3)][p(0x1c8)]=this[p(0x1c5)]?'':percent(this[p(0x20b)]()),this['thumb'][p(0x1d3)][p(0x1d6)]='',this['thumb'][p(0x1d3)][p(0x1fb)]='',this['updateThumbPosition']();}[k(0x1ef)](){const q=k;if(!this[q(0x1dc)])return;this['thumb'][q(0x20c)][q(0x1f1)]('active',this['thumbDragging']),this[q(0x1e5)]['classList']['toggle']('active',this[q(0x1c9)]),this[q(0x1eb)]['classList']['toggle'](q(0x1c1),this['button2Active']),void this['troughActive'];}['updateThumbPosition'](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this['value'];this[r(0x1c5)]?this[r(0x1ca)][r(0x1d3)]['top']=percent(c):this[r(0x1ca)]['style'][r(0x1fb)]=percent(c);}[k(0x1cb)](){const s=k;return this[s(0x1c5)]?this['trough'][s(0x1ae)]:this['trough'][s(0x1ed)];}[k(0x20d)](c){const t=k,d=this['getThroughSize']()*(0x1-this[t(0x20b)]());if(d<EPS)return 0x0;return c/d;}[k(0x1c2)](c){const u=k,d=Math[u(0x211)](0x0,Math['min'](0x1,c));if(d==this['thumbSize'])return;this['thumbSize']=d,this['updateLayout']();}[k(0x1f2)](){const v=k,c=this['getCssVar'](v(0x201));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0x20b)](){const w=k,c=this[w(0x1f2)](),d=this['getThroughSize']();if(!d)return this[w(0x1c6)];const e=Math['min'](0x1,c/d);return Math['max'](e,this[w(0x1c6)]);}[k(0x1bf)](c){const x=k,d=Math[x(0x211)](0x0,Math[x(0x1b2)](0x1,c));if(d==this['value'])return![];return this[x(0x1d7)]=isNaN(d)?0x0:d,this[x(0x1b1)](),!![];}['setOrientation'](c){const y=k;if(c==this['orientation'])return![];return this[y(0x1c5)]=c,this[y(0x1f8)](),!![];}['getCssVar'](c){const z=k,d=getComputedStyle(this['root'])[z(0x1d4)](c);if(!d)return null;return d[z(0x1c3)]();}[k(0x202)](c){const d=new CustomEvent('scrollbar-input',{'detail':c});this['host']['dispatchEvent'](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const A=k;this['stopEventRepetition'](),this[A(0x202)](c);const h=g==0x0?d:e,i=()=>this[A(0x1b7)](c,d,e,g+0x1);this[A(0x1dd)]=setTimeout(i,h);}['stopEventRepetition'](){const B=k;this['eventTimeoutId']&&(clearTimeout(this[B(0x1dd)]),this[B(0x1dd)]=undefined);}['startPointerCapture'](c,d){const C=k;this[C(0x1d5)](),c[C(0x1b8)](d),this[C(0x20a)]=c,this['pointerCaptureId']=d;}['stopPointerCapture'](){const D=k;if(!this['pointerCaptureId'])return;this['pointerCaptureElement'][D(0x1d2)](this[D(0x1ad)]),this[D(0x1ad)]=undefined;}['onTroughPointerDown']=c=>{const E=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c[E(0x205)]||c[E(0x1ce)]||c[E(0x1db)]||c['shiftKey']||c['button']!=0x0)return;const d=this[E(0x1b0)]['getBoundingClientRect'](),e=this['orientation']?c['clientY']-d[E(0x1d6)]:c['clientX']-d['left'],f=(this['orientation']?d['height']:d['width'])*(0x1-this[E(0x20b)]())*this[E(0x1d7)],g=e>f,h=g?E(0x1e3):E(0x1b5);this['troughActive']=!![],c['preventDefault'](),this[E(0x1fd)](this[E(0x1b0)],c['pointerId']),this['fireEventRepeatedly'](h,this[E(0x1e6)],this['clickRepeatInterval']);};['onButtonPointerDown']=(c,d)=>{const F=k;if(!this['isConnected']||this[F(0x1ad)])return;if(!c['isPrimary']||c[F(0x205)]||c['ctrlKey']||c[F(0x1db)]||c[F(0x1f5)]||c['button']!=0x0)return;switch(d){case 0x1:this[F(0x1c9)]=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?F(0x1bc):F(0x1d8);this[F(0x1ef)](),c[F(0x1cd)]();const f=d==0x1?this['button1']:this['button2'];this['startPointerCapture'](f,c['pointerId']),this['fireEventRepeatedly'](e,this[F(0x1e6)],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const G=k;if(!this[G(0x1dc)]||this[G(0x1ad)])return;if(!c['isPrimary']||c[G(0x205)]||c[G(0x1ce)]||c[G(0x1db)]||c[G(0x1f5)]||c['button']!=0x0)return;this[G(0x1da)]=this[G(0x1c5)]?c[G(0x1c7)]:c[G(0x1ff)],this['dragStartValue']=this[G(0x1d7)],this['thumbDragging']=!![],this[G(0x1ef)](),c['preventDefault'](),this[G(0x1fd)](this['thumb'],c[G(0x1fa)]);};['onThumbPointerMove']=c=>{const H=k;if(!this[H(0x1dc)])return;if(!c[H(0x1f6)]||!this['thumbDragging'])return;const d=this[H(0x1c5)]?c['clientY']:c['clientX'],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this[H(0x1e9)]+f;c[H(0x1cd)](),this['setValue'](g)&&this[H(0x202)](H(0x1d7));};['onPointerUp']=c=>{const I=k;if(!this[I(0x1dc)])return;if(!c[I(0x1f6)])return;this[I(0x1bb)](),this[I(0x1ef)](),this[I(0x1bd)](),this[I(0x1d5)](),c[I(0x1cd)]();};}export class PlainScrollbar extends HTMLElement{[k(0x1b6)];constructor(){const J=k;super(),this['widget']=new Widget(this);const c=parseFloat(this[J(0x210)](J(0x1d7)));if(!isNaN(c))this[J(0x1b6)]['value']=c;if(this[J(0x20e)]('value')){let d=this['value'];delete this[J(0x1d7)];if(!isNaN(d))this['widget'][J(0x1d7)]=d;}}[k(0x1af)](){const K=k;this[K(0x1b6)][K(0x1af)]();}[k(0x1f3)](){const L=k;this[L(0x1b6)]['disconnectedCallback']();}get[k(0x1c6)](){const M=k;return this[M(0x1b6)][M(0x1c6)];}set['thumbSize'](c){this['widget']['setThumbSize'](c);}get['value'](){const N=k;return this['widget'][N(0x1d7)];}set['value'](c){this['widget']['setValue'](c);}get[k(0x1c5)](){const O=k;return formatOrientation(this['widget'][O(0x1c5)]);}set['orientation'](c){const P=k;this['widget']['setOrientation'](decodeOrientation(c))&&this['setAttribute'](P(0x1c5),this['orientation']);}get[k(0x203)](){const Q=k;return this[Q(0x1b6)][Q(0x1c5)];}static get['observedAttributes'](){return['orientation'];}[k(0x1e7)](c,d,e){const R=k;switch(c){case R(0x1c5):{e&&this['widget'][R(0x1b3)](decodeOrientation(e));break;}}}}function a(){const V=['1714868LLuopV','troughActive','incrementLarge','button2Active','button1','clickRepeatDelay','attributeChangedCallback','thumbDragging','dragStartValue','640WcciIc','button2','open','clientWidth','vertical','updateStyle','onThumbPointerMove','toggle','getThumbMinSize','disconnectedCallback','onThumbPointerDown','shiftKey','isPrimary','pointerdown','updateLayout','height','pointerId','left','onPointerUp','startPointerCapture','onTroughPointerDown','clientX','1692453jofwuv','--plain-scrollbar-thumb-min-size','fireEvent','orientationBoolean','4144944OXbQXu','altKey','25OOBBNz','10FhIgOP','contextmenu','toFixed','pointerCaptureElement','getEffectiveThumbSize','classList','computeThumbMoveValue','hasOwnProperty','480279zapjpR','getAttribute','max','pointerCaptureId','clientHeight','connectedCallback','trough','updateThumbPosition','min','setOrientation','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','decrementLarge','widget','fireEventRepeatedly','setPointerCapture','define','horizontal','resetInteractionState','decrementSmall','stopEventRepetition','root','setValue','querySelector','active','setThumbSize','trim','619149PzveAp','orientation','thumbSize','clientY','width','button1Active','thumb','getThroughSize','pointercancel','preventDefault','ctrlKey','clickRepeatInterval','1306596qsEDTZ','onButtonPointerDown','releasePointerCapture','style','getPropertyValue','stopPointerCapture','top','value','incrementSmall','addEventListener','dragStartPos','metaKey','isConnected','eventTimeoutId','attachShadow','host','441711PdLBIT'];a=function(){return V;};return a();}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0x1b4),scrollbarStyle=css`
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
    `;function formatOrientation(c){const S=k;return c?'vertical':S(0x1ba);}function decodeOrientation(c){const T=k;switch(c){case T(0x1ee):return!![];case T(0x1ba):return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){const U=k;return(c*0x64)[U(0x209)](0x3)+'%';}function decodePxValue(c){if(!c||!c['endsWith']('px'))return undefined;return Number(c['substring'](0x0,c['length']-0x2));}customElements[k(0x1b9)]('node-projects-plain-scrollbar',PlainScrollbar);