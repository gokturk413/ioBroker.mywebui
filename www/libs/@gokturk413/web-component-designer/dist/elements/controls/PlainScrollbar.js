function b(c,d){c=c-0x1cc;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x201))/0x1+parseInt(j(0x1fa))/0x2*(parseInt(j(0x1f3))/0x3)+parseInt(j(0x1fe))/0x4*(-parseInt(j(0x1da))/0x5)+-parseInt(j(0x1ff))/0x6+parseInt(j(0x210))/0x7*(-parseInt(j(0x208))/0x8)+-parseInt(j(0x1d4))/0x9+parseInt(j(0x219))/0xa*(parseInt(j(0x21a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xec003));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];['root'];['trough'];['button1'];[k(0x20f)];[k(0x1d2)];['isConnected']=![];[k(0x20a)]=0.3;['value']=0x0;[k(0x1de)]=![];[k(0x1ea)]=0x12c;[k(0x209)]=0x64;['defaultThumbMinSize']=0x19;[k(0x216)];['dragStartValue'];['eventTimeoutId'];[k(0x1d5)];['pointerCaptureElement'];[k(0x1cf)];[k(0x1f1)];[k(0x1f9)];['troughActive'];constructor(c){const l=k;this[l(0x1eb)]=c,c[l(0x1d7)]({'mode':'open'});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate[l(0x1e2)]['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d['querySelector']('#root'),this['trough']=d['querySelector']('#trough'),this[l(0x1d3)]=d['querySelector']('#button1'),this['button2']=d[l(0x1d9)](l(0x1d0)),this[l(0x1d2)]=d['querySelector']('#thumb'),this['trough'][l(0x1fd)]('pointerdown',this['onTroughPointerDown']),this[l(0x1cc)]['addEventListener'](l(0x1f2),this['onPointerUp']),this[l(0x1cc)]['addEventListener']('pointercancel',this['onPointerUp']),this['button1']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x1)),this['button1']['addEventListener']('pointerup',this[l(0x203)]),this['button1'][l(0x1fd)]('pointercancel',this['onPointerUp']),this[l(0x1d3)]['addEventListener']('contextmenu',f=>f[l(0x225)]()),this['button2'][l(0x1fd)](l(0x1fc),e=>this[l(0x215)](e,0x2)),this['button2']['addEventListener']('pointerup',this[l(0x203)]),this['button2'][l(0x1fd)](l(0x1ef),this['onPointerUp']),this[l(0x20f)][l(0x1fd)]('contextmenu',f=>f[l(0x225)]()),this[l(0x1d2)]['addEventListener'](l(0x1fc),this['onThumbPointerDown']),this['thumb'][l(0x1fd)](l(0x1f2),this['onPointerUp']),this['thumb'][l(0x1fd)](l(0x1ef),this['onPointerUp']),this['thumb'][l(0x1fd)]('pointermove',this['onThumbPointerMove']),this['resetInteractionState']();}[k(0x223)](){const m=k;this[m(0x1cf)]=![],this[m(0x1f1)]=![],this['button2Active']=![],this[m(0x21b)]=![];}['connectedCallback'](){const n=k;this[n(0x1ed)]=!![],this['resetInteractionState'](),this['updateLayout'](),this[n(0x1f5)]();}[k(0x202)](){const o=k;this['isConnected']=![],this['resetInteractionState'](),this[o(0x1e5)](),this[o(0x1e9)]();}['updateLayout'](){const p=k;if(!this[p(0x1ed)])return;this[p(0x1dd)][p(0x1e7)][p(0x217)](p(0x1cd),!this['orientation']),this['root'][p(0x1e7)][p(0x217)]('vertical',this[p(0x1de)]),this['thumb'][p(0x213)][p(0x226)]=this['thumbSize']==0x0?'none':'',this[p(0x1d2)][p(0x213)][p(0x20c)]=this['orientation']?percent(this[p(0x1e4)]()):'',this['thumb'][p(0x213)][p(0x1db)]=this[p(0x1de)]?'':percent(this['getEffectiveThumbSize']()),this[p(0x1d2)][p(0x213)]['top']='',this['thumb']['style']['left']='',this['updateThumbPosition']();}[k(0x1f5)](){const q=k;if(!this[q(0x1ed)])return;this['thumb'][q(0x1e7)][q(0x217)]('active',this[q(0x1cf)]),this['button1']['classList']['toggle']('active',this[q(0x1f1)]),this[q(0x20f)][q(0x1e7)]['toggle'](q(0x1e6),this[q(0x1f9)]),void this['troughActive'];}['updateThumbPosition'](){const r=k,c=(0x1-this[r(0x1e4)]())*this[r(0x1f0)];this['orientation']?this['thumb'][r(0x213)]['top']=percent(c):this['thumb'][r(0x213)][r(0x200)]=percent(c);}['getThroughSize'](){const s=k;return this['orientation']?this['trough']['clientHeight']:this[s(0x1cc)]['clientWidth'];}[k(0x21f)](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}[k(0x1d8)](c){const t=k,d=Math[t(0x1f8)](0x0,Math['min'](0x1,c));if(d==this['thumbSize'])return;this[t(0x20a)]=d,this[t(0x1e3)]();}[k(0x20d)](){const u=k,c=this[u(0x1d1)]('--plain-scrollbar-thumb-min-size');if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this[u(0x1df)];return d;}[k(0x1e4)](){const v=k,c=this['getThumbMinSize'](),d=this[v(0x21e)]();if(!d)return this['thumbSize'];const e=Math['min'](0x1,c/d);return Math[v(0x1f8)](e,this[v(0x20a)]);}[k(0x21c)](c){const w=k,d=Math[w(0x1f8)](0x0,Math[w(0x20b)](0x1,c));if(d==this[w(0x1f0)])return![];return this['value']=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}['setOrientation'](c){const x=k;if(c==this[x(0x1de)])return![];return this[x(0x1de)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const y=k,d=getComputedStyle(this[y(0x1dd)])['getPropertyValue'](c);if(!d)return null;return d[y(0x1ee)]();}['fireEvent'](c){const z=k,d=new CustomEvent(z(0x224),{'detail':c});this[z(0x1eb)][z(0x1e1)](d);}[k(0x205)](c,d,e,g=0x0){const A=k;this['stopEventRepetition'](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[A(0x205)](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}['stopEventRepetition'](){const B=k;this[B(0x207)]&&(clearTimeout(this['eventTimeoutId']),this[B(0x207)]=undefined);}[k(0x1e0)](c,d){const C=k;this[C(0x1e9)](),c[C(0x1e8)](d),this[C(0x20e)]=c,this[C(0x1d5)]=d;}['stopPointerCapture'](){const D=k;if(!this['pointerCaptureId'])return;this[D(0x20e)]['releasePointerCapture'](this['pointerCaptureId']),this[D(0x1d5)]=undefined;}['onTroughPointerDown']=c=>{const E=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c[E(0x218)]||c[E(0x1f4)]||c[E(0x1ec)]||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;const d=this[E(0x1cc)]['getBoundingClientRect'](),e=this['orientation']?c[E(0x1f6)]-d['top']:c['clientX']-d[E(0x200)],f=(this['orientation']?d[E(0x20c)]:d[E(0x1db)])*(0x1-this['getEffectiveThumbSize']())*this['value'],g=e>f,h=g?'incrementLarge':E(0x212);this['troughActive']=!![],c['preventDefault'](),this[E(0x1e0)](this[E(0x1cc)],c['pointerId']),this[E(0x205)](h,this[E(0x1ea)],this['clickRepeatInterval']);};['onButtonPointerDown']=(c,d)=>{const F=k;if(!this[F(0x1ed)]||this[F(0x1d5)])return;if(!c['isPrimary']||c[F(0x1f4)]||c['ctrlKey']||c['metaKey']||c['shiftKey']||c[F(0x1dc)]!=0x0)return;switch(d){case 0x1:this[F(0x1f1)]=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':F(0x214);this[F(0x1f5)](),c['preventDefault']();const f=d==0x1?this['button1']:this[F(0x20f)];this['startPointerCapture'](f,c['pointerId']),this['fireEventRepeatedly'](e,this['clickRepeatDelay'],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const G=k;if(!this[G(0x1ed)]||this['pointerCaptureId'])return;if(!c[G(0x218)]||c['altKey']||c['ctrlKey']||c[G(0x21d)]||c['shiftKey']||c[G(0x1dc)]!=0x0)return;this[G(0x216)]=this[G(0x1de)]?c[G(0x1f6)]:c['clientX'],this['dragStartValue']=this[G(0x1f0)],this[G(0x1cf)]=!![],this[G(0x1f5)](),c['preventDefault'](),this['startPointerCapture'](this['thumb'],c[G(0x211)]);};['onThumbPointerMove']=c=>{const H=k;if(!this[H(0x1ed)])return;if(!c[H(0x218)]||!this[H(0x1cf)])return;const d=this[H(0x1de)]?c['clientY']:c[H(0x1fb)],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this[H(0x204)]+f;c['preventDefault'](),this['setValue'](g)&&this['fireEvent']('value');};[k(0x203)]=c=>{const I=k;if(!this['isConnected'])return;if(!c[I(0x218)])return;this[I(0x223)](),this['updateStyle'](),this['stopEventRepetition'](),this[I(0x1e9)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const J=k;super(),this['widget']=new Widget(this);const c=parseFloat(this['getAttribute']('value'));if(!isNaN(c))this[J(0x220)]['value']=c;if(this['hasOwnProperty']('value')){let d=this[J(0x1f0)];delete this['value'];if(!isNaN(d))this['widget'][J(0x1f0)]=d;}}['connectedCallback'](){const K=k;this[K(0x220)][K(0x1f7)]();}['disconnectedCallback'](){const L=k;this[L(0x220)][L(0x202)]();}get['thumbSize'](){const M=k;return this[M(0x220)]['thumbSize'];}set['thumbSize'](c){const N=k;this['widget'][N(0x1d8)](c);}get[k(0x1f0)](){const O=k;return this['widget'][O(0x1f0)];}set['value'](c){this['widget']['setValue'](c);}get['orientation'](){return formatOrientation(this['widget']['orientation']);}set[k(0x1de)](c){const P=k;this['widget'][P(0x221)](decodeOrientation(c))&&this[P(0x1d6)]('orientation',this['orientation']);}get[k(0x1ce)](){return this['widget']['orientation'];}static get['observedAttributes'](){return['orientation'];}['attributeChangedCallback'](c,d,e){const Q=k;switch(c){case Q(0x1de):{e&&this[Q(0x220)]['setOrientation'](decodeOrientation(e));break;}}}}function a(){const T=['substring','eventTimeoutId','2120kKWQeI','clickRepeatInterval','thumbSize','min','height','getThumbMinSize','pointerCaptureElement','button2','50260RLxbtw','pointerId','decrementLarge','style','incrementSmall','onButtonPointerDown','dragStartPos','toggle','isPrimary','15170aqlpAX','36366MXbjMB','troughActive','setValue','metaKey','getThroughSize','computeThumbMoveValue','widget','setOrientation','vertical','resetInteractionState','scrollbar-input','preventDefault','display','trough','horizontal','orientationBoolean','thumbDragging','#button2','getCssVar','thumb','button1','1443771YgFIjX','pointerCaptureId','setAttribute','attachShadow','setThumbSize','querySelector','2543080HcAehr','width','button','root','orientation','defaultThumbMinSize','startPointerCapture','dispatchEvent','content','updateLayout','getEffectiveThumbSize','stopEventRepetition','active','classList','setPointerCapture','stopPointerCapture','clickRepeatDelay','host','ctrlKey','isConnected','trim','pointercancel','value','button1Active','pointerup','230901znzInX','altKey','updateStyle','clientY','connectedCallback','max','button2Active','12BFqbxz','clientX','pointerdown','addEventListener','4cvAYrd','1500138sbgciL','left','1688587bRfRYI','disconnectedCallback','onPointerUp','dragStartValue','fireEventRepeatedly'];a=function(){return T;};return a();}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){const R=k;switch(c){case R(0x222):return!![];case R(0x1cd):return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const S=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[S(0x206)](0x0,c['length']-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);