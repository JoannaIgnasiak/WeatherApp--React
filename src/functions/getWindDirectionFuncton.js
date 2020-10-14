const GetWindDirectionFuncton = (winddeg) => {
  //API provides wind direction in degres  - transform to direcrtion N S W E and derived units
  let wind_direction;

  if (winddeg > 22.5 && winddeg < 67.5) {
    wind_direction = 'NE';
    return wind_direction;
  } else if (winddeg >= 67.5 && winddeg < 112.5) {
    wind_direction = 'E';
    return wind_direction;
  } else if (winddeg > 112.5 && winddeg < 157.5) {
    wind_direction = 'SE';
    return wind_direction;
  } else if (winddeg >= 157.5 && winddeg <= 202.5) {
    wind_direction = 'S';
    return wind_direction;
  } else if (winddeg > 202.5 && winddeg < 247.5) {
    wind_direction = 'SW';
    return wind_direction;
  } else if (winddeg >= 247.5 && winddeg < 292.5) {
    wind_direction = 'W';
    return wind_direction;
  } else if (winddeg > 292.5 && winddeg < 337.5) {
    wind_direction = 'NW';
    return wind_direction;
  } else {
    wind_direction = 'N';
    return wind_direction;
  }
};

export default GetWindDirectionFuncton;
