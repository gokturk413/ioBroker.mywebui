const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x11d))/0x1+-parseInt(i(0x119))/0x2+-parseInt(i(0x12a))/0x3+parseInt(i(0x116))/0x4*(parseInt(i(0xfc))/0x5)+parseInt(i(0x125))/0x6*(parseInt(i(0xfd))/0x7)+parseInt(i(0xf8))/0x8*(-parseInt(i(0x109))/0x9)+parseInt(i(0x122))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x21a93));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xf3;const e=a();let f=e[c];return f;}export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{['_selectedIndex']=-0x1;['_panels'];[j(0x112)];['_moreDiv'];['_moreContainer'];['_elementMap']=new WeakMap();[j(0x108)]=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x107)](k(0x104));c[k(0x11e)]=k(0x128),this['shadowRoot']['appendChild'](c),this['_headerDiv']=document[k(0x107)]('div'),this[k(0x112)][k(0x11e)]='header',c['appendChild'](this['_headerDiv']),this[k(0xf3)]=document[k(0x107)](k(0x104)),this[k(0xf3)]['className']=k(0x114),this['_moreDiv']['innerText']='<<',c['appendChild'](this['_moreDiv']),this[k(0xf6)]=document['createElement']('div'),this[k(0xf6)]['className']=k(0xff),this['_moreContainer'][k(0x115)][k(0x124)]=k(0x111),c[k(0x117)](this[k(0xf6)]),this['_moreDiv'][k(0x11f)]=()=>{const l=k;if(this['_moreContainer']['children']['length']&&this[l(0xf6)]['style'][l(0x124)]==l(0x111))this[l(0xf6)][l(0x115)]['visibility']='';else this[l(0xf6)][l(0x115)]['visibility']=l(0x111);},this['_panels']=document[k(0x107)](k(0x104)),this[k(0x106)]['className']='panels',c[k(0x117)](this[k(0x106)]);let d=document[k(0x107)](k(0x103));d[k(0x102)]='panels',this[k(0x106)]['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0x10e)](this[k(0x112)]);}[j(0x127)](){const m=j;this[m(0xf6)]['style']['visibility']=m(0x111);let c=0x0;DomHelper['removeAllChildnodes'](this['_moreContainer']),DomHelper[m(0x12b)](this['_headerDiv']);let d=!![];for(let e of this[m(0x11b)]){if(e[m(0x115)]['display']!='none'){let f=e;!this['_elementMap']['has'](f)&&d&&(this[m(0x101)](),d=![]);const g=this[m(0x123)]['get'](f);this[m(0xf6)][m(0x117)](g),(this['_headerDiv'][m(0x11b)]['length']==0x0||c+g['clientWidth']/0x2<this[m(0x112)][m(0xfb)])&&(this['_headerDiv']['appendChild'](g),c+=g[m(0xfb)]);}}}['connectedCallback'](){const n=j;if(this[n(0x108)]){this['refreshItems'](),this[n(0x108)]=![];let c=this['getAttribute'](n(0x11a));c&&(this['selectedIndex']=parseInt(c));}}get[j(0x11c)](){const o=j;return this[o(0x108)]?-0x1:this[o(0x10b)];}set['selectedIndex'](c){const p=j;let d=this[p(0x10b)];this['_selectedIndex']=c;if(this['children']['length']&&d!=this['_selectedIndex'])this[p(0x126)](d);}[j(0x101)](){const q=j;this[q(0x112)][q(0x10d)]='';let c=0x0;for(let d of this[q(0x11b)]){if(d[q(0x115)][q(0xfe)]!='none'){let e=d,f=document[q(0x107)](q(0x104));f[q(0x10f)]=e['dataset'][q(0xf4)]||e[q(0xf4)],f['title']=e[q(0x100)]['title']||e[q(0xf4)],f[q(0x11e)]=q(0x105);let g=c;f['onpointerdown']=()=>{const r=q;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this[r(0x112)][r(0x11b)]['length'])this['_selectedIndexChanged'](h,!![]);this['_moreContainer']['style']['visibility']=r(0x111);},this[q(0x123)]['set'](e,f),this[q(0x112)][q(0x117)](f),c++;}}this[q(0x127)](),this['_selectedIndexChanged']();}[j(0x126)](c,d=![]){const s=j;let e=-0x1;for(let f of this['children']){if(f['style']['display']!=s(0x10a)){e++;if(e==this[s(0x10b)]){if(f[s(0x103)]!=s(0x120))f[s(0x103)]=s(0x120);const g=this[s(0x123)]['get'](f);if(g){g[s(0x110)][s(0xf7)](s(0xf9));if(f[s(0xfa)])f[s(0xfa)]();}}else{f['removeAttribute'](s(0x103));const h=this[s(0x123)][s(0x113)](f);h&&h['classList'][s(0x10c)]('selected');}}}this[s(0x118)][s(0xf5)]({'newIndex':this[s(0x10b)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer'][s(0x115)]['visibility']=s(0x111);}[j(0x118)]=new TypedEvent();}customElements[j(0x129)](j(0x121),DesignerTabControl);function a(){const t=['_headerDiv','get','header\x20header-more','style','20MOISAR','appendChild','onSelectedTabChanged','101050FHrars','selected-index','children','selectedIndex','163921fIZyKS','className','onclick','panels','node-projects-designer-tab-control','4693700LSnKKD','_elementMap','visibility','6drCVBi','_selectedIndexChanged','_showHideHeaderItems','outer','define','277227rbqbWI','removeAllChildnodes','_moreDiv','title','emit','_moreContainer','add','1737416CsbMBe','selected','activated','clientWidth','104660oTTTWH','615139TRZRVt','display','more-container','dataset','refreshItems','name','slot','div','tab-header','_panels','createElement','_firstConnect','9bDYodV','none','_selectedIndex','remove','innerHTML','observe','innerText','classList','hidden'];a=function(){return t;};return a();}