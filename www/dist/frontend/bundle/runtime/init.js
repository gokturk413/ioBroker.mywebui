const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=parseInt(a0(0x163))/0x1+parseInt(a0(0x157))/0x2+parseInt(a0(0x167))/0x3*(-parseInt(a0(0x15c))/0x4)+parseInt(a0(0x17c))/0x5+-parseInt(a0(0x14c))/0x6*(parseInt(a0(0x172))/0x7)+parseInt(a0(0x166))/0x8+-parseInt(a0(0x15f))/0x9*(-parseInt(a0(0x135))/0xa);if(A===u)break;else z['push'](z['shift']());}catch(C){z['push'](z['shift']());}}}(a,0x35106));function d(b,c){b=b-0x125;const e=a();let f=e[b];return f;}import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-JAUROOM5.js';import{t as h}from'../chunk-QLBNVDK5.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{['container'];['uniqueId'];static ['template']=n`
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
        `;static ['is']='iobroker-webui-dialog';get[a1(0x181)](){const a2=a1;return this.#e[a2(0x151)]['cursor']==a2(0x177);}set[a1(0x181)](t){const a3=a1;t&&(this.#e[a3(0x151)][a3(0x14d)]=a3(0x177),this.#e['onpointerdown']=u=>(this.#r(u),!0x1));}get['closeable'](){const a4=a1;return this.#t[a4(0x151)][a4(0x12a)]!='none';}set[a1(0x13a)](t){const a5=a1;t?this.#t[a5(0x151)]['display']='block':this.#t[a5(0x151)][a5(0x12a)]='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this[a6(0x162)]('head'),this.#t=this['_getDomElement'](a6(0x136)),this.#i=this['_getDomElement']('content'),this.#t[a6(0x12b)]=()=>{this.#l();},this.#o=this.#c['bind'](this),this.#n=this.#h[a6(0x16d)](this);}static [a1(0x16c)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()[a7(0x149)](),A=new o();return u['title']&&(typeof u[a7(0x130)]==a7(0x160)?A.#e['innerHTML']=u['title']:A.#e[a7(0x14b)](u[a7(0x130)])),typeof u[a7(0x127)]=='string'?A.#i['innerHTML']=u['content']:A.#i[a7(0x14b)](u['content']),A[a7(0x151)][a7(0x168)]=u['width']??'300px',A[a7(0x151)]['height']=u[a7(0x133)]??'200px',A['style']['width']=a7(0x12f)+A['style']['width']+a7(0x125)+this['offsetWidth']+a7(0x132),A['style'][a7(0x133)]='calc('+A[a7(0x151)]['height']+'\x20+\x20'+this['offsetHeight']+a7(0x132),A['style'][a7(0x148)]=u[a7(0x148)]??a7(0x15a)+A[a7(0x151)][a7(0x133)]+')\x20/\x202))',A['style'][a7(0x171)]=u['left']??a7(0x15a)+A[a7(0x151)]['width']+a7(0x161),u['moveable']&&(A[a7(0x181)]=!0x0),(u['closeable']===!0x1||u['closeable']===!0x0)&&(A['closeable']=u[a7(0x13a)]),u[a7(0x134)]&&(A['className']=u['cssClass']),document[a7(0x164)]('overlayLayer')['appendChild'](A),z;}static['closeDialog'](u){const a8=a1;let z=u[a8(0x173)];for(;!(z instanceof o&&z!=null);)z=z['getRootNode']()?.['host'];z&&z.#l();}#l(){const a9=a1;document[a9(0x164)](a9(0x176))[a9(0x13b)](this);}#r(u){const aa=a1;let z=this['getBoundingClientRect']();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[aa(0x16a)]('pointermove',this.#o),window[aa(0x16a)](aa(0x153),this.#n);}#c(t){const ab=a1;this['style']['left']=t['x']-this.#s+'px',this[ab(0x151)]['top']=t['y']-this.#a+'px';}#h(){const ac=a1;window['removeEventListener']('pointermove',this.#o),window[ac(0x142)](ac(0x153),this.#n);}};customElements['define'](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async[a1(0x174)](z,A){const ad=a1;switch(z['type']){case ad(0x146):{r[ad(0x13c)]({'element':A[ad(0x173)]});break;}case ad(0x145):{let F=await this[ad(0x138)](z[ad(0x13e)],A);if(z['noHistory'])document[ad(0x164)](ad(0x170))[ad(0x128)]=await this[ad(0x138)](z['relativeSignalsPath'],A),document['getElementById']('viewer')['screenName']=F;else{let G='screenName='+F;window[ad(0x152)][ad(0x175)]=G;}break;}case'OpenScreenInScreenViewer':{let H=await this[ad(0x138)](z['screen'],A),J=await this[ad(0x138)](z[ad(0x131)]??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location[ad(0x175)]['substring'](0x1))[ad(0x156)](ad(0x154))??(window['IOB']?.['startScreenName']||ad(0x17b)),L=(H!='start'?ad(0x143)+K+'&':'')+'subScreen='+H+(J!=ad(0x180)?'&targetSelector='+J:'');window[ad(0x152)][ad(0x175)]=L;break;}case'OpenDialog':{let M=await this['getValue'](z['screen'],A),O=await this['getValue'](z[ad(0x130)],A),P=await this['getValue'](z['moveable'],A),Q=await this['getValue'](z[ad(0x13a)],A),R=await this[ad(0x138)](z['cssClass'],A),U=await this[ad(0x138)](z[ad(0x168)],A),W=await this[ad(0x138)](z[ad(0x133)],A),X=await this['getValue'](z[ad(0x171)],A),Y=await this[ad(0x138)](z['top'],A),Z=new g();Z['relativeSignalsPath']=await this[ad(0x138)](z[ad(0x128)],A),Z[ad(0x154)]=M,U||(U=await(await h[ad(0x159)]('screen',M))['settings'][ad(0x168)]),W||(W=await(await h[ad(0x159)]('screen',M))[ad(0x17d)]['height']),r[ad(0x129)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super[ad(0x174)](z,A);}}[a1(0x16f)](u,z,A){if(z=='container'){let C=u['element'];for(let F=0x0;F<=(A??0x0);F++){let G=C['getRootNode']()['host'];G instanceof BaseCustomControl?C=G:C=G['getRootNode']()['host'];}return C;}return super['getTarget'](u,z,A);}[a1(0x137)](u,z,A,C){const ae=a1;let F=this['getTarget'](u,z,A),G=[F];return C&&(z==='container'?F instanceof g?G=F['_getDomElements'](C):G=F[ae(0x141)][ae(0x169)](C):G=F['querySelectorAll'](C)),G;}},p=0x30;async function y(t,u=0x1f40){const af=a1;if(customElements['get'](t))return!0x0;try{await Promise[af(0x139)]([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ag=a1;document['getElementById']('__nav-appbar-host')?.['remove'](),document[ag(0x150)](ag(0x13f))?.[ag(0x15b)](),document[ag(0x164)](ag(0x140))?.[ag(0x15b)]();let t=document['getElementById']('viewer');t&&(t['style'][ag(0x171)]='0',t[ag(0x151)][ag(0x148)]='0',t['style']['width']=ag(0x15e),t[ag(0x151)][ag(0x133)]=ag(0x15e));}async function w(){const ah=a1;let u=h['config']||{},z=document['getElementById']('viewer');if(z){if(x(),u[ah(0x15d)]&&u['appBar']['show']&&await y('webui-navigation-app-bar')){let A=document['createElement']('div');A['id']=ah(0x183),A[ah(0x151)][ah(0x179)]=ah(0x126)+p+'px;z-index:100000;';let C=document[ah(0x14f)](ah(0x182));C[ah(0x151)][ah(0x179)]=ah(0x165),A['appendChild'](C),document['body'][ah(0x14b)](A),z['style']['top']=p+'px',z['style']['height']=ah(0x178)+p+'px)';}if(await y('webui-navigation-sidebar')){let F=document[ah(0x14f)](ah(0x13f));document['body']['appendChild'](F);}}}async function D(){const ai=a1;try{let t=await h[ai(0x12c)]();t&&(h['config']=Object[ai(0x144)](h['config']||{},t));}catch{}w();}var v=!0x1;async function S(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h['objectsChanged']?.['on']?.(C=>{const aj=d;(!C||C[aj(0x14a)]==='screen')&&z();});let A;h[ak(0x158)]?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i[a1(0x17a)](window[a1(0x16b)]),await h['init'](),e(h[a1(0x14e)]?.['globalStyle']),h[a1(0x12d)]['on'](()=>{const al=a1;try{e(h['config']?.[al(0x13d)]);}catch{}}),window[a1(0x12e)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h['changeView']['on'](u=>{const am=a1;let z=document[am(0x164)](am(0x170));if(!z)return;let A=typeof u==am(0x160)?u:u?.['name'],C=typeof u==am(0x160)?'screen':u?.[am(0x14a)]??'screen';if(!A)return;let F=z['localName']==='iobroker-webui-report-viewer';if(C==='report'){F?z[am(0x155)]=A:location[am(0x175)]=am(0x16e)+encodeURIComponent(A);return;}if(F){location[am(0x175)]='screenName='+encodeURIComponent(A);return;}z[am(0x154)]=A;}),S()[a1(0x17e)](t=>console[a1(0x147)](a1(0x17f),t));function a(){const an=['getElementById','display:block;width:100%;height:100%;','1417440aipCMA','298299wGVeWJ','width','querySelectorAll','addEventListener','iobrokerSocketScriptUrl','offsetWidth','bind','report=','getTarget','viewer','left','1057WSnKzV','element','runScriptCommand','hash','overlayLayer','move','calc(100%\x20-\x20','cssText','LoadJavascript','start','1493390OVTmKe','settings','catch','[nav]\x20shell\x20init\x20failed','iobroker-webui-screen-viewer','moveable','webui-navigation-app-bar','__nav-appbar-host','\x20+\x20','position:fixed;top:0;left:0;right:0;height:','content','relativeSignalsPath','openDialog','display','onclick','_getConfig','configChanged','appShell','calc(','title','targetSelector','px)','height','cssClass','28610cYhgXV','close','getTargetFromTargetSelector','getValue','race','closeable','removeChild','closeDialog','globalStyle','screen','webui-navigation-sidebar','__nav-burger','shadowRoot','removeEventListener','screenName=','assign','OpenScreen','CloseDialog','warn','top','getTime','type','appendChild','6690UNveVQ','cursor','config','createElement','querySelector','style','location','pointerup','screenName','reportName','get','365826PcVgMM','refreshView','getWebuiObject','calc(50%\x20-\x20((','remove','16FCCqpd','appBar','100%','207vRUhHd','string',')\x20/\x202))','_getDomElement','58873DTvPsl'];a=function(){return an;};return a();}