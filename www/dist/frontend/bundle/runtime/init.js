const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=-parseInt(a0(0x15b))/0x1*(parseInt(a0(0x132))/0x2)+parseInt(a0(0x126))/0x3*(parseInt(a0(0x155))/0x4)+parseInt(a0(0x129))/0x5*(parseInt(a0(0x14a))/0x6)+parseInt(a0(0x107))/0x7+-parseInt(a0(0x13e))/0x8*(-parseInt(a0(0x13c))/0x9)+-parseInt(a0(0x121))/0xa+-parseInt(a0(0x15f))/0xb;if(A===u)break;else z['push'](z['shift']());}catch(C){z['push'](z['shift']());}}}(a,0xd8a43));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-TLCLSVCQ.js';import{t as h}from'../chunk-TOF3HJP6.js';function a(){const am=['onpointerdown','substring','2771797djnAvM','catch','getTime','race','_getConfig','calc(50%\x20-\x20((','get','bind','querySelector','px;z-index:100000;','[nav]\x20shell\x20init\x20failed','openDialog','viewer','targetSelector','webui-navigation-sidebar','getBoundingClientRect','style','pointermove','localName','px)','config','host','cssClass','type','screenName','OpenScreen','16070250efcraM','createElement','getTarget','pointerup','_getDomElement','48kReLjk','name','_getDomElements','15MqFdQf',')\x20/\x202))','string','closeDialog','changeView','getValue','iobroker-webui-report-viewer','start','addEventListener','2zlhSRY','getElementById','assign','200px','left','relativeSignalsPath','closeable','appBar','height','querySelectorAll','63osNHcj','width','1777784WLucDn','reportName','startScreenName','moveable','report=','CloseDialog','content','offsetHeight','title','iobroker-webui-dialog','100%','report','3502662XzXQVU','300px','__nav-appbar-host','screenName=','getRootNode','element','overlayLayer','template','appendChild','display','cursor','383356aSjDRp','container','screen','show','cssText','offsetWidth','1146451VhxxWE','globalStyle','remove','move','17549928oLAyJU','none','removeEventListener','IOB','top'];a=function(){return am;};return a();}import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';function d(b,c){b=b-0x107;const e=a();let f=e[b];return f;}import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{[a1(0x156)];['uniqueId'];static [a1(0x151)]=n`
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
        `;static ['is']=a1(0x147);get['moveable'](){const a2=a1;return this.#e['style'][a2(0x154)]==a2(0x15e);}set[a1(0x141)](t){const a3=a1;t&&(this.#e['style'][a3(0x154)]='move',this.#e[a3(0x164)]=u=>(this.#r(u),!0x1));}get[a1(0x138)](){const a4=a1;return this.#t[a4(0x117)][a4(0x153)]!=a4(0x160);}set[a1(0x138)](t){const a5=a1;t?this.#t['style']['display']='block':this.#t[a5(0x117)]['display']='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this[a6(0x125)]('head'),this.#t=this['_getDomElement']('close'),this.#i=this[a6(0x125)](a6(0x144)),this.#t['onclick']=()=>{this.#l();},this.#o=this.#c[a6(0x10e)](this),this.#n=this.#h[a6(0x10e)](this);}static [a1(0x15a)]=0x2;static [a1(0x145)]=0x23;static[a1(0x112)](u){const a7=a1;let z='id'+new Date()[a7(0x109)](),A=new o();return u[a7(0x146)]&&(typeof u[a7(0x146)]==a7(0x12b)?A.#e['innerHTML']=u[a7(0x146)]:A.#e[a7(0x152)](u['title'])),typeof u[a7(0x144)]==a7(0x12b)?A.#i['innerHTML']=u['content']:A.#i[a7(0x152)](u['content']),A[a7(0x117)][a7(0x13d)]=u[a7(0x13d)]??a7(0x14b),A['style'][a7(0x13a)]=u['height']??a7(0x135),A['style'][a7(0x13d)]='calc('+A[a7(0x117)]['width']+'\x20+\x20'+this[a7(0x15a)]+a7(0x11a),A[a7(0x117)]['height']='calc('+A[a7(0x117)]['height']+'\x20+\x20'+this['offsetHeight']+a7(0x11a),A['style'][a7(0x163)]=u['top']??'calc(50%\x20-\x20(('+A[a7(0x117)][a7(0x13a)]+')\x20/\x202))',A['style'][a7(0x136)]=u[a7(0x136)]??a7(0x10c)+A[a7(0x117)]['width']+a7(0x12a),u[a7(0x141)]&&(A['moveable']=!0x0),(u[a7(0x138)]===!0x1||u[a7(0x138)]===!0x0)&&(A['closeable']=u['closeable']),u['cssClass']&&(A['className']=u[a7(0x11d)]),document[a7(0x133)](a7(0x150))[a7(0x152)](A),z;}static[a1(0x12c)](u){const a8=a1;let z=u[a8(0x14f)];for(;!(z instanceof o&&z!=null);)z=z['getRootNode']()?.['host'];z&&z.#l();}#l(){document['getElementById']('overlayLayer')['removeChild'](this);}#r(u){const a9=a1;let z=this[a9(0x116)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[a9(0x131)](a9(0x118),this.#o),window[a9(0x131)](a9(0x124),this.#n);}#c(t){const aa=a1;this['style'][aa(0x136)]=t['x']-this.#s+'px',this[aa(0x117)]['top']=t['y']-this.#a+'px';}#h(){const ab=a1;window[ab(0x161)]('pointermove',this.#o),window['removeEventListener']('pointerup',this.#n);}};customElements['define'](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async['runScriptCommand'](z,A){const ac=a1;switch(z['type']){case ac(0x143):{r[ac(0x12c)]({'element':A[ac(0x14f)]});break;}case ac(0x120):{let F=await this['getValue'](z['screen'],A);if(z['noHistory'])document[ac(0x133)]('viewer')[ac(0x137)]=await this['getValue'](z[ac(0x137)],A),document[ac(0x133)](ac(0x113))[ac(0x11f)]=F;else{let G='screenName='+F;window['location']['hash']=G;}break;}case'OpenScreenInScreenViewer':{let H=await this['getValue'](z[ac(0x157)],A),J=await this['getValue'](z[ac(0x114)]??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location['hash'][ac(0x165)](0x1))['get']('screenName')??(window[ac(0x162)]?.[ac(0x140)]||ac(0x130)),L=(H!=ac(0x130)?'screenName='+K+'&':'')+'subScreen='+H+(J!='iobroker-webui-screen-viewer'?'&targetSelector='+J:'');window['location']['hash']=L;break;}case'OpenDialog':{let M=await this[ac(0x12e)](z['screen'],A),O=await this[ac(0x12e)](z['title'],A),P=await this['getValue'](z['moveable'],A),Q=await this['getValue'](z[ac(0x138)],A),R=await this['getValue'](z['cssClass'],A),U=await this[ac(0x12e)](z['width'],A),W=await this['getValue'](z[ac(0x13a)],A),X=await this[ac(0x12e)](z['left'],A),Y=await this[ac(0x12e)](z[ac(0x163)],A),Z=new g();Z[ac(0x137)]=await this[ac(0x12e)](z['relativeSignalsPath'],A),Z[ac(0x11f)]=M,U||(U=await(await h['getWebuiObject'](ac(0x157),M))['settings'][ac(0x13d)]),W||(W=await(await h['getWebuiObject'](ac(0x157),M))['settings'][ac(0x13a)]),r['openDialog']({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super['runScriptCommand'](z,A);}}['getTarget'](u,z,A){const ad=a1;if(z=='container'){let C=u[ad(0x14f)];for(let F=0x0;F<=(A??0x0);F++){let G=C[ad(0x14e)]()[ad(0x11c)];G instanceof BaseCustomControl?C=G:C=G[ad(0x14e)]()[ad(0x11c)];}return C;}return super[ad(0x123)](u,z,A);}['getTargetFromTargetSelector'](u,z,A,C){const ae=a1;let F=this['getTarget'](u,z,A),G=[F];return C&&(z==='container'?F instanceof g?G=F[ae(0x128)](C):G=F['shadowRoot'][ae(0x13b)](C):G=F['querySelectorAll'](C)),G;}},p=0x30;async function y(t,u=0x1f40){const af=a1;if(customElements['get'](t))return!0x0;try{await Promise[af(0x10a)]([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements[af(0x10d)](t);}function x(){const ag=a1;document[ag(0x133)](ag(0x14c))?.[ag(0x15d)](),document[ag(0x10f)](ag(0x115))?.['remove'](),document['getElementById']('__nav-burger')?.['remove']();let t=document['getElementById'](ag(0x113));t&&(t[ag(0x117)][ag(0x136)]='0',t['style'][ag(0x163)]='0',t['style']['width']=ag(0x148),t[ag(0x117)][ag(0x13a)]='100%');}async function w(){const ah=a1;let u=h[ah(0x11b)]||{},z=document[ah(0x133)](ah(0x113));if(z){if(x(),u[ah(0x139)]&&u['appBar'][ah(0x158)]&&await y('webui-navigation-app-bar')){let A=document[ah(0x122)]('div');A['id']='__nav-appbar-host',A['style']['cssText']='position:fixed;top:0;left:0;right:0;height:'+p+ah(0x110);let C=document['createElement']('webui-navigation-app-bar');C[ah(0x117)][ah(0x159)]='display:block;width:100%;height:100%;',A[ah(0x152)](C),document['body']['appendChild'](A),z['style'][ah(0x163)]=p+'px',z['style']['height']='calc(100%\x20-\x20'+p+ah(0x11a);}if(await y('webui-navigation-sidebar')){let F=document[ah(0x122)]('webui-navigation-sidebar');document['body'][ah(0x152)](F);}}}async function D(){const ai=a1;try{let t=await h[ai(0x10b)]();t&&(h['config']=Object[ai(0x134)](h['config']||{},t));}catch{}w();}var v=!0x1;async function S(){if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h['objectsChanged']?.['on']?.(C=>{const aj=d;(!C||C[aj(0x11e)]===aj(0x157))&&z();});let A;h['refreshView']?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i['LoadJavascript'](window['iobrokerSocketScriptUrl']),await h['init'](),e(h['config']?.[a1(0x15c)]),h['configChanged']['on'](()=>{const ak=a1;try{e(h[ak(0x11b)]?.[ak(0x15c)]);}catch{}}),window['appShell']={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0x12d)]['on'](u=>{const al=a1;let z=document[al(0x133)](al(0x113));if(!z)return;let A=typeof u==al(0x12b)?u:u?.[al(0x127)],C=typeof u==al(0x12b)?'screen':u?.[al(0x11e)]??al(0x157);if(!A)return;let F=z[al(0x119)]===al(0x12f);if(C===al(0x149)){F?z[al(0x13f)]=A:location['hash']=al(0x142)+encodeURIComponent(A);return;}if(F){location['hash']=al(0x14d)+encodeURIComponent(A);return;}z['screenName']=A;}),S()[a1(0x108)](t=>console['warn'](a1(0x111),t));