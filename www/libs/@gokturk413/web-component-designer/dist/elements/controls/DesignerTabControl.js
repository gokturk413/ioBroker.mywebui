const j=b;function a(){const t=['_showHideHeaderItems','onpointerdown','4832IavNlm','add','slot','appendChild','visibility','div','remove','header','getAttribute','display','_selectedIndex','_selectedIndexChanged','_moreDiv','onclick','1883ZGZXLU','children','tab-header','895248tQwzOs','length','none','createElement','50289yRqeyq','get','refreshItems','1csGsGC','selectedIndex','clientWidth','emit','node-projects-designer-tab-control','_headerDiv','title','_panels','panels','_elementMap','242738MfFXxx','shadowRoot','40LZDHHw','hidden','3243328ngqonn','15767580HfMINO','classList','style','activated','set','dataset','10dWUpqm','605736hBBlTp','has','selected','40RVZUvP','_moreContainer','more-container','_firstConnect','selected-index'];a=function(){return t;};return a();}function b(c,d){c=c-0x1cf;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1fe))/0x1*(-parseInt(i(0x1d0))/0x2)+parseInt(i(0x1fb))/0x3*(parseInt(i(0x1df))/0x4)+-parseInt(i(0x1db))/0x5*(parseInt(i(0x1dc))/0x6)+-parseInt(i(0x1f4))/0x7*(parseInt(i(0x1e6))/0x8)+-parseInt(i(0x1f7))/0x9*(parseInt(i(0x1d2))/0xa)+-parseInt(i(0x1d4))/0xb+parseInt(i(0x1d5))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x49ffe));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0x1f0)]=-0x1;[j(0x205)];['_headerDiv'];[j(0x1f2)];['_moreContainer'];['_elementMap']=new WeakMap();['_firstConnect']=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x1fa)]('div');c['className']='outer',this[k(0x1d1)][k(0x1e9)](c),this['_headerDiv']=document[k(0x1fa)]('div'),this['_headerDiv']['className']=k(0x1ed),c[k(0x1e9)](this['_headerDiv']),this[k(0x1f2)]=document[k(0x1fa)](k(0x1eb)),this['_moreDiv']['className']='header\x20header-more',this['_moreDiv']['innerText']='<<',c['appendChild'](this['_moreDiv']),this['_moreContainer']=document['createElement']('div'),this['_moreContainer']['className']=k(0x1e1),this['_moreContainer'][k(0x1d7)][k(0x1ea)]=k(0x1d3),c['appendChild'](this[k(0x1e0)]),this[k(0x1f2)][k(0x1f3)]=()=>{const l=k;if(this['_moreContainer'][l(0x1f5)]['length']&&this['_moreContainer']['style'][l(0x1ea)]==l(0x1d3))this[l(0x1e0)]['style']['visibility']='';else this['_moreContainer']['style']['visibility']='hidden';},this[k(0x205)]=document[k(0x1fa)](k(0x1eb)),this[k(0x205)]['className']=k(0x206),c['appendChild'](this['_panels']);let d=document['createElement']('slot');d['name']=k(0x206),this['_panels']['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e['observe'](this[k(0x203)]);}[j(0x1e4)](){const m=j;this['_moreContainer']['style']['visibility']='hidden';let c=0x0;DomHelper['removeAllChildnodes'](this['_moreContainer']),DomHelper['removeAllChildnodes'](this[m(0x203)]);let d=!![];for(let e of this['children']){if(e[m(0x1d7)][m(0x1ef)]!=m(0x1f9)){let f=e;!this[m(0x1cf)][m(0x1dd)](f)&&d&&(this[m(0x1fd)](),d=![]);const g=this['_elementMap']['get'](f);this[m(0x1e0)][m(0x1e9)](g),(this['_headerDiv']['children']['length']==0x0||c+g[m(0x200)]/0x2<this['_headerDiv'][m(0x200)])&&(this[m(0x203)][m(0x1e9)](g),c+=g[m(0x200)]);}}}['connectedCallback'](){const n=j;if(this[n(0x1e2)]){this[n(0x1fd)](),this['_firstConnect']=![];let c=this[n(0x1ee)](n(0x1e3));c&&(this['selectedIndex']=parseInt(c));}}get[j(0x1ff)](){const o=j;return this[o(0x1e2)]?-0x1:this[o(0x1f0)];}set[j(0x1ff)](c){const p=j;let d=this[p(0x1f0)];this[p(0x1f0)]=c;if(this[p(0x1f5)][p(0x1f8)]&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}['refreshItems'](){const q=j;this[q(0x203)]['innerHTML']='';let c=0x0;for(let d of this[q(0x1f5)]){if(d['style']['display']!=q(0x1f9)){let e=d,f=document['createElement']('div');f['innerText']=e['dataset']['title']||e['title'],f[q(0x204)]=e[q(0x1da)]['title']||e['title'],f['className']=q(0x1f6);let g=c;f[q(0x1e5)]=()=>{const r=q;let h=this['_selectedIndex'];this[r(0x1f0)]=g;if(this[r(0x203)]['children'][r(0x1f8)])this[r(0x1f1)](h,!![]);this[r(0x1e0)]['style'][r(0x1ea)]='hidden';},this['_elementMap'][q(0x1d9)](e,f),this['_headerDiv']['appendChild'](f),c++;}}this[q(0x1e4)](),this[q(0x1f1)]();}[j(0x1f1)](c,d=![]){const s=j;let e=-0x1;for(let f of this['children']){if(f[s(0x1d7)][s(0x1ef)]!=s(0x1f9)){e++;if(e==this[s(0x1f0)]){if(f[s(0x1e8)]!='panels')f['slot']='panels';const g=this[s(0x1cf)][s(0x1fc)](f);if(g){g[s(0x1d6)][s(0x1e7)]('selected');if(f[s(0x1d8)])f['activated']();}}else{f['removeAttribute']('slot');const h=this[s(0x1cf)]['get'](f);h&&h['classList'][s(0x1ec)](s(0x1de));}}}this['onSelectedTabChanged'][s(0x201)]({'newIndex':this[s(0x1f0)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer'][s(0x1d7)][s(0x1ea)]='hidden';}['onSelectedTabChanged']=new TypedEvent();}customElements['define'](j(0x202),DesignerTabControl);