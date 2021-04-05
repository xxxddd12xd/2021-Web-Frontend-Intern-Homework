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

export { ScenicSpot, Taipei, NewTaipei, Taoyuan };