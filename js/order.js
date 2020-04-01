const orderButton = document.querySelector('.order-button');

orderButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const items = document.querySelectorAll('.itemRow');
    const list = [...items];
    const activeOrder = list.map(el => el.innerText.split(/\t/).filter(Boolean))
    const 
    console.log('click order: ', activeOrder);  


})