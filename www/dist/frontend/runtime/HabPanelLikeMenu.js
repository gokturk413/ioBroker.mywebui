const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x199))/0x1*(-parseInt(h(0x18c))/0x2)+parseInt(h(0x18b))/0x3*(parseInt(h(0x194))/0x4)+parseInt(h(0x188))/0x5+parseInt(h(0x18a))/0x6+parseInt(h(0x183))/0x7*(-parseInt(h(0x18d))/0x8)+-parseInt(h(0x18e))/0x9*(-parseInt(h(0x191))/0xa)+parseInt(h(0x189))/0xb*(-parseInt(h(0x197))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x85f8c));import{__decorate}from'tslib';import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@gokturk413/base-custom-webcomponent';let HabPanelLikeMenu=class HabPanelLikeMenu extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0x193)]=html`
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
    </div>`;[i(0x186)];[i(0x196)]=![];get[i(0x192)](){const j=i;return this[j(0x196)];}set['expanded'](c){const k=i;this['_expanded']=c;if(this['_expanded'])this['style']['setProperty']('--menu-offset',k(0x184));else this[k(0x198)][k(0x182)](k(0x18f),'0');}constructor(){const l=i;super(),this[l(0x190)]();}[i(0x195)](){const m=i;this[m(0x185)](),this['_assignEvents']();}['switchMenu'](){const n=i;this[n(0x192)]=!this[n(0x192)];}};function a(){const o=['4PhpJuY','ready','_expanded','11438772pXFlVD','style','3055KSPQby','iobroker-webui-hab-panel-like-menu','setProperty','1470vsPfXu','200px','_parseAttributesToProperties','screens','prototype','1190420ARlLBS','11rlYreP','6242484zYGXgT','59487fRkaTU','130PQKkgB','19904faEtKc','4748013ChtQch','--menu-offset','_restoreCachedInititalValues','10AyfcKR','expanded','template'];a=function(){return o;};return a();}__decorate([property(Array)],HabPanelLikeMenu['prototype'],'screens',void 0x0),__decorate([property(Boolean)],HabPanelLikeMenu[i(0x187)],i(0x192),null),HabPanelLikeMenu=__decorate([customElement(i(0x181))],HabPanelLikeMenu);function b(c,d){c=c-0x181;const e=a();let f=e[c];return f;}export{HabPanelLikeMenu};