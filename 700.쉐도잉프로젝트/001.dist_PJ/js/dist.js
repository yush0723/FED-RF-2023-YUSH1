// dist.js
import bannerData from './bannerData.js';
import calc from './calc.js';

function displayDistanceInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const baseId = parseInt(urlParams.get('id'));
    const baseName = urlParams.get('name');
    const baseLat = parseFloat(urlParams.get('lat'));
    const baseLon = parseFloat(urlParams.get('lon'));

    const baseInfo = bannerData.find(item => item.id === baseId);

    const additionalInfo = document.getElementById('additionalInfo');
    additionalInfo.innerHTML = `
        <h2>Selected Image: ${baseName}</h2>
        <img src="${baseInfo.img}" alt="${baseName}">
    `;

    const distances = calc.sortDistances(baseLat, baseLon, bannerData);

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous images

    distances.forEach(item => {
        if (item.id !== baseId) {
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';

            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;

            const link = document.createElement('a');
            link.href = `dist.html?id=${item.id}&name=${item.name}&lat=${item.lat}&lon=${item.lon}`;
            link.appendChild(img);

            const distance = document.createElement('div');
            distance.className = 'distance';
            distance.textContent = `${item.distance} km`;

            imageItem.appendChild(link);
            imageItem.appendChild(distance);
            imageContainer.appendChild(imageItem);
        }
    });

    // Add button functionality
    document.getElementById('addButton').addEventListener('click', () => {
        addToRightContent(baseInfo);
        window.location.href = 'index.html'; // Redirect to index.html after adding
    });

    // Close button functionality
    document.getElementById('closeButton').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to index.html
    });
}

function addToRightContent(item) {
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    if (!selectedItems.some(i => i.id === item.id)) {
        selectedItems.push(item);
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }
}

window.onload = displayDistanceInfo;