function a(){const k=['shadowRoot','style','60184apaqoB','aria-label','setAttribute','onclick','dataset','4401680OZNGLH','171qBxWZE','98jNRFJH','98778KfBrrC','getRootNode','424884uCjjWX','120nVKlnj','2vqsfhB','9vtQYgg','1063255qutyyu','180726GsZHOO','222486EtXTBa'];a=function(){return k;};return a();}const i=b;function b(c,d){c=c-0x97;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x9f))/0x1*(-parseInt(h(0x9c))/0x2)+parseInt(h(0x9d))/0x3*(-parseInt(h(0x9a))/0x4)+-parseInt(h(0x9e))/0x5+-parseInt(h(0x98))/0x6*(-parseInt(h(0x97))/0x7)+parseInt(h(0xa3))/0x8*(parseInt(h(0xa9))/0x9)+parseInt(h(0xa8))/0xa+parseInt(h(0xa0))/0xb*(-parseInt(h(0x9b))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3fa83));import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static [i(0xa2)]=css`
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
      }`;constructor(){const j=i;super();for(let c of[...this[j(0xa1)]['querySelectorAll']('button.tool')]){c[j(0xa5)](j(0xa4),c['title']),c[j(0xa6)]=()=>this[j(0x99)]()['host']['setTool'](c[j(0xa7)]['commandParameter']);}}}