
import './App.css';
import {Navbar} from './components/Navbar'
import{Routes,Route} from 'react-router-dom'
import{Home} from './components/Home'
import{Login} from './components/Login'
import{Productcreate} from './components/Productcreate'
import {Productedit} from './components/Productedit'
import {Productinv} from './components/Productinv'



function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path={"/"} element={<Home/>}></Route>
      <Route path={"/login"} element={<Login/>}></Route>
      <Route path={"/product/create"} element={<Productcreate/>}></Route>
      <Route path={"/product/:id"} element={<Productinv/>}></Route>
      <Route path={"/product/:id/edit"} element={<Productedit/>}></Route>
    
      
    </Routes>
    </div>
  );
}

export default App;
