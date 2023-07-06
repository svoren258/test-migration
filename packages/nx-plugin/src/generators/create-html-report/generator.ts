import {Tree} from '@nx/devkit';
import {readFileSync, writeFileSync} from 'fs';
import {ReportEntry} from "../check-eslint-version/generator";
import {exec} from "child_process";

// TODO: make JSON report extendable
export async function createHtmlReportGenerator(
  tree: Tree,
) {
  const reportJson: ReportEntry = JSON.parse(readFileSync('./migration-report.json', 'utf-8'));
  const title = `<h1>${reportJson.title}</h1>`;
  const checkboxes = reportJson.targets.reduce((acc, curr) => {
    return `${acc}
    <div>
        <input type="checkbox" id="${curr.name}" name="${curr.name}" ${curr.checked ? 'checked' : ''} />
        <label for="${curr.name}">${curr.name}</label>
    </div>`
  }, '');
  const reportHtml =
    `<html lang="en">
      <body>
          ${title}
          ${checkboxes}
      </body>
    </html>`;
  writeFileSync('./migration-report.html', reportHtml, {flag: 'w+'});
  console.log('File migration-report.html was created!');
}

export default createHtmlReportGenerator;
