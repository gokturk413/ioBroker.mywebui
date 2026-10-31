const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xb4))/0x1+-parseInt(j(0xeb))/0x2+parseInt(j(0xcb))/0x3+-parseInt(j(0xb0))/0x4+-parseInt(j(0xbd))/0x5+parseInt(j(0xbf))/0x6+parseInt(j(0xac))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5e536));import{css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xaa;const e=a();let f=e[c];return f;}class Widget{[k(0xd5)];[k(0xd7)];[k(0xc9)];[k(0xe7)];['button2'];['thumb'];['isConnected']=![];[k(0x100)]=0.3;['value']=0x0;[k(0xdc)]=![];[k(0xf3)]=0x12c;['clickRepeatInterval']=0x64;['defaultThumbMinSize']=0x19;['dragStartPos'];['dragStartValue'];['eventTimeoutId'];['pointerCaptureId'];['pointerCaptureElement'];[k(0xd1)];['button1Active'];['button2Active'];['troughActive'];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':'open'});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate[l(0xfe)][l(0xca)](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this[l(0xd7)]=d['querySelector'](l(0xf9)),this[l(0xc9)]=d['querySelector']('#trough'),this['button1']=d[l(0xd6)](l(0xd2)),this[l(0xf8)]=d[l(0xd6)](l(0xc1)),this['thumb']=d[l(0xd6)]('#thumb'),this[l(0xc9)][l(0xf7)](l(0xfa),this['onTroughPointerDown']),this[l(0xc9)]['addEventListener'](l(0x102),this[l(0xc8)]),this['trough'][l(0xf7)](l(0xe1),this[l(0xc8)]),this['button1'][l(0xf7)]('pointerdown',e=>this[l(0xd0)](e,0x1)),this['button1'][l(0xf7)](l(0x102),this['onPointerUp']),this['button1']['addEventListener']('pointercancel',this[l(0xc8)]),this['button1'][l(0xf7)](l(0xab),f=>f['preventDefault']()),this[l(0xf8)][l(0xf7)]('pointerdown',e=>this[l(0xd0)](e,0x2)),this['button2'][l(0xf7)]('pointerup',this['onPointerUp']),this['button2']['addEventListener'](l(0xe1),this[l(0xc8)]),this['button2']['addEventListener']('contextmenu',f=>f['preventDefault']()),this['thumb'][l(0xf7)]('pointerdown',this['onThumbPointerDown']),this['thumb']['addEventListener'](l(0x102),this['onPointerUp']),this['thumb']['addEventListener'](l(0xe1),this[l(0xc8)]),this[l(0xb2)][l(0xf7)]('pointermove',this['onThumbPointerMove']),this[l(0xcd)]();}[k(0xcd)](){const m=k;this['thumbDragging']=![],this[m(0xad)]=![],this[m(0xe3)]=![],this[m(0xe6)]=![];}[k(0xf4)](){const n=k;this['isConnected']=!![],this['resetInteractionState'](),this[n(0xb1)](),this['updateStyle']();}['disconnectedCallback'](){const o=k;this[o(0xc0)]=![],this['resetInteractionState'](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0xb1)](){const p=k;if(!this['isConnected'])return;this['root'][p(0xee)]['toggle'](p(0xe8),!this[p(0xdc)]),this['root'][p(0xee)][p(0xdd)]('vertical',this[p(0xdc)]),this[p(0xb2)]['style']['display']=this['thumbSize']==0x0?p(0xb8):'',this['thumb']['style'][p(0xc2)]=this['orientation']?percent(this[p(0xb7)]()):'',this[p(0xb2)][p(0xbc)][p(0xcc)]=this['orientation']?'':percent(this['getEffectiveThumbSize']()),this[p(0xb2)]['style'][p(0xae)]='',this['thumb'][p(0xbc)]['left']='',this[p(0xda)]();}['updateStyle'](){const q=k;if(!this[q(0xc0)])return;this[q(0xb2)][q(0xee)][q(0xdd)](q(0xc5),this[q(0xd1)]),this[q(0xe7)]['classList']['toggle'](q(0xc5),this[q(0xad)]),this['button2']['classList'][q(0xdd)]('active',this[q(0xe3)]),void this[q(0xe6)];}[k(0xda)](){const r=k,c=(0x1-this[r(0xb7)]())*this['value'];this[r(0xdc)]?this['thumb']['style']['top']=percent(c):this['thumb'][r(0xbc)][r(0xff)]=percent(c);}['getThroughSize'](){const s=k;return this[s(0xdc)]?this['trough']['clientHeight']:this[s(0xc9)]['clientWidth'];}['computeThumbMoveValue'](c){const d=this['getThroughSize']()*(0x1-this['getEffectiveThumbSize']());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const t=k,d=Math[t(0xc3)](0x0,Math['min'](0x1,c));if(d==this[t(0x100)])return;this['thumbSize']=d,this['updateLayout']();}['getThumbMinSize'](){const u=k,c=this[u(0xf1)](u(0xb6));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this['defaultThumbMinSize'];return d;}['getEffectiveThumbSize'](){const v=k,c=this[v(0xaa)](),d=this['getThroughSize']();if(!d)return this['thumbSize'];const e=Math['min'](0x1,c/d);return Math[v(0xc3)](e,this[v(0x100)]);}['setValue'](c){const w=k,d=Math[w(0xc3)](0x0,Math['min'](0x1,c));if(d==this[w(0xea)])return![];return this['value']=isNaN(d)?0x0:d,this['updateThumbPosition'](),!![];}[k(0xfd)](c){const x=k;if(c==this['orientation'])return![];return this[x(0xdc)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const y=k,d=getComputedStyle(this[y(0xd7)])[y(0xb5)](c);if(!d)return null;return d['trim']();}['fireEvent'](c){const z=k,d=new CustomEvent(z(0xd3),{'detail':c});this['host'][z(0xdb)](d);}[k(0xd4)](c,d,e,g=0x0){const A=k;this['stopEventRepetition'](),this[A(0xef)](c);const h=g==0x0?d:e,i=()=>this[A(0xd4)](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}['stopEventRepetition'](){const B=k;this[B(0xce)]&&(clearTimeout(this[B(0xce)]),this['eventTimeoutId']=undefined);}['startPointerCapture'](c,d){const C=k;this[C(0xe5)](),c[C(0xf0)](d),this['pointerCaptureElement']=c,this[C(0xec)]=d;}['stopPointerCapture'](){const D=k;if(!this[D(0xec)])return;this[D(0xc6)]['releasePointerCapture'](this[D(0xec)]),this['pointerCaptureId']=undefined;}['onTroughPointerDown']=c=>{const E=k;if(!this[E(0xc0)]||this['pointerCaptureId'])return;if(!c[E(0xe4)]||c[E(0x103)]||c[E(0xf6)]||c[E(0xaf)]||c['shiftKey']||c['button']!=0x0)return;const d=this['trough']['getBoundingClientRect'](),e=this[E(0xdc)]?c[E(0xbe)]-d[E(0xae)]:c['clientX']-d['left'],f=(this['orientation']?d['height']:d[E(0xcc)])*(0x1-this['getEffectiveThumbSize']())*this['value'],g=e>f,h=g?'incrementLarge':'decrementLarge';this['troughActive']=!![],c[E(0xde)](),this[E(0x101)](this['trough'],c['pointerId']),this['fireEventRepeatedly'](h,this['clickRepeatDelay'],this[E(0xb3)]);};[k(0xd0)]=(c,d)=>{const F=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[F(0xf6)]||c[F(0xaf)]||c[F(0xe9)]||c[F(0xe2)]!=0x0)return;switch(d){case 0x1:this[F(0xad)]=!![];break;case 0x2:this[F(0xe3)]=!![];break;}const e=d==0x1?'decrementSmall':F(0xbb);this[F(0xed)](),c['preventDefault']();const f=d==0x1?this[F(0xe7)]:this[F(0xf8)];this[F(0x101)](f,c['pointerId']),this[F(0xd4)](e,this['clickRepeatDelay'],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const G=k;if(!this['isConnected']||this[G(0xec)])return;if(!c['isPrimary']||c[G(0x103)]||c['ctrlKey']||c[G(0xaf)]||c['shiftKey']||c['button']!=0x0)return;this[G(0xb9)]=this[G(0xdc)]?c['clientY']:c['clientX'],this[G(0xba)]=this['value'],this['thumbDragging']=!![],this['updateStyle'](),c[G(0xde)](),this['startPointerCapture'](this[G(0xb2)],c['pointerId']);};['onThumbPointerMove']=c=>{const H=k;if(!this['isConnected'])return;if(!c[H(0xe4)]||!this[H(0xd1)])return;const d=this['orientation']?c['clientY']:c['clientX'],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this['dragStartValue']+f;c[H(0xde)](),this[H(0xc7)](g)&&this[H(0xef)]('value');};[k(0xc8)]=c=>{const I=k;if(!this['isConnected'])return;if(!c['isPrimary'])return;this['resetInteractionState'](),this[I(0xed)](),this[I(0xd9)](),this['stopPointerCapture'](),c[I(0xde)]();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const J=k;super(),this['widget']=new Widget(this);const c=parseFloat(this['getAttribute']('value'));if(!isNaN(c))this[J(0xfb)]['value']=c;if(this[J(0x104)]('value')){let d=this[J(0xea)];delete this['value'];if(!isNaN(d))this['widget'][J(0xea)]=d;}}['connectedCallback'](){this['widget']['connectedCallback']();}['disconnectedCallback'](){const K=k;this[K(0xfb)]['disconnectedCallback']();}get[k(0x100)](){const L=k;return this[L(0xfb)]['thumbSize'];}set['thumbSize'](c){this['widget']['setThumbSize'](c);}get[k(0xea)](){const M=k;return this[M(0xfb)][M(0xea)];}set[k(0xea)](c){this['widget']['setValue'](c);}get[k(0xdc)](){const N=k;return formatOrientation(this[N(0xfb)][N(0xdc)]);}set['orientation'](c){const O=k;this[O(0xfb)][O(0xfd)](decodeOrientation(c))&&this[O(0xe0)]('orientation',this['orientation']);}get[k(0xf5)](){const P=k;return this[P(0xfb)][P(0xdc)];}static get[k(0xc4)](){return['orientation'];}[k(0xd8)](c,d,e){const Q=k;switch(c){case Q(0xdc):{e&&this[Q(0xfb)][Q(0xfd)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath=k(0xfc),scrollbarStyle=css`
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
    `;function a(){const U=['altKey','hasOwnProperty','getThumbMinSize','contextmenu','5590851YXizCN','button1Active','top','metaKey','2709480XFNJvi','updateLayout','thumb','clickRepeatInterval','121198UsqNjR','getPropertyValue','--plain-scrollbar-thumb-min-size','getEffectiveThumbSize','none','dragStartPos','dragStartValue','incrementSmall','style','2343495GFcBMT','clientY','864804TxynNJ','isConnected','#button2','height','max','observedAttributes','active','pointerCaptureElement','setValue','onPointerUp','trough','cloneNode','2031957gVmWdS','width','resetInteractionState','eventTimeoutId','node-projects-plain-scrollbar','onButtonPointerDown','thumbDragging','#button1','scrollbar-input','fireEventRepeatedly','host','querySelector','root','attributeChangedCallback','stopEventRepetition','updateThumbPosition','dispatchEvent','orientation','toggle','preventDefault','toFixed','setAttribute','pointercancel','button','button2Active','isPrimary','stopPointerCapture','troughActive','button1','horizontal','shiftKey','value','417834ypkrRn','pointerCaptureId','updateStyle','classList','fireEvent','setPointerCapture','getCssVar','vertical','clickRepeatDelay','connectedCallback','orientationBoolean','ctrlKey','addEventListener','button2','#root','pointerdown','widget','<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>','setOrientation','content','left','thumbSize','startPointerCapture','pointerup'];a=function(){return U;};return a();}function formatOrientation(c){const R=k;return c?R(0xf2):R(0xe8);}function decodeOrientation(c){const S=k;switch(c){case S(0xf2):return!![];case S(0xe8):return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){const T=k;return(c*0x64)[T(0xdf)](0x3)+'%';}function decodePxValue(c){if(!c||!c['endsWith']('px'))return undefined;return Number(c['substring'](0x0,c['length']-0x2));}customElements['define'](k(0xcf),PlainScrollbar);