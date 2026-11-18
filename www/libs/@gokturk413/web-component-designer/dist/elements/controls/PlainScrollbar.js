const k=b;function b(c,d){c=c-0x1db;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1e9))/0x1*(-parseInt(j(0x20c))/0x2)+parseInt(j(0x235))/0x3+parseInt(j(0x1f9))/0x4+parseInt(j(0x1e3))/0x5*(parseInt(j(0x203))/0x6)+parseInt(j(0x20b))/0x7*(-parseInt(j(0x1fe))/0x8)+parseInt(j(0x222))/0x9*(-parseInt(j(0x1ef))/0xa)+-parseInt(j(0x232))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x72a95));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];['root'];[k(0x22e)];[k(0x21a)];[k(0x229)];['thumb'];[k(0x231)]=![];['thumbSize']=0.3;[k(0x1ff)]=0x0;['orientation']=![];['clickRepeatDelay']=0x12c;[k(0x1fb)]=0x64;[k(0x1f2)]=0x19;[k(0x1dc)];[k(0x228)];[k(0x209)];[k(0x1eb)];[k(0x225)];[k(0x204)];[k(0x22d)];['button2Active'];['troughActive'];constructor(c){const l=k;this[l(0x205)]=c,c[l(0x1f7)]({'mode':'open'});const d=c[l(0x212)];d['appendChild'](scrollbarHtmlTemplate[l(0x21e)]['cloneNode'](!![])),d[l(0x1fd)]=[scrollbarStyle],this[l(0x234)]=d['querySelector']('#root'),this[l(0x22e)]=d[l(0x239)]('#trough'),this[l(0x21a)]=d[l(0x239)](l(0x1ee)),this[l(0x229)]=d[l(0x239)]('#button2'),this[l(0x1e4)]=d['querySelector'](l(0x227)),this['trough']['addEventListener'](l(0x211),this[l(0x1e7)]),this[l(0x22e)][l(0x1f4)](l(0x233),this['onPointerUp']),this['trough'][l(0x1f4)](l(0x21c),this[l(0x1db)]),this[l(0x21a)]['addEventListener'](l(0x211),e=>this['onButtonPointerDown'](e,0x1)),this['button1']['addEventListener'](l(0x233),this[l(0x1db)]),this['button1'][l(0x1f4)](l(0x21c),this[l(0x1db)]),this['button1'][l(0x1f4)]('contextmenu',f=>f['preventDefault']()),this[l(0x229)]['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this['button2'][l(0x1f4)](l(0x233),this['onPointerUp']),this['button2']['addEventListener']('pointercancel',this['onPointerUp']),this['button2']['addEventListener'](l(0x21b),f=>f[l(0x1de)]()),this['thumb']['addEventListener']('pointerdown',this['onThumbPointerDown']),this['thumb'][l(0x1f4)](l(0x233),this[l(0x1db)]),this['thumb'][l(0x1f4)](l(0x21c),this['onPointerUp']),this['thumb'][l(0x1f4)](l(0x210),this['onThumbPointerMove']),this[l(0x230)]();}[k(0x230)](){const m=k;this[m(0x204)]=![],this['button1Active']=![],this['button2Active']=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x231)]=!![],this['resetInteractionState'](),this['updateLayout'](),this[n(0x1f3)]();}['disconnectedCallback'](){const o=k;this['isConnected']=![],this['resetInteractionState'](),this[o(0x1ec)](),this['stopPointerCapture']();}[k(0x223)](){const p=k;if(!this['isConnected'])return;this[p(0x234)]['classList']['toggle'](p(0x22f),!this[p(0x224)]),this[p(0x234)][p(0x237)]['toggle'](p(0x20a),this['orientation']),this[p(0x1e4)]['style'][p(0x21d)]=this[p(0x1dd)]==0x0?p(0x21f):'',this[p(0x1e4)]['style']['height']=this[p(0x224)]?percent(this[p(0x1e2)]()):'',this['thumb'][p(0x1e0)]['width']=this[p(0x224)]?'':percent(this[p(0x1e2)]()),this['thumb'][p(0x1e0)][p(0x1e6)]='',this['thumb']['style'][p(0x1fc)]='',this['updateThumbPosition']();}[k(0x1f3)](){const q=k;if(!this[q(0x231)])return;this['thumb']['classList']['toggle'](q(0x220),this['thumbDragging']),this['button1']['classList']['toggle'](q(0x220),this['button1Active']),this['button2']['classList']['toggle']('active',this['button2Active']),void this[q(0x1f0)];}[k(0x217)](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this[r(0x1ff)];this['orientation']?this['thumb']['style'][r(0x1e6)]=percent(c):this['thumb']['style']['left']=percent(c);}[k(0x208)](){const s=k;return this[s(0x224)]?this['trough']['clientHeight']:this['trough'][s(0x202)];}['computeThumbMoveValue'](c){const t=k,d=this[t(0x208)]()*(0x1-this[t(0x1e2)]());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const u=k,d=Math[u(0x23c)](0x0,Math['min'](0x1,c));if(d==this['thumbSize'])return;this[u(0x1dd)]=d,this[u(0x223)]();}[k(0x23f)](){const v=k,c=this['getCssVar'](v(0x1f1));if(!c)return this[v(0x1f2)];const d=decodePxValue(c);if(!d)return this[v(0x1f2)];return d;}['getEffectiveThumbSize'](){const w=k,c=this[w(0x23f)](),d=this['getThroughSize']();if(!d)return this['thumbSize'];const e=Math[w(0x1df)](0x1,c/d);return Math['max'](e,this['thumbSize']);}[k(0x215)](c){const x=k,d=Math[x(0x23c)](0x0,Math['min'](0x1,c));if(d==this[x(0x1ff)])return![];return this[x(0x1ff)]=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}['setOrientation'](c){const y=k;if(c==this[y(0x224)])return![];return this[y(0x224)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const z=k,d=getComputedStyle(this[z(0x234)])[z(0x221)](c);if(!d)return null;return d['trim']();}[k(0x1f6)](c){const A=k,d=new CustomEvent('scrollbar-input',{'detail':c});this[A(0x205)][A(0x1f5)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const B=k;this[B(0x1ec)](),this[B(0x1f6)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this[B(0x209)]=setTimeout(i,h);}[k(0x1ec)](){const C=k;this[C(0x209)]&&(clearTimeout(this['eventTimeoutId']),this[C(0x209)]=undefined);}[k(0x22b)](c,d){const D=k;this['stopPointerCapture'](),c[D(0x1f8)](d),this['pointerCaptureElement']=c,this[D(0x1eb)]=d;}[k(0x1e8)](){const E=k;if(!this['pointerCaptureId'])return;this['pointerCaptureElement'][E(0x22a)](this['pointerCaptureId']),this[E(0x1eb)]=undefined;}[k(0x1e7)]=c=>{const F=k;if(!this[F(0x231)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c[F(0x23a)]||c[F(0x23e)]||c['metaKey']||c[F(0x206)]||c['button']!=0x0)return;const d=this[F(0x22e)][F(0x214)](),e=this['orientation']?c['clientY']-d[F(0x1e6)]:c['clientX']-d[F(0x1fc)],f=(this['orientation']?d['height']:d[F(0x200)])*(0x1-this[F(0x1e2)]())*this[F(0x1ff)],g=e>f,h=g?F(0x1ea):F(0x23d);this[F(0x1f0)]=!![],c[F(0x1de)](),this[F(0x22b)](this['trough'],c['pointerId']),this[F(0x216)](h,this['clickRepeatDelay'],this[F(0x1fb)]);};['onButtonPointerDown']=(c,d)=>{const G=k;if(!this[G(0x231)]||this['pointerCaptureId'])return;if(!c[G(0x20d)]||c[G(0x23a)]||c['ctrlKey']||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this['updateStyle'](),c[G(0x1de)]();const f=d==0x1?this[G(0x21a)]:this[G(0x229)];this['startPointerCapture'](f,c['pointerId']),this[G(0x216)](e,this[G(0x207)],this[G(0x1fb)]);};['onThumbPointerDown']=c=>{const H=k;if(!this['isConnected']||this[H(0x1eb)])return;if(!c['isPrimary']||c[H(0x23a)]||c['ctrlKey']||c['metaKey']||c[H(0x206)]||c['button']!=0x0)return;this['dragStartPos']=this['orientation']?c[H(0x20e)]:c['clientX'],this[H(0x228)]=this['value'],this[H(0x204)]=!![],this[H(0x1f3)](),c['preventDefault'](),this['startPointerCapture'](this[H(0x1e4)],c[H(0x1fa)]);};['onThumbPointerMove']=c=>{const I=k;if(!this['isConnected'])return;if(!c[I(0x20d)]||!this['thumbDragging'])return;const d=this[I(0x224)]?c[I(0x20e)]:c[I(0x22c)],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this['dragStartValue']+f;c['preventDefault'](),this[I(0x215)](g)&&this[I(0x1f6)](I(0x1ff));};[k(0x1db)]=c=>{const J=k;if(!this[J(0x231)])return;if(!c[J(0x20d)])return;this['resetInteractionState'](),this[J(0x1f3)](),this['stopEventRepetition'](),this[J(0x1e8)](),c[J(0x1de)]();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const K=k;super(),this[K(0x1ed)]=new Widget(this);const c=parseFloat(this[K(0x213)](K(0x1ff)));if(!isNaN(c))this['widget'][K(0x1ff)]=c;if(this[K(0x20f)]('value')){let d=this[K(0x1ff)];delete this['value'];if(!isNaN(d))this[K(0x1ed)][K(0x1ff)]=d;}}['connectedCallback'](){const L=k;this['widget'][L(0x201)]();}[k(0x236)](){const M=k;this[M(0x1ed)][M(0x236)]();}get['thumbSize'](){const N=k;return this[N(0x1ed)][N(0x1dd)];}set['thumbSize'](c){this['widget']['setThumbSize'](c);}get['value'](){const O=k;return this['widget'][O(0x1ff)];}set['value'](c){const P=k;this[P(0x1ed)]['setValue'](c);}get['orientation'](){return formatOrientation(this['widget']['orientation']);}set[k(0x224)](c){const Q=k;this[Q(0x1ed)][Q(0x218)](decodeOrientation(c))&&this[Q(0x1e5)](Q(0x224),this['orientation']);}get[k(0x219)](){const R=k;return this[R(0x1ed)][R(0x224)];}static get['observedAttributes'](){const S=k;return[S(0x224)];}['attributeChangedCallback'](c,d,e){const T=k;switch(c){case T(0x224):{e&&this[T(0x1ed)][T(0x218)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function a(){const Y=['decrementLarge','ctrlKey','getThumbMinSize','onPointerUp','dragStartPos','thumbSize','preventDefault','min','style','node-projects-plain-scrollbar','getEffectiveThumbSize','177985ozHAuy','thumb','setAttribute','top','onTroughPointerDown','stopPointerCapture','359uARTLs','incrementLarge','pointerCaptureId','stopEventRepetition','widget','#button1','7645590ECMjPg','troughActive','--plain-scrollbar-thumb-min-size','defaultThumbMinSize','updateStyle','addEventListener','dispatchEvent','fireEvent','attachShadow','setPointerCapture','1564320GaiTTG','pointerId','clickRepeatInterval','left','adoptedStyleSheets','8zeAAxq','value','width','connectedCallback','clientWidth','24ewTkgs','thumbDragging','host','shiftKey','clickRepeatDelay','getThroughSize','eventTimeoutId','vertical','3292093BvGOXC','4678iOMOxL','isPrimary','clientY','hasOwnProperty','pointermove','pointerdown','shadowRoot','getAttribute','getBoundingClientRect','setValue','fireEventRepeatedly','updateThumbPosition','setOrientation','orientationBoolean','button1','contextmenu','pointercancel','display','content','none','active','getPropertyValue','9FemXuq','updateLayout','orientation','pointerCaptureElement','endsWith','#thumb','dragStartValue','button2','releasePointerCapture','startPointerCapture','clientX','button1Active','trough','horizontal','resetInteractionState','isConnected','2631948fdospe','pointerup','root','1711830EgXBaA','disconnectedCallback','classList','toFixed','querySelector','altKey','Invalid\x20orientation\x20value\x20\x22','max'];a=function(){return Y;};return a();}function formatOrientation(c){const U=k;return c?'vertical':U(0x22f);}function decodeOrientation(c){const V=k;switch(c){case'vertical':return!![];case'horizontal':return![];default:throw new Error(V(0x23b)+c+'\x22.');}}function percent(c){const W=k;return(c*0x64)[W(0x238)](0x3)+'%';}function decodePxValue(c){const X=k;if(!c||!c[X(0x226)]('px'))return undefined;return Number(c['substring'](0x0,c['length']-0x2));}customElements['define'](k(0x1e1),PlainScrollbar);