// /src/App.js
import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Navbar,ScenicSpotContainer } from './components';
import routes from './routes';




class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {/* use renderRoutes method here*/}
        {renderRoutes(routes)}
        <ScenicSpotContainer/>
      </div>
    );
  }

}










export default App;





