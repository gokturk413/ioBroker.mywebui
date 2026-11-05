const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x9c))/0x1*(parseInt(i(0xbb))/0x2)+-parseInt(i(0xa9))/0x3+-parseInt(i(0xb3))/0x4+-parseInt(i(0x8e))/0x5*(-parseInt(i(0xa2))/0x6)+parseInt(i(0x98))/0x7*(-parseInt(i(0xb7))/0x8)+-parseInt(i(0xa6))/0x9*(parseInt(i(0xaf))/0xa)+parseInt(i(0x8d))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd94ff));function b(c,d){c=c-0x8b;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;[j(0x9e)];['_headerDiv'];[j(0xb2)];['_moreContainer'];['_elementMap']=new WeakMap();[j(0x8b)]=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document['createElement'](k(0xa1));c[k(0xb5)]='outer',this['shadowRoot']['appendChild'](c),this['_headerDiv']=document['createElement']('div'),this[k(0x8c)][k(0xb5)]=k(0xa0),c['appendChild'](this['_headerDiv']),this['_moreDiv']=document[k(0x8f)]('div'),this[k(0xb2)]['className']='header\x20header-more',this[k(0xb2)]['innerText']='<<',c[k(0x96)](this[k(0xb2)]),this['_moreContainer']=document['createElement']('div'),this['_moreContainer'][k(0xb5)]='more-container',this[k(0x97)][k(0xb1)]['visibility']=k(0x92),c['appendChild'](this[k(0x97)]),this['_moreDiv'][k(0xab)]=()=>{const l=k;if(this['_moreContainer'][l(0x9d)][l(0xa3)]&&this['_moreContainer']['style'][l(0xaa)]==l(0x92))this['_moreContainer']['style']['visibility']='';else this[l(0x97)]['style']['visibility']='hidden';},this[k(0x9e)]=document['createElement'](k(0xa1)),this['_panels'][k(0xb5)]='panels',c['appendChild'](this['_panels']);let d=document['createElement'](k(0xba));d['name']='panels',this['_panels'][k(0x96)](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0xa4)](this[k(0x8c)]);}['_showHideHeaderItems'](){const m=j;this['_moreContainer']['style'][m(0xaa)]='hidden';let c=0x0;DomHelper[m(0x95)](this['_moreContainer']),DomHelper['removeAllChildnodes'](this['_headerDiv']);let d=!![];for(let e of this['children']){if(e[m(0xb1)]['display']!=m(0xad)){let f=e;!this['_elementMap'][m(0x94)](f)&&d&&(this[m(0x91)](),d=![]);const g=this['_elementMap'][m(0xb4)](f);this['_moreContainer'][m(0x96)](g),(this[m(0x8c)][m(0x9d)][m(0xa3)]==0x0||c+g[m(0xbc)]/0x2<this['_headerDiv'][m(0xbc)])&&(this[m(0x8c)]['appendChild'](g),c+=g[m(0xbc)]);}}}[j(0xb9)](){const n=j;if(this[n(0x8b)]){this[n(0x91)](),this['_firstConnect']=![];let c=this['getAttribute']('selected-index');c&&(this[n(0xbd)]=parseInt(c));}}get['selectedIndex'](){const o=j;return this[o(0x8b)]?-0x1:this['_selectedIndex'];}set[j(0xbd)](c){const p=j;let d=this[p(0x93)];this[p(0x93)]=c;if(this[p(0x9d)]['length']&&d!=this['_selectedIndex'])this[p(0xae)](d);}['refreshItems'](){const q=j;this[q(0x8c)]['innerHTML']='';let c=0x0;for(let d of this['children']){if(d[q(0xb1)][q(0xac)]!=q(0xad)){let e=d,f=document['createElement'](q(0xa1));f[q(0xa7)]=e['dataset']['title']||e[q(0x90)],f['title']=e['dataset']['title']||e['title'],f[q(0xb5)]='tab-header';let g=c;f['onpointerdown']=()=>{const r=q;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this[r(0x8c)][r(0x9d)]['length'])this[r(0xae)](h,!![]);this[r(0x97)]['style'][r(0xaa)]=r(0x92);},this[q(0xa8)]['set'](e,f),this[q(0x8c)]['appendChild'](f),c++;}}this[q(0xb8)](),this[q(0xae)]();}['_selectedIndexChanged'](c,d=![]){const s=j;let e=-0x1;for(let f of this[s(0x9d)]){if(f[s(0xb1)][s(0xac)]!=s(0xad)){e++;if(e==this[s(0x93)]){if(f[s(0xba)]!='panels')f['slot']=s(0x99);const g=this['_elementMap'][s(0xb4)](f);if(g){g['classList'][s(0x9f)]('selected');if(f[s(0xa5)])f[s(0xa5)]();}}else{f['removeAttribute']('slot');const h=this[s(0xa8)]['get'](f);h&&h[s(0x9a)]['remove'](s(0xb6));}}}this[s(0xb0)]['emit']({'newIndex':this[s(0x93)],'oldIndex':c,'changedViaClick':d}),this[s(0x97)][s(0xb1)][s(0xaa)]=s(0x92);}['onSelectedTabChanged']=new TypedEvent();}function a(){const t=['connectedCallback','slot','10uLFOtP','clientWidth','selectedIndex','_firstConnect','_headerDiv','44989901erkntx','110iGPzAq','createElement','title','refreshItems','hidden','_selectedIndex','has','removeAllChildnodes','appendChild','_moreContainer','7uCdZkw','panels','classList','node-projects-designer-tab-control','85899ikAPPU','children','_panels','add','header','div','160626KKeLYe','length','observe','activated','2367OyZKns','innerText','_elementMap','4419672eSOZQy','visibility','onclick','display','none','_selectedIndexChanged','25370bwYDUO','onSelectedTabChanged','style','_moreDiv','3608472KLlgMy','get','className','selected','9406112WEEzEs','_showHideHeaderItems'];a=function(){return t;};return a();}customElements['define'](j(0x9b),DesignerTabControl);