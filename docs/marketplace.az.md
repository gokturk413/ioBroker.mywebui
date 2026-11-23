# Marketplace

Reyestrlərdəki custom control-lar, npm widget-lər və temalar designer-in gallery-sində göstərilir:
**Gallery → Marketplace**. Pulsuz, private və lisenziya açarlı kommersiya paketləri var. Quraşdırmanı yalnız administratorlar edə bilir.
Formatın tam təsviri və paket hazırlama qaydası ingiliscə sənəddədir:
[marketplace.md](marketplace.md).

## İstifadə

1. Designer-də **gallery → Marketplace** açın.
2. Mənbəni seçin, axtarın və ya süzün: Hamısı, Pulsuz, Kommersiya, Private, Quraşdırılıb,
   Yeniləmələr.
3. Karta kliklədikdə paketin təfərrüatı açılır: önizləmə, lisenziya, imza və paketin nəyə
   toxunduğu (state yazırmı, sendTo, şəbəkə).
4. **Install to** bölməsində **Global** (bütün proyektlər) və ya **bu proyekt** seçin, sonra
   **Install** basın.
5. Quraşdırılmış paketin kartını canvas-a sürükləyin, adi custom control kimi. Paketin
   control-ları seçilmiş yerdə `market/<owner>/<name>/…` adı ilə saxlanır. Onlar gallery-nin
   **Global** / **Project** tablarında və ağacda görünür.

**Project** və **Global** tabları həmin yerin bütün custom control-larını canlı göstərir.

## Təhlükəsizlik scan-ı

mywebui hər paketin kodunu oxuyur: control-ların html/style/script hissəsini, tema fayllarını və
npm tarball-ın içindəki JS-i. Stringdən kod işlətməyi (`eval`, `new Function`), cookie-ləri,
şəbəkəyə çıxışı, state yazmağı, `sendTo`, Node.js API-lərini, obfuskasiyanı və install
script-lərini axtarır. Paketin `uses`-də elan etdiyi şeylər üçün xəbərdarlıq verilmir.

- İcma reyestri hər paketi öz CI-ında scan edir və nəticəni indeksə yazır; gallery-də "scanned ✓"
  və ya səviyyə görünür. **High** tapıntısı olan paket maintainer baxıb həmin faylın sha256-nı
  `scanAccepted` kimi yazana qədər indeksə düşmür.
- Scan sübut deyil: tapıntı baxmaq üçün səbəbdir, tapıntının olmaması paketin təhlükəsiz olduğunu
  göstərmir. Paketləri və lisenziyaları müəlliflər imzalayır, platforma scan edir.

## Fayldan quraşdırma

Gallery → Marketplace → **From file…** reyestrdən gəlməyən `.mwpkg` faylını quraşdırır (yalnız
administratorlar; Admin → Marketplace → **Allow packages from files**, standart olaraq söndürülü).
mywebui.0 faylı reyestr paketi kimi yoxlayır, scan edir və nəticəni, SHA-256-nı və hansısa
reyestrin bu faylı tanıyıb-tanımadığını göstərir. Administrator **"məsuliyyəti öz üzərimə
götürürəm"** işarəsini qoymayınca heç nə quraşdırılmır: belə paketə görə məsuliyyət müəllifin və
quraşdıran administratorundur. Quraşdırma log-a və jurnala yazılır.

## Kommersiya paketləri və lisenziyalar

Hər kəs control, widget və ya tema sata bilər; kommersiya paketi standart olaraq siyahıda görünür.

1. Alıcı kartı açır: qiymət, satınalma linki və müəllifə göndəriləcək **Installation ID**.
2. Müəllif açarı sahib açarı ilə imzalayır (VS Code: **Issue Licence…**) və göndərir.
3. Alıcı açarı yapışdırıb quraşdırır. mywebui.0 yoxlayır: paket, qurğu (və proyekt), versiya aralığı,
   bitmə tarixi.

Lisenziya növləri: `project` (bir qurğuda bir proyekt), `installations` (siyahıdakı qurğular),
`developer` (hər yerdə, həmin developer üçün). `versions` versiya aralığını, `expires` abunəni
bildirir; onlarsız lisenziya ömürlükdür.

**Sınaq** (`trialDays`, yalnız temalar) qurğuda hər paket üçün bir dəfə başlayır. Sınağı və ya abunəsi
bitən tema səhifədən çıxır, onu işlədən səhifə standart temaya qayıdır. Control və widget üçün bitmə
tarixi yeniləmə və təkrar quraşdırmanı dayandırır; quraşdırılmış olan işləməyə davam edir.

Açar quraşdırma zamanı yoxlanır. Marketplace public GitHub release-lərindən yükləyir, yəni paket
faylının özü açıqdır: **lisenziya dürüst müştərini qaydada saxlayır, DRM deyil.**

## Paket növləri

- **control**: custom control-lar. Global-a və ya proyektə quraşdırılır.
- **npm-widget**: npm widget. Paket `npm pack` ilə hazırlanmış `.tgz` faylını da daşıya bilər.
  O zaman sahibin imzası bu faylı da əhatə edir, widget üçün npm hesabı lazım olmur. Fayl açıq
  proyektə quraşdırılır.
- **theme**: tema. Hər tema ayrıca `themes/<ad>.css` faylıdır, içində bir sadə qayda olur.
  VS Code-un Theme Creator-u onu birbaşa dərc edir. Tema Global-a (bütün proyektlər) və ya açıq
  proyektə quraşdırılır; designer və runtime onu yükləyir, tema seçicisində görünür.

Reyestr olmadan da `.tgz` faylından widget quraşdırmaq olar: **Packages → sağ klik → Add
Package from .tgz file…** (yalnız administratorlar). Fayl proyektlə birlikdə saxlanır, adapter
yenilənəndə və proyekt export ediləndə itmir.

## Server nəyi yoxlayır

Reyestri və paketləri mywebui.0 oxuyur, brauzer onları özü yükləmir. Server bunları yoxlayır:

- **Mənbələr.** Yalnız https qəbul olunur (http yalnız localhost üçün). Faylları ancaq
  reyestrin öz origin-indən və ya GitHub release hostlarından yükləyir.
- **Ölçü limitləri.**
- **SHA-256.** Yüklənən paket indeksdə göstərilən paketlə eyni olmalıdır.
- **İmza.** Paket sahibinin reyestrdəki Ed25519 açarı ilə imzalanmış olmalıdır.
- **Manifest.** İndeksdəki girişlə eyni olmalı və paketdəki bütün faylları SHA-256 ilə
  sadalamalıdır.
- **Control-lar.** Designer-in yoxladığı kimi yoxlanır.

Server heç nə yazmır. Control-ları designer öz Save yolu ilə saxlayır, login olmuş
administratorun hüquqları ilə.
