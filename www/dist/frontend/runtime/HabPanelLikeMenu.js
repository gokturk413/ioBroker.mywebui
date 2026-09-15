const i=b;function a(){const n=['style','200px','screens','_restoreCachedInititalValues','49VNYAHq','_expanded','417402AQdUgk','ready','746877dAVQik','expanded','4199035bBhocC','10794420ZWydQz','--menu-offset','1063432TQJqCA','_parseAttributesToProperties','setProperty','prototype','160376WOJXMY','template','switchMenu','262368iTOoFd','8zSiTGH','72twucFf'];a=function(){return n;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x15c))/0x1+-parseInt(h(0x15d))/0x2*(parseInt(h(0x167))/0x3)+-parseInt(h(0x159))/0x4+parseInt(h(0x169))/0x5+-parseInt(h(0x165))/0x6*(-parseInt(h(0x163))/0x7)+parseInt(h(0x16c))/0x8*(-parseInt(h(0x15e))/0x9)+parseInt(h(0x16a))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8af88));import{__decorate}from'tslib';import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x158;const e=a();let f=e[c];return f;}let HabPanelLikeMenu=class HabPanelLikeMenu extends BaseCustomWebComponentConstructorAppend{static [i(0x15f)]=css`
    :host {
        height: 100%;
        position: relative;
        display: block;
        overflow: hidden;
        --menu-offset: 0;
    }

    #outer {
        width: 100%;
        height: 100%;
    }

    #menu {
        position: absolute;
        height: 100%;
        width: var(--menu-offset);
        transition: width 500ms;
        display: flex;
        flex-direction: column;
        gap: 5px;
        overflow: hidden;
    }
    
    #main {
        position: absolute;
        left: var(--menu-offset);
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        transition: left 500ms;
    }
    
    #head {
        height: 40px;
    }

    svg {
        fill: gray;
    }

    svg:hover {
        fill: white;
    }

    #content {
        height: 100%;
    }`;static [i(0x15a)]=html`
    <div id="outer"> 
        <div id="menu">
            <slot name="menu"></part>
        </div>
        <div id="main">
            <div id="head">
            <svg @click="switchMenu" style="width: 20px; margin: 10px;" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="1" fill-rule="evenodd" transform="translate(-212.000000, -888.000000)">
                    <path d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z"></path>
                </g>
            </svg>
            <slot name="head"></part>
           </div>
            <div id="content">
                <slot></slot>
            </div>
        </div>
    </div>`;[i(0x161)];[i(0x164)]=![];get[i(0x168)](){return this['_expanded'];}set['expanded'](c){const j=i;this[j(0x164)]=c;if(this[j(0x164)])this['style']['setProperty']('--menu-offset',j(0x160));else this[j(0x15f)][j(0x16e)](j(0x16b),'0');}constructor(){const k=i;super(),this[k(0x162)]();}[i(0x166)](){const l=i;this[l(0x16d)](),this['_assignEvents']();}[i(0x15b)](){const m=i;this[m(0x168)]=!this[m(0x168)];}};__decorate([property(Array)],HabPanelLikeMenu[i(0x158)],i(0x161),void 0x0),__decorate([property(Boolean)],HabPanelLikeMenu[i(0x158)],i(0x168),null),HabPanelLikeMenu=__decorate([customElement('iobroker-webui-hab-panel-like-menu')],HabPanelLikeMenu);export{HabPanelLikeMenu};