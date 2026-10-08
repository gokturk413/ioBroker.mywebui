const a1=d;(function(t,u){const a0=d,z=t();while(!![]){try{const A=-parseInt(a0(0x184))/0x1+parseInt(a0(0x15c))/0x2*(parseInt(a0(0x15b))/0x3)+-parseInt(a0(0x16a))/0x4*(parseInt(a0(0x1ad))/0x5)+-parseInt(a0(0x177))/0x6*(parseInt(a0(0x1ac))/0x7)+parseInt(a0(0x154))/0x8*(parseInt(a0(0x17d))/0x9)+parseInt(a0(0x16f))/0xa+-parseInt(a0(0x185))/0xb*(-parseInt(a0(0x15f))/0xc);if(A===u)break;else z['push'](z['shift']());}catch(C){z['push'](z['shift']());}}}(a,0x54669));import{b,c as e}from'../chunk-KVPT4J7H.js';import{a as g}from'../chunk-GKVOZVKS.js';import{t as h}from'../chunk-6UCSEZIG.js';import{LazyLoader as i}from'@gokturk413/base-custom-webcomponent';import{BindingsHelper as j}from'@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js';function d(b,c){b=b-0x14e;const e=a();let f=e[b];return f;}import{BaseCustomWebComponentConstructorAppend as k,css as l,html as n}from'@gokturk413/base-custom-webcomponent';var r=class o extends k{[a1(0x16b)];['uniqueId'];static ['template']=n`
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
        `;static ['is']='iobroker-webui-dialog';get['moveable'](){const a2=a1;return this.#e['style']['cursor']==a2(0x1a4);}set['moveable'](t){const a3=a1;t&&(this.#e[a3(0x18f)][a3(0x193)]='move',this.#e[a3(0x15d)]=u=>(this.#r(u),!0x1));}get['closeable'](){const a4=a1;return this.#t['style'][a4(0x192)]!=a4(0x19d);}set[a1(0x152)](t){const a5=a1;t?this.#t['style']['display']='block':this.#t['style'][a5(0x192)]=a5(0x19d);}#e;#t;#i;#s;#a;#o;#n;constructor(){const a6=a1;super(),this.#e=this[a6(0x18b)](a6(0x17a)),this.#t=this[a6(0x18b)](a6(0x178)),this.#i=this[a6(0x18b)](a6(0x17e)),this.#t['onclick']=()=>{this.#l();},this.#o=this.#c[a6(0x1a6)](this),this.#n=this.#h[a6(0x1a6)](this);}static [a1(0x198)]=0x2;static [a1(0x17b)]=0x23;static['openDialog'](u){const a7=a1;let z='id'+new Date()[a7(0x1ab)](),A=new o();return u[a7(0x1a0)]&&(typeof u['title']=='string'?A.#e[a7(0x183)]=u['title']:A.#e[a7(0x1b0)](u['title'])),typeof u['content']=='string'?A.#i[a7(0x183)]=u['content']:A.#i[a7(0x1b0)](u['content']),A['style'][a7(0x197)]=u[a7(0x197)]??'300px',A[a7(0x18f)][a7(0x16c)]=u['height']??'200px',A[a7(0x18f)]['width']=a7(0x153)+A[a7(0x18f)]['width']+'\x20+\x20'+this['offsetWidth']+a7(0x155),A['style']['height']=a7(0x153)+A[a7(0x18f)]['height']+a7(0x1a1)+this['offsetHeight']+a7(0x155),A[a7(0x18f)]['top']=u[a7(0x1aa)]??'calc(50%\x20-\x20(('+A[a7(0x18f)]['height']+a7(0x19e),A['style'][a7(0x1b3)]=u[a7(0x1b3)]??a7(0x1a5)+A[a7(0x18f)]['width']+a7(0x19e),u['moveable']&&(A[a7(0x1b2)]=!0x0),(u['closeable']===!0x1||u['closeable']===!0x0)&&(A['closeable']=u[a7(0x152)]),u[a7(0x160)]&&(A['className']=u[a7(0x160)]),document[a7(0x19c)]('overlayLayer')[a7(0x1b0)](A),z;}static['closeDialog'](u){const a8=a1;let z=u['element'];for(;!(z instanceof o&&z!=null);)z=z[a8(0x175)]()?.['host'];z&&z.#l();}#l(){const a9=a1;document[a9(0x19c)](a9(0x151))[a9(0x1a2)](this);}#r(u){const aa=a1;let z=this[aa(0x181)]();this.#s=u['x']-z['x'],this.#a=u['y']-z['y'],window['addEventListener'](aa(0x172),this.#o),window['addEventListener'](aa(0x157),this.#n);}#c(t){const ab=a1;this[ab(0x18f)][ab(0x1b3)]=t['x']-this.#s+'px',this[ab(0x18f)][ab(0x1aa)]=t['y']-this.#a+'px';}#h(){const ac=a1;window[ac(0x188)]('pointermove',this.#o),window['removeEventListener']('pointerup',this.#n);}};customElements[a1(0x165)](r['is'],r);import{ScriptSystem as q}from'@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js';var c=class extends q{async[a1(0x196)](z,A){const ad=a1;switch(z['type']){case ad(0x1a8):{r[ad(0x174)]({'element':A['element']});break;}case'OpenScreen':{let F=await this['getValue'](z[ad(0x161)],A);if(z['noHistory'])document[ad(0x19c)]('viewer')['relativeSignalsPath']=await this['getValue'](z[ad(0x166)],A),document['getElementById'](ad(0x162))[ad(0x176)]=F;else{let G=ad(0x15e)+F;window['location'][ad(0x169)]=G;}break;}case'OpenScreenInScreenViewer':{let H=await this[ad(0x16e)](z[ad(0x161)],A),J=await this[ad(0x16e)](z[ad(0x180)]??'iobroker-webui-screen-viewer',A),K=new URLSearchParams(location[ad(0x169)][ad(0x14f)](0x1))['get']('screenName')??(window[ad(0x19f)]?.[ad(0x167)]||ad(0x191)),L=(H!='start'?ad(0x15e)+K+'&':'')+ad(0x182)+H+(J!='iobroker-webui-screen-viewer'?ad(0x199)+J:'');window[ad(0x190)][ad(0x169)]=L;break;}case'OpenDialog':{let M=await this[ad(0x16e)](z[ad(0x161)],A),O=await this[ad(0x16e)](z[ad(0x1a0)],A),P=await this[ad(0x16e)](z['moveable'],A),Q=await this[ad(0x16e)](z[ad(0x152)],A),R=await this[ad(0x16e)](z['cssClass'],A),U=await this[ad(0x16e)](z['width'],A),W=await this['getValue'](z['height'],A),X=await this[ad(0x16e)](z[ad(0x1b3)],A),Y=await this['getValue'](z[ad(0x1aa)],A),Z=new g();Z['relativeSignalsPath']=await this[ad(0x16e)](z[ad(0x166)],A),Z['screenName']=M,U||(U=await(await h['getWebuiObject'](ad(0x161),M))[ad(0x168)]['width']),W||(W=await(await h['getWebuiObject']('screen',M))[ad(0x168)][ad(0x16c)]),r[ad(0x1a3)]({'title':O,'content':Z,'moveable':P,'closeable':Q,'width':U,'height':W,'top':Y,'left':X,'cssClass':R});break;}default:await super[ad(0x196)](z,A);}}['getTarget'](u,z,A){const ae=a1;if(z==ae(0x16b)){let C=u['element'];for(let F=0x0;F<=(A??0x0);F++){let G=C['getRootNode']()[ae(0x1b1)];G instanceof BaseCustomControl?C=G:C=G[ae(0x175)]()[ae(0x1b1)];}return C;}return super[ae(0x164)](u,z,A);}['getTargetFromTargetSelector'](u,z,A,C){const af=a1;let F=this[af(0x164)](u,z,A),G=[F];return C&&(z==='container'?F instanceof g?G=F['_getDomElements'](C):G=F[af(0x18c)]['querySelectorAll'](C):G=F[af(0x19b)](C)),G;}},p=0x30;async function y(t,u=0x1f40){const ag=a1;if(customElements['get'](t))return!0x0;try{await Promise[ag(0x195)]([customElements[ag(0x179)](t),new Promise(z=>setTimeout(z,u))]);}catch{}return!!customElements[ag(0x19a)](t);}function x(){const ah=a1;document[ah(0x19c)]('__nav-appbar-host')?.[ah(0x18e)](),document[ah(0x158)](ah(0x17f))?.[ah(0x18e)](),document[ah(0x19c)](ah(0x150))?.['remove']();let t=document['getElementById'](ah(0x162));t&&(t['style'][ah(0x1b3)]='0',t['style']['top']='0',t[ah(0x18f)]['width']=ah(0x18a),t[ah(0x18f)]['height']=ah(0x18a));}async function w(){const ai=a1;let u=h['config']||{},z=document['getElementById']('viewer');if(z){if(x(),u['appBar']&&u['appBar']['show']&&await y('webui-navigation-app-bar')){let A=document[ai(0x18d)]('div');A['id']=ai(0x187),A[ai(0x18f)]['cssText']=ai(0x163)+p+'px;z-index:100000;';let C=document['createElement'](ai(0x173));C[ai(0x18f)]['cssText']='display:block;width:100%;height:100%;',A['appendChild'](C),document[ai(0x156)][ai(0x1b0)](A),z['style']['top']=p+'px',z['style']['height']='calc(100%\x20-\x20'+p+ai(0x155);}if(await y(ai(0x17f))){let F=document[ai(0x18d)]('webui-navigation-sidebar');document[ai(0x156)]['appendChild'](F);}}}async function D(){const aj=a1;try{let t=await h[aj(0x15a)]();t&&(h[aj(0x159)]=Object[aj(0x189)](h[aj(0x159)]||{},t));}catch{}w();}function a(){const an=['12cGiFTP','200082mYMauL','onpointerdown','screenName=','4585056pCWorn','cssClass','screen','viewer','position:fixed;top:0;left:0;right:0;height:','getTarget','define','relativeSignalsPath','startScreenName','settings','hash','928iwsEZq','container','height','reportName','getValue','2069380VnBbdN','report=','refreshView','pointermove','webui-navigation-app-bar','closeDialog','getRootNode','screenName','434298WjDDpX','close','whenDefined','head','offsetHeight','configChanged','9pYUOpF','content','webui-navigation-sidebar','targetSelector','getBoundingClientRect','subScreen=','innerHTML','343927MExkmt','11DQJEAa','localName','__nav-appbar-host','removeEventListener','assign','100%','_getDomElement','shadowRoot','createElement','remove','style','location','start','display','cursor','LoadJavascript','race','runScriptCommand','width','offsetWidth','&targetSelector=','get','querySelectorAll','getElementById','none',')\x20/\x202))','IOB','title','\x20+\x20','removeChild','openDialog','move','calc(50%\x20-\x20((','bind','iobrokerSocketScriptUrl','CloseDialog','catch','top','getTime','49WwMgZa','1170OXzDHD','name','globalStyle','appendChild','host','moveable','left','changeView','substring','__nav-burger','overlayLayer','closeable','calc(','2091288YaICFQ','px)','body','pointerup','querySelector','config','_getConfig'];a=function(){return an;};return a();}var v=!0x1;async function S(){const ak=a1;if(await w(),v)return;v=!0x0;let u,z=()=>{clearTimeout(u),u=setTimeout(()=>w(),0x96);};h['configChanged']?.['on']?.(z),h['objectsChanged']?.['on']?.(C=>{(!C||C['type']==='screen')&&z();});let A;h[ak(0x171)]?.['on']?.(()=>{clearTimeout(A),A=setTimeout(()=>D(),0x96);});}b(),await i[a1(0x194)](window[a1(0x1a7)]),await h['init'](),e(h['config']?.[a1(0x1af)]),h[a1(0x17c)]['on'](()=>{const al=a1;try{e(h[al(0x159)]?.['globalStyle']);}catch{}}),window['appShell']={'bindingsHelper':new j(h),'scriptSystem':new c(h)},h[a1(0x14e)]['on'](u=>{const am=a1;let z=document[am(0x19c)]('viewer');if(!z)return;let A=typeof u=='string'?u:u?.[am(0x1ae)],C=typeof u=='string'?am(0x161):u?.['type']??'screen';if(!A)return;let F=z[am(0x186)]==='iobroker-webui-report-viewer';if(C==='report'){F?z[am(0x16d)]=A:location[am(0x169)]=am(0x170)+encodeURIComponent(A);return;}if(F){location['hash']=am(0x15e)+encodeURIComponent(A);return;}z['screenName']=A;}),S()[a1(0x1a9)](t=>console['warn']('[nav]\x20shell\x20init\x20failed',t));