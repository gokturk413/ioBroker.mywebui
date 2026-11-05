function b(c,d){c=c-0x131;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x147))/0x1*(parseInt(j(0x13c))/0x2)+parseInt(j(0x171))/0x3*(parseInt(j(0x143))/0x4)+parseInt(j(0x141))/0x5+parseInt(j(0x186))/0x6+parseInt(j(0x154))/0x7*(-parseInt(j(0x178))/0x8)+-parseInt(j(0x161))/0x9+parseInt(j(0x15d))/0xa*(-parseInt(j(0x13f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x19679));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x184)];['root'];['trough'];[k(0x158)];[k(0x17d)];[k(0x179)];[k(0x16e)]=![];[k(0x14c)]=0.3;['value']=0x0;['orientation']=![];['clickRepeatDelay']=0x12c;[k(0x18c)]=0x64;[k(0x180)]=0x19;[k(0x162)];['dragStartValue'];['eventTimeoutId'];['pointerCaptureId'];['pointerCaptureElement'];[k(0x13e)];['button1Active'];[k(0x165)];['troughActive'];constructor(c){const l=k;this[l(0x184)]=c,c['attachShadow']({'mode':l(0x156)});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d['querySelector']('#root'),this['trough']=d['querySelector'](l(0x194)),this[l(0x158)]=d['querySelector']('#button1'),this[l(0x17d)]=d['querySelector'](l(0x187)),this['thumb']=d['querySelector']('#thumb'),this[l(0x135)]['addEventListener'](l(0x16c),this[l(0x142)]),this[l(0x135)][l(0x14e)]('pointerup',this['onPointerUp']),this[l(0x135)][l(0x14e)](l(0x138),this['onPointerUp']),this[l(0x158)][l(0x14e)]('pointerdown',e=>this[l(0x168)](e,0x1)),this[l(0x158)]['addEventListener']('pointerup',this['onPointerUp']),this[l(0x158)]['addEventListener']('pointercancel',this[l(0x149)]),this['button1'][l(0x14e)]('contextmenu',f=>f[l(0x18a)]()),this[l(0x17d)]['addEventListener'](l(0x16c),e=>this[l(0x168)](e,0x2)),this['button2']['addEventListener'](l(0x172),this['onPointerUp']),this['button2']['addEventListener']('pointercancel',this[l(0x149)]),this['button2']['addEventListener'](l(0x153),f=>f[l(0x18a)]()),this[l(0x179)][l(0x14e)](l(0x16c),this[l(0x17e)]),this[l(0x179)]['addEventListener']('pointerup',this['onPointerUp']),this[l(0x179)]['addEventListener']('pointercancel',this[l(0x149)]),this[l(0x179)]['addEventListener']('pointermove',this[l(0x146)]),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this[m(0x13e)]=![],this[m(0x134)]=![],this[m(0x165)]=![],this['troughActive']=![];}[k(0x197)](){const n=k;this['isConnected']=!![],this[n(0x190)](),this[n(0x15f)](),this[n(0x18f)]();}[k(0x15c)](){const o=k;this[o(0x16e)]=![],this['resetInteractionState'](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0x15f)](){const p=k;if(!this['isConnected'])return;this[p(0x137)][p(0x136)]['toggle'](p(0x157),!this['orientation']),this['root'][p(0x136)][p(0x17a)](p(0x14d),this['orientation']),this['thumb'][p(0x16b)][p(0x14b)]=this[p(0x14c)]==0x0?'none':'',this['thumb']['style'][p(0x173)]=this[p(0x15a)]?percent(this[p(0x15e)]()):'',this['thumb']['style'][p(0x174)]=this[p(0x15a)]?'':percent(this['getEffectiveThumbSize']()),this[p(0x179)]['style']['top']='',this['thumb'][p(0x16b)]['left']='',this['updateThumbPosition']();}[k(0x18f)](){const q=k;if(!this[q(0x16e)])return;this['thumb'][q(0x136)][q(0x17a)](q(0x18d),this[q(0x13e)]),this['button1'][q(0x136)]['toggle'](q(0x18d),this[q(0x134)]),this[q(0x17d)]['classList']['toggle']('active',this['button2Active']),void this[q(0x166)];}['updateThumbPosition'](){const r=k,c=(0x1-this[r(0x15e)]())*this[r(0x177)];this[r(0x15a)]?this['thumb']['style'][r(0x185)]=percent(c):this[r(0x179)][r(0x16b)]['left']=percent(c);}['getThroughSize'](){const s=k;return this['orientation']?this[s(0x135)]['clientHeight']:this[s(0x135)][s(0x139)];}[k(0x188)](c){const t=k,d=this[t(0x14a)]()*(0x1-this[t(0x15e)]());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const u=k,d=Math['max'](0x0,Math[u(0x198)](0x1,c));if(d==this['thumbSize'])return;this['thumbSize']=d,this['updateLayout']();}[k(0x167)](){const v=k,c=this[v(0x16a)](v(0x164));if(!c)return this[v(0x180)];const d=decodePxValue(c);if(!d)return this[v(0x180)];return d;}[k(0x15e)](){const w=k,c=this['getThumbMinSize'](),d=this['getThroughSize']();if(!d)return this[w(0x14c)];const e=Math['min'](0x1,c/d);return Math['max'](e,this[w(0x14c)]);}[k(0x189)](c){const x=k,d=Math['max'](0x0,Math[x(0x198)](0x1,c));if(d==this['value'])return![];return this['value']=isNaN(d)?0x0:d,this[x(0x196)](),!![];}['setOrientation'](c){const y=k;if(c==this[y(0x15a)])return![];return this[y(0x15a)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const z=k,d=getComputedStyle(this[z(0x137)])['getPropertyValue'](c);if(!d)return null;return d[z(0x140)]();}['fireEvent'](c){const A=k,d=new CustomEvent(A(0x17b),{'detail':c});this[A(0x184)][A(0x15b)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const B=k;this[B(0x133)](),this[B(0x132)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}[k(0x133)](){const C=k;this[C(0x169)]&&(clearTimeout(this[C(0x169)]),this[C(0x169)]=undefined);}['startPointerCapture'](c,d){const D=k;this['stopPointerCapture'](),c[D(0x191)](d),this['pointerCaptureElement']=c,this['pointerCaptureId']=d;}[k(0x193)](){const E=k;if(!this['pointerCaptureId'])return;this[E(0x14f)]['releasePointerCapture'](this[E(0x13d)]),this[E(0x13d)]=undefined;}['onTroughPointerDown']=c=>{const F=k;if(!this[F(0x16e)]||this[F(0x13d)])return;if(!c[F(0x145)]||c['altKey']||c[F(0x159)]||c[F(0x16d)]||c[F(0x17f)]||c[F(0x182)]!=0x0)return;const d=this[F(0x135)]['getBoundingClientRect'](),e=this[F(0x15a)]?c[F(0x18b)]-d[F(0x185)]:c['clientX']-d[F(0x195)],f=(this[F(0x15a)]?d['height']:d[F(0x174)])*(0x1-this['getEffectiveThumbSize']())*this[F(0x177)],g=e>f,h=g?'incrementLarge':'decrementLarge';this[F(0x166)]=!![],c[F(0x18a)](),this['startPointerCapture'](this['trough'],c[F(0x131)]),this[F(0x181)](h,this[F(0x13a)],this['clickRepeatInterval']);};[k(0x168)]=(c,d)=>{const G=k;if(!this[G(0x16e)]||this[G(0x13d)])return;if(!c['isPrimary']||c[G(0x152)]||c['ctrlKey']||c[G(0x16d)]||c[G(0x17f)]||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?G(0x160):'incrementSmall';this[G(0x18f)](),c['preventDefault']();const f=d==0x1?this['button1']:this[G(0x17d)];this[G(0x192)](f,c[G(0x131)]),this['fireEventRepeatedly'](e,this['clickRepeatDelay'],this[G(0x18c)]);};['onThumbPointerDown']=c=>{const H=k;if(!this[H(0x16e)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[H(0x159)]||c['metaKey']||c[H(0x17f)]||c[H(0x182)]!=0x0)return;this[H(0x162)]=this['orientation']?c['clientY']:c[H(0x151)],this['dragStartValue']=this[H(0x177)],this[H(0x13e)]=!![],this[H(0x18f)](),c[H(0x18a)](),this['startPointerCapture'](this['thumb'],c['pointerId']);};['onThumbPointerMove']=c=>{const I=k;if(!this[I(0x16e)])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this['orientation']?c[I(0x18b)]:c[I(0x151)],e=d-this['dragStartPos'],f=this[I(0x188)](e),g=this['dragStartValue']+f;c['preventDefault'](),this[I(0x189)](g)&&this[I(0x132)]('value');};['onPointerUp']=c=>{const J=k;if(!this[J(0x16e)])return;if(!c[J(0x145)])return;this[J(0x190)](),this['updateStyle'](),this[J(0x133)](),this['stopPointerCapture'](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{[k(0x163)];constructor(){const K=k;super(),this[K(0x163)]=new Widget(this);const c=parseFloat(this[K(0x18e)]('value'));if(!isNaN(c))this[K(0x163)][K(0x177)]=c;if(this[K(0x148)](K(0x177))){let d=this['value'];delete this[K(0x177)];if(!isNaN(d))this[K(0x163)]['value']=d;}}[k(0x197)](){this['widget']['connectedCallback']();}['disconnectedCallback'](){this['widget']['disconnectedCallback']();}get['thumbSize'](){const L=k;return this[L(0x163)][L(0x14c)];}set[k(0x14c)](c){const M=k;this[M(0x163)][M(0x183)](c);}get[k(0x177)](){const N=k;return this[N(0x163)]['value'];}set['value'](c){const O=k;this[O(0x163)]['setValue'](c);}get[k(0x15a)](){return formatOrientation(this['widget']['orientation']);}set[k(0x15a)](c){const P=k;this[P(0x163)][P(0x175)](decodeOrientation(c))&&this['setAttribute'](P(0x15a),this['orientation']);}get['orientationBoolean'](){const Q=k;return this[Q(0x163)]['orientation'];}static get[k(0x16f)](){return['orientation'];}[k(0x155)](c,d,e){const R=k;switch(c){case R(0x15a):{e&&this[R(0x163)]['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function formatOrientation(c){const S=k;return c?S(0x14d):S(0x157);}function decodeOrientation(c){const T=k;switch(c){case T(0x14d):return!![];case T(0x157):return![];default:throw new Error(T(0x13b)+c+'\x22.');}}function percent(c){const U=k;return(c*0x64)[U(0x176)](0x3)+'%';}function decodePxValue(c){const V=k;if(!c||!c[V(0x144)]('px'))return undefined;return Number(c[V(0x150)](0x0,c[V(0x17c)]-0x2));}function a(){const W=['host','top','831120uMlhcp','#button2','computeThumbMoveValue','setValue','preventDefault','clientY','clickRepeatInterval','active','getAttribute','updateStyle','resetInteractionState','setPointerCapture','startPointerCapture','stopPointerCapture','#trough','left','updateThumbPosition','connectedCallback','min','pointerId','fireEvent','stopEventRepetition','button1Active','trough','classList','root','pointercancel','clientWidth','clickRepeatDelay','Invalid\x20orientation\x20value\x20\x22','162zZJluX','pointerCaptureId','thumbDragging','1025519qXFryD','trim','643495ZsypNx','onTroughPointerDown','195836SrfwVO','endsWith','isPrimary','onThumbPointerMove','1871wARsHA','hasOwnProperty','onPointerUp','getThroughSize','display','thumbSize','vertical','addEventListener','pointerCaptureElement','substring','clientX','altKey','contextmenu','540953XRCFfy','attributeChangedCallback','open','horizontal','button1','ctrlKey','orientation','dispatchEvent','disconnectedCallback','10zWhNoO','getEffectiveThumbSize','updateLayout','decrementSmall','1738476WmpyhL','dragStartPos','widget','--plain-scrollbar-thumb-min-size','button2Active','troughActive','getThumbMinSize','onButtonPointerDown','eventTimeoutId','getCssVar','style','pointerdown','metaKey','isConnected','observedAttributes','define','3iVakhi','pointerup','height','width','setOrientation','toFixed','value','8IxKYBK','thumb','toggle','scrollbar-input','length','button2','onThumbPointerDown','shiftKey','defaultThumbMinSize','fireEventRepeatedly','button','setThumbSize'];a=function(){return W;};return a();}customElements[k(0x170)]('node-projects-plain-scrollbar',PlainScrollbar);