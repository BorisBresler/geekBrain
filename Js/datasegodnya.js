//(function () {
"use strict";
{
  let footerData = document.querySelector(".footer-data");
  let d = new Date();
  let month = new Array(12);
  month[0] = "январь";
  month[1] = "февраль";
  month[2] = "март";
  month[3] = "апрель";
  month[4] = "май";
  month[5] = "июнь";
  month[6] = "июль";
  month[7] = "август";
  month[8] = "сентябрь";
  month[9] = "октябрь";
  month[10] = "ноябрь";
  month[11] = "декабрь";
  let weekday = new Array(7);
  weekday[0] = "воскресенье";
  weekday[1] = "понедельник";
  weekday[2] = "вторник";
  weekday[3] = "среда";
  weekday[4] = "четверг";
  weekday[5] = "Пятница";
  weekday[6] = "суббота";
  let hours = new Array(24);
  let hourNow = "";
  let minuteNow = "";
  switch (d.getHours()) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      hourNow = " часов ";
      break;
    case 1:
    case 21:
      hourNow = " час ";
      break;
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
      hourNow = " часа ";
      break;
  }

  if (
    d.getMinutes() === 1 ||
    d.getMinutes() === 21 ||
    d.getMinutes() === 31 ||
    d.getMinutes() === 41 ||
    d.getMinutes() === 51
  ) {
    minuteNow = " минута. ";
  } else if (
    d.getMinutes() === 2 ||
    d.getMinutes() === 3 ||
    d.getMinutes() === 4 ||
    d.getMinutes() === 22 ||
    d.getMinutes() === 23 ||
    d.getMinutes() === 24 ||
    d.getMinutes() === 32 ||
    d.getMinutes() === 33 ||
    d.getMinutes() === 34 ||
    d.getMinutes() === 42 ||
    d.getMinutes() === 43 ||
    d.getMinutes() === 44 ||
    d.getMinutes() === 52 ||
    d.getMinutes() === 53 ||
    d.getMinutes() === 54
  ) {
    minuteNow = " минуты. ";
  } else {
    minuteNow = " минут. ";
  }
  let dateNow =
    "На дворе месяц " +
    month[d.getMonth()] +
    ".  Сегодня " +
    weekday[d.getDay()] +
    ", " +
    d.getDate() +
    "-ое число. Местное время " +
    d.getHours() +
    hourNow +
    d.getMinutes() +
    minuteNow +
    " ";
  footerData.insertAdjacentText("afterbegin", dateNow);
}
//})();
