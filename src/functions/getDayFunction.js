const GetDayFunction = (unix_timestamp, timezone) => {
  unix_timestamp = (unix_timestamp + timezone) * 1000;
  var d = new Date(unix_timestamp);
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = days[d.getDay()];
  return day;
};

export default GetDayFunction;
