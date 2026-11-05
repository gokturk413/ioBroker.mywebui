var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x186))/0x1+-parseInt(n(0x16a))/0x2+parseInt(n(0x174))/0x3+parseInt(n(0x181))/0x4+parseInt(n(0x165))/0x5*(-parseInt(n(0x17d))/0x6)+parseInt(n(0x159))/0x7+parseInt(n(0x188))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5fdb3));var __decorate=this&&this[o(0x15a)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect['decorate']===p(0x183))k=Reflect[p(0x170)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0x16b)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <slot id="secondary" name="secondary"></slot>`;[o(0x166)]='horizontal';['observe'];[o(0x17c)];['_primaryChild'];['_secondaryChild'];['_splitter'];[o(0x173)];['_startX'];[o(0x176)];constructor(){var q=o;super(),this[q(0x15d)]=this[q(0x180)]('splitter'),this[q(0x15d)][q(0x167)]=this[q(0x185)][q(0x169)](this),this[q(0x15d)]['onpointermove']=this[q(0x17e)]['bind'](this),this['_splitter'][q(0x17a)]=this[q(0x16c)]['bind'](this),this['_parseAttributesToProperties']();}[o(0x16e)](){var r=o;this[r(0x164)]&&(this['_observer']=new MutationObserver(this['_assignSlots']),this[r(0x17c)][r(0x164)](this,{'childList':!![]})),this['_assignSlots']();}[o(0x162)](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this[s(0x160)]=e,e[s(0x15f)]('slot','primary');else d==0x1?(this['_secondaryChild']=e,e[s(0x15f)](s(0x17f),s(0x179))):e['removeAttribute']('slot');d++;}}['_setFlexBasis'](c,d,e){var t=o;d=Math['max'](0x0,Math[t(0x175)](d,e)),c[t(0x177)][t(0x168)]='1\x201\x20'+d+'px';}[o(0x185)](c){var u=o;this['_splitter'][u(0x15e)](c['pointerId']),this['_startResize'](c['x'],c['y']),c[u(0x171)]();}['_startResize'](c,d){var v=o;if(!this['_primaryChild']||!this['_secondaryChild'])return;this['_startX']=c,this[v(0x176)]=d;var e=this['orientation']==='vertical'?v(0x16f):'width';this['_startSize']={'container':this[v(0x15c)]()[e]-this['_splitter'][v(0x15c)]()[e],'primary':this['_primaryChild']['getBoundingClientRect']()[e],'secondary':this[v(0x172)][v(0x15c)]()[e]};}['_pointerUp'](c){var w=o;this['_splitter'][w(0x17b)](c[w(0x163)]),this[w(0x184)]();}['_stopresize'](){var x=o;if(!this['_primaryChild']||!this[x(0x172)])return;this[x(0x173)]=null;}[o(0x17e)](c){this['_onHandleMove'](c['x'],c['y']);}[o(0x178)](c,d){var y=o;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this[y(0x166)]==='vertical'?e:f;const h=this['orientation']!==y(0x16d)&&this['getAttribute'](y(0x15b))==='rtl',i=h?-g:g;this['_setFlexBasis'](this[y(0x160)],this[y(0x173)][y(0x187)]+i,this[y(0x173)][y(0x161)]),this[y(0x158)](this[y(0x172)],this[y(0x173)][y(0x179)]-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView[o(0x182)],o(0x166),void 0x0),__decorate([property(Boolean)],SplitView['prototype'],o(0x164),void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};function b(c,d){c=c-0x158;var e=a();var f=e[c];return f;}function a(){var z=['_pointerMove','slot','_getDomElement','438560iRPsNQ','prototype','function','_stopresize','_pointerDown','738135OkxKYX','primary','1937680hIAAmq','_setFlexBasis','4129223htXmEn','__decorate','dir','getBoundingClientRect','_splitter','setPointerCapture','setAttribute','_primaryChild','container','_assignSlots','pointerId','observe','5gMBAAL','orientation','onpointerdown','flex','bind','1322150UXkERx','defineProperty','_pointerUp','vertical','ready','height','decorate','preventDefault','_secondaryChild','_startSize','65043BoWaBz','min','_startY','style','_onHandleMove','secondary','onpointerup','releasePointerCapture','_observer','3887118ZKZDpV'];a=function(){return z;};return a();}