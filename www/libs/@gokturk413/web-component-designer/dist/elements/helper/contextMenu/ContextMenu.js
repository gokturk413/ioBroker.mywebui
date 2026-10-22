function b(c,d){c=c-0x183;const e=a();let f=e[c];return f;}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x19a))/0x1*(parseInt(o(0x199))/0x2)+parseInt(o(0x19c))/0x3*(-parseInt(o(0x19b))/0x4)+-parseInt(o(0x1a6))/0x5*(parseInt(o(0x1c2))/0x6)+parseInt(o(0x193))/0x7+parseInt(o(0x1a9))/0x8*(-parseInt(o(0x183))/0x9)+parseInt(o(0x1c0))/0xa*(parseInt(o(0x195))/0xb)+-parseInt(o(0x187))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1efda));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();[p(0x18d)];['options'];['context'];[p(0x197)];['_menuElement'];constructor(c,d,e){const q=p;this['num']=ContextMenu['count']++,this['menu']=c,this[q(0x1cc)]=d,this[q(0x1a7)]=e,this['reload'](),this['_windowDown']=this[q(0x19d)]['bind'](this),this['_windowKeyUp']=this['_windowKeyUp'][q(0x1b8)](this),this[q(0x18e)]=this[q(0x18e)]['bind'](this);}['reload'](){const r=p;let c=this['options']?.[r(0x1c7)]??document;if(this[r(0x1d3)]==null){this['_menuElement']=document['createElement']('div'),this[r(0x1d3)]['className']='context_menu',this[r(0x1d3)]['id']=r(0x1cd)+this[r(0x197)],this['_menuElement'][r(0x1a1)]('popover','manual');if(c===document)document['body'][r(0x1c3)](this[r(0x1d3)]);else c['appendChild'](this[r(0x1d3)]);}this[r(0x1d3)]['innerHTML']='',c[r(0x1a8)]['indexOf'](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x1a8)]=[...c[r(0x1a8)],ContextMenu['_contextMenuCss']]),this[r(0x1d3)][r(0x1c3)](this['renderLevel'](this[r(0x18d)]));}['renderLevel'](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x1c6)](f=>{const t=s;if(f[t(0x1a0)]!=='-'){if(e){let k=document['createElement']('li');k[t(0x1ce)]='context_menu_divider',e=![],d[t(0x1c3)](k);}let g=document['createElement']('li'),h=document['createElement']('span');h[t(0x1ce)]='context_menu_icon_span';if(f[t(0x1d4)]===!![])h['innerHTML']='✔';else(f['icon']??'')!=''?h['innerHTML']=f[t(0x192)]??'':h[t(0x1b6)]=this[t(0x1cc)]?.['defaultIcon']??'';let i=document['createElement']('span');i['className']=t(0x1b4),i[t(0x1b6)]=f[t(0x1a0)]??'';let j=document[t(0x18c)]('span');j[t(0x1ce)]='context_menu_sub_span';f[t(0x1cf)]!=null&&(j[t(0x1b6)]=this[t(0x1cc)]?.['subIcon']??'&#155;');g['appendChild'](h),g['appendChild'](i),g[t(0x1c3)](j);if(f['disabled'])g[t(0x1a1)](t(0x185),'');else{if(f['checkable'])g[t(0x1c5)](t(0x1b3),l=>{const u=t;l[u(0x1ad)](),l['preventDefault'](),f[u(0x1d4)]=!f['checked'],h['innerHTML']=f[u(0x1d4)]?'✔':f['icon']??this[u(0x1cc)]?.['defaultIcon']??'';if(f[u(0x1bc)])f['action'](l,f,this['context'],this);});else{if(f['action'])g[t(0x1c5)]('click',l=>{const v=t;l['stopPropagation'](),l[v(0x1ba)](),f['action']?.(l,f,this['context'],this),this[v(0x1bd)]();});}this['options']?.[t(0x1b7)]==t(0x19f)&&g['addEventListener']('mouseup',l=>{const w=t;l['stopPropagation'](),f['action']?.(l,f,this['context'],this),this[w(0x1bd)]();});g[t(0x1c5)](t(0x18b),()=>{const x=t;this['closeSiblingSubmenus'](g),this[x(0x1cc)]?.[x(0x1b7)]=='undo'&&this[x(0x194)](g);});if(f['children']!=null){let l=this[t(0x1c9)](f['children']);this[t(0x1d1)](l),g[t(0x1c3)](l),g['addEventListener'](t(0x18b),()=>{const y=t;this[y(0x1ca)](g,l);});}}d[t(0x1c3)](g);}else e=!![];}),d;}[p(0x1a3)](c){const z=p;let d=this['_menuElement'],e=this[z(0x1cc)]?.[z(0x1bb)]!=null?this['options'][z(0x1bb)]:0x2;this['showPopover'](d),this[z(0x1ac)](d,c['clientX'],c['clientY'],e),d[z(0x189)]['add']('context_menu_display'),c['preventDefault'](),ContextMenu[z(0x1d5)][z(0x1a4)](this),window['addEventListener']('keyup',this['_windowKeyUp']),window['addEventListener'](z(0x1c8),this['_windowResize']),window['addEventListener'](z(0x184),this['_windowDown']),setTimeout(()=>{const A=z;if(!ContextMenu['_openedContextMenus'][A(0x1bf)](this))return;window[A(0x1c5)]('contextmenu',this[A(0x19d)]);},0x96);}['_windowResize'](){this['close']();}['_windowDown'](c){const B=p;c[B(0x1ba)]();if(!(c['target']instanceof Node)||!this[B(0x1d3)]['contains'](c['target']))this['close']();return![];}['_windowKeyUp'](c){const C=p;c['key']===C(0x1a5)&&this['close']();}static['show'](c,d,e,f){const D=p;let g=new ContextMenu(c,e,f);return g[D(0x1a3)](d),g;}['close'](){const E=p;this['hideDescendantSubmenus'](this['_menuElement']),this['hidePopover'](this[E(0x1d3)]),this['_menuElement']['remove'](),window[E(0x1ab)](E(0x184),this[E(0x19d)]),window['removeEventListener'](E(0x1c8),this[E(0x18e)]),window['removeEventListener']('keyup',this['_windowKeyUp']),setTimeout(()=>window[E(0x1ab)](E(0x1b2),this[E(0x19d)]),0xa),ContextMenu['_openedContextMenus'][E(0x1cb)](this);}static['closeAll'](){const F=p;for(const d of ContextMenu['_openedContextMenus'][F(0x1b5)]())d['close']();}['configurePopoverSubmenu'](c){const G=p;c['classList']['add'](G(0x1b1)),c[G(0x1a1)]('popover',G(0x1a2));}[p(0x194)](c){const H=p;if(c['parentElement']==null)return;let d=!![];for(let e of c[H(0x196)][H(0x1cf)]){if(d)e['classList']['add'](H(0x1b0));else e[H(0x189)]['remove'](H(0x1b0));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const I=p;if(c['parentElement']==null)return;for(const d of c['parentElement']['children']){d!==c&&this[I(0x186)](d);}}['hideDescendantSubmenus'](c){const J=p,d=c[J(0x1d6)]('ul[popover]');for(const e of d){this[J(0x18a)](e);}}[p(0x1ca)](c,d){const K=p;this['showPopover'](d),this[K(0x1af)](c,d);}['showPopover'](c){const L=p;if(this[L(0x19e)](c))return;c[L(0x18f)]();}['hidePopover'](c){const M=p;if(c==null||!this[M(0x19e)](c))return;c[M(0x18a)]();}[p(0x19e)](c){const N=p;return c[N(0x1ae)](':popover-open');}[p(0x1ac)](c,d,e,f){const O=p,g=c[O(0x1d0)]+0x4,h=c['offsetHeight']+0x4,i=window[O(0x1be)]-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style'][O(0x198)]=Math['max'](0x0,Math['min'](m,window[O(0x1be)]-g))+'px',c['style'][O(0x191)]=Math[O(0x1d2)](0x0,Math['min'](n,window['innerHeight']-h))+'px';}['positionSubmenuPopover'](c,d){const P=p,e=c[P(0x1b9)](),f=d[P(0x1b9)](),g=d[P(0x1d0)]||f['width'],h=d['offsetHeight']||f['height'],i=window[P(0x1be)]-e[P(0x1aa)],j=e[P(0x198)];let k=e['right'];i<g&&j>i&&(k=e['left']-g);const l=window['innerHeight']-e['top'],m=e[P(0x190)];let n=e[P(0x191)];l<h&&m>l&&(n=e[P(0x190)]-h),d[P(0x1c1)]['left']=Math[P(0x1d2)](0x0,Math[P(0x1c4)](k,window[P(0x1be)]-g))+'px',d[P(0x1c1)][P(0x191)]=Math['max'](0x0,Math[P(0x1c4)](n,window['innerHeight']-h))+'px',d['style'][P(0x1aa)]=P(0x188),d['style']['bottom']=P(0x188);}}function a(){const Q=['hidePopover','mouseenter','createElement','menu','_windowResize','showPopover','bottom','top','icon','1475229RIMnvN','markUndoItems','927432dvSrCg','parentElement','num','left','2uHRhes','141763BZKzBM','325848FrROLl','3mzvBKY','_windowDown','isPopoverOpen','undo','title','setAttribute','manual','display','add','Escape','10005ixNvmZ','context','adoptedStyleSheets','28256otYkOX','right','removeEventListener','positionMenu','stopPropagation','matches','positionSubmenuPopover','context_menu_marked','context_menu_submenu_popover','contextmenu','click','context_menu_text','values','innerHTML','mode','bind','getBoundingClientRect','preventDefault','mouseOffset','action','close','innerWidth','has','10FMMsGp','style','558SOZdMN','appendChild','min','addEventListener','forEach','shadowRoot','resize','renderLevel','openPopoverSubmenu','delete','options','context_menu_','className','children','offsetWidth','configurePopoverSubmenu','max','_menuElement','checked','_openedContextMenus','querySelectorAll','63OHrzRD','mousedown','disabled','hideDescendantSubmenus','211260GTMsek','auto','classList'];a=function(){return Q;};return a();}