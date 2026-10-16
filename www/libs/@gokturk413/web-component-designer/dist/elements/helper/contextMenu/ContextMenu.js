const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x1af))/0x1*(parseInt(o(0x1d4))/0x2)+parseInt(o(0x1e7))/0x3+parseInt(o(0x1b9))/0x4+-parseInt(o(0x1e6))/0x5*(parseInt(o(0x1dc))/0x6)+parseInt(o(0x1be))/0x7*(-parseInt(o(0x1c4))/0x8)+-parseInt(o(0x1f9))/0x9*(parseInt(o(0x1c6))/0xa)+parseInt(o(0x1d8))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x58c26));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1a6;const e=a();let f=e[c];return f;}export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static [p(0x1c1)]=0x0;static [p(0x1fa)]=new Set();[p(0x1ef)];[p(0x1cc)];[p(0x1d1)];['num'];[p(0x1ec)];constructor(c,d,e){const q=p;this['num']=ContextMenu[q(0x1c1)]++,this[q(0x1ef)]=c,this[q(0x1cc)]=d,this[q(0x1d1)]=e,this['reload'](),this['_windowDown']=this[q(0x1e1)][q(0x1ad)](this),this[q(0x1f1)]=this['_windowKeyUp'][q(0x1ad)](this),this['_windowResize']=this[q(0x1f0)][q(0x1ad)](this);}[p(0x1f8)](){const r=p;let c=this[r(0x1cc)]?.[r(0x1d6)]??document;if(this[r(0x1ec)]==null){this[r(0x1ec)]=document[r(0x200)](r(0x1f5)),this[r(0x1ec)]['className']='context_menu',this[r(0x1ec)]['id']=r(0x202)+this[r(0x1b8)],this[r(0x1ec)][r(0x1ee)](r(0x1c3),'manual');if(c===document)document['body'][r(0x1c8)](this[r(0x1ec)]);else c['appendChild'](this['_menuElement']);}this[r(0x1ec)]['innerHTML']='',c[r(0x1df)]['indexOf'](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x1df)]=[...c['adoptedStyleSheets'],ContextMenu[r(0x1e8)]]),this[r(0x1ec)][r(0x1c8)](this[r(0x1b6)](this['menu']));}[p(0x1b6)](c){const s=p;let d=document[s(0x200)]('ul'),e=![];return c[s(0x201)](f=>{const t=s;if(f[t(0x1f3)]!=='-'){if(e){let k=document['createElement']('li');k[t(0x1d5)]='context_menu_divider',e=![],d[t(0x1c8)](k);}let g=document['createElement']('li'),h=document['createElement']('span');h['className']='context_menu_icon_span';if(f['checked']===!![])h['innerHTML']='✔';else(f['icon']??'')!=''?h['innerHTML']=f[t(0x1d2)]??'':h['innerHTML']=this[t(0x1cc)]?.['defaultIcon']??'';let i=document[t(0x200)]('span');i[t(0x1d5)]='context_menu_text',i['innerHTML']=f['title']??'';let j=document[t(0x200)](t(0x1bd));j['className']=t(0x1bb);f['children']!=null&&(j[t(0x1d3)]=this['options']?.['subIcon']??'&#155;');g[t(0x1c8)](h),g['appendChild'](i),g['appendChild'](j);if(f['disabled'])g['setAttribute']('disabled','');else{if(f['checkable'])g[t(0x1bf)](t(0x1f2),l=>{const u=t;l[u(0x1db)](),l[u(0x203)](),f['checked']=!f['checked'],h['innerHTML']=f[u(0x1ea)]?'✔':f['icon']??this[u(0x1cc)]?.['defaultIcon']??'';if(f[u(0x1c9)])f[u(0x1c9)](l,f,this['context'],this);});else{if(f['action'])g['addEventListener']('click',l=>{const v=t;l['stopPropagation'](),l[v(0x203)](),f[v(0x1c9)]?.(l,f,this['context'],this),this['close']();});}this[t(0x1cc)]?.['mode']=='undo'&&g[t(0x1bf)]('mouseup',l=>{const w=t;l[w(0x1db)](),f['action']?.(l,f,this['context'],this),this[w(0x1ce)]();});g[t(0x1bf)](t(0x1d7),()=>{const x=t;this['closeSiblingSubmenus'](g),this[x(0x1cc)]?.[x(0x1fb)]==x(0x1fd)&&this[x(0x1a9)](g);});if(f[t(0x1b3)]!=null){let l=this['renderLevel'](f['children']);this[t(0x1aa)](l),g[t(0x1c8)](l),g['addEventListener'](t(0x1d7),()=>{const y=t;this[y(0x1cf)](g,l);});}}d[t(0x1c8)](g);}else e=!![];}),d;}[p(0x1f7)](c){const z=p;let d=this[z(0x1ec)],e=this[z(0x1cc)]?.[z(0x1c5)]!=null?this['options']['mouseOffset']:0x2;this['showPopover'](d),this['positionMenu'](d,c[z(0x1b0)],c[z(0x1e4)],e),d[z(0x1e3)][z(0x1eb)](z(0x1c2)),c[z(0x203)](),ContextMenu['_openedContextMenus'][z(0x1eb)](this),window['addEventListener'](z(0x1fe),this[z(0x1f1)]),window['addEventListener'](z(0x1da),this[z(0x1f0)]),window[z(0x1bf)]('mousedown',this['_windowDown']),setTimeout(()=>{const A=z;if(!ContextMenu['_openedContextMenus'][A(0x205)](this))return;window['addEventListener'](A(0x1b4),this['_windowDown']);},0x96);}[p(0x1f0)](){this['close']();}['_windowDown'](c){const B=p;c['preventDefault']();if(!(c['target']instanceof Node)||!this['_menuElement']['contains'](c[B(0x1b7)]))this['close']();return![];}[p(0x1f1)](c){const C=p;c[C(0x1ba)]===C(0x1d0)&&this['close']();}static[p(0x1e2)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}['close'](){const D=p;this['hideDescendantSubmenus'](this[D(0x1ec)]),this['hidePopover'](this['_menuElement']),this['_menuElement']['remove'](),window['removeEventListener']('mousedown',this['_windowDown']),window[D(0x1a8)](D(0x1da),this['_windowResize']),window[D(0x1a8)](D(0x1fe),this['_windowKeyUp']),setTimeout(()=>window[D(0x1a8)](D(0x1b4),this[D(0x1e1)]),0xa),ContextMenu[D(0x1fa)]['delete'](this);}static['closeAll'](){const E=p;for(const d of ContextMenu[E(0x1fa)]['values']())d[E(0x1ce)]();}['configurePopoverSubmenu'](c){const F=p;c[F(0x1e3)][F(0x1eb)](F(0x1b5)),c['setAttribute'](F(0x1c3),F(0x1f4));}[p(0x1a9)](c){const G=p;if(c[G(0x1ae)]==null)return;let d=!![];for(let e of c['parentElement']['children']){if(d)e['classList']['add'](G(0x1bc));else e[G(0x1e3)][G(0x1ca)]('context_menu_marked');if(e==c)d=![];}}['closeSiblingSubmenus'](c){const H=p;if(c[H(0x1ae)]==null)return;for(const d of c[H(0x1ae)]['children']){d!==c&&this[H(0x1b1)](d);}}['hideDescendantSubmenus'](c){const I=p,d=c['querySelectorAll']('ul[popover]');for(const e of d){this[I(0x1e9)](e);}}['openPopoverSubmenu'](c,d){const J=p;this['showPopover'](d),this[J(0x1c0)](c,d);}[p(0x1a7)](c){if(this['isPopoverOpen'](c))return;c['showPopover']();}[p(0x1e9)](c){if(c==null||!this['isPopoverOpen'](c))return;c['hidePopover']();}[p(0x1ac)](c){const K=p;return c[K(0x1c7)](K(0x1ab));}[p(0x1dd)](c,d,e,f){const L=p,g=c[L(0x1e0)]+0x4,h=c['offsetHeight']+0x4,i=window[L(0x1fc)]-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[L(0x1cd)][L(0x1b2)]=Math['max'](0x0,Math['min'](m,window[L(0x1fc)]-g))+'px',c['style'][L(0x204)]=Math['max'](0x0,Math['min'](n,window[L(0x1ed)]-h))+'px';}[p(0x1c0)](c,d){const M=p,e=c['getBoundingClientRect'](),f=d[M(0x1ff)](),g=d['offsetWidth']||f[M(0x1e5)],h=d['offsetHeight']||f['height'],i=window['innerWidth']-e['right'],j=e[M(0x1b2)];let k=e['right'];i<g&&j>i&&(k=e[M(0x1b2)]-g);const l=window['innerHeight']-e['top'],m=e['bottom'];let n=e['top'];l<h&&m>l&&(n=e[M(0x1de)]-h),d['style']['left']=Math['max'](0x0,Math['min'](k,window['innerWidth']-g))+'px',d[M(0x1cd)]['top']=Math[M(0x1f6)](0x0,Math[M(0x1cb)](n,window['innerHeight']-h))+'px',d['style'][M(0x1a6)]=M(0x1d9),d['style']['bottom']='auto';}}function a(){const N=['options','style','close','openPopoverSubmenu','Escape','context','icon','innerHTML','93272XPIFqs','className','shadowRoot','mouseenter','5275545WdqCqs','auto','resize','stopPropagation','4890gRVOrk','positionMenu','bottom','adoptedStyleSheets','offsetWidth','_windowDown','show','classList','clientY','width','3090EwARVJ','1035795dagmPr','_contextMenuCss','hidePopover','checked','add','_menuElement','innerHeight','setAttribute','menu','_windowResize','_windowKeyUp','click','title','manual','div','max','display','reload','171mDIKcF','_openedContextMenus','mode','innerWidth','undo','keyup','getBoundingClientRect','createElement','forEach','context_menu_','preventDefault','top','has','right','showPopover','removeEventListener','markUndoItems','configurePopoverSubmenu',':popover-open','isPopoverOpen','bind','parentElement','1cLspmD','clientX','hideDescendantSubmenus','left','children','contextmenu','context_menu_submenu_popover','renderLevel','target','num','2641136cvolXa','key','context_menu_sub_span','context_menu_marked','span','7OUIzms','addEventListener','positionSubmenuPopover','count','context_menu_display','popover','4369912caFMih','mouseOffset','62270ntiLCL','matches','appendChild','action','remove','min'];a=function(){return N;};return a();}