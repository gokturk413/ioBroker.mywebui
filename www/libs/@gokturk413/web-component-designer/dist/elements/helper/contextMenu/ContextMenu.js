function b(c,d){c=c-0x1d7;const e=a();let f=e[c];return f;}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x1fb))/0x1*(parseInt(o(0x21a))/0x2)+-parseInt(o(0x1f0))/0x3*(-parseInt(o(0x1f5))/0x4)+parseInt(o(0x21c))/0x5+-parseInt(o(0x1fe))/0x6*(-parseInt(o(0x226))/0x7)+-parseInt(o(0x1f6))/0x8+parseInt(o(0x219))/0x9+parseInt(o(0x1e9))/0xa*(-parseInt(o(0x1da))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x40761));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();[p(0x20f)];[p(0x204)];[p(0x20a)];['num'];[p(0x1dd)];constructor(c,d,e){const q=p;this[q(0x232)]=ContextMenu['count']++,this['menu']=c,this['options']=d,this[q(0x20a)]=e,this[q(0x1ee)](),this[q(0x1df)]=this['_windowDown'][q(0x229)](this),this['_windowKeyUp']=this[q(0x1dc)]['bind'](this),this['_windowResize']=this['_windowResize'][q(0x229)](this);}['reload'](){const r=p;let c=this[r(0x204)]?.['shadowRoot']??document;if(this[r(0x1dd)]==null){this[r(0x1dd)]=document['createElement']('div'),this[r(0x1dd)][r(0x21e)]='context_menu',this[r(0x1dd)]['id']='context_menu_'+this[r(0x232)],this['_menuElement'][r(0x1ef)]('popover',r(0x205));if(c===document)document[r(0x1fc)][r(0x21f)](this[r(0x1dd)]);else c[r(0x21f)](this['_menuElement']);}this['_menuElement']['innerHTML']='',c[r(0x218)][r(0x217)](ContextMenu['_contextMenuCss'])<0x0&&(c['adoptedStyleSheets']=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this[r(0x1dd)]['appendChild'](this[r(0x231)](this['menu']));}[p(0x231)](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x1ff)](f=>{const t=s;if(f[t(0x213)]!=='-'){if(e){let k=document['createElement']('li');k[t(0x21e)]=t(0x1db),e=![],d[t(0x21f)](k);}let g=document[t(0x1e1)]('li'),h=document['createElement'](t(0x214));h[t(0x21e)]='context_menu_icon_span';if(f[t(0x1f1)]===!![])h[t(0x1fa)]='✔';else(f[t(0x1e2)]??'')!=''?h['innerHTML']=f['icon']??'':h['innerHTML']=this[t(0x204)]?.['defaultIcon']??'';let i=document[t(0x1e1)](t(0x214));i[t(0x21e)]=t(0x1fd),i[t(0x1fa)]=f['title']??'';let j=document[t(0x1e1)](t(0x214));j['className']=t(0x220);f[t(0x1f7)]!=null&&(j[t(0x1fa)]=this[t(0x204)]?.[t(0x1ed)]??'&#155;');g['appendChild'](h),g[t(0x21f)](i),g[t(0x21f)](j);if(f['disabled'])g['setAttribute']('disabled','');else{if(f[t(0x1d7)])g[t(0x1e7)](t(0x1d9),l=>{const u=t;l[u(0x224)](),l[u(0x1e4)](),f['checked']=!f[u(0x1f1)],h[u(0x1fa)]=f[u(0x1f1)]?'✔':f['icon']??this['options']?.[u(0x1e6)]??'';if(f['action'])f['action'](l,f,this[u(0x20a)],this);});else{if(f['action'])g['addEventListener']('click',l=>{const v=t;l[v(0x224)](),l['preventDefault'](),f[v(0x22d)]?.(l,f,this[v(0x20a)],this),this['close']();});}this['options']?.['mode']=='undo'&&g[t(0x1e7)]('mouseup',l=>{const w=t;l[w(0x224)](),f['action']?.(l,f,this['context'],this),this['close']();});g['addEventListener'](t(0x209),()=>{const x=t;this['closeSiblingSubmenus'](g),this['options']?.[x(0x221)]==x(0x200)&&this['markUndoItems'](g);});if(f[t(0x1f7)]!=null){let l=this['renderLevel'](f['children']);this['configurePopoverSubmenu'](l),g['appendChild'](l),g['addEventListener'](t(0x209),()=>{const y=t;this[y(0x1ec)](g,l);});}}d[t(0x21f)](g);}else e=!![];}),d;}['display'](c){const z=p;let d=this[z(0x1dd)],e=this['options']?.['mouseOffset']!=null?this[z(0x204)][z(0x22e)]:0x2;this[z(0x227)](d),this[z(0x201)](d,c['clientX'],c['clientY'],e),d['classList']['add'](z(0x1f9)),c['preventDefault'](),ContextMenu[z(0x1d8)]['add'](this),window['addEventListener'](z(0x20e),this[z(0x1dc)]),window[z(0x1e7)](z(0x20b),this['_windowResize']),window[z(0x1e7)]('mousedown',this['_windowDown']),setTimeout(()=>{const A=z;if(!ContextMenu['_openedContextMenus']['has'](this))return;window[A(0x1e7)]('contextmenu',this[A(0x1df)]);},0x96);}[p(0x1e8)](){const B=p;this[B(0x1de)]();}['_windowDown'](c){const C=p;c[C(0x1e4)]();if(!(c[C(0x22f)]instanceof Node)||!this[C(0x1dd)][C(0x225)](c['target']))this[C(0x1de)]();return![];}['_windowKeyUp'](c){c['key']==='Escape'&&this['close']();}static[p(0x234)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}['close'](){const D=p;this['hideDescendantSubmenus'](this['_menuElement']),this[D(0x207)](this['_menuElement']),this['_menuElement'][D(0x222)](),window['removeEventListener']('mousedown',this[D(0x1df)]),window[D(0x228)](D(0x20b),this[D(0x1e8)]),window[D(0x228)](D(0x20e),this[D(0x1dc)]),setTimeout(()=>window[D(0x228)]('contextmenu',this['_windowDown']),0xa),ContextMenu['_openedContextMenus']['delete'](this);}static[p(0x210)](){const E=p;for(const d of ContextMenu[E(0x1d8)][E(0x21b)]())d['close']();}[p(0x1f2)](c){const F=p;c['classList']['add']('context_menu_submenu_popover'),c['setAttribute'](F(0x1f8),F(0x205));}['markUndoItems'](c){const G=p;if(c[G(0x216)]==null)return;let d=!![];for(let e of c['parentElement'][G(0x1f7)]){if(d)e[G(0x208)]['add'](G(0x206));else e[G(0x208)]['remove'](G(0x206));if(e==c)d=![];}}[p(0x223)](c){const H=p;if(c[H(0x216)]==null)return;for(const d of c['parentElement']['children']){d!==c&&this[H(0x230)](d);}}[p(0x230)](c){const I=p,d=c[I(0x1eb)](I(0x1f4));for(const e of d){this[I(0x207)](e);}}[p(0x1ec)](c,d){const J=p;this[J(0x227)](d),this[J(0x215)](c,d);}['showPopover'](c){const K=p;if(this['isPopoverOpen'](c))return;c[K(0x227)]();}['hidePopover'](c){if(c==null||!this['isPopoverOpen'](c))return;c['hidePopover']();}[p(0x20c)](c){const L=p;return c[L(0x202)](L(0x22b));}[p(0x201)](c,d,e,f){const M=p,g=c[M(0x1e5)]+0x4,h=c[M(0x203)]+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[M(0x1ea)][M(0x22a)]=Math[M(0x1e0)](0x0,Math[M(0x1e3)](m,window['innerWidth']-g))+'px',c['style']['top']=Math[M(0x1e0)](0x0,Math['min'](n,window[M(0x233)]-h))+'px';}[p(0x215)](c,d){const N=p,e=c[N(0x211)](),f=d['getBoundingClientRect'](),g=d['offsetWidth']||f['width'],h=d['offsetHeight']||f['height'],i=window[N(0x21d)]-e['right'],j=e['left'];let k=e[N(0x20d)];i<g&&j>i&&(k=e['left']-g);const l=window[N(0x233)]-e[N(0x212)],m=e[N(0x1f3)];let n=e['top'];l<h&&m>l&&(n=e[N(0x1f3)]-h),d[N(0x1ea)]['left']=Math['max'](0x0,Math[N(0x1e3)](k,window['innerWidth']-g))+'px',d[N(0x1ea)]['top']=Math['max'](0x0,Math[N(0x1e3)](n,window['innerHeight']-h))+'px',d['style'][N(0x20d)]=N(0x22c),d[N(0x1ea)]['bottom']=N(0x22c);}}function a(){const O=['offsetHeight','options','manual','context_menu_marked','hidePopover','classList','mouseenter','context','resize','isPopoverOpen','right','keyup','menu','closeAll','getBoundingClientRect','top','title','span','positionSubmenuPopover','parentElement','indexOf','adoptedStyleSheets','2183121dPcyDZ','134990hGYVyx','values','2408350wALpze','innerWidth','className','appendChild','context_menu_sub_span','mode','remove','closeSiblingSubmenus','stopPropagation','contains','35zlIlpo','showPopover','removeEventListener','bind','left',':popover-open','auto','action','mouseOffset','target','hideDescendantSubmenus','renderLevel','num','innerHeight','show','checkable','_openedContextMenus','click','11zStDva','context_menu_divider','_windowKeyUp','_menuElement','close','_windowDown','max','createElement','icon','min','preventDefault','offsetWidth','defaultIcon','addEventListener','_windowResize','6565240YREiSb','style','querySelectorAll','openPopoverSubmenu','subIcon','reload','setAttribute','6izKkDM','checked','configurePopoverSubmenu','bottom','ul[popover]','689984hvXOYl','3659952YDHSIH','children','popover','context_menu_display','innerHTML','4KvKknF','body','context_menu_text','46608qRGDWa','forEach','undo','positionMenu','matches'];a=function(){return O;};return a();}