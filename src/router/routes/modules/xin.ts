import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const xin: AppRouteModule = {
  path: '/xin',
  name: 'Xin',
  component: LAYOUT,
  redirect: '/xin/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.system.xin'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'XinPage',
      component: () => import('/@/views/xin/index.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default xin;
