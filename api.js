import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [
    { id: 1, name: 'John Smith' },
    { id: 2, name: 'John Cena' },
    { id: 3, name: 'Johnthan Stanthan' },
    { id: 4, name: 'Will Smith' },
    { id: 5, name: 'Dj Khalid' },
];

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {

        const userId = req.url.split('/')[3];
        const user = users.find(user => user.id === parseInt(userId));
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(user));
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'User not found' }));
            res.end();
        }
    } else {    
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});