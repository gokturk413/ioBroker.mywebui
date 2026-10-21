const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1a7))/0x1*(parseInt(i(0x1c1))/0x2)+parseInt(i(0x199))/0x3*(parseInt(i(0x19c))/0x4)+-parseInt(i(0x198))/0x5*(-parseInt(i(0x1a8))/0x6)+-parseInt(i(0x1a1))/0x7+parseInt(i(0x19f))/0x8+-parseInt(i(0x1b3))/0x9*(-parseInt(i(0x1a6))/0xa)+-parseInt(i(0x1b6))/0xb*(parseInt(i(0x1c6))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67d35));function b(c,d){c=c-0x198;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0x1a5)]=-0x1;['_panels'];['_headerDiv'];[j(0x1af)];[j(0x1c8)];['_elementMap']=new WeakMap();['_firstConnect']=!![];static [j(0x1b9)]=css`
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
        `;constructor(){const k=j;super();let c=document['createElement']('div');c['className']=k(0x1b2),this[k(0x1bb)]['appendChild'](c),this['_headerDiv']=document[k(0x1c7)]('div'),this[k(0x1ca)][k(0x1ae)]=k(0x1bc),c[k(0x1b1)](this['_headerDiv']),this[k(0x1af)]=document[k(0x1c7)]('div'),this['_moreDiv']['className']='header\x20header-more',this[k(0x1af)]['innerText']='<<',c[k(0x1b1)](this['_moreDiv']),this['_moreContainer']=document[k(0x1c7)](k(0x1a4)),this['_moreContainer'][k(0x1ae)]='more-container',this['_moreContainer'][k(0x1b9)][k(0x1a2)]='hidden',c['appendChild'](this[k(0x1c8)]),this['_moreDiv']['onclick']=()=>{const l=k;if(this['_moreContainer'][l(0x1c9)]['length']&&this[l(0x1c8)]['style']['visibility']=='hidden')this['_moreContainer']['style'][l(0x1a2)]='';else this['_moreContainer']['style']['visibility']=l(0x1ad);},this[k(0x19d)]=document[k(0x1c7)]('div'),this[k(0x19d)]['className']=k(0x1b7),c['appendChild'](this[k(0x19d)]);let d=document[k(0x1c7)]('slot');d[k(0x1c0)]='panels',this[k(0x19d)]['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e['observe'](this['_headerDiv']);}[j(0x1bf)](){const m=j;this['_moreContainer']['style'][m(0x1a2)]='hidden';let c=0x0;DomHelper['removeAllChildnodes'](this[m(0x1c8)]),DomHelper[m(0x1a0)](this['_headerDiv']);let d=!![];for(let e of this['children']){if(e['style']['display']!='none'){let f=e;!this['_elementMap'][m(0x1ab)](f)&&d&&(this[m(0x1b8)](),d=![]);const g=this[m(0x1ba)][m(0x1ac)](f);this[m(0x1c8)][m(0x1b1)](g),(this[m(0x1ca)][m(0x1c9)]['length']==0x0||c+g[m(0x1c4)]/0x2<this['_headerDiv']['clientWidth'])&&(this['_headerDiv']['appendChild'](g),c+=g['clientWidth']);}}}[j(0x1b4)](){const n=j;if(this['_firstConnect']){this['refreshItems'](),this[n(0x19b)]=![];let c=this[n(0x19a)]('selected-index');c&&(this[n(0x1b5)]=parseInt(c));}}get['selectedIndex'](){const o=j;return this['_firstConnect']?-0x1:this[o(0x1a5)];}set['selectedIndex'](c){const p=j;let d=this['_selectedIndex'];this[p(0x1a5)]=c;if(this[p(0x1c9)][p(0x1a9)]&&d!=this[p(0x1a5)])this[p(0x1a3)](d);}[j(0x1b8)](){const q=j;this[q(0x1ca)]['innerHTML']='';let c=0x0;for(let d of this['children']){if(d['style']['display']!='none'){let e=d,f=document[q(0x1c7)](q(0x1a4));f['innerText']=e[q(0x19e)][q(0x1bd)]||e['title'],f[q(0x1bd)]=e['dataset']['title']||e['title'],f[q(0x1ae)]='tab-header';let g=c;f['onpointerdown']=()=>{const r=q;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this['_headerDiv'][r(0x1c9)][r(0x1a9)])this['_selectedIndexChanged'](h,!![]);this['_moreContainer']['style']['visibility']=r(0x1ad);},this[q(0x1ba)][q(0x1aa)](e,f),this[q(0x1ca)][q(0x1b1)](f),c++;}}this[q(0x1bf)](),this[q(0x1a3)]();}[j(0x1a3)](c,d=![]){const s=j;let e=-0x1;for(let f of this['children']){if(f['style']['display']!='none'){e++;if(e==this['_selectedIndex']){if(f[s(0x1b0)]!='panels')f[s(0x1b0)]=s(0x1b7);const g=this['_elementMap']['get'](f);if(g){g['classList']['add']('selected');if(f['activated'])f['activated']();}}else{f['removeAttribute']('slot');const h=this['_elementMap']['get'](f);h&&h['classList'][s(0x1c2)]('selected');}}}this[s(0x1c3)][s(0x1be)]({'newIndex':this[s(0x1a5)],'oldIndex':c,'changedViaClick':d}),this[s(0x1c8)][s(0x1b9)][s(0x1a2)]='hidden';}[j(0x1c3)]=new TypedEvent();}customElements[j(0x1c5)]('node-projects-designer-tab-control',DesignerTabControl);function a(){const t=['9DvpZUw','connectedCallback','selectedIndex','11TMsvbn','panels','refreshItems','style','_elementMap','shadowRoot','header','title','emit','_showHideHeaderItems','name','10mgyeYe','remove','onSelectedTabChanged','clientWidth','define','2079156oEoaRY','createElement','_moreContainer','children','_headerDiv','52840UkVQAL','238938kZuhxH','getAttribute','_firstConnect','24vqyzAg','_panels','dataset','894040ljVkvO','removeAllChildnodes','3063396NDzXlQ','visibility','_selectedIndexChanged','div','_selectedIndex','6478320jWSlIg','48715zsfgCA','24vZGmdi','length','set','has','get','hidden','className','_moreDiv','slot','appendChild','outer'];a=function(){return t;};return a();}