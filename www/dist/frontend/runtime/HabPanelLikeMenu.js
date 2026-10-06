const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1ea))/0x1*(parseInt(h(0x1eb))/0x2)+-parseInt(h(0x1e1))/0x3+parseInt(h(0x1de))/0x4+-parseInt(h(0x1e7))/0x5+parseInt(h(0x1e3))/0x6*(-parseInt(h(0x1ed))/0x7)+parseInt(h(0x1db))/0x8*(-parseInt(h(0x1e4))/0x9)+-parseInt(h(0x1e8))/0xa*(-parseInt(h(0x1da))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x34a1f));import{__decorate}from'tslib';import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@gokturk413/base-custom-webcomponent';let HabPanelLikeMenu=class HabPanelLikeMenu extends BaseCustomWebComponentConstructorAppend{static [i(0x1ec)]=css`
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
    }`;static ['template']=html`
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
    </div>`;[i(0x1e2)];['_expanded']=![];get[i(0x1e5)](){return this['_expanded'];}set['expanded'](c){const j=i;this[j(0x1e6)]=c;if(this[j(0x1e6)])this[j(0x1ec)][j(0x1e9)](j(0x1df),j(0x1dc));else this[j(0x1ec)][j(0x1e9)](j(0x1df),'0');}constructor(){const k=i;super(),this[k(0x1ee)]();}[i(0x1d9)](){this['_parseAttributesToProperties'](),this['_assignEvents']();}['switchMenu'](){const l=i;this['expanded']=!this[l(0x1e5)];}};__decorate([property(Array)],HabPanelLikeMenu[i(0x1dd)],'screens',void 0x0),__decorate([property(Boolean)],HabPanelLikeMenu['prototype'],'expanded',null),HabPanelLikeMenu=__decorate([customElement(i(0x1e0))],HabPanelLikeMenu);function b(c,d){c=c-0x1d9;const e=a();let f=e[c];return f;}function a(){const m=['iobroker-webui-hab-panel-like-menu','852636nhwEyk','screens','49866qpSkXK','9BqWSYx','expanded','_expanded','1345575RxmVNa','10888260EqmprF','setProperty','4799txDoBY','80rlPEqQ','style','35DjQqVQ','_restoreCachedInititalValues','ready','11bdpTgk','2903408yjKCVN','200px','prototype','1106100HMbnql','--menu-offset'];a=function(){return m;};return a();}export{HabPanelLikeMenu};