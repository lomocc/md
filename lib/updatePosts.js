var path = require('path');
var glob = require("glob");
var fs = require('fs-extra');

let postsDir = path.join(__dirname, '..', '_posts');

console.log(postsDir);
// options is optional
glob("**/*.md", {cwd: postsDir}, function (err, files) {
  if(err){
    return;
  }
  let postLinks = files.map((fileName)=>{
    let arr = fileName.match(/(\d{4}-\d{2}-\d{2})-?(.*?)\.md/);
    if(arr){
      let date = arr[1];
      let title = arr[2];
      return `* [**${title}** ${date}](/${fileName}) ${date}`;
    }
  });

  let menuMdContent = `# 目录\n${postLinks.join('\n')}`;
  console.log(menuMdContent);

  fs.outputFile(path.join(postsDir, 'menu.md'), menuMdContent, err => {
    if(!err) {
      console.log('success')
    }
  });

});
module.exports = {};
