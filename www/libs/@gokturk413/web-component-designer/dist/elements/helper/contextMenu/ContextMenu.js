const p=b;function a(){const O=['1095206DiPrRE','mouseenter','contains','auto','children','closeAll','num','_windowKeyUp','action','count','658376yKEOBL','top','_menuElement','style','innerHTML','shadowRoot','context_menu_divider','ul[popover]','stopPropagation',':popover-open','remove','querySelectorAll','markUndoItems','resize','bottom','parentElement','display','options','offsetWidth','69670TXKsae','positionSubmenuPopover','width','closeSiblingSubmenus','createElement','offsetHeight','checked','8970912LpedeV','_contextMenuCss','hidePopover','context_menu_sub_span','innerHeight','isPopoverOpen','14rNaTGe','context_menu_display','getBoundingClientRect','24XuUXyP','appendChild','innerWidth','popover','min','_windowResize','context','addEventListener','values','max','bind','2546556Hzjjcn','mouseup','preventDefault','keyup','className','context_menu_marked','_openedContextMenus','contextmenu','span','5jNgvSI','forEach','showPopover','context_menu_submenu_popover','close','icon','hideDescendantSubmenus','indexOf','mode','positionMenu','classList','&#155;','3773JjAQkU','renderLevel','left','adoptedStyleSheets','65843igBBhx','setAttribute','manual','right','title','add','click','5113120ZVwUHX','show','removeEventListener'];a=function(){return O;};return a();}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x7f))/0x1*(parseInt(o(0xb3))/0x2)+-parseInt(o(0x66))/0x3+-parseInt(o(0x86))/0x4*(-parseInt(o(0x6f))/0x5)+-parseInt(o(0xb6))/0x6*(parseInt(o(0x89))/0x7)+parseInt(o(0x93))/0x8+-parseInt(o(0xad))/0x9+-parseInt(o(0xa6))/0xa*(-parseInt(o(0x7b))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc7af1));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x66;const e=a();let f=e[c];return f;}export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x92)]=0x0;static ['_openedContextMenus']=new Set();['menu'];['options'];[p(0xbc)];[p(0x8f)];['_menuElement'];constructor(c,d,e){const q=p;this['num']=ContextMenu[q(0x92)]++,this['menu']=c,this['options']=d,this[q(0xbc)]=e,this['reload'](),this['_windowDown']=this['_windowDown']['bind'](this),this[q(0x90)]=this[q(0x90)]['bind'](this),this['_windowResize']=this['_windowResize'][q(0xc0)](this);}['reload'](){const r=p;let c=this[r(0xa4)]?.[r(0x98)]??document;if(this[r(0x95)]==null){this[r(0x95)]=document[r(0xaa)]('div'),this[r(0x95)]['className']='context_menu',this[r(0x95)]['id']='context_menu_'+this[r(0x8f)],this[r(0x95)][r(0x80)]('popover',r(0x81));if(c===document)document['body']['appendChild'](this[r(0x95)]);else c[r(0xb7)](this['_menuElement']);}this['_menuElement'][r(0x97)]='',c[r(0x7e)][r(0x76)](ContextMenu[r(0xae)])<0x0&&(c[r(0x7e)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this[r(0x95)][r(0xb7)](this[r(0x7c)](this['menu']));}[p(0x7c)](c){const s=p;let d=document[s(0xaa)]('ul'),e=![];return c[s(0x70)](f=>{const t=s;if(f[t(0x83)]!=='-'){if(e){let k=document['createElement']('li');k[t(0x6a)]=t(0x99),e=![],d[t(0xb7)](k);}let g=document['createElement']('li'),h=document[t(0xaa)](t(0x6e));h[t(0x6a)]='context_menu_icon_span';if(f[t(0xac)]===!![])h['innerHTML']='✔';else(f['icon']??'')!=''?h[t(0x97)]=f['icon']??'':h['innerHTML']=this['options']?.['defaultIcon']??'';let i=document['createElement'](t(0x6e));i[t(0x6a)]='context_menu_text',i[t(0x97)]=f[t(0x83)]??'';let j=document['createElement'](t(0x6e));j['className']=t(0xb0);f['children']!=null&&(j['innerHTML']=this['options']?.['subIcon']??t(0x7a));g['appendChild'](h),g[t(0xb7)](i),g[t(0xb7)](j);if(f['disabled'])g[t(0x80)]('disabled','');else{if(f['checkable'])g['addEventListener'](t(0x85),l=>{const u=t;l[u(0x9b)](),l['preventDefault'](),f['checked']=!f['checked'],h['innerHTML']=f[u(0xac)]?'✔':f[u(0x74)]??this['options']?.['defaultIcon']??'';if(f[u(0x91)])f[u(0x91)](l,f,this[u(0xbc)],this);});else{if(f[t(0x91)])g[t(0xbd)]('click',l=>{const v=t;l['stopPropagation'](),l['preventDefault'](),f[v(0x91)]?.(l,f,this['context'],this),this['close']();});}this[t(0xa4)]?.[t(0x77)]=='undo'&&g['addEventListener'](t(0x67),l=>{const w=t;l[w(0x9b)](),f['action']?.(l,f,this['context'],this),this['close']();});g[t(0xbd)](t(0x8a),()=>{const x=t;this[x(0xa9)](g),this[x(0xa4)]?.[x(0x77)]=='undo'&&this[x(0x9f)](g);});if(f['children']!=null){let l=this[t(0x7c)](f[t(0x8d)]);this['configurePopoverSubmenu'](l),g[t(0xb7)](l),g[t(0xbd)](t(0x8a),()=>{this['openPopoverSubmenu'](g,l);});}}d['appendChild'](g);}else e=!![];}),d;}[p(0xa3)](c){const y=p;let d=this[y(0x95)],e=this[y(0xa4)]?.['mouseOffset']!=null?this[y(0xa4)]['mouseOffset']:0x2;this['showPopover'](d),this[y(0x78)](d,c['clientX'],c['clientY'],e),d[y(0x79)][y(0x84)](y(0xb4)),c['preventDefault'](),ContextMenu[y(0x6c)][y(0x84)](this),window['addEventListener'](y(0x69),this['_windowKeyUp']),window[y(0xbd)](y(0xa0),this[y(0xbb)]),window[y(0xbd)]('mousedown',this['_windowDown']),setTimeout(()=>{const z=y;if(!ContextMenu[z(0x6c)]['has'](this))return;window['addEventListener'](z(0x6d),this['_windowDown']);},0x96);}[p(0xbb)](){const A=p;this[A(0x73)]();}['_windowDown'](c){const B=p;c[B(0x68)]();if(!(c['target']instanceof Node)||!this['_menuElement'][B(0x8b)](c['target']))this[B(0x73)]();return![];}['_windowKeyUp'](c){c['key']==='Escape'&&this['close']();}static[p(0x87)](c,d,e,f){const C=p;let g=new ContextMenu(c,e,f);return g[C(0xa3)](d),g;}['close'](){const D=p;this[D(0x75)](this[D(0x95)]),this[D(0xaf)](this['_menuElement']),this['_menuElement'][D(0x9d)](),window[D(0x88)]('mousedown',this['_windowDown']),window['removeEventListener']('resize',this[D(0xbb)]),window['removeEventListener'](D(0x69),this[D(0x90)]),setTimeout(()=>window['removeEventListener'](D(0x6d),this['_windowDown']),0xa),ContextMenu[D(0x6c)]['delete'](this);}static[p(0x8e)](){const E=p;for(const d of ContextMenu['_openedContextMenus'][E(0xbe)]())d[E(0x73)]();}['configurePopoverSubmenu'](c){const F=p;c[F(0x79)][F(0x84)](F(0x72)),c['setAttribute'](F(0xb9),'manual');}[p(0x9f)](c){const G=p;if(c['parentElement']==null)return;let d=!![];for(let e of c[G(0xa2)][G(0x8d)]){if(d)e['classList'][G(0x84)]('context_menu_marked');else e[G(0x79)][G(0x9d)](G(0x6b));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const H=p;if(c[H(0xa2)]==null)return;for(const d of c[H(0xa2)][H(0x8d)]){d!==c&&this['hideDescendantSubmenus'](d);}}['hideDescendantSubmenus'](c){const I=p,d=c[I(0x9e)](I(0x9a));for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){const J=p;this[J(0x71)](d),this[J(0xa7)](c,d);}['showPopover'](c){const K=p;if(this[K(0xb2)](c))return;c['showPopover']();}[p(0xaf)](c){if(c==null||!this['isPopoverOpen'](c))return;c['hidePopover']();}[p(0xb2)](c){const L=p;return c['matches'](L(0x9c));}[p(0x78)](c,d,e,f){const M=p,g=c[M(0xa5)]+0x4,h=c['offsetHeight']+0x4,i=window[M(0xb8)]-d,j=d,k=window[M(0xb1)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[M(0x96)]['left']=Math[M(0xbf)](0x0,Math['min'](m,window[M(0xb8)]-g))+'px',c['style']['top']=Math[M(0xbf)](0x0,Math[M(0xba)](n,window['innerHeight']-h))+'px';}['positionSubmenuPopover'](c,d){const N=p,e=c['getBoundingClientRect'](),f=d[N(0xb5)](),g=d['offsetWidth']||f[N(0xa8)],h=d[N(0xab)]||f['height'],i=window[N(0xb8)]-e[N(0x82)],j=e['left'];let k=e['right'];i<g&&j>i&&(k=e[N(0x7d)]-g);const l=window[N(0xb1)]-e['top'],m=e[N(0xa1)];let n=e[N(0x94)];l<h&&m>l&&(n=e[N(0xa1)]-h),d['style'][N(0x7d)]=Math['max'](0x0,Math[N(0xba)](k,window[N(0xb8)]-g))+'px',d[N(0x96)]['top']=Math[N(0xbf)](0x0,Math[N(0xba)](n,window['innerHeight']-h))+'px',d[N(0x96)]['right']=N(0x8c),d[N(0x96)]['bottom']='auto';}}