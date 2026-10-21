function b(c,d){c=c-0x1bd;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c1))/0x1*(-parseInt(h(0x1c4))/0x2)+parseInt(h(0x1cc))/0x3+-parseInt(h(0x1c2))/0x4+parseInt(h(0x1c8))/0x5+parseInt(h(0x1ca))/0x6*(-parseInt(h(0x1c9))/0x7)+parseInt(h(0x1c7))/0x8+parseInt(h(0x1c6))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x61a17));import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static [i(0x1bd)]=css`
      :host {
          display: block;
          font: 12px system-ui, sans-serif;
          color: var(--wcd-designer-view-statusbar-color, #354348);
      }
      .container {
          width: max-content;
          min-width: 112px;
          box-sizing: border-box;
          background: var(--wcd-tool-popup-background, var(--wcd-designer-view-statusbar-background, #787f82));
          border: 1px solid var(--wcd-tool-popup-border-color, var(--wcd-color-border, #596c7a));
          border-radius: 6px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, .25);
      }
      header {
          padding: 6px 8px;
          border-radius: 5px 5px 0 0;
          border-bottom: 1px solid var(--wcd-tool-popup-border-color, var(--wcd-color-border, #596c7a));
          background: var(--wcd-tool-popup-title-background, rgba(255, 255, 255, .08));
      }
      h2 {
          margin: 0;
          font: 600 11px/16px system-ui, sans-serif;
      }
      main {
          padding: 8px;
      }
      .tool {
          box-sizing: border-box;
          height: 24px;
          width: 24px;
          padding: 4px;
          border: 0;
          border-radius: 4px;
          background: transparent;
          color: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
      }
      .tool::before {
          content: '';
          width: 16px;
          height: 16px;
          background: currentColor;
          mask: var(--tool-icon) center / contain no-repeat;
      }
      .tool:hover {
          background: var(--wcd-designer-view-tool-hover-background, rgba(164,206,249,.6));
      }
      .tool:focus-visible {
          outline: 2px solid var(--wcd-color-focus, #47977c);
          outline-offset: -2px;
      }
      .tools {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
      }`;constructor(){const j=i;super();for(let c of[...this['shadowRoot'][j(0x1c0)](j(0x1c3))]){c['setAttribute']('aria-label',c[j(0x1be)]),c[j(0x1cb)]=()=>this[j(0x1c5)]()['host']['setTool'](c['dataset'][j(0x1bf)]);}}}function a(){const k=['63vKswBK','182718AIrAsE','onclick','2074125fhwIgN','style','title','commandParameter','querySelectorAll','396373iubuJX','1766796rkljHr','button.tool','2iwUvcU','getRootNode','1474371BlXfUa','196240GAVuxE','3161600IpUbUP'];a=function(){return k;};return a();}