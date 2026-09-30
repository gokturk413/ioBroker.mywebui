function a(){const m=['expanded','_expanded','12QlgvlG','154VCdgTj','129kPEYjY','_assignEvents','10416710hNjcGl','template','--menu-offset','10ABXmKy','screens','_parseAttributesToProperties','1KHfJaa','3486527PpORbR','ready','1114204gxhHXO','200px','9Pwynns','1260086cphWyG','285264FGpWIm','setProperty','42fvjWGf','60028kgMVgG','601014MCIiuN'];a=function(){return m;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x115))/0x1*(-parseInt(h(0x103))/0x2)+-parseInt(h(0x10d))/0x3*(parseInt(h(0x107))/0x4)+-parseInt(h(0x112))/0x5*(parseInt(h(0x108))/0x6)+-parseInt(h(0x106))/0x7*(parseInt(h(0x104))/0x8)+parseInt(h(0x102))/0x9*(parseInt(h(0x10f))/0xa)+parseInt(h(0xfe))/0xb*(parseInt(h(0x10b))/0xc)+-parseInt(h(0x100))/0xd*(-parseInt(h(0x10c))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x955ca));import{__decorate}from'tslib';import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@gokturk413/base-custom-webcomponent';let HabPanelLikeMenu=class HabPanelLikeMenu extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0x110)]=html`
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
    </div>`;['screens'];[i(0x10a)]=![];get['expanded'](){return this['_expanded'];}set['expanded'](c){const j=i;this[j(0x10a)]=c;if(this['_expanded'])this['style']['setProperty'](j(0x111),j(0x101));else this['style'][j(0x105)](j(0x111),'0');}constructor(){super(),this['_restoreCachedInititalValues']();}[i(0xff)](){const k=i;this[k(0x114)](),this[k(0x10e)]();}['switchMenu'](){const l=i;this[l(0x109)]=!this['expanded'];}};function b(c,d){c=c-0xfe;const e=a();let f=e[c];return f;}__decorate([property(Array)],HabPanelLikeMenu['prototype'],i(0x113),void 0x0),__decorate([property(Boolean)],HabPanelLikeMenu['prototype'],'expanded',null),HabPanelLikeMenu=__decorate([customElement('iobroker-webui-hab-panel-like-menu')],HabPanelLikeMenu);export{HabPanelLikeMenu};