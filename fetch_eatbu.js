import https from 'https';

const url = "https://eatbu.com/jam-club?lang=en";

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /https:\/\/[^\s"'<>]+\.(jpg|jpeg|png)[\?\w=]*/g;
    const matches = data.match(regex);
    if (matches) {
       console.log([...new Set(matches)].slice(0, 10));
    } else {
       console.log("No images found");
    }
  });
});
