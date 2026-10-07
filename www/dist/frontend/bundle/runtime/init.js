const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=parseInt(a0(0x1d1))/0x1+parseInt(a0(0x1dc))/0x2+-parseInt(a0(0x1e9))/0x3+-parseInt(a0(0x221))/0x4*(-parseInt(a0(0x21f))/0x5)+-parseInt(a0(0x1cc))/0x6*(-parseInt(a0(0x1ca))/0x7)+parseInt(a0(0x1c7))/0x8+-parseInt(a0(0x1e5))/0x9;if(A===u)break;else z['push'](z['shift']());}catch(C){z['push'](z['shift']());}}}(a,0x3d7c2));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-GKVOZVKS.js';import{t as h}from'../chunk-6UCSEZIG.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{[a1(0x20e)];[a1(0x1cb)];static ['template']=n`
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
        `;static ['is']='iobroker-webui-dialog';get[a1(0x21a)](){const a2=a1;return this.#e[a2(0x1e0)]['cursor']=='move';}set['moveable'](t){const a3=a1;t&&(this.#e['style']['cursor']='move',this.#e[a3(0x1f7)]=u=>(this.#r(u),!0x1));}get[a1(0x214)](){const a4=a1;return this.#t[a4(0x1e0)][a4(0x211)]!='none';}set[a1(0x214)](t){const a5=a1;t?this.#t[a5(0x1e0)][a5(0x211)]=a5(0x1d7):this.#t[a5(0x1e0)][a5(0x211)]=a5(0x1e3);}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this[a6(0x202)]('head'),this.#t=this[a6(0x202)](a6(0x203)),this.#i=this[a6(0x202)](a6(0x1e6)),this.#t[a6(0x1d4)]=()=>{this.#l();},this.#o=this.#c[a6(0x21b)](this),this.#n=this.#h[a6(0x21b)](this);}static [a1(0x207)]=0x2;static ['offsetHeight']=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()['getTime'](),A=new o();return u['title']&&(typeof u[a7(0x1f1)]=='string'?A.#e['innerHTML']=u['title']:A.#e[a7(0x1f6)](u[a7(0x1f1)])),typeof u['content']==a7(0x1f4)?A.#i[a7(0x1d2)]=u[a7(0x1e6)]:A.#i[a7(0x1f6)](u['content']),A[a7(0x1e0)][a7(0x1fa)]=u[a7(0x1fa)]??'300px',A['style']['height']=u[a7(0x1d6)]??a7(0x1fc),A['style']['width']='calc('+A['style'][a7(0x1fa)]+a7(0x1c8)+this['offsetWidth']+a7(0x1f2),A[a7(0x1e0)]['height']='calc('+A[a7(0x1e0)][a7(0x1d6)]+a7(0x1c8)+this['offsetHeight']+a7(0x1f2),A['style'][a7(0x209)]=u['top']??a7(0x1c9)+A[a7(0x1e0)]['height']+a7(0x1ce),A[a7(0x1e0)][a7(0x1eb)]=u['left']??a7(0x1c9)+A[a7(0x1e0)][a7(0x1fa)]+')\x20/\x202))',u['moveable']&&(A['moveable']=!0x0),(u[a7(0x214)]===!0x1||u[a7(0x214)]===!0x0)&&(A[a7(0x214)]=u['closeable']),u[a7(0x205)]&&(A[a7(0x201)]=u[a7(0x205)]),document[a7(0x21c)]('overlayLayer')['appendChild'](A),z;}static['closeDialog'](u){const a8=a1;let z=u['element'];for(;!(z instanceof o&&z!=null);)z=z['getRootNode']()?.[a8(0x1d8)];z&&z.#l();}#l(){const a9=a1;document[a9(0x21c)]('overlayLayer')[a9(0x1d0)](this);}#r(u){const aa=a1;let z=this[aa(0x1f8)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window['addEventListener'](aa(0x21d),this.#o),window['addEventListener'](aa(0x200),this.#n);}#c(t){const ab=a1;this['style'][ab(0x1eb)]=t['x']-this.#s+'px',this['style'][ab(0x209)]=t['y']-this.#a+'px';}#h(){const ac=a1;window[ac(0x1cd)](ac(0x21d),this.#o),window['removeEventListener']('pointerup',this.#n);}};customElements['define'](r['is'],r);function d(b,c){b=b-0x1c6;const e=a();let f=e[b];return f;}import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';function a(){const am=['location','100%','display','globalStyle','body','closeable','remove','_getConfig','viewer','report=','screenName','moveable','bind','getElementById','pointermove','iobroker-webui-report-viewer','15zEZauN','OpenScreenInScreenViewer','61108NwSLKu','cssText','show','2810240AEqMOz','\x20+\x20','calc(50%\x20-\x20((','15491mYDbOk','uniqueId','1158CWDHZl','removeEventListener',')\x20/\x202))','screen','removeChild','323971ExKfWH','innerHTML','appShell','onclick','createElement','height','block','host','relativeSignalsPath','catch','iobroker-webui-screen-viewer','361572DVIgvN','_getDomElements','LoadJavascript','reportName','style','getTarget','appBar','none','[nav]\x20shell\x20init\x20failed','9685647RmNsrt','content','config','px;z-index:100000;','2856XTsWMv','__nav-burger','left','subScreen=','localName','&targetSelector=','startScreenName','assign','title','px)','iobrokerSocketScriptUrl','string','type','appendChild','onpointerdown','getBoundingClientRect','hash','width','webui-navigation-app-bar','200px','getWebuiObject','noHistory','OpenScreen','pointerup','className','_getDomElement','close','screenName=','cssClass','getValue','offsetWidth','getRootNode','top','init','settings','start','changeView','container'];a=function(){return am;};return a();}var c=class extends q{async['runScriptCommand'](z,A){const ad=a1;switch(z['type']){case'CloseDialog':{r['closeDialog']({'element':A['element']});break;}case ad(0x1ff):{let F=await this[ad(0x206)](z['screen'],A);if(z[ad(0x1fe)])document[ad(0x21c)]('viewer')[ad(0x1d9)]=await this[ad(0x206)](z[ad(0x1d9)],A),document[ad(0x21c)]('viewer')['screenName']=F;else{let G='screenName='+F;window['location'][ad(0x1f9)]=G;}break;}case ad(0x220):{let H=await this[ad(0x206)](z[ad(0x1cf)],A),J=await this[ad(0x206)](z['targetSelector']??ad(0x1db),A),K=new URLSearchParams(location[ad(0x1f9)]['substring'](0x1))['get']('screenName')??(window['IOB']?.[ad(0x1ef)]||ad(0x20c)),L=(H!='start'?'screenName='+K+'&':'')+ad(0x1ec)+H+(J!='iobroker-webui-screen-viewer'?ad(0x1ee)+J:'');window[ad(0x20f)][ad(0x1f9)]=L;break;}case'OpenDialog':{let M=await this[ad(0x206)](z[ad(0x1cf)],A),O=await this['getValue'](z[ad(0x1f1)],A),P=await this[ad(0x206)](z[ad(0x21a)],A),Q=await this['getValue'](z[ad(0x214)],A),R=await this[ad(0x206)](z['cssClass'],A),U=await this[ad(0x206)](z[ad(0x1fa)],A),W=await this['getValue'](z['height'],A),X=await this[ad(0x206)](z['left'],A),Y=await this[ad(0x206)](z[ad(0x209)],A),Z=new g();Z['relativeSignalsPath']=await this[ad(0x206)](z['relativeSignalsPath'],A),Z['screenName']=M,U||(U=await(await h[ad(0x1fd)]('screen',M))[ad(0x20b)][ad(0x1fa)]),W||(W=await(await h[ad(0x1fd)]('screen',M))[ad(0x20b)][ad(0x1d6)]),r['openDialog']({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super['runScriptCommand'](z,A);}}[a1(0x1e1)](u,z,A){const ae=a1;if(z==ae(0x20e)){let C=u['element'];for(let F=0x0;F<=(A??0x0);F++){let G=C[ae(0x208)]()['host'];G instanceof BaseCustomControl?C=G:C=G['getRootNode']()[ae(0x1d8)];}return C;}return super[ae(0x1e1)](u,z,A);}['getTargetFromTargetSelector'](u,z,A,C){const af=a1;let F=this['getTarget'](u,z,A),G=[F];return C&&(z==='container'?F instanceof g?G=F[af(0x1dd)](C):G=F['shadowRoot']['querySelectorAll'](C):G=F['querySelectorAll'](C)),G;}},p=0x30;async function y(t,u=0x1f40){if(customElements['get'](t))return!0x0;try{await Promise['race']([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ag=a1;document['getElementById']('__nav-appbar-host')?.['remove'](),document['querySelector']('webui-navigation-sidebar')?.[ag(0x215)](),document['getElementById'](ag(0x1ea))?.[ag(0x215)]();let t=document[ag(0x21c)](ag(0x217));t&&(t['style'][ag(0x1eb)]='0',t[ag(0x1e0)]['top']='0',t[ag(0x1e0)]['width']='100%',t[ag(0x1e0)][ag(0x1d6)]=ag(0x210));}async function w(){const ah=a1;let u=h['config']||{},z=document['getElementById'](ah(0x217));if(z){if(x(),u[ah(0x1e2)]&&u[ah(0x1e2)][ah(0x1c6)]&&await y(ah(0x1fb))){let A=document['createElement']('div');A['id']='__nav-appbar-host',A['style'][ah(0x222)]='position:fixed;top:0;left:0;right:0;height:'+p+ah(0x1e8);let C=document['createElement']('webui-navigation-app-bar');C[ah(0x1e0)][ah(0x222)]='display:block;width:100%;height:100%;',A[ah(0x1f6)](C),document[ah(0x213)][ah(0x1f6)](A),z[ah(0x1e0)]['top']=p+'px',z['style']['height']='calc(100%\x20-\x20'+p+'px)';}if(await y('webui-navigation-sidebar')){let F=document[ah(0x1d5)]('webui-navigation-sidebar');document['body']['appendChild'](F);}}}async function D(){const ai=a1;try{let t=await h[ai(0x216)]();t&&(h[ai(0x1e7)]=Object[ai(0x1f0)](h[ai(0x1e7)]||{},t));}catch{}w();}var v=!0x1;async function S(){if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h['objectsChanged']?.['on']?.(C=>{const aj=d;(!C||C[aj(0x1f5)]==='screen')&&z();});let A;h['refreshView']?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i[a1(0x1de)](window[a1(0x1f3)]),await h[a1(0x20a)](),e(h['config']?.['globalStyle']),h['configChanged']['on'](()=>{const ak=a1;try{e(h['config']?.[ak(0x212)]);}catch{}}),window[a1(0x1d3)]={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0x20d)]['on'](u=>{const al=a1;let z=document[al(0x21c)](al(0x217));if(!z)return;let A=typeof u=='string'?u:u?.['name'],C=typeof u=='string'?al(0x1cf):u?.['type']??al(0x1cf);if(!A)return;let F=z[al(0x1ed)]===al(0x21e);if(C==='report'){F?z[al(0x1df)]=A:location['hash']=al(0x218)+encodeURIComponent(A);return;}if(F){location['hash']=al(0x204)+encodeURIComponent(A);return;}z[al(0x219)]=A;}),S()[a1(0x1da)](t=>console['warn'](a1(0x1e4),t));