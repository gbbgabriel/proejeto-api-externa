import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import apiRoutes from './routes/api'


const server = express();

dotenv.config();

server.use(express.json())

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.use(apiRoutes)

server.listen(process.env.PORT);