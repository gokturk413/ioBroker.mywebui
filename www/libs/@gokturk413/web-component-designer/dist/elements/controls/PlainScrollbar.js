const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x18b))/0x1*(parseInt(j(0x1a1))/0x2)+-parseInt(j(0x198))/0x3+parseInt(j(0x18a))/0x4*(-parseInt(j(0x1ac))/0x5)+-parseInt(j(0x168))/0x6+-parseInt(j(0x193))/0x7+parseInt(j(0x15b))/0x8*(-parseInt(j(0x1b3))/0x9)+parseInt(j(0x17a))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcf102));import{css,html}from'@node-projects/base-custom-webcomponent';class Widget{['host'];['root'];['trough'];['button1'];[k(0x15a)];['thumb'];[k(0x16a)]=![];[k(0x192)]=0.3;[k(0x18e)]=0x0;[k(0x1b2)]=![];[k(0x19a)]=0x12c;['clickRepeatInterval']=0x64;[k(0x18d)]=0x19;['dragStartPos'];[k(0x17f)];['eventTimeoutId'];[k(0x161)];[k(0x1b6)];['thumbDragging'];[k(0x1ad)];['button2Active'];['troughActive'];constructor(c){const l=k;this['host']=c,c['attachShadow']({'mode':l(0x1a8)});const d=c['shadowRoot'];d[l(0x16e)](scrollbarHtmlTemplate['content']['cloneNode'](!![])),d['adoptedStyleSheets']=[scrollbarStyle],this[l(0x165)]=d['querySelector'](l(0x176)),this['trough']=d[l(0x1a6)](l(0x19f)),this[l(0x15f)]=d[l(0x1a6)](l(0x183)),this['button2']=d['querySelector'](l(0x179)),this[l(0x17d)]=d['querySelector'](l(0x1a9)),this[l(0x199)]['addEventListener']('pointerdown',this['onTroughPointerDown']),this['trough']['addEventListener']('pointerup',this[l(0x16b)]),this[l(0x199)][l(0x19b)](l(0x191),this[l(0x16b)]),this['button1']['addEventListener'](l(0x197),e=>this[l(0x160)](e,0x1)),this['button1']['addEventListener']('pointerup',this['onPointerUp']),this['button1'][l(0x19b)](l(0x191),this['onPointerUp']),this[l(0x15f)][l(0x19b)](l(0x1a0),f=>f[l(0x180)]()),this[l(0x15a)][l(0x19b)](l(0x197),e=>this[l(0x160)](e,0x2)),this[l(0x15a)]['addEventListener']('pointerup',this['onPointerUp']),this[l(0x15a)]['addEventListener']('pointercancel',this[l(0x16b)]),this['button2']['addEventListener'](l(0x1a0),f=>f[l(0x180)]()),this['thumb']['addEventListener']('pointerdown',this['onThumbPointerDown']),this[l(0x17d)]['addEventListener'](l(0x185),this[l(0x16b)]),this[l(0x17d)]['addEventListener']('pointercancel',this['onPointerUp']),this[l(0x17d)][l(0x19b)](l(0x1a4),this['onThumbPointerMove']),this[l(0x172)]();}[k(0x172)](){const m=k;this['thumbDragging']=![],this['button1Active']=![],this[m(0x1b0)]=![],this['troughActive']=![];}['connectedCallback'](){const n=k;this[n(0x16a)]=!![],this['resetInteractionState'](),this['updateLayout'](),this[n(0x166)]();}['disconnectedCallback'](){const o=k;this[o(0x16a)]=![],this[o(0x172)](),this[o(0x1b5)](),this[o(0x18c)]();}[k(0x184)](){const p=k;if(!this[p(0x16a)])return;this[p(0x165)]['classList'][p(0x1b1)]('horizontal',!this[p(0x1b2)]),this[p(0x165)][p(0x1ae)]['toggle'](p(0x169),this['orientation']),this[p(0x17d)][p(0x1a7)]['display']=this['thumbSize']==0x0?p(0x17c):'',this['thumb'][p(0x1a7)]['height']=this['orientation']?percent(this['getEffectiveThumbSize']()):'',this[p(0x17d)]['style']['width']=this['orientation']?'':percent(this[p(0x181)]()),this['thumb'][p(0x1a7)]['top']='',this[p(0x17d)][p(0x1a7)][p(0x173)]='',this[p(0x188)]();}['updateStyle'](){const q=k;if(!this['isConnected'])return;this['thumb']['classList']['toggle'](q(0x17e),this['thumbDragging']),this[q(0x15f)][q(0x1ae)][q(0x1b1)](q(0x17e),this['button1Active']),this[q(0x15a)][q(0x1ae)]['toggle'](q(0x17e),this[q(0x1b0)]),void this[q(0x1b4)];}['updateThumbPosition'](){const r=k,c=(0x1-this[r(0x181)]())*this[r(0x18e)];this['orientation']?this[r(0x17d)][r(0x1a7)]['top']=percent(c):this[r(0x17d)]['style']['left']=percent(c);}['getThroughSize'](){const s=k;return this['orientation']?this[s(0x199)]['clientHeight']:this[s(0x199)]['clientWidth'];}['computeThumbMoveValue'](c){const t=k,d=this['getThroughSize']()*(0x1-this[t(0x181)]());if(d<EPS)return 0x0;return c/d;}[k(0x16f)](c){const u=k,d=Math[u(0x157)](0x0,Math[u(0x163)](0x1,c));if(d==this['thumbSize'])return;this[u(0x192)]=d,this['updateLayout']();}['getThumbMinSize'](){const v=k,c=this[v(0x194)](v(0x178));if(!c)return this['defaultThumbMinSize'];const d=decodePxValue(c);if(!d)return this[v(0x18d)];return d;}[k(0x181)](){const w=k,c=this['getThumbMinSize'](),d=this[w(0x196)]();if(!d)return this[w(0x192)];const e=Math['min'](0x1,c/d);return Math['max'](e,this['thumbSize']);}['setValue'](c){const x=k,d=Math['max'](0x0,Math[x(0x163)](0x1,c));if(d==this[x(0x18e)])return![];return this['value']=isNaN(d)?0x0:d,this[x(0x188)](),!![];}[k(0x182)](c){const y=k;if(c==this[y(0x1b2)])return![];return this['orientation']=c,this[y(0x184)](),!![];}[k(0x194)](c){const z=k,d=getComputedStyle(this['root'])[z(0x16c)](c);if(!d)return null;return d[z(0x174)]();}['fireEvent'](c){const A=k,d=new CustomEvent('scrollbar-input',{'detail':c});this[A(0x19d)]['dispatchEvent'](d);}['fireEventRepeatedly'](c,d,e,g=0x0){const B=k;this[B(0x1b5)](),this[B(0x162)](c);const h=g==0x0?d:e,i=()=>this['fireEventRepeatedly'](c,d,e,g+0x1);this['eventTimeoutId']=setTimeout(i,h);}[k(0x1b5)](){const C=k;this['eventTimeoutId']&&(clearTimeout(this[C(0x15c)]),this[C(0x15c)]=undefined);}['startPointerCapture'](c,d){const D=k;this['stopPointerCapture'](),c[D(0x170)](d),this[D(0x1b6)]=c,this['pointerCaptureId']=d;}[k(0x18c)](){const E=k;if(!this[E(0x161)])return;this['pointerCaptureElement'][E(0x1aa)](this['pointerCaptureId']),this[E(0x161)]=undefined;}[k(0x16d)]=c=>{const F=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c[F(0x186)]||c['ctrlKey']||c[F(0x19c)]||c[F(0x164)]||c[F(0x187)]!=0x0)return;const d=this['trough'][F(0x18f)](),e=this[F(0x1b2)]?c['clientY']-d['top']:c['clientX']-d['left'],f=(this[F(0x1b2)]?d['height']:d[F(0x17b)])*(0x1-this[F(0x181)]())*this['value'],g=e>f,h=g?'incrementLarge':F(0x158);this[F(0x1b4)]=!![],c[F(0x180)](),this['startPointerCapture'](this[F(0x199)],c[F(0x175)]),this['fireEventRepeatedly'](h,this['clickRepeatDelay'],this[F(0x15d)]);};[k(0x160)]=(c,d)=>{const G=k;if(!this['isConnected']||this['pointerCaptureId'])return;if(!c['isPrimary']||c['altKey']||c[G(0x195)]||c['metaKey']||c['shiftKey']||c['button']!=0x0)return;switch(d){case 0x1:this['button1Active']=!![];break;case 0x2:this['button2Active']=!![];break;}const e=d==0x1?'decrementSmall':'incrementSmall';this[G(0x166)](),c['preventDefault']();const f=d==0x1?this['button1']:this[G(0x15a)];this[G(0x1ab)](f,c[G(0x175)]),this[G(0x177)](e,this[G(0x19a)],this['clickRepeatInterval']);};[k(0x15e)]=c=>{const H=k;if(!this[H(0x16a)]||this['pointerCaptureId'])return;if(!c[H(0x159)]||c['altKey']||c['ctrlKey']||c['metaKey']||c['shiftKey']||c[H(0x187)]!=0x0)return;this['dragStartPos']=this['orientation']?c['clientY']:c['clientX'],this['dragStartValue']=this['value'],this[H(0x167)]=!![],this['updateStyle'](),c[H(0x180)](),this['startPointerCapture'](this[H(0x17d)],c[H(0x175)]);};['onThumbPointerMove']=c=>{const I=k;if(!this[I(0x16a)])return;if(!c['isPrimary']||!this['thumbDragging'])return;const d=this['orientation']?c[I(0x171)]:c[I(0x1a2)],e=d-this[I(0x156)],f=this[I(0x19e)](e),g=this['dragStartValue']+f;c['preventDefault'](),this['setValue'](g)&&this[I(0x162)]('value');};['onPointerUp']=c=>{const J=k;if(!this[J(0x16a)])return;if(!c[J(0x159)])return;this[J(0x172)](),this['updateStyle'](),this['stopEventRepetition'](),this['stopPointerCapture'](),c['preventDefault']();};}export class PlainScrollbar extends HTMLElement{['widget'];constructor(){const K=k;super(),this['widget']=new Widget(this);const c=parseFloat(this['getAttribute'](K(0x18e)));if(!isNaN(c))this['widget']['value']=c;if(this[K(0x1a3)](K(0x18e))){let d=this['value'];delete this['value'];if(!isNaN(d))this[K(0x1a5)][K(0x18e)]=d;}}['connectedCallback'](){this['widget']['connectedCallback']();}['disconnectedCallback'](){const L=k;this[L(0x1a5)]['disconnectedCallback']();}get['thumbSize'](){const M=k;return this['widget'][M(0x192)];}set['thumbSize'](c){const N=k;this[N(0x1a5)][N(0x16f)](c);}get[k(0x18e)](){return this['widget']['value'];}set['value'](c){this['widget']['setValue'](c);}get['orientation'](){const O=k;return formatOrientation(this['widget'][O(0x1b2)]);}set['orientation'](c){const P=k;this['widget']['setOrientation'](decodeOrientation(c))&&this['setAttribute'](P(0x1b2),this[P(0x1b2)]);}get['orientationBoolean'](){const Q=k;return this[Q(0x1a5)]['orientation'];}static get['observedAttributes'](){const R=k;return[R(0x1b2)];}['attributeChangedCallback'](c,d,e){switch(c){case'orientation':{e&&this['widget']['setOrientation'](decodeOrientation(e));break;}}}}const EPS=1e-9,buttonSize=k(0x1af),buttonPath='<path\x20d=\x22M\x20-60\x2030\x20h\x20120\x20L\x200\x20-30\x20z\x22\x20stroke-width=\x220\x22/>',scrollbarStyle=css`
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
    `;function b(c,d){c=c-0x156;const e=a();let f=e[c];return f;}function formatOrientation(c){const S=k;return c?S(0x169):S(0x190);}function decodeOrientation(c){const T=k;switch(c){case T(0x169):return!![];case'horizontal':return![];default:throw new Error('Invalid\x20orientation\x20value\x20\x22'+c+'\x22.');}}function percent(c){return(c*0x64)['toFixed'](0x3)+'%';}function a(){const V=['pointercancel','thumbSize','4522714GLspYj','getCssVar','ctrlKey','getThroughSize','pointerdown','4686300NQlXYN','trough','clickRepeatDelay','addEventListener','metaKey','host','computeThumbMoveValue','#trough','contextmenu','2881448gWDpgT','clientX','hasOwnProperty','pointermove','widget','querySelector','style','open','#thumb','releasePointerCapture','startPointerCapture','355POMtyg','button1Active','classList','var(--wcd-plain-scrollbar-button-size,\x20var(--plain-scrollbar-button-size,\x2013px))','button2Active','toggle','orientation','22527dJQUmO','troughActive','stopEventRepetition','pointerCaptureElement','dragStartPos','max','decrementLarge','isPrimary','button2','5088bYQfoN','eventTimeoutId','clickRepeatInterval','onThumbPointerDown','button1','onButtonPointerDown','pointerCaptureId','fireEvent','min','shiftKey','root','updateStyle','thumbDragging','4149168qEeiZo','vertical','isConnected','onPointerUp','getPropertyValue','onTroughPointerDown','appendChild','setThumbSize','setPointerCapture','clientY','resetInteractionState','left','trim','pointerId','#root','fireEventRepeatedly','--plain-scrollbar-thumb-min-size','#button2','47716340IoDonS','width','none','thumb','active','dragStartValue','preventDefault','getEffectiveThumbSize','setOrientation','#button1','updateLayout','pointerup','altKey','button','updateThumbPosition','substring','49160ohtCdN','1zSdSAp','stopPointerCapture','defaultThumbMinSize','value','getBoundingClientRect','horizontal'];a=function(){return V;};return a();}function decodePxValue(c){const U=k;if(!c||!c['endsWith']('px'))return undefined;return Number(c[U(0x189)](0x0,c['length']-0x2));}customElements['define']('node-projects-plain-scrollbar',PlainScrollbar);