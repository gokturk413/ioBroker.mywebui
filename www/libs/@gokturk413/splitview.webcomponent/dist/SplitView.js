var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x16e))/0x1+-parseInt(n(0x158))/0x2*(parseInt(n(0x144))/0x3)+parseInt(n(0x147))/0x4*(parseInt(n(0x161))/0x5)+-parseInt(n(0x152))/0x6*(-parseInt(n(0x164))/0x7)+parseInt(n(0x168))/0x8*(-parseInt(n(0x15e))/0x9)+parseInt(n(0x16b))/0xa+-parseInt(n(0x14f))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7d7ce));var __decorate=this&&this[o(0x14c)]||function(e,f,g,h){var p=o,j=arguments[p(0x14e)],k=j<0x3?f:h===null?h=Object[p(0x163)](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[p(0x173)]===p(0x159))k=Reflect['decorate'](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};function a(){var z=['_assignSlots','8ZnyVct','template','prototype','_pointerUp','rtl','__decorate','_startY','length','3500464UyFbCP','_setFlexBasis','node-projects-split-view','60ZPSTuO','height','_startSize','ready','observe','onpointerup','3466GlFYTU','function','style','_pointerDown','_primaryChild','orientation','1451781pOrLTd','_pointerMove','_getDomElement','746290iFWobh','_splitter','getOwnPropertyDescriptor','683830hmrIyE','max','1\x201\x20','bind','8aijnmm','vertical','preventDefault','2804720JnbadX','primary','min','319740dYytBg','_startX','width','_observer','_startResize','decorate','getBoundingClientRect','_secondaryChild','_parseAttributesToProperties','secondary','children','pointerId','_stopresize','1527KPDxfS','slot'];a=function(){return z;};return a();}import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x13f;var e=a();var f=e[c];return f;}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x148)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']='horizontal';[o(0x156)];[o(0x171)];['_primaryChild'];[o(0x175)];['_splitter'];['_startSize'];[o(0x16f)];[o(0x14d)];constructor(){var q=o;super(),this[q(0x162)]=this[q(0x160)]('splitter'),this['_splitter']['onpointerdown']=this['_pointerDown']['bind'](this),this['_splitter']['onpointermove']=this['_pointerMove'][q(0x167)](this),this['_splitter'][q(0x157)]=this[q(0x14a)][q(0x167)](this),this[q(0x13f)]();}[o(0x155)](){var r=o;this['observe']&&(this['_observer']=new MutationObserver(this[r(0x146)]),this['_observer'][r(0x156)](this,{'childList':!![]})),this[r(0x146)]();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this[s(0x141)]){if(d===0x0)this[s(0x15c)]=e,e['setAttribute'](s(0x145),s(0x16c));else d==0x1?(this[s(0x175)]=e,e['setAttribute']('slot',s(0x140))):e['removeAttribute'](s(0x145));d++;}}['_setFlexBasis'](c,d,e){var t=o;d=Math[t(0x165)](0x0,Math[t(0x16d)](d,e)),c[t(0x15a)]['flex']=t(0x166)+d+'px';}[o(0x15b)](c){var u=o;this['_splitter']['setPointerCapture'](c['pointerId']),this[u(0x172)](c['x'],c['y']),c[u(0x16a)]();}[o(0x172)](c,d){var v=o;if(!this['_primaryChild']||!this['_secondaryChild'])return;this['_startX']=c,this['_startY']=d;var e=this['orientation']==='vertical'?v(0x153):v(0x170);this[v(0x154)]={'container':this[v(0x174)]()[e]-this['_splitter']['getBoundingClientRect']()[e],'primary':this[v(0x15c)][v(0x174)]()[e],'secondary':this[v(0x175)][v(0x174)]()[e]};}[o(0x14a)](c){var w=o;this['_splitter']['releasePointerCapture'](c[w(0x142)]),this[w(0x143)]();}[o(0x143)](){var x=o;if(!this['_primaryChild']||!this[x(0x175)])return;this[x(0x154)]=null;}[o(0x15f)](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=o;if(!this[y(0x154)])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this['orientation']===y(0x169)?e:f;const h=this[y(0x15d)]!==y(0x169)&&this['getAttribute']('dir')===y(0x14b),i=h?-g:g;this[y(0x150)](this[y(0x15c)],this[y(0x154)]['primary']+i,this[y(0x154)]['container']),this[y(0x150)](this['_secondaryChild'],this['_startSize']['secondary']-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView['prototype'],'orientation',void 0x0),__decorate([property(Boolean)],SplitView[o(0x149)],'observe',void 0x0),SplitView=__decorate([customElement(o(0x151))],SplitView);export{SplitView};