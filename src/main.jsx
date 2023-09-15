import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes, Route,Link} from "react-router-dom"
import Burger from './Components/Burger/Burger.jsx'
import HotDog from "./Components/HotDog/HotDog.jsx"
import Zakuski from './Components/Zakuski/Zakuski.jsx'
import Main from './Components/Main/Main.jsx'
import KomboMIx from "./Components/Kombo/kombo.jsx"
import LavashShaurma from "./Components/Shaurma/shaurma.jsx"
import Pistaria from "./Components/Pitsa/pitsa.jsx"
import VokNoodle from "./Components/Vok/vok.jsx"
import DesertMeal from "./Components/Desert/desert.jsx"
import Souses from "./Components/Sous/sous.jsx"
import { Provider } from 'react-redux'
import store from './store/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
        <Routes>
          <Route  path='/' element={<App />}>
            <Route exact path='/burger' element={< Burger />}/>
            <Route  path='/hotdog' element={<HotDog />}/>
            <Route  path='/zakuski' element={<Zakuski />}/>
            <Route  path='/kombo' element={<KomboMIx />}/>
            <Route  path='/shaurma' element={<LavashShaurma />}/>
            <Route  path='/pitsa' element={<Pistaria />}/>
            <Route  path='/vok' element={<VokNoodle />}/>
            <Route  path='/deserts' element={<DesertMeal />}/>
            <Route  path='/sous' element={<Souses />}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </React.StrictMode>
  </Provider>
)
