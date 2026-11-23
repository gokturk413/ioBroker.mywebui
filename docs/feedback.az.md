# Feedback — vibrasiya və səs

Element başına bir şey gələndə telefonu titrədə və qısa səs verə bilər. Qaydalar elementin öz
hadisələri və skriptləri ilə (Simple Script, Blockly, JavaScript) yanaşı işləyir: onlardan əvvəl
dinləyir, ona görə hadisəni dayandıran skript onları dayandırmır.

## Layihənin standartları — Settings → Feedback (vibration, sound)

| Ayar | Standart | Mənası |
|---|---|---|
| On | açıq | Feedback ümumiyyətlə |
| Every button: tap + click | açıq | Öz click qaydası olmayan hər düymə |
| Refused / unconfirmed write: warning | açıq | Sürücünün rədd etdiyi və ya təsdiqləmədiyi yazma, ya da hüquq rəddi |
| Confirmed write: double + success | bağlı | Sürücü yazmanı təsdiqlədi |
| Operator may turn it off | açıq | Bu brauzerdə `IOB.feedback.mute()` / **Feedback** əmri |
| Alarm patterns even when turned off | açıq | *alarm* vibrasiyası yenə gəlir |
| At most one per (ms) | 250 | Tez basanda dayanmadan titrəmir |
| Sound also without a touch screen | bağlı | Standartların səsi masaüstü brauzerdə də (elementin öz qaydaları həmişə səslənir) |
| The element shakes with its vibration | açıq | Element vibrasiyası qədər silkələnir — titrəyə bilməyən PC-də də. Elementin öz qaydaları və rədd olunan yazma; hər düymənin tap-ı yox |

## Elementin qaydaları — Feedback pəncərəsi

Elementi seç, sağ zolaqdan **Feedback**-i aç, **+ Add a rule**:

| Sahə | Dəyərlər |
|---|---|
| When | click / tap, basma, hover, fokus, dəyər daxil edildi, sürücü yazmanı təsdiqlədi, yazma rədd edildi / təsdiqlənmədi, state dəyişdi… (state id + şərt `== true`, `> 80`, `!= 0`, `changes`) |
| Vibration | tap 40 ms, double 40-70-40, long 250 ms, warning 120-80-120, alarm 300-150-300-150-600 və ya öz `40,40,120` (ms titrə, dur, titrə …) |
| Sound | click, tick, success, warning, alarm (brauzerdə yaradılır, fayl lazım deyil) |
| Shake | açıq: element vibrasiya ilə silkələnir |
| Volume | 0–100 % |

**▶ Test** dərhal səsləndirir. **Apply**, sonra ekranı saxla (Ctrl+S). Qaydalar elementin
`data-feedback` atributudur.

State qaydası şərt *doğru olanda* işə düşür (ekran açılandakı dəyər üçün yox).

## Cihazlar

- Android (Chrome, Edge, Firefox): vibrasiya və səs. Telefon **səssiz** rejimdə olanda Chrome titrəmir; telefonun öz vibrasiya ayarı da açıq olmalıdır.
- iPhone / iPad (Safari): vibrasiya API-si yoxdur. iOS 18 və yenisi əvəzində qısa haptic verir (hər vibrasiya addımına bir); köhnə iOS-da yalnız səs.
- Hər cihaz: element vibrasiyası ilə silkələnir (sistem "hərəkəti azalt" istəmirsə).
- Brauzerlər vibrasiya və səsi yalnız səhifəyə ilk toxunuşdan, klikdən və ya düymədən sonra buraxır; viewer onu o an açır. Ona görə hover və state qaydası ilk toxunuşdan sonra gəlir. Masaüstü kompüter heç vaxt titrəmir.
- Titrəmir? `localStorage['mywebui.feedback.debug'] = '1'` yaz və səhifəni yenilə: konsol hər feedback-i göstərir, brauzer rədd edibsə `vibrated: false`.

## Skriptdən

Simple Script / Blockly: **Feedback** əmri — action `play` (vibration, sound, volume), `mute`,
`unmute`, `toggleMute`. JavaScript: `IOB.feedback.play({ vib: 'double', snd: 'success' })`,
`IOB.feedback.mute()`; `IOB.feedback.prefs` operatorun bu brauzerdəki seçimidir.

## Fayllar

| Hissə | Fayl |
|---|---|
| Runtime | `www/dist/frontend/common/Feedback.js` |
| Dizayner pəncərəsi | `www/dist/frontend/config/FeedbackWindow.js` |
| Testlər | `test/feedback.mjs` |
