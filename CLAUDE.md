# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

Open `index.html` directly in a browser. No build step, server, or dependencies required.

> State persistence uses `window.storage`, which is available natively in the Claude Code desktop app. In a plain browser, state will not persist between refreshes.

## Architecture

This is a single-page, zero-dependency vanilla JS app across three files:

- `index.html` — minimal shell; mounts `<div id="app">` and loads the other two files
- `app.js` — all application logic, rendering, and machine data
- `styles.css` — all styling

### app.js structure

The entire app is an IIFE. Key elements:

- **`MACHINES`** — top-level array of 170 entries, each: `[AssetTag, SerialNumber, Hostname, Room, ExamHostname, ECS, initiallyDone]`. This is the source of truth for machine data. `initiallyDone` (0 or 1) seeds state on first load.
- **State** — machine statuses (`"rem"`, `"prog"`, `"done"`) are stored in the `states` object keyed by asset tag, persisted via `window.storage` under key `exam_states_v2`. The seed flag uses `exam_seeded_v2`.
- **Rendering** — `render()` builds the entire UI as an HTML string and sets `app.innerHTML`, then calls `wire()` to attach event listeners. There is no virtual DOM or diffing.
- **Grouping** — `groupsFor()` partitions machines by room or ECS. Room order follows `ROOM_PRIORITY`. ECS groups sort main ECS last, then numerically.
- **CSV** — `exportCSV()` generates a blob download. `importCSV()` / `parseCSV()` handle import; matching is done by Asset Tag column.

### State lifecycle

1. On load, `window.storage.get(STORE_KEY)` restores saved states.
2. If never seeded before, `initiallyDone` field in `MACHINES` seeds initial state and sets the seed flag.
3. Each card click cycles: `rem → prog → done → rem`, saves immediately via `window.storage.set`.

## Modifying machine data

To add, remove, or update machines, edit the `MACHINES` array at the top of `app.js`. If you change asset tags or need to reset seeded state, increment the `STORE_KEY` / `SEED_KEY` version strings so all clients re-seed from the updated array.
