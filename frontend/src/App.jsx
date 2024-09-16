import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import RezeptPage from './components/RezeptPage';
import CreateRezept from './components/CreateRezept';
import RezeptDetail from './components/RezeptDetail';
import EditRezept from './components/EditRezept';



function App() {
  

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RezeptPage/>}/>
        <Route path="/create" element={<CreateRezept/>}/>
        <Route path="/rezept/:id" element={<RezeptDetail/>}/>
        <Route path="/edit/:id" element={<EditRezept />} />
      </Routes>
    </>
  )
}

export default App
