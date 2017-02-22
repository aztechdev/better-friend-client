let app = require('express')();

// return index
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8080);
