function b(c,d){c=c-0x15a;const e=a();let f=e[c];return f;}const j=b;function a(){const u=['none','innerHTML','remove','_moreContainer','dataset','slot','visibility','observe','div','2049649EYatwr','define','selectedIndex','get','activated','className','shadowRoot','outer','removeAllChildnodes','connectedCallback','children','1423870JZFXxc','1877822ZXmXTC','hidden','_elementMap','selected','display','_selectedIndex','4542656aPnkwW','length','_selectedIndexChanged','panels','onclick','more-container','set','refreshItems','removeAttribute','classList','innerText','getAttribute','2143242wLRUyf','tab-header','_headerDiv','add','createElement','6yZTDfn','_moreDiv','onSelectedTabChanged','appendChild','_panels','7209150CRpyPN','_firstConnect','header\x20header-more','style','6695276UfpBNi','onpointerdown','_showHideHeaderItems','header'];a=function(){return u;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x163))/0x1+parseInt(i(0x164))/0x2+parseInt(i(0x176))/0x3+-parseInt(i(0x184))/0x4+parseInt(i(0x180))/0x5+-parseInt(i(0x17b))/0x6*(-parseInt(i(0x191))/0x7)+parseInt(i(0x16a))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd17f9));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];['_headerDiv'];[j(0x17c)];['_moreContainer'];['_elementMap']=new WeakMap();[j(0x181)]=!![];static [j(0x183)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x17a)]('div');c['className']=k(0x15f),this[k(0x15e)][k(0x17e)](c),this[k(0x178)]=document[k(0x17a)]('div'),this[k(0x178)][k(0x15d)]=k(0x187),c['appendChild'](this['_headerDiv']),this['_moreDiv']=document['createElement']('div'),this[k(0x17c)][k(0x15d)]=k(0x182),this[k(0x17c)][k(0x174)]='<<',c[k(0x17e)](this[k(0x17c)]),this['_moreContainer']=document['createElement'](k(0x190)),this[k(0x18b)][k(0x15d)]=k(0x16f),this[k(0x18b)][k(0x183)][k(0x18e)]=k(0x165),c['appendChild'](this[k(0x18b)]),this['_moreDiv'][k(0x16e)]=()=>{const l=k;if(this[l(0x18b)]['children']['length']&&this[l(0x18b)][l(0x183)]['visibility']==l(0x165))this['_moreContainer']['style'][l(0x18e)]='';else this[l(0x18b)]['style']['visibility']='hidden';},this[k(0x17f)]=document[k(0x17a)](k(0x190)),this['_panels'][k(0x15d)]='panels',c[k(0x17e)](this['_panels']);let d=document['createElement']('slot');d['name']='panels',this[k(0x17f)]['appendChild'](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x186)]();});e[k(0x18f)](this[k(0x178)]);}['_showHideHeaderItems'](){const n=j;this[n(0x18b)][n(0x183)][n(0x18e)]='hidden';let c=0x0;DomHelper[n(0x160)](this[n(0x18b)]),DomHelper['removeAllChildnodes'](this['_headerDiv']);let d=!![];for(let e of this['children']){if(e['style'][n(0x168)]!='none'){let f=e;!this['_elementMap']['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this['_elementMap']['get'](f);this[n(0x18b)][n(0x17e)](g),(this['_headerDiv']['children']['length']==0x0||c+g['clientWidth']/0x2<this[n(0x178)]['clientWidth'])&&(this[n(0x178)]['appendChild'](g),c+=g['clientWidth']);}}}[j(0x161)](){const o=j;if(this['_firstConnect']){this['refreshItems'](),this['_firstConnect']=![];let c=this[o(0x175)]('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get[j(0x15a)](){const p=j;return this[p(0x181)]?-0x1:this[p(0x169)];}set['selectedIndex'](c){const q=j;let d=this['_selectedIndex'];this[q(0x169)]=c;if(this['children'][q(0x16b)]&&d!=this[q(0x169)])this[q(0x16c)](d);}[j(0x171)](){const r=j;this[r(0x178)][r(0x189)]='';let c=0x0;for(let d of this[r(0x162)]){if(d['style'][r(0x168)]!='none'){let e=d,f=document['createElement'](r(0x190));f[r(0x174)]=e[r(0x18c)]['title']||e['title'],f['title']=e['dataset']['title']||e['title'],f[r(0x15d)]=r(0x177);let g=c;f[r(0x185)]=()=>{const s=r;let h=this['_selectedIndex'];this[s(0x169)]=g;if(this[s(0x178)][s(0x162)][s(0x16b)])this['_selectedIndexChanged'](h,!![]);this['_moreContainer'][s(0x183)]['visibility']='hidden';},this['_elementMap'][r(0x170)](e,f),this[r(0x178)][r(0x17e)](f),c++;}}this[r(0x186)](),this[r(0x16c)]();}[j(0x16c)](c,d=![]){const t=j;let e=-0x1;for(let f of this['children']){if(f['style']['display']!=t(0x188)){e++;if(e==this['_selectedIndex']){if(f[t(0x18d)]!='panels')f[t(0x18d)]=t(0x16d);const g=this[t(0x166)]['get'](f);if(g){g['classList'][t(0x179)](t(0x167));if(f[t(0x15c)])f['activated']();}}else{f[t(0x172)](t(0x18d));const h=this['_elementMap'][t(0x15b)](f);h&&h[t(0x173)][t(0x18a)]('selected');}}}this['onSelectedTabChanged']['emit']({'newIndex':this[t(0x169)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer']['style']['visibility']=t(0x165);}[j(0x17d)]=new TypedEvent();}customElements[j(0x192)]('node-projects-designer-tab-control',DesignerTabControl);