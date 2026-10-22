const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xfc))/0x1*(-parseInt(j(0x105))/0x2)+parseInt(j(0x14a))/0x3*(-parseInt(j(0x12c))/0x4)+parseInt(j(0x14f))/0x5*(-parseInt(j(0x117))/0x6)+parseInt(j(0x107))/0x7*(parseInt(j(0x120))/0x8)+parseInt(j(0x130))/0x9*(parseInt(j(0x108))/0xa)+-parseInt(j(0x11f))/0xb+parseInt(j(0x144))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x40a22));function a(){const V=['none','min','22ZkIUzL','getAttribute','7ODSGUY','1058270MwYNPQ','addEventListener','horizontal','decrementSmall','setPointerCapture','clickRepeatDelay','pointerCaptureId','resetInteractionState','connectedCallback','getEffectiveThumbSize','root','top','defaultThumbMinSize','onThumbPointerMove','disconnectedCallback','6BPWfyD','preventDefault','incrementSmall','onThumbPointerDown','getBoundingClientRect','fireEventRepeatedly','hasOwnProperty','#root','4341909cWfEeb','3754120NetmtZ','value','toggle','observedAttributes','eventTimeoutId','pointercancel','incrementLarge','troughActive','stopEventRepetition','setValue','dispatchEvent','decrementLarge','52EclFgu','onPointerUp','ctrlKey','endsWith','18zOAyzW','altKey','onTroughPointerDown','height','trough','toFixed','getThroughSize','querySelector','pointerId','updateStyle','pointerup','shiftKey','computeThumbMoveValue','width','dragStartPos','button2Active','updateLayout','startPointerCapture','metaKey','classList','3430116HHFbYW','attributeChangedCallback','fireEvent','button1','active','thumbDragging','76737MKjnyl','updateThumbPosition','stopPointerCapture','getThumbMinSize','display','1153245HIPSZN','adoptedStyleSheets','button2','node-projects-plain-scrollbar','thumb','clickRepeatInterval','widget','clientX','clientHeight','isPrimary','pointerCaptureElement','pointerdown','isConnected','setAttribute','thumbSize','23261fhVEXY','orientation','--plain-scrollbar-thumb-min-size','host','style','clientY','define'];a=function(){return V;};return a();}import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];['root'];[k(0x134)];[k(0x147)];['button2'];[k(0xf1)];['isConnected']=![];[k(0xfb)]=0.3;[k(0x121)]=0x0;['orientation']=![];['clickRepeatDelay']=0x12c;[k(0xf2)]=0x64;['defaultThumbMinSize']=0x19;[k(0x13e)];['dragStartValue'];[k(0x124)];[k(0x10e)];[k(0xf7)];['thumbDragging'];['button1Active'];[k(0x13f)];['troughActive'];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':'open'});const d=c['shadowRoot'];d['appendChild'](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d[l(0x150)]=[scrollbarStyle],this[l(0x112)]=d['querySelector'](l(0x11e)),this[l(0x134)]=d['querySelector']('#trough'),this[l(0x147)]=d[l(0x137)]('#button1'),this[l(0xef)]=d['querySelector']('#button2'),this['thumb']=d[l(0x137)]('#thumb'),this[l(0x134)]['addEventListener']('pointerdown',this[l(0x132)]),this['trough'][l(0x109)]('pointerup',this['onPointerUp']),this[l(0x134)][l(0x109)](l(0x125),this[l(0x12d)]),this[l(0x147)]['addEventListener'](l(0xf8),e=>this['onButtonPointerDown'](e,0x1)),this['button1']['addEventListener'](l(0x13a),this['onPointerUp']),this['button1'][l(0x109)]('pointercancel',this['onPointerUp']),this[l(0x147)]['addEventListener']('contextmenu',f=>f['preventDefault']()),this[l(0xef)][l(0x109)]('pointerdown',e=>this['onButtonPointerDown'](e,0x2)),this['button2'][l(0x109)](l(0x13a),this['onPointerUp']),this[l(0xef)]['addEventListener']('pointercancel',this[l(0x12d)]),this['button2']['addEventListener']('contextmenu',f=>f[l(0x118)]()),this['thumb']['addEventListener'](l(0xf8),this[l(0x11a)]),this[l(0xf1)][l(0x109)]('pointerup',this[l(0x12d)]),this[l(0xf1)][l(0x109)]('pointercancel',this['onPointerUp']),this['thumb'][l(0x109)]('pointermove',this[l(0x115)]),this['resetInteractionState']();}[k(0x10f)](){const m=k;this['thumbDragging']=![],this['button1Active']=![],this[m(0x13f)]=![],this['troughActive']=![];}[k(0x110)](){const n=k;this['isConnected']=!![],this[n(0x10f)](),this['updateLayout'](),this[n(0x139)]();}['disconnectedCallback'](){const o=k;this['isConnected']=![],this[o(0x10f)](),this['stopEventRepetition'](),this['stopPointerCapture']();}[k(0x140)](){const p=k;if(!this[p(0xf9)])return;this['root'][p(0x143)]['toggle'](p(0x10a),!this['orientation']),this['root'][p(0x143)][p(0x122)]('vertical',this[p(0xfd)]),this['thumb']['style'][p(0x14e)]=this['thumbSize']==0x0?p(0x103):'',this[p(0xf1)]['style'][p(0x133)]=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this['thumb'][p(0x100)]['width']=this['orientation']?'':percent(this[p(0x111)]()),this[p(0xf1)]['style'][p(0x113)]='',this[p(0xf1)]['style']['left']='',this[p(0x14b)]();}['updateStyle'](){const q=k;if(!this[q(0xf9)])return;this['thumb'][q(0x143)]['toggle'](q(0x148),this['thumbDragging']),this['button1']['classList']['toggle']('active',this['button1Active']),this['button2'][q(0x143)]['toggle']('active',this['button2Active']),void this['troughActive'];}[k(0x14b)](){const r=k,c=(0x1-this[r(0x111)]())*this['value'];this[r(0xfd)]?this[r(0xf1)]['style'][r(0x113)]=percent(c):this[r(0xf1)][r(0x100)]['left']=percent(c);}[k(0x136)](){const s=k;return this[s(0xfd)]?this[s(0x134)][s(0xf5)]:this['trough']['clientWidth'];}[k(0x13c)](c){const t=k,d=this['getThroughSize']()*(0x1-this[t(0x111)]());if(d<EPS)return 0x0;return c/d;}['setThumbSize'](c){const u=k,d=Math['max'](0x0,Math['min'](0x1,c));if(d==this['thumbSize'])return;this[u(0xfb)]=d,this['updateLayout']();}[k(0x14d)](){const v=k,c=this['getCssVar'](v(0xfe));if(!c)return this[v(0x114)];const d=decodePxValue(c);if(!d)return this[v(0x114)];return d;}[k(0x111)](){const w=k,c=this['getThumbMinSize'](),d=this[w(0x136)]();if(!d)return this[w(0xfb)];const e=Math[w(0x104)](0x1,c/d);return Math['max'](e,this[w(0xfb)]);}['setValue'](c){const x=k,d=Math['max'](0x0,Math[x(0x104)](0x1,c));if(d==this[x(0x121)])return![];return this['value']=isNaN(d)?0x0:d,this[x(0x14b)](),!![];}['setOrientation'](c){const y=k;if(c==this[y(0xfd)])return![];return this['orientation']=c,this[y(0x140)](),!![];}['getCssVar'](c){const d=getComputedStyle(this['root'])['getPropertyValue'](c);if(!d)return null;return d['trim']();}[k(0x146)](c){const z=k,d=new CustomEvent('scrollbar-input',{'detail':c});this[z(0xff)][z(0x12a)](d);}[k(0x11c)](c,d,e,g=0x0){const A=k;this[A(0x128)](),this[A(0x146)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}[k(0x128)](){const B=k;this[B(0x124)]&&(clearTimeout(this['eventTimeoutId']),this[B(0x124)]=undefined);}[k(0x141)](c,d){const C=k;this['stopPointerCapture'](),c[C(0x10c)](d),this[C(0xf7)]=c,this['pointerCaptureId']=d;}[k(0x14c)](){const D=k;if(!this[D(0x10e)])return;this['pointerCaptureElement']['releasePointerCapture'](this[D(0x10e)]),this[D(0x10e)]=undefined;}[k(0x132)]=c=>{const E=k;if(!this[E(0xf9)]||this['pointerCaptureId'])return;if(!c[E(0xf6)]||c[E(0x131)]||c['ctrlKey']||c[E(0x142)]||c[E(0x13b)]||c['button']!=0x0)return;const d=this[E(0x134)][E(0x11b)](),e=this['orientation']?c['clientY']-d[E(0x113)]:c['clientX']-d['left'],f=(this[E(0xfd)]?d[E(0x133)]:d[E(0x13d)])*(0x1-this['getEffectiveThumbSize']())*this[E(0x121)],g=e>f,h=g?E(0x126):E(0x12b);this[E(0x127)]=!![],c['preventDefault'](),this['startPointerCapture'](this[E(0x134)],c[E(0x138)]),this['fireEventRepeatedly'](h,this[E(0x10d)],this[E(0xf2)]);};['onButtonPointerDown']=(c,d)=>{const F=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c[F(0xf6)]||c['altKey']||c[F(0x12e)]||c[F(0x142)]||c['shiftKey']||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?F(0x10b):F(0x119);this['updateStyle'](),c['preventDefault']();const f=d==0x1?this['button1']:this[F(0xef)];this['startPointerCapture'](f,c['pointerId']),this['fireEventRepeatedly'](e,this['clickRepeatDelay'],this['clickRepeatInterval']);};['onThumbPointerDown']=c=>{const G=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c['ctrlKey']||c[G(0x142)]||c[G(0x13b)]||c['button']!=0x0)return;this['dragStartPos']=this['orientation']?c['clientY']:c['clientX'],this['dragStartValue']=this['value'],this[G(0x149)]=!![],this[G(0x139)](),c[G(0x118)](),this['startPointerCapture'](this['thumb'],c['pointerId']);};['onThumbPointerMove']=c=>{const H=k;if(!this[H(0xf9)])return;if(!c[H(0xf6)]||!this[H(0x149)])return;const d=this[H(0xfd)]?c[H(0x101)]:c[H(0xf4)],e=d-this['dragStartPos'],f=this['computeThumbMoveValue'](e),g=this['dragStartValue']+f;c['preventDefault'](),this[H(0x129)](g)&&this[H(0x146)]('value');};['onPointerUp']=c=>{const I=k;if(!this['isConnected'])return;if(!c[I(0xf6)])return;this['resetInteractionState'](),this[I(0x139)](),this[I(0x128)](),this['stopPointerCapture'](),c[I(0x118)]();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const J=k;super(),this[J(0xf3)]=new Widget(this);const c=parseFloat(this[J(0x106)]('value'));if(!isNaN(c))this[J(0xf3)][J(0x121)]=c;if(this[J(0x11d)]('value')){let d=this['value'];delete this['value'];if(!isNaN(d))this[J(0xf3)]['value']=d;}}[k(0x110)](){const K=k;this['widget'][K(0x110)]();}[k(0x116)](){this['widget']['disconnectedCallback']();}get[k(0xfb)](){return this['widget']['thumbSize'];}set[k(0xfb)](c){const L=k;this[L(0xf3)]['setThumbSize'](c);}get[k(0x121)](){const M=k;return this[M(0xf3)]['value'];}set[k(0x121)](c){const N=k;this[N(0xf3)][N(0x129)](c);}get['orientation'](){const O=k;return formatOrientation(this['widget'][O(0xfd)]);}set['orientation'](c){const P=k;this['widget']['setOrientation'](decodeOrientation(c))&&this[P(0xfa)]('orientation',this['orientation']);}get['orientationBoolean'](){const Q=k;return this[Q(0xf3)][Q(0xfd)];}static get[k(0x123)](){return['orientation'];}[k(0x145)](c,d,e){const R=k;switch(c){case R(0xfd):{e&&this['widget']['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize='var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))',buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function formatOrientation(c){return c?'vertical':'horizontal';}function decodeOrientation(c){const S=k;switch(c){case'vertical':return!![];case S(0x10a):return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){const T=k;return(c*0x64)[T(0x135)](0x3)+'%';}function decodePxValue(c){const U=k;if(!c||!c[U(0x12f)]('px'))return undefined;return Number(c['substring'](0x0,c['length']-0x2));}function b(c,d){c=c-0xef;const e=a();let f=e[c];return f;}customElements[k(0x102)](k(0xf0),PlainScrollbar);