import { readFileSync, writeFileSync } from "fs";
import * as dotenv from "dotenv";
dotenv.config();

const template = `web/index.html.hbs`;
const outfile = `web/index.html`;

console.log(`Rendering ${template} to ${outfile}...`);

const result = readFileSync(`web/index.html.hbs`).toString()
.replace(/\{\{host\}\}/g, process.env.HOST ?? `localhost`)
.replace(/\{\{port\}\}/g, parseInt(process.env.PORT ?? `3001`));

writeFileSync(outfile, result);
