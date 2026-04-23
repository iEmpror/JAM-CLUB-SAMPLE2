import https from 'https';

const url = "https://www.google.pt/maps/place/Jam+Club/@38.7126972,-9.1487973,17z/data=!4m15!1m8!3m7!1s0xd19348002b7e7cd:0x77a77cebd3cc4e65!2sJam+Club!8m2!3d38.7126972!4d-9.1462224!10e2!16s%2Fg%2F11gfnd6snm!3m5!1s0xd19348002b7e7cd:0x77a77cebd3cc4e65!8m2!3d38.7126972!4d-9.1462224!16s%2Fg%2F11gfnd6snm";

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /https:\/\/lh5\.googleusercontent\.com\/p\/[a-zA-Z0-9_-]+/g;
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
