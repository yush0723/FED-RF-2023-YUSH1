export function getSelectedItems() {
    return JSON.parse(localStorage.getItem('selectedItems')) || [];
}

export function addToLocalStorage(item) {
    let selectedItems = getSelectedItems();
    if (!selectedItems.some(i => i.id === item.id)) {
        selectedItems.push(item);
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }
}

export function removeFromLocalStorage(item) {
    let selectedItems = getSelectedItems();
    selectedItems = selectedItems.filter(i => i.id !== item.id);
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
}
