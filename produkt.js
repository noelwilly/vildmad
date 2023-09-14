const url = "https://pexwboaieovroxjkczsc.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(url + "/rest/v1/vildapi2?select=navn,season,billeder,kategori,sankeland,subkategori,beskrivelse,anvendelse&id=eq." + id, {
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

  document.querySelector(".box2 p").textContent = product[0].beskrivelse;
  document.querySelector(".box3 p").textContent = product[0].anvendelse;

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
anvendelse: "I Sydeuropa steger man velsmagende mælkehat hele i masser af olivenolie med hatten nedad. Du kan også flambere dem med kastanjer eller chili, eller bruge dem i en chutney med honning og abrikoser. Steg svampene og server dem lune på toastbrød - eller brug dem i en risotto med spinat, som fyld i en kraftig tomatsauce eller som ingrediens i en omelet. Velsmagende mælkehat egner sig også fortrinligt til at blive syltet og bevarer det markante, sprøde bid."
beskrivelse: "Granmælkehat er sjældent over 2-7 cm høj med en op til 10 cm bred, orange hat, der bliver mere tragtformet med alderen, og en skæring i den afgiver orange væske."
billeder: "https://vildmadv2.vps.webdock.io/application/files/8016/2437/1340/Granmaelkehat_ravarekort_app.png"
kategori: "Svampe"
navn: "Granmælkehat"
sankeland: "Nåleskov"
season: '["Sommer", "Efterår"]'
​​
subkategori: "Græs ved skovstier"
subkategori: "Morbund" */
