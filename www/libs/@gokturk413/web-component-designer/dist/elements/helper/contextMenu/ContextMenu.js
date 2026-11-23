const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x157))/0x1+parseInt(o(0x184))/0x2+-parseInt(o(0x181))/0x3*(-parseInt(o(0x17e))/0x4)+parseInt(o(0x1a3))/0x5*(-parseInt(o(0x176))/0x6)+-parseInt(o(0x1a1))/0x7+-parseInt(o(0x175))/0x8*(-parseInt(o(0x159))/0x9)+-parseInt(o(0x171))/0xa*(-parseInt(o(0x167))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xde824));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x149;const e=a();let f=e[c];return f;}export class ContextMenu{static [p(0x1a0)]=css`
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
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();[p(0x16a)];['options'];[p(0x18a)];[p(0x1a4)];[p(0x153)];constructor(c,d,e){const q=p;this['num']=ContextMenu['count']++,this[q(0x16a)]=c,this['options']=d,this[q(0x18a)]=e,this[q(0x166)](),this[q(0x174)]=this[q(0x174)][q(0x15f)](this),this['_windowKeyUp']=this[q(0x14c)][q(0x15f)](this),this[q(0x156)]=this['_windowResize']['bind'](this);}[p(0x166)](){const r=p;let c=this[r(0x197)]?.['shadowRoot']??document;if(this['_menuElement']==null){this[r(0x153)]=document['createElement']('div'),this[r(0x153)]['className']='context_menu',this['_menuElement']['id']='context_menu_'+this['num'],this['_menuElement']['setAttribute']('popover',r(0x168));if(c===document)document['body']['appendChild'](this[r(0x153)]);else c['appendChild'](this[r(0x153)]);}this[r(0x153)]['innerHTML']='',c[r(0x15b)][r(0x17d)](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x15b)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this[r(0x153)]['appendChild'](this['renderLevel'](this['menu']));}[p(0x154)](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x193)](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document[t(0x152)]('li');k[t(0x187)]='context_menu_divider',e=![],d['appendChild'](k);}let g=document[t(0x152)]('li'),h=document[t(0x152)](t(0x17a));h[t(0x187)]='context_menu_icon_span';if(f[t(0x19f)]===!![])h['innerHTML']='✔';else(f[t(0x17c)]??'')!=''?h['innerHTML']=f['icon']??'':h['innerHTML']=this[t(0x197)]?.['defaultIcon']??'';let i=document['createElement']('span');i['className']=t(0x16d),i[t(0x19e)]=f[t(0x195)]??'';let j=document['createElement']('span');j[t(0x187)]=t(0x185);f[t(0x178)]!=null&&(j['innerHTML']=this['options']?.['subIcon']??'&#155;');g[t(0x16c)](h),g['appendChild'](i),g['appendChild'](j);if(f['disabled'])g['setAttribute']('disabled','');else{if(f['checkable'])g[t(0x16b)]('click',l=>{const u=t;l['stopPropagation'](),l['preventDefault'](),f[u(0x19f)]=!f[u(0x19f)],h['innerHTML']=f[u(0x19f)]?'✔':f['icon']??this[u(0x197)]?.[u(0x189)]??'';if(f[u(0x155)])f['action'](l,f,this['context'],this);});else{if(f['action'])g['addEventListener']('click',l=>{l['stopPropagation'](),l['preventDefault'](),f['action']?.(l,f,this['context'],this),this['close']();});}this[t(0x197)]?.['mode']=='undo'&&g[t(0x16b)](t(0x14d),l=>{const v=t;l[v(0x1a2)](),f[v(0x155)]?.(l,f,this[v(0x18a)],this),this['close']();});g['addEventListener'](t(0x198),()=>{const w=t;this['closeSiblingSubmenus'](g),this['options']?.[w(0x173)]==w(0x160)&&this['markUndoItems'](g);});if(f['children']!=null){let l=this['renderLevel'](f['children']);this['configurePopoverSubmenu'](l),g[t(0x16c)](l),g['addEventListener']('mouseenter',()=>{this['openPopoverSubmenu'](g,l);});}}d[t(0x16c)](g);}else e=!![];}),d;}[p(0x179)](c){const x=p;let d=this[x(0x153)],e=this['options']?.[x(0x17f)]!=null?this['options'][x(0x17f)]:0x2;this[x(0x169)](d),this[x(0x196)](d,c['clientX'],c[x(0x14e)],e),d[x(0x172)][x(0x164)]('context_menu_display'),c[x(0x158)](),ContextMenu[x(0x14a)]['add'](this),window[x(0x16b)](x(0x180),this[x(0x14c)]),window['addEventListener'](x(0x14f),this[x(0x156)]),window['addEventListener'](x(0x15e),this[x(0x174)]),setTimeout(()=>{const y=x;if(!ContextMenu['_openedContextMenus'][y(0x149)](this))return;window['addEventListener'](y(0x161),this[y(0x174)]);},0x96);}[p(0x156)](){const z=p;this[z(0x18c)]();}['_windowDown'](c){const A=p;c['preventDefault']();if(!(c['target']instanceof Node)||!this['_menuElement']['contains'](c[A(0x15c)]))this['close']();return![];}[p(0x14c)](c){c['key']==='Escape'&&this['close']();}static[p(0x165)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}[p(0x18c)](){const B=p;this['hideDescendantSubmenus'](this[B(0x153)]),this[B(0x183)](this[B(0x153)]),this[B(0x153)]['remove'](),window[B(0x16f)]('mousedown',this[B(0x174)]),window[B(0x16f)](B(0x14f),this['_windowResize']),window[B(0x16f)]('keyup',this[B(0x14c)]),setTimeout(()=>window['removeEventListener']('contextmenu',this[B(0x174)]),0xa),ContextMenu['_openedContextMenus'][B(0x17b)](this);}static[p(0x19d)](){const C=p;for(const d of ContextMenu[C(0x14a)]['values']())d['close']();}[p(0x191)](c){const D=p;c['classList'][D(0x164)]('context_menu_submenu_popover'),c[D(0x163)](D(0x18e),'manual');}['markUndoItems'](c){const E=p;if(c['parentElement']==null)return;let d=!![];for(let e of c[E(0x19b)][E(0x178)]){if(d)e['classList'][E(0x164)](E(0x18b));else e[E(0x172)][E(0x177)](E(0x18b));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const F=p;if(c[F(0x19b)]==null)return;for(const d of c[F(0x19b)]['children']){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const G=p,d=c[G(0x150)]('ul[popover]');for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){const H=p;this['showPopover'](d),this[H(0x199)](c,d);}['showPopover'](c){const I=p;if(this[I(0x19a)](c))return;c['showPopover']();}[p(0x183)](c){const J=p;if(c==null||!this[J(0x19a)](c))return;c[J(0x183)]();}['isPopoverOpen'](c){const K=p;return c[K(0x192)](K(0x162));}['positionMenu'](c,d,e,f){const L=p,g=c['offsetWidth']+0x4,h=c['offsetHeight']+0x4,i=window[L(0x15a)]-d,j=d,k=window[L(0x18f)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[L(0x151)]['left']=Math['max'](0x0,Math[L(0x186)](m,window['innerWidth']-g))+'px',c['style'][L(0x188)]=Math[L(0x194)](0x0,Math['min'](n,window['innerHeight']-h))+'px';}['positionSubmenuPopover'](c,d){const M=p,e=c['getBoundingClientRect'](),f=d[M(0x170)](),g=d[M(0x15d)]||f[M(0x19c)],h=d[M(0x190)]||f[M(0x14b)],i=window[M(0x15a)]-e['right'],j=e['left'];let k=e['right'];i<g&&j>i&&(k=e[M(0x16e)]-g);const l=window['innerHeight']-e[M(0x188)],m=e['bottom'];let n=e[M(0x188)];l<h&&m>l&&(n=e[M(0x18d)]-h),d[M(0x151)]['left']=Math[M(0x194)](0x0,Math['min'](k,window[M(0x15a)]-g))+'px',d[M(0x151)]['top']=Math['max'](0x0,Math[M(0x186)](n,window[M(0x18f)]-h))+'px',d['style']['right']=M(0x182),d['style']['bottom']='auto';}}function a(){const N=['_windowDown','1800712RohMav','5143206muMUxu','remove','children','display','span','delete','icon','indexOf','16PVXDex','mouseOffset','keyup','1004262TgNcmb','auto','hidePopover','117480BvOGRt','context_menu_sub_span','min','className','top','defaultIcon','context','context_menu_marked','close','bottom','popover','innerHeight','offsetHeight','configurePopoverSubmenu','matches','forEach','max','title','positionMenu','options','mouseenter','positionSubmenuPopover','isPopoverOpen','parentElement','width','closeAll','innerHTML','checked','_contextMenuCss','4978953fKwSBa','stopPropagation','10PGDOLY','num','has','_openedContextMenus','height','_windowKeyUp','mouseup','clientY','resize','querySelectorAll','style','createElement','_menuElement','renderLevel','action','_windowResize','652930YVHAGQ','preventDefault','18VSReRg','innerWidth','adoptedStyleSheets','target','offsetWidth','mousedown','bind','undo','contextmenu',':popover-open','setAttribute','add','show','reload','23562803spSQlZ','manual','showPopover','menu','addEventListener','appendChild','context_menu_text','left','removeEventListener','getBoundingClientRect','10wmUoCC','classList','mode'];a=function(){return N;};return a();}