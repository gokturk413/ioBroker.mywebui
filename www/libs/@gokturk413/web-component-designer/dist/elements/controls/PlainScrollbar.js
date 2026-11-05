const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xc6))/0x1*(-parseInt(j(0x105))/0x2)+-parseInt(j(0xdb))/0x3+-parseInt(j(0xde))/0x4+-parseInt(j(0xd6))/0x5*(-parseInt(j(0xac))/0x6)+parseInt(j(0xa4))/0x7*(-parseInt(j(0xd3))/0x8)+-parseInt(j(0xb9))/0x9+-parseInt(j(0xdc))/0xa*(-parseInt(j(0xb4))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x42bed));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];['root'];['trough'];['button1'];[k(0xb1)];[k(0xce)];['isConnected']=![];['thumbSize']=0.3;[k(0xb2)]=0x0;[k(0xee)]=![];['clickRepeatDelay']=0x12c;[k(0xff)]=0x64;[k(0x100)]=0x19;['dragStartPos'];[k(0xc8)];['eventTimeoutId'];['pointerCaptureId'];['pointerCaptureElement'];['thumbDragging'];['button1Active'];['button2Active'];[k(0xd8)];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':l(0xae)});const d=c['shadowRoot'];d[l(0xe4)](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d[l(0xe9)]=[scrollbarStyle],this[l(0xc3)]=d[l(0xf7)](l(0xd7)),this['trough']=d[l(0xf7)](l(0xec)),this[l(0xe2)]=d['querySelector'](l(0xf0)),this[l(0xb1)]=d[l(0xf7)](l(0xea)),this[l(0xce)]=d[l(0xf7)](l(0xf1)),this['trough'][l(0xc4)]('pointerdown',this['onTroughPointerDown']),this['trough'][l(0xc4)]('pointerup',this['onPointerUp']),this['trough']['addEventListener'](l(0xb8),this['onPointerUp']),this[l(0xe2)]['addEventListener'](l(0xf6),e=>this[l(0x102)](e,0x1)),this['button1']['addEventListener']('pointerup',this[l(0xc5)]),this['button1']['addEventListener']('pointercancel',this[l(0xc5)]),this[l(0xe2)][l(0xc4)]('contextmenu',f=>f['preventDefault']()),this['button2'][l(0xc4)](l(0xf6),e=>this['onButtonPointerDown'](e,0x2)),this[l(0xb1)]['addEventListener'](l(0xd1),this['onPointerUp']),this[l(0xb1)]['addEventListener']('pointercancel',this[l(0xc5)]),this[l(0xb1)]['addEventListener']('contextmenu',f=>f['preventDefault']()),this[l(0xce)][l(0xc4)](l(0xf6),this[l(0xdf)]),this['thumb'][l(0xc4)]('pointerup',this['onPointerUp']),this['thumb']['addEventListener'](l(0xb8),this['onPointerUp']),this[l(0xce)][l(0xc4)]('pointermove',this[l(0xd9)]),this[l(0xe0)]();}['resetInteractionState'](){const m=k;this['thumbDragging']=![],this[m(0x103)]=![],this[m(0x109)]=![],this['troughActive']=![];}[k(0xb6)](){const n=k;this['isConnected']=!![],this['resetInteractionState'](),this[n(0xef)](),this['updateStyle']();}['disconnectedCallback'](){const o=k;this[o(0xe8)]=![],this[o(0xe0)](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0xef)](){const p=k;if(!this['isConnected'])return;this['root']['classList'][p(0xa5)](p(0xbc),!this['orientation']),this['root'][p(0xda)]['toggle'](p(0x104),this[p(0xee)]),this[p(0xce)]['style'][p(0xaf)]=this['thumbSize']==0x0?'none':'',this['thumb']['style'][p(0xc1)]=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this['thumb']['style'][p(0xcb)]=this['orientation']?'':percent(this[p(0xfe)]()),this[p(0xce)]['style'][p(0xf5)]='',this[p(0xce)][p(0xdd)][p(0xa6)]='',this['updateThumbPosition']();}[k(0xf9)](){const q=k;if(!this[q(0xe8)])return;this[q(0xce)]['classList']['toggle'](q(0xed),this[q(0xcf)]),this['button1'][q(0xda)]['toggle']('active',this['button1Active']),this['button2'][q(0xda)]['toggle'](q(0xed),this['button2Active']),void this[q(0xd8)];}['updateThumbPosition'](){const r=k,c=(0x1-this[r(0xfe)]())*this['value'];this['orientation']?this[r(0xce)]['style']['top']=percent(c):this[r(0xce)]['style']['left']=percent(c);}['getThroughSize'](){const s=k;return this['orientation']?this[s(0xd5)]['clientHeight']:this['trough'][s(0xd4)];}[k(0xeb)](c){const t=k,d=this['getThroughSize']()*(0x1-this[t(0xfe)]());if(d<EPS)return 0x0;return c/d;}[k(0xcc)](c){const u=k,d=Math[u(0xb5)](0x0,Math['min'](0x1,c));if(d==this['thumbSize'])return;this[u(0xaa)]=d,this['updateLayout']();}[k(0xbb)](){const v=k,c=this[v(0xfc)]('--plain-scrollbar-thumb-min-size');if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0xfe)](){const w=k,c=this[w(0xbb)](),d=this['getThroughSize']();if(!d)return this[w(0xaa)];const e=Math['min'](0x1,c/d);return Math[w(0xb5)](e,this[w(0xaa)]);}['setValue'](c){const x=k,d=Math[x(0xb5)](0x0,Math['min'](0x1,c));if(d==this['value'])return![];return this['value']=isNaN(d)?0x0:d,this[x(0xa7)](),!![];}['setOrientation'](c){const y=k;if(c==this[y(0xee)])return![];return this[y(0xee)]=c,this[y(0xef)](),!![];}[k(0xfc)](c){const z=k,d=getComputedStyle(this[z(0xc3)])[z(0xca)](c);if(!d)return null;return d[z(0xb0)]();}['fireEvent'](c){const A=k,d=new CustomEvent('scrollbar-input',{'detail':c});this['host'][A(0xfb)](d);}[k(0xc9)](c,d,e,g=0x0){const B=k;this['stopEventRepetition'](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[B(0xc9)](c,d,e,g+0x1);this[B(0xcd)]=setTimeout(i,h);}[k(0xd0)](){const C=k;this[C(0xcd)]&&(clearTimeout(this[C(0xcd)]),this[C(0xcd)]=undefined);}['startPointerCapture'](c,d){const D=k;this[D(0x107)](),c[D(0xba)](d),this[D(0xc0)]=c,this[D(0x101)]=d;}['stopPointerCapture'](){const E=k;if(!this[E(0x101)])return;this['pointerCaptureElement']['releasePointerCapture'](this['pointerCaptureId']),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const F=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c[F(0xf3)]||c['ctrlKey']||c['metaKey']||c['shiftKey']||c[F(0xc7)]!=0x0)return;const d=this[F(0xd5)]['getBoundingClientRect'](),e=this[F(0xee)]?c[F(0xf8)]-d[F(0xf5)]:c['clientX']-d['left'],f=(this['orientation']?d['height']:d['width'])*(0x1-this['getEffectiveThumbSize']())*this['value'],g=e>f,h=g?'incrementLarge':F(0xe3);this['troughActive']=!![],c['preventDefault'](),this['startPointerCapture'](this['trough'],c[F(0xbd)]),this['fireEventRepeatedly'](h,this['clickRepeatDelay'],this['clickRepeatInterval']);};[k(0x102)]=(c,d)=>{const G=k;if(!this['isConnected']||this[G(0x101)])return;if(!c[G(0x10a)]||c[G(0xf3)]||c['ctrlKey']||c['metaKey']||c['shiftKey']||c[G(0xc7)]!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this[G(0x109)]=!![];break;}const e=d==0x1?'decrementSmall':G(0xbe);this[G(0xf9)](),c[G(0xe5)]();const f=d==0x1?this['button1']:this[G(0xb1)];this[G(0xe1)](f,c[G(0xbd)]),this[G(0xc9)](e,this[G(0x108)],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const H=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c[H(0xf3)]||c['ctrlKey']||c[H(0xab)]||c['shiftKey']||c[H(0xc7)]!=0x0)return;this[H(0xe6)]=this['orientation']?c['clientY']:c['clientX'],this[H(0xc8)]=this[H(0xb2)],this[H(0xcf)]=!![],this[H(0xf9)](),c['preventDefault'](),this[H(0xe1)](this['thumb'],c['pointerId']);};[k(0xd9)]=c=>{const I=k;if(!this['isConnected'])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this['orientation']?c[I(0xf8)]:c[I(0xf2)],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this['dragStartValue']+f;c['preventDefault'](),this['setValue'](g)&&this[I(0xa9)]('value');};['onPointerUp']=c=>{const J=k;if(!this['isConnected'])return;if(!c[J(0x10a)])return;this[J(0xe0)](),this[J(0xf9)](),this['stopEventRepetition'](),this[J(0x107)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const K=k;super(),this[K(0xb3)]=new Widget(this);const c=parseFloat(this[K(0xf4)](K(0xb2)));if(!isNaN(c))this['widget']['value']=c;if(this['hasOwnProperty']('value')){let d=this[K(0xb2)];delete this['value'];if(!isNaN(d))this['widget']['value']=d;}}['connectedCallback'](){this['widget']['connectedCallback']();}['disconnectedCallback'](){const L=k;this[L(0xb3)]['disconnectedCallback']();}get[k(0xaa)](){const M=k;return this[M(0xb3)]['thumbSize'];}set[k(0xaa)](c){this['widget']['setThumbSize'](c);}get['value'](){const N=k;return this[N(0xb3)]['value'];}set[k(0xb2)](c){const O=k;this['widget'][O(0xd2)](c);}get['orientation'](){const P=k;return formatOrientation(this[P(0xb3)][P(0xee)]);}set[k(0xee)](c){const Q=k;this[Q(0xb3)][Q(0xfa)](decodeOrientation(c))&&this[Q(0xfd)](Q(0xee),this['orientation']);}get[k(0xa8)](){const R=k;return this[R(0xb3)][R(0xee)];}static get[k(0xad)](){return['orientation'];}['attributeChangedCallback'](c,d,e){const S=k;switch(c){case'orientation':{e&&this[S(0xb3)]['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0x106),scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){switch(c){case'vertical':return!![];case'horizontal':return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){const T=k;return(c*0x64)[T(0xbf)](0x3)+'%';}function decodePxValue(c){const U=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[U(0xb7)](0x0,c['length']-0x2));}function a(){const V=['isConnected','adoptedStyleSheets','#button2','computeThumbMoveValue','#trough','active','orientation','updateLayout','#button1','#thumb','clientX','altKey','getAttribute','top','pointerdown','querySelector','clientY','updateStyle','setOrientation','dispatchEvent','getCssVar','setAttribute','getEffectiveThumbSize','clickRepeatInterval','defaultThumbMinSize','pointerCaptureId','onButtonPointerDown','button1Active','vertical','142bJKtBm','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','stopPointerCapture','clickRepeatDelay','button2Active','isPrimary','7iVCwYQ','toggle','left','updateThumbPosition','orientationBoolean','fireEvent','thumbSize','metaKey','101202DiQkTC','observedAttributes','open','display','trim','button2','value','widget','22lrKKIx','max','connectedCallback','substring','pointercancel','4546197VXYkuB','setPointerCapture','getThumbMinSize','horizontal','pointerId','incrementSmall','toFixed','pointerCaptureElement','height','define','root','addEventListener','onPointerUp','5648MaIxgw','button','dragStartValue','fireEventRepeatedly','getPropertyValue','width','setThumbSize','eventTimeoutId','thumb','thumbDragging','stopEventRepetition','pointerup','setValue','412184aBotkO','clientWidth','trough','5ekPXlP','#root','troughActive','onThumbPointerMove','classList','1048404UlMZTc','5854960FPgImE','style','1637416amBZJE','onThumbPointerDown','resetInteractionState','startPointerCapture','button1','decrementLarge','appendChild','preventDefault','dragStartPos','node-projects-plain-scrollbar'];a=function(){return V;};return a();}function b(c,d){c=c-0xa4;const e=a();let f=e[c];return f;}customElements[k(0xc2)](k(0xe7),PlainScrollbar);