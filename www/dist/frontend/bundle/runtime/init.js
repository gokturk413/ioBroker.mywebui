const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=-parseInt(a0(0x9b))/0x1+parseInt(a0(0xb1))/0x2*(parseInt(a0(0xce))/0x3)+-parseInt(a0(0xb4))/0x4*(parseInt(a0(0x88))/0x5)+parseInt(a0(0xc0))/0x6+-parseInt(a0(0xa3))/0x7+-parseInt(a0(0x92))/0x8*(-parseInt(a0(0xdb))/0x9)+parseInt(a0(0x95))/0xa;if(A===u)break;else z['push'](z['shift']());}catch(C){z['push'](z['shift']());}}}(a,0xaf879));import{b,c as e}from'../chunk-KVPT4J7H.js';function d(b,c){b=b-0x82;const e=a();let f=e[b];return f;}import{a as g}from'../chunk-TLCLSVCQ.js';import{t as h}from'../chunk-TOF3HJP6.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{['container'];[a1(0x94)];static ['template']=n`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [a1(0xb9)]=l`
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
        `;static ['is']=a1(0xd8);get['moveable'](){const a2=a1;return this.#e['style'][a2(0xcf)]==a2(0xa5);}set['moveable'](t){const a3=a1;t&&(this.#e['style'][a3(0xcf)]='move',this.#e['onpointerdown']=u=>(this.#r(u),!0x1));}get['closeable'](){const a4=a1;return this.#t[a4(0xb9)]['display']!='none';}set[a1(0xbe)](t){const a5=a1;t?this.#t[a5(0xb9)]['display']='block':this.#t['style'][a5(0xba)]='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this['_getDomElement'](a6(0xaa)),this.#t=this['_getDomElement'](a6(0xbb)),this.#i=this['_getDomElement'](a6(0x91)),this.#t[a6(0xc7)]=()=>{this.#l();},this.#o=this.#c[a6(0xb5)](this),this.#n=this.#h[a6(0xb5)](this);}static [a1(0xac)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()['getTime'](),A=new o();return u[a7(0x8a)]&&(typeof u[a7(0x8a)]==a7(0xb8)?A.#e['innerHTML']=u[a7(0x8a)]:A.#e[a7(0x82)](u[a7(0x8a)])),typeof u['content']=='string'?A.#i['innerHTML']=u[a7(0x91)]:A.#i['appendChild'](u['content']),A['style'][a7(0x9f)]=u['width']??'300px',A['style']['height']=u[a7(0x8e)]??'200px',A['style']['width']='calc('+A['style']['width']+a7(0xb7)+this[a7(0xac)]+a7(0x9c),A[a7(0xb9)][a7(0x8e)]='calc('+A['style'][a7(0x8e)]+a7(0xb7)+this['offsetHeight']+'px)',A['style']['top']=u[a7(0xa8)]??a7(0xc1)+A['style'][a7(0x8e)]+')\x20/\x202))',A[a7(0xb9)][a7(0xd0)]=u['left']??a7(0xc1)+A['style'][a7(0x9f)]+')\x20/\x202))',u['moveable']&&(A[a7(0xcd)]=!0x0),(u['closeable']===!0x1||u[a7(0xbe)]===!0x0)&&(A[a7(0xbe)]=u['closeable']),u[a7(0x85)]&&(A['className']=u['cssClass']),document[a7(0x8b)](a7(0xbd))[a7(0x82)](A),z;}static['closeDialog'](u){const a8=a1;let z=u['element'];for(;!(z instanceof o&&z!=null);)z=z[a8(0xd1)]()?.[a8(0x89)];z&&z.#l();}#l(){const a9=a1;document['getElementById'](a9(0xbd))[a9(0xd4)](this);}#r(u){const aa=a1;let z=this[aa(0x83)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[aa(0x99)]('pointermove',this.#o),window['addEventListener'](aa(0xcc),this.#n);}#c(t){const ab=a1;this['style'][ab(0xd0)]=t['x']-this.#s+'px',this['style']['top']=t['y']-this.#a+'px';}#h(){const ac=a1;window[ac(0xb3)]('pointermove',this.#o),window['removeEventListener']('pointerup',this.#n);}};customElements['define'](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async['runScriptCommand'](z,A){const ad=a1;switch(z['type']){case ad(0xd6):{r[ad(0x8f)]({'element':A['element']});break;}case'OpenScreen':{let F=await this[ad(0xd3)](z['screen'],A);if(z['noHistory'])document[ad(0x8b)](ad(0xd2))['relativeSignalsPath']=await this['getValue'](z[ad(0xd7)],A),document[ad(0x8b)](ad(0xd2))[ad(0xdc)]=F;else{let G=ad(0x9a)+F;window[ad(0xcb)]['hash']=G;}break;}case ad(0xda):{let H=await this['getValue'](z[ad(0xc2)],A),J=await this['getValue'](z[ad(0x8d)]??ad(0xca),A),K=new URLSearchParams(location[ad(0xa9)][ad(0xc4)](0x1))[ad(0xa1)]('screenName')??(window[ad(0x87)]?.['startScreenName']||'start'),L=(H!=ad(0xdf)?ad(0x9a)+K+'&':'')+'subScreen='+H+(J!='iobroker-webui-screen-viewer'?'&targetSelector='+J:'');window[ad(0xcb)][ad(0xa9)]=L;break;}case ad(0xe0):{let M=await this[ad(0xd3)](z[ad(0xc2)],A),O=await this[ad(0xd3)](z['title'],A),P=await this[ad(0xd3)](z[ad(0xcd)],A),Q=await this['getValue'](z[ad(0xbe)],A),R=await this[ad(0xd3)](z['cssClass'],A),U=await this[ad(0xd3)](z['width'],A),W=await this['getValue'](z[ad(0x8e)],A),X=await this['getValue'](z[ad(0xd0)],A),Y=await this[ad(0xd3)](z['top'],A),Z=new g();Z[ad(0xd7)]=await this['getValue'](z[ad(0xd7)],A),Z[ad(0xdc)]=M,U||(U=await(await h['getWebuiObject']('screen',M))['settings'][ad(0x9f)]),W||(W=await(await h[ad(0xaf)](ad(0xc2),M))['settings'][ad(0x8e)]),r['openDialog']({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super[ad(0xc5)](z,A);}}['getTarget'](u,z,A){const ae=a1;if(z=='container'){let C=u['element'];for(let F=0x0;F<=(A??0x0);F++){let G=C['getRootNode']()[ae(0x89)];G instanceof BaseCustomControl?C=G:C=G['getRootNode']()['host'];}return C;}return super[ae(0xd9)](u,z,A);}[a1(0x96)](u,z,A,C){const af=a1;let F=this['getTarget'](u,z,A),G=[F];return C&&(z==='container'?F instanceof g?G=F[af(0xc8)](C):G=F[af(0xc6)]['querySelectorAll'](C):G=F[af(0xde)](C)),G;}},p=0x30;async function y(t,u=0x1f40){const ag=a1;if(customElements['get'](t))return!0x0;try{await Promise[ag(0xa4)]([customElements[ag(0x93)](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function a(){const an=['1643864iHwDjk','bind','type','\x20+\x20','string','style','display','close','show','overlayLayer','closeable','localName','5193174vVSXtD','calc(50%\x20-\x20((','screen','name','substring','runScriptCommand','shadowRoot','onclick','_getDomElements','webui-navigation-sidebar','iobroker-webui-screen-viewer','location','pointerup','moveable','3tSYgXw','cursor','left','getRootNode','viewer','getValue','removeChild','appShell','CloseDialog','relativeSignalsPath','iobroker-webui-dialog','getTarget','OpenScreenInScreenViewer','243vgTYSp','screenName','changeView','querySelectorAll','start','OpenDialog','catch','appendChild','getBoundingClientRect','configChanged','cssClass','remove','IOB','5AFRurm','host','title','getElementById','display:block;width:100%;height:100%;','targetSelector','height','closeDialog','position:fixed;top:0;left:0;right:0;height:','content','79064DhHtQp','whenDefined','uniqueId','23439860VmrHti','getTargetFromTargetSelector','config','createElement','addEventListener','screenName=','1187130zSMQrs','px)','appBar','report','width','webui-navigation-app-bar','get','iobrokerSocketScriptUrl','9744000FZsHee','race','move','assign','reportName','top','hash','head','__nav-appbar-host','offsetWidth','body','px;z-index:100000;','getWebuiObject','iobroker-webui-report-viewer','465418xLmTNw','_getConfig','removeEventListener'];a=function(){return an;};return a();}function x(){const ah=a1;document[ah(0x8b)]('__nav-appbar-host')?.[ah(0x86)](),document['querySelector'](ah(0xc9))?.['remove'](),document['getElementById']('__nav-burger')?.[ah(0x86)]();let t=document['getElementById'](ah(0xd2));t&&(t[ah(0xb9)]['left']='0',t['style']['top']='0',t[ah(0xb9)][ah(0x9f)]='100%',t[ah(0xb9)]['height']='100%');}async function w(){const ai=a1;let u=h[ai(0x97)]||{},z=document[ai(0x8b)](ai(0xd2));if(z){if(x(),u[ai(0x9d)]&&u[ai(0x9d)][ai(0xbc)]&&await y(ai(0xa0))){let A=document['createElement']('div');A['id']=ai(0xab),A['style']['cssText']=ai(0x90)+p+ai(0xae);let C=document['createElement'](ai(0xa0));C[ai(0xb9)]['cssText']=ai(0x8c),A[ai(0x82)](C),document['body']['appendChild'](A),z['style']['top']=p+'px',z[ai(0xb9)]['height']='calc(100%\x20-\x20'+p+'px)';}if(await y(ai(0xc9))){let F=document[ai(0x98)]('webui-navigation-sidebar');document[ai(0xad)][ai(0x82)](F);}}}async function D(){const aj=a1;try{let t=await h[aj(0xb2)]();t&&(h['config']=Object[aj(0xa6)](h[aj(0x97)]||{},t));}catch{}w();}var v=!0x1;async function S(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h[ak(0x84)]?.['on']?.(z),h['objectsChanged']?.['on']?.(C=>{const al=ak;(!C||C[al(0xb6)]==='screen')&&z();});let A;h['refreshView']?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i['LoadJavascript'](window[a1(0xa2)]),await h['init'](),e(h['config']?.['globalStyle']),h[a1(0x84)]['on'](()=>{try{e(h['config']?.['globalStyle']);}catch{}}),window[a1(0xd5)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0xdd)]['on'](u=>{const am=a1;let z=document['getElementById']('viewer');if(!z)return;let A=typeof u=='string'?u:u?.[am(0xc3)],C=typeof u=='string'?'screen':u?.['type']??'screen';if(!A)return;let F=z[am(0xbf)]===am(0xb0);if(C===am(0x9e)){F?z[am(0xa7)]=A:location['hash']='report='+encodeURIComponent(A);return;}if(F){location[am(0xa9)]=am(0x9a)+encodeURIComponent(A);return;}z['screenName']=A;}),S()[a1(0xe1)](t=>console['warn']('[nav]\x20shell\x20init\x20failed',t));