# Custom Control bələdçisi

[In English](custom-controls.md)

Designer-də öz təkrar istifadə olunan controlunuzu necə qurmaq: fayl formatı, xassələrin property grid-ə necə çatması, script hook-ları, controlların harada saxlanması və hazır bir controlun əvvəldən sonadək oxunuşu.

**Custom control** mywebui-nin içində yaradılır (designer → control tab) və tək `.control` JSON faylı kimi saxlanır. **npm widget** isə layihəyə quraşdırılan custom element-lərdən ibarət adi npm paketidir — baxın: [npm-widgets.md](npm-widgets.md). Qısa qayda: custom control üçün build addımı və npm publish lazım deyil, onun mənbəyi layihənin içində gəzir; widget isə mywebui-dən kənarda kompilyasiya edib versiyaladığınız koddur.

## 1. `.control` faylının beş hissəsi

`.control` faylı məhz bu üst səviyyə sahələri olan JSON-dur:

```
properties   designer-in property grid-də göstərdiyi və elementin xassəsinə çevrilənlər
settings     ölçü + controla aid açarlar (bax §4)
html         shadow-DOM şablonu
style        shadow-DOM CSS-i
script       lifecycle hook-ları olan ES modulu
```

Controlun öz lüğəti olanda altıncı sahə, `translations` əlavə olunur — baxın: [translations.md](translations.md).

Bütün fayl bir JSON obyektidir, ona görə `html`, `style` və `script` **JSON-escape olunmuş sətirlərdir**. `.control` faylında xam HTML axtarmaq adətən heç nə tapmır; onu parse edin:

```bash
node -e "const c=JSON.parse(require('fs').readFileSync('default-controls/controls/gauges/linear-gauge.control','utf8'));console.log(c.style)"
```

## 2. Xassələrin təyini

`properties` xassə adını `{ type, default }`-a bağlayır (enum üçün əlavə `values` və istəyə görə `internal` bayrağı):

```json
"value":       { "type": "number",  "default": 42 },
"orientation": { "type": "enum",    "default": "horizontal", "values": ["horizontal","vertical"] },
"showValue":   { "type": "boolean", "default": true },
"trackColor":  { "type": "color",   "default": "" }
```

(`default-controls/controls/gauges/linear-gauge.control`-dan)

### Mövcud növlər

Designer-in növ siyahısı məhz bunları təklif edir, `www/dist/frontend/config/IobrokerWebuiControlPropertiesEditor.js`-dəki `_createPropRow`-dan:

```js
for (const t of ['string', 'boolean', 'number', 'color', 'date', 'signal', 'screen', 'object']) {
```

üstəgəl ayrıca **"add enum..."** düyməsi ilə əlavə olunan `enum` (o `{ type: 'enum', values: '["a", "b"]' }` yazır), ona görə siyahıda yoxdur.

Runtime-da `www/dist/frontend/runtime/CustomControls.js`-dəki `generateCustomControl()` atribut çevrilməsi üçün hər növü JS konstruktoruna bağlayır: `string`/`color`/`enum`/`signal`/`screen` → `String`, `boolean` → `Boolean`, `number` → `Number`, `date` → `Date`, `object` → `Object`. Tanınmayan hər şey `Object`-ə düşür.

**Standart dəyərlər ilk bağlantı keçidindən əvvəl təyin olunur.** Elementin konstruktoru şablonunu parse edir, bu da hər `[[…]]`-i bir dəfə hesablayır. Ona görə xassələrin standart dəyərləri bundan əvvəl təyin olunur (`BaseCustomControl` konstruktoru), və `[[this.price.toFixed(2)]]` kimi ifadə `undefined` yox, `12.345` görür. Element upgrade olunmazdan əvvəl artıq saxladığı dəyər qalır və standart dəyərdən üstündür.

`color` rəng seçicisi, `signal` siqnal/state seçicisi, `screen` ekran seçicisi verir — üçü də elementdə sətirdir.

### `internal` xassələr

**int** qutusunu işarələmək `internal: true` təyin edir. Belə xassə yenə də instance accessor-u alır və bağlantılarda işləyir, amma elementin müşahidə olunan xassələri qurulanda ötürülür:

```js
for (let p in control.properties) {
    const prp = control.properties[p];
    if (prp.internal)
        continue;
```

Bunu controlun özü üçün saxladığı və markup-dan təyin olunmasını istəmədiyi vəziyyət üçün istifadə edin.

### Redaktorda xassələrin qruplaşdırılması

Xassələr redaktoru sətirləri adın **ilk alt xəttdən əvvəlki** hissəsinə görə qruplaşdırır və hər qrup açılıb-bağlanan başlıq alır. Yəni xassələrə `axis_min`, `axis_max`, `axis_unit` adı vermək açılıb-bağlanan `axis` qrupu yaradır. Alt xətti olmayan (və ya alt xəttlə başlayan) ad qrupsuz qalır.

Saxlananda adlar da təmizlənir: `notAllowedChars`-dakı simvollar silinir və ilk hərf kiçildilir.

### `-changed` hadisəsi

Hər xassə setter-i **tireli** xassə adı ilə adlanan `CustomEvent` göndərir, yeni dəyər `detail`-dədir:

```js
instance.dispatchEvent(new CustomEvent(PropertiesHelper.camelToDashCase(p) + '-changed', { detail: { newValue } }));
```

Yəni `label` xassəsi `label-changed`, `barThickness` isə `bar-thickness-changed` göndərir. Xassə redaktə olunanda script belə yenidən çəkir — `theme-selector` məhz bunu edir:

```js
try{instance._assignEvent('label-changed',()=>render(instance));}catch(e){}
```

## 3. Script: hook-ları olan ES modulu

`script` sahəsi **əsl ES modulu** kimi yüklənir —
`www/libs/@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js`-dəki `assignAllScripts` onu blob URL-ə çevirib `import()` edir:

```js
const scriptUrl = URL.createObjectURL(new Blob([javascriptCode], { type: 'application/javascript' }));
jsObject = await import(scriptUrl);
```

Ona görə `export` vacibdir, üst səviyyə `await` işləyir və modul hər instance üçün yox, hər control **sinfi** üçün bir dəfə hesablanır — instance-a aid vəziyyəti `instance`-da saxlayın.

| Hook | İmza | Nə vaxt |
|---|---|---|
| `init` | `init(instance, shadowRoot)` | bir dəfə, modul import olunan kimi, `assignAllScripts`-dən |
| `connectedCallback` | `connectedCallback(instance, shadowRoot)` | element hər dəfə DOM-a daxil olanda, `BaseCustomControl` çağırır |
| `disconnectedCallback` | `disconnectedCallback(instance, shadowRoot)` | silinəndə — **əlavə etdiyiniz qlobal hər şeyi geri qaytarın** |

Hazır gələn 118 controlda `init` 86, `disconnectedCallback` 79, `connectedCallback` 15 dəfə istifadə olunur.

Ardıcıllıq vacibdir: `BaseCustomControl.connectedCallback()` atributları parse edir, layout tətbiq edir, dinamik xassələri qurur, bağlantıları yeniləyir və `assignAllScripts`-i gözləməzdən **əvvəl bütün bağlantıları** tətbiq edir. Sizin `init` işə düşəndə şablon artıq bağlanıb və `instance` xassə dəyərlərini daşıyır.

### Instance köməkçiləri

Script-in içində `instance`-da mövcuddur (hazır controllarda istifadə sayı ilə):

| Köməkçi | Nə edir |
|---|---|
| `instance._getDomElement(id)` | controlun shadow root-unda `getElementById` (482 istifadə) |
| `instance._getDomElements(selector)` | shadow root-da `querySelectorAll` (318 istifadə) |
| `instance._bindingsRefresh(name?)` | bağlantıları yenidən hesablayır; adla yalnız `this.<name>`-i oxuyanları (və ondan qurulan siyahıları) — baxın: template-directives.az.md "Yeniləmə" (266 istifadə) |
| `instance._assignEvent(event, cb)` | host-a disconnect-də avtomatik silinən dinləyici əlavə edir; `{ remove() }` qaytarır (122 istifadə) |

`_getDomElement` və `_getDomElements`
`www/libs/@gokturk413/base-custom-webcomponent/dist/BaseCustomWebComponent.js`-dən gəlir; `_assignEvent` isə `BaseCustomControl`-un özündə təyin olunub və dinləyicilərinin sızmamasının səbəbi odur.

### Təmizləmə

`_assignEvent` dinləyiciləri və şablon bağlantıları sizin üçün silinir. `window` və ya `document`-ə qoşduğunuz heç nə silinmir — onu özünüz silin:

```js
export function disconnectedCallback(instance){ try{ window.removeEventListener('webui-theme-changed', instance.__onTheme); }catch(e){} }
```

(`default-controls/controls/theme/theme-selector.control`)

## 4. `settings`

`settings` həmişə dizayn ölçüsünü daşıyır, controla aid açarlar da ola bilər. Hazır controllarda həqiqətən istifadə olunan açarlar:

| Açar | Say | Mənası |
|---|---|---|
| `width`, `height` | 81 | dizayn ölçüsü, məsələn `{"width":"360px","height":"150px"}` |
| `visibilityEnabled`, `visibilityGroups`, `visibilityAction`, `visibilityRedirectScreen` | 40 | qrupa görə görünmə, `visibilityService` tətbiq edir — baxın: [permissions.md](permissions.md) |
| `useGlobalStyle` | 4 | layihənin Global Style stilini bu controlun shadow root-una qəbul edir |
| `bindToSize` | 3 | `width`/`height`-in bağlantı mənbəyi kimi istifadəsi üçün `ResizeObserver` qurur |

`settings.layout` da oxunur (`applyLayoutStyle(this, ...control.settings?.layout)`) — controlun öz uşaqlarını ekranların istifadə etdiyi eyni layout metadata ilə flex/grid kimi düzür.

`useGlobalStyle` qorunur — runtime stili yalnız mövcud olanda qəbul edir, çünki Global Style olmayan layihədə `useGlobalStyle:true` olan control əks halda `"Failed to convert value to 'CSSStyleSheet'"` atardı.

## 5. Control içində bağlantılar və direktivlər

Hər iki sistem control şablonunda işləyir və ayrıca sənədlənib:

- **Bağlantılar** (`bind-content:`, `bind-css:`, `bind-attr:`, `??property`) — [bindings.md](bindings.md).
- **Şablon direktivləri** (`[[expr]]`, `for:`, `if:`, `switch:`, `ref:`) — [template-directives.az.md](template-directives.az.md). Direktivlər custom control-da, v1.155.0-dan isə birbaşa ekran və hesabat səhifələrində də işləyir.

Control içində `??name` controlun öz xassələrindən birini oxuyur. Siqnal yolları shadow host-lar boyunca yuxarı qalxan `instance._getRelativeSignalsPath()`-ə nisbətən həll olunur — yəni başqa controlun içindəki control xarici controlun siqnal prefiksini miras alır.

## 6. İşlənmiş nümunə: `linear-gauge`

`default-controls/controls/gauges/linear-gauge.control` (5.5 KB) tam oxumaq üçün kifayət qədər kiçikdir.

**properties** — 14 dənə: `value`, `min`, `max`, `zones`, `orientation`, `mode`, `title`, `subtitle`, `unit`, `decimals`, `showValue`, `showPointer`, `trackColor`, `barThickness`. Diqqət: `zones` `object` yox, JSON saxlayan `string`-dir, ona görə grid-də mətn kimi redaktə oluna bilir:

```json
"zones": { "type": "string", "default": "[{\"to\":65,\"color\":\"#7c5ce0\"},{\"to\":75,\"color\":\"#c8551f\"},{\"to\":100,\"color\":\"#d63b45\"}]" }
```

**settings** — `{"width":"360px","height":"150px"}`.

**html** — data atributları iki enum xassəyə bağlanan bir sarğı, beləliklə CSS layout-u tamamilə atribut selektoru ilə dəyişə bilir:

```html
<div id="wrap" class="lg-wrap" bind-attr:data-orient="??orientation" bind-attr:data-mode="??mode">
```

İçində dəyər göstəricisi özünü bağlantı ifadəsində formatlayır (`__0` ilk sadalanan mənbə, `__1` ikincisidir):

```html
<span class="lg-num" bind-content:text="??value;??decimals;Number(__0).toFixed(Number(__1))"></span>
```

və `trackColor` xassəsi boş olanda trek rəngi tema tokeninə düşür:

```html
<div class="lg-track" bind-css:background-color="??trackColor;__0||'var(--ui-surface-2,#3a3f4b)'"></div>
```

**style** — host mətn rəngini tokendən alır, layout isə bağlanmış data atributuna görə ayrılır:

```css
:host{display:block;width:100%;height:100%;color:var(--ui-text,#e2e6ec);font-family:'Segoe UI',Roboto,sans-serif;box-sizing:border-box;}
```

```css
[data-orient="horizontal"] .lg-gauge{height:18px;margin:16px 2px 22px;}
```

**script** — demək olar ki, heç nə, çünki bütün gauge deklarativdir:

```js
export function init(instance){ try{ instance._bindingsRefresh && instance._bindingsRefresh?.(); }catch(e){} }
export function connectedCallback(instance){}
```

Köçürüləcək nümunə budur: məntiqi bağlantılara qoyun, script-i bağlantıların ifadə edə bilmədiyi hissələrə saxlayın (imperativ DOM, xarici API-lər, hadisə bağlantısı).

Script ilə idarə olunan qarşılığı üçün `default-controls/controls/theme/theme-selector.control`-u oxuyun — o, `<option>` siyahısını JS-də qurur, `label-changed`-i bağlayır, `init`-də window hadisəsinə abunə olur və `disconnectedCallback`-də abunəlikdən çıxır.

## 7. Controllar harada saxlanır

**Platformanın standart controlları** npm paketində `default-controls/controls/` altında gəlir. İlk başlanğıcda `src-original/backend/main.js`-dəki `seedGlobalControls()` onları files DB-yə köçürür və `global/_seeded` işarəsini yazır ki, köçürmə məhz bir dəfə olsun və istifadəçinin dəyişiklikləri heç vaxt üzərinə yazılmasın:

```js
const ctlDir = path.join(base, 'controls');
```
→ `mywebui.0.data`-ya `global/controls` altında yüklənir.

**Layihənin öz controlları** `IobrokerHandler.saveObject()` ilə `mywebui.0.projects` files obyektinə burada saxlanır:

```
<project>/data/controls/<name>.control
```

`configPath`-dan (`<currentProject> + '/data/'`) və `type + "s/"`-dən qurulur. Yəni default layihənin controlları `default/data/controls/…`-dadır.

Hər ikisi xam diskdə yox, ioBroker **files DB**-də olduğundan, onları adapter qovluğuna fayl köçürməklə yox, `iobroker file write` ilə (və ya designer-də) redaktə edin.

## 8. Custom element teqi

`www/dist/frontend/runtime/CustomControls.js`-dəki `getCustomControlName()` teqi controlun yolundan çıxarır: əvvəldəki `/` atılır, slash-lar və boşluqlar tireyə çevrilir, `--` birləşdirilir, camelCase tireli yazıya çevrilir və `webui-` prefiksi əlavə olunur.

| Necə saxlanıb | Teq |
|---|---|
| `logout` | `<webui-logout>` |
| `gauges/linearGauge` | `<webui-gauges-linear-gauge>` |
| `gauges/linear-gauge` | `<webui-gauges-linear-gauge>` |
| `theme/theme-selector` | `<webui-theme-theme-selector>` |

Diqqət: qovluq adı olduğu kimi qalır, ona görə `theme/theme-selector`-da söz ikiqat olur. Həmçinin `--` birləşdirilməsi camelCase çevrilməsindən *əvvəl* olur, ona görə böyük hərfin yanında boşluq olan ad (`My Control`) `<webui-my--control>` verir — kiçik hərfli, tiresiz control adlarına üstünlük verin.

## 9. Redaktə zamanı canlı yenilənmə

Control instance-ı `objectsChanged`-ə abunə olur və öz təyini saxlananda yerindəcə yenidən qurulur — `disconnectedCallback`-i işə salır, şablonu yenidən klonlayır, bağlantıları yenidən parse edir və `connectedCallback`-i yenidən işə salır. Designer-dəki dəyişikliyin səhifəni yeniləmədən görünməsinin və sızan `disconnectedCallback`-in bir neçə saxlamadan sonra təkrarlanan dinləyicilər kimi görünməsinin səbəbi budur.

## 10. Controlu hesabatlarda işlətmək

Hesabatlar **iki dəfə** çəkilir: brauzerdə canlı, sonra isə cədvəl üzrə HTML (sonra PDF) faylı yaratmaq üçün heç bir brauzer olmadan backend-də. Brauzer yolu sizdən heç nə tələb etmir — bu, adi runtime-dır. Bu bölmə backend yolu haqqındadır.

### Controlunuz backend-də necə çəkilir

SCADA hostunda brauzer yoxdur. Controlunuzun şablonu, bağlantıları **və script-i** sandbox-da işləyir: içində DOM (linkedom) və brauzerin istifadə etdiyi eyni şablon-bağlantı mühərriki (`[[…]]`, `css:`, `class:`, `repeat:`) olan ayrıca JavaScript mühərriki (QuickJS). Sandbox hosta çata bilmir — `process`, `require`, şəbəkə yoxdur — yəni control hər şeyi hesablaya bilər, amma heç nəyə toxuna bilməz.

Ardıcıllıq: şablon → `bind-*` bağlantıları → sizin script (`init`, sonra `connectedCallback`) → şablonunuzun və ya script-inizin yaratdığı controllar, hər biri eyni cür çəkilir.

### Script-iniz nədən istifadə edə bilər

Hesabata lazım olan hər şeydən, qurğuya təsir edə biləcək heç nədən:

| Mövcuddur | Hesabatda davranışı |
|---|---|
| `instance._getDomElement(id)`, `_getDomElements(sel)`, `_bindingsRefresh()`, xassələriniz | brauzerdəki kimi işləyir |
| `IOB.getState`, `IOB.subscribeState`, `IOB.getObject`, `IOB.resolvePlantPaxField` | bu hesabat üçün toplanmış dəyərlərdən cavab verir; `subscribeState` bir dəfə geri çağırır |
| `IOB.secWriteState`, `IOB.setState`, `IOB.openFaceplate`, … | heç nə etmir — hesabat heç vaxt yazmır |
| `setTimeout`, `setInterval`, `requestAnimationFrame` | **bir dəfə**, dərhal işləyir — hesabat sabit şəkildir |
| `location`, `navigator`, `matchMedia`, `localStorage`, `window.addEventListener`, `print` | mövcuddur, heç nə etmir |
| `Intl`, `toLocaleString` (hesabatın dilində), `TextEncoder`, `URL`, `structuredClone`, `crypto`, `atob`/`btoa`, `getComputedStyle` (tema tokenləri), `ResizeObserver` / `IntersectionObserver` (bir dəfə geri çağırılır), `DOMParser`, … | tam siyahı: [reports.md §3](reports.md#3-the-sandbox--what-scripts-can-use) |

Teqlər script-iniz işə salınaraq tapılır: hesabatın bilmədiyi state-i oxuyursa (PlantPAx simvolları özlərinkini işləmə zamanı həll edir), mühərrik onu gətirir və yenidən çəkir. Onları elan etmirsiniz.

Bu siyahıda **olmayan** API controlunuzun hesabatda uğursuz olmasına və adlı qutu kimi görünməsinə səbəb olur — qəsdən səs-küylü, ki çatışmayan hissə səssizcə səhv çəkilmək əvəzinə görünsün.

### Controlu nə rədd etdirir

Sandbox DOM-unda **layout yoxdur**. Bunlar xətasız `0` qaytarır, ona görə onlara güvənən control səhv çəkilər və heç kim bilməzdi:

`getBoundingClientRect` · `offsetWidth/Height` · `clientWidth/Height` · `scrollWidth/Height` ·
`requestAnimationFrame` · `<canvas>` · `<iframe>`

(`ResizeObserver` və `IntersectionObserver` 1.161-dən rədd olunmur: sandbox onları elementin — yoxsa controlun — stilinin bildirdiyi ölçü ilə bir dəfə geri çağırır.)

**Paket import edən** script də rədd olunur — sandbox-da modul yükləyicisi yoxdur.

Rədd olunan control yaradılan faylda adlı yer tutucu qutu kimi çəkilir. Designer bunu hesabatı **saxlayanda** deyir: xəbərdarlıq rədd olunan hər controlu adlandırır və canvas-da onun qırmızı qırıq çərçivəsi olur. Eyni yoxlama hesabat yaradılanda yenidən işləyir.

`<iframe>` (Grafana panelləri) brauzer görünüşündə işləyir, faylda isə yer tutucudur.

### Hesabat üçün yoxlama siyahısı

1. Ölçünü CSS, faiz və ya `viewBox` ilə verin — heç vaxt ölçülmüş piksel dəyəri ilə yox.
2. Qrafik hər şey üçün SVG-yə üstünlük verin; istənilən səhifə ölçüsünə uyğunlaşır və dəqiq serializasiya olunur.
3. Dəyərləri `IOB` və ya bağlantılar vasitəsilə oxuyun; öz bağlantılarınızı açmayın.
4. Son şəklə çatmaq üçün taymerlərə və ya animasiyaya güvənməyin — onlar bir dəfə işləyir.
5. Hər şeyi controlda saxlayın; paket import etməyin.
6. Controlu hesabata qoyub saxlayın: saxlananda xəbərdarlıq onun yer tutucu olacağı deməkdir.

mywebui ilə gələn 118 controlda ölçülüb: 100-ü çəkilir, 17-si yer tutucudur (7-si layout ölçür, 6-sı paket yükləyir, 4-ünün script-i hesabatda uğursuz olur), 1-ində müəllif xətası var.

## 11. Yeni control üçün yoxlama siyahısı

1. Xassələri əsl növ və standart dəyərlərlə təyin edin — sərbəst sətir əvəzinə `enum`-a üstünlük verin.
2. Mümkün qədər çox şeyi bağlantılarla ifadə edin; `script`-i bağlantıların edə bilmədiyi işlərə saxlayın.
3. Xam `querySelector` / `addEventListener` əvəzinə `_getDomElement` / `_assignEvent` istifadə edin.
4. `disconnectedCallback`-də hər `window`/`document` dinləyicisini silin.
5. Sabit rənglər əvəzinə tema tokenlərindən istifadə edin — [theming.md](theming.md).
6. Görünən hər mətn üçün tərcümə açarları əlavə edin — [translations.md](translations.md).
7. Ağlabatan `settings.width`/`height` təyin edin ki, control ekrana istifadə oluna bilən ölçüdə düşsün.
8. Hesabatlarda işləməlidirsə, §10-a əməl edin.

## İcra xəritəsi

| Hissə | Fayl |
|---|---|
| control elementinin yaradılması, xassə accessor-ları, lifecycle | `www/dist/frontend/runtime/CustomControls.js` |
| property grid redaktoru (növlər, qruplar, `internal`) | `www/dist/frontend/config/IobrokerWebuiControlPropertiesEditor.js` |
| script modulunun yüklənməsi + `init` | `www/libs/@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js` |
| `_getDomElement`, `_getDomElements`, bağlantıların parse/yenilənməsi | `www/libs/@gokturk413/base-custom-webcomponent/dist/BaseCustomWebComponent.js` |
| `.control` fayllarının yüklənməsi/saxlanması, layihə yolları | `www/dist/frontend/common/IobrokerHandler.js` |
| platforma standartlarının yerləşdirilməsi | `src-original/backend/main.js` (`seedGlobalControls`) |
