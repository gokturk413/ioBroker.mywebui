const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x20e))/0x1+parseInt(o(0x20a))/0x2+parseInt(o(0x20b))/0x3+parseInt(o(0x21d))/0x4*(parseInt(o(0x1fa))/0x5)+-parseInt(o(0x217))/0x6+-parseInt(o(0x1d7))/0x7*(parseInt(o(0x1f9))/0x8)+parseInt(o(0x209))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd584));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static [p(0x1c9)]=css`
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
	  }`;static ['count']=0x0;static [p(0x20d)]=new Set();['menu'];['options'];[p(0x200)];[p(0x202)];['_menuElement'];constructor(c,d,e){const q=p;this['num']=ContextMenu['count']++,this['menu']=c,this['options']=d,this['context']=e,this['reload'](),this['_windowDown']=this['_windowDown'][q(0x1fd)](this),this[q(0x1e9)]=this[q(0x1e9)][q(0x1fd)](this),this['_windowResize']=this[q(0x1f1)][q(0x1fd)](this);}[p(0x216)](){const r=p;let c=this['options']?.[r(0x1d3)]??document;if(this['_menuElement']==null){this['_menuElement']=document[r(0x1f7)](r(0x218)),this['_menuElement'][r(0x1fe)]=r(0x212),this[r(0x1d8)]['id']='context_menu_'+this['num'],this[r(0x1d8)]['setAttribute']('popover','manual');if(c===document)document['body'][r(0x1e3)](this['_menuElement']);else c[r(0x1e3)](this[r(0x1d8)]);}this['_menuElement']['innerHTML']='',c['adoptedStyleSheets'][r(0x1f0)](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x20c)]=[...c['adoptedStyleSheets'],ContextMenu['_contextMenuCss']]),this['_menuElement']['appendChild'](this['renderLevel'](this['menu']));}[p(0x1e5)](c){const s=p;let d=document[s(0x1f7)]('ul'),e=![];return c['forEach'](f=>{const t=s;if(f[t(0x1d6)]!=='-'){if(e){let k=document[t(0x1f7)]('li');k['className']=t(0x1de),e=![],d[t(0x1e3)](k);}let g=document['createElement']('li'),h=document['createElement'](t(0x1f2));h[t(0x1fe)]=t(0x1fb);if(f[t(0x1dd)]===!![])h['innerHTML']='✔';else(f[t(0x1fc)]??'')!=''?h[t(0x1e4)]=f['icon']??'':h[t(0x1e4)]=this[t(0x20f)]?.[t(0x215)]??'';let i=document['createElement'](t(0x1f2));i[t(0x1fe)]=t(0x1ef),i[t(0x1e4)]=f['title']??'';let j=document[t(0x1f7)]('span');j[t(0x1fe)]=t(0x1f6);f[t(0x21e)]!=null&&(j['innerHTML']=this['options']?.['subIcon']??t(0x1cf));g[t(0x1e3)](h),g['appendChild'](i),g[t(0x1e3)](j);if(f['disabled'])g['setAttribute'](t(0x1ca),'');else{if(f[t(0x1c6)])g[t(0x201)]('click',l=>{const u=t;l[u(0x21c)](),l[u(0x214)](),f['checked']=!f[u(0x1dd)],h['innerHTML']=f[u(0x1dd)]?'✔':f[u(0x1fc)]??this['options']?.['defaultIcon']??'';if(f['action'])f[u(0x1dc)](l,f,this[u(0x200)],this);});else{if(f[t(0x1dc)])g['addEventListener']('click',l=>{const v=t;l['stopPropagation'](),l['preventDefault'](),f[v(0x1dc)]?.(l,f,this[v(0x200)],this),this[v(0x1ff)]();});}this[t(0x20f)]?.[t(0x206)]=='undo'&&g[t(0x201)](t(0x1e2),l=>{const w=t;l[w(0x21c)](),f[w(0x1dc)]?.(l,f,this['context'],this),this['close']();});g['addEventListener']('mouseenter',()=>{const x=t;this['closeSiblingSubmenus'](g),this['options']?.[x(0x206)]=='undo'&&this[x(0x211)](g);});if(f[t(0x21e)]!=null){let l=this[t(0x1e5)](f[t(0x21e)]);this[t(0x21f)](l),g['appendChild'](l),g[t(0x201)]('mouseenter',()=>{this['openPopoverSubmenu'](g,l);});}}d['appendChild'](g);}else e=!![];}),d;}['display'](c){const y=p;let d=this['_menuElement'],e=this[y(0x20f)]?.[y(0x1e7)]!=null?this[y(0x20f)]['mouseOffset']:0x2;this['showPopover'](d),this['positionMenu'](d,c['clientX'],c[y(0x1ce)],e),d[y(0x1e1)][y(0x21b)]('context_menu_display'),c['preventDefault'](),ContextMenu['_openedContextMenus'][y(0x21b)](this),window[y(0x201)](y(0x1df),this['_windowKeyUp']),window['addEventListener'](y(0x1c5),this['_windowResize']),window['addEventListener'](y(0x1d2),this['_windowDown']),setTimeout(()=>{const z=y;if(!ContextMenu[z(0x20d)][z(0x213)](this))return;window[z(0x201)](z(0x1f5),this[z(0x1d9)]);},0x96);}[p(0x1f1)](){const A=p;this[A(0x1ff)]();}['_windowDown'](c){const B=p;c[B(0x214)]();if(!(c[B(0x1e0)]instanceof Node)||!this[B(0x1d8)]['contains'](c['target']))this['close']();return![];}[p(0x1e9)](c){c['key']==='Escape'&&this['close']();}static[p(0x208)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}[p(0x1ff)](){const C=p;this[C(0x1d0)](this['_menuElement']),this['hidePopover'](this[C(0x1d8)]),this['_menuElement'][C(0x1e8)](),window[C(0x1f8)]('mousedown',this[C(0x1d9)]),window[C(0x1f8)]('resize',this[C(0x1f1)]),window[C(0x1f8)](C(0x1df),this[C(0x1e9)]),setTimeout(()=>window['removeEventListener']('contextmenu',this['_windowDown']),0xa),ContextMenu[C(0x20d)]['delete'](this);}static['closeAll'](){const D=p;for(const d of ContextMenu[D(0x20d)][D(0x1db)]())d[D(0x1ff)]();}['configurePopoverSubmenu'](c){const E=p;c['classList'][E(0x21b)]('context_menu_submenu_popover'),c[E(0x1ea)](E(0x1d4),'manual');}[p(0x211)](c){const F=p;if(c['parentElement']==null)return;let d=!![];for(let e of c[F(0x21a)]['children']){if(d)e['classList'][F(0x21b)]('context_menu_marked');else e[F(0x1e1)][F(0x1e8)](F(0x220));if(e==c)d=![];}}[p(0x1da)](c){const G=p;if(c[G(0x21a)]==null)return;for(const d of c[G(0x21a)][G(0x21e)]){d!==c&&this[G(0x1d0)](d);}}[p(0x1d0)](c){const d=c['querySelectorAll']('ul[popover]');for(const e of d){this['hidePopover'](e);}}['openPopoverSubmenu'](c,d){const H=p;this[H(0x1eb)](d),this[H(0x1e6)](c,d);}['showPopover'](c){const I=p;if(this['isPopoverOpen'](c))return;c[I(0x1eb)]();}['hidePopover'](c){const J=p;if(c==null||!this[J(0x1ec)](c))return;c[J(0x1f3)]();}[p(0x1ec)](c){const K=p;return c['matches'](K(0x1ed));}['positionMenu'](c,d,e,f){const L=p,g=c[L(0x1c7)]+0x4,h=c[L(0x203)]+0x4,i=window['innerWidth']-d,j=d,k=window[L(0x1cb)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style'][L(0x204)]=Math['max'](0x0,Math[L(0x1cd)](m,window['innerWidth']-g))+'px',c[L(0x219)][L(0x1cc)]=Math[L(0x207)](0x0,Math[L(0x1cd)](n,window['innerHeight']-h))+'px';}['positionSubmenuPopover'](c,d){const M=p,e=c[M(0x1f4)](),f=d['getBoundingClientRect'](),g=d['offsetWidth']||f[M(0x210)],h=d['offsetHeight']||f[M(0x1d5)],i=window[M(0x1c8)]-e[M(0x1d1)],j=e['left'];let k=e['right'];i<g&&j>i&&(k=e[M(0x204)]-g);const l=window[M(0x1cb)]-e[M(0x1cc)],m=e['bottom'];let n=e[M(0x1cc)];l<h&&m>l&&(n=e['bottom']-h),d['style']['left']=Math['max'](0x0,Math['min'](k,window[M(0x1c8)]-g))+'px',d['style']['top']=Math[M(0x207)](0x0,Math['min'](n,window['innerHeight']-h))+'px',d[M(0x219)]['right']=M(0x205),d[M(0x219)][M(0x1ee)]='auto';}}function b(c,d){c=c-0x1c5;const e=a();let f=e[c];return f;}function a(){const N=['_menuElement','_windowDown','closeSiblingSubmenus','values','action','checked','context_menu_divider','keyup','target','classList','mouseup','appendChild','innerHTML','renderLevel','positionSubmenuPopover','mouseOffset','remove','_windowKeyUp','setAttribute','showPopover','isPopoverOpen',':popover-open','bottom','context_menu_text','indexOf','_windowResize','span','hidePopover','getBoundingClientRect','contextmenu','context_menu_sub_span','createElement','removeEventListener','126096ZfgkLk','285qcxzKB','context_menu_icon_span','icon','bind','className','close','context','addEventListener','num','offsetHeight','left','auto','mode','max','show','14762412Npzoyu','1166588xwFsLb','2905626iMgFFV','adoptedStyleSheets','_openedContextMenus','1262885alRuZv','options','width','markUndoItems','context_menu','has','preventDefault','defaultIcon','reload','8439678crEvJw','div','style','parentElement','add','stopPropagation','23456bTUDBy','children','configurePopoverSubmenu','context_menu_marked','resize','checkable','offsetWidth','innerWidth','_contextMenuCss','disabled','innerHeight','top','min','clientY','&#155;','hideDescendantSubmenus','right','mousedown','shadowRoot','popover','height','title','7iSheuK'];a=function(){return N;};return a();}