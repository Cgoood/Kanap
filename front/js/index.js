// récupérer les canapés depuis l'API

let canapeList = [];
const fetchCanape = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json()) 
    .then((promise) => {
        canapeList = promise;
        console.log(canapeList);
        });
};


// Afficher les canapés

const canapeDisplay = async () => {
    await fetchCanape();

    document.getElementById("items").innerHTML = canapeList.map((canape) =>
    `<a href="../html/product.html?${canape._id}">
    <article ${canape._id}>
    <img src="${canape.imageUrl}" alt="${canape.altTxt}"/>
    <h3> ${canape.name} </h3>
    <p> ${canape.description} </p>

    </article>
    </a>
    `
    )
    .join("");

    


};

canapeDisplay();

