const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x182))/0x1+parseInt(j(0x18b))/0x2+parseInt(j(0x196))/0x3+-parseInt(j(0x180))/0x4*(parseInt(j(0x185))/0x5)+parseInt(j(0x15a))/0x6+-parseInt(j(0x199))/0x7*(parseInt(j(0x15f))/0x8)+-parseInt(j(0x1bd))/0x9*(parseInt(j(0x18a))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xed283));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x18d)];['root'];['trough'];[k(0x17b)];['button2'];[k(0x1a5)];['isConnected']=![];['thumbSize']=0.3;[k(0x165)]=0x0;['orientation']=![];['clickRepeatDelay']=0x12c;[k(0x16f)]=0x64;['defaultThumbMinSize']=0x19;['dragStartPos'];['dragStartValue'];[k(0x1b6)];[k(0x1a6)];[k(0x190)];[k(0x1b1)];['button1Active'];[k(0x1a8)];['troughActive'];constructor(c){const l=k;this[l(0x18d)]=c,c[l(0x158)]({'mode':l(0x164)});const d=c[l(0x1a1)];d[l(0x1aa)](scrollbarHtmlTemplate[l(0x17e)]['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d['querySelector'](l(0x16e)),this[l(0x193)]=d['querySelector']('#trough'),this[l(0x17b)]=d['querySelector'](l(0x1a3)),this[l(0x168)]=d['querySelector']('#button2'),this['thumb']=d['querySelector']('#thumb'),this[l(0x193)]['addEventListener']('pointerdown',this['onTroughPointerDown']),this['trough']['addEventListener'](l(0x15c),this[l(0x167)]),this['trough']['addEventListener']('pointercancel',this['onPointerUp']),this['button1'][l(0x1be)](l(0x174),e=>this['onButtonPointerDown'](e,0x1)),this['button1'][l(0x1be)](l(0x15c),this[l(0x167)]),this['button1'][l(0x1be)](l(0x170),this[l(0x167)]),this[l(0x17b)]['addEventListener'](l(0x1ac),f=>f[l(0x1ba)]()),this['button2'][l(0x1be)]('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this['button2']['addEventListener'](l(0x15c),this[l(0x167)]),this[l(0x168)]['addEventListener'](l(0x170),this['onPointerUp']),this[l(0x168)][l(0x1be)]('contextmenu',f=>f['preventDefault']()),this[l(0x1a5)][l(0x1be)](l(0x174),this[l(0x160)]),this['thumb']['addEventListener'](l(0x15c),this[l(0x167)]),this[l(0x1a5)]['addEventListener']('pointercancel',this['onPointerUp']),this['thumb']['addEventListener'](l(0x157),this[l(0x176)]),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this['thumbDragging']=![],this['button1Active']=![],this[m(0x1a8)]=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x166)]=!![],this[n(0x1ae)](),this[n(0x1bb)](),this[n(0x1af)]();}['disconnectedCallback'](){const o=k;this['isConnected']=![],this['resetInteractionState'](),this[o(0x17c)](),this['stopPointerCapture']();}['updateLayout'](){const p=k;if(!this[p(0x166)])return;this[p(0x161)][p(0x191)]['toggle'](p(0x1b5),!this[p(0x188)]),this[p(0x161)][p(0x191)][p(0x183)](p(0x163),this['orientation']),this[p(0x1a5)]['style'][p(0x15b)]=this[p(0x15d)]==0x0?'none':'',this[p(0x1a5)]['style']['height']=this[p(0x188)]?percent(this['getEffectiveThumbSize']()):'',this['thumb']['style'][p(0x173)]=this[p(0x188)]?'':percent(this['getEffectiveThumbSize']()),this[p(0x1a5)]['style'][p(0x192)]='',this[p(0x1a5)]['style'][p(0x1b2)]='',this['updateThumbPosition']();}[k(0x1af)](){const q=k;if(!this[q(0x166)])return;this[q(0x1a5)][q(0x191)]['toggle'](q(0x18c),this[q(0x1b1)]),this['button1'][q(0x191)]['toggle'](q(0x18c),this[q(0x1b7)]),this[q(0x168)]['classList']['toggle'](q(0x18c),this[q(0x1a8)]),void this[q(0x1a2)];}[k(0x155)](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this[r(0x165)];this[r(0x188)]?this[r(0x1a5)][r(0x19b)][r(0x192)]=percent(c):this[r(0x1a5)][r(0x19b)]['left']=percent(c);}[k(0x184)](){const s=k;return this[s(0x188)]?this[s(0x193)][s(0x1a4)]:this['trough'][s(0x19e)];}['computeThumbMoveValue'](c){const t=k,d=this[t(0x184)]()*(0x1-this[t(0x172)]());if(d<EPS)return 0x0;return c/d;}[k(0x19c)](c){const u=k,d=Math[u(0x178)](0x0,Math['min'](0x1,c));if(d==this[u(0x15d)])return;this[u(0x15d)]=d,this['updateLayout']();}[k(0x177)](){const v=k,c=this['getCssVar'](v(0x1b0));if(!c)return this[v(0x16d)];const d=decodePxValue(c);if(!d)return this[v(0x16d)];return d;}['getEffectiveThumbSize'](){const w=k,c=this[w(0x177)](),d=this[w(0x184)]();if(!d)return this[w(0x15d)];const e=Math[w(0x162)](0x1,c/d);return Math['max'](e,this['thumbSize']);}[k(0x156)](c){const x=k,d=Math[x(0x178)](0x0,Math['min'](0x1,c));if(d==this[x(0x165)])return![];return this['value']=isNaN(d)?0x0:d,this[x(0x155)](),!![];}['setOrientation'](c){if(c==this['orientation'])return![];return this['orientation']=c,this['updateLayout'](),!![];}[k(0x171)](c){const y=k,d=getComputedStyle(this['root'])[y(0x1a9)](c);if(!d)return null;return d[y(0x16a)]();}[k(0x189)](c){const z=k,d=new CustomEvent(z(0x197),{'detail':c});this[z(0x18d)][z(0x1a0)](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const A=k;this[A(0x17c)](),this[A(0x189)](c);const h=g==0x0?d:e,i=()=>this[A(0x1b9)](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}[k(0x17c)](){const B=k;this['eventTimeoutId']&&(clearTimeout(this[B(0x1b6)]),this[B(0x1b6)]=undefined);}['startPointerCapture'](c,d){const C=k;this['stopPointerCapture'](),c['setPointerCapture'](d),this[C(0x190)]=c,this[C(0x1a6)]=d;}[k(0x187)](){const D=k;if(!this[D(0x1a6)])return;this['pointerCaptureElement'][D(0x1ad)](this['pointerCaptureId']),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const E=k;if(!this[E(0x166)]||this[E(0x1a6)])return;if(!c[E(0x195)]||c['altKey']||c[E(0x15e)]||c['metaKey']||c[E(0x181)]||c['button']!=0x0)return;const d=this['trough'][E(0x186)](),e=this[E(0x188)]?c[E(0x159)]-d[E(0x192)]:c[E(0x19d)]-d['left'],f=(this[E(0x188)]?d['height']:d['width'])*(0x1-this[E(0x172)]())*this[E(0x165)],g=e>f,h=g?'incrementLarge':'decrementLarge';this[E(0x1a2)]=!![],c[E(0x1ba)](),this['startPointerCapture'](this[E(0x193)],c[E(0x16c)]),this[E(0x1b9)](h,this[E(0x1ab)],this[E(0x16f)]);};[k(0x1a7)]=(c,d)=>{const F=k;if(!this[F(0x166)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[F(0x15e)]||c[F(0x18e)]||c[F(0x181)]||c[F(0x17f)]!=0x0)return;switch(d){case 0x1:this[F(0x1b7)]=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this[F(0x1af)](),c['preventDefault']();const f=d==0x1?this['button1']:this[F(0x168)];this[F(0x19a)](f,c['pointerId']),this[F(0x1b9)](e,this['clickRepeatDelay'],this[F(0x16f)]);};['onThumbPointerDown']=c=>{const G=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c[G(0x175)]||c['ctrlKey']||c[G(0x18e)]||c['shiftKey']||c[G(0x17f)]!=0x0)return;this['dragStartPos']=this['orientation']?c['clientY']:c[G(0x19d)],this[G(0x17a)]=this[G(0x165)],this['thumbDragging']=!![],this['updateStyle'](),c['preventDefault'](),this[G(0x19a)](this[G(0x1a5)],c[G(0x16c)]);};[k(0x176)]=c=>{const H=k;if(!this[H(0x166)])return;if(!c[H(0x195)]||!this[H(0x1b1)])return;const d=this[H(0x188)]?c[H(0x159)]:c['clientX'],e=d-this['dragStartPos'],f=this[H(0x1b4)](e),g=this[H(0x17a)]+f;c['preventDefault'](),this[H(0x156)](g)&&this['fireEvent'](H(0x165));};[k(0x167)]=c=>{const I=k;if(!this[I(0x166)])return;if(!c[I(0x195)])return;this['resetInteractionState'](),this['updateStyle'](),this[I(0x17c)](),this['stopPointerCapture'](),c[I(0x1ba)]();};}export class PlainScrollbar extends HTMLElement{[k(0x18f)];constructor(){const J=k;super(),this[J(0x18f)]=new Widget(this);const c=parseFloat(this[J(0x16b)]('value'));if(!isNaN(c))this['widget']['value']=c;if(this[J(0x1bc)]('value')){let d=this['value'];delete this['value'];if(!isNaN(d))this[J(0x18f)][J(0x165)]=d;}}[k(0x198)](){const K=k;this[K(0x18f)]['connectedCallback']();}[k(0x1b8)](){this['widget']['disconnectedCallback']();}get[k(0x15d)](){return this['widget']['thumbSize'];}set['thumbSize'](c){const L=k;this[L(0x18f)][L(0x19c)](c);}get[k(0x165)](){const M=k;return this['widget'][M(0x165)];}set['value'](c){const N=k;this[N(0x18f)]['setValue'](c);}get['orientation'](){const O=k;return formatOrientation(this['widget'][O(0x188)]);}set['orientation'](c){const P=k;this[P(0x18f)]['setOrientation'](decodeOrientation(c))&&this['setAttribute'](P(0x188),this[P(0x188)]);}get[k(0x194)](){const Q=k;return this['widget'][Q(0x188)];}static get[k(0x19f)](){const R=k;return[R(0x188)];}['attributeChangedCallback'](c,d,e){const S=k;switch(c){case'orientation':{e&&this[S(0x18f)]['setOrientation'](decodeOrientation(e));break;}}}}function b(c,d){c=c-0x155;const e=a();let f=e[c];return f;}const EPS=1e-9,buttonSize=k(0x1b3),buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function formatOrientation(c){const T=k;return c?T(0x163):'horizontal';}function decodeOrientation(c){const U=k;switch(c){case U(0x163):return!![];case'horizontal':return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){const V=k;return(c*0x64)[V(0x17d)](0x3)+'%';}function a(){const X=['preventDefault','updateLayout','hasOwnProperty','9479151HtaNdy','addEventListener','updateThumbPosition','setValue','pointermove','attachShadow','clientY','4732548jwSbqZ','display','pointerup','thumbSize','ctrlKey','13192jXrmeX','onThumbPointerDown','root','min','vertical','open','value','isConnected','onPointerUp','button2','length','trim','getAttribute','pointerId','defaultThumbMinSize','#root','clickRepeatInterval','pointercancel','getCssVar','getEffectiveThumbSize','width','pointerdown','altKey','onThumbPointerMove','getThumbMinSize','max','node-projects-plain-scrollbar','dragStartValue','button1','stopEventRepetition','toFixed','content','button','8qEDCKD','shiftKey','1378439hHmusp','toggle','getThroughSize','1406940OgmTfS','getBoundingClientRect','stopPointerCapture','orientation','fireEvent','10ByekyP','3818906xbmwuV','active','host','metaKey','widget','pointerCaptureElement','classList','top','trough','orientationBoolean','isPrimary','790941CfzaFJ','scrollbar-input','connectedCallback','7441DqCQPT','startPointerCapture','style','setThumbSize','clientX','clientWidth','observedAttributes','dispatchEvent','shadowRoot','troughActive','#button1','clientHeight','thumb','pointerCaptureId','onButtonPointerDown','button2Active','getPropertyValue','appendChild','clickRepeatDelay','contextmenu','releasePointerCapture','resetInteractionState','updateStyle','--plain-scrollbar-thumb-min-size','thumbDragging','left','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','computeThumbMoveValue','horizontal','eventTimeoutId','button1Active','disconnectedCallback','fireEventRepeatedly'];a=function(){return X;};return a();}function decodePxValue(c){const W=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c['substring'](0x0,c[W(0x169)]-0x2));}customElements['define'](k(0x179),PlainScrollbar);