# Server Scripts (server scriptləri)

Serverdə (`mywebui.0` adapterində) daim işləyən JavaScript — brauzer açıq olsun-olmasın. Script state dəyişikliklərinə reaksiya verir, state və obyektləri oxuyub yazır, cədvəllə işləyir, digər adapterlərə mesaj göndərir və hesabat yaradır.

## Kim yaza bilər

- Server Scripts-i yalnız **administratorlar** açıb saxlaya bilər. Hər çağırış web gateway-dən keçir və serverdə yoxlanılır; Server Scripts üçün web autentifikasiyası açıq olmalıdır (web.0 → Authentication).
- Script **mywebui.0 adapterinin hüququ ilə** işləyir. Buna görə server yalnız administratorun yazdığı script fayllarını işə salır: faylını admin olmayan biri yaza bilərdisə, script (shared modul, kitabxana) işə düşmür və statusunda səbəbi yazılır („designer-dən yenidən saxlayın").
- Hər saxlama, başlama, dayanma və xəta [Jurnala](journal.az.md) düşür.

## Harada işləyir

Hər script öz sandbox-unda işləyir (QuickJS, ayrıca worker). Node-a, diskə, şəbəkəyə və digər proseslərə çıxışı yoxdur — yalnız aşağıdakı API. Sonsuz dövrə və ya yaddaşın dolması yalnız həmin scripti dayandırır; adapter işləməyə davam edir.

## Script yaratmaq

1. Designer → Solution Explorer → **Server Scripts** (iki klik).
2. **+ Script** → ad, qovluqlar `/` ilə (məs. `process/pump1`).
3. Kodu yazın, **Enabled** işarələyin (adapterlə birlikdə başlayır), **Save**.
4. **Run / Stop / Restart**. **Log** tabı nəticəni, **Subscriptions & timers** scriptin nəyə qulaq asdığını, **API** arayışı göstərir.

**Insert state id** ioBroker obyekt brauzerini açır və id-ni kursorun yerinə qoyur.

## API

| Çağırış | Nə edir |
|---|---|
| `on(id \| pattern \| {id, change, ack, val}, cb)` | Abunə; `cb(state, id, old)`. `change`: `ne` (standart, dəyər dəyişdi), `any`, `gt`, `lt`, `eq`. `*` ilə pattern. `subscribe` eynidir. |
| `unsubscribe(handle)` | Bir abunəni dayandırır |
| `getState(id)` | `{ val, ack, ts, lc, q, from, user }` və ya `null` |
| `getStates(pattern)` | `{ [id]: state }` |
| `setState(id, val, { ack })` | Yazır. `ack: false` (standart) — sürücünün təsdiqlədiyi əmr |
| `setStateChanged(id, val, opts)` | Yalnız dəyər fərqli olanda yazır |
| `getObject(id)`, `getObjects(pattern)` | Obyektləri oxuyur |
| `createState(id, common, initial)` | Yalnız `0_userdata.0.` və `mywebui.0.scripts.<layihə>.` altında |
| `schedule(cron, cb)` | Cron `dəq saat gün ay həftəgünü`, qurğunun saat qurşağı |
| `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `clearSchedule` | Taymerlər — script dayananda hamısı silinir |
| `sendTo(instance, command, message)` | Başqa adapterə mesaj (email, telegram, sql …); 30 s ərzində cavab |
| `http.get(url)`, `http.post(url, body)` | Yalnız Settings → Server Scripts → Allowed hosts-dakı ünvanlara (boşdursa söndürülüb). 10 s, 1 MB, yönləndirmə izlənmir |
| `report.generate(name, { format })` | Layihə hesabatını Output yoluna yazır |
| `log.info / warn / error / debug` | Scriptin Log-u və ioBroker log-u |
| `onStop(cb)` | Dayanma, saxlama və ya restartdan əvvəl təmizlik (ən çox 2 s) |

Yuxarı səviyyədə `await` işləyir.

## Nümunələr

```js
// Nasos 1: 80 %-dən yuxarı başlasın, 20 %-dən aşağı dayansın
const LEVEL = 'modbus.0.holdingRegisters.40001_tank_level';
const PUMP = 'modbus.0.coils.1_pump1';
on({ id: LEVEL, ack: true }, async (st) => {
  const running = (await getState(PUMP))?.val;
  if (st.val > 80 && !running) await setState(PUMP, true);
  else if (st.val < 20 && running) await setState(PUMP, false);
});
```

```js
// Növbə hesabatı 06:00, 14:00 və 22:00-da
schedule('0 6,14,22 * * *', async () => {
  const r = await report.generate('reports/shift', { format: 'pdf' });
  log.info(r.ok ? `yazıldı: ${r.file}` : `alınmadı: ${r.error}`);
});
```

```js
// email adapteri ilə məktub
on({ id: 'opcua.0.boiler.alarm', val: true }, () =>
  sendTo('email.0', 'send', { subject: 'Qazan alarmı', text: 'Qazan alarm vəziyyətindədir.' }));
```

## Ortaq modullar

**+ Module** `common/<ad>.js` yaradır. Layihənin istənilən scriptindən import edin:

```js
import { limits } from 'common/limits.js';
```

Ortaq modulu saxlamaq layihənin işləyən scriptlərini yenidən başladır.

## Kitabxanalar

**Libraries** bölməsində npm paketinin adını yazın (`dayjs`, `lodash-es@4`) və **Add** basın. Server paketi yükləyir, bir fayla yığır və layihədə saxlayır — bundan sonra internetsiz işləyir.

```js
import dayjs from 'dayjs';
log.info(dayjs().format('YYYY-MM-DD HH:mm'));
```

Yalnız saf JavaScript paketləri işləyir. Node tələb edən paket (`fs`, `net`, `http`, native modullar) səbəbi göstərilməklə rədd edilir — bunlar üçün `sendTo` ilə ioBroker adapterindən (mqtt, sql, email …) və ya `http.get`-dən istifadə edin. Paketlərin install scriptləri heç vaxt işləmir; yığılmış fayl ən çox 2 MB ola bilər.

## Limitlər və xətalar

Hər script üçün (Script paneli), standartları Settings → Server Scripts-də:

- **Handler time limit** (500 ms): handler-in, taymerin və ya yuxarı səviyyənin bir icrası. Keçərsə, həmin icra sətri göstərilməklə dayandırılır; script davam edir.
- **Memory** (32 MB): keçərsə, script „out of memory" ilə dayanır.
- **Writes per minute** (600): artıq yazılar rədd edilir və loglanır.
- **On error**: loglayıb davam et (standart), scripti dayandır, ya da 30 s sonra yenidən başlat (10 dəqiqədə ən çox 5 dəfə).

Sintaksis xətası və ya yuxarı səviyyədəki xəta scripti dayandırır; sətir redaktorda işarələnir.

## State-lər

`mywebui.0.scripts.<layihə>.<qovluq>.<ad>.status` (`running` / `stopped` / `error`), `.lastError`, `.since` və `.control` — administrator ora `start`, `stop` və ya `restart` yaza bilər.

## Jurnal

Yazılar `script:<layihə>/<ad>` mənbəyi ilə əmr kimi qeyd olunur (script üzrə *Record writes in the Journal* ilə söndürülə bilər). Saxlama, başlama, dayanma, xəta və kitabxana dəyişiklikləri sistem qeydləridir.
