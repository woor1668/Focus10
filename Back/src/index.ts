import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// 미들웨어 설정 (예: JSON 파싱)
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
