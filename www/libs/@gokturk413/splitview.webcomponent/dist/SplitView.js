var o=b;function a(){var x=['9508145mcIGBS','decorate','_startX','length','setAttribute','preventDefault','__decorate','max','_onHandleMove','slot','onpointerup','_splitter','rtl','style','_observer','horizontal','node-projects-split-view','_primaryChild','prototype','_pointerDown','1020144sovYBT','children','308jLdLsy','primary','orientation','observe','17029890LUeTMc','defineProperty','_getDomElement','21728LlRHuS','container','76BTanjs','getOwnPropertyDescriptor','vertical','splitter','_startResize','22620590GjaEbC','30758qmLOwG','onpointerdown','template','169953axbfDm','37kqoHPw','_startY','_pointerMove','getBoundingClientRect','_startSize','setPointerCapture','_secondaryChild','_pointerUp','object'];a=function(){return x;};return a();}(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x107))/0x1*(parseInt(n(0x103))/0x2)+-parseInt(n(0x106))/0x3*(parseInt(n(0xfd))/0x4)+parseInt(n(0x110))/0x5+-parseInt(n(0xf2))/0x6+-parseInt(n(0xf4))/0x7*(-parseInt(n(0xfb))/0x8)+parseInt(n(0xf8))/0x9+-parseInt(n(0x102))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xedc5a));function b(c,d){c=c-0xef;var e=a();var f=e[c];return f;}var __decorate=this&&this[o(0x116)]||function(e,f,g,h){var p=o,j=arguments[p(0x113)],k=j<0x3?f:h===null?h=Object[p(0xfe)](f,g):h,l;if(typeof Reflect===p(0x10f)&&typeof Reflect[p(0x111)]==='function')k=Reflect[p(0x111)](e,f,g,h);else{for(var m=e[p(0x113)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0xf9)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
        :host {
            display: flex;
            overflow: hidden !important;
            transform: translateZ(0);
        }

        :host([hidden]) {
            display: none !important;
        }

        :host([orientation="vertical"]) {
            flex-direction: column;
        }

        :host ::slotted(*) {
            flex: 1 1 auto;
            overflow: auto;
        }

        [part="splitter"] {
            flex: none;
            position: relative;
            z-index: 1;
            overflow: visible;
            min-width: 8px;
            min-height: 8px;
        }

        :host(:not([orientation="vertical"])) > [part="splitter"] {
            cursor: ew-resize;
        }
        
        :host([orientation="vertical"]) > [part="splitter"] {
            cursor: ns-resize;
        }

        [part="handle"] {
            width: 40px;
            height: 40px;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
        }

        [part="splitter"] {
            min-width: 0.5rem;
            min-height: 0.5rem;
            background-color: hsla(214, 61%, 25%, 0.05);
            transition: 0.1s background-color;
        }

        [part="handle"] {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }

        [part="handle"]::after {
            content: "";
            display: block;
            width: 4px;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            border-radius: 0.25em;
            background-color: hsla(214, 47%, 21%, 0.38);
            transition: 0.1s opacity, 0.1s background-color;
        }

        :host([orientation="vertical"]) [part="handle"]::after {
            width: 100%;
            height: 4px;
        }

        [part="splitter"]:hover [part="handle"]::after {
            background-color: hsla(214, 47%, 21%, 0.38);
        }

        @media (pointer: coarse) {
            [part="splitter"]:hover [part="handle"]::after {
                background-color: hsla(214, 47%, 21%, 0.38);
            }
        }

        [part="splitter"]:active [part="handle"]::after {
            background-color: hsla(214, 45%, 20%, 0.5);
        }`;static [o(0x105)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']=o(0x11f);['observe'];[o(0x11e)];[o(0xef)];[o(0x10d)];[o(0x11b)];[o(0x10b)];[o(0x112)];['_startY'];constructor(){var q=o;super(),this[q(0x11b)]=this[q(0xfa)](q(0x100)),this[q(0x11b)][q(0x104)]=this['_pointerDown']['bind'](this),this[q(0x11b)]['onpointermove']=this[q(0x109)]['bind'](this),this[q(0x11b)][q(0x11a)]=this[q(0x10e)]['bind'](this),this['_parseAttributesToProperties']();}['ready'](){this['observe']&&(this['_observer']=new MutationObserver(this['_assignSlots']),this['_observer']['observe'](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var r=o;let d=0x0;for(const e of this[r(0xf3)]){if(d===0x0)this['_primaryChild']=e,e['setAttribute'](r(0x119),'primary');else d==0x1?(this[r(0x10d)]=e,e[r(0x114)]('slot','secondary')):e['removeAttribute']('slot');d++;}}['_setFlexBasis'](c,d,e){var s=o;d=Math[s(0x117)](0x0,Math['min'](d,e)),c[s(0x11d)]['flex']='1\x201\x20'+d+'px';}[o(0xf1)](c){var t=o;this['_splitter'][t(0x10c)](c['pointerId']),this[t(0x101)](c['x'],c['y']),c[t(0x115)]();}[o(0x101)](c,d){var u=o;if(!this['_primaryChild']||!this['_secondaryChild'])return;this[u(0x112)]=c,this[u(0x108)]=d;var e=this['orientation']===u(0xff)?'height':'width';this['_startSize']={'container':this[u(0x10a)]()[e]-this['_splitter']['getBoundingClientRect']()[e],'primary':this['_primaryChild']['getBoundingClientRect']()[e],'secondary':this[u(0x10d)]['getBoundingClientRect']()[e]};}['_pointerUp'](c){this['_splitter']['releasePointerCapture'](c['pointerId']),this['_stopresize']();}['_stopresize'](){if(!this['_primaryChild']||!this['_secondaryChild'])return;this['_startSize']=null;}['_pointerMove'](c){var v=o;this[v(0x118)](c['x'],c['y']);}[o(0x118)](c,d){var w=o;if(!this['_startSize'])return;let e=d-this[w(0x108)],f=c-this[w(0x112)];var g=this[w(0xf6)]===w(0xff)?e:f;const h=this[w(0xf6)]!=='vertical'&&this['getAttribute']('dir')===w(0x11c),i=h?-g:g;this['_setFlexBasis'](this['_primaryChild'],this[w(0x10b)][w(0xf5)]+i,this['_startSize'][w(0xfc)]),this['_setFlexBasis'](this['_secondaryChild'],this[w(0x10b)]['secondary']-i,this['_startSize'][w(0xfc)]);}};__decorate([property(String)],SplitView[o(0xf0)],'orientation',void 0x0),__decorate([property(Boolean)],SplitView[o(0xf0)],o(0xf7),void 0x0),SplitView=__decorate([customElement(o(0x120))],SplitView);export{SplitView};