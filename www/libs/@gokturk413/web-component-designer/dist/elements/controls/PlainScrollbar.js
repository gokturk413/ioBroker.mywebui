const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1b1))/0x1+-parseInt(j(0x1a5))/0x2*(parseInt(j(0x190))/0x3)+-parseInt(j(0x1b7))/0x4*(parseInt(j(0x182))/0x5)+-parseInt(j(0x184))/0x6+-parseInt(j(0x1d1))/0x7+-parseInt(j(0x196))/0x8*(parseInt(j(0x16a))/0x9)+parseInt(j(0x175))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8e666));function a(){const X=['pointerup','clickRepeatDelay','min','scrollbar-input','isPrimary','shadowRoot','button2','max','setValue','computeThumbMoveValue','pointerCaptureElement','vertical','8CzSbVh','dragStartValue','orientation','stopPointerCapture','updateLayout','#button1','style','pointerId','#trough','dispatchEvent','value','clientY','1008604itTKZj','thumbDragging','stopEventRepetition','eventTimeoutId','active','none','260332omlrGi','classList','pointerCaptureId','observedAttributes','disconnectedCallback','#thumb','isConnected','width','metaKey','incrementSmall','pointercancel','onThumbPointerDown','getThroughSize','startPointerCapture','left','Invalid\x20orientation\x20value\x20\x22','updateStyle','contextmenu','endsWith','toggle','--plain-scrollbar-thumb-min-size','top','clientX','thumb','trim','setOrientation','1622719NSKvBT','fireEvent','onTroughPointerDown','26631MrWNKm','button2Active','getThumbMinSize','getEffectiveThumbSize','incrementLarge','resetInteractionState','altKey','button1Active','thumbSize','orientationBoolean','button1','31010710zEaTYR','height','fireEventRepeatedly','addEventListener','hasOwnProperty','clientHeight','ctrlKey','updateThumbPosition','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','root','open','querySelector','defaultThumbMinSize','85dSvceb','clickRepeatInterval','6872928TafAAZ','widget','troughActive','horizontal','shiftKey','button','pointerdown','dragStartPos','attachShadow','getBoundingClientRect','trough','display','704343EObDDd','connectedCallback','getCssVar','setThumbSize','preventDefault','onButtonPointerDown','280BMOFjS','onPointerUp','#root'];a=function(){return X;};return a();}import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];[k(0x17e)];['trough'];['button1'];[k(0x19f)];['thumb'];[k(0x1bd)]=![];[k(0x172)]=0.3;[k(0x1af)]=0x0;['orientation']=![];['clickRepeatDelay']=0x12c;['clickRepeatInterval']=0x64;['defaultThumbMinSize']=0x19;['dragStartPos'];['dragStartValue'];[k(0x1b4)];['pointerCaptureId'];['pointerCaptureElement'];['thumbDragging'];['button1Active'];['button2Active'];['troughActive'];constructor(c){const l=k;this['host']=c,c[l(0x18c)]({'mode':l(0x17f)});const d=c[l(0x19e)];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d['querySelector'](l(0x198)),this['trough']=d[l(0x180)](l(0x1ad)),this['button1']=d[l(0x180)](l(0x1aa)),this['button2']=d[l(0x180)]('#button2'),this[l(0x1ce)]=d[l(0x180)](l(0x1bc)),this['trough'][l(0x178)](l(0x18a),this[l(0x169)]),this[l(0x18e)][l(0x178)]('pointerup',this['onPointerUp']),this['trough'][l(0x178)](l(0x1c1),this[l(0x197)]),this['button1'][l(0x178)](l(0x18a),e=>this[l(0x195)](e,0x1)),this[l(0x174)]['addEventListener'](l(0x199),this['onPointerUp']),this['button1'][l(0x178)](l(0x1c1),this['onPointerUp']),this[l(0x174)][l(0x178)](l(0x1c8),f=>f['preventDefault']()),this['button2']['addEventListener'](l(0x18a),e=>this['onButtonPointerDown'](e,0x2)),this['button2'][l(0x178)]('pointerup',this['onPointerUp']),this[l(0x19f)][l(0x178)](l(0x1c1),this[l(0x197)]),this['button2'][l(0x178)]('contextmenu',f=>f[l(0x194)]()),this['thumb']['addEventListener']('pointerdown',this['onThumbPointerDown']),this['thumb'][l(0x178)]('pointerup',this[l(0x197)]),this['thumb']['addEventListener']('pointercancel',this['onPointerUp']),this['thumb']['addEventListener']('pointermove',this['onThumbPointerMove']),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this[m(0x1b2)]=![],this['button1Active']=![],this[m(0x16b)]=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x1bd)]=!![],this['resetInteractionState'](),this['updateLayout'](),this['updateStyle']();}[k(0x1bb)](){const o=k;this[o(0x1bd)]=![],this[o(0x16f)](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0x1a9)](){const p=k;if(!this[p(0x1bd)])return;this[p(0x17e)][p(0x1b8)][p(0x1ca)]('horizontal',!this['orientation']),this[p(0x17e)]['classList']['toggle'](p(0x1a4),this[p(0x1a7)]),this['thumb']['style'][p(0x18f)]=this['thumbSize']==0x0?p(0x1b6):'',this['thumb']['style'][p(0x176)]=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this['thumb']['style'][p(0x1be)]=this['orientation']?'':percent(this['getEffectiveThumbSize']()),this['thumb'][p(0x1ab)]['top']='',this[p(0x1ce)]['style'][p(0x1c5)]='',this[p(0x17c)]();}[k(0x1c7)](){const q=k;if(!this[q(0x1bd)])return;this[q(0x1ce)]['classList']['toggle'](q(0x1b5),this[q(0x1b2)]),this[q(0x174)]['classList']['toggle'](q(0x1b5),this[q(0x171)]),this[q(0x19f)]['classList'][q(0x1ca)](q(0x1b5),this[q(0x16b)]),void this[q(0x186)];}['updateThumbPosition'](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this[r(0x1af)];this['orientation']?this[r(0x1ce)]['style'][r(0x1cc)]=percent(c):this[r(0x1ce)][r(0x1ab)][r(0x1c5)]=percent(c);}['getThroughSize'](){const s=k;return this['orientation']?this['trough'][s(0x17a)]:this[s(0x18e)]['clientWidth'];}['computeThumbMoveValue'](c){const t=k,d=this[t(0x1c3)]()*(0x1-this[t(0x16d)]());if(d<EPS)return 0x0;return c/d;}[k(0x193)](c){const u=k,d=Math[u(0x1a0)](0x0,Math[u(0x19b)](0x1,c));if(d==this[u(0x172)])return;this['thumbSize']=d,this['updateLayout']();}[k(0x16c)](){const v=k,c=this[v(0x192)](v(0x1cb));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this[v(0x181)];return d;}[k(0x16d)](){const w=k,c=this[w(0x16c)](),d=this[w(0x1c3)]();if(!d)return this['thumbSize'];const e=Math[w(0x19b)](0x1,c/d);return Math[w(0x1a0)](e,this[w(0x172)]);}[k(0x1a1)](c){const x=k,d=Math['max'](0x0,Math['min'](0x1,c));if(d==this['value'])return![];return this[x(0x1af)]=isNaN(d)?0x0:d,this[x(0x17c)](),!![];}['setOrientation'](c){const y=k;if(c==this['orientation'])return![];return this[y(0x1a7)]=c,this['updateLayout'](),!![];}[k(0x192)](c){const z=k,d=getComputedStyle(this[z(0x17e)])['getPropertyValue'](c);if(!d)return null;return d[z(0x1cf)]();}['fireEvent'](c){const A=k,d=new CustomEvent(A(0x19c),{'detail':c});this['host'][A(0x1ae)](d);}[k(0x177)](c,d,e,g=0x0){const B=k;this[B(0x1b3)](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[B(0x177)](c,d,e,g+0x1);this[B(0x1b4)]=setTimeout(i,h);}['stopEventRepetition'](){const C=k;this['eventTimeoutId']&&(clearTimeout(this[C(0x1b4)]),this['eventTimeoutId']=undefined);}[k(0x1c4)](c,d){const D=k;this[D(0x1a8)](),c['setPointerCapture'](d),this[D(0x1a3)]=c,this['pointerCaptureId']=d;}[k(0x1a8)](){const E=k;if(!this[E(0x1b9)])return;this[E(0x1a3)]['releasePointerCapture'](this[E(0x1b9)]),this[E(0x1b9)]=undefined;}['onTroughPointerDown']=c=>{const F=k;if(!this['isConnected']||this[F(0x1b9)])return;if(!c[F(0x19d)]||c[F(0x170)]||c['ctrlKey']||c['metaKey']||c[F(0x188)]||c['button']!=0x0)return;const d=this[F(0x18e)][F(0x18d)](),e=this['orientation']?c['clientY']-d['top']:c['clientX']-d[F(0x1c5)],f=(this['orientation']?d['height']:d['width'])*(0x1-this[F(0x16d)]())*this[F(0x1af)],g=e>f,h=g?F(0x16e):'decrementLarge';this[F(0x186)]=!![],c['preventDefault'](),this[F(0x1c4)](this['trough'],c[F(0x1ac)]),this['fireEventRepeatedly'](h,this[F(0x19a)],this[F(0x183)]);};['onButtonPointerDown']=(c,d)=>{const G=k;if(!this[G(0x1bd)]||this['pointerCaptureId'])return;if(!c[G(0x19d)]||c['altKey']||c[G(0x17b)]||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':G(0x1c0);this['updateStyle'](),c[G(0x194)]();const f=d==0x1?this[G(0x174)]:this[G(0x19f)];this[G(0x1c4)](f,c['pointerId']),this['fireEventRepeatedly'](e,this['clickRepeatDelay'],this[G(0x183)]);};[k(0x1c2)]=c=>{const H=k;if(!this['isConnected']||this[H(0x1b9)])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c[H(0x1bf)]||c['shiftKey']||c[H(0x189)]!=0x0)return;this[H(0x18b)]=this['orientation']?c['clientY']:c[H(0x1cd)],this[H(0x1a6)]=this['value'],this['thumbDragging']=!![],this['updateStyle'](),c[H(0x194)](),this[H(0x1c4)](this['thumb'],c[H(0x1ac)]);};['onThumbPointerMove']=c=>{const I=k;if(!this[I(0x1bd)])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this['orientation']?c[I(0x1b0)]:c['clientX'],e=d-this['dragStartPos'],f=this[I(0x1a2)](e),g=this[I(0x1a6)]+f;c[I(0x194)](),this['setValue'](g)&&this[I(0x1d2)]('value');};[k(0x197)]=c=>{const J=k;if(!this['isConnected'])return;if(!c[J(0x19d)])return;this[J(0x16f)](),this[J(0x1c7)](),this[J(0x1b3)](),this[J(0x1a8)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{[k(0x185)];constructor(){const K=k;super(),this['widget']=new Widget(this);const c=parseFloat(this['getAttribute'](K(0x1af)));if(!isNaN(c))this['widget'][K(0x1af)]=c;if(this[K(0x179)](K(0x1af))){let d=this['value'];delete this['value'];if(!isNaN(d))this['widget']['value']=d;}}['connectedCallback'](){const L=k;this[L(0x185)][L(0x191)]();}['disconnectedCallback'](){const M=k;this[M(0x185)][M(0x1bb)]();}get['thumbSize'](){const N=k;return this[N(0x185)]['thumbSize'];}set[k(0x172)](c){const O=k;this[O(0x185)]['setThumbSize'](c);}get['value'](){const P=k;return this[P(0x185)]['value'];}set['value'](c){const Q=k;this[Q(0x185)][Q(0x1a1)](c);}get[k(0x1a7)](){const R=k;return formatOrientation(this[R(0x185)]['orientation']);}set['orientation'](c){const S=k;this[S(0x185)][S(0x1d0)](decodeOrientation(c))&&this['setAttribute']('orientation',this['orientation']);}get[k(0x173)](){const T=k;return this['widget'][T(0x1a7)];}static get[k(0x1ba)](){return['orientation'];}['attributeChangedCallback'](c,d,e){switch(c){case'orientation':{e&&this['widget']['setOrientation'](decodeOrientation(e));break;}}}}function b(c,d){c=c-0x169;const e=a();let f=e[c];return f;}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0x17d),scrollbarStyle=css`
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
    `;function formatOrientation(c){const U=k;return c?'vertical':U(0x187);}function decodeOrientation(c){const V=k;switch(c){case V(0x1a4):return!![];case'horizontal':return![];default:throw new Error(V(0x1c6)+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const W=k;if(!c||!c[W(0x1c9)]('px'))return undefined;return Number(c['substring'](0x0,c['length']-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);