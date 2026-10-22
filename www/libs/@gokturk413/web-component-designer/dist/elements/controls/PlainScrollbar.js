const k=b;function b(c,d){c=c-0xa2;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xcc))/0x1+parseInt(j(0xcf))/0x2*(parseInt(j(0xf7))/0x3)+-parseInt(j(0x102))/0x4+-parseInt(j(0xb4))/0x5*(parseInt(j(0xd2))/0x6)+parseInt(j(0x103))/0x7+-parseInt(j(0xc0))/0x8+-parseInt(j(0xae))/0x9*(parseInt(j(0xaf))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa79c2));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0xbf)];[k(0xdf)];[k(0xff)];['button1'];['button2'];[k(0xb7)];['isConnected']=![];[k(0xce)]=0.3;[k(0xfe)]=0x0;['orientation']=![];[k(0xc5)]=0x12c;['clickRepeatInterval']=0x64;[k(0xf1)]=0x19;[k(0xe3)];[k(0xba)];['eventTimeoutId'];['pointerCaptureId'];[k(0xf3)];[k(0xfb)];[k(0xe5)];[k(0xa8)];['troughActive'];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':l(0xa6)});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d[l(0xde)]=[scrollbarStyle],this[l(0xdf)]=d[l(0xb3)]('#root'),this[l(0xff)]=d[l(0xb3)](l(0xc8)),this[l(0xf6)]=d['querySelector'](l(0x106)),this['button2']=d[l(0xb3)](l(0xe2)),this['thumb']=d[l(0xb3)]('#thumb'),this['trough']['addEventListener'](l(0xb2),this[l(0xe8)]),this[l(0xff)][l(0xfa)]('pointerup',this[l(0xe1)]),this[l(0xff)][l(0xfa)](l(0xeb),this['onPointerUp']),this['button1'][l(0xfa)]('pointerdown',e=>this['onButtonPointerDown'](e,0x1)),this['button1']['addEventListener']('pointerup',this[l(0xe1)]),this['button1']['addEventListener'](l(0xeb),this[l(0xe1)]),this[l(0xf6)]['addEventListener']('contextmenu',f=>f[l(0xfd)]()),this[l(0xb9)][l(0xfa)](l(0xb2),e=>this['onButtonPointerDown'](e,0x2)),this[l(0xb9)]['addEventListener']('pointerup',this[l(0xe1)]),this[l(0xb9)]['addEventListener']('pointercancel',this[l(0xe1)]),this[l(0xb9)]['addEventListener']('contextmenu',f=>f['preventDefault']()),this[l(0xb7)]['addEventListener'](l(0xb2),this['onThumbPointerDown']),this['thumb'][l(0xfa)](l(0xa4),this[l(0xe1)]),this['thumb'][l(0xfa)](l(0xeb),this['onPointerUp']),this[l(0xb7)][l(0xfa)](l(0xbb),this['onThumbPointerMove']),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this[m(0xfb)]=![],this['button1Active']=![],this[m(0xa8)]=![],this[m(0xd7)]=![];}['connectedCallback'](){const n=k;this['isConnected']=!![],this['resetInteractionState'](),this[n(0xbe)](),this[n(0xf4)]();}['disconnectedCallback'](){this['isConnected']=![],this['resetInteractionState'](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0xbe)](){const o=k;if(!this['isConnected'])return;this['root'][o(0xad)][o(0xf5)]('horizontal',!this[o(0xf8)]),this[o(0xdf)][o(0xad)][o(0xf5)](o(0xc6),this[o(0xf8)]),this[o(0xb7)][o(0xd1)][o(0xe9)]=this[o(0xce)]==0x0?'none':'',this[o(0xb7)]['style'][o(0xe0)]=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this['thumb'][o(0xd1)]['width']=this['orientation']?'':percent(this['getEffectiveThumbSize']()),this['thumb'][o(0xd1)]['top']='',this['thumb']['style']['left']='',this['updateThumbPosition']();}[k(0xf4)](){const p=k;if(!this[p(0xc7)])return;this['thumb'][p(0xad)]['toggle'](p(0x100),this[p(0xfb)]),this['button1'][p(0xad)][p(0xf5)]('active',this[p(0xe5)]),this['button2']['classList'][p(0xf5)](p(0x100),this['button2Active']),void this[p(0xd7)];}['updateThumbPosition'](){const q=k,c=(0x1-this['getEffectiveThumbSize']())*this[q(0xfe)];this[q(0xf8)]?this['thumb']['style'][q(0xc3)]=percent(c):this['thumb']['style'][q(0xef)]=percent(c);}[k(0xcb)](){const r=k;return this[r(0xf8)]?this[r(0xff)]['clientHeight']:this[r(0xff)][r(0xcd)];}[k(0xd0)](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}[k(0x104)](c){const s=k,d=Math[s(0xa7)](0x0,Math[s(0xc2)](0x1,c));if(d==this[s(0xce)])return;this[s(0xce)]=d,this[s(0xbe)]();}['getThumbMinSize'](){const t=k,c=this[t(0xd5)]('--plain-scrollbar-thumb-min-size');if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this[t(0xf1)];return d;}['getEffectiveThumbSize'](){const u=k,c=this[u(0xee)](),d=this['getThroughSize']();if(!d)return this[u(0xce)];const e=Math['min'](0x1,c/d);return Math[u(0xa7)](e,this['thumbSize']);}['setValue'](c){const v=k,d=Math[v(0xa7)](0x0,Math['min'](0x1,c));if(d==this['value'])return![];return this[v(0xfe)]=isNaN(d)?0x0:d,this[v(0xa5)](),!![];}['setOrientation'](c){const w=k;if(c==this[w(0xf8)])return![];return this[w(0xf8)]=c,this['updateLayout'](),!![];}[k(0xd5)](c){const x=k,d=getComputedStyle(this[x(0xdf)])[x(0x101)](c);if(!d)return null;return d['trim']();}['fireEvent'](c){const y=k,d=new CustomEvent(y(0xf0),{'detail':c});this[y(0xbf)][y(0xac)](d);}[k(0xf2)](c,d,e,g=0x0){const z=k;this['stopEventRepetition'](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[z(0xf2)](c,d,e,g+0x1);this[z(0xdc)]=setTimeout(i,h);}[k(0xea)](){const A=k;this['eventTimeoutId']&&(clearTimeout(this['eventTimeoutId']),this[A(0xdc)]=undefined);}['startPointerCapture'](c,d){const B=k;this['stopPointerCapture'](),c[B(0xf9)](d),this['pointerCaptureElement']=c,this['pointerCaptureId']=d;}[k(0xfc)](){const C=k;if(!this[C(0xed)])return;this['pointerCaptureElement']['releasePointerCapture'](this['pointerCaptureId']),this[C(0xed)]=undefined;}['onTroughPointerDown']=c=>{const D=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c[D(0xdd)]||c['altKey']||c[D(0xaa)]||c[D(0xb1)]||c['shiftKey']||c[D(0xa3)]!=0x0)return;const d=this['trough'][D(0xe7)](),e=this[D(0xf8)]?c['clientY']-d[D(0xc3)]:c['clientX']-d[D(0xef)],f=(this['orientation']?d['height']:d['width'])*(0x1-this[D(0xe4)]())*this['value'],g=e>f,h=g?D(0xca):'decrementLarge';this[D(0xd7)]=!![],c['preventDefault'](),this[D(0xb8)](this[D(0xff)],c['pointerId']),this['fireEventRepeatedly'](h,this[D(0xc5)],this[D(0xec)]);};[k(0xab)]=(c,d)=>{const E=k;if(!this['isConnected']||this[E(0xed)])return;if(!c[E(0xdd)]||c[E(0xd8)]||c['ctrlKey']||c['metaKey']||c[E(0xda)]||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?E(0xc9):'incrementSmall';this[E(0xf4)](),c[E(0xfd)]();const f=d==0x1?this[E(0xf6)]:this['button2'];this['startPointerCapture'](f,c[E(0xa9)]),this[E(0xf2)](e,this['clickRepeatDelay'],this[E(0xec)]);};['onThumbPointerDown']=c=>{const F=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[F(0xaa)]||c['metaKey']||c[F(0xda)]||c[F(0xa3)]!=0x0)return;this['dragStartPos']=this['orientation']?c['clientY']:c['clientX'],this[F(0xba)]=this['value'],this[F(0xfb)]=!![],this['updateStyle'](),c[F(0xfd)](),this['startPointerCapture'](this[F(0xb7)],c['pointerId']);};['onThumbPointerMove']=c=>{const G=k;if(!this[G(0xc7)])return;if(!c[G(0xdd)]||!this[G(0xfb)])return;const d=this[G(0xf8)]?c[G(0xd4)]:c['clientX'],e=d-this['dragStartPos'],f=this[G(0xd0)](e),g=this['dragStartValue']+f;c['preventDefault'](),this['setValue'](g)&&this['fireEvent'](G(0xfe));};[k(0xe1)]=c=>{const H=k;if(!this['isConnected'])return;if(!c[H(0xdd)])return;this['resetInteractionState'](),this[H(0xf4)](),this['stopEventRepetition'](),this[H(0xfc)](),c[H(0xfd)]();};}function a(){const S=['min','top','setAttribute','clickRepeatDelay','vertical','isConnected','#trough','decrementSmall','incrementLarge','getThroughSize','601385LZEgBl','clientWidth','thumbSize','2heJivU','computeThumbMoveValue','style','2058atSNti','setValue','clientY','getCssVar','disconnectedCallback','troughActive','altKey','connectedCallback','shiftKey','observedAttributes','eventTimeoutId','isPrimary','adoptedStyleSheets','root','height','onPointerUp','#button2','dragStartPos','getEffectiveThumbSize','button1Active','horizontal','getBoundingClientRect','onTroughPointerDown','display','stopEventRepetition','pointercancel','clickRepeatInterval','pointerCaptureId','getThumbMinSize','left','scrollbar-input','defaultThumbMinSize','fireEventRepeatedly','pointerCaptureElement','updateStyle','toggle','button1','2868162unSdyS','orientation','setPointerCapture','addEventListener','thumbDragging','stopPointerCapture','preventDefault','value','trough','active','getPropertyValue','1525932tJrgfv','9356529TEJGRx','setThumbSize','length','#button1','getAttribute','button','pointerup','updateThumbPosition','open','max','button2Active','pointerId','ctrlKey','onButtonPointerDown','dispatchEvent','classList','2799QMJATM','7010kKHGNu','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','metaKey','pointerdown','querySelector','11680HAaVYz','orientationBoolean','define','thumb','startPointerCapture','button2','dragStartValue','pointermove','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','setOrientation','updateLayout','host','6454512GKvNEP','widget'];a=function(){return S;};return a();}export class PlainScrollbar extends HTMLElement{[k(0xc1)];constructor(){const I=k;super(),this['widget']=new Widget(this);const c=parseFloat(this[I(0xa2)](I(0xfe)));if(!isNaN(c))this[I(0xc1)][I(0xfe)]=c;if(this['hasOwnProperty']('value')){let d=this[I(0xfe)];delete this['value'];if(!isNaN(d))this['widget'][I(0xfe)]=d;}}[k(0xd9)](){this['widget']['connectedCallback']();}[k(0xd6)](){this['widget']['disconnectedCallback']();}get['thumbSize'](){const J=k;return this[J(0xc1)]['thumbSize'];}set[k(0xce)](c){this['widget']['setThumbSize'](c);}get['value'](){const K=k;return this['widget'][K(0xfe)];}set['value'](c){const L=k;this[L(0xc1)][L(0xd3)](c);}get['orientation'](){return formatOrientation(this['widget']['orientation']);}set[k(0xf8)](c){const M=k;this['widget'][M(0xbd)](decodeOrientation(c))&&this[M(0xc4)]('orientation',this['orientation']);}get[k(0xb5)](){const N=k;return this[N(0xc1)]['orientation'];}static get[k(0xdb)](){return['orientation'];}['attributeChangedCallback'](c,d,e){const O=k;switch(c){case'orientation':{e&&this[O(0xc1)]['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0xbc),buttonPath=k(0xb0),scrollbarStyle=css`
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
    `;function formatOrientation(c){const P=k;return c?P(0xc6):'horizontal';}function decodeOrientation(c){const Q=k;switch(c){case Q(0xc6):return!![];case Q(0xe6):return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const R=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c['substring'](0x0,c[R(0x105)]-0x2));}customElements[k(0xb6)]('node-projects-plain-scrollbar',PlainScrollbar);