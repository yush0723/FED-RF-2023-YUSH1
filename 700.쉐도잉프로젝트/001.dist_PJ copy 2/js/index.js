import bannerData from './bannerData.js';
import { getSelectedItems, addToLocalStorage, removeFromLocalStorage } from './localStorageUtils.js';

window.onload = () => {
    displayBannerData();
    displaySelectedItems();

    // 이벤트 위임을 통한 효율적인 이벤트 처리
    document.body.addEventListener('click', event => {
        const { target } = event;
        const itemId = parseInt(target.dataset.itemId);
        
        if (target.classList.contains('banner-item')) {
            const selectedItem = bannerData.find(data => data.id === itemId);
            addToLocalStorage(selectedItem);
            displaySelectedItems();
        }

        if (target.classList.contains('selected-item')) {
            const selectedItem = bannerData.find(data => data.id === itemId);
            removeFromLocalStorage(selectedItem);
            displaySelectedItems();
        }
    });
};

function createBannerItem(item) {
    const bannerItem = document.createElement('div');
    bannerItem.className = 'banner-item';
    bannerItem.dataset.itemId = item.id;

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

    return bannerItem;
}

function displayBannerData() {
    const bannerContainer = document.getElementById('bannerContainer');
    bannerData.forEach(item => {
        const bannerItem = createBannerItem(item);
        bannerContainer.appendChild(bannerItem);
    });
}

function createSelectedItem(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'selected-item';
    itemDiv.dataset.itemId = item.id;

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = item.name;

    itemDiv.appendChild(img);
    itemDiv.appendChild(name);

    // 개별 항목에 클릭 이벤트 리스너 추가
    itemDiv.addEventListener('click', () => {
        removeFromLocalStorage(item);
        displaySelectedItems();
    });

    return itemDiv;
}

function displaySelectedItems() {
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = '';

    const selectedItems = getSelectedItems();
    selectedItems.forEach(item => {
        const selectedItem = createSelectedItem(item);
        rightContent.appendChild(selectedItem);
    });
}
