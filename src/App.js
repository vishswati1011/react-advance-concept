import { BrowserRouter as Router} from 'react-router-dom';
import AuthRoutes from './Routes/AuthRoutes.js';
import UnAuthRoutes from './Routes/UnAuthRoutes.js';
import { AuthContext} from './context/authContext.js';
import { useContext } from 'react';

function App() {

  const {isAuthenticate} = useContext(AuthContext)
  return (
    <Router>
        {isAuthenticate ? <AuthRoutes/>:<UnAuthRoutes/>}
    </Router>
  );
}

export default App;