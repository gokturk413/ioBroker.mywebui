function a(){const O=['_windowDown','174AGUFOB','context_menu_','forEach','offsetHeight','title','configurePopoverSubmenu','220cywNpj','mousedown','display','reload','defaultIcon','mouseup','keyup','834993vVIYFD','ul[popover]','_menuElement','mode','innerHeight','menu','removeEventListener','context_menu_marked','min','subIcon','remove','classList','bottom','matches','closeSiblingSubmenus','style','mouseenter','options','className','add','createElement','close','addEventListener','_openedContextMenus',':popover-open','clientX','body','parentElement','icon','left','checked','8VRIZwJ','context_menu_submenu_popover','isPopoverOpen','click','313092OLOqGh','popover','1463490QnouHn','right','context','Escape','hidePopover','innerHTML','manual','3844EGTWVm','279270uHdCeW','positionSubmenuPopover','showPopover','disabled','innerWidth','&#155;','bind','131592kobWXc','key','auto','204792jJsaKZ','num','shadowRoot','adoptedStyleSheets','max','markUndoItems','mouseOffset','count','closeAll','clientY','hideDescendantSubmenus','_windowKeyUp','_contextMenuCss','top','renderLevel','40toQkZE','preventDefault','appendChild','action','getBoundingClientRect','_windowResize','39CUYcQW','target','resize','setAttribute'];a=function(){return O;};return a();}const p=b;function b(c,d){c=c-0x1d4;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x211))/0x1*(parseInt(o(0x1d8))/0x2)+-parseInt(o(0x231))/0x3*(parseInt(o(0x219))/0x4)+parseInt(o(0x212))/0x5+parseInt(o(0x208))/0x6+-parseInt(o(0x20a))/0x7*(-parseInt(o(0x204))/0x8)+-parseInt(o(0x1e5))/0x9*(-parseInt(o(0x22b))/0xa)+-parseInt(o(0x1de))/0xb*(parseInt(o(0x21c))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3ded0));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x223)]=0x0;static ['_openedContextMenus']=new Set();['menu'];['options'];[p(0x20c)];[p(0x21d)];[p(0x1e7)];constructor(c,d,e){const q=p;this['num']=ContextMenu['count']++,this[q(0x1ea)]=c,this['options']=d,this[q(0x20c)]=e,this[q(0x1e1)](),this[q(0x1d7)]=this['_windowDown']['bind'](this),this[q(0x227)]=this['_windowKeyUp'][q(0x218)](this),this['_windowResize']=this[q(0x230)][q(0x218)](this);}[p(0x1e1)](){const r=p;let c=this['options']?.[r(0x21e)]??document;if(this[r(0x1e7)]==null){this['_menuElement']=document[r(0x1f9)]('div'),this[r(0x1e7)][r(0x1f7)]='context_menu',this['_menuElement']['id']=r(0x1d9)+this['num'],this['_menuElement'][r(0x1d6)](r(0x209),r(0x210));if(c===document)document[r(0x1ff)]['appendChild'](this['_menuElement']);else c[r(0x22d)](this['_menuElement']);}this[r(0x1e7)][r(0x20f)]='',c[r(0x21f)]['indexOf'](ContextMenu['_contextMenuCss'])<0x0&&(c['adoptedStyleSheets']=[...c[r(0x21f)],ContextMenu[r(0x228)]]),this[r(0x1e7)]['appendChild'](this['renderLevel'](this['menu']));}[p(0x22a)](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x1da)](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k['className']='context_menu_divider',e=![],d['appendChild'](k);}let g=document['createElement']('li'),h=document[t(0x1f9)]('span');h['className']='context_menu_icon_span';if(f['checked']===!![])h['innerHTML']='✔';else(f[t(0x201)]??'')!=''?h[t(0x20f)]=f[t(0x201)]??'':h['innerHTML']=this[t(0x1f6)]?.[t(0x1e2)]??'';let i=document['createElement']('span');i[t(0x1f7)]='context_menu_text',i[t(0x20f)]=f[t(0x1dc)]??'';let j=document['createElement']('span');j['className']='context_menu_sub_span';f['children']!=null&&(j[t(0x20f)]=this[t(0x1f6)]?.[t(0x1ee)]??t(0x217));g['appendChild'](h),g[t(0x22d)](i),g[t(0x22d)](j);if(f[t(0x215)])g['setAttribute'](t(0x215),'');else{if(f['checkable'])g[t(0x1fb)](t(0x207),l=>{const u=t;l['stopPropagation'](),l['preventDefault'](),f[u(0x203)]=!f['checked'],h['innerHTML']=f[u(0x203)]?'✔':f[u(0x201)]??this[u(0x1f6)]?.[u(0x1e2)]??'';if(f[u(0x22e)])f[u(0x22e)](l,f,this[u(0x20c)],this);});else{if(f['action'])g['addEventListener']('click',l=>{const v=t;l['stopPropagation'](),l[v(0x22c)](),f['action']?.(l,f,this[v(0x20c)],this),this['close']();});}this['options']?.[t(0x1e8)]=='undo'&&g[t(0x1fb)](t(0x1e3),l=>{const w=t;l['stopPropagation'](),f['action']?.(l,f,this[w(0x20c)],this),this[w(0x1fa)]();});g[t(0x1fb)](t(0x1f5),()=>{const x=t;this[x(0x1f3)](g),this['options']?.[x(0x1e8)]=='undo'&&this[x(0x221)](g);});if(f['children']!=null){let l=this['renderLevel'](f['children']);this[t(0x1dd)](l),g[t(0x22d)](l),g['addEventListener'](t(0x1f5),()=>{this['openPopoverSubmenu'](g,l);});}}d[t(0x22d)](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this['_menuElement'],e=this[y(0x1f6)]?.['mouseOffset']!=null?this[y(0x1f6)][y(0x222)]:0x2;this[y(0x214)](d),this['positionMenu'](d,c[y(0x1fe)],c[y(0x225)],e),d['classList'][y(0x1f8)]('context_menu_display'),c[y(0x22c)](),ContextMenu[y(0x1fc)]['add'](this),window['addEventListener']('keyup',this['_windowKeyUp']),window[y(0x1fb)](y(0x1d5),this[y(0x230)]),window['addEventListener'](y(0x1df),this[y(0x1d7)]),setTimeout(()=>{const z=y;if(!ContextMenu[z(0x1fc)]['has'](this))return;window[z(0x1fb)]('contextmenu',this['_windowDown']);},0x96);}[p(0x230)](){this['close']();}[p(0x1d7)](c){const A=p;c[A(0x22c)]();if(!(c[A(0x1d4)]instanceof Node)||!this['_menuElement']['contains'](c[A(0x1d4)]))this['close']();return![];}['_windowKeyUp'](c){const B=p;c[B(0x21a)]===B(0x20d)&&this[B(0x1fa)]();}static['show'](c,d,e,f){const C=p;let g=new ContextMenu(c,e,f);return g[C(0x1e0)](d),g;}[p(0x1fa)](){const D=p;this[D(0x226)](this['_menuElement']),this[D(0x20e)](this['_menuElement']),this[D(0x1e7)]['remove'](),window[D(0x1eb)](D(0x1df),this[D(0x1d7)]),window['removeEventListener'](D(0x1d5),this[D(0x230)]),window['removeEventListener'](D(0x1e4),this[D(0x227)]),setTimeout(()=>window[D(0x1eb)]('contextmenu',this['_windowDown']),0xa),ContextMenu[D(0x1fc)]['delete'](this);}static[p(0x224)](){for(const d of ContextMenu['_openedContextMenus']['values']())d['close']();}[p(0x1dd)](c){const E=p;c[E(0x1f0)][E(0x1f8)](E(0x205)),c[E(0x1d6)](E(0x209),'manual');}[p(0x221)](c){const F=p;if(c['parentElement']==null)return;let d=!![];for(let e of c[F(0x200)]['children']){if(d)e['classList'][F(0x1f8)](F(0x1ec));else e[F(0x1f0)][F(0x1ef)](F(0x1ec));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const G=p;if(c['parentElement']==null)return;for(const d of c[G(0x200)]['children']){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const H=p,d=c['querySelectorAll'](H(0x1e6));for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){const I=p;this[I(0x214)](d),this['positionSubmenuPopover'](c,d);}[p(0x214)](c){const J=p;if(this['isPopoverOpen'](c))return;c[J(0x214)]();}[p(0x20e)](c){const K=p;if(c==null||!this[K(0x206)](c))return;c['hidePopover']();}['isPopoverOpen'](c){const L=p;return c[L(0x1f2)](L(0x1fd));}['positionMenu'](c,d,e,f){const M=p,g=c['offsetWidth']+0x4,h=c['offsetHeight']+0x4,i=window[M(0x216)]-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[M(0x1f4)]['left']=Math[M(0x220)](0x0,Math['min'](m,window['innerWidth']-g))+'px',c[M(0x1f4)][M(0x229)]=Math[M(0x220)](0x0,Math[M(0x1ed)](n,window[M(0x1e9)]-h))+'px';}[p(0x213)](c,d){const N=p,e=c[N(0x22f)](),f=d[N(0x22f)](),g=d['offsetWidth']||f['width'],h=d[N(0x1db)]||f['height'],i=window[N(0x216)]-e[N(0x20b)],j=e['left'];let k=e[N(0x20b)];i<g&&j>i&&(k=e[N(0x202)]-g);const l=window['innerHeight']-e[N(0x229)],m=e[N(0x1f1)];let n=e[N(0x229)];l<h&&m>l&&(n=e['bottom']-h),d[N(0x1f4)]['left']=Math['max'](0x0,Math[N(0x1ed)](k,window['innerWidth']-g))+'px',d['style'][N(0x229)]=Math[N(0x220)](0x0,Math['min'](n,window[N(0x1e9)]-h))+'px',d['style']['right']=N(0x21b),d[N(0x1f4)][N(0x1f1)]='auto';}}