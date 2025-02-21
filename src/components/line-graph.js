import * as Plot from "npm:@observablehq/plot";

export function LineGraph(events, {width, height, title, xKey, yKey, label, millions } = {}) {
    // const startDate = new Date(start);
    // const endDate = new Date(end);
    // const filteredEvents = events.filter((event) => {
    //     const eventDate = new Date(event.day)
    //     return eventDate >= startDate && eventDate < endDate
    // })
    return Plot.plot({
        title,
        width,
        height,
        x: {type: "utc", label: null},
        y: {grid: true, inset: 10, label },
        marks: [
            Plot.lineY(events, {
                x: xKey,
                y: millions ? d => d[yKey] / 1e6 : yKey,
                // z: null, // varying color, not series
                stroke: "#4FF8C9",
                // curve: ""
            })
        ]
    })
}
