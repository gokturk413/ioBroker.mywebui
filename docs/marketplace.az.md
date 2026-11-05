# Marketplace

Reyestrlərdəki custom control-lar və npm widget-lər designer-in gallery-sində göstərilir:
**Gallery → Marketplace**. Bu, 1-ci mərhələdir: pulsuz və private paketlər. Lisenziya açarlı
kommersiya paketləri 2-ci mərhələdə gələcək. Quraşdırmanı yalnız administratorlar edə bilir.
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

## Paket növləri

- **control**: custom control-lar. Global-a və ya proyektə quraşdırılır.
- **npm-widget**: npm widget. Paket `npm pack` ilə hazırlanmış `.tgz` faylını da daşıya bilər.
  O zaman sahibin imzası bu faylı da əhatə edir, widget üçün npm hesabı lazım olmur. Fayl açıq
  proyektə quraşdırılır.
- **theme**: tema. Hər tema ayrıca `themes/<ad>.css` faylıdır, içində bir sadə qayda olur.
  Tema açıq proyektin Global Style-ına yazılır və tema seçicisində görünür.

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
