import {readFileSync, writeFileSync} from 'fs';
import {Tree} from "@nx/devkit";

export type ReportEntry = {
  title: string;
  targets:
    {
      name: string;
      checked: boolean;
    }[]
};

export async function checkEslintVersion(tree: Tree): Promise<void> {
  console.log('Check Eslint Version Generator is running...\n');
  const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
  const expectedEslintVersion = '8.39.0';
  const isEslintAligned = packageJson['devDependencies']['eslint'] === expectedEslintVersion;
  if (isEslintAligned) {
    console.log(`\x1b[32m \u2611 Eslint version is matching the local version.\n \x1b[0m`);
  } else {
    console.log(`\x1b[31m \u2717 Eslint version is not matching the local version.\n \x1b[0m`);
  }
  const reportJson: ReportEntry = {
    title: 'Migration Report',
    targets: [
      {
        name: 'Check eslint version',
        checked: isEslintAligned,
      },
      {
        name: 'Check TSC config',
        checked: false,
      },
      {
        name: 'Check Prettier config',
        checked: false,
      }
    ]
  };
  try {
    writeFileSync('./migration-report.json', JSON.stringify(reportJson), {flag: 'a+'});
  } catch (e) {
    console.error(e);
  }
}

export default checkEslintVersion;
