var o=b;function a(){var A=['_startResize','7ZOOFUT','_pointerDown','decorate','160CEsmsJ','style','container','orientation','408700ffcaCs','rtl','_observer','_startSize','1171416AsYDrh','_assignSlots','1836704GbGZaz','_startX','_getDomElement','dir','getBoundingClientRect','591822iCUjZo','ready','_startY','observe','setAttribute','object','releasePointerCapture','_splitter','bind','preventDefault','height','587446lZuJNq','pointerId','5ukKDys','length','779192pOfDxY','_pointerUp','4266702chHAyb','slot','min','vertical','_stopresize','removeAttribute','_setFlexBasis','_secondaryChild','function','_onHandleMove','__decorate','secondary'];a=function(){return A;};return a();}(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x163))/0x1+parseInt(n(0x15f))/0x2+parseInt(n(0x17d))/0x3+-parseInt(n(0x179))/0x4*(parseInt(n(0x161))/0x5)+parseInt(n(0x165))/0x6+parseInt(n(0x172))/0x7*(-parseInt(n(0x14f))/0x8)+parseInt(n(0x154))/0x9*(-parseInt(n(0x175))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc1055));function b(c,d){c=c-0x14e;var e=a();var f=e[c];return f;}var __decorate=this&&this[o(0x16f)]||function(e,f,g,h){var p=o,j=arguments[p(0x162)],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect===p(0x159)&&typeof Reflect['decorate']===p(0x16d))k=Reflect[p(0x174)](e,f,g,h);else{for(var m=e[p(0x162)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [o(0x176)]=css`
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
        <slot id="secondary" name="secondary"></slot>`;['orientation']='horizontal';[o(0x157)];[o(0x17b)];['_primaryChild'];[o(0x16c)];[o(0x15b)];[o(0x17c)];['_startX'];[o(0x156)];constructor(){var q=o;super(),this[q(0x15b)]=this[q(0x151)]('splitter'),this['_splitter']['onpointerdown']=this[q(0x173)][q(0x15c)](this),this[q(0x15b)]['onpointermove']=this['_pointerMove'][q(0x15c)](this),this['_splitter']['onpointerup']=this[q(0x164)]['bind'](this),this['_parseAttributesToProperties']();}[o(0x155)](){var r=o;this[r(0x157)]&&(this[r(0x17b)]=new MutationObserver(this[r(0x14e)]),this['_observer']['observe'](this,{'childList':!![]})),this['_assignSlots']();}[o(0x14e)](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e['setAttribute'](s(0x166),'primary');else d==0x1?(this[s(0x16c)]=e,e[s(0x158)](s(0x166),s(0x170))):e[s(0x16a)](s(0x166));d++;}}[o(0x16b)](c,d,e){var t=o;d=Math['max'](0x0,Math[t(0x167)](d,e)),c['style']['flex']='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=o;this['_splitter']['setPointerCapture'](c[u(0x160)]),this['_startResize'](c['x'],c['y']),c[u(0x15d)]();}[o(0x171)](c,d){var v=o;if(!this['_primaryChild']||!this['_secondaryChild'])return;this[v(0x150)]=c,this['_startY']=d;var e=this[v(0x178)]==='vertical'?v(0x15e):'width';this[v(0x17c)]={'container':this['getBoundingClientRect']()[e]-this['_splitter']['getBoundingClientRect']()[e],'primary':this['_primaryChild'][v(0x153)]()[e],'secondary':this[v(0x16c)]['getBoundingClientRect']()[e]};}[o(0x164)](c){var w=o;this['_splitter'][w(0x15a)](c['pointerId']),this['_stopresize']();}[o(0x169)](){var x=o;if(!this['_primaryChild']||!this[x(0x16c)])return;this['_startSize']=null;}['_pointerMove'](c){var y=o;this[y(0x16e)](c['x'],c['y']);}['_onHandleMove'](c,d){var z=o;if(!this[z(0x17c)])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this['orientation']===z(0x168)?e:f;const h=this['orientation']!==z(0x168)&&this['getAttribute'](z(0x152))===z(0x17a),i=h?-g:g;this[z(0x16b)](this['_primaryChild'],this['_startSize']['primary']+i,this['_startSize'][z(0x177)]),this['_setFlexBasis'](this['_secondaryChild'],this[z(0x17c)]['secondary']-i,this['_startSize'][z(0x177)]);}};__decorate([property(String)],SplitView['prototype'],'orientation',void 0x0),__decorate([property(Boolean)],SplitView['prototype'],o(0x157),void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};