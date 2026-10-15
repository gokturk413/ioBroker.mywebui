const p=b;function a(){const N=[':popover-open','addEventListener','_windowDown','3939148nsBRXE','_windowKeyUp','649090StEhHu','delete','parentElement','13130qLrYdc','forEach','innerHTML','reload','height','className','style','context_menu_','count','checked','createElement','context_menu_marked','clientX','getBoundingClientRect','preventDefault','mouseOffset','right','12162bOREDM','div','bind','innerHeight','mousedown','appendChild','_contextMenuCss','clientY','manual','target','span','close','add','context_menu_display','bottom','contextmenu','749ctWwyr','44456gjiIYx','closeSiblingSubmenus','configurePopoverSubmenu','isPopoverOpen','options','left','1195jvyZXH','showPopover','max','hideDescendantSubmenus','153mzkRWz','1489815SdpmTc','offsetWidth','mouseup','action','_openedContextMenus','hidePopover','context_menu_icon_span','defaultIcon','has','contains','mouseenter','positionSubmenuPopover','adoptedStyleSheets','popover','removeEventListener','setAttribute','auto','innerWidth','title','824320VykyvZ','_menuElement','children','menu','openPopoverSubmenu','disabled','resize','top','icon','mode','keyup','stopPropagation','indexOf','positionMenu','_windowResize','context'];a=function(){return N;};return a();}(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x21f))/0x1+parseInt(o(0x1dc))/0x2+-parseInt(o(0x20c))/0x3+parseInt(o(0x1da))/0x4+-parseInt(o(0x207))/0x5*(parseInt(o(0x1f0))/0x6)+parseInt(o(0x200))/0x7*(-parseInt(o(0x201))/0x8)+-parseInt(o(0x20b))/0x9*(-parseInt(o(0x1df))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8dadc));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1ce;const e=a();let f=e[c];return f;}export class ContextMenu{static [p(0x1f6)]=css`
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
	  }`;static [p(0x1e7)]=0x0;static ['_openedContextMenus']=new Set();[p(0x222)];[p(0x205)];['context'];['num'];['_menuElement'];constructor(c,d,e){const q=p;this['num']=ContextMenu['count']++,this[q(0x222)]=c,this['options']=d,this[q(0x1d6)]=e,this[q(0x1e2)](),this['_windowDown']=this['_windowDown']['bind'](this),this[q(0x1db)]=this[q(0x1db)][q(0x1f2)](this),this[q(0x1d5)]=this[q(0x1d5)]['bind'](this);}['reload'](){const r=p;let c=this['options']?.['shadowRoot']??document;if(this['_menuElement']==null){this[r(0x220)]=document['createElement'](r(0x1f1)),this['_menuElement']['className']='context_menu',this[r(0x220)]['id']=r(0x1e6)+this['num'],this[r(0x220)]['setAttribute'](r(0x219),r(0x1f8));if(c===document)document['body'][r(0x1f5)](this[r(0x220)]);else c[r(0x1f5)](this['_menuElement']);}this['_menuElement']['innerHTML']='',c[r(0x218)][r(0x1d3)](ContextMenu['_contextMenuCss'])<0x0&&(c['adoptedStyleSheets']=[...c['adoptedStyleSheets'],ContextMenu[r(0x1f6)]]),this[r(0x220)][r(0x1f5)](this['renderLevel'](this['menu']));}['renderLevel'](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x1e0)](f=>{const t=s;if(f[t(0x21e)]!=='-'){if(e){let k=document['createElement']('li');k['className']='context_menu_divider',e=![],d['appendChild'](k);}let g=document[t(0x1e9)]('li'),h=document[t(0x1e9)](t(0x1fa));h['className']=t(0x212);if(f[t(0x1e8)]===!![])h[t(0x1e1)]='✔';else(f[t(0x1cf)]??'')!=''?h['innerHTML']=f['icon']??'':h[t(0x1e1)]=this['options']?.[t(0x213)]??'';let i=document[t(0x1e9)]('span');i[t(0x1e4)]='context_menu_text',i[t(0x1e1)]=f[t(0x21e)]??'';let j=document[t(0x1e9)](t(0x1fa));j[t(0x1e4)]='context_menu_sub_span';f[t(0x221)]!=null&&(j[t(0x1e1)]=this[t(0x205)]?.['subIcon']??'&#155;');g['appendChild'](h),g[t(0x1f5)](i),g[t(0x1f5)](j);if(f['disabled'])g['setAttribute'](t(0x224),'');else{if(f['checkable'])g[t(0x1d8)]('click',l=>{const u=t;l['stopPropagation'](),l[u(0x1ed)](),f[u(0x1e8)]=!f[u(0x1e8)],h[u(0x1e1)]=f['checked']?'✔':f[u(0x1cf)]??this['options']?.[u(0x213)]??'';if(f[u(0x20f)])f['action'](l,f,this['context'],this);});else{if(f['action'])g[t(0x1d8)]('click',l=>{const v=t;l[v(0x1d2)](),l['preventDefault'](),f[v(0x20f)]?.(l,f,this['context'],this),this['close']();});}this['options']?.['mode']=='undo'&&g['addEventListener'](t(0x20e),l=>{const w=t;l[w(0x1d2)](),f[w(0x20f)]?.(l,f,this['context'],this),this['close']();});g[t(0x1d8)]('mouseenter',()=>{const x=t;this[x(0x202)](g),this['options']?.[x(0x1d0)]=='undo'&&this['markUndoItems'](g);});if(f['children']!=null){let l=this['renderLevel'](f['children']);this[t(0x203)](l),g[t(0x1f5)](l),g['addEventListener'](t(0x216),()=>{const y=t;this[y(0x223)](g,l);});}}d['appendChild'](g);}else e=!![];}),d;}['display'](c){const z=p;let d=this['_menuElement'],e=this['options']?.[z(0x1ee)]!=null?this['options']['mouseOffset']:0x2;this[z(0x208)](d),this[z(0x1d4)](d,c[z(0x1eb)],c[z(0x1f7)],e),d['classList']['add'](z(0x1fd)),c['preventDefault'](),ContextMenu[z(0x210)][z(0x1fc)](this),window['addEventListener']('keyup',this['_windowKeyUp']),window['addEventListener'](z(0x225),this[z(0x1d5)]),window['addEventListener']('mousedown',this['_windowDown']),setTimeout(()=>{const A=z;if(!ContextMenu['_openedContextMenus'][A(0x214)](this))return;window[A(0x1d8)](A(0x1ff),this['_windowDown']);},0x96);}[p(0x1d5)](){this['close']();}['_windowDown'](c){const B=p;c['preventDefault']();if(!(c[B(0x1f9)]instanceof Node)||!this['_menuElement'][B(0x215)](c[B(0x1f9)]))this['close']();return![];}['_windowKeyUp'](c){c['key']==='Escape'&&this['close']();}static['show'](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}[p(0x1fb)](){const C=p;this[C(0x20a)](this['_menuElement']),this[C(0x211)](this['_menuElement']),this['_menuElement']['remove'](),window['removeEventListener'](C(0x1f4),this['_windowDown']),window[C(0x21a)]('resize',this[C(0x1d5)]),window['removeEventListener'](C(0x1d1),this[C(0x1db)]),setTimeout(()=>window['removeEventListener']('contextmenu',this[C(0x1d9)]),0xa),ContextMenu['_openedContextMenus'][C(0x1dd)](this);}static['closeAll'](){const D=p;for(const d of ContextMenu[D(0x210)]['values']())d['close']();}['configurePopoverSubmenu'](c){const E=p;c['classList'][E(0x1fc)]('context_menu_submenu_popover'),c[E(0x21b)](E(0x219),'manual');}['markUndoItems'](c){const F=p;if(c[F(0x1de)]==null)return;let d=!![];for(let e of c['parentElement']['children']){if(d)e['classList'][F(0x1fc)](F(0x1ea));else e['classList']['remove'](F(0x1ea));if(e==c)d=![];}}[p(0x202)](c){const G=p;if(c[G(0x1de)]==null)return;for(const d of c[G(0x1de)][G(0x221)]){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const d=c['querySelectorAll']('ul[popover]');for(const e of d){this['hidePopover'](e);}}[p(0x223)](c,d){const H=p;this['showPopover'](d),this[H(0x217)](c,d);}[p(0x208)](c){const I=p;if(this[I(0x204)](c))return;c['showPopover']();}[p(0x211)](c){const J=p;if(c==null||!this[J(0x204)](c))return;c['hidePopover']();}['isPopoverOpen'](c){const K=p;return c['matches'](K(0x1d7));}['positionMenu'](c,d,e,f){const L=p,g=c['offsetWidth']+0x4,h=c['offsetHeight']+0x4,i=window['innerWidth']-d,j=d,k=window[L(0x1f3)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style'][L(0x206)]=Math[L(0x209)](0x0,Math['min'](m,window[L(0x21d)]-g))+'px',c[L(0x1e5)][L(0x1ce)]=Math[L(0x209)](0x0,Math['min'](n,window[L(0x1f3)]-h))+'px';}[p(0x217)](c,d){const M=p,e=c[M(0x1ec)](),f=d['getBoundingClientRect'](),g=d[M(0x20d)]||f['width'],h=d['offsetHeight']||f[M(0x1e3)],i=window[M(0x21d)]-e[M(0x1ef)],j=e[M(0x206)];let k=e[M(0x1ef)];i<g&&j>i&&(k=e[M(0x206)]-g);const l=window[M(0x1f3)]-e[M(0x1ce)],m=e[M(0x1fe)];let n=e[M(0x1ce)];l<h&&m>l&&(n=e['bottom']-h),d[M(0x1e5)][M(0x206)]=Math['max'](0x0,Math['min'](k,window['innerWidth']-g))+'px',d['style'][M(0x1ce)]=Math[M(0x209)](0x0,Math['min'](n,window['innerHeight']-h))+'px',d['style']['right']='auto',d['style']['bottom']=M(0x21c);}}