import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from 'path';
import mainRoutes from './routes';
import { Request, Response } from "express";

const PORT = 3000;

dotenv.config();

const server = express();


server.set('view engine', 'mustache');

server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.render('pages/page-404');
});

server.listen(PORT, () => {
  console.log(`Express running at port: ${PORT}`);
});
