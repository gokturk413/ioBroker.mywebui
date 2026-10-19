const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x16b))/0x1*(-parseInt(i(0x18e))/0x2)+-parseInt(i(0x160))/0x3+parseInt(i(0x172))/0x4+parseInt(i(0x16c))/0x5*(parseInt(i(0x168))/0x6)+parseInt(i(0x17b))/0x7+-parseInt(i(0x18d))/0x8+parseInt(i(0x18c))/0x9*(parseInt(i(0x17c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x89c1d));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];[j(0x18f)];[j(0x185)];['_moreContainer'];[j(0x182)]=new WeakMap();[j(0x170)]=!![];static [j(0x166)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x16d)](k(0x17a));c['className']=k(0x178),this['shadowRoot'][k(0x18a)](c),this[k(0x18f)]=document[k(0x16d)](k(0x17a)),this[k(0x18f)][k(0x174)]='header',c['appendChild'](this[k(0x18f)]),this['_moreDiv']=document['createElement']('div'),this[k(0x185)]['className']=k(0x16a),this['_moreDiv'][k(0x180)]='<<',c['appendChild'](this[k(0x185)]),this[k(0x163)]=document[k(0x16d)](k(0x17a)),this['_moreContainer']['className']='more-container',this['_moreContainer']['style'][k(0x167)]='hidden',c[k(0x18a)](this['_moreContainer']),this[k(0x185)]['onclick']=()=>{const l=k;if(this[l(0x163)][l(0x164)]['length']&&this[l(0x163)][l(0x166)][l(0x167)]==l(0x175))this[l(0x163)][l(0x166)]['visibility']='';else this[l(0x163)][l(0x166)][l(0x167)]=l(0x175);},this['_panels']=document[k(0x16d)](k(0x17a)),this[k(0x169)]['className']='panels',c[k(0x18a)](this['_panels']);let d=document['createElement']('slot');d['name']=k(0x16e),this[k(0x169)][k(0x18a)](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x15f)]();});e['observe'](this['_headerDiv']);}[j(0x15f)](){const n=j;this[n(0x163)][n(0x166)][n(0x167)]='hidden';let c=0x0;DomHelper[n(0x184)](this[n(0x163)]),DomHelper['removeAllChildnodes'](this[n(0x18f)]);let d=!![];for(let e of this[n(0x164)]){if(e['style'][n(0x17e)]!=n(0x171)){let f=e;!this['_elementMap'][n(0x189)](f)&&d&&(this[n(0x173)](),d=![]);const g=this['_elementMap']['get'](f);this['_moreContainer']['appendChild'](g),(this['_headerDiv'][n(0x164)]['length']==0x0||c+g[n(0x176)]/0x2<this[n(0x18f)]['clientWidth'])&&(this['_headerDiv']['appendChild'](g),c+=g['clientWidth']);}}}[j(0x186)](){const o=j;if(this[o(0x170)]){this['refreshItems'](),this[o(0x170)]=![];let c=this[o(0x18b)](o(0x162));c&&(this[o(0x183)]=parseInt(c));}}get['selectedIndex'](){return this['_firstConnect']?-0x1:this['_selectedIndex'];}set['selectedIndex'](c){const p=j;let d=this['_selectedIndex'];this['_selectedIndex']=c;if(this['children']['length']&&d!=this[p(0x165)])this['_selectedIndexChanged'](d);}[j(0x173)](){const q=j;this[q(0x18f)]['innerHTML']='';let c=0x0;for(let d of this[q(0x164)]){if(d['style'][q(0x17e)]!='none'){let e=d,f=document['createElement']('div');f[q(0x180)]=e['dataset']['title']||e[q(0x161)],f[q(0x161)]=e['dataset'][q(0x161)]||e['title'],f[q(0x174)]='tab-header';let g=c;f['onpointerdown']=()=>{const r=q;let h=this[r(0x165)];this['_selectedIndex']=g;if(this['_headerDiv'][r(0x164)][r(0x177)])this['_selectedIndexChanged'](h,!![]);this[r(0x163)][r(0x166)][r(0x167)]='hidden';},this[q(0x182)]['set'](e,f),this['_headerDiv'][q(0x18a)](f),c++;}}this[q(0x15f)](),this['_selectedIndexChanged']();}['_selectedIndexChanged'](c,d=![]){const s=j;let e=-0x1;for(let f of this['children']){if(f[s(0x166)]['display']!=s(0x171)){e++;if(e==this['_selectedIndex']){if(f['slot']!='panels')f['slot']=s(0x16e);const g=this[s(0x182)]['get'](f);if(g){g[s(0x179)]['add'](s(0x17d));if(f[s(0x187)])f[s(0x187)]();}}else{f[s(0x188)]('slot');const h=this[s(0x182)][s(0x181)](f);h&&h[s(0x179)]['remove'](s(0x17d));}}}this['onSelectedTabChanged'][s(0x16f)]({'newIndex':this[s(0x165)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer'][s(0x166)]['visibility']='hidden';}[j(0x17f)]=new TypedEvent();}function a(){const t=['_panels','header\x20header-more','31UWcWsq','477415PEIzSv','createElement','panels','emit','_firstConnect','none','966752hZJXJA','refreshItems','className','hidden','clientWidth','length','outer','classList','div','2646742iuvugm','2657710GmBeVa','selected','display','onSelectedTabChanged','innerText','get','_elementMap','selectedIndex','removeAllChildnodes','_moreDiv','connectedCallback','activated','removeAttribute','has','appendChild','getAttribute','9imigdM','8415296sypSPU','42278fTHCXM','_headerDiv','node-projects-designer-tab-control','define','_showHideHeaderItems','633474dmZqju','title','selected-index','_moreContainer','children','_selectedIndex','style','visibility','18zcSOVZ'];a=function(){return t;};return a();}function b(c,d){c=c-0x15d;const e=a();let f=e[c];return f;}customElements[j(0x15e)](j(0x15d),DesignerTabControl);