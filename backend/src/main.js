const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    service: 'Zafiro Residencial API',
    status: 'running',
  });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
