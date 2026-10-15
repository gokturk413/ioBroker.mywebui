const j=b;function b(c,d){c=c-0x83;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x9f))/0x1*(-parseInt(i(0x98))/0x2)+parseInt(i(0x9c))/0x3*(-parseInt(i(0xa8))/0x4)+-parseInt(i(0xaa))/0x5+-parseInt(i(0x87))/0x6+parseInt(i(0x92))/0x7+-parseInt(i(0x8c))/0x8*(-parseInt(i(0xb2))/0x9)+-parseInt(i(0x88))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8bc2d));function a(){const u=['refreshItems','display','slot','_selectedIndexChanged','175588fNYFBe','hidden','208700WWZKxa','children','classList','title','_firstConnect','createElement','activated','none','618804FogBrK','emit','onSelectedTabChanged','set','innerHTML','2723922tKesgx','3243500xCbAyy','_moreDiv','dataset','_moreContainer','120HSZHAv','remove','panels','selected','_selectedIndex','appendChild','3105389Khmqsv','clientWidth','_showHideHeaderItems','_panels','name','define','8zrdwZN','_headerDiv','_elementMap','get','51goJKZd','visibility','length','165955zqZFWO','className','style','div','removeAllChildnodes'];a=function(){return u;};return a();}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0x90)]=-0x1;[j(0x95)];['_headerDiv'];['_moreDiv'];['_moreContainer'];['_elementMap']=new WeakMap();[j(0xae)]=!![];static [j(0xa1)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0xaf)]('div');c[k(0xa0)]='outer',this['shadowRoot'][k(0x91)](c),this[k(0x99)]=document['createElement'](k(0xa2)),this[k(0x99)][k(0xa0)]='header',c[k(0x91)](this['_headerDiv']),this['_moreDiv']=document[k(0xaf)]('div'),this['_moreDiv'][k(0xa0)]='header\x20header-more',this[k(0x89)]['innerText']='<<',c[k(0x91)](this['_moreDiv']),this['_moreContainer']=document['createElement']('div'),this['_moreContainer'][k(0xa0)]='more-container',this['_moreContainer']['style']['visibility']=k(0xa9),c[k(0x91)](this[k(0x8b)]),this[k(0x89)]['onclick']=()=>{const l=k;if(this[l(0x8b)]['children'][l(0x9e)]&&this['_moreContainer'][l(0xa1)][l(0x9d)]==l(0xa9))this[l(0x8b)]['style']['visibility']='';else this[l(0x8b)]['style'][l(0x9d)]=l(0xa9);},this[k(0x95)]=document[k(0xaf)](k(0xa2)),this['_panels']['className']='panels',c[k(0x91)](this['_panels']);let d=document[k(0xaf)](k(0xa6));d[k(0x96)]=k(0x8e),this[k(0x95)][k(0x91)](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x94)]();});e['observe'](this['_headerDiv']);}['_showHideHeaderItems'](){const n=j;this['_moreContainer']['style'][n(0x9d)]='hidden';let c=0x0;DomHelper[n(0xa3)](this[n(0x8b)]),DomHelper['removeAllChildnodes'](this[n(0x99)]);let d=!![];for(let e of this['children']){if(e['style'][n(0xa5)]!=n(0xb1)){let f=e;!this['_elementMap']['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this[n(0x9a)]['get'](f);this['_moreContainer'][n(0x91)](g),(this['_headerDiv']['children']['length']==0x0||c+g['clientWidth']/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv']['appendChild'](g),c+=g[n(0x93)]);}}}['connectedCallback'](){const o=j;if(this['_firstConnect']){this['refreshItems'](),this[o(0xae)]=![];let c=this['getAttribute']('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const p=j;return this['_firstConnect']?-0x1:this[p(0x90)];}set['selectedIndex'](c){const q=j;let d=this['_selectedIndex'];this[q(0x90)]=c;if(this['children']['length']&&d!=this[q(0x90)])this['_selectedIndexChanged'](d);}[j(0xa4)](){const r=j;this[r(0x99)][r(0x86)]='';let c=0x0;for(let d of this['children']){if(d['style']['display']!=r(0xb1)){let e=d,f=document[r(0xaf)](r(0xa2));f['innerText']=e['dataset']['title']||e['title'],f['title']=e[r(0x8a)]['title']||e[r(0xad)],f['className']='tab-header';let g=c;f['onpointerdown']=()=>{const s=r;let h=this[s(0x90)];this[s(0x90)]=g;if(this[s(0x99)]['children'][s(0x9e)])this['_selectedIndexChanged'](h,!![]);this[s(0x8b)]['style'][s(0x9d)]='hidden';},this[r(0x9a)][r(0x85)](e,f),this[r(0x99)][r(0x91)](f),c++;}}this[r(0x94)](),this[r(0xa7)]();}[j(0xa7)](c,d=![]){const t=j;let e=-0x1;for(let f of this[t(0xab)]){if(f['style'][t(0xa5)]!='none'){e++;if(e==this['_selectedIndex']){if(f[t(0xa6)]!=t(0x8e))f[t(0xa6)]=t(0x8e);const g=this['_elementMap']['get'](f);if(g){g[t(0xac)]['add'](t(0x8f));if(f[t(0xb0)])f['activated']();}}else{f['removeAttribute']('slot');const h=this['_elementMap'][t(0x9b)](f);h&&h['classList'][t(0x8d)]('selected');}}}this[t(0x84)][t(0x83)]({'newIndex':this[t(0x90)],'oldIndex':c,'changedViaClick':d}),this[t(0x8b)][t(0xa1)]['visibility']='hidden';}['onSelectedTabChanged']=new TypedEvent();}customElements[j(0x97)]('node-projects-designer-tab-control',DesignerTabControl);