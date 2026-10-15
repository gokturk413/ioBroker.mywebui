const j=b;function b(c,d){c=c-0x170;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x172))/0x1*(-parseInt(i(0x17a))/0x2)+parseInt(i(0x19f))/0x3*(-parseInt(i(0x17d))/0x4)+-parseInt(i(0x18d))/0x5*(parseInt(i(0x1a1))/0x6)+-parseInt(i(0x176))/0x7*(parseInt(i(0x173))/0x8)+parseInt(i(0x18a))/0x9*(parseInt(i(0x180))/0xa)+parseInt(i(0x1a3))/0xb*(parseInt(i(0x18c))/0xc)+parseInt(i(0x184))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5c756));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;[j(0x1a6)];['_headerDiv'];[j(0x1a2)];[j(0x193)];[j(0x177)]=new WeakMap();['_firstConnect']=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x187)]('div');c['className']='outer',this[k(0x1a8)]['appendChild'](c),this['_headerDiv']=document['createElement']('div'),this['_headerDiv']['className']=k(0x19d),c[k(0x186)](this[k(0x18f)]),this[k(0x1a2)]=document['createElement'](k(0x17e)),this[k(0x1a2)]['className']='header\x20header-more',this[k(0x1a2)]['innerText']='<<',c['appendChild'](this['_moreDiv']),this[k(0x193)]=document[k(0x187)](k(0x17e)),this['_moreContainer'][k(0x1a4)]=k(0x189),this[k(0x193)]['style']['visibility']='hidden',c[k(0x186)](this['_moreContainer']),this['_moreDiv']['onclick']=()=>{const l=k;if(this[l(0x193)]['children']['length']&&this[l(0x193)]['style']['visibility']==l(0x18e))this[l(0x193)]['style'][l(0x170)]='';else this[l(0x193)]['style']['visibility']='hidden';},this[k(0x1a6)]=document[k(0x187)]('div'),this[k(0x1a6)][k(0x1a4)]=k(0x171),c[k(0x186)](this[k(0x1a6)]);let d=document['createElement']('slot');d['name']='panels',this[k(0x1a6)]['appendChild'](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x179)]();});e[k(0x19e)](this['_headerDiv']);}['_showHideHeaderItems'](){const n=j;this['_moreContainer']['style']['visibility']=n(0x18e);let c=0x0;DomHelper['removeAllChildnodes'](this['_moreContainer']),DomHelper[n(0x183)](this[n(0x18f)]);let d=!![];for(let e of this[n(0x175)]){if(e[n(0x18b)][n(0x174)]!='none'){let f=e;!this['_elementMap'][n(0x185)](f)&&d&&(this['refreshItems'](),d=![]);const g=this[n(0x177)][n(0x196)](f);this['_moreContainer'][n(0x186)](g),(this[n(0x18f)]['children'][n(0x178)]==0x0||c+g['clientWidth']/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv'][n(0x186)](g),c+=g['clientWidth']);}}}['connectedCallback'](){const o=j;if(this['_firstConnect']){this['refreshItems'](),this[o(0x17c)]=![];let c=this[o(0x194)]('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const p=j;return this[p(0x17c)]?-0x1:this[p(0x181)];}set[j(0x1a0)](c){const q=j;let d=this[q(0x181)];this[q(0x181)]=c;if(this[q(0x175)][q(0x178)]&&d!=this['_selectedIndex'])this[q(0x182)](d);}[j(0x19a)](){const r=j;this['_headerDiv'][r(0x198)]='';let c=0x0;for(let d of this['children']){if(d[r(0x18b)]['display']!=r(0x1a7)){let e=d,f=document['createElement']('div');f[r(0x188)]=e['dataset']['title']||e[r(0x191)],f['title']=e['dataset'][r(0x191)]||e[r(0x191)],f[r(0x1a4)]=r(0x17b);let g=c;f[r(0x1a5)]=()=>{const s=r;let h=this['_selectedIndex'];this[s(0x181)]=g;if(this['_headerDiv']['children']['length'])this['_selectedIndexChanged'](h,!![]);this['_moreContainer']['style'][s(0x170)]=s(0x18e);},this['_elementMap'][r(0x195)](e,f),this['_headerDiv']['appendChild'](f),c++;}}this[r(0x179)](),this[r(0x182)]();}['_selectedIndexChanged'](c,d=![]){const t=j;let e=-0x1;for(let f of this['children']){if(f[t(0x18b)]['display']!='none'){e++;if(e==this[t(0x181)]){if(f['slot']!=t(0x171))f['slot']=t(0x171);const g=this[t(0x177)][t(0x196)](f);if(g){g[t(0x1a9)]['add'](t(0x197));if(f['activated'])f[t(0x190)]();}}else{f[t(0x17f)](t(0x19c));const h=this['_elementMap'][t(0x196)](f);h&&h['classList'][t(0x199)](t(0x197));}}}this[t(0x19b)][t(0x192)]({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[t(0x193)]['style'][t(0x170)]='hidden';}['onSelectedTabChanged']=new TypedEvent();}customElements['define']('node-projects-designer-tab-control',DesignerTabControl);function a(){const u=['refreshItems','onSelectedTabChanged','slot','header','observe','2081376PmyTrD','selectedIndex','654ykVvsd','_moreDiv','55iYKAvC','className','onpointerdown','_panels','none','shadowRoot','classList','visibility','panels','11zZtbFX','4671824bSJjHM','display','children','7xhQIWu','_elementMap','length','_showHideHeaderItems','14762ZrVLMs','tab-header','_firstConnect','4FMceYF','div','removeAttribute','530INTWRX','_selectedIndex','_selectedIndexChanged','removeAllChildnodes','19930222zbfKlb','has','appendChild','createElement','innerText','more-container','45666TqhcGQ','style','211812PtKEtN','7000fRJcTe','hidden','_headerDiv','activated','title','emit','_moreContainer','getAttribute','set','get','selected','innerHTML','remove'];a=function(){return u;};return a();}