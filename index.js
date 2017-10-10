const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/api', (req, res) => {
  res.json([
    {
      text: '1',
    },
    {
      text: '2',
    },
    {
      text: '3',
    },
    {
      text: '4',
    },
    {
      text: '5',
    },
  ]);
});

app.listen(3000, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('App listening on 3000!');
  }
});
