// import fs from 'fs';
import fs from 'fs/promises';

// Read the file
// fs.readFile('./data.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//         console.error(data);   
// });

// // Read the file synchronously
// const data = fs.readFileSync('./data.txt', 'utf8');
// console.log(data);

// Read the file promise-based
// fs.readFile('./data.txt', 'utf8')
// .then(data => console.log(data))
// .catch(err => console.error(err));

// Read the file async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./data.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

readFile();


// Write to the file

const writeFile = async () => {
    try {
        const data = await fs.writeFile('./data.txt', 'Software engineer at Revolut!');
        console.log('File written successfully');  
    } catch (error) {
        console.error(error);
    }
}

writeFile();