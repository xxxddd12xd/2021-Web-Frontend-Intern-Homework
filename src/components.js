// /src/components.js
import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
let fetch_count = 30;
let anchor=0;



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="react-router-breadcrumb" width="30" height="30" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/scenicSpot">
            全部景點
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              to=""
            >
              選擇縣市
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/scenicSpot/Taipei">
                台北市
              </Link>
              <Link className="dropdown-item" to="/scenicSpot/NewTaipei">
                新北市
              </Link>
              <Link className="dropdown-item" to="/scenicSpot/Taoyuan">
                桃園市
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

function fetchData(city){
  
  const infiniteWrap = document.getElementById('js-infinite-wrap');
  console.log("fetch...")
  let url='http://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/'+city+'?$top='+String(fetch_count)+'&$skip='+String(fetch_count-30)+'&$format=JSON'
  console.log(url)
  fetch(url,{mode: 'cors',credentials: 'same-origin'})
  .then((response)=>
  {
    return response.json(); 
  }).then((jsonData) => 
  {
    console.log(jsonData.length)
    for(let i=anchor;i<jsonData.length;i++)
    {
      var newDiv = document.createElement("div");
      var br = document.createElement("br"); 
      var newContent_Name = document.createTextNode(jsonData[i].Name)
      var newContent_Description = document.createTextNode(jsonData[i].Description)
      newDiv.appendChild(newContent_Name)
      newDiv.appendChild(br)
      newDiv.appendChild(newContent_Description)
      infiniteWrap.appendChild(newDiv)
    }
    fetch_count+=30
    anchor+=30
  })

}

function callback_infinite(entry) {
  if(entry[0].isIntersecting) {
    let city=document.querySelectorAll("h3")
    if(city.length===2)
    {
      fetchData(city[1].innerHTML)
    }
    else
    {
      fetchData("")
    }
  }
}



class ScenicSpotContainer extends Component{
  componentDidMount()
  {
    const infinite = document.getElementById('js-detective');
    // infinite create IO
    let observerInfinite = new IntersectionObserver(callback_infinite);
    // animated observe #js-infinite
    observerInfinite.observe(infinite);

    let city=document.querySelectorAll("h3")
    if(city.length===2)
    {
      document.querySelector(".col-12").innerHTML=""
      fetchData(city[1].innerHTML)
    }
    else
    {
      fetchData("")
    }
  }
  componentDidUpdate()
  {
    let city=document.querySelectorAll("h3")
    if(city.length===2)
    {
      document.querySelector(".col-12").innerHTML=""
      fetchData(city[1].innerHTML)
    }
    else
    {
      fetchData("")
    }
  }
  render(){
    return (
      <div>
      <div className="col-12 mb-5" id="js-infinite-wrap"></div>
      <div id="js-detective">已無更多景點</div>
    </div>
    );
  }

}

export { Navbar,ScenicSpotContainer };