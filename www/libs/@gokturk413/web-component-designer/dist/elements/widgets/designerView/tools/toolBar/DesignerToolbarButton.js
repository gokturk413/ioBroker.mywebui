const i=b;function a(){const r=['42323wyUunO','aria-pressed','template','20kMHZrs','detail','style','70jmAcXp','152178Wgmzch','onpointerup','setActiveTool','div','tools','showTool','_div','getRootNode','focus','5366712MEtJJQ','showPopup','_longPress','clickOverlay','setAttribute','popup','_img','14uLhDBO','icon','1185793szBHAE','title','onclick','Transform','585zzlFYb','_getDomElement','31444872DREztN','setTool','node-projects-designer-toolbar-button','85792SnNBnU','543653nwEIjD','host','5UwAMmZ','currentToolOnButton'];a=function(){return r;};return a();}function b(c,d){c=c-0x109;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x126))/0x1*(parseInt(h(0x116))/0x2)+parseInt(h(0x12d))/0x3*(parseInt(h(0x129))/0x4)+parseInt(h(0x124))/0x5*(-parseInt(h(0x10f))/0x6)+-parseInt(h(0x118))/0x7+parseInt(h(0x121))/0x8*(-parseInt(h(0x11c))/0x9)+parseInt(h(0x12c))/0xa*(-parseInt(h(0x122))/0xb)+parseInt(h(0x11e))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x72f77));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x12b)]=css`
    :host {
      display: block;
      flex: 0 0 24px;
      width: 24px;
      height: 24px;
    }

    button {
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      padding: 4px;
      border: 0;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      color: inherit;
      cursor: pointer;
    }

    button[aria-pressed="true"] {
      background-color: var(--wcd-designer-view-tool-selected-background, deepskyblue);
    }

    button:hover {
      background-color: var(--wcd-designer-view-tool-hover-background, rgba(164,206,249,.6));
    }

    button:focus-visible {
      outline: 2px solid var(--wcd-color-focus, #47977c);
      outline-offset: -2px;
    }

    img {
      width: 16px;
      height: 16px;
      pointer-events: none;
      -webkit-user-drag: none;
      filter: var(--wcd-designer-view-toolbar-icon-filter, none);
    }
    `;static [i(0x128)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0x114)];['currentToolOnButton'];['_img'];['_div'];[i(0x111)];constructor(c,d){const j=i;super(),this[j(0x10a)]=d,this['_img']=this[j(0x11d)]('img'),this[j(0x10c)]=this[j(0x11d)](j(0x109)),this['_div'][j(0x11a)]=f=>{const k=j;if(f[k(0x12a)]===0x0){const g=this[k(0x10d)]()[k(0x123)];if(this['currentToolOnButton'])g[k(0x11f)](this['currentToolOnButton']);else{if(this[k(0x114)])g['showPopup'](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this[l(0x125)])this['getRootNode']()[l(0x123)][l(0x11f)](this[l(0x125)]),setTimeout(()=>{const m=l;c[m(0x112)][m(0x10e)]();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{const n=l;this['_longPress']=null,this['getRootNode']()['host'][n(0x110)](this);},0xc8));else{if(this[l(0x114)])this[l(0x10d)]()['host']['showPopup'](this);}},this['_div'][j(0x12e)]=()=>{const o=j;this[o(0x111)]&&(clearTimeout(this[o(0x111)]),this[o(0x111)]=null);},this[j(0x10b)](Object['getOwnPropertyNames'](d)[0x0]);}[i(0x10b)](c){const p=i,d=this['tools'][c];d&&(this['_div'][p(0x119)]=c||p(0x11b),this[p(0x10c)][p(0x113)]('aria-label',c||'Transform'),this[p(0x115)]['src']=d[p(0x117)],this['currentToolOnButton']=c);}[i(0x12f)](c){const q=i;this[q(0x10b)](c);const d=this[q(0x10a)][c];this[q(0x10c)]['setAttribute'](q(0x127),String(!!d));}}customElements['define'](i(0x120),DesignerToolbarButton);