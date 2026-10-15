const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x13d))/0x1*(-parseInt(j(0x159))/0x2)+parseInt(j(0x17c))/0x3+parseInt(j(0x175))/0x4*(-parseInt(j(0x14b))/0x5)+-parseInt(j(0x14c))/0x6+-parseInt(j(0x15b))/0x7+-parseInt(j(0x13e))/0x8*(-parseInt(j(0x153))/0x9)+parseInt(j(0x132))/0xa*(parseInt(j(0x129))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x63e8a));import{css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x11f;const e=a();let f=e[c];return f;}class Widget{[k(0x178)];[k(0x161)];[k(0x15c)];['button1'];[k(0x14f)];['thumb'];[k(0x182)]=![];[k(0x184)]=0.3;[k(0x16d)]=0x0;['orientation']=![];['clickRepeatDelay']=0x12c;[k(0x156)]=0x64;['defaultThumbMinSize']=0x19;[k(0x169)];[k(0x122)];['eventTimeoutId'];['pointerCaptureId'];[k(0x154)];[k(0x17d)];['button1Active'];['button2Active'];['troughActive'];constructor(c){const l=k;this['host']=c,c[l(0x12a)]({'mode':'open'});const d=c[l(0x183)];d['appendChild'](scrollbarHtmlTemplate['content'][l(0x130)](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d[l(0x135)](l(0x179)),this['trough']=d['querySelector']('#trough'),this['button1']=d['querySelector']('#button1'),this['button2']=d[l(0x135)]('#button2'),this['thumb']=d['querySelector'](l(0x15d)),this[l(0x15c)]['addEventListener']('pointerdown',this[l(0x185)]),this[l(0x15c)]['addEventListener']('pointerup',this['onPointerUp']),this[l(0x15c)][l(0x12d)]('pointercancel',this[l(0x127)]),this[l(0x152)][l(0x12d)]('pointerdown',e=>this[l(0x170)](e,0x1)),this[l(0x152)]['addEventListener']('pointerup',this[l(0x127)]),this[l(0x152)]['addEventListener'](l(0x173),this[l(0x127)]),this['button1']['addEventListener'](l(0x14a),f=>f[l(0x136)]()),this['button2'][l(0x12d)]('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this[l(0x14f)][l(0x12d)](l(0x133),this['onPointerUp']),this[l(0x14f)][l(0x12d)](l(0x173),this[l(0x127)]),this[l(0x14f)]['addEventListener']('contextmenu',f=>f['preventDefault']()),this[l(0x126)]['addEventListener'](l(0x17f),this['onThumbPointerDown']),this[l(0x126)][l(0x12d)](l(0x133),this[l(0x127)]),this['thumb']['addEventListener']('pointercancel',this['onPointerUp']),this['thumb']['addEventListener']('pointermove',this['onThumbPointerMove']),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this['thumbDragging']=![],this[m(0x14e)]=![],this['button2Active']=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x182)]=!![],this[n(0x144)](),this[n(0x121)](),this['updateStyle']();}[k(0x142)](){const o=k;this['isConnected']=![],this[o(0x144)](),this[o(0x15f)](),this[o(0x180)]();}[k(0x121)](){const p=k;if(!this[p(0x182)])return;this[p(0x161)]['classList'][p(0x15e)](p(0x165),!this['orientation']),this[p(0x161)]['classList']['toggle']('vertical',this['orientation']),this[p(0x126)]['style']['display']=this[p(0x184)]==0x0?p(0x134):'',this[p(0x126)][p(0x176)][p(0x157)]=this[p(0x16f)]?percent(this[p(0x141)]()):'',this['thumb']['style']['width']=this[p(0x16f)]?'':percent(this[p(0x141)]()),this[p(0x126)][p(0x176)][p(0x186)]='',this[p(0x126)][p(0x176)][p(0x162)]='',this['updateThumbPosition']();}['updateStyle'](){const q=k;if(!this[q(0x182)])return;this[q(0x126)][q(0x14d)][q(0x15e)]('active',this['thumbDragging']),this['button1'][q(0x14d)][q(0x15e)]('active',this[q(0x14e)]),this[q(0x14f)][q(0x14d)]['toggle']('active',this[q(0x123)]),void this[q(0x151)];}['updateThumbPosition'](){const r=k,c=(0x1-this[r(0x141)]())*this[r(0x16d)];this[r(0x16f)]?this[r(0x126)]['style'][r(0x186)]=percent(c):this[r(0x126)]['style'][r(0x162)]=percent(c);}['getThroughSize'](){const s=k;return this[s(0x16f)]?this['trough'][s(0x12b)]:this[s(0x15c)][s(0x128)];}[k(0x15a)](c){const t=k,d=this[t(0x16c)]()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const u=k,d=Math[u(0x172)](0x0,Math['min'](0x1,c));if(d==this[u(0x184)])return;this['thumbSize']=d,this[u(0x121)]();}[k(0x158)](){const v=k,c=this['getCssVar']('--plain-scrollbar-thumb-min-size');if(!c)return this[v(0x164)];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}['getEffectiveThumbSize'](){const w=k,c=this[w(0x158)](),d=this[w(0x16c)]();if(!d)return this['thumbSize'];const e=Math[w(0x17a)](0x1,c/d);return Math['max'](e,this[w(0x184)]);}['setValue'](c){const x=k,d=Math['max'](0x0,Math['min'](0x1,c));if(d==this[x(0x16d)])return![];return this['value']=isNaN(d)?0x0:d,this[x(0x177)](),!![];}['setOrientation'](c){const y=k;if(c==this['orientation'])return![];return this[y(0x16f)]=c,this[y(0x121)](),!![];}['getCssVar'](c){const z=k,d=getComputedStyle(this['root'])[z(0x124)](c);if(!d)return null;return d[z(0x16a)]();}[k(0x150)](c){const A=k,d=new CustomEvent('scrollbar-input',{'detail':c});this['host'][A(0x17b)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const B=k;this[B(0x15f)](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}['stopEventRepetition'](){const C=k;this['eventTimeoutId']&&(clearTimeout(this[C(0x167)]),this[C(0x167)]=undefined);}['startPointerCapture'](c,d){const D=k;this[D(0x180)](),c[D(0x12e)](d),this['pointerCaptureElement']=c,this[D(0x138)]=d;}['stopPointerCapture'](){const E=k;if(!this[E(0x138)])return;this['pointerCaptureElement']['releasePointerCapture'](this[E(0x138)]),this[E(0x138)]=undefined;}[k(0x185)]=c=>{const F=k;if(!this['isConnected']||this[F(0x138)])return;if(!c[F(0x149)]||c[F(0x13c)]||c[F(0x160)]||c[F(0x13b)]||c[F(0x137)]||c[F(0x13a)]!=0x0)return;const d=this['trough']['getBoundingClientRect'](),e=this['orientation']?c[F(0x16e)]-d['top']:c[F(0x13f)]-d[F(0x162)],f=(this[F(0x16f)]?d[F(0x157)]:d[F(0x147)])*(0x1-this[F(0x141)]())*this[F(0x16d)],g=e>f,h=g?F(0x17e):F(0x168);this['troughActive']=!![],c['preventDefault'](),this[F(0x171)](this[F(0x15c)],c['pointerId']),this['fireEventRepeatedly'](h,this[F(0x146)],this['clickRepeatInterval']);};[k(0x170)]=(c,d)=>{const G=k;if(!this[G(0x182)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[G(0x160)]||c['metaKey']||c[G(0x137)]||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this[G(0x123)]=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this['updateStyle'](),c['preventDefault']();const f=d==0x1?this['button1']:this['button2'];this[G(0x171)](f,c[G(0x174)]),this[G(0x16b)](e,this[G(0x146)],this[G(0x156)]);};[k(0x163)]=c=>{const H=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c[H(0x149)]||c[H(0x13c)]||c[H(0x160)]||c['metaKey']||c['shiftKey']||c[H(0x13a)]!=0x0)return;this[H(0x169)]=this[H(0x16f)]?c['clientY']:c['clientX'],this[H(0x122)]=this['value'],this[H(0x17d)]=!![],this['updateStyle'](),c[H(0x136)](),this[H(0x171)](this[H(0x126)],c['pointerId']);};['onThumbPointerMove']=c=>{const I=k;if(!this[I(0x182)])return;if(!c[I(0x149)]||!this['thumbDragging'])return;const d=this['orientation']?c['clientY']:c['clientX'],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this['dragStartValue']+f;c[I(0x136)](),this[I(0x140)](g)&&this['fireEvent']('value');};[k(0x127)]=c=>{const J=k;if(!this[J(0x182)])return;if(!c['isPrimary'])return;this[J(0x144)](),this['updateStyle'](),this[J(0x15f)](),this['stopPointerCapture'](),c[J(0x136)]();};}export class PlainScrollbar extends HTMLElement{[k(0x139)];constructor(){const K=k;super(),this[K(0x139)]=new Widget(this);const c=parseFloat(this[K(0x148)](K(0x16d)));if(!isNaN(c))this['widget'][K(0x16d)]=c;if(this['hasOwnProperty'](K(0x16d))){let d=this[K(0x16d)];delete this['value'];if(!isNaN(d))this['widget']['value']=d;}}[k(0x155)](){const L=k;this[L(0x139)]['connectedCallback']();}['disconnectedCallback'](){this['widget']['disconnectedCallback']();}get['thumbSize'](){const M=k;return this[M(0x139)]['thumbSize'];}set[k(0x184)](c){const N=k;this[N(0x139)][N(0x143)](c);}get[k(0x16d)](){const O=k;return this[O(0x139)][O(0x16d)];}set[k(0x16d)](c){const P=k;this[P(0x139)]['setValue'](c);}get['orientation'](){const Q=k;return formatOrientation(this[Q(0x139)]['orientation']);}set[k(0x16f)](c){const R=k;this['widget']['setOrientation'](decodeOrientation(c))&&this[R(0x166)](R(0x16f),this[R(0x16f)]);}get[k(0x131)](){const S=k;return this[S(0x139)]['orientation'];}static get[k(0x125)](){return['orientation'];}[k(0x145)](c,d,e){const T=k;switch(c){case T(0x16f):{e&&this[T(0x139)][T(0x12c)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0x181),scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){const U=k;switch(c){case'vertical':return!![];case'horizontal':return![];default:throw new Error(U(0x12f)+c+'\x22.');}}function percent(c){const V=k;return(c*0x64)[V(0x11f)](0x3)+'%';}function decodePxValue(c){const W=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[W(0x120)](0x0,c['length']-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);function a(){const X=['contextmenu','801305mAlZQE','4491834szBXXq','classList','button1Active','button2','fireEvent','troughActive','button1','280935YPsGxC','pointerCaptureElement','connectedCallback','clickRepeatInterval','height','getThumbMinSize','20JhUxjk','computeThumbMoveValue','2259173qvikgW','trough','#thumb','toggle','stopEventRepetition','ctrlKey','root','left','onThumbPointerDown','defaultThumbMinSize','horizontal','setAttribute','eventTimeoutId','decrementLarge','dragStartPos','trim','fireEventRepeatedly','getThroughSize','value','clientY','orientation','onButtonPointerDown','startPointerCapture','max','pointercancel','pointerId','4xtBWam','style','updateThumbPosition','host','#root','min','dispatchEvent','874419azFPPc','thumbDragging','incrementLarge','pointerdown','stopPointerCapture','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','isConnected','shadowRoot','thumbSize','onTroughPointerDown','top','toFixed','substring','updateLayout','dragStartValue','button2Active','getPropertyValue','observedAttributes','thumb','onPointerUp','clientWidth','2784133VTsNRT','attachShadow','clientHeight','setOrientation','addEventListener','setPointerCapture','Invalid\x20orientation\x20value\x20\x22','cloneNode','orientationBoolean','40WoSxHK','pointerup','none','querySelector','preventDefault','shiftKey','pointerCaptureId','widget','button','metaKey','altKey','10003HSvgdZ','112jeOwzj','clientX','setValue','getEffectiveThumbSize','disconnectedCallback','setThumbSize','resetInteractionState','attributeChangedCallback','clickRepeatDelay','width','getAttribute','isPrimary'];a=function(){return X;};return a();}