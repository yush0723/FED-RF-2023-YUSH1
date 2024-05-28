// index.js
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

    displaySelectedItems();
}

function displaySelectedItems() {
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = ''; // Clear previous content

    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    selectedItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'selected-item';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = item.name;

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        rightContent.appendChild(itemDiv);
    });
}

window.onload = displayBannerData;