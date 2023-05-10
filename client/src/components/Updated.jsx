import axios from "axios";
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";


const Updated = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate() //to navigate to book after 
  const location = useLocation()  //to get the id
  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setBook( prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
      e.preventDefault()
      try {
          await axios.put("http://localhost:8800/books/"+ bookId, book)
          navigate('/')
      }catch(error) {
        console.log(error)
      }
  }

  return (
    <div>
         <h1>Update the Book</h1>
        <form className="flex flex-col gap-[40px] text-[30px] p-[40px]">
          <input 
          type="text" 
          placeholder="title"  
          onChange={handleChange} 
          name="title"
          className="p-[18px] w-[700px] border"/>

          <input
          type="text" 
          placeholder="desc"
          onChange={handleChange} 
          name="desc"
          className="p-[18px] w-[700px] border"/>

          <input 
          type="number" 
          placeholder="price"  
          onChange={handleChange}
          name="price"
          className="p-[18px] w-[700px] border"/>

          <input 
          type="text" 
          placeholder="cover"  
          onChange={handleChange} 
          name="cover"
          className="p-[18px] w-[700px] border"/>

          <button onClick={handleClick}
          className="text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          >Update</button>
        </form>
    </div>
  )
}

export default Updated