const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=parseInt(a0(0xa2))/0x1*(parseInt(a0(0xce))/0x2)+parseInt(a0(0xdd))/0x3*(parseInt(a0(0xd6))/0x4)+-parseInt(a0(0xd0))/0x5+parseInt(a0(0x9c))/0x6+-parseInt(a0(0xe6))/0x7+parseInt(a0(0xe4))/0x8+-parseInt(a0(0xb4))/0x9;if(A===u)break;else z['push'](z['shift']());}catch(F){z['push'](z['shift']());}}}(a,0xe0f36));import{b,c as e}from'../chunk-KVPT4J7H.js';function a(){const an=['removeEventListener','createElement','screen','getValue','targetSelector','report','host','race','none','relativeSignalsPath','width','webui-navigation-sidebar','display:block;width:100%;height:100%;','8704692BPOBrp','content','__nav-appbar-host','&targetSelector=','querySelectorAll','runScriptCommand','px;z-index:100000;','title','OpenDialog','[nav]\x20shell\x20init\x20failed','closeable','string',')\x20/\x202))','top','calc(50%\x20-\x20((','pointermove','element','_getDomElements','hash','refreshView','getWebuiObject','assign','left','position:fixed;top:0;left:0;right:0;height:','CloseDialog','_getConfig','66914dvhHKq','screenName','5135630ywUCFw','catch','remove','OpenScreenInScreenViewer','offsetHeight','offsetWidth','66208ZeIils','iobroker-webui-screen-viewer','closeDialog','cursor','noHistory','container','viewer','102jXRIYU','localName','openDialog','config','appendChild','px)','moveable','12228488UMgxqr','body','8907164OyfFDE','getBoundingClientRect','200px','display','calc(','settings','pointerup','getElementById','_getDomElement','300px','7963944ypJbxF','getRootNode','webui-navigation-app-bar','100%','cssClass','block','23GhIiqD','location','\x20+\x20','style','height'];a=function(){return an;};return a();}import{a as g}from'../chunk-G2T4KGPO.js';import{t as h}from'../chunk-TDFN5CKC.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{[a1(0xdb)];['uniqueId'];static ['template']=n`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const a2=a1;return this.#e[a2(0xa5)][a2(0xd9)]=='move';}set['moveable'](t){const a3=a1;t&&(this.#e[a3(0xa5)][a3(0xd9)]='move',this.#e['onpointerdown']=u=>(this.#r(u),!0x1));}get[a1(0xbe)](){const a4=a1;return this.#t[a4(0xa5)][a4(0x95)]!='none';}set[a1(0xbe)](t){const a5=a1;t?this.#t[a5(0xa5)]['display']=a5(0xa1):this.#t['style']['display']=a5(0xaf);}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this['_getDomElement']('head'),this.#t=this[a6(0x9a)]('close'),this.#i=this[a6(0x9a)](a6(0xb5)),this.#t['onclick']=()=>{this.#l();},this.#o=this.#c['bind'](this),this.#n=this.#h['bind'](this);}static [a1(0xd5)]=0x2;static [a1(0xd4)]=0x23;static[a1(0xdf)](u){const a7=a1;let z='id'+new Date()['getTime'](),A=new o();return u[a7(0xbb)]&&(typeof u[a7(0xbb)]=='string'?A.#e['innerHTML']=u['title']:A.#e[a7(0xe1)](u[a7(0xbb)])),typeof u['content']=='string'?A.#i['innerHTML']=u['content']:A.#i[a7(0xe1)](u['content']),A[a7(0xa5)]['width']=u[a7(0xb1)]??a7(0x9b),A['style'][a7(0xa6)]=u[a7(0xa6)]??a7(0xe8),A[a7(0xa5)]['width']=a7(0x96)+A['style']['width']+a7(0xa4)+this[a7(0xd5)]+'px)',A[a7(0xa5)]['height']='calc('+A['style'][a7(0xa6)]+a7(0xa4)+this[a7(0xd4)]+a7(0xe2),A[a7(0xa5)][a7(0xc1)]=u[a7(0xc1)]??a7(0xc2)+A['style'][a7(0xa6)]+')\x20/\x202))',A[a7(0xa5)]['left']=u['left']??a7(0xc2)+A[a7(0xa5)]['width']+a7(0xc0),u['moveable']&&(A[a7(0xe3)]=!0x0),(u[a7(0xbe)]===!0x1||u[a7(0xbe)]===!0x0)&&(A[a7(0xbe)]=u['closeable']),u[a7(0xa0)]&&(A['className']=u[a7(0xa0)]),document['getElementById']('overlayLayer')['appendChild'](A),z;}static[a1(0xd8)](u){const a8=a1;let z=u['element'];for(;!(z instanceof o&&z!=null);)z=z[a8(0x9d)]()?.['host'];z&&z.#l();}#l(){const a9=a1;document[a9(0x99)]('overlayLayer')['removeChild'](this);}#r(u){const aa=a1;let z=this[aa(0xe7)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window['addEventListener']('pointermove',this.#o),window['addEventListener'](aa(0x98),this.#n);}#c(t){const ab=a1;this[ab(0xa5)][ab(0xca)]=t['x']-this.#s+'px',this[ab(0xa5)]['top']=t['y']-this.#a+'px';}#h(){const ac=a1;window[ac(0xa7)](ac(0xc3),this.#o),window['removeEventListener']('pointerup',this.#n);}};function d(b,c){b=b-0x95;const e=a();let f=e[b];return f;}customElements['define'](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async['runScriptCommand'](z,A){const ad=a1;switch(z['type']){case ad(0xcc):{r[ad(0xd8)]({'element':A[ad(0xc4)]});break;}case'OpenScreen':{let F=await this['getValue'](z['screen'],A);if(z[ad(0xda)])document['getElementById']('viewer')['relativeSignalsPath']=await this['getValue'](z[ad(0xb0)],A),document[ad(0x99)]('viewer')['screenName']=F;else{let G='screenName='+F;window[ad(0xa3)]['hash']=G;}break;}case ad(0xd3):{let H=await this['getValue'](z['screen'],A),J=await this[ad(0xaa)](z[ad(0xab)]??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location[ad(0xc6)]['substring'](0x1))['get']('screenName')??'start',L=(H!='start'?'screenName='+K+'&':'')+'subScreen='+H+(J!=ad(0xd7)?ad(0xb7)+J:'');window['location']['hash']=L;break;}case ad(0xbc):{let M=await this['getValue'](z['screen'],A),O=await this['getValue'](z['title'],A),P=await this['getValue'](z['moveable'],A),Q=await this[ad(0xaa)](z[ad(0xbe)],A),R=await this[ad(0xaa)](z[ad(0xa0)],A),U=await this['getValue'](z[ad(0xb1)],A),W=await this['getValue'](z[ad(0xa6)],A),X=await this['getValue'](z['left'],A),Y=await this[ad(0xaa)](z[ad(0xc1)],A),Z=new g();Z[ad(0xb0)]=await this['getValue'](z['relativeSignalsPath'],A),Z[ad(0xcf)]=M,U||(U=await(await h[ad(0xc8)](ad(0xa9),M))[ad(0x97)]['width']),W||(W=await(await h[ad(0xc8)]('screen',M))['settings']['height']),r[ad(0xdf)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super[ad(0xb9)](z,A);}}['getTarget'](u,z,A){const ae=a1;if(z=='container'){let F=u[ae(0xc4)];for(let G=0x0;G<=(A??0x0);G++){let H=F[ae(0x9d)]()[ae(0xad)];H instanceof BaseCustomControl?F=H:F=H['getRootNode']()[ae(0xad)];}return F;}return super['getTarget'](u,z,A);}['getTargetFromTargetSelector'](u,z,A,F){const af=a1;let G=this['getTarget'](u,z,A),H=[G];return F&&(z===af(0xdb)?G instanceof g?H=G[af(0xc5)](F):H=G['shadowRoot'][af(0xb8)](F):H=G[af(0xb8)](F)),H;}},p=0x30;async function y(t,u=0x1f40){const ag=a1;if(customElements['get'](t))return!0x0;try{await Promise[ag(0xae)]([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ah=a1;document['getElementById'](ah(0xb6))?.['remove'](),document['querySelector'](ah(0xb2))?.['remove'](),document[ah(0x99)]('__nav-burger')?.[ah(0xd2)]();let t=document['getElementById'](ah(0xdc));t&&(t['style']['left']='0',t[ah(0xa5)][ah(0xc1)]='0',t['style'][ah(0xb1)]=ah(0x9f),t['style'][ah(0xa6)]=ah(0x9f));}async function w(){const ai=a1;let u=h[ai(0xe0)]||{},z=document['getElementById']('viewer');if(z){if(x(),u['appBar']&&u['appBar']['show']&&await y('webui-navigation-app-bar')){let A=document[ai(0xa8)]('div');A['id']=ai(0xb6),A['style']['cssText']=ai(0xcb)+p+ai(0xba);let F=document['createElement'](ai(0x9e));F['style']['cssText']=ai(0xb3),A[ai(0xe1)](F),document['body'][ai(0xe1)](A),z[ai(0xa5)]['top']=p+'px',z[ai(0xa5)]['height']='calc(100%\x20-\x20'+p+ai(0xe2);}if(await y(ai(0xb2))){let G=document[ai(0xa8)]('webui-navigation-sidebar');document[ai(0xe5)]['appendChild'](G);}}}async function D(){const aj=a1;try{let t=await h[aj(0xcd)]();t&&(h[aj(0xe0)]=Object[aj(0xc9)](h[aj(0xe0)]||{},t));}catch{}w();}var v=!0x1;async function C(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h['objectsChanged']?.['on']?.(F=>{(!F||F['type']==='screen')&&z();});let A;h[ak(0xc7)]?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i['LoadJavascript'](window['iobrokerSocketScriptUrl']),await h['init'](),e(h['config']?.['globalStyle']),h['configChanged']['on'](()=>{const al=a1;try{e(h[al(0xe0)]?.['globalStyle']);}catch{}}),window['appShell']={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h['changeView']['on'](u=>{const am=a1;let z=document[am(0x99)]('viewer');if(!z)return;let A=typeof u=='string'?u:u?.['name'],F=typeof u==am(0xbf)?'screen':u?.['type']??'screen';if(!A)return;let G=z[am(0xde)]==='iobroker-webui-report-viewer';if(F===am(0xac)){G?z['reportName']=A:location['hash']='report='+encodeURIComponent(A);return;}if(G){location[am(0xc6)]='screenName='+encodeURIComponent(A);return;}z[am(0xcf)]=A;}),C()[a1(0xd1)](t=>console['warn'](a1(0xbd),t));