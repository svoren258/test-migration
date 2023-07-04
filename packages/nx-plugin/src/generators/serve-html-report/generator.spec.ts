import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { serveHtmlReportGenerator } from './generator';
import { ServeHtmlReportGeneratorSchema } from './schema';

describe('serve-html-report generator', () => {
  let tree: Tree;
  const options: ServeHtmlReportGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await serveHtmlReportGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
