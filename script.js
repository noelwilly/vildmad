const url = "https://pexwboaieovroxjkczsc.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("sankeland");

fetch(url + "/rest/v1/vildapi?sankeland=eq." + category, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //LOOPER OG KALDER showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#vmProduktTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h3").textContent = product.navn;
  copy.querySelector(".vmPic").src = product.billeder;

  copy.querySelector(".seProd").setAttribute("href", `produkt.html?id=${product.id}`);

  // appende
  document.querySelector(".produktliste").appendChild(copy);
}

/*
billeder: "https://vildmadv2.vps.webdock.io/application/files/8916/2436/4262/Kantarel_ravarekort_app.png"​​
id: 278
kategori: "Svampe"
navn: "Kantarel, almindelig"
sankeland: "Løvskov"
season: '["Sommer", "Efterår"]'
subkategori: "Morbund" */
