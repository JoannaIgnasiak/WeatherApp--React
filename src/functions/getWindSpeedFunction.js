const GetWindSpeedFuncton = (windmph, unit_category_wind) => {
  //API provides wind speed in mph  - transform to other unit if needed
  if (unit_category_wind === 'km/h') {
    let wind_speed = Math.round(windmph * 1.609);
    return wind_speed + ' ' + unit_category_wind;
  } else if (unit_category_wind === 'mph') {
    let wind_speed = windmph;
    return wind_speed + ' ' + unit_category_wind;
  }
};

export default GetWindSpeedFuncton;
