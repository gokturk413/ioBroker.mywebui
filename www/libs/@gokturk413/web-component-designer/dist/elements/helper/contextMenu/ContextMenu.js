const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x10f))/0x1+parseInt(o(0xf3))/0x2+-parseInt(o(0xc8))/0x3*(parseInt(o(0x10e))/0x4)+parseInt(o(0xe2))/0x5*(parseInt(o(0x11a))/0x6)+parseInt(o(0xea))/0x7+-parseInt(o(0xd4))/0x8*(-parseInt(o(0x123))/0x9)+parseInt(o(0x11b))/0xa*(-parseInt(o(0xd8))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf372d));function a(){const O=['544824MBuCla','min','renderLevel','add','closeAll','appendChild','reload','_windowResize','options','1738264KoGHsq','configurePopoverSubmenu','style','offsetHeight','delete','context','children','parentElement','bind','has','className','showPopover','classList','checked','auto','hidePopover','subIcon','hideDescendantSubmenus','checkable','span','undo','setAttribute','context_menu_sub_span','offsetWidth','querySelectorAll','mouseup','manual','12afrzTf','970767lhXmeN','body','&#155;','resize','removeEventListener','close','title','innerHTML','context_menu_icon_span','disabled','adoptedStyleSheets','570INQzPV','4690WashQI','positionMenu','num','context_menu_display','contains','values','_menuElement','openPopoverSubmenu','135cWRhme','left','context_menu_submenu_popover','556005RXQrdU','_windowKeyUp','keyup','closeSiblingSubmenus','_openedContextMenus','popover','getBoundingClientRect','clientY','icon','addEventListener','mouseOffset',':popover-open','694632FHaMuh','_windowDown','shadowRoot','key','52019bpZIzf','Escape','remove','mode','innerWidth','preventDefault','top','action','positionSubmenuPopover','defaultIcon','28995qZOztY','markUndoItems','mouseenter','innerHeight','width','isPopoverOpen','right','createElement'];a=function(){return O;};return a();}function b(c,d){c=c-0xc6;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static ['count']=0x0;static [p(0xcc)]=new Set();['menu'];['options'];[p(0xf8)];[p(0x11d)];['_menuElement'];constructor(c,d,e){const q=p;this[q(0x11d)]=ContextMenu['count']++,this['menu']=c,this['options']=d,this[q(0xf8)]=e,this[q(0xf0)](),this['_windowDown']=this[q(0xd5)][q(0xfb)](this),this[q(0xc9)]=this['_windowKeyUp'][q(0xfb)](this),this['_windowResize']=this[q(0xf1)][q(0xfb)](this);}[p(0xf0)](){const r=p;let c=this[r(0xf2)]?.[r(0xd6)]??document;if(this[r(0x121)]==null){this['_menuElement']=document[r(0xe9)]('div'),this[r(0x121)]['className']='context_menu',this[r(0x121)]['id']='context_menu_'+this['num'],this['_menuElement'][r(0x108)]('popover','manual');if(c===document)document[r(0x110)][r(0xef)](this[r(0x121)]);else c[r(0xef)](this['_menuElement']);}this['_menuElement']['innerHTML']='',c[r(0x119)]['indexOf'](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x119)]=[...c[r(0x119)],ContextMenu['_contextMenuCss']]),this[r(0x121)]['appendChild'](this[r(0xec)](this['menu']));}[p(0xec)](c){let d=document['createElement']('ul'),e=![];return c['forEach'](f=>{const s=b;if(f[s(0x115)]!=='-'){if(e){let k=document[s(0xe9)]('li');k[s(0xfd)]='context_menu_divider',e=![],d['appendChild'](k);}let g=document[s(0xe9)]('li'),h=document['createElement'](s(0x106));h[s(0xfd)]=s(0x117);if(f['checked']===!![])h['innerHTML']='✔';else(f[s(0xd0)]??'')!=''?h[s(0x116)]=f[s(0xd0)]??'':h[s(0x116)]=this[s(0xf2)]?.[s(0xe1)]??'';let i=document['createElement']('span');i['className']='context_menu_text',i['innerHTML']=f[s(0x115)]??'';let j=document['createElement'](s(0x106));j[s(0xfd)]=s(0x109);f[s(0xf9)]!=null&&(j[s(0x116)]=this[s(0xf2)]?.[s(0x103)]??s(0x111));g['appendChild'](h),g[s(0xef)](i),g['appendChild'](j);if(f[s(0x118)])g['setAttribute'](s(0x118),'');else{if(f[s(0x105)])g['addEventListener']('click',l=>{const t=s;l['stopPropagation'](),l[t(0xdd)](),f['checked']=!f[t(0x100)],h['innerHTML']=f['checked']?'✔':f['icon']??this['options']?.[t(0xe1)]??'';if(f['action'])f['action'](l,f,this[t(0xf8)],this);});else{if(f[s(0xdf)])g['addEventListener']('click',l=>{const u=s;l['stopPropagation'](),l['preventDefault'](),f['action']?.(l,f,this[u(0xf8)],this),this['close']();});}this[s(0xf2)]?.[s(0xdb)]==s(0x107)&&g[s(0xd1)](s(0x10c),l=>{const v=s;l['stopPropagation'](),f[v(0xdf)]?.(l,f,this['context'],this),this['close']();});g['addEventListener'](s(0xe4),()=>{const w=s;this['closeSiblingSubmenus'](g),this['options']?.['mode']==w(0x107)&&this[w(0xe3)](g);});if(f['children']!=null){let l=this[s(0xec)](f[s(0xf9)]);this[s(0xf4)](l),g['appendChild'](l),g[s(0xd1)](s(0xe4),()=>{const x=s;this[x(0x122)](g,l);});}}d[s(0xef)](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this[y(0x121)],e=this['options']?.[y(0xd2)]!=null?this[y(0xf2)][y(0xd2)]:0x2;this[y(0xfe)](d),this['positionMenu'](d,c['clientX'],c[y(0xcf)],e),d['classList'][y(0xed)](y(0x11e)),c[y(0xdd)](),ContextMenu[y(0xcc)]['add'](this),window['addEventListener']('keyup',this[y(0xc9)]),window['addEventListener'](y(0x112),this[y(0xf1)]),window['addEventListener']('mousedown',this[y(0xd5)]),setTimeout(()=>{const z=y;if(!ContextMenu[z(0xcc)][z(0xfc)](this))return;window['addEventListener']('contextmenu',this[z(0xd5)]);},0x96);}[p(0xf1)](){this['close']();}['_windowDown'](c){const A=p;c[A(0xdd)]();if(!(c['target']instanceof Node)||!this[A(0x121)][A(0x11f)](c['target']))this[A(0x114)]();return![];}['_windowKeyUp'](c){const B=p;c[B(0xd7)]===B(0xd9)&&this[B(0x114)]();}static['show'](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}['close'](){const C=p;this['hideDescendantSubmenus'](this[C(0x121)]),this[C(0x102)](this['_menuElement']),this[C(0x121)][C(0xda)](),window['removeEventListener']('mousedown',this[C(0xd5)]),window[C(0x113)]('resize',this['_windowResize']),window[C(0x113)](C(0xca),this[C(0xc9)]),setTimeout(()=>window['removeEventListener']('contextmenu',this[C(0xd5)]),0xa),ContextMenu[C(0xcc)][C(0xf7)](this);}static[p(0xee)](){const D=p;for(const d of ContextMenu['_openedContextMenus'][D(0x120)]())d['close']();}['configurePopoverSubmenu'](c){const E=p;c[E(0xff)]['add'](E(0xc7)),c['setAttribute'](E(0xcd),E(0x10d));}['markUndoItems'](c){const F=p;if(c['parentElement']==null)return;let d=!![];for(let e of c['parentElement']['children']){if(d)e[F(0xff)]['add']('context_menu_marked');else e[F(0xff)]['remove']('context_menu_marked');if(e==c)d=![];}}[p(0xcb)](c){const G=p;if(c[G(0xfa)]==null)return;for(const d of c[G(0xfa)]['children']){d!==c&&this[G(0x104)](d);}}[p(0x104)](c){const H=p,d=c[H(0x10b)]('ul[popover]');for(const e of d){this[H(0x102)](e);}}[p(0x122)](c,d){const I=p;this[I(0xfe)](d),this[I(0xe0)](c,d);}[p(0xfe)](c){const J=p;if(this['isPopoverOpen'](c))return;c[J(0xfe)]();}[p(0x102)](c){const K=p;if(c==null||!this[K(0xe7)](c))return;c['hidePopover']();}[p(0xe7)](c){const L=p;return c['matches'](L(0xd3));}[p(0x11c)](c,d,e,f){const M=p,g=c['offsetWidth']+0x4,h=c[M(0xf6)]+0x4,i=window[M(0xdc)]-d,j=d,k=window[M(0xe5)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[M(0xf5)][M(0xc6)]=Math['max'](0x0,Math['min'](m,window[M(0xdc)]-g))+'px',c['style'][M(0xde)]=Math['max'](0x0,Math[M(0xeb)](n,window[M(0xe5)]-h))+'px';}[p(0xe0)](c,d){const N=p,e=c[N(0xce)](),f=d['getBoundingClientRect'](),g=d[N(0x10a)]||f[N(0xe6)],h=d[N(0xf6)]||f['height'],i=window['innerWidth']-e[N(0xe8)],j=e['left'];let k=e[N(0xe8)];i<g&&j>i&&(k=e[N(0xc6)]-g);const l=window[N(0xe5)]-e[N(0xde)],m=e['bottom'];let n=e['top'];l<h&&m>l&&(n=e['bottom']-h),d[N(0xf5)]['left']=Math['max'](0x0,Math['min'](k,window[N(0xdc)]-g))+'px',d['style'][N(0xde)]=Math['max'](0x0,Math[N(0xeb)](n,window[N(0xe5)]-h))+'px',d['style']['right']=N(0x101),d['style']['bottom']=N(0x101);}}