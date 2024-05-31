import bannerData from './bannerData.js';
import { getSelectedItems, addToLocalStorage, removeFromLocalStorage } from './localStorageUtils.js';

let selectedItemId = null;

window.onload = () => {
    displayBannerData();
    displaySelectedItems();

    // 한 번만 이벤트 리스너를 추가합니다.
    document.body.addEventListener('click', handleBodyClick);
    document.getElementById('removeButton').addEventListener('click', handleRemoveButtonClick);
};

function handleBodyClick(event) {
    const { target } = event;
    const itemId = parseInt(target.dataset.itemId);

    if (target.classList.contains('banner-item')) {
        const selectedItem = bannerData.find(data => data.id === itemId);
        addToLocalStorage(selectedItem);
        displaySelectedItems();
    }

    if (target.classList.contains('selected-item')) {
        selectedItemId = itemId;
        highlightSelectedItem();
    }
}

function handleRemoveButtonClick() {
    if (selectedItemId !== null) {
        const selectedItem = getSelectedItems().find(item => item.id === selectedItemId);
        removeFromLocalStorage(selectedItem);
        selectedItemId = null;
        displaySelectedItems();
    }
}

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
    bannerContainer.innerHTML = '';  // 기존 콘텐츠 초기화
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

    return itemDiv;
}

function displaySelectedItems() {
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = '';

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'buttons-wrapper';
    buttonsWrapper.innerHTML = `
        <img src="./images/add.png" id="addButton" class="control-button" alt="Add">
        <img src="./images/remove.png" id="removeButton" class="control-button" alt="Remove">
    `;
    rightContent.appendChild(buttonsWrapper);

    const selectedItems = getSelectedItems();
    selectedItems.forEach(item => {
        const selectedItem = createSelectedItem(item);
        rightContent.appendChild(selectedItem);
    });

    highlightSelectedItem();
}

function highlightSelectedItem() {
    const selectedItems = document.querySelectorAll('.selected-item');
    selectedItems.forEach(item => {
        const itemId = parseInt(item.dataset.itemId);
        if (itemId === selectedItemId) {
            item.classList.add('highlight');
        } else {
            item.classList.remove('highlight');
        }
    });
}
