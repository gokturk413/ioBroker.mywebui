function a(){const N=['menu','right','options','14PfTokr','classList','manual','contains','_windowKeyUp','num','4189365QOpIpm','innerHeight','left','min','_menuElement','resize','count','indexOf','hidePopover','_windowDown','values','innerHTML','auto','4949560hCxaBs','bind',':popover-open','querySelectorAll','removeEventListener','closeSiblingSubmenus','add','forEach','icon','positionMenu','subIcon','disabled','max','mode','mouseenter','76373UtOkwU','defaultIcon','children','has','popover','configurePopoverSubmenu','action','click','isPopoverOpen','5539800uVwesK','offsetHeight','33248vJELvA','_contextMenuCss','checked','shadowRoot','close','innerWidth','target','body','356481zaHRnH','appendChild','adoptedStyleSheets','_windowResize','64povUaj','hideDescendantSubmenus','showPopover','5XUWQJC','context_menu','className','span','addEventListener','8wwqLzz','context','mouseOffset','context_menu_divider','1812qpGXLr','display','parentElement','createElement','width','contextmenu','_openedContextMenus','markUndoItems','bottom','setAttribute','renderLevel','top','1500672ywoTah','remove','context_menu_text','style'];a=function(){return N;};return a();}function b(c,d){c=c-0x84;const e=a();let f=e[c];return f;}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0xa7))/0x1*(parseInt(o(0x9b))/0x2)+-parseInt(o(0xa3))/0x3*(parseInt(o(0xaf))/0x4)+parseInt(o(0xaa))/0x5*(-parseInt(o(0xbf))/0x6)+parseInt(o(0xc6))/0x7*(parseInt(o(0x99))/0x8)+-parseInt(o(0xcc))/0x9+parseInt(o(0xd9))/0xa+-parseInt(o(0x90))/0xb*(-parseInt(o(0xb3))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xde708));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static [p(0x9c)]=css`
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
	  }`;static ['count']=0x0;static [p(0xb9)]=new Set();[p(0xc3)];['options'];['context'];['num'];['_menuElement'];constructor(c,d,e){const q=p;this[q(0xcb)]=ContextMenu[q(0xd2)]++,this['menu']=c,this[q(0xc5)]=d,this[q(0xb0)]=e,this['reload'](),this['_windowDown']=this[q(0xd5)][q(0xda)](this),this[q(0xca)]=this[q(0xca)][q(0xda)](this),this['_windowResize']=this['_windowResize'][q(0xda)](this);}['reload'](){const r=p;let c=this['options']?.[r(0x9e)]??document;if(this[r(0xd0)]==null){this['_menuElement']=document['createElement']('div'),this[r(0xd0)]['className']=r(0xab),this['_menuElement']['id']='context_menu_'+this[r(0xcb)],this['_menuElement'][r(0xbc)](r(0x94),r(0xc8));if(c===document)document[r(0xa2)][r(0xa4)](this[r(0xd0)]);else c[r(0xa4)](this[r(0xd0)]);}this[r(0xd0)]['innerHTML']='',c['adoptedStyleSheets'][r(0xd3)](ContextMenu['_contextMenuCss'])<0x0&&(c['adoptedStyleSheets']=[...c[r(0xa5)],ContextMenu[r(0x9c)]]),this['_menuElement']['appendChild'](this[r(0xbd)](this[r(0xc3)]));}[p(0xbd)](c){const s=p;let d=document[s(0xb6)]('ul'),e=![];return c[s(0x88)](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k['className']=t(0xb2),e=![],d['appendChild'](k);}let g=document['createElement']('li'),h=document['createElement']('span');h[t(0xac)]='context_menu_icon_span';if(f[t(0x9d)]===!![])h[t(0xd7)]='✔';else(f['icon']??'')!=''?h[t(0xd7)]=f[t(0x89)]??'':h[t(0xd7)]=this[t(0xc5)]?.['defaultIcon']??'';let i=document[t(0xb6)]('span');i['className']=t(0xc1),i[t(0xd7)]=f['title']??'';let j=document[t(0xb6)](t(0xad));j['className']='context_menu_sub_span';f['children']!=null&&(j['innerHTML']=this['options']?.[t(0x8b)]??'&#155;');g['appendChild'](h),g[t(0xa4)](i),g['appendChild'](j);if(f[t(0x8c)])g[t(0xbc)]('disabled','');else{if(f['checkable'])g[t(0xae)](t(0x97),l=>{const u=t;l['stopPropagation'](),l['preventDefault'](),f['checked']=!f['checked'],h['innerHTML']=f['checked']?'✔':f['icon']??this['options']?.[u(0x91)]??'';if(f['action'])f[u(0x96)](l,f,this['context'],this);});else{if(f['action'])g['addEventListener'](t(0x97),l=>{const v=t;l['stopPropagation'](),l['preventDefault'](),f['action']?.(l,f,this['context'],this),this[v(0x9f)]();});}this['options']?.[t(0x8e)]=='undo'&&g['addEventListener']('mouseup',l=>{const w=t;l['stopPropagation'](),f[w(0x96)]?.(l,f,this['context'],this),this['close']();});g['addEventListener']('mouseenter',()=>{const x=t;this['closeSiblingSubmenus'](g),this['options']?.['mode']=='undo'&&this[x(0xba)](g);});if(f[t(0x92)]!=null){let l=this['renderLevel'](f['children']);this['configurePopoverSubmenu'](l),g[t(0xa4)](l),g[t(0xae)](t(0x8f),()=>{this['openPopoverSubmenu'](g,l);});}}d[t(0xa4)](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this['_menuElement'],e=this['options']?.[y(0xb1)]!=null?this['options'][y(0xb1)]:0x2;this[y(0xa9)](d),this['positionMenu'](d,c['clientX'],c['clientY'],e),d['classList']['add']('context_menu_display'),c['preventDefault'](),ContextMenu['_openedContextMenus'][y(0x87)](this),window['addEventListener']('keyup',this[y(0xca)]),window['addEventListener'](y(0xd1),this[y(0xa6)]),window[y(0xae)]('mousedown',this['_windowDown']),setTimeout(()=>{const z=y;if(!ContextMenu[z(0xb9)][z(0x93)](this))return;window['addEventListener'](z(0xb8),this['_windowDown']);},0x96);}[p(0xa6)](){this['close']();}[p(0xd5)](c){const A=p;c['preventDefault']();if(!(c[A(0xa1)]instanceof Node)||!this['_menuElement'][A(0xc9)](c[A(0xa1)]))this['close']();return![];}['_windowKeyUp'](c){c['key']==='Escape'&&this['close']();}static['show'](c,d,e,f){const B=p;let g=new ContextMenu(c,e,f);return g[B(0xb4)](d),g;}[p(0x9f)](){const C=p;this['hideDescendantSubmenus'](this['_menuElement']),this[C(0xd4)](this[C(0xd0)]),this['_menuElement'][C(0xc0)](),window['removeEventListener']('mousedown',this['_windowDown']),window[C(0x85)](C(0xd1),this[C(0xa6)]),window[C(0x85)]('keyup',this[C(0xca)]),setTimeout(()=>window[C(0x85)](C(0xb8),this[C(0xd5)]),0xa),ContextMenu[C(0xb9)]['delete'](this);}static['closeAll'](){const D=p;for(const d of ContextMenu['_openedContextMenus'][D(0xd6)]())d['close']();}[p(0x95)](c){const E=p;c[E(0xc7)][E(0x87)]('context_menu_submenu_popover'),c[E(0xbc)]('popover',E(0xc8));}['markUndoItems'](c){const F=p;if(c['parentElement']==null)return;let d=!![];for(let e of c['parentElement'][F(0x92)]){if(d)e[F(0xc7)]['add']('context_menu_marked');else e[F(0xc7)]['remove']('context_menu_marked');if(e==c)d=![];}}[p(0x86)](c){const G=p;if(c['parentElement']==null)return;for(const d of c[G(0xb5)][G(0x92)]){d!==c&&this[G(0xa8)](d);}}['hideDescendantSubmenus'](c){const H=p,d=c[H(0x84)]('ul[popover]');for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){this['showPopover'](d),this['positionSubmenuPopover'](c,d);}['showPopover'](c){const I=p;if(this[I(0x98)](c))return;c['showPopover']();}['hidePopover'](c){const J=p;if(c==null||!this[J(0x98)](c))return;c[J(0xd4)]();}[p(0x98)](c){const K=p;return c['matches'](K(0xdb));}[p(0x8a)](c,d,e,f){const L=p,g=c['offsetWidth']+0x4,h=c[L(0x9a)]+0x4,i=window[L(0xa0)]-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style']['left']=Math['max'](0x0,Math['min'](m,window['innerWidth']-g))+'px',c['style'][L(0xbe)]=Math['max'](0x0,Math['min'](n,window[L(0xcd)]-h))+'px';}['positionSubmenuPopover'](c,d){const M=p,e=c['getBoundingClientRect'](),f=d['getBoundingClientRect'](),g=d['offsetWidth']||f[M(0xb7)],h=d['offsetHeight']||f['height'],i=window[M(0xa0)]-e[M(0xc4)],j=e[M(0xce)];let k=e['right'];i<g&&j>i&&(k=e[M(0xce)]-g);const l=window[M(0xcd)]-e[M(0xbe)],m=e['bottom'];let n=e[M(0xbe)];l<h&&m>l&&(n=e['bottom']-h),d[M(0xc2)][M(0xce)]=Math[M(0x8d)](0x0,Math[M(0xcf)](k,window['innerWidth']-g))+'px',d['style'][M(0xbe)]=Math[M(0x8d)](0x0,Math['min'](n,window[M(0xcd)]-h))+'px',d[M(0xc2)][M(0xc4)]='auto',d['style'][M(0xbb)]=M(0xd8);}}