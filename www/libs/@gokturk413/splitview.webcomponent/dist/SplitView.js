var p=b;(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x91))/0x1*(-parseInt(n(0x72))/0x2)+-parseInt(n(0x6b))/0x3*(-parseInt(n(0x84))/0x4)+parseInt(n(0x74))/0x5*(parseInt(n(0x8d))/0x6)+-parseInt(n(0x7c))/0x7+-parseInt(n(0x75))/0x8+parseInt(n(0x94))/0x9+-parseInt(n(0x7d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6099e));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect===o(0x73)&&typeof Reflect['decorate']==='function')k=Reflect[o(0x78)](e,f,g,h);else{for(var m=e[o(0x6c)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0x90)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';function a(){var A=['bind','_onHandleMove','orientation','node-projects-split-view','15214leqhWk','object','3435980kntypy','3318080GHyGDO','getAttribute','_secondaryChild','decorate','_splitter','pointerId','vertical','3307808JWlqxl','10471590flCMgL','container','_startResize','_primaryChild','style','_setFlexBasis','_pointerMove','900rHPjBC','min','1\x201\x20','width','prototype','_startSize','_pointerUp','_pointerDown','secondary','6BRbwDU','_parseAttributesToProperties','max','defineProperty','33PaHRQW','observe','template','6241626CIzHjI','_stopresize','_observer','setPointerCapture','removeAttribute','_startY','_assignSlots','horizontal','9312njJNOc','length','primary'];a=function(){return A;};return a();}function b(c,d){c=c-0x64;var e=a();var f=e[c];return f;}let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [p(0x81)]=css`
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
        }`;static [p(0x93)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;['orientation']=p(0x6a);[p(0x92)];['_observer'];['_primaryChild'];['_secondaryChild'];[p(0x79)];[p(0x89)];['_startX'];['_startY'];constructor(){var q=p;super(),this[q(0x79)]=this['_getDomElement']('splitter'),this['_splitter']['onpointerdown']=this[q(0x8b)][q(0x6e)](this),this[q(0x79)]['onpointermove']=this[q(0x83)]['bind'](this),this[q(0x79)]['onpointerup']=this['_pointerUp']['bind'](this),this[q(0x8e)]();}['ready'](){var r=p;this[r(0x92)]&&(this[r(0x65)]=new MutationObserver(this['_assignSlots']),this[r(0x65)]['observe'](this,{'childList':!![]})),this['_assignSlots']();}[p(0x69)](){var s=p;let d=0x0;for(const e of this['children']){if(d===0x0)this[s(0x80)]=e,e['setAttribute']('slot',s(0x6d));else d==0x1?(this['_secondaryChild']=e,e['setAttribute']('slot','secondary')):e[s(0x67)]('slot');d++;}}['_setFlexBasis'](c,d,e){var t=p;d=Math[t(0x8f)](0x0,Math[t(0x85)](d,e)),c[t(0x81)]['flex']=t(0x86)+d+'px';}['_pointerDown'](c){var u=p;this[u(0x79)][u(0x66)](c['pointerId']),this[u(0x7f)](c['x'],c['y']),c['preventDefault']();}[p(0x7f)](c,d){var v=p;if(!this['_primaryChild']||!this['_secondaryChild'])return;this['_startX']=c,this[v(0x68)]=d;var e=this[v(0x70)]===v(0x7b)?'height':v(0x87);this[v(0x89)]={'container':this['getBoundingClientRect']()[e]-this[v(0x79)]['getBoundingClientRect']()[e],'primary':this[v(0x80)]['getBoundingClientRect']()[e],'secondary':this[v(0x77)]['getBoundingClientRect']()[e]};}[p(0x8a)](c){var w=p;this['_splitter']['releasePointerCapture'](c[w(0x7a)]),this[w(0x64)]();}['_stopresize'](){var x=p;if(!this[x(0x80)]||!this['_secondaryChild'])return;this['_startSize']=null;}['_pointerMove'](c){var y=p;this[y(0x6f)](c['x'],c['y']);}[p(0x6f)](c,d){var z=p;if(!this[z(0x89)])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this['orientation']==='vertical'?e:f;const h=this['orientation']!==z(0x7b)&&this[z(0x76)]('dir')==='rtl',i=h?-g:g;this['_setFlexBasis'](this[z(0x80)],this[z(0x89)]['primary']+i,this['_startSize']['container']),this[z(0x82)](this[z(0x77)],this['_startSize'][z(0x8c)]-i,this[z(0x89)][z(0x7e)]);}};__decorate([property(String)],SplitView['prototype'],'orientation',void 0x0),__decorate([property(Boolean)],SplitView[p(0x88)],p(0x92),void 0x0),SplitView=__decorate([customElement(p(0x71))],SplitView);export{SplitView};