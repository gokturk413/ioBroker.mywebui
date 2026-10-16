const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x136))/0x1*(-parseInt(j(0x191))/0x2)+-parseInt(j(0x154))/0x3*(parseInt(j(0x131))/0x4)+parseInt(j(0x157))/0x5*(-parseInt(j(0x172))/0x6)+-parseInt(j(0x165))/0x7*(parseInt(j(0x134))/0x8)+-parseInt(j(0x193))/0x9*(-parseInt(j(0x178))/0xa)+parseInt(j(0x184))/0xb*(parseInt(j(0x17a))/0xc)+parseInt(j(0x16c))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xee002));function a(){const T=['clientX','isConnected','disconnectedCallback','style','eventTimeoutId','onButtonPointerDown','pointerCaptureElement','thumb','contextmenu','fireEventRepeatedly','display','open','910NraYpO','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','button1','querySelector','width','toggle','onThumbPointerMove','18383690aDAMVH','dragStartPos','content','button2','shiftKey','metaKey','48VVLQlv','left','top','button1Active','#thumb','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','2470jQqSPx','setPointerCapture','12lnwdOu','host','length','max','updateLayout','clickRepeatInterval','pointerup','button2Active','thumbSize','updateStyle','12235553BMPVHa','incrementLarge','button','active','computeThumbMoveValue','#trough','Invalid\x20orientation\x20value\x20\x22','incrementSmall','value','setValue','orientationBoolean','#button1','getBoundingClientRect','12QzHNKp','clickRepeatDelay','39708iwCDeg','vertical','getCssVar','ctrlKey','dispatchEvent','368484GVjfBf','resetInteractionState','min','79776KMyQXT','updateThumbPosition','78753MQlLMc','scrollbar-input','getEffectiveThumbSize','getAttribute','thumbDragging','orientation','widget','classList','pointerdown','isPrimary','clientY','addEventListener','stopPointerCapture','endsWith','dragStartValue','onThumbPointerDown','pointerCaptureId','connectedCallback','horizontal','pointerId','getThroughSize','trough','pointercancel','root','adoptedStyleSheets','startPointerCapture','onTroughPointerDown','onPointerUp','stopEventRepetition','setOrientation','15qrknow','hasOwnProperty','troughActive','848075nvBOHp','clientHeight'];a=function(){return T;};return a();}import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];[k(0x14d)];['trough'];['button1'];[k(0x16f)];[k(0x160)];['isConnected']=![];[k(0x182)]=0.3;[k(0x18c)]=0x0;[k(0x13b)]=![];['clickRepeatDelay']=0x12c;[k(0x17f)]=0x64;['defaultThumbMinSize']=0x19;[k(0x16d)];[k(0x144)];[k(0x15d)];['pointerCaptureId'];[k(0x15f)];['thumbDragging'];['button1Active'];['button2Active'];['troughActive'];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':l(0x164)});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate[l(0x16e)]['cloneNode'](!![])),d[l(0x14e)]=[scrollbarStyle],this[l(0x14d)]=d['querySelector']('#root'),this['trough']=d[l(0x168)](l(0x189)),this[l(0x167)]=d[l(0x168)](l(0x18f)),this['button2']=d[l(0x168)]('#button2'),this[l(0x160)]=d['querySelector'](l(0x176)),this[l(0x14b)][l(0x141)](l(0x13e),this[l(0x150)]),this['trough'][l(0x141)](l(0x180),this[l(0x151)]),this[l(0x14b)]['addEventListener'](l(0x14c),this[l(0x151)]),this[l(0x167)]['addEventListener'](l(0x13e),e=>this[l(0x15e)](e,0x1)),this[l(0x167)][l(0x141)]('pointerup',this[l(0x151)]),this['button1'][l(0x141)](l(0x14c),this[l(0x151)]),this[l(0x167)]['addEventListener'](l(0x161),f=>f['preventDefault']()),this[l(0x16f)][l(0x141)](l(0x13e),e=>this[l(0x15e)](e,0x2)),this['button2']['addEventListener']('pointerup',this[l(0x151)]),this[l(0x16f)]['addEventListener']('pointercancel',this[l(0x151)]),this[l(0x16f)][l(0x141)]('contextmenu',f=>f['preventDefault']()),this[l(0x160)]['addEventListener']('pointerdown',this[l(0x145)]),this['thumb']['addEventListener']('pointerup',this['onPointerUp']),this['thumb'][l(0x141)](l(0x14c),this['onPointerUp']),this['thumb']['addEventListener']('pointermove',this[l(0x16b)]),this[l(0x132)]();}['resetInteractionState'](){const m=k;this['thumbDragging']=![],this[m(0x175)]=![],this[m(0x181)]=![],this[m(0x156)]=![];}['connectedCallback'](){const n=k;this[n(0x15a)]=!![],this['resetInteractionState'](),this[n(0x17e)](),this['updateStyle']();}[k(0x15b)](){const o=k;this[o(0x15a)]=![],this['resetInteractionState'](),this['stopEventRepetition'](),this[o(0x142)]();}['updateLayout'](){const p=k;if(!this[p(0x15a)])return;this[p(0x14d)][p(0x13d)]['toggle']('horizontal',!this['orientation']),this[p(0x14d)]['classList']['toggle'](p(0x194),this['orientation']),this[p(0x160)]['style'][p(0x163)]=this[p(0x182)]==0x0?'none':'',this['thumb']['style']['height']=this[p(0x13b)]?percent(this['getEffectiveThumbSize']()):'',this['thumb']['style'][p(0x169)]=this[p(0x13b)]?'':percent(this[p(0x138)]()),this[p(0x160)]['style'][p(0x174)]='',this[p(0x160)]['style']['left']='',this['updateThumbPosition']();}['updateStyle'](){const q=k;if(!this[q(0x15a)])return;this[q(0x160)][q(0x13d)][q(0x16a)](q(0x187),this['thumbDragging']),this['button1'][q(0x13d)][q(0x16a)](q(0x187),this['button1Active']),this[q(0x16f)][q(0x13d)]['toggle'](q(0x187),this['button2Active']),void this['troughActive'];}[k(0x135)](){const r=k,c=(0x1-this[r(0x138)]())*this[r(0x18c)];this[r(0x13b)]?this[r(0x160)]['style']['top']=percent(c):this['thumb'][r(0x15c)]['left']=percent(c);}[k(0x14a)](){const s=k;return this['orientation']?this['trough'][s(0x158)]:this['trough']['clientWidth'];}[k(0x188)](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const t=k,d=Math[t(0x17d)](0x0,Math['min'](0x1,c));if(d==this['thumbSize'])return;this['thumbSize']=d,this['updateLayout']();}['getThumbMinSize'](){const c=this['getCssVar']('--plain-scrollbar-thumb-min-size');if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}['getEffectiveThumbSize'](){const u=k,c=this['getThumbMinSize'](),d=this['getThroughSize']();if(!d)return this[u(0x182)];const e=Math['min'](0x1,c/d);return Math['max'](e,this[u(0x182)]);}['setValue'](c){const v=k,d=Math[v(0x17d)](0x0,Math[v(0x133)](0x1,c));if(d==this[v(0x18c)])return![];return this[v(0x18c)]=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}['setOrientation'](c){if(c==this['orientation'])return![];return this['orientation']=c,this['updateLayout'](),!![];}[k(0x195)](c){const d=getComputedStyle(this['root'])['getPropertyValue'](c);if(!d)return null;return d['trim']();}['fireEvent'](c){const w=k,d=new CustomEvent(w(0x137),{'detail':c});this[w(0x17b)][w(0x130)](d);}[k(0x162)](c,d,e,g=0x0){const x=k;this['stopEventRepetition'](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[x(0x162)](c,d,e,g+0x1);this[x(0x15d)]=setTimeout(i,h);}['stopEventRepetition'](){const y=k;this['eventTimeoutId']&&(clearTimeout(this[y(0x15d)]),this['eventTimeoutId']=undefined);}['startPointerCapture'](c,d){const z=k;this[z(0x142)](),c[z(0x179)](d),this['pointerCaptureElement']=c,this['pointerCaptureId']=d;}[k(0x142)](){const A=k;if(!this[A(0x146)])return;this['pointerCaptureElement']['releasePointerCapture'](this['pointerCaptureId']),this[A(0x146)]=undefined;}['onTroughPointerDown']=c=>{const B=k;if(!this[B(0x15a)]||this[B(0x146)])return;if(!c[B(0x13f)]||c['altKey']||c['ctrlKey']||c[B(0x171)]||c[B(0x170)]||c['button']!=0x0)return;const d=this[B(0x14b)][B(0x190)](),e=this['orientation']?c[B(0x140)]-d[B(0x174)]:c[B(0x159)]-d[B(0x173)],f=(this[B(0x13b)]?d['height']:d[B(0x169)])*(0x1-this['getEffectiveThumbSize']())*this[B(0x18c)],g=e>f,h=g?B(0x185):'decrementLarge';this[B(0x156)]=!![],c['preventDefault'](),this[B(0x14f)](this[B(0x14b)],c['pointerId']),this['fireEventRepeatedly'](h,this[B(0x192)],this[B(0x17f)]);};['onButtonPointerDown']=(c,d)=>{const C=k;if(!this['isConnected']||this[C(0x146)])return;if(!c[C(0x13f)]||c['altKey']||c[C(0x196)]||c['metaKey']||c['shiftKey']||c[C(0x186)]!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this[C(0x181)]=!![];break;}const e=d==0x1?'decrementSmall':C(0x18b);this['updateStyle'](),c['preventDefault']();const f=d==0x1?this[C(0x167)]:this['button2'];this[C(0x14f)](f,c[C(0x149)]),this[C(0x162)](e,this[C(0x192)],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const D=k;if(!this[D(0x15a)]||this['pointerCaptureId'])return;if(!c[D(0x13f)]||c['altKey']||c['ctrlKey']||c['metaKey']||c[D(0x170)]||c[D(0x186)]!=0x0)return;this['dragStartPos']=this[D(0x13b)]?c['clientY']:c[D(0x159)],this[D(0x144)]=this[D(0x18c)],this[D(0x13a)]=!![],this[D(0x183)](),c['preventDefault'](),this['startPointerCapture'](this[D(0x160)],c[D(0x149)]);};['onThumbPointerMove']=c=>{const E=k;if(!this['isConnected'])return;if(!c[E(0x13f)]||!this['thumbDragging'])return;const d=this[E(0x13b)]?c[E(0x140)]:c['clientX'],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this[E(0x144)]+f;c['preventDefault'](),this[E(0x18d)](g)&&this['fireEvent']('value');};['onPointerUp']=c=>{const F=k;if(!this[F(0x15a)])return;if(!c['isPrimary'])return;this['resetInteractionState'](),this['updateStyle'](),this[F(0x152)](),this['stopPointerCapture'](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const G=k;super(),this[G(0x13c)]=new Widget(this);const c=parseFloat(this[G(0x139)]('value'));if(!isNaN(c))this[G(0x13c)][G(0x18c)]=c;if(this[G(0x155)](G(0x18c))){let d=this[G(0x18c)];delete this['value'];if(!isNaN(d))this[G(0x13c)][G(0x18c)]=d;}}[k(0x147)](){const H=k;this['widget'][H(0x147)]();}['disconnectedCallback'](){const I=k;this[I(0x13c)]['disconnectedCallback']();}get['thumbSize'](){const J=k;return this[J(0x13c)]['thumbSize'];}set['thumbSize'](c){this['widget']['setThumbSize'](c);}get[k(0x18c)](){const K=k;return this[K(0x13c)]['value'];}set[k(0x18c)](c){const L=k;this[L(0x13c)][L(0x18d)](c);}get['orientation'](){const M=k;return formatOrientation(this[M(0x13c)]['orientation']);}set[k(0x13b)](c){const N=k;this['widget'][N(0x153)](decodeOrientation(c))&&this['setAttribute']('orientation',this['orientation']);}get[k(0x18e)](){const O=k;return this[O(0x13c)]['orientation'];}static get['observedAttributes'](){return['orientation'];}['attributeChangedCallback'](c,d,e){const P=k;switch(c){case P(0x13b):{e&&this[P(0x13c)]['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x166),buttonPath=k(0x177),scrollbarStyle=css`
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
    `;function formatOrientation(c){const Q=k;return c?Q(0x194):'horizontal';}function decodeOrientation(c){const R=k;switch(c){case R(0x194):return!![];case R(0x148):return![];default:throw new Error(R(0x18a)+c+'\x22.');}}function b(c,d){c=c-0x130;const e=a();let f=e[c];return f;}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const S=k;if(!c||!c[S(0x143)]('px'))return undefined;return Number(c['substring'](0x0,c[S(0x17c)]-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);