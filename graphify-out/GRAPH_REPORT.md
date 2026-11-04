# Graph Report - receipts-scanner  (2026-11-04)

## Corpus Check
- 22 files · ~54,756 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .lock 2)

## Summary
- 196 nodes · 183 edges · 29 communities (15 shown, 14 thin omitted)
- Extraction: 85% EXTRACTED · 14% INFERRED · 1% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `47efa441`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- index.tsx
- dependencies
- expo
- package.json
- adaptiveIcon
- mobile_receipts_scanner_src_components_animated_icon_module
- Mobile AGENTS.md (Expo agent guidelines)
- ref_fs
- Expo Chevron Logo Mark
- Expo Framework
- tsconfig.json
- scripts
- Explore Tab Icon (1x)
- db service (Postgres 17 + pgvector)
- React
- backend
- ml
- Frontend Design
- Karpathy Guidelines
- devDependencies
- CLAUDE.md
- mobile_receipts_scanner_src_global
- mobile_receipts_scanner_src_hooks_use_color_scheme_usecolorscheme
- ref_path
- ref_readline

## God Nodes (most connected - your core abstractions)
1. `expo` - 13 edges
2. `Mobile AGENTS.md (Expo agent guidelines)` - 9 edges
3. `scripts` - 8 edges
4. `Frontend Design` - 6 edges
5. `Expo Chevron Logo Mark` - 6 edges
6. `adaptiveIcon` - 5 edges
7. `Karpathy Guidelines` - 5 edges
8. `Mobile README (Expo starter)` - 5 edges
9. `android` - 4 edges
10. `db service (Postgres 17 + pgvector)` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Splash Screen Icon (white logo on transparent)` --implements--> `Expo Chevron Logo Mark`  [AMBIGUOUS]
  mobile/receipts-scanner/assets/images/splash-icon.png → mobile/receipts-scanner/assets/images/icon.png
- `Development build option` --semantically_similar_to--> `Development build (required for native modules)`  [INFERRED] [semantically similar]
  mobile/receipts-scanner/README.md → mobile/receipts-scanner/AGENTS.md
- `File-based routing (app directory)` --semantically_similar_to--> `Expo Router (routes in src/app/)`  [INFERRED] [semantically similar]
  mobile/receipts-scanner/README.md → mobile/receipts-scanner/AGENTS.md
- `Expo Symbol SVG (white chevron)` --implements--> `Expo Chevron Logo Mark`  [INFERRED]
  mobile/receipts-scanner/assets/expo.icon/Assets/expo-symbol 2.svg → mobile/receipts-scanner/assets/images/icon.png
- `Android Adaptive Icon Foreground (blue chevron)` --implements--> `Expo Chevron Logo Mark`  [INFERRED]
  mobile/receipts-scanner/assets/images/android-icon-foreground.png → mobile/receipts-scanner/assets/images/icon.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Expo mobile development workflow rules** — mobile_receipts_scanner_agents_expo_install, mobile_receipts_scanner_agents_lint_typecheck_gate, mobile_receipts_scanner_agents_eas, mobile_receipts_scanner_agents_continuous_native_generation, mobile_receipts_scanner_agents_development_build [EXTRACTED 1.00]
- **React logo multi-density asset set** — mobile_receipts_scanner_assets_images_react_logo, mobile_receipts_scanner_assets_images_react_logo_2x, mobile_receipts_scanner_assets_images_react_logo_3x [EXTRACTED 1.00]
- **Local Postgres+pgvector database stack** — docker_compose_db, docker_compose_pgvector, docker_compose_pgdata, docker_compose_receipts_database [EXTRACTED 1.00]
- **Expo .icon bundle layers (symbol + grid)** — mobile_receipts_scanner_assets_expo_icon_assets_expo_symbol_2, mobile_receipts_scanner_assets_expo_icon_assets_grid, mobile_receipts_scanner_assets_expo_chevron_logo [INFERRED 0.75]
- **Expo branding assets** — mobile_receipts_scanner_assets_images_expo_badge, mobile_receipts_scanner_assets_images_expo_badge_white, mobile_receipts_scanner_assets_images_expo_logo, mobile_receipts_scanner_assets_images_logo_glow [INFERRED 0.75]
- **Bottom Tab Bar Icon Set (Home + Explore, 1x/2x/3x density variants)** — mobile_receipts_scanner_assets_images_tabicons_home, mobile_receipts_scanner_assets_images_tabicons_home_2x, mobile_receipts_scanner_assets_images_tabicons_home_3x, mobile_receipts_scanner_assets_images_tabicons_explore, mobile_receipts_scanner_assets_images_tabicons_explore_2x, mobile_receipts_scanner_assets_images_tabicons_explore_3x [INFERRED 0.85]
- **Android adaptive icon layer set** — mobile_receipts_scanner_assets_images_android_icon_foreground, mobile_receipts_scanner_assets_images_android_icon_background, mobile_receipts_scanner_assets_images_android_icon_monochrome [INFERRED 0.95]

## Communities (29 total, 14 thin omitted)

### Community 1 - "dependencies"
Cohesion: 0.07
Nodes (27): dependencies, expo, expo-constants, expo-dev-client, expo-device, expo-font, expo-glass-effect, expo-image (+19 more)

### Community 2 - "expo"
Cohesion: 0.11
Nodes (17): reactCompiler, typedRoutes, expo, experiments, icon, ios, name, orientation (+9 more)

### Community 3 - "package.json"
Cohesion: 0.05
Nodes (35): { defineConfig }, expoConfig, main, name, private, version, eslint, eslint-config-expo (+27 more)

### Community 4 - "adaptiveIcon"
Cohesion: 0.25
Nodes (8): backgroundColor, backgroundImage, foregroundImage, monochromeImage, adaptiveIcon, package, predictiveBackGestureEnabled, android

### Community 6 - "Mobile AGENTS.md (Expo agent guidelines)"
Cohesion: 0.17
Nodes (16): Mobile AGENTS.md (Expo agent guidelines), Continuous Native Generation (no hand-edited ios/android), Development build (required for native modules), EAS (build, submit, update), npx expo install (SDK-compatible dependency install), Expo/React Native mobile application, Expo Router (routes in src/app/), Lint + typecheck before done (expo lint, tsc --noEmit) (+8 more)

### Community 8 - "Expo Chevron Logo Mark"
Cohesion: 0.27
Nodes (10): Android Adaptive Icon (layered foreground/background/monochrome), Expo Chevron Logo Mark, Expo Symbol SVG (white chevron), Expo Icon Grid Layer (blank white), Android Adaptive Icon Background (light-blue blueprint), Android Adaptive Icon Foreground (blue chevron), Android Monochrome Icon (gray chevron), Web Favicon (small blue chevron) (+2 more)

### Community 9 - "Expo Framework"
Cohesion: 0.29
Nodes (8): Expo Badge (Dark) - 'Powered by Expo' black pill, Expo Framework, Expo Badge (White) - 'Powered by Expo' on light background, Expo Logo (white/transparent mark), Logo Glow - soft blue radial blur backdrop, Tutorial Web Screenshot - Expo starter at localhost:8081, Expo Dev Server (http://localhost:8081), Expo Starter Web UI (top nav: Home / Explore / Doc, 'Welcome to Expo' hero)

### Community 10 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, paths, strict, extends, include, @/assets/*, expo/tsconfig.base

### Community 11 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, android, ios, lint, reset-project, start, typecheck, web

### Community 12 - "Explore Tab Icon (1x)"
Cohesion: 0.33
Nodes (6): Explore Tab Icon (1x), Explore Tab Icon (@2x), Explore Tab Icon (@3x) - solid rounded rectangle between two horizontal bars (list/stack glyph), Home Tab Icon (1x), Home Tab Icon (@2x), Home Tab Icon (@3x) - solid black house silhouette

### Community 13 - "db service (Postgres 17 + pgvector)"
Cohesion: 0.50
Nodes (4): db service (Postgres 17 + pgvector), pgdata volume, pgvector/pgvector:pg17 image, receipts database (user/db 'receipts', port 5432)

### Community 14 - "React"
Cohesion: 0.40
Nodes (5): React Logo @1x, React Logo @2x, React Logo @3x, Pixel-density image variants (@1x/@2x/@3x), React

### Community 19 - "Frontend Design"
Cohesion: 0.29
Nodes (6): Design principles, Frontend Design, Ground your designs in the subject matter, More on writing in design, Process: plan, review against the brief, build, critique, Restraint and self-critique

### Community 20 - "Karpathy Guidelines"
Cohesion: 0.33
Nodes (5): 1. Think Before Coding, 2. Simplicity First, 3. Surgical Changes, 4. Goal-Driven Execution, Karpathy Guidelines

### Community 21 - "devDependencies"
Cohesion: 0.40
Nodes (5): devDependencies, eslint, eslint-config-expo, @types/react, typescript

## Ambiguous Edges - Review These
- `Expo Chevron Logo Mark` → `Splash Screen Icon (white logo on transparent)`  [AMBIGUOUS]
  mobile/receipts-scanner/assets/images/splash-icon.png · relation: implements

## Knowledge Gaps
- **119 isolated node(s):** `backend`, `ml`, `name`, `slug`, `version` (+114 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 142 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Expo Chevron Logo Mark` and `Splash Screen Icon (white logo on transparent)`?**
  _Edge tagged AMBIGUOUS (relation: implements) - confidence is low._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `backend`, `ml`, `name` to the rest of the system?**
  _119 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `expo` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._