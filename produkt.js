const url = "https://pexwboaieovroxjkczsc.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(url + "/rest/v1/vildapi" + id, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  copy.querySelector(".produktside h3").textContent = product.navn;
  copy.querySelector(".produktside .vmPic").src = product.billeder;

  copy.querySelector(".produktside h4").textContent = product.sankeland;
  copy.querySelector(".produktside .kategori").textContent = product.kategori;

  copy.querySelector(".produktside .lokationApi").textContent = product.subkategori;

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
}

/*
billeder: "https://vildmadv2.vps.webdock.io/application/files/8916/2436/4262/Kantarel_ravarekort_app.png"​​
id: 278
kategori: "Svampe"
navn: "Kantarel, almindelig"
sankeland: "Løvskov"
season: '["Sommer", "Efterår"]'
subkategori: "Morbund" */
