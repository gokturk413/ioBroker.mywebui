function a(){const r=['6FLtWtT','aria-label','10346RrxqjS','aria-pressed','host','showPopup','132gFHgip','2276zpexip','57608EZdsrR','setActiveTool','clickOverlay','template','src','16HXduFC','node-projects-designer-toolbar-button','9772340VghwqY','style','div','564915egGtxF','1359WUGBOg','define','tools','480649dbwkxx','1179qCSjYJ','detail','setAttribute','_div','_img','getRootNode','onpointerup','11UmCzZg','2404542QtlgLM','showTool','Transform','setTool','currentToolOnButton','popup','_longPress'];a=function(){return r;};return a();}const i=b;function b(c,d){c=c-0x136;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x143))/0x1*(-parseInt(h(0x14e))/0x2)+parseInt(h(0x154))/0x3*(-parseInt(h(0x148))/0x4)+-parseInt(h(0x153))/0x5+-parseInt(h(0x141))/0x6*(-parseInt(h(0x13a))/0x7)+parseInt(h(0x149))/0x8*(-parseInt(h(0x158))/0x9)+parseInt(h(0x150))/0xa*(parseInt(h(0x139))/0xb)+-parseInt(h(0x147))/0xc*(-parseInt(h(0x157))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7920c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x151)]=css`
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
    `;static [i(0x14c)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];['popup'];[i(0x13e)];['_img'];['_div'];[i(0x140)];constructor(c,d){const j=i;super(),this[j(0x156)]=d,this[j(0x136)]=this['_getDomElement']('img'),this['_div']=this['_getDomElement'](j(0x152)),this['_div']['onclick']=f=>{const k=j;if(f[k(0x159)]===0x0){const g=this[k(0x137)]()[k(0x145)];if(this['currentToolOnButton'])g['setTool'](this['currentToolOnButton']);else{if(this['popup'])g[k(0x146)](this);}}},this[j(0x15b)]['onpointerdown']=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()['host'][l(0x13d)](this['currentToolOnButton']),setTimeout(()=>{const m=l;c[m(0x14b)]['focus']();},0x32),this[l(0x13f)]&&(this['_longPress']=setTimeout(()=>{const n=l;this['_longPress']=null,this['getRootNode']()['host'][n(0x146)](this);},0xc8));else{if(this[l(0x13f)])this['getRootNode']()[l(0x145)][l(0x146)](this);}},this['_div'][j(0x138)]=()=>{const o=j;this[o(0x140)]&&(clearTimeout(this[o(0x140)]),this[o(0x140)]=null);},this['showTool'](Object['getOwnPropertyNames'](d)[0x0]);}['showTool'](c){const p=i,d=this['tools'][c];d&&(this[p(0x15b)]['title']=c||'Transform',this['_div'][p(0x15a)](p(0x142),c||p(0x13c)),this[p(0x136)][p(0x14d)]=d['icon'],this[p(0x13e)]=c);}[i(0x14a)](c){const q=i;this[q(0x13b)](c);const d=this['tools'][c];this['_div']['setAttribute'](q(0x144),String(!!d));}}customElements[i(0x155)](i(0x14f),DesignerToolbarButton);