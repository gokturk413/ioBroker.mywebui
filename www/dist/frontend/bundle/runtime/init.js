const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=-parseInt(a0(0x1ea))/0x1+parseInt(a0(0x1e7))/0x2+parseInt(a0(0x1e0))/0x3*(-parseInt(a0(0x1d9))/0x4)+-parseInt(a0(0x1c6))/0x5+parseInt(a0(0x1e2))/0x6*(parseInt(a0(0x1f3))/0x7)+parseInt(a0(0x1f2))/0x8+-parseInt(a0(0x1c9))/0x9*(-parseInt(a0(0x1cd))/0xa);if(A===u)break;else z['push'](z['shift']());}catch(C){z['push'](z['shift']());}}}(a,0xbe0f2));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-TLCLSVCQ.js';import{t as h}from'../chunk-TOF3HJP6.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{[a1(0x202)];[a1(0x1e1)];static ['template']=n`
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
        `;static ['is']='iobroker-webui-dialog';get[a1(0x1e4)](){const a2=a1;return this.#e[a2(0x1de)]['cursor']==a2(0x1ba);}set[a1(0x1e4)](t){const a3=a1;t&&(this.#e['style'][a3(0x1f5)]='move',this.#e['onpointerdown']=u=>(this.#r(u),!0x1));}get['closeable'](){const a4=a1;return this.#t['style']['display']!=a4(0x1fd);}set['closeable'](t){const a5=a1;t?this.#t[a5(0x1de)][a5(0x1cf)]='block':this.#t[a5(0x1de)]['display']=a5(0x1fd);}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this['_getDomElement'](a6(0x1fe)),this.#t=this['_getDomElement'](a6(0x1f8)),this.#i=this['_getDomElement']('content'),this.#t[a6(0x1e5)]=()=>{this.#l();},this.#o=this.#c['bind'](this),this.#n=this.#h[a6(0x20e)](this);}static [a1(0x1c2)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()['getTime'](),A=new o();return u['title']&&(typeof u[a7(0x208)]==a7(0x1f7)?A.#e[a7(0x1d5)]=u['title']:A.#e[a7(0x206)](u[a7(0x208)])),typeof u[a7(0x1d6)]==a7(0x1f7)?A.#i['innerHTML']=u['content']:A.#i[a7(0x206)](u['content']),A[a7(0x1de)][a7(0x1dd)]=u[a7(0x1dd)]??'300px',A[a7(0x1de)][a7(0x1f6)]=u['height']??a7(0x20b),A[a7(0x1de)][a7(0x1dd)]='calc('+A['style'][a7(0x1dd)]+'\x20+\x20'+this[a7(0x1c2)]+a7(0x1ee),A[a7(0x1de)]['height']=a7(0x1c3)+A[a7(0x1de)][a7(0x1f6)]+'\x20+\x20'+this['offsetHeight']+'px)',A['style'][a7(0x1d4)]=u['top']??a7(0x1c1)+A[a7(0x1de)]['height']+a7(0x1fb),A['style'][a7(0x209)]=u[a7(0x209)]??a7(0x1c1)+A[a7(0x1de)][a7(0x1dd)]+')\x20/\x202))',u['moveable']&&(A[a7(0x1e4)]=!0x0),(u['closeable']===!0x1||u[a7(0x1ed)]===!0x0)&&(A['closeable']=u['closeable']),u['cssClass']&&(A[a7(0x20c)]=u['cssClass']),document[a7(0x200)]('overlayLayer')['appendChild'](A),z;}static[a1(0x210)](u){const a8=a1;let z=u[a8(0x1e3)];for(;!(z instanceof o&&z!=null);)z=z[a8(0x20d)]()?.[a8(0x20f)];z&&z.#l();}#l(){const a9=a1;document['getElementById'](a9(0x1d2))['removeChild'](this);}#r(u){const aa=a1;let z=this['getBoundingClientRect']();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window['addEventListener'](aa(0x1eb),this.#o),window['addEventListener']('pointerup',this.#n);}#c(t){const ab=a1;this[ab(0x1de)][ab(0x209)]=t['x']-this.#s+'px',this['style']['top']=t['y']-this.#a+'px';}#h(){const ac=a1;window['removeEventListener'](ac(0x1eb),this.#o),window['removeEventListener']('pointerup',this.#n);}};function a(){const ao=['string','close','viewer','appShell',')\x20/\x202))','type','none','head','_getConfig','getElementById','objectsChanged','container','init','appBar','body','appendChild','startScreenName','title','left','subScreen=','200px','className','getRootNode','bind','host','closeDialog','relativeSignalsPath','webui-navigation-app-bar','move','querySelector','getTarget','openDialog','define','report','OpenScreen','calc(50%\x20-\x20((','offsetWidth','calc(','webui-navigation-sidebar','getTargetFromTargetSelector','2444650zlMmgz','iobroker-webui-report-viewer','getValue','5604156gMCfFj','screenName','[nav]\x20shell\x20init\x20failed','show','10qXPAar','__nav-appbar-host','display','iobrokerSocketScriptUrl','100%','overlayLayer','catch','top','innerHTML','content','querySelectorAll','globalStyle','148TUzrrD','cssText','getWebuiObject','config','width','style','createElement','46329oapEem','uniqueId','6pSckrY','element','moveable','onclick','start','1736640bSHbuo','location','screen','992542xbjXes','pointermove','hash','closeable','px)','get','OpenDialog','runScriptCommand','8952920vvPdvk','1548582WRTFJs','substring','cursor','height'];a=function(){return ao;};return a();}customElements[a1(0x1be)](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async['runScriptCommand'](z,A){const ad=a1;switch(z['type']){case'CloseDialog':{r['closeDialog']({'element':A['element']});break;}case ad(0x1c0):{let F=await this['getValue'](z[ad(0x1e9)],A);if(z['noHistory'])document['getElementById'](ad(0x1f9))['relativeSignalsPath']=await this['getValue'](z[ad(0x1b8)],A),document[ad(0x200)](ad(0x1f9))[ad(0x1ca)]=F;else{let G='screenName='+F;window['location']['hash']=G;}break;}case'OpenScreenInScreenViewer':{let H=await this['getValue'](z['screen'],A),J=await this['getValue'](z['targetSelector']??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location[ad(0x1ec)][ad(0x1f4)](0x1))['get']('screenName')??(window['IOB']?.[ad(0x207)]||ad(0x1e6)),L=(H!=ad(0x1e6)?'screenName='+K+'&':'')+ad(0x20a)+H+(J!='iobroker-webui-screen-viewer'?'&targetSelector='+J:'');window[ad(0x1e8)][ad(0x1ec)]=L;break;}case ad(0x1f0):{let M=await this[ad(0x1c8)](z['screen'],A),O=await this['getValue'](z[ad(0x208)],A),P=await this['getValue'](z[ad(0x1e4)],A),Q=await this[ad(0x1c8)](z[ad(0x1ed)],A),R=await this[ad(0x1c8)](z['cssClass'],A),U=await this[ad(0x1c8)](z[ad(0x1dd)],A),W=await this[ad(0x1c8)](z[ad(0x1f6)],A),X=await this[ad(0x1c8)](z['left'],A),Y=await this['getValue'](z[ad(0x1d4)],A),Z=new g();Z['relativeSignalsPath']=await this[ad(0x1c8)](z['relativeSignalsPath'],A),Z[ad(0x1ca)]=M,U||(U=await(await h[ad(0x1db)](ad(0x1e9),M))['settings']['width']),W||(W=await(await h[ad(0x1db)](ad(0x1e9),M))['settings']['height']),r[ad(0x1bd)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super[ad(0x1f1)](z,A);}}[a1(0x1bc)](u,z,A){const ae=a1;if(z=='container'){let C=u[ae(0x1e3)];for(let F=0x0;F<=(A??0x0);F++){let G=C['getRootNode']()['host'];G instanceof BaseCustomControl?C=G:C=G[ae(0x20d)]()['host'];}return C;}return super['getTarget'](u,z,A);}[a1(0x1c5)](u,z,A,C){const af=a1;let F=this['getTarget'](u,z,A),G=[F];return C&&(z===af(0x202)?F instanceof g?G=F['_getDomElements'](C):G=F['shadowRoot'][af(0x1d7)](C):G=F['querySelectorAll'](C)),G;}},p=0x30;async function y(t,u=0x1f40){const ag=a1;if(customElements[ag(0x1ef)](t))return!0x0;try{await Promise['race']([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements[ag(0x1ef)](t);}function x(){const ah=a1;document['getElementById']('__nav-appbar-host')?.['remove'](),document[ah(0x1bb)](ah(0x1c4))?.['remove'](),document[ah(0x200)]('__nav-burger')?.['remove']();let t=document[ah(0x200)](ah(0x1f9));t&&(t['style'][ah(0x209)]='0',t['style'][ah(0x1d4)]='0',t[ah(0x1de)]['width']=ah(0x1d1),t['style'][ah(0x1f6)]=ah(0x1d1));}async function w(){const ai=a1;let u=h['config']||{},z=document[ai(0x200)](ai(0x1f9));if(z){if(x(),u[ai(0x204)]&&u[ai(0x204)][ai(0x1cc)]&&await y(ai(0x1b9))){let A=document[ai(0x1df)]('div');A['id']=ai(0x1ce),A['style']['cssText']='position:fixed;top:0;left:0;right:0;height:'+p+'px;z-index:100000;';let C=document['createElement']('webui-navigation-app-bar');C['style'][ai(0x1da)]='display:block;width:100%;height:100%;',A['appendChild'](C),document[ai(0x205)]['appendChild'](A),z['style']['top']=p+'px',z[ai(0x1de)]['height']='calc(100%\x20-\x20'+p+ai(0x1ee);}if(await y(ai(0x1c4))){let F=document[ai(0x1df)]('webui-navigation-sidebar');document['body'][ai(0x206)](F);}}}async function D(){const aj=a1;try{let t=await h[aj(0x1ff)]();t&&(h[aj(0x1dc)]=Object['assign'](h[aj(0x1dc)]||{},t));}catch{}w();}var v=!0x1;function d(b,c){b=b-0x1b8;const e=a();let f=e[b];return f;}async function S(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h[ak(0x201)]?.['on']?.(C=>{const al=ak;(!C||C[al(0x1fc)]===al(0x1e9))&&z();});let A;h['refreshView']?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i['LoadJavascript'](window[a1(0x1d0)]),await h[a1(0x203)](),e(h['config']?.[a1(0x1d8)]),h['configChanged']['on'](()=>{const am=a1;try{e(h[am(0x1dc)]?.[am(0x1d8)]);}catch{}}),window[a1(0x1fa)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h['changeView']['on'](u=>{const an=a1;let z=document['getElementById']('viewer');if(!z)return;let A=typeof u=='string'?u:u?.['name'],C=typeof u==an(0x1f7)?an(0x1e9):u?.[an(0x1fc)]??an(0x1e9);if(!A)return;let F=z['localName']===an(0x1c7);if(C===an(0x1bf)){F?z['reportName']=A:location['hash']='report='+encodeURIComponent(A);return;}if(F){location[an(0x1ec)]='screenName='+encodeURIComponent(A);return;}z[an(0x1ca)]=A;}),S()[a1(0x1d3)](t=>console['warn'](a1(0x1cb),t));