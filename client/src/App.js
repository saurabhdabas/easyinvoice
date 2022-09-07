import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home';
import ProtectedRoutes from './Hooks/useAuth';
import CustomerInfoForm from './components/CustomerInfoForm';
import './App.css';

function App() {
  
  return (
    <div className="App">

      <Routes>
        <Route path="/" 
            element={
              <Login/>
            }
        />
        <Route path='/' 
          element={
            <ProtectedRoutes/>
          }
        >
          <Route path="/dashboard" 
            element={
              <Home/>
            }
          />
          <Route path="/customers" 
            element={
              <Home/>
            }
          />
          <Route path="/newclient" 
            element={
              <CustomerInfoForm/>
            }
          />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
