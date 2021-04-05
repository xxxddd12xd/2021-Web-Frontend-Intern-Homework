let fetch_count = 30;
let anchor=0;
const infiniteWrap = document.getElementById('js-infinite-wrap');
function fetchData(){
  console.log("fetch...")
  let url='http://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top='+String(fetch_count)+'&$skip='+String(fetch_count-30)+'&$format=JSON'
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
  fetchData()
  }
}



// infinite create IO
let observerInfinite = new IntersectionObserver(callback_infinite);

// animated observe #js-infinite
const infinite = document.getElementById('js-detective');
observerInfinite.observe(infinite);