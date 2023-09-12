//https://pexwboaieovroxjkczsc.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs
fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/test_produkt", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  //items.forEach()
}

//function () {}
