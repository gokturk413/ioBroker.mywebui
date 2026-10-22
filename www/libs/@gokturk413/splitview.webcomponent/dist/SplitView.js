var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x195))/0x1+parseInt(n(0x189))/0x2*(-parseInt(n(0x186))/0x3)+parseInt(n(0x190))/0x4+parseInt(n(0x19f))/0x5*(parseInt(n(0x188))/0x6)+parseInt(n(0x1ab))/0x7+-parseInt(n(0x18d))/0x8*(-parseInt(n(0x18c))/0x9)+-parseInt(n(0x1aa))/0xa*(-parseInt(n(0x1a4))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3138c));function a(){var z=['_observer','113536vXSMHg','onpointerup','container','_splitter','_primaryChild','_stopresize','decorate','template','preventDefault','_startY','15WWtEdO','removeAttribute','prototype','secondary','_pointerUp','44RZGrlm','releasePointerCapture','horizontal','_assignSlots','orientation','style','574960cWAmBD','1921878UGpzJM','ready','getBoundingClientRect','length','getAttribute','_setFlexBasis','_pointerMove','splitter','_parseAttributesToProperties','118734TEnzPO','_secondaryChild','62292CUCCxM','18LSLDuz','bind','slot','644886LEwRnv','8ZSjXeF','1\x201\x20','vertical','256048irYjjo','width','_startSize','_startX'];a=function(){return z;};return a();}var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments[o(0x1ae)],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect['decorate']==='function')k=Reflect[o(0x19b)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [p(0x19c)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[p(0x1a8)]=p(0x1a6);['observe'];[p(0x194)];[p(0x199)];[p(0x187)];[p(0x198)];[p(0x192)];[p(0x193)];['_startY'];constructor(){var q=p;super(),this['_splitter']=this['_getDomElement'](q(0x1b2)),this[q(0x198)]['onpointerdown']=this['_pointerDown']['bind'](this),this['_splitter']['onpointermove']=this[q(0x1b1)][q(0x18a)](this),this['_splitter'][q(0x196)]=this[q(0x1a3)][q(0x18a)](this),this[q(0x185)]();}[p(0x1ac)](){var r=p;this['observe']&&(this['_observer']=new MutationObserver(this[r(0x1a7)]),this[r(0x194)]['observe'](this,{'childList':!![]})),this['_assignSlots']();}[p(0x1a7)](){var s=p;let d=0x0;for(const e of this['children']){if(d===0x0)this['_primaryChild']=e,e['setAttribute'](s(0x18b),'primary');else d==0x1?(this['_secondaryChild']=e,e['setAttribute']('slot',s(0x1a2))):e[s(0x1a0)](s(0x18b));d++;}}['_setFlexBasis'](c,d,e){var t=p;d=Math['max'](0x0,Math['min'](d,e)),c[t(0x1a9)]['flex']=t(0x18e)+d+'px';}['_pointerDown'](c){var u=p;this['_splitter']['setPointerCapture'](c['pointerId']),this['_startResize'](c['x'],c['y']),c[u(0x19d)]();}['_startResize'](c,d){var v=p;if(!this[v(0x199)]||!this[v(0x187)])return;this['_startX']=c,this[v(0x19e)]=d;var e=this[v(0x1a8)]===v(0x18f)?'height':v(0x191);this[v(0x192)]={'container':this[v(0x1ad)]()[e]-this['_splitter'][v(0x1ad)]()[e],'primary':this['_primaryChild'][v(0x1ad)]()[e],'secondary':this['_secondaryChild'][v(0x1ad)]()[e]};}['_pointerUp'](c){var w=p;this[w(0x198)][w(0x1a5)](c['pointerId']),this['_stopresize']();}[p(0x19a)](){var x=p;if(!this[x(0x199)]||!this['_secondaryChild'])return;this['_startSize']=null;}['_pointerMove'](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var y=p;if(!this['_startSize'])return;let e=d-this[y(0x19e)],f=c-this[y(0x193)];var g=this['orientation']==='vertical'?e:f;const h=this[y(0x1a8)]!=='vertical'&&this[y(0x1af)]('dir')==='rtl',i=h?-g:g;this[y(0x1b0)](this[y(0x199)],this[y(0x192)]['primary']+i,this['_startSize'][y(0x197)]),this['_setFlexBasis'](this['_secondaryChild'],this['_startSize'][y(0x1a2)]-i,this['_startSize']['container']);}};__decorate([property(String)],SplitView[p(0x1a1)],p(0x1a8),void 0x0),__decorate([property(Boolean)],SplitView[p(0x1a1)],'observe',void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);function b(c,d){c=c-0x185;var e=a();var f=e[c];return f;}export{SplitView};