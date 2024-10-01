const x = document.getElementById("demo");

async function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (location) => {
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      try {
        const response = await fetch('https://13.233.82.204:3000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
          })
        });

        const result = await response.json();
        console.log(result); 
      } catch (error) {
        console.error('Error:', error);
      }
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

getLocation();
