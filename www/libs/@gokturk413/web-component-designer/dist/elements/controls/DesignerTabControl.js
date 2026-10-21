const j=b;function a(){const t=['_headerDiv','slot','outer','_selectedIndexChanged','observe','innerText','has','_elementMap','div','onpointerdown','hidden','1328887WDSeTq','4259079fnDXtU','shadowRoot','306214SfIbIW','style','children','panels','_panels','_showHideHeaderItems','_moreDiv','selectedIndex','className','createElement','344177tDAxoT','visibility','display','removeAttribute','get','activated','getAttribute','210PUUXhm','define','classList','appendChild','_moreContainer','set','2550840KRzOpd','more-container','_firstConnect','clientWidth','onSelectedTabChanged','emit','name','length','title','none','2269640ypglte','89575LwvYaD','refreshItems','_selectedIndex'];a=function(){return t;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x9a))/0x1+parseInt(i(0x90))/0x2+parseInt(i(0x8e))/0x3+-parseInt(i(0xb1))/0x4+parseInt(i(0xb2))/0x5*(-parseInt(i(0xa1))/0x6)+-parseInt(i(0x8d))/0x7+parseInt(i(0xa7))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcfe64));function b(c,d){c=c-0x84;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];['_headerDiv'];['_moreDiv'];['_moreContainer'];[j(0x89)]=new WeakMap();[j(0xa9)]=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document['createElement'](k(0x8a));c['className']=k(0x84),this[k(0x8f)][k(0xa4)](c),this['_headerDiv']=document['createElement']('div'),this['_headerDiv'][k(0x98)]='header',c[k(0xa4)](this[k(0xb5)]),this['_moreDiv']=document[k(0x99)](k(0x8a)),this[k(0x96)]['className']='header\x20header-more',this[k(0x96)]['innerText']='<<',c[k(0xa4)](this['_moreDiv']),this[k(0xa5)]=document[k(0x99)]('div'),this[k(0xa5)][k(0x98)]=k(0xa8),this[k(0xa5)]['style']['visibility']='hidden',c['appendChild'](this['_moreContainer']),this[k(0x96)]['onclick']=()=>{const l=k;if(this[l(0xa5)][l(0x92)]['length']&&this['_moreContainer']['style']['visibility']==l(0x8c))this['_moreContainer'][l(0x91)]['visibility']='';else this['_moreContainer'][l(0x91)]['visibility']=l(0x8c);},this[k(0x94)]=document['createElement']('div'),this['_panels'][k(0x98)]='panels',c[k(0xa4)](this['_panels']);let d=document[k(0x99)](k(0xb6));d[k(0xad)]=k(0x93),this['_panels']['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0x86)](this['_headerDiv']);}[j(0x95)](){const m=j;this['_moreContainer'][m(0x91)][m(0x9b)]='hidden';let c=0x0;DomHelper['removeAllChildnodes'](this[m(0xa5)]),DomHelper['removeAllChildnodes'](this[m(0xb5)]);let d=!![];for(let e of this['children']){if(e[m(0x91)]['display']!=m(0xb0)){let f=e;!this['_elementMap'][m(0x88)](f)&&d&&(this['refreshItems'](),d=![]);const g=this[m(0x89)]['get'](f);this[m(0xa5)]['appendChild'](g),(this[m(0xb5)][m(0x92)]['length']==0x0||c+g['clientWidth']/0x2<this['_headerDiv'][m(0xaa)])&&(this[m(0xb5)][m(0xa4)](g),c+=g[m(0xaa)]);}}}['connectedCallback'](){const n=j;if(this['_firstConnect']){this[n(0xb3)](),this['_firstConnect']=![];let c=this[n(0xa0)]('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const o=j;return this[o(0xa9)]?-0x1:this['_selectedIndex'];}set[j(0x97)](c){const p=j;let d=this['_selectedIndex'];this['_selectedIndex']=c;if(this[p(0x92)]['length']&&d!=this['_selectedIndex'])this[p(0x85)](d);}[j(0xb3)](){const q=j;this[q(0xb5)]['innerHTML']='';let c=0x0;for(let d of this['children']){if(d['style']['display']!=q(0xb0)){let e=d,f=document[q(0x99)]('div');f[q(0x87)]=e['dataset']['title']||e[q(0xaf)],f['title']=e['dataset']['title']||e[q(0xaf)],f[q(0x98)]='tab-header';let g=c;f[q(0x8b)]=()=>{const r=q;let h=this['_selectedIndex'];this[r(0xb4)]=g;if(this[r(0xb5)][r(0x92)][r(0xae)])this['_selectedIndexChanged'](h,!![]);this['_moreContainer']['style'][r(0x9b)]=r(0x8c);},this['_elementMap'][q(0xa6)](e,f),this[q(0xb5)][q(0xa4)](f),c++;}}this['_showHideHeaderItems'](),this[q(0x85)]();}[j(0x85)](c,d=![]){const s=j;let e=-0x1;for(let f of this[s(0x92)]){if(f[s(0x91)][s(0x9c)]!=s(0xb0)){e++;if(e==this[s(0xb4)]){if(f[s(0xb6)]!='panels')f[s(0xb6)]=s(0x93);const g=this[s(0x89)][s(0x9e)](f);if(g){g[s(0xa3)]['add']('selected');if(f[s(0x9f)])f[s(0x9f)]();}}else{f[s(0x9d)]('slot');const h=this['_elementMap']['get'](f);h&&h['classList']['remove']('selected');}}}this[s(0xab)][s(0xac)]({'newIndex':this[s(0xb4)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer'][s(0x91)][s(0x9b)]=s(0x8c);}['onSelectedTabChanged']=new TypedEvent();}customElements[j(0xa2)]('node-projects-designer-tab-control',DesignerTabControl);