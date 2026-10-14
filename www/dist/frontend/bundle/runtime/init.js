const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=-parseInt(a0(0x15b))/0x1*(parseInt(a0(0x16d))/0x2)+-parseInt(a0(0x188))/0x3*(parseInt(a0(0x186))/0x4)+-parseInt(a0(0x195))/0x5*(parseInt(a0(0x14f))/0x6)+-parseInt(a0(0x170))/0x7*(parseInt(a0(0x180))/0x8)+-parseInt(a0(0x185))/0x9*(-parseInt(a0(0x199))/0xa)+parseInt(a0(0x172))/0xb+parseInt(a0(0x197))/0xc*(parseInt(a0(0x177))/0xd);if(A===u)break;else z['push'](z['shift']());}catch(C){z['push'](z['shift']());}}}(a,0x2ca95));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-GKVOZVKS.js';import{t as h}from'../chunk-6UCSEZIG.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{['container'];[a1(0x157)];static ['template']=n`
        <div id="root" part="box" class="dialog-box">
            <h3 id="head" part="head" class="dialog-title">&nbsp;</h3>
            <a id="close" part="close" href="javascript:;" class="dialog-close" title="Close">&times;</a>
            <div id="content" part="content" class="dialog-content"></div>
        </div>`;static [a1(0x1a1)]=l`
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
        `;static ['is']=a1(0x17f);get['moveable'](){const a2=a1;return this.#e['style'][a2(0x181)]=='move';}set['moveable'](t){const a3=a1;t&&(this.#e['style']['cursor']=a3(0x18f),this.#e[a3(0x152)]=u=>(this.#r(u),!0x1));}get['closeable'](){const a4=a1;return this.#t['style'][a4(0x18d)]!=a4(0x18a);}set[a1(0x192)](t){const a5=a1;t?this.#t['style'][a5(0x18d)]=a5(0x173):this.#t['style']['display']='none';}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this[a6(0x19b)](a6(0x150)),this.#t=this['_getDomElement']('close'),this.#i=this['_getDomElement']('content'),this.#t[a6(0x14e)]=()=>{this.#l();},this.#o=this.#c['bind'](this),this.#n=this.#h[a6(0x151)](this);}static ['offsetWidth']=0x2;static [a1(0x161)]=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()[a7(0x179)](),A=new o();return u['title']&&(typeof u[a7(0x190)]=='string'?A.#e[a7(0x19d)]=u['title']:A.#e['appendChild'](u['title'])),typeof u[a7(0x194)]==a7(0x193)?A.#i['innerHTML']=u[a7(0x194)]:A.#i[a7(0x159)](u['content']),A[a7(0x1a1)]['width']=u[a7(0x1a2)]??'300px',A[a7(0x1a1)][a7(0x17b)]=u['height']??a7(0x196),A[a7(0x1a1)][a7(0x1a2)]=a7(0x1a4)+A[a7(0x1a1)][a7(0x1a2)]+'\x20+\x20'+this[a7(0x183)]+a7(0x15e),A[a7(0x1a1)][a7(0x17b)]=a7(0x1a4)+A[a7(0x1a1)][a7(0x17b)]+'\x20+\x20'+this['offsetHeight']+a7(0x15e),A[a7(0x1a1)][a7(0x15f)]=u[a7(0x15f)]??a7(0x1a9)+A['style']['height']+')\x20/\x202))',A['style']['left']=u['left']??'calc(50%\x20-\x20(('+A[a7(0x1a1)]['width']+a7(0x166),u['moveable']&&(A[a7(0x184)]=!0x0),(u['closeable']===!0x1||u['closeable']===!0x0)&&(A['closeable']=u['closeable']),u['cssClass']&&(A[a7(0x16b)]=u[a7(0x18b)]),document[a7(0x174)](a7(0x160))[a7(0x159)](A),z;}static['closeDialog'](u){const a8=a1;let z=u['element'];for(;!(z instanceof o&&z!=null);)z=z[a8(0x176)]()?.[a8(0x17a)];z&&z.#l();}#l(){const a9=a1;document[a9(0x174)]('overlayLayer')['removeChild'](this);}#r(u){const aa=a1;let z=this[aa(0x1a5)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window[aa(0x17e)]('pointermove',this.#o),window[aa(0x17e)](aa(0x16e),this.#n);}#c(t){const ab=a1;this[ab(0x1a1)]['left']=t['x']-this.#s+'px',this[ab(0x1a1)]['top']=t['y']-this.#a+'px';}#h(){const ac=a1;window['removeEventListener']('pointermove',this.#o),window[ac(0x19a)]('pointerup',this.#n);}};function a(){const am=['head','bind','onpointerdown','globalStyle','cssText','catch','start','uniqueId','substring','appendChild','runScriptCommand','31fHMKLT','changeView','relativeSignalsPath','px)','top','overlayLayer','offsetHeight','container','querySelectorAll','hash','querySelector',')\x20/\x202))','get','100%','screenName=','getValue','className','OpenScreenInScreenViewer','9038HPhMwq','pointerup','report','21wtXJKb','location','3833775kTFxjj','block','getElementById','getTargetFromTargetSelector','getRootNode','2689882phVzdU','div','getTime','host','height','OpenScreen','subScreen=','addEventListener','iobroker-webui-dialog','224096jyrooF','cursor','type','offsetWidth','moveable','331641IKfgGN','8920SXnEDd','body','417wRrBbu','CloseDialog','none','cssClass','LoadJavascript','display','appBar','move','title','getTarget','closeable','string','content','595115adtVuf','200px','24SyneMJ','screenName','20IdVdyB','removeEventListener','_getDomElement','px;z-index:100000;','innerHTML','createElement','iobroker-webui-report-viewer','getWebuiObject','style','width','viewer','calc(','getBoundingClientRect','screen','targetSelector','remove','calc(50%\x20-\x20((','config','webui-navigation-sidebar','onclick','6DIkIKL'];a=function(){return am;};return a();}function d(b,c){b=b-0x14c;const e=a();let f=e[b];return f;}customElements['define'](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async[a1(0x15a)](z,A){const ad=a1;switch(z[ad(0x182)]){case ad(0x189):{r['closeDialog']({'element':A['element']});break;}case ad(0x17c):{let F=await this[ad(0x16a)](z['screen'],A);if(z['noHistory'])document[ad(0x174)]('viewer')['relativeSignalsPath']=await this[ad(0x16a)](z[ad(0x15d)],A),document['getElementById'](ad(0x1a3))[ad(0x198)]=F;else{let G='screenName='+F;window['location']['hash']=G;}break;}case ad(0x16c):{let H=await this['getValue'](z['screen'],A),J=await this['getValue'](z[ad(0x1a7)]??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location[ad(0x164)][ad(0x158)](0x1))['get']('screenName')??(window['IOB']?.['startScreenName']||ad(0x156)),L=(H!=ad(0x156)?ad(0x169)+K+'&':'')+ad(0x17d)+H+(J!='iobroker-webui-screen-viewer'?'&targetSelector='+J:'');window[ad(0x171)][ad(0x164)]=L;break;}case'OpenDialog':{let M=await this['getValue'](z['screen'],A),O=await this['getValue'](z[ad(0x190)],A),P=await this[ad(0x16a)](z['moveable'],A),Q=await this['getValue'](z[ad(0x192)],A),R=await this['getValue'](z['cssClass'],A),U=await this[ad(0x16a)](z['width'],A),W=await this['getValue'](z[ad(0x17b)],A),X=await this[ad(0x16a)](z['left'],A),Y=await this['getValue'](z[ad(0x15f)],A),Z=new g();Z['relativeSignalsPath']=await this['getValue'](z[ad(0x15d)],A),Z[ad(0x198)]=M,U||(U=await(await h[ad(0x1a0)]('screen',M))['settings'][ad(0x1a2)]),W||(W=await(await h[ad(0x1a0)]('screen',M))['settings'][ad(0x17b)]),r['openDialog']({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super[ad(0x15a)](z,A);}}['getTarget'](u,z,A){const ae=a1;if(z==ae(0x162)){let C=u['element'];for(let F=0x0;F<=(A??0x0);F++){let G=C['getRootNode']()['host'];G instanceof BaseCustomControl?C=G:C=G['getRootNode']()[ae(0x17a)];}return C;}return super[ae(0x191)](u,z,A);}[a1(0x175)](u,z,A,C){const af=a1;let F=this[af(0x191)](u,z,A),G=[F];return C&&(z===af(0x162)?F instanceof g?G=F['_getDomElements'](C):G=F['shadowRoot']['querySelectorAll'](C):G=F[af(0x163)](C)),G;}},p=0x30;async function y(t,u=0x1f40){const ag=a1;if(customElements[ag(0x167)](t))return!0x0;try{await Promise['race']([customElements['whenDefined'](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements['get'](t);}function x(){const ah=a1;document[ah(0x174)]('__nav-appbar-host')?.[ah(0x1a8)](),document[ah(0x165)](ah(0x14d))?.['remove'](),document[ah(0x174)]('__nav-burger')?.['remove']();let t=document['getElementById']('viewer');t&&(t[ah(0x1a1)]['left']='0',t[ah(0x1a1)][ah(0x15f)]='0',t['style']['width']='100%',t['style'][ah(0x17b)]=ah(0x168));}async function w(){const ai=a1;let u=h[ai(0x14c)]||{},z=document[ai(0x174)]('viewer');if(z){if(x(),u[ai(0x18e)]&&u[ai(0x18e)]['show']&&await y('webui-navigation-app-bar')){let A=document[ai(0x19e)](ai(0x178));A['id']='__nav-appbar-host',A[ai(0x1a1)][ai(0x154)]='position:fixed;top:0;left:0;right:0;height:'+p+ai(0x19c);let C=document['createElement']('webui-navigation-app-bar');C[ai(0x1a1)]['cssText']='display:block;width:100%;height:100%;',A[ai(0x159)](C),document[ai(0x187)]['appendChild'](A),z['style'][ai(0x15f)]=p+'px',z[ai(0x1a1)]['height']='calc(100%\x20-\x20'+p+ai(0x15e);}if(await y('webui-navigation-sidebar')){let F=document[ai(0x19e)]('webui-navigation-sidebar');document[ai(0x187)][ai(0x159)](F);}}}async function D(){const aj=a1;try{let t=await h['_getConfig']();t&&(h[aj(0x14c)]=Object['assign'](h[aj(0x14c)]||{},t));}catch{}w();}var v=!0x1;async function S(){if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h['objectsChanged']?.['on']?.(C=>{(!C||C['type']==='screen')&&z();});let A;h['refreshView']?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i[a1(0x18c)](window['iobrokerSocketScriptUrl']),await h['init'](),e(h['config']?.[a1(0x153)]),h['configChanged']['on'](()=>{const ak=a1;try{e(h['config']?.[ak(0x153)]);}catch{}}),window['appShell']={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0x15c)]['on'](u=>{const al=a1;let z=document[al(0x174)]('viewer');if(!z)return;let A=typeof u==al(0x193)?u:u?.['name'],C=typeof u==al(0x193)?al(0x1a6):u?.[al(0x182)]??al(0x1a6);if(!A)return;let F=z['localName']===al(0x19f);if(C===al(0x16f)){F?z['reportName']=A:location[al(0x164)]='report='+encodeURIComponent(A);return;}if(F){location['hash']=al(0x169)+encodeURIComponent(A);return;}z[al(0x198)]=A;}),S()[a1(0x155)](t=>console['warn']('[nav]\x20shell\x20init\x20failed',t));