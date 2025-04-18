// Select the parent div
const parentDiv = document.getElementById('parent');

fetch('events.json')
    .then(response => response.json())
    .then(data => {
        const troopEvents = data.events;

        // Sort events by start date
        troopEvents.sort((a, b) => new Date(a.Sdate) - new Date(b.Sdate));

        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const fullMonths = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let currentYear = null;

        for (const event of troopEvents) {
            let startDate = new Date(event.Sdate);
            let endDate = new Date(event.Edate);

            // Ensure startDate is earlier than endDate
            if (startDate > endDate) [startDate, endDate] = [endDate, startDate];

            const eventYear = startDate.getFullYear();
            const startMonth = months[startDate.getMonth()];
            const startDay = startDate.getDate() + 1;
            const endDay = endDate.getDate() + 1;
            const formattedDate = startDay === endDay
                ? `${startMonth} ${startDay}`
                : `${startMonth} ${startDay}-${endDay}`;

            // Create a new year container if the year changes
            if (currentYear !== eventYear) {
                currentYear = eventYear;

                const yearContainer = document.createElement('div');
                yearContainer.id = currentYear;
                yearContainer.className = 'year-container';

                const yearDivider = document.createElement('p');
                yearDivider.className = 'text-[50px] font-bold text-center text-[var(--main-4)]';
                yearDivider.textContent = currentYear;

                yearContainer.appendChild(yearDivider);
                parentDiv.appendChild(yearContainer);
            }

            const yearDiv = document.getElementById(currentYear);

            // Create event wrapper
            const fullDiv = document.createElement('div');
            fullDiv.className = 'full-event-wrapper h-fit text-[var(--text-2)] hover:text-white hover:bg-[var(--main-4)] hover:border-[var(--main-4)] transition-all duration-300 ease-in-out cursor-pointer';

            const newDiv = document.createElement('div');
            newDiv.className = 'event flex flex-col sm:flex-row items-center gap-[5px] py-5 border-b border-black';

            // Event image
            const img = document.createElement('div');
            img.style.backgroundImage = `url('${event.image}')`;
            img.className = 'w-[81px] h-[81px] bg-cover bg-center rounded-full bg-[var(--main-4)] flex items-center justify-center';

            // Event date and time
            const innerDiv1 = document.createElement('div');
            innerDiv1.className = 'flex flex-col text-center sm:text-left font-semibold w-[285px]';

            const dateP = document.createElement('p');
            dateP.textContent = formattedDate;

            const timeP = document.createElement('p');
            timeP.textContent = `${event.Stime} - ${event.Etime}`;

            innerDiv1.appendChild(dateP);
            innerDiv1.appendChild(timeP);

            // Event header
            const innerDiv2 = document.createElement('div');
            innerDiv2.className = 'font-medium text text-center text-[25px]';
            innerDiv2.textContent = event.header;

            newDiv.appendChild(img);
            newDiv.appendChild(innerDiv1);
            newDiv.appendChild(innerDiv2);

            fullDiv.appendChild(newDiv);

            // Event handlers for expanding/collapsing details
            fullDiv.addEventListener('click', () => {
                // Close all other expanded events
                const allExpandedEvents = document.querySelectorAll('.extra-divs-container');
                allExpandedEvents.forEach(container => {
                    const parent = container.parentElement;
                    container.style.height = `${container.scrollHeight}px`;
                    requestAnimationFrame(() => {
                        container.style.transition = 'height 0.3s ease-in-out';
                        container.style.height = '0px';
                    });

                    container.addEventListener('transitionend', () => {
                        container.remove();
                        parent.classList.add('items-center');
                        parent.classList.remove('bg-[var(--main-4)]', 'text-white');
                        parent.classList.add('text-[var(--text-2)]');
                        parent.querySelector('.event').classList.add('border-b');
                    }, { once: true });
                });

                const extraDivsContainer = fullDiv.querySelector('.extra-divs-container');

                if (extraDivsContainer) {
                    // Collapse
                    extraDivsContainer.style.height = `${extraDivsContainer.scrollHeight}px`;
                    requestAnimationFrame(() => {
                        extraDivsContainer.style.transition = 'height 0.3s ease-in-out';
                        extraDivsContainer.style.height = '0px';
                    });

                    extraDivsContainer.addEventListener('transitionend', () => {
                        extraDivsContainer.remove();
                        fullDiv.classList.add('items-center');
                        fullDiv.classList.remove('bg-[var(--main-4)]', 'text-white');
                        fullDiv.classList.add('text-[var(--text-2)]');
                        newDiv.classList.add('border-b');
                    }, { once: true });
                } else {
                    // Expand
                    fullDiv.classList.remove('items-center');
                    fullDiv.classList.add('bg-[var(--main-4)]', 'text-white');
                    fullDiv.classList.remove('text-[var(--text-2)]');
                    newDiv.classList.remove('border-b');

                    const extraContainer = document.createElement('div');
                    extraContainer.className = 'extra-divs-container flex flex-col mt-4 overflow-hidden';
                    extraContainer.style.height = '0px';
                    extraContainer.style.transition = 'height 0.3s ease-in-out';

                    // When
                    const extraDiv = document.createElement('div');
                    extraDiv.className = 'extra-div mt-2 px-20 mb-5';
                    extraDiv.innerHTML = `
                        <div class="flex items-center gap-2 font-bold">
                            <img src="images/Descriptions/time.png" class="w-[20px] h-[20px]">
                            <text class="text-[18px]">When</text>
                        </div>
                        Start: ${daysOfWeek[startDate.getDay()]}, ${fullMonths[startDate.getMonth()]} ${startDate.getDate()}, ${event.Stime}
                        <br>
                        End: ${daysOfWeek[endDate.getDay()]}, ${fullMonths[endDate.getMonth()]} ${endDate.getDate()}, ${event.Etime}
                    `;
                    extraContainer.appendChild(extraDiv);

                    // Where
                    const extraDiv2 = document.createElement('div');
                    extraDiv2.className = 'extra-div mt-2 px-20 mb-5';
                    extraDiv2.innerHTML = `
                        <div class="flex items-center gap-2 font-bold">
                            <img src="images/Descriptions/pin.png" class="w-[18px] h-[23px]">
                            <text class="text-[18px]">Destination</text>
                        </div>
                        ${event.location} | ${event.locDesc}
                        <br>
                        GPS: ${event.gps}
                    `;
                    extraContainer.appendChild(extraDiv2);

                    // Description
                    const extraDiv3 = document.createElement('div');
                    extraDiv3.className = 'extra-div mt-2 px-20 mb-[50px]';
                    extraDiv3.innerHTML = `
                        <div class="flex items-center gap-2 font-bold">
                            <img src="images/Descriptions/info.png" class="w-[20px] h-[20px]">
                            <text class="text-[18px]">Description</text>
                        </div>
                        ${event.description}
                    `;
                    extraContainer.appendChild(extraDiv3);

                    fullDiv.appendChild(extraContainer);

                    requestAnimationFrame(() => {
                        extraContainer.style.height = `${extraContainer.scrollHeight}px`;
                    });

                    extraContainer.addEventListener('transitionend', () => {
                        extraContainer.style.height = 'auto';
                    }, { once: true });
                }
            });

            yearDiv.appendChild(fullDiv);
        }
    });
