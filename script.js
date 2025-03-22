const locations = [
    { number: 1, name: "Waterloo Walk-in-Clinic", address: "170 University Ave W", travel: "15 minutes", wait: "25 minutes" },
    { number: 2, name: "King Street Medical Centre", address: "1718 King St E", travel: "20 minutes", wait: "30 minutes" },
    { number: 3, name: "University Help Centre", address: "200 University Ave W", travel: "25 minutes", wait: "35 minutes" },
    { number: 4, name: "Park 535 Medical Centre", address: "535 Park St Unit 2", travel: "10 minutes", wait: "55 minutes" },
    { number: 5, name: "Benton Medical Centre", address: "51 Benton St", travel: "25 minutes", wait: "1 hour" }
];

function createLocationCard(location) {
    return `
        <div class="location-card">
            <div class="number">${location.number}</div>
            <div class="details">
                <h3>${location.name}</h3>
                <p>${location.address}</p>
                <div class="timing">
                    <span>🚗 ${location.travel}</span>
                    <span>⏳ ${location.wait}</span>
                </div>
            </div>
        </div>
    `;
}

function renderLocations() {
    const listContainer = document.getElementById("locations-list");
    listContainer.innerHTML = locations.map(createLocationCard).join("\n");
}

document.addEventListener("DOMContentLoaded", renderLocations);
