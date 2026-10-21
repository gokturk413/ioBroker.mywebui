const p=b;function b(c,d){c=c-0x11a;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x160))/0x1*(parseInt(o(0x15a))/0x2)+-parseInt(o(0x126))/0x3+parseInt(o(0x12e))/0x4+-parseInt(o(0x156))/0x5*(parseInt(o(0x165))/0x6)+-parseInt(o(0x15d))/0x7*(parseInt(o(0x11d))/0x8)+parseInt(o(0x158))/0x9+parseInt(o(0x132))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcc032));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static ['count']=0x0;static [p(0x15f)]=new Set();[p(0x12a)];[p(0x11c)];['context'];[p(0x16d)];['_menuElement'];constructor(c,d,e){const q=p;this[q(0x16d)]=ContextMenu[q(0x14b)]++,this['menu']=c,this['options']=d,this['context']=e,this['reload'](),this[q(0x168)]=this['_windowDown'][q(0x157)](this),this[q(0x141)]=this['_windowKeyUp']['bind'](this),this['_windowResize']=this[q(0x140)]['bind'](this);}['reload'](){const r=p;let c=this['options']?.[r(0x16f)]??document;if(this['_menuElement']==null){this[r(0x142)]=document[r(0x162)]('div'),this[r(0x142)]['className']='context_menu',this['_menuElement']['id']=r(0x153)+this['num'],this[r(0x142)][r(0x13d)]('popover',r(0x16a));if(c===document)document['body'][r(0x13f)](this[r(0x142)]);else c[r(0x13f)](this[r(0x142)]);}this['_menuElement']['innerHTML']='',c[r(0x144)][r(0x129)](ContextMenu['_contextMenuCss'])<0x0&&(c['adoptedStyleSheets']=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this['_menuElement']['appendChild'](this['renderLevel'](this[r(0x12a)]));}['renderLevel'](c){const s=p;let d=document[s(0x162)]('ul'),e=![];return c['forEach'](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k[t(0x125)]=t(0x12f),e=![],d['appendChild'](k);}let g=document['createElement']('li'),h=document['createElement']('span');h[t(0x125)]='context_menu_icon_span';if(f[t(0x14d)]===!![])h[t(0x14f)]='✔';else(f['icon']??'')!=''?h[t(0x14f)]=f['icon']??'':h[t(0x14f)]=this['options']?.['defaultIcon']??'';let i=document['createElement']('span');i[t(0x125)]=t(0x13a),i['innerHTML']=f['title']??'';let j=document['createElement'](t(0x15c));j[t(0x125)]='context_menu_sub_span';f['children']!=null&&(j[t(0x14f)]=this['options']?.['subIcon']??t(0x14c));g['appendChild'](h),g['appendChild'](i),g['appendChild'](j);if(f['disabled'])g['setAttribute']('disabled','');else{if(f[t(0x137)])g['addEventListener'](t(0x138),l=>{const u=t;l['stopPropagation'](),l[u(0x127)](),f['checked']=!f['checked'],h[u(0x14f)]=f[u(0x14d)]?'✔':f['icon']??this['options']?.['defaultIcon']??'';if(f[u(0x130)])f[u(0x130)](l,f,this[u(0x12c)],this);});else{if(f[t(0x130)])g[t(0x146)](t(0x138),l=>{const v=t;l[v(0x161)](),l[v(0x127)](),f[v(0x130)]?.(l,f,this[v(0x12c)],this),this['close']();});}this['options']?.['mode']==t(0x167)&&g[t(0x146)]('mouseup',l=>{const w=t;l['stopPropagation'](),f['action']?.(l,f,this[w(0x12c)],this),this[w(0x148)]();});g[t(0x146)](t(0x13b),()=>{const x=t;this[x(0x123)](g),this[x(0x11c)]?.[x(0x11e)]=='undo'&&this['markUndoItems'](g);});if(f[t(0x133)]!=null){let l=this[t(0x170)](f['children']);this[t(0x11b)](l),g['appendChild'](l),g['addEventListener']('mouseenter',()=>{const y=t;this[y(0x147)](g,l);});}}d[t(0x13f)](g);}else e=!![];}),d;}[p(0x166)](c){const z=p;let d=this[z(0x142)],e=this[z(0x11c)]?.[z(0x13c)]!=null?this[z(0x11c)]['mouseOffset']:0x2;this[z(0x12b)](d),this[z(0x11a)](d,c['clientX'],c['clientY'],e),d['classList'][z(0x12d)]('context_menu_display'),c['preventDefault'](),ContextMenu['_openedContextMenus'][z(0x12d)](this),window[z(0x146)](z(0x159),this['_windowKeyUp']),window[z(0x146)]('resize',this['_windowResize']),window[z(0x146)](z(0x15e),this['_windowDown']),setTimeout(()=>{if(!ContextMenu['_openedContextMenus']['has'](this))return;window['addEventListener']('contextmenu',this['_windowDown']);},0x96);}['_windowResize'](){this['close']();}['_windowDown'](c){const A=p;c['preventDefault']();if(!(c[A(0x152)]instanceof Node)||!this['_menuElement']['contains'](c[A(0x152)]))this[A(0x148)]();return![];}[p(0x141)](c){const B=p;c['key']===B(0x122)&&this[B(0x148)]();}static[p(0x15b)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}[p(0x148)](){const C=p;this['hideDescendantSubmenus'](this['_menuElement']),this['hidePopover'](this[C(0x142)]),this['_menuElement']['remove'](),window['removeEventListener']('mousedown',this['_windowDown']),window['removeEventListener'](C(0x164),this[C(0x140)]),window['removeEventListener'](C(0x159),this[C(0x141)]),setTimeout(()=>window[C(0x154)](C(0x128),this[C(0x168)]),0xa),ContextMenu['_openedContextMenus']['delete'](this);}static['closeAll'](){const D=p;for(const d of ContextMenu[D(0x15f)]['values']())d[D(0x148)]();}[p(0x11b)](c){const E=p;c['classList']['add'](E(0x171)),c['setAttribute']('popover','manual');}[p(0x16b)](c){const F=p;if(c[F(0x120)]==null)return;let d=!![];for(let e of c['parentElement'][F(0x133)]){if(d)e[F(0x14e)][F(0x12d)]('context_menu_marked');else e[F(0x14e)][F(0x135)]('context_menu_marked');if(e==c)d=![];}}[p(0x123)](c){const G=p;if(c[G(0x120)]==null)return;for(const d of c['parentElement'][G(0x133)]){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const H=p,d=c[H(0x143)]('ul[popover]');for(const e of d){this[H(0x150)](e);}}[p(0x147)](c,d){const I=p;this[I(0x12b)](d),this[I(0x121)](c,d);}[p(0x12b)](c){const J=p;if(this['isPopoverOpen'](c))return;c[J(0x12b)]();}[p(0x150)](c){const K=p;if(c==null||!this['isPopoverOpen'](c))return;c[K(0x150)]();}[p(0x14a)](c){const L=p;return c[L(0x149)](':popover-open');}[p(0x11a)](c,d,e,f){const M=p,g=c['offsetWidth']+0x4,h=c[M(0x139)]+0x4,i=window[M(0x163)]-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style']['left']=Math[M(0x134)](0x0,Math['min'](m,window[M(0x163)]-g))+'px',c['style'][M(0x11f)]=Math[M(0x134)](0x0,Math['min'](n,window[M(0x169)]-h))+'px';}[p(0x121)](c,d){const N=p,e=c[N(0x13e)](),f=d['getBoundingClientRect'](),g=d[N(0x124)]||f[N(0x136)],h=d['offsetHeight']||f[N(0x131)],i=window['innerWidth']-e[N(0x155)],j=e[N(0x151)];let k=e[N(0x155)];i<g&&j>i&&(k=e[N(0x151)]-g);const l=window['innerHeight']-e['top'],m=e[N(0x145)];let n=e[N(0x11f)];l<h&&m>l&&(n=e['bottom']-h),d[N(0x16c)]['left']=Math[N(0x134)](0x0,Math['min'](k,window['innerWidth']-g))+'px',d[N(0x16c)]['top']=Math[N(0x134)](0x0,Math[N(0x16e)](n,window['innerHeight']-h))+'px',d['style'][N(0x155)]='auto',d['style']['bottom']='auto';}}function a(){const O=['remove','width','checkable','click','offsetHeight','context_menu_text','mouseenter','mouseOffset','setAttribute','getBoundingClientRect','appendChild','_windowResize','_windowKeyUp','_menuElement','querySelectorAll','adoptedStyleSheets','bottom','addEventListener','openPopoverSubmenu','close','matches','isPopoverOpen','count','&#155;','checked','classList','innerHTML','hidePopover','left','target','context_menu_','removeEventListener','right','281495yGgaQR','bind','3619449oaDLJA','keyup','2HiRbIf','show','span','14TRXYIq','mousedown','_openedContextMenus','1143327iysJPj','stopPropagation','createElement','innerWidth','resize','144AQZhJG','display','undo','_windowDown','innerHeight','manual','markUndoItems','style','num','min','shadowRoot','renderLevel','context_menu_submenu_popover','positionMenu','configurePopoverSubmenu','options','5999976nZhEAw','mode','top','parentElement','positionSubmenuPopover','Escape','closeSiblingSubmenus','offsetWidth','className','1681686fDDNii','preventDefault','contextmenu','indexOf','menu','showPopover','context','add','6166516gcOsjD','context_menu_divider','action','height','34469030iRetln','children','max'];a=function(){return O;};return a();}