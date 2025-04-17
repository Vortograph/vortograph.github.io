// Select the parent div
const parentDiv = document.getElementById('parent');

const troopEvents = [
    {
        title: 'Camping Trip',
        Sdate: '2025-04-17',
        Edate: '2025-04-18',
        header: 'Camping at Syracuse Scout Lodge',
        description: 'Today we will be camping at the Syracuse Scout Lodge.',
        location: 'Syracuse Scout Lodge',
        locDesc: '2803 Brewerton Rd, Syracuse, NY 13211',
        gps: '40.123456, -85.123456',
        Stime: '9:00 AM',
        Etime: '10:00 AM',
        image: 'images/icons/Camping.png'
    },
    {
        title: 'Firecrafter Ceremony',
        Sdate: '2025-05-10',
        Edate: '2025-05-10',
        header: 'Firecrafter Induction',
        description: 'Join us for the Firecrafter induction ceremony.',
        location: 'Camp Belzer',
        locDesc: '6102 Boy Scout Rd, Indianapolis, IN 46226',
        gps: '39.123456, -86.123456',
        Stime: '6:00 PM',
        Etime: '8:00 PM',
        image: 'images/icons/FC.png'
    },
    {
        title: 'Scout Meeting',
        Sdate: '2025-06-01',
        Edate: '2025-06-01',
        header: 'Monthly Scout Meeting',
        description: 'Discuss upcoming events and activities.',
        location: 'Scout Hall',
        locDesc: '123 Main St, Anytown, USA',
        gps: '41.123456, -87.123456',
        Stime: '7:00 PM',
        Etime: '8:30 PM',
        image: 'images/icons/Scout.png'
    },
    {
        title: 'Community Service',
        Sdate: '2025-06-15',
        Edate: '2025-06-15',
        header: 'Park Cleanup',
        description: 'Help clean up the local park.',
        location: 'Central Park',
        locDesc: '456 Park Ave, Anytown, USA',
        gps: '42.123456, -88.123456',
        Stime: '10:00 AM',
        Etime: '12:00 PM',
        image: 'images/icons/Service.png'
    },
    {
        title: 'Camping Adventure',
        Sdate: '2025-07-20',
        Edate: '2025-07-22',
        header: 'Camping at Lakeview',
        description: 'Enjoy a weekend of camping by the lake.',
        location: 'Lakeview Campground',
        locDesc: '789 Lake Rd, Anytown, USA',
        gps: '43.123456, -89.123456',
        Stime: '3:00 PM',
        Etime: '11:00 AM',
        image: 'images/icons/Camping.png'
    },
    {
        title: 'Firecrafter Workshop',
        Sdate: '2025-08-05',
        Edate: '2025-08-05',
        header: 'Firecrafter Skills Workshop',
        description: 'Learn essential Firecrafter skills.',
        location: 'Camp Ransburg',
        locDesc: '7599 E Waldrip Creek Rd, Bloomington, IN 47401',
        gps: '44.123456, -90.123456',
        Stime: '1:00 PM',
        Etime: '4:00 PM',
        image: 'images/icons/FC.png'
    },
    {
        title: 'Scout Hike',
        Sdate: '2025-09-12',
        Edate: '2025-09-12',
        header: 'Trail Hike',
        description: 'Explore the scenic trails with fellow scouts.',
        location: 'Eagle Trail',
        locDesc: 'Trailhead Rd, Anytown, USA',
        gps: '45.123456, -91.123456',
        Stime: '8:00 AM',
        Etime: '12:00 PM',
        image: 'images/icons/Scout.png'
    },
    {
        title: 'Service Project',
        Sdate: '2025-10-03',
        Edate: '2025-10-03',
        header: 'Food Drive',
        description: 'Collect and organize food donations.',
        location: 'Community Center',
        locDesc: '321 Helping Hand Ln, Anytown, USA',
        gps: '46.123456, -92.123456',
        Stime: '9:00 AM',
        Etime: '2:00 PM',
        image: 'images/icons/Service.png'
    },
    {
        title: 'Camping Retreat',
        Sdate: '2025-11-18',
        Edate: '2025-11-20',
        header: 'Fall Camping Retreat',
        description: 'Experience the beauty of fall during this camping trip.',
        location: 'Autumn Woods Campground',
        locDesc: '654 Forest Dr, Anytown, USA',
        gps: '47.123456, -93.123456',
        Stime: '4:00 PM',
        Etime: '10:00 AM',
        image: 'images/icons/Camping.png'
    },
    {
        title: 'Scout Celebration',
        Sdate: '2025-12-15',
        Edate: '2025-12-15',
        header: 'Holiday Party',
        description: 'Celebrate the holidays with your troop.',
        location: 'Scout Hall',
        locDesc: '123 Main St, Anytown, USA',
        gps: '48.123456, -94.123456',
        Stime: '6:00 PM',
        Etime: '9:00 PM',
        image: 'images/icons/Scout.png'
    }
];

troopEvents.sort((a, b) => new Date(a.Sdate) - new Date(b.Sdate));
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let currentYear = null;

for (const event of troopEvents) {
    let startDate = new Date(event.Sdate);
    let endDate = new Date(event.Edate);

    // Swap dates if start date is later than end date
    if (startDate > endDate) {
        [startDate, endDate] = [endDate, startDate];
    }

    const eventYear = startDate.getFullYear();
    const startMonth = months[startDate.getMonth()];
    const startDay = startDate.getDate() + 1;
    const endDay = endDate.getDate() + 1;
    let formattedDate;
    if (startDay === endDay) {
        formattedDate = startMonth + ' ' + startDay;
    } else {
        formattedDate = `${startMonth} ${startDay}-${endDay}`;
    }

    if (currentYear !== eventYear) {
        currentYear = eventYear;

        const yearContainer = document.createElement('div');
        yearContainer.id = currentYear;
        yearContainer.className = 'year-container';

        const yearDivider = document.createElement('p');
        yearDivider.id = 'yearDivider';
        yearDivider.className = 'text-[50px] font-bold text-center text-[var(--main-4)]';
        yearDivider.textContent = currentYear;

        yearContainer.appendChild(yearDivider);
        parentDiv.appendChild(yearContainer);
    }

    const yearDiv = document.getElementById(currentYear);

    // Create fullDiv that wraps newDiv
    const fullDiv = document.createElement('div');
    fullDiv.className = 'full-event-wrapper h-fit text-[var(--text-2)] hover:text-white hover:bg-[var(--main-4)] hover:border-[var(--main-4)] transition-all duration-300 ease-in-out cursor-pointer';

    const newDiv = document.createElement('div');
    newDiv.className = 'event flex flex-wrap items-center gap-[5px] py-5 border-b border-black';

    // Create image element
    const img = document.createElement('div');
    img.style.backgroundImage = `url('${event.image}')`;
    img.className = 'w-[81px] h-[81px] bg-cover bg-center rounded-full bg-[var(--main-4)] flex items-center justify-center';

    const innerDiv1 = document.createElement('div');
    innerDiv1.className = 'flex flex-col font-semibold w-[285px]';

    const dateP = document.createElement('p');
    const timeP = document.createElement('p');
    timeP.textContent = formattedDate;

    innerDiv1.appendChild(dateP);
    innerDiv1.appendChild(timeP);

    const innerDiv2 = document.createElement('div');
    innerDiv2.className = 'font-medium text';
    innerDiv2.textContent = event.header;

    newDiv.appendChild(img);
    newDiv.appendChild(innerDiv1);
    newDiv.appendChild(innerDiv2);

    // Add newDiv into fullDiv
    fullDiv.appendChild(newDiv);

    // Event handlers for fullDiv
    fullDiv.addEventListener('mouseover', () => {
        newDiv.classList.add('hovered');
    });

    fullDiv.addEventListener('mouseout', () => {
        newDiv.classList.remove('hovered');
    });

    fullDiv.addEventListener('click', () => {
        const extraDivsContainer = fullDiv.querySelector('.extra-divs-container');
    
        if (extraDivsContainer) {
            // Collapse: slide up
            const currentHeight = extraDivsContainer.scrollHeight;
            extraDivsContainer.style.height = currentHeight + 'px';  // Set to current height
            requestAnimationFrame(() => {
                extraDivsContainer.style.transition = 'height 0.3s ease-in-out';
                extraDivsContainer.style.height = '0px';
            });
    
            extraDivsContainer.addEventListener('transitionend', () => {
                extraDivsContainer.remove(); // Remove after animation
                fullDiv.style.height = '';
                fullDiv.style.width = '';  // Reset width
                fullDiv.classList.add('items-center');
                fullDiv.classList.remove('bg-[var(--main-4)]');
                fullDiv.classList.replace('text-white', 'text-[var(--text-2)]');
                newDiv.classList.add('border-b');
            }, { once: true });
    
        } else {
            // Expand: add extra divs
            fullDiv.classList.remove('items-center');
            fullDiv.classList.add('bg-[var(--main-4)]');
            fullDiv.classList.replace('text-[var(--text-2)]', 'text-white');
            newDiv.classList.remove('border-b');
    
            const extraContainer = document.createElement('div');
            extraContainer.className = 'extra-divs-container flex flex-col mt-4 overflow-hidden';
            extraContainer.style.height = '0px';
            extraContainer.style.transition = 'height 0.3s ease-in-out';
    
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const fullMonths = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const startDayOfWeek = daysOfWeek[startDate.getDay()];
            const endDayOfWeek = daysOfWeek[endDate.getDay()];
            const startMonth = fullMonths[startDate.getMonth()];
            const endMonth = fullMonths[endDate.getMonth()];
    
            // When
            const extraDiv = document.createElement('div');
            extraDiv.className = 'extra-div mt-2 px-20 mb-5';
            extraDiv.innerHTML = `
                <div class="flex items-center gap-2 font-bold">
                    <img src="images/Descriptions/time.png" class="w-[20px] h-[20px]">
                    <text class="text-[18px]">When</text>
                </div>
                Start: ${startDayOfWeek}, ${startMonth} ${startDate.getDate()}, ${event.Stime}
                <br>
                End: ${endDayOfWeek}, ${endMonth} ${endDate.getDate()}, ${event.Etime}
            `;
            extraContainer.appendChild(extraDiv);
    
            // Where
            const extraDiv2 = document.createElement('div');
            extraDiv2.className = 'extra-div mt-2 px-20 mb-5';
            extraDiv2.innerHTML = `
                <div class="flex items-center gap-2  font-bold">
                    <img src="images/Descriptions/pin.png"class="w-[18px] h-[23px]">
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
            <div class="flex items-center gap-2  font-bold">
                <img src="images/Descriptions/info.png" class="w-[20px] h-[20px]">
                <text class="text-[18px]">Description</text>
            </div>
            ${event.description}`;
            extraContainer.appendChild(extraDiv3);
    
            fullDiv.appendChild(extraContainer);
    
            // Wait for next frame so the browser registers the initial `height: 0`
            requestAnimationFrame(() => {
                const targetHeight = extraContainer.scrollHeight;
                extraContainer.style.height = targetHeight + 'px';
            });
    
            // Optional: After the animation, remove inline height so it can adjust to future content
            extraContainer.addEventListener('transitionend', () => {
                extraContainer.style.height = 'auto';
            }, { once: true });
        }
    });
    
    

    // Add to the year container
    yearDiv.appendChild(fullDiv);
}
