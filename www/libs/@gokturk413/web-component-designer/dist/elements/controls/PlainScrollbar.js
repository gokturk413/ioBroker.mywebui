const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x78))/0x1+-parseInt(j(0x72))/0x2+parseInt(j(0xb2))/0x3+parseInt(j(0xaf))/0x4*(parseInt(j(0xb7))/0x5)+parseInt(j(0xbe))/0x6+parseInt(j(0x85))/0x7*(parseInt(j(0x8e))/0x8)+parseInt(j(0x9d))/0x9*(-parseInt(j(0xbc))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaa67b));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{[k(0x7a)];[k(0x92)];['trough'];[k(0x8b)];['button2'];['thumb'];[k(0x79)]=![];[k(0x80)]=0.3;[k(0xb0)]=0x0;['orientation']=![];['clickRepeatDelay']=0x12c;[k(0xa6)]=0x64;['defaultThumbMinSize']=0x19;[k(0xb6)];['dragStartValue'];[k(0xb4)];[k(0xb8)];[k(0xa0)];[k(0x8f)];[k(0x99)];[k(0xbb)];['troughActive'];constructor(c){const l=k;this[l(0x7a)]=c,c['attachShadow']({'mode':l(0xb1)});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate[l(0x82)][l(0x75)](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d[l(0xb3)](l(0x94)),this['trough']=d['querySelector']('#trough'),this['button1']=d['querySelector'](l(0x83)),this[l(0x7c)]=d[l(0xb3)]('#button2'),this[l(0xc6)]=d['querySelector'](l(0xc8)),this['trough']['addEventListener']('pointerdown',this['onTroughPointerDown']),this['trough'][l(0xa3)]('pointerup',this['onPointerUp']),this['trough']['addEventListener'](l(0xa7),this[l(0x98)]),this[l(0x8b)][l(0xa3)](l(0xbd),e=>this[l(0xc4)](e,0x1)),this['button1'][l(0xa3)](l(0xa5),this['onPointerUp']),this['button1']['addEventListener'](l(0xa7),this['onPointerUp']),this['button1'][l(0xa3)]('contextmenu',f=>f[l(0x93)]()),this['button2'][l(0xa3)](l(0xbd),e=>this[l(0xc4)](e,0x2)),this['button2'][l(0xa3)]('pointerup',this[l(0x98)]),this[l(0x7c)][l(0xa3)](l(0xa7),this['onPointerUp']),this[l(0x7c)][l(0xa3)]('contextmenu',f=>f[l(0x93)]()),this['thumb'][l(0xa3)]('pointerdown',this[l(0x6b)]),this['thumb'][l(0xa3)]('pointerup',this['onPointerUp']),this[l(0xc6)][l(0xa3)]('pointercancel',this[l(0x98)]),this['thumb']['addEventListener'](l(0x90),this[l(0xa4)]),this[l(0xb9)]();}['resetInteractionState'](){const m=k;this['thumbDragging']=![],this[m(0x99)]=![],this[m(0xbb)]=![],this['troughActive']=![];}[k(0x7d)](){const n=k;this[n(0x79)]=!![],this['resetInteractionState'](),this['updateLayout'](),this['updateStyle']();}[k(0x68)](){const o=k;this[o(0x79)]=![],this['resetInteractionState'](),this['stopEventRepetition'](),this['stopPointerCapture']();}['updateLayout'](){const p=k;if(!this[p(0x79)])return;this[p(0x92)][p(0x9e)][p(0xad)]('horizontal',!this['orientation']),this[p(0x92)]['classList'][p(0xad)](p(0x69),this[p(0x76)]),this[p(0xc6)]['style']['display']=this[p(0x80)]==0x0?p(0xa2):'',this['thumb']['style']['height']=this[p(0x76)]?percent(this[p(0x9f)]()):'',this[p(0xc6)]['style']['width']=this[p(0x76)]?'':percent(this[p(0x9f)]()),this[p(0xc6)]['style'][p(0xc7)]='',this[p(0xc6)]['style']['left']='',this[p(0x84)]();}['updateStyle'](){const q=k;if(!this['isConnected'])return;this['thumb']['classList']['toggle']('active',this[q(0x8f)]),this[q(0x8b)][q(0x9e)]['toggle'](q(0xb5),this[q(0x99)]),this['button2'][q(0x9e)]['toggle']('active',this['button2Active']),void this[q(0xab)];}['updateThumbPosition'](){const r=k,c=(0x1-this[r(0x9f)]())*this[r(0xb0)];this['orientation']?this[r(0xc6)][r(0xac)][r(0xc7)]=percent(c):this[r(0xc6)][r(0xac)][r(0x6f)]=percent(c);}['getThroughSize'](){const s=k;return this[s(0x76)]?this['trough'][s(0xbf)]:this[s(0x8a)]['clientWidth'];}[k(0x7f)](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}[k(0x96)](c){const t=k,d=Math[t(0xc3)](0x0,Math[t(0x74)](0x1,c));if(d==this['thumbSize'])return;this['thumbSize']=d,this[t(0x9b)]();}[k(0xa1)](){const u=k,c=this[u(0x87)]('--plain-scrollbar-thumb-min-size');if(!c)return this[u(0x95)];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}[k(0x9f)](){const v=k,c=this[v(0xa1)](),d=this['getThroughSize']();if(!d)return this[v(0x80)];const e=Math['min'](0x1,c/d);return Math[v(0xc3)](e,this['thumbSize']);}[k(0x89)](c){const w=k,d=Math[w(0xc3)](0x0,Math['min'](0x1,c));if(d==this[w(0xb0)])return![];return this[w(0xb0)]=isNaN(d)?0x0:d,this[w(0x84)](),!![];}['setOrientation'](c){const x=k;if(c==this[x(0x76)])return![];return this['orientation']=c,this[x(0x9b)](),!![];}['getCssVar'](c){const y=k,d=getComputedStyle(this['root'])['getPropertyValue'](c);if(!d)return null;return d[y(0xaa)]();}[k(0x9a)](c){const z=k,d=new CustomEvent(z(0xa9),{'detail':c});this[z(0x7a)]['dispatchEvent'](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const A=k;this['stopEventRepetition'](),this['fireEvent'](c);const h=g==0x0?d:e,i=()=>this[A(0xa8)](c,d,e,g+0x1);this[A(0xb4)]=setTimeout(i,h);}['stopEventRepetition'](){const B=k;this[B(0xb4)]&&(clearTimeout(this['eventTimeoutId']),this['eventTimeoutId']=undefined);}['startPointerCapture'](c,d){const C=k;this['stopPointerCapture'](),c[C(0xca)](d),this['pointerCaptureElement']=c,this[C(0xb8)]=d;}[k(0x91)](){const D=k;if(!this['pointerCaptureId'])return;this[D(0xa0)]['releasePointerCapture'](this[D(0xb8)]),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const E=k;if(!this[E(0x79)]||this[E(0xb8)])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c['metaKey']||c[E(0x6d)]||c['button']!=0x0)return;const d=this[E(0x8a)]['getBoundingClientRect'](),e=this['orientation']?c['clientY']-d['top']:c['clientX']-d['left'],f=(this['orientation']?d[E(0x71)]:d[E(0x97)])*(0x1-this['getEffectiveThumbSize']())*this[E(0xb0)],g=e>f,h=g?'incrementLarge':E(0x7e);this[E(0xab)]=!![],c[E(0x93)](),this[E(0xc9)](this[E(0x8a)],c[E(0x70)]),this['fireEventRepeatedly'](h,this['clickRepeatDelay'],this['clickRepeatInterval']);};['onButtonPointerDown']=(c,d)=>{const F=k;if(!this[F(0x79)]||this[F(0xb8)])return;if(!c['isPrimary']||c[F(0x88)]||c['ctrlKey']||c['metaKey']||c[F(0x6d)]||c['button']!=0x0)return;switch(d){case 0x1:this[F(0x99)]=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this[F(0xc1)](),c[F(0x93)]();const f=d==0x1?this['button1']:this[F(0x7c)];this['startPointerCapture'](f,c[F(0x70)]),this[F(0xa8)](e,this['clickRepeatDelay'],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const G=k;if(!this[G(0x79)]||this['pointerCaptureId'])return;if(!c['isPrimary']||c[G(0x88)]||c[G(0x6e)]||c['metaKey']||c[G(0x6d)]||c[G(0x7b)]!=0x0)return;this[G(0xb6)]=this[G(0x76)]?c['clientY']:c[G(0xba)],this['dragStartValue']=this[G(0xb0)],this['thumbDragging']=!![],this[G(0xc1)](),c['preventDefault'](),this[G(0xc9)](this['thumb'],c['pointerId']);};['onThumbPointerMove']=c=>{const H=k;if(!this['isConnected'])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this['orientation']?c['clientY']:c['clientX'],e=d-this['dragStartPos'],f=this[H(0x7f)](e),g=this['dragStartValue']+f;c[H(0x93)](),this['setValue'](g)&&this['fireEvent']('value');};[k(0x98)]=c=>{const I=k;if(!this[I(0x79)])return;if(!c[I(0xae)])return;this[I(0xb9)](),this[I(0xc1)](),this[I(0x86)](),this['stopPointerCapture'](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const J=k;super(),this['widget']=new Widget(this);const c=parseFloat(this[J(0x81)](J(0xb0)));if(!isNaN(c))this[J(0x8c)][J(0xb0)]=c;if(this[J(0x6c)](J(0xb0))){let d=this['value'];delete this[J(0xb0)];if(!isNaN(d))this['widget']['value']=d;}}[k(0x7d)](){this['widget']['connectedCallback']();}['disconnectedCallback'](){this['widget']['disconnectedCallback']();}get[k(0x80)](){return this['widget']['thumbSize'];}set['thumbSize'](c){this['widget']['setThumbSize'](c);}get[k(0xb0)](){return this['widget']['value'];}set['value'](c){const K=k;this[K(0x8c)][K(0x89)](c);}get['orientation'](){const L=k;return formatOrientation(this[L(0x8c)]['orientation']);}set['orientation'](c){const M=k;this[M(0x8c)][M(0xc5)](decodeOrientation(c))&&this[M(0x9c)](M(0x76),this['orientation']);}get['orientationBoolean'](){const N=k;return this['widget'][N(0x76)];}static get[k(0x77)](){return['orientation'];}['attributeChangedCallback'](c,d,e){switch(c){case'orientation':{e&&this['widget']['setOrientation'](decodeOrientation(e));break;}}}}function a(){const R=['vertical','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','onThumbPointerDown','hasOwnProperty','shiftKey','ctrlKey','left','pointerId','height','790588XyvSZF','substring','min','cloneNode','orientation','observedAttributes','623198jWsfjj','isConnected','host','button','button2','connectedCallback','decrementLarge','computeThumbMoveValue','thumbSize','getAttribute','content','#button1','updateThumbPosition','4137EAThWE','stopEventRepetition','getCssVar','altKey','setValue','trough','button1','widget','Invalid\x20orientation\x20value\x20\x22','17968TZsTnn','thumbDragging','pointermove','stopPointerCapture','root','preventDefault','#root','defaultThumbMinSize','setThumbSize','width','onPointerUp','button1Active','fireEvent','updateLayout','setAttribute','36Jiwqmv','classList','getEffectiveThumbSize','pointerCaptureElement','getThumbMinSize','none','addEventListener','onThumbPointerMove','pointerup','clickRepeatInterval','pointercancel','fireEventRepeatedly','scrollbar-input','trim','troughActive','style','toggle','isPrimary','98488DOsQHM','value','open','2395572gWzHnK','querySelector','eventTimeoutId','active','dragStartPos','145nGKQJh','pointerCaptureId','resetInteractionState','clientX','button2Active','9261190lrzeYW','pointerdown','8007618yYNffK','clientHeight','horizontal','updateStyle','define','max','onButtonPointerDown','setOrientation','thumb','top','#thumb','startPointerCapture','setPointerCapture','disconnectedCallback'];a=function(){return R;};return a();}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0x6a),scrollbarStyle=css`
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
    `;function formatOrientation(c){const O=k;return c?'vertical':O(0xc0);}function b(c,d){c=c-0x68;const e=a();let f=e[c];return f;}function decodeOrientation(c){const P=k;switch(c){case P(0x69):return!![];case P(0xc0):return![];default:throw new Error(P(0x8d)+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const Q=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[Q(0x73)](0x0,c['length']-0x2));}customElements[k(0xc2)]('node-projects-plain-scrollbar',PlainScrollbar);