const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x135))/0x1*(-parseInt(j(0x150))/0x2)+-parseInt(j(0x10c))/0x3+-parseInt(j(0x157))/0x4*(-parseInt(j(0x14a))/0x5)+parseInt(j(0x118))/0x6+parseInt(j(0x111))/0x7+parseInt(j(0x124))/0x8*(parseInt(j(0x115))/0x9)+-parseInt(j(0x166))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd72bc));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x13b)];[k(0x11d)];['trough'];['button1'];[k(0x117)];[k(0x131)];['isConnected']=![];[k(0x12c)]=0.3;[k(0x15a)]=0x0;[k(0x14d)]=![];['clickRepeatDelay']=0x12c;[k(0x156)]=0x64;['defaultThumbMinSize']=0x19;['dragStartPos'];[k(0x11e)];[k(0x162)];['pointerCaptureId'];[k(0x129)];['thumbDragging'];['button1Active'];[k(0x125)];['troughActive'];constructor(c){const l=k;this['host']=c,c[l(0x137)]({'mode':l(0x142)});const d=c[l(0x165)];d[l(0x10d)](scrollbarHtmlTemplate['content'][l(0x158)](!![])),d[l(0x119)]=[scrollbarStyle],this['root']=d['querySelector'](l(0x113)),this['trough']=d[l(0x11a)]('#trough'),this[l(0x12b)]=d['querySelector']('#button1'),this[l(0x117)]=d[l(0x11a)]('#button2'),this['thumb']=d[l(0x11a)](l(0x138)),this[l(0x14c)][l(0x141)]('pointerdown',this[l(0x149)]),this['trough']['addEventListener']('pointerup',this[l(0x10b)]),this[l(0x14c)]['addEventListener'](l(0x140),this['onPointerUp']),this['button1'][l(0x141)](l(0x134),e=>this['onButtonPointerDown'](e,0x1)),this[l(0x12b)]['addEventListener'](l(0x11f),this[l(0x10b)]),this['button1']['addEventListener'](l(0x140),this[l(0x10b)]),this['button1'][l(0x141)](l(0x12d),f=>f[l(0x13c)]()),this[l(0x117)]['addEventListener']('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this[l(0x117)]['addEventListener'](l(0x11f),this['onPointerUp']),this[l(0x117)][l(0x141)]('pointercancel',this[l(0x10b)]),this[l(0x117)]['addEventListener']('contextmenu',f=>f['preventDefault']()),this['thumb'][l(0x141)](l(0x134),this[l(0x15e)]),this[l(0x131)]['addEventListener'](l(0x11f),this['onPointerUp']),this[l(0x131)][l(0x141)](l(0x140),this['onPointerUp']),this[l(0x131)][l(0x141)](l(0x160),this['onThumbPointerMove']),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this['thumbDragging']=![],this['button1Active']=![],this['button2Active']=![],this[m(0x159)]=![];}['connectedCallback'](){const n=k;this[n(0x153)]=!![],this['resetInteractionState'](),this[n(0x14f)](),this[n(0x15b)]();}['disconnectedCallback'](){const o=k;this['isConnected']=![],this['resetInteractionState'](),this[o(0x145)](),this[o(0x152)]();}[k(0x14f)](){const p=k;if(!this['isConnected'])return;this[p(0x11d)]['classList'][p(0x13e)](p(0x121),!this[p(0x14d)]),this['root'][p(0x147)]['toggle']('vertical',this['orientation']),this['thumb'][p(0x164)]['display']=this['thumbSize']==0x0?p(0x133):'',this[p(0x131)][p(0x164)]['height']=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this[p(0x131)]['style']['width']=this['orientation']?'':percent(this[p(0x126)]()),this['thumb'][p(0x164)][p(0x130)]='',this['thumb']['style']['left']='',this[p(0x139)]();}[k(0x15b)](){const q=k;if(!this[q(0x153)])return;this['thumb'][q(0x147)][q(0x13e)]('active',this['thumbDragging']),this[q(0x12b)]['classList'][q(0x13e)](q(0x11c),this['button1Active']),this['button2']['classList'][q(0x13e)](q(0x11c),this['button2Active']),void this['troughActive'];}[k(0x139)](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this['value'];this['orientation']?this[r(0x131)][r(0x164)][r(0x130)]=percent(c):this[r(0x131)][r(0x164)]['left']=percent(c);}['getThroughSize'](){const s=k;return this['orientation']?this[s(0x14c)][s(0x12e)]:this['trough'][s(0x14e)];}[k(0x148)](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}[k(0x146)](c){const t=k,d=Math['max'](0x0,Math[t(0x10f)](0x1,c));if(d==this[t(0x12c)])return;this['thumbSize']=d,this[t(0x14f)]();}['getThumbMinSize'](){const c=this['getCssVar']('--plain-scrollbar-thumb-min-size');if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0x126)](){const u=k,c=this['getThumbMinSize'](),d=this['getThroughSize']();if(!d)return this['thumbSize'];const e=Math[u(0x10f)](0x1,c/d);return Math[u(0x10a)](e,this['thumbSize']);}['setValue'](c){const v=k,d=Math['max'](0x0,Math[v(0x10f)](0x1,c));if(d==this['value'])return![];return this[v(0x15a)]=isNaN(d)?0x0:d,this[v(0x139)](),!![];}['setOrientation'](c){const w=k;if(c==this['orientation'])return![];return this[w(0x14d)]=c,this[w(0x14f)](),!![];}[k(0x13d)](c){const d=getComputedStyle(this['root'])['getPropertyValue'](c);if(!d)return null;return d['trim']();}['fireEvent'](c){const x=k,d=new CustomEvent(x(0x114),{'detail':c});this[x(0x13b)][x(0x168)](d);}[k(0x15d)](c,d,e,g=0x0){const y=k;this[y(0x145)](),this[y(0x151)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}['stopEventRepetition'](){const z=k;this[z(0x162)]&&(clearTimeout(this[z(0x162)]),this[z(0x162)]=undefined);}[k(0x14b)](c,d){const A=k;this['stopPointerCapture'](),c[A(0x108)](d),this['pointerCaptureElement']=c,this['pointerCaptureId']=d;}[k(0x152)](){const B=k;if(!this['pointerCaptureId'])return;this['pointerCaptureElement'][B(0x128)](this[B(0x13f)]),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const C=k;if(!this[C(0x153)]||this[C(0x13f)])return;if(!c[C(0x10e)]||c['altKey']||c['ctrlKey']||c['metaKey']||c[C(0x169)]||c['button']!=0x0)return;const d=this[C(0x14c)]['getBoundingClientRect'](),e=this['orientation']?c['clientY']-d['top']:c['clientX']-d[C(0x110)],f=(this[C(0x14d)]?d['height']:d[C(0x11b)])*(0x1-this[C(0x126)]())*this['value'],g=e>f,h=g?C(0x127):C(0x136);this[C(0x159)]=!![],c['preventDefault'](),this[C(0x14b)](this[C(0x14c)],c['pointerId']),this['fireEventRepeatedly'](h,this[C(0x12f)],this['clickRepeatInterval']);};[k(0x144)]=(c,d)=>{const D=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c[D(0x10e)]||c[D(0x112)]||c['ctrlKey']||c['metaKey']||c[D(0x169)]||c['button']!=0x0)return;switch(d){case 0x1:this[D(0x107)]=!![];break;case 0x2:this[D(0x125)]=!![];break;}const e=d==0x1?D(0x155):D(0x109);this[D(0x15b)](),c[D(0x13c)]();const f=d==0x1?this[D(0x12b)]:this['button2'];this[D(0x14b)](f,c['pointerId']),this['fireEventRepeatedly'](e,this[D(0x12f)],this[D(0x156)]);};[k(0x15e)]=c=>{const E=k;if(!this[E(0x153)]||this['pointerCaptureId'])return;if(!c[E(0x10e)]||c[E(0x112)]||c['ctrlKey']||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;this['dragStartPos']=this[E(0x14d)]?c[E(0x161)]:c[E(0x13a)],this[E(0x11e)]=this[E(0x15a)],this[E(0x163)]=!![],this[E(0x15b)](),c[E(0x13c)](),this['startPointerCapture'](this[E(0x131)],c[E(0x15f)]);};[k(0x132)]=c=>{const F=k;if(!this['isConnected'])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this['orientation']?c['clientY']:c['clientX'],e=d-this['dragStartPos'],f=this[F(0x148)](e),g=this['dragStartValue']+f;c['preventDefault'](),this['setValue'](g)&&this[F(0x151)]('value');};['onPointerUp']=c=>{const G=k;if(!this['isConnected'])return;if(!c[G(0x10e)])return;this['resetInteractionState'](),this[G(0x15b)](),this['stopEventRepetition'](),this[G(0x152)](),c[G(0x13c)]();};}function b(c,d){c=c-0x107;const e=a();let f=e[c];return f;}export class PlainScrollbar extends HTMLElement{[k(0x143)];constructor(){const H=k;super(),this['widget']=new Widget(this);const c=parseFloat(this[H(0x122)]('value'));if(!isNaN(c))this[H(0x143)][H(0x15a)]=c;if(this['hasOwnProperty']('value')){let d=this[H(0x15a)];delete this['value'];if(!isNaN(d))this[H(0x143)]['value']=d;}}['connectedCallback'](){this['widget']['connectedCallback']();}[k(0x12a)](){const I=k;this[I(0x143)]['disconnectedCallback']();}get['thumbSize'](){const J=k;return this[J(0x143)]['thumbSize'];}set['thumbSize'](c){this['widget']['setThumbSize'](c);}get['value'](){const K=k;return this[K(0x143)]['value'];}set['value'](c){const L=k;this['widget'][L(0x154)](c);}get[k(0x14d)](){const M=k;return formatOrientation(this['widget'][M(0x14d)]);}set[k(0x14d)](c){const N=k;this['widget'][N(0x16a)](decodeOrientation(c))&&this['setAttribute']('orientation',this['orientation']);}get[k(0x120)](){return this['widget']['orientation'];}static get['observedAttributes'](){return['orientation'];}[k(0x123)](c,d,e){const O=k;switch(c){case O(0x14d):{e&&this['widget']['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x15c),buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function formatOrientation(c){const P=k;return c?'vertical':P(0x121);}function decodeOrientation(c){const Q=k;switch(c){case Q(0x167):return!![];case Q(0x121):return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function a(){const S=['2816556GqUtGF','adoptedStyleSheets','querySelector','width','active','root','dragStartValue','pointerup','orientationBoolean','horizontal','getAttribute','attributeChangedCallback','136akDvLN','button2Active','getEffectiveThumbSize','incrementLarge','releasePointerCapture','pointerCaptureElement','disconnectedCallback','button1','thumbSize','contextmenu','clientHeight','clickRepeatDelay','top','thumb','onThumbPointerMove','none','pointerdown','118408tkpdAi','decrementLarge','attachShadow','#thumb','updateThumbPosition','clientX','host','preventDefault','getCssVar','toggle','pointerCaptureId','pointercancel','addEventListener','open','widget','onButtonPointerDown','stopEventRepetition','setThumbSize','classList','computeThumbMoveValue','onTroughPointerDown','35210dxrAcC','startPointerCapture','trough','orientation','clientWidth','updateLayout','2pyFNhD','fireEvent','stopPointerCapture','isConnected','setValue','decrementSmall','clickRepeatInterval','976KnvgOu','cloneNode','troughActive','value','updateStyle','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','fireEventRepeatedly','onThumbPointerDown','pointerId','pointermove','clientY','eventTimeoutId','thumbDragging','style','shadowRoot','34840940NKaqKg','vertical','dispatchEvent','shiftKey','setOrientation','button1Active','setPointerCapture','incrementSmall','max','onPointerUp','706287MgIpQb','appendChild','isPrimary','min','left','10040282SxbOmf','altKey','#root','scrollbar-input','455535IHGijr','endsWith','button2'];a=function(){return S;};return a();}function decodePxValue(c){const R=k;if(!c||!c[R(0x116)]('px'))return undefined;return Number(c['substring'](0x0,c['length']-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);