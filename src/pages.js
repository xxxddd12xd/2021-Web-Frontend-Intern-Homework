import React from 'react';
import { renderRoutes } from 'react-router-config';



/**
 * These are root pages
 */
const ScenicSpot=({ route })=> {
  
  return(
    <div>
      <h3>景點</h3>
      {renderRoutes(route.routes)}
      {/* The component will show here if the current URL matches the path */}
    </div>

  )

};



/**
 * These are pages nested in Electronics
 */


const Taipei = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const NewTaipei = ({ route }) => {
  return <h3>{route.breadcrumbName}</h3>;
};

const Taoyuan = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const Taichung = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const Tainan = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const Kaohsiung = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const Keelung = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const Hsinchu = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const HsinchuCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const MiaoliCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const ChanghuaCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const NantouCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const YunlinCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const ChiayiCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const Chiayi = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const PingtungCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const YilanCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const HualienCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const TaitungCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const KinmenCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const PenghuCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};

const LienchiangCounty = ({ route }) => {
  console.log(route.breadcrumbName )
  return <h3>{route.breadcrumbName}</h3>;
};


export { ScenicSpot,Taipei,NewTaipei,Taoyuan,Taichung,Tainan,
Kaohsiung,Keelung,Hsinchu,HsinchuCounty,MiaoliCounty,ChanghuaCounty,
NantouCounty,YunlinCounty,ChiayiCounty,Chiayi,PingtungCounty,
YilanCounty,HualienCounty,TaitungCounty,KinmenCounty,PenghuCounty,LienchiangCounty};