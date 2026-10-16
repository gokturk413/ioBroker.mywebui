var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x17d))/0x1*(-parseInt(n(0x163))/0x2)+-parseInt(n(0x187))/0x3+parseInt(n(0x17a))/0x4*(-parseInt(n(0x182))/0x5)+parseInt(n(0x168))/0x6*(parseInt(n(0x175))/0x7)+-parseInt(n(0x188))/0x8+parseInt(n(0x189))/0x9+-parseInt(n(0x16d))/0xa*(-parseInt(n(0x18f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4ae23));var __decorate=this&&this[o(0x190)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object[p(0x166)](f,g):h,l;if(typeof Reflect===p(0x170)&&typeof Reflect['decorate']===p(0x193))k=Reflect[p(0x17f)](e,f,g,h);else{for(var m=e[p(0x177)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0x176)](f,g,k),k;};function b(c,d){c=c-0x163;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [o(0x16a)]=css`
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
        <slot id="secondary" name="secondary"></slot>`;['orientation']='horizontal';['observe'];['_observer'];['_primaryChild'];[o(0x16e)];['_splitter'];[o(0x18a)];[o(0x165)];[o(0x184)];constructor(){var q=o;super(),this['_splitter']=this[q(0x18e)](q(0x194)),this['_splitter']['onpointerdown']=this['_pointerDown'][q(0x16f)](this),this[q(0x181)][q(0x18b)]=this[q(0x180)]['bind'](this),this['_splitter']['onpointerup']=this['_pointerUp']['bind'](this),this[q(0x171)]();}[o(0x167)](){var r=o;this[r(0x186)]&&(this['_observer']=new MutationObserver(this[r(0x164)]),this['_observer']['observe'](this,{'childList':!![]})),this['_assignSlots']();}[o(0x164)](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this[s(0x18d)]=e,e['setAttribute']('slot',s(0x16c));else d==0x1?(this[s(0x16e)]=e,e['setAttribute'](s(0x174),s(0x173))):e['removeAttribute'](s(0x174));d++;}}[o(0x16b)](c,d,e){var t=o;d=Math['max'](0x0,Math['min'](d,e)),c[t(0x16a)]['flex']='1\x201\x20'+d+'px';}[o(0x192)](c){var u=o;this[u(0x181)][u(0x172)](c[u(0x169)]),this['_startResize'](c['x'],c['y']),c[u(0x183)]();}['_startResize'](c,d){var v=o;if(!this[v(0x18d)]||!this['_secondaryChild'])return;this[v(0x165)]=c,this['_startY']=d;var e=this['orientation']==='vertical'?v(0x17c):v(0x185);this['_startSize']={'container':this[v(0x179)]()[e]-this[v(0x181)][v(0x179)]()[e],'primary':this[v(0x18d)]['getBoundingClientRect']()[e],'secondary':this[v(0x16e)][v(0x179)]()[e]};}['_pointerUp'](c){var w=o;this[w(0x181)][w(0x17e)](c[w(0x169)]),this['_stopresize']();}['_stopresize'](){var x=o;if(!this[x(0x18d)]||!this[x(0x16e)])return;this['_startSize']=null;}[o(0x180)](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=o;if(!this[y(0x18a)])return;let e=d-this['_startY'],f=c-this[y(0x165)];var g=this['orientation']==='vertical'?e:f;const h=this['orientation']!=='vertical'&&this['getAttribute'](y(0x17b))==='rtl',i=h?-g:g;this['_setFlexBasis'](this[y(0x18d)],this['_startSize']['primary']+i,this[y(0x18a)][y(0x191)]),this['_setFlexBasis'](this[y(0x16e)],this[y(0x18a)]['secondary']-i,this[y(0x18a)]['container']);}};function a(){var z=['pointerId','style','_setFlexBasis','primary','20QJXcpp','_secondaryChild','bind','object','_parseAttributesToProperties','setPointerCapture','secondary','slot','147322KzjCFe','defineProperty','length','node-projects-split-view','getBoundingClientRect','97116ENwOar','dir','height','23041gPtlLD','releasePointerCapture','decorate','_pointerMove','_splitter','80hWgFkg','preventDefault','_startY','width','observe','770079OLfkAj','1240768zIaqPQ','4624443BIEyut','_startSize','onpointermove','orientation','_primaryChild','_getDomElement','2247432ExgSnY','__decorate','container','_pointerDown','function','splitter','26kOlXcL','_assignSlots','_startX','getOwnPropertyDescriptor','ready','138wGEueW'];a=function(){return z;};return a();}__decorate([property(String)],SplitView['prototype'],o(0x18c),void 0x0),__decorate([property(Boolean)],SplitView['prototype'],'observe',void 0x0),SplitView=__decorate([customElement(o(0x178))],SplitView);export{SplitView};