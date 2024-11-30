
document.getElementById("event-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    fetch("events.json")
        .then(response => response.json())
        .then(events => {
            events.push({ title, date, description });
            return fetch("events.json", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(events)
            });
        })
        .then(() => alert("Event added successfully!"))
        .catch(err => console.error("Error updating events:", err));
});
