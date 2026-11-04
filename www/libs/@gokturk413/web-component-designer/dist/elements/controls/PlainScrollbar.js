const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x14d))/0x1+parseInt(j(0x167))/0x2+-parseInt(j(0x164))/0x3+-parseInt(j(0x19f))/0x4+-parseInt(j(0x198))/0x5+-parseInt(j(0x190))/0x6+parseInt(j(0x17e))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x77369));function b(c,d){c=c-0x13f;const e=a();let f=e[c];return f;}import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x191)];[k(0x161)];['trough'];[k(0x178)];[k(0x174)];['thumb'];['isConnected']=![];['thumbSize']=0.3;['value']=0x0;[k(0x15e)]=![];[k(0x177)]=0x12c;[k(0x14a)]=0x64;[k(0x141)]=0x19;[k(0x180)];[k(0x18c)];['eventTimeoutId'];[k(0x15d)];[k(0x150)];[k(0x169)];['button1Active'];['button2Active'];[k(0x157)];constructor(c){const l=k;this[l(0x191)]=c,c['attachShadow']({'mode':l(0x199)});const d=c[l(0x152)];d['appendChild'](scrollbarHtmlTemplate[l(0x16f)]['cloneNode'](!![])),d[l(0x156)]=[scrollbarStyle],this['root']=d[l(0x170)]('#root'),this[l(0x18e)]=d['querySelector']('#trough'),this['button1']=d[l(0x170)]('#button1'),this['button2']=d['querySelector']('#button2'),this[l(0x153)]=d['querySelector']('#thumb'),this['trough'][l(0x185)](l(0x16b),this['onTroughPointerDown']),this['trough']['addEventListener']('pointerup',this[l(0x15a)]),this[l(0x18e)][l(0x185)](l(0x194),this[l(0x15a)]),this['button1']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x1)),this[l(0x178)][l(0x185)]('pointerup',this['onPointerUp']),this[l(0x178)][l(0x185)](l(0x194),this['onPointerUp']),this['button1']['addEventListener'](l(0x192),f=>f[l(0x182)]()),this[l(0x174)][l(0x185)]('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this[l(0x174)]['addEventListener'](l(0x149),this[l(0x15a)]),this[l(0x174)]['addEventListener'](l(0x194),this['onPointerUp']),this['button2'][l(0x185)]('contextmenu',f=>f[l(0x182)]()),this[l(0x153)]['addEventListener']('pointerdown',this[l(0x15f)]),this[l(0x153)][l(0x185)]('pointerup',this[l(0x15a)]),this[l(0x153)][l(0x185)](l(0x194),this['onPointerUp']),this['thumb'][l(0x185)]('pointermove',this['onThumbPointerMove']),this['resetInteractionState']();}[k(0x19b)](){const m=k;this[m(0x169)]=![],this[m(0x193)]=![],this[m(0x15b)]=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x16d)]=!![],this['resetInteractionState'](),this['updateLayout'](),this[n(0x13f)]();}['disconnectedCallback'](){const o=k;this[o(0x16d)]=![],this['resetInteractionState'](),this[o(0x196)](),this['stopPointerCapture']();}[k(0x160)](){const p=k;if(!this[p(0x16d)])return;this['root'][p(0x16e)][p(0x140)](p(0x17f),!this[p(0x15e)]),this['root'][p(0x16e)]['toggle']('vertical',this[p(0x15e)]),this[p(0x153)]['style']['display']=this[p(0x176)]==0x0?'none':'',this[p(0x153)][p(0x163)]['height']=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this[p(0x153)][p(0x163)]['width']=this['orientation']?'':percent(this[p(0x16a)]()),this['thumb']['style']['top']='',this[p(0x153)][p(0x163)][p(0x175)]='',this['updateThumbPosition']();}['updateStyle'](){const q=k;if(!this['isConnected'])return;this[q(0x153)]['classList'][q(0x140)]('active',this[q(0x169)]),this[q(0x178)][q(0x16e)]['toggle']('active',this[q(0x193)]),this['button2'][q(0x16e)][q(0x140)]('active',this['button2Active']),void this[q(0x157)];}['updateThumbPosition'](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this['value'];this[r(0x15e)]?this['thumb']['style'][r(0x179)]=percent(c):this['thumb']['style'][r(0x175)]=percent(c);}[k(0x151)](){const s=k;return this[s(0x15e)]?this[s(0x18e)]['clientHeight']:this['trough'][s(0x197)];}[k(0x15c)](c){const t=k,d=this[t(0x151)]()*(0x1-this[t(0x16a)]());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const d=Math['max'](0x0,Math['min'](0x1,c));if(d==this['thumbSize'])return;this['thumbSize']=d,this['updateLayout']();}[k(0x18a)](){const u=k,c=this[u(0x19c)](u(0x19a));if(!c)return this[u(0x141)];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0x16a)](){const v=k,c=this['getThumbMinSize'](),d=this[v(0x151)]();if(!d)return this[v(0x176)];const e=Math['min'](0x1,c/d);return Math[v(0x184)](e,this[v(0x176)]);}['setValue'](c){const w=k,d=Math['max'](0x0,Math[w(0x159)](0x1,c));if(d==this[w(0x17a)])return![];return this[w(0x17a)]=isNaN(d)?0x0:d,this[w(0x172)](),!![];}[k(0x19d)](c){const x=k;if(c==this[x(0x15e)])return![];return this[x(0x15e)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const y=k,d=getComputedStyle(this['root'])['getPropertyValue'](c);if(!d)return null;return d[y(0x18b)]();}['fireEvent'](c){const z=k,d=new CustomEvent(z(0x14f),{'detail':c});this['host'][z(0x162)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const A=k;this[A(0x196)](),this[A(0x14c)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this[A(0x17d)]=setTimeout(i,h);}['stopEventRepetition'](){const B=k;this['eventTimeoutId']&&(clearTimeout(this[B(0x17d)]),this[B(0x17d)]=undefined);}['startPointerCapture'](c,d){const C=k;this['stopPointerCapture'](),c[C(0x154)](d),this[C(0x150)]=c,this[C(0x15d)]=d;}[k(0x166)](){const D=k;if(!this['pointerCaptureId'])return;this[D(0x150)][D(0x186)](this['pointerCaptureId']),this[D(0x15d)]=undefined;}[k(0x143)]=c=>{const E=k;if(!this[E(0x16d)]||this[E(0x15d)])return;if(!c[E(0x14e)]||c['altKey']||c[E(0x17b)]||c['metaKey']||c[E(0x171)]||c['button']!=0x0)return;const d=this[E(0x18e)]['getBoundingClientRect'](),e=this[E(0x15e)]?c['clientY']-d['top']:c[E(0x187)]-d[E(0x175)],f=(this['orientation']?d['height']:d['width'])*(0x1-this['getEffectiveThumbSize']())*this['value'],g=e>f,h=g?'incrementLarge':'decrementLarge';this[E(0x157)]=!![],c['preventDefault'](),this['startPointerCapture'](this[E(0x18e)],c['pointerId']),this['fireEventRepeatedly'](h,this[E(0x177)],this['clickRepeatInterval']);};['onButtonPointerDown']=(c,d)=>{const F=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c[F(0x14e)]||c['altKey']||c[F(0x17b)]||c[F(0x18d)]||c['shiftKey']||c[F(0x165)]!=0x0)return;switch(d){case 0x1:this[F(0x193)]=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':F(0x14b);this[F(0x13f)](),c[F(0x182)]();const f=d==0x1?this['button1']:this[F(0x174)];this['startPointerCapture'](f,c['pointerId']),this[F(0x18f)](e,this[F(0x177)],this['clickRepeatInterval']);};[k(0x15f)]=c=>{const G=k;if(!this['isConnected']||this[G(0x15d)])return;if(!c[G(0x14e)]||c[G(0x183)]||c['ctrlKey']||c[G(0x18d)]||c['shiftKey']||c[G(0x165)]!=0x0)return;this[G(0x180)]=this[G(0x15e)]?c['clientY']:c['clientX'],this[G(0x18c)]=this['value'],this[G(0x169)]=!![],this[G(0x13f)](),c[G(0x182)](),this[G(0x142)](this['thumb'],c[G(0x147)]);};[k(0x144)]=c=>{const H=k;if(!this[H(0x16d)])return;if(!c[H(0x14e)]||!this['thumbDragging'])return;const d=this['orientation']?c['clientY']:c[H(0x187)],e=d-this['dragStartPos'],f=this[H(0x15c)](e),g=this[H(0x18c)]+f;c['preventDefault'](),this['setValue'](g)&&this[H(0x14c)]('value');};[k(0x15a)]=c=>{const I=k;if(!this['isConnected'])return;if(!c['isPrimary'])return;this['resetInteractionState'](),this[I(0x13f)](),this['stopEventRepetition'](),this[I(0x166)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const J=k;super(),this[J(0x155)]=new Widget(this);const c=parseFloat(this[J(0x145)](J(0x17a)));if(!isNaN(c))this[J(0x155)][J(0x17a)]=c;if(this['hasOwnProperty'](J(0x17a))){let d=this[J(0x17a)];delete this['value'];if(!isNaN(d))this[J(0x155)]['value']=d;}}['connectedCallback'](){const K=k;this[K(0x155)][K(0x181)]();}[k(0x17c)](){const L=k;this[L(0x155)]['disconnectedCallback']();}get[k(0x176)](){const M=k;return this[M(0x155)]['thumbSize'];}set['thumbSize'](c){const N=k;this[N(0x155)][N(0x195)](c);}get['value'](){const O=k;return this[O(0x155)]['value'];}set['value'](c){const P=k;this[P(0x155)][P(0x19e)](c);}get['orientation'](){const Q=k;return formatOrientation(this[Q(0x155)][Q(0x15e)]);}set[k(0x15e)](c){const R=k;this[R(0x155)][R(0x19d)](decodeOrientation(c))&&this[R(0x173)]('orientation',this[R(0x15e)]);}get['orientationBoolean'](){const S=k;return this[S(0x155)][S(0x15e)];}static get[k(0x158)](){const T=k;return[T(0x15e)];}[k(0x146)](c,d,e){const U=k;switch(c){case'orientation':{e&&this[U(0x155)]['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x168),buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function formatOrientation(c){const V=k;return c?V(0x16c):V(0x17f);}function decodeOrientation(c){const W=k;switch(c){case'vertical':return!![];case W(0x17f):return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){const X=k;return(c*0x64)[X(0x188)](0x3)+'%';}function decodePxValue(c){const Y=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[Y(0x148)](0x0,c['length']-0x2));}function a(){const Z=['586266mPjFbn','host','contextmenu','button1Active','pointercancel','setThumbSize','stopEventRepetition','clientWidth','3443395GTaTpP','open','--plain-scrollbar-thumb-min-size','resetInteractionState','getCssVar','setOrientation','setValue','3280204vlIblQ','updateStyle','toggle','defaultThumbMinSize','startPointerCapture','onTroughPointerDown','onThumbPointerMove','getAttribute','attributeChangedCallback','pointerId','substring','pointerup','clickRepeatInterval','incrementSmall','fireEvent','947549SBdFPJ','isPrimary','scrollbar-input','pointerCaptureElement','getThroughSize','shadowRoot','thumb','setPointerCapture','widget','adoptedStyleSheets','troughActive','observedAttributes','min','onPointerUp','button2Active','computeThumbMoveValue','pointerCaptureId','orientation','onThumbPointerDown','updateLayout','root','dispatchEvent','style','600552wZpdcL','button','stopPointerCapture','42066UIyoVo','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','thumbDragging','getEffectiveThumbSize','pointerdown','vertical','isConnected','classList','content','querySelector','shiftKey','updateThumbPosition','setAttribute','button2','left','thumbSize','clickRepeatDelay','button1','top','value','ctrlKey','disconnectedCallback','eventTimeoutId','9284380McXGZv','horizontal','dragStartPos','connectedCallback','preventDefault','altKey','max','addEventListener','releasePointerCapture','clientX','toFixed','define','getThumbMinSize','trim','dragStartValue','metaKey','trough','fireEventRepeatedly'];a=function(){return Z;};return a();}customElements[k(0x189)]('node-projects-plain-scrollbar',PlainScrollbar);