var p=b;function b(c,d){c=c-0xcd;var e=a();var f=e[c];return f;}(function(c,d){var n=b,e=c();while(!![]){try{var f=-parseInt(n(0xec))/0x1+-parseInt(n(0xd7))/0x2+parseInt(n(0xdd))/0x3+parseInt(n(0xd8))/0x4*(parseInt(n(0x100))/0x5)+-parseInt(n(0xe1))/0x6*(parseInt(n(0xe4))/0x7)+parseInt(n(0xe8))/0x8*(-parseInt(n(0xe3))/0x9)+parseInt(n(0xda))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb2459));var __decorate=this&&this['__decorate']||function(e,f,g,h){var o=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect===o(0xfe)&&typeof Reflect[o(0xf2)]===o(0xf0))k=Reflect[o(0xf2)](e,f,g,h);else{for(var m=e[o(0xef)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[o(0xfa)](f,g,k),k;};import{BaseCustomWebComponentConstructorAppend,css,customElement,html,property}from'@node-projects/base-custom-webcomponent';let SplitView=class SplitView extends BaseCustomWebComponentConstructorAppend{static [p(0xfd)]=css`
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
        }`;static [p(0xce)]=html`
        <slot id="primary" name="primary"></slot>
        <div part="splitter" id="splitter">
            <div part="handle"></div>
        </div>
        <slot id="secondary" name="secondary"></slot>`;[p(0xed)]='horizontal';[p(0xe7)];['_observer'];['_primaryChild'];['_secondaryChild'];[p(0xe2)];[p(0xd1)];['_startX'];[p(0xf5)];constructor(){var q=p;super(),this[q(0xe2)]=this['_getDomElement'](q(0xcf)),this[q(0xe2)]['onpointerdown']=this[q(0xf4)]['bind'](this),this[q(0xe2)]['onpointermove']=this['_pointerMove']['bind'](this),this[q(0xe2)][q(0xd2)]=this['_pointerUp'][q(0xd0)](this),this[q(0xf8)]();}['ready'](){var r=p;this['observe']&&(this['_observer']=new MutationObserver(this['_assignSlots']),this[r(0xcd)]['observe'](this,{'childList':!![]})),this['_assignSlots']();}['_assignSlots'](){var s=p;let d=0x0;for(const e of this[s(0xf6)]){if(d===0x0)this[s(0xd5)]=e,e['setAttribute'](s(0xde),s(0xdb));else d==0x1?(this[s(0xd4)]=e,e[s(0xf7)]('slot','secondary')):e[s(0xeb)](s(0xde));d++;}}[p(0xea)](c,d,e){var t=p;d=Math[t(0xf9)](0x0,Math['min'](d,e)),c['style'][t(0xf3)]=t(0xfc)+d+'px';}['_pointerDown'](c){this['_splitter']['setPointerCapture'](c['pointerId']),this['_startResize'](c['x'],c['y']),c['preventDefault']();}[p(0xdf)](c,d){var u=p;if(!this['_primaryChild']||!this['_secondaryChild'])return;this[u(0xe6)]=c,this[u(0xf5)]=d;var e=this['orientation']==='vertical'?'height':u(0xd6);this['_startSize']={'container':this[u(0xf1)]()[e]-this[u(0xe2)][u(0xf1)]()[e],'primary':this['_primaryChild']['getBoundingClientRect']()[e],'secondary':this['_secondaryChild'][u(0xf1)]()[e]};}[p(0xfb)](c){var v=p;this[v(0xe2)][v(0xd3)](c['pointerId']),this[v(0xe0)]();}[p(0xe0)](){var w=p;if(!this[w(0xd5)]||!this[w(0xd4)])return;this[w(0xd1)]=null;}[p(0xee)](c){this['_onHandleMove'](c['x'],c['y']);}['_onHandleMove'](c,d){var x=p;if(!this['_startSize'])return;let e=d-this['_startY'],f=c-this[x(0xe6)];var g=this[x(0xed)]==='vertical'?e:f;const h=this['orientation']!==x(0xe9)&&this['getAttribute']('dir')==='rtl',i=h?-g:g;this['_setFlexBasis'](this['_primaryChild'],this['_startSize'][x(0xdb)]+i,this['_startSize']['container']),this[x(0xea)](this[x(0xd4)],this[x(0xd1)][x(0xe5)]-i,this['_startSize'][x(0xdc)]);}};__decorate([property(String)],SplitView['prototype'],p(0xed),void 0x0),__decorate([property(Boolean)],SplitView[p(0xff)],p(0xe7),void 0x0),SplitView=__decorate([customElement(p(0xd9))],SplitView);function a(){var y=['1\x201\x20','style','object','prototype','497865qgpKBC','_observer','template','splitter','bind','_startSize','onpointerup','releasePointerCapture','_secondaryChild','_primaryChild','width','2544072sOAlGO','4CeohEO','node-projects-split-view','33765940IsoALz','primary','container','3028026TLlPrt','slot','_startResize','_stopresize','411486QvduoS','_splitter','9YdJOcM','77NviJEq','secondary','_startX','observe','4382256RUwPLo','vertical','_setFlexBasis','removeAttribute','1181099owsAzW','orientation','_pointerMove','length','function','getBoundingClientRect','decorate','flex','_pointerDown','_startY','children','setAttribute','_parseAttributesToProperties','max','defineProperty','_pointerUp'];a=function(){return y;};return a();}export{SplitView};