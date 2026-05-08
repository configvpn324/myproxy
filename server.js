const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send('❌ خطا: آدرس url= را وارد کنید. مثال: /proxy?url=https://google.com');
  }

  try {
    const response = await fetch(targetUrl);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send(`❌ خطا در دریافت سایت: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`✅ پروکسی روی پورت ${PORT} روشن شد`);
});
