const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x1f9))/0x1+parseInt(o(0x21f))/0x2*(-parseInt(o(0x1e1))/0x3)+-parseInt(o(0x1f3))/0x4+-parseInt(o(0x1e4))/0x5+-parseInt(o(0x1ff))/0x6+-parseInt(o(0x22e))/0x7*(parseInt(o(0x224))/0x8)+parseInt(o(0x1e9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa1049));function b(c,d){c=c-0x1df;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';function a(){const P=['checkable','814634pFlxYA','_menuElement','preventDefault','mode','clientY','792HJRuoJ','close','&#155;','forEach','popover','className','parentElement','removeEventListener','min','bind','38619xzGLqm','children','adoptedStyleSheets','count','keyup','context_menu_sub_span','mousedown','key','action','_windowDown','showPopover','width','3mYcxPv','context_menu_icon_span','openPopoverSubmenu','1818865kVKqPh','context_menu_marked','target','undo','options','27909918OkCRDG','num','span','menu','innerHTML','getBoundingClientRect','checked','context_menu_text','_contextMenuCss','ul[popover]','559416MgpDkj','max','context','_openedContextMenus','innerWidth','show','667695VHQPTW','add','offsetWidth','manual','renderLevel','resize','1900506BJJgJr','click','isPopoverOpen','configurePopoverSubmenu','style','_windowResize','mouseOffset','contextmenu','classList','querySelectorAll','mouseup','display','shadowRoot','top','auto','setAttribute','left','createElement','icon','hidePopover','indexOf','right','_windowKeyUp','title','context_menu_submenu_popover','body','addEventListener','closeAll','positionSubmenuPopover','stopPropagation','appendChild'];a=function(){return P;};return a();}export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x231)]=0x0;static [p(0x1f6)]=new Set();['menu'];['options'];['context'];[p(0x1ea)];[p(0x220)];constructor(c,d,e){const q=p;this[q(0x1ea)]=ContextMenu['count']++,this[q(0x1ec)]=c,this[q(0x1e8)]=d,this['context']=e,this['reload'](),this[q(0x237)]=this[q(0x237)]['bind'](this),this[q(0x215)]=this['_windowKeyUp'][q(0x22d)](this),this[q(0x204)]=this[q(0x204)]['bind'](this);}['reload'](){const r=p;let c=this['options']?.[r(0x20b)]??document;if(this['_menuElement']==null){this['_menuElement']=document['createElement']('div'),this['_menuElement']['className']='context_menu',this[r(0x220)]['id']='context_menu_'+this[r(0x1ea)],this[r(0x220)][r(0x20e)](r(0x228),r(0x1fc));if(c===document)document[r(0x218)][r(0x21d)](this['_menuElement']);else c[r(0x21d)](this['_menuElement']);}this['_menuElement'][r(0x1ed)]='',c[r(0x230)][r(0x213)](ContextMenu[r(0x1f1)])<0x0&&(c[r(0x230)]=[...c['adoptedStyleSheets'],ContextMenu[r(0x1f1)]]),this[r(0x220)]['appendChild'](this[r(0x1fd)](this['menu']));}[p(0x1fd)](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x227)](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document[t(0x210)]('li');k['className']='context_menu_divider',e=![],d['appendChild'](k);}let g=document[t(0x210)]('li'),h=document[t(0x210)]('span');h['className']=t(0x1e2);if(f['checked']===!![])h['innerHTML']='✔';else(f[t(0x211)]??'')!=''?h['innerHTML']=f['icon']??'':h['innerHTML']=this[t(0x1e8)]?.['defaultIcon']??'';let i=document[t(0x210)]('span');i[t(0x229)]=t(0x1f0),i['innerHTML']=f[t(0x216)]??'';let j=document[t(0x210)](t(0x1eb));j['className']=t(0x233);f['children']!=null&&(j['innerHTML']=this['options']?.['subIcon']??t(0x226));g['appendChild'](h),g[t(0x21d)](i),g['appendChild'](j);if(f['disabled'])g['setAttribute']('disabled','');else{if(f[t(0x21e)])g[t(0x219)](t(0x200),l=>{const u=t;l[u(0x21c)](),l[u(0x221)](),f['checked']=!f['checked'],h[u(0x1ed)]=f[u(0x1ef)]?'✔':f[u(0x211)]??this[u(0x1e8)]?.['defaultIcon']??'';if(f[u(0x236)])f['action'](l,f,this[u(0x1f5)],this);});else{if(f['action'])g[t(0x219)]('click',l=>{const v=t;l[v(0x21c)](),l['preventDefault'](),f['action']?.(l,f,this[v(0x1f5)],this),this['close']();});}this[t(0x1e8)]?.[t(0x222)]==t(0x1e7)&&g[t(0x219)](t(0x209),l=>{const w=t;l[w(0x21c)](),f['action']?.(l,f,this['context'],this),this[w(0x225)]();});g[t(0x219)]('mouseenter',()=>{const x=t;this['closeSiblingSubmenus'](g),this[x(0x1e8)]?.[x(0x222)]=='undo'&&this['markUndoItems'](g);});if(f['children']!=null){let l=this[t(0x1fd)](f['children']);this['configurePopoverSubmenu'](l),g['appendChild'](l),g['addEventListener']('mouseenter',()=>{this['openPopoverSubmenu'](g,l);});}}d['appendChild'](g);}else e=!![];}),d;}[p(0x20a)](c){const y=p;let d=this[y(0x220)],e=this[y(0x1e8)]?.[y(0x205)]!=null?this['options'][y(0x205)]:0x2;this['showPopover'](d),this['positionMenu'](d,c['clientX'],c[y(0x223)],e),d[y(0x207)][y(0x1fa)]('context_menu_display'),c[y(0x221)](),ContextMenu['_openedContextMenus'][y(0x1fa)](this),window['addEventListener'](y(0x232),this[y(0x215)]),window[y(0x219)](y(0x1fe),this[y(0x204)]),window['addEventListener']('mousedown',this['_windowDown']),setTimeout(()=>{const z=y;if(!ContextMenu[z(0x1f6)]['has'](this))return;window['addEventListener'](z(0x206),this['_windowDown']);},0x96);}['_windowResize'](){const A=p;this[A(0x225)]();}[p(0x237)](c){const B=p;c[B(0x221)]();if(!(c['target']instanceof Node)||!this['_menuElement']['contains'](c[B(0x1e6)]))this['close']();return![];}[p(0x215)](c){const C=p;c[C(0x235)]==='Escape'&&this[C(0x225)]();}static[p(0x1f8)](c,d,e,f){const D=p;let g=new ContextMenu(c,e,f);return g[D(0x20a)](d),g;}['close'](){const E=p;this['hideDescendantSubmenus'](this['_menuElement']),this['hidePopover'](this['_menuElement']),this['_menuElement']['remove'](),window['removeEventListener'](E(0x234),this['_windowDown']),window[E(0x22b)]('resize',this['_windowResize']),window['removeEventListener']('keyup',this[E(0x215)]),setTimeout(()=>window[E(0x22b)](E(0x206),this[E(0x237)]),0xa),ContextMenu[E(0x1f6)]['delete'](this);}static[p(0x21a)](){const F=p;for(const d of ContextMenu['_openedContextMenus']['values']())d[F(0x225)]();}[p(0x202)](c){const G=p;c[G(0x207)][G(0x1fa)](G(0x217)),c['setAttribute'](G(0x228),'manual');}['markUndoItems'](c){const H=p;if(c['parentElement']==null)return;let d=!![];for(let e of c[H(0x22a)]['children']){if(d)e['classList'][H(0x1fa)]('context_menu_marked');else e['classList']['remove'](H(0x1e5));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const I=p;if(c[I(0x22a)]==null)return;for(const d of c[I(0x22a)][I(0x22f)]){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const J=p,d=c[J(0x208)](J(0x1f2));for(const e of d){this[J(0x212)](e);}}[p(0x1e3)](c,d){const K=p;this['showPopover'](d),this[K(0x21b)](c,d);}['showPopover'](c){const L=p;if(this[L(0x201)](c))return;c[L(0x1df)]();}['hidePopover'](c){const M=p;if(c==null||!this[M(0x201)](c))return;c[M(0x212)]();}['isPopoverOpen'](c){return c['matches'](':popover-open');}['positionMenu'](c,d,e,f){const N=p,g=c[N(0x1fb)]+0x4,h=c['offsetHeight']+0x4,i=window[N(0x1f7)]-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[N(0x203)][N(0x20f)]=Math['max'](0x0,Math['min'](m,window['innerWidth']-g))+'px',c['style']['top']=Math['max'](0x0,Math[N(0x22c)](n,window['innerHeight']-h))+'px';}['positionSubmenuPopover'](c,d){const O=p,e=c['getBoundingClientRect'](),f=d[O(0x1ee)](),g=d['offsetWidth']||f[O(0x1e0)],h=d['offsetHeight']||f['height'],i=window[O(0x1f7)]-e[O(0x214)],j=e[O(0x20f)];let k=e[O(0x214)];i<g&&j>i&&(k=e[O(0x20f)]-g);const l=window['innerHeight']-e[O(0x20c)],m=e['bottom'];let n=e[O(0x20c)];l<h&&m>l&&(n=e['bottom']-h),d['style'][O(0x20f)]=Math['max'](0x0,Math[O(0x22c)](k,window[O(0x1f7)]-g))+'px',d['style']['top']=Math[O(0x1f4)](0x0,Math['min'](n,window['innerHeight']-h))+'px',d['style'][O(0x214)]=O(0x20d),d['style']['bottom']='auto';}}