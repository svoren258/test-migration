import { readFileSync, writeFileSync } from 'fs';
import { Tree } from "@nx/devkit";

export type ReportEntry = {
  title: string;
  targets: [
    {
      name: string;
      checked: boolean;
    }
  ]
};
export async function checkEslintVersion(tree: Tree): Promise<void> {
  console.log('Check Eslint Version Generator is running...\n');
  const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
  const expectedEslintVersion = '8.39.0';
  const isEslintAligned = packageJson['devDependencies']['eslint'] === expectedEslintVersion;
  console.log(`Eslint version is ${!isEslintAligned ? 'not' : ''} matching the local version.\n`);
  const reportJson: ReportEntry = {
    title: 'Migration Report',
    targets: [
      {
        name: 'Check eslint version',
        checked: isEslintAligned,
      }
    ]
  }
  try {
    writeFileSync('./migration-report.json', JSON.stringify(reportJson), { flag: 'a+' });
  } catch (e) {
    console.error(e);
  }
}

export default checkEslintVersion;
