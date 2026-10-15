function b(c,d){c=c-0x10d;var e=a();var f=e[c];return f;}function a(){var z=['object','function','setAttribute','getBoundingClientRect','bind','_primaryChild','max','dir','_setFlexBasis','orientation','node-projects-split-view','_secondaryChild','pointerId','_observer','1\x201\x20','horizontal','flex','height','_startX','_splitter','386038skNSIR','decorate','6jPrtBj','_pointerMove','min','container','setPointerCapture','_stopresize','_assignSlots','88297PWDjlN','observe','_startSize','width','secondary','_parseAttributesToProperties','_pointerDown','slot','_startResize','getAttribute','_getDomElement','length','_startY','vertical','primary','7530136YjXRrP','prototype','1385190rGkyxi','_onHandleMove','464307JfROFd','1523776cLrlMD','style','defineProperty','91469SdhpxS'];a=function(){return z;};return a();}var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x12c))/0x1+parseInt(n(0x123))/0x2+-parseInt(n(0x13f))/0x3+-parseInt(n(0x140))/0x4+-parseInt(n(0x13d))/0x5+-parseInt(n(0x125))/0x6*(parseInt(n(0x10e))/0x7)+parseInt(n(0x13b))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x35c0b));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments[o(0x137)],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect===o(0x10f)&&typeof Reflect[o(0x124)]===o(0x110))k=Reflect[o(0x124)](e,f,g,h);else{for(var m=e[o(0x137)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0x10d)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [p(0x141)]=css`
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
        <slot id="secondary" name="secondary"></slot>`;[p(0x118)]=p(0x11e);['observe'];[p(0x11c)];['_primaryChild'];['_secondaryChild'];[p(0x122)];['_startSize'];['_startX'];[p(0x138)];constructor(){var q=p;super(),this[q(0x122)]=this[q(0x136)]('splitter'),this['_splitter']['onpointerdown']=this['_pointerDown'][q(0x113)](this),this['_splitter']['onpointermove']=this['_pointerMove'][q(0x113)](this),this[q(0x122)]['onpointerup']=this['_pointerUp']['bind'](this),this[q(0x131)]();}['ready'](){var r=p;this[r(0x12d)]&&(this['_observer']=new MutationObserver(this['_assignSlots']),this[r(0x11c)]['observe'](this,{'childList':!![]})),this['_assignSlots']();}[p(0x12b)](){var s=p;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e[s(0x111)]('slot',s(0x13a));else d==0x1?(this['_secondaryChild']=e,e['setAttribute']('slot',s(0x130))):e['removeAttribute'](s(0x133));d++;}}['_setFlexBasis'](c,d,e){var t=p;d=Math[t(0x115)](0x0,Math[t(0x127)](d,e)),c['style'][t(0x11f)]=t(0x11d)+d+'px';}[p(0x132)](c){var u=p;this[u(0x122)][u(0x129)](c['pointerId']),this[u(0x134)](c['x'],c['y']),c['preventDefault']();}[p(0x134)](c,d){var v=p;if(!this['_primaryChild']||!this['_secondaryChild'])return;this['_startX']=c,this['_startY']=d;var e=this['orientation']===v(0x139)?v(0x120):v(0x12f);this['_startSize']={'container':this[v(0x112)]()[e]-this[v(0x122)]['getBoundingClientRect']()[e],'primary':this['_primaryChild'][v(0x112)]()[e],'secondary':this[v(0x11a)][v(0x112)]()[e]};}['_pointerUp'](c){var w=p;this['_splitter']['releasePointerCapture'](c[w(0x11b)]),this[w(0x12a)]();}[p(0x12a)](){var x=p;if(!this[x(0x114)]||!this[x(0x11a)])return;this['_startSize']=null;}[p(0x126)](c){this['_onHandleMove'](c['x'],c['y']);}[p(0x13e)](c,d){var y=p;if(!this[y(0x12e)])return;let e=d-this['_startY'],f=c-this[y(0x121)];var g=this['orientation']==='vertical'?e:f;const h=this[y(0x118)]!=='vertical'&&this[y(0x135)](y(0x116))==='rtl',i=h?-g:g;this[y(0x117)](this['_primaryChild'],this['_startSize'][y(0x13a)]+i,this[y(0x12e)]['container']),this[y(0x117)](this['_secondaryChild'],this[y(0x12e)][y(0x130)]-i,this['_startSize'][y(0x128)]);}};__decorate([property(String)],SplitView[p(0x13c)],'orientation',void 0x0),__decorate([property(Boolean)],SplitView['prototype'],p(0x12d),void 0x0),SplitView=__decorate([customElement(p(0x119))],SplitView);export{SplitView};