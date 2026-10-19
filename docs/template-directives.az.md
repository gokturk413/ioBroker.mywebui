# mywebui Template Directives (şablon direktivləri)

[In English](template-directives.md)

> **Mühərrik:** `@gokturk413/base-custom-webcomponent` 0.47.0 (node-projects kitabxanasının bizim fork-u, v1.183.0-da birləşdirilib)  
> **Fayl:** `www/libs/@gokturk413/base-custom-webcomponent/dist/BaseCustomWebComponent.js`  
> **Eval:** `eval()` → `new Function()` + keş (2000 yazı)  

Direktivlər **custom control**-un HTML şablonunda işləyir, v1.155.0-dan isə birbaşa **ekran**
və ya **hesabat (report)** səhifəsində də (viewer-də və yaradılan HTML / PDF / CSV-də).  
`[[...]]` içində istənilən JavaScript ifadəsi yazmaq olar. `this` custom control instance-ı, ya
da səhifəsi olan ekran / hesabatdır (CONTROL PROP.-dakı xassələri ilə).

> **Yoxlanılıb:** bu səhifədəki hər nümunə `test/directives/directives.mjs`-də custom control
> (`tests/directives-all`), ekran (`tests/directives-screen`) və hesabat
> (`tests/directives-report`) üzərində işə salınır: brauzerdə (hər birində 57 yoxlama, kliklər
> və xassə dəyişiklikləri daxil) və yaradılan hesabat faylında (hər birində 46 statik yoxlama).
> Necə işə salmaq: `test/directives/README.md`.

> Hazır test hesabatı **history-options-demo** (layihə `default`) `history:` direktivini
> `getHistory`-nin bütün seçimləri ilə göstərir: `[[…]]` və `repeat:` cədvəlləri birbaşa hesabat
> səhifəsində.

---

## 1. Mətn / xassə bağlantısı — `[[expr]]`

Dəyəri elementin içinə yazır.

```html
<span>[[this.title]]</span>
<span>[[this.count + ' pcs']]</span>
<span>[[this.price.toFixed(2)]] €</span>

<!-- Qəsdən HTML — teqlər entity kimi yazılır: şablonun içində xam "<b>" HTML parser
     tərəfindən əsl teq kimi oxunar və [[…]]-ni pozardı -->
<div>[[ '&lt;b&gt;' + this.name + '&lt;/b&gt;' ]]</div>
```

**Mətndə `[[expr]]` HTML-dir.** Dəyər `innerHTML` ilə daxil olur: içində `<b>` və ya
`<img onerror=…>` olan dəyər markup kimi oxunur. HTML-i özünüz qurursunuzsa, bu düzdür. Kənardan
gələn hər şey üçün isə səhvdir: state-in mətni, alarm mesajı, istifadəçinin daxil etdiyi dəyər.
Bunlar üçün təhlükəsiz formalardan istifadə edin *(v1.183.0)*:

```html
<!-- text: prefiksi — textContent ilə yazılır, olduğu kimi görünür (<b> "<b>" olaraq qalır) -->
<span>[[text:this.alarmText]]</span>

<!-- bcw:text — hədəf elementin özüdür; onun məzmunu mətnə çevrilir -->
<span bcw:text="[[this.operatorNote]]"></span>

<!-- ? — null / undefined / false "null" əvəzinə boş sətir olur -->
<span>[[?this.optionalText]]</span>
<span>[[text:?this.optionalText]]</span>
```

Başqa mətnin içindəki mətn üçün `[[text:…]]`, bütün element dəyərin özüdürsə `bcw:text`
seçin.

---

## 2. Xassə bağlantısı — `propName="[[expr]]"`

Elementdə JavaScript xassəsi təyin edir.

```html
<!-- JS xassəsi (nöqtə ilə) -->
<my-chart .data="[[this.chartData]]"></my-chart>
<input .value="[[this.inputVal]]">

<!-- HTML atributu ($) -->
<div $title="[[this.tooltip]]"></div>
<input $placeholder="[[this.hint]]">

<!-- Boolean atribut (?) -->
<button ?disabled="[[this.isLoading]]">Send</button>
<input ?checked="[[this.active]]" type="checkbox">

<!-- bind-prop: (ioBroker siqnalı → xassə) -->
<my-pump bind-prop:start="0_userdata.0.pumpStatus"></my-pump>
```

---

## 3. İkitərəfli bağlantı — `=` prefiksi (`bind-prop:`)

> Bu sistemi `BindingsHelper.applyAllBindings` idarə edir —  
> `BaseCustomWebComponent` şablon sistemindən **tamamilə ayrıdır**.

```html
<!-- ioBroker siqnalına ikitərəfli: UI yazır və ioBroker-dən geri oxuyur -->
<input bind-prop:value="=0_userdata.0.setpoint" type="number">
<input bind-prop:value="=0_userdata.0.pumpCount" type="range" min="0" max="10">

<!-- Ekran xassəsinə ikitərəfli (?? prefiksi) -->
<input bind-prop:value="=??screencount" type="range" min="0" max="10">

<!-- Elementin xassəsinə ikitərəfli (## prefiksi) -->
<input bind-prop:value="=##myValue" type="number">
```

**Birtərəfli (yalnız oxuma)** — `=` prefiksi olmadan:
```html
<my-gauge bind-prop:value="0_userdata.0.sensor.temp"></my-gauge>
<div bind-prop:text-content="0_userdata.0.message"></div>
```

**Öz hadisəsi ilə ikitərəfli** — hadisənin adı verilir:
```html
<!-- value-changed hadisəsində geri yazır -->
<my-input bind-prop:value="=0_userdata.0.target::value-changed"></my-input>
```

---

## 4. CSS bağlantısı — `css:prop="[[expr]]"`

```html
<div css:color="[[this.status === 'ok' ? 'green' : 'red']]"></div>
<div css:width="[[this.progress + '%']]"></div>
<div css:background-color="[[this.theme.bg]]"></div>
```

---

## 5. Class bağlantısı — `class:name="[[expr]]"`

Class adı yazıldığı kimi istifadə olunur: `class:has-error` `has-error` class-ını açıb-söndürür.
(v1.156.0-dan əvvəl tireli ad camelCase-ə çevrilirdi, `class:has-error` `hasError`-u dəyişirdi.)

```html
<div class:active="[[this.selected]]"></div>
<div class:has-error="[[this.value < 0]]"></div>
<button class:loading="[[this.busy]]">Send</button>
```

---

## 6. Görünmə — `show="[[expr]]"` *(yeni)* / `bcw:visible="[[expr]]"`

Vue-nun `v-show`-u kimidir: elementi DOM-dan silmədən `display:none` ilə göstərir / gizlədir.

```html
<!-- Yeni — daha oxunaqlı yazılış -->
<div show="[[this.count > 0]]">
  [[this.count]] elements found
</div>

<!-- Köhnə yazılış (hələ də işləyir) -->
<div bcw:visible="[[this.isVisible]]">Content</div>
```

> **`if`-dən fərqi:** `show` elementi DOM-da saxlayır, yalnız gizlədir.  
> `if` elementi DOM-a əlavə edir və ya oradan silir.

---

## 7. Şərti göstərmə — `if="[[expr]]"` *(genişləndirilib)*

### Sadə if

```html
<template if="[[this.mode === 'advanced']]">
  <div>Advanced settings</div>
</template>
```

### if / else-if / else zənciri *(yeni)*

Vue-nun `v-if / v-else-if / v-else`-i kimidir.  
`<template>` elementləri **ardıcıl qonşu** olmalıdır: aralarında başqa element ola bilməz.

```html
<template if="[[this.status === 'running']]">
  <div class="badge green">Running</div>
</template>
<template else-if="[[this.status === 'stopped']]">
  <div class="badge red">Stopped</div>
</template>
<template else-if="[[this.status === 'fault']]">
  <div class="badge orange">Fault</div>
</template>
<template else>
  <div class="badge grey">Unknown</div>
</template>
```

```html
<!-- Daha mürəkkəb şərt -->
<template if="[[this.temp > 80]]">
  <span style="color:red">⚠ High temperature: [[this.temp]]°C</span>
</template>
<template else-if="[[this.temp > 60]]">
  <span style="color:orange">[[this.temp]]°C</span>
</template>
<template else>
  <span style="color:green">[[this.temp]]°C</span>
</template>
```

---

## 8. Switch / Case *(yeni)*

React-in `switch/case`-i və Lit-in `choose()`-u kimidir.  
`<template case>` və `<template default>` xarici `<template switch:value>`-in içinə yazılır.

```html
<template switch:v="[[this.pumpType]]">
  <template case="centrifugal">
    <img src="pump-centrifugal.svg"> Centrifugal
  </template>
  <template case="positive-displacement">
    <img src="pump-pd.svg"> Positive Displacement
  </template>
  <template case="submersible">
    <img src="pump-sub.svg"> Submersible
  </template>
  <template default>
    <span>Unknown type: [[this.pumpType]]</span>
  </template>
</template>
```

```html
<!-- Alarm səviyyəsi -->
<template switch:v="[[this.alarmLevel]]">
  <template case="0"><div class="ok">Normal</div></template>
  <template case="1"><div class="warn">Warning</div></template>
  <template case="2"><div class="crit">Critical</div></template>
  <template default><div>Level: [[this.alarmLevel]]</div></template>
</template>
```

> **Qeyd:** `switch:v`-də `v` yalnız daxili dəyişənin adıdır, istənilən ad olar (`switch:val`, `switch:x` və s.)

---

## 9. Siyahı — `repeat:item="[[array]]"`

```html
<!-- Sadə massiv -->
<template repeat:pump="[[this.pumps]]">
  <div>[[pump.name]] — [[pump.status]]</div>
</template>

<!-- İndekslə (repeat-index atributu) -->
<template repeat:item="[[this.items]]" repeat-index="i">
  <div>[[i + 1]]. [[item.label]]</div>
</template>

<!-- Yerində filter + map -->
<template repeat:alarm="[[this.alarms.filter(a => a.active).slice(0, 5)]]">
  <div class="alarm">[[alarm.tag]]: [[alarm.message]]</div>
</template>

<!-- Obyektin cütləri -->
<template repeat:entry="[[Object.entries(this.config)]]">
  <div>[[entry[0]]]: [[entry[1]]]</div>
</template>
```

### Siyahı dəyişəndə *(v1.183.0)*

`repeat:` (və `for:`) **hələ də siyahıda olan elementləri saxlayır**, yalnız yeniləri yaradır və
çıxanları silir. Element o zaman "hələ də var" sayılır ki, siyahıda eyni dəyər olsun
(`Object.is`): eyni ədəd və ya sətir, ya da **eyni obyekt**.

- Saxlanan element öz elementlərini saxlayır: fokus, scroll mövqeyi, gedən animasiya, içindəki
  controlun vəziyyəti. Onun bağlantıları yenidən hesablanır, yəni `.value="[[item]]"` yenidən
  təyin olunur.
- Element başqa mövqeyə keçəndə `repeat-index` / indeks və `{##var}` (elementin xassəsi kimi
  döngə dəyişənləri) onunla birlikdə yenilənir.
- `repeat-changed-item-callback` yalnız yeni elementlər üçün `callbackType` `create`, silinənlər
  üçün `remove` ilə çağırılır, saxlananlar üçün yox.
- Hər dəfə yeni obyektlərdən qurulan siyahıda (məsələn, hər yeniləmədə `JSON.parse(...)`)
  "eyni obyekt" olmur, ona görə bütün elementlər yenidən yaradılır. Elementlərin qalması
  lazımdırsa, obyektləri saxlayın (və ya id-lərə map edin).
- Elementin içindəki direktivlər (`if`, `switch`, `for`, `show`) onunla birlikdə silinir.
  v1.183.0-dan əvvəl daxili `if`-in yaratdığı elementlər qalırdı və xarici `for:` hər dəfə
  yenidən çəkiləndə üst-üstə yığılırdı.

---

## 10. Ədədi döngə — `for:var="[[n]]"` *(yeni)*

> v1.156.0-da düzəldilib: `[[3, 7]]` və `[[0, 100, 25]]` JavaScript-in vergül operatoru kimi
> oxunurdu (`3, 7` → `7`), ona görə aralıq həmişə 1…sonuncu idi. `<select>` içində `<option>`-ların
> `for:`-u heç nə göstərmirdi (`option.index` yalnız oxunandır). İndi hər ikisi işləyir, eləcə də
> `for:` içində `if:`, `if:` içində `for:` və iç-içə `for:` döngələri.

React-in `.map()`-i və Vue-nun `v-for="i in n"`-i kimidir. `Array.from` yazmağa ehtiyac yoxdur.

```html
<!-- 1-dən n-ə qədər (n daxil) -->
<template for:i="[[this.count]]">
  <div>Element [[i]]</div>
</template>

<!-- [başlanğıc, son] — hər iki uc daxil -->
<template for:i="[[3, 7]]">
  <div>Slot [[i]]</div>
</template>
<!-- i: 3, 4, 5, 6, 7 -->

<!-- [başlanğıc, son, addım] -->
<template for:pct="[[0, 100, 25]]">
  <option value="[[pct]]">[[pct]]%</option>
</template>
<!-- pct: 0, 25, 50, 75, 100 -->

<!-- ioBroker siqnalı ilə birlikdə -->

<!-- Üsul 1: birbaşa {##i} — for:i hər elementdə element.i təyin edir -->
<template for:i="[[this.pumpCount]]">
  <webui-controls-pumps-pump
    bind-prop:start="0_userdata.0.pump{##i}.running">
  </webui-controls-pumps-pump>
</template>

<!-- Üsul 2: .myidx ilə açıq — adı özünüz seçmək istəyəndə -->
<template for:i="[[this.pumpCount]]">
  <webui-controls-pumps-pump
    .myidx="[[i]]"
    bind-prop:start="0_userdata.0.pump{##myidx}.running">
  </webui-controls-pumps-pump>
</template>
```

---

## Yeniləmə — `_bindingsRefresh(name?)` *(v1.183.0)*

Control (və ya ekran) bağlantıları yenilədikdə onlar yenidən hesablanır:

```js
instance.setpoint = 55;
instance._bindingsRefresh('setpoint');   // yalnız this.setpoint-dən asılı ola bilənlər
instance._bindingsRefresh();             // hamısı, əvvəlki kimi
```

Ad verildikdə yalnız ifadəsi `this.setpoint`-i oxuyan bağlantılar (və ondan qurulan `repeat:` /
`for:` siyahıları) işləyir. Böyük controlda bu, xeyli az iş deməkdir. Asılılığı mətnindən
oxuna bilməyən ifadə — `this[name]`, `[[this.format(x)]]` kimi metod çağırışı və ya sadə
dəyişən — ad verilsə də, verilməsə də hər yeniləmədə işləyir, ona görə heç nə köhnə qalmır.
Əmin deyilsinizsə, `_bindingsRefresh()`-i adsız çağırın.

---

## 11. DOM istinadı — `ref:name` *(yeni)*

React-in `useRef()`-i və Vue-nun `v-ref`-i kimidir.  
`connectedCallback`-dən sonra element `this.refs.name` kimi əlçatan olur.

HTML atribut adlarını kiçik hərfə çevirir, ona görə `ref:myCanvas` `ref:mycanvas` kimi gəlir.
Adı **tire ilə** yazın: `ref:my-canvas` `refs.myCanvas` kimi (və `refs['my-canvas']` kimi)
saxlanır. (v1.156.0-da düzəldilib: əvvəl ref-lər heç təyin olunmurdu — emal edən kod yalnız
`[[…]]` dəyərlərinin oxunduğu yerdə idi, ref-in isə dəyəri yoxdur.)

```html
<canvas ref:my-canvas width="400" height="300"></canvas>
<video ref:player autoplay></video>
<input ref:search-input type="text">
```

**Script-də istifadə:**
```javascript
// Custom Control script-ində
function connectedCallback(host, shadow) {
  const ctx = host.refs.myCanvas.getContext('2d');
  ctx.fillRect(0, 0, 100, 100);

  host.refs.searchInput.focus();
}
```

---

## 12. Hadisə bağlantısı — `@event="[[expr]]"`

```html
<!-- Sadə hadisə -->
<button @click="[[this.handleClick(event)]]">Click</button>

<!-- Ox funksiyası -->
<input @input="[[this.value = event.target.value]]">

<!-- İkiqat @ — camelCase hadisə adı. Tire ilə yazılır (HTML atribut adlarını kiçik hərfə
     çevirir): @@value-changed "valueChanged" hadisəsini dinləyir -->
<my-element @@value-changed="[[this.onValueChange(event.detail)]]"></my-element>

<!-- Toxunma ilə kontekst menyusu -->
<div @touch:contextmenu="[[this.showMenu(event)]]"></div>
```

---

## 13. IndirectSignal — dinamik siqnal yolu

Xassənin dəyərini ioBroker siqnal yoluna qoymaq üçündür.  
Bu, `BindingsHelper` sisteminin hissəsidir — `BaseCustomWebComponent`-dən ayrıdır.

**`root` nədir?**  
- Birbaşa ekrana qoyulmuş elementlərdə: `root` = **ScreenViewer instance-ı**  
- Custom Control-un shadow root-undakı elementlərdə: `root` = **custom control instance-ı** (`this`)

| Prefiks | Mənası | Reaktiv? |
|---|---|---|
| `??propName` | `root[propName]` — root-un xassəsi | ✅ bəli |
| `##propName` | `element[propName]` — elementin öz xassəsi | ✅ bəli |
| `?propName` | `root[propName]` — bir dəfə oxunur | ❌ xeyr |
| `#propName` | `element[propName]` — bir dəfə oxunur | ❌ xeyr |

```html
<!-- ── Ən çox istifadə: siqnal YOLUNUN hissəsi ─────────────────────── -->

<!-- ??valveId: custom control-un valveId xassəsindən oxunur (reaktiv) -->
<!-- nəticə məsələn: "0_userdata.0.valve_3.pressure" -->
<my-gauge bind-prop:value="0_userdata.0.valve_{??valveId}.pressure"></my-gauge>

<!-- ??basePath + ??deviceId: iki dinamik hissə -->
<my-sensor bind-prop:value="??basePath{??deviceId}.temp"></my-sensor>

<!-- ── for: / repeat: içində dinamik yol ───────────────────────────── -->
<!-- for:i döngə dəyişənini element.i kimi təyin edir → {##i} birbaşa işləyir -->
<template for:i="[[this.pumpCount]]">
  <webui-controls-pumps-pump
    bind-prop:start="0_userdata.0.pump{##i}.running">
  </webui-controls-pumps-pump>
</template>

<!-- repeat: üçün element.pump = element, element.idx = indeks -->
<template repeat:pump="[[this.pumps]]" repeat-index="idx">
  <webui-pump
    bind-prop:name="0_userdata.0.{##pump}.label"
    bind-prop:pos="0_userdata.0.pump{##idx}.position">
  </webui-pump>
</template>

<!-- ── Ekran xassəsi (ScreenViewer.screencount) ───────────────────── -->
<!-- root = ScreenViewer, screencount onun xassəsidir -->
<webui-test bind-prop:count="??screencount"></webui-test>

<!-- İkitərəfli + ekran xassəsi -->
<input bind-prop:value="=??screencount" type="range" min="0" max="10">

<!-- ── Mürəkkəb nümunə ───────────────────────────────────────────────── -->
<my-valve bind-prop:state="=??basePath{??deviceId}.valve{##portNum}.open">
</my-valve>
```

---

## 14. bind-css: / bind-class: / bind-content:

```html
<!-- ioBroker siqnalı → CSS xassəsi -->
<div bind-css:background-color="0_userdata.0.statusColor"></div>

<!-- ioBroker siqnalı → CSS class açıb-söndürmə -->
<div bind-class:running="0_userdata.0.motorRunning"></div>

<!-- ioBroker siqnalı → elementin mətni -->
<div bind-content:text="0_userdata.0.statusText"></div>
```

Bağlantı prefikslərinin tam siyahısı
`www/libs/@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js`-də
(4-10-cu sətirlər) təyin olunub: `bind-prop:`, `bind-attr:`, `bind-class:`, `bind-css:`,
`bind-cssvar:`, `bind-content:`, `bind-visible:`. `bind-signal:` prefiksi yoxdur — kodda
siqnala reaksiya vermək üçün controlun `script`-indən `window.IOB.subscribeState(id, cb)` ilə
abunə olun.

---

## 15. Tarixçə — `history:` / `history-root:` / `history-var:` *(yeni)*

**Bir və ya bir neçə state-in tarixçəsini** oxuyur və sətirləri şablonun istifadə edə biləcəyi
yerə qoyur. Yuxarıdakı direktivlərdən fərqli olaraq **hər yerdə** işləyir:

| Harada | İşləyir |
|---|---|
| Ekranlar (`.screen`) | ✅ |
| Hesabatlar (`.report`) — viewer **və** yaradılan HTML / PDF / CSV | ✅ |
| Custom control-lar (şablonu) | ✅ |
| npm widget-lər — widget-in elementinə qoyun: `history:data` widget-in `data` xassəsini təyin edir | ✅ |

Sorğu history adapterinin öz **`sendTo(<instance>, 'getHistory', { id, options })`**
sorğusudur (socket-classes `sendTo`) — yaradılan hesabatın serverdə göndərdiyi eyni mesaj.

### Üç hədəf

```html
<!-- elementin xassəsi: el.rows təyin olunur (tireli addan camelCase) -->
<my-table history:rows="0_userdata.0.level"></my-table>

<!-- ekranın / hesabatın / controlun ÖZ xassəsi: ??json bağlantıları onu görür -->
<i history-root:json='{"id":"0_userdata.0.level","last":"24h"}'></i>
<span bind-content:text="??json;__0.length + ' rows'"></span>

<!-- lokal dəyişən (local_levels): local_ bağlantıları onu görür -->
<i history-var:levels='{"id":"0_userdata.0.level","last":"1h"}'></i>
<span bind-content:text="local_levels;__0.length"></span>
```

Atribut adları brauzerə kiçik hərflə çatır, ona görə xassələri tire ilə yazın:
`history:text-content` → `textContent`, `history-root:my-rows` → `myRows`.

### Dəyər: state id-si və ya JSON seçimləri

Sadə state id-si o state-i adapterin standart parametrləri ilə oxuyur. JSON tam nəzarət verir:

| Açar | Mənası |
|---|---|
| `id` | state id-si — və ya `"??prop"`: id ekranın / controlun xassəsindən oxunur (məsələn, controlun `tag` xassəsi) |
| `ids` | bir neçə state birdən: `["a.0.x", "b.0.y"]` — dəyər `{ "a.0.x": rows, "b.0.y": rows }` olur (hər state üçün bir `sendTo`, paralel: `getHistory` bir id qəbul edir) |
| `last` | indi bitən pəncərə: `"30m"`, `"24h"`, `"7d"`, `"2w"` və ya ms |
| `start` / `end` | mütləq pəncərə (ms və ya tarix sətri) — `last`-dan üstündür |
| `instance` | `history.0`, `sql.0`, `influxdb.0` … — aşağıda *Hansı instance* bölməsinə baxın |
| `aggregate`, `step`, `count`, `limit`, `ignoreNull`, `round`, … | history adapterinə dəyişmədən ötürülür (ioBroker `GetHistoryOptions`) |
| `expression` | sətirləri təyin olunmadan əvvəl yenidən formalaşdırır: `__0` = sətirlər (və ya `{ id: rows }` obyekti); `this` / `__ctx.root` = ekran / control |
| `reload` | hər N saniyədən bir yenidən oxuyur (brauzer) |
| `query` | **History Query qurucusunun** modeli (1.161) — qurucunun direktivi yenidən açması üçün saxlanır; history adapterinə heç vaxt göndərilmir |

```html
<!-- yalnız dəyərlər, son 7 gün, saatlıq ortalamalar -->
<i history-root:levels='{"id":"0_userdata.0.level","last":"7d","aggregate":"average","step":3600000,
    "expression":"return __0.map(r => r.val)"}'></i>

<!-- `tag` xassəsi state-in adını verən control -->
<span history:text-content='{"id":"??tag","last":"24h","expression":"return __0.length + \" rows\""}'></span>

<!-- yan-yana iki axın -->
<i history-root:flows='{"ids":["opcua.0.flow1","opcua.0.flow2"],"last":"24h"}'></i>
```

Designer-in atribut redaktorunda JSON-u olduğu kimi yazın; HTML-də saxlananda dırnaqları
`&quot;` olur, bu gözləniləndir.

> **Menyulardan qurun.** *History Query* pəncərəsi bu direktivi sizin üçün yazır — state-lər,
> getHistory seçimləri, bir neçə state-i vaxta görə birləşdirmə, `expression`-a çevrilən LINQ-bənzər
> addımlar (Where, Group by, Order by, Take …) və səhifədə Table / List / KPI görünüşü. Baxın:
> [reports.md §4](reports.md#4-history-query-builder).

### Hansı instance

1. Seçimlərdə verilibsə, `instance`.
2. Əks halda **sistemin standart history-si** (System settings) — **əgər bu state-i yazırsa**.
3. Əks halda custom parametrləri state-i yazan ilk `history.N` / `sql.N` / `influxdb.N`.

Dayanmış instance dərhal bildirilir ("history adapter influxdb.0 is not running"), onu gözləmək
olmur.

### Sətirlər

`[{ val, ts, ack?, from?, q? }, …]` — ioBroker-in `getHistory`-sinin qaytardığının eynisi.

### Hesabatlarda

- Hesabatın **vaxt aralığı** (aralıq seçicisi və ya *Time range from states*) tarixi bağlantılarda
  olduğu kimi direktivin öz pəncərəsindən üstündür.
- Yaradılan fayl tarixçəni serverdə eyni sorğu ilə oxuyur; `expression` QuickJS sandbox-unda
  işləyir (heç vaxt Node-da yox). 10 000-dən çox sətir və ya cavab verməyən instance işi
  dayandırır və state-in adını göstərir.
- Yaradılan faylda direktivlər bağlantılardan **əvvəl** işləyir, ona görə `??json` / `local_x`
  bağlantıları məlumatı görür. Brauzerdə məlumat bir az sonra gəlir və bağlantılar yenilənir.
- Faylda sadə HTML elementi yalnız mətnini göstərir (`history:text-content`, sətirlər üçün JSON
  mətni kimi təyin olunur); başqa xassəyə təyin olunan massiv yalnız işləyən kod üçün məna daşıyır.

### İşlənmiş nümunələr — direktivdən şablonunuza

1–5 nümunələri canlı sistemdə işə salınıb (ekran viewer-i, hesabat viewer-i və yaradılan hesabat).
`0_userdata.0.level` state-i yazılan istənilən state-i təmsil edir.

**Dəyər necə gedir.** Direktiv `sendTo('<instance>', 'getHistory', { id, options })` çağırır və
`[{ val, ts }, …]` sətirlərini alır. İstəyə görə `expression` onları yenidən formalaşdırır.
Sonra nəticə **təyin olunur**:

| Direktiv | Təyin olunur | Şablonda belə oxuyun |
|---|---|---|
| `history:rows` | `element.rows` | elementin özü (widget, control instance-ı) |
| `history-root:rows` | ekranın / hesabatın / controlun `this.rows`-u | `[[this.rows]]`, `repeat:x="[[this.rows]]"`, `bind-…="??rows"`, script-lərdə `this.rows` |
| `history-var:rows` | lokal dəyişən `local_rows` | `bind-…="local_rows"` |

Bağlanması üçün xassə mövcud olmalıdır: onu **CONTROL PROP.**-a əlavə edin (növü `object` və ya
`string` — dəyər olduğu kimi, massiv və ya obyekt kimi təyin olunur).

#### 1. Custom control: tarixçə cədvəli

Xassələr: `tag` (string — state id-si, kənardan təyin olunur), `rows` (object).

```html
<!-- 1. `tag` xassəsinin adlandırdığı state-in tarixçəsini this.rows-a oxu -->
<i history-root:rows='{"id":"??tag","last":"7d","aggregate":"none",
                       "expression":"return __0.filter(r => r.val != null)"}'></i>

<!-- 2. this.rows-u istənilən xassə kimi istifadə et -->
<div>[[(this.rows || []).length]] rows</div>
<table>
  <tbody>
    <template repeat:row="[[this.rows || []]]" repeat-index="i">
      <tr>
        <td>[[i + 1]]</td>
        <td>[[new Date(row.ts).toLocaleTimeString()]]</td>
        <td>[[row.val]]</td>
      </tr>
    </template>
  </tbody>
</table>
```

Ekranda və ya hesabatda: `<webui-my-history-table tag="0_userdata.0.level"></webui-my-history-table>`.
Eyni markup **birbaşa ekran / hesabat səhifəsində** də işləyir (`??tag` əvəzinə `"id"`-də state,
`rows` isə ekranın / hesabatın xassəsi kimi əlavə olunur).
`<table>`-a səhifədəki hər element kimi mövqe verin (`position:absolute; left:…; top:…`), yoxsa
səhifənin yuxarısında başqalarının üzərində çəkilər.
`this.rows` təyin olunanda `[[…]]` bağlantıları və `repeat:` sətirləri özləri yenidən çəkilir.
Yaradılan hesabatda eyni şablon serverdə çəkilir (script lazım deyil).

#### 2. Ekran və ya hesabat: xassəyə, bağlantılarla göstərilir

Ekran / hesabat xassəsi: `levels` (object).

```html
<i history-root:levels='{"id":"0_userdata.0.level","last":"24h",
                         "expression":"return __0.map(r => r.val)"}'></i>

<span bind-content:text="??levels;Array.isArray(__0) ? 'max ' + Math.max(...__0) : '…'"></span>
<span bind-content:text="??levels;Array.isArray(__0) ? __0.length + ' values' : ''"></span>
```

#### 3. Lokal dəyişənə (xassə lazım deyil)

```html
<i history-var:levels='{"id":"0_userdata.0.level","last":"1h"}'></i>
<span bind-content:text="local_levels;Array.isArray(__0) ? __0.length + ' rows' : '-'"></span>
```

#### 4. Birbaşa npm widget-in xassəsinə

```html
<!-- son dəyər Shoelace progress ring-ə -->
<sl-progress-ring history:value='{"id":"0_userdata.0.level","last":"1h",
                                  "expression":"return __0[__0.length - 1].val"}'></sl-progress-ring>

<!-- sətirlər qrafik widget-inin məlumatı kimi -->
<my-chart history:data='{"id":"0_userdata.0.level","last":"24h",
                         "expression":"return __0.map(r => ({ x: r.ts, y: r.val }))"}'></my-chart>
```

#### 5. Bir direktivdə bir neçə state

```html
<i history-root:flows='{"ids":["opcua.0.flow1","opcua.0.flow2"],"last":"24h"}'></i>
<!-- this.flows = { "opcua.0.flow1": rows, "opcua.0.flow2": rows } -->
<span bind-content:text="??flows;__0 ? Object.entries(__0).map(([k, v]) => k + ': ' + v.length).join(' | ') : ''"></span>
```

#### 6. Eyni anda başqa xassələri təyin etmək

`expression` `this` = ekran / control ilə işləyir, ona görə bir oxumadan bir neçə xassə doldura
bilər. Qaytardığı dəyər direktivin öz hədəfinə gedir:

```html
<i history-root:rows='{"id":"??tag","last":"24h",
   "expression":"const v = __0.map(r => r.val); this.minVal = Math.min(...v); this.maxVal = Math.max(...v); return __0"}'></i>
<span>[[this.minVal]] … [[this.maxVal]]</span>
```

Eyni şey **bağlantı düsturunda** da işləyir (binding redaktoru → formula), orada da `this`
ekran / controldur:

```js
this.json = __0;                       // ekranın / controlun json xassəsi
return JSON.stringify(__0, null, 2);   // bu elementin göstərdiyi
```

#### 7. Controlun script-ində

```js
export function connectedCallback(instance, shadowRoot) {
    // hər oxumadan (və hər `reload`-dan) sonra
    shadowRoot.addEventListener('history-loaded', e => {
        const { prop, value } = e.detail;        // prop === 'rows', value === instance.rows
        console.log(prop, value.length);
    }, true);
}
```

#### 8. Yeniləmə

`"reload": 60` brauzerdə hər 60 saniyədən bir yenidən oxuyur. Hesabatın vaxt aralığı (aralıq
seçicisi və ya *Time range from states*) hesabatdakı hər direktiv üçün `last` / `start` / `end`-i
əvəz edir.

#### Dəyəri designer-də yazmaq

Atribut redaktorunda JSON-u göstərildiyi kimi yazın (atribut tək dırnaqda, JSON qoşa dırnaqda).
HTML-də saxlananda dırnaqları `&quot;` olur — bu gözləniləndir və eyni cür geri oxunur.

### Hadisələr

Hər oxumadan sonra element `detail: { prop, target, value }` ilə `history-loaded` hadisəsini
göndərir.

---

## Direktivlər cədvəli

| Direktiv | Növ | Framework qarşılığı | Qeyd |
|---|---|---|---|
| `[[expr]]` | Mətn bağlantısı | React `{expr}` | İstənilən JS ifadəsi; HTML kimi daxil olur |
| `[[text:expr]]` ⭐ | Təhlükəsiz mətn | React `{expr}` | `textContent`, olduğu kimi görünür |
| `bcw:text="[[]]"` ⭐ | Təhlükəsiz mətn | Vue `v-text` | elementin məzmunu mətn kimi |
| `[[?expr]]` | Mətn bağlantısı | — | null/undefined → boş |
| `prop="[[expr]]"` | Xassə | Vue `:prop` | JS xassəsi təyin edir |
| `$attr="[[expr]]"` | Atribut | Vue `v-bind:attr` | `setAttribute` |
| `?attr="[[expr]]"` | Boolean atribut | Vue `v-bind:attr` | var/yox |
| `="signal"` prefiksi | İkitərəfli | Vue `v-model` | ioBroker ↔ UI |
| `css:prop="[[]]"` | CSS | Vue `:style` | inline CSS |
| `class:name="[[]]"` | CSS class | Vue `:class` | class açıb-söndürür |
| `show="[[]]"` ⭐ | Görünmə | Vue `v-show` | display:none |
| `bcw:visible="[[]]"` | Görünmə | Vue `v-show` | köhnə yazılış |
| `if="[[]]"` | Şərt | Vue `v-if` | DOM əlavə edir / silir |
| `else-if="[[]]"` ⭐ | Şərt | Vue `v-else-if` | `if`-dən sonra |
| `else` ⭐ | Şərt | Vue `v-else` | `if`/`else-if`-dən sonra |
| `switch:v="[[]]"` ⭐ | Switch | Lit `choose()` | `case`/`default` |
| `repeat:x="[[arr]]"` | Döngə | Vue `v-for` | massiv döngəsi |
| `for:i="[[n]]"` ⭐ | Ədədi döngə | Vue `v-for="i in n"` | aralıq yaradır |
| `ref:name` ⭐ | DOM istinadı | React `useRef` | `this.refs.name` |
| `@event="[[]]"` | Hadisə | Vue `@event` | addEventListener |
| `@@event="[[]]"` | Hadisə (camel) | — | camelCase hadisə |
| `bind-prop:p="signal"` | ioBroker→xassə | — | siqnala abunə |
| `bind-attr:a="signal"` | ioBroker→atribut | — | `setAttribute` |
| `bind-css:p="signal"` | ioBroker→CSS | — | siqnaldan CSS |
| `bind-cssvar:v="signal"` | ioBroker→CSS dəyişəni | — | `setProperty('--v')`, əvvəlində `--` olmadan |
| `bind-class:c="signal"` | ioBroker→class | — | siqnaldan class |
| `bind-content:text="signal"` | ioBroker→məzmun | — | mətn |
| `bind-visible:="signal"` | ioBroker→görünmə | — | `visibility: collapse` |
| `history:p="id \| {json}"` ⭐ | tarixçə→elementin xassəsi | — | `sendTo(instance,'getHistory')` — ekranlar, hesabatlar, control-lar, npm widget-lər |
| `history-root:p="…"` ⭐ | tarixçə→ekranın/controlun xassəsi | — | `??p` bağlantıları görür |
| `history-var:v="…"` ⭐ | tarixçə→lokal dəyişən | — | `local_v` bağlantıları görür |

> ⭐ = bu versiyada yeni əlavə olunan direktivlər

---

## eval() → new Function() dəyişikliyi

| | Köhnə (`eval`) | Yeni (`new Function`) |
|---|---|---|
| Görünmə sahəsi | lokal sahəyə çıxış var | təcrid olunub |
| Sürət | hər dəfə şərh olunur | kompilyasiya + keş |
| CSP | `unsafe-eval` lazımdır | `unsafe-eval` lazımdır |
| Debug | çətin | daha aydın stack trace |
| Keş | yoxdur | 2000 yazı |

Tam CSP təhlükəsizliyi üçün gələcəkdə `@nyariv/sandboxjs`-in inteqrasiyası planlaşdırılır  
(eval/Function istifadə etmir; whitelist əsaslı JS interpretatorudur).
