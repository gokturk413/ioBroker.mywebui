const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1a3))/0x1*(-parseInt(h(0x1a1))/0x2)+-parseInt(h(0x1ba))/0x3*(-parseInt(h(0x1a0))/0x4)+parseInt(h(0x1a2))/0x5*(-parseInt(h(0x19f))/0x6)+-parseInt(h(0x1ad))/0x7*(parseInt(h(0x1a5))/0x8)+parseInt(h(0x1b1))/0x9+-parseInt(h(0x1b4))/0xa*(-parseInt(h(0x1ae))/0xb)+-parseInt(h(0x19e))/0xc*(-parseInt(h(0x1b2))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x70c47));function a(){const n=['content-box','innerHTML','20492076pnJBdk','42LXMJZi','825356uSPBDr','1448834ojxPFC','538970LJRQqI','1eoaiCA','_elementDiv','77464dxbFLf','removeAttribute','add','key','border','classList','contentEditable','addRange','665YInRgI','159368hPEQui','define','removeAllRanges','4348143gHByLB','13lbuZGI','unsetValue','320pDeAJT','box','property','dataset','setStart','refresh','3IfdlQN'];a=function(){return n;};return a();}function b(c,d){c=c-0x19d;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
:host {
  justify-content: center;
  display: flex;
  margin: 10px;
  line-height: 12px;
  min-width: 120px;
}

* { 
  font-size: 12px;
  font-family: monospace;
  color: black;
}

.top {
  display: inline-block;
}
.left {
  display: inline-block;
  vertical-align: middle;
}
.right {
  display: inline-block;
  vertical-align: middle;
}
.bottom {
  display: inline-block;
}

div.ct {
  width:280px;height:120px;
}

div span {
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 0; 
}

div.ct {
  position: relative;
  background: white;
  display: inline-block;
  border: dotted 1px gray;
  text-align: center;
  vertical-align: middle;
}

div.ct.box {
  border: dotted 2px black;
}

div.ct > div.ct {
  left: 0;
  top: 0;
  background: #F9CC9F;
  width: calc(100% - 20px);
  height: calc(100% - 26px);
  border-style: dashed;
}

div.ct > div.ct > div.ct {
  background: #FEDC9B;
  border-style: solid;
}

div.ct > div.ct > div.ct > div.ct {
  background: #C4Cf8C;
  border-style: dashed;
}

div.ct > div.ct > div.ct > div.ct > div.ct {
  background: #8Cb6C2;
  border-style: solid;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

span {
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
}`;static ['template']=html`
  <div id="position" class="ct"><span title="position">position</span>
  <div data-style="position" @keydown="onKeyDown" @dblclick="onDoubleClick" class="top">-</div><br><div data-style="position" @keydown="onKeyDown" @dblclick="onDoubleClick" class="left">-</div><div id="margin" class="ct"><span title="margin">margin</span>
  <div data-style="margin" @keydown="onKeyDown" @dblclick="onDoubleClick" class="top">-</div><br><div @keydown="onKeyDown" @dblclick="onDoubleClick" class="left">-</div><div id="border" class="ct"><span title="border">border</span>
  <div data-style="border" @keydown="onKeyDown" @dblclick="onDoubleClick" class="top">-</div><br><div @keydown="onKeyDown" @dblclick="onDoubleClick" class="left">-</div><div id="padding" class="ct"><span title="padding">padding</span>
  <div data-style="padding" @keydown="onKeyDown" @dblclick="onDoubleClick" class="top">-</div><br><div @keydown="onKeyDown" @dblclick="onDoubleClick" class="left">-</div><div id="element" class="ct" style="font-size:6px"><div data-style="element" @keydown="onKeyDown" @dblclick="onDoubleClick" class="left">-</div>
  &nbsp;x&nbsp;
  <div data-style="element" @keydown="onKeyDown" @dblclick="onDoubleClick" class="right">-</div>
  </div><div data-style="padding" @keydown="onKeyDown" @dblclick="onDoubleClick" class="right">-</div><br><div data-style="padding" @keydown="onKeyDown" @dblclick="onDoubleClick" class="bottom">-</div></div><div data-style="border" @keydown="onKeyDown" @dblclick="onDoubleClick" class="right">-</div><br><div data-style="border" @keydown="onKeyDown" @dblclick="onDoubleClick" class="bottom">-</div></div><div data-style="margin" @keydown="onKeyDown" @dblclick="onDoubleClick" class="right">-</div><br><div data-style="margin" @keydown="onKeyDown" @dblclick="onDoubleClick" class="bottom">-</div></div><div data-style="position" @keydown="onKeyDown" @dblclick="onDoubleClick" class="right">-</div><br><div data-style="position" @keydown="onKeyDown" @dblclick="onDoubleClick" class="bottom">-</div></div>
  `;[i(0x1b6)];[i(0x1b3)];['_borderDiv'];['_elementDiv'];constructor(){const j=i;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this['_getDomElement'](j(0x1a9)),this[j(0x1a4)]=this['_getDomElement']('element');}['ready'](){this['_parseAttributesToProperties'](),this['_assignEvents']();}['onDoubleClick'](c){const k=i,d=c['target'];d['setAttribute']('contentEditable','');const e=document['createRange'](),f=window['getSelection']();e[k(0x1b8)](d['firstChild'],0x0),e['setEndAfter'](d['lastChild']),f[k(0x1b0)](),f[k(0x1ac)](e);}['onKeyDown'](c){const l=i,d=c['target'];if(c[l(0x1a8)]=='Enter'){d[l(0x1a6)](l(0x1ab));const e=d[l(0x19d)],f=new CustomEvent('value-changed',{'detail':{'style':d[l(0x1b7)]['style'],'value':e}});this['dispatchEvent'](f);}}[i(0x1b9)](c){const m=i;this['_elementDiv']['classList']['remove']('box'),this['_borderDiv'][m(0x1aa)]['remove']('box');if(c){let d=getComputedStyle(c);d['boxSizing']==m(0x1bb)?this['_elementDiv']['classList'][m(0x1a7)](m(0x1b5)):this['_borderDiv'][m(0x1aa)]['add']('box');}}}customElements[i(0x1af)]('node-projects-metrics-editor',MetricsEditor);