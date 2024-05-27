import bannerData from './bannerData.js';

function displayBannerData() {
    const bannerContainer = document.getElementById('bannerContainer');

    bannerData.forEach(item => {
        const bannerItem = document.createElement('div');
        bannerItem.className = 'banner-item';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;

        const link = document.createElement('a');
        link.href = `dist.html?id=${item.id}&name=${item.name}&lat=${item.lat}&lon=${item.lon}`;
        link.appendChild(img);

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = item.name;

        bannerItem.appendChild(link);
        bannerItem.appendChild(name);
        bannerContainer.appendChild(bannerItem);
    });
}

window.onload = displayBannerData;
