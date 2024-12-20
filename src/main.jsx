import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import MyRouter from './MyRouter';
import {MovieController} from './context/MovieContext.jsx'
import { AuthController } from './context/AuthContext.jsx'
import { ProfileController } from './context/ProfileContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MovieController>
      <AuthController>
        <ProfileController>
          <MyRouter />
        </ProfileController>
      </AuthController>
    </MovieController>
  </BrowserRouter>
)
