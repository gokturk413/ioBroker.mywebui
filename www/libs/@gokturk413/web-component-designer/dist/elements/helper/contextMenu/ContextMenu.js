const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0xa3))/0x1+parseInt(o(0x92))/0x2*(-parseInt(o(0xbe))/0x3)+parseInt(o(0xc6))/0x4*(parseInt(o(0xd2))/0x5)+parseInt(o(0xe1))/0x6+parseInt(o(0xa1))/0x7+-parseInt(o(0xeb))/0x8*(-parseInt(o(0xe4))/0x9)+-parseInt(o(0x94))/0xa*(parseInt(o(0xb0))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbd12f));import{css}from'@node-projects/base-custom-webcomponent';export class ContextMenu{static [p(0xc5)]=css`
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
		color: light-dark(#1d2733, #e2e6ec);
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
		padding: 3px;
		margin: 0;
		border: 1px solid light-dark(#d4dae3, #3b4250);
		background-color: light-dark(#f5f7f7, #252b38);
		color: light-dark(#1d2733, #e2e6ec);
		box-shadow: 0 2px 10px rgba(0,0,0,.45);
    max-inline-size: calc(100vw - 8px);
    max-block-size: calc(100vh - 8px);
    overflow: auto;
    overscroll-behavior: contain;
    isolation: isolate;
	  }

    .context_menu ul[popover] {
    inset: auto;
    margin: 0;
    border: none;
    }
	  
	  .context_menu li {
		padding: 0;
		padding-right: 1.7em;
		cursor: pointer;
		white-space: nowrap;
		display: flex;
		align-items: center;
	  }
	  
	  .context_menu li:hover {
		background-color: var(--accent, #2680eb);
		color: #fff;
	  }
	  
	  .context_menu li .context_menu_icon_span {	
		width: 28px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	  }

	  .context_menu li .context_menu_icon_span img {	
		height: 18px;
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
		border-bottom: 1px solid light-dark(#d4dae3, #3b4250);
		margin: 5px;
		padding: 0;
		cursor: default;
	  }
	  
	  .context_menu li.context_menu_divider:hover {
		background-color: inherit;
	  }
	  
	  .context_menu li[disabled=""] {
		color: light-dark(#9aa3b0, #6b7684);
		cursor: default;
	  }
	  
	  .context_menu li[disabled=""]:hover {
		background-color: inherit;
	  }
	  
	  .context_menu li.context_menu_marked {
		background-color: var(--accent, #5ebdec);
		color: #fff;
	  }`;static ['count']=0x0;static ['_openedContextMenus']=new Set();['menu'];['options'];[p(0xa8)];[p(0xa6)];['_menuElement'];constructor(c,d,e){const q=p;this[q(0xa6)]=ContextMenu[q(0xae)]++,this[q(0xa0)]=c,this[q(0x96)]=d,this['context']=e,this['reload'](),this['_windowDown']=this['_windowDown']['bind'](this),this[q(0xab)]=this['_windowKeyUp']['bind'](this),this[q(0xca)]=this[q(0xca)][q(0xec)](this);}['reload'](){const r=p;let c=this['options']?.['shadowRoot']??document;if(this[r(0xbc)]==null){this[r(0xbc)]=document['createElement']('div'),this[r(0xbc)]['className']=r(0xb6),this['_menuElement']['id']=r(0xbb)+this['num'],this['_menuElement'][r(0xda)](r(0xd9),'manual');if(c===document)document['body'][r(0x99)](this['_menuElement']);else c[r(0x99)](this[r(0xbc)]);}this['_menuElement']['innerHTML']='',c[r(0xd6)][r(0xc3)](ContextMenu[r(0xc5)])<0x0&&(c['adoptedStyleSheets']=[...c['adoptedStyleSheets'],ContextMenu[r(0xc5)]]),this[r(0xbc)][r(0x99)](this[r(0xe6)](this[r(0xa0)]));}['renderLevel'](c){const s=p;let d=document[s(0xaf)]('ul'),e=![];return c[s(0xdd)](f=>{const t=s;if(f['title']!=='-'){if(e){let k=document['createElement']('li');k['className']=t(0x9c),e=![],d[t(0x99)](k);}let g=document[t(0xaf)]('li'),h=document[t(0xaf)](t(0x9b));h[t(0xea)]=t(0xdf);if(f[t(0xba)]===!![])h['innerHTML']='✔';else(f[t(0xa7)]??'')!=''?h['innerHTML']=f['icon']??'':h['innerHTML']=this['options']?.['defaultIcon']??'';let i=document[t(0xaf)](t(0x9b));i[t(0xea)]=t(0xe3),i['innerHTML']=f['title']??'';let j=document[t(0xaf)](t(0x9b));j[t(0xea)]='context_menu_sub_span';f[t(0xc2)]!=null&&(j[t(0xaa)]=this[t(0x96)]?.[t(0xdb)]??t(0xad));g['appendChild'](h),g['appendChild'](i),g[t(0x99)](j);if(f[t(0xe5)])g['setAttribute']('disabled','');else{if(f['checkable'])g['addEventListener'](t(0xcf),l=>{const u=t;l[u(0xe2)](),l[u(0x95)](),f['checked']=!f['checked'],h[u(0xaa)]=f[u(0xba)]?'✔':f['icon']??this[u(0x96)]?.[u(0xe9)]??'';if(f[u(0xa4)])f[u(0xa4)](l,f,this[u(0xa8)],this);});else{if(f[t(0xa4)])g['addEventListener'](t(0xcf),l=>{const v=t;l['stopPropagation'](),l['preventDefault'](),f[v(0xa4)]?.(l,f,this[v(0xa8)],this),this[v(0xc8)]();});}this['options']?.['mode']=='undo'&&g['addEventListener']('mouseup',l=>{const w=t;l[w(0xe2)](),f[w(0xa4)]?.(l,f,this[w(0xa8)],this),this['close']();});g['addEventListener']('mouseenter',()=>{const x=t;this[x(0xa9)](g),this['options']?.['mode']==x(0xb9)&&this['markUndoItems'](g);});if(f['children']!=null){let l=this['renderLevel'](f[t(0xc2)]);this[t(0xa2)](l),g[t(0x99)](l),g[t(0xb1)]('mouseenter',()=>{const y=t;this[y(0xdc)](g,l);});}}d[t(0x99)](g);}else e=!![];}),d;}[p(0xc1)](c){const z=p;let d=this[z(0xbc)],e=this[z(0x96)]?.['mouseOffset']!=null?this['options'][z(0xc4)]:0x2;this[z(0xe7)](d),this[z(0xde)](d,c[z(0xd7)],c[z(0xb4)],e),d[z(0xb3)]['add'](z(0xe0)),c[z(0x95)](),ContextMenu[z(0xb7)]['add'](this),window[z(0xb1)]('keyup',this[z(0xab)]),window[z(0xb1)](z(0xc9),this['_windowResize']),window[z(0xb1)](z(0x93),this['_windowDown']),setTimeout(()=>{const A=z;if(!ContextMenu['_openedContextMenus']['has'](this))return;window['addEventListener'](A(0xd4),this['_windowDown']);},0x96);}['_windowResize'](){const B=p;this[B(0xc8)]();}[p(0xe8)](c){const C=p;c['preventDefault']();if(!(c[C(0xb5)]instanceof Node)||!this[C(0xbc)][C(0xd8)](c[C(0xb5)]))this[C(0xc8)]();return![];}['_windowKeyUp'](c){const D=p;c[D(0x9d)]==='Escape'&&this['close']();}static[p(0x9a)](c,d,e,f){let g=new ContextMenu(c,e,f);return g['display'](d),g;}['close'](){const E=p;this[E(0xb2)](this['_menuElement']),this['hidePopover'](this['_menuElement']),this['_menuElement']['remove'](),window['removeEventListener']('mousedown',this['_windowDown']),window[E(0x98)]('resize',this[E(0xca)]),window['removeEventListener']('keyup',this['_windowKeyUp']),setTimeout(()=>window[E(0x98)]('contextmenu',this['_windowDown']),0xa),ContextMenu[E(0xb7)]['delete'](this);}static['closeAll'](){const F=p;for(const d of ContextMenu[F(0xb7)]['values']())d['close']();}[p(0xa2)](c){const G=p;c['classList'][G(0xb8)]('context_menu_submenu_popover'),c['setAttribute'](G(0xd9),'manual');}[p(0x9f)](c){const H=p;if(c['parentElement']==null)return;let d=!![];for(let e of c['parentElement'][H(0xc2)]){if(d)e['classList']['add'](H(0xd1));else e[H(0xb3)]['remove']('context_menu_marked');if(e==c)d=![];}}['closeSiblingSubmenus'](c){const I=p;if(c['parentElement']==null)return;for(const d of c['parentElement'][I(0xc2)]){d!==c&&this['hideDescendantSubmenus'](d);}}[p(0xb2)](c){const J=p,d=c[J(0x90)]('ul[popover]');for(const e of d){this[J(0xed)](e);}}[p(0xdc)](c,d){this['showPopover'](d),this['positionSubmenuPopover'](c,d);}['showPopover'](c){const K=p;if(this['isPopoverOpen'](c))return;c[K(0xe7)]();}[p(0xed)](c){if(c==null||!this['isPopoverOpen'](c))return;c['hidePopover']();}[p(0x97)](c){const L=p;return c[L(0xac)](L(0xce));}['positionMenu'](c,d,e,f){const M=p,g=c[M(0xcc)]+0x4,h=c[M(0xbd)]+0x4,i=window[M(0xd0)]-d,j=d,k=window[M(0xa5)]-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style'][M(0x9e)]=Math[M(0xc7)](0x0,Math[M(0x91)](m,window[M(0xd0)]-g))+'px',c['style'][M(0xcd)]=Math['max'](0x0,Math[M(0x91)](n,window['innerHeight']-h))+'px';}['positionSubmenuPopover'](c,d){const N=p,e=c['getBoundingClientRect'](),f=d[N(0xd3)](),g=d['offsetWidth']||f['width'],h=d['offsetHeight']||f[N(0xc0)],i=window[N(0xd0)]-e['right'],j=e[N(0x9e)];let k=e['right'];i<g&&j>i&&(k=e[N(0x9e)]-g);const l=window['innerHeight']-e[N(0xcd)],m=e[N(0xcb)];let n=e['top'];l<h&&m>l&&(n=e['bottom']-h),d[N(0xbf)]['left']=Math['max'](0x0,Math['min'](k,window[N(0xd0)]-g))+'px',d['style']['top']=Math['max'](0x0,Math['min'](n,window[N(0xa5)]-h))+'px',d['style']['right']=N(0xd5),d[N(0xbf)]['bottom']='auto';}}function b(c,d){c=c-0x90;const e=a();let f=e[c];return f;}function a(){const O=['show','span','context_menu_divider','key','left','markUndoItems','menu','9482186itPkYX','configurePopoverSubmenu','1044551fdQGlt','action','innerHeight','num','icon','context','closeSiblingSubmenus','innerHTML','_windowKeyUp','matches','&#155;','count','createElement','8657LGwljh','addEventListener','hideDescendantSubmenus','classList','clientY','target','context_menu','_openedContextMenus','add','undo','checked','context_menu_','_menuElement','offsetHeight','57nMFCyt','style','height','display','children','indexOf','mouseOffset','_contextMenuCss','4XjRUpp','max','close','resize','_windowResize','bottom','offsetWidth','top',':popover-open','click','innerWidth','context_menu_marked','7044005DLkqTr','getBoundingClientRect','contextmenu','auto','adoptedStyleSheets','clientX','contains','popover','setAttribute','subIcon','openPopoverSubmenu','forEach','positionMenu','context_menu_icon_span','context_menu_display','6423456pPbchj','stopPropagation','context_menu_text','9ebNLoh','disabled','renderLevel','showPopover','_windowDown','defaultIcon','className','165392STHcSM','bind','hidePopover','querySelectorAll','min','2866oEEEHv','mousedown','25520bmtOwD','preventDefault','options','isPopoverOpen','removeEventListener','appendChild'];a=function(){return O;};return a();}