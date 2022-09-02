
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoutes from './Hooks/useAuth';
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
              <Dashboard/>
            }
          />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
