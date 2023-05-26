import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 10,
    icon: 'ion:settings-outline',
    title: t('routes.system.system'),
  },
  children: [
    {
      path: 'account',
      name: 'Account',
      component: () => import('/@/views/system/account/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.system.account'),
      },
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('/@/views/system/role/index.vue'),
      meta: {
        title: t('routes.system.role'),
      },
    },
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('/@/views/system/menu/index.vue'),
      meta: {
        title: t('routes.system.menus'),
      },
    },
  ],
};

export default system;
