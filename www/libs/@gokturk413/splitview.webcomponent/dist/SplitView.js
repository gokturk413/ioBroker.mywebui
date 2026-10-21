var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x8e))/0x1+-parseInt(n(0x77))/0x2*(parseInt(n(0x7a))/0x3)+-parseInt(n(0x6e))/0x4*(parseInt(n(0x98))/0x5)+-parseInt(n(0x75))/0x6+-parseInt(n(0x6c))/0x7*(parseInt(n(0x97))/0x8)+parseInt(n(0x85))/0x9+parseInt(n(0x70))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9013e));function a(){var A=['_pointerUp','decorate','removeAttribute','ready','max','_setFlexBasis','orientation','_pointerMove','712TFSjuq','189670NrlBLi','_stopresize','vertical','observe','style','20797miwgdZ','_onHandleMove','20NSvhwy','node-projects-split-view','20854170lxvAVp','__decorate','_observer','horizontal','_startSize','6162744vqLMjE','setPointerCapture','2IksEaK','prototype','slot','1382313oBUuin','_parseAttributesToProperties','bind','_startY','releasePointerCapture','_splitter','_secondaryChild','_primaryChild','flex','primary','getBoundingClientRect','5949189RNFzLh','preventDefault','container','height','_startX','setAttribute','function','getOwnPropertyDescriptor','pointerId','214312vZZYvX'];a=function(){return A;};return a();}var __decorate=this&&this[o(0x71)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object[p(0x8c)](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[p(0x90)]===p(0x8b))k=Reflect[p(0x90)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [o(0x6b)]=css`
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
        <slot id="secondary" name="secondary"></slot>`;['orientation']=o(0x73);[o(0x9b)];[o(0x72)];['_primaryChild'];[o(0x80)];[o(0x7f)];['_startSize'];[o(0x89)];[o(0x7d)];constructor(){var q=o;super(),this['_splitter']=this['_getDomElement']('splitter'),this[q(0x7f)]['onpointerdown']=this['_pointerDown'][q(0x7c)](this),this[q(0x7f)]['onpointermove']=this[q(0x96)]['bind'](this),this[q(0x7f)]['onpointerup']=this[q(0x8f)]['bind'](this),this[q(0x7b)]();}[o(0x92)](){var r=o;this[r(0x9b)]&&(this['_observer']=new MutationObserver(this['_assignSlots']),this[r(0x72)]['observe'](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e[s(0x8a)](s(0x79),s(0x83));else d==0x1?(this[s(0x80)]=e,e['setAttribute']('slot','secondary')):e[s(0x91)](s(0x79));d++;}}['_setFlexBasis'](c,d,e){var t=o;d=Math[t(0x93)](0x0,Math['min'](d,e)),c[t(0x6b)][t(0x82)]='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=o;this['_splitter'][u(0x76)](c['pointerId']),this['_startResize'](c['x'],c['y']),c[u(0x86)]();}['_startResize'](c,d){var v=o;if(!this['_primaryChild']||!this[v(0x80)])return;this['_startX']=c,this[v(0x7d)]=d;var e=this[v(0x95)]==='vertical'?v(0x88):'width';this['_startSize']={'container':this[v(0x84)]()[e]-this['_splitter']['getBoundingClientRect']()[e],'primary':this['_primaryChild'][v(0x84)]()[e],'secondary':this[v(0x80)]['getBoundingClientRect']()[e]};}[o(0x8f)](c){var w=o;this['_splitter'][w(0x7e)](c[w(0x8d)]),this['_stopresize']();}[o(0x99)](){var x=o;if(!this[x(0x81)]||!this[x(0x80)])return;this[x(0x74)]=null;}['_pointerMove'](c){var y=o;this[y(0x6d)](c['x'],c['y']);}['_onHandleMove'](c,d){var z=o;if(!this[z(0x74)])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this[z(0x95)]==='vertical'?e:f;const h=this[z(0x95)]!==z(0x9a)&&this['getAttribute']('dir')==='rtl',i=h?-g:g;this[z(0x94)](this['_primaryChild'],this[z(0x74)][z(0x83)]+i,this['_startSize']['container']),this[z(0x94)](this['_secondaryChild'],this[z(0x74)]['secondary']-i,this[z(0x74)][z(0x87)]);}};__decorate([property(String)],SplitView[o(0x78)],o(0x95),void 0x0),__decorate([property(Boolean)],SplitView['prototype'],'observe',void 0x0),SplitView=__decorate([customElement(o(0x6f))],SplitView);function b(c,d){c=c-0x6b;var e=a();var f=e[c];return f;}export{SplitView};