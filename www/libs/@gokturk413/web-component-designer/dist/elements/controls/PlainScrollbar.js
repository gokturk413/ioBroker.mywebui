const k=b;function b(c,d){c=c-0x1ba;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x210))/0x1+parseInt(j(0x216))/0x2*(parseInt(j(0x215))/0x3)+parseInt(j(0x1c0))/0x4*(-parseInt(j(0x1e8))/0x5)+parseInt(j(0x21d))/0x6*(-parseInt(j(0x1f0))/0x7)+parseInt(j(0x1cd))/0x8*(parseInt(j(0x212))/0x9)+-parseInt(j(0x1cf))/0xa+-parseInt(j(0x1cb))/0xb*(-parseInt(j(0x1e9))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3b13e));import{css,html}from'@node-projects/base-custom-webcomponent';function a(){const V=['4wHEEdY','decrementSmall','thumb','incrementSmall','getCssVar','toggle','defaultThumbMinSize','host','min','orientationBoolean','onButtonPointerDown','53053cGrEso','pointerdown','231784TxXAzv','orientation','2446310eayWlp','ctrlKey','preventDefault','clickRepeatDelay','setAttribute','updateThumbPosition','addEventListener','altKey','var(--plain-scrollbar-button-size,\x2013px)','onThumbPointerDown','dragStartValue','onThumbPointerMove','active','button2','shiftKey','#button2','clientY','value','onTroughPointerDown','releasePointerCapture','dispatchEvent','updateLayout','isConnected','contextmenu','eventTimeoutId','2224055xkbOGw','1164GLXSSu','clientHeight','querySelector','fireEventRepeatedly','--plain-scrollbar-thumb-min-size','getThroughSize','thumbDragging','6573emYOiR','updateStyle','scrollbar-input','startPointerCapture','connectedCallback','#root','button1','horizontal','pointerCaptureId','adoptedStyleSheets','substring','stopPointerCapture','getPropertyValue','open','button1Active','troughActive','top','getThumbMinSize','onPointerUp','node-projects-plain-scrollbar','max','thumbSize','pointercancel','stopEventRepetition','setValue','attributeChangedCallback','setPointerCapture','height','clientX','clientWidth','getBoundingClientRect','decrementLarge','332211azbVyZ','Invalid\x20orientation\x20value\x20\x22','126PSiTIi','setThumbSize','display','3qWDYzI','336058pgCxLJ','left','button2Active','computeThumbMoveValue','style','incrementLarge','pointerCaptureElement','2826NoGJZl','isPrimary','trough','fireEvent','pointerup','root','attachShadow','disconnectedCallback','dragStartPos','resetInteractionState','widget','getEffectiveThumbSize','setOrientation','width','classList'];a=function(){return V;};return a();}class Widget{[k(0x1c7)];[k(0x222)];[k(0x21f)];['button1'];[k(0x1dc)];['thumb'];[k(0x1e5)]=![];['thumbSize']=0.3;[k(0x1e0)]=0x0;[k(0x1ce)]=![];[k(0x1d2)]=0x12c;['clickRepeatInterval']=0x64;['defaultThumbMinSize']=0x19;[k(0x225)];[k(0x1d9)];['eventTimeoutId'];['pointerCaptureId'];['pointerCaptureElement'];[k(0x1ef)];[k(0x1fe)];['button2Active'];['troughActive'];constructor(c){const l=k;this[l(0x1c7)]=c,c[l(0x223)]({'mode':l(0x1fd)});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d[l(0x1f9)]=[scrollbarStyle],this['root']=d[l(0x1eb)](l(0x1f5)),this['trough']=d[l(0x1eb)]('#trough'),this['button1']=d['querySelector']('#button1'),this['button2']=d[l(0x1eb)](l(0x1de)),this['thumb']=d[l(0x1eb)]('#thumb'),this[l(0x21f)]['addEventListener']('pointerdown',this[l(0x1e1)]),this[l(0x21f)]['addEventListener']('pointerup',this[l(0x202)]),this['trough'][l(0x1d5)]('pointercancel',this[l(0x202)]),this['button1']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x1)),this[l(0x1f6)]['addEventListener']('pointerup',this[l(0x202)]),this['button1'][l(0x1d5)]('pointercancel',this[l(0x202)]),this[l(0x1f6)]['addEventListener'](l(0x1e6),f=>f[l(0x1d1)]()),this['button2'][l(0x1d5)](l(0x1cc),e=>this[l(0x1ca)](e,0x2)),this[l(0x1dc)]['addEventListener']('pointerup',this['onPointerUp']),this['button2']['addEventListener'](l(0x206),this[l(0x202)]),this['button2'][l(0x1d5)]('contextmenu',f=>f[l(0x1d1)]()),this['thumb']['addEventListener'](l(0x1cc),this[l(0x1d8)]),this['thumb']['addEventListener'](l(0x221),this[l(0x202)]),this['thumb'][l(0x1d5)](l(0x206),this['onPointerUp']),this['thumb'][l(0x1d5)]('pointermove',this[l(0x1da)]),this[l(0x1ba)]();}[k(0x1ba)](){const m=k;this[m(0x1ef)]=![],this['button1Active']=![],this[m(0x218)]=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x1e5)]=!![],this[n(0x1ba)](),this[n(0x1e4)](),this['updateStyle']();}[k(0x224)](){const o=k;this[o(0x1e5)]=![],this[o(0x1ba)](),this['stopEventRepetition'](),this['stopPointerCapture']();}['updateLayout'](){const p=k;if(!this[p(0x1e5)])return;this[p(0x222)]['classList'][p(0x1c5)](p(0x1f7),!this['orientation']),this['root']['classList'][p(0x1c5)]('vertical',this['orientation']),this[p(0x1c2)]['style'][p(0x214)]=this['thumbSize']==0x0?'none':'',this[p(0x1c2)]['style'][p(0x20b)]=this[p(0x1ce)]?percent(this[p(0x1bc)]()):'',this['thumb']['style']['width']=this['orientation']?'':percent(this[p(0x1bc)]()),this['thumb'][p(0x21a)][p(0x200)]='',this['thumb'][p(0x21a)][p(0x217)]='',this[p(0x1d4)]();}[k(0x1f1)](){const q=k;if(!this['isConnected'])return;this[q(0x1c2)]['classList']['toggle'](q(0x1db),this['thumbDragging']),this['button1'][q(0x1bf)]['toggle'](q(0x1db),this[q(0x1fe)]),this['button2']['classList'][q(0x1c5)](q(0x1db),this[q(0x218)]),void this[q(0x1ff)];}['updateThumbPosition'](){const r=k,c=(0x1-this[r(0x1bc)]())*this[r(0x1e0)];this['orientation']?this['thumb'][r(0x21a)]['top']=percent(c):this[r(0x1c2)]['style'][r(0x217)]=percent(c);}[k(0x1ee)](){const s=k;return this['orientation']?this['trough'][s(0x1ea)]:this['trough'][s(0x20d)];}['computeThumbMoveValue'](c){const t=k,d=this[t(0x1ee)]()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}[k(0x213)](c){const u=k,d=Math['max'](0x0,Math[u(0x1c8)](0x1,c));if(d==this['thumbSize'])return;this['thumbSize']=d,this[u(0x1e4)]();}['getThumbMinSize'](){const v=k,c=this[v(0x1c4)](v(0x1ed));if(!c)return this[v(0x1c6)];const d=decodePxValue(c);if(!d)return this[v(0x1c6)];return d;}[k(0x1bc)](){const w=k,c=this[w(0x201)](),d=this['getThroughSize']();if(!d)return this['thumbSize'];const e=Math['min'](0x1,c/d);return Math[w(0x204)](e,this[w(0x205)]);}['setValue'](c){const x=k,d=Math[x(0x204)](0x0,Math[x(0x1c8)](0x1,c));if(d==this[x(0x1e0)])return![];return this['value']=isNaN(d)?0x0:d,this[x(0x1d4)](),!![];}['setOrientation'](c){const y=k;if(c==this[y(0x1ce)])return![];return this['orientation']=c,this[y(0x1e4)](),!![];}['getCssVar'](c){const z=k,d=getComputedStyle(this['root'])[z(0x1fc)](c);if(!d)return null;return d['trim']();}['fireEvent'](c){const A=k,d=new CustomEvent(A(0x1f2),{'detail':c});this['host'][A(0x1e3)](d);}[k(0x1ec)](c,d,e,g=0x0){const B=k;this[B(0x207)](),this[B(0x220)](c);const h=g==0x0?d:e,i=()=>this[B(0x1ec)](c,d,e,g+0x1);this[B(0x1e7)]=setTimeout(i,h);}['stopEventRepetition'](){const C=k;this[C(0x1e7)]&&(clearTimeout(this[C(0x1e7)]),this['eventTimeoutId']=undefined);}['startPointerCapture'](c,d){const D=k;this['stopPointerCapture'](),c[D(0x20a)](d),this[D(0x21c)]=c,this[D(0x1f8)]=d;}['stopPointerCapture'](){const E=k;if(!this[E(0x1f8)])return;this['pointerCaptureElement'][E(0x1e2)](this['pointerCaptureId']),this['pointerCaptureId']=undefined;}[k(0x1e1)]=c=>{const F=k;if(!this['isConnected']||this[F(0x1f8)])return;if(!c[F(0x21e)]||c['altKey']||c[F(0x1d0)]||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;const d=this[F(0x21f)][F(0x20e)](),e=this['orientation']?c['clientY']-d[F(0x200)]:c[F(0x20c)]-d[F(0x217)],f=(this['orientation']?d[F(0x20b)]:d[F(0x1be)])*(0x1-this['getEffectiveThumbSize']())*this['value'],g=e>f,h=g?F(0x21b):F(0x20f);this['troughActive']=!![],c['preventDefault'](),this[F(0x1f3)](this[F(0x21f)],c['pointerId']),this['fireEventRepeatedly'](h,this[F(0x1d2)],this['clickRepeatInterval']);};[k(0x1ca)]=(c,d)=>{const G=k;if(!this[G(0x1e5)]||this[G(0x1f8)])return;if(!c['isPrimary']||c[G(0x1d6)]||c['ctrlKey']||c['metaKey']||c[G(0x1dd)]||c['button']!=0x0)return;switch(d){case 0x1:this[G(0x1fe)]=!![];break;case 0x2:this[G(0x218)]=!![];break;}const e=d==0x1?G(0x1c1):G(0x1c3);this['updateStyle'](),c[G(0x1d1)]();const f=d==0x1?this[G(0x1f6)]:this[G(0x1dc)];this['startPointerCapture'](f,c['pointerId']),this[G(0x1ec)](e,this['clickRepeatDelay'],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const H=k;if(!this[H(0x1e5)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c[H(0x1d6)]||c['ctrlKey']||c['metaKey']||c[H(0x1dd)]||c['button']!=0x0)return;this['dragStartPos']=this[H(0x1ce)]?c['clientY']:c['clientX'],this['dragStartValue']=this['value'],this[H(0x1ef)]=!![],this['updateStyle'](),c[H(0x1d1)](),this[H(0x1f3)](this[H(0x1c2)],c['pointerId']);};['onThumbPointerMove']=c=>{const I=k;if(!this['isConnected'])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this['orientation']?c[I(0x1df)]:c['clientX'],e=d-this[I(0x225)],f=this[I(0x219)](e),g=this[I(0x1d9)]+f;c[I(0x1d1)](),this[I(0x208)](g)&&this[I(0x220)]('value');};[k(0x202)]=c=>{const J=k;if(!this['isConnected'])return;if(!c['isPrimary'])return;this[J(0x1ba)](),this[J(0x1f1)](),this[J(0x207)](),this[J(0x1fb)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{[k(0x1bb)];constructor(){const K=k;super(),this[K(0x1bb)]=new Widget(this);const c=parseFloat(this['getAttribute'](K(0x1e0)));if(!isNaN(c))this[K(0x1bb)]['value']=c;if(this['hasOwnProperty'](K(0x1e0))){let d=this[K(0x1e0)];delete this['value'];if(!isNaN(d))this[K(0x1bb)][K(0x1e0)]=d;}}[k(0x1f4)](){this['widget']['connectedCallback']();}['disconnectedCallback'](){const L=k;this[L(0x1bb)]['disconnectedCallback']();}get['thumbSize'](){const M=k;return this[M(0x1bb)]['thumbSize'];}set['thumbSize'](c){const N=k;this[N(0x1bb)]['setThumbSize'](c);}get[k(0x1e0)](){const O=k;return this[O(0x1bb)]['value'];}set['value'](c){const P=k;this['widget'][P(0x208)](c);}get['orientation'](){const Q=k;return formatOrientation(this[Q(0x1bb)][Q(0x1ce)]);}set[k(0x1ce)](c){const R=k;this['widget'][R(0x1bd)](decodeOrientation(c))&&this[R(0x1d3)]('orientation',this['orientation']);}get[k(0x1c9)](){return this['widget']['orientation'];}static get['observedAttributes'](){return['orientation'];}[k(0x209)](c,d,e){const S=k;switch(c){case'orientation':{e&&this[S(0x1bb)][S(0x1bd)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x1d7),buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
    :host {
       display: block;
       contain: content;
       background-color: #f8f8f8;
       border-style: solid;
       border-width: 1px;
       border-color: #dddddd;
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
       background-color: var(--plain-scrollbar-thumb-background-color, #f0f0f0);
       border-style: solid;
       border-width: var(--plain-scrollbar-thumb-border-width, 1px);
       border-color: var(--plain-scrollbar-thumb-border-color, #b8b8b8);
       border-radius: var(--plain-scrollbar-thumb-border-radius, 4px);
       transition: background-color 50ms linear;
    }
    #thumb:hover {
       background-color: var(--plain-scrollbar-thumb-background-color-hover, #e0e0e0);
    }
    #thumb.active {
       background-color: var(--plain-scrollbar-thumb-background-color-active, #c0c0c0);
    }
    #button1,
    #button2 {
       box-sizing: border-box;
       position: absolute;
       display: block;
       fill: var(--plain-scrollbar-button-color, #606060);
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
       background-color: var(--plain-scrollbar-button-color-hover, #e0e0e0);
    }
    #button1.active,
    #button2.active {
       background-color: var(--plain-scrollbar-button-color-active, #c0c0c0);
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){const T=k;switch(c){case'vertical':return!![];case'horizontal':return![];default:throw new Error(T(0x211)+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const U=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[U(0x1fa)](0x0,c['length']-0x2));}customElements['define'](k(0x203),PlainScrollbar);