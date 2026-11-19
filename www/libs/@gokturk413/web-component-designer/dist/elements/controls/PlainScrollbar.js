const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xe8))/0x1+parseInt(j(0xfb))/0x2+parseInt(j(0x126))/0x3*(-parseInt(j(0x103))/0x4)+-parseInt(j(0x128))/0x5+parseInt(j(0xf5))/0x6+-parseInt(j(0x108))/0x7+-parseInt(j(0x110))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xefa2e));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];['root'];['trough'];['button1'];['button2'];[k(0xf2)];[k(0x118)]=![];['thumbSize']=0.3;['value']=0x0;[k(0xe3)]=![];[k(0x129)]=0x12c;[k(0x109)]=0x64;[k(0xce)]=0x19;['dragStartPos'];['dragStartValue'];[k(0x120)];[k(0xd0)];[k(0xf8)];['thumbDragging'];['button1Active'];['button2Active'];[k(0xf9)];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':l(0xf1)});const d=c[l(0x119)];d[l(0xe2)](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d[l(0xf4)](l(0xf3)),this[l(0xd8)]=d[l(0xf4)]('#trough'),this[l(0xfe)]=d['querySelector']('#button1'),this[l(0x125)]=d[l(0xf4)](l(0xef)),this['thumb']=d['querySelector'](l(0xd2)),this[l(0xd8)][l(0xdb)]('pointerdown',this[l(0xfa)]),this[l(0xd8)]['addEventListener'](l(0xe4),this['onPointerUp']),this[l(0xd8)][l(0xdb)](l(0xda),this['onPointerUp']),this['button1']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x1)),this[l(0xfe)]['addEventListener'](l(0xe4),this['onPointerUp']),this[l(0xfe)]['addEventListener']('pointercancel',this['onPointerUp']),this[l(0xfe)][l(0xdb)](l(0xd1),f=>f['preventDefault']()),this['button2']['addEventListener'](l(0xe5),e=>this['onButtonPointerDown'](e,0x2)),this['button2'][l(0xdb)]('pointerup',this[l(0xf0)]),this['button2']['addEventListener'](l(0xda),this['onPointerUp']),this[l(0x125)][l(0xdb)]('contextmenu',f=>f[l(0x10a)]()),this[l(0xf2)][l(0xdb)](l(0xe5),this['onThumbPointerDown']),this['thumb'][l(0xdb)](l(0xe4),this[l(0xf0)]),this[l(0xf2)][l(0xdb)](l(0xda),this['onPointerUp']),this[l(0xf2)][l(0xdb)](l(0x104),this[l(0x121)]),this['resetInteractionState']();}[k(0xcd)](){const m=k;this['thumbDragging']=![],this['button1Active']=![],this[m(0x11a)]=![],this['troughActive']=![];}[k(0xd3)](){const n=k;this['isConnected']=!![],this[n(0xcd)](),this[n(0x122)](),this['updateStyle']();}[k(0x12a)](){const o=k;this['isConnected']=![],this[o(0xcd)](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0x122)](){const p=k;if(!this['isConnected'])return;this[p(0x114)][p(0x111)][p(0xd6)](p(0x10f),!this['orientation']),this['root'][p(0x111)][p(0xd6)]('vertical',this['orientation']),this['thumb'][p(0xec)][p(0xf7)]=this[p(0x116)]==0x0?'none':'',this[p(0xf2)]['style']['height']=this[p(0xe3)]?percent(this[p(0x11e)]()):'',this['thumb'][p(0xec)][p(0xfc)]=this['orientation']?'':percent(this[p(0x11e)]()),this['thumb']['style']['top']='',this['thumb'][p(0xec)][p(0x12f)]='',this['updateThumbPosition']();}['updateStyle'](){const q=k;if(!this['isConnected'])return;this[q(0xf2)]['classList'][q(0xd6)]('active',this['thumbDragging']),this['button1'][q(0x111)]['toggle'](q(0x107),this['button1Active']),this[q(0x125)][q(0x111)][q(0xd6)]('active',this['button2Active']),void this[q(0xf9)];}[k(0x12b)](){const r=k,c=(0x1-this[r(0x11e)]())*this['value'];this['orientation']?this[r(0xf2)]['style'][r(0x117)]=percent(c):this['thumb'][r(0xec)][r(0x12f)]=percent(c);}['getThroughSize'](){const s=k;return this['orientation']?this['trough']['clientHeight']:this[s(0xd8)]['clientWidth'];}['computeThumbMoveValue'](c){const t=k,d=this[t(0xe9)]()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const d=Math['max'](0x0,Math['min'](0x1,c));if(d==this['thumbSize'])return;this['thumbSize']=d,this['updateLayout']();}[k(0xd4)](){const u=k,c=this[u(0xfd)](u(0x10c));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}['getEffectiveThumbSize'](){const v=k,c=this['getThumbMinSize'](),d=this[v(0xe9)]();if(!d)return this[v(0x116)];const e=Math['min'](0x1,c/d);return Math[v(0x105)](e,this[v(0x116)]);}['setValue'](c){const w=k,d=Math[w(0x105)](0x0,Math[w(0x12c)](0x1,c));if(d==this['value'])return![];return this[w(0x11b)]=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}[k(0x102)](c){const x=k;if(c==this['orientation'])return![];return this[x(0xe3)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const y=k,d=getComputedStyle(this[y(0x114)])['getPropertyValue'](c);if(!d)return null;return d['trim']();}[k(0x131)](c){const z=k,d=new CustomEvent(z(0xee),{'detail':c});this[z(0x100)]['dispatchEvent'](d);}[k(0xff)](c,d,e,g=0x0){const A=k;this[A(0x12d)](),this[A(0x131)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this[A(0x120)]=setTimeout(i,h);}['stopEventRepetition'](){const B=k;this[B(0x120)]&&(clearTimeout(this['eventTimeoutId']),this['eventTimeoutId']=undefined);}[k(0x132)](c,d){const C=k;this[C(0x10d)](),c['setPointerCapture'](d),this[C(0xf8)]=c,this[C(0xd0)]=d;}[k(0x10d)](){const D=k;if(!this[D(0xd0)])return;this['pointerCaptureElement'][D(0xdd)](this['pointerCaptureId']),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const E=k;if(!this[E(0x118)]||this[E(0xd0)])return;if(!c[E(0xea)]||c['altKey']||c[E(0x10b)]||c['metaKey']||c['shiftKey']||c[E(0x10e)]!=0x0)return;const d=this['trough'][E(0xe6)](),e=this[E(0xe3)]?c['clientY']-d[E(0x117)]:c['clientX']-d[E(0x12f)],f=(this[E(0xe3)]?d[E(0x11c)]:d['width'])*(0x1-this[E(0x11e)]())*this[E(0x11b)],g=e>f,h=g?E(0xd9):E(0xe0);this[E(0xf9)]=!![],c[E(0x10a)](),this['startPointerCapture'](this['trough'],c[E(0xe7)]),this['fireEventRepeatedly'](h,this['clickRepeatDelay'],this['clickRepeatInterval']);};[k(0x113)]=(c,d)=>{const F=k;if(!this[F(0x118)]||this[F(0xd0)])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c[F(0xf6)]||c['shiftKey']||c['button']!=0x0)return;switch(d){case 0x1:this[F(0xe1)]=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':F(0x11d);this[F(0x11f)](),c['preventDefault']();const f=d==0x1?this['button1']:this[F(0x125)];this[F(0x132)](f,c[F(0xe7)]),this[F(0xff)](e,this['clickRepeatDelay'],this[F(0x109)]);};['onThumbPointerDown']=c=>{const G=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c[G(0xd7)]||c['ctrlKey']||c['metaKey']||c[G(0x130)]||c[G(0x10e)]!=0x0)return;this[G(0x124)]=this[G(0xe3)]?c[G(0x12e)]:c[G(0x101)],this['dragStartValue']=this[G(0x11b)],this[G(0xd5)]=!![],this['updateStyle'](),c['preventDefault'](),this[G(0x132)](this['thumb'],c['pointerId']);};[k(0x121)]=c=>{const H=k;if(!this['isConnected'])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this[H(0xe3)]?c[H(0x12e)]:c[H(0x101)],e=d-this[H(0x124)],f=this[H(0x112)](e),g=this[H(0x106)]+f;c['preventDefault'](),this[H(0x123)](g)&&this[H(0x131)]('value');};[k(0xf0)]=c=>{const I=k;if(!this[I(0x118)])return;if(!c[I(0xea)])return;this[I(0xcd)](),this['updateStyle'](),this['stopEventRepetition'](),this[I(0x10d)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const J=k;super(),this[J(0x115)]=new Widget(this);const c=parseFloat(this['getAttribute']('value'));if(!isNaN(c))this[J(0x115)]['value']=c;if(this['hasOwnProperty']('value')){let d=this[J(0x11b)];delete this['value'];if(!isNaN(d))this[J(0x115)][J(0x11b)]=d;}}[k(0xd3)](){const K=k;this[K(0x115)][K(0xd3)]();}['disconnectedCallback'](){this['widget']['disconnectedCallback']();}get['thumbSize'](){const L=k;return this[L(0x115)]['thumbSize'];}set[k(0x116)](c){const M=k;this[M(0x115)]['setThumbSize'](c);}get['value'](){const N=k;return this[N(0x115)][N(0x11b)];}set[k(0x11b)](c){const O=k;this[O(0x115)]['setValue'](c);}get['orientation'](){return formatOrientation(this['widget']['orientation']);}set['orientation'](c){const P=k;this[P(0x115)][P(0x102)](decodeOrientation(c))&&this['setAttribute']('orientation',this['orientation']);}get[k(0xcf)](){const Q=k;return this['widget'][Q(0xe3)];}static get['observedAttributes'](){return['orientation'];}[k(0xed)](c,d,e){const R=k;switch(c){case'orientation':{e&&this['widget'][R(0x102)](decodeOrientation(e));break;}}}}function a(){const W=['button2Active','value','height','incrementSmall','getEffectiveThumbSize','updateStyle','eventTimeoutId','onThumbPointerMove','updateLayout','setValue','dragStartPos','button2','52752sbmiLf','Invalid\x20orientation\x20value\x20\x22','322605jNcuqT','clickRepeatDelay','disconnectedCallback','updateThumbPosition','min','stopEventRepetition','clientY','left','shiftKey','fireEvent','startPointerCapture','resetInteractionState','defaultThumbMinSize','orientationBoolean','pointerCaptureId','contextmenu','#thumb','connectedCallback','getThumbMinSize','thumbDragging','toggle','altKey','trough','incrementLarge','pointercancel','addEventListener','toFixed','releasePointerCapture','vertical','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','decrementLarge','button1Active','appendChild','orientation','pointerup','pointerdown','getBoundingClientRect','pointerId','1362220aLccYL','getThroughSize','isPrimary','substring','style','attributeChangedCallback','scrollbar-input','#button2','onPointerUp','open','thumb','#root','querySelector','1829232wpmdbP','metaKey','display','pointerCaptureElement','troughActive','onTroughPointerDown','2073384qazgOF','width','getCssVar','button1','fireEventRepeatedly','host','clientX','setOrientation','116zdsdKp','pointermove','max','dragStartValue','active','6059886iVTahD','clickRepeatInterval','preventDefault','ctrlKey','--plain-scrollbar-thumb-min-size','stopPointerCapture','button','horizontal','2256632AWMBxu','classList','computeThumbMoveValue','onButtonPointerDown','root','widget','thumbSize','top','isConnected','shadowRoot'];a=function(){return W;};return a();}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0xdf),scrollbarStyle=css`
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
    `;function formatOrientation(c){const S=k;return c?S(0xde):'horizontal';}function decodeOrientation(c){const T=k;switch(c){case'vertical':return!![];case'horizontal':return![];default:throw new Error(T(0x127)+c+'\x22.');}}function percent(c){const U=k;return(c*0x64)[U(0xdc)](0x3)+'%';}function b(c,d){c=c-0xcd;const e=a();let f=e[c];return f;}function decodePxValue(c){const V=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[V(0xeb)](0x0,c['length']-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);