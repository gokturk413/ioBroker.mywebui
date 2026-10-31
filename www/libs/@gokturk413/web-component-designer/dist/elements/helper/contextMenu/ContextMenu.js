function a(){const N=['top','closeSiblingSubmenus','auto','defaultIcon','keyup','popover','getBoundingClientRect','renderLevel','Escape','disabled','contextmenu','mouseenter',':popover-open','mouseOffset','close','_contextMenuCss','checkable','mousedown','3568842uHfLxO','indexOf','adoptedStyleSheets','positionMenu','target','mouseup','2035390DrCQjk','undo','context_menu_marked','key','classList','mode','children','style','146GhSRtf','title','3671RRYXSf','matches','add','_windowDown','context_menu_text','num','clientY','configurePopoverSubmenu','left','63LMsgVW','parentElement','preventDefault','hidePopover','has','55BPfFLe','menu','action','isPopoverOpen','removeEventListener','2986810PuoPKi','_menuElement','stopPropagation','count','showPopover','innerHeight','591897sKpRQB','setAttribute','display','height','icon','positionSubmenuPopover','min','3020199pUcBmc','createElement','openPopoverSubmenu','span','bind','options','_windowResize','querySelectorAll','context_menu_','bottom','appendChild','innerHTML','8blkudJ','context','423632xUbSGJ','shadowRoot','addEventListener','width','_openedContextMenus','innerWidth','hideDescendantSubmenus','className','_windowKeyUp','max','checked','markUndoItems'];a=function(){return N;};return a();}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x15f))/0x1*(parseInt(o(0x15d))/0x2)+-parseInt(o(0x178))/0x3*(parseInt(o(0x18b))/0x4)+-parseInt(o(0x155))/0x5+-parseInt(o(0x14f))/0x6+-parseInt(o(0x17f))/0x7+parseInt(o(0x18d))/0x8*(parseInt(o(0x168))/0x9)+-parseInt(o(0x172))/0xa*(-parseInt(o(0x16d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4a3fe));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x14b;const e=a();let f=e[c];return f;}export class ContextMenu{static [p(0x14c)]=css`
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
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();['menu'];[p(0x184)];[p(0x18c)];[p(0x164)];[p(0x173)];constructor(c,d,e){const q=p;this[q(0x164)]=ContextMenu[q(0x175)]++,this['menu']=c,this['options']=d,this['context']=e,this['reload'](),this['_windowDown']=this[q(0x162)][q(0x183)](this),this[q(0x195)]=this['_windowKeyUp'][q(0x183)](this),this['_windowResize']=this[q(0x185)][q(0x183)](this);}['reload'](){const r=p;let c=this[r(0x184)]?.[r(0x18e)]??document;if(this[r(0x173)]==null){this['_menuElement']=document['createElement']('div'),this['_menuElement'][r(0x194)]='context_menu',this[r(0x173)]['id']=r(0x187)+this[r(0x164)],this['_menuElement']['setAttribute'](r(0x19e),'manual');if(c===document)document['body'][r(0x189)](this['_menuElement']);else c[r(0x189)](this['_menuElement']);}this[r(0x173)]['innerHTML']='',c[r(0x151)][r(0x150)](ContextMenu[r(0x14c)])<0x0&&(c['adoptedStyleSheets']=[...c[r(0x151)],ContextMenu[r(0x14c)]]),this['_menuElement'][r(0x189)](this['renderLevel'](this[r(0x16e)]));}['renderLevel'](c){let d=document['createElement']('ul'),e=![];return c['forEach'](f=>{const s=b;if(f[s(0x15e)]!=='-'){if(e){let k=document['createElement']('li');k['className']='context_menu_divider',e=![],d['appendChild'](k);}let g=document['createElement']('li'),h=document[s(0x180)]('span');h['className']='context_menu_icon_span';if(f[s(0x197)]===!![])h[s(0x18a)]='✔';else(f[s(0x17c)]??'')!=''?h[s(0x18a)]=f[s(0x17c)]??'':h[s(0x18a)]=this[s(0x184)]?.['defaultIcon']??'';let i=document['createElement']('span');i['className']=s(0x163),i[s(0x18a)]=f[s(0x15e)]??'';let j=document['createElement'](s(0x182));j['className']='context_menu_sub_span';f['children']!=null&&(j[s(0x18a)]=this[s(0x184)]?.['subIcon']??'&#155;');g[s(0x189)](h),g[s(0x189)](i),g['appendChild'](j);if(f['disabled'])g['setAttribute'](s(0x1a2),'');else{if(f[s(0x14d)])g[s(0x18f)]('click',l=>{const t=s;l[t(0x174)](),l['preventDefault'](),f[t(0x197)]=!f['checked'],h['innerHTML']=f['checked']?'✔':f['icon']??this['options']?.[t(0x19c)]??'';if(f[t(0x16f)])f[t(0x16f)](l,f,this['context'],this);});else{if(f['action'])g['addEventListener']('click',l=>{const u=s;l['stopPropagation'](),l[u(0x16a)](),f['action']?.(l,f,this[u(0x18c)],this),this[u(0x14b)]();});}this[s(0x184)]?.[s(0x15a)]==s(0x156)&&g['addEventListener'](s(0x154),l=>{l['stopPropagation'](),f['action']?.(l,f,this['context'],this),this['close']();});g['addEventListener']('mouseenter',()=>{const v=s;this['closeSiblingSubmenus'](g),this['options']?.[v(0x15a)]==v(0x156)&&this[v(0x198)](g);});if(f[s(0x15b)]!=null){let l=this[s(0x1a0)](f['children']);this[s(0x166)](l),g[s(0x189)](l),g['addEventListener'](s(0x1a4),()=>{this['openPopoverSubmenu'](g,l);});}}d[s(0x189)](g);}else e=!![];}),d;}['display'](c){const w=p;let d=this[w(0x173)],e=this['options']?.[w(0x1a6)]!=null?this['options'][w(0x1a6)]:0x2;this['showPopover'](d),this[w(0x152)](d,c['clientX'],c[w(0x165)],e),d['classList']['add']('context_menu_display'),c['preventDefault'](),ContextMenu['_openedContextMenus'][w(0x161)](this),window[w(0x18f)](w(0x19d),this['_windowKeyUp']),window[w(0x18f)]('resize',this['_windowResize']),window['addEventListener']('mousedown',this[w(0x162)]),setTimeout(()=>{const x=w;if(!ContextMenu[x(0x191)][x(0x16c)](this))return;window[x(0x18f)](x(0x1a3),this['_windowDown']);},0x96);}[p(0x185)](){const y=p;this[y(0x14b)]();}['_windowDown'](c){const z=p;c['preventDefault']();if(!(c[z(0x153)]instanceof Node)||!this['_menuElement']['contains'](c[z(0x153)]))this['close']();return![];}['_windowKeyUp'](c){const A=p;c[A(0x158)]===A(0x1a1)&&this['close']();}static['show'](c,d,e,f){const B=p;let g=new ContextMenu(c,e,f);return g[B(0x17a)](d),g;}[p(0x14b)](){const C=p;this['hideDescendantSubmenus'](this['_menuElement']),this[C(0x16b)](this['_menuElement']),this[C(0x173)]['remove'](),window['removeEventListener'](C(0x14e),this[C(0x162)]),window['removeEventListener']('resize',this['_windowResize']),window['removeEventListener']('keyup',this[C(0x195)]),setTimeout(()=>window[C(0x171)]('contextmenu',this['_windowDown']),0xa),ContextMenu[C(0x191)]['delete'](this);}static['closeAll'](){for(const d of ContextMenu['_openedContextMenus']['values']())d['close']();}['configurePopoverSubmenu'](c){const D=p;c[D(0x159)]['add']('context_menu_submenu_popover'),c[D(0x179)](D(0x19e),'manual');}['markUndoItems'](c){const E=p;if(c[E(0x169)]==null)return;let d=!![];for(let e of c[E(0x169)]['children']){if(d)e['classList']['add']('context_menu_marked');else e['classList']['remove'](E(0x157));if(e==c)d=![];}}[p(0x19a)](c){const F=p;if(c[F(0x169)]==null)return;for(const d of c[F(0x169)]['children']){d!==c&&this[F(0x193)](d);}}['hideDescendantSubmenus'](c){const G=p,d=c[G(0x186)]('ul[popover]');for(const e of d){this[G(0x16b)](e);}}[p(0x181)](c,d){const H=p;this['showPopover'](d),this[H(0x17d)](c,d);}[p(0x176)](c){const I=p;if(this[I(0x170)](c))return;c[I(0x176)]();}['hidePopover'](c){const J=p;if(c==null||!this['isPopoverOpen'](c))return;c[J(0x16b)]();}[p(0x170)](c){const K=p;return c[K(0x160)](K(0x1a5));}[p(0x152)](c,d,e,f){const L=p,g=c['offsetWidth']+0x4,h=c['offsetHeight']+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[L(0x15c)][L(0x167)]=Math[L(0x196)](0x0,Math['min'](m,window[L(0x192)]-g))+'px',c[L(0x15c)]['top']=Math['max'](0x0,Math[L(0x17e)](n,window[L(0x177)]-h))+'px';}[p(0x17d)](c,d){const M=p,e=c[M(0x19f)](),f=d[M(0x19f)](),g=d['offsetWidth']||f[M(0x190)],h=d['offsetHeight']||f[M(0x17b)],i=window['innerWidth']-e['right'],j=e[M(0x167)];let k=e['right'];i<g&&j>i&&(k=e['left']-g);const l=window[M(0x177)]-e[M(0x199)],m=e['bottom'];let n=e[M(0x199)];l<h&&m>l&&(n=e[M(0x188)]-h),d[M(0x15c)]['left']=Math[M(0x196)](0x0,Math['min'](k,window['innerWidth']-g))+'px',d[M(0x15c)][M(0x199)]=Math['max'](0x0,Math[M(0x17e)](n,window['innerHeight']-h))+'px',d['style']['right']='auto',d[M(0x15c)][M(0x188)]=M(0x19b);}}