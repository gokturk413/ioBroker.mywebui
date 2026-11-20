const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xe7))/0x1+-parseInt(i(0xe1))/0x2+parseInt(i(0xde))/0x3*(-parseInt(i(0xf2))/0x4)+-parseInt(i(0xd8))/0x5*(-parseInt(i(0xcc))/0x6)+-parseInt(i(0xd6))/0x7*(-parseInt(i(0xe8))/0x8)+-parseInt(i(0xfd))/0x9+parseInt(i(0xed))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbdf4b));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xc6;const e=a();let f=e[c];return f;}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];[j(0xf9)];[j(0xd5)];[j(0xd3)];['_elementMap']=new WeakMap();[j(0xca)]=!![];static [j(0xef)]=css`
        :host {
            height: 100%;
        }
        .outer {
            display: flex; 
            flex-direction: column; 
            height: 100%;
            position: relative;
            overflow: hidden;
        }
        .header {
            display: inline-flex; 
            user-select: none;
            -webkit-user-select: none; 
            flex-direction: row; 
            cursor: pointer; 
            height: 30px;
            width: calc(100% - 30px);
            background-color: var(--wcd-tab-header-background, var(--dark-grey, var(--wcd-color-surface, #232733)));
            overflow-x: auto;
            scrollbar-width: none;  /* Firefox */
        }
        .header-more {
            right: 0;
            top: 0;
            width: 30px;
            position: absolute;
            color: var(--wcd-color-text, white);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: math;
        }
        .header-more:hover {
            background: var(--wcd-tab-header-hover-background, var(--light-grey, var(--wcd-color-surface-hover, #383f52)));
        }
        .more-container {
            z-index: 1;
            user-select: none;
            -webkit-user-select: none;
            background-color: var(--wcd-tab-header-background, var(--dark-grey, var(--wcd-color-surface, #232733)));
            right: 0;
            top: 30px;
            position: absolute;
            color: var(--wcd-color-text, white);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            cursor: pointer;
        }
        .more-container .tab-header { 
            width: 100%;
        }
        .header::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
        }
        .tab-header {
            height: 30px;
            font-family: var(--wcd-tab-font-family, Arial);
            display: flex;
            justify-content: center;
            align-items: center;                
            text-transform: var(--wcd-tab-text-transform, uppercase);
            box-sizing: content-box;                
            padding-left: var(--wcd-tab-padding-inline, 5px);
            padding-right: var(--wcd-tab-padding-inline, 5px);
            color: var(--wcd-color-text, white);
            font-size: var(--wcd-tab-font-size, 12px);
            font-weight: 500;
            line-height: 1.5;
            letter-spacing: var(--wcd-tab-letter-spacing, 1px);
            white-space: nowrap;
        }
        .tab-header:hover {
            background: var(--wcd-tab-header-hover-background, var(--light-grey, var(--wcd-color-surface-hover, #383f52)));
        }
        .selected {
            background: var(--wcd-tab-selected-background, var(--medium-grey, var(--wcd-color-surface-raised, #2f3545)));
            box-shadow: inset 0 3px 0 var(--wcd-tab-selected-indicator-color, var(--highlight-pink, var(--wcd-color-accent, #e91e63)));
        }
        .panels {
            z-index: 0;
            background: var(--wcd-tab-panel-background, var(--medium-grey, var(--wcd-color-surface-raised, #2f3545)));
            height: calc(100% - 30px);
        }
        :host([appearance="modern"]) .header {
            height: 36px;
            background: var(--wcd-tab-header-background, var(--_wcd-pg-raised));
            color: var(--_wcd-pg-text);
        }
        :host([appearance="modern"]) .tab-header {
            height: 36px;
            font-family: var(--wcd-tab-font-family, inherit);
            text-transform: var(--wcd-tab-text-transform, none);
            letter-spacing: var(--wcd-tab-letter-spacing, 0);
            padding-inline: var(--wcd-tab-padding-inline, 12px);
            color: var(--_wcd-pg-muted);
        }
        :host([appearance="modern"]) .tab-header:hover,
        :host([appearance="modern"]) .header-more:hover {
            background: var(--wcd-tab-header-hover-background, var(--_wcd-pg-hover));
        }
        :host([appearance="modern"]) .selected {
            color: var(--_wcd-pg-text);
            background: var(--wcd-tab-selected-background, var(--_wcd-pg-surface));
            box-shadow: inset 0 -2px 0 var(--wcd-tab-selected-indicator-color, var(--_wcd-pg-accent));
        }
        :host([appearance="modern"]) .more-container {
            top: 36px;
            background: var(--wcd-tab-header-background, var(--_wcd-pg-raised));
            color: var(--_wcd-pg-text);
            border: 1px solid var(--_wcd-pg-border);
        }
        :host([appearance="modern"]) .panels {
            height: calc(100% - 36px);
            background: var(--wcd-tab-panel-background, var(--_wcd-pg-surface));
        }
        `;constructor(){const k=j;super();let c=document['createElement'](k(0xfb));c[k(0xf4)]='outer',this[k(0xe9)]['appendChild'](c),this[k(0xf9)]=document[k(0xec)](k(0xfb)),this['_headerDiv']['className']='header',c['appendChild'](this[k(0xf9)]),this[k(0xd5)]=document['createElement'](k(0xfb)),this['_moreDiv']['className']=k(0xd7),this['_moreDiv'][k(0xe5)]='<<',c['appendChild'](this[k(0xd5)]),this[k(0xd3)]=document[k(0xec)](k(0xfb)),this['_moreContainer'][k(0xf4)]=k(0xf6),this[k(0xd3)]['style']['visibility']=k(0xea),c['appendChild'](this[k(0xd3)]),this['_moreDiv'][k(0xe4)]=()=>{const l=k;if(this['_moreContainer']['children']['length']&&this[l(0xd3)]['style'][l(0xee)]==l(0xea))this[l(0xd3)][l(0xef)]['visibility']='';else this[l(0xd3)][l(0xef)]['visibility']=l(0xea);},this[k(0xdb)]=document['createElement'](k(0xfb)),this['_panels']['className']=k(0xd1),c[k(0xd9)](this['_panels']);let d=document['createElement'](k(0xdf));d['name']='panels',this[k(0xdb)][k(0xd9)](d);const e=new ResizeObserver(f=>{const m=k;this[m(0xda)]();});e[k(0xf5)](this['_headerDiv']);}['_showHideHeaderItems'](){const n=j;this['_moreContainer']['style']['visibility']=n(0xea);let c=0x0;DomHelper['removeAllChildnodes'](this['_moreContainer']),DomHelper['removeAllChildnodes'](this['_headerDiv']);let d=!![];for(let e of this['children']){if(e[n(0xef)]['display']!='none'){let f=e;!this['_elementMap']['has'](f)&&d&&(this[n(0xc7)](),d=![]);const g=this['_elementMap']['get'](f);this['_moreContainer'][n(0xd9)](g),(this['_headerDiv']['children'][n(0xf1)]==0x0||c+g[n(0xfa)]/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv']['appendChild'](g),c+=g[n(0xfa)]);}}}[j(0xf0)](){const o=j;if(this[o(0xca)]){this['refreshItems'](),this[o(0xca)]=![];let c=this['getAttribute'](o(0xc6));c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const p=j;return this[p(0xca)]?-0x1:this[p(0xf8)];}set[j(0xce)](c){const q=j;let d=this[q(0xf8)];this[q(0xf8)]=c;if(this[q(0xfc)][q(0xf1)]&&d!=this[q(0xf8)])this['_selectedIndexChanged'](d);}[j(0xc7)](){const r=j;this['_headerDiv'][r(0xd4)]='';let c=0x0;for(let d of this['children']){if(d['style'][r(0xf7)]!=r(0xe0)){let e=d,f=document[r(0xec)](r(0xfb));f['innerText']=e[r(0xe3)][r(0xcf)]||e['title'],f[r(0xcf)]=e[r(0xe3)][r(0xcf)]||e[r(0xcf)],f[r(0xf4)]=r(0xe2);let g=c;f[r(0xd2)]=()=>{const s=r;let h=this['_selectedIndex'];this[s(0xf8)]=g;if(this[s(0xf9)]['children']['length'])this[s(0xc9)](h,!![]);this[s(0xd3)][s(0xef)]['visibility']='hidden';},this['_elementMap']['set'](e,f),this[r(0xf9)]['appendChild'](f),c++;}}this['_showHideHeaderItems'](),this['_selectedIndexChanged']();}['_selectedIndexChanged'](c,d=![]){const t=j;let e=-0x1;for(let f of this['children']){if(f[t(0xef)]['display']!=t(0xe0)){e++;if(e==this[t(0xf8)]){if(f['slot']!='panels')f[t(0xdf)]=t(0xd1);const g=this[t(0xcd)][t(0xdd)](f);if(g){g[t(0xeb)]['add']('selected');if(f[t(0xf3)])f[t(0xf3)]();}}else{f['removeAttribute'](t(0xdf));const h=this['_elementMap'][t(0xdd)](f);h&&h['classList'][t(0xdc)](t(0xc8));}}}this['onSelectedTabChanged']['emit']({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[t(0xd3)][t(0xef)][t(0xee)]='hidden';}[j(0xcb)]=new TypedEvent();}customElements[j(0xe6)](j(0xd0),DesignerTabControl);function a(){const u=['display','_selectedIndex','_headerDiv','clientWidth','div','children','7135803phccaj','selected-index','refreshItems','selected','_selectedIndexChanged','_firstConnect','onSelectedTabChanged','54sKNLVN','_elementMap','selectedIndex','title','node-projects-designer-tab-control','panels','onpointerdown','_moreContainer','innerHTML','_moreDiv','917756qtEKSP','header\x20header-more','99325ZxbbYI','appendChild','_showHideHeaderItems','_panels','remove','get','4178238kPFBlF','slot','none','2844192VaKmjs','tab-header','dataset','onclick','innerText','define','8568gpNJRg','32rCMaly','shadowRoot','hidden','classList','createElement','36911190WTbiEr','visibility','style','connectedCallback','length','4WzLMwQ','activated','className','observe','more-container'];a=function(){return u;};return a();}