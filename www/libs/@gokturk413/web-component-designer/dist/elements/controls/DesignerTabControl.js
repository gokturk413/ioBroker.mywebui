const j=b;function a(){const u=['dataset','appendChild','selected','_selectedIndex','createElement','1421028ivVKlD','445776OPPrOR','2164589QtCvQx','header\x20header-more','add','_firstConnect','16PrQpTk','refreshItems','children','178Thoqop','_showHideHeaderItems','style','get','1609893ooGkDU','onpointerdown','div','slot','emit','visibility','remove','_selectedIndexChanged','selectedIndex','className','panels','none','shadowRoot','_panels','classList','more-container','title','clientWidth','_moreContainer','_elementMap','observe','_headerDiv','onclick','length','innerText','5907XNnRWu','hidden','_moreDiv','871356PMRoSu','488770vXBbNg'];a=function(){return u;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1e6))/0x1+-parseInt(i(0x1ee))/0x2*(-parseInt(i(0x1db))/0x3)+-parseInt(i(0x1e5))/0x4+parseInt(i(0x1df))/0x5+parseInt(i(0x1de))/0x6+parseInt(i(0x1e7))/0x7+-parseInt(i(0x1eb))/0x8*(-parseInt(i(0x1f2))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x45609));function b(c,d){c=c-0x1c8;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];['_headerDiv'];[j(0x1dd)];[j(0x1d4)];['_elementMap']=new WeakMap();[j(0x1ea)]=!![];static [j(0x1f0)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x1e4)](k(0x1f4));c[k(0x1cb)]='outer',this[k(0x1ce)][k(0x1e1)](c),this['_headerDiv']=document['createElement'](k(0x1f4)),this['_headerDiv']['className']='header',c[k(0x1e1)](this[k(0x1d7)]),this['_moreDiv']=document[k(0x1e4)](k(0x1f4)),this['_moreDiv']['className']=k(0x1e8),this['_moreDiv']['innerText']='<<',c[k(0x1e1)](this[k(0x1dd)]),this[k(0x1d4)]=document[k(0x1e4)]('div'),this[k(0x1d4)][k(0x1cb)]=k(0x1d1),this[k(0x1d4)][k(0x1f0)][k(0x1f7)]='hidden',c['appendChild'](this['_moreContainer']),this['_moreDiv'][k(0x1d8)]=()=>{const l=k;if(this[l(0x1d4)][l(0x1ed)][l(0x1d9)]&&this['_moreContainer']['style']['visibility']=='hidden')this[l(0x1d4)]['style']['visibility']='';else this[l(0x1d4)][l(0x1f0)]['visibility']='hidden';},this[k(0x1cf)]=document[k(0x1e4)]('div'),this[k(0x1cf)]['className']='panels',c['appendChild'](this[k(0x1cf)]);let d=document['createElement'](k(0x1f5));d['name']=k(0x1cc),this['_panels']['appendChild'](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x1ef)]();});e[k(0x1d6)](this[k(0x1d7)]);}[j(0x1ef)](){const n=j;this[n(0x1d4)]['style']['visibility']='hidden';let c=0x0;DomHelper['removeAllChildnodes'](this['_moreContainer']),DomHelper['removeAllChildnodes'](this[n(0x1d7)]);let d=!![];for(let e of this[n(0x1ed)]){if(e['style']['display']!=n(0x1cd)){let f=e;!this['_elementMap']['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this[n(0x1d5)]['get'](f);this['_moreContainer'][n(0x1e1)](g),(this[n(0x1d7)]['children'][n(0x1d9)]==0x0||c+g[n(0x1d3)]/0x2<this['_headerDiv']['clientWidth'])&&(this[n(0x1d7)]['appendChild'](g),c+=g[n(0x1d3)]);}}}['connectedCallback'](){const o=j;if(this['_firstConnect']){this[o(0x1ec)](),this['_firstConnect']=![];let c=this['getAttribute']('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get[j(0x1ca)](){const p=j;return this['_firstConnect']?-0x1:this[p(0x1e3)];}set[j(0x1ca)](c){const q=j;let d=this[q(0x1e3)];this['_selectedIndex']=c;if(this[q(0x1ed)][q(0x1d9)]&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}['refreshItems'](){const r=j;this[r(0x1d7)]['innerHTML']='';let c=0x0;for(let d of this[r(0x1ed)]){if(d['style']['display']!=r(0x1cd)){let e=d,f=document[r(0x1e4)]('div');f[r(0x1da)]=e[r(0x1e0)]['title']||e['title'],f['title']=e['dataset'][r(0x1d2)]||e[r(0x1d2)],f[r(0x1cb)]='tab-header';let g=c;f[r(0x1f3)]=()=>{const s=r;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this['_headerDiv']['children'][s(0x1d9)])this[s(0x1c9)](h,!![]);this[s(0x1d4)]['style'][s(0x1f7)]=s(0x1dc);},this[r(0x1d5)]['set'](e,f),this[r(0x1d7)][r(0x1e1)](f),c++;}}this['_showHideHeaderItems'](),this[r(0x1c9)]();}[j(0x1c9)](c,d=![]){const t=j;let e=-0x1;for(let f of this['children']){if(f[t(0x1f0)]['display']!=t(0x1cd)){e++;if(e==this['_selectedIndex']){if(f[t(0x1f5)]!=t(0x1cc))f[t(0x1f5)]='panels';const g=this['_elementMap'][t(0x1f1)](f);if(g){g[t(0x1d0)][t(0x1e9)](t(0x1e2));if(f['activated'])f['activated']();}}else{f['removeAttribute']('slot');const h=this[t(0x1d5)][t(0x1f1)](f);h&&h[t(0x1d0)][t(0x1c8)](t(0x1e2));}}}this['onSelectedTabChanged'][t(0x1f6)]({'newIndex':this[t(0x1e3)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer'][t(0x1f0)]['visibility']='hidden';}['onSelectedTabChanged']=new TypedEvent();}customElements['define']('node-projects-designer-tab-control',DesignerTabControl);