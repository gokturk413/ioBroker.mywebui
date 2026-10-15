function a(){var A=['length','1267840YnrDkP','getBoundingClientRect','_startResize','height','_onHandleMove','_assignSlots','_primaryChild','__decorate','setPointerCapture','_pointerUp','defineProperty','_startY','onpointerup','container','horizontal','onpointerdown','setAttribute','_setFlexBasis','1274905RQGZQw','3324072cmjInj','template','getAttribute','_parseAttributesToProperties','style','_stopresize','children','_secondaryChild','vertical','_pointerDown','releasePointerCapture','48287457GUrENt','prototype','secondary','_pointerMove','3559092kAbcQn','_startSize','dir','_getDomElement','ready','pointerId','preventDefault','_startX','min','1571196WBjBsX','observe','_splitter','decorate','2vHIHhY','9898256EDDGEM','7xoajKG'];a=function(){return A;};return a();}var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x145))/0x1+-parseInt(n(0x141))/0x2*(parseInt(n(0x13d))/0x3)+-parseInt(n(0x125))/0x4+-parseInt(n(0x124))/0x5+-parseInt(n(0x134))/0x6*(parseInt(n(0x143))/0x7)+-parseInt(n(0x142))/0x8+parseInt(n(0x130))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa0756));function b(c,d){c=c-0x122;var e=a();var f=e[c];return f;}var __decorate=this&&this[o(0x14c)]||function(e,f,g,h){var p=o,j=arguments[p(0x144)],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[p(0x140)]==='function')k=Reflect['decorate'](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0x14f)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x126)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']=o(0x153);[o(0x13e)];['_observer'];[o(0x14b)];['_secondaryChild'];[o(0x13f)];['_startSize'];[o(0x13b)];['_startY'];constructor(){var q=o;super(),this[q(0x13f)]=this[q(0x137)]('splitter'),this['_splitter'][q(0x154)]=this[q(0x12e)]['bind'](this),this[q(0x13f)]['onpointermove']=this[q(0x133)]['bind'](this),this[q(0x13f)][q(0x151)]=this['_pointerUp']['bind'](this),this[q(0x128)]();}[o(0x138)](){var r=o;this['observe']&&(this['_observer']=new MutationObserver(this['_assignSlots']),this['_observer'][r(0x13e)](this,{'childList':!![]})),this[r(0x14a)]();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this[s(0x12b)]){if(d===0x0)this[s(0x14b)]=e,e['setAttribute']('slot','primary');else d==0x1?(this['_secondaryChild']=e,e[s(0x122)]('slot','secondary')):e['removeAttribute']('slot');d++;}}[o(0x123)](c,d,e){var t=o;d=Math['max'](0x0,Math[t(0x13c)](d,e)),c[t(0x129)]['flex']='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=o;this[u(0x13f)][u(0x14d)](c[u(0x139)]),this[u(0x147)](c['x'],c['y']),c[u(0x13a)]();}[o(0x147)](c,d){var v=o;if(!this[v(0x14b)]||!this[v(0x12c)])return;this[v(0x13b)]=c,this['_startY']=d;var e=this['orientation']==='vertical'?v(0x148):'width';this[v(0x135)]={'container':this[v(0x146)]()[e]-this['_splitter'][v(0x146)]()[e],'primary':this['_primaryChild']['getBoundingClientRect']()[e],'secondary':this[v(0x12c)]['getBoundingClientRect']()[e]};}[o(0x14e)](c){var w=o;this['_splitter'][w(0x12f)](c[w(0x139)]),this['_stopresize']();}[o(0x12a)](){var x=o;if(!this[x(0x14b)]||!this[x(0x12c)])return;this[x(0x135)]=null;}['_pointerMove'](c){var y=o;this[y(0x149)](c['x'],c['y']);}['_onHandleMove'](c,d){var z=o;if(!this[z(0x135)])return;let e=d-this[z(0x150)],f=c-this[z(0x13b)];var g=this['orientation']==='vertical'?e:f;const h=this['orientation']!==z(0x12d)&&this[z(0x127)](z(0x136))==='rtl',i=h?-g:g;this['_setFlexBasis'](this['_primaryChild'],this['_startSize']['primary']+i,this['_startSize'][z(0x152)]),this['_setFlexBasis'](this['_secondaryChild'],this[z(0x135)][z(0x132)]-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView['prototype'],'orientation',void 0x0),__decorate([property(Boolean)],SplitView[o(0x131)],'observe',void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};