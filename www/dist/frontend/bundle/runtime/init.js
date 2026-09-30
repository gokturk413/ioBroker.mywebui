const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=parseInt(a0(0x16f))/0x1*(parseInt(a0(0x114))/0x2)+-parseInt(a0(0x12f))/0x3*(-parseInt(a0(0x13b))/0x4)+parseInt(a0(0x158))/0x5*(-parseInt(a0(0x15b))/0x6)+-parseInt(a0(0x11a))/0x7*(-parseInt(a0(0x12d))/0x8)+parseInt(a0(0x130))/0x9+-parseInt(a0(0x14b))/0xa*(parseInt(a0(0x125))/0xb)+-parseInt(a0(0x13c))/0xc;if(A===u)break;else z['push'](z['shift']());}catch(F){z['push'](z['shift']());}}}(a,0x3069f));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-R2IYVC73.js';import{t as h}from'../chunk-FBQ2Z2FQ.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';function d(b,c){b=b-0x109;const e=a();let f=e[b];return f;}import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{['container'];[a1(0x15d)];static [a1(0x11c)]=n`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [a1(0x13a)]=l`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const a2=a1;return this.#e['style']['cursor']==a2(0x16d);}set['moveable'](t){const a3=a1;t&&(this.#e['style'][a3(0x116)]='move',this.#e[a3(0x13f)]=u=>(this.#r(u),!0x1));}get[a1(0x149)](){return this.#t['style']['display']!='none';}set[a1(0x149)](t){const a4=a1;t?this.#t[a4(0x13a)]['display']='block':this.#t['style'][a4(0x155)]=a4(0x150);}#e;#t;#i;#s;#a;#o;#n;constructor(){const a5=a1;super(),this.#e=this['_getDomElement']('head'),this.#t=this['_getDomElement'](a5(0x160)),this.#i=this[a5(0x136)]('content'),this.#t[a5(0x11d)]=()=>{this.#l();},this.#o=this.#c['bind'](this),this.#n=this.#h[a5(0x147)](this);}static [a1(0x10b)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](u){const a6=a1;let z='id'+new Date()[a6(0x10c)](),A=new o();return u['title']&&(typeof u['title']=='string'?A.#e['innerHTML']=u['title']:A.#e[a6(0x151)](u['title'])),typeof u[a6(0x139)]==a6(0x121)?A.#i[a6(0x153)]=u[a6(0x139)]:A.#i['appendChild'](u['content']),A['style']['width']=u['width']??'300px',A['style'][a6(0x112)]=u[a6(0x112)]??a6(0x137),A[a6(0x13a)]['width']=a6(0x119)+A[a6(0x13a)]['width']+'\x20+\x20'+this[a6(0x10b)]+'px)',A[a6(0x13a)][a6(0x112)]=a6(0x119)+A[a6(0x13a)][a6(0x112)]+a6(0x122)+this[a6(0x157)]+a6(0x167),A[a6(0x13a)][a6(0x15a)]=u['top']??'calc(50%\x20-\x20(('+A['style']['height']+')\x20/\x202))',A[a6(0x13a)][a6(0x133)]=u['left']??'calc(50%\x20-\x20(('+A[a6(0x13a)]['width']+')\x20/\x202))',u[a6(0x129)]&&(A['moveable']=!0x0),(u['closeable']===!0x1||u[a6(0x149)]===!0x0)&&(A[a6(0x149)]=u['closeable']),u[a6(0x143)]&&(A[a6(0x16e)]=u['cssClass']),document[a6(0x14f)](a6(0x145))[a6(0x151)](A),z;}static[a1(0x128)](u){const a7=a1;let z=u['element'];for(;!(z instanceof o&&z!=null);)z=z[a7(0x13d)]()?.[a7(0x135)];z&&z.#l();}#l(){const a8=a1;document[a8(0x14f)]('overlayLayer')['removeChild'](this);}#r(u){const a9=a1;let z=this['getBoundingClientRect']();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window['addEventListener'](a9(0x14c),this.#o),window[a9(0x168)](a9(0x159),this.#n);}#c(t){const aa=a1;this['style'][aa(0x133)]=t['x']-this.#s+'px',this[aa(0x13a)]['top']=t['y']-this.#a+'px';}#h(){const ab=a1;window[ab(0x140)]('pointermove',this.#o),window['removeEventListener']('pointerup',this.#n);}};customElements[a1(0x12e)](r['is'],r);function a(){const am=['14rioLQt','position:fixed;top:0;left:0;right:0;height:','cursor','webui-navigation-app-bar','globalStyle','calc(','335867RyeqzH','iobroker-webui-report-viewer','template','onclick','_getDomElements','type','appBar','string','\x20+\x20','config','getTargetFromTargetSelector','55ZkuPmh','remove','screenName=','closeDialog','moveable','report=','targetSelector','runScriptCommand','16tdersh','define','3scXGgA','3557511MkWVrl','start','relativeSignalsPath','left','width','host','_getDomElement','200px','objectsChanged','content','style','1499428ovsIir','3118932DnnzHS','getRootNode','iobrokerSocketScriptUrl','onpointerdown','removeEventListener','screen','LoadJavascript','cssClass','iobroker-webui-screen-viewer','overlayLayer','get','bind','__nav-burger','closeable','[nav]\x20shell\x20init\x20failed','615710IIsuhX','pointermove','createElement','name','getElementById','none','appendChild','querySelector','innerHTML','hash','display','shadowRoot','offsetHeight','114670BxUYWg','pointerup','top','102nNnahG','calc(100%\x20-\x20','uniqueId','openDialog','viewer','close','&targetSelector=','getValue','body','querySelectorAll','CloseDialog','getTarget','px)','addEventListener','race','changeView','OpenDialog','reportName','move','className','41407hCxmgV','init','getWebuiObject','OpenScreenInScreenViewer','offsetWidth','getTime','catch','__nav-appbar-host','webui-navigation-sidebar','settings','appShell','height','screenName'];a=function(){return am;};return a();}import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async[a1(0x12c)](z,A){const ac=a1;switch(z[ac(0x11f)]){case ac(0x165):{r[ac(0x128)]({'element':A['element']});break;}case'OpenScreen':{let F=await this[ac(0x162)](z[ac(0x141)],A);if(z['noHistory'])document['getElementById'](ac(0x15f))[ac(0x132)]=await this['getValue'](z['relativeSignalsPath'],A),document['getElementById'](ac(0x15f))['screenName']=F;else{let G=ac(0x127)+F;window['location'][ac(0x154)]=G;}break;}case ac(0x10a):{let H=await this['getValue'](z['screen'],A),J=await this[ac(0x162)](z[ac(0x12b)]??ac(0x144),A),K=new URLSearchParams(location[ac(0x154)]['substring'](0x1))['get'](ac(0x113))??'start',L=(H!=ac(0x131)?'screenName='+K+'&':'')+'subScreen='+H+(J!=ac(0x144)?ac(0x161)+J:'');window['location']['hash']=L;break;}case ac(0x16b):{let M=await this['getValue'](z['screen'],A),O=await this['getValue'](z['title'],A),P=await this['getValue'](z['moveable'],A),Q=await this['getValue'](z['closeable'],A),R=await this['getValue'](z['cssClass'],A),U=await this['getValue'](z[ac(0x134)],A),W=await this[ac(0x162)](z[ac(0x112)],A),X=await this[ac(0x162)](z[ac(0x133)],A),Y=await this[ac(0x162)](z[ac(0x15a)],A),Z=new g();Z['relativeSignalsPath']=await this['getValue'](z[ac(0x132)],A),Z[ac(0x113)]=M,U||(U=await(await h['getWebuiObject'](ac(0x141),M))['settings']['width']),W||(W=await(await h[ac(0x109)](ac(0x141),M))[ac(0x110)]['height']),r[ac(0x15e)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super['runScriptCommand'](z,A);}}[a1(0x166)](u,z,A){const ad=a1;if(z=='container'){let F=u['element'];for(let G=0x0;G<=(A??0x0);G++){let H=F[ad(0x13d)]()[ad(0x135)];H instanceof BaseCustomControl?F=H:F=H['getRootNode']()['host'];}return F;}return super[ad(0x166)](u,z,A);}[a1(0x124)](u,z,A,F){const ae=a1;let G=this[ae(0x166)](u,z,A),H=[G];return F&&(z==='container'?G instanceof g?H=G[ae(0x11e)](F):H=G[ae(0x156)][ae(0x164)](F):H=G[ae(0x164)](F)),H;}},p=0x30;async function y(t,u=0x1f40){const af=a1;if(customElements[af(0x146)](t))return!0x0;try{await Promise[af(0x169)]([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ag=a1;document[ag(0x14f)](ag(0x10e))?.['remove'](),document[ag(0x152)](ag(0x10f))?.[ag(0x126)](),document[ag(0x14f)](ag(0x148))?.['remove']();let t=document[ag(0x14f)](ag(0x15f));t&&(t[ag(0x13a)][ag(0x133)]='0',t[ag(0x13a)][ag(0x15a)]='0',t['style'][ag(0x134)]='100%',t['style'][ag(0x112)]='100%');}async function w(){const ah=a1;let u=h['config']||{},z=document['getElementById'](ah(0x15f));if(z){if(x(),u[ah(0x120)]&&u['appBar']['show']&&await y('webui-navigation-app-bar')){let A=document['createElement']('div');A['id']='__nav-appbar-host',A[ah(0x13a)]['cssText']=ah(0x115)+p+'px;z-index:100000;';let F=document[ah(0x14d)](ah(0x117));F['style']['cssText']='display:block;width:100%;height:100%;',A[ah(0x151)](F),document[ah(0x163)][ah(0x151)](A),z['style'][ah(0x15a)]=p+'px',z['style']['height']=ah(0x15c)+p+'px)';}if(await y('webui-navigation-sidebar')){let G=document['createElement']('webui-navigation-sidebar');document['body']['appendChild'](G);}}}async function D(){const ai=a1;try{let t=await h['_getConfig']();t&&(h[ai(0x123)]=Object['assign'](h[ai(0x123)]||{},t));}catch{}w();}var v=!0x1;async function C(){const aj=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h[aj(0x138)]?.['on']?.(F=>{const ak=aj;(!F||F[ak(0x11f)]==='screen')&&z();});let A;h['refreshView']?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i[a1(0x142)](window[a1(0x13e)]),await h[a1(0x170)](),e(h[a1(0x123)]?.[a1(0x118)]),h['configChanged']['on'](()=>{try{e(h['config']?.['globalStyle']);}catch{}}),window[a1(0x111)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0x16a)]['on'](u=>{const al=a1;let z=document[al(0x14f)](al(0x15f));if(!z)return;let A=typeof u=='string'?u:u?.[al(0x14e)],F=typeof u==al(0x121)?al(0x141):u?.['type']??'screen';if(!A)return;let G=z['localName']===al(0x11b);if(F==='report'){G?z[al(0x16c)]=A:location[al(0x154)]=al(0x12a)+encodeURIComponent(A);return;}if(G){location['hash']='screenName='+encodeURIComponent(A);return;}z[al(0x113)]=A;}),C()[a1(0x10d)](t=>console['warn'](a1(0x14a),t));