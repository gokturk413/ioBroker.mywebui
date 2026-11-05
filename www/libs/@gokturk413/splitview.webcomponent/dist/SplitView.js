var o=b;function b(c,d){c=c-0x12e;var e=a();var f=e[c];return f;}(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x14d))/0x1*(-parseInt(n(0x14b))/0x2)+parseInt(n(0x13a))/0x3*(-parseInt(n(0x150))/0x4)+parseInt(n(0x155))/0x5*(-parseInt(n(0x15a))/0x6)+parseInt(n(0x12f))/0x7+parseInt(n(0x13c))/0x8+parseInt(n(0x158))/0x9+parseInt(n(0x132))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe7f8c));var __decorate=this&&this[o(0x151)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object[p(0x159)](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[p(0x142)]==='function')k=Reflect[p(0x142)](e,f,g,h);else{for(var m=e[p(0x13e)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function a(){var A=['getBoundingClientRect','_startSize','412749QaVRDZ','observe','749128QGRMKB','_onHandleMove','length','slot','dir','_setFlexBasis','decorate','_startResize','min','_assignSlots','node-projects-split-view','_primaryChild','onpointerdown','_pointerUp','orientation','2lOnuZB','_startX','522161ikFPYD','style','releasePointerCapture','28aRLOjk','__decorate','onpointermove','setPointerCapture','_observer','90680wutWTX','vertical','_secondaryChild','15638994MwiJhn','getOwnPropertyDescriptor','336GRlzet','max','onpointerup','setAttribute','bind','3476347HZBjgo','_splitter','secondary','787640ROFMbY','prototype','_getDomElement','template','_pointerDown','rtl'];a=function(){return A;};return a();}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [o(0x14e)]=css`
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
        }`;static [o(0x135)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[o(0x14a)]='horizontal';[o(0x13b)];[o(0x154)];['_primaryChild'];['_secondaryChild'];[o(0x130)];[o(0x139)];[o(0x14c)];['_startY'];constructor(){var q=o;super(),this[q(0x130)]=this[q(0x134)]('splitter'),this['_splitter'][q(0x148)]=this[q(0x136)][q(0x12e)](this),this['_splitter'][q(0x152)]=this['_pointerMove']['bind'](this),this['_splitter'][q(0x15c)]=this['_pointerUp'][q(0x12e)](this),this['_parseAttributesToProperties']();}['ready'](){var r=o;this[r(0x13b)]&&(this[r(0x154)]=new MutationObserver(this[r(0x145)]),this['_observer']['observe'](this,{'childList':!![]})),this[r(0x145)]();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this[s(0x147)]=e,e['setAttribute']('slot','primary');else d==0x1?(this[s(0x157)]=e,e[s(0x15d)]('slot',s(0x131))):e['removeAttribute'](s(0x13f));d++;}}['_setFlexBasis'](c,d,e){var t=o;d=Math[t(0x15b)](0x0,Math[t(0x144)](d,e)),c[t(0x14e)]['flex']='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=o;this['_splitter'][u(0x153)](c['pointerId']),this['_startResize'](c['x'],c['y']),c['preventDefault']();}[o(0x143)](c,d){var v=o;if(!this[v(0x147)]||!this[v(0x157)])return;this['_startX']=c,this['_startY']=d;var e=this['orientation']==='vertical'?'height':'width';this['_startSize']={'container':this['getBoundingClientRect']()[e]-this[v(0x130)][v(0x138)]()[e],'primary':this[v(0x147)][v(0x138)]()[e],'secondary':this['_secondaryChild'][v(0x138)]()[e]};}[o(0x149)](c){var w=o;this['_splitter'][w(0x14f)](c['pointerId']),this['_stopresize']();}['_stopresize'](){var x=o;if(!this[x(0x147)]||!this[x(0x157)])return;this[x(0x139)]=null;}['_pointerMove'](c){var y=o;this[y(0x13d)](c['x'],c['y']);}[o(0x13d)](c,d){var z=o;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this[z(0x14c)];var g=this[z(0x14a)]===z(0x156)?e:f;const h=this[z(0x14a)]!=='vertical'&&this['getAttribute'](z(0x140))===z(0x137),i=h?-g:g;this[z(0x141)](this['_primaryChild'],this['_startSize']['primary']+i,this[z(0x139)]['container']),this[z(0x141)](this[z(0x157)],this['_startSize']['secondary']-i,this[z(0x139)]['container']);}};__decorate([property(String)],SplitView['prototype'],'orientation',void 0x0),__decorate([property(Boolean)],SplitView[o(0x133)],o(0x13b),void 0x0),SplitView=__decorate([customElement(o(0x146))],SplitView);export{SplitView};