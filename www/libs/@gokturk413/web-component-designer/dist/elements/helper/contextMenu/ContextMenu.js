const p=b;function b(c,d){c=c-0x15d;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x181))/0x1*(parseInt(o(0x160))/0x2)+parseInt(o(0x1a8))/0x3+parseInt(o(0x164))/0x4*(-parseInt(o(0x188))/0x5)+parseInt(o(0x1a4))/0x6*(-parseInt(o(0x17e))/0x7)+parseInt(o(0x196))/0x8*(-parseInt(o(0x18d))/0x9)+-parseInt(o(0x1a0))/0xa+parseInt(o(0x165))/0xb*(parseInt(o(0x195))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdf231));import{css}from'@node-projects/base-custom-webcomponent';function a(){const O=['644118gRKwpc','style','keyup','undo','1753941sywzSH','innerHTML','appendChild','classList','click','bind','hidePopover','show','left','2ysllKN','removeEventListener','checked','title','605012yvtOMP','98857qkrklG','_openedContextMenus','context_menu','mouseOffset','getBoundingClientRect','configurePopoverSubmenu','resize','contains','action','offsetHeight','positionSubmenuPopover','manual','popover','className','top','display','options','_contextMenuCss','bottom','preventDefault','reload','children','auto','mode','num','14sqsbHK','add','showPopover','1201441wIVJtu','parentElement','_windowResize','_windowKeyUp','context_menu_','createElement','innerHeight','45yQCBAn','count','closeAll','innerWidth','addEventListener','6732SjcAIh','_windowDown','openPopoverSubmenu','context','indexOf','icon','_menuElement','close','2436teCGoI','4144pVbYUO','right','span','matches','renderLevel','remove','mousedown','positionMenu','contextmenu','max','7330330TlbuVZ','setAttribute','adoptedStyleSheets','hideDescendantSubmenus'];a=function(){return O;};return a();}export class ContextMenu{static [p(0x176)]=css`
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
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();['menu'];['options'];[p(0x190)];['num'];['_menuElement'];constructor(c,d,e){const q=p;this[q(0x17d)]=ContextMenu[q(0x189)]++,this['menu']=c,this['options']=d,this['context']=e,this['reload'](),this[q(0x18e)]=this['_windowDown']['bind'](this),this[q(0x184)]=this[q(0x184)][q(0x1ad)](this),this['_windowResize']=this[q(0x183)][q(0x1ad)](this);}[p(0x179)](){const r=p;let c=this['options']?.['shadowRoot']??document;if(this[r(0x193)]==null){this[r(0x193)]=document['createElement']('div'),this[r(0x193)][r(0x172)]=r(0x167),this[r(0x193)]['id']=r(0x185)+this['num'],this['_menuElement']['setAttribute']('popover',r(0x170));if(c===document)document['body'][r(0x1aa)](this['_menuElement']);else c['appendChild'](this['_menuElement']);}this['_menuElement']['innerHTML']='',c['adoptedStyleSheets'][r(0x191)](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x1a2)]=[...c[r(0x1a2)],ContextMenu[r(0x176)]]),this[r(0x193)][r(0x1aa)](this[r(0x19a)](this['menu']));}[p(0x19a)](c){const s=p;let d=document[s(0x186)]('ul'),e=![];return c['forEach'](f=>{const t=s;if(f[t(0x163)]!=='-'){if(e){let k=document[t(0x186)]('li');k[t(0x172)]='context_menu_divider',e=![],d[t(0x1aa)](k);}let g=document[t(0x186)]('li'),h=document['createElement']('span');h['className']='context_menu_icon_span';if(f[t(0x162)]===!![])h['innerHTML']='✔';else(f[t(0x192)]??'')!=''?h[t(0x1a9)]=f['icon']??'':h[t(0x1a9)]=this[t(0x175)]?.['defaultIcon']??'';let i=document[t(0x186)](t(0x198));i['className']='context_menu_text',i['innerHTML']=f['title']??'';let j=document[t(0x186)](t(0x198));j[t(0x172)]='context_menu_sub_span';f[t(0x17a)]!=null&&(j[t(0x1a9)]=this['options']?.['subIcon']??'&#155;');g['appendChild'](h),g[t(0x1aa)](i),g['appendChild'](j);if(f['disabled'])g[t(0x1a1)]('disabled','');else{if(f['checkable'])g['addEventListener']('click',l=>{const u=t;l['stopPropagation'](),l['preventDefault'](),f['checked']=!f[u(0x162)],h['innerHTML']=f[u(0x162)]?'✔':f[u(0x192)]??this[u(0x175)]?.['defaultIcon']??'';if(f[u(0x16d)])f[u(0x16d)](l,f,this[u(0x190)],this);});else{if(f[t(0x16d)])g['addEventListener'](t(0x1ac),l=>{const v=t;l['stopPropagation'](),l[v(0x178)](),f['action']?.(l,f,this[v(0x190)],this),this['close']();});}this['options']?.['mode']==t(0x1a7)&&g[t(0x18c)]('mouseup',l=>{const w=t;l['stopPropagation'](),f[w(0x16d)]?.(l,f,this['context'],this),this[w(0x194)]();});g['addEventListener']('mouseenter',()=>{const x=t;this['closeSiblingSubmenus'](g),this['options']?.[x(0x17c)]=='undo'&&this['markUndoItems'](g);});if(f['children']!=null){let l=this['renderLevel'](f['children']);this[t(0x16a)](l),g[t(0x1aa)](l),g['addEventListener']('mouseenter',()=>{const y=t;this[y(0x18f)](g,l);});}}d[t(0x1aa)](g);}else e=!![];}),d;}['display'](c){const z=p;let d=this[z(0x193)],e=this['options']?.['mouseOffset']!=null?this[z(0x175)][z(0x168)]:0x2;this[z(0x180)](d),this[z(0x19d)](d,c['clientX'],c['clientY'],e),d[z(0x1ab)]['add']('context_menu_display'),c['preventDefault'](),ContextMenu[z(0x166)][z(0x17f)](this),window[z(0x18c)]('keyup',this['_windowKeyUp']),window[z(0x18c)](z(0x16b),this['_windowResize']),window[z(0x18c)]('mousedown',this[z(0x18e)]),setTimeout(()=>{const A=z;if(!ContextMenu[A(0x166)]['has'](this))return;window['addEventListener']('contextmenu',this[A(0x18e)]);},0x96);}['_windowResize'](){this['close']();}['_windowDown'](c){const B=p;c[B(0x178)]();if(!(c['target']instanceof Node)||!this[B(0x193)][B(0x16c)](c['target']))this['close']();return![];}[p(0x184)](c){c['key']==='Escape'&&this['close']();}static[p(0x15e)](c,d,e,f){const C=p;let g=new ContextMenu(c,e,f);return g[C(0x174)](d),g;}['close'](){const D=p;this[D(0x1a3)](this[D(0x193)]),this['hidePopover'](this[D(0x193)]),this['_menuElement'][D(0x19b)](),window[D(0x161)](D(0x19c),this[D(0x18e)]),window[D(0x161)]('resize',this['_windowResize']),window[D(0x161)](D(0x1a6),this[D(0x184)]),setTimeout(()=>window['removeEventListener'](D(0x19e),this['_windowDown']),0xa),ContextMenu[D(0x166)]['delete'](this);}static[p(0x18a)](){const E=p;for(const d of ContextMenu[E(0x166)]['values']())d['close']();}['configurePopoverSubmenu'](c){const F=p;c[F(0x1ab)][F(0x17f)]('context_menu_submenu_popover'),c['setAttribute'](F(0x171),F(0x170));}['markUndoItems'](c){const G=p;if(c['parentElement']==null)return;let d=!![];for(let e of c[G(0x182)][G(0x17a)]){if(d)e['classList'][G(0x17f)]('context_menu_marked');else e[G(0x1ab)][G(0x19b)]('context_menu_marked');if(e==c)d=![];}}['closeSiblingSubmenus'](c){const H=p;if(c['parentElement']==null)return;for(const d of c['parentElement'][H(0x17a)]){d!==c&&this[H(0x1a3)](d);}}[p(0x1a3)](c){const d=c['querySelectorAll']('ul[popover]');for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){const I=p;this[I(0x180)](d),this[I(0x16f)](c,d);}[p(0x180)](c){const J=p;if(this['isPopoverOpen'](c))return;c[J(0x180)]();}[p(0x15d)](c){const K=p;if(c==null||!this['isPopoverOpen'](c))return;c[K(0x15d)]();}['isPopoverOpen'](c){const L=p;return c[L(0x199)](':popover-open');}[p(0x19d)](c,d,e,f){const M=p,g=c['offsetWidth']+0x4,h=c['offsetHeight']+0x4,i=window[M(0x18b)]-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style']['left']=Math['max'](0x0,Math['min'](m,window['innerWidth']-g))+'px',c[M(0x1a5)][M(0x173)]=Math['max'](0x0,Math['min'](n,window[M(0x187)]-h))+'px';}['positionSubmenuPopover'](c,d){const N=p,e=c['getBoundingClientRect'](),f=d[N(0x169)](),g=d['offsetWidth']||f['width'],h=d[N(0x16e)]||f['height'],i=window[N(0x18b)]-e['right'],j=e[N(0x15f)];let k=e[N(0x197)];i<g&&j>i&&(k=e['left']-g);const l=window[N(0x187)]-e[N(0x173)],m=e['bottom'];let n=e['top'];l<h&&m>l&&(n=e[N(0x177)]-h),d['style'][N(0x15f)]=Math[N(0x19f)](0x0,Math['min'](k,window['innerWidth']-g))+'px',d['style'][N(0x173)]=Math[N(0x19f)](0x0,Math['min'](n,window[N(0x187)]-h))+'px',d[N(0x1a5)]['right']=N(0x17b),d['style']['bottom']='auto';}}