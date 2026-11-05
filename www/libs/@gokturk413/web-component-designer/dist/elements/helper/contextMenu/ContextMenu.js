const p=b;function a(){const P=['859794XSbFvv','_menuElement','showPopover','indexOf','right','manual','12MMYFLk','innerWidth','innerHTML','588920LiCyuW','width','_openedContextMenus','&#155;','context_menu_submenu_popover','224ISkMuj','style','auto','addEventListener','count','show','getBoundingClientRect','bottom','querySelectorAll','display','removeEventListener','target','div','key','contextmenu','_windowKeyUp','min','stopPropagation','remove','207mzbMFv','num','isPopoverOpen','options','markUndoItems','title','delete','left','3160696oUVOen','renderLevel','_contextMenuCss','reload','matches','context_menu_text','positionSubmenuPopover','context_menu_','span','context','1922OKsCgV','context_menu_marked','adoptedStyleSheets','shadowRoot','ul[popover]','action','contains','hidePopover','preventDefault','bind','context_menu_display','hideDescendantSubmenus','context_menu_divider','mousedown','createElement','29421NPliEy','click','parentElement','children','resize','close','checked','top','_windowResize','checkable','height','mouseenter','8529158mNOKAg','174EkFwvh','appendChild','className','innerHeight','closeAll','icon','classList','menu','context_menu','135060GeLLxj','max','add','forEach'];a=function(){return P;};return a();}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x77))/0x1*(-parseInt(o(0xae))/0x2)+-parseInt(o(0xa0))/0x3+parseInt(o(0xa6))/0x4*(-parseInt(o(0xa9))/0x5)+-parseInt(o(0x93))/0x6*(parseInt(o(0x86))/0x7)+parseInt(o(0xc9))/0x8+-parseInt(o(0xc1))/0x9*(parseInt(o(0x9c))/0xa)+parseInt(o(0x92))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4c7a6));function b(c,d){c=c-0x6e;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static [p(0x6f)]=css`
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
	  }`;static [p(0xb2)]=0x0;static [p(0xab)]=new Set();['menu'];[p(0xc4)];[p(0x76)];[p(0xc2)];['_menuElement'];constructor(c,d,e){const q=p;this[q(0xc2)]=ContextMenu['count']++,this[q(0x9a)]=c,this['options']=d,this['context']=e,this[q(0x70)](),this['_windowDown']=this['_windowDown'][q(0x80)](this),this['_windowKeyUp']=this['_windowKeyUp'][q(0x80)](this),this['_windowResize']=this[q(0x8e)][q(0x80)](this);}['reload'](){const r=p;let c=this['options']?.[r(0x7a)]??document;if(this[r(0xa1)]==null){this[r(0xa1)]=document[r(0x85)](r(0xba)),this[r(0xa1)][r(0x95)]=r(0x9b),this[r(0xa1)]['id']=r(0x74)+this['num'],this[r(0xa1)]['setAttribute']('popover',r(0xa5));if(c===document)document['body']['appendChild'](this[r(0xa1)]);else c[r(0x94)](this['_menuElement']);}this['_menuElement']['innerHTML']='',c['adoptedStyleSheets'][r(0xa3)](ContextMenu['_contextMenuCss'])<0x0&&(c[r(0x79)]=[...c[r(0x79)],ContextMenu['_contextMenuCss']]),this['_menuElement']['appendChild'](this['renderLevel'](this['menu']));}[p(0x6e)](c){const s=p;let d=document['createElement']('ul'),e=![];return c[s(0x9f)](f=>{const t=s;if(f[t(0xc6)]!=='-'){if(e){let k=document['createElement']('li');k['className']=t(0x83),e=![],d[t(0x94)](k);}let g=document[t(0x85)]('li'),h=document[t(0x85)](t(0x75));h[t(0x95)]='context_menu_icon_span';if(f[t(0x8c)]===!![])h['innerHTML']='✔';else(f[t(0x98)]??'')!=''?h['innerHTML']=f[t(0x98)]??'':h['innerHTML']=this[t(0xc4)]?.['defaultIcon']??'';let i=document['createElement'](t(0x75));i['className']=t(0x72),i['innerHTML']=f['title']??'';let j=document[t(0x85)](t(0x75));j[t(0x95)]='context_menu_sub_span';f[t(0x89)]!=null&&(j[t(0xa8)]=this[t(0xc4)]?.['subIcon']??t(0xac));g[t(0x94)](h),g['appendChild'](i),g['appendChild'](j);if(f['disabled'])g['setAttribute']('disabled','');else{if(f[t(0x8f)])g['addEventListener']('click',l=>{const u=t;l['stopPropagation'](),l['preventDefault'](),f['checked']=!f[u(0x8c)],h['innerHTML']=f[u(0x8c)]?'✔':f[u(0x98)]??this['options']?.['defaultIcon']??'';if(f['action'])f[u(0x7c)](l,f,this['context'],this);});else{if(f['action'])g['addEventListener'](t(0x87),l=>{const v=t;l[v(0xbf)](),l[v(0x7f)](),f['action']?.(l,f,this[v(0x76)],this),this[v(0x8b)]();});}this['options']?.['mode']=='undo'&&g[t(0xb1)]('mouseup',l=>{const w=t;l[w(0xbf)](),f[w(0x7c)]?.(l,f,this['context'],this),this[w(0x8b)]();});g['addEventListener'](t(0x91),()=>{const x=t;this['closeSiblingSubmenus'](g),this[x(0xc4)]?.['mode']=='undo'&&this['markUndoItems'](g);});if(f['children']!=null){let l=this['renderLevel'](f[t(0x89)]);this['configurePopoverSubmenu'](l),g[t(0x94)](l),g[t(0xb1)](t(0x91),()=>{this['openPopoverSubmenu'](g,l);});}}d[t(0x94)](g);}else e=!![];}),d;}[p(0xb7)](c){const y=p;let d=this['_menuElement'],e=this['options']?.['mouseOffset']!=null?this['options']['mouseOffset']:0x2;this[y(0xa2)](d),this['positionMenu'](d,c['clientX'],c['clientY'],e),d[y(0x99)]['add'](y(0x81)),c['preventDefault'](),ContextMenu['_openedContextMenus']['add'](this),window['addEventListener']('keyup',this['_windowKeyUp']),window[y(0xb1)]('resize',this['_windowResize']),window[y(0xb1)]('mousedown',this['_windowDown']),setTimeout(()=>{const z=y;if(!ContextMenu[z(0xab)]['has'](this))return;window[z(0xb1)](z(0xbc),this['_windowDown']);},0x96);}['_windowResize'](){const A=p;this[A(0x8b)]();}['_windowDown'](c){const B=p;c[B(0x7f)]();if(!(c['target']instanceof Node)||!this['_menuElement'][B(0x7d)](c[B(0xb9)]))this[B(0x8b)]();return![];}[p(0xbd)](c){const C=p;c[C(0xbb)]==='Escape'&&this['close']();}static[p(0xb3)](c,d,e,f){const D=p;let g=new ContextMenu(c,e,f);return g[D(0xb7)](d),g;}[p(0x8b)](){const E=p;this[E(0x82)](this['_menuElement']),this[E(0x7e)](this['_menuElement']),this['_menuElement'][E(0xc0)](),window[E(0xb8)](E(0x84),this['_windowDown']),window[E(0xb8)](E(0x8a),this['_windowResize']),window[E(0xb8)]('keyup',this[E(0xbd)]),setTimeout(()=>window['removeEventListener'](E(0xbc),this['_windowDown']),0xa),ContextMenu['_openedContextMenus'][E(0xc7)](this);}static[p(0x97)](){const F=p;for(const d of ContextMenu[F(0xab)]['values']())d['close']();}['configurePopoverSubmenu'](c){const G=p;c['classList'][G(0x9e)](G(0xad)),c['setAttribute']('popover',G(0xa5));}[p(0xc5)](c){const H=p;if(c[H(0x88)]==null)return;let d=!![];for(let e of c['parentElement']['children']){if(d)e['classList']['add'](H(0x78));else e['classList']['remove'](H(0x78));if(e==c)d=![];}}['closeSiblingSubmenus'](c){const I=p;if(c['parentElement']==null)return;for(const d of c['parentElement']['children']){d!==c&&this[I(0x82)](d);}}['hideDescendantSubmenus'](c){const J=p,d=c[J(0xb6)](J(0x7b));for(const e of d){this[J(0x7e)](e);}}['openPopoverSubmenu'](c,d){const K=p;this[K(0xa2)](d),this[K(0x73)](c,d);}['showPopover'](c){if(this['isPopoverOpen'](c))return;c['showPopover']();}['hidePopover'](c){const L=p;if(c==null||!this[L(0xc3)](c))return;c[L(0x7e)]();}[p(0xc3)](c){const M=p;return c[M(0x71)](':popover-open');}['positionMenu'](c,d,e,f){const N=p,g=c['offsetWidth']+0x4,h=c['offsetHeight']+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c[N(0xaf)]['left']=Math['max'](0x0,Math['min'](m,window[N(0xa7)]-g))+'px',c['style'][N(0x8d)]=Math['max'](0x0,Math['min'](n,window['innerHeight']-h))+'px';}[p(0x73)](c,d){const O=p,e=c['getBoundingClientRect'](),f=d[O(0xb4)](),g=d['offsetWidth']||f[O(0xaa)],h=d['offsetHeight']||f[O(0x90)],i=window[O(0xa7)]-e[O(0xa4)],j=e[O(0xc8)];let k=e[O(0xa4)];i<g&&j>i&&(k=e['left']-g);const l=window[O(0x96)]-e['top'],m=e['bottom'];let n=e[O(0x8d)];l<h&&m>l&&(n=e[O(0xb5)]-h),d['style'][O(0xc8)]=Math[O(0x9d)](0x0,Math[O(0xbe)](k,window[O(0xa7)]-g))+'px',d[O(0xaf)]['top']=Math['max'](0x0,Math['min'](n,window['innerHeight']-h))+'px',d[O(0xaf)][O(0xa4)]='auto',d['style'][O(0xb5)]=O(0xb0);}}