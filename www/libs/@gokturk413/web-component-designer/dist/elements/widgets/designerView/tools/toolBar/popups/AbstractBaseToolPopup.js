const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x124))/0x1*(-parseInt(h(0x11c))/0x2)+parseInt(h(0x11b))/0x3*(-parseInt(h(0x119))/0x4)+parseInt(h(0x121))/0x5*(parseInt(h(0x117))/0x6)+-parseInt(h(0x11e))/0x7*(parseInt(h(0x127))/0x8)+-parseInt(h(0x118))/0x9*(-parseInt(h(0x129))/0xa)+parseInt(h(0x11d))/0xb*(-parseInt(h(0x128))/0xc)+-parseInt(h(0x11a))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xee89f));function b(c,d){c=c-0x117;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static [i(0x120)]=css`
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
      }`;constructor(){const j=i;super();for(let c of[...this['shadowRoot']['querySelectorAll'](j(0x126))]){c['setAttribute']('aria-label',c['title']),c[j(0x11f)]=()=>this['getRootNode']()[j(0x125)][j(0x122)](c['dataset'][j(0x123)]);}}}function a(){const k=['11595936pXDXGJ','3182564iPffsn','onclick','style','5WCddWa','setTool','commandParameter','653sCVUPE','host','button.tool','16jeZflA','12GDTNaA','17609930gtkKBg','10407084mqRBQE','9XMupGh','100888nGMcaV','9147047nvJPMc','189LUdLKU','5322tOjzDO'];a=function(){return k;};return a();}