const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=-parseInt(a0(0x87))/0x1+-parseInt(a0(0x7a))/0x2*(-parseInt(a0(0xcc))/0x3)+parseInt(a0(0x9b))/0x4*(-parseInt(a0(0xd1))/0x5)+-parseInt(a0(0x9c))/0x6*(parseInt(a0(0xaa))/0x7)+parseInt(a0(0xd6))/0x8*(parseInt(a0(0x75))/0x9)+parseInt(a0(0x88))/0xa*(-parseInt(a0(0xa5))/0xb)+parseInt(a0(0xd5))/0xc;if(A===u)break;else z['push'](z['shift']());}catch(F){z['push'](z['shift']());}}}(a,0xa6b6b));function d(b,c){b=b-0x74;const e=a();let f=e[b];return f;}import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-R2IYVC73.js';function a(){const an=['config','whenDefined','9ZbPRHq','catch','pointerup','openDialog','viewer','14685atNVls','200px','querySelectorAll','removeEventListener','22296216zGOhGy','9177248qFInuh','getElementById','display:block;width:100%;height:100%;','webui-navigation-sidebar','close','warn','9RUElAw','template','appBar','screenName=','iobroker-webui-screen-viewer','111732RxbpPO','element','configChanged','offsetHeight','title','noHistory','block','getWebuiObject','content','bind','report','className','relativeSignalsPath','145789aXLIvQ','30xmSIsG','top','cursor','screenName','define','container','getTarget','settings','report=','innerHTML','div','px;z-index:100000;','closeable','none','string','addEventListener','&targetSelector=','CloseDialog','left','1424jUcXHS','366114Sjgcda','getValue','type','LoadJavascript','\x20+\x20','location','appendChild','race','objectsChanged','4537621oatLjs','getRootNode','init','onpointerdown','runScriptCommand','7jZGHKq','show','300px','getTargetFromTargetSelector','_getDomElement','querySelector','display','closeDialog','getTime','width','OpenScreenInScreenViewer','screen','changeView','__nav-burger','moveable','style','refreshView','shadowRoot','calc(50%\x20-\x20((','get','__nav-appbar-host','body','uniqueId','height','reportName','globalStyle','100%','offsetWidth','remove','createElement','hash','pointermove'];a=function(){return an;};return a();}import{t as h}from'../chunk-FBQ2Z2FQ.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{[a1(0x8d)];[a1(0xc0)];static [a1(0x76)]=n`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static ['style']=l`
            #root {
                width: 100%;
                height: 100%;
            }

            .dialog-title {
                margin:0;
                padding:0;
                font:inherit;
                color:inherit;
                font-weight:bold;
                height:2em;
                line-height:2em;
                overflow:hidden;
                padding:0 .8em;
                background-color:#eee;
            }

            .dialog-content {
                border-top:1px solid #ccc;
                position:absolute;
                top:2em;
                right:0;
                left:0;
                overflow:auto;
                height: calc(100% - 2em - 1px);
            }

            .dialog-content::-webkit-scrollbar {
                width:8px;
                height:8px;
                background-color:#f5f5f5;
                border-left:1px solid #ccc;
            }
            .dialog-content::-webkit-scrollbar-thumb {
                background-color:#666;
                border:none;
            }
            .dialog-content::-webkit-scrollbar-thumb:hover {background-color:#555}
            .dialog-content::-webkit-scrollbar-thumb:active {background-color:#444}
          

            .dialog-close {
                border:none;
                outline:none;
                background:none;
                font:inherit;
                font-family:Arial,Sans-Serif;
                font-style:normal;
                font-weight:bold;
                font-size:150%;
                line-height:1.4em;
                color:#aaa;
                text-decoration:none;
                position:absolute;
                top:0;
                right:.3em;
                text-align:center;
                cursor:pointer;
            }
            .dialog-close:focus {
                border-width:0;
                outline:none;
            }
            .dialog-close:hover,
            .dialog-close:focus { color: #C90000 }
            .dialog-close:active { color: #444 }
        `;static ['is']='iobroker-webui-dialog';get[a1(0xb8)](){const a2=a1;return this.#e[a2(0xb9)]['cursor']=='move';}set[a1(0xb8)](t){const a3=a1;t&&(this.#e[a3(0xb9)][a3(0x8a)]='move',this.#e[a3(0xa8)]=u=>(this.#r(u),!0x1));}get['closeable'](){const a4=a1;return this.#t[a4(0xb9)]['display']!=a4(0x95);}set['closeable'](t){const a5=a1;t?this.#t[a5(0xb9)][a5(0xb0)]=a5(0x80):this.#t['style'][a5(0xb0)]='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this['_getDomElement']('head'),this.#t=this[a6(0xae)](a6(0xda)),this.#i=this[a6(0xae)](a6(0x82)),this.#t['onclick']=()=>{this.#l();},this.#o=this.#c[a6(0x83)](this),this.#n=this.#h[a6(0x83)](this);}static [a1(0xc5)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()[a7(0xb2)](),A=new o();return u[a7(0x7e)]&&(typeof u[a7(0x7e)]=='string'?A.#e[a7(0x91)]=u[a7(0x7e)]:A.#e['appendChild'](u['title'])),typeof u[a7(0x82)]=='string'?A.#i[a7(0x91)]=u['content']:A.#i['appendChild'](u[a7(0x82)]),A[a7(0xb9)][a7(0xb3)]=u[a7(0xb3)]??a7(0xac),A[a7(0xb9)]['height']=u['height']??a7(0xd2),A['style'][a7(0xb3)]='calc('+A['style']['width']+'\x20+\x20'+this[a7(0xc5)]+'px)',A[a7(0xb9)]['height']='calc('+A[a7(0xb9)]['height']+a7(0xa0)+this[a7(0x7d)]+'px)',A['style']['top']=u[a7(0x89)]??a7(0xbc)+A[a7(0xb9)][a7(0xc1)]+')\x20/\x202))',A[a7(0xb9)]['left']=u[a7(0x9a)]??'calc(50%\x20-\x20(('+A['style'][a7(0xb3)]+')\x20/\x202))',u['moveable']&&(A['moveable']=!0x0),(u[a7(0x94)]===!0x1||u['closeable']===!0x0)&&(A['closeable']=u['closeable']),u['cssClass']&&(A[a7(0x85)]=u['cssClass']),document[a7(0xd7)]('overlayLayer')[a7(0xa2)](A),z;}static[a1(0xb1)](u){const a8=a1;let z=u['element'];for(;!(z instanceof o&&z!=null);)z=z[a8(0xa6)]()?.['host'];z&&z.#l();}#l(){const a9=a1;document[a9(0xd7)]('overlayLayer')['removeChild'](this);}#r(u){const aa=a1;let z=this['getBoundingClientRect']();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[aa(0x97)](aa(0xc9),this.#o),window[aa(0x97)](aa(0xce),this.#n);}#c(t){const ab=a1;this[ab(0xb9)]['left']=t['x']-this.#s+'px',this['style'][ab(0x89)]=t['y']-this.#a+'px';}#h(){const ac=a1;window['removeEventListener']('pointermove',this.#o),window[ac(0xd4)](ac(0xce),this.#n);}};customElements[a1(0x8c)](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async[a1(0xa9)](z,A){const ad=a1;switch(z[ad(0x9e)]){case ad(0x99):{r['closeDialog']({'element':A['element']});break;}case'OpenScreen':{let F=await this['getValue'](z['screen'],A);if(z[ad(0x7f)])document['getElementById'](ad(0xd0))[ad(0x86)]=await this['getValue'](z['relativeSignalsPath'],A),document[ad(0xd7)]('viewer')[ad(0x8b)]=F;else{let G='screenName='+F;window[ad(0xa1)][ad(0xc8)]=G;}break;}case ad(0xb4):{let H=await this[ad(0x9d)](z[ad(0xb5)],A),J=await this[ad(0x9d)](z['targetSelector']??ad(0x79),A),K=new URLSearchParams(location['hash']['substring'](0x1))[ad(0xbd)]('screenName')??'start',L=(H!='start'?ad(0x78)+K+'&':'')+'subScreen='+H+(J!=ad(0x79)?ad(0x98)+J:'');window[ad(0xa1)]['hash']=L;break;}case'OpenDialog':{let M=await this['getValue'](z['screen'],A),O=await this['getValue'](z['title'],A),P=await this['getValue'](z[ad(0xb8)],A),Q=await this[ad(0x9d)](z[ad(0x94)],A),R=await this[ad(0x9d)](z['cssClass'],A),U=await this[ad(0x9d)](z['width'],A),W=await this[ad(0x9d)](z[ad(0xc1)],A),X=await this['getValue'](z['left'],A),Y=await this[ad(0x9d)](z['top'],A),Z=new g();Z[ad(0x86)]=await this[ad(0x9d)](z['relativeSignalsPath'],A),Z[ad(0x8b)]=M,U||(U=await(await h[ad(0x81)]('screen',M))['settings']['width']),W||(W=await(await h[ad(0x81)]('screen',M))[ad(0x8f)]['height']),r[ad(0xcf)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super[ad(0xa9)](z,A);}}['getTarget'](u,z,A){const ae=a1;if(z==ae(0x8d)){let F=u[ae(0x7b)];for(let G=0x0;G<=(A??0x0);G++){let H=F[ae(0xa6)]()['host'];H instanceof BaseCustomControl?F=H:F=H[ae(0xa6)]()['host'];}return F;}return super['getTarget'](u,z,A);}[a1(0xad)](u,z,A,F){const af=a1;let G=this[af(0x8e)](u,z,A),H=[G];return F&&(z==='container'?G instanceof g?H=G['_getDomElements'](F):H=G[af(0xbb)][af(0xd3)](F):H=G['querySelectorAll'](F)),H;}},p=0x30;async function y(t,u=0x1f40){const ag=a1;if(customElements['get'](t))return!0x0;try{await Promise[ag(0xa3)]([customElements[ag(0xcb)](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ah=a1;document['getElementById']('__nav-appbar-host')?.[ah(0xc6)](),document[ah(0xaf)](ah(0xd9))?.['remove'](),document['getElementById'](ah(0xb7))?.[ah(0xc6)]();let t=document[ah(0xd7)](ah(0xd0));t&&(t[ah(0xb9)]['left']='0',t[ah(0xb9)]['top']='0',t['style'][ah(0xb3)]=ah(0xc4),t['style'][ah(0xc1)]=ah(0xc4));}async function w(){const ai=a1;let u=h[ai(0xca)]||{},z=document['getElementById'](ai(0xd0));if(z){if(x(),u[ai(0x77)]&&u['appBar'][ai(0xab)]&&await y('webui-navigation-app-bar')){let A=document[ai(0xc7)](ai(0x92));A['id']=ai(0xbe),A['style']['cssText']='position:fixed;top:0;left:0;right:0;height:'+p+ai(0x93);let F=document[ai(0xc7)]('webui-navigation-app-bar');F[ai(0xb9)]['cssText']=ai(0xd8),A[ai(0xa2)](F),document['body']['appendChild'](A),z['style']['top']=p+'px',z['style'][ai(0xc1)]='calc(100%\x20-\x20'+p+'px)';}if(await y(ai(0xd9))){let G=document['createElement']('webui-navigation-sidebar');document[ai(0xbf)][ai(0xa2)](G);}}}async function D(){const aj=a1;try{let t=await h['_getConfig']();t&&(h[aj(0xca)]=Object['assign'](h['config']||{},t));}catch{}w();}var v=!0x1;async function C(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h[ak(0xa4)]?.['on']?.(F=>{const al=ak;(!F||F[al(0x9e)]===al(0xb5))&&z();});let A;h[ak(0xba)]?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i[a1(0x9f)](window['iobrokerSocketScriptUrl']),await h[a1(0xa7)](),e(h[a1(0xca)]?.[a1(0xc3)]),h[a1(0x7c)]['on'](()=>{try{e(h['config']?.['globalStyle']);}catch{}}),window['appShell']={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0xb6)]['on'](u=>{const am=a1;let z=document['getElementById'](am(0xd0));if(!z)return;let A=typeof u==am(0x96)?u:u?.['name'],F=typeof u==am(0x96)?'screen':u?.['type']??am(0xb5);if(!A)return;let G=z['localName']==='iobroker-webui-report-viewer';if(F===am(0x84)){G?z[am(0xc2)]=A:location[am(0xc8)]=am(0x90)+encodeURIComponent(A);return;}if(G){location['hash']='screenName='+encodeURIComponent(A);return;}z[am(0x8b)]=A;}),C()[a1(0xcd)](t=>console[a1(0x74)]('[nav]\x20shell\x20init\x20failed',t));