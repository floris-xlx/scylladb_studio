import {
  months,
  monthsAbbreviated,
  daysInMonth
} from "@/app/packages/workerdata/months.js";
import leap_years from "@/app/packages/workerdata/leapyears";



// constants
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentMonthText = new Date(currentYear, currentMonth, 1).toLocaleString('en-US', { month: 'long' });
const currentUnixTime = Math.floor(now.getTime() / 1000);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDay();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
const seconds_in_minute = 60;
const seconds_in_hour = 60 * seconds_in_minute;
const seconds_in_day = 24 * seconds_in_hour;
const seconds_in_week = 7 * seconds_in_day;
const seconds_in_month = 30 * seconds_in_day;


const getRelativeTime = (unixTime) => {
  const timeDifference = currentUnixTime - unixTime;

  if (timeDifference < seconds_in_minute) {
    if (timeDifference < 60) {
      return "Just now";
    }

    return `${timeDifference} seconds ago`;

  } else if (timeDifference < seconds_in_hour) {
    if (timeDifference < seconds_in_minute * 2) {
      return "1 Minute ago";
    }

    return `${Math.floor(timeDifference / seconds_in_minute)} Minutes ago`;

  } else if (timeDifference < seconds_in_day) {
    return `${Math.floor(timeDifference / seconds_in_hour)} Hours ago`;

  } else if (timeDifference < seconds_in_week) {
    if (timeDifference < seconds_in_day * 2) {
      return "1 Day ago";
    }

    return `${Math.floor(timeDifference / seconds_in_day)} Days ago`;

  } else  if (timeDifference < seconds_in_month) {
    if (timeDifference < seconds_in_week * 2) {
      return "1 Week ago";
    }

    return `${Math.floor(timeDifference / seconds_in_week)} Weeks ago`;
  } else {
    return new Date(unixTime * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  }
};


const getTradingSession = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const utcHour = date.getUTCHours();

  if (utcHour >= 0 && utcHour < 7) {
    return "Asia";
  } else if (utcHour >= 7 && utcHour < 9) {
    return "Asia - London";
  } else if (utcHour >= 9 && utcHour < 13) {
    return "London";
  } else if (utcHour >= 13 && utcHour < 16) {
    return "London - New York";
  } else if (utcHour >= 16 && utcHour < 22) {
    return "New York";
  } else if (utcHour >= 22 && utcHour < 24) {
    return "New York - Asia";
  } else {
    return "Undefined";
  }
};


const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return `${day} ${monthsAbbreviated[parseInt(month, 10) - 1]} ${year}`;
};


function PreviousMonth(shownMonth, setShownYear, setInternalSelectedDate) {
  const month = months.find((m) => m.name === shownMonth);
  const monthIndex = month.number;
  const previousMonthIndex = monthIndex === 1 ? 11 : monthIndex - 2;
  setInternalSelectedDate(null);

  if (shownMonth === "January") {
    setShownYear((prev) => prev - 1);
  }

  return months[previousMonthIndex].name;
}


function NextMonth(shownMonth, setShownYear, setInternalSelectedDate) {
  const month = months.find((m) => m.name === shownMonth);
  const monthIndex = month.number;
  const nextMonthIndex = monthIndex;
  setInternalSelectedDate(null);

  if (shownMonth === "December") {
    setShownYear((prev) => prev + 1);
    return months[0].name;
  }

  return months[nextMonthIndex].name;
}


function getCurrentMonth() {
  return currentMonthText.charAt(0).toUpperCase() + currentMonthText.slice(1);
}

// return a bool for leapyear
function isYearALeapYear(year) {
  return leap_years.includes(year);
}


function daysInAMonth(month, year) {
  const day_offset = 1;

  if (month === "February" && isYearALeapYear(year)) {
    return 29 + day_offset;

  } else if (month === "February") {
    return 28   + day_offset;
  }
  // we count index as 0 so we offset by 1
  return daysInMonth.find((m) => m.month === month).days + day_offset;
}

export {
  getRelativeTime,
  getTradingSession,
  formatDate,
  PreviousMonth,
  NextMonth,
  currentYear,
  currentUnixTime,
  seconds_in_day,
  seconds_in_week,
  seconds_in_hour,
  seconds_in_minute,
  currentMonth,
  currentMonthText,
  getCurrentMonth,
  lastDayOfMonth,
  firstDayOfMonth,
  isYearALeapYear,
  daysInAMonth,
  now
};