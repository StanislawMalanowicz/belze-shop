const orderButton = document.querySelector('.order-button');

orderButton.addEventListener('click', (e) => {
    e.preventDefault();
    const items = document.querySelectorAll('.itemRow');
    // items.map(el => el.innerHTML)
    const list = [...items];
    const activeOrder = list.map(el => el.innerText.split(/\t/).filter(Boolean).join(" "))
    console.log('click order: ', activeOrder);  


})