function a(){const n=['43714Wtnzzy','iobroker-webui-hab-panel-like-menu','_expanded','105912zMrFHp','setProperty','ready','27462kkHzpl','_assignEvents','expanded','75kRLQHb','293656xGVGvZ','3157002HMbASD','266MVIXIA','_parseAttributesToProperties','3GIiJcr','4Ohsjzr','2417028zJywMl','prototype','120DMBSDV','style','519543WStEWi','39bROGJc','screens'];a=function(){return n;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x141))/0x1*(parseInt(h(0x13d))/0x2)+-parseInt(h(0x130))/0x3*(parseInt(h(0x12b))/0x4)+-parseInt(h(0x13c))/0x5*(-parseInt(h(0x139))/0x6)+-parseInt(h(0x13f))/0x7*(-parseInt(h(0x136))/0x8)+-parseInt(h(0x13e))/0x9+-parseInt(h(0x12e))/0xa*(-parseInt(h(0x133))/0xb)+parseInt(h(0x12c))/0xc*(parseInt(h(0x131))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f4a7));import{__decorate}from'tslib';import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x12b;const e=a();let f=e[c];return f;}let HabPanelLikeMenu=class HabPanelLikeMenu extends BaseCustomWebComponentConstructorAppend{static [i(0x12f)]=css`
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
    </div>`;['screens'];[i(0x135)]=![];get['expanded'](){const j=i;return this[j(0x135)];}set['expanded'](c){const k=i;this['_expanded']=c;if(this[k(0x135)])this[k(0x12f)]['setProperty']('--menu-offset','200px');else this['style'][k(0x137)]('--menu-offset','0');}constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x138)](){const l=i;this[l(0x140)](),this[l(0x13a)]();}['switchMenu'](){const m=i;this[m(0x13b)]=!this['expanded'];}};__decorate([property(Array)],HabPanelLikeMenu['prototype'],i(0x132),void 0x0),__decorate([property(Boolean)],HabPanelLikeMenu[i(0x12d)],i(0x13b),null),HabPanelLikeMenu=__decorate([customElement(i(0x134))],HabPanelLikeMenu);export{HabPanelLikeMenu};