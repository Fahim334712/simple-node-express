const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Wow I am really really very Excited with NodeMon');
})

const users = [
    { id: 0, name: 'Fahim', email: 'f.fag@gmail.com', phone: '03276435' },
    { id: 1, name: 'Hasan', email: 'f.fag@gmail.com', phone: '03276435' },
    { id: 2, name: 'Rabbi', email: 'f.fag@gmail.com', phone: '03276435' },
    { id: 3, name: 'Shorif', email: 'f.fag@gmail.com', phone: '03276435' },
    { id: 4, name: 'Matabbor', email: 'f.fag@gmail.com', phone: '03276435' },
    { id: 5, name: 'Akbor badol', email: 'f.fag@gmail.com', phone: '03276435' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting The Post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy took marka fazli');
})

app.listen(port, () => {
    console.log('listen to port', port);
})