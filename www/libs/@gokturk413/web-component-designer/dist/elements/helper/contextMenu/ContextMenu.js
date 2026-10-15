const p=b;function b(c,d){c=c-0x91;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0xc9))/0x1+-parseInt(o(0xc6))/0x2+parseInt(o(0xe3))/0x3*(parseInt(o(0xd9))/0x4)+-parseInt(o(0xaa))/0x5+-parseInt(o(0xb3))/0x6+parseInt(o(0xed))/0x7*(parseInt(o(0x9b))/0x8)+-parseInt(o(0xd6))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x465ce));function a(){const M=['positionSubmenuPopover','configurePopoverSubmenu','420164MsbTTz','_contextMenuCss','max','delete','context_menu_text','clientX','reload','action','shadowRoot','context_menu_sub_span','adoptedStyleSheets','createElement','context_menu_icon_span','1039302hiHfKI','width','mode','524972SFabaZ','context','body','defaultIcon','context_menu_','count','bottom','_windowDown','show','className','3obgeQs','openPopoverSubmenu','addEventListener','menu','right','min','parentElement','mouseOffset','mousedown','checkable','7JXuHeT','icon','auto','innerHTML','keyup','matches','classList','popover','indexOf','preventDefault','hideDescendantSubmenus','3890944TQOHDs','contextmenu','add','remove','num','_windowKeyUp','innerHeight','checked','showPopover','values','manual','querySelectorAll','innerWidth','appendChild','has','1007580YWthUX','close',':popover-open','span','renderLevel','_windowResize','context_menu_submenu_popover','top','bind','844680VVaHAP','context_menu_marked','offsetWidth','markUndoItems','style','positionMenu','hidePopover','children','removeEventListener','_openedContextMenus','div','isPopoverOpen','Escape','_menuElement','setAttribute','click','options','closeSiblingSubmenus','offsetHeight','583590bAigjD'];a=function(){return M;};return a();}import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static [p(0xca)]=css`
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
	  }`;static [p(0xde)]=0x0;static [p(0xbc)]=new Set();[p(0xe6)];['options'];['context'];[p(0x9f)];[p(0xc0)];constructor(c,d,e){const q=p;this[q(0x9f)]=ContextMenu[q(0xde)]++,this['menu']=c,this['options']=d,this[q(0xda)]=e,this[q(0xcf)](),this['_windowDown']=this['_windowDown']['bind'](this),this[q(0xa0)]=this['_windowKeyUp']['bind'](this),this[q(0xaf)]=this[q(0xaf)][q(0xb2)](this);}['reload'](){const r=p;let c=this['options']?.[r(0xd1)]??document;if(this['_menuElement']==null){this[r(0xc0)]=document[r(0xd4)](r(0xbd)),this[r(0xc0)][r(0xe2)]='context_menu',this[r(0xc0)]['id']=r(0xdd)+this[r(0x9f)],this['_menuElement']['setAttribute'](r(0x97),r(0xa5));if(c===document)document[r(0xdb)][r(0xa8)](this['_menuElement']);else c['appendChild'](this['_menuElement']);}this['_menuElement'][r(0x93)]='',c[r(0xd3)][r(0x98)](ContextMenu['_contextMenuCss'])<0x0&&(c['adoptedStyleSheets']=[...c[r(0xd3)],ContextMenu[r(0xca)]]),this['_menuElement'][r(0xa8)](this['renderLevel'](this[r(0xe6)]));}[p(0xae)](c){let d=document['createElement']('ul'),e=![];return c['forEach'](f=>{const s=b;if(f['title']!=='-'){if(e){let k=document[s(0xd4)]('li');k[s(0xe2)]='context_menu_divider',e=![],d['appendChild'](k);}let g=document['createElement']('li'),h=document[s(0xd4)]('span');h[s(0xe2)]=s(0xd5);if(f[s(0xa2)]===!![])h['innerHTML']='✔';else(f['icon']??'')!=''?h['innerHTML']=f[s(0x91)]??'':h['innerHTML']=this[s(0xc3)]?.[s(0xdc)]??'';let i=document['createElement'](s(0xad));i[s(0xe2)]=s(0xcd),i[s(0x93)]=f['title']??'';let j=document['createElement']('span');j['className']=s(0xd2);f['children']!=null&&(j[s(0x93)]=this['options']?.['subIcon']??'&#155;');g['appendChild'](h),g['appendChild'](i),g[s(0xa8)](j);if(f['disabled'])g['setAttribute']('disabled','');else{if(f[s(0xec)])g[s(0xe5)]('click',l=>{const t=s;l['stopPropagation'](),l['preventDefault'](),f['checked']=!f[t(0xa2)],h['innerHTML']=f[t(0xa2)]?'✔':f[t(0x91)]??this[t(0xc3)]?.['defaultIcon']??'';if(f['action'])f[t(0xd0)](l,f,this[t(0xda)],this);});else{if(f['action'])g['addEventListener'](s(0xc2),l=>{const u=s;l['stopPropagation'](),l[u(0x99)](),f[u(0xd0)]?.(l,f,this['context'],this),this[u(0xab)]();});}this[s(0xc3)]?.['mode']=='undo'&&g[s(0xe5)]('mouseup',l=>{const v=s;l['stopPropagation'](),f[v(0xd0)]?.(l,f,this[v(0xda)],this),this['close']();});g['addEventListener']('mouseenter',()=>{const w=s;this['closeSiblingSubmenus'](g),this[w(0xc3)]?.[w(0xd8)]=='undo'&&this[w(0xb6)](g);});if(f['children']!=null){let l=this[s(0xae)](f[s(0xba)]);this['configurePopoverSubmenu'](l),g['appendChild'](l),g['addEventListener']('mouseenter',()=>{this['openPopoverSubmenu'](g,l);});}}d[s(0xa8)](g);}else e=!![];}),d;}['display'](c){const x=p;let d=this[x(0xc0)],e=this['options']?.[x(0xea)]!=null?this[x(0xc3)]['mouseOffset']:0x2;this['showPopover'](d),this[x(0xb8)](d,c[x(0xce)],c['clientY'],e),d[x(0x96)]['add']('context_menu_display'),c['preventDefault'](),ContextMenu[x(0xbc)][x(0x9d)](this),window['addEventListener'](x(0x94),this[x(0xa0)]),window[x(0xe5)]('resize',this[x(0xaf)]),window['addEventListener']('mousedown',this[x(0xe0)]),setTimeout(()=>{const y=x;if(!ContextMenu['_openedContextMenus'][y(0xa9)](this))return;window[y(0xe5)](y(0x9c),this['_windowDown']);},0x96);}[p(0xaf)](){this['close']();}[p(0xe0)](c){const z=p;c[z(0x99)]();if(!(c['target']instanceof Node)||!this[z(0xc0)]['contains'](c['target']))this[z(0xab)]();return![];}[p(0xa0)](c){const A=p;c['key']===A(0xbf)&&this['close']();}static[p(0xe1)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}[p(0xab)](){const B=p;this['hideDescendantSubmenus'](this[B(0xc0)]),this[B(0xb9)](this[B(0xc0)]),this[B(0xc0)][B(0x9e)](),window['removeEventListener'](B(0xeb),this[B(0xe0)]),window[B(0xbb)]('resize',this['_windowResize']),window['removeEventListener']('keyup',this['_windowKeyUp']),setTimeout(()=>window['removeEventListener']('contextmenu',this[B(0xe0)]),0xa),ContextMenu['_openedContextMenus'][B(0xcc)](this);}static['closeAll'](){const C=p;for(const d of ContextMenu['_openedContextMenus'][C(0xa4)]())d['close']();}[p(0xc8)](c){const D=p;c['classList']['add'](D(0xb0)),c[D(0xc1)](D(0x97),'manual');}[p(0xb6)](c){const E=p;if(c[E(0xe9)]==null)return;let d=!![];for(let e of c['parentElement']['children']){if(d)e['classList']['add'](E(0xb4));else e['classList'][E(0x9e)]('context_menu_marked');if(e==c)d=![];}}[p(0xc4)](c){const F=p;if(c['parentElement']==null)return;for(const d of c['parentElement'][F(0xba)]){d!==c&&this['hideDescendantSubmenus'](d);}}[p(0x9a)](c){const G=p,d=c[G(0xa6)]('ul[popover]');for(const e of d){this['hidePopover'](e);}}[p(0xe4)](c,d){this['showPopover'](d),this['positionSubmenuPopover'](c,d);}['showPopover'](c){const H=p;if(this[H(0xbe)](c))return;c[H(0xa3)]();}['hidePopover'](c){const I=p;if(c==null||!this[I(0xbe)](c))return;c[I(0xb9)]();}[p(0xbe)](c){const J=p;return c[J(0x95)](J(0xac));}['positionMenu'](c,d,e,f){const K=p,g=c[K(0xb5)]+0x4,h=c[K(0xc5)]+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style']['left']=Math[K(0xcb)](0x0,Math['min'](m,window[K(0xa7)]-g))+'px',c['style']['top']=Math['max'](0x0,Math['min'](n,window[K(0xa1)]-h))+'px';}[p(0xc7)](c,d){const L=p,e=c['getBoundingClientRect'](),f=d['getBoundingClientRect'](),g=d['offsetWidth']||f[L(0xd7)],h=d[L(0xc5)]||f['height'],i=window[L(0xa7)]-e['right'],j=e['left'];let k=e[L(0xe7)];i<g&&j>i&&(k=e['left']-g);const l=window[L(0xa1)]-e[L(0xb1)],m=e['bottom'];let n=e[L(0xb1)];l<h&&m>l&&(n=e[L(0xdf)]-h),d[L(0xb7)]['left']=Math[L(0xcb)](0x0,Math[L(0xe8)](k,window['innerWidth']-g))+'px',d[L(0xb7)][L(0xb1)]=Math['max'](0x0,Math[L(0xe8)](n,window[L(0xa1)]-h))+'px',d['style'][L(0xe7)]='auto',d[L(0xb7)]['bottom']=L(0x92);}}