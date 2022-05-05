async function getApi() {
    let produits = await fetch('http://localhost:3000/api/products');
    // console.log(produits.json());
    return produits.json();
}

async function afficherProduits() {
    let data = await getApi();
    let i = 0;
    while(i < data.length) {       
            let lienProduit = document.createElement("a");
            document.querySelector(".items").appendChild(lienProduit);
            lienProduit.href = `product.html?id=${data[i]._id}`;

            let articleProduit = document.createElement("article");
            lienProduit.appendChild(articleProduit);

            let imageProduit = document.createElement("img");
            articleProduit.appendChild(imageProduit);
            imageProduit.src = data[i].imageUrl;
            imageProduit.alt = data[i].altTxt;

            let nomProduit = document.createElement("h3");
            articleProduit.appendChild(nomProduit);
            nomProduit.classList.add("productName");
            nomProduit.innerHTML = data[i].name;

            let descriptionProduit = document.createElement("p");
            articleProduit.appendChild(descriptionProduit);
            descriptionProduit.classList.add("productName");
            descriptionProduit.innerHTML = data[i].description;

            i++
        }
    };
afficherProduits()