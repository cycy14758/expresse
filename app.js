const express = require('express');
const app = express();
const port = 3000;
const isWorkingHours=require("./middleware")

app.use(express.static('Public'));

app.set('view engine', 'pug');
app.use(isWorkingHours)
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/services', (req, res) => {
  res.render('service');
});

app.get('/', (req, res) => {
  res.render('home');
});

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server and listen on the specified port
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
