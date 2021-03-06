let str = window.location.href;
let url = new URL(str);
let idProd = url.searchParams.get("id");
fetch("http://localhost:3000/api/products/" + idProd)
.then((response) => response.json())    
.then(test => { 
	let titreProduit = document.getElementById("title");  
	titreProduit.innerHTML = test.name;

	let prixProduit = document.getElementById("price");
	prixProduit.innerHTML = test.price;

	let descriptionProduit = document.getElementById("description");
	descriptionProduit.innerHTML = test.description;

	let img = document.createElement("img");
	let imgProduit = document.querySelector(".item__img");
	imgProduit.appendChild(img);
	img.setAttribute("src", test.imageUrl);
	img.setAttribute("alt", test.altTxt);  

	let j = 0;
	let couleurProduit = document.getElementById("colors");
		while(j < test.colors.length) 
		{
		    let color = document.createElement("option");
		    color.setAttribute("value", test.colors[j]);
		    color.innerHTML = test.colors[j];
		    couleurProduit.appendChild(color);
		    j++;
		}  
	});



document.getElementById("addToCart").addEventListener("click", ajoutPanier);

function ajoutPanier() {
	let str = window.location.href;
	let url = new URL(str);
	let idProd = url.searchParams.get("id");

	let arrayPanier = [];
    let idProduit = idProd;
    let couleurProduit = document.querySelector("#colors").value;
    let quantiteProduit = document.querySelector("#quantity").value;
    
    console.log(idProduit, couleurProduit, quantiteProduit);

    let produitPanier = {
        idProduit : idProduit,
        couleurProduit : couleurProduit,
        quantiteProduit  : quantiteProduit,
        // prixProduit : prixProduit
    };

    if (quantiteProduit != 0 && couleurProduit != 0) 
    {
    	arrayPanier = localStorage.getItem("panier");
    	console.log(arrayPanier);
    	// console.log(quantiteProduit, couleurProduit);
    	if (arrayPanier)
    	{
		    const panierPlein = arrayPanier.find(
          	(panier) => panier.idProduit === produitPanier.idProduit && panier.couleurProduit === produitPanier.couleurProduit
        	);
		    if (panierPlein) 
		    {
				let nouvelleQty = parseInt(arrayPanier.quantiteProduit) + parseInt(arrayPanier.quantiteProduit);
	          	arrayPanier.quantiteProduit = nouvelleQty;
	          	localStorage.setItem("panier", JSON.stringify(arrayPanier));
	          	alert("Ajout?? au panier ! (test1)"); 
		    }
		}
		else
		{
			arrayPanier.push(produitPanier);
			let panier = JSON.stringify(arrayPanier);
          	localStorage.setItem("panier", panier);
          	alert("Ajout?? au panier ! (test2)"); 
		}   
	}
	else
	{
		arrayPanier = [];
		arrayPanier.push(produitPanier);
	    let panier = JSON.stringify(arrayPanier);
	    localStorage.setItem("panier", panier);

	    alert("Ajout?? au panier !"); 
	}
}
