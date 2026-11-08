const q=b;function a(){const P=['options','ul[popover]','num','manual','shadowRoot','defaultIcon','Escape','left','innerWidth','checkable','context_menu_marked','mouseup','adoptedStyleSheets','height','action','renderLevel','removeEventListener','span','openPopoverSubmenu','context','innerHeight','key','values','add','has','title','mouseOffset','min','popover','children','closeSiblingSubmenus','positionMenu','mode','context_menu_text','matches','reload','offsetWidth','_windowKeyUp','hidePopover','1843400JAkzqQ','forEach','getBoundingClientRect','auto','_contextMenuCss','preventDefault','div','_windowDown','750936phKqNE','225184tpAROc','checked','appendChild','clientX','4974YeYxDr','hideDescendantSubmenus','body','_windowResize','parentElement','bottom','icon','width','classList','439330RdccXS','innerHTML','configurePopoverSubmenu','_openedContextMenus','addEventListener','top','_menuElement','max',':popover-open','right','close','show','mouseenter','6PEnymm','markUndoItems','undo','indexOf','bind','menu','className','clientY','setAttribute','remove','312401FjUlgi','1217923KnIpBm','keyup','positionSubmenuPopover','207Llndly','target','355LGBFTb','style','createElement'];a=function(){return P;};return a();}function b(c,d){c=c-0xce;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x102))/0x1+-parseInt(o(0xde))/0x2+-parseInt(o(0xf8))/0x3*(parseInt(o(0xdd))/0x4)+-parseInt(o(0x108))/0x5*(-parseInt(o(0xe2))/0x6)+parseInt(o(0x103))/0x7+-parseInt(o(0xd5))/0x8+-parseInt(o(0x106))/0x9*(-parseInt(o(0xeb))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x33dc5));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
	  .context_menu {
		position: fixed;
    inset: auto;
    margin: 0;
    border: none;
    background: transparent;
    overflow: visible;
		opacity: 0;
		transform: scale(0);
		transition: transform 0.1s;
		transform-origin: top left;
		padding: 0;
		z-index: 2147483647;
		color: var(--wcd-context-menu-color, var(--context-menu-color, light-dark(#1d2733, #e2e6ec)));
		font-family: var(--wcd-context-menu-font-family, var(--context-menu-font-family, inherit));
		font-size: var(--wcd-context-menu-font-size, var(--context-menu-font-size, inherit));
		font-weight: var(--wcd-context-menu-font-weight, var(--context-menu-font-weight, inherit));
	  }
	  
	  .context_menu.context_menu_display {
		opacity: 1;
		transform: scale(1);
	  }
	  
	  .context_menu,
	  .context_menu * {
		box-sizing: border-box;
	  }
	  
	  .context_menu * {
		position: relative;
	  }
	  
	  .context_menu ul {
		list-style-type: none;
		padding: var(--wcd-context-menu-padding, var(--context-menu-padding, 3px));
		margin: 0;
		border: var(--wcd-context-menu-border, var(--context-menu-border, 1px solid light-dark(#d4dae3, #3b4250)));
		border-radius: var(--wcd-context-menu-border-radius, var(--context-menu-border-radius, 0));
		background-color: var(--wcd-context-menu-background, var(--context-menu-background, light-dark(#f5f7f7, #252b38)));
		box-shadow: var(--wcd-context-menu-shadow, var(--context-menu-shadow, 0 2px 10px rgba(0,0,0,.45)));
    max-inline-size: calc(100vw - 8px);
    max-block-size: calc(100vh - 8px);
    overflow: auto;
    overscroll-behavior: contain;
    isolation: isolate;
	  }

    .context_menu ul[popover] {
    inset: auto;
    margin: 0;
    border: var(--wcd-context-menu-border, var(--context-menu-border, none));
    border-radius: var(--wcd-context-menu-border-radius, var(--context-menu-border-radius, 0));
    }
	  
	  .context_menu li {
		padding: var(--wcd-context-menu-item-padding-y, var(--context-menu-item-padding-y, 0)) 1.7em var(--wcd-context-menu-item-padding-y, var(--context-menu-item-padding-y, 0)) 0;
		cursor: pointer;
		white-space: nowrap;
		display: flex;
		align-items: center;
	  }
	  
	  .context_menu li:hover {
		background-color: var(--wcd-context-menu-hover-background, var(--context-menu-hover-background, var(--accent, #2680eb)));
		color: var(--wcd-context-menu-hover-color, var(--context-menu-hover-color, #fff));
	  }
	  
	  .context_menu li .context_menu_icon_span {
		width: var(--wcd-context-menu-icon-column-width, var(--context-menu-icon-column-width, 28px));
		display: inline-flex;
		align-items: center;
		justify-content: center;
	  }

	  .context_menu li .context_menu_icon_span img {
		height: var(--wcd-context-menu-icon-size, var(--context-menu-icon-size, 18px));
	  }

	  .context_menu li .context_menu_text {	
		padding-left: 2px;
		vertical-align: middle;
	  }
	  
	  .context_menu li .context_menu_sub_span {
		width: 1em;
		display: inline-block;
		text-align: center;
		position: absolute;
		top: 50%;
		right: 0.5em;
		transform: translateY(-50%);
	  }
	  
	  .context_menu li>ul {
		position: absolute;
    inset: auto;
		top: 0;
		left: 100%;
		opacity: 0;
		transition: opacity 0.2s;
		visibility: hidden;
	  }

    .context_menu li>ul.context_menu_submenu_popover {
    position: fixed;
    }
	  
    .context_menu li>ul:popover-open {
		opacity: 1;
		visibility: visible;
	  }
	  
	  .context_menu li.context_menu_divider {
		border-bottom: 1px solid var(--wcd-context-menu-divider-color, var(--context-menu-divider-color, light-dark(#d4dae3, #3b4250)));
		margin: 5px;
		padding: 0;
		cursor: default;
	  }
	  
	  .context_menu li.context_menu_divider:hover {
		background-color: inherit;
	  }
	  
	  .context_menu li[disabled=""] {
		color: var(--wcd-context-menu-disabled-color, var(--context-menu-disabled-color, light-dark(#9aa3b0, #6b7684)));
		cursor: default;
	  }
	  
	  .context_menu li[disabled=""]:hover {
		background-color: inherit;
	  }
	  
	  .context_menu li.context_menu_marked {
		background-color: var(--wcd-context-menu-marked-background, var(--context-menu-marked-background, var(--accent, #5ebdec)));
		color: var(--wcd-context-menu-marked-color, var(--context-menu-marked-color, #fff));
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();['menu'];['options'];['context'];['num'];['_menuElement'];constructor(c,d,e){const p=b;this[p(0x10d)]=ContextMenu['count']++,this[p(0xfd)]=c,this['options']=d,this['context']=e,this['reload'](),this['_windowDown']=this['_windowDown']['bind'](this),this['_windowKeyUp']=this[p(0xd3)][p(0xfc)](this),this[p(0xe5)]=this[p(0xe5)]['bind'](this);}[q(0xd1)](){const r=q;let c=this[r(0x10b)]?.[r(0x10f)]??document;if(this['_menuElement']==null){this['_menuElement']=document['createElement'](r(0xdb)),this[r(0xf1)]['className']='context_menu',this['_menuElement']['id']='context_menu_'+this['num'],this[r(0xf1)]['setAttribute'](r(0x127),r(0x10e));if(c===document)document[r(0xe4)]['appendChild'](this[r(0xf1)]);else c['appendChild'](this[r(0xf1)]);}this[r(0xf1)][r(0xec)]='',c[r(0x117)][r(0xfb)](ContextMenu[r(0xd9)])<0x0&&(c[r(0x117)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this[r(0xf1)][r(0xe0)](this['renderLevel'](this['menu']));}[q(0x11a)](c){const s=q;let d=document[s(0x10a)]('ul'),e=![];return c[s(0xd6)](f=>{const t=s;if(f[t(0x124)]!=='-'){if(e){let k=document['createElement']('li');k[t(0xfe)]='context_menu_divider',e=![],d[t(0xe0)](k);}let g=document[t(0x10a)]('li'),h=document[t(0x10a)](t(0x11c));h[t(0xfe)]='context_menu_icon_span';if(f['checked']===!![])h[t(0xec)]='✔';else(f[t(0xe8)]??'')!=''?h[t(0xec)]=f['icon']??'':h['innerHTML']=this['options']?.[t(0x110)]??'';let i=document[t(0x10a)]('span');i[t(0xfe)]=t(0xcf),i[t(0xec)]=f['title']??'';let j=document[t(0x10a)]('span');j[t(0xfe)]='context_menu_sub_span';f[t(0x128)]!=null&&(j['innerHTML']=this['options']?.['subIcon']??'&#155;');g[t(0xe0)](h),g['appendChild'](i),g['appendChild'](j);if(f['disabled'])g[t(0x100)]('disabled','');else{if(f[t(0x114)])g[t(0xef)]('click',l=>{const u=t;l['stopPropagation'](),l[u(0xda)](),f['checked']=!f['checked'],h['innerHTML']=f[u(0xdf)]?'✔':f[u(0xe8)]??this[u(0x10b)]?.['defaultIcon']??'';if(f[u(0x119)])f['action'](l,f,this[u(0x11e)],this);});else{if(f[t(0x119)])g[t(0xef)]('click',l=>{const v=t;l['stopPropagation'](),l['preventDefault'](),f['action']?.(l,f,this[v(0x11e)],this),this['close']();});}this['options']?.['mode']=='undo'&&g['addEventListener'](t(0x116),l=>{const w=t;l['stopPropagation'](),f[w(0x119)]?.(l,f,this['context'],this),this['close']();});g[t(0xef)](t(0xf7),()=>{const x=t;this[x(0x129)](g),this['options']?.[x(0xce)]==x(0xfa)&&this[x(0xf9)](g);});if(f[t(0x128)]!=null){let l=this['renderLevel'](f[t(0x128)]);this[t(0xed)](l),g['appendChild'](l),g[t(0xef)]('mouseenter',()=>{const y=t;this[y(0x11d)](g,l);});}}d[t(0xe0)](g);}else e=!![];}),d;}['display'](c){const z=q;let d=this[z(0xf1)],e=this['options']?.[z(0x125)]!=null?this[z(0x10b)][z(0x125)]:0x2;this['showPopover'](d),this['positionMenu'](d,c[z(0xe1)],c[z(0xff)],e),d[z(0xea)][z(0x122)]('context_menu_display'),c[z(0xda)](),ContextMenu[z(0xee)][z(0x122)](this),window['addEventListener'](z(0x104),this[z(0xd3)]),window['addEventListener']('resize',this['_windowResize']),window['addEventListener']('mousedown',this['_windowDown']),setTimeout(()=>{const A=z;if(!ContextMenu['_openedContextMenus'][A(0x123)](this))return;window[A(0xef)]('contextmenu',this['_windowDown']);},0x96);}[q(0xe5)](){const B=q;this[B(0xf5)]();}['_windowDown'](c){const C=q;c['preventDefault']();if(!(c[C(0x107)]instanceof Node)||!this[C(0xf1)]['contains'](c[C(0x107)]))this[C(0xf5)]();return![];}[q(0xd3)](c){const D=q;c[D(0x120)]===D(0x111)&&this[D(0xf5)]();}static[q(0xf6)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}[q(0xf5)](){const E=q;this[E(0xe3)](this['_menuElement']),this['hidePopover'](this['_menuElement']),this[E(0xf1)]['remove'](),window[E(0x11b)]('mousedown',this[E(0xdc)]),window['removeEventListener']('resize',this[E(0xe5)]),window['removeEventListener']('keyup',this['_windowKeyUp']),setTimeout(()=>window[E(0x11b)]('contextmenu',this['_windowDown']),0xa),ContextMenu[E(0xee)]['delete'](this);}static['closeAll'](){const F=q;for(const d of ContextMenu[F(0xee)][F(0x121)]())d[F(0xf5)]();}['configurePopoverSubmenu'](c){const G=q;c['classList'][G(0x122)]('context_menu_submenu_popover'),c['setAttribute'](G(0x127),G(0x10e));}['markUndoItems'](c){const H=q;if(c['parentElement']==null)return;let d=!![];for(let e of c['parentElement'][H(0x128)]){if(d)e[H(0xea)][H(0x122)](H(0x115));else e['classList'][H(0x101)](H(0x115));if(e==c)d=![];}}[q(0x129)](c){const I=q;if(c['parentElement']==null)return;for(const d of c[I(0xe6)][I(0x128)]){d!==c&&this['hideDescendantSubmenus'](d);}}[q(0xe3)](c){const J=q,d=c['querySelectorAll'](J(0x10c));for(const e of d){this[J(0xd4)](e);}}[q(0x11d)](c,d){const K=q;this['showPopover'](d),this[K(0x105)](c,d);}['showPopover'](c){if(this['isPopoverOpen'](c))return;c['showPopover']();}['hidePopover'](c){const L=q;if(c==null||!this['isPopoverOpen'](c))return;c[L(0xd4)]();}['isPopoverOpen'](c){const M=q;return c[M(0xd0)](M(0xf3));}[q(0x12a)](c,d,e,f){const N=q,g=c['offsetWidth']+0x4,h=c['offsetHeight']+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[N(0x109)][N(0x112)]=Math['max'](0x0,Math['min'](m,window[N(0x113)]-g))+'px',c['style']['top']=Math['max'](0x0,Math[N(0x126)](n,window[N(0x11f)]-h))+'px';}[q(0x105)](c,d){const O=q,e=c[O(0xd7)](),f=d[O(0xd7)](),g=d[O(0xd2)]||f[O(0xe9)],h=d['offsetHeight']||f[O(0x118)],i=window['innerWidth']-e['right'],j=e['left'];let k=e[O(0xf4)];i<g&&j>i&&(k=e[O(0x112)]-g);const l=window[O(0x11f)]-e[O(0xf0)],m=e[O(0xe7)];let n=e[O(0xf0)];l<h&&m>l&&(n=e['bottom']-h),d[O(0x109)]['left']=Math[O(0xf2)](0x0,Math[O(0x126)](k,window['innerWidth']-g))+'px',d['style']['top']=Math[O(0xf2)](0x0,Math[O(0x126)](n,window[O(0x11f)]-h))+'px',d[O(0x109)][O(0xf4)]=O(0xd8),d['style']['bottom']='auto';}}