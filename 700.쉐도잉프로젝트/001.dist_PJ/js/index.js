import bannerData from './bannerData.js';

window.onload = () => {
    displayBannerData();
    displaySelectedItems();

    document.addEventListener('click', event => {
        if (event.target.classList.contains('selected-item')) {
            const itemId = parseInt(event.target.dataset.itemId);
            const selectedItem = bannerData.find(data => data.id === itemId);
            removeFromLocalStorage(selectedItem);
            displaySelectedItems();
        } else if (event.target.classList.contains('banner-item')) {
            const itemId = parseInt(event.target.dataset.itemId);
            const selectedItem = bannerData.find(data => data.id === itemId);
            addToLocalStorage(selectedItem);
            displaySelectedItems();
        }
    });

    const leftContent = document.querySelector('.left-content');
    const rightContent = document.querySelector('.right-content');

    leftContent.addEventListener('dragstart', event => {
        const itemId = event.target.dataset.itemId;
        event.dataTransfer.setData('text/plain', itemId);
    });

    rightContent.addEventListener('dragover', event => {
        event.preventDefault();
    });

    rightContent.addEventListener('drop', event => {
        event.preventDefault();
        const itemId = event.dataTransfer.getData('text/plain');
        const selectedItem = bannerData.find(data => data.id === parseInt(itemId));
        addToLocalStorage(selectedItem);
        displaySelectedItems();
    });
};

function displayBannerData() {
    const bannerContainer = document.getElementById('bannerContainer');

    bannerData.forEach(item => {
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
        bannerContainer.appendChild(bannerItem);
    });
}

function displaySelectedItems() {
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = '';

    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    selectedItems.forEach(item => {
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

        itemDiv.addEventListener('click', () => {
            removeFromLocalStorage(item);
            displaySelectedItems();
        });

        rightContent.appendChild(itemDiv);
    });
}

function addToLocalStorage(item) {
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    if (!selectedItems.some(i => i.id === item.id)) {
        selectedItems.push(item);
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }
}

function removeFromLocalStorage(item) {
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    selectedItems = selectedItems.filter(i => i.id !== item.id);
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
}
