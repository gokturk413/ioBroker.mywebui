var p=b;function a(){var z=['_pointerDown','dir','prototype','4859040plWNzh','observe','_secondaryChild','754HvXLWG','flex','_observer','_pointerMove','setPointerCapture','_startX','bind','2221890hlCehW','length','_startY','slot','secondary','onpointerup','releasePointerCapture','_primaryChild','ready','1116CpWJSS','onpointermove','1\x201\x20','vertical','_stopresize','_getDomElement','children','152xMohLl','19040tvZIvE','_onHandleMove','horizontal','3867mpXkmH','orientation','pointerId','getBoundingClientRect','7370146cbABBL','_setFlexBasis','_startSize','120021EQTNOm','container','_splitter','min','_startResize','object','getOwnPropertyDescriptor','2590435bixXQd'];a=function(){return z;};return a();}(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x1f6))/0x1*(-parseInt(n(0x1db))/0x2)+-parseInt(n(0x1fd))/0x3*(parseInt(n(0x1f2))/0x4)+-parseInt(n(0x1d4))/0x5+parseInt(n(0x1d8))/0x6+parseInt(n(0x1fa))/0x7+parseInt(n(0x1f3))/0x8*(-parseInt(n(0x1eb))/0x9)+-parseInt(n(0x1e2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbabf3));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object[o(0x1d3)](f,g):h,l;if(typeof Reflect===o(0x1d2)&&typeof Reflect['decorate']==='function')k=Reflect['decorate'](e,f,g,h);else{for(var m=e[o(0x1e3)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <slot id="secondary" name="secondary"></slot>`;['orientation']=p(0x1f5);['observe'];['_observer'];[p(0x1e9)];['_secondaryChild'];[p(0x1cf)];[p(0x1fc)];[p(0x1e0)];['_startY'];constructor(){var q=p;super(),this[q(0x1cf)]=this[q(0x1f0)]('splitter'),this['_splitter']['onpointerdown']=this[q(0x1d5)][q(0x1e1)](this),this['_splitter'][q(0x1ec)]=this[q(0x1de)]['bind'](this),this['_splitter'][q(0x1e7)]=this['_pointerUp']['bind'](this),this['_parseAttributesToProperties']();}[p(0x1ea)](){var r=p;this[r(0x1d9)]&&(this[r(0x1dd)]=new MutationObserver(this['_assignSlots']),this['_observer'][r(0x1d9)](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=p;let d=0x0;for(const e of this[s(0x1f1)]){if(d===0x0)this[s(0x1e9)]=e,e['setAttribute'](s(0x1e5),'primary');else d==0x1?(this[s(0x1da)]=e,e['setAttribute'](s(0x1e5),s(0x1e6))):e['removeAttribute'](s(0x1e5));d++;}}[p(0x1fb)](c,d,e){var t=p;d=Math['max'](0x0,Math[t(0x1d0)](d,e)),c['style'][t(0x1dc)]=t(0x1ed)+d+'px';}['_pointerDown'](c){var u=p;this['_splitter'][u(0x1df)](c[u(0x1f8)]),this['_startResize'](c['x'],c['y']),c['preventDefault']();}[p(0x1d1)](c,d){var v=p;if(!this['_primaryChild']||!this['_secondaryChild'])return;this['_startX']=c,this['_startY']=d;var e=this['orientation']===v(0x1ee)?'height':'width';this['_startSize']={'container':this['getBoundingClientRect']()[e]-this['_splitter']['getBoundingClientRect']()[e],'primary':this['_primaryChild'][v(0x1f9)]()[e],'secondary':this[v(0x1da)]['getBoundingClientRect']()[e]};}['_pointerUp'](c){var w=p;this[w(0x1cf)][w(0x1e8)](c[w(0x1f8)]),this[w(0x1ef)]();}['_stopresize'](){var x=p;if(!this['_primaryChild']||!this['_secondaryChild'])return;this[x(0x1fc)]=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}[p(0x1f4)](c,d){var y=p;if(!this['_startSize'])return;let e=d-this[y(0x1e4)],f=c-this[y(0x1e0)];var g=this['orientation']==='vertical'?e:f;const h=this[y(0x1f7)]!==y(0x1ee)&&this['getAttribute'](y(0x1d6))==='rtl',i=h?-g:g;this[y(0x1fb)](this['_primaryChild'],this['_startSize']['primary']+i,this['_startSize'][y(0x1fe)]),this['_setFlexBasis'](this['_secondaryChild'],this['_startSize']['secondary']-i,this[y(0x1fc)]['container']);}};function b(c,d){c=c-0x1cf;var e=a();var f=e[c];return f;}__decorate([property(String)],SplitView['prototype'],p(0x1f7),void 0x0),__decorate([property(Boolean)],SplitView[p(0x1d7)],'observe',void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};