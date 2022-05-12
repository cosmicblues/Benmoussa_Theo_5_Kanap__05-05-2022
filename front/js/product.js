var str = window.location.href;
var url = new URL(str);
var idProd = url.searchParams.get("id");
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
	var str = window.location.href;
	var url = new URL(str);
	var idProd = url.searchParams.get("id");

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
	    arrayPanier.push(produitPanier);

	    let panier = JSON.stringify(arrayPanier);
	    localStorage.setItem("panier", panier);

	    alert("Ajouté au panier !");    
	}
	else
	{
		alert("ajouter le prix et/ou la quantité");
	}
}
