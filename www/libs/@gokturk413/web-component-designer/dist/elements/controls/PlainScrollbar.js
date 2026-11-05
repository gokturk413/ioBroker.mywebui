const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x119))/0x1*(parseInt(j(0x126))/0x2)+-parseInt(j(0xea))/0x3*(parseInt(j(0x11a))/0x4)+-parseInt(j(0xe9))/0x5*(parseInt(j(0xd9))/0x6)+parseInt(j(0x11b))/0x7*(parseInt(j(0xec))/0x8)+parseInt(j(0x129))/0x9*(-parseInt(j(0x10b))/0xa)+parseInt(j(0x11c))/0xb+-parseInt(j(0x113))/0xc*(-parseInt(j(0xfa))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x28f0e));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];[k(0x12b)];['trough'];[k(0x10d)];['button2'];[k(0xd3)];[k(0x121)]=![];['thumbSize']=0.3;['value']=0x0;['orientation']=![];[k(0x102)]=0x12c;[k(0xd5)]=0x64;['defaultThumbMinSize']=0x19;[k(0xd2)];['dragStartValue'];['eventTimeoutId'];['pointerCaptureId'];[k(0xed)];[k(0x11f)];[k(0xe8)];['button2Active'];['troughActive'];constructor(c){const l=k;this[l(0xf0)]=c,c[l(0xf4)]({'mode':l(0xcf)});const d=c[l(0x114)];d['appendChild'](scrollbarHtmlTemplate['content'][l(0x12f)](!![])),d[l(0x10a)]=[scrollbarStyle],this['root']=d[l(0xf5)]('#root'),this[l(0xf2)]=d['querySelector']('#trough'),this['button1']=d[l(0xf5)]('#button1'),this[l(0xdd)]=d['querySelector']('#button2'),this['thumb']=d[l(0xf5)]('#thumb'),this['trough'][l(0xff)]('pointerdown',this['onTroughPointerDown']),this['trough']['addEventListener']('pointerup',this['onPointerUp']),this['trough']['addEventListener'](l(0xef),this[l(0xe0)]),this[l(0x10d)][l(0xff)](l(0xee),e=>this[l(0x108)](e,0x1)),this['button1']['addEventListener']('pointerup',this[l(0xe0)]),this[l(0x10d)]['addEventListener'](l(0xef),this[l(0xe0)]),this[l(0x10d)]['addEventListener']('contextmenu',f=>f[l(0xdf)]()),this['button2']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this['button2'][l(0xff)](l(0xd8),this['onPointerUp']),this[l(0xdd)][l(0xff)]('pointercancel',this[l(0xe0)]),this['button2'][l(0xff)]('contextmenu',f=>f[l(0xdf)]()),this['thumb'][l(0xff)]('pointerdown',this[l(0x110)]),this['thumb'][l(0xff)]('pointerup',this['onPointerUp']),this['thumb'][l(0xff)]('pointercancel',this['onPointerUp']),this[l(0xd3)][l(0xff)](l(0xf1),this[l(0x107)]),this['resetInteractionState']();}[k(0xeb)](){const m=k;this[m(0x11f)]=![],this['button1Active']=![],this[m(0xd6)]=![],this['troughActive']=![];}[k(0x127)](){const n=k;this['isConnected']=!![],this[n(0xeb)](),this['updateLayout'](),this['updateStyle']();}['disconnectedCallback'](){const o=k;this[o(0x121)]=![],this['resetInteractionState'](),this['stopEventRepetition'](),this[o(0xfb)]();}[k(0xf3)](){const p=k;if(!this['isConnected'])return;this[p(0x12b)]['classList'][p(0x116)]('horizontal',!this['orientation']),this[p(0x12b)]['classList'][p(0x116)](p(0xe4),this['orientation']),this['thumb']['style'][p(0x111)]=this[p(0xd1)]==0x0?p(0x120):'',this['thumb'][p(0xf9)]['height']=this[p(0xd4)]?percent(this[p(0x105)]()):'',this[p(0xd3)]['style'][p(0x128)]=this['orientation']?'':percent(this['getEffectiveThumbSize']()),this['thumb'][p(0xf9)][p(0xfc)]='',this['thumb']['style'][p(0xd7)]='',this['updateThumbPosition']();}[k(0x109)](){const q=k;if(!this[q(0x121)])return;this[q(0xd3)]['classList']['toggle'](q(0x106),this['thumbDragging']),this[q(0x10d)][q(0xd0)]['toggle']('active',this['button1Active']),this[q(0xdd)]['classList']['toggle']('active',this['button2Active']),void this[q(0xde)];}[k(0xe2)](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this['value'];this['orientation']?this['thumb']['style']['top']=percent(c):this[r(0xd3)]['style'][r(0xd7)]=percent(c);}[k(0x131)](){const s=k;return this[s(0xd4)]?this[s(0xf2)][s(0x130)]:this[s(0xf2)][s(0x11e)];}[k(0xdb)](c){const t=k,d=this[t(0x131)]()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}[k(0x112)](c){const u=k,d=Math['max'](0x0,Math['min'](0x1,c));if(d==this[u(0xd1)])return;this['thumbSize']=d,this[u(0xf3)]();}['getThumbMinSize'](){const v=k,c=this[v(0x101)](v(0x10f));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this[v(0x100)];return d;}['getEffectiveThumbSize'](){const w=k,c=this[w(0x132)](),d=this['getThroughSize']();if(!d)return this['thumbSize'];const e=Math[w(0x12c)](0x1,c/d);return Math[w(0x103)](e,this['thumbSize']);}[k(0x12e)](c){const x=k,d=Math['max'](0x0,Math[x(0x12c)](0x1,c));if(d==this[x(0xe5)])return![];return this['value']=isNaN(d)?0x0:d,this[x(0xe2)](),!![];}[k(0x123)](c){const y=k;if(c==this['orientation'])return![];return this[y(0xd4)]=c,this['updateLayout'](),!![];}[k(0x101)](c){const z=k,d=getComputedStyle(this['root'])[z(0xe7)](c);if(!d)return null;return d['trim']();}['fireEvent'](c){const d=new CustomEvent('scrollbar-input',{'detail':c});this['host']['dispatchEvent'](d);}[k(0xcc)](c,d,e,g=0x0){this['stopEventRepetition'](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}['stopEventRepetition'](){const A=k;this[A(0x10c)]&&(clearTimeout(this[A(0x10c)]),this[A(0x10c)]=undefined);}['startPointerCapture'](c,d){const B=k;this[B(0xfb)](),c[B(0x10e)](d),this['pointerCaptureElement']=c,this['pointerCaptureId']=d;}[k(0xfb)](){const C=k;if(!this[C(0xda)])return;this['pointerCaptureElement'][C(0x117)](this[C(0xda)]),this['pointerCaptureId']=undefined;}[k(0xf7)]=c=>{const D=k;if(!this['isConnected']||this[D(0xda)])return;if(!c[D(0x133)]||c['altKey']||c['ctrlKey']||c['metaKey']||c['shiftKey']||c[D(0x118)]!=0x0)return;const d=this[D(0xf2)][D(0xe1)](),e=this[D(0xd4)]?c['clientY']-d['top']:c[D(0xfe)]-d['left'],f=(this['orientation']?d[D(0xfd)]:d['width'])*(0x1-this[D(0x105)]())*this['value'],g=e>f,h=g?'incrementLarge':D(0xcd);this['troughActive']=!![],c['preventDefault'](),this[D(0x11d)](this[D(0xf2)],c['pointerId']),this[D(0xcc)](h,this['clickRepeatDelay'],this[D(0xd5)]);};['onButtonPointerDown']=(c,d)=>{const E=k;if(!this[E(0x121)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c[E(0xdc)]||c[E(0x12d)]||c[E(0x122)]||c[E(0xe3)]||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this['updateStyle'](),c[E(0xdf)]();const f=d==0x1?this['button1']:this['button2'];this['startPointerCapture'](f,c[E(0xf6)]),this[E(0xcc)](e,this[E(0x102)],this[E(0xd5)]);};['onThumbPointerDown']=c=>{const F=k;if(!this[F(0x121)]||this['pointerCaptureId'])return;if(!c[F(0x133)]||c[F(0xdc)]||c[F(0x12d)]||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;this[F(0xd2)]=this[F(0xd4)]?c['clientY']:c[F(0xfe)],this['dragStartValue']=this[F(0xe5)],this['thumbDragging']=!![],this[F(0x109)](),c['preventDefault'](),this[F(0x11d)](this[F(0xd3)],c['pointerId']);};[k(0x107)]=c=>{const G=k;if(!this['isConnected'])return;if(!c[G(0x133)]||!this[G(0x11f)])return;const d=this[G(0xd4)]?c[G(0xce)]:c['clientX'],e=d-this[G(0xd2)],f=this['computeThumbMoveValue'](e),g=this[G(0x124)]+f;c['preventDefault'](),this[G(0x12e)](g)&&this[G(0xcb)](G(0xe5));};[k(0xe0)]=c=>{const H=k;if(!this[H(0x121)])return;if(!c['isPrimary'])return;this[H(0xeb)](),this[H(0x109)](),this['stopEventRepetition'](),this['stopPointerCapture'](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{[k(0x115)];constructor(){const I=k;super(),this[I(0x115)]=new Widget(this);const c=parseFloat(this['getAttribute']('value'));if(!isNaN(c))this['widget']['value']=c;if(this['hasOwnProperty']('value')){let d=this['value'];delete this[I(0xe5)];if(!isNaN(d))this['widget'][I(0xe5)]=d;}}['connectedCallback'](){const J=k;this[J(0x115)]['connectedCallback']();}['disconnectedCallback'](){const K=k;this[K(0x115)]['disconnectedCallback']();}get[k(0xd1)](){const L=k;return this[L(0x115)][L(0xd1)];}set[k(0xd1)](c){const M=k;this['widget'][M(0x112)](c);}get['value'](){const N=k;return this[N(0x115)][N(0xe5)];}set['value'](c){const O=k;this[O(0x115)]['setValue'](c);}get['orientation'](){const P=k;return formatOrientation(this['widget'][P(0xd4)]);}set[k(0xd4)](c){const Q=k;this[Q(0x115)][Q(0x123)](decodeOrientation(c))&&this['setAttribute']('orientation',this[Q(0xd4)]);}get[k(0xca)](){const R=k;return this['widget'][R(0xd4)];}static get['observedAttributes'](){const S=k;return[S(0xd4)];}[k(0xc9)](c,d,e){const T=k;switch(c){case T(0xd4):{e&&this['widget'][T(0x123)](decodeOrientation(e));break;}}}}function b(c,d){c=c-0xc9;const e=a();let f=e[c];return f;}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0x104),scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){const U=k;switch(c){case'vertical':return!![];case'horizontal':return![];default:throw new Error(U(0xe6)+c+'\x22.');}}function a(){const W=['clientHeight','getThroughSize','getThumbMinSize','isPrimary','attributeChangedCallback','orientationBoolean','fireEvent','fireEventRepeatedly','decrementLarge','clientY','open','classList','thumbSize','dragStartPos','thumb','orientation','clickRepeatInterval','button2Active','left','pointerup','1632450wlejgm','pointerCaptureId','computeThumbMoveValue','altKey','button2','troughActive','preventDefault','onPointerUp','getBoundingClientRect','updateThumbPosition','shiftKey','vertical','value','Invalid\x20orientation\x20value\x20\x22','getPropertyValue','button1Active','5kIPUBC','9QncLnP','resetInteractionState','6304VsvCId','pointerCaptureElement','pointerdown','pointercancel','host','pointermove','trough','updateLayout','attachShadow','querySelector','pointerId','onTroughPointerDown','length','style','13aRiIKZ','stopPointerCapture','top','height','clientX','addEventListener','defaultThumbMinSize','getCssVar','clickRepeatDelay','max','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','getEffectiveThumbSize','active','onThumbPointerMove','onButtonPointerDown','updateStyle','adoptedStyleSheets','1141390FYoPxf','eventTimeoutId','button1','setPointerCapture','--plain-scrollbar-thumb-min-size','onThumbPointerDown','display','setThumbSize','1816884dVQoTz','shadowRoot','widget','toggle','releasePointerCapture','button','65615EAAVWK','50004kUunTp','1393cTENyO','2393347iAYQiC','startPointerCapture','clientWidth','thumbDragging','none','isConnected','metaKey','setOrientation','dragStartValue','define','2vDOMJv','connectedCallback','width','9aekCdl','endsWith','root','min','ctrlKey','setValue','cloneNode'];a=function(){return W;};return a();}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const V=k;if(!c||!c[V(0x12a)]('px'))return undefined;return Number(c['substring'](0x0,c[V(0xf8)]-0x2));}customElements[k(0x125)]('node-projects-plain-scrollbar',PlainScrollbar);