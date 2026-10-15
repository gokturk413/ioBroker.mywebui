const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x135))/0x1*(parseInt(h(0x134))/0x2)+parseInt(h(0x12f))/0x3+-parseInt(h(0x12c))/0x4+parseInt(h(0x132))/0x5+parseInt(h(0x12a))/0x6*(-parseInt(h(0x131))/0x7)+-parseInt(h(0x129))/0x8+parseInt(h(0x121))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x819f9));import{html,css}from'@node-projects/base-custom-webcomponent';function a(){const k=['node-projects-designer-draw-tool-popup','610854Xmbgsp','input.strokecolor','1729714LMzJEh','347470kUiFcD','host','4PVDwkx','443684JgdnZo','setStrokeThickness','style','input.strokethickness','_getDomElement','16127955txlpog','shadowRoot','setStrokeColor','input.fillbrush','define','value','getRootNode','onchange','4871944iEwUgI','24ooeNQf','template','3296548MbzjUT','strokethickness'];a=function(){return k;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function b(c,d){c=c-0x11f;const e=a();let f=e[c];return f;}export class DrawToolPopup extends AbstractBaseToolPopup{static ['style']=[super[i(0x137)],css`
      .container {
          width: 220px;
          min-height: 300px;
      }
      .inputs{
        float: left;
        margin-top: 5px;
        align-items: center;
      }
      .input {
        display: flex;
        align-items: center; 
        margin-top: 5px;
      }
      .text {
        margin-left: 5px;
        font-size: 14px;
      }
      .strokecolor{ 
        float: both;
      }
      .fillbrush{
        float: both;
      }
      .strokethickness{
        float: both;
      }`];static [i(0x12b)]=html`
        <div class="container">
          <header><h2 id="title" style="margin: 0;">Draw</h2></header>
          <main id="content-area">
            <div class="tools">
              <div class="tool" data-command="setTool" data-command-parameter="DrawLine" title="Draw Line" style="background-image: url('${assetsPath}images/tools/DrawLineTool.svg');"></div>
              <div class="tool" data-command="setTool" data-command-parameter="DrawPath" title="Pointer Tool" style="background-image: url('${assetsPath}images/tools/DrawPathTool.svg');"></div>
              <div class="tool" data-command="setTool" data-command-parameter="DrawRect" title="Draw Rectangle" style="background-image: url('${assetsPath}images/tools/DrawRectTool.svg');"></div>
              <div class="tool" data-command="setTool" data-command-parameter="DrawEllipsis" title="Draw Ellipsis" style="background-image: url('${assetsPath}images/tools/DrawEllipTool.svg');"></div>
              <div class="tool" data-command="setTool" data-command-parameter="PickColor" title="Pick Color" style="background-image: url('${assetsPath}images/tools/ColorPickerTool.svg');"></div>
            </div>
            <div class="inputs">
              <div class="input">
                <input id="strokecolor" class="strokecolor" type="color" title="stroke color" value="#000000" style="padding: 0; width:31px; height:31px;">
                <text class="text">Stroke Color</text>
              </div>
              <div class="input">
                <input id="fillbrush" class="fillbrush" type="color" title="fill brush" value="#ffffff" style="padding: 0; width:31px; height:31px;">
                <text class="text">Fill Brush</text>
              </div>
              <div class="input">
                <input id="strokethickness" class="strokethickness" type="range" title="stroke thickness" min="1" max="20" value="3" style="padding: 0; width:80px; height:20px; margin-right: 5px;">
                <text class="text">Stroke Thickness</text>
              </div>
            </div>
          </main>
        </div>`;constructor(){const j=i;super();if(this['shadowRoot']['querySelector'](j(0x130))){let c=this[j(0x120)]('strokecolor');c['onchange']=()=>this['getRootNode']()[j(0x133)][j(0x123)](c['value']);}if(this[j(0x122)]['querySelector'](j(0x124))){let d=this['_getDomElement']('fillbrush');d[j(0x128)]=()=>this['getRootNode']()['host']['setFillBrush'](d['value']);}if(this[j(0x122)]['querySelector'](j(0x11f))){let e=this[j(0x120)](j(0x12d));e['onchange']=()=>this[j(0x127)]()[j(0x133)][j(0x136)](e[j(0x126)]);}}}customElements[i(0x125)](i(0x12e),DrawToolPopup);