const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x91))/0x1+parseInt(j(0xb4))/0x2*(parseInt(j(0x90))/0x3)+parseInt(j(0xe1))/0x4+-parseInt(j(0x94))/0x5*(-parseInt(j(0xe9))/0x6)+parseInt(j(0xa3))/0x7*(parseInt(j(0xe3))/0x8)+-parseInt(j(0xd7))/0x9*(parseInt(j(0xa0))/0xa)+-parseInt(j(0xd3))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7548b));function b(c,d){c=c-0x8c;const e=a();let f=e[c];return f;}import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];[k(0x9d)];[k(0xbd)];['button1'];[k(0xa1)];['thumb'];[k(0xb3)]=![];[k(0xd6)]=0.3;['value']=0x0;[k(0xb6)]=![];['clickRepeatDelay']=0x12c;['clickRepeatInterval']=0x64;['defaultThumbMinSize']=0x19;[k(0xbf)];[k(0x8e)];['eventTimeoutId'];['pointerCaptureId'];['pointerCaptureElement'];[k(0x9a)];['button1Active'];[k(0xc1)];['troughActive'];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':'open'});const d=c['shadowRoot'];d[l(0x9e)](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d['querySelector']('#root'),this['trough']=d['querySelector']('#trough'),this[l(0xdc)]=d[l(0xc2)]('#button1'),this['button2']=d[l(0xc2)]('#button2'),this[l(0xaa)]=d['querySelector'](l(0x8c)),this['trough'][l(0xd4)]('pointerdown',this[l(0x9c)]),this[l(0xbd)][l(0xd4)]('pointerup',this[l(0xb7)]),this['trough']['addEventListener'](l(0x92),this[l(0xb7)]),this[l(0xdc)]['addEventListener'](l(0xa7),e=>this[l(0xc9)](e,0x1)),this[l(0xdc)]['addEventListener']('pointerup',this['onPointerUp']),this[l(0xdc)]['addEventListener'](l(0x92),this['onPointerUp']),this['button1'][l(0xd4)](l(0xb9),f=>f['preventDefault']()),this['button2']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this[l(0xa1)][l(0xd4)](l(0xa6),this[l(0xb7)]),this[l(0xa1)][l(0xd4)]('pointercancel',this[l(0xb7)]),this[l(0xa1)]['addEventListener'](l(0xb9),f=>f['preventDefault']()),this[l(0xaa)][l(0xd4)](l(0xa7),this[l(0xe7)]),this['thumb']['addEventListener'](l(0xa6),this[l(0xb7)]),this['thumb']['addEventListener'](l(0x92),this[l(0xb7)]),this['thumb']['addEventListener']('pointermove',this[l(0xc5)]),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this[m(0x9a)]=![],this[m(0xde)]=![],this['button2Active']=![],this[m(0x98)]=![];}['connectedCallback'](){const n=k;this[n(0xb3)]=!![],this['resetInteractionState'](),this['updateLayout'](),this['updateStyle']();}['disconnectedCallback'](){const o=k;this['isConnected']=![],this[o(0xc3)](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0xae)](){const p=k;if(!this[p(0xb3)])return;this['root']['classList']['toggle']('horizontal',!this[p(0xb6)]),this['root']['classList']['toggle'](p(0xd0),this[p(0xb6)]),this['thumb']['style']['display']=this['thumbSize']==0x0?'none':'',this['thumb']['style']['height']=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this[p(0xaa)]['style'][p(0xc7)]=this['orientation']?'':percent(this['getEffectiveThumbSize']()),this['thumb'][p(0xec)][p(0xcb)]='',this['thumb'][p(0xec)][p(0xc6)]='',this['updateThumbPosition']();}[k(0xe5)](){const q=k;if(!this[q(0xb3)])return;this['thumb']['classList'][q(0xcf)](q(0xa4),this[q(0x9a)]),this['button1'][q(0xb8)]['toggle'](q(0xa4),this[q(0xde)]),this['button2'][q(0xb8)]['toggle']('active',this['button2Active']),void this['troughActive'];}[k(0xd9)](){const r=k,c=(0x1-this[r(0xd8)]())*this[r(0xd2)];this['orientation']?this['thumb']['style']['top']=percent(c):this[r(0xaa)][r(0xec)][r(0xc6)]=percent(c);}[k(0xad)](){const s=k;return this[s(0xb6)]?this['trough']['clientHeight']:this['trough']['clientWidth'];}[k(0xa9)](c){const t=k,d=this['getThroughSize']()*(0x1-this[t(0xd8)]());if(d<EPS)return 0x0;return c/d;}[k(0xbc)](c){const u=k,d=Math['max'](0x0,Math['min'](0x1,c));if(d==this[u(0xd6)])return;this['thumbSize']=d,this['updateLayout']();}[k(0xc4)](){const v=k,c=this[v(0xa5)]('--plain-scrollbar-thumb-min-size');if(!c)return this[v(0xdd)];const d=decodePxValue(c);if(!d)return this[v(0xdd)];return d;}['getEffectiveThumbSize'](){const w=k,c=this['getThumbMinSize'](),d=this[w(0xad)]();if(!d)return this['thumbSize'];const e=Math[w(0xe2)](0x1,c/d);return Math[w(0x9b)](e,this[w(0xd6)]);}['setValue'](c){const x=k,d=Math['max'](0x0,Math['min'](0x1,c));if(d==this[x(0xd2)])return![];return this['value']=isNaN(d)?0x0:d,this[x(0xd9)](),!![];}[k(0xb2)](c){const y=k;if(c==this['orientation'])return![];return this[y(0xb6)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const z=k,d=getComputedStyle(this[z(0x9d)])['getPropertyValue'](c);if(!d)return null;return d['trim']();}['fireEvent'](c){const A=k,d=new CustomEvent(A(0xe4),{'detail':c});this['host'][A(0xc0)](d);}[k(0x8d)](c,d,e,g=0x0){const B=k;this[B(0xab)](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[B(0x8d)](c,d,e,g+0x1);this[B(0x8f)]=setTimeout(i,h);}[k(0xab)](){const C=k;this['eventTimeoutId']&&(clearTimeout(this[C(0x8f)]),this[C(0x8f)]=undefined);}['startPointerCapture'](c,d){const D=k;this[D(0xdb)](),c['setPointerCapture'](d),this[D(0x9f)]=c,this[D(0xaf)]=d;}[k(0xdb)](){const E=k;if(!this['pointerCaptureId'])return;this[E(0x9f)][E(0xe0)](this['pointerCaptureId']),this[E(0xaf)]=undefined;}['onTroughPointerDown']=c=>{const F=k;if(!this['isConnected']||this[F(0xaf)])return;if(!c['isPrimary']||c[F(0xba)]||c[F(0xd5)]||c[F(0xea)]||c['shiftKey']||c[F(0xb1)]!=0x0)return;const d=this[F(0xbd)]['getBoundingClientRect'](),e=this['orientation']?c['clientY']-d[F(0xcb)]:c[F(0xb5)]-d[F(0xc6)],f=(this['orientation']?d['height']:d['width'])*(0x1-this[F(0xd8)]())*this[F(0xd2)],g=e>f,h=g?F(0xcc):F(0xe8);this['troughActive']=!![],c['preventDefault'](),this[F(0xac)](this[F(0xbd)],c['pointerId']),this[F(0x8d)](h,this[F(0xa8)],this[F(0xb0)]);};['onButtonPointerDown']=(c,d)=>{const G=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c[G(0xea)]||c[G(0x96)]||c['button']!=0x0)return;switch(d){case 0x1:this[G(0xde)]=!![];break;case 0x2:this[G(0xc1)]=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this['updateStyle'](),c['preventDefault']();const f=d==0x1?this[G(0xdc)]:this[G(0xa1)];this[G(0xac)](f,c['pointerId']),this[G(0x8d)](e,this['clickRepeatDelay'],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const H=k;if(!this[H(0xb3)]||this['pointerCaptureId'])return;if(!c[H(0xed)]||c['altKey']||c[H(0xd5)]||c['metaKey']||c[H(0x96)]||c['button']!=0x0)return;this['dragStartPos']=this[H(0xb6)]?c['clientY']:c[H(0xb5)],this['dragStartValue']=this['value'],this['thumbDragging']=!![],this[H(0xe5)](),c[H(0xda)](),this['startPointerCapture'](this['thumb'],c[H(0x93)]);};['onThumbPointerMove']=c=>{const I=k;if(!this[I(0xb3)])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this[I(0xb6)]?c[I(0xbb)]:c['clientX'],e=d-this[I(0xbf)],f=this[I(0xa9)](e),g=this['dragStartValue']+f;c['preventDefault'](),this['setValue'](g)&&this[I(0xeb)]('value');};['onPointerUp']=c=>{const J=k;if(!this[J(0xb3)])return;if(!c['isPrimary'])return;this[J(0xc3)](),this[J(0xe5)](),this['stopEventRepetition'](),this[J(0xdb)](),c[J(0xda)]();};}export class PlainScrollbar extends HTMLElement{[k(0x97)];constructor(){const K=k;super(),this['widget']=new Widget(this);const c=parseFloat(this[K(0xc8)]('value'));if(!isNaN(c))this['widget'][K(0xd2)]=c;if(this['hasOwnProperty']('value')){let d=this['value'];delete this[K(0xd2)];if(!isNaN(d))this[K(0x97)]['value']=d;}}['connectedCallback'](){const L=k;this[L(0x97)][L(0xdf)]();}['disconnectedCallback'](){this['widget']['disconnectedCallback']();}get['thumbSize'](){const M=k;return this[M(0x97)]['thumbSize'];}set['thumbSize'](c){const N=k;this[N(0x97)]['setThumbSize'](c);}get['value'](){const O=k;return this[O(0x97)]['value'];}set['value'](c){const P=k;this[P(0x97)][P(0xd1)](c);}get['orientation'](){const Q=k;return formatOrientation(this['widget'][Q(0xb6)]);}set[k(0xb6)](c){const R=k;this['widget']['setOrientation'](decodeOrientation(c))&&this[R(0x99)]('orientation',this['orientation']);}get['orientationBoolean'](){const S=k;return this[S(0x97)]['orientation'];}static get[k(0xe6)](){const T=k;return[T(0xb6)];}[k(0x95)](c,d,e){const U=k;switch(c){case U(0xb6):{e&&this['widget']['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0xca),scrollbarStyle=css`
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
    `;function a(){const Y=['updateThumbPosition','preventDefault','stopPointerCapture','button1','defaultThumbMinSize','button1Active','connectedCallback','releasePointerCapture','2203088FdWmNY','min','48ZNHdrH','scrollbar-input','updateStyle','observedAttributes','onThumbPointerDown','decrementLarge','4757610dSILmE','metaKey','fireEvent','style','isPrimary','#thumb','fireEventRepeatedly','dragStartValue','eventTimeoutId','2287227YaucZQ','353127iYQiGS','pointercancel','pointerId','5PuDyov','attributeChangedCallback','shiftKey','widget','troughActive','setAttribute','thumbDragging','max','onTroughPointerDown','root','appendChild','pointerCaptureElement','10JpJjfG','button2','length','29001JmPvBE','active','getCssVar','pointerup','pointerdown','clickRepeatDelay','computeThumbMoveValue','thumb','stopEventRepetition','startPointerCapture','getThroughSize','updateLayout','pointerCaptureId','clickRepeatInterval','button','setOrientation','isConnected','2qbLuHK','clientX','orientation','onPointerUp','classList','contextmenu','altKey','clientY','setThumbSize','trough','node-projects-plain-scrollbar','dragStartPos','dispatchEvent','button2Active','querySelector','resetInteractionState','getThumbMinSize','onThumbPointerMove','left','width','getAttribute','onButtonPointerDown','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','top','incrementLarge','horizontal','substring','toggle','vertical','setValue','value','8216813wxGYQC','addEventListener','ctrlKey','thumbSize','4954221CINGWz','getEffectiveThumbSize'];a=function(){return Y;};return a();}function formatOrientation(c){const V=k;return c?'vertical':V(0xcd);}function decodeOrientation(c){const W=k;switch(c){case W(0xd0):return!![];case'horizontal':return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const X=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[X(0xce)](0x0,c[X(0xa2)]-0x2));}customElements['define'](k(0xbe),PlainScrollbar);