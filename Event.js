// Function to calculate days between two dates
function calculateDaysAway(eventDate) {
    const today = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - today;
    var day = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return day > 0 ? (day > 1 ? (day > 60 ? "60+ Days away" : day + " Days Away" ): "Tomorrow") : "Today";
}

const list = document.getElementById("list");

fetch('events.json')
    
    .then(response => response.json())
    .then(data => {
        const events = data.events.slice(0, 4); // Get the first four events
        for (const event of events) {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = "events.html";
            a.className = "flex flex-col justify-center md:gap-4";

            const imgContainer = document.createElement("div");
            imgContainer.className = "flex justify-center";

            const img = document.createElement("img");
            img.classList= "rounded-full bg-[var(--main-4)] border-[var(--main-4)] border-2";
            img.src = event.image || "/images/icons/Scout.png"; // fallback image
            img.width = 81;
            img.height = 81;
            img.alt = "Event Image";

            imgContainer.appendChild(img);
            a.appendChild(imgContainer);

            const h2 = document.createElement("h2");
            h2.id = "title";
            h2.className = "flex justify-center text-[20px] font-medium text-[var(--text-2)]";
            h2.textContent = event.title || "Event Title";

            a.appendChild(h2);

            const dateContainer = document.createElement("div");

            const h3Date = document.createElement("h3");
            h3Date.id = "date";
            h3Date.className = "flex justify-center font-semibold text-[var(--text-2)]";
            const eventDate = new Date(event.Sdate);
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            h3Date.textContent = eventDate.toLocaleDateString(undefined, options) || "Event Date";

            const h3TimeUntil = document.createElement("h3");
            h3TimeUntil.id = "timeUntil";
            h3TimeUntil.className = "flex justify-center font-semibold text-[var(--text-2)]";
            h3TimeUntil.textContent = calculateDaysAway(event.Sdate);

            dateContainer.appendChild(h3Date);
            dateContainer.appendChild(h3TimeUntil);
            a.appendChild(dateContainer);

            li.appendChild(a);
            list.appendChild(li);
        }
        const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = "events.html";

    const div = document.createElement("div");
    div.className = "flex justify-center md:py-6";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "41");
    svg.setAttribute("height", "27");
    svg.setAttribute("viewBox", "0 0 41 27");
    svg.setAttribute("fill", "none");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute(
        "d",
        "M40.0058 15.2921C40.2412 15.0567 40.426 14.7783 40.5551 14.4669C40.8108 13.8493 40.8108 13.1507 40.5551 12.5331C40.426 12.2217 40.2412 11.9433 40.0058 11.7079L29.8833 1.58541C28.8936 0.595688 27.2939 0.595688 26.3042 1.58541C25.3144 2.57513 25.3144 4.17487 26.3042 5.16459L32.1083 10.9688H2.78125C1.384 10.9688 0.25 12.1027 0.25 13.5C0.25 14.8973 1.384 16.0312 2.78125 16.0312H32.1083L26.3042 21.8354C25.3144 22.8251 25.3144 24.4249 26.3042 25.4146C26.7977 25.9082 27.4458 26.1562 28.0938 26.1562C28.7417 26.1562 29.3898 25.9082 29.8833 25.4146L40.0058 15.2921Z"
    );
    path.setAttribute("fill", "#162441");

    svg.appendChild(path);
    div.appendChild(svg);
    a.appendChild(div);
    li.appendChild(a);
    list.appendChild(li);

    })
    .catch(error => console.error('Error fetching events:', error));
    
