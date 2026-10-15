const j=b;function b(c,d){c=c-0x14a;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x170))/0x1+parseInt(i(0x15c))/0x2+parseInt(i(0x155))/0x3*(parseInt(i(0x180))/0x4)+-parseInt(i(0x15b))/0x5+parseInt(i(0x169))/0x6*(parseInt(i(0x14e))/0x7)+-parseInt(i(0x174))/0x8+parseInt(i(0x14c))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x84988));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0x159)]=-0x1;['_panels'];['_headerDiv'];[j(0x172)];['_moreContainer'];[j(0x156)]=new WeakMap();['_firstConnect']=!![];static ['style']=css`
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
        `;constructor(){const k=j;super();let c=document[k(0x171)]('div');c[k(0x15e)]=k(0x173),this[k(0x16b)][k(0x14a)](c),this['_headerDiv']=document[k(0x171)](k(0x15a)),this['_headerDiv'][k(0x15e)]='header',c[k(0x14a)](this['_headerDiv']),this[k(0x172)]=document['createElement'](k(0x15a)),this['_moreDiv']['className']='header\x20header-more',this['_moreDiv'][k(0x14b)]='<<',c[k(0x14a)](this['_moreDiv']),this['_moreContainer']=document[k(0x171)]('div'),this[k(0x154)][k(0x15e)]='more-container',this['_moreContainer']['style']['visibility']=k(0x153),c['appendChild'](this['_moreContainer']),this[k(0x172)]['onclick']=()=>{const l=k;if(this['_moreContainer']['children'][l(0x158)]&&this[l(0x154)][l(0x178)]['visibility']=='hidden')this[l(0x154)][l(0x178)]['visibility']='';else this['_moreContainer']['style']['visibility']='hidden';},this[k(0x176)]=document[k(0x171)](k(0x15a)),this[k(0x176)][k(0x15e)]=k(0x175),c[k(0x14a)](this[k(0x176)]);let d=document[k(0x171)]('slot');d[k(0x167)]='panels',this[k(0x176)]['appendChild'](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0x166)](this['_headerDiv']);}[j(0x177)](){const m=j;this['_moreContainer'][m(0x178)][m(0x17d)]='hidden';let c=0x0;DomHelper[m(0x181)](this['_moreContainer']),DomHelper['removeAllChildnodes'](this[m(0x160)]);let d=!![];for(let e of this['children']){if(e[m(0x178)]['display']!=m(0x16f)){let f=e;!this[m(0x156)][m(0x17f)](f)&&d&&(this['refreshItems'](),d=![]);const g=this['_elementMap']['get'](f);this['_moreContainer'][m(0x14a)](g),(this[m(0x160)][m(0x157)][m(0x158)]==0x0||c+g[m(0x17a)]/0x2<this[m(0x160)]['clientWidth'])&&(this['_headerDiv'][m(0x14a)](g),c+=g[m(0x17a)]);}}}['connectedCallback'](){const n=j;if(this['_firstConnect']){this['refreshItems'](),this[n(0x14d)]=![];let c=this[n(0x16c)](n(0x164));c&&(this[n(0x17b)]=parseInt(c));}}get['selectedIndex'](){const o=j;return this[o(0x14d)]?-0x1:this[o(0x159)];}set['selectedIndex'](c){const p=j;let d=this['_selectedIndex'];this[p(0x159)]=c;if(this['children'][p(0x158)]&&d!=this['_selectedIndex'])this['_selectedIndexChanged'](d);}[j(0x14f)](){const q=j;this['_headerDiv']['innerHTML']='';let c=0x0;for(let d of this['children']){if(d['style'][q(0x179)]!=q(0x16f)){let e=d,f=document[q(0x171)]('div');f['innerText']=e['dataset']['title']||e[q(0x16e)],f['title']=e[q(0x16a)][q(0x16e)]||e['title'],f[q(0x15e)]='tab-header';let g=c;f['onpointerdown']=()=>{const r=q;let h=this[r(0x159)];this['_selectedIndex']=g;if(this[r(0x160)][r(0x157)]['length'])this[r(0x17e)](h,!![]);this['_moreContainer'][r(0x178)]['visibility']=r(0x153);},this[q(0x156)][q(0x151)](e,f),this[q(0x160)]['appendChild'](f),c++;}}this['_showHideHeaderItems'](),this['_selectedIndexChanged']();}[j(0x17e)](c,d=![]){const s=j;let e=-0x1;for(let f of this['children']){if(f[s(0x178)]['display']!=s(0x16f)){e++;if(e==this[s(0x159)]){if(f[s(0x168)]!=s(0x175))f['slot']=s(0x175);const g=this['_elementMap']['get'](f);if(g){g[s(0x162)]['add'](s(0x15d));if(f[s(0x17c)])f['activated']();}}else{f[s(0x15f)]('slot');const h=this[s(0x156)][s(0x165)](f);h&&h['classList'][s(0x163)](s(0x15d));}}}this[s(0x150)][s(0x161)]({'newIndex':this[s(0x159)],'oldIndex':c,'changedViaClick':d}),this['_moreContainer']['style'][s(0x17d)]=s(0x153);}['onSelectedTabChanged']=new TypedEvent();}customElements[j(0x152)](j(0x16d),DesignerTabControl);function a(){const t=['style','display','clientWidth','selectedIndex','activated','visibility','_selectedIndexChanged','has','92IdcwnV','removeAllChildnodes','appendChild','innerText','5008644JMSdJN','_firstConnect','21sqNQHQ','refreshItems','onSelectedTabChanged','set','define','hidden','_moreContainer','105063aYukfV','_elementMap','children','length','_selectedIndex','div','2101600kzObLK','1607274fpLiaV','selected','className','removeAttribute','_headerDiv','emit','classList','remove','selected-index','get','observe','name','slot','141054ilmoxO','dataset','shadowRoot','getAttribute','node-projects-designer-tab-control','title','none','589999lBcYvl','createElement','_moreDiv','outer','5461856tTgxZo','panels','_panels','_showHideHeaderItems'];a=function(){return t;};return a();}