import './App.scss';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/organisms/Navbar/Navbar';
function App() {
 
  return (
    <div className='App'>
       <Navbar/>
       <AllRoutes/>
    </div>
  );
}

export default App;
