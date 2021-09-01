#!/usr/bin/env zx

import * as fs from "fs";
import * as path from "path";
import { $ } from "zx";

const pathToSrc = path.join(__dirname, "../src");

void (async function () {
  // clear old files
  await $`rm -rf ${pathToSrc}/webhooks/interfaces`;

  // convert paddle JSON schemas to typescript declaration files
  await $`json2ts -i ${pathToSrc}/webhooks/schemas -o ${pathToSrc}/webhooks/interfaces`;

  // rename all the files to .ts
  const interfacesFolder = path.resolve(
    __dirname,
    `${pathToSrc}/webhooks/interfaces`
  );
  const files = fs.readdirSync(interfacesFolder);
  files.forEach(async (filePath) => {
    const p = path.join(interfacesFolder, filePath);
    fs.rename(p, p.replace(".d.ts", ".ts"), (err) => console.log(err));
  });

  // dedupe the files and generate a barrel
  await $`ts-dedupe -p ${pathToSrc}/webhooks/tsconfig.webhooks.json -d ${pathToSrc}/webhooks/interfaces/common.ts -b ${pathToSrc}/webhooks/index.ts`;

  // generate everything else
  await $`rm -rf ./dist`;
  await $`tsc -p .`;
})();
