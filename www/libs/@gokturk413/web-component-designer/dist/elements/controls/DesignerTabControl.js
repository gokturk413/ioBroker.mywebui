function a(){const t=['connectedCallback','_panels','888790daOYwj','createElement','9MhbjNU','selected','children','display','_moreContainer','activated','className','selected-index','78416ijvkta','534149TeZySk','tab-header','header\x20header-more','_showHideHeaderItems','selectedIndex','visibility','12NNJuiY','name','appendChild','1031916HgLZXh','dataset','getAttribute','refreshItems','slot','div','none','onSelectedTabChanged','_selectedIndexChanged','length','2935770yizAqf','title','356349eRWdtQ','4040360WOhidx','clientWidth','panels','style','_elementMap','_headerDiv','onpointerdown','set','hidden','remove','_moreDiv','get','_selectedIndex','_firstConnect'];a=function(){return t;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1ec))/0x1+-parseInt(i(0x1eb))/0x2+-parseInt(i(0x1f2))/0x3*(parseInt(i(0x1f5))/0x4)+parseInt(i(0x1e1))/0x5+parseInt(i(0x1ce))/0x6+-parseInt(i(0x1d0))/0x7+-parseInt(i(0x1d1))/0x8*(-parseInt(i(0x1e3))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8ea18));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;[j(0x1e0)];[j(0x1d6)];['_moreDiv'];['_moreContainer'];[j(0x1d5)]=new WeakMap();[j(0x1de)]=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document['createElement'](k(0x1fa));c[k(0x1e9)]='outer',this['shadowRoot']['appendChild'](c),this['_headerDiv']=document['createElement']('div'),this[k(0x1d6)][k(0x1e9)]='header',c[k(0x1f4)](this['_headerDiv']),this['_moreDiv']=document['createElement']('div'),this[k(0x1db)][k(0x1e9)]=k(0x1ee),this[k(0x1db)]['innerText']='<<',c[k(0x1f4)](this[k(0x1db)]),this['_moreContainer']=document['createElement'](k(0x1fa)),this[k(0x1e7)]['className']='more-container',this['_moreContainer']['style'][k(0x1f1)]='hidden',c[k(0x1f4)](this['_moreContainer']),this['_moreDiv']['onclick']=()=>{const l=k;if(this[l(0x1e7)]['children']['length']&&this[l(0x1e7)][l(0x1d4)]['visibility']=='hidden')this['_moreContainer'][l(0x1d4)][l(0x1f1)]='';else this[l(0x1e7)]['style']['visibility']='hidden';},this[k(0x1e0)]=document[k(0x1e2)]('div'),this['_panels']['className']=k(0x1d3),c[k(0x1f4)](this[k(0x1e0)]);let d=document['createElement'](k(0x1f9));d[k(0x1f3)]='panels',this['_panels']['appendChild'](d);const e=new ResizeObserver(f=>{const m=k;this[m(0x1ef)]();});e['observe'](this[k(0x1d6)]);}['_showHideHeaderItems'](){const n=j;this['_moreContainer']['style'][n(0x1f1)]='hidden';let c=0x0;DomHelper['removeAllChildnodes'](this[n(0x1e7)]),DomHelper['removeAllChildnodes'](this[n(0x1d6)]);let d=!![];for(let e of this['children']){if(e[n(0x1d4)][n(0x1e6)]!=n(0x1fb)){let f=e;!this['_elementMap']['has'](f)&&d&&(this[n(0x1f8)](),d=![]);const g=this[n(0x1d5)]['get'](f);this[n(0x1e7)][n(0x1f4)](g),(this['_headerDiv']['children'][n(0x1cd)]==0x0||c+g['clientWidth']/0x2<this['_headerDiv'][n(0x1d2)])&&(this['_headerDiv'][n(0x1f4)](g),c+=g['clientWidth']);}}}[j(0x1df)](){const o=j;if(this[o(0x1de)]){this['refreshItems'](),this['_firstConnect']=![];let c=this[o(0x1f7)](o(0x1ea));c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){return this['_firstConnect']?-0x1:this['_selectedIndex'];}set[j(0x1f0)](c){const p=j;let d=this[p(0x1dd)];this['_selectedIndex']=c;if(this[p(0x1e5)][p(0x1cd)]&&d!=this['_selectedIndex'])this[p(0x1fd)](d);}[j(0x1f8)](){const q=j;this['_headerDiv']['innerHTML']='';let c=0x0;for(let d of this[q(0x1e5)]){if(d['style']['display']!='none'){let e=d,f=document['createElement'](q(0x1fa));f['innerText']=e[q(0x1f6)][q(0x1cf)]||e[q(0x1cf)],f[q(0x1cf)]=e['dataset']['title']||e[q(0x1cf)],f['className']=q(0x1ed);let g=c;f[q(0x1d7)]=()=>{const r=q;let h=this[r(0x1dd)];this['_selectedIndex']=g;if(this['_headerDiv'][r(0x1e5)]['length'])this['_selectedIndexChanged'](h,!![]);this['_moreContainer'][r(0x1d4)][r(0x1f1)]='hidden';},this['_elementMap'][q(0x1d8)](e,f),this[q(0x1d6)]['appendChild'](f),c++;}}this['_showHideHeaderItems'](),this['_selectedIndexChanged']();}['_selectedIndexChanged'](c,d=![]){const s=j;let e=-0x1;for(let f of this[s(0x1e5)]){if(f['style']['display']!='none'){e++;if(e==this[s(0x1dd)]){if(f['slot']!=s(0x1d3))f['slot']=s(0x1d3);const g=this['_elementMap'][s(0x1dc)](f);if(g){g['classList']['add'](s(0x1e4));if(f[s(0x1e8)])f[s(0x1e8)]();}}else{f['removeAttribute']('slot');const h=this['_elementMap']['get'](f);h&&h['classList'][s(0x1da)](s(0x1e4));}}}this[s(0x1fc)]['emit']({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[s(0x1e7)][s(0x1d4)][s(0x1f1)]=s(0x1d9);}[j(0x1fc)]=new TypedEvent();}function b(c,d){c=c-0x1cd;const e=a();let f=e[c];return f;}customElements['define']('node-projects-designer-tab-control',DesignerTabControl);