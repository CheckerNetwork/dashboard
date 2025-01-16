import { jsonFetcher } from "./json-fetcher.js";
import { getDateXDaysAgo } from "../utils/date-utils.js";

const from = "2024-06-18";
const to = getDateXDaysAgo(30);

const output = await jsonFetcher(`https://stats.filspark.com/participants/monthly?from=${from}&to=${to}`);  
process.stdout.write(JSON.stringify(output));