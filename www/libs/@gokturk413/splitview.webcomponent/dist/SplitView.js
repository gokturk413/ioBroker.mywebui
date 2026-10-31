var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x17c))/0x1+parseInt(n(0x186))/0x2+parseInt(n(0x160))/0x3*(-parseInt(n(0x167))/0x4)+-parseInt(n(0x16d))/0x5+-parseInt(n(0x173))/0x6*(-parseInt(n(0x161))/0x7)+parseInt(n(0x17b))/0x8+parseInt(n(0x165))/0x9*(parseInt(n(0x15c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7f680));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments[o(0x174)],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect['decorate']===o(0x168))k=Reflect[o(0x15d)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0x15b)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x15b;var e=a();var f=e[c];return f;}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [p(0x178)]=css`
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
        }`;static [p(0x166)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[p(0x179)]='horizontal';[p(0x16b)];[p(0x16c)];['_primaryChild'];[p(0x189)];[p(0x16e)];[p(0x15f)];['_startX'];[p(0x17a)];constructor(){var q=p;super(),this[q(0x16e)]=this[q(0x171)]('splitter'),this['_splitter']['onpointerdown']=this['_pointerDown'][q(0x184)](this),this[q(0x16e)][q(0x164)]=this['_pointerMove'][q(0x184)](this),this['_splitter']['onpointerup']=this['_pointerUp'][q(0x184)](this),this['_parseAttributesToProperties']();}['ready'](){var r=p;this['observe']&&(this[r(0x16c)]=new MutationObserver(this['_assignSlots']),this['_observer']['observe'](this,{'childList':!![]})),this['_assignSlots']();}[p(0x17f)](){var s=p;let d=0x0;for(const e of this[s(0x187)]){if(d===0x0)this['_primaryChild']=e,e['setAttribute']('slot','primary');else d==0x1?(this[s(0x189)]=e,e['setAttribute'](s(0x181),'secondary')):e[s(0x175)]('slot');d++;}}[p(0x169)](c,d,e){var t=p;d=Math[t(0x170)](0x0,Math['min'](d,e)),c['style'][t(0x183)]='1\x201\x20'+d+'px';}[p(0x177)](c){this['_splitter']['setPointerCapture'](c['pointerId']),this['_startResize'](c['x'],c['y']),c['preventDefault']();}[p(0x16f)](c,d){var u=p;if(!this[u(0x172)]||!this[u(0x189)])return;this[u(0x17e)]=c,this['_startY']=d;var e=this[u(0x179)]==='vertical'?u(0x188):'width';this[u(0x15f)]={'container':this[u(0x185)]()[e]-this[u(0x16e)][u(0x185)]()[e],'primary':this['_primaryChild']['getBoundingClientRect']()[e],'secondary':this[u(0x189)]['getBoundingClientRect']()[e]};}[p(0x162)](c){var v=p;this[v(0x16e)]['releasePointerCapture'](c['pointerId']),this['_stopresize']();}[p(0x17d)](){var w=p;if(!this[w(0x172)]||!this[w(0x189)])return;this[w(0x15f)]=null;}[p(0x176)](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var x=p;if(!this[x(0x15f)])return;let e=d-this['_startY'],f=c-this[x(0x17e)];var g=this[x(0x179)]==='vertical'?e:f;const h=this['orientation']!==x(0x15e)&&this['getAttribute'](x(0x180))==='rtl',i=h?-g:g;this['_setFlexBasis'](this[x(0x172)],this['_startSize'][x(0x16a)]+i,this[x(0x15f)]['container']),this[x(0x169)](this[x(0x189)],this[x(0x15f)]['secondary']-i,this[x(0x15f)]['container']);}};__decorate([property(String)],SplitView[p(0x163)],p(0x179),void 0x0),__decorate([property(Boolean)],SplitView['prototype'],'observe',void 0x0),SplitView=__decorate([customElement(p(0x182))],SplitView);export{SplitView};function a(){var y=['node-projects-split-view','flex','bind','getBoundingClientRect','1866524wypLKu','children','height','_secondaryChild','defineProperty','644880vlFbJd','decorate','vertical','_startSize','898053CxCcUI','21sxvHgy','_pointerUp','prototype','onpointermove','63yOSbQZ','template','4xNbrKF','function','_setFlexBasis','primary','observe','_observer','4063730jfHBql','_splitter','_startResize','max','_getDomElement','_primaryChild','654516JLCNxM','length','removeAttribute','_pointerMove','_pointerDown','style','orientation','_startY','5291368IEuERC','739404nKwBqU','_stopresize','_startX','_assignSlots','dir','slot'];a=function(){return y;};return a();}