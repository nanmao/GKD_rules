import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 23312021011,
  name: 'oppo_gkd_subscription_rules',
  version: 0,
  author: '夏初临',

  updateUrl:
    'https://fastly.jsdelivr.net/gh/nanmao/GKD_rules@main/dist/gkd.json5',
  checkUpdateUrl:
    'https://fastly.jsdelivr.net/gh/nanmao/GKD_rules@main/dist/gkd.version.json5',
  supportUri: 'https://github.com/gkd-kit/subscription-template',
  categories,
  globalGroups,
  apps: await batchImportApps('src/apps'),
});
