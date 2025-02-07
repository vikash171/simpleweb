const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home1', (req, res) => {
    res.render('home1');
  });

  app.get('/home2', (req, res) => {
    res.render('home2');
  });
  app.get('/home3', (req, res) => {
    res.render('home3');
  });
app.get('/users', (req, res) => {
    res.send('Users page');
})


app.listen(3000, () => {
    console.log('http://localhost:3000');
});
