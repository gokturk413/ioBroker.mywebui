const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xe5))/0x1+-parseInt(j(0x84))/0x2+parseInt(j(0xbb))/0x3+parseInt(j(0xa5))/0x4+-parseInt(j(0xe4))/0x5*(parseInt(j(0xd7))/0x6)+-parseInt(j(0xdf))/0x7*(parseInt(j(0xd3))/0x8)+parseInt(j(0xd6))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa63c2));function b(c,d){c=c-0x82;const e=a();let f=e[c];return f;}import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];[k(0xdd)];[k(0xc9)];['button1'];['button2'];['thumb'];['isConnected']=![];[k(0xba)]=0.3;[k(0xbe)]=0x0;[k(0x9b)]=![];[k(0xe3)]=0x12c;[k(0x89)]=0x64;['defaultThumbMinSize']=0x19;['dragStartPos'];[k(0xcb)];[k(0x88)];[k(0xdc)];[k(0xaf)];['thumbDragging'];[k(0xde)];[k(0x9d)];[k(0xd4)];constructor(c){const l=k;this['host']=c,c[l(0xa9)]({'mode':l(0x8a)});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this[l(0xdd)]=d[l(0xc3)](l(0x8f)),this['trough']=d[l(0xc3)](l(0xb3)),this[l(0xb6)]=d['querySelector']('#button1'),this[l(0xe6)]=d[l(0xc3)](l(0xb4)),this['thumb']=d['querySelector'](l(0xb1)),this[l(0xc9)][l(0xca)](l(0xbc),this['onTroughPointerDown']),this['trough']['addEventListener']('pointerup',this[l(0x8d)]),this['trough']['addEventListener'](l(0x83),this['onPointerUp']),this[l(0xb6)]['addEventListener'](l(0xbc),e=>this[l(0xd0)](e,0x1)),this['button1']['addEventListener'](l(0xce),this[l(0x8d)]),this['button1'][l(0xca)](l(0x83),this['onPointerUp']),this[l(0xb6)][l(0xca)](l(0xc1),f=>f['preventDefault']()),this['button2'][l(0xca)](l(0xbc),e=>this['onButtonPointerDown'](e,0x2)),this['button2']['addEventListener'](l(0xce),this[l(0x8d)]),this[l(0xe6)]['addEventListener']('pointercancel',this[l(0x8d)]),this['button2']['addEventListener']('contextmenu',f=>f['preventDefault']()),this['thumb']['addEventListener'](l(0xbc),this[l(0x91)]),this[l(0xac)][l(0xca)](l(0xce),this['onPointerUp']),this[l(0xac)][l(0xca)]('pointercancel',this['onPointerUp']),this['thumb'][l(0xca)](l(0x99),this[l(0xaa)]),this['resetInteractionState']();}[k(0x95)](){const m=k;this[m(0xa6)]=![],this[m(0xde)]=![],this[m(0x9d)]=![],this['troughActive']=![];}[k(0xb5)](){const n=k;this['isConnected']=!![],this['resetInteractionState'](),this['updateLayout'](),this[n(0xb7)]();}[k(0xd1)](){const o=k;this[o(0xa3)]=![],this[o(0x95)](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0xb8)](){const p=k;if(!this['isConnected'])return;this['root']['classList']['toggle']('horizontal',!this[p(0x9b)]),this[p(0xdd)][p(0x85)][p(0xc5)]('vertical',this[p(0x9b)]),this[p(0xac)]['style']['display']=this['thumbSize']==0x0?'none':'',this['thumb'][p(0xbd)]['height']=this[p(0x9b)]?percent(this['getEffectiveThumbSize']()):'',this['thumb']['style']['width']=this['orientation']?'':percent(this[p(0xe0)]()),this[p(0xac)]['style'][p(0xbf)]='',this[p(0xac)][p(0xbd)]['left']='',this[p(0xe2)]();}['updateStyle'](){const q=k;if(!this[q(0xa3)])return;this['thumb'][q(0x85)][q(0xc5)](q(0x97),this['thumbDragging']),this[q(0xb6)]['classList']['toggle']('active',this['button1Active']),this[q(0xe6)]['classList']['toggle']('active',this['button2Active']),void this['troughActive'];}['updateThumbPosition'](){const r=k,c=(0x1-this[r(0xe0)]())*this[r(0xbe)];this['orientation']?this['thumb'][r(0xbd)][r(0xbf)]=percent(c):this['thumb']['style']['left']=percent(c);}['getThroughSize'](){const s=k;return this[s(0x9b)]?this['trough']['clientHeight']:this['trough'][s(0x9e)];}['computeThumbMoveValue'](c){const t=k,d=this['getThroughSize']()*(0x1-this[t(0xe0)]());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const u=k,d=Math['max'](0x0,Math[u(0xa1)](0x1,c));if(d==this[u(0xba)])return;this[u(0xba)]=d,this['updateLayout']();}[k(0xa4)](){const v=k,c=this[v(0xc7)](v(0x92));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this[v(0x9c)];return d;}[k(0xe0)](){const w=k,c=this['getThumbMinSize'](),d=this[w(0xae)]();if(!d)return this['thumbSize'];const e=Math[w(0xa1)](0x1,c/d);return Math[w(0x90)](e,this[w(0xba)]);}['setValue'](c){const x=k,d=Math['max'](0x0,Math[x(0xa1)](0x1,c));if(d==this['value'])return![];return this[x(0xbe)]=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}['setOrientation'](c){const y=k;if(c==this[y(0x9b)])return![];return this[y(0x9b)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const z=k,d=getComputedStyle(this['root'])[z(0xab)](c);if(!d)return null;return d[z(0xa7)]();}['fireEvent'](c){const A=k,d=new CustomEvent(A(0xda),{'detail':c});this['host'][A(0xd5)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const B=k;this['stopEventRepetition'](),this[B(0x82)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}['stopEventRepetition'](){this['eventTimeoutId']&&(clearTimeout(this['eventTimeoutId']),this['eventTimeoutId']=undefined);}['startPointerCapture'](c,d){const C=k;this['stopPointerCapture'](),c[C(0xc6)](d),this['pointerCaptureElement']=c,this[C(0xdc)]=d;}['stopPointerCapture'](){const D=k;if(!this[D(0xdc)])return;this['pointerCaptureElement'][D(0xcc)](this[D(0xdc)]),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const E=k;if(!this[E(0xa3)]||this['pointerCaptureId'])return;if(!c[E(0xd9)]||c[E(0x86)]||c[E(0xad)]||c[E(0xb2)]||c['shiftKey']||c['button']!=0x0)return;const d=this['trough'][E(0x8c)](),e=this['orientation']?c['clientY']-d[E(0xbf)]:c['clientX']-d[E(0xc0)],f=(this[E(0x9b)]?d['height']:d['width'])*(0x1-this['getEffectiveThumbSize']())*this[E(0xbe)],g=e>f,h=g?E(0x94):'decrementLarge';this[E(0xd4)]=!![],c[E(0xc8)](),this['startPointerCapture'](this[E(0xc9)],c['pointerId']),this['fireEventRepeatedly'](h,this[E(0xe3)],this[E(0x89)]);};[k(0xd0)]=(c,d)=>{const F=k;if(!this[F(0xa3)]||this['pointerCaptureId'])return;if(!c[F(0xd9)]||c['altKey']||c[F(0xad)]||c['metaKey']||c['shiftKey']||c[F(0xc4)]!=0x0)return;switch(d){case 0x1:this[F(0xde)]=!![];break;case 0x2:this[F(0x9d)]=!![];break;}const e=d==0x1?F(0xa0):F(0xd8);this['updateStyle'](),c[F(0xc8)]();const f=d==0x1?this[F(0xb6)]:this[F(0xe6)];this[F(0x96)](f,c['pointerId']),this[F(0x9f)](e,this['clickRepeatDelay'],this[F(0x89)]);};[k(0x91)]=c=>{const G=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[G(0xad)]||c[G(0xb2)]||c['shiftKey']||c[G(0xc4)]!=0x0)return;this['dragStartPos']=this[G(0x9b)]?c[G(0xdb)]:c['clientX'],this['dragStartValue']=this['value'],this[G(0xa6)]=!![],this[G(0xb7)](),c['preventDefault'](),this[G(0x96)](this['thumb'],c['pointerId']);};[k(0xaa)]=c=>{const H=k;if(!this['isConnected'])return;if(!c[H(0xd9)]||!this['thumbDragging'])return;const d=this[H(0x9b)]?c['clientY']:c[H(0xe1)],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this['dragStartValue']+f;c['preventDefault'](),this['setValue'](g)&&this['fireEvent'](H(0xbe));};['onPointerUp']=c=>{const I=k;if(!this[I(0xa3)])return;if(!c[I(0xd9)])return;this[I(0x95)](),this['updateStyle'](),this['stopEventRepetition'](),this[I(0xb9)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{[k(0x9a)];constructor(){const J=k;super(),this[J(0x9a)]=new Widget(this);const c=parseFloat(this[J(0x98)]('value'));if(!isNaN(c))this[J(0x9a)]['value']=c;if(this[J(0x8e)](J(0xbe))){let d=this[J(0xbe)];delete this[J(0xbe)];if(!isNaN(d))this[J(0x9a)]['value']=d;}}[k(0xb5)](){const K=k;this[K(0x9a)][K(0xb5)]();}[k(0xd1)](){const L=k;this[L(0x9a)][L(0xd1)]();}get['thumbSize'](){const M=k;return this[M(0x9a)][M(0xba)];}set[k(0xba)](c){const N=k;this[N(0x9a)]['setThumbSize'](c);}get['value'](){const O=k;return this[O(0x9a)][O(0xbe)];}set['value'](c){this['widget']['setValue'](c);}get[k(0x9b)](){const P=k;return formatOrientation(this[P(0x9a)]['orientation']);}set[k(0x9b)](c){this['widget']['setOrientation'](decodeOrientation(c))&&this['setAttribute']('orientation',this['orientation']);}get[k(0xcf)](){const Q=k;return this[Q(0x9a)]['orientation'];}static get['observedAttributes'](){return['orientation'];}[k(0x93)](c,d,e){const R=k;switch(c){case R(0x9b):{e&&this['widget']['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0x87),scrollbarStyle=css`
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
    `;function formatOrientation(c){const S=k;return c?S(0xb0):'horizontal';}function decodeOrientation(c){const T=k;switch(c){case'vertical':return!![];case'horizontal':return![];default:throw new Error(T(0xa8)+c+'\x22.');}}function percent(c){const U=k;return(c*0x64)[U(0xc2)](0x3)+'%';}function decodePxValue(c){const V=k;if(!c||!c[V(0x8b)]('px'))return undefined;return Number(c[V(0xa2)](0x0,c[V(0xd2)]-0x2));}function a(){const W=['--plain-scrollbar-thumb-min-size','attributeChangedCallback','incrementLarge','resetInteractionState','startPointerCapture','active','getAttribute','pointermove','widget','orientation','defaultThumbMinSize','button2Active','clientWidth','fireEventRepeatedly','decrementSmall','min','substring','isConnected','getThumbMinSize','4806332mVWWoq','thumbDragging','trim','Invalid\x20orientation\x20value\x20\x22','attachShadow','onThumbPointerMove','getPropertyValue','thumb','ctrlKey','getThroughSize','pointerCaptureElement','vertical','#thumb','metaKey','#trough','#button2','connectedCallback','button1','updateStyle','updateLayout','stopPointerCapture','thumbSize','1742772SnaktF','pointerdown','style','value','top','left','contextmenu','toFixed','querySelector','button','toggle','setPointerCapture','getCssVar','preventDefault','trough','addEventListener','dragStartValue','releasePointerCapture','define','pointerup','orientationBoolean','onButtonPointerDown','disconnectedCallback','length','7748640KvtThC','troughActive','dispatchEvent','12084669oGiMmW','420DuApjf','incrementSmall','isPrimary','scrollbar-input','clientY','pointerCaptureId','root','button1Active','7jqGKkN','getEffectiveThumbSize','clientX','updateThumbPosition','clickRepeatDelay','48410iHPvwH','263419JmxjlQ','button2','fireEvent','pointercancel','1069222uoykuW','classList','altKey','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','eventTimeoutId','clickRepeatInterval','open','endsWith','getBoundingClientRect','onPointerUp','hasOwnProperty','#root','max','onThumbPointerDown'];a=function(){return W;};return a();}customElements[k(0xcd)]('node-projects-plain-scrollbar',PlainScrollbar);