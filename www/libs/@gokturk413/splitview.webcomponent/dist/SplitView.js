var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=parseInt(n(0x1e4))/0x1+parseInt(n(0x1e7))/0x2+parseInt(n(0x1d5))/0x3+-parseInt(n(0x1ef))/0x4+parseInt(n(0x1fb))/0x5*(-parseInt(n(0x1d3))/0x6)+-parseInt(n(0x1e5))/0x7*(-parseInt(n(0x1ec))/0x8)+-parseInt(n(0x1e8))/0x9*(-parseInt(n(0x1e9))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2461b));function b(c,d){c=c-0x1ce;var e=a();var f=e[c];return f;}var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect[o(0x1e0)]==='function')k=Reflect[o(0x1e0)](e,f,g,h);else{for(var m=e[o(0x1f1)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0x1cf)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [p(0x1f9)]=css`
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
        }`;static [p(0x1d8)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']=p(0x1f5);[p(0x1de)];[p(0x1df)];[p(0x1d2)];['_secondaryChild'];[p(0x1f4)];['_startSize'];[p(0x1f7)];[p(0x1d6)];constructor(){var q=p;super(),this['_splitter']=this[q(0x1e1)](q(0x1e6)),this['_splitter']['onpointerdown']=this[q(0x1d4)]['bind'](this),this['_splitter'][q(0x1f0)]=this['_pointerMove']['bind'](this),this['_splitter']['onpointerup']=this[q(0x1e3)]['bind'](this),this[q(0x1d0)]();}[p(0x1f3)](){var r=p;this['observe']&&(this[r(0x1df)]=new MutationObserver(this[r(0x1f2)]),this[r(0x1df)][r(0x1de)](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=p;let d=0x0;for(const e of this['children']){if(d===0x0)this[s(0x1d2)]=e,e['setAttribute']('slot','primary');else d==0x1?(this[s(0x1d9)]=e,e[s(0x1fa)]('slot',s(0x1da))):e[s(0x1ed)](s(0x1ee));d++;}}['_setFlexBasis'](c,d,e){var t=p;d=Math[t(0x1e2)](0x0,Math['min'](d,e)),c['style'][t(0x1eb)]='1\x201\x20'+d+'px';}[p(0x1d4)](c){var u=p;this['_splitter'][u(0x1dc)](c['pointerId']),this['_startResize'](c['x'],c['y']),c[u(0x1ea)]();}['_startResize'](c,d){var v=p;if(!this[v(0x1d2)]||!this['_secondaryChild'])return;this['_startX']=c,this['_startY']=d;var e=this[v(0x1d7)]==='vertical'?'height':'width';this['_startSize']={'container':this['getBoundingClientRect']()[e]-this['_splitter'][v(0x1f8)]()[e],'primary':this['_primaryChild'][v(0x1f8)]()[e],'secondary':this['_secondaryChild']['getBoundingClientRect']()[e]};}['_pointerUp'](c){var w=p;this[w(0x1f4)]['releasePointerCapture'](c['pointerId']),this['_stopresize']();}['_stopresize'](){if(!this['_primaryChild']||!this['_secondaryChild'])return;this['_startSize']=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var x=p;if(!this[x(0x1ce)])return;let e=d-this[x(0x1d6)],f=c-this[x(0x1f7)];var g=this[x(0x1d7)]==='vertical'?e:f;const h=this['orientation']!==x(0x1d1)&&this['getAttribute'](x(0x1f6))==='rtl',i=h?-g:g;this[x(0x1db)](this[x(0x1d2)],this['_startSize']['primary']+i,this[x(0x1ce)]['container']),this['_setFlexBasis'](this[x(0x1d9)],this['_startSize']['secondary']-i,this[x(0x1ce)][x(0x1fc)]);}};function a(){var y=['getBoundingClientRect','style','setAttribute','72160mJzvlE','container','_startSize','defineProperty','_parseAttributesToProperties','vertical','_primaryChild','66xElFKk','_pointerDown','176517MljFGI','_startY','orientation','template','_secondaryChild','secondary','_setFlexBasis','setPointerCapture','prototype','observe','_observer','decorate','_getDomElement','max','_pointerUp','15883lwOGxO','7dncJmW','splitter','129458UpBcar','477JGFfnV','51860tnyDfT','preventDefault','flex','747064pFBPIu','removeAttribute','slot','799684hspcCm','onpointermove','length','_assignSlots','ready','_splitter','horizontal','dir','_startX'];a=function(){return y;};return a();}__decorate([property(String)],SplitView[p(0x1dd)],'orientation',void 0x0),__decorate([property(Boolean)],SplitView[p(0x1dd)],p(0x1de),void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};