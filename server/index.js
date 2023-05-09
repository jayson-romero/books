import express from 'express';
import mysql2 from 'mysql2';

const app = express()
const port = '8800'

const db = mysql2.createConnection({
   host: "localhost",
   user:"root",
   password:"iton1218",
   database:"test"
})

app.use(express.json())

app.get('/', (req, res) => {
   res.json("hello this is the backend")
})

app.get("/books", (req, res) => {
   const q = "SELECT * FROM test.books;"
   db.query(q, (err, data) => {
      if (err)  return res.json(err)
      return res.json(data)
   })
})

app.post('/books', (req, res)=> {
   const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
   const values = [
      req.body.title,
      req.body.desc,
      req.body.cover,
   ]

   db.query(q,[values], (err,data) => {
      if(err) return res.json(err)
      return res.json("Book has been created")
   })

})

app.listen(port, ()=> {
   console.log(`connected to port! ${port}`)
})