const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x169))/0x1*(-parseInt(h(0x153))/0x2)+parseInt(h(0x152))/0x3*(parseInt(h(0x15b))/0x4)+-parseInt(h(0x168))/0x5*(parseInt(h(0x15e))/0x6)+parseInt(h(0x160))/0x7*(parseInt(h(0x15c))/0x8)+parseInt(h(0x155))/0x9+parseInt(h(0x15d))/0xa+-parseInt(h(0x164))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3060b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0x161)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0x151)]=i(0x167);get[i(0x16a)](){return this['_orientation'];}set['orientation'](c){const j=i;this[j(0x151)]=c,this[j(0x165)]('orientation',c);}constructor(){const k=i;super(),this[k(0x157)]();}['ready'](){const l=i;this['_parseAttributesToProperties'](),this['setAttribute'](l(0x16a),this['orientation']);const c=this[l(0x162)]('split'),d=this['_getDomElement'](l(0x158));let e=null;d['addEventListener'](l(0x156),f=>{d['setPointerCapture'](f['pointerId']),e=!![];}),d['addEventListener'](l(0x163),f=>{const m=l;d[m(0x150)](f[m(0x15a)]),e=null;}),d[l(0x154)](l(0x166),f=>{const n=l;if(e!==null){let g=parseFloat(c['style']['getPropertyValue']('--split'));if(this['orientation']==='horizontal')g+=f[n(0x15f)]*0x64/c['clientWidth'];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c['style'][n(0x159)]('--split',g);}});}}function b(c,d){c=c-0x150;const e=a();let f=e[c];return f;}customElements['define']('node-projects-simple-split-view',SimpleSplitView);function a(){const o=['38116hGDrco','addEventListener','474165Slxgdg','pointerdown','_restoreCachedInititalValues','splitter','setProperty','pointerId','172076QXsXkQ','104YQcTww','976070JyscGX','18hThNxj','movementX','67781ysYTmH','template','_getDomElement','pointerup','4438577DJcnXI','setAttribute','pointermove','vertical','348735HdsYRH','10YXCDsW','orientation','releasePointerCapture','_orientation','24hxYjeD'];a=function(){return o;};return a();}