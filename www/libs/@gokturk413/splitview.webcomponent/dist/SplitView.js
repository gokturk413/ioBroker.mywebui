var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0xa2))/0x1+parseInt(n(0xbe))/0x2*(-parseInt(n(0x9d))/0x3)+-parseInt(n(0x96))/0x4*(parseInt(n(0x98))/0x5)+-parseInt(n(0xa4))/0x6+parseInt(n(0xb5))/0x7*(parseInt(n(0xaf))/0x8)+-parseInt(n(0x99))/0x9+parseInt(n(0xba))/0xa*(parseInt(n(0xb4))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x54858));function b(c,d){c=c-0x95;var e=a();var f=e[c];return f;}var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments[o(0x9c)],k=j<0x3?f:h===null?h=Object[o(0x9f)](f,g):h,l;if(typeof Reflect===o(0xae)&&typeof Reflect[o(0x9a)]==='function')k=Reflect['decorate'](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0xbc)](f,g,k),k;};function a(){var z=['47312oXMaOE','orientation','_primaryChild','_pointerUp','_getDomElement','22XMPupg','217wiKOCM','_splitter','_assignSlots','vertical','_setFlexBasis','7051690SEsuZD','getBoundingClientRect','defineProperty','setAttribute','1002otzrJe','bind','secondary','_startY','prototype','onpointerdown','observe','2284govtSk','splitter','5615jYZKBK','1548648oBjlDg','decorate','_startX','length','2547BHlTdj','min','getOwnPropertyDescriptor','primary','_startSize','156904BHXDoy','_pointerDown','994332ysFvQo','_stopresize','onpointerup','releasePointerCapture','_pointerMove','_onHandleMove','onpointermove','_secondaryChild','horizontal','pointerId','object'];a=function(){return z;};return a();}import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <slot id="secondary" name="secondary"></slot>`;[p(0xb0)]=p(0xac);[p(0x95)];['_observer'];[p(0xb1)];['_secondaryChild'];['_splitter'];['_startSize'];[p(0x9b)];[p(0xc1)];constructor(){var q=p;super(),this['_splitter']=this[q(0xb3)](q(0x97)),this['_splitter'][q(0xc3)]=this[q(0xa3)][q(0xbf)](this),this['_splitter'][q(0xaa)]=this[q(0xa8)][q(0xbf)](this),this[q(0xb6)][q(0xa6)]=this[q(0xb2)][q(0xbf)](this),this['_parseAttributesToProperties']();}['ready'](){var r=p;this['observe']&&(this['_observer']=new MutationObserver(this[r(0xb7)]),this['_observer'][r(0x95)](this,{'childList':!![]})),this[r(0xb7)]();}[p(0xb7)](){var s=p;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e['setAttribute']('slot','primary');else d==0x1?(this['_secondaryChild']=e,e[s(0xbd)]('slot',s(0xc0))):e['removeAttribute']('slot');d++;}}['_setFlexBasis'](c,d,e){var t=p;d=Math['max'](0x0,Math[t(0x9e)](d,e)),c['style']['flex']='1\x201\x20'+d+'px';}[p(0xa3)](c){this['_splitter']['setPointerCapture'](c['pointerId']),this['_startResize'](c['x'],c['y']),c['preventDefault']();}['_startResize'](c,d){var u=p;if(!this['_primaryChild']||!this[u(0xab)])return;this['_startX']=c,this[u(0xc1)]=d;var e=this['orientation']===u(0xb8)?'height':'width';this['_startSize']={'container':this['getBoundingClientRect']()[e]-this[u(0xb6)]['getBoundingClientRect']()[e],'primary':this[u(0xb1)][u(0xbb)]()[e],'secondary':this[u(0xab)]['getBoundingClientRect']()[e]};}[p(0xb2)](c){var v=p;this[v(0xb6)][v(0xa7)](c[v(0xad)]),this[v(0xa5)]();}[p(0xa5)](){var w=p;if(!this[w(0xb1)]||!this[w(0xab)])return;this[w(0xa1)]=null;}[p(0xa8)](c){var x=p;this[x(0xa9)](c['x'],c['y']);}['_onHandleMove'](c,d){var y=p;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this['orientation']===y(0xb8)?e:f;const h=this['orientation']!=='vertical'&&this['getAttribute']('dir')==='rtl',i=h?-g:g;this[y(0xb9)](this[y(0xb1)],this[y(0xa1)][y(0xa0)]+i,this[y(0xa1)]['container']),this[y(0xb9)](this[y(0xab)],this[y(0xa1)]['secondary']-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView[p(0xc2)],p(0xb0),void 0x0),__decorate([property(Boolean)],SplitView['prototype'],'observe',void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};