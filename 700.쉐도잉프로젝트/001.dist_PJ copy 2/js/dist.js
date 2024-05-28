import bannerData from './bannerData.js';

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const rad = function(x) {
        return x * Math.PI / 180;
    };

    const R = 6378.137; // 지구 반지름 (킬로미터 단위, WGS84)
    const dLat = rad(lat2 - lat1);
    const dLong = rad(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
              Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return d.toFixed(3); // 소수점 3자리까지 반환
}

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

    const distances = bannerData.filter(item => item.id !== baseId).map(item => {
        const distance = calcularDistancia(baseLat, baseLon, item.lat, item.lon);
        return {
            ...item,
            distance: parseFloat(distance)
        };
    });

    distances.sort((a, b) => a.distance - b.distance);

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous images

    distances.forEach(item => {
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
    });
}

window.onload = displayDistanceInfo;
