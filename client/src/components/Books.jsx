import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Books = () => {
  const [books, setBooks] = useState([]);


    // READ ALL BOOKS 
  useEffect(()=> {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllBooks()
  },[])

  //DELETE BOOK
  const handleDelete = async (id) => {
      try{
          await axios.delete("http://localhost:8800/books/"+id)
          window.location.reload() //to refresh the page
      }catch (error) {
        console.log(error)
      }
  }


  return (
    <div>
      <h1 className="bold pb-[40px]">Book Store</h1>
      <div className="books flex max-w-[1200px] flex-wrap justify-center pb-[40px]">
        {
          books.map((book)=> (
            <div className="book p-[20px] w-[300px] border border-white-500 m-[20px] flex flex-col gap-[10px]" key={book.id}>
              {book.cover && 
              <img src={book.cover} alt="cover image"
              className="w-full border h-[300px] mb-[20px]"
              />}
               <h2 className="text-[20px] font-bold">{book.title}</h2> 
               <p className="text-[16px] ">{book.desc}</p>
               <span>$ {book.price}</span>
                
               <Link to={`/update/${book.id}`} >
               <button className=" w-full text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                Update</button> 
                </Link>

               <button
               className=" text-white bg-gradient-to-r from-purple-500 to-pink-500"
               onClick={()=> handleDelete(book.id)}
               >
                 Delete</button>
            </div>
          ))
        }
      </div>
        <Link to="/add">
          <button className=" h-14 w-30 text-white bg-gradient-to-r from-sky-500 to-indigo-500">Add New Books</button>
        </Link>
    </div>
  )
}

export default Books