// récupérer l'ID du canapé (productID)
let product_id = window.location.search.split("?").join("");
console.log(product_id);

let getProductInfos;

const fetchProduct = async () => {
    await fetch(`http://localhost:3000/api/products/${product_id}`)
        .then((res) => res.json())
        .then((promise) => {
            getProductInfos = promise;
            console.log(getProductInfos);
        });
};


// insérer les éléménts du canapé
const displayProductInfos = async () => {
    await fetchProduct();

    document.title = getProductInfos.name;
    const productImage =
        document.createElement("img")
    document.querySelector(".item__img")
        .appendChild(productImage);
    productImage.src = getProductInfos.imageUrl;
    productImage.alt = getProductInfos.altTxt;

    document.getElementById("title").innerHTML =
        `${getProductInfos.name}`

    document.getElementById("price").innerHTML =
        `${getProductInfos.price}`

    document.getElementById("description").innerHTML =
        `${getProductInfos.description}`


    // récupérer et choisir couleurs du canapé

    let canapeColors = document.getElementById("colors");
    console.log(canapeColors);
    console.log(getProductInfos.colors);

    getProductInfos.colors.forEach((colors) => {
        console.log(colors);
        let chooseOption = document.createElement("option");

        chooseOption.innerHTML = `${colors}`;
        chooseOption.value = `${colors}`;

        canapeColors.appendChild(chooseOption);
        console.log(chooseOption);
    });
};

displayProductInfos();

// stocker les éléments dans le local storage


let addButton = document.getElementById("addToCart");
console.log(addButton);
addButton.addEventListener("click", addToCart);


// Récupérer produits du Local Storage
function productsInTheLocalStorage() {
    if (JSON.parse(localStorage.getItem("products") == null)) {
        return []
    }
    return JSON.parse(localStorage.getItem("products"))
}

// Updater le Local Storage
function updateLocalStorage(product) {
    localStorage.setItem("product", JSON.stringify(product))
}

// Ajouter les produits au Local Storage
function addToCart() {
    let product = getFormValues();
    if (!checkForm()) {
        return null;
    }

    // Si l'id du produit est déjà présent dans le ls

    let productsLS = JSON.parse(localStorage.getItem("products"))
    console.log(productsLS);

    if (!productsLS) {
        productsLS = [];
    }

    const foundProduct = productsLS.find(productLS => product.id === productLS.id && product.color === productLS.color);
    if (!foundProduct) {
        productsLS.push(product);
    } else {
        for (let i = 0; i < productsLS.length; i++) {
            let item = productsLS[i];
            if (product.id == item.id && product.color == item.color) {
                if (Number(item.quantity) + Number(product.quantity) <= 100) {
                    item.quantity = Number(item.quantity) + Number(product.quantity)
                } else {
                    alert("Vous ne pouvez pas commander plus de 100 articles")
                    return null;
                }
            }
        };
    }
    localStorage.setItem("products", JSON.stringify(productsLS));
    alert(`vous avez ajouté ${product.quantity} produits à votre panier`);
};

function getFormValues() {
    return {
        color: (document.getElementById("colors")).value,
        quantity: (document.getElementById("quantity")).value,
        id: product_id
    };
};

function checkForm() {

    if (colors.value === "") {
        alert("Veuillez sélectionner une couleur")
        return false;
    } else if (quantity.value > 100) {
        alert("Vous ne pouvez pas commander plus de 100 articles")
        return false;
    } else if (quantity.value < 0) {
        alert("Vous devez au moins selectionner un article")
        return false;
    }
    return true;
};
