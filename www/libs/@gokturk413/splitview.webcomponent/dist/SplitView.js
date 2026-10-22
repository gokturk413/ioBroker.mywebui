function b(c,d){c=c-0xab;var e=a();var f=e[c];return f;}var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0xcf))/0x1*(-parseInt(n(0xb8))/0x2)+-parseInt(n(0xde))/0x3*(-parseInt(n(0xc1))/0x4)+-parseInt(n(0xd5))/0x5+-parseInt(n(0xaf))/0x6+parseInt(n(0xb3))/0x7*(-parseInt(n(0xda))/0x8)+-parseInt(n(0xac))/0x9*(parseInt(n(0xd6))/0xa)+parseInt(n(0xae))/0xb*(parseInt(n(0xd3))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9c2be));var __decorate=this&&this[o(0xb9)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object[p(0xd8)](f,g):h,l;if(typeof Reflect===p(0xcb)&&typeof Reflect[p(0xb4)]==='function')k=Reflect[p(0xb4)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0xc3)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function a(){var z=['_startSize','orientation','height','observe','releasePointerCapture','58364lBJfiL','bind','defineProperty','primary','min','prototype','_primaryChild','pointerId','_pointerDown','setAttribute','object','flex','_pointerUp','secondary','1167283WFywMc','_stopresize','_setFlexBasis','_startX','21915816SLKkKo','getBoundingClientRect','1808440CltGav','40PAIcRv','ready','getOwnPropertyDescriptor','getAttribute','641384RjLbrs','_startY','onpointerup','dir','111PRYTSm','_observer','_assignSlots','_startResize','style','max','1817271ezbRpV','template','22nfNwfO','3448764hGzqyh','slot','_secondaryChild','_splitter','56ByywRZ','decorate','rtl','1\x201\x20','vertical','2HVcrZr','__decorate','_pointerMove','width'];a=function(){return z;};return a();}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [o(0xe2)]=css`
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
        }`;static [o(0xad)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[o(0xbd)]='horizontal';[o(0xbf)];['_observer'];['_primaryChild'];['_secondaryChild'];[o(0xb2)];[o(0xbc)];['_startX'];[o(0xdb)];constructor(){var q=o;super(),this[q(0xb2)]=this['_getDomElement']('splitter'),this[q(0xb2)]['onpointerdown']=this['_pointerDown'][q(0xc2)](this),this[q(0xb2)]['onpointermove']=this['_pointerMove']['bind'](this),this[q(0xb2)][q(0xdc)]=this['_pointerUp'][q(0xc2)](this),this['_parseAttributesToProperties']();}[o(0xd7)](){var r=o;this['observe']&&(this['_observer']=new MutationObserver(this['_assignSlots']),this[r(0xdf)]['observe'](this,{'childList':!![]})),this[r(0xe0)]();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this[s(0xc7)]=e,e[s(0xca)](s(0xb0),'primary');else d==0x1?(this['_secondaryChild']=e,e['setAttribute']('slot',s(0xce))):e['removeAttribute'](s(0xb0));d++;}}[o(0xd1)](c,d,e){var t=o;d=Math[t(0xab)](0x0,Math[t(0xc5)](d,e)),c[t(0xe2)][t(0xcc)]=t(0xb6)+d+'px';}[o(0xc9)](c){var u=o;this['_splitter']['setPointerCapture'](c[u(0xc8)]),this['_startResize'](c['x'],c['y']),c['preventDefault']();}[o(0xe1)](c,d){var v=o;if(!this['_primaryChild']||!this[v(0xb1)])return;this['_startX']=c,this['_startY']=d;var e=this[v(0xbd)]===v(0xb7)?v(0xbe):v(0xbb);this[v(0xbc)]={'container':this['getBoundingClientRect']()[e]-this['_splitter'][v(0xd4)]()[e],'primary':this['_primaryChild'][v(0xd4)]()[e],'secondary':this[v(0xb1)]['getBoundingClientRect']()[e]};}[o(0xcd)](c){var w=o;this['_splitter'][w(0xc0)](c[w(0xc8)]),this[w(0xd0)]();}[o(0xd0)](){var x=o;if(!this[x(0xc7)]||!this['_secondaryChild'])return;this['_startSize']=null;}[o(0xba)](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=o;if(!this[y(0xbc)])return;let e=d-this[y(0xdb)],f=c-this[y(0xd2)];var g=this[y(0xbd)]==='vertical'?e:f;const h=this['orientation']!==y(0xb7)&&this[y(0xd9)](y(0xdd))===y(0xb5),i=h?-g:g;this['_setFlexBasis'](this['_primaryChild'],this[y(0xbc)][y(0xc4)]+i,this['_startSize']['container']),this[y(0xd1)](this['_secondaryChild'],this['_startSize']['secondary']-i,this[y(0xbc)]['container']);}};__decorate([property(String)],SplitView['prototype'],o(0xbd),void 0x0),__decorate([property(Boolean)],SplitView[o(0xc6)],'observe',void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};