import Vue from "vue";

/* Custom global filters, for component filters, use the filters: {} in the components options */

// Capitalise the first letter of a string
Vue.filter("capitalise", function(str) {
  if (!str) return "";
  str = str.toString();
  return str.charAt(0).toUpperCase() + str.slice(1);
});

// String to kebab
// https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
Vue.filter("kebab", function(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
});

//Format date
Vue.filter("verboseDate", function(dateTime) {
  let date = dateTime.split("T")[0];

  date = date.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];

  return getDay(day) + " " + getMonth(month) + ", " + year;
});

function getDay(date) {
  if (date.startsWith("0")) {
    date = date.substring(1);
  }

  let suffix = "th";

  switch (date) {
    case "1":
    case "21":
    case "31":
      suffix = "st";
      break;
    case "2":
    case "22":
      suffix = "nd";
      break;
    case "3":
    case "23":
      suffix = "rd";
      break;
  }
  return date + suffix;
}

function getMonth(index) {
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return Months[index - 1];
}
