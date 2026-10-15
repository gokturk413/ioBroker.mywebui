var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x1d0))/0x1*(-parseInt(n(0x1ca))/0x2)+parseInt(n(0x1cf))/0x3*(-parseInt(n(0x1c3))/0x4)+parseInt(n(0x1c9))/0x5*(parseInt(n(0x1cb))/0x6)+-parseInt(n(0x1b4))/0x7+parseInt(n(0x1ce))/0x8+parseInt(n(0x1ad))/0x9*(-parseInt(n(0x1b8))/0xa)+parseInt(n(0x1a6))/0xb*(parseInt(n(0x1ae))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x882a9));var __decorate=this&&this[o(0x1d6)]||function(e,f,g,h){var p=o,j=arguments[p(0x1c2)],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[p(0x1bc)]==='function')k=Reflect['decorate'](e,f,g,h);else{for(var m=e[p(0x1c2)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1a6;var e=a();var f=e[c];return f;}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [o(0x1cd)]=css`
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
        }`;static [o(0x1af)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[o(0x1b5)]=o(0x1b6);[o(0x1b2)];['_observer'];['_primaryChild'];['_secondaryChild'];['_splitter'];[o(0x1d7)];['_startX'];[o(0x1bf)];constructor(){var q=o;super(),this['_splitter']=this['_getDomElement']('splitter'),this['_splitter'][q(0x1b1)]=this[q(0x1be)]['bind'](this),this[q(0x1ac)]['onpointermove']=this['_pointerMove'][q(0x1d3)](this),this['_splitter']['onpointerup']=this['_pointerUp'][q(0x1d3)](this),this[q(0x1c5)]();}['ready'](){var r=o;this['observe']&&(this[r(0x1a9)]=new MutationObserver(this['_assignSlots']),this['_observer']['observe'](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e['setAttribute']('slot',s(0x1c6));else d==0x1?(this[s(0x1a7)]=e,e[s(0x1c1)](s(0x1ab),'secondary')):e['removeAttribute'](s(0x1ab));d++;}}[o(0x1c7)](c,d,e){var t=o;d=Math['max'](0x0,Math['min'](d,e)),c[t(0x1cd)][t(0x1c4)]=t(0x1b0)+d+'px';}['_pointerDown'](c){var u=o;this['_splitter'][u(0x1ba)](c[u(0x1b3)]),this['_startResize'](c['x'],c['y']),c[u(0x1d1)]();}['_startResize'](c,d){var v=o;if(!this['_primaryChild']||!this['_secondaryChild'])return;this['_startX']=c,this['_startY']=d;var e=this['orientation']===v(0x1d2)?v(0x1c0):'width';this['_startSize']={'container':this['getBoundingClientRect']()[e]-this[v(0x1ac)]['getBoundingClientRect']()[e],'primary':this['_primaryChild'][v(0x1b7)]()[e],'secondary':this['_secondaryChild']['getBoundingClientRect']()[e]};}[o(0x1bd)](c){var w=o;this[w(0x1ac)][w(0x1a8)](c['pointerId']),this[w(0x1d5)]();}[o(0x1d5)](){var x=o;if(!this['_primaryChild']||!this['_secondaryChild'])return;this[x(0x1d7)]=null;}['_pointerMove'](c){var y=o;this[y(0x1cc)](c['x'],c['y']);}['_onHandleMove'](c,d){var z=o;if(!this['_startSize'])return;let e=d-this[z(0x1bf)],f=c-this[z(0x1b9)];var g=this['orientation']==='vertical'?e:f;const h=this['orientation']!=='vertical'&&this['getAttribute'](z(0x1c8))==='rtl',i=h?-g:g;this['_setFlexBasis'](this['_primaryChild'],this[z(0x1d7)]['primary']+i,this[z(0x1d7)]['container']),this['_setFlexBasis'](this['_secondaryChild'],this['_startSize']['secondary']-i,this[z(0x1d7)][z(0x1d4)]);}};__decorate([property(String)],SplitView[o(0x1aa)],'orientation',void 0x0),__decorate([property(Boolean)],SplitView['prototype'],o(0x1b2),void 0x0),SplitView=__decorate([customElement(o(0x1bb))],SplitView);export{SplitView};function a(){var A=['observe','pointerId','453474hOgllT','orientation','horizontal','getBoundingClientRect','12020iHkCdw','_startX','setPointerCapture','node-projects-split-view','decorate','_pointerUp','_pointerDown','_startY','height','setAttribute','length','981684safSGd','flex','_parseAttributesToProperties','primary','_setFlexBasis','dir','315SunJFq','1981322eiXopv','52146VWYNSK','_onHandleMove','style','2777424StejjB','9HhyppI','1PdGaPN','preventDefault','vertical','bind','container','_stopresize','__decorate','_startSize','1583549kwkmJV','_secondaryChild','releasePointerCapture','_observer','prototype','slot','_splitter','6354sEHdVV','192rYEOxK','template','1\x201\x20','onpointerdown'];a=function(){return A;};return a();}