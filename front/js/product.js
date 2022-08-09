// récupérer l'ID du canapé (productID)
let product_id = window.location.search.split("?").join("");
console.log(product_id);

// let canapeElements = [];


// const fetchProduct = async () => {
//     await fetch(`http://localhost:3000/api/products/${product_id}`)
//         .then((res) => res.json())
//         .then((promise) => {
//             canapeElements = promise;
//             console.log(canapeElements);
//         });
// };


async function main() {
    try{
        let current_product = await getProductInfos(product_id);
        displayProductInfos(product_id);
        console.log(ok);
        
    }
    catch(error){
        console.log(error);
    }
}

main();

let getProductInfos = [];
 
const fetchProduct = async () => {
    await fetch(`http://localhost:3000/api/products/${product}`)
        .then((res) => res.json())
        .then((promise) => {
            getProductInfos = promise;
            console.log(getProductInfos);
        });
};




// insérer les éléménts du canapé
function displayProductInfos (product) {
    
    document.title = product.name;
    const productImage =
        document.createElement("img")
    document.querySelector(".item__img")
        .appendChild(productImage);
    productImage.src = product_id.imageUrl;
    productImage.alt = product_id.altTxt;;

    document.getElementById("title").innerHTML =
        `${product_id.name}`

        console.log(product);

    document.getElementById("price").innerHTML =
        `${product_id.price}`

    document.getElementById("description").innerHTML =
        `${product_id.description}`


    // récupérer et choisir couleurs du canapé

    let canapeColors = document.getElementById("colors");
    console.log(canapeColors);
    console.log(product_id.colors);

    product.colors.forEach((colors) => {
        console.log(colors);
        let chooseOption = document.createElement("option");

        chooseOption.innerHTML = `${colors}`;
        chooseOption.value = `${colors}`;

        canapeColors.appendChild(chooseOption);
        console.log(chooseOption);



    });

    
};

displayProductInfos(product_id);


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

        localStorage.setItem("product", JSON.stringify(productLocalStorage));
    }



}

let buttonCart = document.getElementById("addToCart")
console.log(buttonCart);

buttonCart.addEventListener("click", addToCart);


// prix + €
