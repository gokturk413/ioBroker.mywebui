const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x1ea))/0x1*(-parseInt(o(0x1fc))/0x2)+-parseInt(o(0x1f4))/0x3*(-parseInt(o(0x1ce))/0x4)+parseInt(o(0x210))/0x5+parseInt(o(0x20d))/0x6+parseInt(o(0x1e4))/0x7+-parseInt(o(0x207))/0x8*(parseInt(o(0x1fa))/0x9)+-parseInt(o(0x202))/0xa*(parseInt(o(0x1da))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6eb91));function a(){const P=['className','offsetWidth','parentElement','setAttribute','children','_contextMenuCss','mousedown','checked','4333189fIxRsC','resize','stopPropagation','querySelectorAll','preventDefault','classList','141400xsdtrB','style','closeSiblingSubmenus','renderLevel','openPopoverSubmenu','context_menu','manual','innerHTML',':popover-open','target','81UValwG','width','createElement','innerHeight','addEventListener','contextmenu','17397olRDNM','contains','2ZIqCio','removeEventListener','left','offsetHeight','_windowKeyUp','action','140SfJZKB','_windowDown','undo','close','menu','728yTcsJd','&#155;','options','click','count','Escape','3523728AVUehb','span','markUndoItems','518370RWaLGT','right','title','adoptedStyleSheets','showPopover','popover','key','mode','hidePopover','icon','_openedContextMenus','context_menu_marked','appendChild','context_menu_divider','bind','_menuElement','innerWidth','div','keyup','defaultIcon','num','reload','93844CWmGVq','context_menu_','clientX','_windowResize','context_menu_icon_span','positionMenu','getBoundingClientRect','remove','top','context_menu_text','display','mouseOffset','1143538qOEGBO','isPopoverOpen'];a=function(){return P;};return a();}import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1c1;const e=a();let f=e[c];return f;}export class ContextMenu{static [p(0x1e1)]=css`
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
	  }`;static [p(0x20b)]=0x0;static [p(0x1c2)]=new Set();[p(0x206)];[p(0x209)];['context'];['num'];[p(0x1c7)];constructor(c,d,e){const q=p;this[q(0x1cc)]=ContextMenu['count']++,this[q(0x206)]=c,this['options']=d,this['context']=e,this['reload'](),this['_windowDown']=this[q(0x203)][q(0x1c6)](this),this[q(0x200)]=this['_windowKeyUp']['bind'](this),this['_windowResize']=this['_windowResize']['bind'](this);}[p(0x1cd)](){const r=p;let c=this[r(0x209)]?.['shadowRoot']??document;if(this['_menuElement']==null){this[r(0x1c7)]=document['createElement'](r(0x1c9)),this['_menuElement'][r(0x1dc)]=r(0x1ef),this[r(0x1c7)]['id']=r(0x1cf)+this[r(0x1cc)],this['_menuElement']['setAttribute'](r(0x215),r(0x1f0));if(c===document)document['body']['appendChild'](this[r(0x1c7)]);else c[r(0x1c4)](this['_menuElement']);}this['_menuElement']['innerHTML']='',c['adoptedStyleSheets']['indexOf'](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x213)]=[...c['adoptedStyleSheets'],ContextMenu[r(0x1e1)]]),this[r(0x1c7)]['appendChild'](this['renderLevel'](this['menu']));}['renderLevel'](c){let d=document['createElement']('ul'),e=![];return c['forEach'](f=>{const s=b;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k['className']=s(0x1c5),e=![],d['appendChild'](k);}let g=document[s(0x1f6)]('li'),h=document[s(0x1f6)](s(0x20e));h['className']=s(0x1d2);if(f['checked']===!![])h['innerHTML']='✔';else(f['icon']??'')!=''?h[s(0x1f1)]=f[s(0x1c1)]??'':h['innerHTML']=this['options']?.['defaultIcon']??'';let i=document[s(0x1f6)]('span');i['className']=s(0x1d7),i['innerHTML']=f[s(0x212)]??'';let j=document['createElement']('span');j[s(0x1dc)]='context_menu_sub_span';f['children']!=null&&(j[s(0x1f1)]=this[s(0x209)]?.['subIcon']??s(0x208));g[s(0x1c4)](h),g['appendChild'](i),g[s(0x1c4)](j);if(f['disabled'])g[s(0x1df)]('disabled','');else{if(f['checkable'])g[s(0x1f8)](s(0x20a),l=>{const t=s;l['stopPropagation'](),l[t(0x1e8)](),f['checked']=!f[t(0x1e3)],h['innerHTML']=f[t(0x1e3)]?'✔':f['icon']??this[t(0x209)]?.[t(0x1cb)]??'';if(f[t(0x201)])f['action'](l,f,this['context'],this);});else{if(f[s(0x201)])g['addEventListener']('click',l=>{const u=s;l[u(0x1e6)](),l[u(0x1e8)](),f['action']?.(l,f,this['context'],this),this[u(0x205)]();});}this['options']?.['mode']==s(0x204)&&g['addEventListener']('mouseup',l=>{const v=s;l['stopPropagation'](),f[v(0x201)]?.(l,f,this['context'],this),this['close']();});g['addEventListener']('mouseenter',()=>{const w=s;this[w(0x1ec)](g),this[w(0x209)]?.[w(0x217)]=='undo'&&this[w(0x20f)](g);});if(f['children']!=null){let l=this[s(0x1ed)](f['children']);this['configurePopoverSubmenu'](l),g[s(0x1c4)](l),g['addEventListener']('mouseenter',()=>{const x=s;this[x(0x1ee)](g,l);});}}d[s(0x1c4)](g);}else e=!![];}),d;}[p(0x1d8)](c){const y=p;let d=this[y(0x1c7)],e=this[y(0x209)]?.['mouseOffset']!=null?this['options'][y(0x1d9)]:0x2;this['showPopover'](d),this[y(0x1d3)](d,c[y(0x1d0)],c['clientY'],e),d['classList']['add']('context_menu_display'),c['preventDefault'](),ContextMenu['_openedContextMenus']['add'](this),window[y(0x1f8)](y(0x1ca),this[y(0x200)]),window[y(0x1f8)](y(0x1e5),this[y(0x1d1)]),window['addEventListener'](y(0x1e2),this['_windowDown']),setTimeout(()=>{const z=y;if(!ContextMenu[z(0x1c2)]['has'](this))return;window['addEventListener'](z(0x1f9),this[z(0x203)]);},0x96);}[p(0x1d1)](){const A=p;this[A(0x205)]();}[p(0x203)](c){const B=p;c['preventDefault']();if(!(c[B(0x1f3)]instanceof Node)||!this[B(0x1c7)][B(0x1fb)](c[B(0x1f3)]))this['close']();return![];}[p(0x200)](c){const C=p;c[C(0x216)]===C(0x20c)&&this[C(0x205)]();}static['show'](c,d,e,f){const D=p;let g=new ContextMenu(c,e,f);return g[D(0x1d8)](d),g;}[p(0x205)](){const E=p;this['hideDescendantSubmenus'](this['_menuElement']),this['hidePopover'](this['_menuElement']),this[E(0x1c7)][E(0x1d5)](),window[E(0x1fd)](E(0x1e2),this[E(0x203)]),window[E(0x1fd)]('resize',this[E(0x1d1)]),window[E(0x1fd)]('keyup',this[E(0x200)]),setTimeout(()=>window[E(0x1fd)]('contextmenu',this[E(0x203)]),0xa),ContextMenu[E(0x1c2)]['delete'](this);}static['closeAll'](){const F=p;for(const d of ContextMenu['_openedContextMenus']['values']())d[F(0x205)]();}['configurePopoverSubmenu'](c){const G=p;c[G(0x1e9)]['add']('context_menu_submenu_popover'),c['setAttribute'](G(0x215),'manual');}[p(0x20f)](c){const H=p;if(c[H(0x1de)]==null)return;let d=!![];for(let e of c[H(0x1de)][H(0x1e0)]){if(d)e[H(0x1e9)]['add'](H(0x1c3));else e[H(0x1e9)]['remove'](H(0x1c3));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const I=p;if(c['parentElement']==null)return;for(const d of c['parentElement'][I(0x1e0)]){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const J=p,d=c[J(0x1e7)]('ul[popover]');for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){this['showPopover'](d),this['positionSubmenuPopover'](c,d);}[p(0x214)](c){const K=p;if(this['isPopoverOpen'](c))return;c[K(0x214)]();}['hidePopover'](c){const L=p;if(c==null||!this[L(0x1db)](c))return;c[L(0x218)]();}[p(0x1db)](c){const M=p;return c['matches'](M(0x1f2));}[p(0x1d3)](c,d,e,f){const N=p,g=c[N(0x1dd)]+0x4,h=c[N(0x1ff)]+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style']['left']=Math['max'](0x0,Math['min'](m,window[N(0x1c8)]-g))+'px',c['style']['top']=Math['max'](0x0,Math['min'](n,window[N(0x1f7)]-h))+'px';}['positionSubmenuPopover'](c,d){const O=p,e=c['getBoundingClientRect'](),f=d[O(0x1d4)](),g=d[O(0x1dd)]||f[O(0x1f5)],h=d[O(0x1ff)]||f['height'],i=window[O(0x1c8)]-e[O(0x211)],j=e[O(0x1fe)];let k=e[O(0x211)];i<g&&j>i&&(k=e[O(0x1fe)]-g);const l=window[O(0x1f7)]-e['top'],m=e['bottom'];let n=e[O(0x1d6)];l<h&&m>l&&(n=e['bottom']-h),d[O(0x1eb)][O(0x1fe)]=Math['max'](0x0,Math['min'](k,window[O(0x1c8)]-g))+'px',d[O(0x1eb)][O(0x1d6)]=Math['max'](0x0,Math['min'](n,window[O(0x1f7)]-h))+'px',d['style']['right']='auto',d[O(0x1eb)]['bottom']='auto';}}