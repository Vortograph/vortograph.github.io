const list = document.getElementById('list');

fetch('Storage.json')
    .then(response => response.json())
    .then(data => {
        const scouts = data.eagle;

        scouts.sort((a, b) => new Date(a.date.split('-').join('/')) - new Date(b.date.split('-').join('/')));
        scouts.reverse();

        let currentYear = '';

        for (let i = 0; i < scouts.length; i++) {
            const scoutYear = scouts[i].date.split('-')[0];

            // If we're at a new year, add a year "box"
            if (scoutYear !== currentYear) {
                currentYear = scoutYear;

                const yearBox = document.createElement('div');
                yearBox.className = 'w-screen px-4 h-fit py-1 bg-[var(--main-4)] items-center justify-center mt-4';

                const yearText = document.createElement('p');
                yearText.className = 'text-center text-[var(--main-2)] text-[24px] [font-family:\'Black_Han_Sans\',sans-serif]';
                yearText.textContent = scoutYear;

                yearBox.appendChild(yearText);
                list.appendChild(yearBox);
            }

            // Create the list item for the scout
            const slate = document.createElement('li');
            slate.className = 'flex gap-[5px] items-center';

            const nameDiv = document.createElement('div');
            nameDiv.className = 'w-fit px-4 h-fit py-1 bg-[var(--main-4)] items-center justify-center';
            
            const nameP = document.createElement('p');
            nameP.className = 'text-center text-[var(--main-2)] text-[20px] [font-family:\'Black_Han_Sans\',sans-serif]';
            nameP.textContent = scouts[i].name;
            nameDiv.appendChild(nameP);

            const dateDiv = document.createElement('div');
            dateDiv.className = 'w-fit px-4 h-fit py-1 bg-[var(--main-4)] items-center justify-center';
            
            const dateP = document.createElement('p');
            dateP.className = 'text-center text-[var(--main-2)] text-[20px] [font-family:\'Black_Han_Sans\',sans-serif]';
            const dateParts = scouts[i].date.split('-');
            dateP.textContent = `${dateParts[1]}/${dateParts[2]}`;
            dateDiv.appendChild(dateP);

            slate.appendChild(nameDiv);
            slate.appendChild(dateDiv);

            list.appendChild(slate);
        }
    });
