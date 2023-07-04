import {
  Tree,
} from '@nx/devkit';
import {readFileSync} from "fs";
import {createServer} from "http";
import { exec } from 'child_process';
export async function serveHtmlReportGenerator(
  tree: Tree,
) {
  const html = readFileSync('./migration-report.html', 'utf-8');
  const port = 8080;
  const host = 'localhost';

  const server = createServer((request, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
  });
  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
  exec(`start http://${host}:${port}`);
}

export default serveHtmlReportGenerator;
