const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x104))/0x1*(-parseInt(j(0x124))/0x2)+parseInt(j(0x114))/0x3*(-parseInt(j(0xfd))/0x4)+parseInt(j(0x102))/0x5*(parseInt(j(0x122))/0x6)+parseInt(j(0x11a))/0x7+parseInt(j(0x119))/0x8*(-parseInt(j(0x116))/0x9)+parseInt(j(0x131))/0xa+parseInt(j(0x12b))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1d1e4));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0xf0)];['root'];['trough'];[k(0x100)];[k(0x13f)];[k(0xef)];['isConnected']=![];[k(0x133)]=0.3;['value']=0x0;['orientation']=![];[k(0x118)]=0x12c;[k(0x12e)]=0x64;['defaultThumbMinSize']=0x19;[k(0x13a)];[k(0x12a)];['eventTimeoutId'];[k(0x103)];['pointerCaptureElement'];['thumbDragging'];['button1Active'];[k(0x117)];['troughActive'];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':l(0xf8)});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this[l(0x13d)]=d[l(0xfb)](l(0xf7)),this[l(0x115)]=d[l(0xfb)](l(0x10c)),this[l(0x100)]=d['querySelector']('#button1'),this[l(0x13f)]=d[l(0xfb)](l(0x134)),this[l(0xef)]=d['querySelector']('#thumb'),this[l(0x115)]['addEventListener'](l(0x101),this['onTroughPointerDown']),this['trough']['addEventListener']('pointerup',this[l(0x14e)]),this['trough'][l(0xf3)](l(0x149),this[l(0x14e)]),this['button1'][l(0xf3)](l(0x101),e=>this['onButtonPointerDown'](e,0x1)),this[l(0x100)]['addEventListener']('pointerup',this['onPointerUp']),this[l(0x100)][l(0xf3)]('pointercancel',this[l(0x14e)]),this['button1']['addEventListener'](l(0x11e),f=>f['preventDefault']()),this['button2']['addEventListener'](l(0x101),e=>this['onButtonPointerDown'](e,0x2)),this['button2'][l(0xf3)]('pointerup',this['onPointerUp']),this[l(0x13f)][l(0xf3)]('pointercancel',this[l(0x14e)]),this['button2']['addEventListener'](l(0x11e),f=>f[l(0x11c)]()),this['thumb']['addEventListener'](l(0x101),this[l(0xf2)]),this[l(0xef)][l(0xf3)](l(0x12d),this['onPointerUp']),this[l(0xef)][l(0xf3)]('pointercancel',this[l(0x14e)]),this['thumb'][l(0xf3)](l(0x127),this[l(0x107)]),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this[m(0x130)]=![],this[m(0x139)]=![],this[m(0x117)]=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x14b)]=!![],this['resetInteractionState'](),this['updateLayout'](),this[n(0x111)]();}['disconnectedCallback'](){this['isConnected']=![],this['resetInteractionState'](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0xf5)](){const o=k;if(!this['isConnected'])return;this[o(0x13d)][o(0xf9)][o(0x112)]('horizontal',!this[o(0x11f)]),this['root']['classList'][o(0x112)]('vertical',this['orientation']),this[o(0xef)][o(0x13e)][o(0x12c)]=this[o(0x133)]==0x0?'none':'',this['thumb'][o(0x13e)][o(0xfe)]=this[o(0x11f)]?percent(this['getEffectiveThumbSize']()):'',this[o(0xef)][o(0x13e)][o(0x11d)]=this[o(0x11f)]?'':percent(this[o(0x148)]()),this[o(0xef)]['style'][o(0x147)]='',this['thumb'][o(0x13e)]['left']='',this[o(0x14d)]();}['updateStyle'](){const p=k;if(!this['isConnected'])return;this['thumb']['classList']['toggle'](p(0x10b),this[p(0x130)]),this['button1']['classList']['toggle']('active',this[p(0x139)]),this[p(0x13f)]['classList']['toggle'](p(0x10b),this[p(0x117)]),void this['troughActive'];}[k(0x14d)](){const q=k,c=(0x1-this[q(0x148)]())*this[q(0xff)];this[q(0x11f)]?this['thumb'][q(0x13e)]['top']=percent(c):this[q(0xef)][q(0x13e)][q(0xfc)]=percent(c);}['getThroughSize'](){const r=k;return this['orientation']?this[r(0x115)]['clientHeight']:this[r(0x115)]['clientWidth'];}['computeThumbMoveValue'](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const s=k,d=Math['max'](0x0,Math[s(0x126)](0x1,c));if(d==this[s(0x133)])return;this['thumbSize']=d,this[s(0xf5)]();}['getThumbMinSize'](){const t=k,c=this['getCssVar'](t(0xf6));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this[t(0x10e)];return d;}[k(0x148)](){const u=k,c=this[u(0x113)](),d=this[u(0x140)]();if(!d)return this['thumbSize'];const e=Math['min'](0x1,c/d);return Math['max'](e,this[u(0x133)]);}[k(0x10f)](c){const v=k,d=Math['max'](0x0,Math[v(0x126)](0x1,c));if(d==this[v(0xff)])return![];return this[v(0xff)]=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}[k(0x129)](c){const w=k;if(c==this[w(0x11f)])return![];return this[w(0x11f)]=c,this[w(0xf5)](),!![];}['getCssVar'](c){const x=k,d=getComputedStyle(this['root'])[x(0x13b)](c);if(!d)return null;return d['trim']();}[k(0x14c)](c){const y=k,d=new CustomEvent(y(0xf4),{'detail':c});this['host'][y(0x145)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const z=k;this[z(0x141)](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}['stopEventRepetition'](){this['eventTimeoutId']&&(clearTimeout(this['eventTimeoutId']),this['eventTimeoutId']=undefined);}['startPointerCapture'](c,d){const A=k;this['stopPointerCapture'](),c[A(0x11b)](d),this[A(0x137)]=c,this['pointerCaptureId']=d;}['stopPointerCapture'](){const B=k;if(!this['pointerCaptureId'])return;this[B(0x137)]['releasePointerCapture'](this[B(0x103)]),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const C=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c[C(0x120)]||c[C(0x123)]||c[C(0x128)]||c['shiftKey']||c[C(0x12f)]!=0x0)return;const d=this[C(0x115)]['getBoundingClientRect'](),e=this['orientation']?c['clientY']-d['top']:c[C(0xf1)]-d[C(0xfc)],f=(this[C(0x11f)]?d['height']:d[C(0x11d)])*(0x1-this[C(0x148)]())*this['value'],g=e>f,h=g?'incrementLarge':'decrementLarge';this[C(0x125)]=!![],c[C(0x11c)](),this[C(0x10d)](this['trough'],c[C(0x143)]),this['fireEventRepeatedly'](h,this['clickRepeatDelay'],this[C(0x12e)]);};['onButtonPointerDown']=(c,d)=>{const D=k;if(!this[D(0x14b)]||this[D(0x103)])return;if(!c[D(0x142)]||c[D(0x120)]||c[D(0x123)]||c[D(0x128)]||c['shiftKey']||c[D(0x12f)]!=0x0)return;switch(d){case 0x1:this[D(0x139)]=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?D(0x105):'incrementSmall';this['updateStyle'](),c[D(0x11c)]();const f=d==0x1?this['button1']:this[D(0x13f)];this['startPointerCapture'](f,c[D(0x143)]),this[D(0x132)](e,this[D(0x118)],this[D(0x12e)]);};[k(0xf2)]=c=>{const E=k;if(!this['isConnected']||this[E(0x103)])return;if(!c[E(0x142)]||c['altKey']||c[E(0x123)]||c['metaKey']||c[E(0x13c)]||c[E(0x12f)]!=0x0)return;this[E(0x13a)]=this['orientation']?c[E(0x135)]:c[E(0xf1)],this[E(0x12a)]=this['value'],this['thumbDragging']=!![],this['updateStyle'](),c[E(0x11c)](),this['startPointerCapture'](this['thumb'],c['pointerId']);};[k(0x107)]=c=>{const F=k;if(!this['isConnected'])return;if(!c[F(0x142)]||!this['thumbDragging'])return;const d=this[F(0x11f)]?c[F(0x135)]:c[F(0xf1)],e=d-this[F(0x13a)],f=this[F(0xfa)](e),g=this['dragStartValue']+f;c['preventDefault'](),this['setValue'](g)&&this['fireEvent'](F(0xff));};['onPointerUp']=c=>{const G=k;if(!this['isConnected'])return;if(!c['isPrimary'])return;this['resetInteractionState'](),this[G(0x111)](),this[G(0x141)](),this['stopPointerCapture'](),c[G(0x11c)]();};}export class PlainScrollbar extends HTMLElement{[k(0x136)];constructor(){const H=k;super(),this[H(0x136)]=new Widget(this);const c=parseFloat(this[H(0x14a)]('value'));if(!isNaN(c))this['widget']['value']=c;if(this['hasOwnProperty'](H(0xff))){let d=this[H(0xff)];delete this[H(0xff)];if(!isNaN(d))this['widget']['value']=d;}}[k(0x10a)](){const I=k;this[I(0x136)][I(0x10a)]();}[k(0x146)](){const J=k;this[J(0x136)]['disconnectedCallback']();}get['thumbSize'](){const K=k;return this[K(0x136)]['thumbSize'];}set[k(0x133)](c){this['widget']['setThumbSize'](c);}get[k(0xff)](){const L=k;return this[L(0x136)]['value'];}set[k(0xff)](c){const M=k;this['widget'][M(0x10f)](c);}get['orientation'](){const N=k;return formatOrientation(this[N(0x136)][N(0x11f)]);}set[k(0x11f)](c){const O=k;this[O(0x136)][O(0x129)](decodeOrientation(c))&&this['setAttribute'](O(0x11f),this[O(0x11f)]);}get[k(0x108)](){const P=k;return this[P(0x136)]['orientation'];}static get['observedAttributes'](){return['orientation'];}['attributeChangedCallback'](c,d,e){switch(c){case'orientation':{e&&this['widget']['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x144),buttonPath=k(0x106),scrollbarStyle=css`
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
    `;function formatOrientation(c){const Q=k;return c?'vertical':Q(0x121);}function b(c,d){c=c-0xef;const e=a();let f=e[c];return f;}function decodeOrientation(c){const R=k;switch(c){case'vertical':return!![];case R(0x121):return![];default:throw new Error(R(0x110)+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function a(){const T=['setValue','Invalid\x20orientation\x20value\x20\x22','updateStyle','toggle','getThumbMinSize','3BOpObz','trough','9pFXSuw','button2Active','clickRepeatDelay','1035448FZGOot','148911puhoCa','setPointerCapture','preventDefault','width','contextmenu','orientation','altKey','horizontal','6pSbXmn','ctrlKey','384966RsUhNg','troughActive','min','pointermove','metaKey','setOrientation','dragStartValue','4799465eIBwwi','display','pointerup','clickRepeatInterval','button','thumbDragging','1345560LWPyKl','fireEventRepeatedly','thumbSize','#button2','clientY','widget','pointerCaptureElement','endsWith','button1Active','dragStartPos','getPropertyValue','shiftKey','root','style','button2','getThroughSize','stopEventRepetition','isPrimary','pointerId','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','dispatchEvent','disconnectedCallback','top','getEffectiveThumbSize','pointercancel','getAttribute','isConnected','fireEvent','updateThumbPosition','onPointerUp','thumb','host','clientX','onThumbPointerDown','addEventListener','scrollbar-input','updateLayout','--plain-scrollbar-thumb-min-size','#root','open','classList','computeThumbMoveValue','querySelector','left','674508UqxkuA','height','value','button1','pointerdown','88325VghJCC','pointerCaptureId','1XBbjhj','decrementSmall','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','onThumbPointerMove','orientationBoolean','substring','connectedCallback','active','#trough','startPointerCapture','defaultThumbMinSize'];a=function(){return T;};return a();}function decodePxValue(c){const S=k;if(!c||!c[S(0x138)]('px'))return undefined;return Number(c[S(0x109)](0x0,c['length']-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);