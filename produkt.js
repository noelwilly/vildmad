const url = "https://pexwboaieovroxjkczsc.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(url + "/rest/v1/vildapi?select=navn,season,billeder,kategori,sankeland,subkategori&id=eq." + id, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector("h3").textContent = product[0].navn;

  document.querySelector(".vmPic").src = product[0].billeder;

  document.querySelector("h4").textContent = product[0].sankeland;
  document.querySelector(".kategori").textContent = product[0].kategori;

  document.querySelector(".lokationApi").textContent = product[0].subkategori;

  // seasons
  if (product[0].season.includes("Forår")) {
    document.querySelector(".season1").classList.add("seasonOn");
  }
  if (product[0].season.includes("Sommer")) {
    document.querySelector(".season2").classList.add("seasonOn");
  }
  if (product[0].season.includes("Efterår")) {
    document.querySelector(".season3").classList.add("seasonOn");
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
