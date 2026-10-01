const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=-parseInt(a0(0x1e7))/0x1+parseInt(a0(0x21d))/0x2+parseInt(a0(0x219))/0x3*(parseInt(a0(0x1e4))/0x4)+-parseInt(a0(0x1fc))/0x5*(-parseInt(a0(0x1d3))/0x6)+-parseInt(a0(0x20b))/0x7+parseInt(a0(0x204))/0x8+-parseInt(a0(0x1e1))/0x9;if(A===u)break;else z['push'](z['shift']());}catch(F){z['push'](z['shift']());}}}(a,0x97aee));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-KLM273ZH.js';import{t as h}from'../chunk-AIRLZ2JA.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{[a1(0x1fd)];[a1(0x1dc)];static ['template']=n`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [a1(0x1cc)]=l`
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
        `;static ['is']='iobroker-webui-dialog';get[a1(0x21a)](){const a2=a1;return this.#e[a2(0x1cc)][a2(0x1d2)]==a2(0x1f5);}set['moveable'](t){const a3=a1;t&&(this.#e['style']['cursor']='move',this.#e[a3(0x200)]=u=>(this.#r(u),!0x1));}get[a1(0x1eb)](){const a4=a1;return this.#t['style'][a4(0x216)]!=a4(0x206);}set[a1(0x1eb)](t){const a5=a1;t?this.#t[a5(0x1cc)]['display']=a5(0x1f8):this.#t[a5(0x1cc)][a5(0x216)]='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this['_getDomElement']('head'),this.#t=this[a6(0x223)](a6(0x1d7)),this.#i=this['_getDomElement'](a6(0x227)),this.#t[a6(0x1ff)]=()=>{this.#l();},this.#o=this.#c[a6(0x1ee)](this),this.#n=this.#h[a6(0x1ee)](this);}static [a1(0x1d4)]=0x2;static [a1(0x228)]=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()[a7(0x1f0)](),A=new o();return u['title']&&(typeof u[a7(0x217)]=='string'?A.#e['innerHTML']=u[a7(0x217)]:A.#e['appendChild'](u['title'])),typeof u['content']==a7(0x211)?A.#i['innerHTML']=u['content']:A.#i[a7(0x203)](u[a7(0x227)]),A['style'][a7(0x1fa)]=u[a7(0x1fa)]??a7(0x1dd),A[a7(0x1cc)]['height']=u[a7(0x221)]??a7(0x1cd),A['style']['width']=a7(0x1fe)+A['style']['width']+'\x20+\x20'+this['offsetWidth']+a7(0x1cb),A[a7(0x1cc)]['height']=a7(0x1fe)+A[a7(0x1cc)]['height']+a7(0x207)+this[a7(0x228)]+a7(0x1cb),A['style'][a7(0x1da)]=u['top']??'calc(50%\x20-\x20(('+A['style']['height']+')\x20/\x202))',A[a7(0x1cc)]['left']=u[a7(0x1d8)]??a7(0x1d0)+A['style'][a7(0x1fa)]+')\x20/\x202))',u['moveable']&&(A['moveable']=!0x0),(u['closeable']===!0x1||u['closeable']===!0x0)&&(A['closeable']=u[a7(0x1eb)]),u['cssClass']&&(A['className']=u[a7(0x20a)]),document[a7(0x1f7)](a7(0x225))['appendChild'](A),z;}static[a1(0x1f1)](u){const a8=a1;let z=u[a8(0x209)];for(;!(z instanceof o&&z!=null);)z=z['getRootNode']()?.['host'];z&&z.#l();}#l(){const a9=a1;document['getElementById']('overlayLayer')[a9(0x1de)](this);}#r(u){const aa=a1;let z=this['getBoundingClientRect']();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[aa(0x1f4)]('pointermove',this.#o),window['addEventListener'](aa(0x1ea),this.#n);}#c(t){const ab=a1;this[ab(0x1cc)][ab(0x1d8)]=t['x']-this.#s+'px',this[ab(0x1cc)][ab(0x1da)]=t['y']-this.#a+'px';}#h(){const ac=a1;window[ac(0x210)](ac(0x1ef),this.#o),window[ac(0x210)](ac(0x1ea),this.#n);}};customElements['define'](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async[a1(0x1e6)](z,A){const ad=a1;switch(z[ad(0x222)]){case'CloseDialog':{r['closeDialog']({'element':A[ad(0x209)]});break;}case'OpenScreen':{let F=await this[ad(0x20e)](z['screen'],A);if(z['noHistory'])document['getElementById'](ad(0x205))[ad(0x1d6)]=await this[ad(0x20e)](z[ad(0x1d6)],A),document[ad(0x1f7)](ad(0x205))[ad(0x1e5)]=F;else{let G='screenName='+F;window['location'][ad(0x1e3)]=G;}break;}case ad(0x1ec):{let H=await this[ad(0x20e)](z[ad(0x224)],A),J=await this[ad(0x20e)](z[ad(0x1cf)]??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location['hash'][ad(0x21e)](0x1))['get'](ad(0x1e5))??ad(0x202),L=(H!='start'?'screenName='+K+'&':'')+ad(0x1fb)+H+(J!='iobroker-webui-screen-viewer'?'&targetSelector='+J:'');window[ad(0x21c)]['hash']=L;break;}case'OpenDialog':{let M=await this[ad(0x20e)](z[ad(0x224)],A),O=await this[ad(0x20e)](z[ad(0x217)],A),P=await this['getValue'](z['moveable'],A),Q=await this['getValue'](z[ad(0x1eb)],A),R=await this[ad(0x20e)](z['cssClass'],A),U=await this['getValue'](z[ad(0x1fa)],A),W=await this['getValue'](z['height'],A),X=await this['getValue'](z['left'],A),Y=await this['getValue'](z[ad(0x1da)],A),Z=new g();Z[ad(0x1d6)]=await this[ad(0x20e)](z['relativeSignalsPath'],A),Z['screenName']=M,U||(U=await(await h[ad(0x1df)](ad(0x224),M))[ad(0x1c9)][ad(0x1fa)]),W||(W=await(await h['getWebuiObject']('screen',M))[ad(0x1c9)]['height']),r[ad(0x220)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super['runScriptCommand'](z,A);}}[a1(0x1d9)](u,z,A){const ae=a1;if(z=='container'){let F=u[ae(0x209)];for(let G=0x0;G<=(A??0x0);G++){let H=F['getRootNode']()['host'];H instanceof BaseCustomControl?F=H:F=H[ae(0x1ca)]()['host'];}return F;}return super[ae(0x1d9)](u,z,A);}['getTargetFromTargetSelector'](u,z,A,F){const af=a1;let G=this[af(0x1d9)](u,z,A),H=[G];return F&&(z==='container'?G instanceof g?H=G['_getDomElements'](F):H=G[af(0x212)][af(0x1e8)](F):H=G[af(0x1e8)](F)),H;}},p=0x30;function d(b,c){b=b-0x1c7;const e=a();let f=e[b];return f;}async function y(t,u=0x1f40){const ag=a1;if(customElements['get'](t))return!0x0;try{await Promise['race']([customElements[ag(0x1c8)](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ah=a1;document['getElementById'](ah(0x213))?.['remove'](),document[ah(0x20c)](ah(0x1f6))?.['remove'](),document[ah(0x1f7)](ah(0x208))?.[ah(0x1c7)]();let t=document['getElementById'](ah(0x205));t&&(t[ah(0x1cc)]['left']='0',t['style'][ah(0x1da)]='0',t['style']['width']='100%',t['style'][ah(0x221)]='100%');}async function w(){const ai=a1;let u=h[ai(0x21f)]||{},z=document[ai(0x1f7)](ai(0x205));if(z){if(x(),u[ai(0x1e0)]&&u['appBar']['show']&&await y(ai(0x1f9))){let A=document[ai(0x21b)](ai(0x1db));A['id']=ai(0x213),A[ai(0x1cc)]['cssText']='position:fixed;top:0;left:0;right:0;height:'+p+'px;z-index:100000;';let F=document['createElement'](ai(0x1f9));F[ai(0x1cc)][ai(0x1f2)]='display:block;width:100%;height:100%;',A[ai(0x203)](F),document['body'][ai(0x203)](A),z[ai(0x1cc)]['top']=p+'px',z[ai(0x1cc)][ai(0x221)]='calc(100%\x20-\x20'+p+ai(0x1cb);}if(await y(ai(0x1f6))){let G=document['createElement'](ai(0x1f6));document['body']['appendChild'](G);}}}function a(){const ao=['addEventListener','move','webui-navigation-sidebar','getElementById','block','webui-navigation-app-bar','width','subScreen=','10votQrT','container','calc(','onclick','onpointerdown','globalStyle','start','appendChild','8720536UQFfyN','viewer','none','\x20+\x20','__nav-burger','element','cssClass','5413583NMZCmu','querySelector','refreshView','getValue','report=','removeEventListener','string','shadowRoot','__nav-appbar-host','_getConfig','configChanged','display','title','catch','15mBsfkp','moveable','createElement','location','1424040nyEZji','substring','config','openDialog','height','type','_getDomElement','screen','overlayLayer','iobroker-webui-report-viewer','content','offsetHeight','remove','whenDefined','settings','getRootNode','px)','style','200px','changeView','targetSelector','calc(50%\x20-\x20((','objectsChanged','cursor','724572qEAOBZ','offsetWidth','init','relativeSignalsPath','close','left','getTarget','top','div','uniqueId','300px','removeChild','getWebuiObject','appBar','6950781NTngjl','report','hash','411172CwkxWm','screenName','runScriptCommand','390604KuItpk','querySelectorAll','appShell','pointerup','closeable','OpenScreenInScreenViewer','reportName','bind','pointermove','getTime','closeDialog','cssText','iobrokerSocketScriptUrl'];a=function(){return ao;};return a();}async function D(){const aj=a1;try{let t=await h[aj(0x214)]();t&&(h[aj(0x21f)]=Object['assign'](h[aj(0x21f)]||{},t));}catch{}w();}var v=!0x1;async function C(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h[ak(0x1d1)]?.['on']?.(F=>{const al=ak;(!F||F[al(0x222)]==='screen')&&z();});let A;h[ak(0x20d)]?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i['LoadJavascript'](window[a1(0x1f3)]),await h[a1(0x1d5)](),e(h[a1(0x21f)]?.['globalStyle']),h[a1(0x215)]['on'](()=>{const am=a1;try{e(h['config']?.[am(0x201)]);}catch{}}),window[a1(0x1e9)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0x1ce)]['on'](u=>{const an=a1;let z=document['getElementById']('viewer');if(!z)return;let A=typeof u=='string'?u:u?.['name'],F=typeof u==an(0x211)?an(0x224):u?.[an(0x222)]??'screen';if(!A)return;let G=z['localName']===an(0x226);if(F===an(0x1e2)){G?z[an(0x1ed)]=A:location[an(0x1e3)]=an(0x20f)+encodeURIComponent(A);return;}if(G){location['hash']='screenName='+encodeURIComponent(A);return;}z[an(0x1e5)]=A;}),C()[a1(0x218)](t=>console['warn']('[nav]\x20shell\x20init\x20failed',t));