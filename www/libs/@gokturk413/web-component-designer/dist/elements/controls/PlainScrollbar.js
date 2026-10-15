function b(c,d){c=c-0x109;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x13e))/0x1*(-parseInt(j(0x10a))/0x2)+-parseInt(j(0x150))/0x3+-parseInt(j(0x154))/0x4+parseInt(j(0x15d))/0x5*(parseInt(j(0x15b))/0x6)+-parseInt(j(0x10e))/0x7+parseInt(j(0x120))/0x8+parseInt(j(0x148))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7f55b));import{css,html}from'@node-projects/base-custom-webcomponent';function a(){const W=['clickRepeatDelay','endsWith','#button1','stopPointerCapture','root','#button2','define','pointerId','toFixed','clientY','min','4657pwFcSd','height','pointerup','thumbDragging','button2Active','metaKey','clientWidth','updateStyle','thumbSize','shiftKey','5895153EgTGVO','width','eventTimeoutId','onTroughPointerDown','stopEventRepetition','style','altKey','onThumbPointerDown','2118558IUajtJ','horizontal','isPrimary','updateThumbPosition','161240rtwNEn','updateLayout','pointerdown','setValue','getEffectiveThumbSize','onPointerUp','getBoundingClientRect','162NlJIXb','pointerCaptureElement','132115pfRIZE','button1','max','thumb','host','#trough','getCssVar','isConnected','disconnectedCallback','232BNAHYP','troughActive','value','addEventListener','4026498lfEUyv','#thumb','clientX','adoptedStyleSheets','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','pointerCaptureId','button','dragStartPos','vertical','top','preventDefault','resetInteractionState','connectedCallback','computeThumbMoveValue','button2','widget','querySelector','contextmenu','8120376jbuGJE','setOrientation','clientHeight','pointercancel','startPointerCapture','toggle','button1Active','getThroughSize','attachShadow','fireEventRepeatedly','getAttribute','ctrlKey','orientation','length','node-projects-plain-scrollbar','trough','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','classList','setThumbSize'];a=function(){return W;};return a();}class Widget{['host'];[k(0x137)];['trough'];[k(0x15e)];['button2'];['thumb'];['isConnected']=![];[k(0x146)]=0.3;['value']=0x0;[k(0x12c)]=![];[k(0x133)]=0x12c;['clickRepeatInterval']=0x64;['defaultThumbMinSize']=0x19;[k(0x115)];['dragStartValue'];[k(0x14a)];['pointerCaptureId'];[k(0x15c)];[k(0x141)];[k(0x126)];[k(0x142)];[k(0x10b)];constructor(c){const l=k;this[l(0x161)]=c,c[l(0x128)]({'mode':'open'});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d[l(0x111)]=[scrollbarStyle],this['root']=d['querySelector']('#root'),this['trough']=d[l(0x11e)](l(0x162)),this[l(0x15e)]=d[l(0x11e)](l(0x135)),this['button2']=d[l(0x11e)](l(0x138)),this[l(0x160)]=d['querySelector'](l(0x10f)),this[l(0x12f)][l(0x10d)](l(0x156),this[l(0x14b)]),this['trough']['addEventListener'](l(0x140),this['onPointerUp']),this[l(0x12f)][l(0x10d)]('pointercancel',this['onPointerUp']),this[l(0x15e)][l(0x10d)](l(0x156),e=>this['onButtonPointerDown'](e,0x1)),this[l(0x15e)][l(0x10d)]('pointerup',this[l(0x159)]),this['button1'][l(0x10d)](l(0x123),this[l(0x159)]),this['button1'][l(0x10d)](l(0x11f),f=>f['preventDefault']()),this['button2'][l(0x10d)](l(0x156),e=>this['onButtonPointerDown'](e,0x2)),this['button2'][l(0x10d)](l(0x140),this[l(0x159)]),this[l(0x11c)][l(0x10d)]('pointercancel',this['onPointerUp']),this['button2']['addEventListener']('contextmenu',f=>f[l(0x118)]()),this[l(0x160)]['addEventListener'](l(0x156),this['onThumbPointerDown']),this[l(0x160)][l(0x10d)]('pointerup',this['onPointerUp']),this[l(0x160)][l(0x10d)](l(0x123),this['onPointerUp']),this[l(0x160)][l(0x10d)]('pointermove',this['onThumbPointerMove']),this['resetInteractionState']();}['resetInteractionState'](){const m=k;this[m(0x141)]=![],this['button1Active']=![],this['button2Active']=![],this[m(0x10b)]=![];}['connectedCallback'](){const n=k;this[n(0x164)]=!![],this['resetInteractionState'](),this['updateLayout'](),this['updateStyle']();}['disconnectedCallback'](){const o=k;this[o(0x164)]=![],this['resetInteractionState'](),this['stopEventRepetition'](),this[o(0x136)]();}[k(0x155)](){const p=k;if(!this[p(0x164)])return;this[p(0x137)]['classList']['toggle']('horizontal',!this['orientation']),this['root'][p(0x131)][p(0x125)](p(0x116),this['orientation']),this[p(0x160)][p(0x14d)]['display']=this[p(0x146)]==0x0?'none':'',this[p(0x160)][p(0x14d)]['height']=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this[p(0x160)]['style'][p(0x149)]=this[p(0x12c)]?'':percent(this['getEffectiveThumbSize']()),this[p(0x160)]['style'][p(0x117)]='',this[p(0x160)][p(0x14d)]['left']='',this['updateThumbPosition']();}[k(0x145)](){const q=k;if(!this[q(0x164)])return;this['thumb']['classList']['toggle']('active',this['thumbDragging']),this['button1']['classList'][q(0x125)]('active',this['button1Active']),this[q(0x11c)][q(0x131)][q(0x125)]('active',this[q(0x142)]),void this['troughActive'];}[k(0x153)](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this[r(0x10c)];this[r(0x12c)]?this[r(0x160)][r(0x14d)]['top']=percent(c):this[r(0x160)][r(0x14d)]['left']=percent(c);}[k(0x127)](){const s=k;return this['orientation']?this[s(0x12f)][s(0x122)]:this[s(0x12f)][s(0x144)];}['computeThumbMoveValue'](c){const t=k,d=this['getThroughSize']()*(0x1-this[t(0x158)]());if(d<EPS)return 0x0;return c/d;}[k(0x132)](c){const u=k,d=Math[u(0x15f)](0x0,Math[u(0x13d)](0x1,c));if(d==this[u(0x146)])return;this['thumbSize']=d,this['updateLayout']();}['getThumbMinSize'](){const c=this['getCssVar']('--plain-scrollbar-thumb-min-size');if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0x158)](){const v=k,c=this['getThumbMinSize'](),d=this['getThroughSize']();if(!d)return this[v(0x146)];const e=Math['min'](0x1,c/d);return Math[v(0x15f)](e,this[v(0x146)]);}['setValue'](c){const w=k,d=Math['max'](0x0,Math[w(0x13d)](0x1,c));if(d==this[w(0x10c)])return![];return this[w(0x10c)]=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}[k(0x121)](c){const x=k;if(c==this[x(0x12c)])return![];return this[x(0x12c)]=c,this[x(0x155)](),!![];}[k(0x163)](c){const d=getComputedStyle(this['root'])['getPropertyValue'](c);if(!d)return null;return d['trim']();}['fireEvent'](c){const y=k,d=new CustomEvent('scrollbar-input',{'detail':c});this[y(0x161)]['dispatchEvent'](d);}[k(0x129)](c,d,e,g=0x0){const z=k;this[z(0x14c)](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[z(0x129)](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}[k(0x14c)](){const A=k;this[A(0x14a)]&&(clearTimeout(this[A(0x14a)]),this['eventTimeoutId']=undefined);}[k(0x124)](c,d){const B=k;this['stopPointerCapture'](),c['setPointerCapture'](d),this['pointerCaptureElement']=c,this[B(0x113)]=d;}[k(0x136)](){const C=k;if(!this[C(0x113)])return;this[C(0x15c)]['releasePointerCapture'](this['pointerCaptureId']),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const D=k;if(!this[D(0x164)]||this['pointerCaptureId'])return;if(!c[D(0x152)]||c['altKey']||c[D(0x12b)]||c['metaKey']||c[D(0x147)]||c[D(0x114)]!=0x0)return;const d=this['trough'][D(0x15a)](),e=this[D(0x12c)]?c[D(0x13c)]-d['top']:c[D(0x110)]-d['left'],f=(this['orientation']?d[D(0x13f)]:d[D(0x149)])*(0x1-this[D(0x158)]())*this[D(0x10c)],g=e>f,h=g?'incrementLarge':'decrementLarge';this[D(0x10b)]=!![],c[D(0x118)](),this['startPointerCapture'](this[D(0x12f)],c['pointerId']),this['fireEventRepeatedly'](h,this[D(0x133)],this['clickRepeatInterval']);};['onButtonPointerDown']=(c,d)=>{const E=k;if(!this[E(0x164)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[E(0x12b)]||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this[E(0x145)](),c[E(0x118)]();const f=d==0x1?this[E(0x15e)]:this['button2'];this['startPointerCapture'](f,c[E(0x13a)]),this['fireEventRepeatedly'](e,this[E(0x133)],this['clickRepeatInterval']);};[k(0x14f)]=c=>{const F=k;if(!this[F(0x164)]||this[F(0x113)])return;if(!c['isPrimary']||c[F(0x14e)]||c[F(0x12b)]||c[F(0x143)]||c[F(0x147)]||c[F(0x114)]!=0x0)return;this['dragStartPos']=this[F(0x12c)]?c['clientY']:c[F(0x110)],this['dragStartValue']=this[F(0x10c)],this['thumbDragging']=!![],this[F(0x145)](),c[F(0x118)](),this['startPointerCapture'](this[F(0x160)],c['pointerId']);};['onThumbPointerMove']=c=>{const G=k;if(!this[G(0x164)])return;if(!c[G(0x152)]||!this[G(0x141)])return;const d=this[G(0x12c)]?c['clientY']:c[G(0x110)],e=d-this['dragStartPos'],f=this[G(0x11b)](e),g=this['dragStartValue']+f;c['preventDefault'](),this[G(0x157)](g)&&this['fireEvent'](G(0x10c));};['onPointerUp']=c=>{const H=k;if(!this['isConnected'])return;if(!c['isPrimary'])return;this[H(0x119)](),this['updateStyle'](),this[H(0x14c)](),this[H(0x136)](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const I=k;super(),this[I(0x11d)]=new Widget(this);const c=parseFloat(this[I(0x12a)](I(0x10c)));if(!isNaN(c))this[I(0x11d)][I(0x10c)]=c;if(this['hasOwnProperty']('value')){let d=this['value'];delete this[I(0x10c)];if(!isNaN(d))this['widget']['value']=d;}}['connectedCallback'](){const J=k;this['widget'][J(0x11a)]();}[k(0x109)](){const K=k;this[K(0x11d)]['disconnectedCallback']();}get[k(0x146)](){const L=k;return this[L(0x11d)]['thumbSize'];}set[k(0x146)](c){this['widget']['setThumbSize'](c);}get['value'](){return this['widget']['value'];}set['value'](c){const M=k;this['widget'][M(0x157)](c);}get['orientation'](){const N=k;return formatOrientation(this[N(0x11d)]['orientation']);}set['orientation'](c){const O=k;this['widget'][O(0x121)](decodeOrientation(c))&&this['setAttribute']('orientation',this['orientation']);}get['orientationBoolean'](){const P=k;return this['widget'][P(0x12c)];}static get['observedAttributes'](){const Q=k;return[Q(0x12c)];}['attributeChangedCallback'](c,d,e){const R=k;switch(c){case'orientation':{e&&this[R(0x11d)][R(0x121)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x112),buttonPath=k(0x130),scrollbarStyle=css`
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
    `;function formatOrientation(c){const S=k;return c?'vertical':S(0x151);}function decodeOrientation(c){const T=k;switch(c){case'vertical':return!![];case T(0x151):return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){const U=k;return(c*0x64)[U(0x13b)](0x3)+'%';}function decodePxValue(c){const V=k;if(!c||!c[V(0x134)]('px'))return undefined;return Number(c['substring'](0x0,c[V(0x12d)]-0x2));}customElements[k(0x139)](k(0x12e),PlainScrollbar);