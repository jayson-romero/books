import './App.css'
import Books from './components/Books';
import Add from './components/Add';
import Update from './components/Updated';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<Books/>}/>
            <Route path='/update' element={<Update/>}/>
            <Route path='/add' element={<Add/>}/>
        </Routes>
    </div>
  )
}

export default App
