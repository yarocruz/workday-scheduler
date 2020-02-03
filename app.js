$(document).ready(function () {
    // Sets Date to current Day and Time
    $('#currentDay').text(moment().format('LLLL'));

    // Select the .time div 
    let times = $('.time');
    // Use moment to get current time. Just time not date
    let currentTime = moment().hours();

    // Grab the inputs
    let inputs = $('input');

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

    // This function sets the value from the input to local storage
    function saveEvent() {

        // loops through each one and adds a change event listener
        for (let input of inputs) {
            $(input).on('change', function (e) {
                // set value to local storage
                // need conditions to attach events to their respective times
                if ($(input).val() !== null) {
                    switch (e.target.id) {
                        case '8am':
                            localStorage.setItem('event8am', $(input).val());
                            break;
                        case '9am':
                            localStorage.setItem('event9am', $(input).val());
                            break;
                        case '10am':
                            localStorage.setItem('event10am', $(input).val());
                            break;
                        case '11am':
                            localStorage.setItem('event11am', $(input).val());
                            break;
                        case '12pm':
                            localStorage.setItem('event12pm', $(input).val());
                            break;
                        case '1pm':
                            localStorage.setItem('event1pm', $(input).val());
                            break;
                        case '2pm':
                            localStorage.setItem('event2pm', $(input).val());
                            break;
                        case '3pm':
                            localStorage.setItem('event3pm', $(input).val());
                            break;
                        case '4pm':
                            localStorage.setItem('event4pm', $(input).val());
                            break;
                        case '5pm':
                            localStorage.setItem('event5pm', $(input).val());
                            break;
                    }
                }
            });
        }
    }
    saveEvent();

    // function to get events from local storage
    function getEvents() {
        for (let input of inputs) {
            if ($(input).val() !== null) {
                switch ($(input).attr('id')) {
                    case '8am':
                        $(input).val(localStorage.getItem('event8am'));
                        break;
                    case '9am':
                        $(input).val(localStorage.getItem('event9am'));
                        break;
                    case '10am':
                        $(input).val(localStorage.getItem('event10am'));
                        break;
                    case '11am':
                        $(input).val(localStorage.getItem('event11am'));
                        break;
                    case '12pm':
                        $(input).val(localStorage.getItem('event12pm'));
                        break;
                    case '1pm':
                        $(input).val(localStorage.getItem('event1pm'));
                        break;
                    case '2pm':
                        $(input).val(localStorage.getItem('event2pm'));
                        break;
                    case '3pm':
                        $(input).val(localStorage.getItem('event3pm'));
                        break;
                    case '4pm':
                        $(input).val(localStorage.getItem('event4pm'));
                        break;
                    case '5pm':
                        $(input).val(localStorage.getItem('event5pm'));
                        break;
                }
            }
        }
    }

    getEvents();

    // selects the buttons
    let buttons = $('saveBtn');
    for (let btn of buttons) {
        $(btn).on('click', function () {
            saveEvent();
        });
    }
});




