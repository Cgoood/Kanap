// récupérer l'ID du canapé (productID)
const product_id = window.location.search.split("?").join("");
console.log(product_id);

let canapeElements = [];


const fetchProduct = async () => {
    await fetch(`http://localhost:3000/api/products/${product}`)
        .then((res) => res.json())
        .then((promise) => {
            canapeElements = promise;
            console.log(canapeElements);
        });
};



// insérer les éléménts du canapé
const productDisplay = async () => {
    await fetchProduct();

    document.title = canapeElements.name;
    const productImage =
        document.createElement("img")
    document.querySelector(".item__img")
        .appendChild(productImage);
    productImage.src = canapeElements.imageUrl;
    productImage.alt = canapeElements.altTxt;;

    document.getElementById("title").innerHTML =
        `${canapeElements.name}`

    document.getElementById("price").innerHTML =
        `${canapeElements.price}`

    document.getElementById("description").innerHTML =
        `${canapeElements.description}`


    // récupérer et choisir couleurs du canapé

    let canapeColors = document.getElementById("colors");
    console.log(canapeColors);
    console.log(canapeElements.colors);

    canapeElements.colors.forEach((colors) => {
        console.log(colors);
        let chooseOption = document.createElement("option");

        chooseOption.innerHTML = `${colors}`;
        chooseOption.value = `${colors}`;

        canapeColors.appendChild(chooseOption);
        console.log(chooseOption);



    });

    
};

productDisplay();


// stocker les éléments dans le local storage

   

const addToCart = () => {

    let productLocalStorage = JSON.parse(localStorage.getItem("product"))
    let select = document.getElementById("colors")
    console.log(select.value);
    console.log(productLocalStorage);


    // assigner une couleur et une quantité au produit
    const productColorQuantity = Object.assign({}, canapeElements, {
        productColor: `${select.value}`,
        quantity: (document.getElementById("quantity")).value,
    })

    console.log(productColorQuantity);


    // stocker le produit dans le local storage sous forme de chaine de caracteres
    if (productLocalStorage == null) {

        productLocalStorage = [];
        productLocalStorage.push(productColorQuantity);

        console.log(productLocalStorage);

        localStorage.setItem("product", JSON.stringify(productColorQuantity));
    }



}

let buttonCart = document.getElementById("addToCart")
console.log(buttonCart);

buttonCart.addEventListener("click", addToCart);


// prix + €
