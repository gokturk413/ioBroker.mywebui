# Redundancy (HA failover)

Redundancy adapteri ilə web.0 və mywebui.0 eyni anda yalnız bir serverdə işləyir, o serverə
primary deyilir. Switchover zamanı onlar həmin serverdə dayanır və yeni primary-də başlayır, bir
neçə saniyə heç bir server cavab vermir. Bu səhifə həmin anda açıq ekranın nə etdiyini və
serverlərin bunun üçün necə qurulacağını izah edir.

## Bir ünvan: üzən (virtual) IP

Primary-yə onunla birlikdə köçən bir ünvan verin, məsələn `192.168.64.10`, və runtime-ı həmin
ünvandan açın: `https://192.168.64.10:8082/mywebui/runtime.html`. Brauzer həmişə bu bir URL-də
qalır. Switchover zamanı bağlantı kəsilir və server eyni ünvanda geri gəlir.
Konfiqurasiyasında `vip` bölməsi olanda redundancy watchdog bu ünvanı özü köçürür.

TLS sertifikatı üçün də eyni ünvanı istifadə edin, yəni virtual IP-ni və ya onun DNS adını
sertifikata yazın. Onda brauzer bu ünvanın arxasındakı hər serverə etibar edir.

Növbə ilə yoxlanılan server ünvanları siyahısı dəstəklənmir. Login cookie-si və sertifikat bir
ünvana aiddir, ona görə başqa ünvana hər keçid yenidən login tələb edərdi.

## Açıq ekran nə edir

- **Bağlantı kəsildi.** Bağlantı bir saniyə olmayanda banner çıxır: *Serverlə əlaqə kəsildi —
  yenidən qoşulur…*. Ekran olduğu kimi qalır, səhifə yenilənmir.
- **Dəyərlər canlı deyil.** Bağlantı olmadığı müddətdə read quality bağlı hər dəyəri boz rəngli
  link ikonu ilə işarələyir: *Serverlə əlaqə yoxdur — son dəyər göstərilir*. Bunun üçün read
  quality açıq olmalıdır (Settings → Read quality). Layihə stilləri
  `html[data-iob-connection="lost"]` seçicisindən də istifadə edə bilər.
- **Yenidən qoşulma.** Brauzer 0,5 s sonra, daha sonra hər 1 s-dən bir yenidən cəhd edir və
  heç vaxt dayanmır. Windows-da rədd edilən cəhdin özü təxminən 2 s çəkir, ona görə yenidən
  qalxan serverə təxminən 3 s ərzində qoşulur.
- **Bağlantı qayıtdı.** Abunə olunmuş hər state yenidən oxunur. Kəsilmə zamanı dəyişən dəyər
  dərhal görünür, növbəti dəyişikliyini gözləmir. Alarmlar və state-ə əsaslanan digər görünüşlər
  də eyni yolla qayıdır. `history:` direktivləri sətirlərini yenidən sorğulayır. Yalnız bundan
  sonra banner və read quality işarələri yox olur.
- **Login.** ioBroker web sessiyalarını və token-ləri ortaq states bazasında saxlayır, ona görə
  köhnə primary-dəki login yenisində də keçərlidir. mywebui özü heç bir login-i tək bir serverin
  yaddaşında saxlamır.

## Ekranda redundancy statusu

**Global → Controls → redundancy** altında iki qlobal control redundancy adapterinin
state-lərini göstərir. Hər `redundancy.N` instance-ını özləri tapırlar (hər serverdə bir
instance olur). Siyahını məhdudlaşdırmaq üçün instance-ları `instances` xassəsinə yazın,
məsələn `redundancy.0, redundancy.1`.

- **redundancy-status** paneldir. Hansı serverin əsas olduğunu və nə vaxtdan əsas olduğunu,
  hər serverin rolunu, watchdog-unu, qonşusunu, xətlərini, lisenziyasını və texniki xidmət
  kilidini göstərir. Klaster ünvanını (VIP) və onun hansı serverdə olduğunu, bu ekranın hansı
  serverlə danışdığını, son keçidi və ya failover-i səbəbi ilə, həmçinin son hadisələri də
  göstərir (`showEvents`, `eventCount`).
- **redundancy-badge** app bar üçün nişandır. Əsas serveri göstərir, tooltip-də hər server
  sadalanır. `screen` xassəsinə bir ekran yazsanız, kliklə həmin ekran açılır, məsələn
  paneli olan ekran.

Hər iki control gördüyü ən pis vəziyyətin rəngini alır:

- **qırmızı**: heç bir server əsas deyil; birdən çox server əsasdır; serverlə əlaqə kəsilib;
  və ya ekranı ehtiyat server verir (ehtiyata keçmiş serverdə qalmış sessiya);
- **sarı**: bir server işləmir, təcrid olunub və ya watchdog-u işləmir; qonşu `Ok` deyil;
  bir xətt kəsilib; lisenziya keçərli deyil; texniki xidmət kilidi qoyulub; və ya VIP heç bir
  serverdə deyil;
- **yaşıl**: qalan hallarda.

Ekranı hansı serverin verdiyini səhifənin ünvanı yox, web.0-ın özü bildirir. Proxy hər serverdə
klaster ünvanına yönləndirə bilər, ona görə ehtiyat serverin ünvanı da əsas serverə apara bilər.
Bu cavab olmayanda (serverdə köhnə mywebui) panel yalnız ekranın klaster ünvanı ilə açılıb-
açılmadığını deyir və buna görə həyəcan siqnalı vermir.

ioBroker-i dayanmış server son state-lərini saxlayır, çox vaxt `primary` dəyəri ilə. Ona görə
control-lar serveri yalnız instance-ı canlı olduqda nəzərə alır
(`system.adapter.redundancy.N.alive`).

Hər control rəngi öz üzərinə `data-tone` (`ok`, `warn`, `error`), əsas serveri isə
`data-primary` atributu kimi yazır. Bunlardan biri dəyişəndə
`{ primary, primaryHost, tone, problems, epoch }` ilə `redundancy-change` hadisəsi göndərir.

Control-lar yalnız oxuyur. Keçid redundancy adapterinin admin tabında başladılır.

## Öz control və skriptlərinizdə

Bağlantı olmadığı müddətdə `IOB.online` `false` olur.

`IOB.onReconnected(cb)` bağlantı qayıdandan və dəyərlər yenidən oxunandan sonra `cb(outageMs)`
funksiyasını çağırır. Geriyə callback-i silən funksiya qaytarır. Bir dəfə sorğu göndərən və
sonra yenidən göndərməli olan hər şey üçün istifadə edin, məsələn skriptin doldurduğu tarixçə
cədvəli üçün. IOB olmadan `window` üzərində `iob-reconnected` hadisəsini də dinləmək olar
(`event.detail.outageMs`).

## Lisenziya

Hər server mywebui lisenziya ledger-inin öz nüsxəsini saxlayır. Nüsxələr `mywebui.N.licenseTrial`
və `mywebui.N.licenseGrace` obyektlərində, `native.blobs[<hardware id>]` altında durur. Bir
serverdə möhürlənmiş nüsxə heç vaxt başqa serverdə oxunmur. Klaster lisenziya açarında bütün
serverlərin hardware id-ləri olur.

## Qəsdən hər serverdə ayrıca saxlananlar

- **Gateway açarı** (`iobroker-data/mywebui.N/gateway.key`) hər serverin öz diskindəki fayldır.
  web.0 və mywebui.0 həmişə eyni serverdə işləyir, ona görə hər primary öz açarı ilə imzalayır və
  yoxlayır.
- **Jurnal növbəsi** (tarixçə bazasına hələ yazılmamış qeydlər) onları yazan serverdə qalır. O
  server yenidən primary olanda bazaya yazılır.

Hot instance-larda mywebui.0-ın bir nüsxəsi hər serverdə işləyir və yalnız primary-nin yazmaları
keçir. Ehtiyat serverdəki nüsxə jurnala heç nə qeyd etmir, çünki eyni hadisələri primary qeyd
edir. Bazaya da heç nə yazmır: saxlanılan yazma uğurlu kimi cavab verərdi və qeydlər itərdi.
Server primary olanda onun növbəsi dərhal yazılır.
