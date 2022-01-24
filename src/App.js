import { useContext } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/auth' element={<AuthPage/>}>
            </Route>
            <Route path='/' element={<HomePage />}>
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
