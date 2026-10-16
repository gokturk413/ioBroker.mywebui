const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x140))/0x1*(-parseInt(o(0x156))/0x2)+-parseInt(o(0x13d))/0x3*(parseInt(o(0x18b))/0x4)+parseInt(o(0x14e))/0x5+parseInt(o(0x184))/0x6*(parseInt(o(0x166))/0x7)+-parseInt(o(0x175))/0x8*(-parseInt(o(0x14d))/0x9)+parseInt(o(0x154))/0xa*(-parseInt(o(0x16f))/0xb)+parseInt(o(0x167))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x90802));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x12f;const e=a();let f=e[c];return f;}export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();[p(0x144)];['options'];['context'];['num'];['_menuElement'];constructor(c,d,e){const q=p;this[q(0x14f)]=ContextMenu[q(0x14b)]++,this[q(0x144)]=c,this[q(0x182)]=d,this[q(0x152)]=e,this['reload'](),this['_windowDown']=this[q(0x132)][q(0x17b)](this),this[q(0x15d)]=this['_windowKeyUp'][q(0x17b)](this),this[q(0x15c)]=this[q(0x15c)]['bind'](this);}['reload'](){const r=p;let c=this['options']?.[r(0x161)]??document;if(this[r(0x177)]==null){this[r(0x177)]=document[r(0x163)](r(0x179)),this[r(0x177)]['className']=r(0x188),this[r(0x177)]['id']='context_menu_'+this[r(0x14f)],this['_menuElement'][r(0x13f)](r(0x170),'manual');if(c===document)document['body']['appendChild'](this[r(0x177)]);else c[r(0x168)](this[r(0x177)]);}this['_menuElement'][r(0x17e)]='',c[r(0x157)][r(0x141)](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x157)]=[...c['adoptedStyleSheets'],ContextMenu[r(0x139)]]),this[r(0x177)]['appendChild'](this['renderLevel'](this['menu']));}['renderLevel'](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x17d)](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k['className']=t(0x189),e=![],d[t(0x168)](k);}let g=document['createElement']('li'),h=document['createElement']('span');h[t(0x142)]=t(0x164);if(f['checked']===!![])h['innerHTML']='✔';else(f[t(0x13a)]??'')!=''?h['innerHTML']=f[t(0x13a)]??'':h[t(0x17e)]=this[t(0x182)]?.[t(0x16c)]??'';let i=document['createElement']('span');i['className']='context_menu_text',i[t(0x17e)]=f[t(0x186)]??'';let j=document['createElement'](t(0x173));j['className']=t(0x145);f['children']!=null&&(j['innerHTML']=this[t(0x182)]?.['subIcon']??t(0x172));g['appendChild'](h),g[t(0x168)](i),g['appendChild'](j);if(f['disabled'])g[t(0x13f)](t(0x169),'');else{if(f[t(0x16b)])g['addEventListener'](t(0x14c),l=>{const u=t;l['stopPropagation'](),l[u(0x146)](),f[u(0x134)]=!f[u(0x134)],h['innerHTML']=f[u(0x134)]?'✔':f['icon']??this['options']?.[u(0x16c)]??'';if(f[u(0x159)])f[u(0x159)](l,f,this[u(0x152)],this);});else{if(f['action'])g['addEventListener'](t(0x14c),l=>{const v=t;l['stopPropagation'](),l['preventDefault'](),f[v(0x159)]?.(l,f,this[v(0x152)],this),this[v(0x183)]();});}this['options']?.['mode']=='undo'&&g[t(0x150)](t(0x17c),l=>{const w=t;l[w(0x149)](),f['action']?.(l,f,this[w(0x152)],this),this['close']();});g['addEventListener']('mouseenter',()=>{const x=t;this[x(0x148)](g),this['options']?.['mode']=='undo'&&this[x(0x171)](g);});if(f[t(0x147)]!=null){let l=this['renderLevel'](f['children']);this[t(0x15b)](l),g['appendChild'](l),g[t(0x150)](t(0x16d),()=>{this['openPopoverSubmenu'](g,l);});}}d['appendChild'](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this['_menuElement'],e=this[y(0x182)]?.[y(0x153)]!=null?this[y(0x182)]['mouseOffset']:0x2;this['showPopover'](d),this[y(0x18c)](d,c[y(0x130)],c['clientY'],e),d[y(0x17a)]['add'](y(0x178)),c['preventDefault'](),ContextMenu['_openedContextMenus'][y(0x136)](this),window['addEventListener']('keyup',this['_windowKeyUp']),window[y(0x150)]('resize',this[y(0x15c)]),window['addEventListener'](y(0x16e),this[y(0x132)]),setTimeout(()=>{const z=y;if(!ContextMenu['_openedContextMenus']['has'](this))return;window['addEventListener']('contextmenu',this[z(0x132)]);},0x96);}['_windowResize'](){const A=p;this[A(0x183)]();}[p(0x132)](c){const B=p;c[B(0x146)]();if(!(c['target']instanceof Node)||!this[B(0x177)]['contains'](c[B(0x18a)]))this[B(0x183)]();return![];}[p(0x15d)](c){const C=p;c['key']===C(0x13c)&&this[C(0x183)]();}static['show'](c,d,e,f){const D=p;let g=new ContextMenu(c,e,f);return g[D(0x158)](d),g;}[p(0x183)](){const E=p;this['hideDescendantSubmenus'](this[E(0x177)]),this[E(0x176)](this[E(0x177)]),this['_menuElement']['remove'](),window[E(0x14a)]('mousedown',this[E(0x132)]),window[E(0x14a)](E(0x18d),this['_windowResize']),window[E(0x14a)](E(0x185),this[E(0x15d)]),setTimeout(()=>window[E(0x14a)](E(0x174),this[E(0x132)]),0xa),ContextMenu['_openedContextMenus'][E(0x137)](this);}static['closeAll'](){const F=p;for(const d of ContextMenu['_openedContextMenus'][F(0x160)]())d[F(0x183)]();}[p(0x15b)](c){const G=p;c['classList']['add'](G(0x12f)),c['setAttribute']('popover','manual');}['markUndoItems'](c){const H=p;if(c['parentElement']==null)return;let d=!![];for(let e of c['parentElement'][H(0x147)]){if(d)e['classList'][H(0x136)]('context_menu_marked');else e['classList']['remove'](H(0x180));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const I=p;if(c['parentElement']==null)return;for(const d of c['parentElement'][I(0x147)]){d!==c&&this[I(0x181)](d);}}['hideDescendantSubmenus'](c){const J=p,d=c['querySelectorAll']('ul[popover]');for(const e of d){this[J(0x176)](e);}}[p(0x16a)](c,d){const K=p;this[K(0x135)](d),this[K(0x151)](c,d);}['showPopover'](c){if(this['isPopoverOpen'](c))return;c['showPopover']();}[p(0x176)](c){const L=p;if(c==null||!this['isPopoverOpen'](c))return;c[L(0x176)]();}[p(0x15f)](c){const M=p;return c[M(0x138)](':popover-open');}['positionMenu'](c,d,e,f){const N=p,g=c[N(0x187)]+0x4,h=c['offsetHeight']+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style'][N(0x13e)]=Math['max'](0x0,Math['min'](m,window['innerWidth']-g))+'px',c[N(0x13b)][N(0x133)]=Math['max'](0x0,Math[N(0x143)](n,window[N(0x15e)]-h))+'px';}['positionSubmenuPopover'](c,d){const O=p,e=c[O(0x162)](),f=d[O(0x162)](),g=d['offsetWidth']||f['width'],h=d['offsetHeight']||f[O(0x165)],i=window[O(0x131)]-e['right'],j=e['left'];let k=e['right'];i<g&&j>i&&(k=e[O(0x13e)]-g);const l=window['innerHeight']-e['top'],m=e[O(0x17f)];let n=e['top'];l<h&&m>l&&(n=e[O(0x17f)]-h),d[O(0x13b)][O(0x13e)]=Math[O(0x155)](0x0,Math['min'](k,window['innerWidth']-g))+'px',d['style'][O(0x133)]=Math[O(0x155)](0x0,Math['min'](n,window[O(0x15e)]-h))+'px',d['style']['right']='auto',d[O(0x13b)][O(0x17f)]=O(0x15a);}}function a(){const P=['indexOf','className','min','menu','context_menu_sub_span','preventDefault','children','closeSiblingSubmenus','stopPropagation','removeEventListener','count','click','3294441ZMRIay','3304680ytZJpM','num','addEventListener','positionSubmenuPopover','context','mouseOffset','130ATJRiT','max','2TbQMUk','adoptedStyleSheets','display','action','auto','configurePopoverSubmenu','_windowResize','_windowKeyUp','innerHeight','isPopoverOpen','values','shadowRoot','getBoundingClientRect','createElement','context_menu_icon_span','height','1015NKvLLe','16635600QbaVkp','appendChild','disabled','openPopoverSubmenu','checkable','defaultIcon','mouseenter','mousedown','859859AhkLzo','popover','markUndoItems','&#155;','span','contextmenu','8tWYHUk','hidePopover','_menuElement','context_menu_display','div','classList','bind','mouseup','forEach','innerHTML','bottom','context_menu_marked','hideDescendantSubmenus','options','close','39252LXUWmS','keyup','title','offsetWidth','context_menu','context_menu_divider','target','25108WTzyzk','positionMenu','resize','context_menu_submenu_popover','clientX','innerWidth','_windowDown','top','checked','showPopover','add','delete','matches','_contextMenuCss','icon','style','Escape','519KDYply','left','setAttribute','667883byUgqm'];a=function(){return P;};return a();}