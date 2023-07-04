import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { createHtmlReportGenerator } from './generator';

describe('createHtmlReport generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await createHtmlReportGenerator(tree);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
