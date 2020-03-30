const orderButton = document.querySelector('.order-button');

orderButton.addEventListener('click', (e) => {
    e.preventDefault();
    const items = document.querySelectorAll('.itemRow');
    // items.map(el => el.innerHTML)
    const list = [...items];
    console.log('click order: ', list.map(el => el.innerText));  


})