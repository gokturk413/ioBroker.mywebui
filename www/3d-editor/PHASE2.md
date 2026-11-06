# Phase 2: Signal Binding + mywebui Integration - COMPLETE ✅

## Overview

Phase 2 implements the complete signal binding system and integration with mywebui's property panel, enabling:
- 🎯 Click 3D object → mywebui property panel opens
- 🔗 Bind properties to mywebui signals
- ↔️ Two-way real-time sync (UI ↔ 3D object ↔ signal)
- 💾 Save/load bindings and scene state

## New Components

### 1. PropertyStore (`core/property-store.ts`)
**Purpose:** Persistent state management for component properties and bindings

```typescript
class PropertyStore {
  // Track properties and their signal bindings
  updateProperty(componentId, property, value)
  setBinding(componentId, property, signalName)
  getBinding(componentId, property): string | undefined
  hasBinding(componentId, property): boolean
  getAllBindings(componentId): Record<string, string>
  
  // Persistence
  serialize(): Record<string, ComponentPropertyState>
  deserialize(data)
}
```

**Used By:**
- PropertyPanelAdapter (for binding management)
- Editor3D (for scene save/load)
- mywebui property panel (for binding UI)

---

### 2. PropertyPanelAdapter (`core/property-panel-adapter.ts`)
**Purpose:** Bridge between 3D editor and mywebui property panel

```typescript
class PropertyPanelAdapter {
  // Property editing (from mywebui panel)
  onPropertyEdited(componentId, property, value)
  updateProperty(componentId, property, value)
  getPropertyValue(componentId, property)
  
  // Signal binding (with 🔗 icons)
  onBindingSet(componentId, property, signalName)
  onBindingRemoved(componentId, property)
  
  // Signal discovery
  getAvailableSignals(): Signal[]
  canBindPropertyToSignal(property, signalType): boolean
  
  // Events to mywebui
  onEvent(callback: (event: PropertyPanelEvent) => void)
  
  // State management
  exportState()
  importState(state)
}
```

**Event Flow:**
```
Selection in 3D
  ↓
PropertyPanelAdapter.onObjectSelected()
  ↓
Emit 'selection-changed' event with properties
  ↓
mywebui property panel receives event
  ↓
Render editable properties + binding icons
  ↓
User edits property/binding
  ↓
PropertyPanelAdapter.onPropertyEdited/onBindingSet()
  ↓
Update 3D object + PropertyStore
  ↓
Subscribe to signal changes
  ↓
Update 3D object in real-time
```

---

### 3. Editor3DWrapper (`ui/3d-editor-wrapper.ts`)
**Purpose:** Easy-to-use wrapper for mywebui integration

```typescript
class Editor3DWrapper {
  loadModel(url, componentId)
  
  // mywebui callbacks
  onPropertyEdited(componentId, property, value)
  onBindingSelected(componentId, property, signalName)
  onBindingRemoved(componentId, property)
  
  // Query methods
  getAvailableSignals()
  canBindPropertyToSignal(property, signalType)
  
  // UI control
  setTransformMode(mode: 'translate' | 'rotate' | 'scale')
  selectObject(componentId)
  
  // Export for saving
  exportScene()
}
```

---

## Integration with mywebui

### Custom Events

**3d-selection-changed**
```typescript
window.addEventListener('3d-selection-changed', (event) => {
  const {
    componentId,      // 'model_1'
    componentType,    // 'model' | 'light' | 'group' | 'custom'
    properties,       // PropertyDefinition[]
    bindings,         // Record<property, signalName>
    bindingAvailable  // Record<property, bool>
  } = event.detail;
});
```

**3d-selection-cleared**
```typescript
window.addEventListener('3d-selection-cleared', () => {
  // Close property panel
});
```

---

## How It Works

### 1. User Clicks 3D Object

```
User clicks Cube in viewport
  ↓
SceneManager.raycaster finds object
  ↓
SceneManager.selectObject(cube)
  ↓
SelectionManager.selectObject(cube)
  ↓
PropertyPanelAdapter.onObjectSelected()
  ↓
Extract editable properties:
  - position: [0, 0, 0] (bindable)
  - rotation: [0, 45, 0] (bindable)
  - scale: [1, 1, 1] (bindable)
  - visible: true (bindable)
  - name: "Cube" (not bindable)
  ↓
Get current bindings from PropertyStore
  ↓
Emit window event with detail
```

### 2. mywebui Property Panel Opens

```
Property Panel listens to 3d-selection-changed
  ↓
Render properties:
  
  ┌─────────────────────────────────┐
  │ Selected: Cube (model_1)        │
  ├─────────────────────────────────┤
  │ Position                        │
  │ X: [0]      [🔗] → signal       │
  │ Y: [0]      [🔗]                │
  │ Z: [0]      [🔗]                │
  │                                 │
  │ Rotation                        │
  │ X: [0]      [🔗]                │
  │ Y: [45]     [🔗] ← bound!       │
  │ Z: [0]      [🔗]                │
  │                                 │
  │ Visibility                      │
  │ ☑ Visible  [🔗]                │
  └─────────────────────────────────┘
```

### 3. User Clicks 🔗 Icon to Bind Signal

```
User clicks 🔗 icon on rotation.y
  ↓
Signal selector dialog opens
  ↓
Shows available signals:
  - myapp.state.angle (float)
  - myapp.state.speed (float)
  - myapp.state.active (bool)  ← ❌ Can't bind (wrong type)
  ↓
User selects "myapp.state.angle"
  ↓
PropertyPanelAdapter.onBindingSet(
    'model_1',
    'rotation.y',
    'myapp.state.angle'
  )
  ↓
PropertyStore.setBinding(...) ✓
SignalStore.bind(...) ✓
Subscribe to signal changes ✓
  ↓
Now: ANY change to myapp.state.angle
     → automatically updates object rotation.y
```

### 4. Signal Changes → 3D Updates

```
mywebui signal "myapp.state.angle" changes from 45° to 90°
  ↓
SignalStore.set('myapp.state.angle', 90)
  ↓
Notify all subscribers (from binding)
  ↓
SelectionManager.applyProperty(cube, 'rotation.y', 90)
  ↓
cube.rotation.y = THREE.MathUtils.degToRad(90)
  ↓
Scene re-renders
  ↓
Cube rotates to new angle ✓
```

---

## Usage Example

### Basic Integration

```typescript
import { Editor3DWrapper } from '@mywebui/3d-editor';

// Create wrapper
const wrapper = new Editor3DWrapper(
  document.getElementById('viewport'),
  { backgroundColor: '#2a2a2a' },
  {
    onSelectionChanged: (detail) => {
      console.log('Selected:', detail.componentId);
      // Tell mywebui to show property panel
    },
    onSelectionCleared: () => {
      console.log('Selection cleared');
      // Tell mywebui to hide property panel
    },
    onBindingChanged: (detail) => {
      console.log('Binding:', detail);
      // Save to control file
    },
  }
);

// Load model
await wrapper.loadModel('models/factory.glb', 'factory');

// User clicks object in 3D → property panel opens automatically
// User binds rotation.y → myapp.state.angle
// Signal updates → 3D updates in real-time
```

### From mywebui Property Panel

```typescript
// When user edits a property
wrapper.onPropertyEdited('factory', 'position', [1, 2, 3]);

// When user binds a signal
wrapper.onBindingSelected('factory', 'rotation.y', 'myapp.state.angle');

// Get available signals for dropdown
const signals = wrapper.getAvailableSignals();

// Check if binding is valid
const canBind = wrapper.canBindPropertyToSignal('position', 'float'); // true
const canBind2 = wrapper.canBindPropertyToSignal('visible', 'float'); // false
```

---

## Architecture Diagram

```
┌─────────────────────────────────────────────┐
│  mywebui Designer                           │
│  ├─ Property Panel Component                │
│  └─ Signal System                           │
└────────────────┬────────────────────────────┘
                 │ window.addEventListener
                 │ wrapper.onPropertyEdited()
                 │ wrapper.onBindingSelected()
                 ↓
┌─────────────────────────────────────────────┐
│  Editor3DWrapper                            │
│  (Friendly API for mywebui)                │
└────────────────┬────────────────────────────┘
                 │
    ┌────────────┼────────────┐
    ↓            ↓            ↓
┌────────┐  ┌────────────┐  ┌─────────────┐
│Editor3D│  │PropertyPanel│ │EventEmitter │
│        │  │Adapter      │ │             │
└────┬───┘  └──┬──────────┘  └─────────────┘
     │         │
     ├─────────┤
     ↓         ↓
┌─────────────────────┐
│ SceneManager        │
│ SelectionManager    │
│ SignalStore         │ ← Two-way binding happens here
│ PropertyStore       │
└─────────────────────┘
     ↓
┌─────────────────────┐
│ Three.js Scene      │
│ (Objects update)    │
└─────────────────────┘
```

---

## File Structure

```
www/3d-editor/
├── src/
│   ├── core/
│   │   ├── 3d-editor.ts         (updated)
│   │   ├── scene-manager.ts
│   │   ├── glb-loader.ts
│   │   ├── selection-manager.ts
│   │   ├── signal-store.ts
│   │   ├── property-store.ts       (NEW)
│   │   └── property-panel-adapter.ts (NEW)
│   ├── ui/
│   │   └── 3d-editor-wrapper.ts    (NEW)
│   ├── examples/
│   │   └── mywebui-integration-example.ts (NEW)
│   └── index.ts                (updated)
├── PHASE2.md                   (this file)
├── package.json
├── tsconfig.json
└── README.md
```

---

## Type Definitions

### PropertyDefinition
```typescript
interface PropertyDefinition {
  name: string;
  type: 'vec3' | 'euler' | 'bool' | 'string' | 'number';
  value: any;
  binding: boolean;
  fields?: string[];
  label?: string;
  min?: number;
  max?: number;
}
```

### SignalDefinition
```typescript
interface SignalDefinition {
  name: string;
  type: 'bool' | 'float' | 'int';
  value: SignalValue;
  readonly?: boolean;
}
```

### SelectionChangedDetail
```typescript
interface SelectionChangedDetail {
  componentId: string;
  componentType: 'model' | 'light' | 'group' | 'custom';
  properties: PropertyDefinition[];
  bindings: Record<string, string>;
  bindingAvailable: Record<string, boolean>;
}
```

---

## API Summary

### Editor3D
```typescript
getSceneManager(): SceneManager
getSelectionManager(): SelectionManager
getSignalStore(): SignalStore
getPropertyStore(): PropertyStore
getPropertyPanelAdapter(): PropertyPanelAdapter | null
```

### PropertyPanelAdapter
```typescript
onPropertyEdited(componentId, property, value)
onBindingSet(componentId, property, signalName)
onBindingRemoved(componentId, property)
getAvailableSignals()
canBindPropertyToSignal(property, signalType)
onEvent(callback)
```

### Editor3DWrapper
```typescript
loadModel(url, componentId)
onPropertyEdited(componentId, property, value)
onBindingSelected(componentId, property, signalName)
onBindingRemoved(componentId, property)
getAvailableSignals()
canBindPropertyToSignal(property, signalType)
setTransformMode(mode)
selectObject(componentId)
exportScene()
dispose()
```

---

## Testing Checklist

- [ ] Property panel opens on 3D object click
- [ ] All editable properties display correctly
- [ ] Property values update in real-time
- [ ] Binding icons (🔗) are visible
- [ ] Signal selector dialog works
- [ ] Bindings save to PropertyStore
- [ ] Signal changes update 3D objects
- [ ] Property panel closes on empty area click
- [ ] Multiple objects can be selected/deselected
- [ ] Scene save includes bindings
- [ ] Scene load restores bindings

---

## Known Limitations

- Phase 3: Custom webcomponent overlays not yet implemented
- Phase 4: Asset manager and snap-points not yet implemented
- No undo/redo system yet

---

## Next Steps (Phase 3)

1. Custom webcomponent overlay support
2. DOM positioning in 3D space
3. Signal binding for custom controls
4. Interactive property editing with sliders/pickers
