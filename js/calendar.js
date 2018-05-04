$(document).ready(function () {
    $('#calendar').eCalendar({
		
 weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        textArrows: {previous: '<', next: '>'},
        eventTitle: 'Events',
        url: '',
        events: [
            {title: 'Dandia Night', description: 'UG Floor', datetime: new Date(2017, 9, 25, 21)},
            {title: 'DJ Night', description: 'UG Floor', datetime: new Date(2017, 9, 27, 20)},
            {title: 'Burpp and Slurp', description: 'Mac Audi', datetime: new Date(2017, 9, 29, 18)}
        ]});
});