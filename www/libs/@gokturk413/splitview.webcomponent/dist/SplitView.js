var o=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0xec))/0x1+-parseInt(n(0xd9))/0x2+-parseInt(n(0xf0))/0x3*(parseInt(n(0xfa))/0x4)+-parseInt(n(0xe8))/0x5+parseInt(n(0xe9))/0x6+parseInt(n(0xe2))/0x7+parseInt(n(0xce))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5c16d));var __decorate=this&&this[o(0xe0)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object[p(0xcf)](f,g):h,l;if(typeof Reflect===p(0xda)&&typeof Reflect['decorate']===p(0xe3))k=Reflect[p(0xee)](e,f,g,h);else{for(var m=e[p(0xea)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[p(0xd2)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xce;var e=a();var f=e[c];return f;}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0xdc)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']='horizontal';[o(0xf8)];[o(0xd0)];[o(0xf7)];['_secondaryChild'];[o(0xd1)];[o(0xdd)];['_startX'];['_startY'];constructor(){var q=o;super(),this[q(0xd1)]=this[q(0xdb)]('splitter'),this['_splitter']['onpointerdown']=this['_pointerDown'][q(0xd3)](this),this[q(0xd1)][q(0xeb)]=this[q(0xe4)][q(0xd3)](this),this[q(0xd1)]['onpointerup']=this['_pointerUp']['bind'](this),this[q(0xf5)]();}[o(0xdf)](){var r=o;this[r(0xf8)]&&(this['_observer']=new MutationObserver(this[r(0xf3)]),this[r(0xd0)]['observe'](this,{'childList':!![]})),this[r(0xf3)]();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e[s(0xfb)](s(0xe6),s(0xf1));else d==0x1?(this['_secondaryChild']=e,e[s(0xfb)]('slot','secondary')):e['removeAttribute'](s(0xe6));d++;}}[o(0xde)](c,d,e){var t=o;d=Math['max'](0x0,Math['min'](d,e)),c['style'][t(0xf4)]=t(0xf9)+d+'px';}['_pointerDown'](c){var u=o;this['_splitter']['setPointerCapture'](c['pointerId']),this['_startResize'](c['x'],c['y']),c[u(0xf6)]();}[o(0xd5)](c,d){var v=o;if(!this[v(0xf7)]||!this['_secondaryChild'])return;this[v(0xef)]=c,this['_startY']=d;var e=this[v(0xd6)]==='vertical'?'height':'width';this['_startSize']={'container':this['getBoundingClientRect']()[e]-this[v(0xd1)]['getBoundingClientRect']()[e],'primary':this['_primaryChild'][v(0xd7)]()[e],'secondary':this[v(0xf2)][v(0xd7)]()[e]};}['_pointerUp'](c){var w=o;this[w(0xd1)]['releasePointerCapture'](c['pointerId']),this[w(0xed)]();}[o(0xed)](){var x=o;if(!this[x(0xf7)]||!this[x(0xf2)])return;this[x(0xdd)]=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=o;if(!this[y(0xdd)])return;let e=d-this['_startY'],f=c-this[y(0xef)];var g=this[y(0xd6)]===y(0xd8)?e:f;const h=this['orientation']!=='vertical'&&this[y(0xe1)](y(0xe5))==='rtl',i=h?-g:g;this[y(0xde)](this['_primaryChild'],this[y(0xdd)][y(0xf1)]+i,this[y(0xdd)][y(0xd4)]),this['_setFlexBasis'](this[y(0xf2)],this[y(0xdd)]['secondary']-i,this[y(0xdd)]['container']);}};function a(){var z=['getAttribute','3007501rloWwj','function','_pointerMove','dir','slot','prototype','3717515AAcOnI','2577840stAwxq','length','onpointermove','157307vVqSIe','_stopresize','decorate','_startX','201gZXQda','primary','_secondaryChild','_assignSlots','flex','_parseAttributesToProperties','preventDefault','_primaryChild','observe','1\x201\x20','39940PETnWC','setAttribute','8128024GgRYUJ','getOwnPropertyDescriptor','_observer','_splitter','defineProperty','bind','container','_startResize','orientation','getBoundingClientRect','vertical','485796NtigzE','object','_getDomElement','template','_startSize','_setFlexBasis','ready','__decorate'];a=function(){return z;};return a();}__decorate([property(String)],SplitView['prototype'],o(0xd6),void 0x0),__decorate([property(Boolean)],SplitView[o(0xe7)],'observe',void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};