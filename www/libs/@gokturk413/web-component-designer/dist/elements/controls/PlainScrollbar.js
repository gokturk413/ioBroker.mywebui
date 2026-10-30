const k=b;function b(c,d){c=c-0x15f;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x191))/0x1*(parseInt(j(0x19f))/0x2)+-parseInt(j(0x1b3))/0x3+-parseInt(j(0x1a5))/0x4*(parseInt(j(0x1b5))/0x5)+-parseInt(j(0x197))/0x6*(parseInt(j(0x1ad))/0x7)+parseInt(j(0x1b1))/0x8+-parseInt(j(0x160))/0x9+parseInt(j(0x194))/0xa*(parseInt(j(0x199))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x51596));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];['root'];[k(0x18d)];[k(0x1ae)];['button2'];['thumb'];[k(0x178)]=![];['thumbSize']=0.3;['value']=0x0;['orientation']=![];[k(0x18c)]=0x12c;['clickRepeatInterval']=0x64;['defaultThumbMinSize']=0x19;['dragStartPos'];['dragStartValue'];[k(0x19e)];[k(0x1af)];['pointerCaptureElement'];[k(0x180)];[k(0x175)];['button2Active'];[k(0x17f)];constructor(c){const l=k;this[l(0x17e)]=c,c['attachShadow']({'mode':'open'});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate[l(0x192)]['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d[l(0x1a0)]('#root'),this['trough']=d['querySelector']('#trough'),this[l(0x1ae)]=d['querySelector'](l(0x184)),this['button2']=d['querySelector']('#button2'),this[l(0x165)]=d[l(0x1a0)]('#thumb'),this[l(0x18d)]['addEventListener']('pointerdown',this['onTroughPointerDown']),this['trough'][l(0x171)](l(0x1a7),this['onPointerUp']),this[l(0x18d)][l(0x171)](l(0x174),this['onPointerUp']),this[l(0x1ae)]['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x1)),this[l(0x1ae)][l(0x171)]('pointerup',this[l(0x161)]),this[l(0x1ae)]['addEventListener']('pointercancel',this['onPointerUp']),this[l(0x1ae)]['addEventListener'](l(0x186),f=>f['preventDefault']()),this['button2']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this['button2']['addEventListener'](l(0x1a7),this[l(0x161)]),this[l(0x16b)][l(0x171)](l(0x174),this['onPointerUp']),this[l(0x16b)][l(0x171)]('contextmenu',f=>f['preventDefault']()),this[l(0x165)]['addEventListener'](l(0x16e),this[l(0x19b)]),this['thumb'][l(0x171)](l(0x1a7),this['onPointerUp']),this['thumb'][l(0x171)]('pointercancel',this['onPointerUp']),this['thumb']['addEventListener'](l(0x17c),this['onThumbPointerMove']),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this[m(0x180)]=![],this['button1Active']=![],this[m(0x195)]=![],this[m(0x17f)]=![];}[k(0x182)](){this['isConnected']=!![],this['resetInteractionState'](),this['updateLayout'](),this['updateStyle']();}['disconnectedCallback'](){const n=k;this[n(0x178)]=![],this[n(0x1a6)](),this['stopEventRepetition'](),this['stopPointerCapture']();}['updateLayout'](){const o=k;if(!this[o(0x178)])return;this['root']['classList'][o(0x193)]('horizontal',!this['orientation']),this['root']['classList']['toggle'](o(0x18a),this[o(0x19c)]),this[o(0x165)][o(0x173)][o(0x1a8)]=this[o(0x162)]==0x0?'none':'',this['thumb']['style']['height']=this[o(0x19c)]?percent(this[o(0x169)]()):'',this[o(0x165)]['style']['width']=this['orientation']?'':percent(this[o(0x169)]()),this[o(0x165)]['style']['top']='',this['thumb'][o(0x173)]['left']='',this['updateThumbPosition']();}['updateStyle'](){const p=k;if(!this[p(0x178)])return;this['thumb'][p(0x1b2)][p(0x193)](p(0x167),this[p(0x180)]),this[p(0x1ae)][p(0x1b2)][p(0x193)]('active',this['button1Active']),this['button2']['classList'][p(0x193)](p(0x167),this['button2Active']),void this[p(0x17f)];}['updateThumbPosition'](){const q=k,c=(0x1-this[q(0x169)]())*this[q(0x1ab)];this['orientation']?this['thumb']['style']['top']=percent(c):this[q(0x165)][q(0x173)][q(0x187)]=percent(c);}[k(0x1b4)](){const r=k;return this[r(0x19c)]?this['trough']['clientHeight']:this['trough'][r(0x163)];}[k(0x190)](c){const s=k,d=this['getThroughSize']()*(0x1-this[s(0x169)]());if(d<EPS)return 0x0;return c/d;}[k(0x196)](c){const t=k,d=Math['max'](0x0,Math[t(0x1b9)](0x1,c));if(d==this[t(0x162)])return;this[t(0x162)]=d,this['updateLayout']();}['getThumbMinSize'](){const u=k,c=this['getCssVar']('--plain-scrollbar-thumb-min-size');if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this[u(0x1a9)];return d;}['getEffectiveThumbSize'](){const v=k,c=this['getThumbMinSize'](),d=this['getThroughSize']();if(!d)return this[v(0x162)];const e=Math[v(0x1b9)](0x1,c/d);return Math[v(0x1a3)](e,this[v(0x162)]);}['setValue'](c){const d=Math['max'](0x0,Math['min'](0x1,c));if(d==this['value'])return![];return this['value']=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}[k(0x1ba)](c){if(c==this['orientation'])return![];return this['orientation']=c,this['updateLayout'](),!![];}['getCssVar'](c){const w=k,d=getComputedStyle(this[w(0x185)])[w(0x16f)](c);if(!d)return null;return d[w(0x183)]();}['fireEvent'](c){const x=k,d=new CustomEvent(x(0x164),{'detail':c});this['host'][x(0x1b7)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const y=k;this['stopEventRepetition'](),this[y(0x188)](c);const h=g==0x0?d:e,i=()=>this[y(0x176)](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}[k(0x1b6)](){const z=k;this[z(0x19e)]&&(clearTimeout(this['eventTimeoutId']),this['eventTimeoutId']=undefined);}[k(0x1b0)](c,d){const A=k;this[A(0x168)](),c['setPointerCapture'](d),this['pointerCaptureElement']=c,this[A(0x1af)]=d;}['stopPointerCapture'](){const B=k;if(!this[B(0x1af)])return;this[B(0x198)]['releasePointerCapture'](this[B(0x1af)]),this['pointerCaptureId']=undefined;}[k(0x16c)]=c=>{const C=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[C(0x15f)]||c['metaKey']||c[C(0x177)]||c[C(0x17b)]!=0x0)return;const d=this[C(0x18d)][C(0x16a)](),e=this['orientation']?c[C(0x1a2)]-d[C(0x1ac)]:c['clientX']-d[C(0x187)],f=(this['orientation']?d[C(0x19d)]:d['width'])*(0x1-this[C(0x169)]())*this[C(0x1ab)],g=e>f,h=g?'incrementLarge':C(0x19a);this[C(0x17f)]=!![],c[C(0x172)](),this['startPointerCapture'](this['trough'],c['pointerId']),this['fireEventRepeatedly'](h,this[C(0x18c)],this['clickRepeatInterval']);};[k(0x1a1)]=(c,d)=>{const D=k;if(!this[D(0x178)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c[D(0x189)]||c[D(0x177)]||c[D(0x17b)]!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?D(0x18e):'incrementSmall';this[D(0x18f)](),c['preventDefault']();const f=d==0x1?this[D(0x1ae)]:this[D(0x16b)];this[D(0x1b0)](f,c['pointerId']),this[D(0x176)](e,this['clickRepeatDelay'],this['clickRepeatInterval']);};[k(0x19b)]=c=>{const E=k;if(!this['isConnected']||this[E(0x1af)])return;if(!c[E(0x181)]||c[E(0x18b)]||c[E(0x15f)]||c[E(0x189)]||c['shiftKey']||c['button']!=0x0)return;this['dragStartPos']=this['orientation']?c[E(0x1a2)]:c[E(0x16d)],this[E(0x179)]=this[E(0x1ab)],this['thumbDragging']=!![],this[E(0x18f)](),c[E(0x172)](),this['startPointerCapture'](this[E(0x165)],c[E(0x1aa)]);};['onThumbPointerMove']=c=>{const F=k;if(!this[F(0x178)])return;if(!c['isPrimary']||!this[F(0x180)])return;const d=this[F(0x19c)]?c['clientY']:c['clientX'],e=d-this[F(0x170)],f=this['computeThumbMoveValue'](e),g=this[F(0x179)]+f;c[F(0x172)](),this['setValue'](g)&&this[F(0x188)](F(0x1ab));};['onPointerUp']=c=>{const G=k;if(!this[G(0x178)])return;if(!c[G(0x181)])return;this['resetInteractionState'](),this[G(0x18f)](),this['stopEventRepetition'](),this[G(0x168)](),c[G(0x172)]();};}function a(){const S=['updateStyle','computeThumbMoveValue','191RxslmM','content','toggle','5803690DimwLZ','button2Active','setThumbSize','17742mVukgY','pointerCaptureElement','11UglcxD','decrementLarge','onThumbPointerDown','orientation','height','eventTimeoutId','5442hRicGs','querySelector','onButtonPointerDown','clientY','max','widget','778720iQwFzL','resetInteractionState','pointerup','display','defaultThumbMinSize','pointerId','value','top','602EQRxVL','button1','pointerCaptureId','startPointerCapture','3940720ZFHEUT','classList','993189qwZBbT','getThroughSize','5JTYpes','stopEventRepetition','dispatchEvent','length','min','setOrientation','ctrlKey','4314771gYsviR','onPointerUp','thumbSize','clientWidth','scrollbar-input','thumb','disconnectedCallback','active','stopPointerCapture','getEffectiveThumbSize','getBoundingClientRect','button2','onTroughPointerDown','clientX','pointerdown','getPropertyValue','dragStartPos','addEventListener','preventDefault','style','pointercancel','button1Active','fireEventRepeatedly','shiftKey','isConnected','dragStartValue','observedAttributes','button','pointermove','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','host','troughActive','thumbDragging','isPrimary','connectedCallback','trim','#button1','root','contextmenu','left','fireEvent','metaKey','vertical','altKey','clickRepeatDelay','trough','decrementSmall'];a=function(){return S;};return a();}export class PlainScrollbar extends HTMLElement{[k(0x1a4)];constructor(){const H=k;super(),this[H(0x1a4)]=new Widget(this);const c=parseFloat(this['getAttribute']('value'));if(!isNaN(c))this['widget']['value']=c;if(this['hasOwnProperty']('value')){let d=this['value'];delete this['value'];if(!isNaN(d))this[H(0x1a4)]['value']=d;}}[k(0x182)](){const I=k;this[I(0x1a4)]['connectedCallback']();}[k(0x166)](){const J=k;this[J(0x1a4)]['disconnectedCallback']();}get[k(0x162)](){const K=k;return this[K(0x1a4)]['thumbSize'];}set['thumbSize'](c){const L=k;this['widget'][L(0x196)](c);}get[k(0x1ab)](){const M=k;return this[M(0x1a4)]['value'];}set['value'](c){this['widget']['setValue'](c);}get[k(0x19c)](){return formatOrientation(this['widget']['orientation']);}set['orientation'](c){const N=k;this[N(0x1a4)]['setOrientation'](decodeOrientation(c))&&this['setAttribute'](N(0x19c),this[N(0x19c)]);}get['orientationBoolean'](){const O=k;return this[O(0x1a4)][O(0x19c)];}static get[k(0x17a)](){return['orientation'];}['attributeChangedCallback'](c,d,e){const P=k;switch(c){case P(0x19c):{e&&this[P(0x1a4)][P(0x1ba)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0x17d),scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){const Q=k;switch(c){case Q(0x18a):return!![];case'horizontal':return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const R=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c['substring'](0x0,c[R(0x1b8)]-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);