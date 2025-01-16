import * as Plot from "npm:@observablehq/plot";

export function LineGraph(events, {width, height, title, xKey, yKey} = {}) {
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
        x: {type: "utc", ticks: "month", label: null},
        y: {grid: true, inset: 10, label: "Participants"},
        marks: [
            Plot.lineY(events, {
                x: xKey,
                y: yKey,
                // z: null, // varying color, not series
                stroke: "#FFBD3F",
                // curve: ""
            })
        ]
    })
}
