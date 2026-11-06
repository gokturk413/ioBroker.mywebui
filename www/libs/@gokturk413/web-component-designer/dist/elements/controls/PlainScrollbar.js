const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x79))/0x1+-parseInt(j(0x9f))/0x2+parseInt(j(0x83))/0x3*(parseInt(j(0xac))/0x4)+parseInt(j(0x73))/0x5*(parseInt(j(0xce))/0x6)+parseInt(j(0x92))/0x7+parseInt(j(0xb0))/0x8*(-parseInt(j(0xaf))/0x9)+-parseInt(j(0x97))/0xa*(-parseInt(j(0xc1))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x56a3c));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];['root'];['trough'];['button1'];['button2'];['thumb'];['isConnected']=![];[k(0xbe)]=0.3;['value']=0x0;[k(0xcb)]=![];[k(0xb5)]=0x12c;['clickRepeatInterval']=0x64;[k(0xc6)]=0x19;[k(0x88)];[k(0xc8)];[k(0x95)];['pointerCaptureId'];[k(0xa4)];[k(0xab)];[k(0xc9)];['button2Active'];['troughActive'];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':'open'});const d=c[l(0xbf)];d['appendChild'](scrollbarHtmlTemplate['content'][l(0xb1)](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this['root']=d['querySelector'](l(0xa5)),this[l(0xa0)]=d['querySelector'](l(0xcc)),this['button1']=d['querySelector'](l(0xa9)),this['button2']=d['querySelector']('#button2'),this['thumb']=d[l(0x8a)]('#thumb'),this[l(0xa0)][l(0xca)]('pointerdown',this[l(0xc0)]),this['trough']['addEventListener']('pointerup',this[l(0x76)]),this[l(0xa0)][l(0xca)]('pointercancel',this[l(0x76)]),this['button1']['addEventListener']('pointerdown',e=>this[l(0xa2)](e,0x1)),this['button1'][l(0xca)]('pointerup',this[l(0x76)]),this['button1'][l(0xca)](l(0x86),this['onPointerUp']),this[l(0x93)][l(0xca)]('contextmenu',f=>f['preventDefault']()),this['button2'][l(0xca)]('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this[l(0xcf)][l(0xca)](l(0xa3),this['onPointerUp']),this['button2'][l(0xca)]('pointercancel',this[l(0x76)]),this[l(0xcf)]['addEventListener']('contextmenu',f=>f['preventDefault']()),this['thumb']['addEventListener']('pointerdown',this[l(0xc2)]),this[l(0x8e)]['addEventListener']('pointerup',this['onPointerUp']),this[l(0x8e)][l(0xca)]('pointercancel',this[l(0x76)]),this['thumb'][l(0xca)](l(0xbc),this[l(0xbb)]),this[l(0xbd)]();}['resetInteractionState'](){const m=k;this['thumbDragging']=![],this['button1Active']=![],this[m(0xc5)]=![],this[m(0x7e)]=![];}['connectedCallback'](){const n=k;this['isConnected']=!![],this[n(0xbd)](),this['updateLayout'](),this[n(0x85)]();}['disconnectedCallback'](){const o=k;this[o(0xb7)]=![],this['resetInteractionState'](),this[o(0x8f)](),this['stopPointerCapture']();}[k(0xae)](){const p=k;if(!this[p(0xb7)])return;this[p(0xd0)]['classList']['toggle'](p(0x8b),!this['orientation']),this[p(0xd0)]['classList'][p(0xc4)]('vertical',this[p(0xcb)]),this['thumb'][p(0xb6)]['display']=this['thumbSize']==0x0?'none':'',this['thumb']['style'][p(0x96)]=this[p(0xcb)]?percent(this['getEffectiveThumbSize']()):'',this['thumb'][p(0xb6)][p(0xa7)]=this[p(0xcb)]?'':percent(this[p(0x75)]()),this[p(0x8e)][p(0xb6)]['top']='',this[p(0x8e)][p(0xb6)][p(0x81)]='',this['updateThumbPosition']();}['updateStyle'](){const q=k;if(!this[q(0xb7)])return;this[q(0x8e)]['classList'][q(0xc4)](q(0xa1),this[q(0xab)]),this['button1']['classList'][q(0xc4)]('active',this['button1Active']),this['button2']['classList'][q(0xc4)](q(0xa1),this[q(0xc5)]),void this['troughActive'];}['updateThumbPosition'](){const r=k,c=(0x1-this['getEffectiveThumbSize']())*this[r(0x84)];this['orientation']?this[r(0x8e)][r(0xb6)][r(0x9c)]=percent(c):this['thumb']['style']['left']=percent(c);}[k(0x98)](){const s=k;return this[s(0xcb)]?this[s(0xa0)][s(0xd1)]:this['trough'][s(0x7c)];}['computeThumbMoveValue'](c){const t=k,d=this[t(0x98)]()*(0x1-this[t(0x75)]());if(d<EPS)return 0x0;return c/d;}[k(0x9d)](c){const u=k,d=Math[u(0x7b)](0x0,Math[u(0x80)](0x1,c));if(d==this['thumbSize'])return;this['thumbSize']=d,this[u(0xae)]();}[k(0xcd)](){const v=k,c=this['getCssVar'](v(0x94));if(!c)return this[v(0xc6)];const d=decodePxValue(c);if(!d)return this[v(0xc6)];return d;}[k(0x75)](){const w=k,c=this[w(0xcd)](),d=this[w(0x98)]();if(!d)return this['thumbSize'];const e=Math[w(0x80)](0x1,c/d);return Math[w(0x7b)](e,this[w(0xbe)]);}[k(0x74)](c){const x=k,d=Math[x(0x7b)](0x0,Math['min'](0x1,c));if(d==this['value'])return![];return this[x(0x84)]=isNaN(d)?0x0:d,this[x(0xc3)](),!![];}['setOrientation'](c){const y=k;if(c==this[y(0xcb)])return![];return this[y(0xcb)]=c,this['updateLayout'](),!![];}['getCssVar'](c){const z=k,d=getComputedStyle(this['root'])['getPropertyValue'](c);if(!d)return null;return d[z(0x9e)]();}[k(0x78)](c){const A=k,d=new CustomEvent('scrollbar-input',{'detail':c});this[A(0x7a)]['dispatchEvent'](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const B=k;this['stopEventRepetition'](),this[B(0x78)](c);const h=g==0x0?d:e,i=()=>this[B(0x8d)](c,d,e,g+0x1);this[B(0x95)]=setTimeout(i,h);}[k(0x8f)](){const C=k;this[C(0x95)]&&(clearTimeout(this['eventTimeoutId']),this[C(0x95)]=undefined);}[k(0x82)](c,d){const D=k;this['stopPointerCapture'](),c['setPointerCapture'](d),this['pointerCaptureElement']=c,this[D(0xb9)]=d;}['stopPointerCapture'](){const E=k;if(!this['pointerCaptureId'])return;this[E(0xa4)]['releasePointerCapture'](this[E(0xb9)]),this['pointerCaptureId']=undefined;}[k(0xc0)]=c=>{const F=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[F(0x9a)]||c[F(0xba)]||c['shiftKey']||c['button']!=0x0)return;const d=this[F(0xa0)]['getBoundingClientRect'](),e=this[F(0xcb)]?c['clientY']-d['top']:c['clientX']-d[F(0x81)],f=(this[F(0xcb)]?d[F(0x96)]:d[F(0xa7)])*(0x1-this[F(0x75)]())*this[F(0x84)],g=e>f,h=g?'incrementLarge':'decrementLarge';this[F(0x7e)]=!![],c[F(0xb8)](),this['startPointerCapture'](this[F(0xa0)],c[F(0xaa)]),this['fireEventRepeatedly'](h,this['clickRepeatDelay'],this['clickRepeatInterval']);};['onButtonPointerDown']=(c,d)=>{const G=k;if(!this[G(0xb7)]||this[G(0xb9)])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c['metaKey']||c[G(0xad)]||c['button']!=0x0)return;switch(d){case 0x1:this[G(0xc9)]=!![];break;case 0x2:this[G(0xc5)]=!![];break;}const e=d==0x1?G(0xc7):'incrementSmall';this['updateStyle'](),c['preventDefault']();const f=d==0x1?this['button1']:this['button2'];this['startPointerCapture'](f,c['pointerId']),this['fireEventRepeatedly'](e,this['clickRepeatDelay'],this['clickRepeatInterval']);};[k(0xc2)]=c=>{const H=k;if(!this[H(0xb7)]||this[H(0xb9)])return;if(!c[H(0xb3)]||c['altKey']||c[H(0x9a)]||c[H(0xba)]||c[H(0xad)]||c['button']!=0x0)return;this['dragStartPos']=this['orientation']?c['clientY']:c['clientX'],this['dragStartValue']=this[H(0x84)],this['thumbDragging']=!![],this[H(0x85)](),c['preventDefault'](),this[H(0x82)](this['thumb'],c[H(0xaa)]);};['onThumbPointerMove']=c=>{const I=k;if(!this['isConnected'])return;if(!c[I(0xb3)]||!this[I(0xab)])return;const d=this['orientation']?c[I(0x77)]:c['clientX'],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this['dragStartValue']+f;c[I(0xb8)](),this['setValue'](g)&&this['fireEvent'](I(0x84));};['onPointerUp']=c=>{const J=k;if(!this[J(0xb7)])return;if(!c[J(0xb3)])return;this['resetInteractionState'](),this[J(0x85)](),this[J(0x8f)](),this[J(0x9b)](),c[J(0xb8)]();};}export class PlainScrollbar extends HTMLElement{[k(0xb2)];constructor(){const K=k;super(),this[K(0xb2)]=new Widget(this);const c=parseFloat(this[K(0xb4)]('value'));if(!isNaN(c))this['widget']['value']=c;if(this[K(0xa8)](K(0x84))){let d=this['value'];delete this['value'];if(!isNaN(d))this[K(0xb2)]['value']=d;}}[k(0xa6)](){const L=k;this[L(0xb2)]['connectedCallback']();}[k(0x87)](){this['widget']['disconnectedCallback']();}get['thumbSize'](){const M=k;return this['widget'][M(0xbe)];}set['thumbSize'](c){const N=k;this['widget'][N(0x9d)](c);}get['value'](){const O=k;return this[O(0xb2)]['value'];}set['value'](c){this['widget']['setValue'](c);}get['orientation'](){return formatOrientation(this['widget']['orientation']);}set['orientation'](c){const P=k;this['widget'][P(0x99)](decodeOrientation(c))&&this[P(0x7f)](P(0xcb),this['orientation']);}get['orientationBoolean'](){return this['widget']['orientation'];}static get[k(0x89)](){return['orientation'];}['attributeChangedCallback'](c,d,e){const Q=k;switch(c){case'orientation':{e&&this['widget'][Q(0x99)](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x91),buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){const R=k;switch(c){case R(0x8c):return!![];case'horizontal':return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function decodePxValue(c){const S=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[S(0x7d)](0x0,c['length']-0x2));}customElements['define'](k(0x90),PlainScrollbar);function b(c,d){c=c-0x73;const e=a();let f=e[c];return f;}function a(){const T=['substring','troughActive','setAttribute','min','left','startPointerCapture','337158rymvLo','value','updateStyle','pointercancel','disconnectedCallback','dragStartPos','observedAttributes','querySelector','horizontal','vertical','fireEventRepeatedly','thumb','stopEventRepetition','node-projects-plain-scrollbar','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','1558970lqEAOD','button1','--plain-scrollbar-thumb-min-size','eventTimeoutId','height','3039030BkFFSo','getThroughSize','setOrientation','ctrlKey','stopPointerCapture','top','setThumbSize','trim','231012lDXSkC','trough','active','onButtonPointerDown','pointerup','pointerCaptureElement','#root','connectedCallback','width','hasOwnProperty','#button1','pointerId','thumbDragging','12zEjLUe','shiftKey','updateLayout','9mlwxrs','1863304rvRCVC','cloneNode','widget','isPrimary','getAttribute','clickRepeatDelay','style','isConnected','preventDefault','pointerCaptureId','metaKey','onThumbPointerMove','pointermove','resetInteractionState','thumbSize','shadowRoot','onTroughPointerDown','11UuDpQd','onThumbPointerDown','updateThumbPosition','toggle','button2Active','defaultThumbMinSize','decrementSmall','dragStartValue','button1Active','addEventListener','orientation','#trough','getThumbMinSize','288996jGAASL','button2','root','clientHeight','35tTmwIy','setValue','getEffectiveThumbSize','onPointerUp','clientY','fireEvent','497638IzOFwC','host','max','clientWidth'];a=function(){return T;};return a();}