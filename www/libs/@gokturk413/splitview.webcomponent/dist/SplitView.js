var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0xb4))/0x1*(parseInt(n(0xcf))/0x2)+parseInt(n(0xd1))/0x3+-parseInt(n(0xce))/0x4*(parseInt(n(0xb2))/0x5)+-parseInt(n(0xdb))/0x6*(-parseInt(n(0xad))/0x7)+-parseInt(n(0xb0))/0x8*(parseInt(n(0xb9))/0x9)+-parseInt(n(0xc4))/0xa*(parseInt(n(0xc3))/0xb)+parseInt(n(0xb7))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x79706));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect===o(0xd0)&&typeof Reflect[o(0xca)]==='function')k=Reflect[o(0xca)](e,f,g,h);else{for(var m=e[o(0xc0)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0xd6)](f,g,k),k;};function a(){var z=['1322727rDVUjq','releasePointerCapture','bind','slot','_primaryChild','defineProperty','ready','_stopresize','_splitter','_onHandleMove','630qqjoQe','template','_assignSlots','onpointermove','dir','_observer','21987xKtWnA','getBoundingClientRect','_startY','1400632SPHiMM','observe','47660XRneAl','_pointerUp','422767GgaPSN','style','removeAttribute','14541012tuZSDn','_getDomElement','18lIRqqs','secondary','primary','horizontal','_startSize','orientation','flex','length','_pointerDown','1\x201\x20','22TzZZLK','3880180PMcBer','_setFlexBasis','min','rtl','pointerId','vertical','decorate','width','_startResize','_secondaryChild','328KjOIsV','2FcZHob','object'];a=function(){return z;};return a();}import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [p(0xdc)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[p(0xbe)]=p(0xbc);['observe'];[p(0xac)];['_primaryChild'];[p(0xcd)];['_splitter'];[p(0xbd)];['_startX'];['_startY'];constructor(){var q=p;super(),this['_splitter']=this[q(0xb8)]('splitter'),this['_splitter']['onpointerdown']=this[q(0xc1)][q(0xd3)](this),this['_splitter'][q(0xaa)]=this['_pointerMove'][q(0xd3)](this),this[q(0xd9)]['onpointerup']=this[q(0xb3)]['bind'](this),this['_parseAttributesToProperties']();}[p(0xd7)](){var r=p;this[r(0xb1)]&&(this[r(0xac)]=new MutationObserver(this[r(0xdd)]),this[r(0xac)]['observe'](this,{'childList':!![]})),this[r(0xdd)]();}['_assignSlots'](){var s=p;let d=0x0;for(const e of this['children']){if(d===0x0)this[s(0xd5)]=e,e['setAttribute'](s(0xd4),s(0xbb));else d==0x1?(this[s(0xcd)]=e,e['setAttribute']('slot',s(0xba))):e[s(0xb6)]('slot');d++;}}[p(0xc5)](c,d,e){var t=p;d=Math['max'](0x0,Math[t(0xc6)](d,e)),c[t(0xb5)][t(0xbf)]=t(0xc2)+d+'px';}['_pointerDown'](c){var u=p;this['_splitter']['setPointerCapture'](c[u(0xc8)]),this['_startResize'](c['x'],c['y']),c['preventDefault']();}[p(0xcc)](c,d){var v=p;if(!this['_primaryChild']||!this[v(0xcd)])return;this['_startX']=c,this[v(0xaf)]=d;var e=this['orientation']===v(0xc9)?'height':v(0xcb);this[v(0xbd)]={'container':this['getBoundingClientRect']()[e]-this[v(0xd9)][v(0xae)]()[e],'primary':this[v(0xd5)][v(0xae)]()[e],'secondary':this[v(0xcd)][v(0xae)]()[e]};}[p(0xb3)](c){var w=p;this[w(0xd9)][w(0xd2)](c['pointerId']),this[w(0xd8)]();}['_stopresize'](){var x=p;if(!this['_primaryChild']||!this[x(0xcd)])return;this[x(0xbd)]=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}[p(0xda)](c,d){var y=p;if(!this['_startSize'])return;let e=d-this[y(0xaf)],f=c-this['_startX'];var g=this[y(0xbe)]===y(0xc9)?e:f;const h=this['orientation']!==y(0xc9)&&this['getAttribute'](y(0xab))===y(0xc7),i=h?-g:g;this[y(0xc5)](this['_primaryChild'],this[y(0xbd)]['primary']+i,this['_startSize']['container']),this[y(0xc5)](this['_secondaryChild'],this[y(0xbd)][y(0xba)]-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView['prototype'],'orientation',void 0x0),__decorate([property(Boolean)],SplitView['prototype'],p(0xb1),void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);function b(c,d){c=c-0xaa;var e=a();var f=e[c];return f;}export{SplitView};