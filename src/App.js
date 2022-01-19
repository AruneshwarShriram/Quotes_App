/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Nav from './comp/nav';
import Random from './comp/random';
import Home from "./pages/home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import People from './comp/eachperson';
import Topics from './comp/eachtopic';
import All from './pages/allquotes';
import Try from './comp/try';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />   
            <Route path="home" element={<Home/>}/>
              <Route path="people" element={<People/>} />
              <Route path="topics" element={<Topics/>} />
              <Route path="allquotes" element={<All/>}/>
              
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
