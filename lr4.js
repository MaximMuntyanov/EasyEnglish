var currentDate = new Date();

var currentDay = currentDate.getDay();

var daysUntilNextSunday = 7 - currentDay;

alert("До найближчої неділі залишилось " + daysUntilNextSunday + " днів.");