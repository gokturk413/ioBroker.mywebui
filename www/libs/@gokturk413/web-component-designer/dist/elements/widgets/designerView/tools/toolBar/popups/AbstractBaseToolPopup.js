(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x103))/0x1+-parseInt(h(0x107))/0x2*(parseInt(h(0xfa))/0x3)+-parseInt(h(0xf9))/0x4+-parseInt(h(0x108))/0x5*(-parseInt(h(0x105))/0x6)+-parseInt(h(0xff))/0x7+parseInt(h(0x104))/0x8*(-parseInt(h(0x106))/0x9)+parseInt(h(0xfb))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb6d97));function b(c,d){c=c-0xf9;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
      }`;constructor(){const i=b;super();for(let c of[...this[i(0x100)]['querySelectorAll']('button.tool')]){c[i(0xfc)]('aria-label',c[i(0xfe)]),c['onclick']=()=>this[i(0x109)]()[i(0x101)][i(0x102)](c[i(0xfd)]['commandParameter']);}}}function a(){const j=['setTool','822630zJvDLf','216cbQgIA','12SQLVvJ','235557qIRYsL','107306iHaQyN','833380LPXJbG','getRootNode','46016SrwKbS','27jXrvkw','20384580eKQQmX','setAttribute','dataset','title','8711059Xqqybs','shadowRoot','host'];a=function(){return j;};return a();}