module.exports = getDate;

function getDate() {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var days = today.toLocaleDateString("en-US", options);
  return days;
}
