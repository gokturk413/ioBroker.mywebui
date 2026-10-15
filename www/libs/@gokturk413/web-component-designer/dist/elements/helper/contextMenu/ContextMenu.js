const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x16c))/0x1*(-parseInt(o(0x187))/0x2)+-parseInt(o(0x167))/0x3*(parseInt(o(0x169))/0x4)+-parseInt(o(0x17f))/0x5*(parseInt(o(0x15c))/0x6)+parseInt(o(0x16b))/0x7+parseInt(o(0x13a))/0x8*(-parseInt(o(0x134))/0x9)+parseInt(o(0x15f))/0xa+-parseInt(o(0x14d))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2399f));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x13f)]=0x0;static ['_openedContextMenus']=new Set();[p(0x150)];['options'];['context'];['num'];['_menuElement'];constructor(c,d,e){const q=p;this['num']=ContextMenu['count']++,this[q(0x150)]=c,this['options']=d,this[q(0x17c)]=e,this['reload'](),this['_windowDown']=this[q(0x177)]['bind'](this),this['_windowKeyUp']=this[q(0x14c)]['bind'](this),this[q(0x147)]=this[q(0x147)]['bind'](this);}['reload'](){const r=p;let c=this['options']?.['shadowRoot']??document;if(this['_menuElement']==null){this[r(0x172)]=document[r(0x149)]('div'),this['_menuElement'][r(0x161)]='context_menu',this[r(0x172)]['id']=r(0x185)+this[r(0x15e)],this[r(0x172)]['setAttribute']('popover',r(0x139));if(c===document)document['body'][r(0x182)](this[r(0x172)]);else c[r(0x182)](this[r(0x172)]);}this['_menuElement'][r(0x18a)]='',c['adoptedStyleSheets'][r(0x18b)](ContextMenu[r(0x162)])<0x0&&(c[r(0x154)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this['_menuElement'][r(0x182)](this[r(0x17d)](this['menu']));}['renderLevel'](c){const s=p;let d=document[s(0x149)]('ul'),e=![];return c['forEach'](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k['className']='context_menu_divider',e=![],d['appendChild'](k);}let g=document[t(0x149)]('li'),h=document['createElement']('span');h['className']=t(0x180);if(f[t(0x159)]===!![])h['innerHTML']='✔';else(f[t(0x144)]??'')!=''?h['innerHTML']=f[t(0x144)]??'':h['innerHTML']=this['options']?.[t(0x175)]??'';let i=document[t(0x149)]('span');i[t(0x161)]='context_menu_text',i[t(0x18a)]=f[t(0x14e)]??'';let j=document[t(0x149)](t(0x164));j['className']='context_menu_sub_span';f['children']!=null&&(j[t(0x18a)]=this['options']?.['subIcon']??t(0x168));g[t(0x182)](h),g[t(0x182)](i),g['appendChild'](j);if(f['disabled'])g['setAttribute'](t(0x146),'');else{if(f[t(0x14f)])g[t(0x15b)](t(0x170),l=>{const u=t;l[u(0x15a)](),l['preventDefault'](),f[u(0x159)]=!f[u(0x159)],h['innerHTML']=f[u(0x159)]?'✔':f['icon']??this[u(0x174)]?.[u(0x175)]??'';if(f[u(0x160)])f[u(0x160)](l,f,this[u(0x17c)],this);});else{if(f[t(0x160)])g['addEventListener'](t(0x170),l=>{const v=t;l['stopPropagation'](),l[v(0x17a)](),f['action']?.(l,f,this[v(0x17c)],this),this['close']();});}this[t(0x174)]?.['mode']=='undo'&&g[t(0x15b)](t(0x188),l=>{const w=t;l['stopPropagation'](),f[w(0x160)]?.(l,f,this['context'],this),this['close']();});g[t(0x15b)](t(0x17b),()=>{const x=t;this['closeSiblingSubmenus'](g),this['options']?.[x(0x166)]=='undo'&&this[x(0x148)](g);});if(f[t(0x179)]!=null){let l=this[t(0x17d)](f[t(0x179)]);this['configurePopoverSubmenu'](l),g[t(0x182)](l),g[t(0x15b)]('mouseenter',()=>{const y=t;this[y(0x16e)](g,l);});}}d['appendChild'](g);}else e=!![];}),d;}[p(0x13d)](c){const z=p;let d=this['_menuElement'],e=this[z(0x174)]?.['mouseOffset']!=null?this['options'][z(0x156)]:0x2;this['showPopover'](d),this['positionMenu'](d,c['clientX'],c[z(0x153)],e),d['classList'][z(0x14b)]('context_menu_display'),c['preventDefault'](),ContextMenu[z(0x136)]['add'](this),window[z(0x15b)]('keyup',this['_windowKeyUp']),window[z(0x15b)](z(0x143),this['_windowResize']),window[z(0x15b)](z(0x135),this['_windowDown']),setTimeout(()=>{const A=z;if(!ContextMenu['_openedContextMenus']['has'](this))return;window[A(0x15b)]('contextmenu',this[A(0x177)]);},0x96);}['_windowResize'](){const B=p;this[B(0x152)]();}['_windowDown'](c){const C=p;c['preventDefault']();if(!(c[C(0x15d)]instanceof Node)||!this['_menuElement'][C(0x181)](c['target']))this['close']();return![];}['_windowKeyUp'](c){c['key']==='Escape'&&this['close']();}static[p(0x158)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}[p(0x152)](){const D=p;this[D(0x16f)](this[D(0x172)]),this['hidePopover'](this['_menuElement']),this['_menuElement'][D(0x178)](),window['removeEventListener']('mousedown',this['_windowDown']),window[D(0x145)](D(0x143),this[D(0x147)]),window['removeEventListener'](D(0x141),this[D(0x14c)]),setTimeout(()=>window[D(0x145)](D(0x165),this['_windowDown']),0xa),ContextMenu['_openedContextMenus']['delete'](this);}static['closeAll'](){const E=p;for(const d of ContextMenu[E(0x136)]['values']())d[E(0x152)]();}[p(0x176)](c){const F=p;c['classList']['add']('context_menu_submenu_popover'),c[F(0x137)](F(0x13c),'manual');}[p(0x148)](c){const G=p;if(c[G(0x142)]==null)return;let d=!![];for(let e of c['parentElement'][G(0x179)]){if(d)e['classList']['add']('context_menu_marked');else e[G(0x16a)]['remove']('context_menu_marked');if(e==c)d=![];}}['closeSiblingSubmenus'](c){const H=p;if(c[H(0x142)]==null)return;for(const d of c['parentElement'][H(0x179)]){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const I=p,d=c['querySelectorAll']('ul[popover]');for(const e of d){this[I(0x186)](e);}}['openPopoverSubmenu'](c,d){const J=p;this['showPopover'](d),this[J(0x14a)](c,d);}['showPopover'](c){const K=p;if(this['isPopoverOpen'](c))return;c[K(0x151)]();}[p(0x186)](c){const L=p;if(c==null||!this[L(0x157)](c))return;c[L(0x186)]();}[p(0x157)](c){return c['matches'](':popover-open');}[p(0x140)](c,d,e,f){const M=p,g=c['offsetWidth']+0x4,h=c[M(0x171)]+0x4,i=window['innerWidth']-d,j=d,k=window[M(0x13e)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[M(0x184)][M(0x183)]=Math[M(0x173)](0x0,Math[M(0x189)](m,window[M(0x17e)]-g))+'px',c[M(0x184)][M(0x16d)]=Math['max'](0x0,Math[M(0x189)](n,window[M(0x13e)]-h))+'px';}['positionSubmenuPopover'](c,d){const N=p,e=c[N(0x18c)](),f=d[N(0x18c)](),g=d[N(0x138)]||f[N(0x13b)],h=d['offsetHeight']||f['height'],i=window['innerWidth']-e[N(0x155)],j=e['left'];let k=e['right'];i<g&&j>i&&(k=e['left']-g);const l=window[N(0x13e)]-e[N(0x16d)],m=e[N(0x163)];let n=e['top'];l<h&&m>l&&(n=e[N(0x163)]-h),d['style'][N(0x183)]=Math['max'](0x0,Math[N(0x189)](k,window['innerWidth']-g))+'px',d[N(0x184)][N(0x16d)]=Math[N(0x173)](0x0,Math[N(0x189)](n,window[N(0x13e)]-h))+'px',d['style'][N(0x155)]='auto',d['style']['bottom']='auto';}}function b(c,d){c=c-0x134;const e=a();let f=e[c];return f;}function a(){const O=['mouseOffset','isPopoverOpen','show','checked','stopPropagation','addEventListener','94002lYaqmy','target','num','2538380BgcYrO','action','className','_contextMenuCss','bottom','span','contextmenu','mode','69SwOBRm','&#155;','32492lSqhwF','classList','1636229zwRckV','13rWEKWt','top','openPopoverSubmenu','hideDescendantSubmenus','click','offsetHeight','_menuElement','max','options','defaultIcon','configurePopoverSubmenu','_windowDown','remove','children','preventDefault','mouseenter','context','renderLevel','innerWidth','25ixzsbJ','context_menu_icon_span','contains','appendChild','left','style','context_menu_','hidePopover','38958NevQXw','mouseup','min','innerHTML','indexOf','getBoundingClientRect','11331HYtzQO','mousedown','_openedContextMenus','setAttribute','offsetWidth','manual','248DBKOQS','width','popover','display','innerHeight','count','positionMenu','keyup','parentElement','resize','icon','removeEventListener','disabled','_windowResize','markUndoItems','createElement','positionSubmenuPopover','add','_windowKeyUp','3198756aRQBeP','title','checkable','menu','showPopover','close','clientY','adoptedStyleSheets','right'];a=function(){return O;};return a();}