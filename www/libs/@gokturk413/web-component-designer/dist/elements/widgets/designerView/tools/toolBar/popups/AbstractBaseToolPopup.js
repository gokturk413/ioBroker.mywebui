function b(c,d){c=c-0xf2;const e=a();let f=e[c];return f;}const i=b;function a(){const k=['508asHdbp','dataset','598335eJIvci','78GrOoja','style','14863504odMqAm','button.tool','host','54980ivupZj','24GdNTJZ','22741246iRjbVJ','9CtDzzX','116764dxfZAC','17526190oZvxTb','13zggywM','onclick','shadowRoot','261681sbMddq'];a=function(){return k;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf6))/0x1*(parseInt(h(0xf4))/0x2)+-parseInt(h(0xfc))/0x3+-parseInt(h(0xfa))/0x4*(-parseInt(h(0x102))/0x5)+parseInt(h(0xfd))/0x6*(-parseInt(h(0xf9))/0x7)+parseInt(h(0xff))/0x8+parseInt(h(0xf3))/0x9*(parseInt(h(0xf5))/0xa)+-parseInt(h(0xf2))/0xb*(parseInt(h(0x103))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe6e9b));import{BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';export class AbstractBaseToolPopup extends BaseCustomWebComponentConstructorAppend{static [i(0xfe)]=css`
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
      }`;constructor(){const j=i;super();for(let c of[...this[j(0xf8)]['querySelectorAll'](j(0x100))]){c['setAttribute']('aria-label',c['title']),c[j(0xf7)]=()=>this['getRootNode']()[j(0x101)]['setTool'](c[j(0xfb)]['commandParameter']);}}}