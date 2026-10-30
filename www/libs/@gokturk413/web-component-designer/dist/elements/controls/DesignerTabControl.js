const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1ca))/0x1*(-parseInt(i(0x1d8))/0x2)+parseInt(i(0x1cd))/0x3*(parseInt(i(0x1c2))/0x4)+parseInt(i(0x1b3))/0x5+-parseInt(i(0x1b1))/0x6+-parseInt(i(0x1c8))/0x7+-parseInt(i(0x1a9))/0x8+parseInt(i(0x1c1))/0x9*(parseInt(i(0x1d0))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcc51a));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const t=['removeAttribute','selected','set','children','_moreContainer','onSelectedTabChanged','className','onclick','emit','onpointerdown','panels','createElement','16353wOLUBj','6103364HyQEEv','_headerDiv','display','_firstConnect','title','_selectedIndexChanged','2814196fnRinS','_panels','1ugrIBB','name','none','3KQorxB','add','visibility','4700eADERY','hidden','dataset','innerText','getAttribute','length','header','div','983028TLRDQX','classList','more-container','_showHideHeaderItems','12781488FycoFc','appendChild','innerHTML','_selectedIndex','slot','_elementMap','style','tab-header','1744074okAsRb','selectedIndex','6194830lkmWmC','_moreDiv'];a=function(){return t;};return a();}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;[j(0x1c9)];[j(0x1c3)];[j(0x1b4)];['_moreContainer'];[j(0x1ae)]=new WeakMap();['_firstConnect']=!![];static [j(0x1af)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x1c0)](k(0x1d7));c[k(0x1bb)]='outer',this['shadowRoot'][k(0x1aa)](c),this['_headerDiv']=document['createElement']('div'),this[k(0x1c3)][k(0x1bb)]=k(0x1d6),c[k(0x1aa)](this[k(0x1c3)]),this['_moreDiv']=document[k(0x1c0)]('div'),this['_moreDiv']['className']='header\x20header-more',this[k(0x1b4)][k(0x1d3)]='<<',c[k(0x1aa)](this[k(0x1b4)]),this['_moreContainer']=document[k(0x1c0)]('div'),this[k(0x1b9)][k(0x1bb)]=k(0x1a7),this[k(0x1b9)][k(0x1af)][k(0x1cf)]=k(0x1d1),c[k(0x1aa)](this[k(0x1b9)]),this[k(0x1b4)][k(0x1bc)]=()=>{const l=k;if(this[l(0x1b9)][l(0x1b8)]['length']&&this['_moreContainer'][l(0x1af)][l(0x1cf)]=='hidden')this[l(0x1b9)]['style'][l(0x1cf)]='';else this['_moreContainer']['style']['visibility']='hidden';},this[k(0x1c9)]=document['createElement'](k(0x1d7)),this[k(0x1c9)][k(0x1bb)]=k(0x1bf),c['appendChild'](this['_panels']);let d=document[k(0x1c0)]('slot');d[k(0x1cb)]='panels',this[k(0x1c9)]['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e['observe'](this[k(0x1c3)]);}['_showHideHeaderItems'](){const m=j;this[m(0x1b9)]['style'][m(0x1cf)]='hidden';let c=0x0;DomHelper['removeAllChildnodes'](this['_moreContainer']),DomHelper['removeAllChildnodes'](this['_headerDiv']);let d=!![];for(let e of this['children']){if(e[m(0x1af)][m(0x1c4)]!=m(0x1cc)){let f=e;!this['_elementMap']['has'](f)&&d&&(this['refreshItems'](),d=![]);const g=this['_elementMap']['get'](f);this[m(0x1b9)]['appendChild'](g),(this[m(0x1c3)][m(0x1b8)]['length']==0x0||c+g['clientWidth']/0x2<this['_headerDiv']['clientWidth'])&&(this[m(0x1c3)]['appendChild'](g),c+=g['clientWidth']);}}}['connectedCallback'](){const n=j;if(this['_firstConnect']){this['refreshItems'](),this['_firstConnect']=![];let c=this[n(0x1d4)]('selected-index');c&&(this[n(0x1b2)]=parseInt(c));}}get['selectedIndex'](){const o=j;return this[o(0x1c5)]?-0x1:this['_selectedIndex'];}set[j(0x1b2)](c){const p=j;let d=this[p(0x1ac)];this['_selectedIndex']=c;if(this[p(0x1b8)][p(0x1d5)]&&d!=this[p(0x1ac)])this[p(0x1c7)](d);}['refreshItems'](){const q=j;this[q(0x1c3)][q(0x1ab)]='';let c=0x0;for(let d of this[q(0x1b8)]){if(d['style']['display']!=q(0x1cc)){let e=d,f=document['createElement'](q(0x1d7));f[q(0x1d3)]=e['dataset']['title']||e[q(0x1c6)],f['title']=e[q(0x1d2)]['title']||e[q(0x1c6)],f[q(0x1bb)]=q(0x1b0);let g=c;f[q(0x1be)]=()=>{const r=q;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this['_headerDiv']['children']['length'])this[r(0x1c7)](h,!![]);this['_moreContainer']['style'][r(0x1cf)]=r(0x1d1);},this['_elementMap'][q(0x1b7)](e,f),this[q(0x1c3)][q(0x1aa)](f),c++;}}this[q(0x1a8)](),this['_selectedIndexChanged']();}[j(0x1c7)](c,d=![]){const s=j;let e=-0x1;for(let f of this[s(0x1b8)]){if(f[s(0x1af)][s(0x1c4)]!=s(0x1cc)){e++;if(e==this['_selectedIndex']){if(f['slot']!='panels')f[s(0x1ad)]='panels';const g=this[s(0x1ae)]['get'](f);if(g){g[s(0x1d9)][s(0x1ce)](s(0x1b6));if(f['activated'])f['activated']();}}else{f[s(0x1b5)]('slot');const h=this[s(0x1ae)]['get'](f);h&&h['classList']['remove'](s(0x1b6));}}}this['onSelectedTabChanged'][s(0x1bd)]({'newIndex':this[s(0x1ac)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer']['style'][s(0x1cf)]=s(0x1d1);}[j(0x1ba)]=new TypedEvent();}function b(c,d){c=c-0x1a7;const e=a();let f=e[c];return f;}customElements['define']('node-projects-designer-tab-control',DesignerTabControl);