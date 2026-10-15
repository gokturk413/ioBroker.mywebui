# Skript funksiyaları

mywebui-nin imkanları skriptlərə **funksiya** kimi verilir. Bir siyahı üç yeri qidalandırır:

- **Simple Script** — *Add Command* onları hazır əmrlərin yanında göstərir;
- **Blockly** — **mywebui** kateqoriyasında hər funksiya üçün bir blok var;
- **JavaScript** — `await IOB.api.<ad>({ … })` və ya `await IOB.api.run('<ad>', { … })`.

English: [script-functions.md](script-functions.md)

## Hər çağırış əvvəlcə yoxlanır

Skript istifadəçinin əl ilə edə biləcəyindən artığını edə bilməz. Funksiya və ya Simple Script əmri icra olunmazdan əvvəl:

1. **Təhlükəsizlik modeli** (Security pəncərəsi) — hadisəni yaradan elementdə `data-action` varsa (Area pəncərəsi), `secCan(action, element)` istifadəçinin roluna və elementin sahəsinə icazə verməlidir.
2. **Screen Access** — *Open screen*, *Open dialog*, *Open screen in viewer* və hesabat funksiyaları serverdən soruşur: istifadəçi bu ekranı və ya hesabatı aça bilərmi.
3. **ioBroker hüquqları** — state oxuma və yazma `IOB.getState` / `IOB.setState`-dən keçir: istifadəçi qrupunun hüquqları və nöqtənin giriş hüquqları; Confirm & Protect yazmazdan əvvəl yenə soruşur.

Rədd olunan addım **heç nə etmir**, istifadəçinin dilində (az, en, ru, de, tr) bildiriş göstərir və **skripti dayandırır**. JavaScript çağırışı `{ denied: true, reason }` qaytarır.

Brauzerdəki yoxlama istifadəçini istiqamətləndirir; divarlar serverdə qalır: state-lər üçün ioBroker sessiya hüquqları, ekran və hesabatlar üçün `checkScreenAccess`, qorunan yazılar üçün `secWriteState` ([permissions.md](permissions.md)).

## Funksiyalar

| Funksiya | Simple Script əmri | Blockly | Nə edir | Yoxlama |
|---|---|---|---|---|
| `setState({ id, value })` | *Set signal value* (hazır) | set state | state yazır | ioBroker hüquqları, Confirm & Protect |
| `getState({ id })` | — | get state (dəyər) | state-in dəyərini oxuyur | oxuma hüququ |
| `toggleState({ id })` | *Toggle signal value* (hazır) | toggle state | boolean state-i tərsinə çevirir | oxuma + yazma hüququ |
| `openScreen({ screen, noHistory?, relativeSignalsPath? })` | *Open screen* (hazır) | open screen | ekran açır | Screen Access |
| `openDialog({ screen, title?, width?, height? })` | *Open dialog* (hazır) | open dialog | ekranı dialoqda açır | Screen Access |
| `navigateBack()` | Navigate back | navigate back | əvvəlki ekran | — |
| `openFaceplate({ type, root })` | Open faceplate | open faceplate | UDT nüsxəsinin faceplate-ini açır (`P_AIn`, state-lərinin kökü) | state-lərinin oxuma hüququ |
| `closeFaceplate()` | Close faceplate | close faceplate | bağlayır | — |
| `openReport({ report })` | Open report | open report | hesabatı hesabat pəncərəsində açır | Screen Access (hesabat) |
| `generateReport({ report, format })` | Generate report | generate report | html / pdf / csv yaradıb yükləyir | Screen Access (hesabat), serverin hesabat qaydaları |
| `setTheme({ theme })` | Set theme | set theme | dark, light, purple, teal, contrast və ya Global Style temaları | — |
| `showNotice({ title, text?, kind? })` | Show notice | show notice | küncdə bildiriş (info, ok, warn, error) | — |
| `controlAnimation({ target?, action, index? })` | Control animation | control animation | elementin animasiyalarını oynadır, saxlayır, davam etdirir, dayandırır, yenidən başladır, tərsinə oynadır (Animations) | — |
| `animate({ target?, effect, from?, to?, duration?, repeat?, yoyo?, ease? })` | Animate | animate | elementə animasiya verib başladır — məs. qarışdırıcı üçün `rotateAxisY` | — |
| `controlEffects({ target?, action })` | Control effects | control effects | elementin effektlərini yenidən oynadır və ya dayandırır (Effects) | — |
| `can({ action })` | — | can (dəyər) | istifadəçi burada bu action-u edə bilərmi? (sualdır, özü yoxlanmır) | — |

`target` — CSS seçici (məs. `#agitator1`), hadisəni yaradan elementin ekranında axtarılır; boş qalsa, həmin elementin özü.

Hər funksiya 1-ci addımın təhlükəsizlik modeli yoxlamasından da keçir.

## Nümunələr

Ekran skriptində JavaScript:

```js
export async function openDetails(event) {
    const r = await IOB.api.openScreen({ screen: 'pumps/detail' });
    if (r?.denied) console.log('icazə yoxdur:', r.reason);
}
```

Yalnız rol icazə verəndə:

```js
if (await IOB.api.can({ action: 'setpointOverride' }))
    await IOB.api.setState({ id: '0_userdata.0.sp', value: 55 });
```

## Funksiya əlavə etmək (tərtibatçılar üçün)

`www/dist/frontend/common/ScriptApi.js`:

```js
scriptApi.define({
    name: 'myThing', group: 'View', command: 'MyThing',        // command: həm də Simple Script əmri
    description: 'Nə edir',
    params: { screen: { type: 'string', format: 'screen', required: true } },
    check: ({ screen }, ctx, api) => api.screenCheck(screen),  // istəyə bağlı
    run: ({ screen }, ctx) => { /* … */ },
});
```

Simple Script əmri, Blockly bloku və `IOB.api.myThing()` bu yazıdan yaranır. Yeni imkan öz yazısını eyni dəyişiklikdə əlavə edir.
