---
toc: false
---

```js
import { Histogram } from "./components/histogram.js";
import { todayInFormat, getDateXDaysAgo } from "./utils/date-utils.js";
import { combine, move, clone } from "./utils/ratios-utils.js";
const SparkMinerRates = FileAttachment("./data/spark-miners-rsr.json").json();
const SparkRetrievalResultCodes = FileAttachment("./data/spark-retrieval-result-codes.json").json();
const SparkMinerRsrSummaries = FileAttachment("./data/spark-miner-rsr-summaries.json").json();
```

```js
const nonZeroSparkMinerRates = SparkMinerRates.filter((record) => record.success_rate != 0)
const tidySparkMinerRates = SparkMinerRates
  .sort((recordA, recordB) => recordB.success_rate - recordA.success_rate)
  .map(record => ({ ...record, success_rate: `${(record.success_rate * 100).toFixed(2)}%`}))
```

<div class="hero">
  <body><img src="media/checker-logomark-blue.png" alt="Checker Logo" width="300" /><body>
    <h2>Dashboard</h2>
</div>

<h4>Supported networks</h4>

<div class="grid grid-cols-2" style="grid-auto-rows: 500px;">
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Networks",
      width,
      x: {type: "utc", ticks: "month", label: null},
      y: {grid: true, inset: 10, label: null},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(
          [
            {day: "2024-12-04", networks: 1},
            {day: "2025-01-01", networks: 2},
            {day: "2025-02-01", networks: 3},
            {day: "2025-03-01", networks: 4},
            {day: "2025-04-01", networks: 5},
          ],
          {
              x: "day",
              y: "networks",
              stroke: "#FFBD3F",
              curve: "step"
          }
        )
      ]
    }))
  }</div>
  <div class="card">
    Currently supported networks:
    <ul>
      <li>Filecoin</li>
      <li>Filecoin</li>
      <li>Filecoin</li>
      <li>Filecoin</li>
      <li>Filecoin</li>
    </ul>
  </div>
</div>

<div class="divider"></div>

<h4>Modules</h4>

<div class="grid grid-cols-2" style="grid-auto-rows: 500px;">
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Modules",
      width,
      x: {type: "utc", ticks: "month", label: null},
      y: {grid: true, inset: 10, label: null},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(
          [
            {day: "2024-11-15", modules: 1},
            {day: "2024-12-01", modules: 2},
            {day: "2024-12-15", modules: 3},
            {day: "2025-01-01", modules: 4},
            {day: "2025-01-15", modules: 5},
            {day: "2025-02-01", modules: 6},
            {day: "2025-02-15", modules: 7},
            {day: "2025-03-01", modules: 8},
            {day: "2025-03-15", modules: 9},
            {day: "2025-04-01", modules: 10},
          ],
          {
              x: "day",
              y: "modules",
              stroke: "#FFBD3F",
              curve: "step"
          }
        )
      ]
    }))
  }</div>
  <div class="card">
    Currently running modules:
    <ul>
      <li>Spark</li>
      <li>TTFB</li>
      <li>Geolocation</li>
      <li>Fishermen</li>
      <li>Saturn L2</li>
      <li>Spark</li>
      <li>TTFB</li>
      <li>Geolocation</li>
      <li>Fishermen</li>
      <li>Saturn L2</li>
    </ul>
  </div>
</div>

<div class="divider"></div>

<h4>Community</h4>

<div class="grid grid-cols-2" style="grid-auto-rows: 500px;">
  <div class="card">${
    resize((width) => Plot.plot({
      title: "External GitHub contributors",
      width,
      x: {type: "utc", ticks: "month", label: null},
      y: {grid: true, inset: 10, label: null},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(
          [
            {day: "2024-11-15", contributors: 1},
            {day: "2024-12-01", contributors: 2},
            {day: "2024-12-15", contributors: 3},
            {day: "2025-01-01", contributors: 4},
            {day: "2025-01-15", contributors: 5},
            {day: "2025-02-01", contributors: 6},
            {day: "2025-02-15", contributors: 7},
            {day: "2025-03-01", contributors: 8},
            {day: "2025-03-15", contributors: 9},
            {day: "2025-04-01", contributors: 10},
          ],
          {
              x: "day",
              y: "contributors",
              stroke: "#FFBD3F",
              curve: "step"
          }
        )
      ]
    }))
  }</div>
  <div class="card">
    All external GitHub contributors:
    <ul id="contributors">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>

<div class="divider"></div>

<h4>Checker Network</h4>

<div class="grid grid-cols-2" style="grid-auto-rows: 500px;">
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Checker Operators",
      width,
      x: {type: "utc", ticks: "month", label: null},
      y: {grid: true, inset: 10, label: null},
      marks: [
        Plot.lineY(
          [
            {day: "2024-11-15", operators: 51_000},
            {day: "2024-12-01", operators: 52_000},
            {day: "2024-12-15", operators: 53_000},
            {day: "2025-01-01", operators: 54_000},
            {day: "2025-01-15", operators: 55_000},
            {day: "2025-02-01", operators: 56_000},
            {day: "2025-02-15", operators: 57_000},
            {day: "2025-03-01", operators: 58_000},
            {day: "2025-03-15", operators: 59_000},
            {day: "2025-04-01", operators: 60_000},
          ],
          {
              x: "day",
              y: "operators",
              stroke: "#FFBD3F",
              curve: "step"
          }
        )
      ]
    }))
  }</div>
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Checker Instances",
      width,
      x: {type: "utc", ticks: "month", label: null},
      y: {grid: true, inset: 10, label: null},
      marks: [
        Plot.lineY(
          [
            {day: "2024-11-15", instances: 151_000},
            {day: "2024-12-01", instances: 152_000},
            {day: "2024-12-15", instances: 153_000},
            {day: "2025-01-01", instances: 154_000},
            {day: "2025-01-15", instances: 155_000},
            {day: "2025-02-01", instances: 156_000},
            {day: "2025-02-15", instances: 157_000},
            {day: "2025-03-01", instances: 158_000},
            {day: "2025-03-15", instances: 159_000},
            {day: "2025-04-01", instances: 160_000},
          ],
          {
              x: "day",
              y: "instances",
              stroke: "#FFBD3F",
              curve: "step"
          }
        )
      ]
    }))
  }</div>
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Checks performed",
      width,
      x: {type: "utc", ticks: "month", label: null},
      y: {grid: true, inset: 10, label: null},
      marks: [
        Plot.lineY(
          [
            {day: "2024-11-15", checks: 510_000},
            {day: "2024-12-01", checks: 520_000},
            {day: "2024-12-15", checks: 530_000},
            {day: "2025-01-01", checks: 540_000},
            {day: "2025-01-15", checks: 550_000},
            {day: "2025-02-01", checks: 560_000},
            {day: "2025-02-15", checks: 570_000},
            {day: "2025-03-01", checks: 580_000},
            {day: "2025-03-15", checks: 590_000},
            {day: "2025-04-01", checks: 600_000},
          ],
          {
              x: "day",
              y: "checks",
              stroke: "#FFBD3F",
              curve: "step"
          }
        )
      ]
    }))
  }</div>
</div>

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

.divider {
  margin: 50px;
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

#contributors {
  margin-top: 1em;
  margin-left: 0;
  padding-left: 0;
}

#contributors li {
  display: inline-block;
  background: url('https://avatars.githubusercontent.com/u/10247?v=4&size=50');
  border-radius: 100px;
  width: 50px;
  height: 50px;
}

</style>
