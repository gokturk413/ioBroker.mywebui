# Developer körpüsü (VS Code)

mywebui VS Code extension-u designer-i webview-də göstərir və onu idarə edir. Extension
control-ları və ekranları açır və yeniləyir, elementləri seçir, workspace-dəki npm widget-i
sınayır. Sizin designer-də nəyi seçdiyinizi və saxladığınızı da bilir. Protokolun tam təsviri
ingiliscə sənəddədir: [developer-bridge.md](developer-bridge.md).

## Necə yandırılır

Admin → mywebui instance → **Developer** → **Developer körpüsü**. Default olaraq sönülüdür.
İstehsalat serverində sönülü saxlayın.

**İcazəli çərçivə səhifələri** sahəsinə designer-i çərçivəyə ala biləcək səhifələri vergüllə
yazın. Hər giriş ya tam origin olur və dəqiq müqayisə edilir (`http://localhost:55600`), ya da
yalnız sxem olur (`vscode-webview://`; hər VS Code webview-inin öz təsadüfi id-si var). VS Code
üçün `vscode-webview://` lazımdır, default dəyər də budur.

Designer körpü ilə yalnız bu beş şərtin hamısı ödənəndə danışır:

1. designer iframe-in içində açılıb;
2. iframe ünvanın fragment hissəsində token ilə açılıb: `…/index.html#mywebui-dev=<token>`.
   Fragment serverə getmir. Designer onu ünvandan silir və `sessionStorage`-da saxlayır,
   ona görə login yönləndirməsindən və ya reload-dan sonra körpü işləməyə davam edir;
3. çərçivə səhifəsinin origin-i icazəli siyahıdadır;
4. **Developer körpüsü** yandırılıb;
5. istifadəçi qoşulmaya icazə verib. Token-i iframe-i açan səhifənin özü seçir, ona görə o,
   designer-i kimin açdığını sübut etmir. Hər tab-da ilk qoşulmada designer soruşur. Eyni
   tab-da reload olanda yenidən soruşmur.

Şərtlərdən biri ödənmirsə, designer heç nə göndərmir və heç nəyə qulaq asmır.

Qoşulmuş extension istifadəçinin adından işləyir. O, control-un style və script-ini redaktə edə
bilir (script designer-də işləyir) və designer-in öz Save yolu ilə saxlaya bilir. Bu zaman
istifadəçi Save düyməsini basanda olduğu kimi eyni hüquq və lisenziya yoxlamaları tətbiq olunur.
Qoşulmaya istifadəçinin icazə verməsi buna görə lazımdır.

## Görünüş profilləri

| Profil | Nə görünür |
|---|---|
| `control` | hər şey, sol tərəf (project, outline, gallery) və aşağıdakı style / javascript pəncərələri istisna olmaqla. Naviqasiyanı və style/script redaktəsini VS Code edir |
| `widget` | Properties, yanında Settings (Layout bölməsi ilə), History Query, Report və Translations; başqa pəncərə yoxdur |
| `full` | adi designer |

Control və ya ekran açılanda `control` profilinə keçilir, widget sınananda `widget` profilinə.
Körpü bağlananda (extension-dan və ya status sətrindəki **⇄ VS Code** düyməsinin menyusundakı
**Disconnect** ilə) designer adi görünüşə qayıdır.

## npm widget-i publish etmədən sınamaq

Extension widget-i öz proxy-si üzərindən `/__mywebui-dev/widgets/<paket>/…` yolu ilə verir.
Bu yol designer ilə eyni origin-dədir. Designer modulu import edir və property-ləri
`custom-elements.json` əsasında, quraşdırılmış widget-lərdə olduğu kimi qurur. Sonra
elementi boş **dev canvas**-da yerləşdirir. Dev canvas saxlanmır.

Bir səhifədə eyni custom element iki dəfə qeydiyyatdan keçə bilmir:

- Widget dəyişəndən sonra `reload-required` xətası gəlir: extension iframe-i yenidən yükləyir
  və widget-i yenidən açır.
- `already-defined` xətası o deməkdir ki, bu tag artıq quraşdırılmış bir paketə məxsusdur.
  Bu halda tag-ın adını dəyişin.
