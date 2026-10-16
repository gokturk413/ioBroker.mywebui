const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0xdd))/0x1*(parseInt(i(0xd8))/0x2)+-parseInt(i(0xcc))/0x3+-parseInt(i(0xea))/0x4*(-parseInt(i(0xe8))/0x5)+-parseInt(i(0xe0))/0x6+-parseInt(i(0xf4))/0x7+-parseInt(i(0xda))/0x8+-parseInt(i(0xf8))/0x9*(-parseInt(i(0xcf))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4a1f0));function a(){const u=['createElement','165924lyJuPb','visibility','innerHTML','_headerDiv','removeAllChildnodes','node-projects-designer-tab-control','_showHideHeaderItems','appendChild','emit','header','1249808AiYLZU','slot','children','define','9mhSgMg','add','get','1319424AoeymC','innerText','selectedIndex','10369690OlqVXT','hidden','none','_panels','div','dataset','_moreDiv','activated','_selectedIndex','94wIPOiO','_selectedIndexChanged','2503600JgBZPM','remove','_elementMap','4617KdzlPY','_moreContainer','connectedCallback','2105484RwqZFs','title','_firstConnect','style','panels','className','clientWidth','refreshItems','40QwGCfV'];a=function(){return u;};return a();}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xca;const e=a();let f=e[c];return f;}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0xd7)]=-0x1;[j(0xd2)];['_headerDiv'];[j(0xd5)];['_moreContainer'];['_elementMap']=new WeakMap();['_firstConnect']=!![];static [j(0xe3)]=css`
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
        `;constructor(){const k=j;super();let c=document['createElement']('div');c[k(0xe5)]='outer',this['shadowRoot']['appendChild'](c),this['_headerDiv']=document[k(0xe9)](k(0xd3)),this[k(0xed)]['className']=k(0xf3),c['appendChild'](this['_headerDiv']),this[k(0xd5)]=document['createElement']('div'),this[k(0xd5)]['className']='header\x20header-more',this[k(0xd5)]['innerText']='<<',c[k(0xf1)](this['_moreDiv']),this[k(0xde)]=document[k(0xe9)]('div'),this['_moreContainer'][k(0xe5)]='more-container',this[k(0xde)][k(0xe3)]['visibility']=k(0xd0),c[k(0xf1)](this[k(0xde)]),this['_moreDiv']['onclick']=()=>{const l=k;if(this[l(0xde)]['children']['length']&&this['_moreContainer'][l(0xe3)][l(0xeb)]==l(0xd0))this['_moreContainer']['style'][l(0xeb)]='';else this[l(0xde)][l(0xe3)]['visibility']=l(0xd0);},this[k(0xd2)]=document['createElement'](k(0xd3)),this[k(0xd2)][k(0xe5)]=k(0xe4),c[k(0xf1)](this['_panels']);let d=document[k(0xe9)]('slot');d['name']=k(0xe4),this[k(0xd2)]['appendChild'](d);const e=new ResizeObserver(f=>{const m=k;this[m(0xf0)]();});e['observe'](this['_headerDiv']);}['_showHideHeaderItems'](){const n=j;this[n(0xde)]['style']['visibility']=n(0xd0);let c=0x0;DomHelper[n(0xee)](this['_moreContainer']),DomHelper['removeAllChildnodes'](this['_headerDiv']);let d=!![];for(let e of this[n(0xf6)]){if(e['style']['display']!=n(0xd1)){let f=e;!this[n(0xdc)]['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this['_elementMap']['get'](f);this[n(0xde)]['appendChild'](g),(this[n(0xed)][n(0xf6)]['length']==0x0||c+g['clientWidth']/0x2<this[n(0xed)][n(0xe6)])&&(this['_headerDiv'][n(0xf1)](g),c+=g[n(0xe6)]);}}}[j(0xdf)](){const o=j;if(this['_firstConnect']){this['refreshItems'](),this['_firstConnect']=![];let c=this['getAttribute']('selected-index');c&&(this[o(0xce)]=parseInt(c));}}get['selectedIndex'](){const p=j;return this[p(0xe2)]?-0x1:this['_selectedIndex'];}set['selectedIndex'](c){const q=j;let d=this['_selectedIndex'];this['_selectedIndex']=c;if(this['children']['length']&&d!=this[q(0xd7)])this[q(0xd9)](d);}[j(0xe7)](){const r=j;this['_headerDiv'][r(0xec)]='';let c=0x0;for(let d of this['children']){if(d['style']['display']!='none'){let e=d,f=document['createElement'](r(0xd3));f[r(0xcd)]=e[r(0xd4)]['title']||e['title'],f[r(0xe1)]=e[r(0xd4)][r(0xe1)]||e['title'],f[r(0xe5)]='tab-header';let g=c;f['onpointerdown']=()=>{const s=r;let h=this[s(0xd7)];this[s(0xd7)]=g;if(this['_headerDiv']['children']['length'])this['_selectedIndexChanged'](h,!![]);this['_moreContainer']['style'][s(0xeb)]=s(0xd0);},this['_elementMap']['set'](e,f),this['_headerDiv']['appendChild'](f),c++;}}this['_showHideHeaderItems'](),this[r(0xd9)]();}[j(0xd9)](c,d=![]){const t=j;let e=-0x1;for(let f of this[t(0xf6)]){if(f[t(0xe3)]['display']!=t(0xd1)){e++;if(e==this['_selectedIndex']){if(f['slot']!=t(0xe4))f[t(0xf5)]='panels';const g=this['_elementMap'][t(0xcb)](f);if(g){g['classList'][t(0xca)]('selected');if(f[t(0xd6)])f[t(0xd6)]();}}else{f['removeAttribute']('slot');const h=this[t(0xdc)]['get'](f);h&&h['classList'][t(0xdb)]('selected');}}}this['onSelectedTabChanged'][t(0xf2)]({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[t(0xde)][t(0xe3)]['visibility']=t(0xd0);}['onSelectedTabChanged']=new TypedEvent();}customElements[j(0xf7)](j(0xef),DesignerTabControl);