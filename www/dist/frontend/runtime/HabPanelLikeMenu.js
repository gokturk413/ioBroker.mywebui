const i=b;function b(c,d){c=c-0x19c;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1a9))/0x1*(-parseInt(h(0x1a5))/0x2)+-parseInt(h(0x1a3))/0x3+-parseInt(h(0x1ad))/0x4+-parseInt(h(0x1a8))/0x5+parseInt(h(0x1a1))/0x6+parseInt(h(0x1a2))/0x7*(-parseInt(h(0x19f))/0x8)+parseInt(h(0x19c))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbb637));import{__decorate}from'tslib';import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@gokturk413/base-custom-webcomponent';let HabPanelLikeMenu=class HabPanelLikeMenu extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    </div>`;[i(0x1a0)];['_expanded']=![];get[i(0x1a4)](){return this['_expanded'];}set['expanded'](c){const j=i;this['_expanded']=c;if(this[j(0x1ac)])this[j(0x1aa)]['setProperty']('--menu-offset',j(0x19e));else this[j(0x1aa)]['setProperty'](j(0x1a6),'0');}constructor(){const k=i;super(),this[k(0x1a7)]();}[i(0x1ab)](){const l=i;this[l(0x19d)](),this['_assignEvents']();}['switchMenu'](){const m=i;this[m(0x1a4)]=!this[m(0x1a4)];}};__decorate([property(Array)],HabPanelLikeMenu['prototype'],i(0x1a0),void 0x0),__decorate([property(Boolean)],HabPanelLikeMenu['prototype'],i(0x1a4),null),HabPanelLikeMenu=__decorate([customElement(i(0x1ae))],HabPanelLikeMenu);function a(){const n=['3698044qsMcvo','iobroker-webui-hab-panel-like-menu','43588872NvqAsO','_parseAttributesToProperties','200px','8liIjrI','screens','1438884mMaQhC','8175377EYSasV','3287439VnErju','expanded','50XodUrF','--menu-offset','_restoreCachedInititalValues','4514720FVfxbR','8972gQoAHq','style','ready','_expanded'];a=function(){return n;};return a();}export{HabPanelLikeMenu};