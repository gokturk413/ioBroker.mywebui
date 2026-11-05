# Simple Script

Simple Script hadisə baş verəndə — klik, dəyərin dəyişməsi, ekranın açılması — işləyən
əmrlər siyahısıdır. Onu kod yazmadan, menyulardan qurursan. Bloklarla məntiq üçün Blockly,
qalan hər şey üçün JavaScript var; üçü də eyni hadisədə yan-yana durur.

English: [simple-script.md](simple-script.md)

## 1. Skripti hadisəyə bağlamaq

1. Elementi seç (ekranın özü üçün kətanın boş yerinə klik et).
2. **Events** pəncərəsini aç. Hər hadisənin qarşısında kiçik kvadrat var:

   | Kvadrat | Hadisə nəyi işlədir |
   |---|---|
   | yaşıl | Simple Script |
   | sarı | Blockly skripti |
   | bənövşəyi | ekran skriptinin JavaScript funksiyası |
   | çəhrayı | hələ heç nə |

3. Hadisənin adına klik et → **Simple Script**. Redaktor açılır.
4. Siyahıda yoxdursa, hadisənin adını *add event* xanasına yaz (məs. `dblclick`, `wheel`,
   `pointerdown`) və Enter bas.

Təyin olunmuş hadisənin sətrində *relative signals path* (`.` ilə başlayan hər siqnalın
önünə qoyulur) və **p** (skriptə ötürülən parametrlər; *parameter* mənbəyi ilə oxunur) da var.

## 2. Redaktor

- **Add Command** — əmr seçicisi: bütün əmrlər qruplarla, qısa izahla. Əmri siyahıya
  sürüklə və ya iki dəfə klik et.
- Soldakı siyahı **yuxarıdan aşağı** işləyir. Yerini dəyişmək üçün tutacaqdan sürüklə və
  ya əmri iki əmrin arasına burax.
- Sağdakı cədvəl seçilmiş əmri redaktə edir.
- **Code** skripti JSON kimi göstərir (kopyala, yapışdır, əllə dəyiş); **Visual** geri qaytarır.
- **?** köməyi açır.

Rədd olunan əmr (hüquq yoxdur, bax §5) skripti dayandırır: ondan sonrakı əmrlər işləmir.

## 3. Dəyərlər: sabit və ya haradansa götürülən

Hər sahədə sabit dəyər ola bilər və ya — qarşısındakı **…** düyməsi, yaxud sağ klik
menyusunda *edit complex value* ilə — əmr işləyəndə oxunan dəyər:

| Mənbə | Dəyər |
|---|---|
| `signal` | state-in dəyəri (`0_userdata.0.level`) |
| `property` | skriptin aid olduğu custom control-un xüsusiyyəti (ekranlarda yox) |
| `elementProperty` | hadisəni yaradan elementin xüsusiyyəti |
| `signalInProperty` | adı xüsusiyyətdə saxlanan state-in dəyəri |
| `event` | hadisə obyektinin xüsusiyyəti (`detail.value`, `key`, `clientX`) |
| `parameter` | hadisə sətrinin parametri (**p**) |
| `context` | skript kontekstinin dəyəri |
| `complexString` | fiqurlu mötərizədə state dəyərləri olan mətn: `Səviyyə {0_userdata.0.level} %` |
| `complexSignal` | adı başqa dəyərlərdən qurulan state: `pump{0_userdata.0.nr}.run` |
| `expression` | JavaScript ifadəsi; `ctx` kontekst obyektidir |

`.` ilə başlayan siqnallar nisbidir: önünə ekranın və ya hadisə sətrinin relative signals
path-i qoyulur.

`signalTarget` (*signal* əmrlərində) nəyin yazılacağını seçir: `signal` (state, standart),
`property` (ekranın / control-un xüsusiyyəti) və ya `elementProperty` (hadisəni yaradan
elementin xüsusiyyəti).

## 4. Əmrlər

### State-lər

| Əmr | Nə edir | Sahələr |
|---|---|---|
| Set signal value | dəyər yazır | signal, value, target |
| Toggle signal value | true ↔ false | signal, target |
| Toggle signal value through list | siyahının növbəti dəyəri (Off → Auto → On → Off) | signal, valueList, target |
| Increment signal value | ədəd əlavə edir | signal, value, target |
| Decrement signal value | ədəd çıxır | signal, value, target |
| Set bit / Clear bit / Toggle bit in signal | tam ədədin bir biti (0 = ən kiçik) | signal, bitNumber, target |
| Calculate signal value | düsturun nəticəsini yazır: `{adapter.0.level} * 100 + 30` | formula, targetSignal, target |
| Subscribe signal / Unsubscribe signal | state-ə abunə saxlayır (məs. `oneTime` oxumaq üçün) | signal, oneTime |
| Write signals in group / Clear signals in group | qrupda saxlanılan dəyərləri yazır və ya atır (bir neçə sahəni dəyiş, sonra birlikdə yaz) | group |
| Copy signal values from folder | bir qovluğun bütün dəyərlərini digərinə köçürür (reseptlər) | sourceFolder, destinationFolder |
| Export / Import signal values as JSON | uyğun state-ləri fayla yazır və ya geri yazır | regex, fileName, waitForUpdatedValues / data |

### Ekranlar və pəncərələr

| Əmr | Nə edir | Sahələr |
|---|---|---|
| Open screen | ekran açır — siyahıda ekranlar, **hesabatlar** və **3D ekranlar** var | screen, noHistory, relativeSignalsPath |
| Open dialog | ekranı pəncərədə açır | screen, title, width, height, left, top, moveable, closeable, cssClass, relativeSignalsPath |
| Close dialog | elementin olduğu pəncərəni bağlayır | — |
| Open screen in screen viewer | cari ekrandakı screen viewer-ə ekran yükləyir | screen, targetSelector, relativeSignalsPath |
| Open 3D screen | 3D ekran açır | screen |
| Navigate back | əvvəlki ekran | — |
| Open URL | veb səhifə, yeni tabda və ya dialoqda | url, target, openInDialog |
| Show message box | düymələri olan mesaj; basılan düymənin nömrəsi (1-dən) `resultSignal`-a yazılır | title, message, messageType, buttons, resultSignal, width, height |
| Show notice | küncdə qısa bildiriş (info, ok, warn, error) | title, text, kind |

*Open screen*-də hesabat `report:ad`, 3D ekran `3dscreen:ad` kimi saxlanır; sadə ad ekrandır.

### Faceplate, hesabat, görünüş

| Əmr | Nə edir | Sahələr |
|---|---|---|
| Open faceplate / Close faceplate | UDT nüsxəsinin faceplate-i (`P_AIn` və state-lərinin kökü) | type, root |
| Open report | hesabatı hesabat pəncərəsində açır | report |
| Generate report | html / pdf / csv yaradıb yükləyir | report, format |
| Set theme | dark, light, purple, teal, contrast və ya Global Style teması | theme |
| Switch language | runtime dili (`az`, `en`, `ru`, `de`, `tr`) | language |

### Animasiya və effektlər

| Əmr | Nə edir | Sahələr |
|---|---|---|
| Control animation | elementin animasiyalarını oynadır, saxlayır, davam etdirir, dayandırır, yenidən başladır, tərsinə oynadır (Animations pəncərəsi) | target, action, index |
| Animate | elementə animasiya verib başladır (məs. qarışdırıcı üçün `rotateAxisY`) | target, effect, from, to, duration, repeat, yoyo, ease |
| Control effects | elementin effektlərini yenidən oynadır və ya dayandırır (Effects pəncərəsi) | target, action |

`target` — hadisəni yaradan elementin ekranında CSS seçici (`#agitator1`, `.pump`); boş =
həmin element. `index` elementin bir animasiyasını seçir (0 = birinci); boş = hamısı.
Animasiya və effekt tipləri: [bindings.md §6–7](bindings.md#6-animations-panel-bindings).

### Elementlər

| Əmr | Nə edir | Sahələr |
|---|---|---|
| Set element property | elementlərdə xüsusiyyət, atribut, css dəyəri və ya class təyin edir | target (property / attribute / css / class), name, value, mode (class: add / remove / toggle), targetSelector, targetSelectorTarget (element / container), parentIndex |

`targetSelector` — CSS seçici; elementdən (və ya container-dən — onu əhatə edən ekran və
ya control, `parentIndex` qədər yuxarı) axtarılır; boş = elementin özü.

### İstifadəçilər

| Əmr | Nə edir | Sahələr |
|---|---|---|
| Login | istifadəçini daxil edir | username, password |
| Logout | çıxış | — |

### Axın

| Əmr | Nə edir | Sahələr |
|---|---|---|
| Condition | value1 ilə value2-ni müqayisə edir (`==`, `!=`, `<`, `<=`, `>`, `>=`, `&&`, `\|\|`, `==true`, `==false`, `==null`, `!=null`); true / false üçün label-ə keçir — label yoxdursa, növbəti əmrlə davam edir | value1, comparisonType, value2, trueGotoLabel, falseGotoLabel |
| Label | keçid yeri | label |
| Goto | label-ə keçir | label |
| Exit | skripti bitirir | — |
| Delay | gözləyir (millisaniyə) | value |
| Run script | *hələ yazılmayıb* — heç nə etmir (Condition-un true/false skript sahələri də) | name, scriptType |
| Javascript | JavaScript parçası; `context.event`, `context.element`, `context.shadowRoot`, `context.instance` var | script |
| Console | brauzer konsoluna yazır (log, info, warn, error, debug) | message, target |
| Comment | heç nə etmir — siyahıda qeyd | comment |

## 5. Skript nə edə bilər

Skript istifadəçinin əl ilə edə biləcəyindən artığını edə bilməz. Hər əmrdən əvvəl:

1. **Təhlükəsizlik modeli** (Security pəncərəsi) — elementdə `data-action` varsa (Area
   pəncərəsi), istifadəçinin rolu elementin sahəsində bu action-a icazə verməlidir.
2. **Screen Access** — *Open screen*, *Open dialog*, *Open screen in screen viewer*,
   *Open 3D screen* və hesabat əmrləri serverdən soruşur: istifadəçi bunu aça bilərmi.
3. **ioBroker hüquqları** — state yazıb-oxumaq istifadəçi qrupunun və state-in öz
   hüquqlarından keçir; **Confirm & Protect** qorunan yazıdan əvvəl yenə soruşur
   ([confirm-protect.md](confirm-protect.md)).

Rədd olunan əmr heç nə etmir, istifadəçinin dilində bildiriş göstərir və **skripti
bitirir**. Ətraflı: [script-functions.az.md](script-functions.az.md) ·
[permissions.md](permissions.md).

## 6. Nümunələr

Nasosu işə sal, gözlə, ekranını aç:

```json
{ "commands": [
  { "type": "SetSignalValue", "signal": "0_userdata.0.pump1.start", "value": true },
  { "type": "Delay", "value": 500 },
  { "type": "OpenScreen", "screen": "pumps/pump1" }
] }
```

Əvvəl soruş, yalnız "Yes" (1-ci düymə) olanda et:

```json
{ "commands": [
  { "type": "ShowMessageBox", "title": "Stop", "message": "Xətt dayandırılsın?", "buttons": "yesNo", "resultSignal": "0_userdata.0.ui.answer" },
  { "type": "Condition", "value1": { "source": "signal", "name": "0_userdata.0.ui.answer" }, "comparisonType": "==", "value2": 1, "falseGotoLabel": "end" },
  { "type": "SetSignalValue", "signal": "0_userdata.0.line.stop", "value": true },
  { "type": "Label", "label": "end" }
] }
```

Qarışdırıcı: motor işləyəndə fırlanmağa başla, yoxsa dayandır (motor state-inin dəyişməsində):

```json
{ "commands": [
  { "type": "Condition", "value1": { "source": "signal", "name": "0_userdata.0.mixer.run" }, "comparisonType": "==true", "falseGotoLabel": "off" },
  { "type": "Animate", "target": "#agitator1", "effect": "rotateAxisY", "duration": 1.5 },
  { "type": "Exit" },
  { "type": "Label", "label": "off" },
  { "type": "ControlAnimation", "target": "#agitator1", "action": "stop" }
] }
```

Günlük hesabatı aç:

```json
{ "commands": [ { "type": "OpenScreen", "screen": "report:demo_daily" } ] }
```

## 7. Blockly və JavaScript

Eyni mywebui əmrləri Blockly blokları (**mywebui** kateqoriyası) və JavaScript
funksiyalarıdır (`await IOB.api.openScreen({ screen: 'report:demo_daily' })`), eyni cür
yoxlanılır — [script-functions.az.md](script-functions.az.md).
