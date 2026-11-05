function b(c,d){c=c-0x196;const e=a();let f=e[c];return f;}const p=b;function a(){const P=['key','43175Wiyxvo','num','width','innerHTML','click','945mFxsyq','getBoundingClientRect','preventDefault','mousedown','span','auto','_windowDown','add','14iLZokN','3008222ehnMvc','max','adoptedStyleSheets','mode','&#155;','_windowResize','bottom','innerHeight','43379LbELzX','configurePopoverSubmenu','appendChild','hideDescendantSubmenus','right','action','positionSubmenuPopover','show','2482460SOdEhq','contains','target','1686396yHjbnu','context_menu_divider','body','top','context','indexOf','context_menu',':popover-open','addEventListener','matches','context_menu_marked','style','_windowKeyUp','title','has','offsetWidth','left','276wHbgdg','mouseenter','createElement','checkable','undo','parentElement','removeEventListener','setAttribute','clientY','checked','showPopover','delete','_menuElement','offsetHeight','options','22216CjOvQh','isPopoverOpen','icon','className','classList','markUndoItems','defaultIcon','display','context_menu_icon_span','renderLevel','keyup','manual','2804896nHZzgp','div','min','stopPropagation','reload','openPopoverSubmenu','menu','close','positionMenu','hidePopover','Escape','_contextMenuCss','bind','context_menu_text','children','innerWidth','disabled','context_menu_display','_openedContextMenus'];a=function(){return P;};return a();}(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x1ba))/0x1*(-parseInt(o(0x1b1))/0x2)+parseInt(o(0x1c5))/0x3+parseInt(o(0x1f1))/0x4+parseInt(o(0x1a4))/0x5*(parseInt(o(0x1d6))/0x6)+-parseInt(o(0x1b2))/0x7+-parseInt(o(0x1e5))/0x8*(parseInt(o(0x1a9))/0x9)+-parseInt(o(0x1c2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5e908));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static [p(0x19b)]=css`
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
	  }`;static ['count']=0x0;static [p(0x1a2)]=new Set();[p(0x196)];[p(0x1e4)];[p(0x1c9)];[p(0x1a5)];[p(0x1e2)];constructor(c,d,e){const q=p;this['num']=ContextMenu['count']++,this[q(0x196)]=c,this[q(0x1e4)]=d,this[q(0x1c9)]=e,this['reload'](),this[q(0x1af)]=this['_windowDown'][q(0x19c)](this),this[q(0x1d1)]=this['_windowKeyUp'][q(0x19c)](this),this[q(0x1b7)]=this['_windowResize'][q(0x19c)](this);}[p(0x1f5)](){const r=p;let c=this[r(0x1e4)]?.['shadowRoot']??document;if(this[r(0x1e2)]==null){this['_menuElement']=document[r(0x1d8)](r(0x1f2)),this['_menuElement']['className']=r(0x1cb),this[r(0x1e2)]['id']='context_menu_'+this[r(0x1a5)],this['_menuElement'][r(0x1dd)]('popover','manual');if(c===document)document[r(0x1c7)][r(0x1bc)](this['_menuElement']);else c[r(0x1bc)](this['_menuElement']);}this['_menuElement']['innerHTML']='',c['adoptedStyleSheets'][r(0x1ca)](ContextMenu[r(0x19b)])<0x0&&(c[r(0x1b4)]=[...c[r(0x1b4)],ContextMenu['_contextMenuCss']]),this[r(0x1e2)]['appendChild'](this[r(0x1ee)](this[r(0x196)]));}[p(0x1ee)](c){let d=document['createElement']('ul'),e=![];return c['forEach'](f=>{const s=b;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k[s(0x1e8)]=s(0x1c6),e=![],d[s(0x1bc)](k);}let g=document['createElement']('li'),h=document[s(0x1d8)](s(0x1ad));h[s(0x1e8)]=s(0x1ed);if(f[s(0x1df)]===!![])h[s(0x1a7)]='✔';else(f['icon']??'')!=''?h[s(0x1a7)]=f[s(0x1e7)]??'':h['innerHTML']=this[s(0x1e4)]?.[s(0x1eb)]??'';let i=document['createElement'](s(0x1ad));i['className']=s(0x19d),i[s(0x1a7)]=f[s(0x1d2)]??'';let j=document[s(0x1d8)](s(0x1ad));j['className']='context_menu_sub_span';f[s(0x19e)]!=null&&(j['innerHTML']=this[s(0x1e4)]?.['subIcon']??s(0x1b6));g['appendChild'](h),g['appendChild'](i),g[s(0x1bc)](j);if(f[s(0x1a0)])g['setAttribute'](s(0x1a0),'');else{if(f[s(0x1d9)])g['addEventListener'](s(0x1a8),l=>{const t=s;l[t(0x1f4)](),l[t(0x1ab)](),f[t(0x1df)]=!f[t(0x1df)],h[t(0x1a7)]=f[t(0x1df)]?'✔':f['icon']??this[t(0x1e4)]?.['defaultIcon']??'';if(f[t(0x1bf)])f[t(0x1bf)](l,f,this[t(0x1c9)],this);});else{if(f['action'])g['addEventListener']('click',l=>{const u=s;l[u(0x1f4)](),l['preventDefault'](),f['action']?.(l,f,this['context'],this),this['close']();});}this['options']?.['mode']==s(0x1da)&&g[s(0x1cd)]('mouseup',l=>{const v=s;l['stopPropagation'](),f[v(0x1bf)]?.(l,f,this[v(0x1c9)],this),this[v(0x197)]();});g['addEventListener'](s(0x1d7),()=>{const w=s;this['closeSiblingSubmenus'](g),this[w(0x1e4)]?.[w(0x1b5)]=='undo'&&this['markUndoItems'](g);});if(f['children']!=null){let l=this[s(0x1ee)](f[s(0x19e)]);this['configurePopoverSubmenu'](l),g[s(0x1bc)](l),g['addEventListener']('mouseenter',()=>{const x=s;this[x(0x1f6)](g,l);});}}d[s(0x1bc)](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this[y(0x1e2)],e=this[y(0x1e4)]?.['mouseOffset']!=null?this[y(0x1e4)]['mouseOffset']:0x2;this[y(0x1e0)](d),this[y(0x198)](d,c['clientX'],c[y(0x1de)],e),d['classList']['add'](y(0x1a1)),c['preventDefault'](),ContextMenu['_openedContextMenus'][y(0x1b0)](this),window[y(0x1cd)](y(0x1ef),this[y(0x1d1)]),window['addEventListener']('resize',this['_windowResize']),window[y(0x1cd)](y(0x1ac),this[y(0x1af)]),setTimeout(()=>{const z=y;if(!ContextMenu[z(0x1a2)][z(0x1d3)](this))return;window[z(0x1cd)]('contextmenu',this['_windowDown']);},0x96);}['_windowResize'](){const A=p;this[A(0x197)]();}['_windowDown'](c){const B=p;c[B(0x1ab)]();if(!(c[B(0x1c4)]instanceof Node)||!this[B(0x1e2)][B(0x1c3)](c['target']))this['close']();return![];}[p(0x1d1)](c){const C=p;c[C(0x1a3)]===C(0x19a)&&this['close']();}static[p(0x1c1)](c,d,e,f){const D=p;let g=new ContextMenu(c,e,f);return g[D(0x1ec)](d),g;}[p(0x197)](){const E=p;this['hideDescendantSubmenus'](this['_menuElement']),this[E(0x199)](this[E(0x1e2)]),this[E(0x1e2)]['remove'](),window['removeEventListener']('mousedown',this[E(0x1af)]),window[E(0x1dc)]('resize',this['_windowResize']),window[E(0x1dc)](E(0x1ef),this['_windowKeyUp']),setTimeout(()=>window['removeEventListener']('contextmenu',this[E(0x1af)]),0xa),ContextMenu[E(0x1a2)][E(0x1e1)](this);}static['closeAll'](){const F=p;for(const d of ContextMenu[F(0x1a2)]['values']())d[F(0x197)]();}[p(0x1bb)](c){const G=p;c[G(0x1e9)]['add']('context_menu_submenu_popover'),c['setAttribute']('popover',G(0x1f0));}[p(0x1ea)](c){const H=p;if(c[H(0x1db)]==null)return;let d=!![];for(let e of c[H(0x1db)][H(0x19e)]){if(d)e[H(0x1e9)][H(0x1b0)](H(0x1cf));else e[H(0x1e9)]['remove']('context_menu_marked');if(e==c)d=![];}}['closeSiblingSubmenus'](c){const I=p;if(c[I(0x1db)]==null)return;for(const d of c[I(0x1db)]['children']){d!==c&&this[I(0x1bd)](d);}}[p(0x1bd)](c){const d=c['querySelectorAll']('ul[popover]');for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){const J=p;this[J(0x1e0)](d),this[J(0x1c0)](c,d);}[p(0x1e0)](c){const K=p;if(this['isPopoverOpen'](c))return;c[K(0x1e0)]();}['hidePopover'](c){const L=p;if(c==null||!this[L(0x1e6)](c))return;c['hidePopover']();}['isPopoverOpen'](c){const M=p;return c[M(0x1ce)](M(0x1cc));}[p(0x198)](c,d,e,f){const N=p,g=c[N(0x1d4)]+0x4,h=c['offsetHeight']+0x4,i=window[N(0x19f)]-d,j=d,k=window[N(0x1b9)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[N(0x1d0)][N(0x1d5)]=Math[N(0x1b3)](0x0,Math[N(0x1f3)](m,window[N(0x19f)]-g))+'px',c['style'][N(0x1c8)]=Math['max'](0x0,Math[N(0x1f3)](n,window['innerHeight']-h))+'px';}['positionSubmenuPopover'](c,d){const O=p,e=c[O(0x1aa)](),f=d[O(0x1aa)](),g=d[O(0x1d4)]||f[O(0x1a6)],h=d[O(0x1e3)]||f['height'],i=window[O(0x19f)]-e[O(0x1be)],j=e[O(0x1d5)];let k=e['right'];i<g&&j>i&&(k=e['left']-g);const l=window[O(0x1b9)]-e['top'],m=e[O(0x1b8)];let n=e[O(0x1c8)];l<h&&m>l&&(n=e[O(0x1b8)]-h),d['style'][O(0x1d5)]=Math['max'](0x0,Math[O(0x1f3)](k,window[O(0x19f)]-g))+'px',d['style'][O(0x1c8)]=Math['max'](0x0,Math['min'](n,window['innerHeight']-h))+'px',d[O(0x1d0)][O(0x1be)]=O(0x1ae),d['style'][O(0x1b8)]='auto';}}