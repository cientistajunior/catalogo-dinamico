"use Strict";
const products = [
    { id: 1, name: "Smartphone Poco F6", category: "Celulares", price: 2500 },
    { id: 2, name: "Notebook Ubuntu Dev", category: "Computadores", price: 4500 },
    { id: 3, name: "Monitor 4K Pro", category: "Monitores", price: 1800 },
    { id: 4, name: "Smartphone Poco F6 Pro", category: "Celulares", price: 3500 }
];


/**
 @returns {Array<Object>
}
 */

const productNameLabel = document.querySelector('.productNameLabel');
const productNameInput = document.querySelector('#productNameInput');
const btnPush = document.querySelector('.btnPush');
const listProducts = document.querySelector('#list-products');

const filterCellPhones = () => {
    const shareProduct = products.filter((item) => item.category === "Celulares");
    return shareProduct;
};

btnPush.addEventListener("click", (event) => {
  const filterPhone = filterCellPhones();
  return renderProducts(filterPhone);
});

/**
 * @param {Array<Object>} lista
 */
const renderProducts = (list) => {
    listProducts.innerHTML = "";

    list.forEach((productsList) => {
        listProducts.innerHTML += `<li>${productsList.name} - R$ ${productsList.price}</li>`;
    })
};