const a1=d;function d(b,c){b=b-0x1e6;const e=a();let f=e[b];return f;}(function(t,u){const a0=d,z=t();while(!![]){try{const A=parseInt(a0(0x207))/0x1*(-parseInt(a0(0x213))/0x2)+-parseInt(a0(0x245))/0x3*(-parseInt(a0(0x241))/0x4)+-parseInt(a0(0x24a))/0x5*(parseInt(a0(0x243))/0x6)+parseInt(a0(0x21b))/0x7+-parseInt(a0(0x237))/0x8+-parseInt(a0(0x246))/0x9+parseInt(a0(0x1fd))/0xa*(parseInt(a0(0x1fa))/0xb);if(A===u)break;else z['push'](z['shift']());}catch(F){z['push'](z['shift']());}}}(a,0x301aa));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-NPDVKA2F.js';import{t as h}from'../chunk-CVWTTI5E.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{[a1(0x215)];[a1(0x1f2)];static ['template']=n`
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
        `;static ['is']=a1(0x22f);get['moveable'](){const a2=a1;return this.#e[a2(0x221)][a2(0x223)]==a2(0x214);}set['moveable'](t){const a3=a1;t&&(this.#e['style']['cursor']=a3(0x214),this.#e[a3(0x222)]=u=>(this.#r(u),!0x1));}get['closeable'](){const a4=a1;return this.#t['style']['display']!=a4(0x216);}set['closeable'](t){const a5=a1;t?this.#t['style']['display']=a5(0x233):this.#t[a5(0x221)]['display']='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this['_getDomElement']('head'),this.#t=this[a6(0x205)](a6(0x238)),this.#i=this[a6(0x205)](a6(0x234)),this.#t[a6(0x209)]=()=>{this.#l();},this.#o=this.#c[a6(0x203)](this),this.#n=this.#h[a6(0x203)](this);}static [a1(0x231)]=0x2;static [a1(0x1f7)]=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()[a7(0x1f3)](),A=new o();return u['title']&&(typeof u[a7(0x210)]=='string'?A.#e[a7(0x206)]=u['title']:A.#e['appendChild'](u[a7(0x210)])),typeof u['content']=='string'?A.#i['innerHTML']=u[a7(0x234)]:A.#i['appendChild'](u[a7(0x234)]),A[a7(0x221)][a7(0x1f9)]=u['width']??'300px',A['style']['height']=u[a7(0x1e6)]??a7(0x23e),A['style']['width']=a7(0x229)+A[a7(0x221)][a7(0x1f9)]+'\x20+\x20'+this[a7(0x231)]+a7(0x1fe),A['style'][a7(0x1e6)]='calc('+A['style']['height']+a7(0x220)+this['offsetHeight']+a7(0x1fe),A[a7(0x221)]['top']=u['top']??a7(0x227)+A[a7(0x221)]['height']+')\x20/\x202))',A[a7(0x221)][a7(0x1eb)]=u['left']??'calc(50%\x20-\x20(('+A['style'][a7(0x1f9)]+a7(0x24c),u['moveable']&&(A['moveable']=!0x0),(u['closeable']===!0x1||u['closeable']===!0x0)&&(A[a7(0x200)]=u[a7(0x200)]),u[a7(0x24b)]&&(A['className']=u[a7(0x24b)]),document[a7(0x20b)](a7(0x230))['appendChild'](A),z;}static[a1(0x248)](u){const a8=a1;let z=u['element'];for(;!(z instanceof o&&z!=null);)z=z['getRootNode']()?.[a8(0x23a)];z&&z.#l();}#l(){document['getElementById']('overlayLayer')['removeChild'](this);}#r(u){const a9=a1;let z=this[a9(0x211)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[a9(0x22c)](a9(0x22a),this.#o),window[a9(0x22c)](a9(0x22d),this.#n);}#c(t){const aa=a1;this[aa(0x221)][aa(0x1eb)]=t['x']-this.#s+'px',this['style']['top']=t['y']-this.#a+'px';}#h(){const ab=a1;window['removeEventListener'](ab(0x22a),this.#o),window[ab(0x20f)]('pointerup',this.#n);}};customElements['define'](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async[a1(0x1ec)](z,A){const ac=a1;switch(z['type']){case ac(0x1ed):{r['closeDialog']({'element':A[ac(0x1f5)]});break;}case'OpenScreen':{let F=await this['getValue'](z['screen'],A);if(z[ac(0x1fc)])document[ac(0x20b)]('viewer')['relativeSignalsPath']=await this[ac(0x226)](z['relativeSignalsPath'],A),document['getElementById']('viewer')[ac(0x240)]=F;else{let G='screenName='+F;window[ac(0x23b)]['hash']=G;}break;}case ac(0x218):{let H=await this[ac(0x226)](z[ac(0x1e8)],A),J=await this[ac(0x226)](z[ac(0x1fb)]??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location[ac(0x1f8)]['substring'](0x1))['get'](ac(0x240))??ac(0x219),L=(H!='start'?'screenName='+K+'&':'')+'subScreen='+H+(J!=ac(0x23f)?ac(0x1ef)+J:'');window[ac(0x23b)][ac(0x1f8)]=L;break;}case ac(0x249):{let M=await this[ac(0x226)](z[ac(0x1e8)],A),O=await this['getValue'](z['title'],A),P=await this[ac(0x226)](z[ac(0x20a)],A),Q=await this[ac(0x226)](z['closeable'],A),R=await this[ac(0x226)](z[ac(0x24b)],A),U=await this[ac(0x226)](z['width'],A),W=await this['getValue'](z[ac(0x1e6)],A),X=await this[ac(0x226)](z['left'],A),Y=await this[ac(0x226)](z['top'],A),Z=new g();Z[ac(0x21d)]=await this[ac(0x226)](z[ac(0x21d)],A),Z[ac(0x240)]=M,U||(U=await(await h['getWebuiObject']('screen',M))[ac(0x1ff)][ac(0x1f9)]),W||(W=await(await h[ac(0x225)]('screen',M))[ac(0x1ff)]['height']),r[ac(0x1f6)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super['runScriptCommand'](z,A);}}[a1(0x201)](u,z,A){const ad=a1;if(z=='container'){let F=u['element'];for(let G=0x0;G<=(A??0x0);G++){let H=F[ad(0x21a)]()['host'];H instanceof BaseCustomControl?F=H:F=H[ad(0x21a)]()['host'];}return F;}return super[ad(0x201)](u,z,A);}[a1(0x228)](u,z,A,F){const ae=a1;let G=this[ae(0x201)](u,z,A),H=[G];return F&&(z===ae(0x215)?G instanceof g?H=G[ae(0x247)](F):H=G['shadowRoot'][ae(0x1f1)](F):H=G[ae(0x1f1)](F)),H;}},p=0x30;function a(){const am=['get','cssText','200px','iobroker-webui-screen-viewer','screenName','100HtXlyT','type','117846mpeAxx','refreshView','29226wJYsYR','2783835dPpdXJ','_getDomElements','closeDialog','OpenDialog','20pkiULX','cssClass',')\x20/\x202))','height','webui-navigation-sidebar','screen','reportName','iobroker-webui-report-viewer','left','runScriptCommand','CloseDialog','assign','&targetSelector=','race','querySelectorAll','uniqueId','getTime','objectsChanged','element','openDialog','offsetHeight','hash','width','11CGmobN','targetSelector','noHistory','5986510nZonvN','px)','settings','closeable','getTarget','100%','bind','createElement','_getDomElement','innerHTML','1yTNKZb','__nav-burger','onclick','moveable','getElementById','screenName=','globalStyle','LoadJavascript','removeEventListener','title','getBoundingClientRect','appendChild','553886aFiKTH','move','container','none','config','OpenScreenInScreenViewer','start','getRootNode','1763678pKxUSj','top','relativeSignalsPath','appBar','catch','\x20+\x20','style','onpointerdown','cursor','localName','getWebuiObject','getValue','calc(50%\x20-\x20((','getTargetFromTargetSelector','calc(','pointermove','show','addEventListener','pointerup','viewer','iobroker-webui-dialog','overlayLayer','offsetWidth','[nav]\x20shell\x20init\x20failed','block','content','body','name','1858392PGTavm','close','__nav-appbar-host','host','location'];a=function(){return am;};return a();}async function y(t,u=0x1f40){const af=a1;if(customElements[af(0x23c)](t))return!0x0;try{await Promise[af(0x1f0)]([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ag=a1;document[ag(0x20b)](ag(0x239))?.['remove'](),document['querySelector']('webui-navigation-sidebar')?.['remove'](),document[ag(0x20b)](ag(0x208))?.['remove']();let t=document[ag(0x20b)](ag(0x22e));t&&(t[ag(0x221)]['left']='0',t['style'][ag(0x21c)]='0',t['style']['width']='100%',t['style'][ag(0x1e6)]=ag(0x202));}async function w(){const ah=a1;let u=h[ah(0x217)]||{},z=document['getElementById'](ah(0x22e));if(z){if(x(),u[ah(0x21e)]&&u[ah(0x21e)][ah(0x22b)]&&await y('webui-navigation-app-bar')){let A=document['createElement']('div');A['id']='__nav-appbar-host',A[ah(0x221)][ah(0x23d)]='position:fixed;top:0;left:0;right:0;height:'+p+'px;z-index:100000;';let F=document['createElement']('webui-navigation-app-bar');F[ah(0x221)]['cssText']='display:block;width:100%;height:100%;',A[ah(0x212)](F),document[ah(0x235)]['appendChild'](A),z['style']['top']=p+'px',z[ah(0x221)]['height']='calc(100%\x20-\x20'+p+ah(0x1fe);}if(await y(ah(0x1e7))){let G=document[ah(0x204)](ah(0x1e7));document['body']['appendChild'](G);}}}async function D(){const ai=a1;try{let t=await h['_getConfig']();t&&(h[ai(0x217)]=Object[ai(0x1ee)](h['config']||{},t));}catch{}w();}var v=!0x1;async function C(){const aj=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h[aj(0x1f4)]?.['on']?.(F=>{(!F||F['type']==='screen')&&z();});let A;h[aj(0x244)]?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i[a1(0x20e)](window['iobrokerSocketScriptUrl']),await h['init'](),e(h['config']?.[a1(0x20d)]),h['configChanged']['on'](()=>{const ak=a1;try{e(h['config']?.[ak(0x20d)]);}catch{}}),window['appShell']={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h['changeView']['on'](u=>{const al=a1;let z=document['getElementById'](al(0x22e));if(!z)return;let A=typeof u=='string'?u:u?.[al(0x236)],F=typeof u=='string'?al(0x1e8):u?.[al(0x242)]??al(0x1e8);if(!A)return;let G=z[al(0x224)]===al(0x1ea);if(F==='report'){G?z[al(0x1e9)]=A:location['hash']='report='+encodeURIComponent(A);return;}if(G){location[al(0x1f8)]=al(0x20c)+encodeURIComponent(A);return;}z[al(0x240)]=A;}),C()[a1(0x21f)](t=>console['warn'](a1(0x232),t));