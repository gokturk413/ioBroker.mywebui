const j=b;function a(){const u=['onSelectedTabChanged','hidden','385744sUWihI','display','innerText','get','_moreContainer','2710449DerbFF','getAttribute','2625536IFSbLc','35364QwxuHr','61481RkzgxJ','style','div','emit','_showHideHeaderItems','title','appendChild','children','tab-header','createElement','selected-index','removeAttribute','_selectedIndex','clientWidth','header','className','selectedIndex','removeAllChildnodes','1240jPeYGC','connectedCallback','node-projects-designer-tab-control','selected','refreshItems','slot','_selectedIndexChanged','visibility','_headerDiv','classList','_elementMap','_panels','2NEhVrM','outer','_firstConnect','_moreDiv','6851560jkDeob','header\x20header-more','30DVuQFa','observe','panels','innerHTML','4455369VDQyKT'];a=function(){return u;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1a8))/0x1+parseInt(i(0x19b))/0x2*(-parseInt(i(0x1a5))/0x3)+parseInt(i(0x1af))/0x4+-parseInt(i(0x18f))/0x5*(-parseInt(i(0x1b0))/0x6)+parseInt(i(0x1b1))/0x7+parseInt(i(0x19f))/0x8+-parseInt(i(0x1ad))/0x9*(parseInt(i(0x1a1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xef5ee));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;[j(0x19a)];[j(0x197)];['_moreDiv'];[j(0x1ac)];['_elementMap']=new WeakMap();[j(0x19d)]=!![];static [j(0x1b2)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x1ba)](k(0x1b3));c[k(0x18c)]=k(0x19c),this['shadowRoot'][k(0x1b7)](c),this['_headerDiv']=document['createElement']('div'),this[k(0x197)][k(0x18c)]=k(0x18b),c[k(0x1b7)](this['_headerDiv']),this[k(0x19e)]=document[k(0x1ba)]('div'),this['_moreDiv'][k(0x18c)]=k(0x1a0),this[k(0x19e)]['innerText']='<<',c['appendChild'](this[k(0x19e)]),this[k(0x1ac)]=document[k(0x1ba)](k(0x1b3)),this['_moreContainer'][k(0x18c)]='more-container',this[k(0x1ac)][k(0x1b2)][k(0x196)]=k(0x1a7),c['appendChild'](this[k(0x1ac)]),this[k(0x19e)]['onclick']=()=>{const l=k;if(this[l(0x1ac)]['children']['length']&&this['_moreContainer']['style']['visibility']=='hidden')this['_moreContainer']['style'][l(0x196)]='';else this['_moreContainer'][l(0x1b2)]['visibility']=l(0x1a7);},this['_panels']=document['createElement']('div'),this[k(0x19a)]['className']=k(0x1a3),c['appendChild'](this[k(0x19a)]);let d=document[k(0x1ba)]('slot');d['name']=k(0x1a3),this[k(0x19a)]['appendChild'](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x1b5)]();});e[k(0x1a2)](this[k(0x197)]);}['_showHideHeaderItems'](){const n=j;this['_moreContainer']['style']['visibility']='hidden';let c=0x0;DomHelper[n(0x18e)](this[n(0x1ac)]),DomHelper[n(0x18e)](this[n(0x197)]);let d=!![];for(let e of this[n(0x1b8)]){if(e[n(0x1b2)][n(0x1a9)]!='none'){let f=e;!this[n(0x199)]['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this['_elementMap']['get'](f);this[n(0x1ac)][n(0x1b7)](g),(this['_headerDiv']['children']['length']==0x0||c+g['clientWidth']/0x2<this[n(0x197)]['clientWidth'])&&(this[n(0x197)]['appendChild'](g),c+=g[n(0x18a)]);}}}[j(0x190)](){const o=j;if(this['_firstConnect']){this[o(0x193)](),this['_firstConnect']=![];let c=this[o(0x1ae)](o(0x1bb));c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const p=j;return this['_firstConnect']?-0x1:this[p(0x189)];}set[j(0x18d)](c){const q=j;let d=this['_selectedIndex'];this['_selectedIndex']=c;if(this[q(0x1b8)]['length']&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}['refreshItems'](){const r=j;this[r(0x197)][r(0x1a4)]='';let c=0x0;for(let d of this['children']){if(d[r(0x1b2)][r(0x1a9)]!='none'){let e=d,f=document[r(0x1ba)]('div');f[r(0x1aa)]=e['dataset']['title']||e[r(0x1b6)],f['title']=e['dataset'][r(0x1b6)]||e[r(0x1b6)],f['className']=r(0x1b9);let g=c;f['onpointerdown']=()=>{const s=r;let h=this[s(0x189)];this['_selectedIndex']=g;if(this[s(0x197)][s(0x1b8)]['length'])this[s(0x195)](h,!![]);this['_moreContainer'][s(0x1b2)][s(0x196)]=s(0x1a7);},this['_elementMap']['set'](e,f),this[r(0x197)][r(0x1b7)](f),c++;}}this['_showHideHeaderItems'](),this['_selectedIndexChanged']();}[j(0x195)](c,d=![]){const t=j;let e=-0x1;for(let f of this[t(0x1b8)]){if(f[t(0x1b2)]['display']!='none'){e++;if(e==this['_selectedIndex']){if(f['slot']!='panels')f[t(0x194)]=t(0x1a3);const g=this[t(0x199)]['get'](f);if(g){g[t(0x198)]['add'](t(0x192));if(f['activated'])f['activated']();}}else{f[t(0x1bc)]('slot');const h=this[t(0x199)][t(0x1ab)](f);h&&h[t(0x198)]['remove'](t(0x192));}}}this['onSelectedTabChanged'][t(0x1b4)]({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[t(0x1ac)][t(0x1b2)][t(0x196)]=t(0x1a7);}[j(0x1a6)]=new TypedEvent();}function b(c,d){c=c-0x189;const e=a();let f=e[c];return f;}customElements['define'](j(0x191),DesignerTabControl);