const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=-parseInt(a0(0x16e))/0x1*(-parseInt(a0(0x175))/0x2)+-parseInt(a0(0x155))/0x3+parseInt(a0(0x158))/0x4+-parseInt(a0(0x15a))/0x5*(parseInt(a0(0x169))/0x6)+-parseInt(a0(0x168))/0x7*(parseInt(a0(0x16b))/0x8)+parseInt(a0(0x147))/0x9+parseInt(a0(0x156))/0xa*(parseInt(a0(0x17a))/0xb);if(A===u)break;else z['push'](z['shift']());}catch(F){z['push'](z['shift']());}}}(a,0x64f61));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-YMYCSI72.js';import{t as h}from'../chunk-5A724DQA.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';function d(b,c){b=b-0x12a;const e=a();let f=e[b];return f;}import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{['container'];['uniqueId'];static ['template']=n`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [a1(0x12e)]=l`
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
        `;static ['is']=a1(0x13b);get['moveable'](){const a2=a1;return this.#e['style']['cursor']==a2(0x188);}set[a1(0x181)](t){const a3=a1;t&&(this.#e['style']['cursor']=a3(0x188),this.#e[a3(0x14d)]=u=>(this.#r(u),!0x1));}get['closeable'](){return this.#t['style']['display']!='none';}set['closeable'](t){const a4=a1;t?this.#t['style'][a4(0x16c)]='block':this.#t[a4(0x12e)]['display']='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a5=a1;super(),this.#e=this[a5(0x152)](a5(0x157)),this.#t=this[a5(0x152)]('close'),this.#i=this['_getDomElement']('content'),this.#t[a5(0x14c)]=()=>{this.#l();},this.#o=this.#c[a5(0x15b)](this),this.#n=this.#h['bind'](this);}static [a1(0x133)]=0x2;static [a1(0x14b)]=0x23;static[a1(0x18d)](u){const a6=a1;let z='id'+new Date()[a6(0x143)](),A=new o();return u[a6(0x17e)]&&(typeof u[a6(0x17e)]=='string'?A.#e[a6(0x166)]=u[a6(0x17e)]:A.#e[a6(0x130)](u['title'])),typeof u['content']=='string'?A.#i['innerHTML']=u[a6(0x17d)]:A.#i['appendChild'](u[a6(0x17d)]),A['style']['width']=u[a6(0x138)]??'300px',A[a6(0x12e)][a6(0x177)]=u[a6(0x177)]??a6(0x186),A[a6(0x12e)][a6(0x138)]='calc('+A['style']['width']+a6(0x165)+this['offsetWidth']+a6(0x150),A['style']['height']=a6(0x12a)+A[a6(0x12e)]['height']+'\x20+\x20'+this['offsetHeight']+a6(0x150),A['style'][a6(0x15c)]=u['top']??'calc(50%\x20-\x20(('+A['style']['height']+a6(0x139),A['style']['left']=u[a6(0x190)]??'calc(50%\x20-\x20(('+A['style']['width']+')\x20/\x202))',u['moveable']&&(A[a6(0x181)]=!0x0),(u[a6(0x142)]===!0x1||u['closeable']===!0x0)&&(A[a6(0x142)]=u['closeable']),u['cssClass']&&(A[a6(0x13d)]=u[a6(0x16d)]),document['getElementById'](a6(0x13c))['appendChild'](A),z;}static[a1(0x164)](u){const a7=a1;let z=u[a7(0x17c)];for(;!(z instanceof o&&z!=null);)z=z['getRootNode']()?.[a7(0x159)];z&&z.#l();}#l(){const a8=a1;document[a8(0x178)](a8(0x13c))['removeChild'](this);}#r(u){const a9=a1;let z=this[a9(0x146)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[a9(0x144)](a9(0x173),this.#o),window['addEventListener']('pointerup',this.#n);}#c(t){const aa=a1;this[aa(0x12e)]['left']=t['x']-this.#s+'px',this['style']['top']=t['y']-this.#a+'px';}#h(){const ab=a1;window[ab(0x180)](ab(0x173),this.#o),window['removeEventListener'](ab(0x12d),this.#n);}};customElements[a1(0x183)](r['is'],r);function a(){const al=['catch','start','pointermove','OpenScreen','1754OFfJjE','iobrokerSocketScriptUrl','height','getElementById','webui-navigation-app-bar','11IDXoXN','LoadJavascript','element','content','title','OpenScreenInScreenViewer','removeEventListener','moveable','location','define','getRootNode','objectsChanged','200px','div','move','relativeSignalsPath','getTargetFromTargetSelector','settings','report=','openDialog','CloseDialog','querySelectorAll','left','calc(','viewer','subScreen=','pointerup','style','container','appendChild','createElement','screenName','offsetWidth','appShell','100%','iobroker-webui-report-viewer','webui-navigation-sidebar','width',')\x20/\x202))','&targetSelector=','iobroker-webui-dialog','overlayLayer','className','shadowRoot','configChanged','display:block;width:100%;height:100%;','hash','closeable','getTime','addEventListener','screen','getBoundingClientRect','4332546bFTjGv','screenName=','[nav]\x20shell\x20init\x20failed','changeView','offsetHeight','onclick','onpointerdown','config','appBar','px)','getTarget','_getDomElement','getValue','position:fixed;top:0;left:0;right:0;height:','1399968nkhMIh','5091860jknieJ','head','1507960CjdCbg','host','5PHZyID','bind','top','calc(100%\x20-\x20','type','name','_getConfig','cssText','get','string','closeDialog','\x20+\x20','innerHTML','body','49cBKDSx','4781442RVBLrE','remove','398968DAVfAJ','display','cssClass','751IIqiKO','iobroker-webui-screen-viewer','__nav-appbar-host'];a=function(){return al;};return a();}import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async['runScriptCommand'](z,A){const ac=a1;switch(z['type']){case ac(0x18e):{r[ac(0x164)]({'element':A['element']});break;}case ac(0x174):{let F=await this['getValue'](z[ac(0x145)],A);if(z['noHistory'])document[ac(0x178)](ac(0x12b))[ac(0x189)]=await this[ac(0x153)](z['relativeSignalsPath'],A),document['getElementById']('viewer')['screenName']=F;else{let G=ac(0x148)+F;window[ac(0x182)][ac(0x141)]=G;}break;}case ac(0x17f):{let H=await this[ac(0x153)](z['screen'],A),J=await this['getValue'](z['targetSelector']??ac(0x16f),A),K=new URLSearchParams(location['hash']['substring'](0x1))[ac(0x162)](ac(0x132))??'start',L=(H!=ac(0x172)?'screenName='+K+'&':'')+ac(0x12c)+H+(J!=ac(0x16f)?ac(0x13a)+J:'');window[ac(0x182)][ac(0x141)]=L;break;}case'OpenDialog':{let M=await this[ac(0x153)](z['screen'],A),O=await this['getValue'](z[ac(0x17e)],A),P=await this[ac(0x153)](z['moveable'],A),Q=await this['getValue'](z['closeable'],A),R=await this['getValue'](z[ac(0x16d)],A),U=await this['getValue'](z[ac(0x138)],A),W=await this[ac(0x153)](z[ac(0x177)],A),X=await this['getValue'](z['left'],A),Y=await this[ac(0x153)](z[ac(0x15c)],A),Z=new g();Z[ac(0x189)]=await this['getValue'](z[ac(0x189)],A),Z[ac(0x132)]=M,U||(U=await(await h['getWebuiObject']('screen',M))[ac(0x18b)][ac(0x138)]),W||(W=await(await h['getWebuiObject']('screen',M))['settings']['height']),r[ac(0x18d)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super['runScriptCommand'](z,A);}}['getTarget'](u,z,A){const ad=a1;if(z==ad(0x12f)){let F=u[ad(0x17c)];for(let G=0x0;G<=(A??0x0);G++){let H=F['getRootNode']()['host'];H instanceof BaseCustomControl?F=H:F=H[ad(0x184)]()['host'];}return F;}return super[ad(0x151)](u,z,A);}[a1(0x18a)](u,z,A,F){const ae=a1;let G=this['getTarget'](u,z,A),H=[G];return F&&(z==='container'?G instanceof g?H=G['_getDomElements'](F):H=G[ae(0x13e)][ae(0x18f)](F):H=G[ae(0x18f)](F)),H;}},p=0x30;async function y(t,u=0x1f40){if(customElements['get'](t))return!0x0;try{await Promise['race']([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const af=a1;document[af(0x178)](af(0x170))?.['remove'](),document['querySelector'](af(0x137))?.[af(0x16a)](),document[af(0x178)]('__nav-burger')?.['remove']();let t=document[af(0x178)](af(0x12b));t&&(t[af(0x12e)][af(0x190)]='0',t['style'][af(0x15c)]='0',t['style'][af(0x138)]=af(0x135),t['style']['height']='100%');}async function w(){const ag=a1;let u=h[ag(0x14e)]||{},z=document[ag(0x178)]('viewer');if(z){if(x(),u[ag(0x14f)]&&u[ag(0x14f)]['show']&&await y(ag(0x179))){let A=document['createElement'](ag(0x187));A['id']='__nav-appbar-host',A['style']['cssText']=ag(0x154)+p+'px;z-index:100000;';let F=document[ag(0x131)]('webui-navigation-app-bar');F[ag(0x12e)][ag(0x161)]=ag(0x140),A['appendChild'](F),document[ag(0x167)]['appendChild'](A),z[ag(0x12e)][ag(0x15c)]=p+'px',z[ag(0x12e)][ag(0x177)]=ag(0x15d)+p+'px)';}if(await y(ag(0x137))){let G=document['createElement'](ag(0x137));document[ag(0x167)][ag(0x130)](G);}}}async function D(){const ah=a1;try{let t=await h[ah(0x160)]();t&&(h[ah(0x14e)]=Object['assign'](h[ah(0x14e)]||{},t));}catch{}w();}var v=!0x1;async function C(){const ai=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h[ai(0x13f)]?.['on']?.(z),h[ai(0x185)]?.['on']?.(F=>{const aj=ai;(!F||F[aj(0x15e)]===aj(0x145))&&z();});let A;h['refreshView']?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i[a1(0x17b)](window[a1(0x176)]),await h['init'](),e(h[a1(0x14e)]?.['globalStyle']),h['configChanged']['on'](()=>{try{e(h['config']?.['globalStyle']);}catch{}}),window[a1(0x134)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0x14a)]['on'](u=>{const ak=a1;let z=document[ak(0x178)](ak(0x12b));if(!z)return;let A=typeof u==ak(0x163)?u:u?.[ak(0x15f)],F=typeof u=='string'?'screen':u?.[ak(0x15e)]??'screen';if(!A)return;let G=z['localName']===ak(0x136);if(F==='report'){G?z['reportName']=A:location[ak(0x141)]=ak(0x18c)+encodeURIComponent(A);return;}if(G){location[ak(0x141)]=ak(0x148)+encodeURIComponent(A);return;}z['screenName']=A;}),C()[a1(0x171)](t=>console['warn'](a1(0x149),t));