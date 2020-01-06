const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'static')));

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
