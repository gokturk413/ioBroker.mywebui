const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xb2))/0x1*(-parseInt(i(0xde))/0x2)+-parseInt(i(0xd9))/0x3+parseInt(i(0xbc))/0x4+parseInt(i(0xc0))/0x5+-parseInt(i(0xb1))/0x6+-parseInt(i(0xca))/0x7*(parseInt(i(0xb8))/0x8)+parseInt(i(0xb3))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdedf8));function b(c,d){c=c-0xb1;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const t=['126lzZOEU','onclick','none','title','className','observe','removeAllChildnodes','children','appendChild','hidden','activated','name','_elementMap','length','display','5247192mYhhNd','header\x20header-more','node-projects-designer-tab-control','tab-header','_panels','2QSeaSL','div','onSelectedTabChanged','6305352VylrPA','1256422fXcKam','11609802YZGFYM','style','remove','add','_headerDiv','271056BSRabU','_moreContainer','panels','_showHideHeaderItems','2257288ORJVEf','clientWidth','_firstConnect','get','6059990yewpNc','createElement','_moreDiv','selectedIndex','visibility','_selectedIndex','connectedCallback','innerText','slot','_selectedIndexChanged'];a=function(){return t;};return a();}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];['_headerDiv'];[j(0xc2)];[j(0xb9)];[j(0xd6)]=new WeakMap();[j(0xbe)]=!![];static [j(0xb4)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0xc1)](k(0xdf));c['className']='outer',this['shadowRoot']['appendChild'](c),this[k(0xb7)]=document['createElement']('div'),this['_headerDiv'][k(0xce)]='header',c[k(0xd2)](this[k(0xb7)]),this[k(0xc2)]=document[k(0xc1)]('div'),this['_moreDiv'][k(0xce)]=k(0xda),this[k(0xc2)][k(0xc7)]='<<',c['appendChild'](this['_moreDiv']),this['_moreContainer']=document[k(0xc1)](k(0xdf)),this['_moreContainer']['className']='more-container',this['_moreContainer']['style'][k(0xc4)]=k(0xd3),c[k(0xd2)](this['_moreContainer']),this[k(0xc2)][k(0xcb)]=()=>{const l=k;if(this[l(0xb9)]['children']['length']&&this[l(0xb9)][l(0xb4)]['visibility']=='hidden')this[l(0xb9)]['style'][l(0xc4)]='';else this['_moreContainer']['style'][l(0xc4)]='hidden';},this['_panels']=document['createElement'](k(0xdf)),this['_panels'][k(0xce)]='panels',c[k(0xd2)](this['_panels']);let d=document['createElement'](k(0xc8));d[k(0xd5)]=k(0xba),this[k(0xdd)]['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0xcf)](this[k(0xb7)]);}[j(0xbb)](){const m=j;this['_moreContainer']['style'][m(0xc4)]='hidden';let c=0x0;DomHelper[m(0xd0)](this['_moreContainer']),DomHelper[m(0xd0)](this[m(0xb7)]);let d=!![];for(let e of this['children']){if(e['style']['display']!=m(0xcc)){let f=e;!this[m(0xd6)]['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this[m(0xd6)][m(0xbf)](f);this[m(0xb9)][m(0xd2)](g),(this[m(0xb7)][m(0xd1)][m(0xd7)]==0x0||c+g[m(0xbd)]/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv'][m(0xd2)](g),c+=g[m(0xbd)]);}}}[j(0xc6)](){const n=j;if(this['_firstConnect']){this['refreshItems'](),this['_firstConnect']=![];let c=this['getAttribute']('selected-index');c&&(this[n(0xc3)]=parseInt(c));}}get['selectedIndex'](){const o=j;return this[o(0xbe)]?-0x1:this[o(0xc5)];}set['selectedIndex'](c){const p=j;let d=this[p(0xc5)];this[p(0xc5)]=c;if(this[p(0xd1)][p(0xd7)]&&d!=this['_selectedIndex'])this[p(0xc9)](d);}['refreshItems'](){const q=j;this[q(0xb7)]['innerHTML']='';let c=0x0;for(let d of this[q(0xd1)]){if(d['style']['display']!=q(0xcc)){let e=d,f=document['createElement']('div');f['innerText']=e['dataset'][q(0xcd)]||e['title'],f['title']=e['dataset']['title']||e[q(0xcd)],f['className']=q(0xdc);let g=c;f['onpointerdown']=()=>{const r=q;let h=this[r(0xc5)];this['_selectedIndex']=g;if(this[r(0xb7)][r(0xd1)]['length'])this['_selectedIndexChanged'](h,!![]);this['_moreContainer']['style']['visibility']='hidden';},this['_elementMap']['set'](e,f),this[q(0xb7)][q(0xd2)](f),c++;}}this['_showHideHeaderItems'](),this[q(0xc9)]();}['_selectedIndexChanged'](c,d=![]){const s=j;let e=-0x1;for(let f of this['children']){if(f[s(0xb4)][s(0xd8)]!=s(0xcc)){e++;if(e==this['_selectedIndex']){if(f['slot']!=s(0xba))f[s(0xc8)]=s(0xba);const g=this['_elementMap']['get'](f);if(g){g['classList'][s(0xb6)]('selected');if(f['activated'])f[s(0xd4)]();}}else{f['removeAttribute'](s(0xc8));const h=this[s(0xd6)][s(0xbf)](f);h&&h['classList'][s(0xb5)]('selected');}}}this[s(0xe0)]['emit']({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[s(0xb9)][s(0xb4)][s(0xc4)]='hidden';}[j(0xe0)]=new TypedEvent();}customElements['define'](j(0xdb),DesignerTabControl);