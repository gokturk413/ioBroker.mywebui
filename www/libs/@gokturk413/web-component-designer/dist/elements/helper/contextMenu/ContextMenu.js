function a(){const N=['hidePopover','delete','max','setAttribute','context_menu_marked','_menuElement','offsetWidth','mouseenter','5437940vbgmQt','remove','div','_windowKeyUp','count','innerHeight','has','title','defaultIcon','innerHTML','right','icon','ul[popover]','2842020WMpUkf','openPopoverSubmenu','9378495KQmgoO','20xqcWxA','Escape','_openedContextMenus','display','_windowResize','getBoundingClientRect','menu','className','showPopover','manual','contextmenu','positionSubmenuPopover','children','close','_windowDown','min','mouseOffset','appendChild','preventDefault','disabled','mouseup','subIcon','auto','shadowRoot','922616DowgEg','77XXmRpY','removeEventListener','checkable','options','1043085JHqhVc','checked','adoptedStyleSheets','createElement','span','add','left','context_menu_divider','undo','context_menu_','parentElement','addEventListener','bottom','context_menu_display','context','target','clientY','context_menu','8545equwjp','stopPropagation','positionMenu','274KYDCTG','indexOf','isPopoverOpen','clientX','classList','8893224ZKnsdG','values','configurePopoverSubmenu','style','renderLevel','reload','popover','_contextMenuCss','offsetHeight','resize','top','action','bind'];a=function(){return N;};return a();}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x15c))/0x1*(parseInt(o(0x15f))/0x2)+parseInt(o(0x12a))/0x3+parseInt(o(0x12d))/0x4*(-parseInt(o(0x14a))/0x5)+parseInt(o(0x164))/0x6+-parseInt(o(0x146))/0x7*(parseInt(o(0x145))/0x8)+-parseInt(o(0x12c))/0x9+parseInt(o(0x11d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc0efa));function b(c,d){c=c-0x119;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();['menu'];[p(0x149)];[p(0x158)];['num'];['_menuElement'];constructor(c,d,e){const q=p;this['num']=ContextMenu[q(0x121)]++,this['menu']=c,this['options']=d,this[q(0x158)]=e,this[q(0x169)](),this[q(0x13b)]=this['_windowDown']['bind'](this),this['_windowKeyUp']=this[q(0x120)][q(0x170)](this),this[q(0x131)]=this['_windowResize'][q(0x170)](this);}[p(0x169)](){const r=p;let c=this[r(0x149)]?.[r(0x144)]??document;if(this['_menuElement']==null){this[r(0x11a)]=document['createElement'](r(0x11f)),this['_menuElement'][r(0x134)]=r(0x15b),this['_menuElement']['id']=r(0x153)+this['num'],this['_menuElement'][r(0x174)](r(0x16a),r(0x136));if(c===document)document['body'][r(0x13e)](this['_menuElement']);else c[r(0x13e)](this['_menuElement']);}this[r(0x11a)][r(0x126)]='',c['adoptedStyleSheets'][r(0x160)](ContextMenu[r(0x16b)])<0x0&&(c[r(0x14c)]=[...c[r(0x14c)],ContextMenu['_contextMenuCss']]),this['_menuElement'][r(0x13e)](this['renderLevel'](this[r(0x133)]));}[p(0x168)](c){const s=p;let d=document[s(0x14d)]('ul'),e=![];return c['forEach'](f=>{const t=s;if(f[t(0x124)]!=='-'){if(e){let k=document['createElement']('li');k['className']=t(0x151),e=![],d['appendChild'](k);}let g=document[t(0x14d)]('li'),h=document[t(0x14d)](t(0x14e));h['className']='context_menu_icon_span';if(f[t(0x14b)]===!![])h[t(0x126)]='✔';else(f[t(0x128)]??'')!=''?h[t(0x126)]=f['icon']??'':h[t(0x126)]=this['options']?.[t(0x125)]??'';let i=document['createElement']('span');i['className']='context_menu_text',i['innerHTML']=f[t(0x124)]??'';let j=document[t(0x14d)](t(0x14e));j[t(0x134)]='context_menu_sub_span';f['children']!=null&&(j[t(0x126)]=this[t(0x149)]?.[t(0x142)]??'&#155;');g[t(0x13e)](h),g[t(0x13e)](i),g['appendChild'](j);if(f[t(0x140)])g[t(0x174)](t(0x140),'');else{if(f[t(0x148)])g['addEventListener']('click',l=>{const u=t;l[u(0x15d)](),l[u(0x13f)](),f['checked']=!f['checked'],h['innerHTML']=f['checked']?'✔':f['icon']??this['options']?.[u(0x125)]??'';if(f['action'])f[u(0x16f)](l,f,this[u(0x158)],this);});else{if(f[t(0x16f)])g[t(0x155)]('click',l=>{const v=t;l[v(0x15d)](),l[v(0x13f)](),f['action']?.(l,f,this['context'],this),this[v(0x13a)]();});}this[t(0x149)]?.['mode']=='undo'&&g[t(0x155)](t(0x141),l=>{const w=t;l[w(0x15d)](),f['action']?.(l,f,this['context'],this),this[w(0x13a)]();});g['addEventListener'](t(0x11c),()=>{const x=t;this['closeSiblingSubmenus'](g),this[x(0x149)]?.['mode']==x(0x152)&&this['markUndoItems'](g);});if(f['children']!=null){let l=this['renderLevel'](f[t(0x139)]);this['configurePopoverSubmenu'](l),g['appendChild'](l),g['addEventListener']('mouseenter',()=>{const y=t;this[y(0x12b)](g,l);});}}d[t(0x13e)](g);}else e=!![];}),d;}[p(0x130)](c){const z=p;let d=this['_menuElement'],e=this['options']?.[z(0x13d)]!=null?this[z(0x149)]['mouseOffset']:0x2;this[z(0x135)](d),this[z(0x15e)](d,c[z(0x162)],c[z(0x15a)],e),d['classList'][z(0x14f)](z(0x157)),c['preventDefault'](),ContextMenu[z(0x12f)]['add'](this),window[z(0x155)]('keyup',this[z(0x120)]),window[z(0x155)](z(0x16d),this[z(0x131)]),window['addEventListener']('mousedown',this['_windowDown']),setTimeout(()=>{const A=z;if(!ContextMenu[A(0x12f)][A(0x123)](this))return;window[A(0x155)](A(0x137),this[A(0x13b)]);},0x96);}['_windowResize'](){this['close']();}['_windowDown'](c){const B=p;c['preventDefault']();if(!(c[B(0x159)]instanceof Node)||!this[B(0x11a)]['contains'](c[B(0x159)]))this[B(0x13a)]();return![];}['_windowKeyUp'](c){const C=p;c['key']===C(0x12e)&&this['close']();}static['show'](c,d,e,f){const D=p;let g=new ContextMenu(c,e,f);return g[D(0x130)](d),g;}[p(0x13a)](){const E=p;this['hideDescendantSubmenus'](this[E(0x11a)]),this[E(0x171)](this['_menuElement']),this['_menuElement']['remove'](),window['removeEventListener']('mousedown',this['_windowDown']),window['removeEventListener']('resize',this['_windowResize']),window[E(0x147)]('keyup',this[E(0x120)]),setTimeout(()=>window[E(0x147)](E(0x137),this[E(0x13b)]),0xa),ContextMenu[E(0x12f)][E(0x172)](this);}static['closeAll'](){const F=p;for(const d of ContextMenu[F(0x12f)][F(0x165)]())d[F(0x13a)]();}[p(0x166)](c){const G=p;c[G(0x163)][G(0x14f)]('context_menu_submenu_popover'),c[G(0x174)]('popover',G(0x136));}['markUndoItems'](c){const H=p;if(c[H(0x154)]==null)return;let d=!![];for(let e of c['parentElement']['children']){if(d)e[H(0x163)]['add']('context_menu_marked');else e[H(0x163)][H(0x11e)](H(0x119));if(e==c)d=![];}}['closeSiblingSubmenus'](c){if(c['parentElement']==null)return;for(const d of c['parentElement']['children']){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const I=p,d=c['querySelectorAll'](I(0x129));for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){const J=p;this['showPopover'](d),this[J(0x138)](c,d);}['showPopover'](c){const K=p;if(this[K(0x161)](c))return;c[K(0x135)]();}['hidePopover'](c){if(c==null||!this['isPopoverOpen'](c))return;c['hidePopover']();}[p(0x161)](c){return c['matches'](':popover-open');}['positionMenu'](c,d,e,f){const L=p,g=c['offsetWidth']+0x4,h=c[L(0x16c)]+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style'][L(0x150)]=Math[L(0x173)](0x0,Math[L(0x13c)](m,window['innerWidth']-g))+'px',c[L(0x167)][L(0x16e)]=Math[L(0x173)](0x0,Math[L(0x13c)](n,window[L(0x122)]-h))+'px';}['positionSubmenuPopover'](c,d){const M=p,e=c['getBoundingClientRect'](),f=d[M(0x132)](),g=d[M(0x11b)]||f['width'],h=d[M(0x16c)]||f['height'],i=window['innerWidth']-e[M(0x127)],j=e['left'];let k=e[M(0x127)];i<g&&j>i&&(k=e['left']-g);const l=window[M(0x122)]-e[M(0x16e)],m=e['bottom'];let n=e[M(0x16e)];l<h&&m>l&&(n=e[M(0x156)]-h),d[M(0x167)]['left']=Math['max'](0x0,Math['min'](k,window['innerWidth']-g))+'px',d['style'][M(0x16e)]=Math[M(0x173)](0x0,Math['min'](n,window['innerHeight']-h))+'px',d['style']['right']='auto',d[M(0x167)]['bottom']=M(0x143);}}