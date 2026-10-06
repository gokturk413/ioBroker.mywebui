# Controllardakı vəziyyət işarələri — yazma təsdiqi və oxuma keyfiyyəti

[In English](status-indicators.md)

Runtime ekranındakı controlun üzərində iki növ işarə ola bilər:

- **Yazma təsdiqi (write feedback)**, **sağ** kənarda: operatorun yazdığı dəyərlə nə baş verdi.
- **Oxuma keyfiyyəti (read quality)**, **sol-yuxarı** küncdə: controlun göstərdiyi dəyərə güvənmək olarmı.

Bunlar bir-birini örtmür. Hər ikisi controlun üzərinə çəkilir, controlun özü dəyişmir. Nişanın üzərinə gəlin (və ya toxunun): səbəb və driver instance-ı görünəcək, məsələn `opcua.0`.

## Yazma təsdiqi — sağ kənar

Operatorun yazdığı dəyər driver-ə gedir (OPC UA, Modbus, EtherNet/IP, MQTT …). Driver onu cihaza yazır, sonra təsdiqləyir.

| Çərçivə | Nişan | Mənası | Nə etməli |
|---|---|---|---|
| sarı, qırıq xətt, yanıb-sönür | `⋯ 1.4 s` (sayır) | Göndərilib, driver-in təsdiqi gözlənilir. | Gözləyin. Yavaş serial xətt bir neçə saniyə çəkə bilər. |
| yaşıl | `✓ 180 ms` | Driver yazmanı təsdiqlədi. 1.5 s sonra itir. | Heç nə. |
| qırmızı, qoşa xətt | `✕ 5.0 s` | Vaxtında təsdiq gəlmədi. | Driver-in və cihazın qoşulu olduğunu yoxlayın, sonra yenidən yazın. |
| qırmızı, qoşa xətt | `✕` + tooltip *Confirmed with bad quality* | Driver cavab verdi, amma pis keyfiyyət kodu ilə, məsələn *device not connected (q 0x42)*. | Cihazın əlaqəsini yoxlayın. |
| qırmızı, qoşa xətt | `✕ denied` | İstifadəçinin bu dəyəri yazmağa icazəsi yoxdur. | Administratordan icazə istəyin. |
| narıncı | `≠ 45` | Təsdiqləndi, amma başqa dəyərlə: PLC dəyəri məhdudlaşdırdı və ya qismən qəbul etmədi. | PLC-dəki limitləri yoxlayın. |
| boz, nöqtəli | `= 49` | Dəyər onsuz da belə idi. Driver dəyişməyən dəyəri təsdiqləmir. | Heç nə. |

Qırmızı nişan üzərinə basılana qədər qalır (ayarda 10 s / 60 s seçilibsə, o qədər). Basanda itir.

Driver **əvəzedici dəyərlə** (q 0x10, 0x20, 0x40, 0x80) cavab verirsə, bu xəta deyil: nişan adi qaydada yaşıl və ya narıncı olur, tooltip isə kodu əlavə edir.

## Oxuma keyfiyyəti — sol-yuxarı künc

İşarə bunlardan gəlir: state-in keyfiyyət kodu `q` (Admin-də *Write value → Quality code* siyahısı ilə eynidir), driver instance-ının əlaqəsi və dəyərin nə qədər müddətdir yenilənmədiyi.

| Çərçivə | Nişan | Mənası | Kodlar | Dəyər |
|---|---|---|---|---|
| göy, qırıq xətt | `S` | Əvəzedici dəyər: ölçülməyib, controller, driver və ya ilkin dəyər kimi qoyulub. | 0x10, 0x20, 0x40, 0x80 | göstərilir |
| sarı, nöqtəli | `!` | Problem bildirilib; dəyər səhv ola bilər. | 0x01, 0x11, 0x41, 0x81 | göstərilir |
| bənövşəyi, qırıq xətt | saat | Driver üçün təyin olunan müddətdən çoxdur yenilənmir. Ayarlanmayınca sönülüdür. | — | göstərilir |
| boz, ştrixli | qırıq zəncir | Qoşulmayıb: cihazın, sensorun və ya driver instance-ının əlaqəsi yoxdur. Son dəyər göstərilir. | 0x02, 0x12, 0x42, 0x82; və ya driver-in `alive` / `info.connection` dəyəri false-dur | son dəyər, ştrixli |
| qırmızı, ştrixli | `✕` | Cihaz və ya sensor xəta bildirir. Son dəyər göstərilir. | 0x44, 0x84 | son dəyər, ştrixli |
| boz, nöqtəli | `?` | Mövcud deyil: state yoxdur, hələ dəyəri yoxdur, ya da istifadəçinin oxuma icazəsi yoxdur. | — | control necə göstərirsə |

State id-si *signal* xassəsi kimi verilən controllar da (məsələn *input_with_button*) bağlı controllar kimi bütövlükdə işarələnir.

Bir control bir neçə dəyər oxuyursa, ən pis vəziyyət çəkilir: xəta › qoşulmayıb › mövcud deyil › köhnəlmiş › problem › əvəzedici. Tooltip hər problemi sadalayır.

### Bütün keyfiyyət kodları

| Kod | Mətn | Necə göstərilir |
|---|---|---|
| 0x00 | good (yaxşı) | heç nə |
| 0x01 | general problem (ümumi problem) | problem `!` |
| 0x02 | no connection problem (əlaqə yoxdur) | qoşulmayıb |
| 0x10 | substitute value from controller (controller-dən əvəzedici dəyər) | əvəzedici `S` |
| 0x20 | substitute initial value (ilkin əvəzedici dəyər) | əvəzedici `S` |
| 0x40 | substitute value from device or instance (cihaz və ya instance-dan əvəzedici dəyər) | əvəzedici `S` |
| 0x80 | substitute value from sensor (sensordan əvəzedici dəyər) | əvəzedici `S` |
| 0x11 | general problem by instance (instance-da ümumi problem) | problem `!` |
| 0x41 | general problem by device (cihazda ümumi problem) | problem `!` |
| 0x81 | general problem by sensor (sensorda ümumi problem) | problem `!` |
| 0x12 | instance not connected (instance qoşulmayıb) | qoşulmayıb |
| 0x42 | device not connected (cihaz qoşulmayıb) | qoşulmayıb |
| 0x82 | sensor not connected (sensor qoşulmayıb) | qoşulmayıb |
| 0x44 | device reports error (cihaz xəta bildirir) | xəta `✕` |
| 0x84 | sensor reports error (sensor xəta bildirir) | xəta `✕` |

## Administratorlar üçün: state məlumatı paneli

Administrator nişana klikləyir (və ya istənilən controla Alt + klik edir) və controla bağlı bütün state-ləri görür: oxuma/yazma yönü, state id, dəyər, keyfiyyət kodu, driver əlaqəsi, son yenilənmə və son yazma, problem olan yer işarələnmiş. Digər istifadəçilər yalnız qısa tooltip görür. Ətraflı: [bindings.md](bindings.md) → *State details*.

## Ayarlar

Hər ikisi **Designer → Settings** bölməsində ayarlanır:

- **Write feedback:** aç/söndür, nişanda vaxt, yaşıl və qırmızının nə qədər qalması, standart gözləmə müddəti, hər driver instance üçün ayrıca gözləmə.
- **Read quality:** aç/söndür, əvəzedici dəyərlər, ştrix, driver əlaqəsinin izlənməsi, köhnəlmə müddəti (sönülü, poll-un 3 və ya 10 misli, ya da hər driver instance üçün ayrıca müddət).

Bir control və ya bütöv konteyner üçün: `write-feedback="off"` və `read-quality="off"`.

Texniki təfərrüatlar: [bindings.md](bindings.md) → *Write feedback* və *Read quality*.
