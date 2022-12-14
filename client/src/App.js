
import {BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import './index.css'

function App() {


  const {token, login, logout,userId} = useAuth()
  //transform in bool using !!
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value = {{
      token,login,logout,userId, isAuthenticated
    }}>
    <Router>
        {routes}
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
