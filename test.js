
function addEvent() {
    let newEvent = {
        title: document.getElementById('title').value,
        Sdate: document.getElementById('Sdate').value,
        Edate: document.getElementById('Edate').value,
        header: document.getElementById('header').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value,
        locDesc: document.getElementById('locDesc').value,
        gps: document.getElementById('gps').value,
        Stime: document.getElementById('Stime').value,
        Etime: document.getElementById('Etime').value,
        image: document.getElementById('image').value
    };

    events.events.push(newEvent);  // Adds to your JSON

    console.log(JSON.stringify(events, null, 2));  // Pretty print for testing
}
