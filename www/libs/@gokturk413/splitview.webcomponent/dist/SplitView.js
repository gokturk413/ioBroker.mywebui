var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0xfa))/0x1*(parseInt(n(0x111))/0x2)+parseInt(n(0x123))/0x3+parseInt(n(0x10b))/0x4*(-parseInt(n(0x110))/0x5)+parseInt(n(0x11f))/0x6+-parseInt(n(0x122))/0x7*(-parseInt(n(0x115))/0x8)+-parseInt(n(0xfd))/0x9+-parseInt(n(0x102))/0xa*(parseInt(n(0xff))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd3feb));function a(){var z=['getBoundingClientRect','orientation','defineProperty','_observer','setPointerCapture','preventDefault','observe','451852YAGPyM','secondary','max','_startSize','_parseAttributesToProperties','25lyaYPz','44SAftNT','vertical','_assignSlots','bind','8773144EtPyHD','_splitter','style','_secondaryChild','function','_startY','slot','_setFlexBasis','container','flex','6358482kDDmCT','_stopresize','horizontal','7oQtQVW','2547939sukCOn','getOwnPropertyDescriptor','onpointerup','_pointerDown','getAttribute','decorate','template','57310ZyVFkE','children','pointerId','14347323XathBx','_pointerUp','110LkBKJu','_startX','_primaryChild','1239230UBTzFR','__decorate'];a=function(){return z;};return a();}var __decorate=this&&this[o(0x103)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object[p(0x124)](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect['decorate']===p(0x119))k=Reflect[p(0x128)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0x106)](f,g,k),k;};function b(c,d){c=c-0xf9;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [o(0x117)]=css`
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
        }`;static [o(0xf9)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[o(0x105)]=o(0x121);[o(0x10a)];['_observer'];['_primaryChild'];['_secondaryChild'];['_splitter'];[o(0x10e)];[o(0x100)];['_startY'];constructor(){var q=o;super(),this[q(0x116)]=this['_getDomElement']('splitter'),this[q(0x116)]['onpointerdown']=this[q(0x126)]['bind'](this),this[q(0x116)]['onpointermove']=this['_pointerMove'][q(0x114)](this),this[q(0x116)][q(0x125)]=this[q(0xfe)][q(0x114)](this),this[q(0x10f)]();}['ready'](){var r=o;this[r(0x10a)]&&(this['_observer']=new MutationObserver(this[r(0x113)]),this[r(0x107)]['observe'](this,{'childList':!![]})),this[r(0x113)]();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this[s(0xfb)]){if(d===0x0)this[s(0x101)]=e,e['setAttribute']('slot','primary');else d==0x1?(this[s(0x118)]=e,e['setAttribute']('slot','secondary')):e['removeAttribute'](s(0x11b));d++;}}[o(0x11c)](c,d,e){var t=o;d=Math[t(0x10d)](0x0,Math['min'](d,e)),c[t(0x117)][t(0x11e)]='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=o;this[u(0x116)][u(0x108)](c[u(0xfc)]),this['_startResize'](c['x'],c['y']),c[u(0x109)]();}['_startResize'](c,d){var v=o;if(!this['_primaryChild']||!this[v(0x118)])return;this['_startX']=c,this[v(0x11a)]=d;var e=this['orientation']===v(0x112)?'height':'width';this['_startSize']={'container':this[v(0x104)]()[e]-this['_splitter']['getBoundingClientRect']()[e],'primary':this[v(0x101)][v(0x104)]()[e],'secondary':this['_secondaryChild']['getBoundingClientRect']()[e]};}[o(0xfe)](c){var w=o;this['_splitter']['releasePointerCapture'](c['pointerId']),this[w(0x120)]();}['_stopresize'](){var x=o;if(!this[x(0x101)]||!this[x(0x118)])return;this['_startSize']=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=o;if(!this[y(0x10e)])return;let e=d-this[y(0x11a)],f=c-this['_startX'];var g=this['orientation']===y(0x112)?e:f;const h=this[y(0x105)]!=='vertical'&&this[y(0x127)]('dir')==='rtl',i=h?-g:g;this[y(0x11c)](this[y(0x101)],this['_startSize']['primary']+i,this['_startSize'][y(0x11d)]),this[y(0x11c)](this[y(0x118)],this['_startSize'][y(0x10c)]-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView['prototype'],o(0x105),void 0x0),__decorate([property(Boolean)],SplitView['prototype'],'observe',void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};