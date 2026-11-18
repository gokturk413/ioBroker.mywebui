# Phase 5: Snap Points & Layout Planner - COMPLETE ✅

## Overview

Professional layout assembly system for creating industrial layouts with snappable components, grid-based positioning, and connected object chains.

**Features:**
- 🎯 Snap-point connection system
- 🔗 Component linking with typeId matching
- 📦 Chain dragging (connected objects move together)
- 🎨 Grid-based positioning
- 📊 Layout visualization
- 💾 Layout save/load
- 🎪 Professional planner mode

## Architecture

```
SnapPointsManager (Core)
├── Snap point registry
├── Connection management
├── Chain detection (transitive closure)
├── Auto-snapping
└── Serialization

LayoutPlanner (UI)
├── Grid system
├── Drag-drop placement
├── Gizmo-based transform
├── Connection visualization
└── Layout export/import
```

## Core Classes

### SnapPointsManager

Manages all snap points, connections, and chains.

```typescript
class SnapPointsManager {
  // Snap point operations
  registerSnapPoint(componentId, snapPoint)
  getSnapPoint(snapPointId): SnapPoint
  getComponentSnapPoints(componentId): SnapPoint[]

  // Connection management
  canConnect(snapId1, snapId2): boolean
  connect(snapId1, snapId2): SnapConnection | null
  disconnect(connectionId): void
  getConnections(): SnapConnection[]

  // Chain management (connected objects)
  getObjectChain(componentId): Set<string>
  moveChain(componentId, offset, components)

  // Auto-snapping
  findNearbySnaps(position, typeId?, maxDistance?): SnapPoint[]
  autoSnap(snapId, components, maxDistance?): SnapConnection | null

  // Component tracking
  registerComponent(component)
  getComponent(componentId): PlacedComponent
  getAllComponents(): PlacedComponent[]
}
```

### LayoutPlanner

Professional UI for assembling layouts.

```typescript
class LayoutPlanner {
  // Component placement
  async placeComponent(asset, position): PlacedComponent | null
  removeComponent(componentId)

  // Selection
  selectComponent(componentId)
  deselectComponent()

  // Drag & drop
  startDragComponent(componentId)
  endDragComponent(componentId, newPosition)

  // Grid
  setGridSize(size)
  toggleGrid()

  // Layout operations
  exportLayout()
  async importLayout(layoutData)
}
```

## Data Models

### SnapPoint
```typescript
interface SnapPoint {
  id: string;
  name: string;
  position: THREE.Vector3;
  normal: THREE.Vector3;      // Connection direction
  typeId: string;             // e.g., 'conveyor-out', 'robot-mount'
  flow: 'in' | 'out' | 'bidi'; // Input/Output/Bidirectional
  occupied: boolean;
  pairedSnapId?: string;      // Connected snap point
}
```

### SnapFlow Types
```
'in'   → Receives connections (e.g., conveyor input)
'out'  → Sends connections (e.g., conveyor output)
'bidi' → Can connect either way (universal mount)
```

### SnapConnection
```typescript
interface SnapConnection {
  id: string;
  snapPoint1Id: string;
  snapPoint2Id: string;
  object1Id: string;
  object2Id: string;
  type: 'permanent' | 'temporary';
}
```

### PlacedComponent
```typescript
interface PlacedComponent {
  id: string;
  catalogId: string;        // Asset reference
  glbUrl: string;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  scale: THREE.Vector3;
  visible: boolean;
  snapPoints: SnapPoint[];  // From GLB metadata
  metadata?: Record<string, any>;
}
```

## Usage Examples

### Basic Setup

```typescript
import { SnapPointsManager } from '@mywebui/3d-editor';
import { LayoutPlanner } from '@mywebui/3d-editor';

const snapManager = new SnapPointsManager();
const planner = new LayoutPlanner(
  container,
  sceneManager,
  snapManager,
  assetManager,
  {
    gridSize: 0.5,
    snapDistance: 0.1,
    enableChainDrag: true
  }
);

// Listen for events
planner.onComponentPlace((component) => {
  console.log('Placed:', component.id);
});

planner.onComponentsConnect((connection) => {
  console.log('Connected:', connection.id);
});
```

### Defining Snap Points in GLB

Store in `userData.realvirtual.snapPoints`:

```json
{
  "userData": {
    "realvirtual": {
      "snapPoints": {
        "inlet": {
          "position": [0, 0, -0.5],
          "normal": [0, 0, -1],
          "typeId": "conveyor-in",
          "flow": "in"
        },
        "outlet": {
          "position": [0, 0, 0.5],
          "normal": [0, 0, 1],
          "typeId": "conveyor-out",
          "flow": "out"
        },
        "mount": {
          "position": [0, 1, 0],
          "normal": [0, 1, 0],
          "typeId": "robot-mount",
          "flow": "bidi"
        }
      }
    }
  }
}
```

### Snap Connection Rules

```typescript
// Automatic compatibility checking

// Type ID must match
conveyor.outlet (typeId: 'conveyor-out')
  ↓ can connect to
conveyor.inlet (typeId: 'conveyor-in')

// Flow must be compatible
'in' ↔ 'out'     ✅ OK
'bidi' ↔ anything ✅ OK
'in' ↔ 'in'      ❌ NO
```

### Placing Components

```typescript
// Drag from asset grid to viewport
// Drop position is snapped to grid automatically

const asset = {
  id: 'conveyor-01',
  name: 'Industrial Conveyor',
  url: 'conveyor.glb',
  category: 'Conveyors'
};

// Place at position (snaps to grid)
const component = await planner.placeComponent(
  asset,
  new THREE.Vector3(0, 0, 0)
);

// Result:
// - Model loaded
// - Snap points extracted
// - Grid-snapped position
// - Auto-snapped to nearby connections
```

### Chain Dragging

```typescript
// When enableChainDrag = true:
// - Dragging one conveyor moves entire chain
// - All connected objects move together
// - Relative positions maintained

planner.startDragComponent('conveyor-1');
// ... user drags ...
planner.endDragComponent('conveyor-1', newPosition);

// All connected conveyors move with it!
const chain = snapManager.getObjectChain('conveyor-1');
// → Set { 'conveyor-1', 'conveyor-2', 'robot-1', ... }
```

### Grid System

```typescript
// Toggle grid visibility
planner.toggleGrid();

// Change grid size
planner.setGridSize(1.0); // 1m grid cells

// Components auto-snap to grid:
position: [3.7, 0, 2.1]
  ↓ (with gridSize 0.5)
position: [3.5, 0, 2.0]
```

### Auto-Snapping

```typescript
// When placing component, nearby compatible snaps are found:
1. Within snapDistance (default 0.1 units)
2. Same typeId
3. Compatible flow

// If match found:
- Positions aligned
- Connection created
- Objects linked
```

### Chain Detection

```typescript
// Get all objects connected to one component
const chain = snapManager.getObjectChain('conveyor-1');

// Transitive closure example:
// conveyor-1 → conveyor-2 → conveyor-3
// conveyor-2 → robot-1
// Result: { conveyor-1, conveyor-2, conveyor-3, robot-1 }

// Move entire chain
snapManager.moveChain(
  'conveyor-1',
  new THREE.Vector3(1, 0, 0),
  componentsMap
);
```

### Layout Export/Import

```typescript
// Save layout
const layoutData = planner.exportLayout();
// {
//   components: [
//     { id, position, rotation, scale, ... }
//   ],
//   connections: [
//     { snapPoint1Id, snapPoint2Id, ... }
//   ]
// }

// Save to file/database
localStorage.setItem('my-layout', JSON.stringify(layoutData));

// Later: Load layout
const saved = JSON.parse(localStorage.getItem('my-layout'));
await planner.importLayout(saved);
```

## Visual Elements

### Grid Helper
```typescript
// Visible grid for alignment
// Can be toggled on/off
// Size configurable
gridHelper = new THREE.GridHelper(width, divisions, color, gridColor);
```

### Connection Lines
```typescript
// Visual lines between connected snap points
// Green lines show connections
// Drawn after each snap operation
```

### Gizmos
```typescript
// Transform controls for selected component
// Translate/Rotate/Scale modes
// Updates snap positions
```

## Real-World Example: Assembly Line

```typescript
import { Editor3D } from '@mywebui/3d-editor';
import { LayoutPlanner } from '@mywebui/3d-editor';

// Initialize
const editor = new Editor3D(viewportContainer);
const planner = new LayoutPlanner(
  plannerContainer,
  editor.getSceneManager(),
  new SnapPointsManager(),
  assetManager,
  { gridSize: 1.0, enableChainDrag: true }
);

// Load library with snap points
await assetManager.loadLibraryFromUrl(
  'industrial',
  'Industrial Components',
  'assets/industrial/'
);

// Drag-drop assembly
// 1. Drag conveyor from asset grid → place on grid
// 2. Snap points detected automatically
// 3. Drag another conveyor → snaps to first
// 4. Drag robot → snaps to conveyor
// 5. Select conveyor → drag entire chain moves together

// Export layout
const layout = planner.exportLayout();
await saveLayoutToDatabase(layout);

// Later: Load and edit
const saved = await loadLayoutFromDatabase();
await planner.importLayout(saved);
```

## Performance Considerations

### Chain Detection Algorithm
```
Time: O(V + E) where V = components, E = connections
Space: O(V) for chain set

For typical layout: ~50 components, ~100 connections
Average chain size: ~10 objects
Negligible performance impact
```

### Snap Detection
```
Time: O(n) for each snap point
Space: O(1)

Optimizations:
- Spatial hashing could reduce to O(1)
- For now: acceptable for <500 snap points
```

### Memory
```
Per snap point: ~100 bytes
Per connection: ~50 bytes
Per component: ~200 bytes

Example: 100 components with 400 snap points
Total: ~20KB in-memory (negligible)
```

## Features

### 1. Type-Safe Connections
```
TypeId matching ensures compatible parts
e.g., conveyor-out only connects to conveyor-in
```

### 2. Flow Direction
```
'in'   - Input connections only
'out'  - Output connections only
'bidi' - Any direction
```

### 3. Chain Awareness
```
One object can be connected through multiple chains
Dragging affects entire connected network
```

### 4. Visual Feedback
```
- Green connection lines
- Grid alignment visualization
- Snap-point highlighting when near
- Selected component outline
```

### 5. Serialization
```
Save/load complete layouts including:
- Component positions/rotations
- All connections
- Grid settings
- Component metadata
```

## CSS Customization

```css
/* Layout planner drag-over state */
.drag-over {
  background-color: rgba(0, 152, 255, 0.1);
  border: 2px dashed #0098ff;
}

/* Connection visualization colors */
.snap-point { color: #4caf50; }
.snap-occupied { color: #ff9800; }
.snap-available { color: #2196f3; }
```

## TypeId Registry

Recommended typeIds:

```
Conveyors:
- conveyor-in
- conveyor-out
- conveyor-bidi

Robots:
- robot-mount
- robot-tcp

Fixtures:
- fixture-mount
- fixture-pin

Storage:
- pallet-in
- pallet-out
```

## Troubleshooting

### Components not snapping?
- Check typeIds match exactly
- Verify snap points in GLB metadata
- Check flow compatibility
- Increase snapDistance if needed

### Chain not moving together?
- Enable enableChainDrag in config
- Verify connections are created
- Check for circular references

### Grid not showing?
- Toggle with planner.toggleGrid()
- Check gridVisible config
- Verify grid size is reasonable

## File Structure

```
www/3d-editor/src/
├── core/
│   ├── snap-points.ts       (NEW)
│   └── (existing files)
├── ui/
│   ├── layout-planner.ts    (NEW)
│   └── (existing files)
└── PHASE5.md                (NEW)
```

## Testing Checklist

- [ ] Create snap points in GLB
- [ ] Register components with snaps
- [ ] Check snap point compatibility
- [ ] Connect two snap points
- [ ] Detect chains (3+ objects)
- [ ] Drag single component
- [ ] Drag entire chain
- [ ] Grid snapping works
- [ ] Auto-snap on placement
- [ ] Export/import layout
- [ ] Visual connection lines
- [ ] Multiple independent chains

## Future Enhancements

1. **Snap Point Gizmos** - Visual rotate/position snap points
2. **Physics Simulation** - Drop objects with gravity
3. **Connection Constraints** - Max connections per snap
4. **Visual Connection Types** - Different colors for different types
5. **Timeline** - Animate assembly process
6. **Collaborative Planning** - Multi-user layout editing
7. **BOM Generation** - Bill of materials from layout

## Summary

Phase 5 adds professional layout planning capabilities with:
- Snap-point connection system (typeId matching)
- Chain detection and movement
- Grid-based positioning
- Auto-snapping on placement
- Complete serialization support

Perfect for creating industrial layouts, assembly lines, and factory configurations!
