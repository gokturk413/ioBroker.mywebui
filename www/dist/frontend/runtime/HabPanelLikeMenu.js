const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1e9))/0x1+-parseInt(h(0x1eb))/0x2+parseInt(h(0x1e8))/0x3*(parseInt(h(0x1e7))/0x4)+-parseInt(h(0x1f5))/0x5*(-parseInt(h(0x1f3))/0x6)+parseInt(h(0x1ec))/0x7*(parseInt(h(0x1f6))/0x8)+parseInt(h(0x1e6))/0x9*(-parseInt(h(0x1ea))/0xa)+-parseInt(h(0x1f8))/0xb*(parseInt(h(0x1ef))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa55ad));function a(){const m=['4ShMxwI','351573gBFUud','793549qjZqbf','31130fXcnfU','1237330QlQrDd','47551XAPxTd','_assignEvents','style','51228MmfKFn','_expanded','expanded','prototype','4776810zPjUbT','screens','5odTQzO','656hkElaH','--menu-offset','946coMouV','1737qklnGO'];a=function(){return m;};return a();}import{__decorate}from'tslib';import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@gokturk413/base-custom-webcomponent';let HabPanelLikeMenu=class HabPanelLikeMenu extends BaseCustomWebComponentConstructorAppend{static [i(0x1ee)]=css`
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
    </div>`;['screens'];[i(0x1f0)]=![];get[i(0x1f1)](){return this['_expanded'];}set[i(0x1f1)](c){const j=i;this['_expanded']=c;if(this[j(0x1f0)])this[j(0x1ee)]['setProperty'](j(0x1f7),'200px');else this['style']['setProperty'](j(0x1f7),'0');}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const k=i;this['_parseAttributesToProperties'](),this[k(0x1ed)]();}['switchMenu'](){const l=i;this[l(0x1f1)]=!this[l(0x1f1)];}};__decorate([property(Array)],HabPanelLikeMenu['prototype'],i(0x1f4),void 0x0),__decorate([property(Boolean)],HabPanelLikeMenu[i(0x1f2)],'expanded',null),HabPanelLikeMenu=__decorate([customElement('iobroker-webui-hab-panel-like-menu')],HabPanelLikeMenu);function b(c,d){c=c-0x1e6;const e=a();let f=e[c];return f;}export{HabPanelLikeMenu};