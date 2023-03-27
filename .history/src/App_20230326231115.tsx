
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MenuBar from './components/Menu/MenuBar';
import { publicRoutes } from './Routes';

function App() {
  return (
    <div className="App">
      <MenuBar />
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
  );
}

export default App;
