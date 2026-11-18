const j=b;function a(){const t=['_moreContainer','clientWidth','dataset','display','name','panels','294000vNfBck','children','onpointerdown','observe','className','refreshItems','_moreDiv','selected','slot','1734856CDcQtv','722928ILLAKT','50516dgYVvI','30RSLzQL','1013705OhWxps','onclick','outer','_showHideHeaderItems','innerHTML','90juVZiC','define','div','_selectedIndex','selectedIndex','hidden','connectedCallback','_headerDiv','visibility','title','tab-header','more-container','_panels','style','classList','6GIQTKs','length','none','shadowRoot','919468dNHaUr','1893654RzXlyM','_selectedIndexChanged','appendChild','activated','get','createElement','_elementMap','add','getAttribute','removeAttribute','removeAllChildnodes','_firstConnect'];a=function(){return t;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x16a))/0x1+-parseInt(i(0x185))/0x2+parseInt(i(0x16c))/0x3*(parseInt(i(0x16b))/0x4)+-parseInt(i(0x16d))/0x5*(parseInt(i(0x181))/0x6)+parseInt(i(0x186))/0x7+parseInt(i(0x169))/0x8+parseInt(i(0x172))/0x9*(-parseInt(i(0x160))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5ccda));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;[j(0x17e)];['_headerDiv'];['_moreDiv'];['_moreContainer'];['_elementMap']=new WeakMap();['_firstConnect']=!![];static [j(0x17f)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x153)](k(0x174));c[k(0x164)]=k(0x16f),this[k(0x184)]['appendChild'](c),this['_headerDiv']=document[k(0x153)](k(0x174)),this['_headerDiv']['className']='header',c['appendChild'](this[k(0x179)]),this['_moreDiv']=document['createElement']('div'),this[k(0x166)][k(0x164)]='header\x20header-more',this[k(0x166)]['innerText']='<<',c['appendChild'](this['_moreDiv']),this[k(0x15a)]=document['createElement']('div'),this['_moreContainer']['className']=k(0x17d),this['_moreContainer'][k(0x17f)][k(0x17a)]='hidden',c[k(0x188)](this['_moreContainer']),this['_moreDiv'][k(0x16e)]=()=>{const l=k;if(this['_moreContainer']['children']['length']&&this['_moreContainer'][l(0x17f)]['visibility']==l(0x177))this[l(0x15a)]['style']['visibility']='';else this['_moreContainer'][l(0x17f)]['visibility']=l(0x177);},this['_panels']=document['createElement'](k(0x174)),this[k(0x17e)][k(0x164)]='panels',c['appendChild'](this['_panels']);let d=document[k(0x153)]('slot');d[k(0x15e)]=k(0x15f),this['_panels'][k(0x188)](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0x163)](this[k(0x179)]);}['_showHideHeaderItems'](){const m=j;this[m(0x15a)][m(0x17f)][m(0x17a)]=m(0x177);let c=0x0;DomHelper[m(0x158)](this['_moreContainer']),DomHelper[m(0x158)](this[m(0x179)]);let d=!![];for(let e of this['children']){if(e[m(0x17f)]['display']!='none'){let f=e;!this['_elementMap']['has'](f)&&d&&(this[m(0x165)](),d=![]);const g=this['_elementMap'][m(0x152)](f);this['_moreContainer'][m(0x188)](g),(this[m(0x179)][m(0x161)][m(0x182)]==0x0||c+g[m(0x15b)]/0x2<this[m(0x179)][m(0x15b)])&&(this[m(0x179)][m(0x188)](g),c+=g[m(0x15b)]);}}}[j(0x178)](){const n=j;if(this[n(0x159)]){this[n(0x165)](),this[n(0x159)]=![];let c=this[n(0x156)]('selected-index');c&&(this[n(0x176)]=parseInt(c));}}get[j(0x176)](){const o=j;return this['_firstConnect']?-0x1:this[o(0x175)];}set[j(0x176)](c){const p=j;let d=this['_selectedIndex'];this['_selectedIndex']=c;if(this[p(0x161)][p(0x182)]&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}['refreshItems'](){const q=j;this[q(0x179)][q(0x171)]='';let c=0x0;for(let d of this[q(0x161)]){if(d['style'][q(0x15d)]!=q(0x183)){let e=d,f=document['createElement']('div');f['innerText']=e['dataset']['title']||e['title'],f[q(0x17b)]=e[q(0x15c)]['title']||e['title'],f[q(0x164)]=q(0x17c);let g=c;f[q(0x162)]=()=>{const r=q;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this['_headerDiv']['children']['length'])this[r(0x187)](h,!![]);this['_moreContainer']['style']['visibility']='hidden';},this[q(0x154)]['set'](e,f),this['_headerDiv'][q(0x188)](f),c++;}}this[q(0x170)](),this[q(0x187)]();}[j(0x187)](c,d=![]){const s=j;let e=-0x1;for(let f of this[s(0x161)]){if(f['style']['display']!=s(0x183)){e++;if(e==this[s(0x175)]){if(f[s(0x168)]!='panels')f['slot']=s(0x15f);const g=this[s(0x154)]['get'](f);if(g){g[s(0x180)][s(0x155)](s(0x167));if(f[s(0x151)])f['activated']();}}else{f[s(0x157)](s(0x168));const h=this[s(0x154)]['get'](f);h&&h['classList']['remove'](s(0x167));}}}this['onSelectedTabChanged']['emit']({'newIndex':this[s(0x175)],'oldIndex':c,'changedViaClick':d}),this[s(0x15a)]['style'][s(0x17a)]='hidden';}['onSelectedTabChanged']=new TypedEvent();}function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}customElements[j(0x173)]('node-projects-designer-tab-control',DesignerTabControl);