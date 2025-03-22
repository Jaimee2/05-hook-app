import { createRoot } from 'react-dom/client'
import './index.css'
import './08-useReducer/intro-reducer.js'
import MainApp from "./09-useContext/MainApp.jsx";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>


)
