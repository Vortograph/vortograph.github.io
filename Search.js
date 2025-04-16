const searchInput = document.getElementById('input');
const searchButton = document.getElementById('searchButton');
const none = document.getElementById('none');
none.style.display = 'none';

searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const query = searchInput.value.toLowerCase();

    // Dynamically fetch the latest list of events
    const events = document.querySelectorAll('.event');

    // Show/hide each event based on the search
    events.forEach(event => {
        const text = event.textContent.toLowerCase();
        event.style.display = text.includes(query) ? '' : 'none';
    });

    // Check each year block
    document.querySelectorAll('[class^="20"]').forEach(yearBlock => {
        const yearLabel = yearBlock.querySelector('p'); // The <p> that says "2024"
        const visibleEvents = yearBlock.querySelectorAll('.event');

        let hasVisible = false;
        visibleEvents.forEach(ev => {
            if (ev.style.display !== 'none') {
                hasVisible = true;
            }
        });

        // Show or hide the year label
        yearLabel.style.display = hasVisible ? '' : 'none';

        // Hide the entire year block if all events are hidden
        yearBlock.style.display = hasVisible ? '' : 'none';

        // Hide the year divider if all events in the year are hidden
        const yearDivider = yearBlock.previousElementSibling; // Assuming the divider is the previous sibling
        if (yearDivider && yearDivider.classList.contains('year-divider')) {
            yearDivider.style.display = hasVisible ? '' : 'none';
        }
    });

    // Check if ALL events are hidden
    const allHidden = Array.from(events).every(ev => ev.style.display === 'none');
    none.style.display = allHidden ? '' : 'none';
});
