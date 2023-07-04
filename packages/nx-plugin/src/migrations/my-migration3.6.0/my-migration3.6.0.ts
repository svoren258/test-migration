/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tree } from '@nx/devkit';
import checkEslintVersion from "../../generators/check-eslint-version/generator";
import createHtmlReportGenerator from "../../generators/create-html-report/generator";

export default async function update(host: Tree) {
  // ...
  // TODO: showcase migration orchestrator (generator) using prompts
  // Add more than one generator including JSON report update
  await checkEslintVersion(host);
  await createHtmlReportGenerator(host);
}
