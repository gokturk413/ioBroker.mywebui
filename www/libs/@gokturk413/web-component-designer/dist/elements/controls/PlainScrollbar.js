function b(c,d){c=c-0xd3;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x12e))/0x1*(-parseInt(j(0xe2))/0x2)+parseInt(j(0xd7))/0x3*(parseInt(j(0xe7))/0x4)+parseInt(j(0x10d))/0x5+parseInt(j(0x122))/0x6*(-parseInt(j(0xd4))/0x7)+parseInt(j(0x103))/0x8+parseInt(j(0x106))/0x9*(-parseInt(j(0xfc))/0xa)+-parseInt(j(0xdb))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc63a3));import{css,html}from'@node-projects/base-custom-webcomponent';function a(){const U=['shiftKey','onButtonPointerDown','onThumbPointerMove','startPointerCapture','setValue','fireEvent','onThumbPointerDown','host','observedAttributes','fireEventRepeatedly','7211519bkbHgS','dragStartValue','left','3IRyKqU','open','dispatchEvent','trim','17094077bKiqVJ','clickRepeatInterval','pointerdown','pointerId','getEffectiveThumbSize','button1','button1Active','3912YJPgDV','value','orientation','pointerCaptureId','widget','6390600diXbgL','clientY','ctrlKey','vertical','root','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','toFixed','max','getCssVar','defaultThumbMinSize','none','setOrientation','eventTimeoutId','#button1','style','incrementSmall','onPointerUp','thumb','clientWidth','toggle','attributeChangedCallback','724330gZddOY','getThroughSize','attachShadow','min','connectedCallback','classList','shadowRoot','12538528DNavfo','pointermove','contextmenu','153QvsyBS','hasOwnProperty','top','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','pointercancel','scrollbar-input','decrementLarge','6520610fQWDKb','button2Active','querySelector','troughActive','getThumbMinSize','resetInteractionState','button','getAttribute','getBoundingClientRect','addEventListener','thumbDragging','getPropertyValue','display','active','metaKey','endsWith','trough','disconnectedCallback','updateStyle','clientX','dragStartPos','6ypGcrC','horizontal','preventDefault','computeThumbMoveValue','altKey','setThumbSize','#thumb','stopEventRepetition','button2','stopPointerCapture','thumbSize','clientHeight','81bxzhjR','define','onTroughPointerDown','updateLayout','updateThumbPosition','pointerup','#root','Invalid\x20orientation\x20value\x20\x22'];a=function(){return U;};return a();}class Widget{[k(0x13d)];['root'];['trough'];['button1'];['button2'];[k(0xf8)];['isConnected']=![];['thumbSize']=0.3;['value']=0x0;[k(0xe4)]=![];['clickRepeatDelay']=0x12c;['clickRepeatInterval']=0x64;['defaultThumbMinSize']=0x19;['dragStartPos'];[k(0xd5)];['eventTimeoutId'];['pointerCaptureId'];['pointerCaptureElement'];['thumbDragging'];[k(0xe1)];[k(0x10e)];[k(0x110)];constructor(c){const l=k;this[l(0x13d)]=c,c[l(0xfe)]({'mode':l(0xd8)});const d=c[l(0x102)];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d[l(0x10f)](l(0x134)),this['trough']=d[l(0x10f)]('#trough'),this[l(0xe0)]=d[l(0x10f)](l(0xf4)),this[l(0x12a)]=d[l(0x10f)]('#button2'),this[l(0xf8)]=d['querySelector'](l(0x128)),this[l(0x11d)]['addEventListener'](l(0xdd),this[l(0x130)]),this['trough'][l(0x116)]('pointerup',this['onPointerUp']),this['trough'][l(0x116)]('pointercancel',this['onPointerUp']),this[l(0xe0)][l(0x116)](l(0xdd),e=>this[l(0x137)](e,0x1)),this[l(0xe0)][l(0x116)]('pointerup',this[l(0xf7)]),this[l(0xe0)]['addEventListener']('pointercancel',this['onPointerUp']),this[l(0xe0)][l(0x116)](l(0x105),f=>f['preventDefault']()),this['button2']['addEventListener'](l(0xdd),e=>this[l(0x137)](e,0x2)),this['button2']['addEventListener']('pointerup',this[l(0xf7)]),this[l(0x12a)][l(0x116)](l(0x10a),this['onPointerUp']),this['button2'][l(0x116)](l(0x105),f=>f['preventDefault']()),this['thumb']['addEventListener'](l(0xdd),this[l(0x13c)]),this['thumb']['addEventListener'](l(0x133),this[l(0xf7)]),this[l(0xf8)]['addEventListener'](l(0x10a),this['onPointerUp']),this[l(0xf8)]['addEventListener'](l(0x104),this[l(0x138)]),this['resetInteractionState']();}[k(0x112)](){const m=k;this['thumbDragging']=![],this['button1Active']=![],this['button2Active']=![],this[m(0x110)]=![];}[k(0x100)](){const n=k;this['isConnected']=!![],this['resetInteractionState'](),this[n(0x131)](),this['updateStyle']();}[k(0x11e)](){const o=k;this['isConnected']=![],this['resetInteractionState'](),this['stopEventRepetition'](),this[o(0x12b)]();}['updateLayout'](){const p=k;if(!this['isConnected'])return;this['root']['classList'][p(0xfa)](p(0x123),!this['orientation']),this[p(0xeb)][p(0x101)][p(0xfa)](p(0xea),this['orientation']),this['thumb']['style'][p(0x119)]=this['thumbSize']==0x0?p(0xf1):'',this[p(0xf8)][p(0xf5)]['height']=this[p(0xe4)]?percent(this['getEffectiveThumbSize']()):'',this[p(0xf8)]['style']['width']=this['orientation']?'':percent(this['getEffectiveThumbSize']()),this['thumb'][p(0xf5)][p(0x108)]='',this['thumb']['style']['left']='',this[p(0x132)]();}['updateStyle'](){const q=k;if(!this['isConnected'])return;this['thumb']['classList'][q(0xfa)](q(0x11a),this['thumbDragging']),this[q(0xe0)]['classList']['toggle']('active',this[q(0xe1)]),this[q(0x12a)]['classList'][q(0xfa)](q(0x11a),this[q(0x10e)]),void this['troughActive'];}[k(0x132)](){const r=k,c=(0x1-this[r(0xdf)]())*this[r(0xe3)];this[r(0xe4)]?this['thumb']['style']['top']=percent(c):this[r(0xf8)]['style'][r(0xd6)]=percent(c);}[k(0xfd)](){const s=k;return this['orientation']?this[s(0x11d)][s(0x12d)]:this['trough'][s(0xf9)];}[k(0x125)](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const t=k,d=Math[t(0xee)](0x0,Math[t(0xff)](0x1,c));if(d==this[t(0x12c)])return;this['thumbSize']=d,this[t(0x131)]();}[k(0x111)](){const u=k,c=this[u(0xef)]('--plain-scrollbar-thumb-min-size');if(!c)return this[u(0xf0)];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0xdf)](){const v=k,c=this[v(0x111)](),d=this[v(0xfd)]();if(!d)return this['thumbSize'];const e=Math['min'](0x1,c/d);return Math[v(0xee)](e,this['thumbSize']);}[k(0x13a)](c){const w=k,d=Math[w(0xee)](0x0,Math[w(0xff)](0x1,c));if(d==this[w(0xe3)])return![];return this['value']=isNaN(d)?0x0:d,this[w(0x132)](),!![];}[k(0xf2)](c){if(c==this['orientation'])return![];return this['orientation']=c,this['updateLayout'](),!![];}['getCssVar'](c){const x=k,d=getComputedStyle(this['root'])[x(0x118)](c);if(!d)return null;return d[x(0xda)]();}['fireEvent'](c){const y=k,d=new CustomEvent(y(0x10b),{'detail':c});this['host'][y(0xd9)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const z=k;this['stopEventRepetition'](),this[z(0x13b)](c);const h=g==0x0?d:e,i=()=>this[z(0xd3)](c,d,e,g+0x1);this[z(0xf3)]=setTimeout(i,h);}[k(0x129)](){const A=k;this[A(0xf3)]&&(clearTimeout(this['eventTimeoutId']),this['eventTimeoutId']=undefined);}['startPointerCapture'](c,d){const B=k;this[B(0x12b)](),c['setPointerCapture'](d),this['pointerCaptureElement']=c,this['pointerCaptureId']=d;}[k(0x12b)](){const C=k;if(!this['pointerCaptureId'])return;this['pointerCaptureElement']['releasePointerCapture'](this[C(0xe5)]),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const D=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c[D(0x126)]||c[D(0xe9)]||c[D(0x11b)]||c['shiftKey']||c['button']!=0x0)return;const d=this['trough'][D(0x115)](),e=this[D(0xe4)]?c[D(0xe8)]-d[D(0x108)]:c['clientX']-d['left'],f=(this[D(0xe4)]?d['height']:d['width'])*(0x1-this['getEffectiveThumbSize']())*this['value'],g=e>f,h=g?'incrementLarge':D(0x10c);this['troughActive']=!![],c['preventDefault'](),this[D(0x139)](this[D(0x11d)],c['pointerId']),this[D(0xd3)](h,this['clickRepeatDelay'],this[D(0xdc)]);};[k(0x137)]=(c,d)=>{const E=k;if(!this['isConnected']||this[E(0xe5)])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c['metaKey']||c['shiftKey']||c[E(0x113)]!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':E(0xf6);this[E(0x11f)](),c['preventDefault']();const f=d==0x1?this[E(0xe0)]:this[E(0x12a)];this[E(0x139)](f,c['pointerId']),this['fireEventRepeatedly'](e,this['clickRepeatDelay'],this[E(0xdc)]);};[k(0x13c)]=c=>{const F=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c[F(0x11b)]||c[F(0x136)]||c['button']!=0x0)return;this[F(0x121)]=this[F(0xe4)]?c[F(0xe8)]:c['clientX'],this['dragStartValue']=this[F(0xe3)],this['thumbDragging']=!![],this['updateStyle'](),c[F(0x124)](),this[F(0x139)](this[F(0xf8)],c[F(0xde)]);};[k(0x138)]=c=>{const G=k;if(!this['isConnected'])return;if(!c['isPrimary']||!this[G(0x117)])return;const d=this[G(0xe4)]?c['clientY']:c[G(0x120)],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this['dragStartValue']+f;c[G(0x124)](),this[G(0x13a)](g)&&this[G(0x13b)](G(0xe3));};[k(0xf7)]=c=>{const H=k;if(!this['isConnected'])return;if(!c['isPrimary'])return;this[H(0x112)](),this['updateStyle'](),this['stopEventRepetition'](),this['stopPointerCapture'](),c[H(0x124)]();};}export class PlainScrollbar extends HTMLElement{[k(0xe6)];constructor(){const I=k;super(),this[I(0xe6)]=new Widget(this);const c=parseFloat(this[I(0x114)](I(0xe3)));if(!isNaN(c))this['widget']['value']=c;if(this[I(0x107)](I(0xe3))){let d=this['value'];delete this[I(0xe3)];if(!isNaN(d))this['widget'][I(0xe3)]=d;}}[k(0x100)](){const J=k;this['widget'][J(0x100)]();}['disconnectedCallback'](){const K=k;this[K(0xe6)][K(0x11e)]();}get['thumbSize'](){const L=k;return this[L(0xe6)][L(0x12c)];}set['thumbSize'](c){const M=k;this[M(0xe6)][M(0x127)](c);}get['value'](){return this['widget']['value'];}set[k(0xe3)](c){const N=k;this[N(0xe6)]['setValue'](c);}get['orientation'](){return formatOrientation(this['widget']['orientation']);}set['orientation'](c){const O=k;this['widget'][O(0xf2)](decodeOrientation(c))&&this['setAttribute'](O(0xe4),this['orientation']);}get['orientationBoolean'](){const P=k;return this[P(0xe6)]['orientation'];}static get[k(0x13e)](){return['orientation'];}[k(0xfb)](c,d,e){const Q=k;switch(c){case Q(0xe4):{e&&this[Q(0xe6)][Q(0xf2)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0xec),buttonPath=k(0x109),scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){const R=k;switch(c){case R(0xea):return!![];case R(0x123):return![];default:throw new Error(R(0x135)+c+'\x22.');}}function percent(c){const S=k;return(c*0x64)[S(0xed)](0x3)+'%';}function decodePxValue(c){const T=k;if(!c||!c[T(0x11c)]('px'))return undefined;return Number(c['substring'](0x0,c['length']-0x2));}customElements[k(0x12f)]('node-projects-plain-scrollbar',PlainScrollbar);