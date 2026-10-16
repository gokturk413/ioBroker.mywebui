var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x120))/0x1*(parseInt(n(0x109))/0x2)+parseInt(n(0x131))/0x3*(parseInt(n(0x13d))/0x4)+-parseInt(n(0x141))/0x5+parseInt(n(0x11f))/0x6*(-parseInt(n(0x13e))/0x7)+parseInt(n(0x13c))/0x8*(parseInt(n(0x135))/0x9)+-parseInt(n(0x12b))/0xa+-parseInt(n(0x116))/0xb*(-parseInt(n(0x115))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9b818));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments[o(0x111)],k=j<0x3?f:h===null?h=Object[o(0x123)](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect['decorate']===o(0x114))k=Reflect[o(0x13a)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x109;var e=a();var f=e[c];return f;}function a(){var z=['_startY','_observer','6ijdbMs','onpointerup','slot','releasePointerCapture','2909178mvDYXh','splitter','preventDefault','pointerId','_pointerMove','decorate','min','8pJnMJk','1997484QPLRTF','7791YTowAQ','flex','container','3838995bbStlc','style','2150276JQVztC','_setFlexBasis','prototype','vertical','onpointermove','getBoundingClientRect','_startSize','observe','length','_assignSlots','_pointerUp','function','794652kpfYCB','55RnbVTe','children','primary','_startResize','_getDomElement','_primaryChild','secondary','horizontal','bind','3498jsCuSp','1VeJNgO','setAttribute','_pointerDown','getOwnPropertyDescriptor','_secondaryChild','_parseAttributesToProperties','_splitter','1\x201\x20','orientation','removeAttribute','node-projects-split-view','6745970sknHIx','_stopresize','width','_startX'];a=function(){return z;};return a();}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <slot id="secondary" name="secondary"></slot>`;['orientation']=p(0x11d);[p(0x110)];['_observer'];['_primaryChild'];[p(0x124)];['_splitter'];['_startSize'];['_startX'];[p(0x12f)];constructor(){var q=p;super(),this['_splitter']=this[q(0x11a)](q(0x136)),this[q(0x126)]['onpointerdown']=this[q(0x122)]['bind'](this),this[q(0x126)][q(0x10d)]=this['_pointerMove'][q(0x11e)](this),this[q(0x126)][q(0x132)]=this[q(0x113)]['bind'](this),this[q(0x125)]();}['ready'](){var r=p;this['observe']&&(this[r(0x130)]=new MutationObserver(this[r(0x112)]),this[r(0x130)]['observe'](this,{'childList':!![]})),this[r(0x112)]();}[p(0x112)](){var s=p;let d=0x0;for(const e of this[s(0x117)]){if(d===0x0)this[s(0x11b)]=e,e[s(0x121)]('slot',s(0x118));else d==0x1?(this['_secondaryChild']=e,e['setAttribute']('slot','secondary')):e[s(0x129)](s(0x133));d++;}}['_setFlexBasis'](c,d,e){var t=p;d=Math['max'](0x0,Math[t(0x13b)](d,e)),c[t(0x142)][t(0x13f)]=t(0x127)+d+'px';}['_pointerDown'](c){var u=p;this[u(0x126)]['setPointerCapture'](c[u(0x138)]),this[u(0x119)](c['x'],c['y']),c[u(0x137)]();}[p(0x119)](c,d){var v=p;if(!this[v(0x11b)]||!this[v(0x124)])return;this[v(0x12e)]=c,this[v(0x12f)]=d;var e=this[v(0x128)]==='vertical'?'height':v(0x12d);this[v(0x10f)]={'container':this['getBoundingClientRect']()[e]-this['_splitter']['getBoundingClientRect']()[e],'primary':this['_primaryChild']['getBoundingClientRect']()[e],'secondary':this[v(0x124)][v(0x10e)]()[e]};}['_pointerUp'](c){var w=p;this[w(0x126)][w(0x134)](c['pointerId']),this[w(0x12c)]();}['_stopresize'](){var x=p;if(!this[x(0x11b)]||!this['_secondaryChild'])return;this[x(0x10f)]=null;}[p(0x139)](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=p;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this['orientation']==='vertical'?e:f;const h=this[y(0x128)]!==y(0x10c)&&this['getAttribute']('dir')==='rtl',i=h?-g:g;this['_setFlexBasis'](this['_primaryChild'],this['_startSize']['primary']+i,this['_startSize'][y(0x140)]),this[y(0x10a)](this[y(0x124)],this[y(0x10f)][y(0x11c)]-i,this[y(0x10f)]['container']);}};__decorate([property(String)],SplitView['prototype'],'orientation',void 0x0),__decorate([property(Boolean)],SplitView[p(0x10b)],'observe',void 0x0),SplitView=__decorate([customElement(p(0x12a))],SplitView);export{SplitView};