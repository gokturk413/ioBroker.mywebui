const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1f0))/0x1*(parseInt(i(0x1f2))/0x2)+parseInt(i(0x1df))/0x3+parseInt(i(0x1ef))/0x4*(parseInt(i(0x1f3))/0x5)+-parseInt(i(0x1ed))/0x6*(parseInt(i(0x1e8))/0x7)+parseInt(i(0x203))/0x8+parseInt(i(0x1ee))/0x9*(-parseInt(i(0x1db))/0xa)+-parseInt(i(0x1f9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9f19e));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1da;const e=a();let f=e[c];return f;}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];['_headerDiv'];['_moreDiv'];[j(0x1f8)];['_elementMap']=new WeakMap();['_firstConnect']=!![];static [j(0x1f7)]=css`
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
        `;constructor(){const k=j;super();let c=document['createElement'](k(0x1e2));c[k(0x1eb)]='outer',this[k(0x205)]['appendChild'](c),this['_headerDiv']=document['createElement']('div'),this[k(0x208)]['className']='header',c[k(0x201)](this[k(0x208)]),this[k(0x1f4)]=document['createElement']('div'),this[k(0x1f4)][k(0x1eb)]='header\x20header-more',this[k(0x1f4)]['innerText']='<<',c[k(0x201)](this['_moreDiv']),this[k(0x1f8)]=document[k(0x1ea)](k(0x1e2)),this[k(0x1f8)]['className']='more-container',this[k(0x1f8)]['style']['visibility']=k(0x1f5),c[k(0x201)](this['_moreContainer']),this['_moreDiv']['onclick']=()=>{const l=k;if(this['_moreContainer'][l(0x207)][l(0x1de)]&&this['_moreContainer'][l(0x1f7)]['visibility']==l(0x1f5))this['_moreContainer'][l(0x1f7)]['visibility']='';else this['_moreContainer'][l(0x1f7)][l(0x20a)]='hidden';},this['_panels']=document[k(0x1ea)](k(0x1e2)),this[k(0x1e0)]['className']=k(0x1e4),c['appendChild'](this['_panels']);let d=document[k(0x1ea)](k(0x202));d['name']='panels',this['_panels']['appendChild'](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x1e3)]();});e[k(0x1f6)](this[k(0x208)]);}[j(0x1e3)](){const n=j;this[n(0x1f8)]['style']['visibility']='hidden';let c=0x0;DomHelper['removeAllChildnodes'](this[n(0x1f8)]),DomHelper['removeAllChildnodes'](this['_headerDiv']);let d=!![];for(let e of this[n(0x207)]){if(e[n(0x1f7)][n(0x1e5)]!=n(0x1fe)){let f=e;!this[n(0x206)]['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this[n(0x206)]['get'](f);this['_moreContainer']['appendChild'](g),(this['_headerDiv']['children'][n(0x1de)]==0x0||c+g[n(0x209)]/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv'][n(0x201)](g),c+=g['clientWidth']);}}}['connectedCallback'](){const o=j;if(this[o(0x204)]){this['refreshItems'](),this['_firstConnect']=![];let c=this[o(0x1e7)]('selected-index');c&&(this[o(0x1fd)]=parseInt(c));}}get[j(0x1fd)](){const p=j;return this['_firstConnect']?-0x1:this[p(0x1f1)];}set[j(0x1fd)](c){const q=j;let d=this[q(0x1f1)];this[q(0x1f1)]=c;if(this['children']['length']&&d!=this[q(0x1f1)])this['_selectedIndexChanged'](d);}['refreshItems'](){const r=j;this['_headerDiv'][r(0x1e9)]='';let c=0x0;for(let d of this[r(0x207)]){if(d[r(0x1f7)]['display']!=r(0x1fe)){let e=d,f=document[r(0x1ea)](r(0x1e2));f[r(0x1fc)]=e[r(0x1ff)]['title']||e[r(0x200)],f['title']=e['dataset'][r(0x200)]||e['title'],f[r(0x1eb)]=r(0x1fa);let g=c;f['onpointerdown']=()=>{const s=r;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this['_headerDiv'][s(0x207)]['length'])this[s(0x1dc)](h,!![]);this[s(0x1f8)][s(0x1f7)][s(0x20a)]='hidden';},this['_elementMap']['set'](e,f),this[r(0x208)][r(0x201)](f),c++;}}this['_showHideHeaderItems'](),this['_selectedIndexChanged']();}[j(0x1dc)](c,d=![]){const t=j;let e=-0x1;for(let f of this[t(0x207)]){if(f[t(0x1f7)]['display']!=t(0x1fe)){e++;if(e==this['_selectedIndex']){if(f['slot']!=t(0x1e4))f['slot']='panels';const g=this[t(0x206)]['get'](f);if(g){g['classList'][t(0x1da)](t(0x1dd));if(f['activated'])f['activated']();}}else{f['removeAttribute']('slot');const h=this[t(0x206)][t(0x1ec)](f);h&&h[t(0x1e6)]['remove']('selected');}}}this['onSelectedTabChanged']['emit']({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[t(0x1f8)]['style'][t(0x20a)]=t(0x1f5);}['onSelectedTabChanged']=new TypedEvent();}customElements[j(0x1e1)](j(0x1fb),DesignerTabControl);function a(){const u=['add','965270GSivjL','_selectedIndexChanged','selected','length','813054dFPATo','_panels','define','div','_showHideHeaderItems','panels','display','classList','getAttribute','7LdCgtR','innerHTML','createElement','className','get','242706fLmkbQ','117nrIYwE','440XniUHY','3LAXjwX','_selectedIndex','560914imzPGG','32975zIYdhZ','_moreDiv','hidden','observe','style','_moreContainer','7022609QWTGCm','tab-header','node-projects-designer-tab-control','innerText','selectedIndex','none','dataset','title','appendChild','slot','5980480JRRAYv','_firstConnect','shadowRoot','_elementMap','children','_headerDiv','clientWidth','visibility'];a=function(){return u;};return a();}