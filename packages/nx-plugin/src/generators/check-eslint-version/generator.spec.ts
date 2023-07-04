import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { checkEslintVersion } from './generator';

describe('my-generator generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await checkEslintVersion(tree);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
