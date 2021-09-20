const path = require('path')
const express = require('express');
const parser = require('body-parser');
const fs = require('fs')

let app = express();
app.set('port', 3000);

app.use(parser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/memory', (req, res) => {
    res.end();
})

app.post('/memory', function (req, res) {
  dumpPath = process.env.dumpPath;
  numFiles = process.env.numFiles;
  let lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum quam, finibus et turpis luctus, tempus euismod odio. Ut lobortis metus enim, vel molestie odio eleifend ac. Sed semper magna non convallis vestibulum. Donec vehicula justo eget tortor congue pellentesque. Donec cursus mi quis dictum facilisis. Curabitur non finibus lorem. Cras tincidunt dolor sit amet eros ultrices, vitae tincidunt leo imperdiet. Fusce non neque tempor, placerat ligula vel, vulputate lorem. Phasellus ipsum lectus, semper in felis sit amet, facilisis convallis velit. Aliquam pulvinar ex porta metus rutrum iaculis. Praesent nec sapien neque. Curabitur placerat maximus nunc ac facilisis. Cras iaculis viverra nisl, at vulputate lorem consequat quis. Nam non metus eget nisl pretium volutpat quis ac neque. In hac habitasse platea dictumst. Suspendisse vehicula feugiat elementum. Duis id consequat odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit eu diam pharetra feugiat.  "
  for (var i = 0; i < numFiles; i++) {
    fs.writeFileSync(`${dumpPath}/lorem_ipsum_${i+1}.txt`, lorem_ipsum, (err) => { 
      if (err) {
        console.log("Error:", err)
        throw err;
      }
      
    })
  }
  console.log(`${numFiles} files written.`)
  res.end()
})

app.listen(app.get('port'), ()=> {
  console.log('connected, listening on port number', app.get('port'));
})

