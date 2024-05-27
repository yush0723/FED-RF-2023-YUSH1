// dist.js
const bannerData = [
    {
        id: 1,
        name: 'Barcelona',
        lat: 41.3879169,
        lon: 2.1699187,
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Barcelona_view_from_Montjuic_3.jpg'
    },
    {
        id: 2,
        name: 'Madrid',
        lat: 40.4167413,
        lon: -3.7032498,
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Madrid_skyline.jpg'
    },
    {
        id: 3,
        name: 'New York',
        lat: 40.712776,
        lon: -74.005974,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/New_York_City_skyline.jpg'
    },
    {
        id: 4,
        name: 'Los Angeles',
        lat: 34.052235,
        lon: -118.243683,
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Los_Angeles_skyline.jpg'
    },
    {
        id: 5,
        name: 'Sydney',
        lat: -33.868820,
        lon: 151.209290,
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Sydney_skyline.jpg'
    },
    {
        id: 6,
        name: 'Melbourne',
        lat: -37.813629,
        lon: 144.963058,
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Melbourne_skyline.jpg'
    }
];

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

function openDistPage(item) {
    const urlParams = new URLSearchParams();
    urlParams.append('id', item.id);
    urlParams.append('name', item.name);
    urlParams.append('lat', item.lat);
    urlParams.append('lon', item.lon);
    const url = `dist.html?${urlParams.toString()}`;
    window.open(url, 'Distance Information', 'width=500,height=500');
}

function displayDistanceInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const baseId = parseInt(urlParams.get('id'));
    const baseLat = parseFloat(urlParams.get('lat'));
    const baseLon = parseFloat(urlParams.get('lon'));

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
        img.onclick = () => openDistPage(item); // 클릭 시 dist.html로 이동하는 기능 추가

        const distance = document.createElement('div');
        distance.className = 'distance';
        distance.textContent = `${item.distance} km`;

        imageItem.appendChild(img);
        imageItem.appendChild(distance);
        imageContainer.appendChild(imageItem);
    });
}

window.onload = displayDistanceInfo;
