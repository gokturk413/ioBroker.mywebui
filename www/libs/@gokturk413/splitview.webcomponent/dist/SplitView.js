var o=b;function b(c,d){c=c-0x161;var e=a();var f=e[c];return f;}(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x18e))/0x1*(parseInt(n(0x185))/0x2)+parseInt(n(0x178))/0x3*(parseInt(n(0x16b))/0x4)+-parseInt(n(0x194))/0x5+parseInt(n(0x192))/0x6+-parseInt(n(0x166))/0x7+-parseInt(n(0x17d))/0x8*(parseInt(n(0x195))/0x9)+parseInt(n(0x17f))/0xa*(-parseInt(n(0x161))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3c2e9));var __decorate=this&&this[o(0x175)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object[p(0x19a)](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[p(0x16e)]===p(0x193))k=Reflect['decorate'](e,f,g,h);else{for(var m=e[p(0x199)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0x182)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x171)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']=o(0x18c);[o(0x198)];[o(0x16d)];[o(0x196)];['_secondaryChild'];['_splitter'];[o(0x17a)];[o(0x165)];[o(0x169)];constructor(){var q=o;super(),this['_splitter']=this['_getDomElement'](q(0x16c)),this[q(0x168)][q(0x186)]=this[q(0x188)][q(0x16a)](this),this['_splitter']['onpointermove']=this['_pointerMove']['bind'](this),this['_splitter'][q(0x17c)]=this['_pointerUp']['bind'](this),this['_parseAttributesToProperties']();}['ready'](){var r=o;this['observe']&&(this[r(0x16d)]=new MutationObserver(this['_assignSlots']),this[r(0x16d)]['observe'](this,{'childList':!![]})),this['_assignSlots']();}[o(0x177)](){var s=o;let d=0x0;for(const e of this[s(0x162)]){if(d===0x0)this['_primaryChild']=e,e[s(0x187)](s(0x164),s(0x18f));else d==0x1?(this['_secondaryChild']=e,e[s(0x187)](s(0x164),'secondary')):e['removeAttribute'](s(0x164));d++;}}[o(0x17b)](c,d,e){var t=o;d=Math['max'](0x0,Math[t(0x197)](d,e)),c[t(0x190)][t(0x174)]='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=o;this['_splitter']['setPointerCapture'](c[u(0x172)]),this['_startResize'](c['x'],c['y']),c['preventDefault']();}[o(0x18b)](c,d){var v=o;if(!this['_primaryChild']||!this[v(0x184)])return;this[v(0x165)]=c,this['_startY']=d;var e=this[v(0x18a)]===v(0x167)?v(0x176):v(0x170);this['_startSize']={'container':this['getBoundingClientRect']()[e]-this['_splitter']['getBoundingClientRect']()[e],'primary':this[v(0x196)][v(0x181)]()[e],'secondary':this[v(0x184)]['getBoundingClientRect']()[e]};}[o(0x183)](c){var w=o;this[w(0x168)][w(0x18d)](c[w(0x172)]),this[w(0x173)]();}[o(0x173)](){var x=o;if(!this['_primaryChild']||!this['_secondaryChild'])return;this[x(0x17a)]=null;}['_pointerMove'](c){var y=o;this[y(0x189)](c['x'],c['y']);}['_onHandleMove'](c,d){var z=o;if(!this['_startSize'])return;let e=d-this[z(0x169)],f=c-this['_startX'];var g=this['orientation']===z(0x167)?e:f;const h=this['orientation']!==z(0x167)&&this[z(0x19b)](z(0x16f))===z(0x17e),i=h?-g:g;this['_setFlexBasis'](this['_primaryChild'],this['_startSize']['primary']+i,this[z(0x17a)][z(0x191)]),this['_setFlexBasis'](this['_secondaryChild'],this[z(0x17a)][z(0x179)]-i,this[z(0x17a)]['container']);}};__decorate([property(String)],SplitView[o(0x180)],'orientation',void 0x0),__decorate([property(Boolean)],SplitView['prototype'],'observe',void 0x0),SplitView=__decorate([customElement(o(0x163))],SplitView);export{SplitView};function a(){var A=['width','template','pointerId','_stopresize','flex','__decorate','height','_assignSlots','51iNuZnC','secondary','_startSize','_setFlexBasis','onpointerup','24WLlgnH','rtl','110dGfuTz','prototype','getBoundingClientRect','defineProperty','_pointerUp','_secondaryChild','51036CvZuQA','onpointerdown','setAttribute','_pointerDown','_onHandleMove','orientation','_startResize','horizontal','releasePointerCapture','8FFUcQN','primary','style','container','2292162TyMlHO','function','1811370idlQrx','220185RAvzJo','_primaryChild','min','observe','length','getOwnPropertyDescriptor','getAttribute','31273VkoVLC','children','node-projects-split-view','slot','_startX','1741467RSpEAd','vertical','_splitter','_startY','bind','88484DzZhpu','splitter','_observer','decorate','dir'];a=function(){return A;};return a();}