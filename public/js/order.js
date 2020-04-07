const orderButton = document.querySelector('.order-button');
const formSubmitButton = document.querySelector('.formBtn')

const sendToBackend = () => {
    console.log('send to backend: ')

}

orderButton.addEventListener('click', (e) => {
    // e.preventDefault();

    sendToBackend();
    // const items = document.querySelectorAll('.itemRow');
    // const list = [...items];
    // const activeOrder = list.map(el => el.innerText.split(/\t/).filter(Boolean))
    // console.log('click order: ', activeOrder);  


})

formSubmitButton.addEventListener('click', (e) => {

    // e.preventDefault();
    console.log('form button: ');
})