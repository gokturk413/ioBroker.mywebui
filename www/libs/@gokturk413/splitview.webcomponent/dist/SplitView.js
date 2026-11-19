var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x193))/0x1+-parseInt(n(0x195))/0x2+-parseInt(n(0x1a5))/0x3+parseInt(n(0x1a9))/0x4+-parseInt(n(0x19f))/0x5*(parseInt(n(0x194))/0x6)+parseInt(n(0x1a7))/0x7*(parseInt(n(0x1a3))/0x8)+parseInt(n(0x1b1))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe92ad));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[o(0x1b2)]===o(0x1a1))k=Reflect['decorate'](e,f,g,h);else{for(var m=e[o(0x1a8)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};function a(){var z=['_pointerMove','bind','prototype','setPointerCapture','22057533boSAZg','decorate','pointerId','getBoundingClientRect','horizontal','_secondaryChild','node-projects-split-view','preventDefault','_primaryChild','_setFlexBasis','splitter','_onHandleMove','slot','dir','_startX','_stopresize','width','flex','container','_splitter','271734evswBr','1612914xEZnYu','2323592AuXUaK','rtl','secondary','_startY','releasePointerCapture','_pointerUp','_pointerDown','observe','setAttribute','_startSize','15Vaykhl','style','function','_getDomElement','232iqjrto','1\x201\x20','679338QcFKFc','orientation','134708gXrrBQ','length','1650292cQPmQi','_startResize','vertical','onpointerup'];a=function(){return z;};return a();}import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x182;var e=a();var f=e[c];return f;}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [p(0x1a0)]=css`
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
        }`;static ['template']=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[p(0x1a6)]=p(0x183);['observe'];['_observer'];['_primaryChild'];['_secondaryChild'];['_splitter'];['_startSize'];[p(0x18d)];[p(0x198)];constructor(){var q=p;super(),this['_splitter']=this[q(0x1a2)](q(0x189)),this['_splitter']['onpointerdown']=this[q(0x19b)]['bind'](this),this['_splitter']['onpointermove']=this['_pointerMove'][q(0x1ae)](this),this['_splitter'][q(0x1ac)]=this[q(0x19a)]['bind'](this),this['_parseAttributesToProperties']();}['ready'](){var r=p;this['observe']&&(this['_observer']=new MutationObserver(this['_assignSlots']),this['_observer'][r(0x19c)](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=p;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e[s(0x19d)](s(0x18b),'primary');else d==0x1?(this['_secondaryChild']=e,e['setAttribute']('slot',s(0x197))):e['removeAttribute']('slot');d++;}}[p(0x188)](c,d,e){var t=p;d=Math['max'](0x0,Math['min'](d,e)),c['style'][t(0x190)]=t(0x1a4)+d+'px';}[p(0x19b)](c){var u=p;this[u(0x192)][u(0x1b0)](c[u(0x1b3)]),this[u(0x1aa)](c['x'],c['y']),c[u(0x186)]();}[p(0x1aa)](c,d){var v=p;if(!this['_primaryChild']||!this[v(0x184)])return;this[v(0x18d)]=c,this[v(0x198)]=d;var e=this[v(0x1a6)]===v(0x1ab)?'height':v(0x18f);this['_startSize']={'container':this[v(0x182)]()[e]-this[v(0x192)][v(0x182)]()[e],'primary':this[v(0x187)][v(0x182)]()[e],'secondary':this[v(0x184)][v(0x182)]()[e]};}['_pointerUp'](c){var w=p;this[w(0x192)][w(0x199)](c['pointerId']),this[w(0x18e)]();}['_stopresize'](){var x=p;if(!this[x(0x187)]||!this[x(0x184)])return;this[x(0x19e)]=null;}[p(0x1ad)](c){this['_onHandleMove'](c['x'],c['y']);}[p(0x18a)](c,d){var y=p;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this[y(0x18d)];var g=this[y(0x1a6)]===y(0x1ab)?e:f;const h=this['orientation']!==y(0x1ab)&&this['getAttribute'](y(0x18c))===y(0x196),i=h?-g:g;this[y(0x188)](this[y(0x187)],this[y(0x19e)]['primary']+i,this['_startSize'][y(0x191)]),this[y(0x188)](this[y(0x184)],this['_startSize'][y(0x197)]-i,this['_startSize'][y(0x191)]);}};__decorate([property(String)],SplitView[p(0x1af)],p(0x1a6),void 0x0),__decorate([property(Boolean)],SplitView[p(0x1af)],'observe',void 0x0),SplitView=__decorate([customElement(p(0x185))],SplitView);export{SplitView};