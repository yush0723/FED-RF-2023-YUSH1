// 임시 배너 데이터 (마치 데이터베이스처럼)
const bannerData = [
    {
        id: 1,
        name: 'Barcelona',
        lat: 41.3879169,
        lon: 2.1699187,
        img: 'https://via.placeholder.com/200x300?text=Barcelona'
    },
    {
        id: 2,
        name: 'Madrid',
        lat: 40.4167413,
        lon: -3.7032498,
        img: 'https://via.placeholder.com/200x300?text=Madrid'
    },
    {
        id: 3,
        name: 'New York',
        lat: 40.712776,
        lon: -74.005974,
        img: 'https://via.placeholder.com/200x300?text=New+York'
    },
    {
        id: 4,
        name: 'Los Angeles',
        lat: 34.052235,
        lon: -118.243683,
        img: 'https://via.placeholder.com/200x300?text=Los+Angeles'
    },
    {
        id: 5,
        name: 'Sydney',
        lat: -33.868820,
        lon: 151.209290,
        img: 'https://via.placeholder.com/200x300?text=Sydney'
    },
    {
        id: 6,
        name: 'Melbourne',
        lat: -37.813629,
        lon: 144.963058,
        img: 'https://via.placeholder.com/200x300?text=Melbourne'
    }
    // 필요한 만큼 데이터 추가 가능
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

function displayBannerData() {
    const bannerContainer = document.getElementById('bannerContainer');

    bannerData.forEach(item => {
        const bannerItem = document.createElement('div');
        bannerItem.className = 'banner-item';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.onclick = () => openDistanceWindow(item);

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = item.name;

        bannerItem.appendChild(img);
        bannerItem.appendChild(name);
        bannerContainer.appendChild(bannerItem);
    });
}

function openDistanceWindow(baseItem) {
    const distances = bannerData.filter(item => item.id !== baseItem.id).map(item => {
        const distance = calcularDistancia(baseItem.lat, baseItem.lon, item.lat, item.lon);
        return {
            name: item.name,
            distance: parseFloat(distance)
        };
    });

    distances.sort((a, b) => a.distance - b.distance);

    const distanceList = distances.map(item => `${baseItem.name}와 ${item.name} 간의 거리: ${item.distance} km`).join('\n');

    alert(distanceList);
}

// 페이지 로드 시 배너 데이터 표시
window.onload = displayBannerData;
