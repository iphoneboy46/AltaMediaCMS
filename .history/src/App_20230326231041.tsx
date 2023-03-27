
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MenuBar from './components/Menu/MenuBar';
import { publicRoutes } from './Routes';

function App() {
  return (
    <div className="App">
     <div className="flex items-center">
        <div className="w-[20%]"><MenuBar /></div>
        <div className='w-[80%]'>
          <Routes>
            {
              publicRoutes.map((router,index)=>{
                const Page =router.component
    
                return(
                  <Route key={index} path={router.path} element={<Page />}></Route>
                )
              })
            }
          </Routes>
        </div>
     </div>
    </div>
  );
}

export default App;
