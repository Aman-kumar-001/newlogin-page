import Home from './component/home/home';
import Login from './component/login/login';
import Register from './component/register/register';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='/login' element={ <Login/>}></Route>
      <Route path='/register' element={ <Register/>}></Route>
    
    
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
