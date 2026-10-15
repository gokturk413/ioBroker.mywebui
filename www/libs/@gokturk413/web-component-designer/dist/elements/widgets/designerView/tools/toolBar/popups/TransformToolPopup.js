function a(){const z=['backgroundColor','setStyle','_transformMode','_inputX','spacing-input-x','host','_inputSpacingY','_applySpacing','_selectionChanged','top','_relativeButton','_applyButton','topMid','_originMidMid','#A4B5C1','color','_originMidRight','height','cos','left','_designerView','sin','16qLkdHj','midRight','relative','toString','_changePositionMode','replaceAll','selectionService','_checkOrigin','2qfLXcO','39LwOatq','topLeft','793085fahJBZ','define','_inputY','_previousSelectionRect','33bIoleS','524902qvQfMe','botLeft','30VhmzKT','transform-button-relative','_originBotRight','transform','getStyle','11aezwab','_inputR','_absoluteButton','7390040etiPse','removeStyle','origin-top-left','_originBotLeft','199508tYPiuy','origin-bot-right','designerCanvas','sort','width','transform-input-y','9806532cQDXHl','_originTopMid','valueAsNumber','_calculateTransformOriginPosition','2842469ZiunrV','onclick','_originBotMid','_originTopLeft','checked','midLeft','style','transform-input-x','_getDomElement','#77716E','3350907dEZjqw','_originMidLeft','_transformOrigin','spacing-input-y','rotate(','black','length','designerView','_calculateTransform','template','origin-top-right','topRight','commit','instanceServiceContainer'];a=function(){return z;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x18b))/0x1*(-parseInt(n(0x183))/0x2)+parseInt(n(0x18a))/0x3*(-parseInt(n(0x143))/0x4)+-parseInt(n(0x186))/0x5*(parseInt(n(0x18d))/0x6)+parseInt(n(0x14d))/0x7+parseInt(n(0x17b))/0x8*(-parseInt(n(0x157))/0x9)+-parseInt(n(0x195))/0xa*(parseInt(n(0x192))/0xb)+parseInt(n(0x149))/0xc*(parseInt(n(0x184))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x880a4));import{html,BaseCustomWebComponentConstructorAppend,css}from'@node-projects/base-custom-webcomponent';import{filterChildPlaceItems}from'../../../../../helper/LayoutHelper.js';import{calculateOuterRect}from'../../../../../helper/ElementHelper.js';function b(c,d){c=c-0x142;const e=a();let f=e[c];return f;}export class TransformToolPopup extends BaseCustomWebComponentConstructorAppend{['_designerView'];['_previousSelectionRect'];['_selectionChanged'];[o(0x16f)];['_absoluteButton'];['_applyButton'];['_inputX'];[o(0x188)];['_inputR'];['_inputSpacingX'];['_inputSpacingY'];[o(0x150)];['_originTopMid'];['_originTopRight'];['_originMidLeft'];['_originMidMid'];['_originMidRight'];[o(0x142)];[o(0x14f)];['_originBotRight'];['_transformMode'];[o(0x159)];static ['style']=css`
      .container {
          width: 220px;
          min-height: 200px;
          color: white;
          background-color: rgb(64, 64, 64);
          border: 1px solid black;
      }
      header {
          text-align: center;
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
      }
      #input-div{
        display: grid;
        grid-template-columns: 1fr 9fr;
        grid-template-rows: 25px 25px 25px;
        grid-row-gap: 2px;
        font-size: small;
        margin: 10px;
      }
      #button-div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 25px;
        font-size: small;
        margin: 10px;
        grid-column-gap: 5px
      }
      #apply-div{
        font-size: small;
        justify-content: center;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
      }
      #cube{
        display: grid;
        grid-template-columns: 20px 20px 20px;
        grid-template-rows: 20px 20px 20px;
        grid-gap: 10px;
        padding: 10px;
        top: -80px;
        position: relative;
      }
      #cube-background{
        width: 60px;
        height: 60px;
        background: gray;
        margin-top: 20px;
        margin-left: 20px;
      }
      #spacing-div{
        display: inline-grid;
        grid-template-rows: 20px 20px;
        grid-template-columns: 95px 95px;
        gap: 5px;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      `;static [o(0x160)]=html`
        <div class="container">
          <header>
            <h2 id="title" style="margin:0px;">Transform</h2>
          </header>
          <main id="content-area">
            <div id="input-div">
              <span>X:</span>
              <input type="number" id="transform-input-x">
              <span>Y:</span>
              <input type="number" id="transform-input-y">
              <span>R:</span>
              <input type="number" id="transform-input-r">
            </div>
            <div id="button-div">
              <button id="transform-button-absolute">absolute</button>
              <button id="transform-button-relative">relative</button>
            </div>

            <div id="spacing-div">
                <span>X spacing</span>
                <span>Y spacing</span>
                <input type="number" id="spacing-input-x">
                <input type="number" id="spacing-input-y">
            </div>

            <div style="justify-content: center; display: grid; height: 100px">
              <div id="cube-background"></div>
                <div id="cube">
                  <input id="origin-top-left" type="radio" name="origin-radio">
                  <input id="origin-top-mid" type="radio" name="origin-radio">
                  <input id="origin-top-right" type="radio" name="origin-radio">
                  <input id="origin-mid-left" type="radio" name="origin-radio">
                  <input id="origin-mid-mid" type="radio" name="origin-radio" checked>
                  <input id="origin-mid-right" type="radio" name="origin-radio">
                  <input id="origin-bot-left" type="radio" name="origin-radio">
                  <input id="origin-bot-mid" type="radio" name="origin-radio">
                  <input id="origin-bot-right" type="radio" name="origin-radio">
                </div>
            </div>

            <div id="apply-div">
              <button id="transform-button-apply" style="width:100px;">apply</button>
            </div>
          </main>
        </div>`;constructor(){const p=o;super(),this[p(0x16f)]=this[p(0x155)](p(0x18e)),this['_absoluteButton']=this['_getDomElement']('transform-button-absolute'),this['_applyButton']=this['_getDomElement']('transform-button-apply'),this[p(0x168)]=this[p(0x155)](p(0x154)),this['_inputY']=this[p(0x155)](p(0x148)),this['_inputR']=this['_getDomElement']('transform-input-r'),this['_inputSpacingX']=this[p(0x155)](p(0x169)),this['_inputSpacingY']=this[p(0x155)](p(0x15a)),this['_originTopLeft']=this['_getDomElement'](p(0x197)),this[p(0x14a)]=this['_getDomElement']('origin-top-mid'),this['_originTopRight']=this[p(0x155)](p(0x161)),this[p(0x158)]=this[p(0x155)]('origin-mid-left'),this['_originMidMid']=this['_getDomElement']('origin-mid-mid'),this[p(0x175)]=this['_getDomElement']('origin-mid-right'),this['_originBotLeft']=this['_getDomElement']('origin-bot-left'),this[p(0x14f)]=this[p(0x155)]('origin-bot-mid'),this[p(0x18f)]=this['_getDomElement'](p(0x144)),this['_relativeButton']['onclick']=()=>this[p(0x17f)](p(0x17d)),this['_absoluteButton'][p(0x14e)]=()=>this[p(0x17f)]('absolute'),this[p(0x170)][p(0x14e)]=()=>this['_applyTransform'](),this['_transformMode']='relative',this['_changePositionMode'](this['_transformMode']);}[o(0x17f)](c){const q=o;c==q(0x17d)?(this[q(0x16f)]['style']['backgroundColor']='#6F8A9D',this[q(0x16f)]['style']['color']=q(0x15c),this[q(0x194)][q(0x153)]['backgroundColor']=q(0x173),this[q(0x194)][q(0x153)]['color']='#77716E'):(this[q(0x194)]['style'][q(0x165)]='#6F8A9D',this['_absoluteButton'][q(0x153)]['color']=q(0x15c),this['_relativeButton']['style']['backgroundColor']='#A4B5C1',this[q(0x16f)][q(0x153)][q(0x174)]=q(0x156)),this['_transformMode']=c;}['_applyTransform'](){const r=o;this[r(0x182)](),this[r(0x179)]=this['getRootNode']()[r(0x16a)][r(0x15e)];let c=this[r(0x179)][r(0x164)][r(0x181)]['selectedElements'];c=filterChildPlaceItems(c),this['_selectionChanged']=![],this[r(0x179)][r(0x164)][r(0x181)]['onSelectionChanged']['once'](()=>{const s=r;this[s(0x16d)]=!![],this[s(0x189)]=null;});if(c['length']!=0x0){let d={'x':isNaN(this[r(0x168)]['valueAsNumber'])?null:this['_inputX'][r(0x14b)],'y':isNaN(this[r(0x188)][r(0x14b)])?null:this['_inputY'][r(0x14b)]},e=this[r(0x193)][r(0x14b)]?this['_inputR'][r(0x14b)]:0x0,f=c[0x0]['openGroup']('Transform\x20selection');if(!this[r(0x189)]||this[r(0x16d)])this['_previousSelectionRect']=calculateOuterRect(c,this['_designerView'][r(0x145)]);let g=this[r(0x14c)](this[r(0x189)]);for(let h of c){let i={'x':parseFloat(h['getStyle']('left')),'y':parseFloat(h['getStyle']('top')),'width':parseFloat(h['getStyle']('width')),'height':parseFloat(h['getStyle'](r(0x176)))},j=h[r(0x191)](r(0x190)),k=0x0;if(j)k=parseFloat(h['getStyle'](r(0x190))[r(0x180)]('rotate(','')[r(0x180)]('deg)',''));let l=this[r(0x15f)](this[r(0x189)],g,i,e,d,this[r(0x167)]);h['setStyle'](r(0x178),l['x']['toString']()+'px'),h[r(0x166)]('top',l['y'][r(0x17e)]()+'px');let m;if(this[r(0x167)]==r(0x17d))m=k+e;else m=e;while(m>=0x168)m-=0x168;if(m!=0x0)h[r(0x166)]('transform',r(0x15b)+m+'deg)');else h[r(0x196)](r(0x190));}this[r(0x16c)](c),f[r(0x163)]();}}['_calculateTransformOriginPosition'](c){const t=o;switch(this['_transformOrigin']){case t(0x185):return{'x':c['x'],'y':c['y']};case t(0x171):return{'x':c['x']+c[t(0x147)]/0x2,'y':c['y']};case'topRight':return{'x':c['x']+c['width'],'y':c['y']};case t(0x152):return{'x':c['x'],'y':c['y']+c['height']/0x2};case'midMid':return{'x':c['x']+c[t(0x147)]/0x2,'y':c['y']+c['height']/0x2};case t(0x17c):return{'x':c['x']+c['width'],'y':c['y']+c['height']/0x2};case t(0x18c):return{'x':c['x'],'y':c['y']+c[t(0x176)]};case'botMid':return{'x':c['x']+c[t(0x147)]/0x2,'y':c['y']+c['height']};case'botRight':return{'x':c['x']+c[t(0x147)],'y':c['y']+c['height']};}}[o(0x182)](){const u=o;if(this[u(0x150)][u(0x151)])this['_transformOrigin']='topLeft';else{if(this[u(0x14a)]['checked'])this[u(0x159)]=u(0x171);else{if(this['_originTopRight']['checked'])this['_transformOrigin']=u(0x162);else{if(this[u(0x158)]['checked'])this[u(0x159)]=u(0x152);else{if(this[u(0x172)][u(0x151)])this[u(0x159)]='midMid';else{if(this['_originMidRight']['checked'])this[u(0x159)]='midRight';else{if(this[u(0x142)]['checked'])this['_transformOrigin']='botLeft';else{if(this[u(0x14f)]['checked'])this['_transformOrigin']='botMid';else{if(this['_originBotRight']['checked'])this[u(0x159)]='botRight';}}}}}}}}}[o(0x15f)](c,d,e,f,g,h){const v=o;let i;f=f*(Math['PI']/0xb4);if(h=='absolute'){if(g['x'])g['x']=g['x']-c['x'];if(g['y'])g['y']=g['y']-c['y'];}d={'x':d['x']-e[v(0x147)]/0x2,'y':d['y']-e[v(0x176)]/0x2};let j={'x':e['x']-d['x'],'y':e['y']-d['y']};return i={'x':Math[v(0x177)](f)*j['x']-Math[v(0x17a)](f)*j['y']+d['x']+g['x'],'y':Math[v(0x17a)](f)*j['x']+Math['cos'](f)*j['y']+d['y']+g['y']},i;}['_applySpacing'](c){const w=o;let d=this['_inputSpacingX']['valueAsNumber'],e=this[w(0x16b)]['valueAsNumber'];if(!isNaN(d)){let f=c[w(0x146)]((h,j)=>{const x=w;return parseFloat(h['getStyle']('left'))-parseFloat(j['getStyle'](x(0x178)));}),g=parseFloat(f[0x0][w(0x191)]('left'));for(let h=0x0;h<f[w(0x15d)];h++){f[h][w(0x166)]('left',h*d+g+'px');}}if(!isNaN(e)){let j=c['sort']((l,m)=>{const y=w;return parseFloat(l[y(0x191)](y(0x16e)))-parseFloat(m[y(0x191)](y(0x16e)));}),k=parseFloat(j[0x0][w(0x191)](w(0x16e)));for(let l=0x0;l<j[w(0x15d)];l++){j[l]['setStyle'](w(0x16e),l*e+k+'px');}}}}customElements[o(0x187)]('node-projects-designer-transform-tool-popup',TransformToolPopup);