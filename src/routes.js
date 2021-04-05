// /src/routes.js

import { ScenicSpot, Taipei, NewTaipei, Taoyuan } from './pages';

const routes = [
  {
    path: '/scenicSpot',
    component: ScenicSpot,
    breadcrumbName: 'ScenicSpot',
    routes: [
      {
        path: '/scenicSpot/Taipei',
        component: Taipei,
        breadcrumbName: 'Taipei'
      },
      {
        path: '/scenicSpot/NewTaipei',
        component: NewTaipei,
        breadcrumbName: 'NewTaipei'
      },
      {
        path: '/scenicSpot/Taoyuan',
        component: Taoyuan,
        breadcrumbName: 'Taoyuan'
      }
    ]
    
  },
];

export default routes;