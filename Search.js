const searchInput = document.getElementById('input');
const searchButton = document.getElementById('searchButton');
const none = document.getElementById('none');
none.style.display = 'none';

searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const query = searchInput.value.toLowerCase();
    const events = document.querySelectorAll('.event');

    // Filter events based on search
    events.forEach(event => {
        const text = event.textContent.toLowerCase();
        event.style.display = text.includes(query) ? '' : 'none';
    });

    // Loop through each year container
    document.querySelectorAll('.year-container').forEach(yearBlock => {
        const yearLabel = yearBlock.querySelector('#yearDivider');
        const visibleEvents = yearBlock.querySelectorAll('.event');
        
        let hasVisible = false;
        visibleEvents.forEach(ev => {
            if (ev.style.display !== 'none') {
                hasVisible = true;
            }
        });

        // If no events are visible, hide the whole year block
        yearBlock.style.display = hasVisible ? '' : 'none';

        // If the yearBlock is hidden, also hide its year label
        if (yearLabel) {
            yearLabel.style.display = hasVisible ? '' : 'none';
        }
    });

    // Show the 'none' message if absolutely nothing is visible
    const allHidden = Array.from(events).every(ev => ev.style.display === 'none');
    none.style.display = allHidden ? '' : 'none';
});
