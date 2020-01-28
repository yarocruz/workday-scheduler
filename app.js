// Sets Date to current Day and Time
$('#currentDay').text(moment().format('LLLL'));

// How the background color will be different colors according to present time
// Select the .time div to get text / value
let times = $('.time');
// Use moment to get current time. Just time not date
let currentTime = moment().hours();

// Use condition to compare the times and apply the classes for background accordingly
for (let hour of times) {

    let time = parseInt($(hour).attr('data-time'));

    if (time < currentTime) {
        $(hour).next().addClass('past');
        //hour.nextElementSibling.classList.add('past');
    } else if (time === currentTime) {
        $(hour).next().addClass('present');
        //hour.nextElementSibling.classList.add('present');
    } else {
        $(hour).next().addClass('future');
        //hour.nextElementSibling.classList.add('future');
    }
}


