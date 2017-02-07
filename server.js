const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(8000,()=>{console.log('this shit works on 8k')});
