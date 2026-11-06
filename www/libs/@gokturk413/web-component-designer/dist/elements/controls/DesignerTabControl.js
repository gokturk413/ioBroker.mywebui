function b(c,d){c=c-0xab;const e=a();let f=e[c];return f;}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0xce))/0x1+-parseInt(i(0xb9))/0x2*(parseInt(i(0xcb))/0x3)+parseInt(i(0xd7))/0x4+-parseInt(i(0xbb))/0x5*(parseInt(i(0xcd))/0x6)+-parseInt(i(0xd4))/0x7+parseInt(i(0xb3))/0x8+parseInt(i(0xc9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x21c01));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const u=['name','removeAllChildnodes','visibility','_selectedIndexChanged','refreshItems','more-container','title','style','1700760VFvoAX','display','hidden','none','_moreDiv','onpointerdown','4726iYxpuw','_panels','5iOJIit','dataset','className','_selectedIndex','classList','add','panels','clientWidth','createElement','_headerDiv','onSelectedTabChanged','observe','_firstConnect','innerHTML','3264390YcRDEb','_showHideHeaderItems','321YQvPdW','activated','310062xuXIGS','80299OIFwLY','innerText','emit','appendChild','_moreContainer','_elementMap','1781710aZrkRY','onclick','has','166740ExQwYI','tab-header','getAttribute','set','children','remove','div','length'];a=function(){return u;};return a();}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0xbe)]=-0x1;[j(0xba)];['_headerDiv'];[j(0xb7)];[j(0xd2)];['_elementMap']=new WeakMap();[j(0xc7)]=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document['createElement']('div');c[k(0xbd)]='outer',this['shadowRoot']['appendChild'](c),this['_headerDiv']=document['createElement']('div'),this[k(0xc4)][k(0xbd)]='header',c['appendChild'](this[k(0xc4)]),this['_moreDiv']=document[k(0xc3)]('div'),this[k(0xb7)][k(0xbd)]='header\x20header-more',this[k(0xb7)][k(0xcf)]='<<',c[k(0xd1)](this[k(0xb7)]),this[k(0xd2)]=document[k(0xc3)](k(0xdd)),this['_moreContainer']['className']=k(0xb0),this[k(0xd2)]['style']['visibility']='hidden',c['appendChild'](this[k(0xd2)]),this[k(0xb7)][k(0xd5)]=()=>{const l=k;if(this['_moreContainer'][l(0xdb)][l(0xde)]&&this[l(0xd2)][l(0xb2)][l(0xad)]==l(0xb5))this[l(0xd2)]['style']['visibility']='';else this['_moreContainer']['style'][l(0xad)]='hidden';},this[k(0xba)]=document[k(0xc3)]('div'),this['_panels']['className']='panels',c['appendChild'](this[k(0xba)]);let d=document[k(0xc3)]('slot');d[k(0xab)]=k(0xc1),this['_panels'][k(0xd1)](d);const e=new ResizeObserver(f=>{const m=k;this[m(0xca)]();});e[k(0xc6)](this['_headerDiv']);}[j(0xca)](){const n=j;this['_moreContainer']['style']['visibility']=n(0xb5);let c=0x0;DomHelper[n(0xac)](this[n(0xd2)]),DomHelper['removeAllChildnodes'](this[n(0xc4)]);let d=!![];for(let e of this[n(0xdb)]){if(e['style']['display']!=n(0xb6)){let f=e;!this['_elementMap'][n(0xd6)](f)&&d&&(this['refreshItems'](),d=![]);const g=this[n(0xd3)]['get'](f);this[n(0xd2)]['appendChild'](g),(this['_headerDiv'][n(0xdb)][n(0xde)]==0x0||c+g[n(0xc2)]/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv']['appendChild'](g),c+=g['clientWidth']);}}}['connectedCallback'](){const o=j;if(this[o(0xc7)]){this[o(0xaf)](),this['_firstConnect']=![];let c=this[o(0xd9)]('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const p=j;return this[p(0xc7)]?-0x1:this['_selectedIndex'];}set['selectedIndex'](c){const q=j;let d=this['_selectedIndex'];this['_selectedIndex']=c;if(this['children'][q(0xde)]&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}[j(0xaf)](){const r=j;this[r(0xc4)][r(0xc8)]='';let c=0x0;for(let d of this['children']){if(d[r(0xb2)][r(0xb4)]!=r(0xb6)){let e=d,f=document['createElement'](r(0xdd));f['innerText']=e[r(0xbc)][r(0xb1)]||e[r(0xb1)],f[r(0xb1)]=e[r(0xbc)][r(0xb1)]||e[r(0xb1)],f[r(0xbd)]=r(0xd8);let g=c;f[r(0xb8)]=()=>{const s=r;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this['_headerDiv']['children'][s(0xde)])this['_selectedIndexChanged'](h,!![]);this['_moreContainer'][s(0xb2)][s(0xad)]=s(0xb5);},this['_elementMap'][r(0xda)](e,f),this[r(0xc4)]['appendChild'](f),c++;}}this[r(0xca)](),this[r(0xae)]();}[j(0xae)](c,d=![]){const t=j;let e=-0x1;for(let f of this[t(0xdb)]){if(f[t(0xb2)]['display']!=t(0xb6)){e++;if(e==this[t(0xbe)]){if(f['slot']!='panels')f['slot']=t(0xc1);const g=this[t(0xd3)]['get'](f);if(g){g['classList'][t(0xc0)]('selected');if(f['activated'])f[t(0xcc)]();}}else{f['removeAttribute']('slot');const h=this['_elementMap']['get'](f);h&&h[t(0xbf)][t(0xdc)]('selected');}}}this[t(0xc5)][t(0xd0)]({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[t(0xd2)]['style'][t(0xad)]=t(0xb5);}[j(0xc5)]=new TypedEvent();}customElements['define']('node-projects-designer-tab-control',DesignerTabControl);