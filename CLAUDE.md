## graphify (optional, per-developer)

graphify builds a local knowledge graph of the codebase in `graphify-out/` (god nodes, communities,
cross-file relationships). The folder is gitignored: every developer generates their own.

Rules — apply only when `graphify-out/graph.json` exists:
- For codebase questions, first run `graphify query "<question>"`. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

If `graphify-out/graph.json` does not exist, ignore graphify entirely — don't install or build it unprompted.

### Setting graphify up (when the developer asks)
1. Install the CLI: `uv tool install graphifyy` (the package name has two y's).
2. Install the Claude Code skill: `graphify install --platform claude`.
3. Build the graph, code only with no API key: `graphify extract . --code-only`. For semantic extraction of docs and images, use `/graphify .` instead.
4. Optional search-guard hooks: add them to `.claude/settings.local.json` (personal, gitignored), never to
   `.claude/settings.json`, because the hook command contains a machine-specific path to the graphify binary.
   Avoid `graphify claude install` here: it writes into the shared `CLAUDE.md` and `.claude/settings.json`.
5. Windows: graphify's `update`/`extract`/`cluster-only` re-exec themselves, which crashes on Windows unless
   `PYTHONHASHSEED` is already set. Put `"env": { "PYTHONHASHSEED": "0" }` in `.claude/settings.local.json`.
