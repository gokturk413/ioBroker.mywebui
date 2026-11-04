var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x152))/0x1+parseInt(n(0x154))/0x2*(-parseInt(n(0x147))/0x3)+-parseInt(n(0x137))/0x4*(parseInt(n(0x12e))/0x5)+parseInt(n(0x12f))/0x6+-parseInt(n(0x13b))/0x7*(-parseInt(n(0x14b))/0x8)+-parseInt(n(0x14e))/0x9+parseInt(n(0x14a))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3b22c));function b(c,d){c=c-0x12b;var e=a();var f=e[c];return f;}var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object[o(0x136)](f,g):h,l;if(typeof Reflect===o(0x140)&&typeof Reflect[o(0x141)]===o(0x12d))k=Reflect['decorate'](e,f,g,h);else{for(var m=e[o(0x156)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0x13e)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [p(0x14f)]=css`
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
        <slot id="secondary" name="secondary"></slot>`;['orientation']=p(0x146);['observe'];['_observer'];[p(0x134)];[p(0x157)];[p(0x135)];[p(0x150)];['_startX'];[p(0x144)];constructor(){var q=p;super(),this[q(0x135)]=this['_getDomElement'](q(0x142)),this['_splitter'][q(0x133)]=this['_pointerDown']['bind'](this),this['_splitter']['onpointermove']=this[q(0x143)][q(0x158)](this),this[q(0x135)]['onpointerup']=this['_pointerUp']['bind'](this),this['_parseAttributesToProperties']();}[p(0x132)](){var r=p;this['observe']&&(this[r(0x130)]=new MutationObserver(this[r(0x155)]),this['_observer']['observe'](this,{'childList':!![]})),this[r(0x155)]();}[p(0x155)](){var s=p;let d=0x0;for(const e of this['children']){if(d===0x0)this[s(0x134)]=e,e['setAttribute']('slot','primary');else d==0x1?(this[s(0x157)]=e,e['setAttribute']('slot',s(0x138))):e['removeAttribute']('slot');d++;}}['_setFlexBasis'](c,d,e){var t=p;d=Math['max'](0x0,Math['min'](d,e)),c[t(0x14f)]['flex']='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=p;this['_splitter'][u(0x145)](c[u(0x153)]),this[u(0x13a)](c['x'],c['y']),c['preventDefault']();}[p(0x13a)](c,d){var v=p;if(!this['_primaryChild']||!this['_secondaryChild'])return;this[v(0x148)]=c,this[v(0x144)]=d;var e=this[v(0x14d)]==='vertical'?'height':'width';this[v(0x150)]={'container':this['getBoundingClientRect']()[e]-this['_splitter'][v(0x149)]()[e],'primary':this[v(0x134)][v(0x149)]()[e],'secondary':this['_secondaryChild']['getBoundingClientRect']()[e]};}[p(0x13d)](c){var w=p;this[w(0x135)][w(0x14c)](c['pointerId']),this[w(0x12c)]();}['_stopresize'](){var x=p;if(!this['_primaryChild']||!this[x(0x157)])return;this[x(0x150)]=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=p;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this[y(0x14d)]==='vertical'?e:f;const h=this[y(0x14d)]!==y(0x151)&&this[y(0x131)](y(0x13c))==='rtl',i=h?-g:g;this[y(0x13f)](this['_primaryChild'],this['_startSize']['primary']+i,this['_startSize'][y(0x139)]),this['_setFlexBasis'](this[y(0x157)],this[y(0x150)][y(0x138)]-i,this[y(0x150)][y(0x139)]);}};__decorate([property(String)],SplitView['prototype'],p(0x14d),void 0x0),__decorate([property(Boolean)],SplitView['prototype'],p(0x12b),void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);function a(){var z=['onpointerdown','_primaryChild','_splitter','getOwnPropertyDescriptor','54068yyjtKY','secondary','container','_startResize','2072NpQIej','dir','_pointerUp','defineProperty','_setFlexBasis','object','decorate','splitter','_pointerMove','_startY','setPointerCapture','horizontal','465prADrn','_startX','getBoundingClientRect','1280360HeKZEF','8336dIWSlK','releasePointerCapture','orientation','189828HbNLmA','style','_startSize','vertical','155813OPawMj','pointerId','1252sMIFCe','_assignSlots','length','_secondaryChild','bind','observe','_stopresize','function','170ZfFlbI','1365834wfacmQ','_observer','getAttribute','ready'];a=function(){return z;};return a();}export{SplitView};