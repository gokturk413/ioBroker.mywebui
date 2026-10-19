# Jurnal, Mesajlar, Axtarış, State istifadəsi, onlayn klientlər

[In English](journal.md)

mywebui onun vasitəsilə qurğuda baş verənlərin tarixçəsini saxlayır: kim hansı dəyəri istədi, haradan, hansı driver qəbul etdi və bu nə qədər çəkdi — ya da heç bir driverin qəbul etmədiyini. Yanında səhifənin canlı trafiki (Mesajlar), qurğunun elementləri üzrə axtarış (Axtarış), proyektin istifadə etdiyi bütün state-lərin siyahısı (State istifadəsi) və hazırda qoşulu brauzerlər var.

| Alət | Harada | Nəyə cavab verir |
|---|---|---|
| **Jurnal** | runtime: app-bar düyməsi `navigation/journal-button` və ya `IOB.openJournal()` | Nə baş verdi, kim etdi, haradan, nəticəsi nə oldu — serverdəki tarixçədən. |
| **Mesajlar** | runtime: `navigation/messages-button` və ya `IOB.openMessages()` | Bu səhifə hazırda nə alır və nə göndərir. |
| **Axtarış** | runtime: Ctrl+Shift+F, `navigation/find-button` və ya `IOB.openFind('P-101')` | Bu element haradadır — bu ekranda, yoxsa başqasında? |
| **State istifadəsi** | designer: Refactor → State usage | Proyekt hansı state-ləri, harada və necə istifadə edir? |
| **Onlayn klientlər** | Jurnal → Klientlər | Kim qoşulub, hansı IP və cihazdan, hansı ekrandadır? |

---

## 1. Jurnal

### Nə yazılır

| Növ | Nə vaxt | Nə saxlanır |
|---|---|---|
| **Əmr** ↑ | mywebui-nin istifadə etdiyi state-ə istənilən yazma (`ack: false`) — ekrandan, skriptdən, Admin-dən və ya başqa adapterdən | vaxt (ms), state, əvvəlki → yeni dəyər, **istifadəçi** (state-in ioBroker `user` sahəsi), **nə vasitəsilə** (`web.0`, `javascript.0` …); mywebui səhifəsindən gəlirsə həm də **IP, cihaz, ekran, element** və Confirm cavabı; sonra driverin cavabı: **kim qəbul etdi** (ack-ın `from`-u), **nə qədər çəkdi**, hansı dəyərlə — ya da gözləmədən sonra *təsdiq gəlmədi* |
| **Dəyər** ↓ | Settings → Journal-da sadalanan state-lərin dəyişməsi | əvvəlki → yeni dəyər, əvvəlkinin nə qədər qaldığı, driver |
| **Sistem** ⚙ | izlənən state-in driveri qoşuldu / ayrıldı / işə düşdü / dayandı; icazə olmadığı üçün rədd edilən yazma | instansiya, state, istifadəçi |
| **Log** ! | `web.N` və ya `mywebui.N`-in seçilmiş səviyyələrdəki log sətri | mənbə, səviyyə, mətn (adapter necə yazıbsa) |
| **Klient** ◉ | brauzer qoşuldu, ekran açdı, designer-i açdı, çıxdı, siqnalı itdi | istifadəçi, IP, cihaz, səhifə, ekran |
| **Qeyd** ✎ | operatorun qeydə yazdığı şərh | istifadəçi, mətn |

*mywebui-nin istifadə etdiyi state-lər* State istifadəsi (§4) ilə eyni skanerlə tapılır — hər proyektin bütün ekranları, hesabatları, controlları və Global Script-i — üstəlik hər açıq səhifənin bildirdiyi id-lər (runtime-da yığılan id-lər, `{relativeSignalsPath}`, `{##i}`). Yalnız bunlar izlənir, bütün ioBroker yox. `local_*` state-lər, UI-nin öz `mywebui.N.control.*` state-ləri və *Leave out*-dakı nümunələr yazılmır.

Əmrin nəticəsi:

| Görünən | Mənası |
|---|---|
| `✓ modbus.0 · 180 ms` | driver təsdiqlədi |
| `≠ 45 · opcua.0` | başqa dəyərlə təsdiqlədi (PLC məhdudlaşdırdı) |
| `✕ Təsdiq gəlmədi · 5.0 s` | gözləmə müddətində ack gəlmədi — driverin `max(3 s, 2 × poll + 1 s)`, yoxdursa 5 s |
| `✕ Pis keyfiyyət` | driver pis keyfiyyət kodu ilə cavab verdi |
| `— heç bir driver təsdiqləmir` | `0_userdata`, `javascript`, `system` … — gözləniləsi bir şey yoxdur |
| `↷ növbəti yazma ilə əvəz olundu` | ack-dan əvvəl daha yeni yazma gəldi |

### Harada saxlanır

Bu serverin **history instansiyasında** — `influxdb.N`, `sql.N` və ya `history.N`; Settings → Journal-da seçilir. Onun öz qoşulması, parolu və saxlama müddəti istifadə olunur; jurnalın özünün heç biri yoxdur. Hər növ mywebui-nin bir state-idir (`mywebui.0.journal.command`, `.update`, `.system`, `.log`, `.client`, `.note`), tarixçəsini instansiya saxlayır; jurnal oraya hər 2 s-dən bir toplu (`storeState`) yazır.

İnstansiya dayanıb və ya əlçatmazdırsa heç nə itmir: qeydlər diskdə saxlanan lokal növbədə gözləyir (`iobroker-data/mywebui.0/journal-queue.jsonl`) və instansiya qayıdanda göndərilir. *Local queue at most* onu məhdudlaşdırır (dolanda ən köhnələri silinir). Jurnalın alt sətri və Settings neçə qeydin gözlədiyini göstərir.

### İstifadə

1. **`navigation/journal-button`**-u app bar-a qoyun (Designer → Settings → Application Bar → ✎ Edit App Bar content → Global controls → navigation-dan sürüşdürün) və ya düymə skriptindən `IOB.openJournal()` çağırın.
2. **Tarixçə / Canlı** — Tarixçə seçilmiş aralığı instansiyadan oxuyur; Canlı hər 2 s-dən bir yeni qeydləri əlavə edir.
3. **Aralıq** — son saat, növbə (8 s), 24 s, 7 gün (heç vaxt istifadəçinin qaydasının icazə verdiyindən geriyə yox).
4. **Növlər** — Hamısı, Əmrlər, Dəyərlər, Sistem, Loglar, Klientlər (yalnız istifadəçinin görə bildiyi növlər təklif olunur).
5. **Axtarış** — element, ekran, istifadəçi, state, IP və ya mətndəki sözlər — yalnız istifadəçinin qaydasının icazə verdiyi sahələrdə. **◎** ekranda element seçir: onun state-ləri axtarılır (klik başqa heç nə etmir).
6. **Sətir** təfərrüatı açır: tam state id, element, ekran, dəyər, kim və haradan, Confirm, driver, nəticə, şərhlər. **Ekranda göstər** elementi göstərir (Axtarış oxu); **Bu state-in hamısı** / **istifadəçinin hamısı** onları axtarır.
7. **Şərh** — qeydə şərh yazın (kim yaza bilər: qaydanın *Comment*-i). Ayrıca qeyd kimi saxlanır və qeydlə birlikdə göstərilir.
8. **CSV ixrac** — göstərilən sətirlər, baxanın dilində (qayda *Export*-a icazə verirsə).
9. **Klientlər** tabı — §5.

### Kim nəyi görür

Settings → Journal → *Who may see what*: hər ioBroker qrupu üçün bir sətir, üstəlik istifadəçi üçün istisnalar (**+ Exception for a user**).

| Sütun | Dəyərlər | Mənası |
|---|---|---|
| Commands, Values, System, Logs, Clients | `all` · `area` · `own` · `—` | `all`: o növün bütün qeydləri · `area`: istifadəçinin aça bildiyi ekranların (Screen Access) state-lərinə aid qeydlər və istifadəçinin özününkülər · `own`: yalnız istifadəçinin etdikləri · `—`: göstərilmir, axtarılmır |
| IP | ✓ / – | IP ünvanları göstərilir və axtarılır |
| Ids | ✓ / – | state id-ləri göstərilir (əks halda elementin adı və ya id-nin son hissəsi) |
| Back h | saat, `0` = limitsiz | istifadəçi nə qədər geriyə baxa bilər |
| Export | ✓ / – | CSV ixrac |
| Comment | `all` · `own` · `—` | istifadəçi kimin qeydlərinə şərh yaza bilər |

- **Administratorlar** (`admin` istifadəçisi, ioBroker `administrator` qrupu) hər şeyi görür.
- **Sətri olmayan** qrup son 24 saatdakı öz əmrlərini görür, IP-siz və state id-siz.
- Bir neçə qrupda olan istifadəçi qruplarının qaydalarından **ən genişini** alır; **istifadəçi sətri** qrupların qaydasını əvəz edir.
- Tətbiq **serverdə** olunur: hər sorğu heç nə göndərilməzdən əvvəl orada süzülür (növ, sahə, özününkü, geriyə vaxt), IP-lər və state id-ləri orada çıxarılır, axtarış yalnız icazəli sahələrdə aparılır. Brauzer istifadəçisinin görə bilmədiyi heç nəyi almır. Qaydası məhdud olan istifadəçi siyahının üstündə nəyi gördüyünü yazan sətir görür.

### Settings → Journal (designer)

| Ayar | Default | |
|---|---|---|
| On (record) | açıq | |
| Kept in | `influxdb.0` | history instansiyası; vəziyyəti (işləyir / dayanıb) göstərilir |
| Commands · System events · Clients · Logs of web.0 / mywebui.0 | açıq | |
| Log levels | error, warn | istəsəniz info da |
| Value changes of these states | yoxdur | hər sətirdə bir state id |
| Leave out | `system.*` | nümunələr, `*` joker, vergüllə |
| Client signal every / offline after | 20 s / 60 s | |
| Trusted reverse proxy | — | nginx və s. arxasında: proxy-nin IP-si; yalnız onda `X-Forwarded-For`-a inanılır |
| Local queue at most | 50 000 | |
| Who may see what | — | yuxarıda |

Proyektin konfiqi ilə saxlanır (`default` proyektinin `config.journal`-ı); server onu dərhal yenidən oxuyur.

### Dil

Qeydlər cümlə kimi yox, məlumat kimi saxlanır (`{ k: 'command', st: 'error', r: 'timeout', ms: 5000, … }`). Panel onları **baxanın dilində** yazır: 5 hazır dil (az, en, ru, de, tr) və proyektin əlavə etdiyi istənilən dil — Translations dokunda *Built-in (runtime)*: dil əlavə edin, `journal.*` açarlarını doldurun (boş qalanlar İngiliscə göstərilir); proyekt mətni hazır mətni üstələyir. Element adları proyekt tərcümələrindən və ya obyektin `common.name`-indən gəlir. Tərcümə olunmayanlar: web.0 / mywebui.0 log mətnləri (adapterin öz İngiliscəsi) və şərhlər (yazıldığı kimi).

### Skriptlər və inteqrasiya üçün

- `IOB.openJournal()`, `IOB.toggleJournal()`.
- `IOB.serverCall('journalQuery', { from, to, kinds, text, limit })` → `{ entries, more, rule, status }` — paneldəki ilə eyni süzgəc.
- `IOB.serverCall('journalClients', {})` → onlayn klientlər (istifadəçinin görə bildiyi kimi).
- `mywebui.0.journal.*` state-lərində tarixçə, `mywebui.0.info.clients`-də onlayn klient sayı var.
- Jurnalın bütün çağırışları **gateway**-dən keçir (web.0-ın `POST /mywebui-api/…`): istifadəçi web sessiyasınındır, IP sorğunundur. Gateway olmadan jurnal boş qalır.

---

## 2. Mesajlar — səhifənin canlı trafiki

*Bu səhifənin* açıldığı andan bəri trafiki, serversiz: səhifənin istifadə etdiyi state-lərin hər yeniləməsi (↓) və əmri (↑), kim istədi (istifadəçi · nə vasitəsilə), kim qəbul etdi (driver), nə qədər çəkdi və nəticə; hər dəyər nə qədər qaldı, ən yenisi nə qədərdir qalır (sayır). **Ping the changes** dəyəri dəyişən elementləri işıqlandırır, **Gray what shows no state** qalanlarını solğunlaşdırır, **Alt** basılı ikən bağlı elementlərin üstündə etiket görünür, **◎** bir element üzrə süzür. Düymə: `navigation/messages-button` (nişanı son açılışdan bəri təsdiqlənməyən əmrləri sayır). Kim: administratorlar və ya proyektin `messages` təhlükəsizlik əməliyyatı. Təfərrüat: [bindings.md](bindings.md) → *Messages*.

## 3. Axtarış — haradadır?

Ctrl+Shift+F, `navigation/find-button` və ya `IOB.openFind('P-101')`. id-si olan hər elementi, hər custom controlu və state-ə bağlı hər şeyi — bu ekranda və bütün digər ekranlarda — id, ad (`FT 01`, controlun `pointName`-indən), növ (`pumps/pump1`) və administratorlar üçün state id-si üzrə axtarır. Sətirin üstünə gələndə element bənövşəyi oxla göstərilir; başqa ekrandakı element həmin ekranı açır və orada göstərilir. Skriptlər üçün `IOB.pointAt(element)`. Təfərrüat: [screens.md](screens.md) → *Find*.

## 4. State istifadəsi — hansı state-lər, harada, necə

Designer → Refactor → **State usage**: proyektin hər state-i R / W, say, fayllar ilə; ioBroker obyekti olmayan id-lər üçün ⚠ *no object*, şablonlar üçün *runtime*; hər istifadə üçün fayl, element (id, yoxdursa controlu), necə bağlandığı və sətir; **Go** faylı açıb elementi seçir və ya skripti həmin sətirdə açır. Redaktə edərkən canlı yenilənir. *Selection* tabı köhnə search / replace-i saxlayır. Təfərrüat: [screens.md](screens.md) → *State usage*.

## 5. Onlayn klientlər

Jurnal → **Klientlər**: hazırda kim qoşulub — istifadəçi, IP, cihaz və brauzer (`Galaxy A52 · Chrome`), runtime və ya designer, indiki ekran, nə vaxtdan qoşulub, son siqnal. Hər səhifə hər 20 s-dən bir burada olduğunu bildirir (və çıxanda da); 60 s susan səhifə *ayrıldı* sayılır. İstifadəçi web sessiyasından gəlir (heç vaxt brauzerdən yox); IP sorğununkudur, reverse proxy arxasında yalnız **etibarlı** proxy-nin `X-Forwarded-For`-u. Kim görə bilər və IP-lərlə yoxsa yox: qaydanın *Clients* və *IP*-si. Qoşuldu / çıxdı / ekran hadisələri jurnala *Klient* qeydləri kimi düşür.

---

## 6. Sessiyalar — bir istifadəçi, bir yer

Ayarlar → **Sessiyalar** (standart olaraq söndürülüb): bir brauzerdə daxil olmuş istifadəçi eyni vaxtda başqa brauzerdən daxil ola bilməz.

- **Limit** — eyni vaxtda neçə yer (standart 1). Bir brauzerin tabları bir yer sayılır; designer və runtime birlikdə sayılır.
- **İstisnalar** — məhdudlaşdırılmayan qruplar və istifadəçilər (standart: `administrator` qrupu, `admin` istifadəçisi).
- **İkinci giriş rədd edilir.** Onun səhifəsi bağlanır: *"operator artıq burada daxil olub: 192.168.1.20 · Windows · Chrome · 09:14-dən"* və *Girişə qayıt* düyməsi. Onun web sessiyası bitirilir, mywebui onun heç bir çağırışına cavab vermir. "Digərini bağla" düyməsi qəsdən **yoxdur**: parolu bilən biri operatoru çıxara bilməməlidir.
- **Birinci yerə xəbər verilir** (növbəti siqnalı ilə, ~20 s ərzində): *"Kimsə sizin adınızla daxil olmağa çalışdı"* — IP, cihaz və vaxt. *OK, qalıram* qeydi bağlayır; *Çıxış* buradan çıxır, istifadəçinin öz istəyi ilə — sonra o biri yer daxil ola bilər.
- **Jurnal:** hər rədd edilmiş giriş *Klient* qeydidir `Giriş rədd edildi` (istifadəçi, IP, cihaz və istifadəçinin artıq harada olduğu), hər brauzer üçün 5 dəqiqədə bir dəfə; qeyddən çıxış `Çıxdı (giriş cəhdindən sonra)`. Giriş, çıxış, qoşuldu və ayrıldı əvvəlki kimi yazılır.
- Yer **brauzerin web sessiyasıdır** (giriş cookie-si), onu server müəyyən edir — səhifənin dediyi id yox; başqa brauzerin id-lərini köçürmək içəri buraxmır. Yer səhifəsi siqnal verdikcə sayılır (60 s); bağlanmış brauzer bundan sonra yerini boşaldır. mywebui-nin restartı yerləri saxlayır.
- Hədd: yoxlamanı mywebui-nin server çağırışları və səhifə edir. web.0 socket-i üzərindən adi state oxuma/yazma web.0-ın öz girişidir; bloklanmış səhifə əlaqəsini bağlayır.

---

## Daxildə

| Hissə | Fayl |
|---|---|
| Jurnal (server): izləmə, əmrləri ack ilə cütləşdirmə, növbə, storeState, sorğular, qaydalar | `src-original/backend/journal.js` |
| Gateway əmrləri `journalQuery`, `journalContext`, `journalComment`, `journalClients`, `journalStatus`, `journalReload`, `clientHello`, `clientBye` | `webExtension.cjs`, `main.js` → `onMessage` |
| Brauzer: mövcudluq, yazma konteksti | `www/dist/frontend/common/JournalClient.js` |
| Jurnal paneli | `www/dist/frontend/common/JournalPanel.js` |
| Mesajlar | `common/MessageLog.js`, `common/MessagesPanel.js` |
| Axtarış | `common/FindPanel.js` |
| State istifadəsi skaneri (brauzer və server) | `common/StateUsage.js`, `config/StateUsageView.js` |
| Mətnlər (5 dil) | `common/BuiltinTranslations.js` (`journal.*`, `msgs.*`, `find.*`) |
| Testlər | `test/journal.mjs`, `test/messages.mjs`, `test/find.mjs`, `test/state-usage.mjs` |

Web / mywebui log sətirlərini almaq üçün adapter `logTransporter`-i (io-package) elan edir.
