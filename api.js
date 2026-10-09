import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [
    { id: 1, name: 'John Smith' },
    { id: 2, name: 'John Cena' },
    { id: 3, name: 'Johnthan Stanthan' },
    { id: 4, name: 'Will Smith' },
    { id: 5, name: 'Dj Khalid' },
];

// Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

// Route handler for the GET /api/users
const getUsers = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

// Route handler for the GET /api/users/:id
const getUserById = (req, res) => {
    const userId = req.url.split('/')[3];
    const user = users.find(user => users.id === parseInt(userId));
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' })); 
    }
    res.end();
};

// Route not found handler
const notFound =(req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Not Found' }));
    res.end();
};


const server = createServer((req, res) => {
    logger(req, res, () => {
       jsonMiddleware(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
            getUsers(req, res);
       } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        getUserById(req, res);
       } else {
        notFound(req, res);
       }
    });
   });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});