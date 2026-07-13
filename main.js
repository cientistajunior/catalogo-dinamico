"use Strict";
const products = [
    { id: 1, name: "Smartphone Poco F6", category: "celulares", price: 2500 },
    { id: 2, name: "Notebook Ubuntu Dev", category: "computadores", price: 4500 },
    { id: 3, name: "Monitor 4K Pro", category: "monitores", price: 1800 },
    { id: 4, name: "Smartphone Poco F6 Pro", category: "celulares", price: 3500 },
    { id: 5, name: "Teclado HP", category: "teclados", price: 270.69 },
    { id: 6, name: "Tablet Samsung S10", category: "tablets", price: 2184.57 },
    { id: 7, name: "Tablet Xaiomi Redmi Pad 2 11", category: "tablets", price: 1359.21 }
];


/**
 @returns {Array<Object>
}
 */

const productNameLabel = document.querySelector('.productNameLabel');
const productNameInput = document.querySelector('#productNameInput');
const productCategoryLabel = document.querySelector('.productCategoryLabel');
const productCategoryInput = document.querySelector('#productCategoryInput');
const productPriceLabel = document.querySelector('.productPriceLabel');
const productPriceInput = document.querySelector('#productPriceInput');
const btnAdd = document.querySelector('.btnAdd');
const listProducts = document.querySelector('#list-products');

const filterCellPhones = () => {
    const shareProduct = products.filter((item) => item.category === "Celulares");
    return shareProduct;
};

btnAdd.addEventListener("click", (event) => {
    /** para evitar evento inisperado do botão. Uma boa prática. */
    event.preventDefault();

    const name = productNameInput.value;
    const category = productCategoryInput.value;
    const price = productPriceInput.value;

     /** proibe adicionar caso esteja vazio os inputs. */
    if(!name || !category || !price){
        alert("Por favor, preencha todos os campos!")
        return
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        category: category,
        price: price,
    }

    products.push(newProduct)
    renderProducts(products);

    /**resetar os campos dos inputs */
    productNameInput.value = "";
    productCategoryInput.value = "";
    productPriceInput.value = "";
});

/**
 * @param {Array<Object>} list
 */
const renderProducts = (list) => {
    listProducts.innerHTML = "";

    list.forEach((productsList) => {
        listProducts.innerHTML += `<li>${productsList.name} - R$ ${productsList.price} <button class="btnDelete">Excluir</button></li>`;
    })
};

/**Pra mostrar a lista de produtos */
renderProducts(products);

listProducts.addEventListener("click", (event) => {
    // Aqui dentro vamos descobrir exatamente QUAL elemento foi clicado!
    console.log(event.target);
});