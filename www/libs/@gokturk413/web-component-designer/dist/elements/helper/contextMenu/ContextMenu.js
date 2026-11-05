const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0xd2))/0x1*(-parseInt(o(0xf2))/0x2)+-parseInt(o(0xf4))/0x3+parseInt(o(0xc9))/0x4*(-parseInt(o(0xcd))/0x5)+parseInt(o(0xe2))/0x6*(parseInt(o(0xc2))/0x7)+-parseInt(o(0xf9))/0x8*(-parseInt(o(0xce))/0x9)+-parseInt(o(0xbf))/0xa+-parseInt(o(0xf8))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaf77e));function b(c,d){c=c-0xa4;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';function a(){const L=['max','title','auto','addEventListener','setAttribute','disabled','min','preventDefault','context','popover','add','adoptedStyleSheets','context_menu_','close','offsetWidth','defaultIcon','body','num','className','stopPropagation','span','icon','classList','right','context_menu','739010QeIRJQ','options','bottom','35QEFaPG','keyup','_contextMenuCss','appendChild','openPopoverSubmenu','getBoundingClientRect','height','28ACPcbu','reload','_windowDown','hidePopover','365770ZuxxeX','2214iLPEfa','context_menu_marked','_windowResize','contextmenu','20HVVhlx','closeSiblingSubmenus','resize','menu','mouseenter','mode','subIcon','checkable','shadowRoot','showPopover','top','_openedContextMenus','context_menu_display','removeEventListener','bind','click','1059108wDvBQs','innerHTML','undo','children','mouseOffset','width','_menuElement','_windowKeyUp','action','Escape','target','positionSubmenuPopover','values','clientY','style','innerHeight','61720OEfZIf','checked','2131470iJYXQv','markUndoItems','count','remove','5779719gVJFao','33848FpNzVH','&#155;','configurePopoverSubmenu','div','left','context_menu_submenu_popover','renderLevel','hideDescendantSubmenus','innerWidth','parentElement','display'];a=function(){return L;};return a();}export class ContextMenu{static [p(0xc4)]=css`
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
	  }`;static ['count']=0x0;static [p(0xdd)]=new Set();['menu'];['options'];[p(0xae)];[p(0xb7)];[p(0xe8)];constructor(c,d,e){const q=p;this[q(0xb7)]=ContextMenu[q(0xf6)]++,this[q(0xd5)]=c,this['options']=d,this['context']=e,this[q(0xca)](),this[q(0xcb)]=this[q(0xcb)]['bind'](this),this['_windowKeyUp']=this['_windowKeyUp'][q(0xe0)](this),this['_windowResize']=this['_windowResize'][q(0xe0)](this);}['reload'](){const r=p;let c=this[r(0xc0)]?.[r(0xda)]??document;if(this[r(0xe8)]==null){this['_menuElement']=document['createElement'](r(0xfc)),this['_menuElement']['className']=r(0xbe),this[r(0xe8)]['id']=r(0xb2)+this['num'],this[r(0xe8)][r(0xaa)](r(0xaf),'manual');if(c===document)document[r(0xb6)][r(0xc5)](this['_menuElement']);else c['appendChild'](this[r(0xe8)]);}this[r(0xe8)]['innerHTML']='',c[r(0xb1)]['indexOf'](ContextMenu[r(0xc4)])<0x0&&(c[r(0xb1)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this['_menuElement']['appendChild'](this[r(0xff)](this['menu']));}[p(0xff)](c){let d=document['createElement']('ul'),e=![];return c['forEach'](f=>{const s=b;if(f[s(0xa7)]!=='-'){if(e){let k=document['createElement']('li');k['className']='context_menu_divider',e=![],d['appendChild'](k);}let g=document['createElement']('li'),h=document['createElement']('span');h[s(0xb8)]='context_menu_icon_span';if(f[s(0xf3)]===!![])h['innerHTML']='✔';else(f[s(0xbb)]??'')!=''?h['innerHTML']=f['icon']??'':h['innerHTML']=this['options']?.[s(0xb5)]??'';let i=document['createElement'](s(0xba));i[s(0xb8)]='context_menu_text',i[s(0xe3)]=f[s(0xa7)]??'';let j=document['createElement']('span');j[s(0xb8)]='context_menu_sub_span';f[s(0xe5)]!=null&&(j['innerHTML']=this[s(0xc0)]?.[s(0xd8)]??s(0xfa));g[s(0xc5)](h),g['appendChild'](i),g[s(0xc5)](j);if(f['disabled'])g['setAttribute'](s(0xab),'');else{if(f[s(0xd9)])g[s(0xa9)]('click',l=>{const t=s;l['stopPropagation'](),l[t(0xad)](),f[t(0xf3)]=!f['checked'],h[t(0xe3)]=f['checked']?'✔':f[t(0xbb)]??this[t(0xc0)]?.['defaultIcon']??'';if(f['action'])f[t(0xea)](l,f,this['context'],this);});else{if(f[s(0xea)])g[s(0xa9)](s(0xe1),l=>{const u=s;l[u(0xb9)](),l['preventDefault'](),f['action']?.(l,f,this[u(0xae)],this),this['close']();});}this[s(0xc0)]?.['mode']==s(0xe4)&&g[s(0xa9)]('mouseup',l=>{const v=s;l[v(0xb9)](),f['action']?.(l,f,this[v(0xae)],this),this['close']();});g['addEventListener'](s(0xd6),()=>{const w=s;this['closeSiblingSubmenus'](g),this['options']?.[w(0xd7)]==w(0xe4)&&this[w(0xf5)](g);});if(f[s(0xe5)]!=null){let l=this['renderLevel'](f[s(0xe5)]);this['configurePopoverSubmenu'](l),g['appendChild'](l),g['addEventListener']('mouseenter',()=>{this['openPopoverSubmenu'](g,l);});}}d['appendChild'](g);}else e=!![];}),d;}[p(0xa5)](c){const x=p;let d=this['_menuElement'],e=this['options']?.[x(0xe6)]!=null?this['options'][x(0xe6)]:0x2;this[x(0xdb)](d),this['positionMenu'](d,c['clientX'],c[x(0xef)],e),d[x(0xbc)][x(0xb0)](x(0xde)),c['preventDefault'](),ContextMenu['_openedContextMenus'][x(0xb0)](this),window[x(0xa9)](x(0xc3),this[x(0xe9)]),window[x(0xa9)]('resize',this['_windowResize']),window[x(0xa9)]('mousedown',this['_windowDown']),setTimeout(()=>{const y=x;if(!ContextMenu['_openedContextMenus']['has'](this))return;window['addEventListener'](y(0xd1),this['_windowDown']);},0x96);}['_windowResize'](){const z=p;this[z(0xb3)]();}['_windowDown'](c){const A=p;c[A(0xad)]();if(!(c[A(0xec)]instanceof Node)||!this[A(0xe8)]['contains'](c[A(0xec)]))this['close']();return![];}['_windowKeyUp'](c){const B=p;c['key']===B(0xeb)&&this[B(0xb3)]();}static['show'](c,d,e,f){const C=p;let g=new ContextMenu(c,e,f);return g[C(0xa5)](d),g;}['close'](){const D=p;this[D(0x100)](this['_menuElement']),this['hidePopover'](this[D(0xe8)]),this['_menuElement'][D(0xf7)](),window['removeEventListener']('mousedown',this['_windowDown']),window[D(0xdf)](D(0xd4),this[D(0xd0)]),window[D(0xdf)]('keyup',this['_windowKeyUp']),setTimeout(()=>window[D(0xdf)]('contextmenu',this['_windowDown']),0xa),ContextMenu['_openedContextMenus']['delete'](this);}static['closeAll'](){const E=p;for(const d of ContextMenu['_openedContextMenus'][E(0xee)]())d['close']();}[p(0xfb)](c){const F=p;c[F(0xbc)]['add'](F(0xfe)),c['setAttribute']('popover','manual');}['markUndoItems'](c){const G=p;if(c[G(0xa4)]==null)return;let d=!![];for(let e of c[G(0xa4)]['children']){if(d)e[G(0xbc)]['add']('context_menu_marked');else e['classList'][G(0xf7)](G(0xcf));if(e==c)d=![];}}[p(0xd3)](c){const H=p;if(c[H(0xa4)]==null)return;for(const d of c[H(0xa4)][H(0xe5)]){d!==c&&this['hideDescendantSubmenus'](d);}}[p(0x100)](c){const I=p,d=c['querySelectorAll']('ul[popover]');for(const e of d){this[I(0xcc)](e);}}[p(0xc6)](c,d){this['showPopover'](d),this['positionSubmenuPopover'](c,d);}[p(0xdb)](c){if(this['isPopoverOpen'](c))return;c['showPopover']();}[p(0xcc)](c){if(c==null||!this['isPopoverOpen'](c))return;c['hidePopover']();}['isPopoverOpen'](c){return c['matches'](':popover-open');}['positionMenu'](c,d,e,f){const J=p,g=c['offsetWidth']+0x4,h=c['offsetHeight']+0x4,i=window['innerWidth']-d,j=d,k=window[J(0xf1)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[J(0xf0)]['left']=Math['max'](0x0,Math[J(0xac)](m,window[J(0x101)]-g))+'px',c[J(0xf0)]['top']=Math[J(0xa6)](0x0,Math['min'](n,window['innerHeight']-h))+'px';}[p(0xed)](c,d){const K=p,e=c['getBoundingClientRect'](),f=d[K(0xc7)](),g=d[K(0xb4)]||f[K(0xe7)],h=d['offsetHeight']||f[K(0xc8)],i=window['innerWidth']-e[K(0xbd)],j=e['left'];let k=e['right'];i<g&&j>i&&(k=e['left']-g);const l=window[K(0xf1)]-e[K(0xdc)],m=e[K(0xc1)];let n=e['top'];l<h&&m>l&&(n=e[K(0xc1)]-h),d[K(0xf0)][K(0xfd)]=Math['max'](0x0,Math['min'](k,window[K(0x101)]-g))+'px',d['style']['top']=Math[K(0xa6)](0x0,Math[K(0xac)](n,window[K(0xf1)]-h))+'px',d['style'][K(0xbd)]=K(0xa8),d[K(0xf0)]['bottom']=K(0xa8);}}