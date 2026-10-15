const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x124))/0x1*(-parseInt(n(0xfd))/0x2)+parseInt(n(0x140))/0x3+-parseInt(n(0x110))/0x4*(parseInt(n(0x12d))/0x5)+-parseInt(n(0x118))/0x6+parseInt(n(0x132))/0x7+-parseInt(n(0x100))/0x8*(-parseInt(n(0xf4))/0x9)+parseInt(n(0x147))/0xa*(-parseInt(n(0x111))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe475a));import{css,DomHelper,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function b(c,d){c=c-0xef;const e=a();let f=e[c];return f;}import{DomConverter}from'./DomConverter.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';function a(){const T=['onclick','serviceContainer','toString','executeCommand','children','removeAllChildnodes','instanceServiceContainer','createDesignItems','childCount','5259573WsHXjt','backgroundColor','appendChild','s-hor','canvas','_zoomInput','style','16352410OAeGeH','getLastServiceWhere','_designerCanvas','provideButtons','slot','zoomPoint','initialize','round','9GwzunU','s-vert','Enter','designerWidth','deltaX','lowertoolbar','removeAllOverlays','_internalSetDesignItems','constructor','878378yYWuXH','deepskyblue','afterend','5655544qsEArm','offsetHeight','define','ctrlKey','detail','zoomIncrease','scrollbar-input','additionalStyles','_lowertoolbar','_onScrollbar','clearChildren','_restoreCachedInititalValues','canvasOffset','alignOnSnap','zoomToFit','designerOffsetHeight','8QxqhKM','11JvjDoY','onZoomFactorChanged','oncontextmenu','getNormalizedEventCoordinates','target','node-projects-designer-view','_sHor','7423878nFFtTX','_toolbar','offsetWidth','value','outer','parseDesignerHTML','designerCanvas','designerHeight','wrapInDesigner','canExecuteCommand','parse','addEventListener','4GYUALk','alignOnGrid','select','zoomReset','setDesignItems','rootDesignItem','getDesignerHTML','_onWheel','deltaY','2747390NiyauZ','readOnly','htmlParserService','_sVert','zoomFactor','4832730tPbvso','decrementSmall','afterbegin','designerOffsetWidth','_getDomElement'];a=function(){return T;};return a();}import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[o(0x117)];get['serviceContainer'](){const p=o;return this[p(0x149)]['serviceContainer'];}set[o(0x138)](c){const q=o;this['_designerCanvas'][q(0x138)]=c;}get['instanceServiceContainer'](){const r=o;return this['_designerCanvas'][r(0x13d)];}set['instanceServiceContainer'](c){const s=o;this[s(0x149)][s(0x13d)]=c;}[o(0x149)];get[o(0x11e)](){const t=o;return this[t(0x149)];}get['readOnly'](){const u=o;return this[u(0x149)][u(0x12e)];}set['readOnly'](c){const v=o;this[v(0x149)][v(0x12e)]=c;}[o(0x145)];['_lowertoolbar'];['_toolbar'];static ['style']=css`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      position: relative;
      transform: translateZ(0);
      overflow: hidden;
    }
    * {
      touch-action: none;
    }
    #lowertoolbar {
      height: 16px;
      background: #787f82;
      display: flex;
      bottom: 0;
      position: absolute;
      font-size: 12px;
      width: 100%;
    }
    input {
      width: 40px;
      height: 16px;
      padding: 0;
      border: 0;
      font-size: 12px;
      text-align: center;
      margin-right: 1px;
    }
    .toolbar-control {
      width: 16px;
      height: 16px;
      display: block;
      margin-right: 1px;
      cursor: default;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .selected {
      background-color: deepskyblue;
    }
    .toolbar-control:hover {
      background-color:rgba(164,206,249,.6);
    }
    #outer {
      user-select: none;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    #canvas {
      left: 24px;
      width: calc(100% - 24px - 16px);
      height: calc(100% - 32px);
    }

    #tool-bar {
      width: 24px;
      height: calc(100% - 32px);
      position: absolute;
      background-color: lightgray;      
    }
  
    .zoom-in {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAn9JREFUeNqkU11o01AUTtI06U/6tzHWbnNVS+k67FAG/gwfZEOcCrpNEBwEH2Q+Otqxh+5VEaHYV18UwQd9sk4Q+6CUKogbtSoM10qftJS2iGuT/iRpshvvDZu4DHHggY+TnHu+795zz7m4qqrYxfA6pjerlcHMZvMQQRCL8Hccoh+iBJECAMQEQci3Wk2MxP5iqgqmJUmIB3xkdTRoKgQG6Wr1JxBX1oTQx3UxCdcjMO2ZJiCK4g4y3HUIACV+bsL5dSRAWfwe636z0WBzWEFzn5vku5xyIZGsx2UF5AhEaDYbO8Dz3KLPi1X9B2iTy0pRiDx5/Z2bJgmGwDH8WMhuDxzEf6A8TYDneT3GR4JMzcVQThNlcCtANaM48pICutodxXTkkI1HeVslSPor6B/wWL7B3Z1n2KR3O3h05rkDOkd2eYoSxM025PVrAgAQeoFSuSLI3Q66jpJNRsIWPLvM5JJTTUkGGsqVtgJ5JU3AaLTqBVKZT9xh7yDT2Gh05G4bNQBzGETkBbkMVAxbzdadMJbSBDzCHXgKgKGZQJCp0IP32dnEaKhd6nOZAay7mXk6UUGeIHDDh88NKb0qumjaHiN391/1GjtrJ6ZPSb33H9eJYomuTJ601Qf7SKVYVlqplZblxRvOThrtEaC28qSOPAwncCYSWbzJsrO3XP4br9KZa1fTmcaOSTQYLDFFaeURh/yDfLynp/fCwkI0yrKX79ZqG49sUr2A44a3u+d08/fXVhfAeZ8vcDocjs6z7KV7xeL3JzBcwPZgmoAkScGlpdvzc3NXHuZyXxIwlMX2aJoAfFkvx8aGnRzH5WEpr7cXuerKPwVw1Lb/sV8CDACbf0U37X3NqwAAAABJRU5ErkJggg==);
    }
    .zoom-out {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmVJREFUeNqkU01oE0EUnv3Nf0xsS01jEzWUNCUplh7U4kEiVVEQqyBYWDxor5am5JBeFRGCuXpRBA8KHqIHMYISohdTYlQo2kguaghJUNvd/O1udjvr7NKWZHuw4IMHM/v9zHu8t5iiKCAYDAKi/xQ4MHEdbIXFYgUmk2kUx/EouoZRulGWUaYhhHGe5wutVhOQKtk3/RToQ1HgjCjyCb+PrE0GjEW/x1Cr/YFCdoUPffwqpBAeQbRnmoEgCD1i9OoohHLi7EnHt3E/bfb0m/pwDGBeF04P77Mpex1SMZliE5IMV3FV0Gw2erJe56I+L6iNHDQYnRaaVsXb5uh8JGS3+w9hv1SeVkG9Xtd3EB4PDBecVtplpAmHKMMesN2R2Ymg7fer9PfwZgui3sC932X+gV53nGZSXj2Yf36B5oWNNtK5NQMIcT2nXKnyUt8eA6uSUf1YNyhKsFmptmWkK2sGFGXRG6Rzn7jDXo+1sdboSBSJEd0gVABYzrMOpEtrBi7+DqoCAnUn1JTo0IP3+dnkZKhdHnKaIEUSXRPCiA+fG2JmWXAaDPY4uXP+ipfqrBybOSEO3n/M4qWyoXrmuE30DJHWUkVupbMt44u3nJ2k7BGotAqkTjyGNvBiJBK9yTCzt5wjN15ncteuZnKNnk0kCHNcllsFVUN2iY8ODAyeX1yMxRjm8t319bVHNpEtYhjxbseago3t0+YU4Dmfzz+9sBCbZ5hL90qln0/Q5yLYRWgGoigGlpZuz8/NXXm4uvolqY4a7DI0A/RnvZyaGnNwHFdArbzZArla9p8GmDq2/4m/AgwATHQSD48kJDUAAAAASUVORK5CYII=);
    }
    .snap-grid {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAblJREFUeNqkUjtLA0EQnntFyKNKJdiFgIlGC5G0FlaaIsYgiKAgKIKdjbV/wM7GImBhI6JFMFWKK3yBimBAhJDuUEgimMSYS0hunbncHRtFjLjw7X7z7ezszM4KjDEQRRG+jnlEgvYAAgLAJpoT1tYdA9gzAAqLuC/DD4N1EZC87v1IYnZ0MBj0k/6Szw/nTs7GO+8f62gWBCuDHTRG+ABxgGScsd3JlYWlJogu9TSjkT41NzM0AEbr5uDocJmxLTv3CCJpgbRkAKcWpq14vP7scVqrVKsbBOKktayS7BL4RzB5uxvAo7++SfV6vYnmBenESaM9/qCESFt4pPUJJzrlLpe/vQ9pTeex8A0EQcggwILJo9EohMPhNVW9ZqFQaJvsWCzWozGuCxJ3gck1TYNGo+Hy+XxQKpXalUoFisUi1Go1RyM/uwtZLsADYkxRlGnMZLXT6QQkSSqglsIV0HY0XddTdgkqV4LD6YPJsgwYzLSJEygQraz70YDvRg9Hh3O8DdptM1uTEwzDMDnvTHVfWfy+D8592W4Jt1wJfXOnC0h8XMw/cbuEHOKZc/iNX9qC2cb/jE8BBgAvhdOb37HVsgAAAABJRU5ErkJggg==);
    }
    .snap-guide {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYVJREFUeNqkU7tKA1EQnbs3CnlVqbQNARMjFilS+AnZQhIbW0ER/AA/wlYbhXR2wUKx0iKNYGMKDViEdEIgieBujGvCPpyz7sK6iWLIwJk798zsuXsfIxzHoXksAqcoij+vMbYq7MoszGxaEB3wtODlH3i5E5uojck210RCgq7SJie4MC0TsdO1cim/lMmkwHdarZWni+t16/1jz/FElJBAGc5imLzyakXNG0IuVo+OnwHE4JCzgisG7BJu/I3CQjyRuq1dvWi6vg8gBofcOHgGAZO+AFv88/VNDofDEcd3IBCD43ycfhEowY28Sazfnzh1cKMggWsUQvi4waiqKuVyud16/d7JZrOHxWJxKudMuQV3C81mk3RdX0wmk9Tr9UxN06jb7dJgMPjBwQRUAu/AtWg0SpZl7TDSUso2/1UVNWHOMIwJARzWBhcQwMXu1oJb9Ufbtsk0zYktPLrvgD8E/mWeYoNxxlj2xoZ3qI2/YrePQs10PksjTRPozCog5m3nLwEGABrLzseuHT6IAAAAAElFTkSuQmCC);
    }
    
    .bottom-scroll {
      width: calc(100% - 16px);
      position: absolute;
      bottom: 16px;
      height: 16px;
      box-sizing: border-box;
      z-index: 1;
    }
    .right-scroll {
      height: calc(100% - 32px);
      position: absolute;
      right: 0;
      top: 0;
      width: 16px;
      box-sizing: border-box;
      z-index: 1;
    }
    .bottom-right {
      width: 16px;
      height: 16px;
      bottom: 16px;
      right: 0;
      position: absolute;
      background: #f0f0f0;
    }`;static ['template']=html`
    <div id="outer">
      <node-projects-plain-scrollbar id="s-hor" value="0.5" class="bottom-scroll"></node-projects-plain-scrollbar>
      <node-projects-plain-scrollbar id="s-vert" value="0.5" orientation="vertical" class="right-scroll">
      </node-projects-plain-scrollbar>
      <div class="bottom-right"></div>
      <div id="lowertoolbar">
        <input id="zoomInput" type="text" value="100%">
        <div title="decrease zoom" id="zoomIncrease" class="toolbar-control zoom-in"></div>
        <div title="increase zoom" id="zoomDecrease" class="toolbar-control zoom-out"></div>
        <div title="reset zoom" id="zoomReset" class="toolbar-control"
          style="width: 16px; height: 16px; font-size: 14px; display: flex; align-items: center; justify-content: center;">1
        </div>
        <div title="zoom to fit" id="zoomFit" class="toolbar-control"
          style="width: 16px; height: 16px; font-size: 8px; display: flex; align-items: center; justify-content: center;">
          100%</div>
        <div title="snap to grid" id="alignGrid" class="toolbar-control snap-grid"></div>
        <div title="snap to elements" id="alignSnap" class="toolbar-control snap-guide"></div>
      </div>
    </div>`;constructor(c=![]){const w=o;super(),this[w(0x10b)](),this[w(0x130)]=this[w(0x136)](w(0xf5)),this['_sHor']=this['_getDomElement'](w(0x143));const d=this['_getDomElement'](w(0x11c));this[w(0x149)]=new DesignerCanvas(c),this[w(0x149)]['id']=w(0x144),this[w(0x149)][w(0x142)](document['createElement'](w(0xf0))),d['insertAdjacentElement'](w(0x134),this[w(0x149)]),this[w(0x119)]=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this[w(0x130)]['insertAdjacentElement'](w(0xff),this[w(0x119)]),this[w(0x149)][w(0x112)]['on'](()=>{const x=w;this[x(0x145)][x(0x11b)]=Math[x(0xf3)](this['_designerCanvas']['zoomFactor']*0x64)+'%';const k=this['designerCanvas']['canvasOffset'],l=this[x(0x11e)][x(0x135)]>this[x(0x11e)]['offsetWidth']?this['designerCanvas']['designerOffsetWidth']:this[x(0x11e)][x(0x11a)],m=this[x(0x11e)]['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this['designerCanvas'][x(0x10f)]:this[x(0x11e)][x(0x101)];this['_sHor']['value']=k['x']/(-0x2*l)+0.5,this[x(0x130)][x(0x11b)]=k['y']/(-0x2*m)+0.5;}),this['_zoomInput']=this['_getDomElement']('zoomInput'),this[w(0x145)]['onkeydown']=k=>{const y=w;if(k['key']==y(0xf6))this[y(0x149)][y(0x131)]=parseFloat(this[y(0x145)][y(0x11b)])/0x64;},this['_zoomInput']['onblur']=()=>{const z=w;this[z(0x149)][z(0x131)]=parseFloat(this['_zoomInput']['value'])/0x64;},this['_zoomInput'][w(0x137)]=this[w(0x145)][w(0x126)];let e=this[w(0x136)](w(0x105));e[w(0x137)]=()=>{const A=w,k=this[A(0x11e)][A(0x135)]>this['designerCanvas']['offsetWidth']?this['designerCanvas'][A(0x135)]:this['designerCanvas'][A(0x11a)],l=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this['designerCanvas'][A(0x10f)]:this[A(0x11e)][A(0x101)];if(this[A(0x149)]['zoomFactor']>0.1)this['_designerCanvas'][A(0xf1)]({'x':k/0x2,'y':l/0x2},this['_designerCanvas'][A(0x131)]+0.1);else this[A(0x149)]['zoomPoint']({'x':k/0x2,'y':l/0x2},this['_designerCanvas'][A(0x131)]+0.01);};let f=this[w(0x136)]('zoomDecrease');f[w(0x137)]=()=>{const B=w,k=this['designerCanvas'][B(0x135)]>this[B(0x11e)]['offsetWidth']?this['designerCanvas'][B(0x135)]:this[B(0x11e)][B(0x11a)],l=this[B(0x11e)][B(0x10f)]>this[B(0x11e)][B(0x101)]?this['designerCanvas']['designerOffsetHeight']:this[B(0x11e)][B(0x101)];if(this[B(0x149)]['zoomFactor']>0.11)this[B(0x149)][B(0xf1)]({'x':k/0x2,'y':l/0x2},this[B(0x149)][B(0x131)]-0.1);else this['_designerCanvas'][B(0xf1)]({'x':k/0x2,'y':l/0x2},this['_designerCanvas'][B(0x131)]-0.01);if(this['_designerCanvas'][B(0x131)]<0.001)this[B(0x149)][B(0xf1)]({'x':k/0x2,'y':l/0x2},0.001);};let g=this['_getDomElement'](w(0x127));g[w(0x137)]=()=>{this['zoomReset']();};let h=this['_getDomElement']('zoomFit');h['onclick']=()=>{this['zoomToFit']();},this['addEventListener'](EventNames['Wheel'],k=>this['_onWheel'](k));let i=this['_getDomElement']('alignSnap');i[w(0x137)]=()=>{const C=w;this['_designerCanvas'][C(0x10d)]=!this['_designerCanvas'][C(0x10d)],i[C(0x146)][C(0x141)]=this['_designerCanvas']['alignOnSnap']?'deepskyblue':'';},i[w(0x146)]['backgroundColor']=this['_designerCanvas']['alignOnSnap']?'deepskyblue':'',i['oncontextmenu']=k=>{k['preventDefault']();};let j=this['_getDomElement']('alignGrid');j[w(0x137)]=()=>{const D=w;this['_designerCanvas'][D(0x125)]=!this['_designerCanvas']['alignOnGrid'],j['style'][D(0x141)]=this[D(0x149)][D(0x125)]?D(0xfe):'';},j['style'][w(0x141)]=this['_designerCanvas']['alignOnGrid']?w(0xfe):'',j[w(0x113)]=k=>{const E=w;k['preventDefault']();let l=prompt('raster\x20size',this[E(0x11e)]['gridSize'][E(0x139)]());if(l){let m=parseInt(l);if(m>0x0)this[E(0x11e)]['gridSize']=m;}},this[w(0x108)]=this['_getDomElement'](w(0xf9)),this['_sVert'][w(0x123)](w(0x106),k=>this['_onScrollbar'](k)),this['_sHor'][w(0x123)]('scrollbar-input',k=>this['_onScrollbar'](k));}[o(0x127)](){const F=o;this[F(0x149)][F(0x10c)]={'x':0x0,'y':0x0},this[F(0x149)][F(0x131)]=0x1,this[F(0x130)]['value']=0.5,this[F(0x117)]['value']=0.5,this['_zoomInput']['value']=Math['round'](this[F(0x149)][F(0x131)]*0x64)+'%';}[o(0x10e)](){const G=o;this[G(0x149)]['zoomToFit']();}[o(0x109)](c){const H=o;if(c?.['detail']=='incrementLarge')c['target']['value']+=0.25;else{if(c?.[H(0x104)]=='decrementLarge')c['target'][H(0x11b)]-=0.25;else{if(c?.[H(0x104)]=='incrementSmall')c[H(0x115)][H(0x11b)]+=0.05;else{if(c?.[H(0x104)]==H(0x133))c['target']['value']-=0.05;}}}const d=this['designerCanvas'][H(0x135)]>this['designerCanvas']['offsetWidth']?this[H(0x11e)]['designerOffsetWidth']:this['designerCanvas'][H(0x11a)],f=this['designerCanvas'][H(0x10f)]>this[H(0x11e)]['offsetHeight']?this['designerCanvas']['designerOffsetHeight']:this[H(0x11e)]['offsetHeight'],g=d*(this['_sHor'][H(0x11b)]-0.5)*-0x2,i=f*(this['_sVert'][H(0x11b)]-0.5)*-0x2;this[H(0x11e)]['canvasOffset']={'x':g,'y':i};}[o(0x12b)](c){const I=o;c['preventDefault']();if(c[I(0x103)]){let d=this['_designerCanvas']['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas'][I(0x114)](c);this[I(0x11e)]['zoomTowardsPoint'](f,d);}else c['shiftKey']?(this[I(0x117)]['value']+=c[I(0x12c)]/0x2710,this[I(0x109)](null)):(this[I(0x130)][I(0x11b)]+=c['deltaY']/0x2710,this['_onScrollbar'](null),this[I(0x117)]['value']+=c[I(0xf8)]/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){const J=o;return this[J(0x149)][J(0xf7)];}set[o(0xf7)](c){this['_designerCanvas']['designerWidth']=c;}get['designerHeight'](){const K=o;return this[K(0x149)][K(0x11f)];}set['designerHeight'](c){const L=o;this[L(0x149)][L(0x11f)]=c;}set[o(0x107)](c){const M=o;this[M(0x149)][M(0x107)]=c;}[o(0x128)](c){const N=o;this[N(0x149)][N(0x128)](c);}async[o(0x13a)](c){this['_designerCanvas']['executeCommand'](c);}[o(0x121)](c){const O=o;return this[O(0x149)][O(0x121)](c);}['initialize'](c){const P=o;this['serviceContainer']=c,this[P(0x149)][P(0xf2)](c);if(c['designViewConfigButtons'])for(let d of c['designViewConfigButtons']){for(let e of d[P(0xef)](this,this['_designerCanvas']))this[P(0x108)]['appendChild'](e);}this['_toolbar']['initialize'](this[P(0x138)],this);}[o(0x12a)](){const Q=o;if(this['_designerCanvas'][Q(0x129)][Q(0x13f)]>0x0)return DomConverter['ConvertToString'](Array['from'](this[Q(0x149)]['rootDesignItem'][Q(0x13b)]()),!![],!![]);return'';}async[o(0x11d)](c,d=![]){const R=o,e=this[R(0x138)]['htmlParserService'];if(!c)this['_designerCanvas']['overlayLayer'][R(0xfa)](),DomHelper[R(0x13c)](this[R(0x149)]['overlayLayer']),this['_designerCanvas'][R(0x129)][R(0x10a)]();else{const f=await e[R(0x122)](c,this['serviceContainer'],this['instanceServiceContainer'],![]);d?this[R(0x149)][R(0xfb)](f):this[R(0x149)]['setDesignItems'](f);}}static[o(0x120)](c,d){const S=o,e=new DesignerCanvas();e['initialize'](d);const f=e['serviceContainer'][S(0x148)](S(0x12f),g=>g[S(0xfc)]==DefaultHtmlParserService);return e['addDesignItems'](f[S(0x13e)](c,e[S(0x138)],e['instanceServiceContainer'])),e;}}customElements[o(0x102)](o(0x116),DesignerView);