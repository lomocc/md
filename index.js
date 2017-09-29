var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs-extra');
var commonmark = require("commonmark");
var formatString = require("./lib/formatString");
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

let projectDir = path.join(__dirname, './dist/www');
let tpl = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');

var app = express();
app.use(require('compression')(), express.static(projectDir));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/404', function(req, res) {
  res.end('404');
});
app.use('/', function(req, res) {
  let fileName = path.join(__dirname, '_posts', req.path);

  if(!/\.md$/.test(fileName)){
    fileName = `${fileName}.md`;
  }
  fs.readFile(fileName, 'utf8', (err, data)=> {
    if(err){
      res.end();
      return ;
    }
    var content = `<article class="markdown-body">${writer.render(reader.parse(data))}</article>`; // content is a String
    let HTML = formatString(tpl, {post_content: JSON.stringify(content)});
    res.type('html');
    res.end(HTML);
  });
});

app.listen(80, function () {
  var host = this.address().address;
  var port = this.address().port;

  console.log('listening at http://%s:%s', host, port);
});
