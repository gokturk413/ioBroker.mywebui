function b(c,d){c=c-0xbe;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xc0))/0x1+-parseInt(h(0xbf))/0x2*(-parseInt(h(0xc7))/0x3)+parseInt(h(0xc4))/0x4+parseInt(h(0xcb))/0x5*(parseInt(h(0xc2))/0x6)+parseInt(h(0xcc))/0x7+-parseInt(h(0xc3))/0x8*(-parseInt(h(0xbe))/0x9)+-parseInt(h(0xc1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x35fa8));import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static [i(0xca)]=css`
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
      }`;constructor(){const j=i;super();for(let c of[...this[j(0xc8)]['querySelectorAll']('button.tool')]){c['setAttribute']('aria-label',c[j(0xc5)]),c['onclick']=()=>this[j(0xc9)]()[j(0xc6)]['setTool'](c['dataset']['commandParameter']);}}}function a(){const k=['84884XdGhzo','11961150xBwvLh','504iGxWfC','1208uutRFS','1738516yjRByl','title','host','72SAoGXH','shadowRoot','getRootNode','style','2920NcWAaA','2688721hwsmQd','2061AvlnEC','35830gQUULQ'];a=function(){return k;};return a();}