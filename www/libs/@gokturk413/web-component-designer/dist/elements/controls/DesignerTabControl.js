const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0xe6))/0x1+-parseInt(i(0x108))/0x2+parseInt(i(0xf2))/0x3+parseInt(i(0x117))/0x4+parseInt(i(0x10a))/0x5*(-parseInt(i(0xfd))/0x6)+parseInt(i(0xed))/0x7+-parseInt(i(0x112))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x727d7));import{BaseCustomWebComponentLazyAppend,css,TypedEvent,DomHelper}from'@node-projects/base-custom-webcomponent';export class DesignerTabControl extends BaseCustomWebComponentLazyAppend{[j(0x109)]=-0x1;['_panels'];[j(0xf3)];['_moreDiv'];[j(0xf5)];['_elementMap']=new WeakMap();['_firstConnect']=!![];static [j(0xfb)]=css`
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
            background-color: var(--dark-grey, #232733);
            overflow-x: auto;
            scrollbar-width: none;  /* Firefox */
        }
        .header-more {
            right: 0;
            top: 0;
            width: 30px;
            position: absolute;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: math;
        }
        .header-more:hover {
            background: var(--light-grey, #383f52);
        }
        .more-container {
            z-index: 1;
            user-select: none;
            -webkit-user-select: none;
            background-color: var(--dark-grey, #232733);
            right: 0;
            top: 30px;
            position: absolute;
            color: white;
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
            font-family: Arial;
            display: flex;
            justify-content: center;
            align-items: center;                
            text-transform: uppercase;                
            box-sizing: content-box;                
            padding-left: 5px;
            padding-right: 5px;
            color: white;
            font-size: 12px;
            font-weight: 500;
            line-height: 1.5;
            letter-spacing: 1px;
            white-space: nowrap;
        }
        .tab-header:hover {
            background: var(--light-grey, #383f52);
        }
        .selected {
            background: var(--medium-grey, #2f3545);
            box-shadow: inset 0 3px 0 var(--highlight-pink, #e91e63);
        }
        .panels {
            z-index: 0;
            background: var(--medium-grey, #2f3545);
            height: calc(100% - 30px);
        }
        `;constructor(){const k=j;super();let c=document[k(0x116)]('div');c[k(0x107)]='outer',this[k(0xe9)][k(0xf0)](c),this['_headerDiv']=document['createElement']('div'),this['_headerDiv']['className']=k(0x10b),c[k(0xf0)](this[k(0xf3)]),this['_moreDiv']=document['createElement']('div'),this[k(0xe8)]['className']=k(0x10f),this[k(0xe8)][k(0x114)]='<<',c[k(0xf0)](this['_moreDiv']),this['_moreContainer']=document['createElement']('div'),this[k(0xf5)]['className']=k(0xeb),this['_moreContainer']['style']['visibility']='hidden',c[k(0xf0)](this['_moreContainer']),this[k(0xe8)]['onclick']=()=>{const l=k;if(this[l(0xf5)][l(0x104)][l(0x113)]&&this['_moreContainer']['style']['visibility']=='hidden')this[l(0xf5)]['style']['visibility']='';else this[l(0xf5)]['style'][l(0xf1)]=l(0xfc);},this[k(0x106)]=document[k(0x116)](k(0xea)),this[k(0x106)]['className']='panels',c['appendChild'](this['_panels']);let d=document['createElement'](k(0xf8));d['name']='panels',this[k(0x106)][k(0xf0)](d);const e=new ResizeObserver(f=>{this['_showHideHeaderItems']();});e[k(0xef)](this['_headerDiv']);}['_showHideHeaderItems'](){const m=j;this['_moreContainer'][m(0xfb)]['visibility']=m(0xfc);let c=0x0;DomHelper['removeAllChildnodes'](this['_moreContainer']),DomHelper['removeAllChildnodes'](this[m(0xf3)]);let d=!![];for(let e of this[m(0x104)]){if(e[m(0xfb)]['display']!='none'){let f=e;!this['_elementMap'][m(0x10d)](f)&&d&&(this[m(0x103)](),d=![]);const g=this['_elementMap']['get'](f);this['_moreContainer']['appendChild'](g),(this[m(0xf3)]['children'][m(0x113)]==0x0||c+g[m(0x100)]/0x2<this[m(0xf3)]['clientWidth'])&&(this[m(0xf3)][m(0xf0)](g),c+=g[m(0x100)]);}}}['connectedCallback'](){const n=j;if(this[n(0x119)]){this[n(0x103)](),this['_firstConnect']=![];let c=this[n(0xff)](n(0xf4));c&&(this['selectedIndex']=parseInt(c));}}get['selectedIndex'](){return this['_firstConnect']?-0x1:this['_selectedIndex'];}set[j(0x115)](c){const o=j;let d=this['_selectedIndex'];this['_selectedIndex']=c;if(this['children'][o(0x113)]&&d!=this['_selectedIndex'])this[o(0xf6)](d);}['refreshItems'](){const p=j;this['_headerDiv'][p(0x101)]='';let c=0x0;for(let d of this['children']){if(d['style'][p(0xf7)]!=p(0x110)){let e=d,f=document['createElement'](p(0xea));f['innerText']=e['dataset'][p(0xee)]||e[p(0xee)],f['title']=e[p(0xe5)]['title']||e['title'],f['className']=p(0x118);let g=c;f[p(0x10c)]=()=>{const q=p;let h=this['_selectedIndex'];this['_selectedIndex']=g;if(this[q(0xf3)][q(0x104)]['length'])this[q(0xf6)](h,!![]);this[q(0xf5)]['style'][q(0xf1)]='hidden';},this['_elementMap'][p(0xfa)](e,f),this['_headerDiv']['appendChild'](f),c++;}}this['_showHideHeaderItems'](),this[p(0xf6)]();}[j(0xf6)](c,d=![]){const r=j;let e=-0x1;for(let f of this['children']){if(f['style']['display']!='none'){e++;if(e==this['_selectedIndex']){if(f['slot']!='panels')f[r(0xf8)]=r(0xe7);const g=this['_elementMap']['get'](f);if(g){g['classList']['add'](r(0x102));if(f[r(0x10e)])f[r(0x10e)]();}}else{f['removeAttribute'](r(0xf8));const h=this[r(0x111)]['get'](f);h&&h[r(0xf9)][r(0x105)](r(0x102));}}}this[r(0xfe)]['emit']({'newIndex':this['_selectedIndex'],'oldIndex':c,'changedViaClick':d}),this[r(0xf5)]['style'][r(0xf1)]='hidden';}[j(0xfe)]=new TypedEvent();}customElements[j(0xec)]('node-projects-designer-tab-control',DesignerTabControl);function b(c,d){c=c-0xe5;const e=a();let f=e[c];return f;}function a(){const s=['innerText','selectedIndex','createElement','1156128icentN','tab-header','_firstConnect','dataset','318624pOKhAZ','panels','_moreDiv','shadowRoot','div','more-container','define','5761462aSZlpP','title','observe','appendChild','visibility','2165298mKXEZW','_headerDiv','selected-index','_moreContainer','_selectedIndexChanged','display','slot','classList','set','style','hidden','7302wEuMAj','onSelectedTabChanged','getAttribute','clientWidth','innerHTML','selected','refreshItems','children','remove','_panels','className','692924geFLEY','_selectedIndex','2460nWaaxZ','header','onpointerdown','has','activated','header\x20header-more','none','_elementMap','5906488JjZUPb','length'];a=function(){return s;};return a();}