const GetTimeFunctionSimple = (unix_timestamp) => {
  var d = new Date(unix_timestamp * 1000);
  var minutes = d.getMinutes();
  if (minutes < 10) {
    //prevent single number date format eg 12:7 but 12:07
    minutes = '0' + minutes;
  }
  var hours = d.getHours();
  var time = hours + ':' + minutes;
  return time;
};

export default GetTimeFunctionSimple;
