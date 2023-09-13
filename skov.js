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
  copy.querySelector("h4").textContent = product.sankeland;
  copy.querySelector(".kategori").textContent = product.kategori;
  copy.querySelector(".vmPic").src = product.billeder;
  copy.querySelector(".lokationApi").textContent = product.subkategori;

  // seasons
  if (product.season.includes("Forår")) {
    copy.querySelector(".season1").classList.add("seasonOn");
  }
  if (product.season.includes("Sommer")) {
    copy.querySelector(".season2").classList.add("seasonOn");
  }
  if (product.season.includes("Efterår")) {
    copy.querySelector(".season3").classList.add("seasonOn");
  }

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

/* function showData(items) {
    console.log(items);
    items.forEach((element) => {
      //tjek om der er noget i kolonnen
      if (element.tags) {
        // hvis der er noget i kolonnen skal objekterne der indeholder "vand" vises
        if (element.tags.includes("forår")) console.log(element);
      }
    });
  } */
