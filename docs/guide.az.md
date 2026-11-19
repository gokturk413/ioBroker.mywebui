# Bələdçi — ekranın turu və hər elementin təlimatı

Ekran yeni istifadəçini özü gəzdirə bilər: elementlər bir-bir işıqlandırılır, popup onu izah edir
(Növbəti / Geri / Ötür). Sonra təlimatı olan hər elementin üstündə kiçik ⓘ işarəsi qalır (kömək
rejimində); ona basanda həmin təlimat yenidən açılır.

## Dizaynerdə — Guide pəncərəsi

Sağ zolaqdan **Guide**-i aç.

**Element seçilib → onun təlimatı**

| Sahə | Mənası |
|---|---|
| Enabled | Söndürülsə mətn qalır, amma heç nə göstərilmir |
| Tour step | 1, 2, … — turdakı yeri; 0 = yalnız ⓘ işarəsi ilə |
| ⓘ icon | *kömək rejimində* (F1 / kömək düyməsi), *həmişə*, *siçan üstündə olanda*, *heç vaxt* (yalnız tur) |
| Popup | kiçik 300 px, orta 360 px, böyük 480 px |
| Text | Hər **dil üçün** başlıq və mətn (AZ EN RU DE TR; həmin dildə mətn varsa nöqtə yaşıldır). Mətni olmayan dil ingiliscəni göstərir, o da yoxdursa mətni olan ilk dili — "tərcümə olunmayıb" işarəsi ilə. `t:my.key` başlıq və ya mətn tərcümə açarıdır (Translations dock). |
| Canlı dəyərlər | Mətndə `{{0_userdata.0.flow}}` state-in indiki dəyərini göstərir, `{{report.0.volume|1}}` bir onluq rəqəmlə |
| Screen | Popup-un içində göstərilən ekran — adi ekran kimi dizayn et (məsələn `help` qovluğunda): düymələri, custom controlları, bindinqləri və skriptləri orada işləyir |

**Apply** təlimatı elementə yazır (`data-guide`, geri alına bilər); ekranı Ctrl+S ilə saxla.

**Heç nə seçilməyib → ekranın turu** (elementdən *Screen tour…*)

| Sahə | Mənası |
|---|---|
| When | *hər istifadəçinin ilk girişi*; *ilk giriş və tur dəyişəndə yenə* (addım və ya mətn dəyişib); *yalnız istəklə*; *state true olanda* (məs. təlim rejimi) |
| For groups | Tur özü yalnız bu ioBroker qruplarına açılır (boş: hamıya) |
| Spotlight | Addımın ətrafında ekranın qalanını qaraldır |
| Don't show again | Turda "bir daha göstərmə" qutusunu təklif edir |
| Welcome step | Elementə bağlı olmayan ilk addım (hər dil üçün) |
| Steps | Elementlər tur sırası ilə; ↑ ↓ nömrələri dəyişir; klik elementi seçir |

*Test in the viewer* ekranı runtime-da açır. Brauzer istifadəçinin turu gördüyünü yadda saxlayır;
brauzer konsolunda `IOB.guide.reset()` bunu unutdurur.

## Report-lar və 3D screen-lər

- **Report-lar** ekran kimi işləyir: reportun elementini seç (təlimat) və ya heç nə seçmə (reportun turu).
- **3D screen və 3D control**: 3D redaktorda obyekti seç — Guide pəncərəsi onun təlimatını açır;
  heç nə seçilməyəndə səhnənin turunu. Səhnə ilə birlikdə saxlanır (`sceneData.guide`). Viewer-də
  ⓘ işarəsi, işıqlandırma və popup kamera hərəkət etdikcə obyekti izləyir; kameranın arxasında
  qalan və ya gizli obyektin işarəsi olmur.
- **Popup içi** ekran, 3D screen və ya 3D control ola bilər (pəncərədəki siyahı).

## Viewer-də

- Tur yuxarıdakı ayara görə, ekran hazır olandan sonra özü başlayır. Esc və ya ✕ onu bitirir.
- **F1** kömək rejimini açıb-bağlayır: elementlərin ⓘ işarələri. Tur bitəndən sonra kömək rejimi açıq qalır.
- Telefonda (640 px-dən dar) popup altdan açılan panel olur.
- Rənglər runtime temasına (`--ui-*`), düymələrin mətnləri dilə uyğundur (5 daxili dil; layihənin `guide.next` … tərcüməsi üstündür).

## Düymədən və ya skriptdən

Simple Script / Blockly: **Guide** əmri və action:

| Action | Nə edir |
|---|---|
| `start` | Turu başladır (target: ekranın adı; boş: göstərilən ekran) |
| `help`, `helpOn`, `helpOff` | Kömək rejimini dəyişir / açır / bağlayır |
| `show` | Bir təlimatı açır (target: elementin id-si) |
| `close` | Popup-u bağlayır |
| `reset` | Bu brauzerin turu gördüyünü unudur (target: ekran; boş: hamısı) |

JavaScript: `IOB.guide.start()`, `IOB.guide.help(true)`, `IOB.guide.show('btnReport')`,
`IOB.guide.close()`, `IOB.guide.reset()`; `IOB.guide.helpMode` vəziyyəti deyir, `guide-help-changed`
window hadisəsi (`detail.on`) onu izləyir — basılı görünən kömək düyməsi üçün.

## Harada saxlanır

| Nə | Harada |
|---|---|
| Elementin təlimatı | ekrandakı `data-guide` atributu (JSON) |
| Tur ayarları | ekranın `settings.guide` |
| Görülüb / "bir daha göstərmə" | brauzer (`localStorage` `mywebui.guide`, istifadəçi, layihə və ekran üzrə) |

## Fayllar

| Hissə | Fayl |
|---|---|
| Runtime: tur, işarələr, popup | `www/dist/frontend/common/Guide.js` |
| Dizayner pəncərəsi | `www/dist/frontend/config/GuideWindow.js` |
| Skript əmri | `www/dist/frontend/common/ScriptApi.js` (`guide`) |
| Testlər | `test/guide.mjs` |
