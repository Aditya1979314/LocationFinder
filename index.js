const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((location)=>{
        console.log(location.coords);
    })
  } else {
    console.log('not supported');
  }
}

getLocation();