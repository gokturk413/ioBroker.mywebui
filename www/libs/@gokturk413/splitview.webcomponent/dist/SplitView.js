function a(){var z=['_startY','style','1\x201\x20','57204sTGRDR','_assignSlots','2607GYzQEM','observe','children','_secondaryChild','onpointerdown','vertical','_stopresize','_splitter','_onHandleMove','secondary','preventDefault','1480FTfkrS','6802518tohluV','745318QcVHND','1415645XzyBge','199955fHCiMF','_startResize','decorate','slot','312JzgVOK','_startX','bind','max','pointerId','5jLARbn','1263KtaUQm','_startSize','300bHVKDr','template','removeAttribute','height','31704KHvbIg','setAttribute','orientation','_observer','dir','getBoundingClientRect','node-projects-split-view','_primaryChild','getAttribute','horizontal','prototype','rtl','_pointerUp','defineProperty','getOwnPropertyDescriptor','_setFlexBasis','_parseAttributesToProperties','container'];a=function(){return z;};return a();}var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0xbe))/0x1+-parseInt(n(0xbd))/0x2+-parseInt(n(0xc9))/0x3*(-parseInt(n(0xbb))/0x4)+parseInt(n(0xc8))/0x5*(-parseInt(n(0xbc))/0x6)+-parseInt(n(0xbf))/0x7*(-parseInt(n(0xc3))/0x8)+-parseInt(n(0xe4))/0x9*(-parseInt(n(0xcb))/0xa)+parseInt(n(0xe6))/0xb*(-parseInt(n(0xcf))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb588c));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object[o(0xdd)](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[o(0xc1)]==='function')k=Reflect['decorate'](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0xdc)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [p(0xcc)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']=p(0xd8);[p(0xe7)];['_observer'];[p(0xd6)];['_secondaryChild'];['_splitter'];[p(0xca)];[p(0xc4)];[p(0xe1)];constructor(){var q=p;super(),this[q(0xb7)]=this['_getDomElement']('splitter'),this['_splitter'][q(0xb4)]=this['_pointerDown'][q(0xc5)](this),this[q(0xb7)]['onpointermove']=this['_pointerMove']['bind'](this),this[q(0xb7)]['onpointerup']=this[q(0xdb)]['bind'](this),this[q(0xdf)]();}['ready'](){var r=p;this[r(0xe7)]&&(this[r(0xd2)]=new MutationObserver(this['_assignSlots']),this['_observer'][r(0xe7)](this,{'childList':!![]})),this['_assignSlots']();}[p(0xe5)](){var s=p;let d=0x0;for(const e of this[s(0xe8)]){if(d===0x0)this['_primaryChild']=e,e['setAttribute'](s(0xc2),'primary');else d==0x1?(this[s(0xb3)]=e,e[s(0xd0)](s(0xc2),'secondary')):e[s(0xcd)]('slot');d++;}}[p(0xde)](c,d,e){var t=p;d=Math[t(0xc6)](0x0,Math['min'](d,e)),c[t(0xe2)]['flex']=t(0xe3)+d+'px';}['_pointerDown'](c){var u=p;this['_splitter']['setPointerCapture'](c['pointerId']),this[u(0xc0)](c['x'],c['y']),c[u(0xba)]();}['_startResize'](c,d){var v=p;if(!this[v(0xd6)]||!this[v(0xb3)])return;this['_startX']=c,this[v(0xe1)]=d;var e=this['orientation']===v(0xb5)?v(0xce):'width';this[v(0xca)]={'container':this[v(0xd4)]()[e]-this['_splitter'][v(0xd4)]()[e],'primary':this['_primaryChild']['getBoundingClientRect']()[e],'secondary':this['_secondaryChild']['getBoundingClientRect']()[e]};}['_pointerUp'](c){var w=p;this[w(0xb7)]['releasePointerCapture'](c[w(0xc7)]),this[w(0xb6)]();}[p(0xb6)](){var x=p;if(!this[x(0xd6)]||!this['_secondaryChild'])return;this['_startSize']=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}[p(0xb8)](c,d){var y=p;if(!this['_startSize'])return;let e=d-this[y(0xe1)],f=c-this[y(0xc4)];var g=this['orientation']==='vertical'?e:f;const h=this['orientation']!=='vertical'&&this[y(0xd7)](y(0xd3))===y(0xda),i=h?-g:g;this[y(0xde)](this['_primaryChild'],this[y(0xca)]['primary']+i,this['_startSize'][y(0xe0)]),this['_setFlexBasis'](this['_secondaryChild'],this['_startSize'][y(0xb9)]-i,this['_startSize'][y(0xe0)]);}};function b(c,d){c=c-0xb3;var e=a();var f=e[c];return f;}__decorate([property(String)],SplitView[p(0xd9)],p(0xd1),void 0x0),__decorate([property(Boolean)],SplitView[p(0xd9)],p(0xe7),void 0x0),SplitView=__decorate([customElement(p(0xd5))],SplitView);export{SplitView};