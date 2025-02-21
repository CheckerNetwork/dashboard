import { jsonFetcher } from "./json-fetcher.js";
import { getDateXDaysAgo } from "../utils/date-utils.js";

const from = "2025-02-01";
const to = getDateXDaysAgo(1);

const output = await jsonFetcher(`https://stats.filspark.com/stations/desktop/daily?from=${from}&to=${to}`);  
process.stdout.write(JSON.stringify(output));
