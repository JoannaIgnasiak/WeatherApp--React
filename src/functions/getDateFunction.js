const GetDateFunction = (unix_timestamp, timezone) => {
  unix_timestamp = (unix_timestamp + timezone) * 1000;
  var d = new Date(unix_timestamp);
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let textToDisplay = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  return textToDisplay;
};

export default GetDateFunction;
