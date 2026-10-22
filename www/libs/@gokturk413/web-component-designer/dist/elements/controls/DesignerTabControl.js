const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1af))/0x1+-parseInt(i(0x1b2))/0x2*(-parseInt(i(0x1b5))/0x3)+parseInt(i(0x1d6))/0x4+-parseInt(i(0x1c3))/0x5+-parseInt(i(0x1cd))/0x6*(parseInt(i(0x1c9))/0x7)+parseInt(i(0x1da))/0x8+parseInt(i(0x1d8))/0x9*(-parseInt(i(0x1d1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x396f3));function b(c,d){c=c-0x1ae;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0x1d7)]=-0x1;[j(0x1df)];['_headerDiv'];[j(0x1c1)];['_moreContainer'];['_elementMap']=new WeakMap();[j(0x1d2)]=!![];static [j(0x1dc)]=css`
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
        `;constructor(){const k=j;super();let c=document['createElement'](k(0x1b4));c['className']=k(0x1d3),this['shadowRoot'][k(0x1e1)](c),this[k(0x1b7)]=document['createElement']('div'),this[k(0x1b7)][k(0x1c7)]=k(0x1b9),c[k(0x1e1)](this['_headerDiv']),this['_moreDiv']=document['createElement']('div'),this['_moreDiv'][k(0x1c7)]=k(0x1e3),this[k(0x1c1)][k(0x1b3)]='<<',c['appendChild'](this['_moreDiv']),this['_moreContainer']=document[k(0x1bb)]('div'),this['_moreContainer']['className']=k(0x1ca),this['_moreContainer'][k(0x1dc)]['visibility']='hidden',c['appendChild'](this[k(0x1d0)]),this[k(0x1c1)][k(0x1bc)]=()=>{const l=k;if(this['_moreContainer']['children'][l(0x1c2)]&&this['_moreContainer'][l(0x1dc)]['visibility']=='hidden')this[l(0x1d0)]['style']['visibility']='';else this[l(0x1d0)][l(0x1dc)][l(0x1dd)]=l(0x1c5);},this[k(0x1df)]=document[k(0x1bb)]('div'),this['_panels']['className']='panels',c['appendChild'](this['_panels']);let d=document['createElement'](k(0x1be));d[k(0x1ba)]='panels',this[k(0x1df)][k(0x1e1)](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e['observe'](this[k(0x1b7)]);}['_showHideHeaderItems'](){const m=j;this['_moreContainer'][m(0x1dc)][m(0x1dd)]='hidden';let c=0x0;DomHelper[m(0x1cf)](this[m(0x1d0)]),DomHelper['removeAllChildnodes'](this[m(0x1b7)]);let d=!![];for(let e of this[m(0x1bd)]){if(e[m(0x1dc)]['display']!='none'){let f=e;!this[m(0x1cc)][m(0x1bf)](f)&&d&&(this['refreshItems'](),d=![]);const g=this['_elementMap'][m(0x1db)](f);this['_moreContainer'][m(0x1e1)](g),(this[m(0x1b7)]['children']['length']==0x0||c+g[m(0x1c6)]/0x2<this[m(0x1b7)]['clientWidth'])&&(this['_headerDiv']['appendChild'](g),c+=g['clientWidth']);}}}['connectedCallback'](){const n=j;if(this['_firstConnect']){this[n(0x1e0)](),this[n(0x1d2)]=![];let c=this[n(0x1d4)]('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){const o=j;return this[o(0x1d2)]?-0x1:this['_selectedIndex'];}set[j(0x1cb)](c){const p=j;let d=this[p(0x1d7)];this['_selectedIndex']=c;if(this['children']['length']&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}[j(0x1e0)](){const q=j;this['_headerDiv'][q(0x1c0)]='';let c=0x0;for(let d of this[q(0x1bd)]){if(d['style']['display']!=q(0x1b6)){let e=d,f=document[q(0x1bb)]('div');f['innerText']=e['dataset'][q(0x1c8)]||e['title'],f[q(0x1c8)]=e[q(0x1b0)]['title']||e['title'],f[q(0x1c7)]=q(0x1ce);let g=c;f['onpointerdown']=()=>{const r=q;let h=this[r(0x1d7)];this['_selectedIndex']=g;if(this[r(0x1b7)]['children'][r(0x1c2)])this['_selectedIndexChanged'](h,!![]);this[r(0x1d0)]['style']['visibility']='hidden';},this[q(0x1cc)][q(0x1d5)](e,f),this['_headerDiv'][q(0x1e1)](f),c++;}}this[q(0x1c4)](),this[q(0x1ae)]();}[j(0x1ae)](c,d=![]){const s=j;let e=-0x1;for(let f of this['children']){if(f['style'][s(0x1d9)]!='none'){e++;if(e==this['_selectedIndex']){if(f['slot']!=s(0x1b8))f['slot']='panels';const g=this['_elementMap'][s(0x1db)](f);if(g){g[s(0x1e4)]['add'](s(0x1e2));if(f['activated'])f['activated']();}}else{f['removeAttribute'](s(0x1be));const h=this['_elementMap'][s(0x1db)](f);h&&h[s(0x1e4)]['remove']('selected');}}}this['onSelectedTabChanged'][s(0x1de)]({'newIndex':this[s(0x1d7)],'oldIndex':c,'changedViaClick':d}),this[s(0x1d0)][s(0x1dc)][s(0x1dd)]=s(0x1c5);}[j(0x1b1)]=new TypedEvent();}function a(){const t=['470snGrUb','_firstConnect','outer','getAttribute','set','1268040PNEVYU','_selectedIndex','83943vbOvCz','display','1298504przmXJ','get','style','visibility','emit','_panels','refreshItems','appendChild','selected','header\x20header-more','classList','_selectedIndexChanged','342138sTIHGS','dataset','onSelectedTabChanged','1024PCrIPi','innerText','div','852xmCDMl','none','_headerDiv','panels','header','name','createElement','onclick','children','slot','has','innerHTML','_moreDiv','length','1326975EoRjMu','_showHideHeaderItems','hidden','clientWidth','className','title','266UQjCKu','more-container','selectedIndex','_elementMap','4398fZCBLv','tab-header','removeAllChildnodes','_moreContainer'];a=function(){return t;};return a();}customElements['define']('node-projects-designer-tab-control',DesignerTabControl);