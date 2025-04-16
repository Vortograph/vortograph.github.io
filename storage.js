// Select the parent div
const parentDiv = document.getElementById('parent');

const troopEvents = [
    {
        title: 'Camping Trip',
        date: '2025-04-19',
        header: 'Camping at Syracuse Scout Lodge',
        description: 'Today we will be camping at the Syracuse Scout Lodge.',
        location: 'Syracuse Scout Lodge',
        time: '9:00 AM - 5:00 PM',
        image: 'images/icons/Camping.png'
    },
];

troopEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let currentYear = null;

for (let i = 0; i < troopEvents.length; i++) {
    const split = troopEvents[i].date.split("-");
    const mon = months[split[1] - 1];
    const eventYear = split[0];

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
    fullDiv.className = 'full-event-wrapper text-[var(--text-2)] hover:text-white hover:bg-[var(--main-4)] hover:border-[var(--main-4)] transition-all duration-300 ease-in-out cursor-pointer';

    const newDiv = document.createElement('div');
    newDiv.className = 'event flex flex-wrap items-center gap-[5px] py-5 border-b border-black ';

    // Create image element
    const img = document.createElement('div');
    img.style.backgroundImage = "url('" + troopEvents[i].image + "')";
    img.className = 'w-[81px] h-[81px] bg-cover bg-center rounded-full bg-[var(--main-4)] flex items-center justify-center';

    const innerDiv1 = document.createElement('div');
    innerDiv1.className = 'flex flex-col font-semibold w-[285px]';

    const dateP = document.createElement('p');
    dateP.textContent = `${mon} ${split[2]}, ${split[0]}`;

    const timeP = document.createElement('p');
    timeP.textContent = troopEvents[i].time;

    innerDiv1.appendChild(dateP);
    innerDiv1.appendChild(timeP);

    const innerDiv2 = document.createElement('div');
    innerDiv2.className = 'font-medium text';
    innerDiv2.textContent = troopEvents[i].header;

    newDiv.appendChild(img);
    newDiv.appendChild(innerDiv1);
    newDiv.appendChild(innerDiv2);

    // Add newDiv into fullDiv
    fullDiv.appendChild(newDiv);

    // Event handlers only on fullDiv
    fullDiv.addEventListener('mouseover', () => {
        newDiv.classList.add('hovered');
    });

    fullDiv.addEventListener('mouseout', () => {
        newDiv.classList.remove('hovered');
    });

    fullDiv.addEventListener('click', () => {
        const extraDivsContainer = fullDiv.querySelector('.extra-divs-container');
    
        if (extraDivsContainer) {
            // Collapse: remove the extra divs and reset styles
            extraDivsContainer.remove();
            fullDiv.style.height = '';
            fullDiv.classList.add('items-center');
            fullDiv.classList.remove('bg-[var(--main-4)]');
            fullDiv.classList.replace('text-white', 'text-[var(--text-2)]');
            newDiv.classList.add('border-b');
        } else {
            // Expand: add the extra divs and apply expanded styles
            fullDiv.style.height = '300px';
            fullDiv.classList.remove('items-center');
            fullDiv.classList.add('bg-[var(--main-4)]');
            fullDiv.classList.replace('text-[var(--text-2)]', 'text-white');
            newDiv.classList.remove('border-b');
    
            const extraContainer = document.createElement('div');
            extraContainer.className = 'extra-divs-container flex flex-col mt-4';
    
            //create description divs
                //when
                const extraDiv = document.createElement('div');
                extraDiv.className = 'extra-div mt-2 px-20';
                extraDiv.textContent = `When: ${troopEvents[i].date}`;
                extraContainer.appendChild(extraDiv);

                //where
                const extraDiv2 = document.createElement('div');
                extraDiv2.className = 'extra-div mt-2 px-20';
                extraDiv2.textContent = 'location: ' + troopEvents[i].location;
                extraContainer.appendChild(extraDiv2);

                //description
                const extraDiv3 = document.createElement('div');
                extraDiv3.className = 'extra-div mt-2 px-20';
                extraDiv3.textContent = `Description: ${troopEvents[i].description}`;
                extraContainer.appendChild(extraDiv3);
    
            fullDiv.appendChild(extraContainer);
        }
    });
    

    // Add to the year container
    yearDiv.appendChild(fullDiv);
}


