function b(c,d){c=c-0x11e;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x128))/0x1*(parseInt(h(0x129))/0x2)+-parseInt(h(0x124))/0x3+parseInt(h(0x122))/0x4*(-parseInt(h(0x12a))/0x5)+-parseInt(h(0x12d))/0x6*(parseInt(h(0x12b))/0x7)+-parseInt(h(0x12e))/0x8+-parseInt(h(0x11f))/0x9+-parseInt(h(0x127))/0xa*(-parseInt(h(0x120))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x71a93));function a(){const k=['859161oMaZdE','commandParameter','setAttribute','70jrnckM','2575sVuOmc','282kJaDAc','5qyMwLR','1748236TjDaaE','shadowRoot','6XaMRcw','5556632bOmVbO','host','1390923Hadvdi','3693470CHhiOY','getRootNode','545996SRYKuZ','style'];a=function(){return k;};return a();}import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static [i(0x123)]=css`
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
      }`;constructor(){const j=i;super();for(let c of[...this[j(0x12c)]['querySelectorAll']('button.tool')]){c[j(0x126)]('aria-label',c['title']),c['onclick']=()=>this[j(0x121)]()[j(0x11e)]['setTool'](c['dataset'][j(0x125)]);}}}