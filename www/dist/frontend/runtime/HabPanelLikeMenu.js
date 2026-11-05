const i=b;function b(c,d){c=c-0x8b;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x8d))/0x1*(parseInt(h(0x91))/0x2)+parseInt(h(0x8c))/0x3*(parseInt(h(0x93))/0x4)+-parseInt(h(0x8e))/0x5*(parseInt(h(0x95))/0x6)+-parseInt(h(0x90))/0x7+-parseInt(h(0x8b))/0x8+-parseInt(h(0x92))/0x9*(-parseInt(h(0x9a))/0xa)+parseInt(h(0x9c))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x82fdb));import{__decorate}from'tslib';function a(){const m=['screens','4630960SWeOsA','27axtxCn','68VjhAke','8465xCgLQX','prototype','2115190YDRfrG','3484GZZLPd','63TvimpO','32924uWpAFF','--menu-offset','408bWxtda','style','_restoreCachedInititalValues','setProperty','_assignEvents','228630zDddjL','expanded','12981397oEyCgD'];a=function(){return m;};return a();}import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@gokturk413/base-custom-webcomponent';let HabPanelLikeMenu=class HabPanelLikeMenu extends BaseCustomWebComponentConstructorAppend{static [i(0x96)]=css`
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
    </div>`;[i(0x9d)];['_expanded']=![];get['expanded'](){return this['_expanded'];}set[i(0x9b)](c){const j=i;this['_expanded']=c;if(this['_expanded'])this['style'][j(0x98)](j(0x94),'200px');else this['style']['setProperty']('--menu-offset','0');}constructor(){const k=i;super(),this[k(0x97)]();}['ready'](){const l=i;this['_parseAttributesToProperties'](),this[l(0x99)]();}['switchMenu'](){this['expanded']=!this['expanded'];}};__decorate([property(Array)],HabPanelLikeMenu[i(0x8f)],i(0x9d),void 0x0),__decorate([property(Boolean)],HabPanelLikeMenu['prototype'],'expanded',null),HabPanelLikeMenu=__decorate([customElement('iobroker-webui-hab-panel-like-menu')],HabPanelLikeMenu);export{HabPanelLikeMenu};