const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1c9))/0x1+-parseInt(j(0x183))/0x2*(-parseInt(j(0x194))/0x3)+-parseInt(j(0x1da))/0x4+-parseInt(j(0x1d6))/0x5+-parseInt(j(0x1c4))/0x6*(-parseInt(j(0x18f))/0x7)+parseInt(j(0x17b))/0x8*(parseInt(j(0x1b2))/0x9)+parseInt(j(0x1b7))/0xa*(-parseInt(j(0x1a0))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc385a));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x19a)];[k(0x195)];['trough'];['button1'];[k(0x18c)];[k(0x1a6)];[k(0x1bf)]=![];[k(0x1d1)]=0.3;[k(0x1bd)]=0x0;['orientation']=![];[k(0x192)]=0x12c;[k(0x182)]=0x64;['defaultThumbMinSize']=0x19;['dragStartPos'];['dragStartValue'];['eventTimeoutId'];[k(0x18d)];[k(0x1a7)];[k(0x1d8)];[k(0x1ce)];['button2Active'];[k(0x1cc)];constructor(c){const l=k;this[l(0x19a)]=c,c[l(0x1b8)]({'mode':l(0x1d0)});const d=c[l(0x1aa)];d[l(0x1d2)](scrollbarHtmlTemplate[l(0x1d3)]['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d[l(0x189)]('#root'),this['trough']=d['querySelector']('#trough'),this['button1']=d['querySelector']('#button1'),this[l(0x18c)]=d[l(0x189)](l(0x1cb)),this['thumb']=d[l(0x189)](l(0x1ca)),this[l(0x1c5)]['addEventListener']('pointerdown',this[l(0x1ab)]),this[l(0x1c5)]['addEventListener'](l(0x1a9),this['onPointerUp']),this[l(0x1c5)]['addEventListener'](l(0x1d7),this['onPointerUp']),this[l(0x186)][l(0x199)]('pointerdown',e=>this['onButtonPointerDown'](e,0x1)),this['button1']['addEventListener'](l(0x1a9),this['onPointerUp']),this['button1']['addEventListener'](l(0x1d7),this['onPointerUp']),this[l(0x186)][l(0x199)](l(0x1af),f=>f[l(0x188)]()),this['button2']['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this[l(0x18c)]['addEventListener'](l(0x1a9),this[l(0x1a2)]),this[l(0x18c)][l(0x199)](l(0x1d7),this['onPointerUp']),this['button2'][l(0x199)]('contextmenu',f=>f[l(0x188)]()),this[l(0x1a6)][l(0x199)]('pointerdown',this[l(0x1db)]),this['thumb'][l(0x199)]('pointerup',this['onPointerUp']),this['thumb'][l(0x199)]('pointercancel',this['onPointerUp']),this['thumb'][l(0x199)](l(0x1c0),this['onThumbPointerMove']),this[l(0x1a4)]();}[k(0x1a4)](){const m=k;this[m(0x1d8)]=![],this[m(0x1ce)]=![],this[m(0x1a8)]=![],this[m(0x1cc)]=![];}['connectedCallback'](){const n=k;this['isConnected']=!![],this['resetInteractionState'](),this[n(0x1b1)](),this['updateStyle']();}[k(0x17e)](){const o=k;this['isConnected']=![],this['resetInteractionState'](),this[o(0x181)](),this[o(0x190)]();}[k(0x1b1)](){const p=k;if(!this[p(0x1bf)])return;this[p(0x195)]['classList'][p(0x1ba)](p(0x1a3),!this['orientation']),this[p(0x195)][p(0x1c6)]['toggle'](p(0x1dc),this[p(0x18a)]),this[p(0x1a6)][p(0x1b3)]['display']=this['thumbSize']==0x0?'none':'',this['thumb'][p(0x1b3)][p(0x17d)]=this[p(0x18a)]?percent(this['getEffectiveThumbSize']()):'',this[p(0x1a6)][p(0x1b3)][p(0x18b)]=this[p(0x18a)]?'':percent(this['getEffectiveThumbSize']()),this[p(0x1a6)][p(0x1b3)][p(0x1c7)]='',this[p(0x1a6)]['style']['left']='',this[p(0x1be)]();}[k(0x196)](){const q=k;if(!this[q(0x1bf)])return;this['thumb']['classList']['toggle'](q(0x18e),this['thumbDragging']),this[q(0x186)]['classList'][q(0x1ba)](q(0x18e),this['button1Active']),this['button2']['classList'][q(0x1ba)]('active',this[q(0x1a8)]),void this['troughActive'];}[k(0x1be)](){const r=k,c=(0x1-this[r(0x179)]())*this['value'];this['orientation']?this['thumb'][r(0x1b3)]['top']=percent(c):this[r(0x1a6)]['style']['left']=percent(c);}[k(0x193)](){const s=k;return this[s(0x18a)]?this['trough'][s(0x17c)]:this['trough'][s(0x1b5)];}[k(0x1b9)](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const t=k,d=Math['max'](0x0,Math[t(0x19b)](0x1,c));if(d==this[t(0x1d1)])return;this[t(0x1d1)]=d,this['updateLayout']();}[k(0x1a5)](){const u=k,c=this['getCssVar'](u(0x1bb));if(!c)return this[u(0x1cf)];const d=decodePxValue(c);if(!d)return this[u(0x1cf)];return d;}[k(0x179)](){const v=k,c=this[v(0x1a5)](),d=this['getThroughSize']();if(!d)return this['thumbSize'];const e=Math[v(0x19b)](0x1,c/d);return Math['max'](e,this['thumbSize']);}['setValue'](c){const w=k,d=Math[w(0x1d5)](0x0,Math[w(0x19b)](0x1,c));if(d==this[w(0x1bd)])return![];return this[w(0x1bd)]=isNaN(d)?0x0:d,this[w(0x1be)](),!![];}[k(0x17f)](c){if(c==this['orientation'])return![];return this['orientation']=c,this['updateLayout'](),!![];}['getCssVar'](c){const x=k,d=getComputedStyle(this['root'])['getPropertyValue'](c);if(!d)return null;return d[x(0x187)]();}['fireEvent'](c){const y=k,d=new CustomEvent(y(0x1ac),{'detail':c});this[y(0x19a)]['dispatchEvent'](d);}[k(0x185)](c,d,e,g=0x0){const z=k;this['stopEventRepetition'](),this[z(0x1b6)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this[z(0x1d4)]=setTimeout(i,h);}['stopEventRepetition'](){this['eventTimeoutId']&&(clearTimeout(this['eventTimeoutId']),this['eventTimeoutId']=undefined);}[k(0x197)](c,d){this['stopPointerCapture'](),c['setPointerCapture'](d),this['pointerCaptureElement']=c,this['pointerCaptureId']=d;}['stopPointerCapture'](){const A=k;if(!this[A(0x18d)])return;this[A(0x1a7)]['releasePointerCapture'](this['pointerCaptureId']),this[A(0x18d)]=undefined;}[k(0x1ab)]=c=>{const B=k;if(!this['isConnected']||this[B(0x18d)])return;if(!c['isPrimary']||c[B(0x19c)]||c[B(0x1bc)]||c[B(0x1ad)]||c['shiftKey']||c['button']!=0x0)return;const d=this[B(0x1c5)][B(0x19e)](),e=this['orientation']?c['clientY']-d['top']:c['clientX']-d['left'],f=(this[B(0x18a)]?d['height']:d[B(0x18b)])*(0x1-this[B(0x179)]())*this[B(0x1bd)],g=e>f,h=g?'incrementLarge':B(0x1cd);this['troughActive']=!![],c['preventDefault'](),this[B(0x197)](this['trough'],c['pointerId']),this[B(0x185)](h,this[B(0x192)],this[B(0x182)]);};['onButtonPointerDown']=(c,d)=>{const C=k;if(!this[C(0x1bf)]||this[C(0x18d)])return;if(!c['isPrimary']||c[C(0x19c)]||c['ctrlKey']||c[C(0x1ad)]||c['shiftKey']||c[C(0x1a1)]!=0x0)return;switch(d){case 0x1:this[C(0x1ce)]=!![];break;case 0x2:this[C(0x1a8)]=!![];break;}const e=d==0x1?'decrementSmall':C(0x1d9);this[C(0x196)](),c[C(0x188)]();const f=d==0x1?this['button1']:this[C(0x18c)];this[C(0x197)](f,c[C(0x1c2)]),this['fireEventRepeatedly'](e,this['clickRepeatDelay'],this[C(0x182)]);};[k(0x1db)]=c=>{const D=k;if(!this[D(0x1bf)]||this['pointerCaptureId'])return;if(!c[D(0x19f)]||c[D(0x19c)]||c[D(0x1bc)]||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;this['dragStartPos']=this[D(0x18a)]?c['clientY']:c[D(0x198)],this[D(0x1c8)]=this['value'],this[D(0x1d8)]=!![],this['updateStyle'](),c[D(0x188)](),this[D(0x197)](this['thumb'],c[D(0x1c2)]);};[k(0x1c3)]=c=>{const E=k;if(!this['isConnected'])return;if(!c[E(0x19f)]||!this['thumbDragging'])return;const d=this['orientation']?c['clientY']:c[E(0x198)],e=d-this['dragStartPos'],f=this[E(0x1b9)](e),g=this[E(0x1c8)]+f;c[E(0x188)](),this['setValue'](g)&&this[E(0x1b6)](E(0x1bd));};[k(0x1a2)]=c=>{const F=k;if(!this['isConnected'])return;if(!c[F(0x19f)])return;this['resetInteractionState'](),this['updateStyle'](),this['stopEventRepetition'](),this['stopPointerCapture'](),c[F(0x188)]();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const G=k;super(),this[G(0x19d)]=new Widget(this);const c=parseFloat(this['getAttribute'](G(0x1bd)));if(!isNaN(c))this[G(0x19d)][G(0x1bd)]=c;if(this[G(0x180)](G(0x1bd))){let d=this[G(0x1bd)];delete this[G(0x1bd)];if(!isNaN(d))this[G(0x19d)][G(0x1bd)]=d;}}['connectedCallback'](){this['widget']['connectedCallback']();}[k(0x17e)](){const H=k;this[H(0x19d)][H(0x17e)]();}get[k(0x1d1)](){const I=k;return this[I(0x19d)]['thumbSize'];}set[k(0x1d1)](c){const J=k;this[J(0x19d)]['setThumbSize'](c);}get['value'](){return this['widget']['value'];}set['value'](c){const K=k;this[K(0x19d)]['setValue'](c);}get[k(0x18a)](){const L=k;return formatOrientation(this[L(0x19d)][L(0x18a)]);}set['orientation'](c){const M=k;this['widget']['setOrientation'](decodeOrientation(c))&&this['setAttribute'](M(0x18a),this['orientation']);}get[k(0x1c1)](){return this['widget']['orientation'];}static get['observedAttributes'](){const N=k;return[N(0x18a)];}['attributeChangedCallback'](c,d,e){const O=k;switch(c){case'orientation':{e&&this[O(0x19d)][O(0x17f)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x1ae),buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function formatOrientation(c){const P=k;return c?P(0x1dc):P(0x1a3);}function decodeOrientation(c){const Q=k;switch(c){case Q(0x1dc):return!![];case'horizontal':return![];default:throw new Error(Q(0x1b0)+c+'\x22.');}}function b(c,d){c=c-0x179;const e=a();let f=e[c];return f;}function a(){const T=['360UilSJc','trough','classList','top','dragStartValue','1567794XTvOQZ','#thumb','#button2','troughActive','decrementLarge','button1Active','defaultThumbMinSize','open','thumbSize','appendChild','content','eventTimeoutId','max','868190YVVMaj','pointercancel','thumbDragging','incrementSmall','2373888rGFIZt','onThumbPointerDown','vertical','getEffectiveThumbSize','node-projects-plain-scrollbar','2462536SbTjzM','clientHeight','height','disconnectedCallback','setOrientation','hasOwnProperty','stopEventRepetition','clickRepeatInterval','1048194EhNgie','substring','fireEventRepeatedly','button1','trim','preventDefault','querySelector','orientation','width','button2','pointerCaptureId','active','9534mdzbMP','stopPointerCapture','toFixed','clickRepeatDelay','getThroughSize','3xaeMQy','root','updateStyle','startPointerCapture','clientX','addEventListener','host','min','altKey','widget','getBoundingClientRect','isPrimary','55ZzugZW','button','onPointerUp','horizontal','resetInteractionState','getThumbMinSize','thumb','pointerCaptureElement','button2Active','pointerup','shadowRoot','onTroughPointerDown','scrollbar-input','metaKey','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','contextmenu','Invalid\x20orientation\x20value\x20\x22','updateLayout','9NuSsCI','style','define','clientWidth','fireEvent','1826920uEvlNe','attachShadow','computeThumbMoveValue','toggle','--plain-scrollbar-thumb-min-size','ctrlKey','value','updateThumbPosition','isConnected','pointermove','orientationBoolean','pointerId','onThumbPointerMove'];a=function(){return T;};return a();}function percent(c){const R=k;return(c*0x64)[R(0x191)](0x3)+'%';}function decodePxValue(c){const S=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[S(0x184)](0x0,c['length']-0x2));}customElements[k(0x1b4)](k(0x17a),PlainScrollbar);