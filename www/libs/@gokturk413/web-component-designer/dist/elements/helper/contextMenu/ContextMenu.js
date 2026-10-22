const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x1ce))/0x1+-parseInt(o(0x1c3))/0x2+parseInt(o(0x1d4))/0x3*(parseInt(o(0x1e1))/0x4)+parseInt(o(0x1a7))/0x5*(-parseInt(o(0x1a4))/0x6)+-parseInt(o(0x1aa))/0x7+-parseInt(o(0x1b0))/0x8+parseInt(o(0x1a1))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8d91f));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x194;const e=a();let f=e[c];return f;}export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x1a2)]=0x0;static [p(0x1bc)]=new Set();[p(0x1af)];[p(0x1d1)];[p(0x1e8)];['num'];[p(0x1d7)];constructor(c,d,e){const q=p;this['num']=ContextMenu[q(0x1a2)]++,this[q(0x1af)]=c,this[q(0x1d1)]=d,this[q(0x1e8)]=e,this['reload'](),this['_windowDown']=this['_windowDown'][q(0x1c4)](this),this[q(0x1cb)]=this[q(0x1cb)]['bind'](this),this[q(0x19e)]=this['_windowResize'][q(0x1c4)](this);}[p(0x1bb)](){const r=p;let c=this[r(0x1d1)]?.[r(0x1e3)]??document;if(this[r(0x1d7)]==null){this[r(0x1d7)]=document[r(0x19c)](r(0x1c5)),this[r(0x1d7)]['className']=r(0x1d3),this[r(0x1d7)]['id']='context_menu_'+this['num'],this[r(0x1d7)][r(0x194)](r(0x1b3),r(0x1eb));if(c===document)document[r(0x1ca)][r(0x1dc)](this[r(0x1d7)]);else c[r(0x1dc)](this[r(0x1d7)]);}this[r(0x1d7)]['innerHTML']='',c[r(0x1c2)]['indexOf'](ContextMenu[r(0x1b8)])<0x0&&(c[r(0x1c2)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this[r(0x1d7)]['appendChild'](this['renderLevel'](this[r(0x1af)]));}['renderLevel'](c){const s=p;let d=document[s(0x19c)]('ul'),e=![];return c[s(0x1ef)](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document[t(0x19c)]('li');k[t(0x196)]=t(0x1e4),e=![],d[t(0x1dc)](k);}let g=document['createElement']('li'),h=document['createElement'](t(0x19a));h[t(0x196)]=t(0x1a9);if(f['checked']===!![])h[t(0x1d0)]='✔';else(f['icon']??'')!=''?h[t(0x1d0)]=f['icon']??'':h[t(0x1d0)]=this[t(0x1d1)]?.[t(0x1bd)]??'';let i=document[t(0x19c)](t(0x19a));i['className']='context_menu_text',i['innerHTML']=f['title']??'';let j=document['createElement'](t(0x19a));j[t(0x196)]=t(0x1da);f['children']!=null&&(j['innerHTML']=this['options']?.['subIcon']??t(0x1df));g['appendChild'](h),g[t(0x1dc)](i),g['appendChild'](j);if(f['disabled'])g[t(0x194)](t(0x1e6),'');else{if(f['checkable'])g[t(0x1c7)]('click',l=>{const u=t;l['stopPropagation'](),l[u(0x1bf)](),f['checked']=!f[u(0x1c0)],h['innerHTML']=f[u(0x1c0)]?'✔':f[u(0x1ea)]??this[u(0x1d1)]?.['defaultIcon']??'';if(f['action'])f[u(0x1dd)](l,f,this['context'],this);});else{if(f[t(0x1dd)])g[t(0x1c7)](t(0x1d2),l=>{const v=t;l[v(0x1ac)](),l[v(0x1bf)](),f['action']?.(l,f,this['context'],this),this[v(0x1d5)]();});}this[t(0x1d1)]?.[t(0x1f1)]=='undo'&&g[t(0x1c7)](t(0x1ba),l=>{const w=t;l[w(0x1ac)](),f['action']?.(l,f,this[w(0x1e8)],this),this['close']();});g['addEventListener']('mouseenter',()=>{const x=t;this['closeSiblingSubmenus'](g),this[x(0x1d1)]?.['mode']==x(0x1db)&&this['markUndoItems'](g);});if(f[t(0x1cf)]!=null){let l=this['renderLevel'](f[t(0x1cf)]);this[t(0x1b6)](l),g[t(0x1dc)](l),g['addEventListener'](t(0x19b),()=>{const y=t;this[y(0x1a3)](g,l);});}}d[t(0x1dc)](g);}else e=!![];}),d;}[p(0x1e7)](c){const z=p;let d=this[z(0x1d7)],e=this['options']?.[z(0x1a6)]!=null?this['options']['mouseOffset']:0x2;this['showPopover'](d),this['positionMenu'](d,c['clientX'],c[z(0x199)],e),d['classList']['add']('context_menu_display'),c[z(0x1bf)](),ContextMenu['_openedContextMenus'][z(0x1e0)](this),window[z(0x1c7)]('keyup',this[z(0x1cb)]),window[z(0x1c7)](z(0x1b1),this[z(0x19e)]),window[z(0x1c7)](z(0x1ae),this[z(0x1b7)]),setTimeout(()=>{const A=z;if(!ContextMenu['_openedContextMenus'][A(0x197)](this))return;window[A(0x1c7)](A(0x1e5),this['_windowDown']);},0x96);}[p(0x19e)](){const B=p;this[B(0x1d5)]();}[p(0x1b7)](c){const C=p;c[C(0x1bf)]();if(!(c['target']instanceof Node)||!this['_menuElement']['contains'](c['target']))this[C(0x1d5)]();return![];}['_windowKeyUp'](c){const D=p;c[D(0x1d6)]===D(0x1b2)&&this[D(0x1d5)]();}static[p(0x1c9)](c,d,e,f){const E=p;let g=new ContextMenu(c,e,f);return g[E(0x1e7)](d),g;}['close'](){const F=p;this[F(0x195)](this['_menuElement']),this[F(0x1c8)](this[F(0x1d7)]),this['_menuElement'][F(0x1de)](),window[F(0x1cc)](F(0x1ae),this[F(0x1b7)]),window[F(0x1cc)](F(0x1b1),this[F(0x19e)]),window[F(0x1cc)]('keyup',this[F(0x1cb)]),setTimeout(()=>window[F(0x1cc)](F(0x1e5),this[F(0x1b7)]),0xa),ContextMenu[F(0x1bc)]['delete'](this);}static[p(0x1ed)](){const G=p;for(const d of ContextMenu[G(0x1bc)][G(0x1c1)]())d[G(0x1d5)]();}['configurePopoverSubmenu'](c){const H=p;c[H(0x1b4)][H(0x1e0)]('context_menu_submenu_popover'),c[H(0x194)]('popover','manual');}[p(0x1a0)](c){const I=p;if(c[I(0x19f)]==null)return;let d=!![];for(let e of c['parentElement'][I(0x1cf)]){if(d)e['classList'][I(0x1e0)](I(0x1e2));else e[I(0x1b4)]['remove']('context_menu_marked');if(e==c)d=![];}}[p(0x1a8)](c){if(c['parentElement']==null)return;for(const d of c['parentElement']['children']){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const J=p,d=c['querySelectorAll'](J(0x1ad));for(const e of d){this['hidePopover'](e);}}[p(0x1a3)](c,d){this['showPopover'](d),this['positionSubmenuPopover'](c,d);}['showPopover'](c){const K=p;if(this['isPopoverOpen'](c))return;c[K(0x1f0)]();}['hidePopover'](c){const L=p;if(c==null||!this[L(0x1a5)](c))return;c['hidePopover']();}[p(0x1a5)](c){return c['matches'](':popover-open');}['positionMenu'](c,d,e,f){const M=p,g=c['offsetWidth']+0x4,h=c[M(0x1ee)]+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style']['left']=Math['max'](0x0,Math['min'](m,window[M(0x19d)]-g))+'px',c['style']['top']=Math['max'](0x0,Math[M(0x1d9)](n,window['innerHeight']-h))+'px';}['positionSubmenuPopover'](c,d){const N=p,e=c[N(0x1b5)](),f=d[N(0x1b5)](),g=d[N(0x1c6)]||f['width'],h=d['offsetHeight']||f['height'],i=window[N(0x19d)]-e[N(0x1b9)],j=e[N(0x1ec)];let k=e[N(0x1b9)];i<g&&j>i&&(k=e[N(0x1ec)]-g);const l=window[N(0x1ab)]-e['top'],m=e[N(0x1d8)];let n=e['top'];l<h&&m>l&&(n=e[N(0x1d8)]-h),d[N(0x1cd)]['left']=Math[N(0x198)](0x0,Math['min'](k,window['innerWidth']-g))+'px',d['style'][N(0x1e9)]=Math[N(0x198)](0x0,Math['min'](n,window['innerHeight']-h))+'px',d[N(0x1cd)]['right']=N(0x1be),d['style']['bottom']='auto';}}function a(){const O=['openPopoverSubmenu','6RBnXzR','isPopoverOpen','mouseOffset','228205nAzXyG','closeSiblingSubmenus','context_menu_icon_span','6505597LThvJN','innerHeight','stopPropagation','ul[popover]','mousedown','menu','9237608zcvvHG','resize','Escape','popover','classList','getBoundingClientRect','configurePopoverSubmenu','_windowDown','_contextMenuCss','right','mouseup','reload','_openedContextMenus','defaultIcon','auto','preventDefault','checked','values','adoptedStyleSheets','2217776yBSUQI','bind','div','offsetWidth','addEventListener','hidePopover','show','body','_windowKeyUp','removeEventListener','style','637756ikEScP','children','innerHTML','options','click','context_menu','201546PjSPYV','close','key','_menuElement','bottom','min','context_menu_sub_span','undo','appendChild','action','remove','&#155;','add','8lSTIln','context_menu_marked','shadowRoot','context_menu_divider','contextmenu','disabled','display','context','top','icon','manual','left','closeAll','offsetHeight','forEach','showPopover','mode','setAttribute','hideDescendantSubmenus','className','has','max','clientY','span','mouseenter','createElement','innerWidth','_windowResize','parentElement','markUndoItems','27417168TVHMRC','count'];a=function(){return O;};return a();}