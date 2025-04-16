var desc = document.getElementById('desc1');
var date = document.getElementById('date1');
var title = document.getElementById('title1');
var timeUntil = document.getElementById('timeUntil1');
var time = document.getElementById('time1');
var image = document.getElementById('image1');

// Function to calculate days between two dates
function calculateDaysAway(eventDate) {
    const today = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - today;
    var day = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return day > 0 ? (day > 1 ? day + " Days Away" : "Tomorrow") : "Today";
}

// filepath: d:\Troop\Event.js
const troopEvents = [
    {
        title: 'Camping Trip',
        date: '2025-04-19',
        description: 'Camping at Syracuse Scout Lodge',
        time: '9:00 AM - 5:00 PM',
        image: 'images\\icons\\Camping.png'
    },
    {
        title: 'Scout meeting',
        date: '2025-04-17',
        description: 'Join us for the latest in tech.',
        time: '7:00PM - 8:30PM',
        image: 'images\\icons\\Scout.png'
    }
];

troopEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

// Format date
const split = troopEvents[0].date.split("-");
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var mon = months[split[1] - 1];

// Update content if elements exist
if (title) title.textContent = troopEvents[0].title;
if (date) date.textContent = mon + " " + split[2] + ", " + split[0];
if (timeUntil) timeUntil.textContent = calculateDaysAway(troopEvents[0].date);
if (desc) desc.textContent = troopEvents[0].description;
if (time) time.textContent = troopEvents[0].time;
if (image) image.src = troopEvents[0].image;