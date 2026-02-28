const telefoneLoja = "554299956385";

const products = {
  1:{name:"Tênis Rosa Premium",price:"R$ 189,90",images:["img/nike.png","img/nike2.png","img/nike3.png"]},
  2:{name:"Tênis Branco Clean",price:"R$ 279,90",images:["img/tenis2/1.jpg","img/tenis2/2.jpg","img/tenis2/3.jpg"]},
  3:{name:"Tênis Nude Fashion",price:"R$ 239,90",images:["img/tenis3/1.jpg","img/tenis3/2.jpg","img/tenis3/3.jpg"]},
  4:{name:"Tênis Casual Rosé",price:"R$ 219,90",images:["img/tenis4/1.jpg","img/tenis4/2.jpg","img/tenis4/3.jpg"]},
  5:{name:"Tênis Branco Premium",price:"R$ 299,90",images:["img/tenis5/1.jpg","img/tenis5/2.jpg","img/tenis5/3.jpg"]},
  6:{name:"Tênis Minimal Chic",price:"R$ 259,90",images:["img/tenis6/1.jpg","img/tenis6/2.jpg","img/tenis6/3.jpg"]},
  7:{name:"Tênis Preto Street",price:"R$ 299,90",images:["img/tenis7/1.jpg","img/tenis7/2.jpg","img/tenis7/3.jpg"]},
  8:{name:"Tênis Branco Urbano",price:"R$ 279,90",images:["img/tenis8/1.jpg","img/tenis8/2.jpg","img/tenis8/3.jpg"]},
  9:{name:"Tênis Esportivo Black",price:"R$ 319,90",images:["img/tenis9/1.jpg","img/tenis9/2.jpg","img/tenis9/3.jpg"]},
  10:{name:"Tênis Casual Marrom",price:"R$ 289,90",images:["img/tenis10/1.jpg","img/tenis10/2.jpg","img/tenis10/3.jpg"]},
  11:{name:"Tênis Cinza Modern",price:"R$ 269,90",images:["img/tenis11/1.jpg","img/tenis11/2.jpg","img/tenis11/3.jpg"]},
  12:{name:"Tênis Branco Premium",price:"R$ 329,90",images:["img/tenis12/1.jpg","img/tenis12/2.jpg","img/tenis12/3.jpg"]}
};

let currentProduct = null;

function openModal(id, element) {
  const card = element;

 
  card.classList.add("active-click","shine");
  setTimeout(() => card.classList.remove("active-click","shine"), 300);

  setTimeout(() => {
    currentProduct = products[id];

    document.body.style.overflow = "hidden";
    document.getElementById("productModal").style.display = "flex";

    document.getElementById("productName").innerText = currentProduct.name;
    document.getElementById("productPrice").innerText = currentProduct.price;

    const mainImage = document.getElementById("mainImage");
    const thumbs = document.getElementById("thumbnails");

    mainImage.src = currentProduct.images[0];
    thumbs.innerHTML = "";

    currentProduct.images.forEach((img, index) => {
      const thumb = document.createElement("img");
      thumb.src = img;

      if(index === 0) thumb.classList.add("active");

      thumb.onclick = () => {
        mainImage.src = img;
        document.querySelectorAll(".thumbnails img")
          .forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
      };

      thumbs.appendChild(thumb);
    });
  }, 200);
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function buyWhatsApp() {
  const size = document.getElementById("sizeSelect").value;
  if (!size) {
    alert("Selecione o número do tênis");
    return;
  }

  const msg = `Olá! Quero comprar o ${currentProduct.name}, número ${size}, valor ${currentProduct.price}.`;
  window.open(`https://wa.me/${telefoneLoja}?text=${encodeURIComponent(msg)}`, "_blank");
}