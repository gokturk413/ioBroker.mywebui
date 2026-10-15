function b(c,d){c=c-0x13e;const e=a();let f=e[c];return f;}function a(){const N=['innerWidth','isPopoverOpen','3196165ycbYAc','mouseenter',':popover-open','&#155;','disabled','classList','1433RXfNky','keyup','title','15277752pFFuAB','context_menu','mode','bottom','623661dVsLWe','top','display','count','appendChild','span','undo','icon','manual','popover','width','removeEventListener','style','setAttribute','showPopover','addEventListener','show','328728SAyFEv','context_menu_icon_span','right','positionMenu','openPopoverSubmenu','innerHeight','45bksOtt','314vuAYap','_windowKeyUp','mouseup','stopPropagation','max','122216rGmqGm','context_menu_display','mousedown','positionSubmenuPopover','_menuElement','className','left','renderLevel','target','offsetHeight','contains','adoptedStyleSheets','5005600iAQDzf','parentElement','configurePopoverSubmenu','forEach','options','div','contextmenu','height','_openedContextMenus','closeSiblingSubmenus','checked','defaultIcon','add','remove','hidePopover','has','_windowDown','context','click','preventDefault','10BZACAm','markUndoItems','_contextMenuCss','offsetWidth','resize','shadowRoot','createElement','hideDescendantSubmenus','close','getBoundingClientRect','_windowResize','min','action','innerHTML','num','reload','auto'];a=function(){return N;};return a();}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x178))/0x1*(parseInt(o(0x197))/0x2)+-parseInt(o(0x17f))/0x3+-parseInt(o(0x13f))/0x4*(parseInt(o(0x196))/0x5)+parseInt(o(0x190))/0x6+-parseInt(o(0x172))/0x7+-parseInt(o(0x14b))/0x8+-parseInt(o(0x17b))/0x9*(-parseInt(o(0x15f))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x649e1));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x182)]=0x0;static ['_openedContextMenus']=new Set();['menu'];['options'];[p(0x15c)];[p(0x16d)];[p(0x143)];constructor(c,d,e){const q=p;this['num']=ContextMenu[q(0x182)]++,this['menu']=c,this['options']=d,this[q(0x15c)]=e,this[q(0x16e)](),this[q(0x15b)]=this['_windowDown']['bind'](this),this['_windowKeyUp']=this['_windowKeyUp']['bind'](this),this[q(0x169)]=this[q(0x169)]['bind'](this);}[p(0x16e)](){const r=p;let c=this[r(0x14f)]?.[r(0x164)]??document;if(this[r(0x143)]==null){this['_menuElement']=document[r(0x165)](r(0x150)),this['_menuElement']['className']=r(0x17c),this[r(0x143)]['id']='context_menu_'+this[r(0x16d)],this['_menuElement'][r(0x18c)]('popover','manual');if(c===document)document['body']['appendChild'](this[r(0x143)]);else c['appendChild'](this[r(0x143)]);}this['_menuElement'][r(0x16c)]='',c['adoptedStyleSheets']['indexOf'](ContextMenu[r(0x161)])<0x0&&(c[r(0x14a)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this[r(0x143)][r(0x183)](this['renderLevel'](this['menu']));}[p(0x146)](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x14e)](f=>{const t=s;if(f[t(0x17a)]!=='-'){if(e){let k=document[t(0x165)]('li');k[t(0x144)]='context_menu_divider',e=![],d[t(0x183)](k);}let g=document['createElement']('li'),h=document['createElement'](t(0x184));h['className']=t(0x191);if(f['checked']===!![])h[t(0x16c)]='✔';else(f[t(0x186)]??'')!=''?h['innerHTML']=f[t(0x186)]??'':h['innerHTML']=this[t(0x14f)]?.['defaultIcon']??'';let i=document[t(0x165)]('span');i['className']='context_menu_text',i['innerHTML']=f['title']??'';let j=document['createElement']('span');j[t(0x144)]='context_menu_sub_span';f['children']!=null&&(j['innerHTML']=this[t(0x14f)]?.['subIcon']??t(0x175));g[t(0x183)](h),g['appendChild'](i),g['appendChild'](j);if(f[t(0x176)])g[t(0x18c)]('disabled','');else{if(f['checkable'])g['addEventListener'](t(0x15d),l=>{const u=t;l['stopPropagation'](),l['preventDefault'](),f[u(0x155)]=!f[u(0x155)],h['innerHTML']=f['checked']?'✔':f['icon']??this['options']?.[u(0x156)]??'';if(f[u(0x16b)])f['action'](l,f,this[u(0x15c)],this);});else{if(f['action'])g['addEventListener']('click',l=>{const v=t;l[v(0x19a)](),l['preventDefault'](),f[v(0x16b)]?.(l,f,this[v(0x15c)],this),this['close']();});}this['options']?.['mode']==t(0x185)&&g['addEventListener'](t(0x199),l=>{const w=t;l['stopPropagation'](),f['action']?.(l,f,this['context'],this),this[w(0x167)]();});g[t(0x18e)](t(0x173),()=>{const x=t;this[x(0x154)](g),this['options']?.[x(0x17d)]=='undo'&&this[x(0x160)](g);});if(f['children']!=null){let l=this[t(0x146)](f['children']);this[t(0x14d)](l),g[t(0x183)](l),g[t(0x18e)](t(0x173),()=>{this['openPopoverSubmenu'](g,l);});}}d[t(0x183)](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this[y(0x143)],e=this['options']?.['mouseOffset']!=null?this['options']['mouseOffset']:0x2;this[y(0x18d)](d),this[y(0x193)](d,c['clientX'],c['clientY'],e),d['classList']['add'](y(0x140)),c[y(0x15e)](),ContextMenu['_openedContextMenus'][y(0x157)](this),window[y(0x18e)](y(0x179),this['_windowKeyUp']),window['addEventListener']('resize',this[y(0x169)]),window[y(0x18e)](y(0x141),this[y(0x15b)]),setTimeout(()=>{const z=y;if(!ContextMenu['_openedContextMenus'][z(0x15a)](this))return;window[z(0x18e)]('contextmenu',this['_windowDown']);},0x96);}['_windowResize'](){this['close']();}['_windowDown'](c){const A=p;c[A(0x15e)]();if(!(c[A(0x147)]instanceof Node)||!this[A(0x143)][A(0x149)](c['target']))this[A(0x167)]();return![];}[p(0x198)](c){c['key']==='Escape'&&this['close']();}static[p(0x18f)](c,d,e,f){const B=p;let g=new ContextMenu(c,e,f);return g[B(0x181)](d),g;}[p(0x167)](){const C=p;this['hideDescendantSubmenus'](this[C(0x143)]),this[C(0x159)](this[C(0x143)]),this[C(0x143)][C(0x158)](),window['removeEventListener']('mousedown',this[C(0x15b)]),window[C(0x18a)](C(0x163),this[C(0x169)]),window['removeEventListener']('keyup',this[C(0x198)]),setTimeout(()=>window[C(0x18a)](C(0x151),this['_windowDown']),0xa),ContextMenu[C(0x153)]['delete'](this);}static['closeAll'](){const D=p;for(const d of ContextMenu[D(0x153)]['values']())d['close']();}[p(0x14d)](c){const E=p;c[E(0x177)][E(0x157)]('context_menu_submenu_popover'),c[E(0x18c)](E(0x188),E(0x187));}[p(0x160)](c){const F=p;if(c[F(0x14c)]==null)return;let d=!![];for(let e of c[F(0x14c)]['children']){if(d)e['classList'][F(0x157)]('context_menu_marked');else e[F(0x177)][F(0x158)]('context_menu_marked');if(e==c)d=![];}}['closeSiblingSubmenus'](c){const G=p;if(c[G(0x14c)]==null)return;for(const d of c['parentElement']['children']){d!==c&&this[G(0x166)](d);}}[p(0x166)](c){const d=c['querySelectorAll']('ul[popover]');for(const e of d){this['hidePopover'](e);}}[p(0x194)](c,d){const H=p;this['showPopover'](d),this[H(0x142)](c,d);}[p(0x18d)](c){const I=p;if(this['isPopoverOpen'](c))return;c[I(0x18d)]();}['hidePopover'](c){const J=p;if(c==null||!this[J(0x171)](c))return;c[J(0x159)]();}[p(0x171)](c){const K=p;return c['matches'](K(0x174));}['positionMenu'](c,d,e,f){const L=p,g=c[L(0x162)]+0x4,h=c[L(0x148)]+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[L(0x18b)]['left']=Math[L(0x13e)](0x0,Math['min'](m,window['innerWidth']-g))+'px',c['style'][L(0x180)]=Math['max'](0x0,Math['min'](n,window[L(0x195)]-h))+'px';}['positionSubmenuPopover'](c,d){const M=p,e=c['getBoundingClientRect'](),f=d[M(0x168)](),g=d[M(0x162)]||f[M(0x189)],h=d[M(0x148)]||f[M(0x152)],i=window[M(0x170)]-e[M(0x192)],j=e[M(0x145)];let k=e[M(0x192)];i<g&&j>i&&(k=e[M(0x145)]-g);const l=window[M(0x195)]-e[M(0x180)],m=e[M(0x17e)];let n=e[M(0x180)];l<h&&m>l&&(n=e['bottom']-h),d['style']['left']=Math['max'](0x0,Math['min'](k,window[M(0x170)]-g))+'px',d[M(0x18b)]['top']=Math['max'](0x0,Math[M(0x16a)](n,window['innerHeight']-h))+'px',d['style']['right']=M(0x16f),d[M(0x18b)]['bottom']=M(0x16f);}}