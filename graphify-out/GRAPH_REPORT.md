# Graph Report - receipts-scanner  (2026-10-25)

## Corpus Check
- 56 files · ~54,105 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 4, .lock 2, .css 2)

## Summary
- 237 nodes · 344 edges · 19 communities (15 shown, 4 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.9)
- Token cost: 204,323 input · 0 output

## Community Hubs (Navigation)
- Screens & Themed Components
- Expo Runtime Dependencies
- Expo App Config (app.json)
- Package Manifest
- Tab Navigation & Theming
- Animated Splash Icon
- Expo Dev Guidelines
- Reset-Project Script
- App & Adaptive Icons
- Expo Branding & Starter UI
- TypeScript Config
- NPM Scripts
- Tab Bar Icons
- Postgres pgvector Database
- React Logo Assets
- Backend Package
- ML Package

## God Nodes (most connected - your core abstractions)
1. `react-native` - 16 edges
2. `expo` - 13 edges
3. `react` - 11 edges
4. `useTheme()` - 9 edges
5. `Mobile AGENTS.md (Expo agent guidelines)` - 9 edges
6. `ThemedText()` - 8 edges
7. `ThemedView()` - 8 edges
8. `scripts` - 7 edges
9. `Spacing` - 7 edges
10. `Expo Chevron Logo Mark` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Splash Screen Icon (white logo on transparent)` --implements--> `Expo Chevron Logo Mark`  [AMBIGUOUS]
  mobile/receipts-scanner/assets/images/splash-icon.png → mobile/receipts-scanner/assets/images/icon.png
- `File-based routing (app directory)` --semantically_similar_to--> `Expo Router (routes in src/app/)`  [INFERRED] [semantically similar]
  mobile/receipts-scanner/README.md → mobile/receipts-scanner/AGENTS.md
- `Development build option` --semantically_similar_to--> `Development build (required for native modules)`  [INFERRED] [semantically similar]
  mobile/receipts-scanner/README.md → mobile/receipts-scanner/AGENTS.md
- `Expo Symbol SVG (white chevron)` --implements--> `Expo Chevron Logo Mark`  [INFERRED]
  mobile/receipts-scanner/assets/expo.icon/Assets/expo-symbol 2.svg → mobile/receipts-scanner/assets/images/icon.png
- `Android Adaptive Icon Foreground (blue chevron)` --implements--> `Expo Chevron Logo Mark`  [INFERRED]
  mobile/receipts-scanner/assets/images/android-icon-foreground.png → mobile/receipts-scanner/assets/images/icon.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Expo mobile development workflow rules** — mobile_receipts_scanner_agents_expo_install, mobile_receipts_scanner_agents_lint_typecheck_gate, mobile_receipts_scanner_agents_eas, mobile_receipts_scanner_agents_continuous_native_generation, mobile_receipts_scanner_agents_development_build [EXTRACTED 1.00]
- **Local Postgres+pgvector database stack** — docker_compose_db, docker_compose_pgvector, docker_compose_pgdata, docker_compose_receipts_database [EXTRACTED 1.00]
- **Android adaptive icon layer set** — mobile_receipts_scanner_assets_images_android_icon_foreground, mobile_receipts_scanner_assets_images_android_icon_background, mobile_receipts_scanner_assets_images_android_icon_monochrome [INFERRED 0.95]
- **Expo .icon bundle layers (symbol + grid)** — mobile_receipts_scanner_assets_expo_icon_assets_expo_symbol_2, mobile_receipts_scanner_assets_expo_icon_assets_grid, mobile_receipts_scanner_assets_expo_chevron_logo [INFERRED 0.75]
- **React logo multi-density asset set** — mobile_receipts_scanner_assets_images_react_logo, mobile_receipts_scanner_assets_images_react_logo_2x, mobile_receipts_scanner_assets_images_react_logo_3x [EXTRACTED 1.00]
- **Expo branding assets** — mobile_receipts_scanner_assets_images_expo_badge, mobile_receipts_scanner_assets_images_expo_badge_white, mobile_receipts_scanner_assets_images_expo_logo, mobile_receipts_scanner_assets_images_logo_glow [INFERRED 0.75]
- **Bottom Tab Bar Icon Set (Home + Explore, 1x/2x/3x density variants)** — mobile_receipts_scanner_assets_images_tabicons_home, mobile_receipts_scanner_assets_images_tabicons_home_2x, mobile_receipts_scanner_assets_images_tabicons_home_3x, mobile_receipts_scanner_assets_images_tabicons_explore, mobile_receipts_scanner_assets_images_tabicons_explore_2x, mobile_receipts_scanner_assets_images_tabicons_explore_3x [INFERRED 0.85]

## Communities (19 total, 4 thin omitted)

### Community 0 - "Screens & Themed Components"
Cohesion: 0.15
Nodes (27): styles, TabTwoScreen(), getDevMenuHint(), HomeScreen(), styles, HintRow(), HintRowProps, styles (+19 more)

### Community 1 - "Expo Runtime Dependencies"
Cohesion: 0.07
Nodes (27): dependencies, expo, expo-constants, expo-dev-client, expo-device, expo-font, expo-glass-effect, expo-image (+19 more)

### Community 2 - "Expo App Config (app.json)"
Cohesion: 0.08
Nodes (25): backgroundColor, backgroundImage, foregroundImage, monochromeImage, adaptiveIcon, package, predictiveBackGestureEnabled, reactCompiler (+17 more)

### Community 3 - "Package Manifest"
Cohesion: 0.08
Nodes (25): devDependencies, @types/react, typescript, main, name, private, version, expo (+17 more)

### Community 4 - "Tab Navigation & Theming"
Cohesion: 0.14
Nodes (10): AppTabs(), styles, ExternalLink(), Props, Colors, expo-router, expo-symbols, expo-web-browser (+2 more)

### Community 5 - "Animated Splash Icon"
Cohesion: 0.12
Nodes (14): AnimatedIcon(), AnimatedSplashOverlay(), glowKeyframe, keyframe, logoKeyframe, mobile_receipts_scanner_src_components_animated_icon_module, styles, glowKeyframe (+6 more)

### Community 6 - "Expo Dev Guidelines"
Cohesion: 0.17
Nodes (16): Mobile AGENTS.md (Expo agent guidelines), Continuous Native Generation (no hand-edited ios/android), Development build (required for native modules), EAS (build, submit, update), npx expo install (SDK-compatible dependency install), Expo/React Native mobile application, Expo Router (routes in src/app/), Lint + typecheck before done (expo lint, tsc --noEmit) (+8 more)

### Community 7 - "Reset-Project Script"
Cohesion: 0.17
Nodes (10): exampleDirPath, fs, oldDirs, path, readline, rl, root, ref_fs (+2 more)

### Community 8 - "App & Adaptive Icons"
Cohesion: 0.27
Nodes (10): Android Adaptive Icon (layered foreground/background/monochrome), Expo Chevron Logo Mark, Expo Symbol SVG (white chevron), Expo Icon Grid Layer (blank white), Android Adaptive Icon Background (light-blue blueprint), Android Adaptive Icon Foreground (blue chevron), Android Monochrome Icon (gray chevron), Web Favicon (small blue chevron) (+2 more)

### Community 9 - "Expo Branding & Starter UI"
Cohesion: 0.29
Nodes (8): Expo Badge (Dark) - 'Powered by Expo' black pill, Expo Framework, Expo Badge (White) - 'Powered by Expo' on light background, Expo Logo (white/transparent mark), Logo Glow - soft blue radial blur backdrop, Tutorial Web Screenshot - Expo starter at localhost:8081, Expo Dev Server (http://localhost:8081), Expo Starter Web UI (top nav: Home / Explore / Doc, 'Welcome to Expo' hero)

### Community 10 - "TypeScript Config"
Cohesion: 0.25
Nodes (7): compilerOptions, paths, strict, extends, include, @/assets/*, expo/tsconfig.base

### Community 11 - "NPM Scripts"
Cohesion: 0.29
Nodes (7): scripts, android, ios, lint, reset-project, start, web

### Community 12 - "Tab Bar Icons"
Cohesion: 0.33
Nodes (6): Explore Tab Icon (1x), Explore Tab Icon (@2x), Explore Tab Icon (@3x) - solid rounded rectangle between two horizontal bars (list/stack glyph), Home Tab Icon (1x), Home Tab Icon (@2x), Home Tab Icon (@3x) - solid black house silhouette

### Community 13 - "Postgres pgvector Database"
Cohesion: 0.50
Nodes (4): db service (Postgres 17 + pgvector), pgdata volume, pgvector/pgvector:pg17 image, receipts database (user/db 'receipts', port 5432)

### Community 14 - "React Logo Assets"
Cohesion: 0.40
Nodes (5): React Logo @1x, React Logo @2x, React Logo @3x, Pixel-density image variants (@1x/@2x/@3x), React

## Ambiguous Edges - Review These
- `Splash Screen Icon (white logo on transparent)` → `Expo Chevron Logo Mark`  [AMBIGUOUS]
  mobile/receipts-scanner/assets/images/splash-icon.png · relation: implements

## Knowledge Gaps
- **119 isolated node(s):** `backend`, `ml`, `name`, `slug`, `version` (+114 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 143 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Splash Screen Icon (white logo on transparent)` and `Expo Chevron Logo Mark`?**
  _Edge tagged AMBIGUOUS (relation: implements) - confidence is low._
- **Why does `dependencies` connect `Expo Runtime Dependencies` to `Package Manifest`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Why does `react-native` connect `Screens & Themed Components` to `Package Manifest`, `Tab Navigation & Theming`, `Animated Splash Icon`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `react` connect `Tab Navigation & Theming` to `Screens & Themed Components`, `Package Manifest`, `Animated Splash Icon`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **What connects `backend`, `ml`, `name` to the rest of the system?**
  _119 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Screens & Themed Components` be split into smaller, more focused modules?**
  _Cohesion score 0.14714714714714713 - nodes in this community are weakly interconnected._
- **Should `Expo Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._