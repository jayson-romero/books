import { db }from '../models/index.js'


export const getPosts = (req, res) => {
   res.send("BackEnd Works!")
}
export const getBooks = (req, res) => {

      const q = "SELECT * FROM test.books;"
         db.query(q, (err, data) => {
         if (err)  return res.json(err)
           return res.json(data)
        })

      }

export const addBooks = (req, res)=> {
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
}      


export const deleteBook = (req, res) => {
   const bookID = req.params.id
   const q = "DELETE FROM books WHERE id = ?"

   db.query(q,[bookID], (err,data) => {
      if(err) return res.json(err)
      return res.json("Book has been deleted")
   })
}

export const updatedBook = (req, res) => {
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
}