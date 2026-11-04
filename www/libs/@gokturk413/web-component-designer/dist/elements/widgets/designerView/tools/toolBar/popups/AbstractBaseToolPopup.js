(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x89))/0x1*(-parseInt(h(0x86))/0x2)+parseInt(h(0x85))/0x3+parseInt(h(0x88))/0x4*(parseInt(h(0x84))/0x5)+parseInt(h(0x87))/0x6+-parseInt(h(0x80))/0x7+-parseInt(h(0x7f))/0x8+-parseInt(h(0x81))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x69f6a));function b(c,d){c=c-0x7f;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const j=['15fSEpQG','1608345sOQVSZ','8HspGgZ','3548052YVZshG','615964EwByAW','8314OIvEnQ','setAttribute','4169112GhPkIj','3433899EpHpfo','1592676udmSFF','onclick','setTool'];a=function(){return j;};return a();}export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
      }`;constructor(){const i=b;super();for(let c of[...this['shadowRoot']['querySelectorAll']('button.tool')]){c[i(0x8a)]('aria-label',c['title']),c[i(0x82)]=()=>this['getRootNode']()['host'][i(0x83)](c['dataset']['commandParameter']);}}}