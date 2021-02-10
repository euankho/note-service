const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs')
const marked = require('marked')

app.set('view engine', 'ejs')
app.use('/', express.static('public'));
app.use('/docs', express.static('public'));
let sidebar = {}

app.get("/", (req, res) => {
    res.redirect('/notes/ITGS/Unit-1')
})

let categories = fs.readdirSync('./notes/');
categories.sort((a, b) => {
  parseInt(a.split('_')[0]) - parseInt(b.split('_')[0])
})

categories.forEach(async (category) => {
  if (category === '.DS_Store') return 
  fs.readdir(`./notes/${category}/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      //check file
      if (!file.endsWith(".md")) return;
      //set sidebar category
      let cat = category.split('_')
      cat.shift()
      cat = cat.join('-')
      if (!sidebar[cat]) sidebar[cat] = []
      
      //get data
      let md = fs.readFileSync(`./notes/${category}/${file}`);
      md = marked(md.toString())
      let filename = file.replace('.md', '')
      //add sidebar
      sidebar[cat].push(filename)

      //add route
      app.get(`/notes/${cat.toLowerCase()}/${filename}`, (req, res) => {
        res.render('note', {md: md, active: filename, sidebar: sidebar});
      });
    });
  });
})



app.get("/docs", (req, res) => {
  res.send(`Redirecting...<script>location="\/docs\/introduction\/starting"</script>`)
});

let listener = app.listen(3000, function () {
  console.log(`Website started on port 3000`)
});