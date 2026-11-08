const j=b;function a(){const u=['tab-header','slot','_selectedIndexChanged','hidden','_headerDiv','151160TWvNfF','selected-index','45vVZhtg','get','add','76294rrWdcj','more-container','shadowRoot','visibility','_selectedIndex','title','onpointerdown','318edHXTZ','removeAttribute','children','header','length','createElement','className','remove','_firstConnect','6343030RAAvWc','activated','define','panels','dataset','562098iFTETF','_panels','_elementMap','1095696ireOBW','1508815GieZmT','selectedIndex','_moreContainer','observe','refreshItems','40201eLjRXF','div','innerText','style','_moreDiv','innerHTML','onclick','classList','2LgOODG','appendChild','clientWidth','_showHideHeaderItems'];a=function(){return u;};return a();}function b(c,d){c=c-0xcb;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xfb))/0x1*(parseInt(i(0xd5))/0x2)+parseInt(i(0xea))/0x3+parseInt(i(0xed))/0x4+parseInt(i(0xee))/0x5+parseInt(i(0xdc))/0x6*(parseInt(i(0xf3))/0x7)+parseInt(i(0xd0))/0x8*(-parseInt(i(0xd2))/0x9)+-parseInt(i(0xe5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x400d8));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];[j(0xcf)];[j(0xf7)];['_moreContainer'];[j(0xec)]=new WeakMap();[j(0xe4)]=!![];static [j(0xf6)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0xe1)]('div');c[k(0xe2)]='outer',this[k(0xd7)]['appendChild'](c),this['_headerDiv']=document['createElement']('div'),this[k(0xcf)][k(0xe2)]=k(0xdf),c[k(0xfc)](this[k(0xcf)]),this['_moreDiv']=document[k(0xe1)](k(0xf4)),this[k(0xf7)]['className']='header\x20header-more',this[k(0xf7)][k(0xf5)]='<<',c['appendChild'](this[k(0xf7)]),this['_moreContainer']=document[k(0xe1)](k(0xf4)),this['_moreContainer'][k(0xe2)]=k(0xd6),this[k(0xf0)]['style']['visibility']=k(0xce),c['appendChild'](this['_moreContainer']),this['_moreDiv'][k(0xf9)]=()=>{const l=k;if(this[l(0xf0)]['children'][l(0xe0)]&&this[l(0xf0)][l(0xf6)]['visibility']=='hidden')this['_moreContainer'][l(0xf6)]['visibility']='';else this[l(0xf0)]['style'][l(0xd8)]=l(0xce);},this[k(0xeb)]=document['createElement'](k(0xf4)),this['_panels']['className']='panels',c[k(0xfc)](this['_panels']);let d=document[k(0xe1)](k(0xcc));d['name']=k(0xe8),this[k(0xeb)][k(0xfc)](d);const e=new ResizeObserver(f=>{const m=k;this[m(0xfe)]();});e[k(0xf1)](this['_headerDiv']);}['_showHideHeaderItems'](){const n=j;this['_moreContainer']['style']['visibility']=n(0xce);let c=0x0;DomHelper['removeAllChildnodes'](this[n(0xf0)]),DomHelper['removeAllChildnodes'](this[n(0xcf)]);let d=!![];for(let e of this['children']){if(e[n(0xf6)]['display']!='none'){let f=e;!this['_elementMap']['has'](f)&&d&&(this[n(0xf2)](),d=![]);const g=this[n(0xec)]['get'](f);this['_moreContainer']['appendChild'](g),(this['_headerDiv'][n(0xde)]['length']==0x0||c+g['clientWidth']/0x2<this[n(0xcf)]['clientWidth'])&&(this['_headerDiv'][n(0xfc)](g),c+=g[n(0xfd)]);}}}['connectedCallback'](){const o=j;if(this[o(0xe4)]){this[o(0xf2)](),this['_firstConnect']=![];let c=this['getAttribute'](o(0xd1));c&&(this['selectedIndex']=parseInt(c));}}get[j(0xef)](){const p=j;return this[p(0xe4)]?-0x1:this[p(0xd9)];}set['selectedIndex'](c){const q=j;let d=this['_selectedIndex'];this[q(0xd9)]=c;if(this['children']['length']&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}['refreshItems'](){const r=j;this[r(0xcf)][r(0xf8)]='';let c=0x0;for(let d of this['children']){if(d['style']['display']!='none'){let e=d,f=document['createElement'](r(0xf4));f[r(0xf5)]=e[r(0xe9)]['title']||e[r(0xda)],f[r(0xda)]=e['dataset'][r(0xda)]||e[r(0xda)],f['className']=r(0xcb);let g=c;f[r(0xdb)]=()=>{const s=r;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this[s(0xcf)]['children']['length'])this[s(0xcd)](h,!![]);this['_moreContainer'][s(0xf6)]['visibility']='hidden';},this['_elementMap']['set'](e,f),this[r(0xcf)][r(0xfc)](f),c++;}}this[r(0xfe)](),this['_selectedIndexChanged']();}['_selectedIndexChanged'](c,d=![]){const t=j;let e=-0x1;for(let f of this['children']){if(f['style']['display']!='none'){e++;if(e==this[t(0xd9)]){if(f['slot']!=t(0xe8))f['slot']=t(0xe8);const g=this['_elementMap'][t(0xd3)](f);if(g){g['classList'][t(0xd4)]('selected');if(f['activated'])f[t(0xe6)]();}}else{f[t(0xdd)](t(0xcc));const h=this[t(0xec)][t(0xd3)](f);h&&h[t(0xfa)][t(0xe3)]('selected');}}}this['onSelectedTabChanged']['emit']({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[t(0xf0)][t(0xf6)][t(0xd8)]='hidden';}['onSelectedTabChanged']=new TypedEvent();}customElements[j(0xe7)]('node-projects-designer-tab-control',DesignerTabControl);