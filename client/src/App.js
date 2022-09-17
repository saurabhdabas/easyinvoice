import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Login from './pages/Login'
import Home from './pages/Home';
import ProtectedRoutes from './Hooks/useAuth';

import './App.css';

function App() {
  const [state,setState] = useState(['Dashboard']);
  let history = createBrowserHistory();
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
              <Home state={state} setState={setState} history={history}/>
            }
          />
          <Route path="/customers" 
            element={
              <Home state={state} setState={setState} history={history}/>
            }
          />
          <Route path="/customers/:id" 
            element={
              <Home state={state} setState={setState} history={history}/>
            }
          />
          <Route path="/invoices" 
            element={
              <Home state={state} setState={setState} history={history}/>
            }
          />
          <Route path="/invoices/:id" 
            element={
              <Home state={state} setState={setState} history={history}/>
            }
          />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
