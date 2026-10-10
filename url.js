import url from 'url';

const myUrl = ('https://www/google.com/search?q=hello+world');


// // URL object
const urlObj = new URL(myUrl);
console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
params.append('limit', 10);
params.delete('limit');
console.log(params);
