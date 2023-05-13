const list = document.querySelector('#categories');
const listItems = list.querySelectorAll('li.item')
console.log(`Number of categories: ${listItems.length}`);

[...list.children].forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});