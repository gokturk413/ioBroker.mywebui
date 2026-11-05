const i=b;function b(c,d){c=c-0x183;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x189))/0x1*(-parseInt(h(0x19f))/0x2)+parseInt(h(0x194))/0x3+-parseInt(h(0x18e))/0x4*(parseInt(h(0x186))/0x5)+-parseInt(h(0x188))/0x6*(parseInt(h(0x183))/0x7)+parseInt(h(0x195))/0x8*(parseInt(h(0x18d))/0x9)+parseInt(h(0x196))/0xa*(parseInt(h(0x199))/0xb)+parseInt(h(0x1a1))/0xc*(-parseInt(h(0x187))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2d81e));function a(){const o=['setProperty','1880747AwWKIL','clientHeight','addEventListener','splitter','style','--split','26ZxEgfl','node-projects-simple-split-view','36tzrAjA','77smiRtz','releasePointerCapture','movementX','10XYsCzw','1599871Wdbavo','125442DVIbZo','7186oUEbNp','clientWidth','_orientation','movementY','53523ipKIDy','572536jXjmMP','vertical','setAttribute','pointerdown','orientation','horizontal','821115csjozi','488xXufRD','20VzOhlI','setPointerCapture'];a=function(){return o;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
    :host {
      display: block;
    }  
    #split {
      position: relative;
      height: 100%;
      width: 100%;
      grid-template-rows: calc(var(--split) * 1%) 5px calc(((100 - var(--split)) * 1%) - 5px);
      grid-template-columns: 100%;
      display: grid;
      align-items: center;
    }
    :host([orientation="horizontal"]) #split {
      grid-template-rows: 100%;
      grid-template-columns: calc(var(--split) * 1%) 5px calc(((100 - var(--split)) * 1%) - 5px);
    }
    #splitter {
      user-select: none;
      -webkit-user-select: none;
    }
    :host([orientation="horizontal"]) > div > #splitter {
      cursor: ew-resize;
      width: 5px;
      height: 100%;
    }
    :host([orientation="vertical"]) > div > #splitter {
      cursor: ns-resize;
      height: 5px;
      width: 100%;
    }`;static ['template']=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0x18b)]=i(0x18f);get['orientation'](){return this['_orientation'];}set[i(0x192)](c){const j=i;this['_orientation']=c,this['setAttribute'](j(0x192),c);}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const k=i;this['_parseAttributesToProperties'](),this[k(0x190)]('orientation',this[k(0x192)]);const c=this['_getDomElement']('split'),d=this['_getDomElement'](k(0x19c));let e=null;d[k(0x19b)](k(0x191),f=>{const l=k;d[l(0x197)](f['pointerId']),e=!![];}),d['addEventListener']('pointerup',f=>{const m=k;d[m(0x184)](f['pointerId']),e=null;}),d[k(0x19b)]('pointermove',f=>{const n=k;if(e!==null){let g=parseFloat(c[n(0x19d)]['getPropertyValue']('--split'));if(this[n(0x192)]===n(0x193))g+=f[n(0x185)]*0x64/c[n(0x18a)];else g+=f[n(0x18c)]*0x64/c[n(0x19a)];if(!isNaN(g))c['style'][n(0x198)](n(0x19e),g);}});}}customElements['define'](i(0x1a0),SimpleSplitView);