var o=b;function b(c,d){c=c-0x6e;var e=a();var f=e[c];return f;}function a(){var z=['dir','_parseAttributesToProperties','_startY','2127375jtKIAH','removeAttribute','_getDomElement','56032HyjlyN','_observer','434ZDDBbK','_assignSlots','_secondaryChild','container','observe','11CPlqUy','secondary','onpointerdown','object','vertical','1027020tkJdlP','horizontal','primary','_startX','decorate','58589MOFMcR','_stopresize','getBoundingClientRect','node-projects-split-view','_splitter','838188iftjWU','_pointerDown','17574cdubds','height','orientation','553090yjMACe','bind','_startSize','ready','_setFlexBasis','slot','__decorate','8uuJTny','pointerId','template','_pointerUp','setAttribute','4vnyQUu','_primaryChild','style'];a=function(){return z;};return a();}(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x7b))/0x1*(parseInt(n(0x91))/0x2)+parseInt(n(0x80))/0x3+parseInt(n(0x9a))/0x4+parseInt(n(0x85))/0x5+-parseInt(n(0x82))/0x6*(parseInt(n(0x9c))/0x7)+parseInt(n(0x8c))/0x8*(parseInt(n(0x97))/0x9)+-parseInt(n(0x76))/0xa*(parseInt(n(0x71))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a547));var __decorate=this&&this[o(0x8b)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect===p(0x74)&&typeof Reflect[p(0x7a)]==='function')k=Reflect['decorate'](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x8e)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']=o(0x77);['observe'];['_observer'];[o(0x92)];['_secondaryChild'];[o(0x7f)];[o(0x87)];['_startX'];['_startY'];constructor(){var q=o;super(),this[q(0x7f)]=this[q(0x99)]('splitter'),this[q(0x7f)][q(0x73)]=this[q(0x81)]['bind'](this),this[q(0x7f)]['onpointermove']=this['_pointerMove'][q(0x86)](this),this['_splitter']['onpointerup']=this[q(0x8f)]['bind'](this),this[q(0x95)]();}[o(0x88)](){var r=o;this['observe']&&(this[r(0x9b)]=new MutationObserver(this[r(0x9d)]),this[r(0x9b)][r(0x70)](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e[s(0x90)](s(0x8a),s(0x78));else d==0x1?(this[s(0x6e)]=e,e[s(0x90)](s(0x8a),s(0x72))):e[s(0x98)]('slot');d++;}}['_setFlexBasis'](c,d,e){var t=o;d=Math['max'](0x0,Math['min'](d,e)),c[t(0x93)]['flex']='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=o;this[u(0x7f)]['setPointerCapture'](c[u(0x8d)]),this['_startResize'](c['x'],c['y']),c['preventDefault']();}['_startResize'](c,d){var v=o;if(!this['_primaryChild']||!this[v(0x6e)])return;this['_startX']=c,this[v(0x96)]=d;var e=this[v(0x84)]==='vertical'?v(0x83):'width';this[v(0x87)]={'container':this[v(0x7d)]()[e]-this['_splitter'][v(0x7d)]()[e],'primary':this[v(0x92)]['getBoundingClientRect']()[e],'secondary':this[v(0x6e)]['getBoundingClientRect']()[e]};}[o(0x8f)](c){var w=o;this[w(0x7f)]['releasePointerCapture'](c['pointerId']),this[w(0x7c)]();}['_stopresize'](){var x=o;if(!this[x(0x92)]||!this[x(0x6e)])return;this['_startSize']=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=o;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this[y(0x79)];var g=this[y(0x84)]===y(0x75)?e:f;const h=this['orientation']!==y(0x75)&&this['getAttribute'](y(0x94))==='rtl',i=h?-g:g;this[y(0x89)](this[y(0x92)],this['_startSize']['primary']+i,this['_startSize'][y(0x6f)]),this['_setFlexBasis'](this['_secondaryChild'],this['_startSize']['secondary']-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView['prototype'],'orientation',void 0x0),__decorate([property(Boolean)],SplitView['prototype'],o(0x70),void 0x0),SplitView=__decorate([customElement(o(0x7e))],SplitView);export{SplitView};