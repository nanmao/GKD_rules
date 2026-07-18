import { fileURLToPath } from 'node:url';
import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

const appsDir = fileURLToPath(new URL('./apps', import.meta.url));

export default defineGkdSubscription({
  id: 23312021011,
  name: 'oppo_gkd_subscription_rules',
  version: 0,
  author: '夏初临',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/gkd-kit/subscription-template',
  categories,
  globalGroups,
  apps: await batchImportApps(appsDir),
});
