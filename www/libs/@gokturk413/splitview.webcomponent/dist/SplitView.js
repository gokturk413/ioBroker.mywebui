var o=b;function b(c,d){c=c-0x6e;var e=a();var f=e[c];return f;}(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0x83))/0x1*(parseInt(n(0x7b))/0x2)+-parseInt(n(0x6e))/0x3+-parseInt(n(0x79))/0x4*(parseInt(n(0x96))/0x5)+parseInt(n(0x7a))/0x6+-parseInt(n(0x86))/0x7*(-parseInt(n(0x98))/0x8)+-parseInt(n(0x73))/0x9*(parseInt(n(0x94))/0xa)+parseInt(n(0x84))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x34b22));var __decorate=this&&this[o(0x90)]||function(e,f,g,h){var p=o,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect['decorate']===p(0x82))k=Reflect['decorate'](e,f,g,h);else{for(var m=e[p(0x6f)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [o(0x78)]=css`
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
        }`;static [o(0x95)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[o(0x75)]='horizontal';['observe'];['_observer'];['_primaryChild'];[o(0x8b)];[o(0x7f)];[o(0x93)];['_startX'];[o(0x88)];constructor(){var q=o;super(),this[q(0x7f)]=this[q(0x72)]('splitter'),this['_splitter'][q(0x81)]=this['_pointerDown'][q(0x77)](this),this[q(0x7f)][q(0x70)]=this[q(0x7c)][q(0x77)](this),this['_splitter']['onpointerup']=this[q(0x89)][q(0x77)](this),this['_parseAttributesToProperties']();}['ready'](){var r=o;this[r(0x8a)]&&(this[r(0x92)]=new MutationObserver(this['_assignSlots']),this['_observer'][r(0x8a)](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=o;let d=0x0;for(const e of this[s(0x99)]){if(d===0x0)this['_primaryChild']=e,e[s(0x76)]('slot','primary');else d==0x1?(this[s(0x8b)]=e,e['setAttribute']('slot',s(0x7e))):e['removeAttribute']('slot');d++;}}[o(0x8d)](c,d,e){var t=o;d=Math[t(0x8f)](0x0,Math['min'](d,e)),c[t(0x78)]['flex']='1\x201\x20'+d+'px';}['_pointerDown'](c){var u=o;this['_splitter']['setPointerCapture'](c[u(0x74)]),this['_startResize'](c['x'],c['y']),c[u(0x91)]();}['_startResize'](c,d){var v=o;if(!this[v(0x97)]||!this[v(0x8b)])return;this['_startX']=c,this['_startY']=d;var e=this['orientation']===v(0x71)?'height':v(0x8e);this['_startSize']={'container':this['getBoundingClientRect']()[e]-this[v(0x7f)]['getBoundingClientRect']()[e],'primary':this[v(0x97)]['getBoundingClientRect']()[e],'secondary':this['_secondaryChild']['getBoundingClientRect']()[e]};}[o(0x89)](c){var w=o;this['_splitter']['releasePointerCapture'](c[w(0x74)]),this['_stopresize']();}['_stopresize'](){var x=o;if(!this['_primaryChild']||!this[x(0x8b)])return;this[x(0x93)]=null;}[o(0x7c)](c){this['_onHandleMove'](c['x'],c['y']);}[o(0x8c)](c,d){var y=o;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this['_startX'];var g=this['orientation']==='vertical'?e:f;const h=this['orientation']!=='vertical'&&this[y(0x80)](y(0x85))==='rtl',i=h?-g:g;this['_setFlexBasis'](this[y(0x97)],this['_startSize']['primary']+i,this[y(0x93)]['container']),this['_setFlexBasis'](this[y(0x8b)],this[y(0x93)]['secondary']-i,this[y(0x93)][y(0x87)]);}};__decorate([property(String)],SplitView[o(0x7d)],o(0x75),void 0x0),__decorate([property(Boolean)],SplitView['prototype'],o(0x8a),void 0x0),SplitView=__decorate([customElement('node-projects-split-view')],SplitView);export{SplitView};function a(){var z=['54dboRFy','pointerId','orientation','setAttribute','bind','style','268vOXdGs','2580132clZWiB','2wbZRoy','_pointerMove','prototype','secondary','_splitter','getAttribute','onpointerdown','function','209899SsRqkz','4553978Notznl','dir','4214YnLcUB','container','_startY','_pointerUp','observe','_secondaryChild','_onHandleMove','_setFlexBasis','width','max','__decorate','preventDefault','_observer','_startSize','448550kyQaCT','template','21630melpij','_primaryChild','4008KZBYut','children','482727TUipNm','length','onpointermove','vertical','_getDomElement'];a=function(){return z;};return a();}