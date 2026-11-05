function b(c,d){c=c-0x18b;const e=a();let f=e[c];return f;}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x1b0))/0x1*(-parseInt(o(0x1bc))/0x2)+-parseInt(o(0x18e))/0x3*(-parseInt(o(0x1bf))/0x4)+-parseInt(o(0x1d3))/0x5+parseInt(o(0x1e3))/0x6*(-parseInt(o(0x1a9))/0x7)+parseInt(o(0x19f))/0x8+parseInt(o(0x1be))/0x9*(-parseInt(o(0x1a0))/0xa)+parseInt(o(0x1e1))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc28f6));import{css}from'@node-projects/base-custom-webcomponent';function a(){const M=['left','appendChild','3099848tGgirN','3127280JJeblq','setAttribute','_menuElement','adoptedStyleSheets','context_menu_sub_span','_contextMenuCss','classList','popover','_windowDown','1519AaeLpc','max','target','preventDefault','children','delete','right','2321brsaIS','removeEventListener','count','menu','action','defaultIcon','stopPropagation','shadowRoot','values','addEventListener','mouseup','close','68tcllaR','style','36PQDocT','44kozbyM','span','_windowResize','manual','context_menu','closeSiblingSubmenus','getBoundingClientRect','num','context_menu_','hidePopover','add','mode','&#155;','options','context_menu_display','parentElement','bottom','checked','reload','div','819620QCKAEQ','context','has','contextmenu','hideDescendantSubmenus','top','title','remove','createElement','min','resize','mouseenter','configurePopoverSubmenu','bind','15835809oPbuvi','ul[popover]','17370FAGjhM','positionSubmenuPopover','offsetWidth','markUndoItems','className','innerHeight','click','contains','innerHTML','show','254715jKTfID','auto','forEach','positionMenu','innerWidth','isPopoverOpen','context_menu_marked','context_menu_divider','icon','renderLevel','querySelectorAll','_openedContextMenus','keyup','mousedown','showPopover'];a=function(){return M;};return a();}export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x1b2)]=0x0;static [p(0x199)]=new Set();[p(0x1b3)];[p(0x1cc)];[p(0x1d4)];[p(0x1c6)];['_menuElement'];constructor(c,d,e){const q=p;this[q(0x1c6)]=ContextMenu[q(0x1b2)]++,this['menu']=c,this['options']=d,this['context']=e,this['reload'](),this['_windowDown']=this['_windowDown'][q(0x1e0)](this),this['_windowKeyUp']=this['_windowKeyUp']['bind'](this),this['_windowResize']=this['_windowResize'][q(0x1e0)](this);}[p(0x1d1)](){const r=p;let c=this[r(0x1cc)]?.[r(0x1b7)]??document;if(this[r(0x1a2)]==null){this['_menuElement']=document['createElement'](r(0x1d2)),this[r(0x1a2)][r(0x1e7)]=r(0x1c3),this[r(0x1a2)]['id']=r(0x1c7)+this[r(0x1c6)],this['_menuElement'][r(0x1a1)](r(0x1a7),r(0x1c2));if(c===document)document['body'][r(0x19e)](this['_menuElement']);else c[r(0x19e)](this['_menuElement']);}this[r(0x1a2)]['innerHTML']='',c[r(0x1a3)]['indexOf'](ContextMenu[r(0x1a5)])<0x0&&(c[r(0x1a3)]=[...c[r(0x1a3)],ContextMenu['_contextMenuCss']]),this[r(0x1a2)]['appendChild'](this[r(0x197)](this[r(0x1b3)]));}[p(0x197)](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x190)](f=>{const t=s;if(f[t(0x1d9)]!=='-'){if(e){let k=document['createElement']('li');k['className']=t(0x195),e=![],d[t(0x19e)](k);}let g=document[t(0x1db)]('li'),h=document[t(0x1db)](t(0x1c0));h[t(0x1e7)]='context_menu_icon_span';if(f[t(0x1d0)]===!![])h[t(0x18c)]='✔';else(f['icon']??'')!=''?h['innerHTML']=f[t(0x196)]??'':h[t(0x18c)]=this['options']?.[t(0x1b5)]??'';let i=document['createElement']('span');i[t(0x1e7)]='context_menu_text',i[t(0x18c)]=f['title']??'';let j=document[t(0x1db)]('span');j[t(0x1e7)]=t(0x1a4);f[t(0x1ad)]!=null&&(j[t(0x18c)]=this['options']?.['subIcon']??t(0x1cb));g[t(0x19e)](h),g['appendChild'](i),g['appendChild'](j);if(f['disabled'])g['setAttribute']('disabled','');else{if(f['checkable'])g['addEventListener']('click',l=>{const u=t;l[u(0x1b6)](),l['preventDefault'](),f['checked']=!f['checked'],h['innerHTML']=f[u(0x1d0)]?'✔':f['icon']??this[u(0x1cc)]?.[u(0x1b5)]??'';if(f['action'])f['action'](l,f,this['context'],this);});else{if(f['action'])g[t(0x1b9)](t(0x1e9),l=>{const v=t;l[v(0x1b6)](),l['preventDefault'](),f[v(0x1b4)]?.(l,f,this['context'],this),this['close']();});}this[t(0x1cc)]?.['mode']=='undo'&&g['addEventListener'](t(0x1ba),l=>{const w=t;l['stopPropagation'](),f['action']?.(l,f,this[w(0x1d4)],this),this['close']();});g['addEventListener'](t(0x1de),()=>{const x=t;this['closeSiblingSubmenus'](g),this[x(0x1cc)]?.[x(0x1ca)]=='undo'&&this[x(0x1e6)](g);});if(f['children']!=null){let l=this[t(0x197)](f['children']);this[t(0x1df)](l),g[t(0x19e)](l),g['addEventListener']('mouseenter',()=>{this['openPopoverSubmenu'](g,l);});}}d[t(0x19e)](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this['_menuElement'],e=this[y(0x1cc)]?.['mouseOffset']!=null?this[y(0x1cc)]['mouseOffset']:0x2;this['showPopover'](d),this[y(0x191)](d,c['clientX'],c['clientY'],e),d['classList'][y(0x1c9)](y(0x1cd)),c[y(0x1ac)](),ContextMenu['_openedContextMenus']['add'](this),window['addEventListener'](y(0x19a),this['_windowKeyUp']),window['addEventListener']('resize',this['_windowResize']),window[y(0x1b9)](y(0x19b),this['_windowDown']),setTimeout(()=>{const z=y;if(!ContextMenu[z(0x199)][z(0x1d5)](this))return;window['addEventListener'](z(0x1d6),this['_windowDown']);},0x96);}[p(0x1c1)](){this['close']();}[p(0x1a8)](c){const A=p;c['preventDefault']();if(!(c['target']instanceof Node)||!this[A(0x1a2)][A(0x18b)](c[A(0x1ab)]))this['close']();return![];}['_windowKeyUp'](c){c['key']==='Escape'&&this['close']();}static[p(0x18d)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}['close'](){const B=p;this[B(0x1d7)](this[B(0x1a2)]),this[B(0x1c8)](this[B(0x1a2)]),this['_menuElement'][B(0x1da)](),window[B(0x1b1)]('mousedown',this[B(0x1a8)]),window['removeEventListener'](B(0x1dd),this[B(0x1c1)]),window['removeEventListener']('keyup',this['_windowKeyUp']),setTimeout(()=>window[B(0x1b1)]('contextmenu',this[B(0x1a8)]),0xa),ContextMenu[B(0x199)][B(0x1ae)](this);}static['closeAll'](){const C=p;for(const d of ContextMenu[C(0x199)][C(0x1b8)]())d[C(0x1bb)]();}[p(0x1df)](c){const D=p;c[D(0x1a6)][D(0x1c9)]('context_menu_submenu_popover'),c['setAttribute'](D(0x1a7),D(0x1c2));}['markUndoItems'](c){const E=p;if(c[E(0x1ce)]==null)return;let d=!![];for(let e of c[E(0x1ce)]['children']){if(d)e['classList'][E(0x1c9)]('context_menu_marked');else e[E(0x1a6)][E(0x1da)](E(0x194));if(e==c)d=![];}}[p(0x1c4)](c){const F=p;if(c[F(0x1ce)]==null)return;for(const d of c['parentElement']['children']){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const G=p,d=c[G(0x198)](G(0x1e2));for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){const H=p;this['showPopover'](d),this[H(0x1e4)](c,d);}[p(0x19c)](c){const I=p;if(this['isPopoverOpen'](c))return;c[I(0x19c)]();}['hidePopover'](c){const J=p;if(c==null||!this[J(0x193)](c))return;c['hidePopover']();}['isPopoverOpen'](c){return c['matches'](':popover-open');}['positionMenu'](c,d,e,f){const K=p,g=c[K(0x1e5)]+0x4,h=c['offsetHeight']+0x4,i=window['innerWidth']-d,j=d,k=window[K(0x1e8)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[K(0x1bd)][K(0x19d)]=Math[K(0x1aa)](0x0,Math[K(0x1dc)](m,window[K(0x192)]-g))+'px',c['style']['top']=Math['max'](0x0,Math['min'](n,window[K(0x1e8)]-h))+'px';}['positionSubmenuPopover'](c,d){const L=p,e=c['getBoundingClientRect'](),f=d[L(0x1c5)](),g=d[L(0x1e5)]||f['width'],h=d['offsetHeight']||f['height'],i=window[L(0x192)]-e[L(0x1af)],j=e[L(0x19d)];let k=e[L(0x1af)];i<g&&j>i&&(k=e['left']-g);const l=window[L(0x1e8)]-e[L(0x1d8)],m=e['bottom'];let n=e[L(0x1d8)];l<h&&m>l&&(n=e['bottom']-h),d['style'][L(0x19d)]=Math[L(0x1aa)](0x0,Math[L(0x1dc)](k,window[L(0x192)]-g))+'px',d[L(0x1bd)][L(0x1d8)]=Math['max'](0x0,Math['min'](n,window[L(0x1e8)]-h))+'px',d['style']['right']=L(0x18f),d['style'][L(0x1cf)]=L(0x18f);}}