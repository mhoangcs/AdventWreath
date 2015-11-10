// AdventWreath
// Copyright © 2015 Margaret Hoang

// Returns as a Date the first Sunday in Advent for the current year.
function getFirstDayOfAdvent() {
	var currentYear = new Date().getFullYear();
	// js uses zero-based numbering for months
	var novMonth = 10;
	var nov26Date = 26;
	var nov26FullDate = new Date(currentYear, novMonth, nov26Date);
	var dayNov26 = nov26FullDate.getDay();
	// Use November 26th to find the fourth Sunday before Christmas
	var daysInWeek = 7;
	var firstDayOfAdvent = nov26Date + (daysInWeek - dayNov26);
	return new Date(currentYear, novMonth, firstDayOfAdvent);
} 

// Sets the Advent Wreath image based on the current date.
$(function() {
	var adventFirst = getFirstDayOfAdvent();
	var adventFirstYear = adventFirst.getFullYear();
	var adventFirstMonth = adventFirst.getMonth();
	var adventFirstDate = adventFirst.getDate();
	var daysInWeek = 7;
	var adventSecond = new Date(adventFirstYear, adventFirstMonth, adventFirstDate + daysInWeek);
	var adventThird = new Date(adventFirstYear, adventFirstMonth, adventFirstDate + (daysInWeek * 2));
	var adventFourth = new Date(adventFirstYear, adventFirstMonth, adventFirstDate + (daysInWeek * 3));
	var christmas = new Date(adventFirstYear, 11, 25);
	var currentDate = new Date();
	
	if (currentDate < adventFirst) {
		// pre-Advent
		$("img.adventWreath").attr("src", "/advent/preAdvent.png");
	} else if (currentDate >= adventFirst && currentDate < adventSecond) {
		// Advent 1
		$("img.adventWreath").attr("src", "/advent/Advent1.png");
	} else if (currentDate >= adventSecond && currentDate < adventThird) {
		// Advent 2
		$("img.adventWreath").attr("src", "/advent/Advent2.png");
	} else if (currentDate >= adventThird && currentDate < adventFourth) {
		// Advent 3
		$("img.adventWreath").attr("src", "/advent/Advent3.png");
	} else if (currentDate >= adventFourth && currentDate < christmas) {
		// Advent 4
		$("img.adventWreath").attr("src", "/advent/Advent4.png");
	} else {
		// Christmas!
		$("img.adventWreath").attr("src", "/advent/Advent5.png");
	}
});