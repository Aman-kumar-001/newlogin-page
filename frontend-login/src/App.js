import { useState } from 'react';
import Home from './component/home/home';
import Login from './component/login/login';
import Register from './component/register/register';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


function App() {
  

  const [data , Setdata] = useState(false);

  const handleLogin = (isLoggedIn) => {
    Setdata(isLoggedIn);
  };

  const handleLogout = () => {
    Setdata(false); 
  };
   

  return (
    <BrowserRouter>
     
    <Routes>
      <Route path='/' element={ <Home data={data}  onLogout={handleLogout}/>}></Route>
      <Route path='/login' element={ <Login ondata={handleLogin}/>}></Route>
      <Route path='/register' element={ <Register/>}></Route>
    
    
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
