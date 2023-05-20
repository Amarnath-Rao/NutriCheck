const express = require('express');
const http = require('http');
const https = require('https');
const cors = require('cors');
const app = express();
const port = 3210;

app.use(cors());

app.get('/:command', (req, res) => {

  const { command } = req.params;

  const data = JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: command
      }
    ]
  });

  const options = {
    hostname: 'openai80.p.rapidapi.com',
    path: '/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '54df141db5msh2aac95101b50e9ap1632b0jsn877ec64b46af',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
      'Content-Length': data.length
    }
  };

   req = https.request(options, (apiRes) => {
    let chunks = [];

    apiRes.on('data', (chunk) => {
      chunks.push(chunk);
    });

    apiRes.on('end', () => {
      let result = Buffer.concat(chunks).toString();
      console.log(result);

      res.send(result);
    });
  });

  
  req.write(data);
  req.end();
});

http.createServer(app).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


