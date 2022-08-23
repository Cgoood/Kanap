// // Récupérer produits du Local Storage
// let getStorage = JSON.parse(localStorage.getItem("products"));

// console.log(getStorage);

// // Définir le total quantité et prix par défaut à 0

// let totalProductsQuantity = 0;
// let totalProductsPrice = 0

// // Récupérer les données de l'API selon à l'ID des produits

// function getProduct(productLocalStorage) {
//     fetch(`http://localhost:3000/api/products/${productLocalStorage.id}`)
//         .then((response) => {
//             return response.json();
//         })
//         .then((productAPI) => {
//             showProduct(productLocalStorage, productAPI);
//         })
        
// }

// // Modifier le DOM
// function showProduct(productLocalStorage, productAPI) {
//     let productCartItems = document.querySelector("#cart__items");
//     let deleteButtons = document.getElementsByClassName("deleteItem");
//     let quantityInputs = document.getElementsByClassName("itemQuantity");

//     let productArticle = document.createElement("article");
//     productCartItems.appendChild(productArticle);
//     productArticle.className = "cart__item";
//     productArticle.setAttribute('data-id', productLocalStorage.id);
//     productArticle.setAttribute('data-color', productLocalStorage.color);

//     let productDivImg = document.createElement("div");
//     productArticle.appendChild(productDivImg);
//     productDivImg.className = "cart__item__img";

//     let productImg = document.createElement("img");
//     productDivImg.appendChild(productImg);
//     productImg.src = productAPI.imageUrl;
//     productImg.alt = productAPI.altTxt;

//     let productContent = document.createElement("div");
//     productArticle.appendChild(productContent);
//     productContent.className = "cart__item__content";

//     let productContentDesc = document.createElement("div");
//     productContent.appendChild(productContentDesc);
//     productContentDesc.className = "cart__item__content__description";

//     let productName = document.createElement("h2");
//     productContentDesc.appendChild(productName);
//     productName.textContent = productAPI.name;

//     let productColor = document.createElement("p");
//     productContentDesc.appendChild(productColor);
//     productColor.textContent = productLocalStorage.colors;

//     let productPrice = document.createElement("p");
//     productContentDesc.appendChild(productPrice);
//     productPrice.textContent = productAPI.price + ' €';

//     let productContentSettings = document.createElement("div");
//     productContent.appendChild(productContentSettings);
//     productContentSettings.className = "cart__item__content__settings";

//     let productContentQuantity = document.createElement("div");
//     productContentSettings.appendChild(productContentQuantity);
//     productContentQuantity.className = "cart__item__content__settings__quantity";

//     let productQuantity = document.createElement("p");
//     productContentQuantity.appendChild(productQuantity);
//     productQuantity.textContent = 'Qté : ';

//     let productQuantityInput = document.createElement("input");
//     productContentQuantity.appendChild(productQuantityInput);
//     productQuantityInput.value = productLocalStorage.quantity;
//     productQuantityInput.className = "itemQuantity";
//     productQuantityInput.setAttribute("type", "number");
//     productQuantityInput.setAttribute("min", "1");
//     productQuantityInput.setAttribute("max", "100");
//     productQuantityInput.setAttribute("name", "itemQuantity");

//     let productContentDelete = document.createElement("div");
//     productContentSettings.appendChild(productContentDelete);
//     productContentDelete.className = "cart__item__content__settings__delete";

//     let productDelete = document.createElement("p");
//     productContentDelete.appendChild(productDelete);
//     productDelete.className = "deleteItem";
//     productDelete.textContent = 'Supprimer';

//     // Créer les évenements au clic
//     for (let button of deleteButtons) {
//         button.addEventListener("click", removeProduct);
//     }

//     for (let input of quantityInputs) {
//         input.addEventListener("change", editQuantityProduct);
//     }

//     // Additionner le total des quantités et calculer le prix
//     totalProductsQuantity += parseInt(productLocalStorage.quantity);
//     totalProductsPrice += productLocalStorage.quantity * productAPI.price;

//     let showTotalQuantity = document.querySelector("#totalQuantity");
//     let showTotalPrice = document.querySelector("#totalPrice");

//     showTotalQuantity.textContent = totalProductsQuantity;
//     showTotalPrice.textContent = totalProductsPrice;
// }

// // Afficher les produits
// function productDisplay() {
//     if (getStorage == null || getStorage.length == 0) {
//         let errorMessage = document.querySelector("#cart__items");
//         errorMessage.style.textAlign = "center";
//         errorMessage.style.marginBottom = "135px";
//         errorMessage.textContent = ("Votre panier est vide");
//     } else {
//         for (let product of getStorage) {
//             getProduct(product);
//         }
//     }
// }

// // Supprimer le produit sur la base de sa couleur et de son ID
// function removeProduct(click) {
//     let targetProduct = click.target.closest("article");
//     console.log(targetProduct.dataset)
//     getStorage = getStorage.filter(product => product._id !== targetProduct.dataset.id && product.colors !== targetProduct.dataset.color);
//     localStorage.setItem("products", JSON.stringify(getStorage));

//     alert("Le produit a été supprimé");
//     window.location.reload();
    

    
// }
// console.log(getStorage);


// // Modifier la quantité du produit et la mettre a jour dans le local storage
// function editQuantityProduct(click) {
//     let targetProduct = click.target.closest("article");
//     let quantityProduct = click.target.closest(".itemQuantity");

//     // Fixer la quantité minimale à 1
//     if (quantityProduct.value < 1) {
//         quantityProduct.value = 1;
//     } 
    
//     else {
//         // Mettre à jour la quantité du local storage avec la nouvelle quantité de l'input
//         let foundProduct = getStorage.find(product => product.id == targetProduct.dataset.id && product.colors == targetProduct.dataset.color);
//         let newQuantity = parseInt(quantityProduct.value);
//         console.log(newQuantity)
//         foundProduct.quantity = newQuantity;
//         localStorage.setItem("products", JSON.stringify(getStorage));

        
        

//     }
// } 

// // Récupérer les données du formulaire
// function toOrder() {
//     let formLocation = document.querySelector(".cart__order__form");

//     // Les différents RegExp
//     let emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");
//     let textRegExp = new RegExp("^[a-zéèçàA-Z0-9.-_ ]{2,50}$");

//     // Vérifier que RegExp est valide pour le texte
//     function validInput(inputText) {
//         let inputErrorMessage = inputText.nextElementSibling;

//         if (textRegExp.test(inputText.value)) {
//             inputErrorMessage.textContent = '';
//             return true;
//         } else {
//             inputErrorMessage.textContent = 'Veuillez entrer un texte valide.';
//             return false;
//         }
//     };

//     // Vérifier que RegExp est valide pour le mail
//     function validEmail(inputEmail) {
//         let emailErrorMessage = inputEmail.nextElementSibling;

//         if (emailRegExp.test(inputEmail.value)) {
//             emailErrorMessage.textContent = '';
//             return true;
//         } else {
//             emailErrorMessage.textContent = 'Veuillez entrer un email valide.';
//             return false;
//         }
//     };

//     formLocation.firstName.addEventListener("change", function () {
//         validInput(this);
//     });

//     formLocation.lastName.addEventListener("change", function () {
//         validInput(this);
//     });

//     formLocation.address.addEventListener("change", function () {
//         validInput(this);
//     });

//     formLocation.city.addEventListener("change", function () {
//         validInput(this);
//     });

//     formLocation.email.addEventListener("change", function () {
//         validEmail(this);
//     });

//     formLocation.order.addEventListener("click", (click) => {

//         // On annule l'envoie du formulaire par défaut, on le vérifie avant
//         click.preventDefault();

//         // Stocker les ID des produits
//         let productID = [];
//         for (let i = 0; i < getStorage.length; i++) {
//             productID.push(getStorage[i].id);
//         };

//         // Stocker ID du produit et informations de contact
//         let orderObject = {
//             contact: {
//                 firstName: formLocation.firstName.value,
//                 lastName: formLocation.lastName.value,
//                 address: formLocation.address.value,
//                 city: formLocation.city.value,
//                 email: formLocation.email.value
//             },
//             products: productID
//         };

//         // Les options pour la méthode POST de fetch
//         let fetchOptions = {
//             method: 'POST',
//             body: JSON.stringify(orderObject),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         };

//         // Vérifier que le panier n'est pas vide et que les inputs sont corrects
//         if (orderObject.products.length == 0) {
//             alert("Vous n'avez aucun produit dans le panier")
//         } else if (validInput(formLocation.firstName) &&
//             validInput(formLocation.lastName) &&
//             validInput(formLocation.address) &&
//             validInput(formLocation.city) &&
//             validEmail(formLocation.email)
//         ) {
//             // Récupérer les données
//             fetch("http://localhost:3000/api/products/order", fetchOptions)
//                 .then((response) => {
//                     return response.json();
//                 })
//                 .then((order) => {
//                     localStorage.clear();
//                     document.location.href = `./confirmation.html?orderId=${order.orderId}`;
//                 })
//                 .catch((error) => {
//                     alert("Pas d'information disponible");
//                 });
//         } else {
//             alert("Le formulaire est incomplet ou incorrect");
//         }
//     });
// }

// // Lancer les fonctions
// productDisplay();
// toOrder();

let cart_items = document.getElementById("cart__items");

function getProduct(id){
    return new Promise(function(resolve, reject){
        fetch("http://localhost:3000/api/products/"+id)
        .then((response) => {
            return response.json();
        })
        .then(resolve).catch(reject);
    })
}

async function displayProducts(products){
    cart_items.innerHTML = ``; // Vider le HTML a chaque changement
    for(let product of products){
        let api_product = await getProduct(product.id);
        cart_items.innerHTML += 
        `<article class="cart__item" data-id="${api_product._id}" data-color="${product.color}">
            <div class="cart__item__img">
              <img src="${api_product.imageUrl}" alt="${api_product.altTxt}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${api_product.name}</h2>
                <p>${product.color}</p>
                <p>${api_product.price} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article>
        `;
    }

    let delete_buttons = document.getElementsByClassName("deleteItem");

    for(let button of delete_buttons){
        button.onclick = removeItem;
       
    }

    calculateTotals();
    
    let quantityInputs = document.getElementsByClassName("cart__item__content__settings__quantity")

    for (let input of quantityInputs) {
        input.addEventListener("change", changeItem);
    }

 
    

}



function calculateTotals(){
    let articles = document.getElementsByClassName("cart__item");
    let total_price = 0;
    let total_quantity = 0;

    for(let i = 0; i < articles.length; i++){
        total_quantity += Number(articles[i].getElementsByClassName("itemQuantity")[0].value);
        total_price += Number(articles[i].getElementsByClassName("cart__item__content__description")[0].getElementsByTagName("p")[1].innerHTML.split(" €").join("")) * Number(articles[i].getElementsByClassName("itemQuantity")[0].value);
    }

    document.getElementById("totalQuantity").innerHTML = total_quantity;
    document.getElementById("totalPrice").innerHTML = total_price;
}

function getLocalStorageProducts(){
    let localstorage_products = localStorage.getItem("products");
    if(!localstorage_products)
        return []
    return JSON.parse(localstorage_products)
}

function removeItem(){
    console.log("removeItem")
    let article = this.closest("article");
    let id = article.dataset.id;
    let color = article.dataset.color; 
    let products = getLocalStorageProducts();
    products = products.filter(x => x.id != id && x.color != color);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(getLocalStorageProducts());
    
    
}


     
// // Modifier la quantité du produit et la mettre a jour dans le local storage
// function editQuantityProduct(click) {
//     let targetProduct = click.target.closest("article");
//     let quantityProduct = click.target.closest(".itemQuantity");

//     // Fixer la quantité minimale à 1
//     if (quantityProduct.value < 1) {
//         quantityProduct.value = 1;
//     } 
    
//     else {
//         // Mettre à jour la quantité du local storage avec la nouvelle quantité de l'input
//         let foundProduct = getStorage.find(product => product.id == targetProduct.dataset.id && product.colors == targetProduct.dataset.color);
//         let newQuantity = parseInt(quantityProduct.value);
//         console.log(newQuantity)
//         foundProduct.quantity = newQuantity;
//         localStorage.setItem("products", JSON.stringify(getStorage));

        
        

//     }
// }     let article = this.closest ("article");
 
function changeItem(){
        
    let article = this.closest("article");
    let quantity = this.closest(".itemQuantity");
    let id = article.dataset.id; 
    let color = article.dataset.color;

    let products = getLocalStorageProducts();

    const itemToUpdate = products.find(x => x.id === id && x.color === color )
    console.log("itemtoupdate", itemToUpdate)

    let newQuantity = document.querySelector(".itemQuantity").value;
    console.log(document.querySelector(".itemQuantity").value)

    itemToUpdate.quantity = newQuantity;

    console.log(itemToUpdate.quantity)
    console.log(products)

    localStorage.setItem("products", JSON.stringify(products));

    

calculateTotals();

      
   
}

// Récupérer les données du formulaire
function toOrder() {
    let formLocation = document.querySelector(".cart__order__form");

    // Les différents RegExp
    let emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");
    let textRegExp = new RegExp("^[a-zéèçàA-Z0-9.-_ ]{2,50}$");

    // Vérifier que RegExp est valide pour le texte
    function validInput(inputText) {
        let inputErrorMessage = inputText.nextElementSibling;

        if (textRegExp.test(inputText.value)) {
            inputErrorMessage.textContent = '';
            return true;
        } else {
            inputErrorMessage.textContent = 'Veuillez entrer un texte valide.';
            return false;
        }
    };

    // Vérifier que RegExp est valide pour le mail
    function validEmail(inputEmail) {
        let emailErrorMessage = inputEmail.nextElementSibling;

        if (emailRegExp.test(inputEmail.value)) {
            emailErrorMessage.textContent = '';
            return true;
        } else {
            emailErrorMessage.textContent = 'Veuillez entrer un email valide.';
            return false;
        }
    };

    formLocation.firstName.addEventListener("change", function () {
        validInput(this);
    });

    formLocation.lastName.addEventListener("change", function () {
        validInput(this);
    });

    formLocation.address.addEventListener("change", function () {
        validInput(this);
    });

    formLocation.city.addEventListener("change", function () {
        validInput(this);
    });

    formLocation.email.addEventListener("change", function () {
        validEmail(this);
    });

    formLocation.order.addEventListener("click", (click) => {

        // On annule l'envoie du formulaire par défaut, on le vérifie avant
        click.preventDefault();

        let productsForm = getLocalStorageProducts()

        // Stocker les ID des produits
        let productID = [];
        for (let i = 0; i < productsForm.length; i++) {
            productID.push(productsForm[i].id);
        };

        console.log(productsForm)

        // Stocker ID du produit et informations de contact
        let orderObject = {
            contact: {
                firstName: formLocation.firstName.value,
                lastName: formLocation.lastName.value,
                address: formLocation.address.value,
                city: formLocation.city.value,
                email: formLocation.email.value
            },
            products: productID
        };

        console.log(orderObject)

        // Les options pour la méthode POST de fetch
        let fetchOptions = {
            method: 'POST',
            body: JSON.stringify(orderObject),
            headers: {
                "Content-Type": "application/json"
            }
        };

        // Vérifier que le panier n'est pas vide et que les inputs sont corrects
        if (orderObject.products.length == 0) {
            console.log(orderObject.products.length)

            alert("Vous n'avez aucun produit dans le panier")
        } else if (validInput(formLocation.firstName) &&
            validInput(formLocation.lastName) &&
            validInput(formLocation.address) &&
            validInput(formLocation.city) &&
            validEmail(formLocation.email)
        ) {
            // Récupérer les données
            fetch("http://localhost:3000/api/products/order", fetchOptions)
                .then((response) => {
                    return response.json();
                })
                .then((order) => {
                    localStorage.clear();
                    document.location.href = `./confirmation.html?orderId=${order.orderId}`;
                })
                .catch((error) => {
                    alert("Pas d'information disponible");
                });
        } else {
            alert("Le formulaire est incomplet ou incorrect");
        }
    });
}

function main(){
    displayProducts(getLocalStorageProducts());
    toOrder()
}
main();


