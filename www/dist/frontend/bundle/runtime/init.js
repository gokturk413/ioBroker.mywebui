const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=parseInt(a0(0x1c3))/0x1+-parseInt(a0(0x1ee))/0x2+-parseInt(a0(0x1be))/0x3+parseInt(a0(0x1e3))/0x4*(-parseInt(a0(0x208))/0x5)+parseInt(a0(0x209))/0x6+parseInt(a0(0x1b3))/0x7*(parseInt(a0(0x1f1))/0x8)+parseInt(a0(0x1d4))/0x9*(-parseInt(a0(0x1b6))/0xa);if(A===u)break;else z['push'](z['shift']());}catch(F){z['push'](z['shift']());}}}(a,0x21359));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-YBPYQWW6.js';import{t as h}from'../chunk-IFBVYILO.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';function d(b,c){b=b-0x1ad;const e=a();let f=e[b];return f;}import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{['container'];[a1(0x1ae)];static [a1(0x1e7)]=n`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [a1(0x1bf)]=l`
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
        `;static ['is']=a1(0x1fb);get['moveable'](){const a2=a1;return this.#e[a2(0x1bf)]['cursor']==a2(0x1f9);}set['moveable'](t){const a3=a1;t&&(this.#e[a3(0x1bf)]['cursor']=a3(0x1f9),this.#e[a3(0x1df)]=u=>(this.#r(u),!0x1));}get[a1(0x1fa)](){const a4=a1;return this.#t[a4(0x1bf)]['display']!=a4(0x1b9);}set[a1(0x1fa)](t){const a5=a1;t?this.#t[a5(0x1bf)][a5(0x1b2)]=a5(0x205):this.#t['style'][a5(0x1b2)]='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this[a6(0x1c1)](a6(0x1d6)),this.#t=this[a6(0x1c1)](a6(0x1b5)),this.#i=this[a6(0x1c1)]('content'),this.#t['onclick']=()=>{this.#l();},this.#o=this.#c[a6(0x203)](this),this.#n=this.#h[a6(0x203)](this);}static ['offsetWidth']=0x2;static [a1(0x1ce)]=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()['getTime'](),A=new o();return u[a7(0x1d0)]&&(typeof u[a7(0x1d0)]=='string'?A.#e['innerHTML']=u[a7(0x1d0)]:A.#e[a7(0x1ed)](u[a7(0x1d0)])),typeof u[a7(0x1f0)]=='string'?A.#i['innerHTML']=u['content']:A.#i[a7(0x1ed)](u[a7(0x1f0)]),A['style']['width']=u[a7(0x1e4)]??'300px',A['style'][a7(0x1de)]=u['height']??a7(0x1b8),A['style'][a7(0x1e4)]=a7(0x1ff)+A['style']['width']+a7(0x1f4)+this['offsetWidth']+'px)',A[a7(0x1bf)][a7(0x1de)]='calc('+A['style']['height']+a7(0x1f4)+this['offsetHeight']+a7(0x1b0),A[a7(0x1bf)][a7(0x1e8)]=u[a7(0x1e8)]??'calc(50%\x20-\x20(('+A[a7(0x1bf)][a7(0x1de)]+')\x20/\x202))',A[a7(0x1bf)][a7(0x1bd)]=u['left']??a7(0x1da)+A[a7(0x1bf)]['width']+')\x20/\x202))',u['moveable']&&(A[a7(0x1db)]=!0x0),(u['closeable']===!0x1||u[a7(0x1fa)]===!0x0)&&(A[a7(0x1fa)]=u[a7(0x1fa)]),u['cssClass']&&(A[a7(0x207)]=u[a7(0x1fe)]),document['getElementById'](a7(0x1cd))['appendChild'](A),z;}static[a1(0x1d9)](u){const a8=a1;let z=u[a8(0x201)];for(;!(z instanceof o&&z!=null);)z=z['getRootNode']()?.['host'];z&&z.#l();}#l(){const a9=a1;document[a9(0x1d5)]('overlayLayer')[a9(0x1bc)](this);}#r(u){const aa=a1;let z=this[aa(0x204)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window['addEventListener']('pointermove',this.#o),window['addEventListener']('pointerup',this.#n);}#c(t){const ab=a1;this[ab(0x1bf)][ab(0x1bd)]=t['x']-this.#s+'px',this[ab(0x1bf)]['top']=t['y']-this.#a+'px';}#h(){const ac=a1;window[ac(0x1d7)]('pointermove',this.#o),window[ac(0x1d7)](ac(0x1dc),this.#n);}};function a(){const ao=['screenName','warn','[nav]\x20shell\x20init\x20failed','119276YCIdne','width','getValue','shadowRoot','template','top','body','relativeSignalsPath','position:fixed;top:0;left:0;right:0;height:','settings','appendChild','11414nFOWtd','_getConfig','content','91264EdRQZs','querySelectorAll','__nav-appbar-host','\x20+\x20','getWebuiObject','OpenScreen','show','viewer','move','closeable','iobroker-webui-dialog','hash','globalStyle','cssClass','calc(','getTarget','element','catch','bind','getBoundingClientRect','block','webui-navigation-sidebar','className','10iFQdbS','915816QGDXxn','configChanged','uniqueId','get','px)','refreshView','display','21aSlufv','div','close','160cLYIsm','screenName=','200px','none','_getDomElements','querySelector','removeChild','left','472980xngiJY','style','appShell','_getDomElement','host','201242FmGuIF','createElement','iobroker-webui-report-viewer','config','webui-navigation-app-bar','iobroker-webui-screen-viewer','substring','100%','objectsChanged','display:block;width:100%;height:100%;','overlayLayer','offsetHeight','screen','title','type','reportName','report','16353sevvga','getElementById','head','removeEventListener','init','closeDialog','calc(50%\x20-\x20((','moveable','pointerup','name','height','onpointerdown'];a=function(){return ao;};return a();}customElements['define'](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async['runScriptCommand'](z,A){const ad=a1;switch(z['type']){case'CloseDialog':{r[ad(0x1d9)]({'element':A['element']});break;}case ad(0x1f6):{let F=await this['getValue'](z[ad(0x1cf)],A);if(z['noHistory'])document['getElementById']('viewer')[ad(0x1ea)]=await this['getValue'](z['relativeSignalsPath'],A),document[ad(0x1d5)](ad(0x1f8))[ad(0x1e0)]=F;else{let G='screenName='+F;window['location'][ad(0x1fc)]=G;}break;}case'OpenScreenInScreenViewer':{let H=await this['getValue'](z[ad(0x1cf)],A),J=await this['getValue'](z['targetSelector']??ad(0x1c8),A),K=new URLSearchParams(location[ad(0x1fc)][ad(0x1c9)](0x1))[ad(0x1af)](ad(0x1e0))??'start',L=(H!='start'?'screenName='+K+'&':'')+'subScreen='+H+(J!='iobroker-webui-screen-viewer'?'&targetSelector='+J:'');window['location']['hash']=L;break;}case'OpenDialog':{let M=await this['getValue'](z['screen'],A),O=await this['getValue'](z['title'],A),P=await this[ad(0x1e5)](z[ad(0x1db)],A),Q=await this['getValue'](z['closeable'],A),R=await this[ad(0x1e5)](z['cssClass'],A),U=await this['getValue'](z['width'],A),W=await this['getValue'](z['height'],A),X=await this['getValue'](z['left'],A),Y=await this[ad(0x1e5)](z['top'],A),Z=new g();Z['relativeSignalsPath']=await this[ad(0x1e5)](z[ad(0x1ea)],A),Z['screenName']=M,U||(U=await(await h[ad(0x1f5)]('screen',M))[ad(0x1ec)]['width']),W||(W=await(await h['getWebuiObject']('screen',M))[ad(0x1ec)][ad(0x1de)]),r['openDialog']({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super['runScriptCommand'](z,A);}}['getTarget'](u,z,A){const ae=a1;if(z=='container'){let F=u[ae(0x201)];for(let G=0x0;G<=(A??0x0);G++){let H=F['getRootNode']()[ae(0x1c2)];H instanceof BaseCustomControl?F=H:F=H['getRootNode']()[ae(0x1c2)];}return F;}return super[ae(0x200)](u,z,A);}['getTargetFromTargetSelector'](u,z,A,F){const af=a1;let G=this['getTarget'](u,z,A),H=[G];return F&&(z==='container'?G instanceof g?H=G[af(0x1ba)](F):H=G[af(0x1e6)][af(0x1f2)](F):H=G['querySelectorAll'](F)),H;}},p=0x30;async function y(t,u=0x1f40){const ag=a1;if(customElements[ag(0x1af)](t))return!0x0;try{await Promise['race']([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements[ag(0x1af)](t);}function x(){const ah=a1;document[ah(0x1d5)]('__nav-appbar-host')?.['remove'](),document[ah(0x1bb)](ah(0x206))?.['remove'](),document[ah(0x1d5)]('__nav-burger')?.['remove']();let t=document[ah(0x1d5)]('viewer');t&&(t[ah(0x1bf)][ah(0x1bd)]='0',t['style'][ah(0x1e8)]='0',t[ah(0x1bf)][ah(0x1e4)]=ah(0x1ca),t[ah(0x1bf)]['height']='100%');}async function w(){const ai=a1;let u=h[ai(0x1c6)]||{},z=document['getElementById']('viewer');if(z){if(x(),u['appBar']&&u['appBar'][ai(0x1f7)]&&await y(ai(0x1c7))){let A=document[ai(0x1c4)](ai(0x1b4));A['id']=ai(0x1f3),A['style']['cssText']=ai(0x1eb)+p+'px;z-index:100000;';let F=document[ai(0x1c4)](ai(0x1c7));F['style']['cssText']=ai(0x1cc),A[ai(0x1ed)](F),document[ai(0x1e9)][ai(0x1ed)](A),z['style'][ai(0x1e8)]=p+'px',z[ai(0x1bf)]['height']='calc(100%\x20-\x20'+p+ai(0x1b0);}if(await y('webui-navigation-sidebar')){let G=document[ai(0x1c4)]('webui-navigation-sidebar');document['body']['appendChild'](G);}}}async function D(){const aj=a1;try{let t=await h[aj(0x1ef)]();t&&(h['config']=Object['assign'](h['config']||{},t));}catch{}w();}var v=!0x1;async function C(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h[ak(0x1cb)]?.['on']?.(F=>{const al=ak;(!F||F[al(0x1d1)]==='screen')&&z();});let A;h[ak(0x1b1)]?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i['LoadJavascript'](window['iobrokerSocketScriptUrl']),await h[a1(0x1d8)](),e(h['config']?.[a1(0x1fd)]),h[a1(0x1ad)]['on'](()=>{const am=a1;try{e(h[am(0x1c6)]?.['globalStyle']);}catch{}}),window[a1(0x1c0)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h['changeView']['on'](u=>{const an=a1;let z=document[an(0x1d5)]('viewer');if(!z)return;let A=typeof u=='string'?u:u?.[an(0x1dd)],F=typeof u=='string'?an(0x1cf):u?.[an(0x1d1)]??an(0x1cf);if(!A)return;let G=z['localName']===an(0x1c5);if(F===an(0x1d3)){G?z[an(0x1d2)]=A:location['hash']='report='+encodeURIComponent(A);return;}if(G){location[an(0x1fc)]=an(0x1b7)+encodeURIComponent(A);return;}z['screenName']=A;}),C()[a1(0x202)](t=>console[a1(0x1e1)](a1(0x1e2),t));