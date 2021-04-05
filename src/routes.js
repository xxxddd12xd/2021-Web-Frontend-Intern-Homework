// /src/routes.js

import { ScenicSpot,Taipei,NewTaipei,Taoyuan,Taichung,Tainan,
  Kaohsiung,Keelung,Hsinchu,HsinchuCounty,MiaoliCounty,ChanghuaCounty,
  NantouCounty,YunlinCounty,ChiayiCounty,Chiayi,PingtungCounty,
  YilanCounty,HualienCounty,TaitungCounty,KinmenCounty,PenghuCounty,LienchiangCounty } from './pages';

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
      },
      {
        path: '/scenicSpot/Taichung',
        component: Taichung,
        breadcrumbName: 'Taichung'
      },
      {
        path: '/scenicSpot/Tainan',
        component: Tainan,
        breadcrumbName: 'Tainan'
      },
      {
        path: '/scenicSpot/Kaohsiung',
        component: Kaohsiung,
        breadcrumbName: 'Kaohsiung'
      },
      {
        path: '/scenicSpot/Keelung',
        component: Keelung,
        breadcrumbName: 'Keelung'
      },
      {
        path: '/scenicSpot/Hsinchu',
        component: Hsinchu,
        breadcrumbName: 'Hsinchu'
      },
      {
        path: '/scenicSpot/HsinchuCounty',
        component: HsinchuCounty,
        breadcrumbName: 'HsinchuCounty'
      },
      {
        path: '/scenicSpot/MiaoliCounty',
        component: MiaoliCounty,
        breadcrumbName: 'MiaoliCounty'
      },
      {
        path: '/scenicSpot/ChanghuaCounty',
        component: ChanghuaCounty,
        breadcrumbName: 'ChanghuaCounty'
      },
      {
        path: '/scenicSpot/NantouCounty',
        component: NantouCounty,
        breadcrumbName: 'NantouCounty'
      },
      {
        path: '/scenicSpot/YunlinCounty',
        component: YunlinCounty,
        breadcrumbName: 'YunlinCounty'
      },
      {
        path: '/scenicSpot/ChiayiCounty',
        component: ChiayiCounty,
        breadcrumbName: 'ChiayiCounty'
      },
      {
        path: '/scenicSpot/Chiayi',
        component: Chiayi,
        breadcrumbName: 'Chiayi'
      },
      {
        path: '/scenicSpot/PingtungCounty',
        component: PingtungCounty,
        breadcrumbName: 'PingtungCounty'
      },
      {
        path: '/scenicSpot/YilanCounty',
        component: YilanCounty,
        breadcrumbName: 'YilanCounty'
      },
      {
        path: '/scenicSpot/HualienCounty',
        component: HualienCounty,
        breadcrumbName: 'HualienCounty'
      },
      {
        path: '/scenicSpot/KinmenCounty',
        component: KinmenCounty,
        breadcrumbName: 'KinmenCounty'
      },
      {
        path: '/scenicSpot/TaitungCounty',
        component: TaitungCounty,
        breadcrumbName: 'TaitungCounty'
      },
      {
        path: '/scenicSpot/PenghuCounty',
        component: PenghuCounty,
        breadcrumbName: 'PenghuCounty'
      },
      {
        path: '/scenicSpot/LienchiangCounty',
        component: LienchiangCounty,
        breadcrumbName: 'LienchiangCounty'
      },
    ]
    
  },
];

export default routes;