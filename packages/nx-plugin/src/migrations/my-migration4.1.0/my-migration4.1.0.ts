/* eslint-disable @typescript-eslint/no-unused-vars */
import {checkbox} from '@inquirer/prompts';
import {Tree} from '@nx/devkit';
import checkEslintVersion from '../../generators/check-eslint-version/generator';
import createHtmlReportGenerator from "../../generators/create-html-report/generator";
import {exec} from "child_process";

export default async function update(host: Tree) {
  const generators = await checkbox({
    message: 'Select generators you would like to run:', choices: [
      {
        name: 'Check Eslint Version',
        value: () => checkEslintVersion(host)
      },
      {
        name: 'Check TSC config',
        value: () => {
        }
      }, {
        name: 'Check Prettier config',
        value: () => {
        }
      }
    ]
  });
  for (const generator of generators) {
    await generator();
  }
  await createHtmlReportGenerator(host);
}
