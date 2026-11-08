# Symbol templates

Ready-made SVG symbols (pumps, valves, tanks, instruments, motors, heat exchangers, piping,
electrical, gauges) in the designer's gallery: **Gallery → Symbols**. They are global, so every
project sees the same list. You can add your own.

## Using a symbol

1. Open **Gallery → Symbols**. Only the categories are read first; a category's symbols are read the
   first time you open it, and their previews are drawn as they scroll into view.
2. Drag a symbol onto a screen, a report or a custom control, or click it and draw a box.
3. Right-click a symbol for **Show SVG code** and **Copy SVG code**.

A symbol drops as a positioned `<div data-symbol="name">` holding the inline `<svg>`:

```html
<div data-symbol="ball_valve" style="position:absolute;left:40px;top:40px;width:160px;height:128px">
  <svg viewBox="0 0 60 48" style="width:100%;height:100%;display:block">…</svg>
</div>
```

So **the document owns its copy**. A screen, a control and a project export carry the symbols they
use, with nothing else to install, and an import brings them along. Changing or deleting a global
symbol later does not change a screen that already uses it.

The shipped symbols draw with `currentColor`. A dropped box starts with `color: var(--ui-dim)`, which
shows on a light and on a dark background and follows the theme; set the box's colour or bind it. Bindings, animations and effects work on the box and on
the SVG's own elements like on any other element.

## Uploading your own

**Gallery → Symbols → Upload SVG…**, pick one or more `.svg` files, then name a category (an existing
one or a new one). A symbol of the same name is replaced. It takes a designer user with write
rights on the global store.

Every file is cleaned before it is stored, because a symbol becomes part of a page:

- only drawing elements stay; `script`, `foreignObject`, links, animation elements and editor data go;
- `on…` attributes, `javascript:` and addresses outside the file are removed; a bitmap stays only as
  an embedded PNG or JPEG;
- ids and style rules are made unique to the symbol, so two symbols cannot take each other's
  gradients or colours;
- a file with entities, one that is not an SVG, or one over 512 KB after cleaning is refused, with
  the reason.

**Whose files they are.** Uploaded symbols stay on your system. Upload only files you have the right
to use. A symbol library that comes with another product usually does not allow copying it into a
different product, even when it is compressed. When a file names a copyright owner, the designer
asks before storing it.

## Storage

`mywebui.0.data` → `global/symbols/`: `index.json` and one `<category>.pack` per category. A pack is
the category's symbols gzipped together under a light mask, so a category of similar symbols stays
small (the shipped 298 KB of SVG take 28 KB) and the files DB holds no loose SVG files.

**The packs are not copy protection.** Anyone who can open the designer can read a symbol's code, and
a browser can show the source of any SVG on a page. What keeps a symbol yours is its licence.

## The shipped symbols

| Category | Source |
|---|---|
| every other category | drawn for mywebui from what each device does, same licence as the adapter; each carries `<desc>mywebui symbol, gokturk413</desc>` |
| Gauges and Meters | Clker.com, each file marked public domain in its own metadata |

The mark means what it says: only symbols drawn in this repository get it, and a symbol traced or adapted from another library must not. To build them: `node scripts/build-symbols.mjs` (`scripts/symbols-src/`). A pack is seeded on start
like the default controls: a file you have changed is left alone.
