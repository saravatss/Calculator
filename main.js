const button = document.getElementById('button');

let totalPrice = 0;

button.addEventListener('click', function () { 
    const countOfPages = document.querySelector('#count-of-pages');
    const countOfBooks = document.querySelector('#count-of-books');
    const typeOfLists = document.querySelector('#type-of-list');
    const typeOfCover = document.querySelector('#type-of-cover');
    const typeOfThat = document.querySelector('#type-of-that');
    const checkbox = document.querySelector('#aut-popularity');

  

    const countBooks = parseInt(countOfBooks.value);
    const countPages = parseInt(countOfPages.value);
    const optionLists = typeOfLists.value;
    const optionCover = typeOfCover.value;
    const optionThat = typeOfThat.value
  
  
  
    const priceBooks = parseInt(countOfBooks.dataset.price);
    const pricePages = parseInt(countOfPages.dataset.price);
    
  
  
    totalPrice = (countBooks * priceBooks) * (countPages * pricePages * optionLists) + (countBooks * optionCover * optionThat);
  
  
    function createTotalPrice () {
        const totalPriceEl = document.getElementById('total-price');
        const priceValue = totalPriceEl;

        priceValue.classList.add("very-final-price");
    
        priceValue.innerHTML = `Стоимость: ${totalPrice} рублей`;
        totalPriceEl.append(priceValue);
        
        return totalPriceEl;
    };



    function createSign () {
        const totalPriceEl = document.getElementById('total-price');
        const priceValue = totalPriceEl;

        priceValue.classList.add("very-final-price");

        priceValue.innerHTML = "Заполните все необходимые поля!";
        totalPriceEl.append(priceValue);
        
        return totalPriceEl;
    }
  
  
    if (checkbox.checked) {
        totalPrice = totalPrice * 1.5;
    };
 
    const select = document.querySelector('select'); // выбираем элемент select
    const selectedValue = select.value;  

    if ((selectedValue) > 0) {
            createTotalPrice();
    } else {
            createSign();

    };
  
});
