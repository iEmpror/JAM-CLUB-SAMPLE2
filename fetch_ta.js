import https from 'https';

const url = "https://www.tripadvisor.com/Restaurant_Review-g189158-d10243468-Reviews-Jam_Club-Lisbon_Lisbon_District_Central_Portugal.html";

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /https:\/\/media-cdn\.tripadvisor\.com\/media\/photo[^\s"']+/g;
    const matches = data.match(regex);
    if (matches) {
       console.log([...new Set(matches)]);
    } else {
       console.log("No images found");
    }
  });
}).on('error', err => {
  console.log("Error: " + err.message);
});
