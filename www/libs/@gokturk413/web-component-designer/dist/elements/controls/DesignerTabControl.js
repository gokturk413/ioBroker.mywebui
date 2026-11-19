function b(c,d){c=c-0x7c;const e=a();let f=e[c];return f;}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xac))/0x1+-parseInt(i(0xab))/0x2+-parseInt(i(0x96))/0x3+-parseInt(i(0x88))/0x4+-parseInt(i(0x89))/0x5+parseInt(i(0x97))/0x6+parseInt(i(0x9e))/0x7*(parseInt(i(0xa2))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x99108));function a(){const t=['none','style','children','clientWidth','2664560zIGxMJ','2509490tQYhdI','removeAllChildnodes','getAttribute','hidden','selected-index','className','onclick','visibility','slot','add','classList','selectedIndex','appendChild','2828178AgNEOx','3720804EvCSYK','length','refreshItems','innerText','set','observe','removeAttribute','275499VmBNiY','_showHideHeaderItems','div','outer','568iXXmqn','emit','_moreContainer','_selectedIndex','connectedCallback','_elementMap','title','_selectedIndexChanged','header\x20header-more','589718SHTLiX','381906MlaJuf','panels','createElement','_headerDiv','_panels','dataset','node-projects-designer-tab-control','remove','_moreDiv','display'];a=function(){return t;};return a();}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0xa5)]=-0x1;['_panels'];['_headerDiv'];[j(0x82)];['_moreContainer'];[j(0xa7)]=new WeakMap();['_firstConnect']=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document['createElement']('div');c[k(0x8e)]=k(0xa1),this['shadowRoot'][k(0x95)](c),this[k(0x7d)]=document[k(0x7c)]('div'),this['_headerDiv'][k(0x8e)]='header',c['appendChild'](this['_headerDiv']),this[k(0x82)]=document['createElement']('div'),this[k(0x82)][k(0x8e)]=k(0xaa),this[k(0x82)]['innerText']='<<',c['appendChild'](this['_moreDiv']),this[k(0xa4)]=document[k(0x7c)](k(0xa0)),this['_moreContainer']['className']='more-container',this['_moreContainer']['style'][k(0x90)]='hidden',c[k(0x95)](this['_moreContainer']),this[k(0x82)][k(0x8f)]=()=>{const l=k;if(this['_moreContainer'][l(0x86)][l(0x98)]&&this['_moreContainer']['style'][l(0x90)]=='hidden')this['_moreContainer'][l(0x85)]['visibility']='';else this['_moreContainer'][l(0x85)]['visibility']=l(0x8c);},this['_panels']=document[k(0x7c)](k(0xa0)),this[k(0x7e)][k(0x8e)]=k(0xad),c[k(0x95)](this['_panels']);let d=document[k(0x7c)]('slot');d['name']=k(0xad),this[k(0x7e)][k(0x95)](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0x9c)](this['_headerDiv']);}[j(0x9f)](){const m=j;this['_moreContainer']['style'][m(0x90)]=m(0x8c);let c=0x0;DomHelper['removeAllChildnodes'](this['_moreContainer']),DomHelper[m(0x8a)](this['_headerDiv']);let d=!![];for(let e of this[m(0x86)]){if(e['style'][m(0x83)]!='none'){let f=e;!this[m(0xa7)]['has'](f)&&d&&(this[m(0x99)](),d=![]);const g=this['_elementMap']['get'](f);this['_moreContainer']['appendChild'](g),(this[m(0x7d)][m(0x86)]['length']==0x0||c+g['clientWidth']/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv'][m(0x95)](g),c+=g[m(0x87)]);}}}[j(0xa6)](){const n=j;if(this['_firstConnect']){this['refreshItems'](),this['_firstConnect']=![];let c=this[n(0x8b)](n(0x8d));c&&(this['selectedIndex']=parseInt(c));}}get[j(0x94)](){const o=j;return this['_firstConnect']?-0x1:this[o(0xa5)];}set['selectedIndex'](c){const p=j;let d=this[p(0xa5)];this[p(0xa5)]=c;if(this['children'][p(0x98)]&&d!=this[p(0xa5)])this[p(0xa9)](d);}[j(0x99)](){const q=j;this['_headerDiv']['innerHTML']='';let c=0x0;for(let d of this['children']){if(d[q(0x85)][q(0x83)]!='none'){let e=d,f=document['createElement'](q(0xa0));f[q(0x9a)]=e[q(0x7f)][q(0xa8)]||e[q(0xa8)],f['title']=e[q(0x7f)]['title']||e[q(0xa8)],f['className']='tab-header';let g=c;f['onpointerdown']=()=>{const r=q;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this['_headerDiv'][r(0x86)][r(0x98)])this['_selectedIndexChanged'](h,!![]);this[r(0xa4)]['style']['visibility']='hidden';},this[q(0xa7)][q(0x9b)](e,f),this[q(0x7d)][q(0x95)](f),c++;}}this['_showHideHeaderItems'](),this['_selectedIndexChanged']();}['_selectedIndexChanged'](c,d=![]){const s=j;let e=-0x1;for(let f of this[s(0x86)]){if(f['style'][s(0x83)]!=s(0x84)){e++;if(e==this[s(0xa5)]){if(f['slot']!='panels')f[s(0x91)]='panels';const g=this[s(0xa7)]['get'](f);if(g){g[s(0x93)][s(0x92)]('selected');if(f['activated'])f['activated']();}}else{f[s(0x9d)](s(0x91));const h=this['_elementMap']['get'](f);h&&h['classList'][s(0x81)]('selected');}}}this['onSelectedTabChanged'][s(0xa3)]({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[s(0xa4)]['style']['visibility']=s(0x8c);}['onSelectedTabChanged']=new TypedEvent();}customElements['define'](j(0x80),DesignerTabControl);