# Phase 4: Asset Manager - COMPLETE ✅

## Overview

Asset Manager provides a complete solution for organizing, discovering, and managing 3D model libraries.

Features:
- 📚 Multiple library support
- 🔍 Search & filter
- ⭐ Favorites system
- 📋 Recent assets tracking
- 🎨 Visual thumbnails
- 🏷️ Categories & tags
- 💾 LocalStorage persistence
- 🎯 Drag-drop support

## Architecture

```
AssetManager (Core)
├── Library management
├── Asset indexing
├── Search & filtering
├── Favorites & recent
└── Persistence

AssetManagerPanel (UI)
├── Search bar
├── View selector
├── Asset grid
├── Asset cards
└── Library view
```

## Core Classes

### AssetManager

Central management for all assets and libraries.

```typescript
class AssetManager {
  // Library management
  registerLibrary(library: AssetLibrary)
  async loadLibraryFromUrl(id, name, baseUrl)
  getLibraries(): AssetLibrary[]

  // Asset operations
  addAsset(libraryId, asset)
  removeAsset(assetId)
  getAllAssets(): Asset[]

  // Search & filter
  searchAssets(filter: AssetFilter): Asset[]
  getCategories(): string[]
  getTags(): string[]

  // Favorites & recent
  toggleFavorite(assetId)
  isFavorite(assetId): boolean
  getFavorites(): Asset[]
  addToRecent(assetId)
  getRecent(): Asset[]
}
```

### AssetManagerPanel

UI component for browsing and selecting assets.

```typescript
class AssetManagerPanel {
  render()
  async loadLibrary(id, name, baseUrl)
  addAsset(libraryId, asset)
  onAssetSelect(callback)
}
```

## Data Models

### Asset
```typescript
interface Asset {
  id: string;              // Unique ID
  name: string;            // Display name
  url: string;             // GLB file URL
  category?: string;       // Organization
  tags?: string[];         // Search tags
  thumbnail?: string;      // Preview image
  size?: number;           // File size in bytes
  dateAdded?: Date;        // When added
  preview?: string;        // Base64 preview
  metadata?: Record<string, any>;
}
```

### AssetLibrary
```typescript
interface AssetLibrary {
  id: string;              // Library ID
  name: string;            // Display name
  description?: string;
  url: string;             // Base URL for models
  assets: Asset[];         // Asset list
  category?: string;
  icon?: string;
}
```

### AssetFilter
```typescript
interface AssetFilter {
  search?: string;         // Text search
  category?: string;       // Filter by category
  tags?: string[];         // Filter by tags
  sortBy?: 'name' | 'date' | 'size';
  sortOrder?: 'asc' | 'desc';
}
```

## Usage Examples

### Basic Setup

```typescript
import { AssetManager, AssetManagerPanel } from '@mywebui/3d-editor';

const assetManager = new AssetManager();
const panel = new AssetManagerPanel(container, assetManager);

// Listen for asset selection
panel.onAssetSelect((event) => {
  if (event.type === 'asset-selected') {
    editor.loadModel(event.asset!.url, event.asset!.id);
  }
});

panel.render();
```

### Load Library from URL

```typescript
// Load from remote library
await assetManager.loadLibraryFromUrl(
  'my-lib',
  'My Models',
  'https://example.com/models/'
);
```

Library must have `catalog.json`:
```json
{
  "description": "My 3D Model Library",
  "assets": [
    {
      "id": "model-1",
      "name": "Factory Floor",
      "url": "factory.glb",
      "category": "Industrial",
      "tags": ["factory", "building"],
      "thumbnail": "factory-thumb.png",
      "size": 2048000
    }
  ]
}
```

### Register Library

```typescript
const library = {
  id: 'standard',
  name: 'Standard Assets',
  url: 'assets/models/',
  assets: [
    {
      id: 'cube',
      name: 'Cube',
      url: 'cube.glb',
      category: 'Basic'
    },
    {
      id: 'sphere',
      name: 'Sphere',
      url: 'sphere.glb',
      category: 'Basic'
    }
  ]
};

assetManager.registerLibrary(library);
```

### Search Assets

```typescript
// Simple search
const results = assetManager.searchAssets({
  search: 'factory'
});

// Advanced search
const filtered = assetManager.searchAssets({
  search: 'floor',
  category: 'Industrial',
  tags: ['building'],
  sortBy: 'name',
  sortOrder: 'asc'
});

// Get all categories
const categories = assetManager.getCategories();
// → ['Industrial', 'Basic', 'Advanced']

// Get all tags
const tags = assetManager.getTags();
// → ['factory', 'building', 'robot', ...]
```

### Favorites & Recent

```typescript
// Toggle favorite
assetManager.toggleFavorite('model-1');

// Check if favorite
if (assetManager.isFavorite('model-1')) {
  console.log('This is a favorite!');
}

// Get favorites
const favorites = assetManager.getFavorites();

// Track recent assets
assetManager.addToRecent('model-1');
const recent = assetManager.getRecent(); // Last 20
```

### Persistence

```typescript
// Automatically saved to localStorage:
// - Favorites
// - Recent assets

// Load from localStorage (automatic in constructor)
const manager = new AssetManager(); // Loads favorites & recent

// Save explicitly
manager.dispose(); // Saves to localStorage and cleans up
```

## UI Components

### Asset Grid

```html
<div class="asset-grid">
  <div class="asset-card" draggable="true">
    <div class="asset-thumbnail">
      <img src="thumbnail.png" alt="Model" />
    </div>
    <div class="asset-info">
      <h4>Factory Floor</h4>
      <span class="asset-category">Industrial</span>
      <span class="asset-size">2.1 MB</span>
    </div>
    <div class="asset-actions">
      <button class="action-btn favorite-btn">⭐</button>
      <button class="action-btn load-btn">📥</button>
    </div>
  </div>
</div>
```

### Search Bar

```html
<div class="asset-search-bar">
  <div class="search-input-wrapper">
    <svg class="search-icon">...</svg>
    <input type="text" class="search-input" placeholder="Search assets..." />
  </div>
  <div class="filter-buttons">
    <button class="filter-btn">Libraries</button>
    <button class="filter-btn">Recent</button>
    <button class="filter-btn">⭐ Favorites</button>
  </div>
</div>
```

## Features

### 1. Multiple Views

- **Libraries**: Browse all registered libraries
- **Recent**: Last 20 used assets
- **Favorites**: Starred assets
- **Search**: Filtered results

### 2. Asset Discovery

```typescript
// Search by text
assetManager.searchAssets({ search: 'robot' })

// Filter by category
assetManager.searchAssets({ category: 'Robots' })

// Filter by tags
assetManager.searchAssets({ tags: ['animated'] })

// Sort options
assetManager.searchAssets({
  sortBy: 'date',
  sortOrder: 'desc'  // Newest first
})
```

### 3. Drag & Drop

```html
<!-- Assets can be dragged from grid -->
<div class="asset-card" draggable="true">...</div>

<!-- Drop onto viewport -->
<div class="viewport" 
     ondrop="onAssetDropped(event)" 
     ondragover="event.preventDefault()">
</div>
```

```typescript
function onAssetDropped(event: DragEvent) {
  const asset = JSON.parse(event.dataTransfer!.getData('application/json'));
  editor.loadModel(asset.url, asset.id);
}
```

### 4. Categorization

Assets can be organized by:
- **Categories**: Industrial, Basic, Advanced, etc.
- **Tags**: animated, PBR, low-poly, etc.
- **Libraries**: Separate collections

### 5. Persistence

- **Favorites**: Saved to localStorage
- **Recent**: Last 20 assets in localStorage
- **Automatic**: No manual save needed

## CSS Customization

All Asset Manager styles use CSS variables:

```css
editor-3d {
  /* Colors */
  --color-accent: #0098ff;
  --color-bg-primary: #1e1e1e;
  
  /* Spacing */
  --spacing-md: 12px;
  
  /* Fonts */
  --font-size-sm: 12px;
}
```

Example: Change grid columns
```css
.asset-grid {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

## API Events

### AssetManager

```typescript
// Asset added
assetManager.onAssetAdd((asset) => {
  console.log('Added:', asset.name);
});

// Asset removed
assetManager.onAssetRemove((assetId) => {
  console.log('Removed:', assetId);
});

// Library loaded
assetManager.onLibraryLoad((library) => {
  console.log('Library loaded:', library.name);
});
```

### AssetManagerPanel

```typescript
// Asset selected
panel.onAssetSelect((event) => {
  switch (event.type) {
    case 'asset-selected':
      console.log('Selected:', event.asset?.name);
      break;
    case 'library-loaded':
      console.log('Library loaded:', event.library?.name);
      break;
  }
});
```

## Real-World Example

```typescript
import { Editor3D } from '@mywebui/3d-editor';
import { AssetManager, AssetManagerPanel } from '@mywebui/3d-editor';

// Initialize
const editor = new Editor3D(viewportContainer);
const assetManager = new AssetManager();
const assetPanel = new AssetManagerPanel(assetContainer, assetManager);

// Load libraries
await assetManager.loadLibraryFromUrl(
  'standard',
  'Standard Assets',
  'assets/standard/'
);

await assetManager.loadLibraryFromUrl(
  'industrial',
  'Industrial Models',
  'https://cdn.example.com/models/industrial/'
);

// Asset selection
assetPanel.onAssetSelect(async (event) => {
  if (event.type === 'asset-selected' && event.asset) {
    try {
      const model = await editor.loadModel(event.asset.url, event.asset.id);
      assetManager.addToRecent(event.asset.id);
      console.log('Loaded:', event.asset.name);
    } catch (error) {
      console.error('Failed to load:', error);
    }
  }
});

// Render panel
assetPanel.render();

// Handle drag-drop to viewport
viewportContainer.addEventListener('dragover', (e) => e.preventDefault());
viewportContainer.addEventListener('drop', (event: DragEvent) => {
  const asset = JSON.parse(event.dataTransfer!.getData('application/json'));
  editor.loadModel(asset.url, asset.id);
});

// Save on exit
window.addEventListener('beforeunload', () => {
  assetManager.dispose();
});
```

## File Structure

```
www/3d-editor/src/
├── core/
│   └── asset-manager.ts        (NEW)
├── ui/
│   └── asset-manager-panel.ts  (NEW)
├── styles/
│   └── asset-manager.css       (NEW)
└── (existing files)
```

## Testing Checklist

- [ ] Load library from URL (catalog.json)
- [ ] Register library programmatically
- [ ] Search by text
- [ ] Filter by category/tags
- [ ] Sort by name/date/size
- [ ] Toggle favorites
- [ ] View recent assets
- [ ] Drag-drop asset
- [ ] LocalStorage persistence
- [ ] Clear search
- [ ] Switch between views
- [ ] Multiple libraries together
- [ ] Thumbnail display
- [ ] Asset info display

## Performance Notes

- Libraries are indexed in-memory
- Search is O(n) - acceptable for <10k assets
- Recent items limited to 20
- Favorites cached in Set for O(1) lookup
- LocalStorage: ~5MB limit per domain

## Future Enhancements

1. **Phase 5:** Snap points system for library objects
2. Remote library management API
3. Asset preview 3D viewer
4. Batch import/export
5. Asset metadata editor
6. Cloud library sync
7. Analytics (popular assets)
8. Asset versioning

## Troubleshooting

### Library not loading?
- Check `catalog.json` exists at URL
- Verify CORS headers allow cross-origin
- Check console for error details

### Search not working?
- Ensure assets have proper `name` field
- Tags must be array: `["tag1", "tag2"]`
- Search is case-insensitive

### Drag-drop not working?
- Enable with `enableDragDrop: true` in config
- Handle `drop` event on container
- Use `dataTransfer.getData('application/json')`

### LocalStorage issues?
- Clear storage: `localStorage.clear()`
- Check browser storage limits
- Private browsing may disable localStorage
