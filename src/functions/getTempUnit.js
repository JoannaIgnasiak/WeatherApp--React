const GetTempUnit = (tempKelwin, unit_category_temp) => {
  if (unit_category_temp === 'celsius') {
    let temperature = Math.round(tempKelwin - 273.15);
    temperature = temperature + String.fromCharCode(176) + 'C';
    return temperature;
  } else if (unit_category_temp === 'farenheit') {
    let temperature = Math.round((tempKelwin * 9) / 5 - 459.67);
    temperature = temperature + String.fromCharCode(176) + 'F';
    return temperature;
  } else if (unit_category_temp === 'kelwin') {
    let temperature = Math.round(tempKelwin) + String.fromCharCode(176) + 'K';
    return temperature;
  }
};

export default GetTempUnit;
