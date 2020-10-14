const GetTimeFunction = (unix_timestamp, timezone) => {
  unix_timestamp = (unix_timestamp + timezone) * 1000;
  var d = new Date(unix_timestamp);
  var minutes = d.getMinutes();
  if (minutes < 10) {
    //prevent single number date format eg 12:7 but 12:07
    minutes = '0' + minutes;
  }
  var hours = d.getHours();
  var time = hours + ':' + minutes;
  return time;
};

export default GetTimeFunction;
