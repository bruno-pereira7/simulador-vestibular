import express from 'express';
import cors from 'cors';
import rotaQuestoes from './routes/questao.routes';

const app = express()

app.use(cors());
app.use(express.json());

app.use('/questoes', rotaQuestoes)

app.listen(3333, () => {
  console.log('API rodando em http://localhost:3333')
})