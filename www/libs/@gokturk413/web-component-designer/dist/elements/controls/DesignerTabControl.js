const j=b;function b(c,d){c=c-0x11b;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x13e))/0x1*(parseInt(i(0x12c))/0x2)+parseInt(i(0x13d))/0x3+-parseInt(i(0x12a))/0x4*(-parseInt(i(0x123))/0x5)+parseInt(i(0x151))/0x6+parseInt(i(0x148))/0x7+parseInt(i(0x14f))/0x8*(-parseInt(i(0x144))/0x9)+-parseInt(i(0x12f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8bfa1));function a(){const t=['_panels','selected','removeAllChildnodes','3311013LISRfm','1052zZXBxY','_selectedIndex','hidden','createElement','innerHTML','dataset','243FgxiMU','onSelectedTabChanged','_moreDiv','appendChild','2846935rCKulb','length','connectedCallback','children','classList','removeAttribute','header\x20header-more','146216ycKrbA','clientWidth','1876176DhVqPI','_headerDiv','visibility','activated','observe','_firstConnect','selectedIndex','slot','getAttribute','10owEVtV','node-projects-designer-tab-control','_moreContainer','title','panels','refreshItems','style','1540928uhYkmk','get','130oBLMgq','none','_showHideHeaderItems','14583320NYImcC','define','name','div','_selectedIndexChanged','className','emit','tab-header','innerText','shadowRoot','_elementMap'];a=function(){return t;};return a();}import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];['_headerDiv'];['_moreDiv'];['_moreContainer'];['_elementMap']=new WeakMap();[j(0x11f)]=!![];static [j(0x129)]=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x141)](k(0x132));c[k(0x134)]='outer',this[k(0x138)][k(0x147)](c),this['_headerDiv']=document['createElement'](k(0x132)),this['_headerDiv'][k(0x134)]='header',c[k(0x147)](this['_headerDiv']),this['_moreDiv']=document[k(0x141)](k(0x132)),this[k(0x146)][k(0x134)]=k(0x14e),this['_moreDiv'][k(0x137)]='<<',c[k(0x147)](this['_moreDiv']),this[k(0x125)]=document['createElement'](k(0x132)),this['_moreContainer']['className']='more-container',this[k(0x125)][k(0x129)]['visibility']='hidden',c[k(0x147)](this['_moreContainer']),this[k(0x146)]['onclick']=()=>{const l=k;if(this['_moreContainer']['children'][l(0x149)]&&this['_moreContainer'][l(0x129)]['visibility']==l(0x140))this[l(0x125)][l(0x129)][l(0x11c)]='';else this['_moreContainer'][l(0x129)][l(0x11c)]=l(0x140);},this['_panels']=document[k(0x141)](k(0x132)),this['_panels']['className']='panels',c['appendChild'](this['_panels']);let d=document[k(0x141)](k(0x121));d[k(0x131)]=k(0x127),this[k(0x13a)]['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0x11e)](this[k(0x11b)]);}['_showHideHeaderItems'](){const m=j;this[m(0x125)]['style'][m(0x11c)]='hidden';let c=0x0;DomHelper[m(0x13c)](this[m(0x125)]),DomHelper[m(0x13c)](this[m(0x11b)]);let d=!![];for(let e of this[m(0x14b)]){if(e['style']['display']!=m(0x12d)){let f=e;!this[m(0x139)]['has'](f)&&d&&(this[m(0x128)](),d=![]);const g=this['_elementMap'][m(0x12b)](f);this[m(0x125)][m(0x147)](g),(this[m(0x11b)]['children'][m(0x149)]==0x0||c+g['clientWidth']/0x2<this['_headerDiv'][m(0x150)])&&(this[m(0x11b)][m(0x147)](g),c+=g['clientWidth']);}}}[j(0x14a)](){const n=j;if(this[n(0x11f)]){this[n(0x128)](),this['_firstConnect']=![];let c=this[n(0x122)]('selected-index');c&&(this['selectedIndex']=parseInt(c));}}get[j(0x120)](){const o=j;return this[o(0x11f)]?-0x1:this['_selectedIndex'];}set[j(0x120)](c){const p=j;let d=this['_selectedIndex'];this[p(0x13f)]=c;if(this[p(0x14b)][p(0x149)]&&d!=this['_selectedIndex'])this[p(0x133)](d);}[j(0x128)](){const q=j;this[q(0x11b)][q(0x142)]='';let c=0x0;for(let d of this[q(0x14b)]){if(d[q(0x129)]['display']!='none'){let e=d,f=document[q(0x141)]('div');f['innerText']=e[q(0x143)]['title']||e[q(0x126)],f['title']=e['dataset']['title']||e[q(0x126)],f[q(0x134)]=q(0x136);let g=c;f['onpointerdown']=()=>{const r=q;let h=this['_selectedIndex'];this[r(0x13f)]=g;if(this[r(0x11b)][r(0x14b)][r(0x149)])this['_selectedIndexChanged'](h,!![]);this['_moreContainer']['style'][r(0x11c)]=r(0x140);},this['_elementMap']['set'](e,f),this['_headerDiv'][q(0x147)](f),c++;}}this[q(0x12e)](),this['_selectedIndexChanged']();}['_selectedIndexChanged'](c,d=![]){const s=j;let e=-0x1;for(let f of this['children']){if(f['style']['display']!='none'){e++;if(e==this['_selectedIndex']){if(f[s(0x121)]!='panels')f[s(0x121)]=s(0x127);const g=this['_elementMap']['get'](f);if(g){g['classList']['add'](s(0x13b));if(f[s(0x11d)])f['activated']();}}else{f[s(0x14d)](s(0x121));const h=this['_elementMap']['get'](f);h&&h[s(0x14c)]['remove']('selected');}}}this[s(0x145)][s(0x135)]({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this['_moreContainer'][s(0x129)][s(0x11c)]=s(0x140);}[j(0x145)]=new TypedEvent();}customElements[j(0x130)](j(0x124),DesignerTabControl);