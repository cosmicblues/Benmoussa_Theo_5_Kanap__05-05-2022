function dataProduit() {
	let titreProduit = document.getElementById("title");
	let prixProduit = document.getElementById("price");
	let descriptionProduit = document.getElementById("description");
	let couleurProduit = document.getElementById("colors");
	let imgProduit = document.querySelector(".item__img");
	let img = document.createElement("img");
	imgProduit.appendChild(img);

	var str = window.location.href;
	var url = new URL(str);
	var idProd = url.searchParams.get("id");
	let i = 0;

	fetch("http://localhost:3000/api/products/" + idProd)
	.then((response) => response.json())    
    .then(test => {
    console.log(test._id);    
    titreProduit.innerHTML = test.name;
    prixProduit.innerHTML = test.price;
    descriptionProduit.innerHTML = test.description;
    while(i < test.colors.length) {
    	img.setAttribute("src", test.imageUrl);
        img.setAttribute("alt", test.altTxt);  
        let color = document.createElement("option");
        color.setAttribute("value", test.colors[i]);
        color.innerHTML = test.colors[i];
        couleurProduit.appendChild(color);
        i++;
        }  
	});
}
dataProduit();