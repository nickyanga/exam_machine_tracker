# Exam Imaging Tracker

A lightweight, zero-dependency browser app for tracking exam image installations across 170 school PCs.

## What it does

IT staff open this page and tap/click each machine card as they image it. Each click cycles the machine through three states:

```
○ Remaining  →  ◐ In progress  →  ✔ Done
```

A live progress bar at the top shows overall completion at a glance.

## Features

- **170 machines** across Computer Labs, Learning Hives, Design Studio, and floating consoles
- **Group by Room or ECS** — collapse/expand each group independently
- **Search** by exam hostname, asset tag, or network hostname
- **Filter** to show All, only machines Left, or only Done
- **Persistent state** — progress is saved automatically between sessions
- **CSV export** — download current progress as a spreadsheet
- **CSV import** — bulk-update statuses from an exported file (useful for syncing between devices)

## Running it

Open `index.html` directly in a browser. No build step, no server, no dependencies.

> **Note:** State persistence uses a `window.storage` API. This works natively inside the Claude Code desktop app. In a plain browser this API is unavailable, so state will not be saved between page refreshes.

## CSV format

Export produces these columns:

| Asset Tag | Serial Number | Hostname | Location | Exam Hostname | ECS | Status |
|---|---|---|---|---|---|---|

Status values: `Done`, `In progress`, or blank (remaining).

To import, the CSV must have at minimum an **Asset Tag** column and a **Status** column. Unknown asset tags are skipped with a count shown in the toast.

## Machine data

All 170 machines are hardcoded in `app.js` as the `MACHINES` array. Each entry is:

```
[AssetTag, SerialNumber, Hostname, Room, ExamHostname, ECS, initiallyDone]
```

`initiallyDone` seeds the first-run state (`1` = Done, `0` = Remaining).

## File layout

```
index.html   — shell, loads app.js and styles.css
app.js       — all application logic + machine data
styles.css   — styling
```
