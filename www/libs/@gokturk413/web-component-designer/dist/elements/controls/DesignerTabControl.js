function b(c,d){c=c-0x15e;const e=a();let f=e[c];return f;}function a(){const t=['onSelectedTabChanged','3610233VXgFRD','16eaRXJX','_moreContainer','createElement','appendChild','_panels','display','3702348hKfUkr','1827556NaCZaM','header','panels','3QZvZlf','510155shckxq','remove','onpointerdown','_moreDiv','observe','_selectedIndexChanged','removeAllChildnodes','clientWidth','slot','67534kKoerN','_firstConnect','style','hidden','selected','_selectedIndex','2051182yZAbrT','getAttribute','get','define','div','10VQdMTd','_headerDiv','activated','node-projects-designer-tab-control','className','none','1259490BesivB','length','connectedCallback','_elementMap','visibility','children','title','tab-header','refreshItems','header\x20header-more'];a=function(){return t;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x183))/0x1+parseInt(i(0x18c))/0x2+parseInt(i(0x182))/0x3*(parseInt(i(0x17f))/0x4)+-parseInt(i(0x16c))/0x5+parseInt(i(0x17e))/0x6+-parseInt(i(0x161))/0x7*(-parseInt(i(0x178))/0x8)+parseInt(i(0x177))/0x9*(-parseInt(i(0x166))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x81890));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0x160)]=-0x1;['_panels'];['_headerDiv'];[j(0x186)];[j(0x179)];[j(0x16f)]=new WeakMap();['_firstConnect']=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x17a)](k(0x165));c['className']='outer',this['shadowRoot'][k(0x17b)](c),this['_headerDiv']=document['createElement'](k(0x165)),this['_headerDiv'][k(0x16a)]=k(0x180),c['appendChild'](this[k(0x167)]),this[k(0x186)]=document[k(0x17a)](k(0x165)),this['_moreDiv'][k(0x16a)]=k(0x175),this['_moreDiv']['innerText']='<<',c[k(0x17b)](this['_moreDiv']),this[k(0x179)]=document[k(0x17a)]('div'),this[k(0x179)]['className']='more-container',this['_moreContainer'][k(0x18e)][k(0x170)]=k(0x15e),c[k(0x17b)](this[k(0x179)]),this[k(0x186)]['onclick']=()=>{const l=k;if(this[l(0x179)]['children'][l(0x16d)]&&this['_moreContainer']['style']['visibility']=='hidden')this[l(0x179)][l(0x18e)]['visibility']='';else this['_moreContainer'][l(0x18e)]['visibility']='hidden';},this['_panels']=document['createElement']('div'),this[k(0x17c)]['className']='panels',c[k(0x17b)](this['_panels']);let d=document['createElement'](k(0x18b));d['name']=k(0x181),this['_panels']['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0x187)](this['_headerDiv']);}['_showHideHeaderItems'](){const m=j;this['_moreContainer'][m(0x18e)][m(0x170)]=m(0x15e);let c=0x0;DomHelper[m(0x189)](this[m(0x179)]),DomHelper[m(0x189)](this['_headerDiv']);let d=!![];for(let e of this[m(0x171)]){if(e['style']['display']!='none'){let f=e;!this['_elementMap']['has'](f)&&d&&(this[m(0x174)](),d=![]);const g=this[m(0x16f)][m(0x163)](f);this[m(0x179)][m(0x17b)](g),(this['_headerDiv']['children']['length']==0x0||c+g[m(0x18a)]/0x2<this['_headerDiv'][m(0x18a)])&&(this[m(0x167)][m(0x17b)](g),c+=g[m(0x18a)]);}}}[j(0x16e)](){const n=j;if(this[n(0x18d)]){this['refreshItems'](),this[n(0x18d)]=![];let c=this[n(0x162)]('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const o=j;return this[o(0x18d)]?-0x1:this['_selectedIndex'];}set['selectedIndex'](c){const p=j;let d=this['_selectedIndex'];this[p(0x160)]=c;if(this[p(0x171)]['length']&&d!=this['_selectedIndex'])this[p(0x188)](d);}[j(0x174)](){const q=j;this['_headerDiv']['innerHTML']='';let c=0x0;for(let d of this['children']){if(d['style'][q(0x17d)]!=q(0x16b)){let e=d,f=document[q(0x17a)](q(0x165));f['innerText']=e['dataset']['title']||e['title'],f[q(0x172)]=e['dataset']['title']||e[q(0x172)],f[q(0x16a)]=q(0x173);let g=c;f[q(0x185)]=()=>{const r=q;let h=this['_selectedIndex'];this[r(0x160)]=g;if(this['_headerDiv'][r(0x171)]['length'])this[r(0x188)](h,!![]);this[r(0x179)]['style']['visibility']='hidden';},this['_elementMap']['set'](e,f),this['_headerDiv']['appendChild'](f),c++;}}this['_showHideHeaderItems'](),this[q(0x188)]();}[j(0x188)](c,d=![]){const s=j;let e=-0x1;for(let f of this[s(0x171)]){if(f[s(0x18e)][s(0x17d)]!=s(0x16b)){e++;if(e==this[s(0x160)]){if(f[s(0x18b)]!='panels')f['slot']='panels';const g=this[s(0x16f)][s(0x163)](f);if(g){g['classList']['add'](s(0x15f));if(f[s(0x168)])f['activated']();}}else{f['removeAttribute'](s(0x18b));const h=this[s(0x16f)][s(0x163)](f);h&&h['classList'][s(0x184)]('selected');}}}this[s(0x176)]['emit']({'newIndex':this[s(0x160)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer'][s(0x18e)]['visibility']=s(0x15e);}[j(0x176)]=new TypedEvent();}customElements[j(0x164)](j(0x169),DesignerTabControl);