const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x153))/0x1*(parseInt(i(0x14a))/0x2)+-parseInt(i(0x158))/0x3*(-parseInt(i(0x145))/0x4)+-parseInt(i(0x14d))/0x5*(-parseInt(i(0x147))/0x6)+-parseInt(i(0x14b))/0x7*(-parseInt(i(0x14f))/0x8)+parseInt(i(0x157))/0x9*(-parseInt(i(0x142))/0xa)+parseInt(i(0x156))/0xb+-parseInt(i(0x13d))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcaf9d));function b(c,d){c=c-0x129;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];[j(0x151)];[j(0x141)];[j(0x12b)];[j(0x12a)]=new WeakMap();[j(0x152)]=!![];static [j(0x133)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x155)]('div');c['className']='outer',this[k(0x140)]['appendChild'](c),this['_headerDiv']=document['createElement'](k(0x139)),this['_headerDiv'][k(0x159)]=k(0x12d),c[k(0x131)](this[k(0x151)]),this['_moreDiv']=document[k(0x155)](k(0x139)),this[k(0x141)]['className']=k(0x154),this['_moreDiv']['innerText']='<<',c['appendChild'](this['_moreDiv']),this[k(0x12b)]=document[k(0x155)]('div'),this['_moreContainer']['className']='more-container',this[k(0x12b)]['style'][k(0x137)]='hidden',c['appendChild'](this[k(0x12b)]),this['_moreDiv'][k(0x13c)]=()=>{const l=k;if(this['_moreContainer'][l(0x12e)][l(0x13e)]&&this[l(0x12b)]['style']['visibility']=='hidden')this['_moreContainer']['style'][l(0x137)]='';else this[l(0x12b)]['style']['visibility']='hidden';},this[k(0x144)]=document[k(0x155)](k(0x139)),this['_panels'][k(0x159)]='panels',c['appendChild'](this[k(0x144)]);let d=document['createElement']('slot');d['name']='panels',this['_panels']['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e['observe'](this['_headerDiv']);}[j(0x135)](){const m=j;this['_moreContainer'][m(0x133)]['visibility']=m(0x148);let c=0x0;DomHelper[m(0x130)](this[m(0x12b)]),DomHelper['removeAllChildnodes'](this[m(0x151)]);let d=!![];for(let e of this[m(0x12e)]){if(e['style']['display']!='none'){let f=e;!this['_elementMap'][m(0x13a)](f)&&d&&(this[m(0x13b)](),d=![]);const g=this['_elementMap']['get'](f);this['_moreContainer']['appendChild'](g),(this['_headerDiv']['children']['length']==0x0||c+g['clientWidth']/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv']['appendChild'](g),c+=g[m(0x150)]);}}}[j(0x14e)](){const n=j;if(this['_firstConnect']){this['refreshItems'](),this[n(0x152)]=![];let c=this['getAttribute']('selected-index');c&&(this[n(0x138)]=parseInt(c));}}get[j(0x138)](){return this['_firstConnect']?-0x1:this['_selectedIndex'];}set['selectedIndex'](c){const o=j;let d=this[o(0x129)];this[o(0x129)]=c;if(this['children']['length']&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}['refreshItems'](){const p=j;this[p(0x151)]['innerHTML']='';let c=0x0;for(let d of this['children']){if(d[p(0x133)]['display']!=p(0x146)){let e=d,f=document[p(0x155)]('div');f['innerText']=e[p(0x134)]['title']||e['title'],f['title']=e['dataset'][p(0x12c)]||e['title'],f[p(0x159)]='tab-header';let g=c;f[p(0x143)]=()=>{const q=p;let h=this[q(0x129)];this[q(0x129)]=g;if(this['_headerDiv']['children']['length'])this[q(0x12f)](h,!![]);this['_moreContainer']['style']['visibility']='hidden';},this['_elementMap']['set'](e,f),this[p(0x151)]['appendChild'](f),c++;}}this['_showHideHeaderItems'](),this[p(0x12f)]();}[j(0x12f)](c,d=![]){const r=j;let e=-0x1;for(let f of this['children']){if(f[r(0x133)][r(0x132)]!='none'){e++;if(e==this[r(0x129)]){if(f[r(0x14c)]!='panels')f[r(0x14c)]='panels';const g=this['_elementMap'][r(0x13f)](f);if(g){g['classList']['add'](r(0x149));if(f[r(0x15a)])f[r(0x15a)]();}}else{f['removeAttribute'](r(0x14c));const h=this['_elementMap'][r(0x13f)](f);h&&h['classList']['remove'](r(0x149));}}}this[r(0x136)]['emit']({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[r(0x12b)]['style'][r(0x137)]=r(0x148);}[j(0x136)]=new TypedEvent();}customElements['define']('node-projects-designer-tab-control',DesignerTabControl);function a(){const s=['none','6XfibPi','hidden','selected','56Imdzfq','38997pEjOwH','slot','6205135fKlZqz','connectedCallback','2104pkJSXv','clientWidth','_headerDiv','_firstConnect','56401fxZeOD','header\x20header-more','createElement','4163775pJCcvN','2916oRbNBu','474ukyKHH','className','activated','_selectedIndex','_elementMap','_moreContainer','title','header','children','_selectedIndexChanged','removeAllChildnodes','appendChild','display','style','dataset','_showHideHeaderItems','onSelectedTabChanged','visibility','selectedIndex','div','has','refreshItems','onclick','42275688oWveXm','length','get','shadowRoot','_moreDiv','49460ZkmQIP','onpointerdown','_panels','32732fcOXdQ'];a=function(){return s;};return a();}