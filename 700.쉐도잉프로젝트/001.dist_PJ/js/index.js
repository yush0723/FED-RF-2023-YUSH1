// index.js
import bannerData from './bannerData.js';

window.onload = () => {
    displayBannerData();
    displaySelectedItems();

    // Add event listeners to each selected-item for removal
    document.addEventListener('click', event => {
        if (event.target.classList.contains('selected-item')) {
            const itemId = parseInt(event.target.dataset.itemId);
            const selectedItem = bannerData.find(data => data.id === itemId);
            removeFromLocalStorage(selectedItem);
            displaySelectedItems(); // Update displayed selected items
        }
    });

    // Add event listeners to each banner-item for addition
    document.addEventListener('click', event => {
        if (event.target.classList.contains('banner-item')) {
            const itemId = parseInt(event.target.dataset.itemId);
            const selectedItem = bannerData.find(data => data.id === itemId);
            addToLocalStorage(selectedItem);
            displaySelectedItems(); // Update displayed selected items
        }
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
    rightContent.innerHTML = ''; // Clear previous content

    // Add div at the top of rightContent
    const topDiv = document.createElement('div');
    topDiv.className = 'top-div';

    // Add '+' button
    const addButton = document.createElement('img');
    addButton.src = 'plus.png';
    addButton.alt = '+';
    addButton.className = 'add-button';
    addButton.addEventListener('click', () => {
        // Add your logic here
    });

    // Add '-' button
    const removeButton = document.createElement('img');
    removeButton.src = 'minus.png';
    removeButton.alt = '-';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', () => {
        // Add your logic here
    });

    topDiv.appendChild(addButton);
    topDiv.appendChild(removeButton);

    rightContent.appendChild(topDiv);

    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    selectedItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'selected-item';
        itemDiv.dataset.itemId = item.id; // Add dataset for identification

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = item.name;

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        
        // Add event listener to each selected item for removal
        itemDiv.addEventListener('click', () => {
            removeFromLocalStorage(item);
            displaySelectedItems(); // Update displayed selected items
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
