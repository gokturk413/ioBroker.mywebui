const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x205))/0x1*(parseInt(i(0x1e5))/0x2)+parseInt(i(0x203))/0x3*(parseInt(i(0x1e2))/0x4)+parseInt(i(0x1e4))/0x5+-parseInt(i(0x1d9))/0x6+-parseInt(i(0x1e8))/0x7*(-parseInt(i(0x1e6))/0x8)+parseInt(i(0x1ee))/0x9*(parseInt(i(0x1e0))/0xa)+-parseInt(i(0x1da))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x236f4));function a(){const u=['18OpurGe','children','removeAttribute','div','selected','slot','dataset','title','clientWidth','set','_moreDiv','visibility','_selectedIndex','_selectedIndexChanged','_panels','display','onSelectedTabChanged','_moreContainer','className','removeAllChildnodes','tab-header','3EXjqKm','_elementMap','1YcYqnl','innerText','createElement','activated','_headerDiv','selected-index','_firstConnect','663288WLkaEu','7539092hvUUrU','classList','_showHideHeaderItems','more-container','outer','style','305870cVmgkJ','observe','957076XFKmvS','onclick','1276765zfbLAE','231628oukiGh','6800dFFHiS','appendChild','2219fiLXNN','define','get','none','hidden','refreshItems'];a=function(){return u;};return a();}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1d9;const e=a();let f=e[c];return f;}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];[j(0x209)];['_moreDiv'];['_moreContainer'];[j(0x204)]=new WeakMap();[j(0x20b)]=!![];static [j(0x1df)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x207)](k(0x1f1));c[k(0x200)]=k(0x1de),this['shadowRoot'][k(0x1e7)](c),this[k(0x209)]=document[k(0x207)](k(0x1f1)),this['_headerDiv'][k(0x200)]='header',c[k(0x1e7)](this[k(0x209)]),this['_moreDiv']=document[k(0x207)]('div'),this[k(0x1f8)][k(0x200)]='header\x20header-more',this['_moreDiv'][k(0x206)]='<<',c[k(0x1e7)](this[k(0x1f8)]),this['_moreContainer']=document['createElement'](k(0x1f1)),this['_moreContainer']['className']=k(0x1dd),this[k(0x1ff)][k(0x1df)]['visibility']='hidden',c[k(0x1e7)](this['_moreContainer']),this['_moreDiv'][k(0x1e3)]=()=>{const l=k;if(this[l(0x1ff)][l(0x1ef)]['length']&&this['_moreContainer'][l(0x1df)]['visibility']=='hidden')this['_moreContainer'][l(0x1df)]['visibility']='';else this['_moreContainer'][l(0x1df)][l(0x1f9)]=l(0x1ec);},this[k(0x1fc)]=document['createElement'](k(0x1f1)),this[k(0x1fc)][k(0x200)]='panels',c['appendChild'](this[k(0x1fc)]);let d=document['createElement'](k(0x1f3));d['name']='panels',this['_panels']['appendChild'](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x1dc)]();});e[k(0x1e1)](this['_headerDiv']);}[j(0x1dc)](){const n=j;this[n(0x1ff)][n(0x1df)][n(0x1f9)]=n(0x1ec);let c=0x0;DomHelper[n(0x201)](this['_moreContainer']),DomHelper['removeAllChildnodes'](this['_headerDiv']);let d=!![];for(let e of this['children']){if(e[n(0x1df)]['display']!=n(0x1eb)){let f=e;!this[n(0x204)]['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this['_elementMap'][n(0x1ea)](f);this[n(0x1ff)][n(0x1e7)](g),(this['_headerDiv'][n(0x1ef)]['length']==0x0||c+g['clientWidth']/0x2<this[n(0x209)][n(0x1f6)])&&(this['_headerDiv']['appendChild'](g),c+=g[n(0x1f6)]);}}}['connectedCallback'](){const o=j;if(this['_firstConnect']){this['refreshItems'](),this[o(0x20b)]=![];let c=this['getAttribute'](o(0x20a));c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const p=j;return this[p(0x20b)]?-0x1:this['_selectedIndex'];}set['selectedIndex'](c){const q=j;let d=this['_selectedIndex'];this[q(0x1fa)]=c;if(this['children']['length']&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}[j(0x1ed)](){const r=j;this['_headerDiv']['innerHTML']='';let c=0x0;for(let d of this['children']){if(d['style']['display']!=r(0x1eb)){let e=d,f=document['createElement'](r(0x1f1));f[r(0x206)]=e['dataset'][r(0x1f5)]||e[r(0x1f5)],f['title']=e[r(0x1f4)][r(0x1f5)]||e['title'],f['className']=r(0x202);let g=c;f['onpointerdown']=()=>{const s=r;let h=this['_selectedIndex'];this[s(0x1fa)]=g;if(this['_headerDiv'][s(0x1ef)]['length'])this['_selectedIndexChanged'](h,!![]);this['_moreContainer'][s(0x1df)]['visibility']=s(0x1ec);},this['_elementMap'][r(0x1f7)](e,f),this[r(0x209)][r(0x1e7)](f),c++;}}this['_showHideHeaderItems'](),this[r(0x1fb)]();}[j(0x1fb)](c,d=![]){const t=j;let e=-0x1;for(let f of this['children']){if(f[t(0x1df)][t(0x1fd)]!=t(0x1eb)){e++;if(e==this['_selectedIndex']){if(f['slot']!='panels')f['slot']='panels';const g=this['_elementMap']['get'](f);if(g){g['classList']['add'](t(0x1f2));if(f[t(0x208)])f[t(0x208)]();}}else{f[t(0x1f0)](t(0x1f3));const h=this['_elementMap'][t(0x1ea)](f);h&&h[t(0x1db)]['remove']('selected');}}}this[t(0x1fe)]['emit']({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[t(0x1ff)]['style']['visibility']='hidden';}['onSelectedTabChanged']=new TypedEvent();}customElements[j(0x1e9)]('node-projects-designer-tab-control',DesignerTabControl);