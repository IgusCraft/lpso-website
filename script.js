
document.addEventListener("DOMContentLoaded", () => {
    fetch("events.json")
        .then(response => response.json())
        .then(events => {
            const container = document.getElementById("events-container");
            if (events.length === 0) {
                container.innerHTML = "<p>No upcoming events.</p>";
            } else {
                events.forEach(event => {
                    const eventDiv = document.createElement("div");
                    eventDiv.classList.add("event");
                    eventDiv.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p><p>${event.description}</p>`;
                    container.appendChild(eventDiv);
                });
            }
        })
        .catch(err => console.error("Error loading events:", err));
});
