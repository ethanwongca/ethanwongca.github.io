/// <reference types="react-scripts" />

// webpack's require.context isn't covered by react-scripts' bundled types —
// this lets side-quest photo folders (src/assets/travel, etc.) auto-load
// whatever images are dropped in them, no import statements needed.
interface RequireContext {
  keys(): string[];
  <T = string>(id: string): T;
  resolve(id: string): string;
  id: string;
}

interface NodeRequire {
  context(directory: string, useSubdirectories?: boolean, regExp?: RegExp): RequireContext;
}
