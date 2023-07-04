import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import update from './my-migration3.6.0';

describe('my-migration3.6.0 migration', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  it('should run successfully', async () => {
    await update(tree);
    // ... expect changes made
  });
});
