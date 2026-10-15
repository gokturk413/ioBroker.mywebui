const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=parseInt(a0(0x1fb))/0x1*(-parseInt(a0(0x20f))/0x2)+parseInt(a0(0x202))/0x3*(parseInt(a0(0x205))/0x4)+-parseInt(a0(0x1e8))/0x5+-parseInt(a0(0x213))/0x6+-parseInt(a0(0x1da))/0x7+parseInt(a0(0x1e3))/0x8*(-parseInt(a0(0x207))/0x9)+parseInt(a0(0x226))/0xa;if(A===u)break;else z['push'](z['shift']());}catch(C){z['push'](z['shift']());}}}(a,0x2ff55));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-GKVOZVKS.js';import{t as h}from'../chunk-6UCSEZIG.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';function a(){const an=['webui-navigation-app-bar','top','1061346CLpEfF','removeChild','position:fixed;top:0;left:0;right:0;height:','querySelector','refreshView','getBoundingClientRect','iobroker-webui-dialog','innerHTML','content','display:block;width:100%;height:100%;','assign','_getConfig','height','location','move','offsetHeight','OpenScreen','none','cursor','12898100tIMnEH','show','string','offsetWidth','globalStyle','localName','appBar','className','block','startScreenName','OpenScreenInScreenViewer','host','calc(50%\x20-\x20((','getRootNode','px)','cssClass','appShell','div','width','LoadJavascript','getElementById','noHistory','1950004miYFOR','webui-navigation-sidebar','getValue','reportName','cssText','__nav-burger','100%','relativeSignalsPath','calc(100%\x20-\x20','17008iWlKIz','body','overlayLayer','objectsChanged','onclick','1034400HfzbCD','changeView','pointermove','removeEventListener','_getDomElement','targetSelector','closeDialog','element','settings','closeable','container',')\x20/\x202))','head','screenName=','get','iobroker-webui-screen-viewer','openDialog','title','getTime','1CJoenx','addEventListener','moveable','screen','viewer','getTarget','appendChild','39309lRKKtO','display','getTargetFromTargetSelector','36tGqPCS','iobroker-webui-report-viewer','1179zcgsIQ','type','IOB','define','report=','screenName','left','style','540902huaLGi','hash'];a=function(){return an;};return a();}var r=class o extends k{['container'];['uniqueId'];static ['template']=n`
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
        `;static ['is']=a1(0x219);get['moveable'](){const a2=a1;return this.#e[a2(0x20e)]['cursor']=='move';}set['moveable'](t){const a3=a1;t&&(this.#e['style'][a3(0x225)]=a3(0x221),this.#e['onpointerdown']=u=>(this.#r(u),!0x1));}get[a1(0x1f1)](){const a4=a1;return this.#t[a4(0x20e)]['display']!=a4(0x224);}set[a1(0x1f1)](t){const a5=a1;t?this.#t['style'][a5(0x203)]=a5(0x22e):this.#t[a5(0x20e)]['display']=a5(0x224);}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this['_getDomElement'](a6(0x1f4)),this.#t=this[a6(0x1ec)]('close'),this.#i=this['_getDomElement']('content'),this.#t[a6(0x1e7)]=()=>{this.#l();},this.#o=this.#c['bind'](this),this.#n=this.#h['bind'](this);}static [a1(0x229)]=0x2;static [a1(0x222)]=0x23;static[a1(0x1f8)](u){const a7=a1;let z='id'+new Date()[a7(0x1fa)](),A=new o();return u[a7(0x1f9)]&&(typeof u['title']=='string'?A.#e[a7(0x21a)]=u['title']:A.#e['appendChild'](u[a7(0x1f9)])),typeof u['content']=='string'?A.#i[a7(0x21a)]=u[a7(0x21b)]:A.#i['appendChild'](u[a7(0x21b)]),A['style'][a7(0x1d6)]=u[a7(0x1d6)]??'300px',A[a7(0x20e)]['height']=u[a7(0x21f)]??'200px',A['style']['width']='calc('+A[a7(0x20e)][a7(0x1d6)]+'\x20+\x20'+this[a7(0x229)]+'px)',A[a7(0x20e)]['height']='calc('+A[a7(0x20e)][a7(0x21f)]+'\x20+\x20'+this[a7(0x222)]+a7(0x1d2),A['style'][a7(0x212)]=u[a7(0x212)]??a7(0x1d0)+A[a7(0x20e)][a7(0x21f)]+a7(0x1f3),A[a7(0x20e)]['left']=u[a7(0x20d)]??a7(0x1d0)+A[a7(0x20e)]['width']+')\x20/\x202))',u['moveable']&&(A[a7(0x1fd)]=!0x0),(u[a7(0x1f1)]===!0x1||u[a7(0x1f1)]===!0x0)&&(A[a7(0x1f1)]=u[a7(0x1f1)]),u[a7(0x1d3)]&&(A[a7(0x22d)]=u[a7(0x1d3)]),document['getElementById'](a7(0x1e5))[a7(0x201)](A),z;}static[a1(0x1ee)](u){const a8=a1;let z=u[a8(0x1ef)];for(;!(z instanceof o&&z!=null);)z=z['getRootNode']()?.[a8(0x1cf)];z&&z.#l();}#l(){const a9=a1;document[a9(0x1d8)](a9(0x1e5))[a9(0x214)](this);}#r(u){const aa=a1;let z=this[aa(0x218)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[aa(0x1fc)](aa(0x1ea),this.#o),window[aa(0x1fc)]('pointerup',this.#n);}#c(t){const ab=a1;this['style']['left']=t['x']-this.#s+'px',this[ab(0x20e)][ab(0x212)]=t['y']-this.#a+'px';}#h(){const ac=a1;window[ac(0x1eb)]('pointermove',this.#o),window[ac(0x1eb)]('pointerup',this.#n);}};customElements[a1(0x20a)](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async['runScriptCommand'](z,A){const ad=a1;switch(z['type']){case'CloseDialog':{r[ad(0x1ee)]({'element':A[ad(0x1ef)]});break;}case ad(0x223):{let F=await this[ad(0x1dc)](z[ad(0x1fe)],A);if(z[ad(0x1d9)])document['getElementById'](ad(0x1ff))['relativeSignalsPath']=await this[ad(0x1dc)](z['relativeSignalsPath'],A),document[ad(0x1d8)](ad(0x1ff))[ad(0x20c)]=F;else{let G='screenName='+F;window['location']['hash']=G;}break;}case ad(0x230):{let H=await this[ad(0x1dc)](z['screen'],A),J=await this['getValue'](z[ad(0x1ed)]??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location['hash']['substring'](0x1))[ad(0x1f6)](ad(0x20c))??(window[ad(0x209)]?.[ad(0x22f)]||'start'),L=(H!='start'?'screenName='+K+'&':'')+'subScreen='+H+(J!=ad(0x1f7)?'&targetSelector='+J:'');window[ad(0x220)]['hash']=L;break;}case'OpenDialog':{let M=await this[ad(0x1dc)](z['screen'],A),O=await this[ad(0x1dc)](z[ad(0x1f9)],A),P=await this[ad(0x1dc)](z['moveable'],A),Q=await this['getValue'](z[ad(0x1f1)],A),R=await this[ad(0x1dc)](z['cssClass'],A),U=await this['getValue'](z[ad(0x1d6)],A),W=await this['getValue'](z[ad(0x21f)],A),X=await this[ad(0x1dc)](z['left'],A),Y=await this['getValue'](z[ad(0x212)],A),Z=new g();Z['relativeSignalsPath']=await this['getValue'](z[ad(0x1e1)],A),Z[ad(0x20c)]=M,U||(U=await(await h['getWebuiObject']('screen',M))[ad(0x1f0)][ad(0x1d6)]),W||(W=await(await h['getWebuiObject'](ad(0x1fe),M))[ad(0x1f0)][ad(0x21f)]),r['openDialog']({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super['runScriptCommand'](z,A);}}['getTarget'](u,z,A){const ae=a1;if(z=='container'){let C=u[ae(0x1ef)];for(let F=0x0;F<=(A??0x0);F++){let G=C[ae(0x1d1)]()['host'];G instanceof BaseCustomControl?C=G:C=G['getRootNode']()[ae(0x1cf)];}return C;}return super[ae(0x200)](u,z,A);}[a1(0x204)](u,z,A,C){const af=a1;let F=this[af(0x200)](u,z,A),G=[F];return C&&(z===af(0x1f2)?F instanceof g?G=F['_getDomElements'](C):G=F['shadowRoot']['querySelectorAll'](C):G=F['querySelectorAll'](C)),G;}},p=0x30;async function y(t,u=0x1f40){const ag=a1;if(customElements[ag(0x1f6)](t))return!0x0;try{await Promise['race']([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ah=a1;document['getElementById']('__nav-appbar-host')?.['remove'](),document[ah(0x216)](ah(0x1db))?.['remove'](),document['getElementById'](ah(0x1df))?.['remove']();let t=document['getElementById']('viewer');t&&(t['style']['left']='0',t[ah(0x20e)][ah(0x212)]='0',t['style'][ah(0x1d6)]=ah(0x1e0),t['style']['height']='100%');}async function w(){const ai=a1;let u=h['config']||{},z=document[ai(0x1d8)](ai(0x1ff));if(z){if(x(),u['appBar']&&u[ai(0x22c)][ai(0x227)]&&await y('webui-navigation-app-bar')){let A=document['createElement'](ai(0x1d5));A['id']='__nav-appbar-host',A['style'][ai(0x1de)]=ai(0x215)+p+'px;z-index:100000;';let C=document['createElement'](ai(0x211));C['style'][ai(0x1de)]=ai(0x21c),A['appendChild'](C),document['body']['appendChild'](A),z['style']['top']=p+'px',z['style']['height']=ai(0x1e2)+p+'px)';}if(await y('webui-navigation-sidebar')){let F=document['createElement']('webui-navigation-sidebar');document[ai(0x1e4)]['appendChild'](F);}}}async function D(){const aj=a1;try{let t=await h[aj(0x21e)]();t&&(h['config']=Object[aj(0x21d)](h['config']||{},t));}catch{}w();}var v=!0x1;async function S(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h[ak(0x1e6)]?.['on']?.(C=>{const al=ak;(!C||C[al(0x208)]==='screen')&&z();});let A;h[ak(0x217)]?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}function d(b,c){b=b-0x1cf;const e=a();let f=e[b];return f;}b(),await i[a1(0x1d7)](window['iobrokerSocketScriptUrl']),await h['init'](),e(h['config']?.[a1(0x22a)]),h['configChanged']['on'](()=>{try{e(h['config']?.['globalStyle']);}catch{}}),window[a1(0x1d4)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0x1e9)]['on'](u=>{const am=a1;let z=document[am(0x1d8)](am(0x1ff));if(!z)return;let A=typeof u==am(0x228)?u:u?.['name'],C=typeof u=='string'?am(0x1fe):u?.['type']??am(0x1fe);if(!A)return;let F=z[am(0x22b)]===am(0x206);if(C==='report'){F?z[am(0x1dd)]=A:location[am(0x210)]=am(0x20b)+encodeURIComponent(A);return;}if(F){location['hash']=am(0x1f5)+encodeURIComponent(A);return;}z[am(0x20c)]=A;}),S()['catch'](t=>console['warn']('[nav]\x20shell\x20init\x20failed',t));