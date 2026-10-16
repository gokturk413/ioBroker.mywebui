# mywebui 3D Editor Integration Guide

## Overview

Complete guide for integrating the 3D editor into mywebui as a custom control with full property panel support.

## Architecture

```
mywebui Designer
├─ 2D Controls Panel
├─ 3D Editor Tab (NEW)
│  └─ <editor-3d> web component
├─ Property Panel
│  └─ Listens to 3d-selection-changed events
└─ Signal System
   └─ Binds to 3D object properties
```

## Step 1: Installation

### 1.1 Add to mywebui package.json

```json
{
  "dependencies": {
    "@mywebui/3d-editor": "file:./www/3d-editor"
  }
}
```

### 1.2 Install dependencies

```bash
cd www/3d-editor
npm install three
npm run build

cd ../..
npm install
```

## Step 2: Register Custom Control

### 2.1 Create control registration file

**File:** `www/frontend/controls/3d-editor-control.ts`

```typescript
import { Editor3DElement, Editor3DWrapper } from '@mywebui/3d-editor';

export class Editor3DControl {
  private wrapper: Editor3DWrapper | null = null;
  private container: HTMLElement;
  private onPropertyChanged: ((detail: any) => void) | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  async initialize(config: any) {
    // Create wrapper
    this.wrapper = new Editor3DWrapper(this.container, config, {
      onSelectionChanged: (detail) => {
        // Notify mywebui property panel
        this.onPropertyChanged?.(detail);
      },
      onPropertyChanged: (detail) => {
        // Update model data
        console.log('Property changed:', detail);
      },
      onBindingChanged: (detail) => {
        // Save binding to control
        console.log('Binding changed:', detail);
      },
    });

    return this.wrapper;
  }

  getWrapper(): Editor3DWrapper | null {
    return this.wrapper;
  }

  onPropertyUpdate(callback: (detail: any) => void) {
    this.onPropertyChanged = callback;
  }

  dispose() {
    this.wrapper?.dispose();
  }
}
```

### 2.2 Register in mywebui

**File:** `www/frontend/runtime/ControlFactory.ts` (or equivalent)

```typescript
import { Editor3DControl } from './controls/3d-editor-control';

export class ControlFactory {
  static createControl(type: string, container: HTMLElement) {
    switch (type) {
      case '3d-editor':
        return new Editor3DControl(container);
      // ... other controls
    }
  }
}
```

## Step 3: Integrate Property Panel

### 3.1 Create property editor component

**File:** `www/frontend/components/3d-property-editor.ts`

```typescript
import { PropertyDefinition } from '@mywebui/3d-editor';

export class Editor3DPropertyEditor {
  private container: HTMLElement;
  private selectedComponentId: string | null = null;
  private properties: PropertyDefinition[] = [];
  private bindings: Record<string, string> = {};

  constructor(container: HTMLElement) {
    this.container = container;
  }

  onSelectionChanged(detail: any) {
    this.selectedComponentId = detail.componentId;
    this.properties = detail.properties || [];
    this.bindings = detail.bindings || {};
    this.render();
  }

  private render() {
    if (!this.selectedComponentId) {
      this.container.innerHTML = '<p>Select a 3D object to edit</p>';
      return;
    }

    let html = `
      <div class="editor-3d-properties">
        <h3>${this.selectedComponentId}</h3>
        <div class="properties-list">
    `;

    this.properties.forEach((prop) => {
      const binding = this.bindings[prop.name];
      html += `
        <div class="property-group">
          <label>${prop.label || prop.name}</label>
          <div class="property-controls">
            <input 
              type="text" 
              class="property-input" 
              data-property="${prop.name}"
              value="${prop.value}"
              ${prop.type === 'bool' ? 'type="checkbox"' : ''}
            />
            ${prop.binding ? `
              <button class="binding-btn" data-property="${prop.name}">
                🔗 ${binding ? binding : 'Bind'}
              </button>
            ` : ''}
          </div>
          ${binding ? `<small>Bound to: ${binding}</small>` : ''}
        </div>
      `;
    });

    html += '</div></div>';
    this.container.innerHTML = html;

    // Attach event listeners
    this.attachEventListeners();
  }

  private attachEventListeners() {
    // Input changes
    this.container.querySelectorAll('.property-input').forEach((input) => {
      input.addEventListener('change', (e) => {
        const property = (e.target as HTMLInputElement).getAttribute('data-property');
        const value = (e.target as HTMLInputElement).value;
        this.onPropertyChanged?.(property, value);
      });
    });

    // Binding buttons
    this.container.querySelectorAll('.binding-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const property = (e.target as HTMLElement).getAttribute('data-property');
        this.onBindingClick?.(property);
      });
    });
  }

  onPropertyChanged: ((property: string, value: any) => void) | null = null;
  onBindingClick: ((property: string) => void) | null = null;

  dispose() {
    // Cleanup
  }
}
```

### 3.2 Integrate with mywebui property panel

**File:** `www/frontend/runtime/PropertyPanel.ts`

```typescript
import { Editor3DPropertyEditor } from './components/3d-property-editor';

export class PropertyPanel {
  private editor3dPropertyEditor: Editor3DPropertyEditor | null = null;

  constructor(container: HTMLElement) {
    this.setupEventListeners();
  }

  private setupEventListeners() {
    // Listen to 3D editor selection events
    window.addEventListener('3d-selection-changed', (e: any) => {
      this.on3DSelectionChanged(e.detail);
    });

    window.addEventListener('3d-selection-cleared', () => {
      this.on3DSelectionCleared();
    });
  }

  private on3DSelectionChanged(detail: any) {
    if (!this.editor3dPropertyEditor) {
      const container = document.getElementById('properties-3d');
      if (container) {
        this.editor3dPropertyEditor = new Editor3DPropertyEditor(container);
      }
    }

    this.editor3dPropertyEditor?.onSelectionChanged(detail);
  }

  private on3DSelectionCleared() {
    this.editor3dPropertyEditor?.dispose();
    this.editor3dPropertyEditor = null;
  }
}
```

## Step 4: Signal Binding Integration

### 4.1 Connect to mywebui signal system

**File:** `www/frontend/runtime/3d-signal-bridge.ts`

```typescript
import { SignalStore, Editor3DWrapper } from '@mywebui/3d-editor';

export class ThreeDSignalBridge {
  private wrapper: Editor3DWrapper | null = null;
  private signalStore: SignalStore | null = null;
  private mywebuiSignals: Map<string, any> = new Map();

  constructor(wrapper: Editor3DWrapper) {
    this.wrapper = wrapper;
    this.signalStore = wrapper.getEditor().getSignalStore();
    this.setupSignalMapping();
  }

  private setupSignalMapping() {
    if (!this.signalStore) return;

    // Listen to mywebui signal changes
    window.addEventListener('mywebui:signal-changed', (e: any) => {
      const { signalName, value } = e.detail;
      this.signalStore?.set(signalName, value);
    });

    // Listen to 3D editor signal changes
    this.signalStore.getAllSignals().forEach((signal) => {
      this.signalStore?.subscribe(signal.name, (value) => {
        // Notify mywebui of signal change
        window.dispatchEvent(
          new CustomEvent('3d-editor:signal-changed', {
            detail: { signalName: signal.name, value },
          })
        );
      });
    });
  }

  bindPropertyToSignal(componentId: string, property: string, signalName: string) {
    if (!this.wrapper) return;

    const editor = this.wrapper.getEditor();
    editor.setBinding(componentId, property, signalName);

    // Notify mywebui binding created
    window.dispatchEvent(
      new CustomEvent('3d-editor:binding-created', {
        detail: { componentId, property, signalName },
      })
    );
  }

  getAvailableSignals() {
    return this.signalStore?.getAllSignals() || [];
  }

  dispose() {
    // Cleanup
  }
}
```

## Step 5: Control File Format

### 5.1 Extend control format

**File format:** `.control` (JSON)

```json
{
  "type": "3d-editor-viewer",
  "version": 1,
  "name": "Factory Layout",
  "config": {
    "backgroundColor": "#2a2a2a",
    "cameraPosition": [10, 10, 10],
    "gridSize": 0.5
  },
  "scene": {
    "models": [
      {
        "id": "conveyor-1",
        "name": "Industrial Conveyor",
        "url": "models/conveyor.glb",
        "position": [0, 0, 0],
        "rotation": [0, 0, 0],
        "scale": [1, 1, 1],
        "visible": true,
        "bindings": {
          "rotation.y": "myapp.state.angle",
          "visible": "myapp.state.active"
        }
      },
      {
        "id": "robot-1",
        "name": "Industrial Robot",
        "url": "models/robot.glb",
        "position": [5, 0, 0],
        "rotation": [0, 0, 0],
        "scale": [1, 1, 1],
        "visible": true,
        "bindings": {}
      }
    ],
    "connections": [
      {
        "snapPoint1Id": "conveyor-1:outlet",
        "snapPoint2Id": "robot-1:input"
      }
    ]
  }
}
```

## Step 6: Asset Library Setup

### 6.1 Create default library

**File:** `www/assets/models/catalog.json`

```json
{
  "description": "Standard 3D Components Library",
  "assets": [
    {
      "id": "conveyor-straight",
      "name": "Straight Conveyor",
      "url": "conveyor-straight.glb",
      "category": "Conveyors",
      "tags": ["conveyor", "transport"],
      "thumbnail": "conveyor-straight-thumb.png",
      "size": 2048000
    },
    {
      "id": "conveyor-curved",
      "name": "Curved Conveyor",
      "url": "conveyor-curved.glb",
      "category": "Conveyors",
      "tags": ["conveyor", "transport", "curved"],
      "thumbnail": "conveyor-curved-thumb.png",
      "size": 1536000
    },
    {
      "id": "robot-6axis",
      "name": "6-Axis Robot",
      "url": "robot-6axis.glb",
      "category": "Robots",
      "tags": ["robot", "automated", "6-axis"],
      "thumbnail": "robot-6axis-thumb.png",
      "size": 3072000
    },
    {
      "id": "fixture-mount",
      "name": "Component Mount",
      "url": "fixture-mount.glb",
      "category": "Fixtures",
      "tags": ["fixture", "mounting"],
      "thumbnail": "fixture-mount-thumb.png",
      "size": 512000
    }
  ]
}
```

### 6.2 Load library on startup

```typescript
const assetManager = new AssetManager();
await assetManager.loadLibraryFromUrl(
  'standard',
  'Standard Library',
  'assets/models/'
);
```

## Step 7: Designer Integration

### 7.1 Add 3D Editor Tab

**In mywebui designer UI:**

```html
<div class="designer-container">
  <div class="tabs">
    <button class="tab-btn" data-tab="2d">2D Designer</button>
    <button class="tab-btn" data-tab="3d">3D Editor</button>
  </div>

  <div class="tab-content" id="tab-2d">
    <!-- Existing 2D designer -->
  </div>

  <div class="tab-content" id="tab-3d">
    <editor-3d 
      theme="dark" 
      data-bg-color="#2a2a2a"
      data-camera-pos="10,10,10">
    </editor-3d>
  </div>
</div>
```

### 7.2 Tab switching

```typescript
document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const tab = (e.target as HTMLElement).getAttribute('data-tab');
    
    // Hide all
    document.querySelectorAll('.tab-content').forEach((c) => {
      c.style.display = 'none';
    });
    
    // Show selected
    document.getElementById(`tab-${tab}`).style.display = 'block';
    
    if (tab === '3d') {
      // Initialize 3D editor
      initializeEditor3D();
    }
  });
});
```

## Step 8: Build Configuration

### 8.1 Update webpack/build config

Add to mywebui build configuration:

```javascript
module: {
  rules: [
    // TypeScript loader
    {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        configFile: 'www/3d-editor/tsconfig.json'
      }
    },
    // CSS loader for 3D editor
    {
      test: /3d-editor.*\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
},
entry: {
  'frontend/3d-editor': './www/3d-editor/dist/index.js'
}
```

### 8.2 Import in main bundle

**File:** `www/frontend/main.ts`

```typescript
// Import 3D editor
import * as ThreeDEditor from '@mywebui/3d-editor';

// Register custom element
customElements.define('editor-3d', ThreeDEditor.Editor3DElement);

// Make available globally
(window as any).__threeDEditor = ThreeDEditor;
```

## Step 9: Example Usage

### 9.1 Simple example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    editor-3d {
      --color-accent: #0098ff;
      --panel-width: 350px;
    }
  </style>
</head>
<body>
  <editor-3d theme="dark"></editor-3d>

  <script>
    const editor = document.querySelector('editor-3d');
    
    // Load model
    editor.loadModel('models/factory.glb', 'factory-1');
    
    // Listen for selection
    window.addEventListener('3d-selection-changed', (e) => {
      console.log('Selected:', e.detail.componentId);
    });
  </script>
</body>
</html>
```

### 9.2 With asset manager

```typescript
const assetManager = new AssetManager();
const assetPanel = new AssetManagerPanel(assetContainer, assetManager);

// Load library
await assetManager.loadLibraryFromUrl(
  'standard',
  'Standard Library',
  'assets/models/'
);

// Handle asset selection
assetPanel.onAssetSelect((event) => {
  if (event.type === 'asset-selected') {
    editor.loadModel(event.asset!.url, event.asset!.id);
    assetManager.addToRecent(event.asset!.id);
  }
});

assetPanel.render();
```

### 9.3 With layout planner

```typescript
const planner = new LayoutPlanner(
  container,
  sceneManager,
  new SnapPointsManager(),
  assetManager,
  {
    gridSize: 0.5,
    snapDistance: 0.1,
    enableChainDrag: true
  }
);

// User drags asset from library
// → drops on viewport
// → auto-snaps to grid
// → auto-snaps to nearby snap points
// → creates connections
// → chain drag enabled

planner.onComponentPlace((component) => {
  console.log('Placed:', component.id);
});

planner.onComponentsConnect((connection) => {
  console.log('Connected:', connection.id);
});
```

## Step 10: Testing

### 10.1 Unit tests

```typescript
describe('3D Editor Integration', () => {
  it('should load model', async () => {
    const editor = new Editor3D(container);
    const model = await editor.loadModel('model.glb', 'test');
    expect(model).toBeDefined();
  });

  it('should bind property to signal', () => {
    editor.setBinding('model-1', 'rotation.y', 'myapp.angle');
    const binding = editor.getPropertyStore().getBinding('model-1', 'rotation.y');
    expect(binding).toBe('myapp.angle');
  });

  it('should create snap connection', () => {
    const snap1 = snapManager.getSnapPoint('conv1:outlet');
    const snap2 = snapManager.getSnapPoint('conv2:inlet');
    const connection = snapManager.connect(snap1.id, snap2.id);
    expect(connection).toBeDefined();
  });
});
```

### 10.2 Integration tests

```typescript
describe('mywebui Integration', () => {
  it('should emit selection-changed event', (done) => {
    window.addEventListener('3d-selection-changed', (e: any) => {
      expect(e.detail.componentId).toBe('model-1');
      done();
    });

    editor.selectObjectById('model-1');
  });

  it('should update property on signal change', () => {
    editor.setBinding('model-1', 'rotation.y', 'myapp.angle');
    
    const signals = editor.getSignalStore();
    signals.register('myapp.angle', 'float', 0);
    signals.set('myapp.angle', 45);

    const value = editor.getSelectedObject().rotation.y;
    expect(value).toBeCloseTo(Math.PI * 45 / 180, 5);
  });
});
```

## Deployment

### 10.1 Production build

```bash
# Build 3D editor
cd www/3d-editor
npm run build

# Build mywebui with 3D editor
cd ../..
npm run build

# Output → dist/
```

### 10.2 Docker deployment

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8082
CMD ["npm", "start"]
```

## Troubleshooting

### Models not loading?
- Check CORS headers
- Verify model URLs are correct
- Check console for errors

### Property binding not working?
- Ensure signal is registered
- Check signal name matches exactly
- Verify property type compatibility

### Layout planner not snapping?
- Check snap points in GLB metadata
- Verify typeIds match
- Increase snapDistance if needed

---

**Integration complete! 3D editor is now part of mywebui.**
