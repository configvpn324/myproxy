const express = require('express');
const app = express();

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('آدرس url= را وارد کنید');
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).send('خطا: ' + err.message);
  }
});

app.listen(3000, () => console.log('پروکسی روشن شد روی پورت 3000'));
