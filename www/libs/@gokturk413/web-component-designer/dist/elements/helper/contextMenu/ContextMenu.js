const p=b;function a(){const M=['7151892uvDLLb','_windowDown','54295538ASsWDR','_windowResize','hideDescendantSubmenus','addEventListener','children','6383776xoZcbB','offsetHeight','createElement','disabled','context_menu_text','positionMenu','stopPropagation','7xQufQZ','manual','_windowKeyUp','innerHeight','icon','bind','click','min','shadowRoot','clientY','className','style','display','forEach','607043LutTPm','title','context_menu_marked','20890oxEeSO','close','num','context','right','parentElement','584lTEvFT','setAttribute','checked','_menuElement','mouseup','context_menu_sub_span','max','appendChild','412970zZdsBr','showPopover','count','menu','1946682ocEKJw','_contextMenuCss','mousedown','key','mouseenter','context_menu_icon_span','left','reload','3EqoRIh','remove','openPopoverSubmenu','add','closeAll','_openedContextMenus','positionSubmenuPopover','getBoundingClientRect','context_menu_divider','top','target','height','body','isPopoverOpen','markUndoItems','action','contextmenu','div','classList','preventDefault','hidePopover','keyup','removeEventListener','configurePopoverSubmenu','342WFvsxJ','bottom','options','mouseOffset','clientX','innerWidth','span','innerHTML','adoptedStyleSheets','indexOf'];a=function(){return M;};return a();}(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x1bf))/0x1+parseInt(o(0x1d4))/0x2*(parseInt(o(0x1dc))/0x3)+parseInt(o(0x1c8))/0x4*(parseInt(o(0x1c2))/0x5)+parseInt(o(0x1a3))/0x6+parseInt(o(0x1b1))/0x7*(parseInt(o(0x1aa))/0x8)+parseInt(o(0x1f4))/0x9*(parseInt(o(0x1d0))/0xa)+-parseInt(o(0x1a5))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6a56));function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x1d2)]=0x0;static [p(0x1e1)]=new Set();[p(0x1d3)];[p(0x1f6)];[p(0x1c5)];['num'];['_menuElement'];constructor(c,d,e){const q=p;this['num']=ContextMenu[q(0x1d2)]++,this['menu']=c,this['options']=d,this[q(0x1c5)]=e,this[q(0x1db)](),this['_windowDown']=this['_windowDown'][q(0x1b6)](this),this['_windowKeyUp']=this['_windowKeyUp']['bind'](this),this['_windowResize']=this[q(0x1a6)][q(0x1b6)](this);}[p(0x1db)](){const r=p;let c=this[r(0x1f6)]?.[r(0x1b9)]??document;if(this['_menuElement']==null){this['_menuElement']=document['createElement'](r(0x1ed)),this[r(0x1cb)]['className']='context_menu',this['_menuElement']['id']='context_menu_'+this[r(0x1c4)],this['_menuElement']['setAttribute']('popover',r(0x1b2));if(c===document)document[r(0x1e8)]['appendChild'](this[r(0x1cb)]);else c[r(0x1cf)](this[r(0x1cb)]);}this['_menuElement']['innerHTML']='',c[r(0x1a1)][r(0x1a2)](ContextMenu[r(0x1d5)])<0x0&&(c[r(0x1a1)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this['_menuElement']['appendChild'](this['renderLevel'](this[r(0x1d3)]));}['renderLevel'](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x1be)](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k[t(0x1bb)]=t(0x1e4),e=![],d[t(0x1cf)](k);}let g=document['createElement']('li'),h=document[t(0x1ac)](t(0x19f));h['className']=t(0x1d9);if(f['checked']===!![])h[t(0x1a0)]='✔';else(f['icon']??'')!=''?h[t(0x1a0)]=f['icon']??'':h[t(0x1a0)]=this[t(0x1f6)]?.['defaultIcon']??'';let i=document['createElement']('span');i[t(0x1bb)]=t(0x1ae),i['innerHTML']=f[t(0x1c0)]??'';let j=document['createElement']('span');j['className']=t(0x1cd);f[t(0x1a9)]!=null&&(j['innerHTML']=this[t(0x1f6)]?.['subIcon']??'&#155;');g['appendChild'](h),g['appendChild'](i),g[t(0x1cf)](j);if(f[t(0x1ad)])g[t(0x1c9)]('disabled','');else{if(f['checkable'])g[t(0x1a8)](t(0x1b7),l=>{const u=t;l[u(0x1b0)](),l[u(0x1ef)](),f['checked']=!f['checked'],h['innerHTML']=f[u(0x1ca)]?'✔':f[u(0x1b5)]??this[u(0x1f6)]?.['defaultIcon']??'';if(f['action'])f['action'](l,f,this[u(0x1c5)],this);});else{if(f['action'])g[t(0x1a8)](t(0x1b7),l=>{const v=t;l[v(0x1b0)](),l['preventDefault'](),f['action']?.(l,f,this['context'],this),this['close']();});}this['options']?.['mode']=='undo'&&g[t(0x1a8)](t(0x1cc),l=>{const w=t;l[w(0x1b0)](),f[w(0x1eb)]?.(l,f,this[w(0x1c5)],this),this['close']();});g['addEventListener']('mouseenter',()=>{const x=t;this['closeSiblingSubmenus'](g),this[x(0x1f6)]?.['mode']=='undo'&&this['markUndoItems'](g);});if(f['children']!=null){let l=this['renderLevel'](f['children']);this[t(0x1f3)](l),g[t(0x1cf)](l),g[t(0x1a8)](t(0x1d8),()=>{this['openPopoverSubmenu'](g,l);});}}d[t(0x1cf)](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this['_menuElement'],e=this[y(0x1f6)]?.['mouseOffset']!=null?this[y(0x1f6)][y(0x1f7)]:0x2;this[y(0x1d1)](d),this[y(0x1af)](d,c[y(0x1f8)],c[y(0x1ba)],e),d[y(0x1ee)][y(0x1df)]('context_menu_display'),c[y(0x1ef)](),ContextMenu['_openedContextMenus']['add'](this),window['addEventListener'](y(0x1f1),this['_windowKeyUp']),window[y(0x1a8)]('resize',this['_windowResize']),window[y(0x1a8)](y(0x1d6),this[y(0x1a4)]),setTimeout(()=>{const z=y;if(!ContextMenu[z(0x1e1)]['has'](this))return;window[z(0x1a8)](z(0x1ec),this['_windowDown']);},0x96);}[p(0x1a6)](){this['close']();}[p(0x1a4)](c){const A=p;c[A(0x1ef)]();if(!(c[A(0x1e6)]instanceof Node)||!this[A(0x1cb)]['contains'](c['target']))this['close']();return![];}['_windowKeyUp'](c){const B=p;c[B(0x1d7)]==='Escape'&&this[B(0x1c3)]();}static['show'](c,d,e,f){const C=p;let g=new ContextMenu(c,e,f);return g[C(0x1bd)](d),g;}['close'](){const D=p;this[D(0x1a7)](this[D(0x1cb)]),this[D(0x1f0)](this['_menuElement']),this['_menuElement'][D(0x1dd)](),window[D(0x1f2)](D(0x1d6),this['_windowDown']),window[D(0x1f2)]('resize',this[D(0x1a6)]),window[D(0x1f2)]('keyup',this[D(0x1b3)]),setTimeout(()=>window['removeEventListener']('contextmenu',this[D(0x1a4)]),0xa),ContextMenu[D(0x1e1)]['delete'](this);}static[p(0x1e0)](){const E=p;for(const d of ContextMenu['_openedContextMenus']['values']())d[E(0x1c3)]();}['configurePopoverSubmenu'](c){const F=p;c[F(0x1ee)]['add']('context_menu_submenu_popover'),c[F(0x1c9)]('popover','manual');}[p(0x1ea)](c){const G=p;if(c['parentElement']==null)return;let d=!![];for(let e of c[G(0x1c7)]['children']){if(d)e['classList']['add']('context_menu_marked');else e['classList']['remove'](G(0x1c1));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const H=p;if(c['parentElement']==null)return;for(const d of c[H(0x1c7)][H(0x1a9)]){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const d=c['querySelectorAll']('ul[popover]');for(const e of d){this['hidePopover'](e);}}[p(0x1de)](c,d){const I=p;this['showPopover'](d),this[I(0x1e2)](c,d);}['showPopover'](c){if(this['isPopoverOpen'](c))return;c['showPopover']();}[p(0x1f0)](c){const J=p;if(c==null||!this[J(0x1e9)](c))return;c[J(0x1f0)]();}['isPopoverOpen'](c){return c['matches'](':popover-open');}['positionMenu'](c,d,e,f){const K=p,g=c['offsetWidth']+0x4,h=c[K(0x1ab)]+0x4,i=window[K(0x1f9)]-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[K(0x1bc)][K(0x1da)]=Math[K(0x1ce)](0x0,Math[K(0x1b8)](m,window['innerWidth']-g))+'px',c[K(0x1bc)][K(0x1e5)]=Math['max'](0x0,Math['min'](n,window['innerHeight']-h))+'px';}[p(0x1e2)](c,d){const L=p,e=c[L(0x1e3)](),f=d[L(0x1e3)](),g=d['offsetWidth']||f['width'],h=d['offsetHeight']||f[L(0x1e7)],i=window['innerWidth']-e[L(0x1c6)],j=e['left'];let k=e[L(0x1c6)];i<g&&j>i&&(k=e['left']-g);const l=window[L(0x1b4)]-e['top'],m=e['bottom'];let n=e['top'];l<h&&m>l&&(n=e[L(0x1f5)]-h),d[L(0x1bc)][L(0x1da)]=Math[L(0x1ce)](0x0,Math['min'](k,window['innerWidth']-g))+'px',d[L(0x1bc)][L(0x1e5)]=Math[L(0x1ce)](0x0,Math[L(0x1b8)](n,window['innerHeight']-h))+'px',d['style']['right']='auto',d[L(0x1bc)][L(0x1f5)]='auto';}}