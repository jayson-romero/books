import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Add = () => {

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook( prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
      e.preventDefault()
      try {
          await axios.post("http://localhost:8800/books", book)
          navigate('/')
      }catch(error) {
        console.log(error)
      }
  }

  return (
    <div className="form">
        <h1>Add New Book</h1>
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
          className="text-white bg-gradient-to-r from-sky-500 to-indigo-500"
          >Add</button>
        </form>
    </div>
  )
}

export default Add