import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import MyRouter from './MyRouter';
import {MovieController} from './context/MovieContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MovieController>
      <MyRouter />
    </MovieController>
  </BrowserRouter>
)
