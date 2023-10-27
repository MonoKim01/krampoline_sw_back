const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
  const codeValue = process.env.CODE;
  
  if (codeValue) {
    res.send(`환경 변수 CODE의 값은: ${codeValue}`);
  } else {
    res.send('환경 변수 CODE가 설정되지 않았습니다.');
  }
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}에서 실행 중입니다.`);
});
