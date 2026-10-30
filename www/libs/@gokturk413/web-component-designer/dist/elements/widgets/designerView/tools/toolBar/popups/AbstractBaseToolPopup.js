const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1f8))/0x1+parseInt(h(0x1f5))/0x2*(-parseInt(h(0x1ff))/0x3)+parseInt(h(0x1f4))/0x4+-parseInt(h(0x1f2))/0x5+-parseInt(h(0x1f3))/0x6+-parseInt(h(0x1f7))/0x7+parseInt(h(0x1fa))/0x8*(parseInt(h(0x1fb))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x75ab3));function a(){const k=['getRootNode','host','1514454dSzlye','style','3377230yXidIZ','5434734DVpYoX','1555320qewuCh','2RiWxXP','setAttribute','1257865IRXxzM','953834kNjRWY','commandParameter','8833928aETrwZ','27mtgjPK','title'];a=function(){return k;};return a();}function b(c,d){c=c-0x1f1;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static [i(0x1f1)]=css`
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
      }`;constructor(){const j=i;super();for(let c of[...this['shadowRoot']['querySelectorAll']('button.tool')]){c[j(0x1f6)]('aria-label',c[j(0x1fc)]),c['onclick']=()=>this[j(0x1fd)]()[j(0x1fe)]['setTool'](c['dataset'][j(0x1f9)]);}}}