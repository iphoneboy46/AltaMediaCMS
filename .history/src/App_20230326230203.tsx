
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MenuBar from './components/Menu/MenuBar';
import { publicRoutes } from './Routes';

function App() {
  return (
    <div className="App">
      {/* <MenuBar /> */}
      <Home /> 
      <Routes>
        {
          publicRoutes.map((route,index)=>{
            return(
              <Route key={index}></Route>
            )
          })
        }
      </Routes>
    </div>
  );
}

export default App;
