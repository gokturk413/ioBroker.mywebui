var o=b;function a(){var y=['7447181tuqXHE','_stopresize','min','86985NndBgH','_parseAttributesToProperties','__decorate','primary','_primaryChild','vertical','759489UHKKwy','height','children','461kVyFUx','_pointerMove','6ztRyhu','observe','2562oJjvmR','_observer','_secondaryChild','_getDomElement','width','horizontal','_splitter','142490moThJX','getAttribute','decorate','onpointerdown','11643840ZlPVBU','108WEjAYg','preventDefault','_startSize','1\x201\x20','7522632ZEKkKh','_setFlexBasis','_startResize','_startX','dir','setAttribute','length','flex','secondary','function','bind','container','prototype','getBoundingClientRect','_startY','defineProperty','orientation'];a=function(){return y;};return a();}(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x17d))/0x1*(parseInt(n(0x181))/0x2)+-parseInt(n(0x1ab))/0x3+-parseInt(n(0x18d))/0x4*(-parseInt(n(0x188))/0x5)+-parseInt(n(0x17f))/0x6*(-parseInt(n(0x1a2))/0x7)+parseInt(n(0x191))/0x8+-parseInt(n(0x1a5))/0x9+-parseInt(n(0x18c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb88c1));var __decorate=this&&this[o(0x1a7)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect['decorate']===p(0x19a))k=Reflect[p(0x18a)](e,f,g,h);else{for(var m=e[p(0x197)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0x1a0)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x17d;var e=a();var f=e[c];return f;}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <slot id="secondary" name="secondary"></slot>`;[o(0x1a1)]=o(0x186);['observe'];[o(0x182)];['_primaryChild'];['_secondaryChild'];['_splitter'];['_startSize'];[o(0x194)];['_startY'];constructor(){var q=o;super(),this['_splitter']=this[q(0x184)]('splitter'),this[q(0x187)][q(0x18b)]=this['_pointerDown'][q(0x19b)](this),this['_splitter']['onpointermove']=this['_pointerMove']['bind'](this),this['_splitter']['onpointerup']=this['_pointerUp']['bind'](this),this[q(0x1a6)]();}['ready'](){var r=o;this[r(0x180)]&&(this['_observer']=new MutationObserver(this['_assignSlots']),this[r(0x182)][r(0x180)](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this[s(0x1ad)]){if(d===0x0)this['_primaryChild']=e,e[s(0x196)]('slot',s(0x1a8));else d==0x1?(this[s(0x183)]=e,e[s(0x196)]('slot',s(0x199))):e['removeAttribute']('slot');d++;}}['_setFlexBasis'](c,d,e){var t=o;d=Math['max'](0x0,Math[t(0x1a4)](d,e)),c['style'][t(0x198)]=t(0x190)+d+'px';}['_pointerDown'](c){var u=o;this['_splitter']['setPointerCapture'](c['pointerId']),this[u(0x193)](c['x'],c['y']),c[u(0x18e)]();}[o(0x193)](c,d){var v=o;if(!this[v(0x1a9)]||!this[v(0x183)])return;this['_startX']=c,this[v(0x19f)]=d;var e=this['orientation']===v(0x1aa)?v(0x1ac):v(0x185);this['_startSize']={'container':this[v(0x19e)]()[e]-this[v(0x187)]['getBoundingClientRect']()[e],'primary':this['_primaryChild'][v(0x19e)]()[e],'secondary':this[v(0x183)][v(0x19e)]()[e]};}['_pointerUp'](c){this['_splitter']['releasePointerCapture'](c['pointerId']),this['_stopresize']();}[o(0x1a3)](){var w=o;if(!this['_primaryChild']||!this['_secondaryChild'])return;this[w(0x18f)]=null;}[o(0x17e)](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var x=o;if(!this['_startSize'])return;let e=d-this[x(0x19f)],f=c-this[x(0x194)];var g=this[x(0x1a1)]==='vertical'?e:f;const h=this['orientation']!=='vertical'&&this[x(0x189)](x(0x195))==='rtl',i=h?-g:g;this[x(0x192)](this[x(0x1a9)],this['_startSize'][x(0x1a8)]+i,this[x(0x18f)][x(0x19c)]),this[x(0x192)](this[x(0x183)],this['_startSize'][x(0x199)]-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView[o(0x19d)],'orientation',void 0x0),__decorate([property(Boolean)],SplitView['prototype'],'observe',void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};