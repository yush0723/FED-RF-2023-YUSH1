// index.js
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

function displayBannerData() {
    const bannerContainer = document.getElementById('bannerContainer');

    bannerData.forEach(item => {
        const bannerItem = document.createElement('div');
        bannerItem.className = 'banner-item';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.onclick = () => openDistPage(item);

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = item.name;

        bannerItem.appendChild(img);
        bannerItem.appendChild(name);
        bannerContainer.appendChild(bannerItem);
    });
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

window.onload = displayBannerData;