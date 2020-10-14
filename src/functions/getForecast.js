const GetForecast = (cityName) => {
  let newLink =
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
    cityName +
    '&appid=a95b2a1ab5a464859609fdd41a0654fa';

  fetch(newLink).then((res) => {
    if (res.cod === '200') {
      //console.log(res);
      return res.json();
    } else {
      //console.log(res);
      return res.json();
    }
  });
};
export default GetForecast;
