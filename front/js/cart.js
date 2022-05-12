let localStorageProduit = JSON.parse(localStorage.getItem("panier"));
alert(JSON.stringify(localStorageProduit));
console.log(localStorageProduit);
var str = window.location.href;
var url = new URL(str);
var idProd = url.searchParams.get("id");
let k = 0;
fetch("http://localhost:3000/api/products/" + idProd)
.then((response) => response.json())    
.then(test => {
	let prix = test.prix;
 	while(k < localStorageProduit.length)
 	{
        let articleProduit = document.createElement("article");
        document.querySelector("#cart__items").appendChild(articleProduit);
        articleProduit.className = "cart__item";
        articleProduit.setAttribute("data-id", localStorageProduit[k].idProduit);

        let imgProduit = document.createElement("div");
        articleProduit.appendChild(imgProduit);
        imgProduit.className = "cart__item__img";

        // image a mettre ici + alt + src
        
        let divProduit = document.createElement("div");
        articleProduit.appendChild(divProduit);
        divProduit.className = "cart__item__content";

        let divDescriptionProduit = document.createElement("div");
        divProduit.appendChild(divDescriptionProduit);
        divDescriptionProduit.className = "cart__item__content__description";

        // Nom produit a mettre ici

        let pCouleurProduit = document.createElement("p");
        divDescriptionProduit.appendChild(pCouleurProduit);
        pCouleurProduit.innerHTML = localStorageProduit[k].couleurProduit;

        let pPrixProduit = document.createElement("p");
        divDescriptionProduit.appendChild(pPrixProduit);
        pPrixProduit.innerHTML = prix;

        let produitParametre = document.createElement("div");
        divProduit.appendChild(produitParametre);
        produitParametre.className = "cart__item__content__settings";

        let divQuantiteProduit = document.createElement("div");
        produitParametre.appendChild(divQuantiteProduit);
        divQuantiteProduit.className = "cart__item__content__settings__quantity";
        
        let pQuantiteProduit = document.createElement("p");
        divQuantiteProduit.appendChild(pQuantiteProduit);
        pQuantiteProduit.innerHTML = "Qté : ";

        let inputQuantiteProduit = document.createElement("input");
        pQuantiteProduit.appendChild(inputQuantiteProduit);
        inputQuantiteProduit.value = localStorageProduit[k].quantiteProduit;
        inputQuantiteProduit.className = "itemQuantity";
        inputQuantiteProduit.setAttribute("type", "number");
        inputQuantiteProduit.setAttribute("min", "1");
        inputQuantiteProduit.setAttribute("max", "100");
        inputQuantiteProduit.setAttribute("name", "itemQuantity");

        let divDeleteProduit = document.createElement("div");
        produitParametre.appendChild(divDeleteProduit);
        divDeleteProduit.className = "cart__item__content__settings__delete";

        let supprimerProduit = document.createElement("p");
        divDeleteProduit.appendChild(supprimerProduit);
        supprimerProduit.className = "deleteItem";
        supprimerProduit.innerHTML = "Supprimer";
        supprimerProduit.addEventListener("click", () => {
  
            localStorage.clear()
            alert('Article supprimé.');

            location.reload();
    	});
        k++
	}
});

	// let quantiteProduit = document.querySelectorAll(".itemQuantity");
	// let l = 0;
	// while(l < quantiteProduit.length)
 //    {
 //        quantiteProduit[l].addEventListener("change" , (event) => {
 //            event.preventDefault();

        	
    
 //            location.reload();
 //        })
 //    }