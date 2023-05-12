import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express()
const port = '8800'


//middleware
app.use(express.json())
app.use(cors())
app.use('/',  postRoutes);




app.listen(port, ()=> {
   console.log(`connected to port! ${port}`)
})