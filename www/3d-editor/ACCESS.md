# Accessing the 3D Editor

## 🚀 Quick Start Options

### Option 1: Demo Page (FASTEST)
Open demo directly in browser:

```bash
# From project root
open www/3d-editor/demo.html
# or
start www/3d-editor/demo.html
```

**Features:**
- ✅ No build required
- ✅ Three.js working
- ✅ Grid, lighting, controls
- ✅ Sample model loading
- ✅ Export functionality

---

### Option 2: mywebui Integration (RECOMMENDED)

#### Step 1: Install Dependencies

```bash
cd www/3d-editor
npm install
```

#### Step 2: Import in mywebui Main File

**File:** `www/frontend/main.ts` or entry point

```typescript
// Import 3D Editor initialization
import { initializeThreeDEditorIntegration } from './runtime/3d-editor-nav';

// Initialize when mywebui starts
initializeThreeDEditorIntegration();
```

#### Step 3: Register Route

**File:** `www/frontend/router.ts` or routing config

```typescript
import { registerThreeDEditorRoute } from './runtime/3d-editor-nav';

// Register route
registerThreeDEditorRoute(myRouter);
```

#### Step 4: Add to Navigation Menu

**File:** `www/frontend/layout/navigation.ts`

```typescript
const menuItems = [
  // ... existing items
  {
    id: '3d-editor',
    label: '🎨 3D Editor',
    icon: 'cube',
    route: '/3d-editor',
  },
];
```

#### Step 5: Build & Run

```bash
npm run build
npm start
```

**Access at:** `http://localhost:8082/3d-editor`

---

### Option 3: Standalone Component

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    editor-3d {
      width: 100%;
      height: 100vh;
      --color-accent: #0098ff;
    }
  </style>
</head>
<body>
  <editor-3d theme="dark"></editor-3d>

  <script type="module">
    import { Editor3DElement } from './dist/index.js';
    customElements.define('editor-3d', Editor3DElement);
  </script>
</body>
</html>
```

---

## 📁 Route Structure

After integration, access via:

```
/3d-editor                 → Main 3D Editor page
/3d-editor?model=url      → Load model directly
/3d-editor?layout=file    → Load layout file
```

---

## 🎯 Navigation Menu Integration

The 3D Editor appears in:

1. **Main Navigation Bar**
   - Icon: 🎨
   - Label: "3D Editor"
   - Route: `/3d-editor`

2. **Tools Menu** (if available)
   - Category: "Visualization"
   - Quick access to layout planner

---

## 🔗 URL Parameters

### Load Model

```
/3d-editor?model=models/conveyor.glb
/3d-editor?model=https://cdn.example.com/robot.glb
```

### Load Layout

```
/3d-editor?layout=layouts/factory-01.json
```

### Theme Override

```
/3d-editor?theme=ocean
/3d-editor?theme=dark
```

---

## 💡 Features Available

### In Demo Page
- ✅ 3D viewport with lighting
- ✅ Grid helper
- ✅ Orbit controls
- ✅ Load sample models
- ✅ Export scene

### In mywebui Integration
- ✅ All demo features
- ✅ Property panel integration
- ✅ Signal binding
- ✅ Asset manager
- ✅ Layout planner
- ✅ Save/load layouts
- ✅ mywebui signal system

---

## 🛠️ Troubleshooting

### Editor not appearing?

```bash
# Check if demo.html works
open www/3d-editor/demo.html

# Check build output
npm run build
```

### Can't load models?

```typescript
// Verify model paths are correct
const editor = new Editor3D(container);
const model = await editor.loadModel('models/model.glb', 'id');
// Check browser console for errors
```

### Signal binding not working?

```typescript
// Check if signals are registered
const signals = editor.getSignalStore();
console.log(signals.getAllSignals());

// Verify binding format
editor.setBinding('model-1', 'rotation.y', 'myapp.state.angle');
```

---

## 📊 Demo Page Controls

| Button | Function |
|--------|----------|
| **Load Sample Model** | Add test box to scene |
| **Toggle Grid** | Show/hide grid helper |
| **Export Scene** | Download scene as JSON |

---

## 🎨 Customization

### Change Theme

```html
<editor-3d theme="ocean"></editor-3d>

<!-- Available themes -->
<!-- dark, light, material-dark, ocean, nord, dracula, solarized-dark, one-dark, monokai -->
```

### Custom CSS

```css
editor-3d {
  --color-accent: #ff6b6b;
  --panel-width: 400px;
  --font-size-lg: 16px;
}
```

---

## 📚 Files Created

```
www/frontend/
├── route/
│   └── 3d-editor.route.ts          ← Main route component
├── runtime/
│   └── 3d-editor-nav.ts            ← Navigation integration

www/3d-editor/
├── demo.html                        ← Quick demo
├── ACCESS.md                        ← This file
└── (existing editor files)
```

---

## 🚀 Next Steps

1. **Quick Test:** Open `demo.html` in browser ✅
2. **Full Integration:** Follow Step 2-5 above
3. **Load Models:** Add your GLB files to `www/assets/models/`
4. **Create Layouts:** Use layout planner to design layouts
5. **Bind Signals:** Connect properties to mywebui signals

---

## ✅ Verification Checklist

- [ ] Demo page loads and displays 3D scene
- [ ] Can load sample model
- [ ] Grid toggle works
- [ ] Export scene produces JSON file
- [ ] mywebui route accessible at `/3d-editor`
- [ ] Navigation menu shows "🎨 3D Editor"
- [ ] Property panel appears when clicking objects
- [ ] Asset manager loads library
- [ ] Can create and save layouts
- [ ] Signal binding works

---

**Status: Ready to Use! 🎉**

Choose your preferred access method above and start using the 3D Editor!
