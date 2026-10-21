const p=b;function a(){const N=['configurePopoverSubmenu','980InXiTv','popover','children','remove','menu','adoptedStyleSheets','context_menu_sub_span','_openedContextMenus','addEventListener','checked','innerWidth','indexOf','innerHeight','action','innerHTML','335662mMxoPf','defaultIcon','shadowRoot','_contextMenuCss','icon','setAttribute','offsetHeight','show','disabled','openPopoverSubmenu','offsetWidth','renderLevel','hideDescendantSubmenus','9EydinA','53229tXjDlX','values','keyup','context_menu_submenu_popover','mouseOffset','Escape','context_menu_marked','height',':popover-open','mode','closeSiblingSubmenus','context','span','positionMenu','width','min','classList','54BzjVJp','contextmenu','resize','left','undo','112686fuEkQO','createElement','parentElement','auto','_windowDown','title','appendChild','mouseup','showPopover','89188VaPtUf','options','contains','max','clientY','className','num','hidePopover','1249767HkMFtf','_windowResize','display','bind','div','bottom','add','count','preventDefault','top','close','removeEventListener','ul[popover]','126200CqiHSn','8UqZlOp','style','1111525XvPoHj','_menuElement','_windowKeyUp','isPopoverOpen','target','right'];a=function(){return N;};return a();}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x16c))/0x1+parseInt(o(0x19a))/0x2+parseInt(o(0x1a7))/0x3*(parseInt(o(0x181))/0x4)+-parseInt(o(0x184))/0x5+-parseInt(o(0x15e))/0x6*(parseInt(o(0x163))/0x7)+parseInt(o(0x182))/0x8*(-parseInt(o(0x174))/0x9)+-parseInt(o(0x18b))/0xa*(-parseInt(o(0x1a8))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x22899));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x152;const e=a();let f=e[c];return f;}export class ContextMenu{static ['_contextMenuCss']=css`
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
	  }`;static ['count']=0x0;static [p(0x192)]=new Set();[p(0x18f)];['options'];[p(0x158)];['num'];['_menuElement'];constructor(c,d,e){const q=p;this[q(0x172)]=ContextMenu[q(0x17b)]++,this['menu']=c,this['options']=d,this['context']=e,this['reload'](),this[q(0x167)]=this['_windowDown']['bind'](this),this['_windowKeyUp']=this[q(0x186)][q(0x177)](this),this['_windowResize']=this[q(0x175)][q(0x177)](this);}['reload'](){const r=p;let c=this[r(0x16d)]?.[r(0x19c)]??document;if(this[r(0x185)]==null){this[r(0x185)]=document[r(0x164)](r(0x178)),this[r(0x185)][r(0x171)]='context_menu',this['_menuElement']['id']='context_menu_'+this['num'],this['_menuElement'][r(0x19f)](r(0x18c),'manual');if(c===document)document['body'][r(0x169)](this[r(0x185)]);else c[r(0x169)](this['_menuElement']);}this[r(0x185)]['innerHTML']='',c[r(0x190)][r(0x196)](ContextMenu[r(0x19d)])<0x0&&(c[r(0x190)]=[...c[r(0x190)],ContextMenu['_contextMenuCss']]),this['_menuElement']['appendChild'](this[r(0x1a5)](this['menu']));}['renderLevel'](c){let d=document['createElement']('ul'),e=![];return c['forEach'](f=>{const s=b;if(f[s(0x168)]!=='-'){if(e){let k=document[s(0x164)]('li');k[s(0x171)]='context_menu_divider',e=![],d[s(0x169)](k);}let g=document['createElement']('li'),h=document['createElement']('span');h['className']='context_menu_icon_span';if(f['checked']===!![])h[s(0x199)]='✔';else(f['icon']??'')!=''?h['innerHTML']=f['icon']??'':h[s(0x199)]=this[s(0x16d)]?.[s(0x19b)]??'';let i=document[s(0x164)](s(0x159));i[s(0x171)]='context_menu_text',i['innerHTML']=f['title']??'';let j=document[s(0x164)]('span');j[s(0x171)]=s(0x191);f[s(0x18d)]!=null&&(j['innerHTML']=this['options']?.['subIcon']??'&#155;');g['appendChild'](h),g[s(0x169)](i),g['appendChild'](j);if(f[s(0x1a2)])g[s(0x19f)](s(0x1a2),'');else{if(f['checkable'])g[s(0x193)]('click',l=>{const t=s;l['stopPropagation'](),l['preventDefault'](),f[t(0x194)]=!f[t(0x194)],h[t(0x199)]=f['checked']?'✔':f[t(0x19e)]??this['options']?.['defaultIcon']??'';if(f[t(0x198)])f[t(0x198)](l,f,this[t(0x158)],this);});else{if(f['action'])g['addEventListener']('click',l=>{const u=s;l['stopPropagation'](),l[u(0x17c)](),f['action']?.(l,f,this['context'],this),this[u(0x17e)]();});}this['options']?.[s(0x156)]==s(0x162)&&g['addEventListener'](s(0x16a),l=>{const v=s;l['stopPropagation'](),f['action']?.(l,f,this['context'],this),this[v(0x17e)]();});g['addEventListener']('mouseenter',()=>{const w=s;this[w(0x157)](g),this['options']?.['mode']==w(0x162)&&this['markUndoItems'](g);});if(f[s(0x18d)]!=null){let l=this[s(0x1a5)](f['children']);this[s(0x18a)](l),g[s(0x169)](l),g[s(0x193)]('mouseenter',()=>{this['openPopoverSubmenu'](g,l);});}}d['appendChild'](g);}else e=!![];}),d;}[p(0x176)](c){const x=p;let d=this['_menuElement'],e=this[x(0x16d)]?.[x(0x1ac)]!=null?this['options'][x(0x1ac)]:0x2;this[x(0x16b)](d),this['positionMenu'](d,c['clientX'],c[x(0x170)],e),d['classList']['add']('context_menu_display'),c['preventDefault'](),ContextMenu[x(0x192)][x(0x17a)](this),window[x(0x193)](x(0x1aa),this['_windowKeyUp']),window[x(0x193)]('resize',this['_windowResize']),window['addEventListener']('mousedown',this['_windowDown']),setTimeout(()=>{const y=x;if(!ContextMenu[y(0x192)]['has'](this))return;window[y(0x193)]('contextmenu',this['_windowDown']);},0x96);}[p(0x175)](){this['close']();}['_windowDown'](c){const z=p;c[z(0x17c)]();if(!(c['target']instanceof Node)||!this['_menuElement'][z(0x16e)](c[z(0x188)]))this[z(0x17e)]();return![];}[p(0x186)](c){const A=p;c['key']===A(0x152)&&this['close']();}static[p(0x1a1)](c,d,e,f){const B=p;let g=new ContextMenu(c,e,f);return g[B(0x176)](d),g;}['close'](){const C=p;this[C(0x1a6)](this['_menuElement']),this['hidePopover'](this[C(0x185)]),this[C(0x185)][C(0x18e)](),window['removeEventListener']('mousedown',this['_windowDown']),window['removeEventListener'](C(0x160),this[C(0x175)]),window[C(0x17f)](C(0x1aa),this['_windowKeyUp']),setTimeout(()=>window[C(0x17f)](C(0x15f),this[C(0x167)]),0xa),ContextMenu['_openedContextMenus']['delete'](this);}static['closeAll'](){const D=p;for(const d of ContextMenu[D(0x192)][D(0x1a9)]())d[D(0x17e)]();}['configurePopoverSubmenu'](c){const E=p;c['classList']['add'](E(0x1ab)),c[E(0x19f)](E(0x18c),'manual');}['markUndoItems'](c){const F=p;if(c['parentElement']==null)return;let d=!![];for(let e of c['parentElement'][F(0x18d)]){if(d)e[F(0x15d)]['add'](F(0x153));else e[F(0x15d)]['remove'](F(0x153));if(e==c)d=![];}}[p(0x157)](c){const G=p;if(c[G(0x165)]==null)return;for(const d of c[G(0x165)]['children']){d!==c&&this[G(0x1a6)](d);}}['hideDescendantSubmenus'](c){const H=p,d=c['querySelectorAll'](H(0x180));for(const e of d){this[H(0x173)](e);}}[p(0x1a3)](c,d){this['showPopover'](d),this['positionSubmenuPopover'](c,d);}[p(0x16b)](c){const I=p;if(this[I(0x187)](c))return;c['showPopover']();}[p(0x173)](c){const J=p;if(c==null||!this[J(0x187)](c))return;c['hidePopover']();}[p(0x187)](c){const K=p;return c['matches'](K(0x155));}[p(0x15a)](c,d,e,f){const L=p,g=c[L(0x1a4)]+0x4,h=c['offsetHeight']+0x4,i=window['innerWidth']-d,j=d,k=window['innerHeight']-e,l=e;let m=d+f;i<g&&j>i&&(m=d-g-f);let n=e+f;k<h&&l>k&&(n=e-h-f),c['style']['left']=Math[L(0x16f)](0x0,Math[L(0x15c)](m,window['innerWidth']-g))+'px',c['style']['top']=Math['max'](0x0,Math['min'](n,window[L(0x197)]-h))+'px';}['positionSubmenuPopover'](c,d){const M=p,e=c['getBoundingClientRect'](),f=d['getBoundingClientRect'](),g=d[M(0x1a4)]||f[M(0x15b)],h=d[M(0x1a0)]||f[M(0x154)],i=window[M(0x195)]-e[M(0x189)],j=e[M(0x161)];let k=e[M(0x189)];i<g&&j>i&&(k=e[M(0x161)]-g);const l=window['innerHeight']-e['top'],m=e['bottom'];let n=e[M(0x17d)];l<h&&m>l&&(n=e[M(0x179)]-h),d[M(0x183)]['left']=Math[M(0x16f)](0x0,Math[M(0x15c)](k,window[M(0x195)]-g))+'px',d[M(0x183)]['top']=Math[M(0x16f)](0x0,Math['min'](n,window[M(0x197)]-h))+'px',d['style'][M(0x189)]=M(0x166),d['style']['bottom']='auto';}}