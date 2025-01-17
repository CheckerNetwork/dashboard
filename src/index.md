---
toc: false
---

```js
import { LineGraph } from "./components/line-graph.js";
import { todayInFormat, getDateXDaysAgo } from "./utils/date-utils.js";
const CheckerParticipantsCumulative = FileAttachment("./data/checker-participants-cumulative.json").json();
const CheckerParticipantsMonthlyActive = FileAttachment("./data/checker-participants-monthly-active.json").json();
const CheckerParticipantsDailyActive = FileAttachment("./data/checker-participants-daily-active.json").json();
const CheckerChecksDaily = FileAttachment("./data/checker-checks-daily.json").json();
```

<div class="hero">
  <body><a href="https://checker.network" target="_blank" rel="noopener noreferrer"><img src="media/checker-logomark-blue.png" alt="Checker Logo" width="300" /></a><body>
    <h2>Dashboard Beta</h2>
    <body><a href="https://dashboard.filstation.app" target="_blank" rel="noopener noreferrer">(Click here for Legacy Filecoin Station Grafana Dashboard)</a><body>
</div>

<h4>Accounts</h4>

<div class="grid grid-cols-2" style="grid-auto-rows: 500px;">
  <div class="card">${
    resize((width) => LineGraph(CheckerParticipantsCumulative, {width, title: "Checker Network Accounts Created (unique FIL addresses)", xKey: "day", yKey: "participants", label: "Accounts" }))
  }</div>
  <div class="card">${
    resize((width) => LineGraph(CheckerParticipantsMonthlyActive, {width, title: "Monthly Active Checker Network Accounts (unique FIL addresses)", xKey: "month", yKey: "participants", label: "Accounts" }))
  }</div>
</div>

<div class="grid grid-cols-2" style="grid-auto-rows: 504px;">
  <div class="card">${
    resize((width) => LineGraph(CheckerParticipantsDailyActive, {width, title: "Daily Active Checker Network Accounts (unique FIL addresses)", xKey: "day", yKey: "participants", label: "Accounts" }))
  }</div>
</div>

<h4>Rewards</h4>

<div class="grid grid-cols-2">
  <div class="card">
  <div class="">Total Network Rewards (Monthly)</div>
  <div class="card-figure">1,000 FIL</div>
  </div>
</div>

<h4>Checks</h4>

<div class="grid grid-cols-2" style="grid-auto-rows: 504px;">
  <div class="card">${
    resize((width) => LineGraph(CheckerChecksDaily, {width, title: "Number of Verified Checks Across Network Each Day", xKey: "day", yKey: "accepted_measurement_count", label: "Checks (Millions)", millions: true }))
  }</div>
</div>

<style>

.card-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  font-size: 4vw;
  color: #E30ADA;
}

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

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
