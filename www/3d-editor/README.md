# mywebui 3D Editor

Browser-based 3D editor for mywebui using Three.js with webcomponents technology.

## Features

### Phase 1: Core Viewer ✅
- [x] Three.js scene setup with WebGLRenderer
- [x] OrbitControls for camera navigation
- [x] TransformControls for object manipulation
- [x] GLB model loading with metadata extraction
- [x] Selection system with object picking (raycasting)
- [x] Object highlighting on selection
- [x] Automatic shadow mapping and lighting

### Phase 2: Signal Binding ✅ COMPLETE
- [x] SignalStore implementation ✅
- [x] GLB metadata extraction ✅
- [x] mywebui property panel integration ✅
- [x] Two-way data binding ✅
- [x] Signal subscription system ✅
- [x] PropertyPanelAdapter (bridge) ✅
- [x] PropertyStore (state management) ✅
- [x] Editor3DWrapper (mywebui integration) ✅

### Phase 3: Custom Controls (Todo)
- [ ] Webcomponent loader
- [ ] DOM overlay positioning
- [ ] Event propagation
- [ ] Signal binding for controls

### Phase 4: Asset Manager & Planner (Todo)
- [ ] Asset manager UI
- [ ] Snap-point system
- [ ] Chain dragging
- [ ] Layout planner

## Project Structure

```
3d-editor/
├── src/
│   ├── core/
│   │   ├── 3d-editor.ts         # Main editor class
│   │   ├── scene-manager.ts     # Three.js scene management
│   │   ├── glb-loader.ts        # GLB file loading
│   │   ├── selection-manager.ts # Object selection
│   │   └── signal-store.ts      # Signal state management
│   ├── components/              # Custom webcomponents (Phase 3)
│   ├── ui/                      # UI panels (Phase 2)
│   ├── utils/                   # Utilities
│   └── index.ts                 # Main export
├── package.json
├── tsconfig.json
└── README.md
```

## Quick Start

### Installation

```bash
cd www/3d-editor
npm install
npm run build
```

### Basic Usage

```typescript
import { Editor3D } from '@mywebui/3d-editor';

// Create editor
const container = document.getElementById('3d-viewport');
const editor = new Editor3D(container, {
  backgroundColor: '#2a2a2a',
  cameraPosition: [10, 10, 10],
});

// Load a GLB model
const model = await editor.loadModel('path/to/model.glb', 'model_1');

// Get managers
const scene = editor.getSceneManager();
const selection = editor.getSelectionManager();
const signals = editor.getSignalStore();

// Save scene data
const sceneData = editor.saveScene();

// Cleanup
editor.dispose();
```

## Core Classes

### Editor3D

Main editor class that coordinates all components.

```typescript
const editor = new Editor3D(container, config);
await editor.loadModel(url, componentId);
editor.setBinding(componentId, property, signalName);
const sceneData = editor.saveScene();
```

### SceneManager

Manages Three.js scene, camera, renderer, and controls.

```typescript
const sceneManager = editor.getSceneManager();
sceneManager.addObject(object, selectable);
sceneManager.selectObject(object);
sceneManager.setTransformMode('translate');
```

### GLBLoader

Loads GLB files and extracts metadata.

```typescript
const loader = new GLBLoader();
const model = await loader.loadGLB(url);
// model.scene, model.animations, model.metadata
```

### SelectionManager

Handles object selection and property management.

```typescript
const selection = editor.getSelectionManager();
const properties = selection.getEditableProperties(object);
selection.applyProperty(object, 'position', [0, 0, 0]);
```

### SignalStore

Central signal state management with event-driven updates.

```typescript
const signals = editor.getSignalStore();
signals.register('myapp.angle', 'float', 0);
signals.subscribe('myapp.angle', (value) => console.log(value));
signals.set('myapp.angle', 45);
signals.bind('model_1', 'rotation.y', 'myapp.angle');
```

## GLB Metadata Format

Store metadata in GLB files using `userData.realvirtual`:

```json
{
  "userData": {
    "realvirtual": {
      "signals": {
        "rotationSignal": 0,
        "visibleSignal": true
      },
      "bindings": {
        "rotation.y": "myapp.state.angle",
        "visible": "myapp.state.isVisible"
      },
      "customControl": {
        "type": "PopupControl",
        "properties": {}
      },
      "snapPoints": {
        "outlet": {
          "position": [0, 0, 0.5],
          "typeId": "conveyor-out"
        }
      }
    }
  }
}
```

## mywebui Integration

### Custom Events

The editor emits custom events for mywebui integration:

```typescript
window.addEventListener('3d-selection-changed', (event) => {
  const { componentId, properties, bindings } = event.detail;
  // Update mywebui property panel
});

window.addEventListener('3d-selection-cleared', () => {
  // Close property panel
});
```

### Property Editor Integration

Selected objects expose editable properties:

```typescript
interface PropertyDefinition {
  name: string;
  type: 'vec3' | 'euler' | 'bool' | 'string' | 'number';
  value: any;
  binding: boolean;
  fields?: string[];
}
```

### Signal Binding UI

The property editor can bind object properties to mywebui signals:

```typescript
editor.setBinding('model_1', 'rotation.y', 'myapp.state.angle');
```

This creates two-way binding:
- When signal changes → object updates
- When user drags object → signal updates (Phase 2)

## Development

### Build

```bash
npm run build
```

### Watch

```bash
npm run watch
```

### Type Checking

```bash
tsc --noEmit
```

## Dependencies

- **three**: 3D graphics library
- **TypeScript**: Language and type safety

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- WebGL 2.0 required

## Performance Notes

- Lazy-loads asset library
- Mesh instancing for repeated models
- Viewport culling
- 60 FPS target with 30 FPS fallback
- Signal batch updates

## Future Enhancements

1. **Phase 2**: Property editor integration with mywebui
2. **Phase 3**: Custom webcomponent overlays
3. **Phase 4**: Asset manager and layout planner
4. **Phase 5**: VR/AR support (WebXR)
5. **Phase 5**: Collaborative editing

## License

MIT
