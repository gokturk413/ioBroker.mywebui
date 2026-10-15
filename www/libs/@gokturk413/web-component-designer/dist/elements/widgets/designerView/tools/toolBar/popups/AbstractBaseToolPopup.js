(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x12c))/0x1+-parseInt(h(0x13d))/0x2*(-parseInt(h(0x13a))/0x3)+parseInt(h(0x130))/0x4*(parseInt(h(0x13c))/0x5)+parseInt(h(0x137))/0x6+parseInt(h(0x138))/0x7*(parseInt(h(0x139))/0x8)+-parseInt(h(0x132))/0x9*(-parseInt(h(0x135))/0xa)+-parseInt(h(0x12f))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa679d));function b(c,d){c=c-0x12c;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const j=['button.tool','38088897wRVcqp','4298804rbiUGg','setTool','10472049ZTouvC','setAttribute','title','10fZFwGg','commandParameter','1609110wqTjpn','177373fIOdjy','136gVzFOg','51501XIkEHF','querySelectorAll','5iHOxmP','10aFMHjN','1121467YpDeFj','getRootNode'];a=function(){return j;};return a();}export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
      }`;constructor(){const i=b;super();for(let c of[...this['shadowRoot'][i(0x13b)](i(0x12e))]){c[i(0x133)]('aria-label',c[i(0x134)]),c['onclick']=()=>this[i(0x12d)]()['host'][i(0x131)](c['dataset'][i(0x136)]);}}}