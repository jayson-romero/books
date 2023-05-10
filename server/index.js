import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';

const app = express()
const port = '8800'

//connecting to database
const db = mysql2.createConnection({
   host: "localhost",
   user:"root",
   password:"iton1218",
   database:"test"
})

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
   res.json("hello this is the backend")
})

// READ ALL BOOKS 
app.get("/books", (req, res) => {
   const q = "SELECT * FROM test.books;"
   db.query(q, (err, data) => {
      if (err)  return res.json(err)
      return res.json(data)
   })
})

// CREATE INTO BOOKS 
app.post('/books', (req, res)=> {
   const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)"
   const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
   ]

   db.query(q,[values], (err,data) => {
      if(err) return res.json(err)
      return res.json("Book has been created")
   })
})

// DELETE INTO BOOKS 
app.delete("/books/:id", (req, res) => {
   const bookID = req.params.id
   const q = "DELETE FROM books WHERE id = ?"

   db.query(q,[bookID], (err,data) => {
      if(err) return res.json(err)
      return res.json("Book has been deleted")
   })
})

// UPDATE INTO BOOKS 
app.put("/books/:id", (req, res) => {
   const bookID = req.params.id
   const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ? "
   const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
   ];

   db.query(q,[...values,bookID], (err,data) => {
      if(err) return res.json(err)
      return res.json("Book has been updated")
   })
})




app.listen(port, ()=> {
   console.log(`connected to port! ${port}`)
})