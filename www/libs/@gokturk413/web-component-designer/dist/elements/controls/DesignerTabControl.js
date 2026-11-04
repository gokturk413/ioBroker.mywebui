const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x172))/0x1*(parseInt(i(0x16a))/0x2)+-parseInt(i(0x176))/0x3+parseInt(i(0x16f))/0x4+-parseInt(i(0x187))/0x5*(-parseInt(i(0x17e))/0x6)+-parseInt(i(0x162))/0x7*(parseInt(i(0x154))/0x8)+-parseInt(i(0x161))/0x9+parseInt(i(0x173))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x401c9));function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const u=['slot','activated','remove','tab-header','children','703158eCznuh','emit','className','selected-index','removeAllChildnodes','_showHideHeaderItems','has','_headerDiv','onclick','5udvjIc','_panels','panels','div','3584904qbgYHg','_moreContainer','appendChild','header\x20header-more','innerHTML','selectedIndex','add','createElement','_selectedIndexChanged','shadowRoot','title','name','dataset','2233251QTtHuC','7SFnwtV','node-projects-designer-tab-control','innerText','classList','none','refreshItems','connectedCallback','_selectedIndex','1270uLuUnU','_moreDiv','display','clientWidth','hidden','2056344BBZcbT','_elementMap','_firstConnect','340GuLgJQ','5511790WNWpcz','visibility','removeAttribute','1318515HRLIOZ','style','selected'];a=function(){return u;};return a();}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0x169)]=-0x1;[j(0x151)];[j(0x185)];['_moreDiv'];['_moreContainer'];['_elementMap']=new WeakMap();[j(0x171)]=!![];static [j(0x177)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x15b)](k(0x153));c[k(0x180)]='outer',this[k(0x15d)][k(0x156)](c),this['_headerDiv']=document['createElement']('div'),this['_headerDiv'][k(0x180)]='header',c[k(0x156)](this['_headerDiv']),this['_moreDiv']=document[k(0x15b)](k(0x153)),this[k(0x16b)]['className']=k(0x157),this[k(0x16b)][k(0x164)]='<<',c['appendChild'](this['_moreDiv']),this[k(0x155)]=document[k(0x15b)](k(0x153)),this[k(0x155)][k(0x180)]='more-container',this[k(0x155)]['style'][k(0x174)]=k(0x16e),c['appendChild'](this['_moreContainer']),this[k(0x16b)][k(0x186)]=()=>{const l=k;if(this[l(0x155)][l(0x17d)]['length']&&this[l(0x155)][l(0x177)]['visibility']==l(0x16e))this['_moreContainer']['style']['visibility']='';else this[l(0x155)]['style'][l(0x174)]=l(0x16e);},this[k(0x151)]=document[k(0x15b)](k(0x153)),this['_panels']['className']=k(0x152),c['appendChild'](this['_panels']);let d=document['createElement'](k(0x179));d[k(0x15f)]='panels',this[k(0x151)][k(0x156)](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x183)]();});e['observe'](this[k(0x185)]);}[j(0x183)](){const n=j;this[n(0x155)]['style']['visibility']=n(0x16e);let c=0x0;DomHelper[n(0x182)](this['_moreContainer']),DomHelper['removeAllChildnodes'](this['_headerDiv']);let d=!![];for(let e of this['children']){if(e[n(0x177)]['display']!='none'){let f=e;!this['_elementMap'][n(0x184)](f)&&d&&(this[n(0x167)](),d=![]);const g=this[n(0x170)]['get'](f);this[n(0x155)][n(0x156)](g),(this[n(0x185)]['children']['length']==0x0||c+g[n(0x16d)]/0x2<this[n(0x185)][n(0x16d)])&&(this[n(0x185)][n(0x156)](g),c+=g[n(0x16d)]);}}}[j(0x168)](){const o=j;if(this['_firstConnect']){this[o(0x167)](),this['_firstConnect']=![];let c=this['getAttribute'](o(0x181));c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const p=j;return this['_firstConnect']?-0x1:this[p(0x169)];}set[j(0x159)](c){const q=j;let d=this[q(0x169)];this['_selectedIndex']=c;if(this[q(0x17d)]['length']&&d!=this['_selectedIndex'])this[q(0x15c)](d);}[j(0x167)](){const r=j;this['_headerDiv'][r(0x158)]='';let c=0x0;for(let d of this['children']){if(d['style'][r(0x16c)]!='none'){let e=d,f=document['createElement'](r(0x153));f[r(0x164)]=e['dataset'][r(0x15e)]||e['title'],f[r(0x15e)]=e[r(0x160)]['title']||e[r(0x15e)],f[r(0x180)]=r(0x17c);let g=c;f['onpointerdown']=()=>{const s=r;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this['_headerDiv'][s(0x17d)]['length'])this['_selectedIndexChanged'](h,!![]);this['_moreContainer']['style']['visibility']=s(0x16e);},this[r(0x170)]['set'](e,f),this[r(0x185)]['appendChild'](f),c++;}}this['_showHideHeaderItems'](),this['_selectedIndexChanged']();}[j(0x15c)](c,d=![]){const t=j;let e=-0x1;for(let f of this['children']){if(f[t(0x177)][t(0x16c)]!=t(0x166)){e++;if(e==this[t(0x169)]){if(f[t(0x179)]!=t(0x152))f['slot']='panels';const g=this[t(0x170)]['get'](f);if(g){g[t(0x165)][t(0x15a)]('selected');if(f['activated'])f[t(0x17a)]();}}else{f[t(0x175)](t(0x179));const h=this[t(0x170)]['get'](f);h&&h['classList'][t(0x17b)](t(0x178));}}}this['onSelectedTabChanged'][t(0x17f)]({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this['_moreContainer']['style']['visibility']='hidden';}['onSelectedTabChanged']=new TypedEvent();}customElements['define'](j(0x163),DesignerTabControl);