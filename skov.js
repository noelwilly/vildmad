const url = "https://pexwboaieovroxjkczsc.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs";

fetch(url + "/rest/v1/vildapi?select=sankeland", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showSkovs);

function showSkovs(skovs) {
  skovs.forEach(showSkov);
}

function showSkov(skov) {
  // fanger template
  const template = document.querySelector("template").content;
  // kloner
  const clone = template.cloneNode(true);
  // ændre indhold
  clone.querySelector("a").href = `produktside.html?sankeland=${skov.sankeland}`;
  // appender
  document.querySelector(".category-container").appendChild(clone);
}
